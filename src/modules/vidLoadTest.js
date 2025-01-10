export default function vidLoadTest() {
  const videos = document.querySelectorAll("video");
  let loadedVideos = 0;

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const video = document.querySelector("video");
  
  document.addEventListener("DOMContentLoaded", () => {
    if (video.readyState < 3) {
      // If video isn't fully ready, reload it
      console.log("Video failed to load, attempting reload...");
      video.load();
    }
  });

  videos.forEach((video, i) => {
    if (video.readyState >= 4) {
      // Video is already fully buffered
      // console.log(`buffered:${i}`);
      loadedVideos++;
    } else {
      // Wait for the video to be ready
      video.addEventListener("canplaythrough", () => {
        // console.log(`can play through: ${i}`);
        loadedVideos++;
        // console.log(`loaded videos: ${loadedVideos}`);
        video.play = true;
      });
    }
  });
}
