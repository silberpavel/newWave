window.onload = () => {

    // const reqBtn = document.querySelector('#btn');
    // const resContent = document.querySelector('#response');
   
    // reqBtn.addEventListener('click', function() {
    //     const xhr = new XMLHttpRequest();
    //     xhr.open('GET', 'ajax_response.txt');
    //     xhr.send();
    //     xhr.addEventListener('load', () => {
    //         if (xhr.status == 200) {
    //             console.log('Response received => ', xhr.response);
    //             resContent.textContent = xhr.response;
    //         }
    //     });
    // });


    // JSON   JavaScript Object Notetion

    // https://github.com/smelukov/citiesTest/blob/master/cities.json

    const reqBtn = document.querySelector('#btn');
    const resContent = document.querySelector('#response');
   
    reqBtn.addEventListener('click', function() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
        xhr.send();
        xhr.addEventListener('load', () => {
            if (xhr.status == 200) {
                console.log('Response received => ', xhr.response);
                var resJ = JSON.parse(xhr.response);
                resContent.textContent = xhr.response;
                // for (var prop in resJ){
                //     resContent.append(prop["userId"]);
                // };
                console.log('status: ' + xhr.status)
            } else {
                resContent.textContent = xhr.status;
            }

        });
    });


    // To do same with Promise !!

    


}