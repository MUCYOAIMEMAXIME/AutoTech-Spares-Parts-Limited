document.getElementById('create-account-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const phone = document.getElementById('phone').value;

    // Simple validation
    if (password !== confirmPassword) {
        document.getElementById('message').textContent = "Passwords do not match.";
        return;
    }

    document.getElementById('message').textContent = "Account created successfully!";
    document.getElementById('message').style.color = "green";

    // Clear form fields
    this.reset();
});
