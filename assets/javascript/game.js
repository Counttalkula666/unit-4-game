
$('#crystalOne').attr('data-number', lowrandomnumber());
$('#crystalTwo').attr('data-number', lowrandomnumber());
$('#crystalThree').attr('data-number', lowrandomnumber());
$('#crystalFour').attr('data-number', lowrandomnumber());

$('.Crystals').on('click', function() {
    console.log('I work', $(this).attr('data-number'));
    
});

//here is my random number generator
function lowrandomnumber() {
    return Math.floor(Math.random()*12 + 1) 
    console.log(lowrandomnumber())
}

var targetNumber = function counter(){
$("#number-to-guess").text(targetNumber);
}


//this is the counter of the user score
//$(".Crystals").on("click", function() {
  //var counter = 0;
  // Each time the user clicks the crystal the counter needs to add that data !!!!
  //counter += function lowrandomnumber()
  // We then output the number of times the crystal is clicked.
 

//});

//trying to create a refresh button below...can i select an image and make that the button? 
//how does it display otherwise?
function createRefreshButton()
{
    var $btn = $('<button/>', {
        text: 'Refresh Data',
        id: 'btn_refresh'
    });
    $($btn).on('click', function () {
        ClickRefresh()
    });
    return $btn;
}