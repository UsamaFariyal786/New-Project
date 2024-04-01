
  
    const tickerText = document.querySelector('.ticker-text');

   
    function updateTicker() {
      const currentDate = new Date().toLocaleDateString();
      const currentTime = new Date().toLocaleTimeString();

     
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const location = `${latitude}, ${longitude}`;
            tickerText.textContent = `Current Date: ${currentDate} | Current Time: ${currentTime} | Location: ${location}`;
          },
          (error) => {
            console.error("Error getting location:", error);
            tickerText.textContent = `Current Date: ${currentDate} | Current Time: ${currentTime} | Location: Unavailable`;
          }
        );
      } else {
        tickerText.textContent = `Current Date: ${currentDate} | Current Time: ${currentTime} | Location: Geolocation not supported`;
      }
    }
    updateTicker();
    setInterval(updateTicker, 60000);
