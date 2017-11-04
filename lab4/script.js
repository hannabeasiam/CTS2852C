
var theMonths = new Array('January','February','March',
'April','May','June','July','August','September',
  'October','November','December');
var weekDays = new Array('Sunday','Monday','Tuesday',
  'Wednesday','Thursday','Friday','Saturday');
//get current Date and store value here
var currentDate = new Date();
document.write(currentDate + '<br/>');
//get current month as number
document.write('Today is ' + currentDate.getMonth() + '<br/>');
//store value under thisMonth
var thisMonth = currentDate.getMonth();


var thisDay = currentDate.getDay();

var thisDate = currentDate.getDate();

//get current year as number
//document.write('4 Current Year is ' + currentDate.getYear() + '<br/>');

//use getFullYear, display year correctly
var thisYear = currentDate.getFullYear();

//document.write('here test ' + thisMonth + ' ' + thisDay + ' ' + thisDate + ' ' + thisYear);
console.log(thisMonth);


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

document.write('Birth day next year is ' + nextBirthDay + '<br/>');


//var diffTime = Math.abs(currentDate.getTime() - nextBirthDay.getTime());
var diffDay = Math.round((Number(nextBirthDay) - Number(currentDate)) / (1000 * 3600 * 24)) -1 ;
console.log(diffDay);

document.write('Till your next birthday, Days left: ' + diffDay);