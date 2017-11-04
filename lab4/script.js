
var theMonths = new Array('January','February','March','April','May','June','July','August','September',  'October','November','December');
var weekDays = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');

//get current Date and store value here
var currentDate = new Date();

//store value under thisMonth, thisDay, thisDate
var thisMonth = currentDate.getMonth();
var thisDay = currentDate.getDay();
var thisDate = currentDate.getDate();
//use getFullYear
var thisYear = currentDate.getFullYear();

console.log(thisMonth);
function calculate(){
  //make new object nextBirthDay
  var birthMonth = Number(prompt('What is your birth Month?'));
  var birthDate = Number(prompt('What is your birth Date?'));
  console.log(birthMonth);
  var nextBirthDay = new Date();
  var commingBD = nextBirthDay.setDate(birthDate);
  nextBirthDay.setMonth(birthMonth - 1);
    //nextBirthDay.setTime(0,0,0,0);
    if ((thisMonth >= birthMonth) && (thisDate > birthDate)){
      nextBirthDay.setYear(nextBirthDay.getFullYear()+1);
    }
    else if (thisMonth < birthMonth) {
      nextBirthDay.setYear(nextBirthDay.getFullYear());
    }
    else if ((thismonth == birthDate) && (thisDate == birthDate)){
      alert('Happy birthday');
    }

  document.getElementById("display1").innerHTML = 'Today is : ' + currentDate + '<br/>';
  //document.write('Today is : ' + currentDate + '<br/>');

  //document.write('Birth day next year is ' + nextBirthDay + '<br/>');
  document.getElementById("display2").innerHTML = 'Birth day next year is ' + nextBirthDay;

  //var diffTime = Math.abs(currentDate.getTime() - nextBirthDay.getTime());
  var diffDay = Math.round((Number(nextBirthDay) - Number(currentDate)) / (1000 * 3600 * 24)) -1 ;
  console.log(diffDay);
  document.getElementById("display3").innerHTML = diffDay;

}