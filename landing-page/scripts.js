document.addEventListener("DOMContentLoaded", function() {
    // Dynamic content for Features section
    document.getElementById("feature1").innerHTML = "<h3>Feature 1</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>";
    document.getElementById("feature2").innerHTML = "<h3>Feature 2</h3><p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>";
    document.getElementById("feature3").innerHTML = "<h3>Feature 3</h3><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>";
  
    // Dynamic content for About Us section
    document.getElementById("aboutText").innerText = "We are a team of passionate individuals dedicated to providing innovative solutions to our clients.";
  
    // Form submission handling
    document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission
      // You can add your form submission logic here, like sending the form data to a server or displaying a success message
      alert("Thank you for your message!");
      // Clear form fields after submission
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    });
  });
  