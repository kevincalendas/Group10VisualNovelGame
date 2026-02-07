const overlaything = document.getElementById('ActivateGame');
const overlaytextz = document.getElementById('ActivateGameText');
const LoadingScreenDIV = document.getElementById("LoadingScreenDIV");
const HeadphoneSug = document.getElementById("HeadphoneSug");
const LoadingScreenText = document.getElementById("LoadingScreenText");
const LoadingScreenText1 = document.getElementById("LoadingScreenText1");
const MainDialoguePanel = document.getElementById("MainDialoguePanel");
const elem = document.documentElement;
var MainMenuSFX = document.getElementById("MainMenuSFX1");
var OpeningIntro1 = document.getElementById("OpeningIntro1");


    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }


// Loading Screen Function //
function ShowLoadingScreen() {
    overlaytextz.style.color = 'red';
    setTimeout(() => {
        overlaything.style.display = 'none';
    }, 1000);
    LoadingScreenDIV.style.display = "flex";
    setTimeout(() => {
        LoadingScreenDIV.style.animation = "Fadein 1s ease both";
        LoadingScreenText.style.animation = "MainIntroPanel1 0.07s ease 2.5s 3 forwards, MainIntroPanel 0.08s ease 2.5s 4 forwards, MainTextShake3 0.5s ease 2.5s 1 both, Fadeout 0.5s ease 5s both";
        setTimeout(() => {
            MainMenuSFX.play();
        }, 2300);
            
        setTimeout(() => {
            MainMenuSFX.pause();
        }, 2600);
        
        setTimeout(() => {
            OpeningIntro1.play();
        }, 5300);
        HeadphoneSug.style.animation = "Fadein 0.5s ease 5.5s both";
        HeadphoneSug.style.transform = "translateY(25px)";
        HeadphoneSug.style.animation = "MainmoveHeadphone1 0.5s ease 6.3s forwards, Fadein 0.5s ease 5.5s forwards, Fadeout 2s ease 10.5s forwards";
        LoadingScreenText1.style.animation = "Fadein 0.5s ease 6.3s forwards, Fadeout 2s ease 10.5s forwards";
    }, 5000);
}   

overlaything.addEventListener('click', () => {
    ShowLoadingScreen();
    setTimeout(() => {
        LoadingScreenDIV.style.display = "none";
        MainDialoguePanel.style.display = "flex";
    }, 20000);
});