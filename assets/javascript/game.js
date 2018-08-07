//what is this error on line one???

var counter = 0;
var targetnumber = 0;
var wins = 0;
var losses = 0;

function compPick() {
   return Math.floor(Math.random()*(120-19+1)+19) 
};
var targetnumber = compPick();
document.getElementById('number-to-guess').innerHTML=targetnumber;

$('#crystalOne').attr('data-number', lowrandomnumber());
$('#crystalTwo').attr('data-number', lowrandomnumber());
$('#crystalThree').attr('data-number', lowrandomnumber());
$('#crystalFour').attr('data-number', lowrandomnumber());

$('.Crystals').on('click', function() {
    
    var crystalValue = ($(this).attr("data-number"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    document.getElementById("counter").innerHTML = counter;
    console.log('I work', $(this).attr('data-number'));
    
});

//here is my random number generator
function lowrandomnumber() {
    return Math.floor(Math.random()*12 + 1) 
    console.log(lowrandomnumber())
}

//here is my user guesses counter
var targetNumber = function counter(){
$("#number-to-guess").text(targetNumber);
}


//update wins before writing it
if (counter === compPick()) {
    alert("You win!");
    //increase counter
  }

else if (counter >= compPick()) {
    alert("You lose!!");
    //increase counter
  }

//Have a refresh button function below...need to link it to the button I created
function createRefreshButton(){
    var $btn = $('<button/>', {
        text: 'Refresh Data',
        id: 'btn_refresh'
    });
    $('.btn btn-primary btn-lg').on('click', function () {
        ClickRefresh()
    });
    return $btn;
}