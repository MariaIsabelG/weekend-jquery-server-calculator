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
app.post( '/calculator', ( req, res) => {
    console.log( 'POST for inputs', req.body );
    res.sendStatus( 201 );
    additionArray.push(req.body)

    
});

// GET request
app.get( '/inventory', function( req, res ){
    console.log( 'in get inventory');
    addition( additionArray  )
    res.send( {result} );
});


function addition( anyArray ){
    let num1 = anyArray[0].num
    let num2 = anyArray[1].num
    if(anyArray){
    let result = num1 + num2;
    return result
    }
};








// run the server on the port we want
app.listen( PORT, function(){
    console.log( 'Server running on PORT', PORT)
});