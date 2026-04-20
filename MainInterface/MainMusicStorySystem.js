var Music1 = document.getElementById("Music1");
var Music2 = document.getElementById("Music2");
var Music3 = document.getElementById("Music3");
var Music4 = document.getElementById("Music4");
var Music5 = document.getElementById("Music5");
var Music6 = document.getElementById("Music6");
var Music7 = document.getElementById("Music7");
var Music8 = document.getElementById("Music8");
var Music9 = document.getElementById("Music9");
var EndingMusic = document.getElementById("Music9");

function StopAllMusic() {
    Music1.pause(); Music1.currentTime = 0;
    Music2.pause(); Music2.currentTime = 0;
    Music3.pause(); Music3.currentTime = 0;
    Music4.pause(); Music4.currentTime = 0;
    Music5.pause(); Music5.currentTime = 0;
    Music6.pause(); Music6.currentTime = 0;
    Music7.pause(); Music7.currentTime = 0;
    Music8.pause(); Music8.currentTime = 0;
    Music9.pause(); Music9.currentTime = 0;
}

function MusicPlayLines() {
    if (StoryLineNumberSelected === 0) {
        StopAllMusic();
        Music1.play();
        Music1.volume = 0.3;
    } else if (StoryLineNumberSelected === 10) {
        StopAllMusic();
        Music2.play();
        Music2.volume = 0.3;
    } else if (StoryLineNumberSelected === 22) {
        StopAllMusic();
        Music3.play();
        Music3.volume = 0.3;
    } else if (StoryLineNumberSelected === 31) {
        StopAllMusic();
        Music4.play();
        Music4.volume = 0.3;
    } else if (StoryLineNumberSelected === 41) {
        StopAllMusic();
        Music5.play();
        Music5.volume = 0.3;
    } else if (StoryLineNumberSelected === 54) {
        StopAllMusic();
        Music6.play();
        Music6.volume = 0.3;
    } else if (StoryLineNumberSelected === 80) {
        StopAllMusic();
        Music7.play();
        Music7.volume = 0.3;
    } else if (StoryLineNumberSelected === 92) {
        StopAllMusic();
        Music8.play();
        Music8.volume = 0.3;

        
    } else if (StoryLineNumberSelected === 112) {
        StopAllMusic();
        Music9.volume = 0.5;
        Music9.play();
    }
}


// SFX VARIABLES
var SFX1 = document.getElementById("SFX1");
var SFX2 = document.getElementById("SFX2");
var SFX3 = document.getElementById("SFX3");
var SFX4 = document.getElementById("SFX4");
var SFX5 = document.getElementById("SFX5");
var SFX6 = document.getElementById("SFX6");
var SFX7 = document.getElementById("SFX7");
var SFX8 = document.getElementById("SFX8");

function StopAllSFX() {
    SFX1.pause(); SFX1.currentTime = 0;
    SFX2.pause(); SFX2.currentTime = 0;
    SFX3.pause(); SFX3.currentTime = 0;
    SFX4.pause(); SFX4.currentTime = 0;
    SFX5.pause(); SFX5.currentTime = 0;
    SFX6.pause(); SFX6.currentTime = 0;
    SFX7.pause(); SFX7.currentTime = 0;
    SFX8.pause(); SFX8.currentTime = 0;
}

function SFXPlayLines() {
    if (StoryLineNumberSelected === 27) {
        StopAllSFX();
        SFX1.volume = 0.7;
        SFX1.play(); // Footsteps SFX
    } else if (StoryLineNumberSelected === 28) {
        StopAllSFX();
        SFX2.volume = 1;
        SFX2.play(); // Scream SFX
    } else if (StoryLineNumberSelected === 32) {
        StopAllSFX();
        SFX3.volume = 0.8;
        SFX3.play(); // Door slam SFX
    } else if (StoryLineNumberSelected === 33) {
        StopAllSFX();
        SFX2.volume = 1;
        SFX2.play(); // Scream SFX
    } else if (StoryLineNumberSelected === 49) {
        StopAllSFX();
        SFX4.volume = 0.7;
        SFX4.play(); // Metal clang SFX
    } else if (StoryLineNumberSelected === 53) {
        StopAllSFX();
        SFX5.volume = 0.6;
        SFX5.play(); // Timer beep SFX
    } else if (StoryLineNumberSelected === 92) {
        StopAllSFX();
        SFX6.volume = 0.8;
        SFX6.play(); // Rumble/shake SFX
    } else if (StoryLineNumberSelected === 93) {
        StopAllSFX();
        SFX7.volume = 0.7;
        SFX7.play(); // Crack/break SFX
    } else if (StoryLineNumberSelected === 96) {
        StopAllSFX();
        SFX8.volume = 0.6;
        SFX8.play(); // Lock click SFX
    } else {
        StopAllSFX(); // stop all sfx pag wala trigger
    }
}