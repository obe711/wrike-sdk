# wrike-sdk

[![npm version](https://img.shields.io/npm/v/wrike-sdk.svg?style=flat-square)](https://www.npmjs.org/package/wrike-sdk)
[![install size](https://packagephobia.now.sh/badge?p=wrike-sdk)](https://packagephobia.now.sh/result?p=wrike-sdk)
[![npm downloads](https://img.shields.io/npm/dm/wrike-sdk.svg?style=flat-square)](http://npm-stat.com/charts.html?package=wrike-sdk)

SDK for the Wrike v4 API

## Installation

You can install using Yarn or NPM.

```bash
  npm install wrike-sdk
```

## Usage/Examples

```javascript
const Wrike = require("wrike-sdk");

const wrike = new Wrike({
  accessToken: "YOUR_WRIKE_ACCESS_TOKEN",
});

(async () => {
  const spaces = await wrike.spaces.GetSpaces();
  console.log(spaces);
})();
```

## API Documentation

[Wrike API Documentation](https://developers.wrike.com/overview)

## License

[MIT](https://choosealicense.com/licenses/mit/)
