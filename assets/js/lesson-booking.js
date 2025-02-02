const levels = ["Beginner", "Intermediate", "Advanced"];
const options = [["Monday: 5-6pm", "Thursday: 5-6pm", "Friday: 6-7pm", "Saturday: 10-11am", "Sunday: 1-2pm"],
                ["Tuesday: 5-6pm", "Wednesday: 7-8pm", "Thursday: 7-8-6pm", "Friday: 5-6pm", "Saturday: 11am-12pm", "Sunday: 2-3pm"],
                ["Monday: 7-8pm", "Tuesday: 7-8pm", "Wednesday: 5-6pm", "Saturday: 12-1pm", "Sunday: 4-5pm"]];
const price = ["150", "200", "250"];
const choice = Number(sessionStorage.getItem("choice"));

//Populate radio buttons
function loadRadioButtons() {
    var container = document.getElementById("radio-container");
    container.innerHTML = "";

    for (let i = 0; i < options[choice].length; i++) {
        let radioId = `radio${i}`;
        let isChecked = i === 0 ? "checked" : ""; //Check the first radio button

        container.innerHTML += `
            <div class="form-check">
                <input class="form-check-input" type="radio" name="selection" id="${radioId}" value="${options[choice][i]}" ${isChecked}>
                <label class="form-check-label" for="${radioId}">
                    ${options[choice][i]}
                </label>
            </div>`;
    }
}

//Populate level
function loadLevel() {
    document.getElementById("level").textContent += levels[choice];
}

//Populate price
function loadPrice() {
    document.getElementById("price").textContent += price[choice];
}

//Load components
document.addEventListener("DOMContentLoaded", loadRadioButtons);
document.addEventListener("DOMContentLoaded", loadLevel);
document.addEventListener("DOMContentLoaded", loadPrice);

//Confirm booking
function confirm() {
    var level = levels[choice];
    var timeSlot = document.querySelector("input[name='selection']:checked");
    var firstName = document.getElementById("firstName").value;

    sessionStorage.setItem("bookingType", "lesson");
    sessionStorage.setItem("level", level);
    sessionStorage.setItem("timeSlot", timeSlot.value);
    sessionStorage.setItem("name", firstName);

    window.location.href = "confirmation.html";
}