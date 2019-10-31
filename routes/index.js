let express = require("express");
let router = express.Router();
let axios = require("axios");
/* GET home page. */
router.get("/", (req, res, next) => {
  axios
    .get(req.app.get("api") + "/all_sports.php")
    .then(res => {
      console.log("HERE", res.data);
      res.render("index", { title: res.data });
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
