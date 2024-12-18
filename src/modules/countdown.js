export default function countdown() {
    const countDownUI = document.getElementById("counter");
    const countDownDate = new Date("May 19, 2025 17:00:00").getTime();
    
    const x = setInterval(() => {
      const now = new Date().getTime();
    
      const distance = countDownDate - now;
    
      const totalMonths = Math.floor(distance / (1000 * 60 * 60 * 24 * 30.44)); // Average month length in days
      const days = Math.floor(
        (distance % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
      );
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      const formatTwoDigits = (num) => (num < 10 ? "0" + num : num);
    
      countDownUI.innerHTML =
        formatTwoDigits(totalMonths) +
        " : " +
        formatTwoDigits(days) +
        " : " +
        formatTwoDigits(hours) +
        " : " +
        formatTwoDigits(minutes) +
        " : " +
        formatTwoDigits(seconds);
    
      if (distance < 0) {
        clearInterval(x);
        countDownUI.innerHTML = "Today's the day!";
      }
    }, 1000);
    
}
