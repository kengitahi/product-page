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