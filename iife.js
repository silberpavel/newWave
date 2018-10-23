window.onload = function() {
    
    document.write('<h2>IIFE</h2>');
    document.write('Imidatly Invoke Function Expression');
    document.write('<br><br>Большой плюс в том что мы не захламляем глобальную область видемости');
    
    (function(params) {
        var myVar = 'Hello';
        console.log(myVar, params); // hello 36
    })(36);
    
    
    
    document.write('<br>++++++++++++++++++++++++++++++++++++++');

     document.write('Hoisting<br>');
     document.write('var всплывает<br>');
     document.write('let не всплывает<br>');
     document.write('let good for loop for<br>');






}