'use strict'
const path = require('path')
const co = require('co')
const cwd = require('cwd')
const pget = require('pget')
const tempDir = require('tempdir')
const pify = require('pify')
const mv = require('mv')
const extract = require('extract-zip')

module.exports = co.wrap(function* (repo, opts) {
  opts = opts || {}
  const tag = opts.tag || opts.branch || 'master'
  const destDir = cwd(opts.dir || '')
  const destName = opts.target || repo.replace(/\//, '-')

  const regexMatchRepo = /([^.]+)\/([^.]+)/
  const matchRepo = repo.match(regexMatchRepo)
  // const userName = matchRepo[1]
  const repoName = matchRepo[2]

  // zip url
  const url = `https://github.com/${repo}/archive/${tag}.zip`

  const dir = yield tempDir()
  yield pget(url, {target: `${destName}.zip`, dir, quiet: opts.quiet})
  const source = `${dir}/${destName}.zip`
  yield pify(extract)(source, {dir})
  yield pify(mv)(`${dir}/${repoName}-${trim(tag)}`, path.join(destDir, destName))

  function trim(tag) {
    if (opts.tag) {
      return tag.substr(1)
    }
    return tag
  }
})
