$( onReady );

function onReady(){

  $( '#add' ).on( 'click', handleOperator );
  $( '#equal' ).on( 'click', handleSubmit ); 



}

let operator;

function handleOperator(){
    operator = $( this ).closest( 'button' ).data( 'operator' )
};

function handleSubmit(){

    const input = {
        inputOne: $( '#input1' ).val(),
        inputTwo: $( '#input2' ).val(),
        operator: operator,
    }
    $.ajax({
        url: '/calculator',
        method: 'POST',
        data: input,
    }).then( function( response ){
        console.log( response );
       // getCalcResult()

    });
};








function getCalcResult(){
    $.ajax({
        url: '/calculator',
        method: 'GET'
    }).then( function( response ){
        console.log( response );
        //renderToDom( response );
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