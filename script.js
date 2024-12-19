document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const subjectInput = document.getElementById('subject');
    const phoneInput = document.getElementById('phone');
    const submitButton = document.getElementById('submit');
    const userDetails = document.getElementById('userDetails');
    const cookieConsentModal = document.getElementById('cookieConsentModal');
    const acceptCookiesButton = document.getElementById('acceptCookies');

    // Show cookie consent modal if not already accepted
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieConsentModal.style.display = 'block'; // Show the modal
    }

    // Handle cookie consent acceptance
    acceptCookiesButton.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true'); // Save acceptance in localStorage
        cookieConsentModal.style.display = 'none'; // Hide the modal
    });

    // Display user input on submit
    submitButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent page reload
        const userInfo = `
            <h3>Submitted Information</h3>
            <p><strong>Name:</strong> ${nameInput.value}</p>
            <p><strong>Email:</strong> ${emailInput.value}</p>
            <p><strong>Message:</strong> ${messageInput.value}</p>
            <p><strong>Subject:</strong> ${subjectInput.value}</p>
            <p><strong>Phone:</strong> ${phoneInput.value || 'Not Provided'}</p>
        `;
        userDetails.innerHTML = userInfo; // Update userDetails section with submitted data
    });
});
