const fetch = require("node-fetch");

module.exports = function(event) {
  const url = process.env["NZBGETURL"];
  return fetch(url)
    .then(response => response.json())
    .then(responseData => {
      return {
        data: {
          versionNumber: responseData.result
        }
      };
    });
};
