const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const apiRouter = require("./app/routing/apiRoutes.js");
const htmlRouter = require("./app/routing/htmlRoutes.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(apiRouter);
app.use(htmlRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});