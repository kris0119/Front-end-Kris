let barra_lateral = document.querySelector(".barra_lateral");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
closeBtn.addEventListener("click", () => {
    barra_lateral.classList.toggle("open");
    menuBtnChange();// calling the function(optional)
});

searchBtn.addEventListener("click", () => {
    //barralateral open when click on the search iocn
    barra_lateral.classList.toggle("open");
    menuBtnChange(); // calling the function(optional)
});

// following are the code to change barraletal button(optional)
function menuBtnChange() {
    if (barra_lateral.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
} 