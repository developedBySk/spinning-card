var container = document.querySelector(".container");
var card = document.querySelector(".card");
currdeg = 0;
container.addEventListener('click',rotate)

function rotate(){
    container.classList.toggle('.spin');
}