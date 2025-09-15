const FONTS = [
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

const ADJUSTED_FONTS = [
    "Dust",
    "Hungry",
    "Kobold",
    "Lookout",
    "Loser",
    "Match",
    "Passage",
    "Sins",
    "Winds"
]

const SUBTITLES = [
    "LOVEFREEFOREVER",
    "I've done it again...",
    "Elims is happy!",
    "The sun smiles.",
    "The violent miracle.",
    "A broken man.",
    "Momento Mori!",
    "External validation.",
    "Despite Everything, it's still you.",
    "Ain't that a kick in the head!",
    "You let me down... down...",
    "Butcher release soon!",
    "Now I only want you gone.",
    "Tier 0 item.",
    "Everything's alright.",
    "Wrong city, wrong people.",
    "Do you like hurting other people?",
    "The spire sleeps, and so shall I.",
    "KIRYUUU-CHANNN!",
    "Raindrops falling on my head.",
    "Reach out to the truth!",
    "Break free!",
    "x20 mult.",
    "Rip and Tear.",
    "The only thing they fear is you.",
    "Thank you for remembering me.",
    "PEOPLE'S DREAMS NEVER END!",
    "I'm still in a dream...",
]

const DEFINITIONS = [
    "The pursuit of your passions no matter the obstacles that may stand in your way.",
    "Going through the worst event of your life and waking up the next day knowing it will all be okay.",
    "Untying the noose.",
    "Something greater than what our current vocabulary can articulate.",
    "Having a nice conversation with a friend.",
    "The sun coming up the next morning.",
    "The ultimate euphoria.",
    "The process of clearing the fog, never knowing if it will all go away, but still being happy with yourself.",
    "Overcoming trauma.",
    "The respite of silence after many long nights of screaming.",
    "Reaching inside yourself, past all the hate, to find pockets of love.",
    "Looking in the mirror and smiling.",
    "The freedom to love, whoever or whatever you want, for as long as you breathe.",
    "Being strong enough to cry.",
    "Being strong enough to not cry.",
    "Achieving valedictorian status and knowing you still have more to learn."
]

const NUMBER_OF_STARS = 40;

const definitionText = document.querySelector('#definition-text');
const backgroundElement = document.querySelector('.background');
const headerText = document.querySelector('#header-text');
const headerSubtitle = document.querySelector('#header-subtitle');
const headerElement = document.querySelector('header');
const definitionExplainText = document.querySelector('.definition-explain-text');

async function changeFont(textElement, fontPool) {
    let fontIndex = Math.floor(Math.random() * fontPool.length);
    let fontName = fontPool[fontIndex];

    try {
        await document.fonts.load(`16px "${fontName}"`);
        textElement.style.fontFamily = `"${fontName}"`;
    } catch (err) {
        console.warn(`Font ${fontName} failed to load`, err);
    }
}

changeFont(definitionText, FONTS);
setInterval(() => {
    changeFont(definitionText, FONTS)
}, 500);

changeFont(headerText, ADJUSTED_FONTS);

function changeText(textElement ,textPool) {
    let subtitleIndex = Math.floor(Math.random() * textPool.length);
    if (textPool[subtitleIndex].length >= 20) {
        textElement.style.right = "-85px";
    }
    textElement.textContent = textPool[subtitleIndex];
}

changeText(headerSubtitle, SUBTITLES);
changeText(definitionExplainText, DEFINITIONS);

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