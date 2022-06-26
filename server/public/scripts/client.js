$( onReady );

function onReady(){
  // getCalcResult(); 

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
        $( '#history').empty();

        for( let i = 0; i < anArray.length; i++ ){
        $( '#result' ).empty();
        $( '#result').append( `<span> ${anArray[i].result} </span>`);
        $( '#history').append( `<li>${anArray[i].inputOne} ${anArray[i].operator} ${anArray[i].inputTwo} = ${anArray[i].result} </li>`);
    }  
};

function handleClear(){
    $( '#input1' ).val( '' );
    $( '#input2' ).val( '' );
};

// LEFT OFF: Need to fix the history part