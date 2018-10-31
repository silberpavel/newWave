window.onload = () => {

    const reqBtn = document.querySelector('#btn');
    const resContent = document.querySelector('#response');


    
    reqBtn.addEventListener('click', function() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'ajax_response.txt');
        xhr.send();
        xhr.addEventListener('load', () => {
            if (xhr.status == 200) {
                console.log('Response received => ', xhr.response);
                resContent.textContent = xhr.response;
            }
        });
    });

}