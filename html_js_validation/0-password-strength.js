function validatePassword() {
    // Retrieve the password input element
    var passwordInput = document.getElementById("password");
    
    // Retrieve the error message element
    var errorElement = document.getElementById("error");
    
    // Checking for password criteria
    var lengthRegex = /.{8,}/;
    var uppercaseRegex = /[A-Z]/;
    var lowercaseRegex = /[a-z]/;
    var digitRegex = /\d/;
    var specialCharRegex = /[!@#$%^&*]/;
    
    // Fetchig the entered password value
    var password = passwordInput.value;
    
    // Checking if the password meets all criteria
    if (
      lengthRegex.test(password) &&
      uppercaseRegex.test(password) &&
      lowercaseRegex.test(password) &&
      digitRegex.test(password) &&
      specialCharRegex.test(password)
    ) {
      // Clear any previous error message
      errorElement.textContent = "";
      
      // Allow form submission
      return true;
    } else {
      // Display an error message
      errorElement.textContent = "Password must meet all criteria.";
      
      // Prevent form submission
      return false;
    }
  }
  
  // An event listener to the form to trigger password validation on submission
  var passwordForm = document.getElementById("passwordForm");
  passwordForm.addEventListener("submit", function(event) {
    if (!validatePassword()) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });
  