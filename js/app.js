const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const hero = document.querySelector('.hero');
const canImg = document.querySelector('.can-img');
const images = [
  './images/can1.png',
  './images/can2.png',
  './images/can3.png',
];
const bgImages = [
  './images/bgBlur1.png',
  './images/bgBlur2.png',
  './images/bgBlur3.png',
]
let currentIndex = 0;

function changeImages() {
  const currentCanImage = images[currentIndex];
  const currentBgImage = bgImages[currentIndex];
  canImg.src = currentCanImage;
  hero.style.backgroundImage = `url(${currentBgImage})`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  changeImages();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  changeImages();
});
