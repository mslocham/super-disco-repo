$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));


var today = moment().format('dddd');
var currentTime = moment().format('h');

var officeHrs = ["9AM", "10AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

for (let i = 0; i < officeHrs.length; i++) {
   if($("#parent span").text() === currentTime) {
       $("#parent .input").addClass("present");
   }
   else if ($("#parent span").text() < currentTime) {
       $("#parent .input").addClass("past");
   }
   else ($("#parent span").text() > currentTime) 
      { $("#parent .input").addClass("future");
    }
   
   };


