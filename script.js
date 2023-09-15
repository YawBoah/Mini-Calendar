const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const allmonths = [ "January", "February","March","April", "May","June","July", "August", "September","October","November","December"];

date.innerHTML = today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allmonths[today.getMonth()];
year.innerHTML = today.getFullYear();