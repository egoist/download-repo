import test from 'ava'
import exists from 'path-exists'
import execa from 'execa'
import fn from './'

test('master', async t => {
  await fn('egoist/tooling', {target: 'temp'})
  t.true(exists.sync('temp/cli.js'))
})

test('tag', async t => {
  await fn('egoist/tooling', {target: 'temp2', tag: 'v0.13.2'})
  t.true(exists.sync('temp2/try-it-out.md'))
})

test('branch', async t => {
  await fn('EGOIST-robot/camelcase-keys', {target: 'temp3', branch: 'issue-1-exclude-keys'})
  t.pass()
})

test('dir', async t => {
  await execa.shell('mkdir tempfolder')
  await fn('egoist/tooling', {dir: 'tempfolder', target: 'temp', tag: 'v0.13.2'})
  t.true(exists.sync('tempfolder/temp/try-it-out.md'))
})
