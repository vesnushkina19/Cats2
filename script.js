// бургер - меню
const burger = document.querySelector('.burger');
const burger_span = document.querySelector('.burger span');
burger.addEventListener('click', function() {
    if (burger_span.classList.toggle('active')) {
        document.querySelector("#menu").style.width = "250px";
        document.querySelector(".burger").style.left = "270px";
    } else {
        burger_span.classList.remove('active');
        document.querySelector("#menu").style.width = "0";
        document.querySelector(".burger").style.left = "10px";
    }
});
