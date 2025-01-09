export default function preload() {
  // Create the <video> element
  const video = document.createElement("video");
  video.setAttribute("preload", "auto");
  video.setAttribute("muted", "");
  video.setAttribute("autoplay", "");
  video.setAttribute("loop", "");
  video.setAttribute("playsinline", "");

  // Create the first <source> element
  const source1 = document.createElement("source");
  source1.setAttribute("media", "(max-width:500px)");
  source1.setAttribute("src", "/dist/videos/bg-video-9-16.mp4");
  source1.setAttribute("type", "video/mp4");

  // Create the second <source> element
  const source2 = document.createElement("source");
  source2.setAttribute("media", "(min-width:501px)");
  source2.setAttribute("src", "/dist/videos/bg-video-16-9.mp4");
  source2.setAttribute("type", "video/mp4");

  // Append the <source> elements to the <video> element
  video.appendChild(source1);
  video.appendChild(source2);

  // Optionally, add fallback text for browsers that don't support the <video> tag
  video.appendChild(
    document.createTextNode("Your browser does not support the video tag.")
  );

  const videos = document.querySelectorAll("video");
  let loadedVideos = 0;

  videos.forEach((video, i) => {
    if (video.readyState >= 4) {
      // Video is already fully buffered
      console.log(`buffer:${i}`);
      loadedVideos++;
    } else {
      // Wait for the video to be ready
      video.addEventListener("canplaythrough", () => {
        console.log(`can play through: ${i}`);
        loadedVideos++;
      });
      video.addEventListener("error", () => {
        console.error(`Video failed to load: ${video.currentSrc}`);
        loadedVideos++; // Count failed resources to avoid freezing
      });
    }
    console.log(`loaded videos: ${loadedVideos}`)
  });
}
