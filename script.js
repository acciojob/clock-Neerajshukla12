 function updateTimer() {
      // let now = new Date();
      // let  dateTime = now.toString();
      document.getElementById("timer").innerHTML =new Date();
    }
    updateTimer();
    setInterval(updateTimer, 1000);