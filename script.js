document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const subjectInput = document.getElementById('subject');
    const phoneInput = document.getElementById('phone');
    const submitButton = document.getElementById('submit');
    const userDetails = document.getElementById('userDetails');

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
        userDetails.innerHTML = userInfo;
    });
});
