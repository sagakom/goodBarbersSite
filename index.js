'use strict'
function handleUserInput(){
    $('#pricesBtn').on('click', function(e){
        $('#pricesSect').toggleClass('hidden');
    })
    $('#aboutBtn').on('click', function(e){
        $('#aboutSect').toggleClass('hidden');
    })
}
$(handleUserInput());