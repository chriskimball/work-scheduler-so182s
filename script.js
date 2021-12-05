
// Current day of week variable
var dayOfWeek = moment().format('dddd, MMMM Do');

// Current hour of day variable
var timeOfDay = moment().format('H')

// Appending current day of week + date into current day element
$('#currentDay').text(dayOfWeek);

// Declaring variable for the container element to print hour blocks
var ContainerEl = $(".container")

var hourElText = ""

// Initial page load function
function init(){
    // For hours 9 to 17 (9am to 5pm) do the following
    for (var i = 9; i <= 17; i++){
        // Retrieve hour text from local storage
        hourElText = JSON.parse(localStorage.getItem("hour-"+i));
        
        // If local storage is empty then it will set the variable to a blank string
        if (hourElText === null) {
            hourElText = "";
        }

        // Adding hour styling for past/current/future timeblocks
        var hourStyle = ""
        if (timeOfDay == i) {
            hourStyle = "present";
        } else if (timeOfDay < i) {
            hourStyle = "future";
        }
        else if (timeOfDay > i) {
            hourStyle = "past";
        } 

        // create new block of html for each hour of the work day 
        var htmlTemplate = `
        <form id="hour-${i}" class="row">
            <label class="hour col-1 p-3 text-right" for="hour">${moment(i, 'HH').format('hA')}</label>
            <textarea class= "description col ${hourStyle}" name="hour${i}">${hourElText}</textarea>
            <button type="button" class="saveBtn col-1" data-hour="${i}">💾</button>
        </form>
        `
        
        // Appending htmlTemplate into container element
        ContainerEl.append(htmlTemplate)
    }
}

// Event listener on the container can listen to any button click
$('.container').on('click','button', function(event){
    
    // Access the current target's data attribute for hour of day
    var hourClicked = event.target.dataset.hour
    // Selecting the textarea value for the button that was clicked based on the button's data attribute
    var hourElText = $('#hour-' + hourClicked).children().eq(1).val()
    
    // Saves textarea value into the local storage
    localStorage.setItem("hour-" + hourClicked, JSON.stringify(hourElText));
})

// Calling initial page load function
init()