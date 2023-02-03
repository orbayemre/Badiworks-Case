const sections = document.querySelectorAll("section");
const menuItems = document.querySelectorAll(".menu a");

window.addEventListener("scroll", ()=>{

    let scrollY = window.pageYOffset;

    let activePage = "main";

    let main= sections[0].offsetHeight-100;
    let portfolio= sections[1].offsetHeight-100;
    let about= sections[2].offsetHeight-100;
    let contact= sections[3].offsetHeight-100;

    if(scrollY < main) activePage = "main";
    else if(scrollY < main+portfolio) activePage = "portfolio";
    else if(scrollY < main+portfolio+about) activePage = "about";
    else if(scrollY <  main+portfolio+about+contact) activePage = "contact";


    menuItems.forEach(item =>{
        if(item.id === activePage) item.className = "active";
        else item.className = "";
    })

});

$(document).ready(function(){

    $("#portfolio").click(function() {
        $('html, body').animate({
            scrollTop: $(".portfolio").offset().top-66
        }, 500);
        return false;
    });

    $("#about").click(function() {
        $('html, body') .animate({
            scrollTop: $(".about").offset().top-80
        }, 500);
        return false;
    });

    $("#contact").click(function() {
        $(' html,body') .animate({
            scrollTop: $(".contact").offset().top
        }, 500);
        return false;
    });

});



