export default function sound() {
  const unmute = document.getElementById("unmute");
  const mute = document.getElementById("mute");
  const video = document.querySelector("video");

  const volumeControl = document.getElementById("volume-control");

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
      volumeControl.classList.toggle("visible");
      video.muted = true;
    }
  });

  video.addEventListener('click', () => {
    if (video.muted === false) {
      unmute.classList.toggle("visible");
      mute.classList.remove("visible");
      volumeControl.classList.remove("visible");
      video.muted = true
    } else if (video.muted === true) {
      mute.classList.toggle("visible");
      unmute.classList.remove("visible");
      volumeControl.classList.toggle("visible");
      video.muted = false
    }
  })

}
