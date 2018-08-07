$('#crystalOne').attr('data-number', lowrandomnumber());
$('.Crystals').on('click', function() {
    console.log('I work', $(this).attr('data-number'));
});

function lowrandomnumber() {
    return Math.floor(Math.random()*12 + 1) 

}
console.log(lowrandomnumber())

//this is the counter of the user score

var counter = 0;
$(".Crystals").on("click", function() {

  // Each time the user clicks the crystal the counter goes up by 1.
  counter += 1;

  // We then output the number of times the crystal is clicked.
  alert("You clicked this crystal " + counter + " times!");

});

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