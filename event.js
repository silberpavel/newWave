window.onload = () => {

/* ДЗ 5 - DOM Events */

/**
 * Функция должна добавлять обработчик fn события eventName к элементу target
 *
 * @param {string} eventName - имя события, на которое нужно добавить обработчик
 * @param {Element} target - элемент, на который нужно добавить обработчик
 * @param {function} fn - обработчик
 */
function addListener(eventName, target, fn) {
    target.addEventListener(eventName, fn);
}


/**
* Функция должна удалять обработчик fn события eventName у элемента target
*
* @param {string} eventName - имя события, для которого нужно удалить обработчик
* @param {Element} target - элемент, у которого нужно удалить обработчик
* @param {function} fn - обработчик
*/
function removeListener(eventName, target, fn) {
target.removeEventListener(eventName, fn);
}

/**
* Функция должна добавлять к target обработчик события eventName, который должен отменять действие по умолчанию
*
* @param {string} eventName - имя события, для которого нужно удалить обработчик
* @param {Element} target - элемент, на который нужно добавить обработчик
*/
function skipDefault(eventName, target) {
target.addEventListener(eventName, function(event){         // this function instead handler function!
    event.preventDefault();
});
}

/**
* Функция должна эмулировать событие click для элемента target
*
* @param {Element} target - элемент, на который нужно добавить обработчик
*/
function emulateClick(target) {
const event = new CustomEvent('click');
target.dispatchEvent(event);
}

/**
* Функция должна добавить такой обработчик кликов к элементу target
* который реагирует (вызывает fn) только на клики по элементам BUTTON внутри target
*
* @param {Element} target - элемент, на который нужно добавить обработчик
* @param {function} fn - функция, которую нужно вызвать при клике на элемент BUTTON внутри target
*/
function delegate(target, fn) {
target.addEventListener('click', function(e){
    if (e.target.tagName == "BUTTON") {
        fn();
    }
})
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
* *** Со звездочкой ***
* Функция должна добавить такой обработчик кликов к элементу target
* который сработает только один раз и удалится
* Постарайтесь не создавать глобальных переменных
*
* @param {Element} target - элемент, на который нужно добавить обработчик
* @param {function} fn - обработчик
*/
function once(target, fn) {
target.addEventListener('click', fn);
    once = function(){};
}

// function Once(){
//     console.log("run");
//     Once = function(){};
// }
// Once(); // run
// Once(); // nothing happens
























    /** Со звездочкой */
/**
 * Создать страницу с кнопкой
 * При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией
 * Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 * Запрощено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/**
 * homeworkContainer - это контейнер для всех ваших домашних заданий
 * Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер
 *
 * @example
 * homeworkContainer.appendChild(...);
 */
let homeworkContainer = document.querySelector('#homework-container');

/**
 * Функция должна создавать и возвращать новый div с классом draggable-div и случайными размерами/цветом/позицией
 * Функция должна только создавать элемент и задвать ему случайные размер/позицию/цвет
 * Функция НЕ должна добавлять элемент на страницу
 *
 * @return {Element}
 */
function createDiv() {
}

/**
 * Функция должна добавлять обработчики событий для перетаскивания элемента при помощи drag and drop
 *
 * @param {Element} target
 */
function addListeners(target) {
}

let addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function() {
    // создать новый div
    let div = createDiv();

    // добавить на страницу
    homeworkContainer.appendChild(div);
    // назначить обработчики событий мыши для реализации d&d
    addListeners(div);
    // можно не назначать обработчики событий каждому div в отдельности, а использовать делегирование
    // или использовать HTML5 D&D - https://www.html5rocks.com/ru/tutorials/dnd/basics/
});

export {
    createDiv
};

}