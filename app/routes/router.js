//IMPORT EXPRESS
const express = require('express');
//IMPORTING EXPRESS ROUTERS
//THIS METHOD IS BUILTINTO EXPRESS AND IT ALLOWS US TO CHAIN DIRECTORIES THE WAY WE WANT.
// example: http://localhost:4000/api/categories
//          https://localhost:4000/api/destinationinfo
const router = express.Router();


router.use('/destinationinfo', require('./api/destinationsroute'));



module.exports = router;