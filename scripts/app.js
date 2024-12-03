// Elements for Buttons
let dailyBtn = document.getElementById("dailyBtn");
let weeklyBtn = document.getElementById("weeklyBtn");
let monthlyBtn = document.getElementById("monthlyBtn");

// Elements for Data
let workCurrentHours = document.getElementById("workCurrentHours");
let workPreviousHours = document.getElementById("workPreviousHours");
let playCurrentHours = document.getElementById("playCurrentHours");
let playPreviousHours = document.getElementById("playPreviousHours");
let studyCurrentHours = document.getElementById("studyCurrentHours");
let studyPreviousHours = document.getElementById("studyPreviousHours");
let exerciseCurrentHours = document.getElementById("exerciseCurrentHours");
let exercisePreviousHours = document.getElementById("exercisePreviousHours");
let socialCurrentHours = document.getElementById("socialCurrentHours");
let socialPreviousHours = document.getElementById("socialPreviousHours");
let selfCareCurrentHours = document.getElementById("selfCareCurrentHours");
let selfCarePreviousHours = document.getElementById("selfCarePreviousHours");

// Functions

function getTimeData() {
  return fetch("../data/data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}

getTimeData();

dailyBtn.addEventListener("click", function () {
  getTimeData().then( times => {
    console.log(times[0].timeframes.daily.current)

    workCurrentHours.innerText = `${times[0].timeframes.daily.current}hrs`;
    workPreviousHours.innerText = `Last Week - ${times[0].timeframes.daily.previous}hrs`;
    playCurrentHours.innerText = `${times[1].timeframes.daily.current}hrs`;
    playPreviousHours.innerText = `Last Week - ${times[1].timeframes.daily.previous}hrs`;
    studyCurrentHours.innerText = `${times[2].timeframes.daily.current}hrs`;
    studyPreviousHours.innerText = `Last Week - ${times[2].timeframes.daily.previous}hrs`;
    exerciseCurrentHours.innerText = `${times[3].timeframes.daily.current}hrs`;
    exercisePreviousHours.innerText = `Last Week - ${times[3].timeframes.daily.previous}hrs`;
    socialCurrentHours.innerText = `${times[4].timeframes.daily.current}hrs`;
    socialPreviousHours.innerText = `Last Week - ${times[4].timeframes.daily.previous}hrs`;
    selfCareCurrentHours.innerText = `${times[5].timeframes.daily.current}hrs`;
    selfCarePreviousHours.innerText = `Last Week - ${times[5].timeframes.daily.previous}hrs`;

    
  });
});

weeklyBtn.addEventListener("click", function () {
    getTimeData().then( times => {
        console.log(times[0].timeframes.weekly.current)
        
        workCurrentHours.innerText = `${times[0].timeframes.weekly.current}hrs`;
        workPreviousHours.innerText = `Last Week - ${times[0].timeframes.weekly.previous}hrs`;
        playCurrentHours.innerText = `${times[1].timeframes.weekly.current}hrs`;
        playPreviousHours.innerText = `Last Week - ${times[1].timeframes.weekly.previous}hrs`;
        studyCurrentHours.innerText = `${times[2].timeframes.weekly.current}hrs`;
        studyPreviousHours.innerText = `Last Week - ${times[2].timeframes.weekly.previous}hrs`;
        exerciseCurrentHours.innerText = `${times[3].timeframes.weekly.current}hrs`;
        exercisePreviousHours.innerText = `Last Week - ${times[3].timeframes.weekly.previous}hrs`;
        socialCurrentHours.innerText = `${times[4].timeframes.weekly.current}hrs`;
        socialPreviousHours.innerText = `Last Week - ${times[4].timeframes.weekly.previous}hrs`;
        selfCareCurrentHours.innerText = `${times[5].timeframes.weekly.current}hrs`;
        selfCarePreviousHours.innerText = `Last Week - ${times[5].timeframes.weekly.previous}hrs`;
    
        
      });
});

monthlyBtn.addEventListener("click", function () {

    getTimeData().then( times => {
        console.log(times[0].timeframes.monthly.current)
        
        workCurrentHours.innerText = `${times[0].timeframes.monthly.current}hrs`;
        workPreviousHours.innerText = `Last Week - ${times[0].timeframes.monthly.previous}hrs`;
        playCurrentHours.innerText = `${times[1].timeframes.monthly.current}hrs`;
        playPreviousHours.innerText = `Last Week - ${times[1].timeframes.monthly.previous}hrs`;
        studyCurrentHours.innerText = `${times[2].timeframes.monthly.current}hrs`;
        studyPreviousHours.innerText = `Last Week - ${times[2].timeframes.monthly.previous}hrs`;
        exerciseCurrentHours.innerText = `${times[3].timeframes.monthly.current}hrs`;
        exercisePreviousHours.innerText = `Last Week - ${times[3].timeframes.monthly.previous}hrs`;
        socialCurrentHours.innerText = `${times[4].timeframes.monthly.current}hrs`;
        socialPreviousHours.innerText = `Last Week - ${times[4].timeframes.monthly.previous}hrs`;
        selfCareCurrentHours.innerText = `${times[5].timeframes.monthly.current}hrs`;
        selfCarePreviousHours.innerText = `Last Week - ${times[5].timeframes.monthly.previous}hrs`;
    
        
      });
});
