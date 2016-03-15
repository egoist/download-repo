# download-repo [![NPM version](https://img.shields.io/npm/v/download-repo.svg)](https://npmjs.com/package/download-repo) [![NPM downloads](https://img.shields.io/npm/dm/download-repo.svg)](https://npmjs.com/package/download-repo) [![Build Status](https://img.shields.io/circleci/project/egoist/download-repo/master.svg)](https://circleci.com/gh/egoist/download-repo)

> Download github repo with ease.

## Install

```bash
$ npm install --save download-repo
```

## Usage

```js
const downloadRepo = require('download-repo')

// download egoist/tooling's master branch archive
downloadRepo('egoist/tooling', {target: 'tooling'})
  .then(() => {
    console.log('done, `cd tooling` to check out more!')
  })

// download reactjs/redux by tag v4.0.0
downloadRepo('reactjs/redux', {target: 'redux', tag: 'v4.0.0'})
  .then(() => {
    console.log('done, `cd redux` to check out more!')
  })
```

## API

### downloadRepo(repo, [options])

#### repo

Type: `string`

User's repo, format like `owner/repo`

#### options

##### target

Type: `string`  
Default: the original filename, format like `reponame-[branch|tag]`

The target name.

##### dir

Type: `string`  
Default: `process.cwd()`

The directory to move the target to.

##### branch

Type: `string`  
Default: `master`

The branch to download.

##### tag

Type: `string`

The tag to download, will override `branch` if set.

##### quiet

Type: `boolean`  
Default: `false`

Omit the progress bar when downloading.

## License

MIT © [EGOIST](https://github.com/egoist)
