var lang = {
  "Teamwork": "100%",
  "Leadership": "98%",
  "Empathy": "100%",
  "Problem-Solving": "90%",
  "Critical-Thinking": "100%",
  "Time-Management" : "100%",
  "Adaptability" : "95%"
};

var multiply = 4;

$.each( lang, function( language, pourcent) {

  var delay = 700;
  
  setTimeout(function() {
    $('#'+language+'-pourcent').html(pourcent);
  },delay*multiply);
  
  multiply++;

});