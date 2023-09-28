function generateInputFields(numFields) {
    var inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = ""; // Clear existing fields
  
    for (var i = 1; i <= numFields; i++) {
      var input = document.createElement("input");
      input.type = "text";
      input.name = "field" + i;
      input.placeholder = "Field " + i;
      inputContainer.appendChild(input);
    }
  }
  
  // Function to validate the form before submission
  function validateForm() {
    var inputFields = document.querySelectorAll("#inputContainer input");
    var isValid = true;
  
    for (var i = 0; i < inputFields.length; i++) {
      if (inputFields[i].value.trim() === "") {
        isValid = false;
        break;
      }
    }
  
    if (!isValid) {
      alert("Please fill in all fields.");
      return false; // Prevent form submission
    }
  
    return true; // Allow form submission
  }
  
  var dynamicForm = document.getElementById("dynamicForm");
  dynamicForm.addEventListener("submit", function (event) {
    var numFields = parseInt(document.getElementById("numFields").value, 10);
    generateInputFields(numFields);
  
    if (!validateForm()) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });
  
  // Initial field generation based on the default selected value
  generateInputFields(1);
  