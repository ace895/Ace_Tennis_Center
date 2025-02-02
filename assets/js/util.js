$(function () {
    var includes = $('[data-include]');
    $.each(includes, function () {
        var file = '/Ace_Tennis_Center/components/' + $(this).data('include') + '.html';

        $(this).load(file, function () {
            if (file.includes("nav-bar.html")) {
                underlineNavBar();
                adjustNavMargin();  
            }
        });
    });
});

const pageToNavMap = {
    "index": "home-nav",
    "confirmation": "home-nav", 
    "lessons": "lessons-nav",
    "court-booking": "court-nav",
    "location": "location-nav",
    "coaches": "coaches-nav",
    "contact": "contact-nav"
};

function underlineNavBar() {
    //Remove border from all buttons
    const buttons = document.querySelectorAll(".button-underline");
    buttons.forEach(btn => {
        btn.style.borderBottom = "none";
    });
    
    //Find current page
    const currentPage = window.location.pathname.split("/").pop().split(".")[0];
    const buttonName = pageToNavMap[currentPage];
    
    //Add border to button
    var button = document.getElementById(buttonName);
    if (button) {
        button.style.borderBottom = "4px solid var(--lime)";
    }
}

function adjustNavMargin() {
    const currentPage = window.location.pathname.split("/").pop(); //Get filename
    if (["court-booking.html", "lesson-booking.html"].includes(currentPage)) {
        //Adjust margin if needed
        var buttons = document.getElementById("nav-buttons");
        buttons.style.marginBottom = "20px";
    }
}