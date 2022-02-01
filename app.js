const express = require ("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

const hello_routes = require("./routes/hello.js");
const task_routes = require("./routes/task.js");

app.use("/api", hello_routes);
app.use("/api", task_routes);

module.exports = app;

