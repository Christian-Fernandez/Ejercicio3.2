const express = require ("express");
const app = express();

const hello_routes = require("./routes/hello.js");
const task_routes = require("./routes/task.js");

app.use("/api", hello_routes);
app.use("/api", task_routes);

module.exports = app;

