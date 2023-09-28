function validateEmail() {
    // Retrieve the email input element
    var emailInput = document.getElementById("email");
    
    // Retrieve the error message element
    var errorElement = document.getElementById("error");
    
    var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    
    // Get the entered email value
    var email = emailInput.value;
    
    // Check if the email follows the standard email format
    if (emailRegex.test(email)) {
      // Clear any previous error message
      errorElement.textContent = "";
      
      return true;
    } else {
      // Display an error message
      errorElement.textContent = "Please enter a valid email address.";
      
      return false;
    }
  }
  
  // Add an event listener to the form to trigger email validation on submission
  var emailForm = document.getElementById("emailForm");
  emailForm.addEventListener("submit", function(event) {
    if (!validateEmail()) {
      event.preventDefault(); // Prevent form submission if email validation fails
    }
  });
  