let express = require("express");
let router = express.Router();
let axios = require("axios");
/* GET all sports. */
router.get("/", (req, res, next) => {
  console.log("hello?");
  axios
    .get(`${req.app.get("api")}/all_sports.php`)
    .then(data => {
      console.log("data", data.data);
      res.json({
        success: true,
        data: data.data
      })
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
