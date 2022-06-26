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
//let history = [];



//  POST request 
app.post( '/calculator', ( req, res) => {
    console.log( 'POST for addition', req.body );
    res.sendStatus( 201 );
    let data = req.body;
    let operator = data.operator;
    let inputOne = Number(data.inputOne);
    let inputTwo = Number(data.inputTwo);

    calcArray.push( data );

    switch (operator){
        case '+':
            result = inputOne + inputTwo;
            //calcArray.push( result )
            console.log( result );
            break;
        case '-':
            result = inputOne - inputTwo;
            //calcArray.push( result )
            console.log( result );
            break;
        case 'x':
            result = inputOne * inputTwo;
            //calcArray.push( result )
            console.log( result );
            break;
        case '/':
            result = inputOne / inputTwo;
           // calcArray.push( result )
            console.log( result );
            break;
        default:
            console.log( 'No calculator' );
    }
    calcArray.push( { result });
    
    
});


// GET request
app.get( '/calculator', function( req, res ){
    console.log( 'in get caculator');
    res.send( calcArray );
    calcArray = [];

    res.sendStatus( 201 );
});    












// run the server on the port we want
app.listen( PORT, function(){
    console.log( 'Server running on PORT', PORT)
});