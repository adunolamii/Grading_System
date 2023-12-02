var name1 = document.getElementById("name1");
var dis = document.getElementById("dis");
var dis2 = document.getElementById("dis2");
var dis3 = document.getElementById("dis3");

function total(){
   var add1 = document.getElementById("html").value
   var add2 = document.getElementById("css").value
   var add3 = document.getElementById("javascript").value
   var add4 = document.getElementById("react").value

   dis.value = parseInt(add1) + parseInt(add2) + parseInt(add3) + parseInt(add4);
}
function average(){
    var add1 = document.getElementById("html").value
    var add2 = document.getElementById("css").value
    var add3 = document.getElementById("javascript").value
    var add4 = document.getElementById("react").value 
    dis2.value = (parseInt(add1) + parseInt(add2) + parseInt(add3) + parseInt(add4))/4;
}

function grade(){

    if(dis2.value >= 75 && dis2.value <= 100){
        document.getElementById("dis3").value = "You did Excellently Well👍✔ " + name1.value;
    }
    else if(dis2.value >= 50 && dis2.value <= 75){
        document.getElementById("dis3").value = "This is not your best!" + "Work hard." + name1.value;
    }
    else{
        document.getElementById("dis3").value = "Bad Performance🤦‍♀️😢" + name1.value;
    }
}    



















