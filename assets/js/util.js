$(function () {
    var includes = $('[data-include]');
    $.each(includes, function () {
        const currentPage = window.location.pathname; //Get filename
        if(currentPage.includes("index")) {
            var file = 'components/' + $(this).data('include') + '.html';
        }
        else {
            var file = '/components/' + $(this).data('include') + '.html';
        }

        $(this).load(file, function () {
            if (file.includes("nav-bar.html")) {
                underlineNavBar();
                adjustNavMargin();  
            }
        });
    });
});

function underlineNavBar() {
    //Remove border from all buttons
    const buttons = document.querySelectorAll(".button-underline");
    buttons.forEach(btn => {
        btn.style.borderBottom = "none";
    });

    var buttonName = sessionStorage.getItem("navButton");

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