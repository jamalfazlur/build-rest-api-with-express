import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.get("/", function(req, res){
  res.send("Hallo!");
});

app.get("/error", function(req, res){
  throw new Error("Oops, i made a mistake!");
});

app.use(function(req, res){
  res.status(400).send("Not found!");
});

app.use(function(err, req, res, next){
  console.log(err.stack);
  res.status(500).send(err.message);
});

app.listen(3000, function(){
  console.log("app listening on port 3000");
});