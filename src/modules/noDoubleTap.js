export default function () {
  const menu = document.getElementById("dropdown-menu");
  const toggleButton = document.getElementById("menu-toggle");
  let lastTouchEnd = 0;

  document.addEventListener(
    "touchend",
    (event) => {
      const now = new Date().getTime();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault(); // Prevent double-tap zoom
      }
      lastTouchEnd = now;
    },
    false
  );
}
