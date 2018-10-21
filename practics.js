window.onload = function(){

    var arr1 = [1, 2, 3, 4, 5];
    
    // arr.map() & Arrow function
    var arr2 = arr1.map(n => n * n);    

    // Closure
    var a = arr2[0];

    function fn1(c, d) {   
        function fn2(b) {
            return a + b + c + d;
        }
        return fn2(10)
    }

    console.log(fn1(100, 1000));

};