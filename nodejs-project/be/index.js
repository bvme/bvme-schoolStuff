import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let user = [{ id: 7, name: "bill" }];

app.get("/user", (request, response) => {
  response.json(user);
});
app.post("/user", (request, response) => {
  user.push(request.body);
  console.log(user);
  response.send(user);
});
app.patch("/", (request, response)=>{
  arr.push([
    { name: "hello", id: 2 },
    { name: "hello", id: 2 },
  ]);
});
app.listen(3001, () => {
  console.log(`3001 hello`);
});
