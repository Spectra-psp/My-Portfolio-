//Dark -Light Mode

let darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';

const enableDarkMode = () => {
  darkModeEnabled = true;
  document.body.classList.add('dark-mode');
  localStorage.setItem('darkModeEnabled', 'true');
}

const disableDarkMode = () => {
  darkModeEnabled = false;
  document.body.classList.remove('dark-mode');
  localStorage.setItem('darkModeEnabled', 'false');
}


document.addEventListener('DOMContentLoaded', () => {
  const darkModeButton = document.getElementById('darkModeButton');
  if (!darkModeButton) return;

  const darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
  document.body.classList.toggle('dark-mode', darkModeEnabled);
  darkModeButton.checked = darkModeEnabled;

  darkModeButton.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', darkModeButton.checked);
    localStorage.setItem('darkModeEnabled', darkModeButton.checked);
  });
});


//Menu

const  hamburger = document.querySelector(".hamburger");
const  navMenu = document.querySelector("header nav ul");

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

//multiple text

const typed = new Typed('.multiple', {
  strings: ['Web Developer','Data Analyst','QA'],
  typeSpeed: 90,
  backSpeed: 90,
  backDelay: 800,
  loop: true
})

// Initialize EmailJS
(function() {
  emailjs.init("biSPuoAFe_Re_3_Z-"); // replace this
})();

// Contact Form Submit
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  emailjs.sendForm("service_c901dua", "template_i6g0rlp", this)
    .then(() => {
      document.getElementById("status-msg").innerText = "Message sent successfully!";
      this.reset();
    }, (error) => {
      document.getElementById("status-msg").innerText = "Failed to send message!";
      console.error("EmailJS Error:", error);
    });
});

// Enable smooth scrolling for the arrow
document.querySelector('.to-top').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#Home').scrollIntoView({ behavior: 'smooth' });
});

// Sections and nav links
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav ul li a");

// Scroll Active Effect
window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;

  sections.forEach(sec => {
    let sectionTop = sec.offsetTop - 150;
    let sectionHeight = sec.offsetHeight;
    let sectionId = sec.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {

      navLinks.forEach(link => {
        link.classList.remove("active");
      });

      document
        .querySelector('header nav ul li a[href="#' + sectionId + '"]')
        .classList.add("active");
    }
  });
});


