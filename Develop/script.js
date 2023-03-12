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



// $(function){} makes sure that the DOM is fully loaded before it tries to run. $(this) targets the current element and .siblings targets all the siblings of the elements with the class description and .val gets there value. that is all saved in the var toDo. The when var targets the parent element of saveBtn in particular the id of it which is the id hour- for each div it is different so depending on which save btn is clicked depends on which id is targeted. localStorage.setItem (when,toDo) saves the value of the variables when and toDo
$(function() {
  saveBtn.on('click', function() {
    var toDo = $(this).siblings(".description").val();
    var when = $(this).parent().attr('id');
    localStorage.setItem(when, toDo);
  });
// currentTime uses dayjs to get the current hour then targets the elements in class time-block and loops through each one using .each and gets the id using the .attr and then split targets the hour and the string in index[1] and then parses it as a interger. 
  function currentTime() {
    var now = dayjs().hour();

    $(".time-block").each(function() {
      var timeSlot = parseInt($(this).attr("id").split("hour")[1]);
    
//if timeSlot is less then the now then $(this) targets the event and toggles or changes between classes .
      if (timeSlot < now) {
        $(this).toggleClass(past);
      } else if (timeSlot === now) {
        $(this).toggleClass(present);
      } else {
      $(this).toggleClass(future);
      }
    });
  }
    
        
//gets any saved information from localStorage and by the hours and places it in the appropriate time slot
  $('#hour7 .description').val(localStorage.getItem('hour7'));
  $('#hour8 .description').val(localStorage.getItem('hour8'));
  $('#hour9 .description').val(localStorage.getItem('hour9'));
  $('#hour10 .description').val(localStorage.getItem('hour10'));
  $('#hour11 .description').val(localStorage.getItem('hour11'));
  $('#hour12 .description').val(localStorage.getItem('hour12'));
  $('#hour13 .description').val(localStorage.getItem('hour13'));
  $('#hour14 .description').val(localStorage.getItem('hour14'));
  $('#hour15 .description').val(localStorage.getItem('hour15'));
  $('#hour16 .description').val(localStorage.getItem('hour16'));
  $('#hour17 .description').val(localStorage.getItem('hour17'));
  $('#hour18 .description').val(localStorage.getItem('hour18'));
  $('#hour19 .description').val(localStorage.getItem('hour19'));

  //calls the function currentTime and time to run
  currentTime();
  time();
});

 
 