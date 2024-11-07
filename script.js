const words = ["abacaxi", "bola", "cachorro", "dado", "elefante", 
"foca", "gato", "hipopotamo", "iguana", "jacare",
"kiwi", "leão", "macaco", "navio", "ocelote",
"pato", "quati", "rato", "sapo", "tigre",
"urso", "vaca", "zebra", "abacate", "banana",
"cachorro-quente", "doce", "estrela", "flor", "girafa",
"hotel", "ilha", "janela", "kit", "lâmpada",
"marmelo", "nuvem", "óculos", "piano", "quadro",
"relógio", "sanduíche", "taco", "uva", "vassoura",
"xícara", "yeti", "zangado", "aviao", "bola-de-fogo",
"cachoeira", "dicionario", "eletrico", "ferrari", "guitarra",
"hamburguer", "internet", "jardim", "ketchup", "lago",
"música", "navalha", "oceano", "pintura", "quimica",
"ratoeira", "sapato", "trem", "urso-polar", "vulcao",
"xadrez", "yoga", "zoologico", "abstrato", "bandeira",
"caderno", "desenho", "escola", "floresta", "gelo",
"historia", "inseto", "jogo", "kiwi", "leitura",
"mar", "notebook", "oculos-de-sol", "pintor", "quadro-negro",
"relato", "sereia", "tela", "universo", "vortex",
"xadrez", "yeti", "zelador", "abacateiro", "bicho-preguica",
"caminhao", "dama", "elefante-marinho", "foca", "gato-do-mato",
"hipopotamo", "jacare", "kiwi", "leão", "macaco-prego",
"navio", "ocelote", "pato-mergulhão", "quati", "rato",
"sapo-cururu", "tigre-bengal", "urso-polar", "vaca-leiteira", "zebra", "sigma", "fodaci"];
let selectedWord;
let guessedLetters = [];
let attemptsLeft;

function startGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    attemptsLeft = 6;
    document.getElementById("message").textContent = "";
    document.getElementById("letterInput").value = "";
    updateWordDisplay();
    updateLettersDisplay();
}

function updateWordDisplay() {
    const displayWord = selectedWord.split('').map(letter => (guessedLetters.includes(letter) ? letter : '_')).join(' ');
    document.getElementById("word").textContent = displayWord;
    checkGameStatus(displayWord);
}

function updateLettersDisplay() {
    document.getElementById("letters").textContent = "Letras já adivinhadas: " + guessedLetters.join(', ');
}

function guessLetter() {
    const input = document.getElementById("letterInput");
    const letter = input.value.toLowerCase();

    if (letter && !guessedLetters.includes(letter)) {
        guessedLetters.push(letter);
        if (!selectedWord.includes(letter)) {
            attemptsLeft--;
        }
        input.value = '';
        updateWordDisplay();
        updateLettersDisplay();
    }
}

function checkGameStatus(displayWord) {
    if (displayWord.indexOf('_') === -1) {
        document.getElementById("message").textContent = "Você ganhou!";
    } else if (attemptsLeft <= 0) {
        document.getElementById("message").textContent = "Você perdeu! A palavra era: " + selectedWord;
    }
}

// Inicia o jogo ao carregar a página
startGame();