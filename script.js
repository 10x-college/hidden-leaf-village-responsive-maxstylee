let myButton = document.getElementById("DropButton");
let menu = document.getElementById("DropDownMenu");
let overlay = document.getElementById("overlay");

myButton.onclick = function () {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
};

overlay.onclick = function () {
    menu.classList.remove("active");
    overlay.classList.remove("active");
};