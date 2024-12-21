export default function countdown() {
  const countdownCtn = document.getElementById("counter");
  const countDownDate = new Date("May 19, 2025 17:00:00").getTime();

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

  counterLabel[0].innerHTML = "Monthes";
  counterLabel[1].innerHTML = "Days";
  counterLabel[2].innerHTML = "Hours";
  counterLabel[3].innerHTML = "Minutes";
  counterLabel[4].innerHTML = "Seconds";

  const x = setInterval(() => {
    const now = new Date().getTime();

    const distance = countDownDate - now;

    const totalMonths = Math.floor(distance / (1000 * 60 * 60 * 24 * 30.44)); // Average month length in days
    const days = Math.floor(
      (distance % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
    );
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const formatTwoDigits = (num) => (num < 10 ? "0" + num : num);

    countDownUI[0].innerHTML = formatTwoDigits(totalMonths);
    countDownUI[1].innerHTML = formatTwoDigits(days);
    countDownUI[2].innerHTML = formatTwoDigits(hours);
    countDownUI[3].innerHTML = formatTwoDigits(minutes);
    countDownUI[4].innerHTML = formatTwoDigits(seconds);

    if (distance < 0) {
      clearInterval(x);
      countDownUI.innerHTML = "Today's the day!";
    }
  }, 1000);
}
