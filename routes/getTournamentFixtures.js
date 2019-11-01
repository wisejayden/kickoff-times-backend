let express = require("express");
let router = express.Router();
let axios = require("axios");
/* GET Sport Leagues. */
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  console.log("ID", `${req.app.get("api")}/lookupleague.php?id=${id}`);
  axios
    .get(`${req.app.get("api")}/lookupleague.php?id=${id}`)
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
