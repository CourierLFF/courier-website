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

const mainText = document.querySelector('#main-text');

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