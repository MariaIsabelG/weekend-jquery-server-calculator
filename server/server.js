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

let calcArray = [];
//let subtractionArray = [];


//  POST request 
app.post( '/calculator', ( req, res) => {
    console.log( 'POST for addition', req.body );
    res.sendStatus( 201 );
    calcArray.push(req.body);

  
});


//  GET request
app.get( '/calculator', function( req, res ){
    console.log( 'in get caculator');
    
    // let inputOne =  Number(calcArray.inputOne);
    // let inputTwo = Number(calcArray.inputTwo);
    // let result;
    // switch (operator){
    //     case '+':
    //         result = inputOne + inputTwo;
    //         break;
    // }
        res.send( {operator} );
        console.log(operator);
    });    












// run the server on the port we want
app.listen( PORT, function(){
    console.log( 'Server running on PORT', PORT)
});