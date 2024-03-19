//IMPORT EXPRESS TO HELP MAKE OUR WEB API SERVER.
const express = require('express');
//THIS IS A VARIABLE WE'LL CALL IN ORDER TO CALL AN EXPRESS METHOD/FUNCTION THE PACKAGE HAS.
const app = express();
//THE LOCALHOST PORT WE'LL USE.
const port = 4000;
//IMPORT OUR router.js CODE
const router = require('./app/routes/router')


//SENDS THIS TEXT TO THE MAIN PAGE, BECAUSE THE '/' TELLS THE DIRECTORY
// app.get('/', (req, res) => {
//     res.send('Why ya bloody here.')
// })



//ANYTIME THE SERVER RUNS THIS WILL RUN IF NOTHING GOES WRONG
app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})


//OUR NEW DIRECTORY FOR GET/POST REQUEST
app.use('/api', router);