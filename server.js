// const jsonServer = require("json-server");
// const app = jsonServer.create();
// const path = require("path");
// const express = require("express");
// const middlewares = jsonServer.defaults();
// const router = jsonServer.router("db.json");
// const port = 8000;

// app.use("/cities", middlewares, router);
// app.use(express.static(path.join(__dirname, "dist")));

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "dist", "index.html"));
// });

// server.listen(port);

// // index.js
const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.status(200).json("Welcome, your app is working well");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Export the Express API
module.exports = app;
