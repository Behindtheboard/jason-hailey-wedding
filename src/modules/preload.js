export default function preload() {
  document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading");
    const progressBar = document.getElementById("progress-bar");
    const container = document.getElementById("container");

    // Select all resources to track (images and videos)
    const resources = [
      ...document.images,
      ...document.querySelectorAll("video"),
    ];
    let loadedCount = 0;

    // Update the progress bar and check if all resources are loaded
    function updateProgress() {
      loadedCount++;
      const progress = Math.round((loadedCount / resources.length) * 100);
      progressBar.style.width = `${progress}%`;

      // Hide loading screen when all resources are loaded
      if (loadedCount === resources.length) {
        setTimeout(() => {
          loadingScreen.style.opacity = "0"; // Smooth fade-out
          setTimeout(() => {
            loadingScreen.style.display = "none"; // Fully hide after fade-out
            container.style.display = "block"; // Show main content
          }, 500); // Ensure fade-out transition completes
        }, 500); // Optional delay for a smoother experience
      }
    }

    // Attach event listeners to track resource loading
    resources.forEach((resource) => {
      if (resource.complete) {
        // Resource already loaded
        updateProgress();
      } else {
        // Wait for resource to load
        resource.addEventListener("load", updateProgress);
        resource.addEventListener("error", () => {
          console.error(
            `Error loading resource: ${resource.src || resource.currentSrc}`
          );
          updateProgress(); // Still count the failed resource to avoid freezing
        });
      }
    });
  });
}
