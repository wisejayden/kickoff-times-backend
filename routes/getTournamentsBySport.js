let express = require("express");
let router = express.Router();
let axios = require("axios");
/* GET Sport Leagues. */
router.get("/:sport", (req, res, next) => {
  const sport = req.params.sport;
  axios
    .get(`${req.app.get("api")}/search_all_leagues.php?s=${sport}`)
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
