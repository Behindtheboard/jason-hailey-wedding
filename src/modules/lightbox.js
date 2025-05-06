import ParkingGuideImg from "../img/ParkingGuide.png";

export default function lightbox() {
  function importAll(r) {
    return r.keys().map(r);
  }
  const images = importAll(
    require.context("../images", false, /\.(png|jpe?g|gif)$/)
  );

  // Grab gallery and lightbox elements
  const gallery = document.querySelector(".gallery");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = lightbox.querySelector("img");

  const parkingGuide = document.getElementById("parking-guide");
  parkingGuide.addEventListener("click", () => {
    lightboxImg.src = ParkingGuideImg;
    lightbox.classList.add("active");
  });

  // 1) Build the gallery
  images.forEach((src) => {
    const item = document.createElement("div");
    item.className = "gallery-item";
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Photo";
    img.style.width = "100%";
    item.appendChild(img);
    gallery.appendChild(item);

    // 2) Click → show in lightbox
    item.addEventListener("click", () => {
      lightboxImg.src = src;
      lightbox.classList.add("active");
    });
  });

  // 3) Click on overlay to close
  lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
      lightbox.classList.remove("active");
    }
  });
}
