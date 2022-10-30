// бургер - меню
const burger = document.querySelector('.burger');
const burger_span = document.querySelector('.burger span');
burger.addEventListener('click', function() {
    if (burger_span.classList.toggle('active')) {
        document.querySelector("#menu").style.width = "200px";
        document.querySelector(".burger").style.left = "200px";
        // document.querySelector(".cards_container").style.paddingLeft = "+270px";
        // document.querySelector(".cards_container").style.width = "-270px";
        document.querySelector(".cards_container").style.opacity = "0.3";

    } else {
        burger_span.classList.remove('active');
        document.querySelector("#menu").style.width = "0";
        document.querySelector(".burger").style.left = "10px";
        // document.querySelector(".cards_container").style.paddingLeft = "-270px";
        document.querySelector(".cards_container").style.opacity = "1";
    }
});

