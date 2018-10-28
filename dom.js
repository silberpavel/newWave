window.onload = function(){

    function createDivWithText(text) {
        var div = document.createElement('div');
        div.innerText = text;
        return document.body.appendChild(div);
    }

    createDivWithText('div append example');





    // Функция должна создать элемент с тегом A, установить значение для атрибута href и вернуть получившийся элемент
    // @param {string} hrefValue - значение для атрибута href
    // @return {Element}

    function createAWithHref(hrefValue) {
        var a = document.createElement("a");
        a.setAttribute('href', hrefValue);
        a.innerText = 'Google';
        return document.body.appendChild(a);

    }
        createAWithHref('http://www.google.com/');


    /**
     * Функция должна вставлять элемент what в начало элемента where
     *
     * @param {Element} what - что вставлять
     * @param {Element} where - куда вставлять
     */

    function prepend(what, where) {

        var where = document.querySelector('.where');
        where.style.color = "blue";

        var list = document.querySelector('#list');

        var what = document.createElement('div');
        what.innerText ='Where is the highest mountain on Earth?';

        where.insertBefore(what, list[0]);

    }

    prepend()















};