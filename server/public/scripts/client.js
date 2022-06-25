$( onReady );

function onReady(){

  $( '#add' ).on( 'click', collectInputOne );
  $( '#equal' ).on( 'click', collectInputTwo ); 






}




function collectInputOne(){
    // gather input from the DOM 
    let num = $( '#input1' ).val();

    // send input to server
    $.ajax({
        url: '/addition',
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
            url: '/addition',
            method: 'POST',
            data: ({num}),
        }).then( function( response ){
            console.log( response )
            getResult();

        });
        };

function getResult(){
    $.ajax({
        url: '/addition',
        method: 'GET'
    }).then( function( response ){
        console.log( response );
        renderToDom( response );
    });
        console.log( 'end of getResult')
    };


    function renderToDom( anArray ){
        $( '#result' ).empty();
        $( '#result').append( `<span>${anArray[2]}</span>`);
        $( '#history').append( `<li>${anArray[0]} + ${anArray[1]} = ${anArray[2]}</li>`);
        };

// LEFT OFF: need to append the whole array to the DOM to show the history 