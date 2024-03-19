//IMPORT MYSQL CONNECTION INFORMATION
const pool = require('../config/dbconfig')


//WHY ARE MAKING JAVASCRIPT CLASS AND CONSTRUCTOR?

class DestinationDao {
    
    constructor() {
        this.pool = pool;
    }

    findAll(req, res) {
        pool.query('SELECT * FROM destinationinfo', (err, rows, fields) => {
            console.log(rows)
            res.send(rows)
        })
    }


}

module.exports = DestinationDao;