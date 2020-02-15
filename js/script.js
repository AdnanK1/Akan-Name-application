document.getElementById("marker").addEventListener("click", function(event){
  event.preventDefault()
});
function callingName(){
  var date = parseInt(document.getElementById("DD").value);
  var year = parseInt(document.getElementById("YY").value);
  var month = parseInt(document.getElementById("MM").value);
  var male = document.getElementById("male").value;
  var female = document.getElementById("female").value;
  var malenames = ["Kwasi","Kwadwo","Kwadena","Kwaku","Yaw","Kofi","Kwame"]
  var femalenames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

  var birth = new Date(month+'/'+date+'/'+year);
  var myDay = birth.getDay()
  console.log(myDay);
  if (myDay == 0)
  {
      Day = "Sunday";
  }
  else if (myDay == 1)
  {
      Day = "Monday";
  }
  else if (myDay == 2)
  {
      Day = "Tuesday";
  }
  else if (myDay == 3)
  {
      Day = "Wednesday";
  }
  else if (myDay == 4)
  {
      Day = "Thursday";
  }
  else if (myDay == 5)
  {
      Day = "Friday";
  }
  else
  {
      Day = "Saturday";
  }

  if(date<0 || date>31){
    alert("Please Enter a valid day")
  }
  if(month<0 || month>12){
    alert("Please Enter a valid Month")
  }
  if(YY)

  if (document.getElementById('male').checked) {
    document.getElementById("akanName").innerText = "Your Akan name is "+malenames[myDay]+" because you were born on " +Day

  }
  else if (document.getElementById('female').checked){
    document.getElementById("akanName").innerText = "Your Akan name is "+ femalenames[myDay]+" because you were born on " +Day

  }
  else{
    document.getElementById("akanName").innerHTML = "I cannot get your Akan name";
  }


}
