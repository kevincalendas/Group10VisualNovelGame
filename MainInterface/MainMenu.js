const overlaything = document.getElementById('ActivateGame');
const overlaytextz = document.getElementById('ActivateGameText');
const MainIntro1H = document.getElementById('MainIntro1H');
const MainIntroPanel = document.getElementById('MainIntroPanel');
const MainIntroPanel1 = document.getElementById('MainIntroPanel1');
const MainMenuTitle = document.getElementById('MainMenuTitle');
const MainMenuButtons = document.getElementById('MainMenuButtons');
const LoadingText = document.getElementById('LoadingText');
const MainMenuVideo = document.querySelector('#MainMenuVideo');
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

    overlaytextz.style.animation = 'Fadeout 0.5s ease-out 1.5s forwards';

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
                MainMenuVideo.play();
            }, 4000);

            // ScaleDownAnimation // scale down Animation for the Main Menu //
            MainMenuTitle.style.opacity = 0;
            MainMenuButtons.style.opacity = 0;
            MainIntroPanel.style.animation = 'Fadeout 0.5s ease 4s both, ScaleDownAnimation 1s ease 4s both, MainTextShake3 0.5s ease 2.5s 1 both';
            MainIntroPanel1.style.animation = 'Fadein 1s ease 4.5s forwards, ScaleDownAnimation1 2s ease 4.2s forwards';
            setTimeout(() => {
                MainMenuTitle.style.animation = 'Fadein 1s ease 0.5s forwards, FadeInScaleAnimationIntroright 1s ease 0.9s both';
                MainMenuButtons.style.animation = 'Fadein 1s ease 0.5s forwards, FadeInScaleAnimationIntroleft 1s ease 0.3s both';
            }, 4500);
            
        }, 0);  
    }, 3000);
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
                    ShowLoadingScreen1A();
                }, 1000);
            }, 5000);
        }, 1000);
    }, 500);
}

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
        LoadingText.classList.remove('Fadein');
        setTimeout(() => {
            LoadingScreenDIV.style.display = "none";
            LoadingText.style.display = "block";
            LoadingText.style.zIndex = "100";
            setTimeout(() => {
                LoadingText.style.animation = 'Fadein 1s ease 0.5s forwards';
                LoadingText.innerHTML = "Loading Story...";

                setTimeout(() => {
                    LoadingText.classList.remove('Fadein');
                    setTimeout(() => {
                        LoadingText.style.animation = 'Fadeout 1s ease 0.5s forwards';
                        DisplayStoryLine();
                    }, 100);
                }, 4000);
            }, 1000);
        }, 12500);
    }, 5000);
};  




// STORY LINES //

let StoryLineNumberSelected = 0;
let StoryChapterSelected = 1;

const StoryLines = [

    // CHAPTER 1 LINES //

    {
        StoryLineNumber: 0,
        StoryChapter: 1,
        StoryCharacter: "Narrator",
        StoryCharacterImg: "../StoryInterface/StoryIcons/AJProfile.png",
        StoryLineText: "Kevin notices Rhema has been acting strange — too silent, too distant. He suspects she's hiding something. He tells AJ and Lyza his plan: use a sleepover to investigate.",
    },

    {
        StoryLineNumber: 1,
        StoryChapter: 1,
        StoryCharacter: "Kevin",
        StoryCharacterImg: "../StoryInterface/StoryIcons/KevinProfile.png",
        StoryLineText: "Guys, I think something's wrong with Rhema. She's been acting really weird. What if we ask her if we can sleep over at her house and see what's going on?",
    },

    // CHAPTER 1 CHOICES //

    {
        // Story Choice A1 LINE //
        StoryLineNumber: 2,
        StoryChapter: 1,
        StoryCharacter: "AJ",
        StoryCharacterImg: "../StoryInterface/StoryIcons/AJProfile.png",
        StoryLineText: "Okay, I'm in.",
    },

    {   
        // Story Choice A2 LINE //
        StoryLineNumber: 3,
        StoryChapter: 1,
        StoryCharacter: "Lyza",
        StoryCharacterImg: "../StoryInterface/StoryIcons/LyzaProfile.png",
        StoryLineText: "Yeah, let's do it. We're her friends anyway.",
    },

    {
        // Story Choice B1 LINE //
        StoryLineNumber: 4,
        StoryChapter: 1,
        StoryCharacter: "Kevin",
        StoryCharacterImg: "../StoryInterface/StoryIcons/KevinProfile.png",
        StoryLineText: "She won't tell us the truth. We have to see it ourselves.",
    },

    {
        // Story Choice B2 LINE //
        StoryLineNumber: 5,
        StoryChapter: 1,
        StoryCharacter: "AJ",
        StoryCharacterImg: "../StoryInterface/StoryIcons/AJProfile.png",
        StoryLineText: "...Fine. Let's just do the sleepover then.",
    },

    // NEXT CHAPTER 1 LINES WILL BE ADDED HERE //

    {
        StoryLineNumber: 6,
        StoryChapter: 1,
        StoryCharacter: "Narrator",
        StoryCharacterImg: "../StoryInterface/StoryIcons/NarratorProfile.png",
        StoryLineText: "They asked Rhema if they could sleep over. She hesitated.",
    },

    {
        StoryLineNumber: 7,
        StoryChapter: 1,
        StoryCharacter: "Rhema",
        StoryCharacterImg: "../StoryInterface/StoryIcons/RhemaProfile.png",
        StoryLineText: "(voice low, uneasy) Are you guys sure?",
    },

    {
        StoryLineNumber: 8,
        StoryChapter: 1,
        StoryCharacter: "Kevin, AJ, Lyza",
        StoryCharacterImg: "../StoryInterface/StoryIcons/KevinProfile.png",
        StoryLineText: "Yes. We're really sure.",
    },

    {
        StoryLineNumber: 9,
        StoryChapter: 1,
        StoryCharacter: "Narrator",
        StoryCharacterImg: "../StoryInterface/StoryIcons/NarratorProfile.png",
        StoryLineText: "And that was when everything began.",
    },

    // CHAPTER 2 LINES //

    {
        StoryLineNumber: 10,
        StoryChapter: 2,
        StoryCharacter: "Narrator",
        StoryCharacterImg: "../StoryInterface/StoryIcons/NarratorProfile.png",
        StoryLineText: "The night dragged on. Kevin told an old local legend — a forest nearby, voices that mimicked your friends, footsteps that followed you even when no one was there. The lights flickered.",
    },

    {
        StoryLineNumber: 11,
        StoryChapter: 2,
        StoryCharacter: "AJ",
        StoryCharacterImg: "../StoryInterface/StoryIcons/AJProfile.png",
        StoryLineText: "Kevin, you should stop.",
    },

    {
        StoryLineNumber: 12,
        StoryChapter: 2,
        StoryCharacter: "Lyza",
        StoryCharacterImg: "../StoryInterface/StoryIcons/LyzaProfile.png",
        StoryLineText: "Yeah. This isn't funny.",
    },

    {
        StoryLineNumber: 13,
        StoryChapter: 2,
        StoryCharacter: "Kevin",
        StoryCharacterImg: "../StoryInterface/StoryIcons/KevinProfile.png",
        StoryLineText: "Alright. I'll stop.",
    },

    {
        StoryLineNumber: 14,
        StoryChapter: 2,
        StoryCharacter: "Narrator",
        StoryCharacterImg: "../StoryInterface/StoryIcons/NarratorProfile.png",
        StoryLineText: "Silence fell again. Then Rhema spoke. Her voice was calm. Too calm.",
    },

    {
        StoryLineNumber: 15,
        StoryChapter: 2,
        StoryCharacter: "Rhema",
        StoryCharacterImg: "../StoryInterface/StoryIcons/RhemaProfile.png",
        StoryLineText: "What if we go to the forest? You guys want that, right?",
    },

    // Story Choice A1 LINE //

    {
        StoryLineNumber: 16,
        StoryChapter: 2,
        StoryCharacter: "Kevin",
        StoryCharacterImg: "../StoryInterface/StoryIcons/KevinProfile.png",
        StoryLineText: "Girl, we're just going there. Let's go!",
    },

    {
        StoryLineNumber: 17,
        StoryChapter: 2,
        StoryCharacter: "Lyza",
        StoryCharacterImg: "../StoryInterface/StoryIcons/LyzaProfile.png",
        StoryLineText: "Kevin, I don't know about this...",
    },

    {
        StoryLineNumber: 18,
        StoryChapter: 2,
        StoryCharacter: "AJ",
        StoryCharacterImg: "../StoryInterface/StoryIcons/AJProfile.png",
        StoryLineText: "...I really don't want to.",
    },

    // Story Choice B1 LINE //

    {
        StoryLineNumber: 19,
        StoryChapter: 2,
        StoryCharacter: "Lyza",
        StoryCharacterImg: "../StoryInterface/StoryIcons/LyzaProfile.png",
        StoryLineText: "Maybe tomorrow morning instead? Not now.",
    },

    {
        StoryLineNumber: 20,
        StoryChapter: 2,
        StoryCharacter: "AJ",
        StoryCharacterImg: "../StoryInterface/StoryIcons/AJProfile.png",
        StoryLineText: "Yeah, let's not.",
    },

    {
        StoryLineNumber: 21,
        StoryChapter: 2,
        StoryCharacter: "Kevin",
        StoryCharacterImg: "../StoryInterface/StoryIcons/KevinProfile.png",
        StoryLineText: "Come on. Nothing's gonna happen to us.",
    },

    // CONTINUATION OF CHAPTER 2 LINES //

    {
        StoryLineNumber: 22,
        StoryChapter: 2,
        StoryCharacter: "Narrator",
        StoryCharacterImg: "../StoryInterface/StoryIcons/NarratorProfile.png",
        StoryLineText: "Before anyone could argue, Rhema was already at the door, slipping on her shoes. AJ and Lyza followed — by no choice.",
    },

    {
        StoryLineNumber: 23,
        StoryChapter: 2,
        StoryCharacter: "Narrator",
        StoryCharacterImg: "../StoryInterface/StoryIcons/NarratorProfile.png",
        StoryLineText: "The forest swallowed them the moment they stepped inside. The trees were too close together. The path Rhema promised seemed to disappear the deeper they went.",
    },

    {
        StoryLineNumber: 24,
        StoryChapter: 2,
        StoryCharacter: "Lyza",
        StoryCharacterImg: "../StoryInterface/StoryIcons/LyzaProfile.png",
        StoryLineText: "*(whispering)* Rhema... are you sure this is the way?",
    },

    {
        StoryLineNumber: 25,
        StoryChapter: 2,
        StoryCharacter: "Rhema",
        StoryCharacterImg: "../StoryInterface/StoryIcons/RhemaProfile.png",
        StoryLineText: "*(pausing)* Yes. As far as I remember... this is the way.",
    },

    {
        StoryLineNumber: 25,
        StoryChapter: 2,
        StoryCharacter: "Kevin",
        StoryCharacterImg: "../StoryInterface/StoryIcons/KevinProfile.png",
        StoryLineText: "You hear that?",
    },

    {
        StoryLineNumber: 26,
        StoryChapter: 2,
        StoryCharacter: "Narrator",
        StoryCharacterImg: "../StoryInterface/StoryIcons/NarratorProfile.png",
        StoryLineText: "Footsteps echoed behind them. They stopped walking. The footsteps didn't.",
    },

    {
        StoryLineNumber: 27,
        StoryChapter: 2,
        StoryCharacter: "Lyza",
        StoryCharacterImg: "../StoryInterface/StoryIcons/LyzaProfile.png",
        StoryLineText: "*— screams —*",
    },

    {
        StoryLineNumber: 28,
        StoryChapter: 2,
        StoryCharacter: "AJ",
        StoryCharacterImg: "../StoryInterface/StoryIcons/AJProfile.png",
        StoryLineText: "Guys. Look at this.",
    },

    {
        StoryLineNumber: 29,
        StoryChapter: 2,
        StoryCharacter: "Narrator",
        StoryCharacterImg: "../StoryInterface/StoryIcons/NarratorProfile.png",
        StoryLineText: "Between the trees stood a house. Old. Crooked. Half-swallowed by shadows. Rhema stared at it without speaking — as if she recognized it. Or worse, as if it was staring back.",
    },

    // END OF CHAPTER 2 LINES. BEETCH//

    // CHAPTER 3 LINES RATS //
]       

let StoryChoiceLetterSelected = "none";

const StoryChoices = [
    {
        StoryChoiceNumber: 0,
        StoryChoiceA: "Yeah, let's do it. We're her friends anyway.",
        StoryChoiceB: "Maybe we should just ask her directly if she's okay?",
        StoryChoiceSelectedVar: "0",
    },

    // CHAPTER 2 CHOICES //

    {
        StoryChoiceNumber: 1,
        StoryChoiceA: "Yes! Let's go. Nothing's gonna happen.",
        StoryChoiceB: "Let's just stay here. It's dangerous.",
        StoryChoiceSelectedVar: "1",
    },

    {
        StoryChoiceNumber: 2,
        StoryChoiceA: "She won't tell us the truth. We have to see it ourselves.",
        StoryChoiceB: "...Fine. Let's just do the sleepover then.",
        StoryChoiceSelectedVar: "2",
    },

]

const NextStoryLineButton = document.getElementById("NextStoryLineButton");


function StoryLineNextButton() {
    setTimeout(() => {
        NextStoryLineButton.style.display = "block";
        NextStoryLineButton.classList.remove('Animation-Clicked-FadeOut');
        NextStoryLineButton.classList.add('Animation-Move-Left');
    }, 1500);
}

const MainDialoguePanel = document.getElementById("MainDialoguePanel");

function DisplayStoryLine() {
    const currentStoryLinesMain = StoryLines[StoryLineNumberSelected];

    console.log("Current Story Line:", currentStoryLinesMain);

    const MainDialoguePanel = document.getElementById("MainDialoguePanel");
    const DialogueCharName = document.getElementById("DialogueCharName");
    const DialogueLines = document.getElementById("DialogueLines");
    const DialogueProfileIMG = document.getElementById("DialogueProfileIMG");


    StoryLineNextButton();  

    MainDialoguePanel.style.display = "block";
    DialogueCharName.innerHTML = currentStoryLinesMain.StoryCharacter;
    DialogueLines.innerHTML = currentStoryLinesMain.StoryLineText;
    DialogueProfileIMG.src = currentStoryLinesMain.StoryCharacterImg;
    HideStoryCharacterImageNarr();
}

function HideStoryCharacterImageNarr() {
    const MainDialoguePanel = document.getElementById("MainDialoguePanel");
    const DialogueCharName = document.getElementById("DialogueCharName");
    const DialogueLines = document.getElementById("DialogueLines");
    const DialogueProfileIMG = document.getElementById("DialogueProfileIMG");

    if (DialogueCharName.innerHTML === "Narrator") {
        DialogueProfileIMG.style.display = "none";
    } else {
        DialogueProfileIMG.style.display = "block";
    }
}

// FOR STORY CHANGES SYSTEM. ✌💋🌹😜 VURICAT //

const StoryLineChoicesPanel = document.getElementById("Story-Line-Choices-Panel");
const StoryLineChoice1 = document.querySelector(".StoryLineChoice1");
const StoryLineChoice2 = document.querySelector(".StoryLineChoice2");

let ChoiceFinalMade = "none";

NextStoryLineButton.addEventListener('click', () => {
    NextStoryLineButton.classList.remove('Animation-Move-Left');
    void NextStoryLineButton.offsetWidth;
    NextStoryLineButton.classList.add('Animation-Clicked-FadeOut');
    StoryLineNumberSelected++;

    DisplayStoryLine();
    MainDialoguePanel.classList.remove('Fadein1sec');
    void MainDialoguePanel.offsetWidth;
    MainDialoguePanel.classList.add('Fadein1sec');

    setTimeout(() => {
        // HIDE button (until StoryLineNextButton shows it again)
        NextStoryLineButton.style.display = "none";

        // Logic for Choices vs. Dialogue
        if (StoryLineNumberSelected == 1) {
            setupChoice(0);
        } else if (StoryLineNumberSelected == 15) {
            setupChoice(1);
        } else {
            // ONLY call this if it's NOT a choice line
            DisplayStoryLine();
        }
    }, 1500);
})

function setupChoice(index) {
    StoryChoiceLetterSelected = StoryChoices[index].StoryChoiceSelectedVar;
    
    StoryLineChoicesPanel.style.display = "block";
    
    // Reset and trigger Choice Panel animations
    StoryLineChoicesPanel.classList.remove('Fadein1sec', 'Fadeout2A');
    void StoryLineChoicesPanel.offsetWidth;
    StoryLineChoicesPanel.classList.add('Fadein1sec');

    // Choice 1
    StoryLineChoice1.classList.remove('Up-to-down');
    void StoryLineChoice1.offsetWidth;
    StoryLineChoice1.classList.add('Up-to-down');
    StoryLineChoice1.innerHTML = StoryChoices[index].StoryChoiceA;

    // Choice 2
    StoryLineChoice2.classList.remove('Down-to-Up');
    void StoryLineChoice2.offsetWidth;
    StoryLineChoice2.classList.add('Down-to-Up');
    StoryLineChoice2.innerHTML = StoryChoices[index].StoryChoiceB;
}

StoryLineChoice1.addEventListener('click', () => {
    ChoiceFinalMade = StoryChoiceLetterSelected + "A";
    console.log("Choice Final Made:", ChoiceFinalMade);
    if (ChoiceFinalMade == "0A") {
        console.log("Choice 0A was selected.");
        StoryLineChoicesPanel.classList.remove('Fadeout2A');
        void StoryLineChoicesPanel.offsetWidth;
        StoryLineChoicesPanel.classList.add('Fadeout2A');
        setTimeout(() => {
            StoryLineChoicesPanel.style.display = "none";
        }, 1200);
        StoryLineNumberSelected = 2;
        DisplayStoryLine();
    } else if (ChoiceFinalMade == "1A") {
        console.log("Choice 1A was selected.");
        StoryLineChoicesPanel.classList.remove('Fadeout2A');
        void StoryLineChoicesPanel.offsetWidth;
        StoryLineChoicesPanel.classList.add('Fadeout2A');
        setTimeout(() => {
            StoryLineChoicesPanel.style.display = "none";
        }, 1200);
        StoryLineNumberSelected = 15;
        DisplayStoryLine();
    }
})


StoryLineChoice2.addEventListener('click', () => {
    ChoiceFinalMade = StoryChoiceLetterSelected + "B";
    console.log("Choice Final Made:", ChoiceFinalMade);
    if (ChoiceFinalMade == "0B") {
        console.log("Choice 0B was selected.");
        StoryLineChoicesPanel.classList.remove('Fadeout2A');
        void StoryLineChoicesPanel.offsetWidth;
        StoryLineChoicesPanel.classList.add('Fadeout2A');
        setTimeout(() => {
            StoryLineChoicesPanel.style.display = "none";
        }, 1200);
        StoryLineNumberSelected = 4;
        DisplayStoryLine();
    } else if (ChoiceFinalMade == "1B") {
        console.log("Choice 1B was selected.");
        StoryLineChoicesPanel.classList.remove('Fadeout2A');
        void StoryLineChoicesPanel.offsetWidth;
        StoryLineChoicesPanel.classList.add('Fadeout2A');
        setTimeout(() => {
            StoryLineChoicesPanel.style.display = "none";
        }, 1200);
        StoryLineNumberSelected = 19;
        DisplayStoryLine();
    }
})

