const express = require("express");
const route = express.Router();

route.get("/panel", (req,res)=>{
    res.render("panel.ejs");
})

module.exports = route;