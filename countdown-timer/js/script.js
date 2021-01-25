const monthList = [
   'January',
   'February',
   'March',
   'April',
   'May',
   'June',
   'July',
   'August',
   'September',
   'October',
   'November',
   'December',
];

const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Get Countdown Data Object
const opening = document.getElementById('opening');
const counter = document.getElementById('counter');
const timer = document.querySelectorAll('.timer');

// Get Countdown Date Format
// Rendering The Countdown Finish
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const openingDate = new Date(tempYear, tempMonth, tempDay + 30, 07, 45, 00);

// Get Countdown Time Data
const monthData = monthList[openingDate.getMonth()];
const dayData = dayList[openingDate.getDay()];

const yearData = openingDate.getFullYear();
const dateData = openingDate.getDate();
const hourData = openingDate.getHours();
const minuteData = openingDate.getMinutes();
const secondData = openingDate.getSeconds();

function formatTime(time) {
   if (time < 10) {
      return (time = `0${time}`);
   } else {
      return time;
   }
}

// Set Countdown Time Data
opening.textContent = `The Opening Will be Held on ${dayData}, ${dateData} ${monthData} ${yearData} ${formatTime(
   hourData,
)}:${formatTime(minuteData)}:${formatTime(secondData)} am.`;

// Get Countdown Time in Millisecond
// Get Times Value in Millisecond
const openingTime = openingDate.getTime();

function remainingTime() {
   const today = new Date().getTime();
   const time = openingTime - today;

   // 1s = 1000ms
   // 1m = 60s
   // 1h = 60m
   // 1d = 24h
   const oneDay = 24 * 60 * 60 * 1000;
   const oneHour = 60 * 60 * 1000;
   const oneMinute = 60 * 1000;
   const oneSecond = 1000;

   let days = Math.floor(time / oneDay);
   let hours = Math.floor((time % oneDay) / oneHour);
   let minutes = Math.floor((time % oneHour) / oneMinute);
   let seconds = Math.floor((time % oneMinute) / oneSecond);

   // Set Times Value in Array
   // Clear The Countdown when Finished
   // Set The Template Literal
   const timerValue = [days, hours, minutes, seconds];

   function counterFormat(item) {
      if (item < 10) {
         return (item = `0${item}`);
      } else {
         return item;
      }
   }

   timer.forEach(function (item, index) {
      item.innerHTML = counterFormat(timerValue[index]);
   });

   if (time < 0) {
      clearInterval(countdown);
      counter.innerHTML = `<h2 class="tagline tagline-normal">Our Hotel Already Open, Let's Go Visit Us Now!</h2>`;
   }
}

// Start the Countdown Counter
let countdown = setInterval(remainingTime, 1000);
remainingTime();
