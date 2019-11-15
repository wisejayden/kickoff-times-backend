let express = require("express");
let router = express.Router();
let axios = require("axios");
/* GET Sport Leagues. */
router.get("/:id/:season", (req, res, next) => {
  const {id, season} = req.params;
  // console.log(`${req.app.get("api")}/eventsseason.php?id=${id}&s=${season}`);
  axios.all([
    axios.get(`${req.app.get("api")}/eventsseason.php?id=${id}&s=${season}`),
    axios.get(`${req.app.get("api")}/lookup_all_teams.php?id=${id}`)
  ])
  .then(axios.spread( (seasonRes, teamsRes) => {
    // console.log("backend response?", seasonRes.data, teamsRes.data)
    res.json({
      success: true,
      seasonRes: seasonRes.data,
      teamsRes: teamsRes.data
    })
  }));

});

module.exports = router;
