async function getGameShelfData() {
    const response = await fetch('https://gameshelf.courier.love/api/getGames')
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

let gameShelfData = await getGameShelfData()

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