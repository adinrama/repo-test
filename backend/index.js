const Hapi = require("@hapi/hapi");
const HapiCors = require("hapi-cors");

const init = async () => {
  const server = Hapi.server({
    port: 3300,
    host: "127.0.0.1",
  });

  // CORS handling
  await server.register({
    plugin: HapiCors,
    options: {
      origins: ["*"],
    },
  });

  await server.start();
  console.log(`Server is running on ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
