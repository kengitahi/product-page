const image = document.querySelector(".slider-image");
const imageThumbnails = document.querySelectorAll(".slider-thumbnail");
const thumbnailContainers = document.querySelectorAll(".thumbnail-container");
const nextImageButton = document.getElementById("nextImageBtn")
const previousImageButton = document.getElementById("previousImageBtn")

const productImages = [
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg",
]

let currentImage = 0;

// Show an image when page loads
function showMainImage() {
    image.src = productImages[currentImage]
    thumbnailContainers.forEach(thumbnail => {
        thumbnail.classList.remove("active")
        if (thumbnail.id == currentImage + 1) {
            thumbnail.classList.add("active");
        }
    })

}
window.addEventListener("DOMContentLoaded", showMainImage);

// Change image when thumbnail clicked
thumbnailContainers.forEach(thumbnail => {
    thumbnail.addEventListener("click", function () {
        currentImage = thumbnail.id - 1
        showMainImage(currentImage);
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





