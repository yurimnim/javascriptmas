// javascript
const gallery = document.getElementsByClassName('gallery')[0];
const prevBtn = document.getElementsByClassName('previous')[0];
const nextBtn = document.getElementsByClassName('next')[0];
const galleryCardCount = document.getElementsByClassName('card').length;

let currentGalleryXOffset = 0;
const endGalleryXOffset = (galleryCardCount - 1) * -220;

prevBtn.addEventListener('click', galleryClickHandler);
nextBtn.addEventListener('click', galleryClickHandler);

function galleryClickHandler(event) {
  let targetBtn = event.target.className;
  if (targetBtn == 'previous' && currentGalleryXOffset < 0) {
    currentGalleryXOffset += 220;
  } else if (targetBtn == 'next' && currentGalleryXOffset > endGalleryXOffset) {
    currentGalleryXOffset -= 220;
  }

  if (currentGalleryXOffset == 0) {
    prevBtn.style.opacity = 0.3;
    prevBtn.style.cursor = 'default';
  } else {
    prevBtn.style.opacity = 1;
    prevBtn.style.cursor = 'pointer';
  }

  if (currentGalleryXOffset == endGalleryXOffset) {
    nextBtn.style.opacity = 0.3;
    nextBtn.style.cursor = 'default';
  } else {
    nextBtn.style.opacity = 1;
    nextBtn.style.cursor = 'pointer';
  }

  gallery.style.transform = `translateX(${currentGalleryXOffset}px)`;
}
