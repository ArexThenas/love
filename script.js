const loveLanguages = {
    1: { language: "English", phrase: "I love you" },
    2: { language: "French", phrase: "Je t'aime" },
    3: { language: "Spanish", phrase: "Te amo" },
    4: { language: "Italian", phrase: "Ti amo" },
    5: { language: "German", phrase: "Ich liebe dich" },
    6: { language: "Portuguese", phrase: "Eu te amo" },
    7: { language: "Dutch", phrase: "Ik hou van je" },
    8: { language: "Russian", phrase: "Ya tebya lyublyu" },
    9: { language: "Japanese", phrase: "Aishiteru" },
    10: { language: "Korean", phrase: "Saranghae" },
    11: { language: "Chinese", phrase: "Wo ai ni" },
    12: { language: "Arabic", phrase: "Ana bahebak" },
    13: { language: "Greek", phrase: "S'agapo" },
    14: { language: "Turkish", phrase: "Seni seviyorum" },
    15: { language: "Hindi", phrase: "Main tumse pyaar karta hoon" },
    16: { language: "Bengali", phrase: "Ami tomake bhalobashi" },
    17: { language: "Punjabi", phrase: "Main tenu pyaar karda haan" },
    18: { language: "Urdu", phrase: "Main tumse mohabbat karta hoon" },
    19: { language: "Persian", phrase: "Dooset daram" },
    20: { language: "Hebrew", phrase: "Ani ohev otach" },
    21: { language: "Swedish", phrase: "Jag älskar dig" },
    22: { language: "Norwegian", phrase: "Jeg elsker deg" },
    23: { language: "Danish", phrase: "Jeg elsker dig" },
    24: { language: "Finnish", phrase: "Mina rakastan sinua" },
    25: { language: "Icelandic", phrase: "Ég elska þig" },
    26: { language: "Polish", phrase: "Kocham cię" },
    27: { language: "Czech", phrase: "Miluji tě" },
    28: { language: "Slovak", phrase: "Ľúbim ťa" },
    29: { language: "Hungarian", phrase: "Szeretlek" },
    30: { language: "Romanian", phrase: "Te iubesc" },
    31: { language: "Bulgarian", phrase: "Obicham te" },
    32: { language: "Serbian", phrase: "Volim te" },
    33: { language: "Croatian", phrase: "Volim te" },
    34: { language: "Slovenian", phrase: "Ljubim te" },
    35: { language: "Ukrainian", phrase: "Ya tebe kokhayu" },
    36: { language: "Lithuanian", phrase: "Aš tave myliu" },
    37: { language: "Latvian", phrase: "Es tevi mīlu" },
    38: { language: "Estonian", phrase: "Ma armastan sind" },
    39: { language: "Albanian", phrase: "Të dua" },
    40: { language: "Armenian", phrase: "Yes kez sirum em" },
    41: { language: "Georgian", phrase: "Me shen miqvarkhar" },
    42: { language: "Swahili", phrase: "Nakupenda" },
    43: { language: "Zulu", phrase: "Ngiyakuthanda" },
    44: { language: "Afrikaans", phrase: "Ek is lief vir jou" },
    45: { language: "Filipino", phrase: "Mahal kita" },
    46: { language: "Indonesian", phrase: "Aku cinta kamu" },
    47: { language: "Malay", phrase: "Saya cintakan awak" },
    48: { language: "Vietnamese", phrase: "Anh yêu em" },
    49: { language: "Thai", phrase: "Chan rak khun" },
    50: { language: "Latin", phrase: "Te amo" }
};

const numberInput = document.getElementById("love-number");
const loveButton = document.getElementById("love-button");
const languageOutput = document.getElementById("language");
const messageOutput = document.getElementById("love-message");
const noteOutput = document.getElementById("translation-note");
const heartContainer = document.getElementById("heart-container");

function showLoveMessage() {
    const number = Number(numberInput.value);

    if (!numberInput.value) {
        languageOutput.textContent = "";
        messageOutput.textContent = "";
        noteOutput.textContent = "Choose a number between 1 and 50.";
        return;
    }

    if (number < 1 || number > 50 || !Number.isInteger(number)) {
        languageOutput.textContent = "";
        messageOutput.textContent = "";
        noteOutput.textContent = "Please choose a whole number between 1 and 50.";
        return;
    }

    const result = loveLanguages[number];

    languageOutput.textContent = result.language;
    messageOutput.textContent = result.phrase;
    noteOutput.textContent = "One feeling. Fifty different ways to say it.";
}

loveButton.addEventListener("click", function (event) {
    showLoveMessage();
    createHearts(event.clientX, event.clientY);
});

numberInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        showLoveMessage();
    }
});

function createHearts(x, y) {
    for (let i = 0; i < 3; i++) {
        const heart = document.createElement("span");

        heart.classList.add("floating-heart");
        heart.textContent = "♥";

        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;

        const randomX = (Math.random() - 0.5) * 120;
        const randomY = -60 - Math.random() * 100;
        const randomRotation = (Math.random() - 0.5) * 60;
        const size = 14 + Math.random() * 12;

        heart.style.setProperty("--heart-x", `${randomX}px`);
        heart.style.setProperty("--heart-y", `${randomY}px`);
        heart.style.setProperty("--heart-rotation", `${randomRotation}deg`);
        heart.style.fontSize = `${size}px`;

        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1200);
    }
}