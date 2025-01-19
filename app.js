const express = require('express');
const app = express();

const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

const { msgRouter } = require('./routes/msgRouter.js');
app.use(msgRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on localhost:${port}/ ('/' can be omitted)`);
});