const fonts = [
    "Absolute",
    "Ark",
    "Awesome",
    "Bacteria",
    "Buzzer",
    "Compass",
    "Corset",
    "Curse",
    "Desert",
    "Dust",
    "Fear",
    "Futile",
    "Holotype",
    "Hungry",
    "Ignore",
    "Kobold",
    "Lookout",
    "Loser",
    "Manticore",
    "Mask",
    "Match",
    "Memo",
    "More",
    "Nope",
    "Outflank",
    "Passage",
    "Quit",
    "Rude",
    "Saga",
    "Salty",
    "Sins",
    "Tape",
    "Teatime",
    "Troll",
    "Urban",
    "Vest",
    "Winds",
    "Xerxes",
    "Yesterday",
    "Ziplock"
];

const NUMBER_OF_STARS = 40;

const mainText = document.querySelector('#main-text');
const backgroundElement = document.querySelector('.background');

async function changeFont() {
    let fontIndex = Math.floor(Math.random() * fonts.length);
    let fontName = fonts[fontIndex];

    try {
        await document.fonts.load(`16px "${fontName}"`);
        mainText.style.fontFamily = `"${fontName}"`;
    } catch (err) {
        console.warn(`Font ${fontName} failed to load`, err);
    }
}

setInterval(changeFont, 500);

function renderStars() {
    for (let i = 0; i < NUMBER_OF_STARS; i++) {
        const newStar = document.createElement("span");
        newStar.classList.add("star");

        let randomLeft = Math.floor(Math.random() * 99) + 1;
        newStar.style.left = `${randomLeft}%`;

        newStar.style.top = "100%";

        let randomDuration = Math.floor(Math.random() * (30 - 10 + 1)) + 15;
        newStar.style.animationDuration = `${randomDuration}s`;

        let randomDelay = Math.floor(Math.random() * 20) + 1;
        newStar.style.animationDelay = `${randomDelay}s`;

        backgroundElement.appendChild(newStar);
    }
}

renderStars();