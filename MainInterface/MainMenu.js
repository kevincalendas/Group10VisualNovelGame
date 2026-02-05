const overlaything = document.getElementById('ActivateGame');
const overlaytextz = document.getElementById('ActivateGameText');
const MainIntro1H = document.getElementById('MainIntro1H');
const MainIntroPanel = document.getElementById('MainIntroPanel');
const MainIntroPanel1 = document.getElementById('MainIntroPanel1');
const MainMenuTitle = document.getElementById('MainMenuTitle');
var MainMenuMusicBackground = document.getElementById("MainMenuMusicBackground");
var MainMenuSFX = document.getElementById("MainMenuSFX1");

overlaything.addEventListener('click', () => {
    overlaytextz.style.color = 'red';
    overlaytextz.style.animation = 'FadeLoopAnimation 0.2s steps(1) infinite';
    setTimeout(() => {
        overlaything.style.display = 'none';
        
        setTimeout(() => {
            MainIntro1H.style.animation = 'MainIntroPanel 0.1s ease 1s 4 forwards, MainIntroPanel1 0.1s ease 2.5s 2 forwards';
            setTimeout(() => {
                MainMenuSFX.play();
            }, 650);
            
            setTimeout(() => {
                MainMenuSFX.pause();
            }, 900);

            setTimeout(() => {
                MainMenuSFX.play();
            }, 2170);

            setTimeout(() => {
                MainMenuSFX.pause();
            }, 2250);


            // closing the static sound effect and starting the music at the same time to create a smooth transition //
            setTimeout(() => {
                MainMenuMusicBackground.play();
            }, 4700);
            MainIntroPanel.style.animation = 'Fadeout 1s ease 4s forwards';
            MainIntroPanel1.style.animation = 'Fadein 1s ease 4.5s forwards';
            MainMenuTitle.style.animation = 'GoingLeftAnimation 0.5s ease-out 5.0s forwards, Fadein 0.5s ease-in-out 5.0s forwards, MainTextShake3 3s steps(1) 6.0s infinite forwards, MainTextFlicker2 3s steps(1) 6.0s infinite forwards';
        }, 0);
    }, 1000);
});