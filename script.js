// Get references to the elements
const openPopupBtn = document.getElementById("openPopupBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");
const form = document.getElementById("popupForm");

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
  
