export default function vidLoadTest() {
  const videos = document.querySelectorAll("video");
  let loadedVideos = 0;

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  videos.forEach((video, i) => {
    if (video.readyState >= 4) {
      // Video is already fully buffered
      console.log(`buffered:${i}`);
      loadedVideos++;
    } else {
      // Wait for the video to be ready
      video.addEventListener("canplaythrough", () => {
        console.log(`can play through: ${i}`);
        loadedVideos++;
        console.log(`loaded videos: ${loadedVideos}`);
        video.play = true;
      });
      video.addEventListener("error", () => {
        console.error(`Video failed to load: ${video.currentSrc}`);
        loadedVideos++;
        alert('Awesome video failed to load: Refresh page!') // Count failed resources to avoid freezing
      });
    }
  });
}
