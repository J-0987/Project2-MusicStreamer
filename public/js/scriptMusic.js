
function setTheme() {
    bgDiv = document.getElementById('backgroundDiv');
    navBar = document.getElementById('navBar');
    // footerText = document.getElementById('footerText');
    // footerTwitter = document.getElementById('footerTwitter');
    // footerInsta = document.getElementById('footerInsta');
    // footerFacebook = document.getElementById('footerFacebook');
    themeButton = document.getElementById('themeButton');
    loginButton = document.getElementById('loginButton');
    searchBtn = document.getElementById('searchBtn');
    searchDiv = document.getElementById('searchDiv')
    recentSongsDiv = document.getElementById('recentSongsDiv');
    recentSongsTitle = document.getElementById('recentSongsTitle');
    browseMusicDiv = document.getElementById('browseMusicDiv');
    browseMusicTitle = document.getElementById('browseMusicTitle');
    createPlaylistDiv = document.getElementById('createPlaylistDiv');
    createPlaylistTitle = document.getElementById('createPlaylistTitle');
    browseCards = document.querySelectorAll('.browseCard');
    recentCards = document.querySelectorAll('.recentCard');
    playlistBtn = document.querySelectorAll('.playlistBtn');

    if (localStorage.getItem('theme') === 'dark') {

        bgDiv.classList.remove('background');
        bgDiv.classList.add('background-dark');

        navBar.classList.remove('navbar-light');
        navBar.classList.add('navbar-dark');

        themeButton.classList.remove('btn-dark');
        themeButton.classList.add('btn-light');
        themeButton.innerHTML = '<i class="bi bi-sun-fill"></i>';

        loginButton.classList.remove('btn-dark');
        loginButton.classList.add('btn-light');

        searchBtn.classList.remove('btn-dark');
        searchBtn.classList.add('btn-light');

        searchDiv.classList.remove('bg-light', 'shadow-dark');
        searchDiv.classList.add('bg-dark', 'shadow-light');

        recentSongsDiv.classList.remove('bg-light', 'shadow-dark');
        recentSongsDiv.classList.add('bg-dark', 'shadow-light');
        recentSongsTitle.classList.add('text-light');
        recentSongsTitle.classList.remove('text-dark');

        browseMusicDiv.classList.remove('bg-light', 'shadow-dark');
        browseMusicDiv.classList.add('bg-dark', 'shadow-light');
        browseMusicTitle.classList.add('text-light');
        browseMusicTitle.classList.remove('text-dark');

        createPlaylistDiv.classList.remove('bg-light', 'shadow-dark');
        createPlaylistDiv.classList.add('bg-dark', 'shadow-light');
        createPlaylistTitle.classList.add('text-light');
        createPlaylistTitle.classList.remove('text-dark');

        browseCards.forEach(card => {
            card.classList.remove('bg-light', 'shadow-dark');
            card.classList.add('bg-dark', 'shadow-light');
        });

        recentCards.forEach(card => {
            card.classList.remove('bg-light', 'shadow-dark');
            card.classList.add('bg-dark', 'shadow-light');
        });

        playlistBtn.forEach(btn => {
            btn.classList.remove('btn-dark');
            btn.classList.add('btn-light');
        });

        // footerText.classList.remove('text-body-secondary');
        // footerTwitter.classList.remove('text-body-secondary');
        // footerInsta.classList.remove('text-body-secondary');
        // footerFacebook.classList.remove('text-body-secondary');
        // footerText.classList.add('text-secondary');
        // footerTwitter.classList.add('text-secondary');
        // footerInsta.classList.add('text-secondary');
        // footerFacebook.classList.add('text-secondary');

    } else { // light theme
        bgDiv.classList.remove('background-dark');
        bgDiv.classList.add('background');

        navBar.classList.remove('navbar-dark');
        navBar.classList.add('navbar-light');

        themeButton.classList.remove('btn-light');
        themeButton.classList.add('btn-dark');
        themeButton.innerHTML = '<i class="bi bi-moon-fill"></i>';

        loginButton.classList.remove('btn-light');
        loginButton.classList.add('btn-dark');

        searchBtn.classList.remove('btn-light');
        searchBtn.classList.add('btn-dark');

        searchDiv.classList.remove('bg-dark', 'shadow-light');
        searchDiv.classList.add('bg-light', 'shadow-dark');

        recentSongsDiv.classList.remove('bg-dark', 'shadow-light');
        recentSongsDiv.classList.add('bg-light', 'shadow-dark');
        recentSongsTitle.classList.add('text-dark');
        recentSongsTitle.classList.remove('text-light');

        browseMusicDiv.classList.remove('bg-dark', 'shadow-light');
        browseMusicDiv.classList.add('bg-light', 'shadow-dark');
        browseMusicTitle.classList.add('text-dark');
        browseMusicTitle.classList.remove('text-light');

        createPlaylistDiv.classList.remove('bg-dark', 'shadow-light');
        createPlaylistDiv.classList.add('bg-light', 'shadow-dark');
        createPlaylistTitle.classList.add('text-dark');
        createPlaylistTitle.classList.remove('text-light');

        browseCards.forEach(card => {
            card.classList.remove('bg-dark', 'shadow-light');
            card.classList.add('bg-light', 'shadow-dark');
        });

        recentCards.forEach(card => {
            card.classList.remove('bg-dark', 'shadow-light');
            card.classList.add('bg-light', 'shadow-dark');
        });

        playlistBtn.forEach(btn => {
            btn.classList.remove('btn-light');
            btn.classList.add('btn-dark');
        });

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


// loginButton = document.getElementById('loginButton');
// loginButton.onclick = function () {
//     window.location.href = './login.html';
// }
