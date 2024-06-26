// const { create } = require("../../models/Artist");


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
    cardText = document.querySelectorAll('.card-text');
    cardTitle = document.querySelectorAll('.card-title');

    playlistCards = document.querySelectorAll('.playlistCard');
    createPlaylistButton = document.getElementById('createPlaylistButton');
    groupListItem = document.querySelectorAll('.list-group-item');

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

        createPlaylistButton.classList.remove('btn-dark');
        createPlaylistButton.classList.add('btn-light');

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

        cardText.forEach(text => {
            text.classList.remove('text-dark');
            text.classList.add('text-light');
        });

        cardTitle.forEach(title => {
            title.classList.remove('text-dark');
            title.classList.add('text-light');
        });

        playlistCards.forEach(card => {
            card.classList.remove('bg-light', 'shadow-dark');
            card.classList.add('bg-dark', 'shadow-light');
        });

        groupListItem.forEach(item => {
            item.classList.remove('text-dark');
            item.classList.add('text-light');
            item.classList.remove('bg-light');
            item.classList.add('bg-dark');
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

        createPlaylistButton.classList.remove('btn-light');
        createPlaylistButton.classList.add('btn-dark');

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

        cardText.forEach(text => {
            text.classList.remove('text-light');
            text.classList.add('text-dark');
        });

        cardTitle.forEach(title => {
            title.classList.remove('text-light');
            title.classList.add('text-dark');
        });

        playlistCards.forEach(card => {
            card.classList.remove('bg-dark', 'shadow-light');
            card.classList.add('bg-light', 'shadow-dark');
        });

        groupListItem.forEach(item => {
            item.classList.remove('text-light');
            item.classList.add('text-dark');
            item.classList.remove('bg-dark');
            item.classList.add('bg-light');
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




// renders search songs
searchInput = document.getElementById('searchInput');
searchBtn = document.getElementById('searchBtn');
searchBtn.onclick = async function (event) {
    event.preventDefault();
    await fetch(('/api/songs/title/' + searchInput.value), {
        method: 'GET',
    }, { headers: { 'Content-Type': 'application/json' } })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let maxLength;
            if (data.length < 5) {
                maxLength = data.length;
            } else {
                maxLength = 5;
            }
            if (localStorage.getItem('theme') === 'dark') {
                for (let i = 0; i < maxLength; i++) {
                    let browseCard = browseMusicDiv.appendChild(document.createElement('div'));
                    browseCard.classList.add('card', 'm-3', 'browseCard', 'bg-dark', 'shadow-light');
                    let browseCardRow = browseCard.appendChild(document.createElement('div'));
                    browseCardRow.classList.add('row', 'g-0');
                    let colMed2 = browseCardRow.appendChild(document.createElement('div'));
                    colMed2.classList.add('col-md-2');
                    let iframe = colMed2.appendChild(document.createElement('iframe'));
                    iframe.src = "https://www.youtube.com/embed/" + data[i].song_url + "?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1";
                    iframe.classList.add('rounded-start');
                    iframe.allowfullscreen = true;
                    iframe.allowtransparency = true;
                    iframe.allow = "autoplay";
                    iframe.width = "100%";
                    iframe.height = "90%";
                    let colMed8 = browseCardRow.appendChild(document.createElement('div'));
                    colMed8.classList.add('col-md-8');
                    let colMed8Body = colMed8.appendChild(document.createElement('div'));
                    colMed8Body.classList.add('card-body', 'text-light');
                    let colMed8Title = colMed8Body.appendChild(document.createElement('h5'));
                    colMed8Title.classList.add('card-title', 'text-light');
                    colMed8Title.innerHTML = data[i].song_title;
                    let colMed8Text = colMed8Body.appendChild(document.createElement('p'));
                    colMed8Text.classList.add('card-text', 'text-light');
                    colMed8Text.innerHTML = data[i].artist.artist_name;
                    let col2 = browseCardRow.appendChild(document.createElement('div'));
                    col2.classList.add('col-2');
                    let playBtn = col2.appendChild(document.createElement('button'));
                    playBtn.classList.add('btn', 'btn-light', 'playlistBtn', 'm-5');
                    playBtn.setAttribute('data-songId', data[i].id);
                    playBtn.appendChild(document.createElement('i')).classList.add('bi', 'bi-music-note-list');
                    updatePlaylistBtns(playBtn);
                }
            } else {
                for (let i = 0; i < maxLength; i++) {
                    let browseCard = browseMusicDiv.appendChild(document.createElement('div'));
                    browseCard.classList.add('card', 'm-3', 'browseCard', 'bg-light', 'shadow-dark');
                    let browseCardRow = browseCard.appendChild(document.createElement('div'));
                    browseCardRow.classList.add('row', 'g-0');
                    let colMed2 = browseCardRow.appendChild(document.createElement('div'));
                    colMed2.classList.add('col-md-2');
                    let iframe = colMed2.appendChild(document.createElement('iframe'));
                    iframe.src = "https://www.youtube.com/embed/" + data[i].song_url + "?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1";
                    iframe.classList.add('rounded-start');
                    iframe.allowfullscreen = true;
                    iframe.allowtransparency = true;
                    iframe.allow = "autoplay";
                    iframe.width = "100%";
                    iframe.height = "90%";
                    let colMed8 = browseCardRow.appendChild(document.createElement('div'));
                    colMed8.classList.add('col-md-8');
                    let colMed8Body = colMed8.appendChild(document.createElement('div'));
                    colMed8Body.classList.add('card-body', 'text-dark');
                    let colMed8Title = colMed8Body.appendChild(document.createElement('h5'));
                    colMed8Title.classList.add('card-title', 'text-dark');
                    colMed8Title.innerHTML = data[i].song_title;
                    console.log(data[i]);
                    let colMed8Text = colMed8Body.appendChild(document.createElement('p'));
                    colMed8Text.classList.add('card-text', 'text-dark');
                    colMed8Text.innerHTML = data[i].artist.artist_name;
                    let col2 = browseCardRow.appendChild(document.createElement('div'));
                    col2.classList.add('col-2');
                    let playBtn = col2.appendChild(document.createElement('button'));
                    playBtn.setAttribute('data-songId', data[i].id);
                    playBtn.classList.add('btn', 'btn-dark', 'playlistBtn', 'm-5');
                    playBtn.appendChild(document.createElement('i')).classList.add('bi', 'bi-music-note-list');
                    updatePlaylistBtns(playBtn);
                }
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// renders playlists for user
function renderPlaylists() {
    fetch('/api/playlists/user', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then(data => {
            createPlaylistDiv.innerHTML = '';
            console.log(data);
            let maxLength;
            if (data.length < 5) {
                maxLength = data.length;
            } else {
                maxLength = 5;
            }
            if (localStorage.getItem('theme') === 'dark') {
                for (let i = 0; i < maxLength; i++) {
                    let cardm3 = createPlaylistDiv.appendChild(document.createElement('div'));
                    cardm3.classList.add('card', 'm-3', 'bg-dark', 'shadow-light', 'playlistCard', 'p-2');
                    // let rowg0 = cardm3.appendChild(document.createElement('div'));
                    // rowg0.classList.add('row', 'g-0');
                    // let colmd8 = rowg0.appendChild(document.createElement('div'));
                    // colmd8.classList.add('col-md-8');
                    let cardTitle = cardm3.appendChild(document.createElement('h5'));
                    cardTitle.classList.add('card-title', 'text-light');
                    cardTitle.innerHTML = data[i].playlist_name;
                    let cardBody = cardm3.appendChild(document.createElement('div'));
                    cardBody.classList.add('card-body');
                    let cardText = cardBody.appendChild(document.createElement('p'));
                    cardText.classList.add('card-text', 'text-light');
                    cardText.innerHTML = data[i].description;
                    let songList = cardBody.appendChild(document.createElement('ul'));
                    songList.classList.add('list-group', 'list-group-flush', 'bg-dark', 'text-light');
                    for (let j = 0; j < data[i].songs.length; j++) {
                        let songListItem = songList.appendChild(document.createElement('li'));
                        songListItem.classList.add('list-group-item', 'bg-dark', 'text-light');
                        songListItem.innerHTML = data[i].songs[j].song_title;
                    }
                }
            } else {
                for (let i = 0; i < maxLength; i++) {
                    let cardm3 = createPlaylistDiv.appendChild(document.createElement('div'));
                    cardm3.classList.add('card', 'm-3', 'bg-light', 'shadow-dark', 'playlistCard', 'p-2');
                    // let rowg0 = cardm3.appendChild(document.createElement('div'));
                    // rowg0.classList.add('row', 'g-0');
                    // let colmd8 = rowg0.appendChild(document.createElement('div'));
                    // colmd8.classList.add('col-md-8');
                    let cardTitle = cardm3.appendChild(document.createElement('h5'));
                    cardTitle.classList.add('card-title', 'text-dark');
                    cardTitle.innerHTML = data[i].playlist_name;
                    let cardBody = cardm3.appendChild(document.createElement('div'));
                    cardBody.classList.add('card-body');
                    let cardText = cardBody.appendChild(document.createElement('p'));
                    cardText.classList.add('card-text', 'text-dark');
                    cardText.innerHTML = data[i].description;
                    let songList = cardBody.appendChild(document.createElement('ul'));
                    songList.classList.add('list-group', 'list-group-flush', 'bg-light', 'text-dark');
                    for (let j = 0; j < data[i].songs.length; j++) {
                        let songListItem = songList.appendChild(document.createElement('li'));
                        songListItem.classList.add('list-group-item', 'bg-light', 'text-dark');
                        songListItem.innerHTML = data[i].songs[j].song_title;
                    }
                }
            }
        })
        .catch(error => {
            // console.log(error);
            console.error('Error:', error);
        });
}

renderPlaylists();

// button that creates a playlist
createPlaylistButton.onclick = function () {
    fetch('/api/playlists/', {
        method: 'POST',
        body: JSON.stringify({
            playlist_name: document.getElementById('playlistName').value,
            description: document.getElementById('playlistDescription').value
        }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function updatePlaylistBtns(newBtn) {
    // playlistBtns = document.querySelectorAll('.playlistBtn');
    newBtn.onclick = function () {
        console.log('clicked');
        fetch('/api/playlists/songs', {
            method: 'PUT',
            body: JSON.stringify({
                playlist_id: 1,
                song_id: newBtn.getAttribute('data-songId')
            }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                renderPlaylists();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

}

let playlistBtns = document.querySelectorAll('.playlistBtn');
playlistBtns.forEach(btn => {
    console.log(btn);
    btn.onclick = function () {
        console.log('clicked');
        fetch('/api/playlists/songs', {
            method: 'PUT',
            body: JSON.stringify({
                playlist_id: 1,
                song_id: btn.getAttribute('data-songId')
            }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

});
