function setCookies() {
    const firstNameInput = document.getElementById("firstname");
    const emailInput = document.getElementById("email");

    // Get the values from the input fields
    const firstName = firstNameInput.value;
    const email = emailInput.value;

    // Set cookies for firstname and email
    document.cookie = `firstname=${firstName}`;
    document.cookie = `email=${email}`;
}

function showCookies() {
    const cookies = document.cookie.split(';');

    // Create a paragraph element
    const paragraph = document.createElement("p");

    // Build the text content for the paragraph
    let cookieText = "Cookies: ";
    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        cookieText += `${name}=${value}; `;
    }

    // Set the inner HTML of the paragraph
    paragraph.innerHTML = cookieText;

    // Append the paragraph to the cookieInfo element
    const cookieInfo = document.getElementById("cookieInfo");
    cookieInfo.innerHTML = ''; // Clear previous content
    cookieInfo.appendChild(paragraph);
}
