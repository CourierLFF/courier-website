async function getGameShelfData() {
    const response = await fetch('https://gameshelf.courier.love/api/getGames')
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

let gameShelfData = await getGameShelfData()

console.log(gameShelfData)

const gameshelfTable = document.getElementById('gameshelf-table');
gameShelfData.forEach(game => {
    const row = gameshelfTable.insertRow();
    const nameCell = row.insertCell(0);
    const ratingCell = row.insertCell(1);
    nameCell.innerHTML = `<a href="${game.igdb_url}">${game.name}</a>`;
    ratingCell.textContent = game.user_rating;
});