document.getElementById("leftbox").addEventListener("Click", myFunction);
var intercal_var = '';

function myFunction() {
   
    var box1 = document.getElementById("rightbox");
    var box2 = document.getElementById("leftbox");
    var i = 0;
    var j = 1;
    intercal_var = setInterval(function() {
        box1.value = box1.value + box2.value[i];
        box2.value = box2.value.slice(j);
        if(box2.value[i]=='' || box2.value[i]==undefined) {
            clearInterval(intercal_var);
        }
    }, 1000);
}

function myFunctionp() {
    clearInterval(intercal_var);
}


document.getElementById("rightbox").addEventListener("Click", myFunction1);

function myFunction1() {
    var box1 = document.getElementById("rightbox");
    var box2 = document.getElementById("leftbox");
    var i=0;
    var j=1;
    intercal_var = setInterval(function() {
        box2.value = box2.value + box1.value[i];
        box1.value = box1.value.slice(j);
        if(box1.value[i]=='' || box1.value[i]==undefined) {
            clearInterval(intercal_var);
        }
    }, 1000); 
}
