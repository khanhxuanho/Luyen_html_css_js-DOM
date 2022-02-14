
function changeImage(id) {/* lay id*/
    let image = document.getElementById(id).getAttribute('src');
    /* lay dc link anh console.log(image);*/

    document.getElementById('img-main').setAttribute('src', image);

}