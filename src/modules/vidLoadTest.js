export default function vidLoadTest() {
  const videos = document.querySelectorAll("video");
  let loadedVideos = 0;

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
      });
      video.addEventListener("error", () => {
        console.error(`Video failed to load: ${video.currentSrc}`);
        loadedVideos++; // Count failed resources to avoid freezing
      });
    }
  });
}
