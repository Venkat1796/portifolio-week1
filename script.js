// Dynamic Greeting
window.onload = function() {
  const hours = new Date().getHours();
  let greeting = "";
  if (hours < 12) greeting = "Good Morning!";
  else if (hours < 18) greeting = "Good Afternoon!";
  else greeting = "Good Evening!";
  alert(`${greeting} Welcome to my Portfolio!`);
};

// Scroll-to-top Button
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = function() {
  if (document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("⚠️ Please fill out all fields!");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address!");
    return;
  }

  alert("✅ Message sent successfully!");
  this.reset();
});
