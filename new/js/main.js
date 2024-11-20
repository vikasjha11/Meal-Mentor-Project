// API URL to interact with the backend
const API_URL = 'http://localhost:3000'; 

// Handle login form submission
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            alert(data.message);
            window.location.href = 'meal-selection.html';  // Redirect to dashboard on successful login
        } else {
            alert(data.message || 'Login failed');
        }
    } catch (error) {
        console.error('Error during login:', error);
        alert('Something went wrong. Please try again.');
    }
});

// Handle signup form submission
document.getElementById('signupForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch(`${API_URL}/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            alert(data.message);
            window.location.href = 'login.html';  // Redirect to login page on successful signup
        } else {
            alert(data.message || 'Signup failed');
        }
    } catch (error) {
        console.error('Error during signup:', error);
        alert('Something went wrong. Please try again.');
    }
});


