export default function volumeControl() {
  const video = document.querySelector("video");
  const volumeControl = document.getElementById("volume-control");
  const unmute = document.getElementById("unmute");
  const mute = document.getElementById("mute");

  // Check if the device is a phone
  const isPhone =
    /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(
      navigator.userAgent
    );

  if (isPhone) {
    // Hide the volume control for phones
    volumeControl.style.display = "none";
    return; // Skip adding event listeners for volume control
  }

  // Add event listeners for volume control
  volumeControl.addEventListener("input", () => {
    video.volume = volumeControl.value;
  });

  unmute.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      volumeControl.classList.toggle("visible");
    }
  });

  mute.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      volumeControl.classList.remove("visible");
    }
  });
}
