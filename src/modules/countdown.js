export default function countdown() {
  const countdownCtn = document.getElementById("counter");
  const countDownDate = new Date("May 26, 2025 17:00:00").getTime();

  for (let i = 0; i < 5; i++) {
    const div = document.createElement("div");
    div.classList.add("counter");
    countdownCtn.appendChild(div);
  }

  for (let i = 0; i < 5; i++) {
    const div = document.createElement("div");
    div.classList.add("counter-label");
    countdownCtn.appendChild(div);
  }

  const countDownUI = document.querySelectorAll(".counter");
  const counterLabel = document.querySelectorAll(".counter-label");

  counterLabel[0].innerHTML = "months";
  counterLabel[1].innerHTML = "days";
  counterLabel[2].innerHTML = "hours";
  counterLabel[3].innerHTML = "minutes";
  counterLabel[4].innerHTML = "seconds";

  const x = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance > 0) {
      // Calculate months using date manipulation
      const nowDate = new Date();
      const futureDate = new Date(countDownDate);

      const totalMonths =
        futureDate.getFullYear() * 12 +
        futureDate.getMonth() -
        (nowDate.getFullYear() * 12 + nowDate.getMonth());

      const days = Math.floor(
        (distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
      );
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const formatTwoDigits = (num) => (num < 10 ? "0" + num : num);

      // Update countdown UI
      countDownUI[0].innerHTML = formatTwoDigits(totalMonths);
      countDownUI[1].innerHTML = formatTwoDigits(days);
      countDownUI[2].innerHTML = formatTwoDigits(hours);
      countDownUI[3].innerHTML = formatTwoDigits(minutes);
      countDownUI[4].innerHTML = formatTwoDigits(seconds);
    } else {
      // Countdown finished
      clearInterval(x);

      // Reset counters and display a message
      for (let i = 0; i < countDownUI.length; i++) {
        countDownUI[i].innerHTML = "00";
      }

      const messageElement = document.getElementById("countdown-message");
      if (messageElement) {
        messageElement.innerHTML = "Today's the day!";
      }
    }
  }, 1000);
}
