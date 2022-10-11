const mainImage = document.querySelector(".slider-image");
const modalImage = document.querySelector(".slider-image.for-modal");
const imageThumbnails = document.querySelectorAll(".slider-thumbnail");

const thumbnailContainers = document.querySelectorAll(".thumbnail-container.main");
const modalThumbnailContainers = document.querySelectorAll(".thumbnail-container.for-modal");

const nextImageButton = document.getElementById("nextImageBtn")
const previousImageButton = document.getElementById("previousImageBtn")

const nextModalButton = document.getElementById("nextModalBtn")
const previousModalButton = document.getElementById("previousModalBtn")

const sliderModal = document.querySelector(".slider-modal");
const closeModal = document.getElementById("closeModal")

const productImages = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg",
]

let currentImage = 0;

// Show an image when page loads
function showMainImage(image, container, imageNumber = currentImage) {
    image.src = productImages[imageNumber]
    container.forEach(thumbnail => {
        thumbnail.classList.remove("active")
        if (thumbnail.id == currentImage + 1) {
            thumbnail.classList.add("active");
        }
    })
}
window.addEventListener("DOMContentLoaded", showMainImage(mainImage, thumbnailContainers));
window.addEventListener("DOMContentLoaded", showMainImage(modalImage, modalThumbnailContainers));


// Change image when thumbnail clicked
function changeMainImage(image, container) {
    container.forEach(thumbnail => {
        thumbnail.addEventListener("click", function () {
            currentImage = thumbnail.id - 1
            showMainImage(image, container, currentImage);
        })
    })
}
window.addEventListener("DOMContentLoaded", changeMainImage(mainImage, thumbnailContainers));
window.addEventListener("DOMContentLoaded", changeMainImage(modalImage, modalThumbnailContainers));


// Previous and next images
function nextImage(image, container, button) {
    button.addEventListener("click", function () {
        currentImage++;
        if (currentImage > productImages.length - 1) {
            currentImage = 0;
        }
        showMainImage(image, container, currentImage);
    })
}
window.addEventListener("DOMContentLoaded", nextImage(mainImage, thumbnailContainers, nextImageButton,));
window.addEventListener("DOMContentLoaded", nextImage(modalImage, modalThumbnailContainers, nextModalButton));

function previousImage(image, container, button) {
    button.addEventListener("click", function () {
        currentImage--;
        if (currentImage < 0) {
            currentImage = productImages.length - 1;
        }
        showMainImage(image, container, currentImage);
    })
}
window.addEventListener("DOMContentLoaded", previousImage(mainImage, thumbnailContainers, previousImageButton,));
window.addEventListener("DOMContentLoaded", previousImage(modalImage, modalThumbnailContainers, previousModalButton));

// Open and Close slider modal
function toggleModalDisplay() {
    // Only allow modal toggle on screens wider > 800(50em)
    if (screen.availWidth > 800) {
        sliderModal.classList.toggle("display-none");
    }
}
mainImage.addEventListener("click", toggleModalDisplay)
closeModal.addEventListener("click", toggleModalDisplay)