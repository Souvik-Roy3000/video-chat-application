const express = require("express");
const route = express.Router();
const { authorize } = require("../functions/authFunc");

route.get("/", authorize, (req, res) => {
  // console.log(req);
  // console.log(res);
  res.render("index.ejs", { tabName: "Home Zooper", user: req.user });
});

module.exports = route;
