document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Simulated validation, you should replace this with server-side validation
        if (username === "user" && password === "password") {
            window.location.href = "success.html"; // Redirect to a success page
        } else {
            errorMessage.textContent = "Invalid username or password";
        }
    });
});
