const header = document.querySelector('header');
let lastScrollY = window.scrollY;

if (header) {
  header.classList.add('visible')
}

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  
  if (currentScrollY > lastScrollY && currentScrollY > 90) {
    header.classList.remove('visible'); 
  } else {
    header.classList.add('visible'); 
  }

 
  if (currentScrollY > 90 && currentScrollY < lastScrollY) {
    header.classList.add('scrolled');
  } else if (currentScrollY <= 90) {
    header.classList.remove('scrolled');
  }
  lastScrollY = currentScrollY;
});


const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileNav.classList.toggle("active");
});

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.hero-content').style.opacity = '1';
});


const officeHours = document.querySelector(".office-hours");
const toggleBtn = officeHours?.querySelector(".open-today");

if (toggleBtn) {
  toggleBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    officeHours.classList.toggle("active");
  });

  
  document.addEventListener("click", (event) => {
    if (!officeHours.contains(event.target)) {
      officeHours.classList.remove("active");
    }
  });
}

const navLinks = document.querySelectorAll('.main-nav a[href^="#"]')

navLinks.forEach(link => {
link.addEventListener('click', (e) => {
e.preventDefault()
const targetId = link.getAttribute('href');
const targetElement = document.querySelector(targetId)

if (targetElement) {
  targetElement.scrollIntoView({
    behavior: 'smooth'
  });
}
});
});
 function toggleContact() {
  const box = document.getElementById("contactBox");
  box.style.display = box.style.display === "flex" ? "none" : "flex";
}
