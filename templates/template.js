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

const NUMBER_OF_STARS = 40;

const backgroundElement = document.querySelector('.background');
const headerText = document.querySelector('#header-text');
const headerSubtitle = document.querySelector('#header-subtitle');

export async function changeFont(textElement, fontPool) {
    let fontIndex = Math.floor(Math.random() * fontPool.length);
    let fontName = fontPool[fontIndex];

    try {
        await document.fonts.load(`16px "${fontName}"`);
        textElement.style.fontFamily = `"${fontName}"`;
    } catch (err) {
        console.warn(`Font ${fontName} failed to load`, err);
    }
}

changeFont(headerText, ADJUSTED_FONTS);

export function changeText(textElement ,textPool) {
    let subtitleIndex = Math.floor(Math.random() * textPool.length);
    if (textPool[subtitleIndex].length >= 20) {
        textElement.style.right = "-85px";
    }
    textElement.textContent = textPool[subtitleIndex];
}

changeText(headerSubtitle, SUBTITLES);

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