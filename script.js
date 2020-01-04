$(document).ready(function() {
//set variables
var dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');

//show date and time in header
$("#currentDay").text(dateTime);

var availHours = [ "9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM"];
 //test array
 //console.log(availHours[2]);

 //for loop
 for (var i = 0; i > availHours.length; i++) {
     var rowsDiv = $("<div>");
     rowsDiv.addClass("time");
     rowsDiv.addClass("time" + i);
     $(".containter").append(rowsDiv);

    rowsDiv.attr("datetime",i + 9);
    $("div.row0").attr("datetime", "09");

 }
    //






















});




