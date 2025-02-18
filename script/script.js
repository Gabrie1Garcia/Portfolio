let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let sec = document.querySelector('.sec');
let hiddenElement = document.querySelector('.hiddenD');

if (menuToggle && navigation && sec) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navigation.classList.toggle('active');
        sec.classList.toggle('active');
    });
}

function show() {
    if (hiddenElement) {
        hiddenElement.style.display = 'block';
    }
}

function hide() {
    if (hiddenElement) {
        hiddenElement.style.display = 'none';
    }
}


