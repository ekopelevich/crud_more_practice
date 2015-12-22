$(document).ready(function(){
  console.log('Sanity Check');
  setEventListeners();
});

function setEventListeners() {
  return new Promise (function( reject, resolve ){
    $('.submit').click(
      $.ajax({
        method: 'post',
        url: 'http://localhost:5000',
        success: resolve,
        error: reject
      }));
  });
}

function displayNewLlama( setEventListener ){
  setEventListener.then( function(){

    var studentNameContainer = document.createElement('p');
    var studentName = document.createTextNode([ student.name, student.last]);
    studentNameContainer.appendChild( studentName );

    var camelNameContainer = document.createElement('li'),
        camelAgeContainer = document.createElement('li'),
        camelEmailContainer = document.createElement('li');

    var camelName = document.createTextNode( camel.name ),
        camelAge = document.createTextNode( camel.age ),
        camelEmail = document.createTextNode( camel.email );

    camelNameContainer.appendChild( camelName );
    camelAgeContainer.appendChild( camelAge );
    camelEmailContainer.appendChild( camelEmail );

    $('.camel-list').append(camelNameContainer);
  });
}
