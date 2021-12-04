
// select and declare variables for the following elements
// so we can loop and append these elements

//  $('.container') to render and print html in the container

//  $('#currentDay') to render and print html in the container
//  currentHour

// Day of week variable
var dayOfWeek = moment().format('dddd, MMMM Do');

// hour of day variable
var timeOfDay = moment().format('H')

console.log(timeOfDay)
$('#currentDay').text(dayOfWeek);

var ContainerEl = $(".container")

function init(){
    // for loop from 9 to 17
    for (var i = 9; i <= 17; i++){
        // retreiving hour text
        var hourElText = JSON.parse(localStorage.getItem("hour-"+i));
        
        // If local storage is blank then it will set the text area to a blank string
        if (hourElText === null) {
            hourElText = "";
        }
        var hourStyle = ""
        // Adding style elements for past/current/future timeblocks
        if (timeOfDay == i) {
            hourStyle = " present";
        } else if (timeOfDay < i) {
            hourStyle = " future";
        }
        else if (timeOfDay > i) {
            hourStyle = " past";
        } 

        // create new block of html for each hour of the day 
        var htmlTemplate = `
        <div id="hour-${i}" class="row${hourStyle}">
            <label class="hour col-1 p-3 text-right" for="hour">${moment(i, 'HH').format('hA')}</label>
            <textarea class= "description col" name="hour${i}">${hourElText}</textarea>
            <button type="button" class="saveBtn col-1" data-hour="${i}">💾</button>
        </div>
        `
        
        ContainerEl.append(htmlTemplate)
    }
}

init()

    // saving the current hour to a data attribute so it can be accessed from an event listener
    
    // i = current hour of the loop, 9 - 17

    // fetch saved values in for loop
    // local storage key = "hour-9"
    // need to put hour- i variable into a string
    // var savedValueForHour = localStorage.getItem( 'hour-' + i ,  )

    // need to do something similar when we save the items to convert a saved number value into a string to put into local storage.
    
    // data attributes are key
    
    


// add event listener to container element so we can create dynamic buttons that are rendered on the page (children of the container and event delegation)
// event listener on the container can listen to any button click

// need to capture the container element into a variable
$('.container').on('click','button', function(event){
    
    // we need to respond to button clicks and interact with data. Access a data attribute from button or parent element.
    // need to add 'event' object as a callback argument
    event.preventDefault()
    // access the current target
    var hourClicked = event.target.dataset.hour
    var hourEl = $('#hour-' + hourClicked).children().eq(1).val()

    localStorage.setItem("hour-" + hourClicked, JSON.stringify(hourEl));
    // var hourTextEl = hourEl.children
    console.log(hourEl)
    
    // access the targets data attributes
    // event.target.dataset. aka vanilla JS might be better than jQuery .data method to access the data attributes
    

})