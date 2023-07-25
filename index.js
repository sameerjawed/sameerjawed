const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector("header");

const toggleNavbar = () => {
//   alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

var options = {
    strings: ['It\'s Me your Sameer Jawed', '', ''],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
    

};
var Typed = new Typed('.typing', options); 