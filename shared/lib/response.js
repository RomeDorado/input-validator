'use strict';

module.exports.json = (callback, body, status = 200) => {
  return callback(null, {
      statusCode: status,
      headers: {
        "Access-Control-Allow-Origin" : "*",
        "content-type": "application/json"
      },
      body: JSON.stringify(body)
  });
};
