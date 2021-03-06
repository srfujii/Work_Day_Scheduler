
/*** Global Variables ***/
var today = moment();                                   // Use Moment.js to display current date
var hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];   // Array of valid time slots
var currentHour = Number(moment().format("HH"));        // Current hour


/*** Function: showAppointment, displays existing appointments (if any) from localStorage */
function showAppointment(myHour) {
    
    var btnNumber = myHour;
    var text = JSON.parse(localStorage.getItem(`hour-${btnNumber}`));
    var textAreaID = `textarea#${btnNumber}`;

    $(textAreaID).val(text);

}


/*** Function: storeAppointment, stores new appointments to localStorage ***/
function storeAppointment(e) {

    e.preventDefault();

    var btnNumber = (e.target.id).replace(/\D/g,'');
    var text = $(`textarea#${btnNumber}`).val();

    if (text !== "") {
        // Stringify and set key in localStorage to storedScores array
        localStorage.setItem(`hour-${btnNumber}`, JSON.stringify(text));
    } else {
        alert("Please enter an appointment.");    // User must enter *something*
    }
}


/*** Main Code  ***/
$("#currentDay").text(today.format("dddd, MMMM Do"));   // Display current date

/* For loop colors in our time blocks */
for (var hour = 9; hour < 18; hour++) {     // Loop to color in the appointment boxes based on current time
    var hourEl = $('#hour' + hour);         // Get a reference to our hour ID
    
    if (hour < currentHour) {               // We're in the past: color background gray
        hourEl.attr('class', 'past');
    } 
    else if (hour > currentHour) {          // We're in the future: color background green
        hourEl.attr('class', 'future');
    }
    else {                                  // We're in the current hour: color background red
        hourEl.attr('class', 'present');
    }

    showAppointment(hour);                  // Show existing appointments if any
}                                           // End for loop


/*** Button Event Listeners, call function storeAppointment when button is clicked ***/
$('#btn9').on('click', storeAppointment);
$('#btn10').on('click', storeAppointment);
$('#btn11').on('click', storeAppointment);
$('#btn12').on('click', storeAppointment);
$('#btn13').on('click', storeAppointment);
$('#btn14').on('click', storeAppointment);
$('#btn15').on('click', storeAppointment);
$('#btn16').on('click', storeAppointment);
$('#btn17').on('click', storeAppointment);
