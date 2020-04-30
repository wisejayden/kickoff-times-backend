let express = require("express");
let router = express.Router();
let axios = require("axios");
/* GET all sports. */
router.get("/:sport/:date", (req, res, next) => {
  const {sport, date} = req.params;
  console.log("?", `${req.app.get("api")}/eventsday.php?d=${date}&s=${sport}`);
  axios
    .get(`${req.app.get("api")}/eventsday.php?d=${date}&s=${sport}`)
    .then(response => {
      console.log("datedtate", response.data);
      res.json({
        success: true,
        data: response.data
      })
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
