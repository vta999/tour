document.getElementById('surveyForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Reset all error messages
    document.querySelectorAll('.error-message').forEach(el => {
        el.style.display = 'none';
    });

    // Validate form
    let isValid = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');

    if (!name.value) {
        document.getElementById('name-error').style.display = 'block';
        name.style.borderColor = 'red';
        isValid = false;
    }

    if (!email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        document.getElementById('email-error').style.display = 'block';
        email.style.borderColor = 'red';
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    // Show thank you message
    document.getElementById('surveyForm').style.display = 'none';
    document.getElementById('thankYou').style.display = 'block';

    // In a real application, you would send the data to a server here
    // const formData = new FormData(this);
    // fetch('/submit-survey', { method: 'POST', body: formData })
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.error(error));
});

// Reset validation when user starts typing
document.getElementById('name').addEventListener('input', function () {
    this.style.borderColor = '#ddd';
    document.getElementById('name-error').style.display = 'none';
});

document.getElementById('email').addEventListener('input', function () {
    this.style.borderColor = '#ddd';
    document.getElementById('email-error').style.display = 'none';
});