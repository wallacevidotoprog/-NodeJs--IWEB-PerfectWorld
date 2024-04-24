const express = require("express");
const appRouter = require("./src/routers");
const server = express();
const cors = require("cors");
require("dotenv").config({path:'./pw.env'});

server.use(express.json());
server.use(
  cors({
    origin: ["http://localhost:4200"],
    allowedHeaders: false,
    methods: "GET, POST, PUT, DELETE, OPTIONS, HEAD",
    credentials: true,
    "Access-Control-Allow-Origin": "*",
  })
);
server.use("/", require("express").static("./src/public"));
server.use("/api", appRouter);

server.listen(process.env.SERVER_PORT, (tt) => {
  
    console.log(
      `\x1b[33m[MyServer]\x1b[36m Server na porta ${process.env.SERVER_PORT}: http://localhost:${process.env.SERVER_PORT} \x1b[0m`
    );
  });