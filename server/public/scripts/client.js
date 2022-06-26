$( onReady );

function onReady(){

  $( '#add' ).on( 'click', handleOperator );
  $( '#sub' ).on( 'click', handleOperator );
  $( '#mul' ).on( 'click', handleOperator );
  $( '#divide' ).on( 'click', handleOperator );
  $( '#equal' ).on( 'click', handleSubmit ); 
  $( '#clear' ).on( 'click' , handleClear );


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
        getCalcResult()

    });
};

function getCalcResult(){
    $.ajax({
        url: '/calculator',
        method: 'GET'
    }).then( function( response ){
        console.log( response );
        renderToDom( response );
    });
};

function renderToDom( anArray ){
        $( '#result' ).empty();
        $( '#result').append( `<span> ${anArray[1].result} </span>`);
        $( '#history').append( `<li>${anArray[0].inputOne} ${anArray[0].operator} ${anArray[0].inputTwo} = ${anArray[1].result} </li>`);
        $( '#input1' ).val( '' );
        $( '#input2' ).val( '' );
 };

function handleClear(){
    $( '#history' ).empty();
}

