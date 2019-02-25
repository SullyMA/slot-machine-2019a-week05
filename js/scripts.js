//create array
var slots = ["images/7.jpg", "images/bar.png", "images/cherry.jpg", "images/dollarSign.jpg", "images/lemon.jpg"];
var total = 0;
var bet = 0;
//create event listeners
$("#pull").on("click", lever);
$("#minButton").on("click", min);
$("#maxButton").on("click", max);
//pull lever
function lever() {
  if ($("#totalDisplay").text() != "none") {
    var indexOne = Math.round(Math.random()*4)
    var indexTwo = Math.round(Math.random()*4)
    var indexThree = Math.round(Math.random()*4)
    $("#slotsOne").attr("src", slots[indexOne])
    $("#slotsTwo").attr("src", slots[indexTwo])
    $("#slotsThree").attr("src", slots[indexThree])
    if ($("#slotsOne").attr("src") == $("#slotsTwo").attr("src") && $("#slotsTwo").attr("src") == $("#slotsThree").attr("src")) {
        $("#totalDisplay").text(total += bet*2);
    }
    else{
        $("#totalDisplay").text(total -= bet);
      }
  }else if ($("#totalDisplay").text() == "none") {
      alert("You must place a bet")
  }

}
//set max
function max(){
  $("#totalDisplay").text("You have placed a bet")
  $('#bet').text("You bet" + bet);
  bet += 100
  // $("#totalBet").val("");

}
//set min
function min(){
  $("#totalDisplay").text("You have placed a bet")
  $('#bet').text("You bet" + bet);
  bet += 10;
}
//slots
//reels
//when user pulls level, shows a random slot image for each reel
