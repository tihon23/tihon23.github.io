// Get references to the elements
const openPopupBtn = document.getElementById("openPopupBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");
const form = document.getElementById("popupForm");
const langMenu = document.querySelector('.lang-menu');
const selectedLang = document.querySelector('.selected-lang');
const langOptions = document.querySelectorAll('.lang-menu ul li a');

// Show the popup when the button is clicked
openPopupBtn.addEventListener("click", function() {
    popup.style.display = "block";  // Make the popup visible
});

// Close the popup when the close button is clicked
closeBtn.addEventListener("click", function() {
    popup.style.display = "none";  // Hide the popup
});

// Close the popup if the user clicks outside of it
window.addEventListener("click", function(event) {
    if (event.target === popup) {
        popup.style.display = "none";  // Hide the popup when clicking outside
    }
});

// Handle form submission (optional - you can customize this)
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    alert(`Name: ${name}, Email: ${email}`);  // Show the form values in an alert
    popup.style.display = "none";  // Close the popup after submission
});

// Open popup when the button is clicked
document.getElementById("openPopupBtn").onclick = function() {
    document.getElementById("popup").style.display = "flex";
};

// Close the popup when the close button is clicked
document.getElementById("closeBtn").onclick = function() {
    document.getElementById("popup").style.display = "none";
};

// Close the popup if the user clicks outside the popup content
window.onclick = function(event) {
    if (event.target === document.getElementById("popup")) {
        document.getElementById("popup").style.display = "none";
    }
};

function scrollToSection() {
    document.querySelector('#signup').scrollIntoView({
      behavior: 'smooth'
    });
  }
  
let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Hide header on scroll down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Show header on scroll up
        header.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
});

document.querySelectorAll('.lang-option-en').forEach(option => {
    option.addEventListener('click', function (e) {
        e.preventDefault();
        const selectedLang = this.getAttribute('data-lang');
        document.querySelectorAll('[data-en]').forEach(el => {
            el.textContent = el.getAttribute(`data-${selectedLang}`);
        });
    });
});

document.querySelectorAll('.lang-option-ru').forEach(option => {
    option.addEventListener('click', function (e) {
        e.preventDefault();
        const selectedLang = this.getAttribute('data-lang');
        document.querySelectorAll('[data-en]').forEach(el => {
            el.textContent = el.getAttribute(`data-${selectedLang}`);
        });
    });
});

// Function to update the language
function updateLanguage(lang) {
    // Update the selected language label
    selectedLang.textContent = lang === 'en' ? 'English' : 'Russian';

    // Update the text on the website
    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });

    // Update the `lang` attribute of the HTML tag
    document.documentElement.lang = lang;
}

// Add event listeners to language options
langOptions.forEach(option => {
    option.addEventListener('click', function (e) {
        e.preventDefault();
        const lang = this.getAttribute('data-lang');
        updateLanguage(lang);
    });
});
