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

let additionArray = [];


// Addittion POST request 
app.post( '/addition', ( req, res) => {
    console.log( 'POST for addition', req.body );
    res.sendStatus( 201 );
    additionArray.push(req.body);

    
});

// Addition GET request
app.get( '/addition', function( req, res ){
    console.log( 'in get addition');
        let num1 = additionArray[0].num;
        let num2 = additionArray[1].num;
        let num3 = Number(num1 + num2);
        additionArray.push(num3);
        res.send( additionArray )
        additionArray = [];
    });    












// run the server on the port we want
app.listen( PORT, function(){
    console.log( 'Server running on PORT', PORT)
});