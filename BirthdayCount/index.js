let myBirthday = "29 may 2025";

function brithday(){
  let birthDays = new Date(myBirthday);
  let courentDate = new Date();
  let totalSeconts = (birthDays - courentDate) / 1000;
  
  let days =Math.floor( totalSeconts / (60 * 60 * 24))
  let hour = Math.floor( (totalSeconts % (60 * 60 * 24)) /(60 * 60))
  let minits = Math.floor( (totalSeconts % (60 * 60) / 60))
  let seconts = Math.floor( totalSeconts % 60)
  document.getElementById("day").innerHTML = counttime(days) ; 
  document.getElementById("hours").innerHTML = counttime(hour); 
  document.getElementById("minits").innerHTML = counttime(minits); 
  document.getElementById("seconts").innerHTML = counttime(seconts); 
}
brithday()
function counttime(time){
    if(time < 10 ){
        return "0" + time 
    }
    else{
        return time
    }
}
setInterval(brithday, 1000)