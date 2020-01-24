var express = require('express');
var router = express.Router();
const swapi = require("swapi-node");


/* GET users listing. */
router.get('/', function(req, res, next) {

  Promise.all([
     
    Promise.resolve(swapi.get('https://swapi.co/api/planets/?page=1')),
    Promise.resolve(swapi.get('https://swapi.co/api/planets/?page=2')),
    Promise.resolve(swapi.get('https://swapi.co/api/planets/?page=3')),
    Promise.resolve(swapi.get('https://swapi.co/api/planets/?page=4')),
    Promise.resolve(swapi.get('https://swapi.co/api/planets/?page=5')),
    Promise.resolve(swapi.get('https://swapi.co/api/planets/?page=6')),
    Promise.resolve(swapi.get('https://swapi.co/api/planets/?page=7')),

  ]).then((all) => {
    res.send([...all[0].results, ...all[1].results, ...all[2].results, ...all[3].results,
    ...all[4].results, ...all[5].results, ...all[6].results])
  })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
