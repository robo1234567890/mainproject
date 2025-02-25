let images = document.querySelectorAll('.image-container img');
let index = 0;

function changeImage() {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
}

setInterval(changeImage, 2000); // Change image every 2 seconds

async function validateAddress(address) {
    const apiKey = "YOUR_GEMINI_API_KEY"; // Replace with your actual API key
    const url = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateText?key=${apiKey}`;

    const requestBody = {
        prompt: {
            text: `Is the following address a valid and real address? Please answer only with "valid" or "invalid". Address: ${address}`
        }
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();
        const responseText = data?.candidates?.[0]?.output || "";

        return responseText.toLowerCase().includes("valid");
    } catch (error) {
        console.error("Error validating address:", error);
        return null;
    }
}

document.getElementById("signupForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent form submission
    const address = document.getElementById("address").value;
    const errorMessage = document.getElementById("error-message");

    errorMessage.style.display = "none"; // Hide error message

    const isValid = await validateAddress(address);
    if (isValid) {
        alert("Address is valid. Submitting form...");
        this.submit(); // Submit the form if address is valid
    } else {
        errorMessage.style.display = "block"; // Show error message
    }
});