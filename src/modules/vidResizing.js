export default function vidResizing() {
  const video = document.querySelector("video");
  window.addEventListener("resize", () => {
    video.width = `${window.innerWidth}`;
    video.height = `${window.innerHeight}`;
    console.log(`Viewport Width: ${window.innerWidth}`);
    console.log(`Viewport Height: ${window.innerHeight}`);
  });
}
