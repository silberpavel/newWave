window.onload = function() {

    setTimeout(() => {
        console.log('3 sec');
    }, 3000);
    


    setTimeout(() => {
        console.log('5 sec');
    }, 5000);



    
    var url1 = 'https://avatarfiles.alphacoders.com/118/thumb-118894.jpg';
    var url2 = 'https://cdn-images.audioaddict.com/b/7/b/b/a/3/b7bba35bfa652fa8f1e5dcc8489bfe66.jpg?size=200x200';
    var url3 = 'https://static.vecteezy.com/system/resources/thumbnails/000/177/215/small/space-background.jpg';
    

    var image1 = document.createElement('img');
    image1.src = url1;
    document.body.appendChild(image1);

    var image2 = document.createElement('img');
    image2.src = url2;
    document.body.appendChild(image2);

    var image3 = document.createElement('img');
    image3.src = url3;
    document.body.appendChild(image3);
    image1.addEventListener('load', () => {
        console.log('image 3 loaded');
        
    })

/* ДЗ 6.1 - Асинхронность и работа с сетью */

/**
 * Функция должна создавать Promise, который должен быть resolved через seconds секунду после создания
 *
 * @param {number} seconds - количество секунд, через которое Promise должен быть resolved
 * @return {Promise}
 */
function delayPromise(seconds) {
}

/**
 * Функция должна вернуть Promise, который должен быть разрешен массивом городов, загруженным из
 * https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json
 * Элементы полученного массива должны быть отсортированы по имени города
 *
 * @return {Promise<Array<{name: String}>>}
 */
function loadAndSortTowns() {
}

export {
    delayPromise,
    loadAndSortTowns
};




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


