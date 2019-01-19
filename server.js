import express from "express";
const app = express();

app.use(express.static("template"));

app.listen(8080, () => {
  console.log("server is connected on port 8080");
});
