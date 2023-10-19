In 0-select-id.html:

We use the document.getElementById("myParagraph") method to select the element with the id "myParagraph" and store it in the variable paragraphElement.

We then use the textContent property to modify the content of the <p> element to the desired text.

When you open this HTML file in a web browser, the JavaScript code will run, and the content of the paragraph will be updated to "I successfully updated this paragraph with JavaScript."


In 1-select-class.html:

We use document.querySelectorAll(".highlight") to select all elements with the class "highlight" and store them in the highlightedElements array.

We then iterate through the highlightedElements array and use classList.add("bold") to add the "bold" class to each of these elements.

When you open this HTML file in a web browser, the JavaScript code will run, and the content of the <p class="highlight"> element will become bold due to the added "bold" class.

In 2-select-image.html:

We use document.getElementById("myImage") to select the <img> element with the id "myImage" and store it in the variable imageElement.

We then modify the src, alt, and style properties of the imageElement to change the image source, alt text, and border style as specified.

When you open this HTML file in a web browser, the JavaScript code will run, and the <img> element will be updated with the new source, alt text, and border style.



In 3-multiple-actions.html:

We select the container element with the id "container" and store it in the variable container.

We create a new <p> element, set its content to "New paragraph," and store it in the variable newParagraph.

We append the newParagraph element to the container using container.appendChild(newParagraph).

We add a button with the id "toggleButton" and set up an event listener to toggle the visibility of the newly created paragraph. When the button is clicked, it will hide or show the paragraph and update the button text accordingly.

When you open this HTML file in a web browser, you can click the "Toggle Paragraph" button to hide or show the new paragraph as requested.