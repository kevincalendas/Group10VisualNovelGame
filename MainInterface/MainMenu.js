const overlaything = document.getElementById('ActivateGame');
const overlaytextz = document.getElementById('ActivateGameText');
const MainIntro1H = document.getElementById('MainIntro1H');
const MainIntroPanel = document.getElementById('MainIntroPanel');
const MainIntroPanel1 = document.getElementById('MainIntroPanel1');
const MainMenuTitle = document.getElementById('MainMenuTitle');
var MainMenuMusicBackground = document.getElementById("MainMenuMusicBackground");
var MainMenuSFX = document.getElementById("MainMenuSFX1");

// for whole website //
const elem = document.documentElement; // Buong website ito
overlaything.addEventListener('click', () => {
    overlaytextz.style.color = 'red';
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
    overlaytextz.style.animation = 'FadeLoopAnimation 0.2s steps(1) infinite';
    setTimeout(() => {
        overlaything.style.display = 'none';
        
        setTimeout(() => {
            MainIntro1H.style.animation = 'MainIntroPanel 0.08s ease 1.05s 4 forwards, MainIntroPanel1 0.07s ease 2.5s 3 forwards';
            setTimeout(() => {
                MainMenuSFX.play();
            }, 850);
            
            setTimeout(() => {
                MainMenuSFX.pause();
            }, 1300);

            setTimeout(() => {
                MainMenuSFX.play();
            }, 2300);

            setTimeout(() => {
                MainMenuSFX.pause();
            }, 2500);


            // closing the static sound effect and starting the music at the same time to create a smooth transition //
            setTimeout(() => {
                MainMenuMusicBackground.play();
            }, 4000);

            // ScaleDownAnimation // scale down Animation for the Main Menu //
            MainIntroPanel.style.animation = 'Fadeout 0.5s ease 4s both, ScaleDownAnimation 1s ease 4s both, MainTextShake3 0.5s ease 2.5s 1 both';
            MainIntroPanel1.style.animation = 'Fadein 1s ease 4.5s forwards, ScaleDownAnimation1 1s ease 4.2s forwards';
            
        }, 0);  
    }, 1000);
});

// Main Menu Button1 Open Function with Animation //

function OpenMainMenuButton1() {

}