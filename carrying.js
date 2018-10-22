// function carry(name) {
//     return function (doSomething) {
//         return console.log(name + '' + doSomething + '!');
//     }
// }



// carry('Michael');
function carry() {
    return function () {
        return console.log('name');
    }
}

console.log('test');

carry();