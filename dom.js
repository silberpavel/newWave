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

        where.insertBefore(what, list[1]);

    }

    prepend()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /* ДЗ 4 - работа с DOM */

    /**
     * Функция должна создать элемент с тегом DIV, поместить в него текстовый узел и вернуть получившийся элемент
     *
     * @param {string} text - текст, который необходимо поместить в div
     * @return {Element}
     */
    function createDivWithText(text) {
    }

    /**
     * Функция должна создать элемент с тегом A, установить значение для атрибута href и вернуть получившийся элемент
     *
     * @param {string} hrefValue - значение для атрибута href
     * @return {Element}
     */
    function createAWithHref(hrefValue) {
    }

    /**
     * Функция должна вставлять элемент what в начало элемента where
     *
     * @param {Element} what - что вставлять
     * @param {Element} where - куда вставлять
     */
    function prepend(what, where) {
    }

    /**
     * Функция должна перебрать все дочерние элементы элемента where
     * и вернуть массив, состоящий из тех дочерних элементов
     * следующим соседом которых является элемент с тегом P
     * Рекурсия - по желанию
     *
     * @param {Element} where - где искать
     * @return {Array<Element>}
     *
     * @example
     * для html '<div></div><p></p><a></a><span></span><p></p>'
     * функция должна вернуть: [div, span]
     * т.к. следующим соседом этих элементов является элемент с тегом P
     */
    function findAllPSiblings(where) {
    }

    /**
     * Функция должна перебрать все дочерние узлы типа "элемент" внутри where
     * и вернуть массив, состоящий из текстового содержимого перебираемых элементов
     * Но похоже, что в код закралась ошибка, которую нужно найти и исправить
     *
     * @param {Element} where - где искать
     * @return {Array<string>}
     */
    function findError(where) {
        var result = [];

        for (var i = 0; i < where.childNodes.length; i++) {
            result.push(where.childNodes[i].innerText);
        }

        return result;
    }

    /**
     * Функция должна перебрать все дочерние узлы элемента where
     * и удалить из него все текстовые узлы
     * Без рекурсии!
     * Будьте внимательны при удалении узлов,
     * можно получить неожиданное поведение при переборе узлов
     *
     * @param {Element} where - где искать
     *
     * @example
     * после выполнения функции, дерево <div></div>привет<p></p>loftchool!!!
     * должно быть преобразовано в <div></div><p></p>
     */
    function deleteTextNodes(where) {
    }

    /**
     * Выполнить предудыщее задание с использование рекурсии
     * то есть необходимо заходить внутрь каждого дочернего элемента
     *
     * @param {Element} where - где искать
     *
     * @example
     * после выполнения функции, дерево <span> <div> <b>привет</b> </div> <p>loftchool</p> !!!</span>
     * должно быть преобразовано в <span><div><b></b></div><p></p></span>
     */
    function deleteTextNodesRecursive(where) {
    }

    /**
     * *** Со звездочкой ***
     * Необходимо собрать статистику по всем узлам внутри элемента root и вернуть ее в виде объекта
     * Статистика должна содержать:
     * - количество текстовых узлов
     * - количество элементов каждого класса
     * - количество элементов каждого тега
     * Для работы с классами рекомендуется использовать свойство classList
     * Постарайтесь не создавать глобальных переменных
     *
     * @param {Element} root - где собирать статистику
     * @return {{tags: Object<string, number>, classes: Object<string, number>, texts: number}}
     *
     * @example
     * для html <div class="some-class-1"><b>привет!</b> <b class="some-class-1 some-class-2">loftschool</b></div>
     * должен быть возвращен такой объект:
     * {
     *   tags: { DIV: 1, B: 2},
     *   classes: { "some-class-1": 2, "some-class-2": 1 },
     *   texts: 3
     * }
     */
    function collectDOMStat(root) {
    }

    /**
     * *** Со звездочкой ***
     * Функция должна отслеживать добавление и удаление элементов внутри элемента where
     * Как только в where добавляются или удаляются элемента,
     * необходимо сообщать об этом при помощи вызова функции fn со специальным аргументом
     * В качестве аргумента должен быть передан объек с двумя свойствами:
     * - type: типа события (insert или remove)
     * - nodes: массив из удаленных или добавленных элементов (а зависимости от события)
     * Отслеживание должно работать вне зависимости от глубины создаваемых/удаляемых элементов
     * Рекомендуется использовать MutationObserver
     *
     * @param {Element} where - где отслеживать
     * @param {function(info: {type: string, nodes: Array<Element>})} fn - функция, которую необходимо вызвать
     *
     * @example
     * если в where или в одного из его детей добавляется элемент div
     * то fn должна быть вызвана с аргументов:
     * {
     *   type: 'insert',
     *   nodes: [div]
     * }
     *
     * ------
     *
     * если из where или из одного из его детей удаляется элемент div
     * то fn должна быть вызвана с аргументов:
     * {
     *   type: 'remove',
     *   nodes: [div]
     * }
     */
    function observeChildNodes(where, fn) {
    }












};