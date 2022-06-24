$( onReady );

function onReady(){

  $( '#add' ).on( 'click', collectInputOne );
  $( '#equal' ).on( 'click', collectInputTwo ); 






}

function collectInputOne(){
    // gather input from the DOM 
    let num = $( '#input1' ).val()

    // send input to server
    $.ajax({
        url: '/calculator',
        method: 'POST',
        data: ({num}),
    }).then( function( response ){
        console.log( response )
    });
    };

    function collectInputTwo(){
        // gather input from the DOM 
        let num = $( '#input2' ).val()
    
        // send input to server
        $.ajax({
            url: '/calculator',
            method: 'POST',
            data: ({num}),
        }).then( function( response ){
            console.log( response )
        });
        };