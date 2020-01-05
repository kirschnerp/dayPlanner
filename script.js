$(document).ready(function() {
//set variables
var dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');

//show date and time in header
$("#currentDay").text(dateTime);

var availHours = [ " 9AM ", "10AM", "11AM", "12AM", " 1PM ", " 2PM ", " 3PM ", " 4PM ", " 5PM "];
 //test array
 console.log(availHours[2]);

 //for loop
 for (var i = 0; i < availHours.length; i++) {
     var rowsDiv = $("<div>");
     rowsDiv.addClass("row time-block");
     rowsDiv.addClass("row" + i);
     $(".container").append(rowsDiv);
     rowsDiv.attr("datetime",i + 9);
     $("div.row0").attr("datetime", "09");

    //add rows for times
    var newTimes = $("<div>");
    newTimes.addClass("hour" + i);
    newTimes.text(availHours[i]);
    $(".row" + i).append(newTimes);
 
//add area for input
var input = $("<textarea>");
input.addClass("inputs" + i);
$(".row" + i).append(input);

//add save button
var saveButton = $("<button>");
saveButton.addClass("saveBtn");
saveButton.attr("id", "inputs" + i);
saveButton.html("Save");
$(".row" + i).append(saveButton);
}
//function to compare times to add class for css 
$(".row").each(function(index, element) {
var pageTime = $(element).attr("datetime");
var momentTime = moment().format("k");
console.log(pageTime);
  console.log(momentTime); 
 //if statement 
if (pageTime === momentTime) {
  $(element).addClass("present");
} else if (pageTime < momentTime) {
   $(element).addClass("past");
 } else if (pageTime > momentTime) {
    $(element).addClass("future");
 }
});

 //add event listener to save to localStorage
 $(document).on("click", ".saveBtn", function() {
  var inputs = $("this").attr("id");
  var txt = $("." + inputs).val();
  console.log(txt);
  
//local storage unsure how to do 
  localStorage.setItem("inputs", txt);
 });
 

  
























});




