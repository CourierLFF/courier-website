async function getGameShelfData() {
    const response = await fetch('https://gameshelf.courier.love/api/getGames')
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}


let gameShelfData = await getGameShelfData()

const default_state = 'Playing';
let currentState = default_state;

const default_sort = 'rating';
let currentSort = default_sort;

function disableOtherButtons() {
    document.querySelectorAll('.tracked-state-buttons button').forEach(button => {
        if (button.textContent == currentState) {
            button.disabled = true;
            button.classList.add('tracked-state-button-active');
        } else {
            button.disabled = false;
            button.classList.remove('tracked-state-button-active');
        }
    });
}

let gameShelfDataPlaying = gameShelfData.filter(game => game.game_state === 'Playing').sort((a, b) => b.user_rating - a.user_rating);
let gameShelfDataCompleted = gameShelfData.filter(game => game.game_state === 'Completed').sort((a, b) => b.user_rating - a.user_rating);
let gameShelfDataDropped = gameShelfData.filter(game => game.game_state === 'Dropped').sort((a, b) => b.user_rating - a.user_rating);

for (const button of document.querySelectorAll('.tracked-state-buttons button')) {
    button.addEventListener('click', () => {
        currentState = button.textContent;
        disableOtherButtons();
        updateGameShelfTable();
    });
}

const sortSelect = document.getElementById('sort-select');
sortSelect.addEventListener('change', () => {
    currentSort = sortSelect.value;

    switch (currentSort) {
        case 'name':
            gameShelfDataPlaying.sort((a, b) => a.name.localeCompare(b.name));
            gameShelfDataCompleted.sort((a, b) => a.name.localeCompare(b.name));
            gameShelfDataDropped.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-reverse':
            gameShelfDataPlaying.sort((a, b) => b.name.localeCompare(a.name));
            gameShelfDataCompleted.sort((a, b) => b.name.localeCompare(a.name));
            gameShelfDataDropped.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'rating':
            gameShelfDataPlaying.sort((a, b) => b.user_rating - a.user_rating);
            gameShelfDataCompleted.sort((a, b) => b.user_rating - a.user_rating);
            gameShelfDataDropped.sort((a, b) => b.user_rating - a.user_rating);
            break;
        case 'rating-reverse':
            gameShelfDataPlaying.sort((a, b) => a.user_rating - b.user_rating);
            gameShelfDataCompleted.sort((a, b) => a.user_rating - b.user_rating);
            gameShelfDataDropped.sort((a, b) => a.user_rating - b.user_rating);
            break;
    }

    updateGameShelfTable();
});

        

const gameshelfTable = document.getElementById('gameshelf-table');

function updateGameShelfTable() {
    gameshelfTable.innerHTML = '<tr><th>Game</th><th>Rating</th></tr>';
    switch (currentState) {
        case 'Playing':
            gameShelfDataPlaying.forEach(game => {
                const row = document.createElement('tr');
                const name = document.createElement('td');
                const rating = document.createElement('td');
                
                name.innerHTML = `<img class="cover-art" src="${game.cover_art}" alt="${game.name}"><a class="game-link" href="${game.igdb_url}">${game.name}</a>`;
                rating.textContent = `${game.user_rating} / 100`;

                row.appendChild(name);
                row.appendChild(rating);
                row.classList.add('game-row');
                gameshelfTable.appendChild(row);
            });
            break;
        case 'Completed':
            gameShelfDataCompleted.forEach(game => {
                const row = document.createElement('tr');
                const name = document.createElement('td');
                const rating = document.createElement('td');
                
                name.innerHTML = `<img class="cover-art" src="${game.cover_art}" alt="${game.name}"><a class="game-link" href="${game.igdb_url}">${game.name}</a>`;
                rating.textContent = `${game.user_rating} / 100`;

                row.appendChild(name);
                row.appendChild(rating);
                row.classList.add('game-row');
                gameshelfTable.appendChild(row);
            });
            break;
        case 'Dropped':
            gameShelfDataDropped.forEach(game => {
                const row = document.createElement('tr');
                const name = document.createElement('td');
                const rating = document.createElement('td');
                
                name.innerHTML = `<img class="cover-art" src="${game.cover_art}" alt="${game.name}"><a class="game-link" href="${game.igdb_url}">${game.name}</a>`;
                rating.textContent = `${game.user_rating} / 100`;

                row.appendChild(name);
                row.appendChild(rating);
                row.classList.add('game-row');
                gameshelfTable.appendChild(row);
            });
            break;
    }  
}

updateGameShelfTable();
disableOtherButtons();