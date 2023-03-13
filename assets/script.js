var past = 'past';
var present = 'present';
var future = 'future';
var saveBtn = $('.saveBtn');

 
//sets the date and time at the header of the page I based this on a 12 hour work day 7am-7pm with workers in the medical field in mind so I used 24 hour or military time. 
function time() {
  var currentDay = dayjs().format('MMM DD, YYYY HH:mm:ss ');
  $('#currentDay').text(currentDay);
  setInterval(time, 1000);
}

// currentTime uses dayjs to get the current hour then targets the elements in class time-block and loops through each one using .each and the .data stores the hour value for each block. The data method uses the value of the HTML 'hour" elements.
function currentTime() {
  var now = dayjs().hour();

  $(".time-block").each(function() {
    var timeSlot = parseInt($(this).data("hour"));
    if (timeSlot < now) {
      $(this).removeClass(present).removeClass(future).addClass(past);
    } else if (timeSlot === now) {
      $(this).removeClass(past).removeClass(future).addClass(present);
    } else {
      $(this).removeClass(past).removeClass(present).addClass(future);
    }
  });
}


// This loops through each element that has the class time-block and for each element gets the id and saves it to the var id then .find targets the class description and gets the value from localStorage .data targets the hour with the current selected element and stores it under the current hour  it splits the id string and takes the second element 

$(function() {
  // Set the values of the description fields from local storage
  $(".time-block").each(function() {
    var id = $(this).attr("id");
    $(this).find(".description").val(localStorage.getItem(id));
    $(this).data("hour", id.split("hour")[1]);
  });

  // Attach click handler to save button when there is a click toDo targets the sibling of class description and gets the value and when targets the parents id then saves them in localStorage  
  saveBtn.on('click', function() {
    var toDo = $(this).siblings(".description").val();
    var when = $(this).parent().attr('id');
    localStorage.setItem(when, toDo);
  });

  
  //calls the function currentTime and time to run
  currentTime();
  time();
});
