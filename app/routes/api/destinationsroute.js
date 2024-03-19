//THIS CONTAINS ALL THE SUB ROUTES FOR DESTIONATION MYSQL TABLE

const daoClass = require('../../dao/destinationdao')
const dao = new daoClass()

const express = require('express')
const router = express.Router();

//THIS ROUTER UNDER LOOKS LIKE THIS:
// ex. localhost:4000/api/destinationinfo
router.get('/', (req, res) => {
    dao.findAll(req, res);
})


module.exports = router;