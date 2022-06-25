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
let subtractionArray = [];


// Addittion POST request 
app.post( '/addition', ( req, res) => {
    console.log( 'POST for addition', req.body );
    res.sendStatus( 201 );
    additionArray.push(req.body);

    
});

// Addition GET request
app.get( '/addition', function( req, res ){
    console.log( 'in get addition');
    for( let i = 0; i<additionArray.length; i++ ){
        additionArray[i].num = Number( additionArray[i].num )
        }
        let inputOneVal = additionArray[0].num;
        let inputTwoVal = additionArray[1].num;
        let result = {
            num: inputOneVal + inputTwoVal
        }
        additionArray.push( result );
        res.send( additionArray )
        console.log(additionArray)
        additionArray = [];
    });    












// run the server on the port we want
app.listen( PORT, function(){
    console.log( 'Server running on PORT', PORT)
});