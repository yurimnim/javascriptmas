const gallery = document.getElementsByClassName('gallery')[0];
const prevBtn = document.getElementsByClassName('previous')[0];
const nextBtn = document.getElementsByClassName('next')[0];

const galleryCardCount = 5;

let currentGalleryxOffset = 0;
const endGalleryXOffset = (galleryCardCount - 1) * -220;

prevBtn.addEventListener('click', galleryClickHandler);
nextBtn.addEventListener('click', galleryClickHandler);

function galleryClickHandler(event) {
  let targetBtn = event.target.className;

  if (targetBtn == 'previous' && currentGalleryxOffset < 0) {
    currentGalleryxOffset += 220;
  } else if (targetBtn == 'next' && currentGalleryxOffset > endGalleryXOffset) {
    currentGalleryxOffset -= 220;
  }

  if (currentGalleryxOffset == 0) {
    prevBtn.style.opacity = 0.3;
    prevBtn.style.cursor = 'default';
  } else {
    prevBtn.style.opacity = 1;
    prevBtn.style.cursor = 'pointer';
  }

  if (currentGalleryxOffset == endGalleryXOffset) {
    nextBtn.style.opacity = 0.3;
    nextBtn.style.cursor = 'default';
  } else {
    nextBtn.style.opacity = 1;
    nextBtn.style.cursor = 'pointer';
  }

  gallery.style.transform = `translateX(${currentGalleryxOffset}px)`;
}
