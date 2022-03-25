const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
let items = ["Buy the Food", "Cook the Food", "Eat the Food"];
//making an array to hold the list of todos
let works = [];
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  let day = date.getDate();
  res.render("list", { listTitle: day, newListItems: items });
});
//for the work page
app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: works });
});
//for about page
app.get("/about", function (req, res) {
  res.render("about");
});

//for grabbing the data when we write/or do anything in any page
//it takes the data and send it to the rrequried pages and hence it redirect to get method

app.post("/", function (req, res) {
  //the data we have to grab is given a name which acts like the variable that contains the data

  let item = req.body.newItem;
  if (req.body.list === "Work") {
    works.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/"); //it redirect to the home route so that we get the item we get inside the post method
  }
});

app.listen(3000, function () {
  console.log("Server started at port 3000");
});
