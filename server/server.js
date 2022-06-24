// Import express
const express = require( 'express' );
const bodyParser = require( 'body-parser' );


// Make an instance of a server
const app = express();
const PORT = 5000;

// Serve Static Files
app.use( express.static( 'server/public' ) );

// Set up middlewares
app.use(bodyParser.urlencoded({ extended: true }));

// Addittion POST request 
app.post( '/calculator', ( req, res) => {
    console.log( 'POST /inventory', req.body );

    res.sendStatus( 201 );
});









// run the server on the port we want
app.listen( PORT, function(){
    console.log( 'Server running on PORT', PORT)
});