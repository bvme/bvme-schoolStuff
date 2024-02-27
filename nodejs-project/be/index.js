import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());

let user = [];

// get

app.get("/", (request, response) => {
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

app.delete("/id", (req, res) => {
  const id = req.params.id;
  for (i = 0; i < user.length; i++) {
    if (user[i].id == id) {
      user.splice(i, 1);
      break;
    }
  }
  res.send();
});

// listen

app.listen(8080, () => {
  console.log(`8080 hello`);
});
