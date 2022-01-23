const Wrike = require("./src/Wrike");

require("dotenv").config();

const wrike = new Wrike({
  accessToken: process.env.PERMANANT_ACCESS_TOKEN
});

(async () => {
  // const spaces = await wrike.spaces.GetSpaces();
  // console.log(spaces);

  // const folder = await wrike.folders.GetFoldersByIds(["IEAEUBYLI4XKDPKM"])
  // console.log(JSON.stringify(folder, null, 2))
  // const webhooks = await wrike.webhooks.CreateAccountWebhook({
  //   hookUrl: "https://gpqb.ngrok.io/v1/wrike/webhook",
  //   events: ["FolderCreated", "FolderDeleted"]
  // })
  // console.log(webhooks);
  //const webhooks = await wrike.webhooks.DeleteWebhookById('IEAEUBYLJAAA6OPY');
  //const webhooks = await wrike.webhooks.GetWebhooks();
  //console.log(webhooks);
  // try {
  // const spaces = await wrike.spaces.GetSpace("IEAEUBYLI4YK2AIZ");
  // console.log(spaces.data[0]);
  //   const spaceId = spaces.data[0].id;
  //   const title = spaces.data[0].title;

  //   console.log(spaceId, title)
  // } catch (ex) {
  //   console.log("Not a space");
  // }
  // const fields = await wrike.tasks.
  // console.log(JSON.stringify(fields, null, 2))

})();


// {
//   "folderId": "IEAEUBYLI4YKZCDF",
//   "webhookId": "IEAEUBYLJAAA6OOU",
//   "eventAuthorId": "KUAICDJL",
//   "eventType": "FolderCreated",
//   "lastUpdatedDate": "2021-12-22T21:06:41Z"
// }