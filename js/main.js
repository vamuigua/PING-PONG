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
    var Result = document.getElementById("Result");
    //Calculation for Ping, Pong and Ping-Pong!
    for(var i = 1; i <= user; i++){
        if(i % 3===0 && i % 5===0){
            Result.value = "PINGPONG";
            console.log("PINGPONG");
            continue;
        }
        else if(i % 3===0){
            Result.value= "PING";
            console.log("PING");
            continue;
        }
        else if(i % 5===0){
            Result.value = "PONG";
            console.log("PONG");
            continue;
        }
        console.log(i);
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