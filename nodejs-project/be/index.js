import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());

let user = [];

app.get("/user", (request, response) => {
  response.json(user);
});
const data = fs.readFileSync("db.json");
user = JSON.parse(data);
app.post("/", (request, response) => {
  user.push(request.body);
  fs.writeFileSync("db.json", JSON.stringify(user));
  console.log(user);
  response.send(user);
});
app.delete("/:index", (request, response) => {
  const index = parseInt(request.params.index);
  if (index >= 0 && index < user.length) {
    user.splice(index, 1);
    fs.writeFileSync("db.json", JSON.stringify(user));
    response.json(user);
  } else {
    console.log("be ajildgue");
  }
});
app.listen(3001, () => {
  console.log(`3001 hello`);
});
