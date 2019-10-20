const inputArea = document.getElementById('my-field');
let characters = document.querySelector('#characters span');
let spaces = document.querySelector('#spaces span');
let words = document.querySelector('#words span');
let lines = document.querySelector('#lines span');

inputArea.oninput = () => {
    characters.innerHTML = inputArea.value.length;
    spaces.innerHTML = (inputArea.value.match(/[ ]/gmi)||[]).length.toString();
    words.innerHTML = (inputArea.value.match(/[a-zA-Z]+/gmi)||[]).length.toString();
    if (inputArea.value.length > 0) {
        lines.innerHTML = (inputArea.value.match(/[\n]/gmi)||[]).length+1;
    } else lines.innerHTML = '0';
};

inputArea.onkeyup = () => {
    inputArea.style.height = (inputArea.scrollHeight) + 'px';
};