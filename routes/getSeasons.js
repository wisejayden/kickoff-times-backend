let express = require("express");
let router = express.Router();
let axios = require("axios");
/* GET all sports. */
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  axios
    .get(`${req.app.get("api")}/search_all_seasons.php?id=${id}`)
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
