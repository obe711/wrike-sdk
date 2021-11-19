# Wrike SDK

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
  const spaces = await wrike.spaces.wrike.spaces.GetSpaces();
  console.log(spaces);
})();
```

## API Documentation

[Wrike API Documentation](https://developers.wrike.com/overview)

## License

[MIT](https://choosealicense.com/licenses/mit/)
