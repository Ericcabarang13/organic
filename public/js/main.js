const mobileButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileButton.onclick = function(){
    mobileMenu.classList.toggle("hidden")
}