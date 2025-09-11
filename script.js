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
    "Holotype",
    "Hungry",
    "Ignore",
    "Kobold",
    "Lookout",
    "Loser",
    "Manticore",
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
    "Vest",
    "Winds",
    "Xerxes",
    "Yesterday",
    "Ziplock"
];

const NUMBER_OF_STARS = 40;

const mainText = document.querySelector('#main-text');
const backgroundElement = document.querySelector('.background');
const headerText = document.querySelector('#header-text');

async function changeFont(textElement) {
    let fontIndex = Math.floor(Math.random() * fonts.length);
    let fontName = fonts[fontIndex];

    try {
        await document.fonts.load(`16px "${fontName}"`);
        textElement.style.fontFamily = `"${fontName}"`;
    } catch (err) {
        console.warn(`Font ${fontName} failed to load`, err);
    }
}

setInterval(() => {
    changeFont(mainText)
}, 500);

changeFont(headerText);

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