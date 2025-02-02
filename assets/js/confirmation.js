//Load confirmation message
document.addEventListener("DOMContentLoaded", function(){
    var type = sessionStorage.getItem("bookingType");
    var textBox = document.getElementById("confirmation");

    if (type == "lesson") { //Load lesson confirmation
        var level = sessionStorage.getItem("level");
        var timeSlot = sessionStorage.getItem("timeSlot");
        console.log(level)
        console.log(timeSlot)
        var text = "You booking has been processed for the <span style='color: var(--lime)'><b>" + level + 
            "</b></span> class on <span style='color: var(--lime)'><b>" + timeSlot + 
            "</b></span>. You will recieve an email with your booking information.<br><br>Thank you!";
            console.log(text)
        textBox.innerHTML = text;

        //Change what page the back button goes to 
        history.pushState(null, "", location.href);
        window.onpopstate = function() {
            window.location.href = "lessons.html";
        };
    }
    else if (type == "court") {
        const months = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var date = sessionStorage.getItem("date").split("-");
        var start = sessionStorage.getItem("startTime");
        var end = sessionStorage.getItem("endTime");
        var name = sessionStorage.getItem("firstName");

        var month = months[Number(date[1]) - 1];
        var day = Number(date[2]);

        var text = "Your booking for a court on <span style='color: var(--lime)'><b>" + month + " " + day + 
            "</b></span> at <span style='color: var(--lime)'><b>" + start + "-" + end + 
            "</b></span> has been processed. You will recieve an email with your booking information.<br><br>Thank you!";
        textBox.innerHTML = text;

    }
});


