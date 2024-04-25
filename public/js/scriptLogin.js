
function setTheme() {
    bgDiv = document.getElementById('backgroundDiv');
    navBar = document.getElementById('navBar');
    loginDiv = document.getElementById('loginDiv');
    loginTitle = document.getElementById('loginTitle');
    loginButton = document.getElementById('loginButton');
    usernameLabel = document.getElementById('usernameLabel');
    passwordLabel = document.getElementById('passwordLabel');
    themeButton = document.getElementById('themeButton');
    loginBtn = document.getElementById('loginBtn');

    passwordLabelSignup = document.getElementById('passwordLabelSignup');
    usernameLabelSignup = document.getElementById('usernameLabelSignup');
    singupDiv = document.getElementById('signupDiv');
    signupBtn = document.getElementById('signupBtn');
    signupTitle = document.getElementById('signupTitle');


    // footerText = document.getElementById('footerText');
    // footerTwitter = document.getElementById('footerTwitter');
    // footerInsta = document.getElementById('footerInsta');
    // footerFacebook = document.getElementById('footerFacebook');

    if (localStorage.getItem('theme') === 'dark') {

        bgDiv.classList.remove('background');
        bgDiv.classList.add('background-dark');

        navBar.classList.remove('navbar-light');
        navBar.classList.add('navbar-dark');

        themeButton.classList.remove('btn-dark');
        themeButton.classList.add('btn-light');
        themeButton.innerHTML = '<i class="bi bi-sun-fill"></i>';

        loginDiv.classList.remove('bg-light', 'shadow-dark');
        loginDiv.classList.add('bg-dark', 'shadow-light');

        loginTitle.classList.remove('text-dark');
        loginTitle.classList.add('text-light');

        loginButton.classList.remove('btn-dark');
        loginButton.classList.add('btn-light');

        usernameLabel.classList.remove('text-dark');
        usernameLabel.classList.add('text-light');

        passwordLabel.classList.remove('text-dark');
        passwordLabel.classList.add('text-light');

        passwordLabelSignup.classList.remove('text-dark');
        passwordLabelSignup.classList.add('text-light');

        usernameLabelSignup.classList.remove('text-dark');
        usernameLabelSignup.classList.add('text-light');

        singupDiv.classList.remove('bg-light', 'shadow-dark');
        singupDiv.classList.add('bg-dark', 'shadow-light');

        signupBtn.classList.remove('btn-dark');
        signupBtn.classList.add('btn-light');

        signupTitle.classList.remove('text-dark');
        signupTitle.classList.add('text-light');

        loginBtn.classList.remove('btn-dark');
        loginBtn.classList.add('btn-light');

        // footerText.classList.remove('text-body-secondary');
        // footerTwitter.classList.remove('text-body-secondary');
        // footerInsta.classList.remove('text-body-secondary');
        // footerFacebook.classList.remove('text-body-secondary');
        // footerText.classList.add('text-secondary');
        // footerTwitter.classList.add('text-secondary');
        // footerInsta.classList.add('text-secondary');
        // footerFacebook.classList.add('text-secondary');

    } else {
        bgDiv.classList.remove('background-dark');
        bgDiv.classList.add('background');

        navBar.classList.remove('navbar-dark');
        navBar.classList.add('navbar-light');

        themeButton.classList.remove('btn-light');
        themeButton.classList.add('btn-dark');
        themeButton.innerHTML = '<i class="bi bi-moon-fill"></i>';

        loginDiv.classList.remove('bg-dark', 'shadow-light');
        loginDiv.classList.add('bg-light', 'shadow-dark');

        loginTitle.classList.remove('text-light');
        loginTitle.classList.add('text-dark');

        loginButton.classList.remove('btn-light');
        loginButton.classList.add('btn-dark');

        usernameLabel.classList.remove('text-light');
        usernameLabel.classList.add('text-dark');

        passwordLabel.classList.remove('text-light');
        passwordLabel.classList.add('text-dark');

        passwordLabelSignup.classList.remove('text-light');
        passwordLabelSignup.classList.add('text-dark');

        usernameLabelSignup.classList.remove('text-light');
        usernameLabelSignup.classList.add('text-dark');

        singupDiv.classList.remove('bg-dark', 'shadow-light');
        singupDiv.classList.add('bg-light', 'shadow-dark');

        signupBtn.classList.remove('btn-light');
        signupBtn.classList.add('btn-dark');

        signupTitle.classList.remove('text-light');
        signupTitle.classList.add('text-dark');

        loginBtn.classList.remove('btn-light');
        loginBtn.classList.add('btn-dark');

        // footerText.classList.remove('text-secondary');
        // footerTwitter.classList.remove('text-secondary');
        // footerInsta.classList.remove('text-secondary');
        // footerFacebook.classList.remove('text-secondary');
        // footerText.classList.add('text-body-secondary');
        // footerTwitter.classList.add('text-body-secondary');
        // footerInsta.classList.add('text-body-secondary');
        // footerFacebook.classList.add('text-body-secondary');
    }
}



setTheme();


const loginFormHandler = async (event) => {
    // Prevents the default action of the form from happening
    event.preventDefault();

    // Grabs the values from the email and password from the form and trims any whitespace
    const email = document.querySelector('#usernameLogin').value.trim();
    const password = document.querySelector('#passwordLogin').value.trim();

    if (email && password) {
        // TODO: Add a comment describing the functionality of this expression
        // Sends a POST request to the server with the email and password
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in');
        }
    }
};

const signUpHandler = async (event) => {
    // Prevents the default action of the form from happening
    event.preventDefault();

    // Grabs the values from the email and password from the form and trims any whitespace
    const email = document.querySelector('#usernameSignup').value.trim();
    const password = document.querySelector('#passwordSignup').value.trim();

    if (email && password) {
        // Sends a POST request to the server with the email and password
        const response = await fetch('/api/users/', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to sign up');
        }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

document
    .querySelector('.signup-form')
    .addEventListener('submit', signUpHandler);


themeButton = document.getElementById('themeButton');

themeButton.onclick = function () {
    if (localStorage.getItem('theme') === 'dark') {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
    setTheme();
}


setTheme();
