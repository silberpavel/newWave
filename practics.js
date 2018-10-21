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

    console.log("Clouser example: " + fn1(100, 1000));
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    document.write('<b>003 Silmple filter<b>');
    function filter003(arr, someFn) {
        var result003 = [];

        for (var i = 0; i < arr.length; i++) {
            if(someFn(arr[i]) === true) {
                result003.push(arr[i]);
            }
        }
        return result003;
    }

    var b2 = [1, 2, 3, 3, 2, 1, 6, 7, 8, 8, 8, 14, 32];
    var result003 = filter003(b2, (num => num >5));

    document.write("Simple filter: numbers great than 5: " + result003);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++








};