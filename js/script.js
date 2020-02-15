document.getElementById("marker").addEventListener("click", function(event){
  event.preventDefault()
});
function callingName(){
  var date = document.getElementById("DD").value;
  var year = document.getElementById("YY").value;
  var month = document.getElementById("MM").value;
  var male = document.getElementById("male").value;
  var female = document.getElementById("female").value;
  var malenames = ["Kwasi","Kwadwo","Kwadena","Kwaku","Yaw","Kofi","Kwame"]
  var femalenames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

  //using an inbuilt function
  var birth = new Date(month+'/'+date'/'+year);
  var myDay = birth.getDay()

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

  if(DD<0 || DD>31){
    alert("Please Enter a valid day")
  }
  if(MM<0 || MM>12){
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
