let currentImageIndex = 1;
const totalImages = 4;

function showImage(index) {
  currentImageIndex = index;
  const imageElement = document.getElementById("gallery-image");
  imageElement.src = `images/image${index}.jpg`;
  updateThumbnails();
}

function nextImage() {
  currentImageIndex = (currentImageIndex % totalImages) + 1;
  showImage(currentImageIndex);
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 2 + totalImages) % totalImages + 1;
  showImage(currentImageIndex);
}

function updateThumbnails() {
  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.classList.remove('active');
    if (index + 1 === currentImageIndex) {
      thumbnail.classList.add('active');
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  showImage(currentImageIndex);
});
