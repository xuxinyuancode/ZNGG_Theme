const mobileMenu = document.getElementById("mobileMenu")
function openMenu() {
    mobileMenu.classList.add("on")
    document.getElementsByTagName("body")[0].style.overflow = "hidden"
}
function closeMenu() {
    mobileMenu.classList.remove("on")
    document.getElementsByTagName("body")[0].style.overflow = "auto"
}
function menuChileToggle(event) {
    if (event.parentNode.children[1].getAttribute("class").indexOf("hidden") == -1) {
        event.parentNode.children[1].classList.add("hidden")
        event.classList.remove("child-arrow-down-to-up")
    } else {
        event.parentNode.children[1].classList.remove("hidden")
        event.classList.add("child-arrow-down-to-up")
    }
}