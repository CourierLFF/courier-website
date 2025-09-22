import {changeFont, changeText} from "./templates/template.js";

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

const definitionText = document.querySelector('#definition-text');
const definitionExplainText = document.querySelector('.definition-explain-text');
const rightLinks = document.querySelectorAll('.right-link');

changeFont(definitionText, FONTS);
setInterval(() => {
    changeFont(definitionText, FONTS)
}, 500);

changeText(definitionExplainText, DEFINITIONS);

for (let i = 0; i < rightLinks.length; i++) {
    rightLinks[i].addEventListener('mouseenter', () => {
        const rightLinkImg= rightLinks[i].querySelector('img');
        rightLinkImg.src = "assets/images/filled.png";
    });

    rightLinks[i].addEventListener('mouseleave', () => {
        const rightLinkImg= rightLinks[i].querySelector('img');
        rightLinkImg.src = "assets/images/unfilled.png";
    });

    const rickRoll = Math.floor(Math.random() * 500) + 1;
    if (rickRoll === 59) {
        rightLinks[i].href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
}