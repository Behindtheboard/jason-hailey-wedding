export default function sound() {
  const unmute = document.getElementById("unmute");
  const mute = document.getElementById("mute");
  const video = document.querySelector("video");

  unmute.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      mute.classList.toggle("visible");
      unmute.classList.remove("visible");
      video.muted = false;
    }
  });

  mute.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      unmute.classList.toggle("visible");
      mute.classList.remove("visible");
      video.muted = true;
    }
  });
}
