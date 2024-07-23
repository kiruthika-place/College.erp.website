function validateForm() {
    var rollNumber = document.getElementById('rollNumber').value.trim();
    var currentYear = document.getElementById('currentYear').value.trim();
    var registrationNumber = document.getElementById('registrationNumber').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();

    // Simple validation - you can add more complex validation as needed
    if (rollNumber === '' || currentYear === '' || registrationNumber === '' || email === '' || password === '') {
        alert('Please fill in all fields');
        return false;
    }

    // Example of validating email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email format');
        return false;
    }

    // You can add more validation for other fields like roll number, current year, etc.

    return true;
}