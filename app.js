const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine','ejs');
items = ["Buy Food", "Cook Food", "Eat Food"];


app.get("/",function(req, res){
console.log(req.statusCode);
options = {
    weekday:"long",
    day: "numeric",
    month: "long"
}
var today = new Date();
var day = today.toLocaleDateString("en-US",options);

res.render("list",{dayType: day,newItem:items});
});


app.post("/",function(req,res){
    item = req.body.newItem;
    items.push(item);
    console.log(items)
    res.redirect("/");
})
 
app.listen(process.env.PORT||3000,function(){
console.log("server is running ");
}
);