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

let gameShelfDataPlaying = gameShelfData.filter(game => game.game_state === 'Playing');
let gameShelfDataBacklog = gameShelfData.filter(game => game.game_state === 'Backlog');
let gameShelfDataCompleted = gameShelfData.filter(game => game.game_state === 'Completed');
let gameShelfDataDropped = gameShelfData.filter(game => game.game_state === 'Dropped');

for (const button of document.querySelectorAll('.tracked-state-buttons button')) {
    button.addEventListener('click', () => {
        currentState = button.textContent;
        disableOtherButtons();
    });
}
        

const gameshelfTable = document.getElementById('gameshelf-table');
gameShelfData.forEach(game => {
    const row = document.createElement('tr');
    const name = document.createElement('td');
    const rating = document.createElement('td');
    
    name.innerHTML = `<img class="cover-art" src="${game.cover_art}" alt="${game.name}"><a class="game-link" href="${game.igdb_url}">${game.name}</a>`;
    rating.textContent = game.user_rating;

    row.appendChild(name);
    row.appendChild(rating);
    row.classList.add('game-row');
    gameshelfTable.appendChild(row);
});