window.onload = () => {


    var myBtn = document.getElementById('myBtn');



    myBtn.addEventListener('click', () => {
        window.open(
            "http://www.google.com/", '',
            "width=300, height=300, top=100,left=300");
    });


}