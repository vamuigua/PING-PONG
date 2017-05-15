/*CALCULATE
Numbers divisible by 3 become "ping"
Numbers divisible by 5 become "pong"
Numbers divisible by 3 and 5 become "pingpong"
*/

//Ensures The whole page loads first befor the Function is executed
$(document).ready(main);

//Function to calculate PING-PONG
function calculate(user) {
    var user = document.getElementById("numUser").value;
    var user = parseInt(user);
    var pNum = document.getElementById("pNum");
    //Calculation for Ping, Pong and Ping-Pong!
    var myArray = [];
    myArray.push(user);
    var pVal = "";
    for (var i = 1; i <= user; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            pVal += "PINGPONG" + "<br/>";
        } else if (i % 3 === 0) {
            pVal += "PING" + "<br/>";
        } else if (i % 5 === 0) {
            pVal += "PONG" + "<br/>";
        } else if (i % 3 != 0 || i % 5 != 0) {
            pVal += i + "<br/>";
        }
    }
    document.getElementById("pNum").innerHTML = pVal;
}


function main() {
    $('.Title').hide();
    $('.Title').fadeIn(1500);
    $('#btn-click').on('click', function () {
        $(this).toggleClass('active-color');
        $(this).text('Ping Pong!');
    })
}