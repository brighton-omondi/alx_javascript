function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
  
    //Fetch form values
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
  
    // error and success message elements
    var errorElement = document.getElementById("error");
    var successElement = document.getElementById("success");
  
    // Clear previous error and success messages
    errorElement.textContent = "";
    successElement.textContent = "";
  
    // Validation of form fields
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
  
    if (!name || !email) {
      errorElement.textContent = "Please fill in all required fields.";
    } else {
      // Form submission successful
      successElement.textContent = "Form submitted successfully!";
    }
  }
  
  // An event listener to the form element to handle form submission
  var submitForm = document.getElementById("submitForm");
  submitForm.addEventListener("submit", handleFormSubmit);
  