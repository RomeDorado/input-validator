const response = require("../shared/lib/response");
const config = require("../shared/client/config");

module.exports.handler = async (event, context, callback) => {
  console.log(event);
  const parsedEventBody = JSON.parse(event.body);
  console.log("parsedEventBody", parsedEventBody);
  const { client } = event.queryStringParameters;
  console.log("client", client);

  console.log("config.CLIENT_CONFIG[client]", config.CLIENT_CONFIG[client]);
  if (!config.CLIENT_CONFIG[client]) {
    return response.json(callback, { message: "Unauthorized!" }, 401);
  }

  let { userInput } = parsedEventBody;

  try {
    console.log("userInput", userInput);
    if (userInput.length > 256) {
      console.log("LAGPAS NA");
      return response.json(callback, config.CLIENT_CONFIG[client].block, 200);
    }
    console.log("CLIENT_CONFIG[client]", config.CLIENT_CONFIG[client]);

    const data = config.CLIENT_CONFIG[client].ai;
    data["set_attributes"] = { user_input: userInput };
    response.json(callback, data, 200);
  } catch (error) {
    response.json(callback, null, 200);
    console.log(error);
  }
};
