/*Toggle menu function to display the list of navigations*/
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".nav2-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}