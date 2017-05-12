/*CALCULATE
Numbers divisible by 3 become "ping"
Numbers divisible by 5 become "pong"
Numbers divisible by 3 and 5 become "pingpong"
*/
var user = document.getElementById("num_user");
//var btnActivator = document.activeElement("calculate");
var get_result = document.getElementById("result");

/*btnActivator.addEventListener("click", function(){
   alert("Dont Touch Me!"); 
});*/
user.addEventListener("input", result);
function result(){
    var one = user.value;
    get_result.innerHTML = one;
    
}
