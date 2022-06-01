let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation')
let sec = document.querySelector('.sec')
menuToggle.onclick = function () {
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
    sec.classList.toggle('active')
}

function show() {
    document.querySelector('.hiddenD').style.display = 'block'; 
}

function hide() {
    document.querySelector('.hiddenD').style.display = 'none'; 
}   ; 


