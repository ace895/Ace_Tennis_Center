$(document).ready(function(){

    //Initialize calendar
    flatpickr("#flatpickr-date", {
        inline: true,
        dateFormat: "Y-m-d", 
        minDate: "today",  
    });

    //Initialize time pickers
    $('#time-start').pickatime({ 
        interval: 60,     // Only allow whole hours
        clear: 'Clear',
        min: [9,0],
        max: [21,0],
        onSet: function(context) {
            if (context.select) {
                updateEndTimePicker();
            }
        }
    });

    var endTime = $('#time-end').pickatime({
        interval: 60,     // Only allow whole hours
        min: [9, 0],
        max: [21, 0],
        clear: 'Clear'
    });

    function updateEndTimePicker() {
        //Get start hour
        var startTime = $('#time-start').val();  
        var startHour = parseInt(startTime.split(':')[0]);

        //Adjust for PM
        if (startTime.includes('PM')) {
            startHour += 12; 
        }
        
        //Update min time
        var picker = endTime.pickatime('picker');
        picker.set('min', [(startHour + 1), 0]);
        console.log(startHour)

    }
});

function confirm() {
    //Get values from inputs
    let date = document.getElementById("flatpickr-date").value;
    let startTime = document.getElementById("time-start").value;
    let endTime = document.getElementById("time-end").value;
    let firstName = document.getElementById("firstName").value;

    // Create URL parameters
    sessionStorage.setItem("bookingType", "court");
    sessionStorage.setItem("date", date);
    sessionStorage.setItem("startTime", startTime);
    sessionStorage.setItem("endTime", endTime);
    sessionStorage.setItem("firstName", firstName);

    // Redirect to confirmation.html with data
    window.location.href = "confirmation.html";
}
