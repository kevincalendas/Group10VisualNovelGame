const overlaything = document.getElementById('ActivateGame');
const overlaytextz = document.getElementById('ActivateGameText');
const MainIntro1H = document.getElementById('MainIntro1H');
const MainIntroPanel = document.getElementById('MainIntroPanel');
const MainIntroPanel1 = document.getElementById('MainIntroPanel1');
const MainMenuTitle = document.getElementById('MainMenuTitle');
const LoadingText = document.getElementById('LoadingText');
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
            overlaytextz.classList.remove('FadeLoopAnimation');
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


// PLAY STORY SYSTEMS. //

function PlayButtonDirect() {
    const LoadingScreenDIV = document.getElementById("LoadingScreenDIV");
    const HeadphoneSug = document.getElementById("HeadphoneSug");
    const LoadingScreenText = document.getElementById("LoadingScreenText");
    const LoadingScreenText1 = document.getElementById("LoadingScreenText1");
    const MainDialoguePanel = document.getElementById("MainDialoguePanel");
    const elem = document.documentElement;
    var MainMenuSFX = document.getElementById("MainMenuSFX1");
    var OpeningIntro1 = document.getElementById("OpeningIntro1");
    setTimeout(() => {
        MainIntroPanel1.style.animation = 'Fadeout 0.5s ease forwards, ScaleUPAnimation 1s ease 0.1s forwards';
        setTimeout(() => {
            MainIntroPanel1.classList.remove('MainIntroPanel1');
            MainIntroPanel1.style.display = 'none';
            LoadingText.style.animation = 'Fadein 1s ease 0.5s forwards';
            LoadingText.style.display = 'block';
            setTimeout(() => {
                LoadingText.style.animation = 'Fadeout 1s ease 0.5s forwards';
                setTimeout(() => {
                    LoadingText.style.display = 'none';
                    ChooseNarrateAud();
                }, 1000);
            }, 5000);
        }, 1000);
    }, 500);
}

function ChooseNarrateAud() {
    const SelectionOptionPanel1A = document.getElementById("SelectionOptionPanel1A");
    
    SelectionOptionPanel1A.style.display = "block";
    SelectionOptionPanel1A.classList.add('SentenceFade');
    SelectionOptionPanel1A.style.opacity = 1;
}

// for button in choosing selection //
const Option1AWindow = document.getElementById("Option1AWindow");
const Option1BWindow = document.getElementById("Option1BWindow");

Option1AWindow.addEventListener('click', () => {
    const SelectionOptionPanel1A = document.getElementById("SelectionOptionPanel1A");

    SelectionOptionPanel1A.classList.remove('SentenceFade');

    setTimeout(() => {
        SelectionOptionPanel1A.classList.add('Fadeout2A');
        setTimeout(() => {
            SelectionOptionPanel1A.style.display = "none";
            setTimeout(() => {
                SelectionOptionPanel1A.classList.remove('Fadeout2A');
                ShowLoadingScreen1A();
            }, 200);
        }, 800);
    }, 200);
});



function ShowLoadingScreen1A() {
    LoadingScreenDIV.style.display = "flex";
    MainMenuMusicBackground.pause();
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
        setTimeout(() => {
            Line1AStory()
        }, 12500);
    }, 5000);
}   

// Story Lines A //
const MainDialogueCenterPanel = document.getElementById("MainDialogueCenterPanel");
const MainDialogueCenterText = document.getElementById("MainDialogueCenterText");
const MainDialogueCenteredNar = document.getElementById("MainDialogueCenteredNar");
var Voice1ANarrator = document.getElementById("Voice1ANarrator");

let CurrentPreviousLine = 0;
let currentStoryLine = 0;
function Line1AStory() {
    Voice1ANarrator.play();
    console.log("Showing first line...");
    MainDialogueCenterPanel.style.display = "flex";
    MainDialogueCenterText.innerHTML = '<span class="SentenceFade">In this story, there are four friends—Kevin, AJ, Lyza, and Rhema.    </span>';
    setTimeout(() => {
        console.log("Showing second line...");
        MainDialogueCenterText.insertAdjacentHTML('beforeend', '<span class="SentenceFade">One day, they decided to have a sleepover at Rhema’s house, which was located near a dark and silent forest. </span>');
    }, 8500);
    setTimeout(() => {
        console.log("Showing third line...");
        MainDialogueCenterText.insertAdjacentHTML('beforeend', '<span class="SentenceFade">Their friendship was strong; they treated each other like family, bound together like siblings. They were deeply attached to one another. </span>');
    }, 17100);
    setTimeout(() => {
        console.log("Showing fourth line...");
        MainDialogueCenterText.insertAdjacentHTML('beforeend', '<span class="SentenceFade">However, there was one unsettling thing that Kevin noticed about Rhema. Sometimes, she behaved strangely—her silence lingering too long, her gaze seeming distant. </span>');
    }, 26500);
    setTimeout(() => {
        console.log("Showing fifth line...");
        MainDialogueCenterText.style.opacity = 0;
        MainDialogueCenteredNar.style.opacity = 1;
        MainDialogueCenteredNar.style.display = "flex";
        MainDialogueCenteredNar.innerHTML = '<span class="SentenceFade">He felt that something was wrong</span>';
    }, 42700);   
    setTimeout(() => {
        console.log("Showing 6th line...");
        MainDialogueCenteredNar.innerHTML = '<span class="SentenceFade">something Rhema was hiding and</span>';
    }, 45100);  
    setTimeout(() => {
        console.log("Showing 7th line...");
        MainDialogueCenteredNar.innerHTML = '<span class="SentenceFade">refusing to tell them.</span>';
    }, 47800);  
}

function Line2AStory() {
}