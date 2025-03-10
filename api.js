const contentful = require("contentful");

const client = contentful.createClient({
  space: "0jzoq94u7hbn",
  accessToken: "H7ev4BkOk-uQ9a6FVvCETjXEKBPoBHeJkD7T26vnLMA",
});

client
  .getEntries()
  .then((response) => console.log(response.items))
  .catch((error) => console.error(error));
