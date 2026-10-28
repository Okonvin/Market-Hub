const navItems = document.getElementById("nav")
const menuButton = document.getElementById("menuBtn")

menuButton.addEventListener("click",function(){
    navItems.classList.toggle("active")
})