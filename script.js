//your JS code here. If required.
 function updateTimer() {
      let now = new Date();
      let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };
      document.getElementById('timer').textContent = now.toLocaleString('en-US', options);
    }
    updateTimer();
    setInterval(updateTimer, 1000);