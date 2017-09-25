// wait for the DOM to finish loading
$(document).ready(function(){
  // all code to manipulate the DOM
  // goes inside this function
  var x='x';
  var o='o';
  var count = 0;
  var oWin = 0;
  var xWin = 0;
  $('#game li').click(function(){
    console.log('box1');
    if ($('#one').hasClass('o')&& $('#two').hasClass('o')&& $('#three').hasClass('o')||
        $('#four').hasClass('o')&& $('#five').hasClass('o')&& $('#six').hasClass('o')||
        $('#seven').hasClass('o')&& $('#eight').hasClass('o')&& $('#nine').hasClass('o')||
        $('#one').hasClass('o')&& $('#four').hasClass('o')&& $('#seven').hasClass('o')||
        $('#two').hasClass('o')&& $('#five').hasClass('o')&& $('#eight').hasClass('o')||
        $('#three').hasClass('o')&& $('#six').hasClass('o')&& $('#nine').hasClass('o')||
        $('#one').hasClass('o')&& $('#five').hasClass('o')&& $('#nine').hasClass('o')||
        $('#three').hasClass('o')&& $('#five').hasClass('o')&& $('#seven').hasClass('o'))
    {
      alert('o WON!, GAME OVER');
      $('#game li').text('+');
      $('#game li').removeClass('disable');
      $('#game li').removeClass('o');
      $('#game li').removeClass('x');
      $('#game li').removeClass('button-primary');
      $('#game li').removeClass('bbutton-info');
    } else if ($('#one').hasClass('x')&& $('#two').hasClass('x')&& $('#three').hasClass('x') ||
               $('#four').hasClass('x')&& $('#five').hasClass('x')&& $('#six').hasClass('x') ||
               $('#seven').hasClass('x')&& $('#eight').hasClass('x')&& $('#nine').hasClass('x') ||
               $('#one').hasClass('x')&& $('#four').hasClass('x')&& $('#seven').hasClass('x') ||
               $('#two').hasClass('x')&& $('#five').hasClass('x')&& $('#eight').hasClass('x') ||
               $('#three').hasClass('x')&& $('#six').hasClass('x')&& $('#nine').hasClass('x') ||
               $('#one').hasClass('x')&& $('#five').hasClass('x')&& $('#nine').hasClass('x') ||
               $('#three').hasClass('x')&& $('#five').hasClass('x')&& $('#seven').hasClass('x'))
    {
      alert('x WON!, GAME OVER');
      $('#game li').text('+');
      $('#game li').removeClass('disable');
      $('#game li').removeClass('o');
      $('#game li').removeClass('x');
      $('#game li').removeClass('button-primary');
      $('#game li').removeClass('bbutton-info');
    } else if (count===9) {
      alert('IT\'s a TIEEEEE');
      $('#game li').text('+');
      $('#game li').removeClass('disable');
      $('#game li').removeClass('o');
      $('#game li').removeClass('x');
      $('#game li').removeClass('button-primary');
      $('#game li').removeClass('bbutton-info');
      count = 0;
    } else if ($(this).hasClass('disable'))
    {
      alert('Try ANOTHER one');
    } else if (count%2 ===0)
      {
        count++;
        $(this).text('o');
        $(this).addClass('disable o button-primary');

        if ($('#one').hasClass('o')&& $('#three').hasClass('o')&& $('#three').hasClass('o')||
            $('#four').hasClass('o')&& $('#five').hasClass('o')&& $('#six').hasClass('o')||
            $('#seven').hasClass('o')&& $('#eight').hasClass('o')&& $('#nine').hasClass('o')||
            $('#one').hasClass('o')&& $('#four').hasClass('o')&& $('#seven').hasClass('o')||
            $('#two').hasClass('o')&& $('#five').hasClass('o')&& $('#eight').hasClass('o')||
            $('#three').hasClass('o')&& $('#six').hasClass('o')&& $('#nine').hasClass('o')||
            $('#one').hasClass('o')&& $('#five').hasClass('o')&& $('#nine').hasClass('o')||
            $('#three').hasClass('o')&& $('#five').hasClass('o')&& $('#seven').hasClass('o'))
          {
            alert('o WINS!!!');
            count = 0;
            oWin++;
            // $('#o_win').text(oWin);
            updateScore(oWin);
          }
      }
          else
          {
            count++;
            $(this).text(x);
            $(this).addClass('disable x button-info');
            if ($("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') ||
                $("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') ||
                $("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') ||
                $("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') ||
                $("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') ||
                $("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') ||
                $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') ||
                $("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x'))
            {
              alert('X wins');
              count = 0;
              xWin++;
              // $('#x_win').text(xWin);
              updateScore(xWin);
            }
          }

  });
  $("#reset").click(function() {
    $("#game li").text("+");
    $("#game li").removeClass('disable');
    $("#game li").removeClass('o');
    $("#game li").removeClass('x');
    $("#game li").removeClass('button-primary');
    $("#game li").removeClass('button-info');
    count = 0;
  });
});



function updateScore(points){
  // if player X wins, display points in #x_win div
  // $('#x_win').text(points);
  console.log('score:' + points);
}


















