$( onReady );

function onReady(){

  $( '#add' ).on( 'click', collectInputOne );  






}

function collectInputOne(){
    // gather input from the DOM 
    let num1 = $( '#input1' ).val()

    // send input to server
    $.ajax({
        url: '/calculator',
        method: 'POST',
        data: ({num1}),
    }).then( function( response ){
        console.log( response )
    });
    };
