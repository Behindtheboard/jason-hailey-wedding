import smallVideoSrc from "/src/videos/bg-video-16-9.mp4";
import largeVideoSrc from "/src/videos/bg-video-9-16.mp4";

export default function loadVideo() {
  async function loadVideo() {
    const video = document.getElementById("background-video");
    const container = document.getElementById("video-container");

    await new Promise((resolve) => {
      window.onload = resolve;
    });

    const source = document.createElement("source");
    source.src =
      window.innerWidth <= 500
        ? smallVideoSrc
        : largeVideoSrc
    source.type = "video/mp4";

    video.appendChild(source);

    try {
      await video.load(); 
      video.style.display = "block";
      console.log(`${source.src}`)
    } catch (error) {
      console.error("Error loading video:", error);
      container.innerHTML = "<p>Video failed to load. Refresh</p>";
    }
  }

  loadVideo();
}
