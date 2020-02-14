document.getElementById("marker").addEventListener("click", function(event){
  event.preventDefault()
});
function callingName(){
  var dayTime = document.getElementById("dateValue").valueAsDate;
  var date = dayTime.getDate();
  var month = dayTime.getMonth() + 1;
  var year = dayTime.getFullYear();
  var dateArray= [date];
  console.log(dateArray);

}
