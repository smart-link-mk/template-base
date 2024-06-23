const AdmZip = require("adm-zip");
const package = require("./package.json");
const { schema } = require("./config.json");
const FormData = require("form-data");
const zip = new AdmZip();
const fetch = require("node-fetch");
zip.addLocalFolder("template");

const [, , ...owners] = process.argv;
const { name, version } = package;

zip.toBufferPromise().then((zipBuffer) =>
  Promise.all(
    owners.map(async (apiKey) => {
      const { jwt } = await fetch(
        "https://api.smartlink.mk/auth/api/authorize?apiKey=" + apiKey,
      ).then((r) => r.json());

      const { ok: templateCreated } = await fetch(
        "https://api.smartlink.mk/templates",
        {
          method: "post",

          headers: {
            Authorization: "Bearer " + jwt,
            "Content-Type": "application/json",
          },

          body: JSON.stringify({ name }),
        },
      );

      if (templateCreated) {
        console.info("Created template: " + name);
      }

      const formData = new FormData();
      const headers = formData.getHeaders();

      headers["Authorization"] = "Bearer " + jwt;
      formData.append("jsonSchema", JSON.stringify(schema));
      formData.append("version", version);
      formData.append("files[]", zipBuffer, "archive.zip");

      const res = await fetch(
        `https://api.smartlink.mk/templates/${name}/versions`,
        {
          method: "POST",
          headers: headers,
          body: formData,
        },
      );

      console.info(res.status, res.statusText);
    }),
  ),
);
console.log(name, version, owners);
