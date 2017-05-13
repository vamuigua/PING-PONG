/*CALCULATE
Numbers divisible by 3 become "ping"
Numbers divisible by 5 become "pong"
Numbers divisible by 3 and 5 become "pingpong"
*/

//FadeIn Function for Title
function main(){
    $('.Title').hide();
    $('.Title').fadeIn(1000);
    $('#btn-click').on('click',function(){
        $('#pot').toggle();
        $('#btn-click').toggleClass('active-color');
    })
}

$(document).ready(main);
/*
var user = document.getElementById("numUser");
var ans = document.getElementById("showAns");

user.addEventListener("input", getResult);

function getResult(){
    var toDisplay = parseFloat(user.value) || 0;
    ans.innerHTML = "Your answer is: " + toDisplay;
    console.log(toDisplay);  
}
*/