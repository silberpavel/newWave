// document.onload(function() {
   
function fn1() {
    var sum = 0;
    
    for (let x = 0; x < arguments.length; x++) {
        sum += arguments[x];
    }
    return sum;
}
    var res1 = fn1 (10, 2);
    console.log(res1);
    

// });
