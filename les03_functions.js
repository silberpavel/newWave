window.onload = function() {

    function fn1() {
        var sum = 0;
        
        for (let x = 0; x < arguments.length; x++) {
            sum += arguments[x];
        }
        return sum;
    }
    var res1 = fn1 (10, 2);
    console.log(res1);
        

    function arrowTest() {
        var a = [1, 2, 3, 4, 5];

        var a2 = a.map(n => n * n);         // Shortener
    /* var a2 = a.map(function(n) {
            return n * n;
        });
        */
    document.getElementById('res_arrow_func').innerHTML = 'var a = [1, 2, 3, 4, 5];<br><b>var a2 = a.map(n => n * n); </b><br> <p>[1, 2, 3, 4, 5] = > '+ a2 +'</p><br><h2 style="font-family: Mali; border: 3px solid red;">var foo = (a,b) => a * b;</h2>';
    }
    arrowTest();











};
