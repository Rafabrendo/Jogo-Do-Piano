const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");//na classe volume-slider eu vou pegar o input
const keysCheck = document.querySelector(".keys-check input");


let mapedKeys = []; //As teclas são vão tocar se estiverem dentro desse vetor
let audio = new Audio("src/tunes/a.wav");

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active") //É o pseudo-elemento que está no css
    setTimeout(()=>{
        clickedKey.classList.remove("active");
    },150)

};


pianoKeys.forEach((key)=>{
    console.log(key.dataset.key); //Vai pegar os valores que tem o prefixo data, e dentro uma variavel que tem o nome key
    key.addEventListener("click", ()=> playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key)
});

document.addEventListener("keydown", (e)=>{
    if(mapedKeys.includes(e.key)){
        playTune(e.key);
    }
});

const handleVolume = (e)=>{
    audio.volume = e.target.value;
    //console.log(e.target.value);//Dentro da variavel tem o target que por sua vez tem a propriedade value.
}

const showHideKeys = (e)=>{
    pianoKeys.forEach(key => key.classList.toggle("hide"))//Vai dar a classe hide quando a tecla for clicada
    //A classe que vai ser formada: .key.hide
}

volumeSlider.addEventListener("input", handleVolume)

keysCheck.addEventListener("click", showHideKeys);
