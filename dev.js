const express = require("express");
const { Liquid } = require("liquidjs");
const config = require("./config.json");
var validate = require("jsonschema").validate;
const app = express();

validate(config.context, config.schema, { throwAll: true });

const liquid = new Liquid();

app.use("/template", express.static("template"));

app.get("/", (_, res) => {
  liquid
    .renderFile("./template/index.liquid", {
      templateBaseUrl: "/template/",
      context: config.context,
    })
    .then((v) => res.setHeader("Content-Type", "text/html").send(v));
});

app.listen(8000, () => console.log("Development server running on port 8000"));
