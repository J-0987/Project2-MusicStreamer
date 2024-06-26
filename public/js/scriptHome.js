
function setTheme() {
    bgDiv = document.getElementById('backgroundDiv');
    navBar = document.getElementById('navBar');
    // footerText = document.getElementById('footerText');
    // footerTwitter = document.getElementById('footerTwitter');
    // footerInsta = document.getElementById('footerInsta');
    // footerFacebook = document.getElementById('footerFacebook');
    homeTitle = document.getElementById('homeTitle');
    themeButton = document.getElementById('themeButton');
    loginButton = document.getElementById('loginButton');
    signupBtn = document.getElementById('signupBtn');

    if (localStorage.getItem('theme') === 'dark') {

        bgDiv.classList.remove('background');
        bgDiv.classList.add('background-dark');

        navBar.classList.remove('navbar-light');
        navBar.classList.add('navbar-dark');

        homeTitle.classList.remove('text-dark');
        homeTitle.classList.add('text-light');

        themeButton.classList.remove('btn-dark');
        themeButton.classList.add('btn-light');
        themeButton.innerHTML = '<i class="bi bi-sun-fill"></i>';

        loginButton.classList.remove('btn-dark');
        loginButton.classList.add('btn-light');

        if (signupBtn) {
            signupBtn.classList.remove('btn-dark');
            signupBtn.classList.add('btn-light');
        }

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

        homeTitle.classList.remove('text-light');
        homeTitle.classList.add('text-dark');

        themeButton.classList.remove('btn-light');
        themeButton.classList.add('btn-dark');
        themeButton.innerHTML = '<i class="bi bi-moon-fill"></i>';

        loginButton.classList.remove('btn-light');
        loginButton.classList.add('btn-dark');

        if (signupBtn) {
            signupBtn.classList.remove('btn-light');
            signupBtn.classList.add('btn-dark');
        }

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

loginButton = document.getElementById('loginButton');
loginButton.onclick = function () {
    fetch('/login', {
        method: 'GET',
    });
}


// const logoutBtn = document.getElementById('loginButton');
// const logoutHandler = async () => {
//     if (logoutBtn.textContent === 'Log Out') {
//         const response = await fetch('/api/users/logout', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//         });

//         if (response.ok) {
//             document.location.replace('/');
//         }
//     }
// }


// logoutBtn.onclick = logoutHandler;