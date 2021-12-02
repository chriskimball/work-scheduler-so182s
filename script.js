
// select and declare variables for the following elements
// so we can loop and append these elements

//  $('.container') to render and print html in the container

//  $('#currentDay') to render and print html in the container
//  currentHour

// Day of week variable
var dayOfWeek = moment().format('dddd, MMMM Do');

$('#currentDay').text(dayOfWeek);

var ContainerEl = $(".container")


// for loop from 9 to 17
for (var i = 9; i <= 17; i++){
    // create new block of html for each hour of the day 
    var htmlTemplate = `
    <div id="hour-${i}" class="row">
        <label class="hour col-1" for="hour">${moment(i, 'HH').format('hA')}</label>
        <textarea class= "description col" name="hour"></textarea>
        <button type="button" class="saveBtn col-1"></button>
    </div>
    `
    
    ContainerEl.append(htmlTemplate)
    
    // saving the current hour to a data attribute so it can be accessed from an event listener
    
    // i = current hour of the loop, 9 - 17

    // fetch saved values in for loop
    // local storage key = "hour-9"
    // need to put hour- i variable into a string
    // var savedValueForHour = localStorage.getItem( 'hour-' + i ,  )

    // need to do something similar when we save the items to convert a saved number value into a string to put into local storage.
    
    // data attributes are key
    
    
}

// add event listener to container element so we can create dynamic buttons that are rendered on the page (children of the container and event delegation)
// event listener on the container can listen to any button click

// need to capture the container element into a variable
$('.container').on('click','button', function(event){

    // we need to respond to button clicks and interact with data. Access a data attribute from button or parent element.
    // need to add 'event' object as a callback argument
    
    // access the current target
    event.target
    
    // access the targets data attributes
    // event.target.dataset. aka vanilla JS might be better than jQuery .data method to access the data attributes


})