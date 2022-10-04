const openMobileNav = document.getElementById("openMobileNav")
const closeMobileNav = document.getElementById("closeMobileNav")
const nav = document.getElementById("nav")

openMobileNav.addEventListener("click", function (e) {
    console.log("mobile menu clicked");
    nav.classList.add("menu-open")
})

closeMobileNav.addEventListener("click", function (e) {
    console.log("close mobile menu clicked");
    nav.classList.remove("menu-open");
})

// Increment and decrement
const itemCount = document.getElementById("itemCount");
const decreaseButton = document.getElementById("decrement");
const increaseButton = document.getElementById("increment");

let numberOfItems = Number(itemCount.innerHTML);

decreaseButton.addEventListener("click", function () {
    if (numberOfItems == 0) {
        itemCount.innerHTML = 0;
    } else {
        numberOfItems--
        itemCount.innerHTML = numberOfItems;
    }
})

increaseButton.addEventListener("click", function () {
    numberOfItems++
    itemCount.innerHTML = numberOfItems
})

// Add to cart stuff
const addToCartBtn = document.getElementById("addToCart");
const emptyCartBtn = document.getElementById("emptyCart")
const productName = document.getElementById("productName").innerHTML;
const productPrice = document.getElementById("discountedPrice");

const cartMessage = document.getElementById("cartMessage");
const mainModalContent = document.getElementById("modalMain")
const cartDetails = document.getElementById("cartDetails");

let price = Number(productPrice.innerHTML);

addToCartBtn.addEventListener("click", addToCart);

function addToCart() {
    if (numberOfItems > 0) {
        cartMessage.classList.add("display-none");
        mainModalContent.classList.remove("display-none")
        mainModalContent.classList.add("display-block")

        cartDetails.innerHTML = `
        <p class="modal-title">${productName}</p>
        <div>
            <p class="modal-price">$<span class="price">125</span></p>
            <p class="modal-quantity">x <span class="quantity">${numberOfItems}</span></p>
            <p class="modal-total">$<span class="total">${numberOfItems * price}</span></span>
        </div>
    `
    }
}

emptyCartBtn.addEventListener('click', function () {
    numberOfItems = 0;
    itemCount.innerHTML = 0

    cartMessage.classList.remove("display-none");
    mainModalContent.classList.remove("display-block")
    cartDetails.innerHTML = ""
}
)

const toggleModal = document.getElementById("togglModal")
const cartModal = document.getElementById("cartModal")

toggleModal.addEventListener("click", function () {

    cartModal.classList.toggle("visibility-hidden")
})