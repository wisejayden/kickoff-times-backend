let express = require("express");
let router = express.Router();
let axios = require("axios");
/* GET all sports. */
router.get("/:id/:index", (req, res, next) => {
  const {id, index} = req.params;
  axios
    .get(`${req.app.get("api")}/lookupteam.php?id=${id}`)
    .then(data => {
      res.json({
        success: true,
        data: data.data,
        index: index
      })
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
