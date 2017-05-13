/*CALCULATE
Numbers divisible by 3 become "ping"
Numbers divisible by 5 become "pong"
Numbers divisible by 3 and 5 become "pingpong"
*/
$(document).ready(main);

var ans = document.getElementById("showAns");


function calculate(user) {
    var user = document.getElementById("numUser").value;
    var user = parseFloat(user);
    var Result = document.getElementById("Result");
    //Calculation for Ping, Pong and Ping-Pong!
    for (var i = 0; i < user; i++){
        if (user % 3 === 0 && user % 5 === 0) {
            Result.innerHTML = "PINGPONG!";
            console.log('pingpong');
        } else if (user % 3 === 0) {
            Result.innerHTML = "PING!";
            console.log('ping');
        } else if (user % 5 === 0) {
            Result.innerHTML = "PONG!";
            console.log('pong');
        } else {
            Result.innerHTML = user + " :Not divisible by either 3 or 5";
            console.log(user + " :Not divisible by either 3 or 5");
        }
    }
}

function main() {
    $('.Title').hide();
    $('.Title').fadeIn(1500);
    $('#btn-click').on('click', function () {
        $(this).toggleClass('active-color');
        $(this).text('Ping Pong!');
    })
}