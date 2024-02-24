import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());

var user = [];

// get

app.get("/user", (request, response) => {
  response.json(user);
});

// post

const data = fs.readFileSync("db.json");
user = JSON.parse(data);
app.post("/", (request, response) => {
  user.push(request.body);
  fs.writeFileSync("db.json", JSON.stringify(user));
  console.log(user);
  response.send(user);
});

// delete

app.delete("/:user", (request, response) => {
  const index = parseInt(request.params.index);
  if (index >= 1 ) {
    user.splice(index, 1);
    response.json(user);
  } else {
    console.log("be ajildgue");
  }
});

// listen

app.listen(3001, () => {
  console.log(`3001 hello`);
});
