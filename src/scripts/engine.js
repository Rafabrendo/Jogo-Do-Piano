const pianoKeys = document.querySelectorAll(".piano-keys .key");

let audio = new Audio("src/tunes/a.wav");

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`
    audio.play();
};


pianoKeys.forEach((key)=>{
    console.log(key.dataset.key); //Vai pegar os valores que tem o prefixo data, e dentro uma variavel que tem o nome key
    key.addEventListener("click", ()=> playTune(key.dataset.key));
});

document.addEventListener("keydown", (e)=>{
    playTune(e.key)
});