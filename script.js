// Example of using local storage to save user data
document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    // Load saved data from local storage
    if (localStorage.getItem('name')) {
        nameInput.value = localStorage.getItem('name');
    }
    if (localStorage.getItem('email')) {
        emailInput.value = localStorage.getItem('email');
    }

    // Save data to local storage on input change
    nameInput.addEventListener('input', function() {
        localStorage.setItem('name', nameInput.value);
    });
    emailInput.addEventListener('input', function() {
        localStorage.setItem('email', emailInput.value);
    });
});