$('#crystalOne').attr('data-number', lowrandomnumber());
$('.Crystals').on('click', function() {
    console.log('I work', $(this).attr('data-number'));
});

function lowrandomnumber() {
    return Math.floor(Math.random()*12 + 1) 

}



console.log(lowrandomnumber())


//trying to create a refresh button below...can i select an image and make that the button? 
//git push origin masterhow does it display otherwise?
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