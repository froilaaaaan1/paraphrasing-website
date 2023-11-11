const counter = document.getElementsByClassName('count');
const inputBox = document.querySelector('.inputBox');
const clear = document.querySelector('.clear');

clear.addEventListener('click', function() {
    inputBox.value = '';
    counter[0].innerHTML = 0;
});
inputBox.addEventListener('keyup', function() {
    counter[0].innerHTML = inputBox.value.length;
} );