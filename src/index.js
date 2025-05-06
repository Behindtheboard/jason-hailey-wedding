import loadVideo from "./modules/loadVideo";
import "./styles.css";
import "./masonry.css"
import dropdown from "./modules/dropdown";
import countdown from "./modules/countdown";
import noDoubleTap from "./modules/noDoubleTap";
import sound from "./modules/sound";
import volumeControl from "./modules/volumeControl";
import home from "./modules/home";
import ourStory from "./modules/ourStory";
import translate from "./modules/translate";

translate();
noDoubleTap();
home();
dropdown();
sound();
volumeControl();
countdown();
ourStory();
// rsvp();
loadVideo();




// Require all images in the /images folder
function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('./images', false, /\.(png|jpe?g|gif)$/));

// Grab gallery and lightbox elements
const gallery = document.querySelector('.gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');

// 1) Build the gallery
images.forEach(src => {
  const item = document.createElement('div');
  item.className = 'gallery-item';
  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Photo';
  img.style.width = '100%';
  item.appendChild(img);
  gallery.appendChild(item);

  // 2) Click → show in lightbox
  item.addEventListener('click', () => {
    lightboxImg.src = src;
    lightbox.classList.add('active');
  });
});

// 3) Click on overlay to close
lightbox.addEventListener('click', e => {
  if (e.target !== lightboxImg) {
    lightbox.classList.remove('active');
  }
});
