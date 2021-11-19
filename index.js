const Wrike = require("./src/Wrike");

require("dotenv").config();

const wrike = new Wrike({
  accessToken: process.env.PERMANANT_ACCESS_TOKEN
});

(async () => {
  const space = await wrike.users.QueryUser("KUAKVUVL")
  console.log(space);
})();