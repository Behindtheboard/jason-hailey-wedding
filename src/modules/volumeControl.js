export default function volumeControl() {
  const video = document.querySelector("video");
  const volumeControl = document.getElementById("volume-control");

  volumeControl.addEventListener("input", () => {
    video.volume = volumeControl.value;
  });

  video.volume = volumeControl.value;


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
