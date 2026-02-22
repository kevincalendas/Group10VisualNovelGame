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
            LoadingScreenDIV.style.display = "none";
        }, 12500);
    }, 5000);
}   

// Story Lines A //
const MainDialogueCenterPanel = document.getElementById("MainDialogueCenterPanel");
const MainDialogueCenterText = document.getElementById("MainDialogueCenterText");
const MainDialogueCenteredNar = document.getElementById("MainDialogueCenteredNar");

const MainDialoguePanel = document.getElementById("MainDialoguePanel");
const DialogueCharName = document.getElementById("DialogueCharName");
const DialogueLines = document.getElementById("DialogueLines");
const DialogueProfileIMG = document.getElementById("DialogueProfileIMG");

const OnclickNextWindow = document.getElementById("OnclickNextWindow");
const OnclickDesc1 = document.getElementById("OnclickDesc1");

let CurrentPreviousLine = 0;
let currentStoryLine = 0;
function Line1AStory() {
    var StartEerieMusicNarrator = document.getElementById('StartMusicNarr');
    currentStoryLine = 1;

    if(currentStoryLine == 2) {
        MainDialogueCenterText.style.display = "none";
        return;
    }
    
    console.log("Showing first line...");

    console.log("Playing the first song: Silent Messenger | Desiderii Marginis")
    StartEerieMusicNarrator.currentTime = 0;
    StartEerieMusicNarrator.volume = 0.1;
    StartEerieMusicNarrator.play();
    MainDialogueCenterPanel.style.display = "flex";
    MainDialogueCenterPanel.style.opacity = 1;
    MainDialogueCenterText.innerHTML = '<span class="SentenceFade">In this story, there are four friends—Kevin, AJ, Lyza, and Rhema.    </span>';
    setTimeout(() => {
        if(currentStoryLine >= 2) {
            console.log("Stopped!");
            MainDialogueCenterText.style.display = "none";
            return;
        }
        console.log("Showing second line...");
        MainDialogueCenterText.insertAdjacentHTML('beforeend', '<span class="SentenceFade">One day, they decided to have a sleepover at Rhema’s house, which was located near a dark and silent forest. </span>');

        OnclickNextWindow.style.display = "block";
        OnclickDesc1.style.opacity = 1;
    }, 8500);
    setTimeout(() => {
        if(currentStoryLine >= 2) {
            console.log("Stopped!");
            MainDialogueCenterText.style.display = "none";
            return;
        }
        console.log("Showing third line...");
        MainDialogueCenterText.insertAdjacentHTML('beforeend', '<span class="SentenceFade">Their friendship was strong; they treated each other like family, bound together like siblings. They were deeply attached to one another. </span>');
    }, 17100);
    setTimeout(() => {
        if(currentStoryLine >= 2) {
            console.log("Stopped!");
            MainDialogueCenterText.style.display = "none";
            return;
        }
        console.log("Showing fourth line...");
        MainDialogueCenterText.insertAdjacentHTML('beforeend', '<span class="SentenceFade">However, there was one unsettling thing that Kevin noticed about Rhema. Sometimes, she behaved strangely—her silence lingering too long, her gaze seeming distant. </span>');
    }, 26500);
    setTimeout(() => {
        if(currentStoryLine >= 2) {
            console.log("Stopped!");
            MainDialogueCenterText.style.display = "none";
            return;
        }
        console.log("Showing fifth line...");
        MainDialogueCenterText.style.opacity = 0;
        MainDialogueCenteredNar.style.opacity = 1;
        MainDialogueCenteredNar.style.display = "flex";
        MainDialogueCenteredNar.innerHTML = '<span class="SentenceFade">He felt that something was wrong</span>';
        
    }, 42700);   
    setTimeout(() => {
        if(currentStoryLine >= 2) {
            console.log("Stopped!");
            MainDialogueCenterText.style.display = "none";
            return;
        }
        console.log("Showing 6th line...");
        MainDialogueCenteredNar.innerHTML = '<span class="SentenceFade">something Rhema was hiding and</span>';
    }, 45100);  
    setTimeout(() => {
        if(currentStoryLine >= 2) {
            console.log("Stopped!");
            MainDialogueCenterText.style.display = "none";
            return;
        }
        console.log("Showing 7th line...");
            MainDialogueCenteredNar.innerHTML = '<span class="SentenceFade">refusing to tell them.</span>';
        }, 47800);  
    setTimeout(() => {
        if(currentStoryLine >= 2) {
            console.log("Stopped!");
            MainDialogueCenterText.style.display = "none";
            return;
        }
        MainDialogueCenterPanel.style.display = "none";
        MainDialogueCenteredNar.style.display = "none";
        MainDialogueCenteredNar.innerHTML = "";
    }, 49000);
}

function Line2A1AStory() {
    var StartEerieMusicNarrator = document.getElementById('StartMusicNarr');
    CurrentPreviousLine = 1;
    currentStoryLine = 2;
    StartEerieMusicNarrator.pause();
    MainDialogueCenterPanel.style.display = "flex";
    MainDialogueCenteredNar.style.display = "flex";
    MainDialogueCenteredNar.style.opacity = 1;
    console.log("Showing Line2AStory");
    MainDialogueCenteredNar.innerHTML = '<span class="SentenceFade">Because of this, he decided to have a sleepover at Rhema’s house to investigate.</span>';
    setTimeout(() => {
        OnclickNextWindow.style.display = "block";
        OnclickDesc1.style.opacity = 1;
    }, 2000);

    if(currentStoryLine > 3) {
            console.log("Stopped!");
            return;
        }
}
function Line2A2AStory() {
    CurrentPreviousLine = 2;
    currentStoryLine = 3;
    MainDialogueCenterPanel.style.display = "flex";
    MainDialogueCenteredNar.style.display = "flex";
    MainDialogueCenteredNar.style.opacity = 1;
    console.log("Showing Line2AStory");
    MainDialogueCenteredNar.innerHTML = '<span class="SentenceFade">After thinking about the plan, he immediately told AJ and Lyza what he had in mind.</span>';
    setTimeout(() => {
        OnclickNextWindow.style.display = "block";
        OnclickDesc1.style.opacity = 1;
    }, 2000);


    //stopping the current event after clicking next line://
    if(currentStoryLine > 4) {
        console.log("Stopped!");
        MainDialogueCenterText.style.display = "none";
        return;
    }
}

function Line2A3AStory() {
    CurrentPreviousLine = 3;
    currentStoryLine = 4;
    MainDialogueCenterPanel.style.display = "flex";
    MainDialogueCenteredNar.style.display = "flex";
    MainDialogueCenteredNar.style.opacity = 1;
    console.log("Showing Line2AStory");
    MainDialogueCenteredNar.innerHTML = '<span class="SentenceFade">Together, they asked Rhema if they could stay over.</span>';
    setTimeout(() => {
        OnclickNextWindow.style.display = "block";
        OnclickDesc1.style.opacity = 1;
    }, 2000);
}

function Line2A4AStory() {
    CurrentPreviousLine = 4;
    currentStoryLine = 5;
    MainDialogueCenterPanel.style.display = "flex";
    MainDialogueCenteredNar.style.display = "flex";
    MainDialogueCenteredNar.style.opacity = 1;
    console.log("Showing Line2AStory");
    MainDialogueCenteredNar.innerHTML = '<span class="SentenceFade">Rhema hesitated, her voice low and uneasy, before quietly asking...</span>';
    setTimeout(() => {
        OnclickNextWindow.style.display = "block";
        OnclickDesc1.style.opacity = 1;
    }, 2000);
}

function Line2A5AStory() {
    CurrentPreviousLine = 5;
    currentStoryLine = 6;
    //TURNING OFF THE SUBTITLE//
    MainDialogueCenterPanel.style.display = "none";
    MainDialogueCenteredNar.style.display = "none";
    MainDialogueCenteredNar.style.opacity = 0;
    MainDialogueCenteredNar.style.transition = "all 0.3s ease-out";

    //showing DialogueMainBot//
    MainDialoguePanel.style.display = "block";
    MainDialoguePanel.style.opacity = "1";
    DialogueProfileIMG.style.backgroundImage = "url('../OtherImages/CharacterProfile/RhemaProfile.png')";
    DialogueCharName.innerHTML = 'Rhema';
    DialogueLines.innerHTML = 'Are you guys sure?';
    DialogueLines.classList.toggle("reveal-animationsss");
    console.log("Showing Line2AStory");
    setTimeout(() => {
        OnclickNextWindow.style.display = "block";
        OnclickDesc1.style.opacity = 1;
    }, 2000);
}

function Line2A6AStory() {
    CurrentPreviousLine = 6;
    currentStoryLine = 7;

    MainDialogueCenterPanel.style.display = "none";
    MainDialogueCenteredNar.style.display = "none";
    MainDialogueCenteredNar.style.opacity = 0;
    MainDialogueCenteredNar.style.transition = "all 0.3s ease-out";
    //Hiding Temp//
    MainDialoguePanel.style.display = "block";
    MainDialoguePanel.style.opacity = "1";
    DialogueProfileIMG.style.backgroundImage = "url('../OtherImages/CharacterProfile/LyzaProfile.png')";
    DialogueProfileIMG.style.opacity = "0";
    DialogueCharName.style.opacity = "0";
    DialogueCharName.innerHTML = 'Kevin, Aj, Lyza';
    DialogueLines.innerHTML = 'Without hesitation, they replied:';
    DialogueLines.classList.toggle("reveal-animationsss");
    console.log("Showing Line2AStory");
    setTimeout(() => {
        OnclickNextWindow.style.display = "block";
        OnclickDesc1.style.opacity = 1;
    }, 2000);
}

function Line2A7AStory(){
    CurrentPreviousLine = 7;
    currentStoryLine = 8;

    //showing DialogueBottSeubBitch//
    MainDialogueCenterPanel.style.display = "none";
    MainDialogueCenteredNar.style.display = "none";
    MainDialogueCenteredNar.style.opacity = 0;
    MainDialogueCenteredNar.style.transition = "all 0.3s ease-out";


    //Hiding Temp//
    MainDialoguePanel.style.display = "block";
    MainDialoguePanel.style.opacity = "1";
    DialogueProfileIMG.style.backgroundImage = "url('../OtherImages/CharacterProfile/LyzaProfile.png')";
    DialogueProfileIMG.style.opacity = "1";
    DialogueCharName.style.opacity = "1";
    DialogueCharName.innerHTML = 'Kevin, Aj, Lyza';
    DialogueLines.innerHTML = 'Yes. We’re really sure.';
    DialogueLines.classList.toggle("reveal-animationsss");
    console.log("Showing Line2AStory");
    setTimeout(() => {
        OnclickNextWindow.style.display = "block";
        OnclickDesc1.style.opacity = 1;
    }, 2000);
}


// LINE 3A SECTION //


function Line3A1AStory() {
    CurrentPreviousLine = 8;
    currentStoryLine = 9;

    //showing DialogueBottSeubBitch//
    MainDialogueCenterPanel.style.display = "block";
    MainDialogueCenteredNar.style.display = "block";
    MainDialogueCenteredNar.style.opacity = 1;
    MainDialogueCenteredNar.style.transition = "all 0.3s ease-out";

    MainDialogueCenteredNar.innerHTML = '<span class="SentenceFade"> And that was when everything began.</span>';


    // Showing another line narrator in a sec.//

    setTimeout(() => {
        MainDialogueCenteredNar.innerHTML = '<span class="SentenceFade"> The night they went to Rhemas house, the air already felt wrong. </span>'
    }, 5000);

    //Hiding Temp//
    MainDialoguePanel.style.display = "none";
    console.log("Showing Line3A1AStory");
    setTimeout(() => {
        OnclickNextWindow.style.display = "block";
        OnclickDesc1.style.opacity = 1;
    }, 10000);
}

function Line3A2AStory() {
    CurrentPreviousLine = 9;
    currentStoryLine = 10;

    //showing DialogueBottSeubBitch//
    MainDialogueCenterPanel.style.display = "block";
    MainDialogueCenteredNar.style.display = "block";
    MainDialogueCenteredNar.style.opacity = 1;
    MainDialogueCenteredNar.style.transition = "all 0.3s ease-out";

    MainDialogueCenteredNar.innerHTML = '<span class="SentenceFade"> It was supposed to be a simple sleepover—blankets on the floor, </span>';

    // Showing another line narrator in a sec.//

    setTimeout(() => {
        MainDialogueCenteredNar.innerHTML = '<span class="SentenceFade">phones glowing dimly, rain tapping against the windows like impatient fingers.</span>';
    }, 5000);

    //Hiding Temp//
    MainDialoguePanel.style.display = "none";
    console.log("Showing Line3A2AStory");
    setTimeout(() => {
        OnclickNextWindow.style.display = "block";
        OnclickDesc1.style.opacity = 1;
    }, 10000);
}

function Line3A3AStory() {
    CurrentPreviousLine = 10;
    currentStoryLine = 11;

    //showing DialogueBottSeubBitch//
    MainDialogueCenterPanel.style.display = "block";
    MainDialogueCenteredNar.style.display = "block";
    MainDialogueCenteredNar.style.opacity = 1;
    MainDialogueCenteredNar.style.transition = "all 0.3s ease-out";

    MainDialogueCenteredNar.innerHTML = '<span class="SentenceFade"> AJ admitted he hadnt been sleeping well.  </span>';

    // Showing another line narrator in a sec.//

    setTimeout(() => {
        MainDialogueCenteredNar.innerHTML = '<span class="SentenceFade">Lyza talked about her fear of being left behind.</span>';
        setTimeout(() => {
            MainDialogueCenteredNar.innerHTML = '<span class="SentenceFade">Rhema said nothing.</span>';
        }, 5000);
    }, 5000);

    //Hiding Temp//
    MainDialoguePanel.style.display = "none";
    console.log("Showing Line3A3AStory");
    setTimeout(() => {
        OnclickNextWindow.style.display = "block";
        OnclickDesc1.style.opacity = 1;
    }, 7000);
}

//4A narrator Lines //

function Line4AStory() {
    CurrentPreviousLine = 11;
    currentStoryLine = 12;

    //showing DialogueBottSeubBitch//
    MainDialogueCenterPanel.style.display = "block";
    MainDialogueCenteredNar.style.display = "block";
    MainDialogueCenteredNar.style.opacity = 1;
    MainDialogueCenteredNar.style.transition = "all 0.3s ease-out";

    MainDialogueCenteredNar.innerHTML = '<span class="SentenceFade"> She sat cross-legged near the window, her face half-hidden by shadow. </span>';

    // Showing another line narrator in a sec.//

    setTimeout(() => {
        MainDialogueCenteredNar.innerHTML = '<span class="SentenceFade">Every time someone asked if she was okay, she only smiled-slow, tight, unreadable.</span>';
    }, 5000);

    //Hiding Temp//
    MainDialoguePanel.style.display = "none";
    console.log("Showing Line3A3AStory");
    setTimeout(() => {
        OnclickNextWindow.style.display = "block";
        OnclickDesc1.style.opacity = 1;
    }, 3000);
}

function Line4A1AStory() {
    CurrentPreviousLine = 12;
    currentStoryLine = 13;

    //showing DialogueBottSeubBitch//
    MainDialogueCenterPanel.style.display = "block";
    MainDialogueCenteredNar.style.display = "block";
    MainDialogueCenteredNar.style.opacity = 1;
    MainDialogueCenteredNar.style.transition = "all 0.3s ease-out";

    MainDialogueCenteredNar.innerHTML = '<span class="SentenceFade"> That silence pressed harder than any words,  </span>';

    // Showing another line narrator in a sec.//

    setTimeout(() => {
        MainDialogueCenteredNar.innerHTML = '<span class="SentenceFade">And soon Kevin, AJ, and Lyza started exchanging uneasy glances. </span>';
    }, 5000);

    //Hiding Temp//
    MainDialoguePanel.style.display = "none";
    console.log("Showing Line4A1AStory");
    setTimeout(() => {
        OnclickNextWindow.style.display = "block";
        OnclickDesc1.style.opacity = 1;
    }, 3000);
}

function Line4A2AStory() {
    CurrentPreviousLine = 13;
    currentStoryLine = 14;

    //showing DialogueBottSeubBitch//
    MainDialogueCenterPanel.style.display = "block";
    MainDialogueCenteredNar.style.display = "block";
    MainDialogueCenteredNar.style.opacity = 1;
    MainDialogueCenteredNar.style.transition = "all 0.3s ease-out";

    MainDialogueCenteredNar.innerHTML = '<span class="SentenceFade"> Whatever Rhema was hiding felt heavier than the dark outside.  </span>';
    //Hiding Temp//
    MainDialoguePanel.style.display = "none";
    console.log("Showing Line4A2AStory");
    setTimeout(() => {
        OnclickNextWindow.style.display = "block";
        OnclickDesc1.style.opacity = 1;
    }, 3000);
}

function Line4A3AStory() {
    CurrentPreviousLine = 14;
    currentStoryLine = 15;

    //showing DialogueBottSeubBitch//
    MainDialogueCenterPanel.style.display = "block";
    MainDialogueCenteredNar.style.display = "block";
    MainDialogueCenteredNar.style.opacity = 1;
    MainDialogueCenteredNar.style.transition = "all 0.3s ease-out";

    MainDialogueCenteredNar.innerHTML = '<span class="SentenceFade"> Trying to break the tension, Kevin laughed nervously and began telling a story.</span>';
    
    //Appearing in seconds //
    setTimeout(() => {
        MainDialogueCenteredNar.innerHTML = '<span class="SentenceFade"> At first, it sounded harmless—an old local legend. A forest near Rhemas house. </span>';
        if (currentStoryLine >= 16 ) {
            MainDialogueCenteredNar.style.display = "none";
            console.log("stopped!");
            return
        }
        setTimeout(() => {
            MainDialogueCenteredNar.innerHTML = '<span class="SentenceFade"> People who went in after sunset. </span>';
            if (currentStoryLine >= 16 ) {
                MainDialogueCenteredNar.style.display = "none";
                console.log("stopped!");
                return
            }
            setTimeout(() => {
                MainDialogueCenteredNar.innerHTML = '<span class="SentenceFade"> Voices that mimicked your friends.  </span>';
                if (currentStoryLine >= 16 ) {
                    MainDialogueCenteredNar.style.display = "none";
                console.log("stopped!");
                return
            }
                setTimeout(() => {
                    MainDialogueCenteredNar.innerHTML = '<span class="SentenceFade"> Footsteps that followed you even when no one was there.</span>';
                    if (currentStoryLine >= 16 ) {
                        MainDialogueCenteredNar.style.display = "none";
                        console.log("stopped!");
                        return
                    }
                }, 3000);
            }, 3000);
        }, 6000);
    }, 5000);
    
    //Hiding Temp//
    MainDialoguePanel.style.display = "none";
    console.log("Showing Line4A3AStory");
    setTimeout(() => {
        OnclickNextWindow.style.display = "block";
        OnclickDesc1.style.opacity = 1;
    }, 3000);
}

function Line4A4AStory(){
    CurrentPreviousLine = 15;
    currentStoryLine = 16;

    //showing DialogueBottSeubBitch//
    MainDialogueCenterPanel.style.display = "none";
    MainDialogueCenteredNar.style.display = "none";
    MainDialogueCenteredNar.style.opacity = 0;
    MainDialogueCenteredNar.style.transition = "all 0.3s ease-out";


    //Hiding Temp//
    MainDialoguePanel.style.display = "block";
    MainDialoguePanel.style.opacity = "1";
    DialogueProfileIMG.style.backgroundImage = "url('../OtherImages/CharacterProfile/LyzaProfile.png')";
    DialogueProfileIMG.style.opacity = "0";
    DialogueCharName.style.opacity = "1";
    DialogueCharName.innerHTML = '';
    DialogueLines.innerHTML = 'As his voice lowered, the lights flickered.';
    DialogueLines.classList.toggle("reveal-animationsss");
    console.log("Showing Line2AStory");
    setTimeout(() => {
        OnclickNextWindow.style.display = "block";
        OnclickDesc1.style.opacity = 1;
    }, 2000);
}   

function Line4A5AStory(){
    CurrentPreviousLine = 16;
    currentStoryLine = 17;

    //showing DialogueBottSeubBitch//
    MainDialogueCenterPanel.style.display = "none";
    MainDialogueCenteredNar.style.display = "none";
    MainDialogueCenteredNar.style.opacity = 0;
    MainDialogueCenteredNar.style.transition = "all 0.3s ease-out";

    
    //Hiding Temp//
    MainDialoguePanel.style.display = "block";
    MainDialoguePanel.style.opacity = "1";
    DialogueProfileIMG.style.backgroundImage = "url('../OtherImages/CharacterProfile/AJProfile.png')";
    DialogueProfileIMG.style.opacity = "1";
    DialogueCharName.style.opacity = "1";
    DialogueCharName.innerHTML = 'AJ';
    DialogueLines.innerHTML = '"Kevin, you should stop," AJ said, his voice tight.';
    DialogueLines.classList.toggle("reveal-animationsss");
    console.log("Showing Line2AStory");
    setTimeout(() => {
        OnclickNextWindow.style.display = "block";
        OnclickDesc1.style.opacity = 1;
    }, 2000);
}   

function Line4A6AStory(){
    CurrentPreviousLine = 17;
    currentStoryLine = 18;

    //showing DialogueBottSeubBitch//
    MainDialogueCenterPanel.style.display = "none";
    MainDialogueCenteredNar.style.display = "none";
    MainDialogueCenteredNar.style.opacity = 0;
    MainDialogueCenteredNar.style.transition = "all 0.3s ease-out";


    //Hiding Temp//
    MainDialoguePanel.style.display = "block";
    MainDialoguePanel.style.opacity = "1";
    DialogueProfileIMG.style.backgroundImage = "url('../OtherImages/CharacterProfile/LyzaProfile.png')";
    DialogueProfileIMG.style.opacity = "1";
    DialogueCharName.style.opacity = "1";
    DialogueCharName.innerHTML = 'Lyza';
    DialogueLines.innerHTML = '""Yeah," Lyza added.';
    setTimeout(() => {
        DialogueLines.innerHTML = '"This isnt funny.';
        DialogueLines.classList.toggle("reveal-animationsss");
        if (currentStoryLine >= 19 ) {
            MainDialogueCenteredNar.style.display = "none";
            console.log("stopped!");
            return;
        }
    }, 3000);
    DialogueLines.classList.toggle("reveal-animationsss");
    console.log("Showing Line2AStory");
    setTimeout(() => {
        OnclickNextWindow.style.display = "block";
        OnclickDesc1.style.opacity = 1;
    }, 2000);
}   

function Line4A7AStory(){
    CurrentPreviousLine = 18;
    currentStoryLine = 19;

    //showing DialogueBottSeubBitch//
    MainDialogueCenterPanel.style.display = "none";
    MainDialogueCenteredNar.style.display = "none";
    MainDialogueCenteredNar.style.opacity = 0;
    MainDialogueCenteredNar.style.transition = "all 0.3s ease-out";


    //Hiding Temp//
    MainDialoguePanel.style.display = "block";
    MainDialoguePanel.style.opacity = "1";
    DialogueProfileIMG.style.backgroundImage = "url('../OtherImages/CharacterProfile/LyzaProfile.png')";
    DialogueProfileIMG.style.opacity = "1";
    DialogueCharName.style.opacity = "1";
    DialogueCharName.innerHTML = 'Kevin';
    DialogueLines.innerHTML = '"Kevin froze. "Alright. IIl stop."';
    DialogueLines.classList.toggle("reveal-animationsss");
    console.log("Showing Line2AStory");
    setTimeout(() => {
        OnclickNextWindow.style.display = "block";
        OnclickDesc1.style.opacity = 1;
    }, 2000);
}   

function Line4A8AStory(){
    CurrentPreviousLine = 19;
    currentStoryLine = 20;

    //showing DialogueBottSeubBitch//
    MainDialogueCenterPanel.style.display = "block";
    MainDialogueCenteredNar.style.display = "block";
    MainDialogueCenteredNar.style.opacity = 1;
    MainDialogueCenteredNar.style.transition = "all 0.3s ease-out";

    MainDialogueCenteredNar.innerHTML = '<span class="SentenceFade">Silence fell again.</span>';

    setTimeout(() => {
        MainDialogueCenteredNar.innerHTML = '<span class="SentenceFade">Then Rhema spoke.</span>';
        if (currentStoryLine >= 21 ) {
                MainDialogueCenteredNar.style.display = "none";
                console.log("stopped!");
                return;
            }
        setTimeout(() => {
            MainDialogueCenteredNar.innerHTML = '<span class="SentenceFade">Her voice was calm. Too calm.</span>';
            if (currentStoryLine >= 21 ) {
                MainDialogueCenteredNar.style.display = "none";
                console.log("stopped!");
                return;
            }
        }, 3000);
    }, 3000);
    //Hiding Temp//
    MainDialoguePanel.style.display = "none";
    setTimeout(() => {
        OnclickNextWindow.style.display = "block";
        OnclickDesc1.style.opacity = 1;
    }, 2000);
}   



// FOR BUTTON FUNCTION //

OnclickNextWindow.addEventListener('click', () => {
     if(currentStoryLine === 1) {
        Voice1ANarrator.pause();
        console.log("Going Next part: Line2A1AStory");
        OnclickDesc1.classList.remove('LoopUPandDOWNAnims');
        OnclickDesc1.classList.toggle('addedEnteredNextLine');
        MainDialogueCenterText.style.display = "none";
        MainDialogueCenteredNar.style.display = "none";
        setTimeout(() => {
            OnclickDesc1.classList.remove('addedEnteredNextLine');
            OnclickDesc1.classList.toggle('LoopUPandDOWNAnims');
            OnclickNextWindow.style.display = "none";
            Line2A1AStory()
        }, 2000);
    } else if (currentStoryLine === 2) {
        console.log("Going Next part: Line2A2AStory");
        OnclickDesc1.classList.toggle('addedEnteredNextLine');
        OnclickDesc1.classList.toggle('addedEnteredNextLine');
        MainDialogueCenterText.style.display = "none";
        MainDialogueCenteredNar.style.display = "none";
        setTimeout(() => {
            OnclickDesc1.classList.remove('addedEnteredNextLine');
            OnclickDesc1.classList.toggle('LoopUPandDOWNAnims');
            OnclickNextWindow.style.display = "none";
            Line2A2AStory()
        }, 2000);
    } else if (currentStoryLine === 3) {
        console.log("Going Next part: Line2A3AStory");
        OnclickDesc1.classList.toggle('addedEnteredNextLine');
        OnclickDesc1.classList.toggle('addedEnteredNextLine');
        MainDialogueCenterText.style.display = "none";
        MainDialogueCenteredNar.style.display = "none";
        setTimeout(() => {
            OnclickDesc1.classList.remove('addedEnteredNextLine');
            OnclickDesc1.classList.toggle('LoopUPandDOWNAnims');
            OnclickNextWindow.style.display = "none";
            Line2A3AStory()
        }, 2000);
    } else if (currentStoryLine === 4) {
        console.log("Going Next part: Line2A4AStory");
        OnclickDesc1.classList.toggle('addedEnteredNextLine');
        OnclickDesc1.classList.toggle('addedEnteredNextLine');
        MainDialogueCenterText.style.display = "none";
        MainDialogueCenteredNar.style.display = "none";
        setTimeout(() => {
            OnclickDesc1.classList.remove('addedEnteredNextLine');
            OnclickDesc1.classList.toggle('LoopUPandDOWNAnims');
            OnclickNextWindow.style.display = "none";
            Line2A4AStory()
        }, 2000);
    } else if (currentStoryLine === 5) {
        console.log("Going Next part: Line2A5AStory");
        OnclickDesc1.classList.toggle('addedEnteredNextLine');
        OnclickDesc1.classList.toggle('addedEnteredNextLine');
        MainDialogueCenterText.style.display = "none";
        MainDialogueCenteredNar.style.display = "none";
        setTimeout(() => {
            OnclickDesc1.classList.remove('addedEnteredNextLine');
            OnclickDesc1.classList.toggle('LoopUPandDOWNAnims');
            OnclickNextWindow.style.display = "none";
            Line2A5AStory()
        }, 2000);
    } else if (currentStoryLine === 6) {
        console.log("Going Next part: Line2A6AStory");
        OnclickDesc1.classList.toggle('addedEnteredNextLine');
        OnclickDesc1.classList.toggle('addedEnteredNextLine');
        MainDialoguePanel.style.display = "none";
        MainDialogueCenterText.style.display = "none";
        MainDialogueCenteredNar.style.display = "none";
        setTimeout(() => {
            OnclickDesc1.classList.remove('addedEnteredNextLine');
            OnclickDesc1.classList.toggle('LoopUPandDOWNAnims');
            OnclickNextWindow.style.display = "none";
            Line2A6AStory()
        }, 2000);
    } else if (currentStoryLine === 7) {
        console.log("Going Next part: Line2A7AStory");
        OnclickDesc1.classList.toggle('addedEnteredNextLine');
        OnclickDesc1.classList.toggle('addedEnteredNextLine');
        MainDialoguePanel.style.display = "none";
        MainDialogueCenterText.style.display = "none";
        MainDialogueCenteredNar.style.display = "none";
        setTimeout(() => {
            OnclickDesc1.classList.remove('addedEnteredNextLine');
            OnclickDesc1.classList.toggle('LoopUPandDOWNAnims');
            MainDialoguePanel.style.display = "block";
            OnclickNextWindow.style.display = "none";
            Line2A7AStory()
        }, 2000);

        // Next Line 3A //
    } else if (currentStoryLine === 8) {
        console.log("Going Next part: Line3A1AStory");
        OnclickDesc1.classList.toggle('addedEnteredNextLine');
        OnclickDesc1.classList.toggle('addedEnteredNextLine');
        MainDialoguePanel.style.display = "none";
        MainDialogueCenterText.style.display = "none";
        MainDialogueCenteredNar.style.display = "none";
        setTimeout(() => {
            OnclickDesc1.classList.remove('addedEnteredNextLine');
            OnclickDesc1.classList.toggle('LoopUPandDOWNAnims');
            MainDialoguePanel.style.display = "block";
            OnclickNextWindow.style.display = "none";
            Line3A1AStory()
        }, 2000);
    } else if (currentStoryLine === 9) {
        console.log("Going Next part: Line3A2AStory");
        OnclickDesc1.classList.toggle('addedEnteredNextLine');
        OnclickDesc1.classList.toggle('addedEnteredNextLine');
        MainDialoguePanel.style.display = "none";
        MainDialogueCenterText.style.display = "none";
        MainDialogueCenteredNar.style.display = "none";
        setTimeout(() => {
            OnclickDesc1.classList.remove('addedEnteredNextLine');
            OnclickDesc1.classList.toggle('LoopUPandDOWNAnims');
            MainDialoguePanel.style.display = "block";
            OnclickNextWindow.style.display = "none";
            Line3A2AStory()
        }, 2000);
    }   else if (currentStoryLine === 10) {
        console.log("Going Next part: Line3A3AStory");
        OnclickDesc1.classList.toggle('addedEnteredNextLine');
        OnclickDesc1.classList.toggle('addedEnteredNextLine');
        MainDialoguePanel.style.display = "none";
        MainDialogueCenterText.style.display = "none";
        MainDialogueCenteredNar.style.display = "none";
        setTimeout(() => {
            OnclickDesc1.classList.remove('addedEnteredNextLine');
            OnclickDesc1.classList.toggle('LoopUPandDOWNAnims');
            MainDialoguePanel.style.display = "block";
            OnclickNextWindow.style.display = "none";
            Line3A3AStory()
        }, 2000);
    }   else if (currentStoryLine === 11) {
        console.log("Going Next part: Line4AStory");
        OnclickDesc1.classList.toggle('addedEnteredNextLine');
        OnclickDesc1.classList.toggle('addedEnteredNextLine');
        MainDialoguePanel.style.display = "none";
        MainDialogueCenterText.style.display = "none";
        MainDialogueCenteredNar.style.display = "none";
        setTimeout(() => {
            OnclickDesc1.classList.remove('addedEnteredNextLine');
            OnclickDesc1.classList.toggle('LoopUPandDOWNAnims');
            MainDialoguePanel.style.display = "block";
            OnclickNextWindow.style.display = "none";
            Line4AStory()
        }, 2000);
    }   else if (currentStoryLine === 12) {
        console.log("Going Next part: Line4A1AStory");
        OnclickDesc1.classList.toggle('addedEnteredNextLine');
        OnclickDesc1.classList.toggle('addedEnteredNextLine');
        MainDialoguePanel.style.display = "none";
        MainDialogueCenterText.style.display = "none";
        MainDialogueCenteredNar.style.display = "none";
        setTimeout(() => {
            OnclickDesc1.classList.remove('addedEnteredNextLine');
            OnclickDesc1.classList.toggle('LoopUPandDOWNAnims');
            MainDialoguePanel.style.display = "block";
            OnclickNextWindow.style.display = "none";
            Line4A1AStory()
        }, 2000);
    }   else if (currentStoryLine === 13) {
        console.log("Going Next part: Line4A2AStory");
        OnclickDesc1.classList.toggle('addedEnteredNextLine');
        OnclickDesc1.classList.toggle('addedEnteredNextLine');
        MainDialoguePanel.style.display = "none";
        MainDialogueCenterText.style.display = "none";
        MainDialogueCenteredNar.style.display = "none";
        setTimeout(() => {
            OnclickDesc1.classList.remove('addedEnteredNextLine');
            OnclickDesc1.classList.toggle('LoopUPandDOWNAnims');
            MainDialoguePanel.style.display = "block";
            OnclickNextWindow.style.display = "none";
            Line4A2AStory()
        }, 2000);
    }   else if (currentStoryLine === 14) {
        console.log("Going Next part: Line4A3AStory");
        OnclickDesc1.classList.toggle('addedEnteredNextLine');
        OnclickDesc1.classList.toggle('addedEnteredNextLine');
        MainDialoguePanel.style.display = "none";
        MainDialogueCenterText.style.display = "none";
        MainDialogueCenteredNar.style.display = "none";
        setTimeout(() => {
            OnclickDesc1.classList.remove('addedEnteredNextLine');
            OnclickDesc1.classList.toggle('LoopUPandDOWNAnims');
            MainDialoguePanel.style.display = "block";
            OnclickNextWindow.style.display = "none";
            Line4A3AStory()
        }, 2000);
    }   else if (currentStoryLine === 15) {
        console.log("Going Next part: Line4A4AStory");
        OnclickDesc1.classList.toggle('addedEnteredNextLine');
        OnclickDesc1.classList.toggle('addedEnteredNextLine');
        MainDialoguePanel.style.display = "none";
        MainDialogueCenterText.style.display = "none";
        MainDialogueCenteredNar.style.display = "none";
        setTimeout(() => {
            OnclickDesc1.classList.remove('addedEnteredNextLine');
            OnclickDesc1.classList.toggle('LoopUPandDOWNAnims');
            MainDialoguePanel.style.display = "block";
            OnclickNextWindow.style.display = "none";
            Line4A4AStory()
        }, 2000);
    }   else if (currentStoryLine === 16) {
        console.log("Going Next part: Line4A5AStory");
        OnclickDesc1.classList.toggle('addedEnteredNextLine');
        OnclickDesc1.classList.toggle('addedEnteredNextLine');
        MainDialoguePanel.style.display = "none";
        MainDialogueCenterText.style.display = "none";
        MainDialogueCenteredNar.style.display = "none";
        setTimeout(() => {
            OnclickDesc1.classList.remove('addedEnteredNextLine');
            OnclickDesc1.classList.toggle('LoopUPandDOWNAnims');
            MainDialoguePanel.style.display = "block";
            OnclickNextWindow.style.display = "none";
            Line4A5AStory()
        }, 2000);
    }   else if (currentStoryLine === 17) {
            console.log("Going Next part: Line4A6AStory");
            OnclickDesc1.classList.toggle('addedEnteredNextLine');
            OnclickDesc1.classList.toggle('addedEnteredNextLine');
            MainDialoguePanel.style.display = "none";
            MainDialogueCenterText.style.display = "none";
            MainDialogueCenteredNar.style.display = "none";
            setTimeout(() => {
                OnclickDesc1.classList.remove('addedEnteredNextLine');
                OnclickDesc1.classList.toggle('LoopUPandDOWNAnims');
                MainDialoguePanel.style.display = "block";
                OnclickNextWindow.style.display = "none";
                Line4A6AStory()
            }, 2000);
    }   else if (currentStoryLine === 18) {
            console.log("Going Next part: Line4A7AStory");
            OnclickDesc1.classList.toggle('addedEnteredNextLine');
            OnclickDesc1.classList.toggle('addedEnteredNextLine');
            MainDialoguePanel.style.display = "none";
            MainDialogueCenterText.style.display = "none";
            MainDialogueCenteredNar.style.display = "none";
            setTimeout(() => {
                OnclickDesc1.classList.remove('addedEnteredNextLine');
                OnclickDesc1.classList.toggle('LoopUPandDOWNAnims');
                MainDialoguePanel.style.display = "block";
                OnclickNextWindow.style.display = "none";
                Line4A7AStory()
            }, 2000);
    }   else if (currentStoryLine === 19) {
            console.log("Going Next part: Line4A8AStory");
            OnclickDesc1.classList.toggle('addedEnteredNextLine');
            OnclickDesc1.classList.toggle('addedEnteredNextLine');
            MainDialoguePanel.style.display = "none";
            MainDialogueCenterText.style.display = "none";
            MainDialogueCenteredNar.style.display = "none";
            setTimeout(() => {
                OnclickDesc1.classList.remove('addedEnteredNextLine');
                OnclickDesc1.classList.toggle('LoopUPandDOWNAnims');
                MainDialoguePanel.style.display = "block";
                OnclickNextWindow.style.display = "none";
                Line4A8AStory()
            }, 2000);
    } 
});
