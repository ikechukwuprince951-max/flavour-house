// Automatically update copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();


// CONTACT FORM FUNCTIONALITY
const contactForm = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        feedback.innerHTML =
            '<div class="alert alert-danger">Please fill in all fields.</div>';
        return;
    }

    feedback.innerHTML =
        '<div class="alert alert-success">Thank you, ' +
        name.replace(/[&<>"']/g, "") +
        '! Your message has been received in this demo.</div>';

    contactForm.reset();

});