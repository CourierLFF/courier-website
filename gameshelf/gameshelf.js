async function getGameShelfData() {
    const response = await fetch('https://gameshelf.courier.love/api/getGames')
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

let gameShelfData = await getGameShelfData()