const projek = document.querySelector('.projek');
projek.addEventListener("click", function (e) {
    // console.log(e.find('span'))
    if (e.target.children[0].className == 'd-block') {
        e.target.children[0].className = 'd-none';
    } else {
        e.target.children[0].className = 'd-block';
    }
})