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

    workCurrentHours.innerText = times[0].timeframes.daily.current;
    workPreviousHours.innerText = times[0].timeframes.daily.previous;
    playCurrentHours.innerText = times[1].timeframes.daily.current;
    playPreviousHours.innerText = times[1].timeframes.daily.previous;
    studyCurrentHours.innerText = times[2].timeframes.daily.current;
    studyPreviousHours.innerText = times[2].timeframes.daily.previous;
    exerciseCurrentHours.innerText = times[3].timeframes.daily.current;
    exercisePreviousHours.innerText = times[3].timeframes.daily.previous;
    socialCurrentHours.innerText = times[4].timeframes.daily.current;
    socialPreviousHours.innerText = times[4].timeframes.daily.previous;
    selfCareCurrentHours.innerText = times[5].timeframes.daily.current;
    selfCarePreviousHours.innerText = times[5].timeframes.daily.previous;

    
  });
});

weeklyBtn.addEventListener("click", function () {
    getTimeData().then( times => {
        console.log(times[0].timeframes.weekly.current)
        
        workCurrentHours.innerText = times[0].timeframes.weekly.current;
        workPreviousHours.innerText = times[0].timeframes.weekly.previous;
        playCurrentHours.innerText = times[1].timeframes.weekly.current;
        playPreviousHours.innerText = times[1].timeframes.weekly.previous;
        studyCurrentHours.innerText = times[2].timeframes.weekly.current;
        studyPreviousHours.innerText = times[2].timeframes.weekly.previous;
        exerciseCurrentHours.innerText = times[3].timeframes.weekly.current;
        exercisePreviousHours.innerText = times[3].timeframes.weekly.previous;
        socialCurrentHours.innerText = times[4].timeframes.weekly.current;
        socialPreviousHours.innerText = times[4].timeframes.weekly.previous;
        selfCareCurrentHours.innerText = times[5].timeframes.weekly.current;
        selfCarePreviousHours.innerText = times[5].timeframes.weekly.previous;
    
        
      });
});

monthlyBtn.addEventListener("click", function () {

    getTimeData().then( times => {
        console.log(times[0].timeframes.monthly.current)
        
        workCurrentHours.innerText = times[0].timeframes.monthly.current;
        workPreviousHours.innerText = times[0].timeframes.monthly.previous;
        playCurrentHours.innerText = times[1].timeframes.monthly.current;
        playPreviousHours.innerText = times[1].timeframes.monthly.previous;
        studyCurrentHours.innerText = times[2].timeframes.monthly.current;
        studyPreviousHours.innerText = times[2].timeframes.monthly.previous;
        exerciseCurrentHours.innerText = times[3].timeframes.monthly.current;
        exercisePreviousHours.innerText = times[3].timeframes.monthly.previous;
        socialCurrentHours.innerText = times[4].timeframes.monthly.current;
        socialPreviousHours.innerText = times[4].timeframes.monthly.previous;
        selfCareCurrentHours.innerText = times[5].timeframes.monthly.current;
        selfCarePreviousHours.innerText = times[5].timeframes.monthly.previous;
    
        
      });
});
