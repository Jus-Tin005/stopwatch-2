// const getDisplay = document.querySelector(".display"),
const getDisplay = document.querySelectorAll(".display"),
          getStartBtn = document.querySelector(".start"),
          getPauseBtn = document.querySelector(".pause"),
          getResetBtn = document.querySelector(".reset");



const getDisplaySecond = document.querySelector("#displaySecond"),
         getDisplayMilisecond = document.querySelector("#displayMilisecond"),
         getModeBtn = document.querySelector(".mode-btn");
        //  console.log(getDisplaySecond,getDisplayMilisecond,getModeBtn);



// method 1
 /*var hours = 0,
      minutes = 0,
      seconds = 0,
      miliSeconds = 0;  */

// method 2
var [hours,minutes,seconds,miliSeconds] = [1,2,3,4];
// console.log(hours);



// Method 1

// getStartBtn.addEventListener('click',startTime);
// getPauseBtn.addEventListener('click',pauseTime);
// getResetBtn.addEventListener('click',resetTime);




// var setindividualDisplay;



// function startTime() {
//         // console.log("start")

//         clearInterval(setindividualDisplay);

//         setindividualDisplay = setInterval(showDisplay,100);
// }


// function pauseTime() {
//         // console.log("pause")

//         clearInterval(setindividualDisplay);
// }

// function resetTime() {
//         // console.log("reset");

//         clearInterval(setindividualDisplay);
//         [hours,minutes,seconds,miliSeconds] = [0,0,0,0];
//         getDisplay.innerHTML = "00 : 00: 00: 000";
// }


// function showDisplay() {
//         // console.log("heeeee");

//         miliSeconds += 10;
//         // console.log(miliSeconds);

//         if(miliSeconds === 1000){
//                 miliSeconds = 0;

//                 seconds++;
//                 if(seconds === 60) {
//                         seconds = 0;

//                         minutes++;

//                         if(minutes === 60) {
//                                 minutes = 0;

//                                 hours++;
//                         }
//                 }


//         }

//         // console.log(miliSeconds);
//         // console.log(seconds);


//         let h = hours < 10 ? "0" + hours : hours;
//         let m = minutes < 10 ? "0" + minutes : minutes;
//         let s = seconds < 10 ? "0"  + seconds : seconds;
//         let ms = miliSeconds < 10 ?  "00"  +miliSeconds : miliSeconds < 100 ? "0"  +miliSeconds : miliSeconds;

//         getDisplay.innerHTML = `${h} : ${m} : ${s} : ${ms}`;

//         // for method 2
//         // getDisplay[idx].innerHTML = `${h} : ${m} : ${s} : ${ms}`;
// }




var setindividualDisplay;




// method 2
var idx = 0;
getDisplay[idx].style.display = "block";
getModeBtn.onclick =function(){

        reloadAgain();
        [hours,minutes,seconds,miliSeconds] = [0,0,0,0];


        getDisplay[idx].style.display ="none";
        idx++;
        if(idx >1){
                idx = 0;

                getDisplay[idx].style.display = "block";
        }
        // console.log(idx);

        getDisplay[idx].style.display = "block";
        getModeBtn.innerHTML = `Mode ${idx + 1}`;

        // console.log(idx);
}


getStartBtn.onclick = function() {
        // console.log("hi");
        clearInterval(setindividualDisplay);
        setindividualDisplay = setInterval(showDisplay,10);

}


getPauseBtn.onclick = function(){
        clearInterval(setindividualDisplay);
        // console.log("ooo");
}


getResetBtn.onclick = function(){
        reloadAgain();
        // console.log("99");

}



function reloadAgain(){

        if(idx === 0){
                clearInterval(setindividualDisplay);
                [hours,minutes,seconds,miliSeconds] = [0,0,0,0];
                getDisplay[idx].innerHTML = "00 : 00: 00: 000";
        }else {
                clearInterval(setindividualDisplay);
                miliSeconds = "00";
                seconds = "00";
                getDisplayMilisecond.innerHTML = miliSeconds;
                getDisplaySecond.innerHTML = seconds;
        }
}

function showDisplay(){


if(idx ===0){
        miliSeconds += 10;
        // console.log(miliSeconds);

        if(miliSeconds === 1000){
                miliSeconds = 0;

                seconds++;
                if(seconds === 60) {
                        seconds = 0;

                        minutes++;

                        if(minutes === 60) {
                                minutes = 0;

                                hours++;
                        }
                }


        }

        // console.log(miliSeconds);
        // console.log(seconds);


        let h = hours < 10 ? "0" + hours : hours;
        let m = minutes < 10 ? "0" + minutes : minutes;
        let s = seconds < 10 ? "0"  + seconds : seconds;
        let ms = miliSeconds < 10 ?  "00"  +miliSeconds : miliSeconds < 100 ? "0"  +miliSeconds : miliSeconds;

        getDisplay[idx].innerHTML = `${h} : ${m} : ${s} : ${ms}`;

        // for method 2
        // getDisplay[idx].innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}else{
        miliSeconds++;
        // console.log(miliSeconds);

        if(miliSeconds <= 9){
                getDisplayMilisecond.innerHTML = "0" + miliSeconds;
        }

        if(miliSeconds > 9){
                getDisplayMilisecond.innerHTML = miliSeconds;
        }

        if(miliSeconds > 99){
                miliSeconds = 0;
                seconds++;
                getDisplayMilisecond.innerHTML = "0" + 0;
                getDisplaySecond.innerHTML = "0" + seconds;
        }

        if(seconds > 9){
                getDisplaySecond.innerHTML = seconds;
        }
}

}