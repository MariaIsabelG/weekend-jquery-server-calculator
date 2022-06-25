$( onReady );

function onReady(){

  $( '#add' ).on( 'click', additionInputOne );
  $( '#equal' ).on( 'click', additionInputTwo ); 






}

function additionInputOne(){
    // gather input from the DOM 
    const inputOne = {
        num: $( '#input1' ).val()
    }

    // send input to server
    $.ajax({
        url: '/addition',
        method: 'POST',
        data: inputOne,
    }).then( function( response ){
        console.log( response )
    });
};

function additionInputTwo(){
        // gather input from the DOM 
        const inputTwo = {
            num: $( '#input2' ).val()
        }
    
        // send input to server
        $.ajax({
            url: '/addition',
            method: 'POST',
            data: inputTwo,
        }).then( function( response ){
            console.log( response )
            getAdditionResult();

        });
};

function getAdditionResult(){
    $.ajax({
        url: '/addition',
        method: 'GET'
    }).then( function( response ){
        console.log( response );
        renderToDom( response );
    });
};








    function renderToDom( anArray ){
        $( '#result' ).empty();
        $( '#result').append( `<span>${anArray[2].num}</span>`);
        $( '#history').append( `<li>${anArray[0].num} + ${anArray[1].num} = ${anArray[2].num}</li>`);
        $( '#input1' ).val( '' );
        $( '#input2' ).val( '' );
        };

// LEFT OFF: need to append the whole array to the DOM to show the history 