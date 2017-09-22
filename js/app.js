// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  var x='x'
  var o='o'
  var count = 0;
  var oWin = 0;
  var xWin = 0;
  S('#game li').click(function(){

      if ($('#one').hasClass('o')&& $('#two').hasClass('o')&& $('#three')hasClass('o')||
          $('#four').hasClass('o')&& $('#five').hasClass('o')&& $('#six')hasClass('o')||
          $('#seven').hasClass('o')&& $('#eight').hasClass('o')&& $('#nine')hasClass('o')||
          $('#one').hasClass('o')&& $('#four').hasClass('o')&& $('#seven')hasClass('o')||
          $('#two').hasClass('o')&& $('#five').hasClass('o')&& $('#eight')hasClass('o')||
          $('#three').hasClass('o')&& $('#six').hasClass('o')&& $('#nine')hasClass('o')||
          $('#one').hasClass('o')&& $('#five').hasClass('o')&& $('#nine')hasClass('o')||
          $('#three').hasClass('o')&& $('#five').hasClass('o')&& $('#seven')hasClass('o')){

              alert('o WON!, GAME OVER')
      }



  });

});
