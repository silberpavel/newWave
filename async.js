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















}


