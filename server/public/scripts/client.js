$( onReady );

function onReady(){

  $( '#add' ).on( 'click', collectInputOne );  






}

function collectInputOne(){
    // gather input from the DOM 
    let num1 = $( '#input1' ).val();
    console.log( num1 );

    // send input to server
    $.ajax({
        url: '/calculator',
        method: 'POST'
    }).then( function( response ){
        console.log( response )
    });
    };
