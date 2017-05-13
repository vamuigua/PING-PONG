/*CALCULATE
Numbers divisible by 3 become "ping"
Numbers divisible by 5 become "pong"
Numbers divisible by 3 and 5 become "pingpong"
*/
$(document).ready(main);

var ans = document.getElementById("showAns");


function calculate(user){
    var user = document.getElementById("numUser").value;
    var user = parseFloat(user);
    for(var i=0; i <= user; i++){
        if(user % 3 === 0){
            console.log('ping');
        }
        else if(user % 5 === 0){
            console.log('pong');
        }
        else if(user % 3 === 0 && user % 5 ===0){
            console.log('pingpong')
        }
        else{
            console.log(user + " :Not divisible by either 3 or 5");
        }      
    }
}

function main(){
    $('.Title').hide();
    $('.Title').fadeIn(1500);
    $('#btn-click').on('click',function(){
        $(this).toggleClass('active-color');
        $(this).text('Ping Pong!');
    })
}

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