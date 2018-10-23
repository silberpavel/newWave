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

    function greatThan7(number) {
        return number > 7;
    }

    var b003 = [1, 2, 3, 3, 2, 1, 6, 7, 8, 8, 8, 14, 32];
    var result003 = filter003(b003, (num => num >5));

    document.write("Simple filter: <br>numbers great than 5: " + result003);
    document.write('<br>One more function (greatThan7): ' + filter003(b003, greatThan7));
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
    console.log('//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');

    // document.body.innerHTML = "<h2>Carrying Каррирование (профессионально)</h2>";
    document.write('<h2>Carrying Каррирование (Профессионально)</h2>');

    function great(than) {         // 8
        return function(number) {   // Goes to filter and to for to "someFn(arr[i])"
            return number > than;   // number ===> (arr[i])
        }
    }

    document.write('<br>Filter by Carrying (greatThan8): ' + filter003(b003, great(8)));
    document.write('<br>Filter by Carrying (greatThan14): ' + filter003(b003, great(14)));
    document.write('//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');

    document.write('<h2>My Carrying example</h2>');


    var arr004 = [1, 2, 3, 4, 5, 6];
    
    function arrayRunner(arr, someFn) {
        var result004 = [];
        for (let i = 0; i < arr.length; i++) {
            // if(someFn(arr[i]) === true) {
                result004.push(someFn(arr[i]));  // arr[i] = 2 for example
                // result.push[arr[i]];
            // }
            
        }
        return result004;
    }

    function expo(by_num) {     // by_num = 2
        return function(number) {    // expo() will return anonymus function
           return number ** by_num;
        }
        
    }

    var myRes004 = arrayRunner(arr004, expo(2));
    document.write(myRes004);
    document.write('<br>It\'s works! But I do not know how ....<br><hr>');

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    document.write('<img src="img/carrying_explanation.png">');
    document.write('<br><h2>One more simple example...</h2>');


    var doin = 'running'
    function newWords(myFunc) {
        return myFunc(doin);
    }

    function words(name) {
        return function(doin){
            return name +' is ' + doin;
        }
    }
    
    var r = newWords(words('Mike'));    
    document.write(r);                  // Mike is running

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

document.write('<br><h2>bind()</h2>');

document.write('//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');

document.write('// Formatting  --> look to console');
var ff = 'formating';

console.log('This is example for \%s %s', ff);
console.error('This is example for error');
console.info('This is example for info');

console.group('This is example for group1');
    console.group('This is example for group2');    
    console.group('GROUP3');    

    console.group('This is example for group1');    
    console.groupEnd();

document.write('//<br>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++<br>');

console.info('This is example for TIMER  (CALCULATE OPERATION TIME OF CODE BLOCK');

console.time('Timer1');
for (let x = 0; x < 20000000; x++) {
    var a = x / x
    
}
console.timeEnd('Timer1');

document.write('//<br>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++<br>');

console.info('PROFILE IN CONSOOLE  => CREATES CHART OF CODE, to optimise!!!');
console.profile('1');
console.time('time2');
for (let x = 0; x < 20000000; x++) {
    var a = x / x
    
}
console.timeEnd('time2');
console.profileEnd('1');






document.write('//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');








};