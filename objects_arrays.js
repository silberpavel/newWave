/* ДЗ 3 - работа с массивами и объеектами */

/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}
// arr.forEach(function callback(currentValue, index, array) {
//     //your iterator
// } [, thisArg]);

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
function map(array, fn) {
    var newArr = [];

    for (let i = 0; i < array.length; i++) {
        newArr.push(fn(array[i], i, array));
    }

    return newArr;
}
// var new_array = arr.map(function callback(currentValue, index, array) {
//     // Возвращает элемент для new_array 
// } [, thisArg])
/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */
function reduce(array, fn, initial) {
    var x = initial || array[0];
    var i = initial ? initial : 0;

    for (; i < array.length; i++) {
        x = fn(x, array[i], i, array)
    }

    return x;
}

/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */
function deleteProperty(obj, prop) {
    delete obj[prop];
}

/*
 Задача 5:
 Функция принимает объект и имя свойства и возвращает true или false
 Функция должна проверить существует ли укзаанное свойство в указанном объекте
 */
function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop)
}

/*
 Задача 6:
 Функция должна получить все перечисляемые свойства объекта и вернуть их в виде массива
 */
function getEnumProps(obj) {
    var arrProp = [];
    for (var prop in obj) {
        arrProp.push(prop);
    }

    return arrProp;
}

/*
 Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */
function upperProps(obj) {
    var arrProp = [];
    for (var prop in obj) {
        arrProp.push(prop.toUpperCase());
    }

    return arrProp;
}

/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */
function slice(array, from, to) {
    if (from < to) {
        for (let i = 0; i < array.length; i++) {
            if (i < from) {
                array.shift();
            } else if (i >= to) {
                array.pop();
            }
        }
    }

    return array;
}

/*
 Задача 9 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    var res;
    const proxy1 = new Proxy(obj, handler1);
    const handler1 = {
        set(obj, prop, value) {

            res = value;
        }
      };
      return res * res;
}

export {
    forEach,
    map,
    reduce,
    deleteProperty,
    hasProperty,
    getEnumProps,
    upperProps,
    slice,
    createProxy
};
