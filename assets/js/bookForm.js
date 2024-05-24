document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const formData = new FormData(event.target);

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

    // Show success alert
    alert("Room Successfully Booked!");
});
