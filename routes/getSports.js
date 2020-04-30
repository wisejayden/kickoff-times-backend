let express = require("express");
let router = express.Router();
let axios = require("axios");
/* GET all sports. */
router.get("/", (req, res, next) => {
  axios
    .get(`${req.app.get("api")}/all_sports.php`)
    .then(data => {
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
