const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const users = ['Ayuba',"Omale","Mubarak","Uman", "Hyedima", "Joshua", "Kiki"];

app.use(express.static(__dirname + "/www"));

app.get("/users", (req, res) => {
  let searchText = req.query.searchText;
  let result = users.filter(obj=>{
    return obj.toUpperCase().startsWith(searchText.toUpperCase());
  })
  res
    .status(200)
    .json({payload:result});
});

app.listen(9000, () => console.log("Server Running on http://localhost:9000"));

module.exports = app;
