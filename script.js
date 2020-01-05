$(document).ready(function() {
//set variables
var dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');

//show date and time in header
$("#currentDay").text(dateTime);

var availHours = [ "9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM"];
 //test array
 console.log(availHours[2]);

 //for loop
 for (var i = 0; i < availHours.length; i++) {
     var rowsDiv = $("<div>");
     rowsDiv.addClass("time-block");
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
$(".time" + i).append(input);

//add save button
var saveButton = $("<button>");
saveButton.addClass("savebtn");
$(".time" + i).append(saveButton);



}
    //






















});




