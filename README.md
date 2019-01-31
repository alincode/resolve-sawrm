# resolve ipfs

![Travis](https://img.shields.io/travis/alincode/resolve-sawrm.svg)
[![codecov](https://codecov.io/gh/alincode/resolve-sawrm/branch/master/graph/badge.svg)](https://codecov.io/gh/alincode/resolve-sawrm)![npm downloads](https://img.shields.io/npm/dt/resolve-sawrm.svg)
[![Dependency Status](https://img.shields.io/david/alincode/resolve-sawrm.svg?style=flat)](https://david-dm.org/alincode/resolve-sawrm)

### Install

```sh
npm install resolve-sawrm
```

### Usage

* parser

```js
const resolve = require('resolve-sawrm');
const path = 'http://raw.githubusercontent.com/OpenZeppelin/openzeppelin-solidity/master/contracts/math/SafeMath.sol';
let content = await resolve.parser(path);
```

## License
MIT © [alincode](https://github.com/alincode/resolve-sawrm)