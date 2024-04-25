
function setTheme() {
    bgDiv = document.getElementById('backgroundDiv');
    loginDiv = document.getElementById('loginDiv');
    loginTitle = document.getElementById('loginTitle');
    loginButton = document.getElementById('loginButton');
    usernameLabel = document.getElementById('usernameLabel');
    passwordLabel = document.getElementById('passwordLabel');

    passwordLabelSignup = document.getElementById('passwordLabelSignup');
    usernameLabelSignup = document.getElementById('usernameLabelSignup');
    singupDiv = document.getElementById('signupDiv');
    signupBtn = document.getElementById('signupBtn');
    signupTitle = document.getElementById('signupTitle');


    footerText = document.getElementById('footerText');
    footerTwitter = document.getElementById('footerTwitter');
    footerInsta = document.getElementById('footerInsta');
    footerFacebook = document.getElementById('footerFacebook');

    if (localStorage.getItem('theme') === 'dark') {

        bgDiv.classList.remove('background');
        bgDiv.classList.add('background-dark');

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

        footerText.classList.remove('text-body-secondary');
        footerTwitter.classList.remove('text-body-secondary');
        footerInsta.classList.remove('text-body-secondary');
        footerFacebook.classList.remove('text-body-secondary');
        footerText.classList.add('text-secondary');
        footerTwitter.classList.add('text-secondary');
        footerInsta.classList.add('text-secondary');
        footerFacebook.classList.add('text-secondary');

    } else {
        bgDiv.classList.remove('background-dark');
        bgDiv.classList.add('background');

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

        footerText.classList.remove('text-secondary');
        footerTwitter.classList.remove('text-secondary');
        footerInsta.classList.remove('text-secondary');
        footerFacebook.classList.remove('text-secondary');
        footerText.classList.add('text-body-secondary');
        footerTwitter.classList.add('text-body-secondary');
        footerInsta.classList.add('text-body-secondary');
        footerFacebook.classList.add('text-body-secondary');
    }
}



setTheme();