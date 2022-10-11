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

// I will refactor functions below later
// Show an image when page loads
function showMainImage() {
    mainImage.src = productImages[currentImage]
    thumbnailContainers.forEach(thumbnail => {
        thumbnail.classList.remove("active")
        if (thumbnail.id == currentImage + 1) {
            thumbnail.classList.add("active");
        }
    })
}
window.addEventListener("DOMContentLoaded", showMainImage);

function showModalImage() {
    modalImage.src = productImages[currentImage]
    modalThumbnailContainers.forEach(thumbnail => {
        thumbnail.classList.remove("active")
        if (thumbnail.id == currentImage + 1) {
            thumbnail.classList.add("active");
        }
    })
}
window.addEventListener("DOMContentLoaded", showModalImage);


// Change image when thumbnail clicked
thumbnailContainers.forEach(thumbnail => {
    thumbnail.addEventListener("click", function () {
        currentImage = thumbnail.id - 1
        showMainImage(currentImage);
    })
})

modalThumbnailContainers.forEach(thumbnail => {
    thumbnail.addEventListener("click", function () {
        console.log("modal thumbnail clicked")
        currentImage = thumbnail.id - 1
        showModalImage(currentImage);
    })
})

nextImageButton.addEventListener("click", function () {
    currentImage++;
    if (currentImage > productImages.length - 1) {
        currentImage = 0;
    }
    showMainImage(currentImage);
});

previousImageButton.addEventListener("click", function () {
    currentImage--;
    if (currentImage < 0) {
        currentImage = productImages.length - 1;
    }
    showMainImage(currentImage);
});


nextModalButton.addEventListener("click", function () {
    currentImage++;
    if (currentImage > productImages.length - 1) {
        currentImage = 0;
    }
    showModalImage(currentImage);
});

previousModalButton.addEventListener("click", function () {
    currentImage--;
    if (currentImage < 0) {
        currentImage = productImages.length - 1;
    }
    showModalImage(currentImage);
});

// Open and Close slider modal
function toggleModalDisplay() {
    // Only allow modal toggle on screens wider > 800(50em)
    if (screen.availWidth > 800) {
        sliderModal.classList.toggle("display-none");
    }
}

mainImage.addEventListener("click", toggleModalDisplay)
closeModal.addEventListener("click", toggleModalDisplay)



