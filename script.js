
var number = document.getElementById("inputWurzel");
var result1 = document.getElementById("result1");


number.oninput = function(){
    
    result1.innerHTML = myWurzel(this.value);
}

function myWurzel(number){
    document.body.style.backgroundColor = "#00d4ff"
    var wurzel = 1, i = 0;
    while(true){
        i = i + 1;
        wurzel = (number / wurzel + wurzel) / 2;
        if (i == number + 1){
            break;
        }
    } return wurzel;  
}

// quadrat -------------

 var number2 = document.getElementById("inputQuadrat");
 var result2 = document.getElementById("result2");

 number2.oninput = function(){
     document.body.style.backgroundColor = "#15c38c"
    
   var number = Number(number2.value);
   var result = 0;
   for(var i = 0; i < number; i++){
       result += number;
   } result2.innerHTML = result;
}













