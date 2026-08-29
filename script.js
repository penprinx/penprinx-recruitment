document.getElementById('recruitmentForm').addEventListener('submit', function(event) {
    let isValid = true;

    // 1. Email Validation Check
    const emailInput = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(emailInput)) {
        emailError.textContent = "Please enter a valid email address (e.g., name@example.com).";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // 2. Passport Photo Validation Check (Must be JPEG/PNG)
    const photoInput = document.getElementById('photo').files[0];
    const photoError = document.getElementById('photoError');
    if (photoInput) {
        const validImageTypes = ['image/jpeg', 'image/png'];
        if (!validImageTypes.includes(photoInput.type)) {
            photoError.textContent = "Passport photo must be a JPG or PNG image.";
            isValid = false;
        } else {
            photoError.textContent = "";
        }
    }

    // 3. ID Card / Passport Document Validation Check (PDF, JPG, or PNG)
    const idInput = document.getElementById('idCard').files[0];
    const idError = document.getElementById('idError');
    if (idInput) {
        const validIdTypes = ['application/pdf', 'image/jpeg', 'image/png'];
        if (!validIdTypes.includes(idInput.type)) {
            idError.textContent = "ID card must be a PDF document, JPG, or PNG image.";
            isValid = false;
        } else {
            idError.textContent = "";
        }
    }

    // If any validation fails, stop the form from submitting to the backend
    if (!isValid) {
        event.preventDefault();
    }
});