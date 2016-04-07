$(function () {

$("#buttonId").on("click", function() {
$.get("http://localhost:3000/balance").done(function(response) {
  var balance=response;
  // console.log(response);
  $("#display").append(response);
  $("#clear").on("click", function() {
    $("#display").empty();
console.log("it works!");
  });
  // display(balance);
});
});
})
