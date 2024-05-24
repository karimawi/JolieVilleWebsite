document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const formData = new FormData(event.target);
    const jsonData = {};

    // Convert FormData to JSON
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    // Format JSON data with indentation and code blocking
    const formattedJson = "```json\n" + JSON.stringify(jsonData, null, 4) + "\n```";

    // Send data to Discord webhook
    fetch("https://discord.com/api/webhooks/1139511091735560262/xbS1hH0C-qd9wAniFQWbHuNvyCYi8r-fIkFWrW5oBiY51wPAW-t8MHu2s6NJkx5lHdiT", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ content: formattedJson }) // Send data as a JSON string
    })
    .then(response => {
        if (response.ok) {
            // Disable form fields after successful submission
            const formElements = event.target.elements;
            for (let i = 0; i < formElements.length; i++) {
                formElements[i].disabled = true;
            }
            // Show room results section
            const roomResults = document.getElementById("roomResults");
            roomResults.style.display = "block";
            // Scroll to the start of roomResults section
            roomResults.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            throw new Error("Failed to submit booking. Server responded with status: " + response.status);
        }
    })
    .catch(error => {
        console.error("Error:", error.message);
    });
});

const bookRoomButtons = document.querySelectorAll("#bookroom");

bookRoomButtons.forEach(button => {
    button.addEventListener("click", function() {
      // Your existing click event listener logic here
      alert("Room Successfully Booked!");
      
      location.reload();
    });
  });
  