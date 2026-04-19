const overlaything = document.getElementById('ActivateGame');
const overlaytextz = document.getElementById('ActivateGameText');
const MainIntro1H = document.getElementById('MainIntro1H');
const MainIntroPanel = document.getElementById('MainIntroPanel');
const MainMenuTitle = document.getElementById('MainMenuTitle');
const MainMenuButtons = document.getElementById('MainMenuButtons');
const LoadingText = document.getElementById('LoadingText');
const MainMenuVideo = document.querySelector('#MainMenuVideo');
var MainMenuMusicBackground = document.getElementById("MainMenuMusicBackground");
var MainMenuSFX = document.getElementById("MainMenuSFX1");


// for whole website //
const elem = document.documentElement; // Buong website ito beech
overlaything.addEventListener('click', () => {
    overlaytextz.style.color = 'red';
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }

    // locking device to landscape mode para di sya mag vug //
    async function rotateToLandscape() {
    try {
        // Must enter fullscreen first for many browsers
        await document.documentElement.requestFullscreen();
        
        // Lock the screen to landscape
        await screen.orientation.lock('landscape');
        console.log("Locked to landscape");
    } catch (error) {
        console.error("Orientation lock failed:", error);
    }

    rotateToLandscape();
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


// PLAY STORY SYSTEMS RATS //

const PlayPromptPanelA = document.getElementById("PlayPromptPanelA");
const MainNoticeTextPlayPrompt = document.getElementById("MainNoticeTextPlayPrompt");
const PlayPromptA = document.getElementById("PlayPromptA");
const PlayPromptB = document.getElementById("PlayPromptB");

function PlayButtonPrompt() {
    if (StoryLineNumberSelected > 2) {

        console.log("PlayDisplayNoticePrompt Triggered due to the user's Story.");
        PlayPromptPanelA.style.display = "block";

        MainNoticeTextPlayPrompt.classList.remove('FadeOutScaleOutAMain');
        PlayPromptA.classList.remove('FadeOutScaleOutAMain');
        PlayPromptB.classList.remove('FadeOutScaleOutAMain');
        PlayPromptPanelA.classList.remove('Fadeout2A');

        void PlayPromptPanelA.offsetWidth;
        void MainNoticeTextPlayPrompt.offsetWidth;
        void PlayPromptA.offsetWidth;
        void PlayPromptB.offsetWidth;

        PlayPromptPanelA.classList.add('Fadein1sec');
        MainNoticeTextPlayPrompt.classList.add('MainNoticeGameplayTextAnimsA');
        PlayPromptA.classList.add('MainNoticeAnimsButtonsA');
        PlayPromptB.classList.add('MainNoticeAnimsButtonsB');


    } else if (StoryLineNumberSelected <= 1) {
        PlayButtonDirect();
        console.log("User hasn't started this game, continuing.")
    } else {
        console.log("ERROR: NONE OF THE StoryLineNumberSelected HAS CHOSEN.")
    }
}

function PlayButtonPromptSelA() {
    MainNoticeTextPlayPrompt.classList.remove('MainNoticeGameplayTextAnimsA');
    PlayPromptA.classList.remove('MainNoticeAnimsButtonsA');
    PlayPromptB.classList.remove('MainNoticeAnimsButtonsB');

    void MainNoticeTextPlayPrompt.offsetWidth;
    void PlayPromptA.offsetWidth;
    void PlayPromptB.offsetWidth;

    MainNoticeTextPlayPrompt.classList.add('FadeOutScaleOutAMain');
    setTimeout(() => {
        PlayPromptA.classList.add('FadeOutScaleOutAMain');

        setTimeout(() => {
            PlayPromptB.classList.add('FadeOutScaleOutAMain');
        }, 100);
    }, 100);
    PlayButtonDirect();

    setTimeout(() => {
        PlayPromptPanelA.classList.remove('Fadein1sec');
        void PlayPromptPanelA.offsetWidth;
        PlayPromptPanelA.classList.add('Fadeout2A');
    }, 1000);
}

function PlayButtonPromptSelB() {
    MainNoticeTextPlayPrompt.classList.remove('MainNoticeGameplayTextAnimsA');
    PlayPromptA.classList.remove('MainNoticeAnimsButtonsA');
    PlayPromptB.classList.remove('MainNoticeAnimsButtonsB');

    void MainNoticeTextPlayPrompt.offsetWidth;
    void PlayPromptA.offsetWidth;
    void PlayPromptB.offsetWidth;

    MainNoticeTextPlayPrompt.classList.add('FadeOutScaleOutAMain');
    setTimeout(() => {
        PlayPromptA.classList.add('FadeOutScaleOutAMain');

        setTimeout(() => {
            PlayPromptB.classList.add('FadeOutScaleOutAMain');
        }, 100);
    }, 100);
    PlayButtonDirect();

    setTimeout(() => {
        PlayPromptPanelA.classList.remove('Fadein1sec');
        void PlayPromptPanelA.offsetWidth;
        PlayPromptPanelA.classList.add('Fadeout2A');
    }, 1000);

    setTimeout(() => {
        PlayPromptPanelA.style.display = "none";
        StoryLineNumberSelected = 0;
        localStorage.setItem("LineStorySavee", StoryLineNumberSelected);
    }, 2100);

    // FOR SETTING THE NOTIFICATION KINEMVERLUT //

    setTimeout(() => {
        clearTimeout(NotificationTimeout);
        MainNotificationMenu.style.display = "block";
        MainNotificationMenu.classList.remove('Notification-Animation1');
        MainNotificationMenu.classList.remove('Notification-Animation');
        void MainNotificationMenu.offsetWidth;
        MainNotificationMenu.classList.add('Notification-Animation');

        ChapterDisplayText.textContent = "Chapter 1 | The Sleepover";

        NotificationTimeout = setTimeout(() => {
            MainNotificationMenu.style.display = "none";
        }, 6000);
    
        LoadingLineAnimationNotification.classList.remove('Notification-Loading-Line-Animation');
        void LoadingLineAnimationNotification.offsetWidth;
        LoadingLineAnimationNotification.classList.add('Notification-Loading-Line-Animation');
    
        MainNotificationText.innerHTML = "The reset";
        MainNotificationText1.innerHTML = "You've reseted your game.";
    }, 2100);
}

// FOR LOAD GAME OPTION SYSTEM. INTINDIHIN NALANG PU //

let ChapterLineSelected = 0;

const PlayPromptPanelB = document.getElementById("PlayPromptPanelB");
const MainNoticeTextPlayPromptB = document.getElementById("MainNoticeTextPlayPromptB");
const PlayPromptA1 = document.getElementById("PlayPromptA1");
const PlayPromptB1 = document.getElementById("PlayPromptB1");

function PlayAnimationLoadGameFalse() {
    console.log("Play Animation at LoadGameChapter has been triggered.");
    PlayPromptPanelB.style.display = "block";

    MainNoticeTextPlayPromptB.classList.remove('FadeOutScaleOutAMain');
    PlayPromptA1.classList.remove('FadeOutScaleOutAMain');
    PlayPromptB1.classList.remove('FadeOutScaleOutAMain');
    PlayPromptPanelB.classList.remove('Fadeout2A');

    void PlayPromptPanelB.offsetWidth;
    void MainNoticeTextPlayPromptB.offsetWidth;
    void PlayPromptA1.offsetWidth;
    void PlayPromptB1.offsetWidth;

    PlayPromptPanelB.classList.add('Fadein1sec');
    MainNoticeTextPlayPromptB.classList.add('MainNoticeGameplayTextAnimsA');
    PlayPromptA1.classList.add('MainNoticeAnimsButtonsA');
    PlayPromptB1.classList.add('MainNoticeAnimsButtonsB');
}

function FinishChaptersPlayLoad() {
    MainContainerofLoadUI.style.animation = 'Fadeout 0.5s ease both, ScaleUPAnimation 1s ease 0.1s both';
    MainNoticeTextPlayPromptB.classList.remove('MainNoticeGameplayTextAnimsA');
    PlayPromptA1.classList.remove('MainNoticeAnimsButtonsA');
    PlayPromptB1.classList.remove('MainNoticeAnimsButtonsB');

    void MainNoticeTextPlayPromptB.offsetWidth;
    void PlayPromptA1.offsetWidth;
    void PlayPromptB1.offsetWidth;

    MainNoticeTextPlayPromptB.classList.add('FadeOutScaleOutAMain');

    // saving to current to direct kineme sa chapter kinemberlut basta ayon //
    StoryLineNumberSelected = ChapterLineSelected;
    localStorage.setItem("LineStorySavee", StoryLineNumberSelected);
    setTimeout(() => {
        PlayPromptA1.classList.add('FadeOutScaleOutAMain');

        setTimeout(() => {
            PlayPromptB1.classList.add('FadeOutScaleOutAMain');
            MainIntroPanel1.style.display = 'none';
            PlayButtonDirect();
        }, 100);
    }, 100);

    setTimeout(() => {
        PlayPromptPanelB.classList.remove('Fadein1sec');
        void PlayPromptPanelB.offsetWidth;
        PlayPromptPanelB.classList.add('Fadeout2A');
        MainContainerofLoadUI.style.display = "none";

        setTimeout(() => {
            PlayPromptPanelB.style.display = "none";
        }, 1200);
    }, 1000);
}

function FinishChaptersLoad() {
    console.log("FinishChaptersLoad triggered!");
    MainNoticeTextPlayPrompt.classList.remove('MainNoticeGameplayTextAnimsA');
    PlayPromptA.classList.remove('MainNoticeAnimsButtonsA');
    PlayPromptB.classList.remove('MainNoticeAnimsButtonsB');

    void MainNoticeTextPlayPrompt.offsetWidth;
    void PlayPromptA.offsetWidth;
    void PlayPromptB.offsetWidth;

    MainNoticeTextPlayPrompt.classList.add('FadeOutScaleOutAMain');
    setTimeout(() => {
        PlayPromptA.classList.add('FadeOutScaleOutAMain');

        setTimeout(() => {
            PlayPromptB.classList.add('FadeOutScaleOutAMain');
            MainIntroPanel.style.display = 'none';
            PlayButtonDirect();
        }, 100);
    }, 100);

    setTimeout(() => {
        PlayPromptPanelA.classList.remove('Fadein1sec');
        void PlayPromptPanelA.offsetWidth;
        PlayPromptPanelA.classList.add('Fadeout2A');

        setTimeout(() => {
            PlayPromptPanelA.style.display = "none";
        }, 1200);
    }, 1000);
}

function ExitLoadChapterPrompt() {
    MainNoticeTextPlayPromptB.classList.remove('MainNoticeGameplayTextAnimsA');
    PlayPromptA1.classList.remove('MainNoticeAnimsButtonsA');
    PlayPromptB1.classList.remove('MainNoticeAnimsButtonsB');

    void MainNoticeTextPlayPromptB.offsetWidth;
    void PlayPromptA1.offsetWidth;
    void PlayPromptB1.offsetWidth;

    MainNoticeTextPlayPromptB.classList.add('FadeOutScaleOutAMain');
    setTimeout(() => {
        PlayPromptA1.classList.add('FadeOutScaleOutAMain');

        setTimeout(() => {
            PlayPromptB1.classList.add('FadeOutScaleOutAMain');
        }, 100);
    }, 100);

    setTimeout(() => {
        PlayPromptPanelB.classList.remove('Fadein1sec');
        void PlayPromptPanelB.offsetWidth;
        PlayPromptPanelB.classList.add('Fadeout2A');

        setTimeout(() => {
            PlayPromptPanelB.style.display = "none";
        }, 500);
    }, 500);
}

function LoadGameFunction(ChapterNumber) {
    console.log("The Chapter Number callsz: " + typeof ChapterNumber, ChapterNumber);
    if (ChapterNumber === 1) {
        if (Chapter1FinishedSave === "False") { 
            if (StoryLineNumberSelected < 1) {
                MainNoticeTextPlayPromptB.innerHTML = "It looks like you haven't played, do you want to play and finish chapter 1 to unlock chapter 2?";
                PlayPromptA1.innerHTML = "Finish Chapter 1";

                console.log("LoadGameFalseChapter1 Triggered due to the user data.");
                PlayAnimationLoadGameFalse();
            } else if (StoryLineNumberSelected > 2) {
                MainNoticeTextPlayPromptB.innerHTML = "It looks like you haven't finished the Chapter 1, Do you want to continue to unlock Chapter 2?";
                PlayPromptA1.innerHTML = "Resume Chapter 1";

                console.log("LoadGameFalseChapter1 Triggered due to the user data.");
                PlayAnimationLoadGameFalse();
            }
        } else if (Chapter1FinishedSave === "True") {
            MainNoticeTextPlayPromptB.innerHTML = "Do you want to continue Chapter 2? This will change the current session of the game.";
            PlayPromptA1.innerHTML = "Continue to Chapter 2";
            ChapterLineSelected = 10;


            console.log("LoadGameTrueChapter2 Triggered due to the user data.");
            PlayAnimationLoadGameFalse();
        }
    } else if (ChapterNumber === 2) {
        if (Chapter2FinishedSave === "False") {
            if (StoryLineNumberSelected < 1) {
                MainNoticeTextPlayPromptB.innerHTML = "It looks like you haven't played, do you want to play and finish chapter 1 and 2 to unlock chapter 3?";
                PlayPromptA1.innerHTML = "Finish Chapter 1";

                console.log("LoadGameFalseChapter1 Triggered due to the user data.");
                PlayAnimationLoadGameFalse();
            } else if (StoryLineNumberSelected > 2) {
                MainNoticeTextPlayPromptB.innerHTML = "It looks like you haven't finished the Chapter 2, Do you want to continue to unlock Chapter 3?";
                PlayPromptA1.innerHTML = "Resume Chapter 2";

                console.log("LoadGameFalseChapter1 Triggered due to the user data.");
                PlayAnimationLoadGameFalse();
            }
        } else if (Chapter2FinishedSave === "True") {
            MainNoticeTextPlayPromptB.innerHTML = "Do you want to continue Chapter 3? This will change the current session of the game.";
            PlayPromptA1.innerHTML = "Continue to Chapter 3";
            ChapterLineSelected = 31;

            console.log("LoadGameTrueChapter3 Triggered due to the user data.");
            PlayAnimationLoadGameFalse();
        }
    } else if (ChapterNumber === 3) {
        if (Chapter3FinishedSave === "False") {
            if (StoryLineNumberSelected < 1) {
                MainNoticeTextPlayPromptB.innerHTML = "It looks like you haven't played, do you want to play and finish chapter 1, 2, and 3 to unlock chapter 4?";
                PlayPromptA1.innerHTML = "Finish Chapter 1";

                console.log("LoadGameFalseChapter1 Triggered due to the user data.");
                PlayAnimationLoadGameFalse();
            } else if (StoryLineNumberSelected > 2) {
                MainNoticeTextPlayPromptB.innerHTML = "It looks like you haven't finished the Chapter 3, Do you want to continue to unlock Chapter 4?";
                PlayPromptA1.innerHTML = "Resume Chapter 3";

                console.log("LoadGameFalseChapter1 Triggered due to the user data.");
                PlayAnimationLoadGameFalse();
            }
        } else if (Chapter3FinishedSave === "True") {
            MainNoticeTextPlayPromptB.innerHTML = "Do you want to continue Chapter 4? This will change the current session of the game.";
            PlayPromptA1.innerHTML = "Continue to Chapter 4";
            ChapterLineSelected = 54;

            console.log("LoadGameTrueChapter4 Triggered due to the user data.");
            PlayAnimationLoadGameFalse();
        }
    } else if (ChapterNumber === 4) {
        if (Chapter4FinishedSave === "False") {
            if (StoryLineNumberSelected < 1) {
                MainNoticeTextPlayPromptB.innerHTML = "It looks like you haven't played, do you want to play and finish chapter 1, 2, 3, and 4 to unlock chapter 5?";
                PlayPromptA1.innerHTML = "Finish Chapter 1";

                console.log("LoadGameFalseChapter1 Triggered due to the user data.");
                PlayAnimationLoadGameFalse();
            } else if (StoryLineNumberSelected > 2) {
                MainNoticeTextPlayPromptB.innerHTML = "It looks like you haven't finished the Chapter 4, Do you want to continue to unlock Chapter 5?";
                PlayPromptA1.innerHTML = "Resume Chapter 4";

                console.log("LoadGameFalseChapter1 Triggered due to the user data.");
                PlayAnimationLoadGameFalse();
            }
        } else if (Chapter4FinishedSave === "True") {
            MainNoticeTextPlayPromptB.innerHTML = "Do you want to continue Chapter 5? This will change the current session of the game.";
            PlayPromptA1.innerHTML = "Continue to Chapter 5";
            ChapterLineSelected = 31;

            console.log("LoadGameTrueChapter5 Triggered due to the user data.");
            PlayAnimationLoadGameFalse();
        }
    } else {
        console.log("Nothing Changes.");
    }
}

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
            DisplayStoryLine();
        }, 12500);
    }, 5000);
};  




// STORY LINES //

let StoryChapterSelected = 1;

// SAVE STORY //

let StoryLineNumberSelected = parseInt(localStorage.getItem("LineStorySavee")) || 0;

let Chapter1FinishedSave = localStorage.getItem("Chapter1FinishedSaved") || "False";
let Chapter2FinishedSave = localStorage.getItem("Chapter2FinishedSaved") || "False";
let Chapter3FinishedSave = localStorage.getItem("Chapter3FinishedSaved") || "False";
let Chapter4FinishedSave = localStorage.getItem("Chapter4FinishedSaved") || "False";
let Chapter5FinishedSave = localStorage.getItem("Chapter5FinishedSaved") || "False";


// Story ni rhema na kahit i summarize, mahaba parin na para vang kasing haba ng sungay nya sa ulo💕 //
const StoryLines = [

    // CHAPTER 1 LINES //
    { StoryVisualImg: "../OtherImages/ImagesScenes/CHAPTER1-LINE1.png", StoryLineNumber: 0, StoryChapter: 1, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/AJProfile.png", StoryLineText: "Kevin notices Rhema has been acting strange — too silent, too distant. He suspects she's hiding something. He tells AJ and Lyza his plan: use a sleepover to investigate." },
 
    { StoryVisualImg: "../OtherImages/ImagesScenes/CHAPTER1-LINE2.png", StoryLineNumber: 1, StoryChapter: 1, StoryCharacter: "Kevin", StoryCharacterImg: "../OtherImages/CharacterProfile/KevinProfile.png", StoryLineText: "Guys, I think something's wrong with Rhema. She's been acting really weird. What if we ask her if we can sleep over at her house and see what's going on?" },
    
    // CHAPTER 1 CHOICES // // Story Choice A0 LINE //
    { StoryVisualImg: "../OtherImages/ImagesScenes/CHAPTER1-LINE3.png", StoryLineNumber: 2, StoryChapter: 1, StoryCharacter: "AJ", StoryCharacterImg: "../OtherImages/CharacterProfile/AJProfile.png", StoryLineText: "Okay, I'm in." },
 
    { StoryVisualImg: "../OtherImages/ImagesScenes/CHAPTER1-LINE3.png", StoryLineNumber: 3, StoryChapter: 1, StoryCharacter: "Lyza", StoryCharacterImg: "../OtherImages/CharacterProfile/LyzaProfile.png", StoryLineText: "Yeah, let's do it. We're her friends anyway." },
    
    // CHAPTER 1 CHOICES // // Story Choice B0 LINE //
    { StoryVisualImg: "../OtherImages/ImagesScenes/CHAPTER1-LINE3.png", StoryLineNumber: 4, StoryChapter: 1, StoryCharacter: "Kevin", StoryCharacterImg: "../OtherImages/CharacterProfile/KevinProfile.png", StoryLineText: "She won't tell us the truth. We have to see it ourselves." },
  
    { StoryVisualImg: "../OtherImages/ImagesScenes/CHAPTER1-LINE3.png", StoryLineNumber: 5, StoryChapter: 1, StoryCharacter: "AJ", StoryCharacterImg: "../OtherImages/CharacterProfile/AJProfile.png", StoryLineText: "...Fine. Let's just do the sleepover then." },
  
    // NEXT CHAPTER 1 LINES WILL BE ADDED HERE //
    { StoryVisualImg: "../OtherImages/ImagesScenes/CHAPTER2-CHOICEA2.png", StoryLineNumber: 6, StoryChapter: 1, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "They asked Rhema if they could sleep over. She hesitated." },
  
    { StoryVisualImg: "../OtherImages/ImagesScenes/CHAPTER2-CHOICEA1.png", StoryLineNumber: 7, StoryChapter: 1, StoryCharacter: "Rhema", StoryCharacterImg: "../OtherImages/CharacterProfile/RhemaProfile.png", StoryLineText: "(voice low, uneasy) Are you guys sure?" },
  
    { StoryVisualImg: "../OtherImages/ImagesScenes/CHAPTER2-CHOICEA2.png", StoryLineNumber: 8, StoryChapter: 1, StoryCharacter: "Kevin, AJ, Lyza", StoryCharacterImg: "../OtherImages/CharacterProfile/KevinProfile.png", StoryLineText: "Yes. We're really sure." },
  
    { StoryLineNumber: 9, StoryChapter: 1, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "And that was when everything began." },
  
    // CHAPTER 2 LINES //
    { StoryVisualImg: "../OtherImages/ImagesScenes/CHAPTER2-LINE1.png", StoryLineNumber: 10, StoryChapter: 2, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "The night dragged on. Kevin told an old local legend — a forest nearby, voices that mimicked your friends, footsteps that followed you even when no one was there. The lights flickered." },
  
    { StoryVisualImg: "../OtherImages/ImagesScenes/CHAPTER2-LINE2.png", StoryLineNumber: 11, StoryChapter: 2, StoryCharacter: "AJ", StoryCharacterImg: "../OtherImages/CharacterProfile/AJProfile.png", StoryLineText: "Kevin, you should stop." },
  
    { StoryVisualImg: "../OtherImages/ImagesScenes/CHAPTER2-LINE2.png", StoryLineNumber: 12, StoryChapter: 2, StoryCharacter: "Lyza", StoryCharacterImg: "../OtherImages/CharacterProfile/LyzaProfile.png", StoryLineText: "Yeah. This isn't funny." },
  
    { StoryVisualImg: "../OtherImages/ImagesScenes/CHAPTER2-LINE2.png", StoryLineNumber: 13, StoryChapter: 2, StoryCharacter: "Kevin", StoryCharacterImg: "../OtherImages/CharacterProfile/KevinProfile.png", StoryLineText: "Alright. I'll stop." },
  
    { StoryVisualImg: "../OtherImages/ImagesScenes/CHAPTER2-LINE3.png", StoryLineNumber: 14, StoryChapter: 2, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "Silence fell again. Then Rhema spoke. Her voice was calm. Too calm." },
  
    { StoryVisualImg: "../OtherImages/ImagesScenes/CHAPTER2-LINE3.png", StoryLineNumber: 15, StoryChapter: 2, StoryCharacter: "Rhema", StoryCharacterImg: "../OtherImages/CharacterProfile/RhemaProfile.png", StoryLineText: "What if we go to the forest? You guys want that, right?" },
  
    // Story Choice A1 LINE //
    { StoryVisualImg: "../OtherImages/ImagesScenes/CHAPTER2-CHOICEA1.png", StoryLineNumber: 16, StoryChapter: 2, StoryCharacter: "Kevin", StoryCharacterImg: "../OtherImages/CharacterProfile/KevinProfile.png", StoryLineText: "Girl, we're just going there. Let's go!" },
  
    { StoryVisualImg: "../OtherImages/ImagesScenes/CHAPTER2-CHOICEA2.png",StoryLineNumber: 17, StoryChapter: 2, StoryCharacter: "Lyza", StoryCharacterImg: "../OtherImages/CharacterProfile/LyzaProfile.png", StoryLineText: "Kevin, I don't know about this..." },
  
    { StoryVisualImg: "../OtherImages/ImagesScenes/CHAPTER2-CHOICEA3.png",StoryLineNumber: 18, StoryChapter: 2, StoryCharacter: "AJ", StoryCharacterImg: "../OtherImages/CharacterProfile/AJProfile.png", StoryLineText: "...I really don't want to." },
  
    // Story Choice B1 LINE //
    { StoryVisualImg: "../OtherImages/ImagesScenes/CHAPTER2-CHOICEB1.png", StoryLineNumber: 19, StoryChapter: 2, StoryCharacter: "Lyza", StoryCharacterImg: "../OtherImages/CharacterProfile/LyzaProfile.png", StoryLineText: "Maybe tomorrow morning instead? Not now." },
  
    { StoryVisualImg: "../OtherImages/ImagesScenes/CHAPTER2-CHOICEB2.png", StoryLineNumber: 20, StoryChapter: 2, StoryCharacter: "AJ", StoryCharacterImg: "../OtherImages/CharacterProfile/AJProfile.png", StoryLineText: "Yeah, let's not." },
  
    { StoryVisualImg: "../OtherImages/ImagesScenes/CHAPTER2-CHOICEB3.png", StoryLineNumber: 21, StoryChapter: 2, StoryCharacter: "Kevin", StoryCharacterImg: "../OtherImages/CharacterProfile/KevinProfile.png", StoryLineText: "Come on. Nothing's gonna happen to us." },
  
    // CONTINUATION OF CHAPTER 2 LINES //
    { StoryVisualImg: "../OtherImages/ImagesScenes/CHAPTER2-LINE4.png", StoryLineNumber: 22, StoryChapter: 2, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "Before anyone could argue, Rhema was already at the door, slipping on her shoes. AJ and Lyza followed — by no choice." },
  
    { StoryLineNumber: 23, StoryChapter: 2, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "The forest swallowed them the moment they stepped inside. The trees were too close together. The path Rhema promised seemed to disappear the deeper they went." },
  
    { StoryVisualImg: "../OtherImages/ImagesScenes/CHAPTER2-LINE5.png", StoryLineNumber: 24, StoryChapter: 2, StoryCharacter: "Lyza", StoryCharacterImg: "../OtherImages/CharacterProfile/LyzaProfile.png", StoryLineText: "*(whispering)* Rhema... are you sure this is the way?" },

    { StoryVisualImg: "../OtherImages/ImagesScenes/CHAPTER2-LINE6.png", StoryLineNumber: 25, StoryChapter: 2, StoryCharacter: "Rhema", StoryCharacterImg: "../OtherImages/CharacterProfile/RhemaProfile.png", StoryLineText: "*(pausing)* Yes. As far as I remember... this is the way." },

    { StoryVisualImg: "../OtherImages/ImagesScenes/CHAPTER2-LINE7.png", StoryLineNumber: 26, StoryChapter: 2, StoryCharacter: "Kevin", StoryCharacterImg: "../OtherImages/CharacterProfile/KevinProfile.png", StoryLineText: "You hear that?" },

    { StoryVisualImg: "../OtherImages/ImagesScenes/CHAPTER2-LINE8.png", StoryLineNumber: 27, StoryChapter: 2, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "Footsteps echoed behind them. They stopped walking. The footsteps didn't." },

    { StoryVisualImg: "../OtherImages/ImagesScenes/CHAPTER2-LINE9.png", StoryLineNumber: 28, StoryChapter: 2, StoryCharacter: "Lyza", StoryCharacterImg: "../OtherImages/CharacterProfile/LyzaProfile.png", StoryLineText: "*— screams —*" },

    { StoryVisualImg: "../OtherImages/ImagesScenes/CHAPTER2-LINE10.png", StoryLineNumber: 29, StoryChapter: 2, StoryCharacter: "AJ", StoryCharacterImg: "../OtherImages/CharacterProfile/AJProfile.png", StoryLineText: "Guys. Look at this." },

    { StoryVisualImg: "../OtherImages/ImagesScenes/CHAPTER2-LINE11.png", StoryLineNumber: 30, StoryChapter: 2, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "Between the trees stood a house. Old. Crooked. Half-swallowed by shadows. Rhema stared at it without speaking — as if she recognized it. Or worse, as if it was staring back." },

    // CHAPTER 3 LINES RATS //
    { StoryLineNumber: 31, StoryChapter: 3, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "The house was too clean. Not a speck of dust. Not a single sign of abandonment. As if someone had just been there, watching." },

    { StoryLineNumber: 32, StoryChapter: 3, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "Lyza turned and ran for the door. BANG. It slammed shut on its own." },

    { StoryLineNumber: 33, StoryChapter: 3, StoryCharacter: "Lyza", StoryCharacterImg: "../OtherImages/CharacterProfile/LyzaProfile.png", StoryLineText: "*— screams —*" },

    { StoryLineNumber: 34, StoryChapter: 3, StoryCharacter: "AJ", StoryCharacterImg: "../OtherImages/CharacterProfile/AJProfile.png", StoryLineText: "Oh my God... we're in a trap. What are we going to do?!" },

    { StoryLineNumber: 35, StoryChapter: 3, StoryCharacter: "Lyza", StoryCharacterImg: "../OtherImages/CharacterProfile/LyzaProfile.png", StoryLineText: "(pointing at Kevin) This is all your fault! You planned this! Why did I even go along with you?!" },

    { StoryLineNumber: 36, StoryChapter: 3, StoryCharacter: "Lyza", StoryCharacterImg: "../OtherImages/CharacterProfile/LyzaProfile.png", StoryLineText: "Kevin wanted to investigate you, Rhema. You've been acting strange lately. That's why we asked to sleep over at your house." },

    { StoryLineNumber: 37, StoryChapter: 3, StoryCharacter: "Kevin", StoryCharacterImg: "../OtherImages/CharacterProfile/KevinProfile.png", StoryLineText: "That's a lie! Stop lying!" },

    { StoryLineNumber: 38, StoryChapter: 3, StoryCharacter: "Rhema", StoryCharacterImg: "../OtherImages/CharacterProfile/RhemaProfile.png", StoryLineText: "What the hell is this, Kevin? That's exactly why I didn't want you to know about my problems." },

    { StoryLineNumber: 39, StoryChapter: 3, StoryCharacter: "Rhema", StoryCharacterImg: "../OtherImages/CharacterProfile/RhemaProfile.png", StoryLineText: "Traitor." },

    { StoryLineNumber: 40, StoryChapter: 3, StoryCharacter: "AJ", StoryCharacterImg: "../OtherImages/CharacterProfile/AJProfile.png", StoryLineText: "*(quietly)* ...He did say that. I'm sorry, Rhema." },

    { StoryLineNumber: 41, StoryChapter: 3, StoryCharacter: "Kevin", StoryCharacterImg: "../OtherImages/CharacterProfile/KevinProfile.png", StoryLineText: "*(laughs — cold, not nervous)* Yes. That's all true. And now... I've finally trapped all of you." },

    // Story Choice A2 LINE //
    { StoryLineNumber: 42, StoryChapter: 3, StoryCharacter: "Rhema", StoryCharacterImg: "../OtherImages/CharacterProfile/RhemaProfile.png", StoryLineText: "Kevin, what the hell are you saying?! Is this some kind of prank?! Cut the crap!" },

    { StoryLineNumber: 43, StoryChapter: 3, StoryCharacter: "Kevin", StoryCharacterImg: "../OtherImages/CharacterProfile/KevinProfile.png", StoryLineText: "I like you. You're brave. I'll give you that." },

    { StoryLineNumber: 44, StoryChapter: 3, StoryCharacter: "Rhema", StoryCharacterImg: "../OtherImages/CharacterProfile/RhemaProfile.png", StoryLineText: "Stop talking in circles." },

    // Story Choice B2 LINE //
    { StoryLineNumber: 45, StoryChapter: 3, StoryCharacter: "AJ", StoryCharacterImg: "../OtherImages/CharacterProfile/AJProfile.png", StoryLineText: "Kevin, what do you want from us? Just say it." },

    { StoryLineNumber: 46, StoryChapter: 3, StoryCharacter: "Kevin", StoryCharacterImg: "../OtherImages/CharacterProfile/KevinProfile.png", StoryLineText: "Hmm... simple. I want all of you to play with me." },

    { StoryLineNumber: 47, StoryChapter: 3, StoryCharacter: "AJ", StoryCharacterImg: "../OtherImages/CharacterProfile/AJProfile.png", StoryLineText: "Play? What game?" },

    // Story line continuation here beech //
    { StoryLineNumber: 48, StoryChapter: 3, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "Kevin reached behind him and pressed something on the wall." },

    { StoryLineNumber: 49, StoryChapter: 3, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "*— CLANG —*" },

    { StoryLineNumber: 50, StoryChapter: 3, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "The main door slammed shut. Locks twisted on their own." },

    { StoryLineNumber: 51, StoryChapter: 3, StoryCharacter: "Kevin", StoryCharacterImg: "../OtherImages/CharacterProfile/KevinProfile.png", StoryLineText: "Welcome to Find the Key. You have one hour. Somewhere in this house is a key. Find it — and you walk out alive. If you don't... you won't have to worry about walking out." },

    { StoryLineNumber: 52, StoryChapter: 3, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "A digital timer on the wall flickered on." },

    { StoryLineNumber: 53, StoryChapter: 3, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "*— BEEPING —*" },

    //START OF CHAPTER 4 BEECH VEELAT (LAPIT NA)//
    { StoryLineNumber: 54, StoryChapter: 4, StoryCharacter: "Kevin", StoryCharacterImg: "../OtherImages/CharacterProfile/KevinProfile.png", StoryLineText: "Every ten minutes, this house shrinks. And every ten minutes — you get a clue. Consider it my generosity." },

    { StoryLineNumber: 55, StoryChapter: 4, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "Kevin was gone. A paper fell to the floor." },

    { StoryLineNumber: 56, StoryChapter: 4, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "*Clue 1 — written in black ink:*" },

    { StoryLineNumber: 57, StoryChapter: 4, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "**The key hides where light fears to reach.**" },

    { StoryLineNumber: 58, StoryChapter: 4, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "50:00" },

    // CHOICES A3 LINES//
    { StoryLineNumber: 59, StoryChapter: 4, StoryCharacter: "Lyza", StoryCharacterImg: "../OtherImages/CharacterProfile/LyzaProfile.png", StoryLineText: "Are you sure?!" },

    { StoryLineNumber: 60, StoryChapter: 4, StoryCharacter: "Lyza", StoryCharacterImg: "../OtherImages/CharacterProfile/LyzaProfile.png", StoryLineText: "Trust me." },

    { StoryLineNumber: 61, StoryChapter: 4, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "*They run. The space behind them narrows by inches." },

    // CHOICES B3 LINES//
    { StoryLineNumber: 62, StoryChapter: 4, StoryCharacter: "AJ", StoryCharacterImg: "../OtherImages/CharacterProfile/AJProfile.png", StoryLineText: "Okay, quick - check everything." },

    { StoryLineNumber: 63, StoryChapter: 4, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "*Nothing found. Clue 2 arrives at 40:00.*" },

    { StoryLineNumber: 64, StoryChapter: 4, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "**Look beneath what reflects you.**" },

    { StoryLineNumber: 65, StoryChapter: 4, StoryCharacter: "Rhema", StoryCharacterImg: "../OtherImages/CharacterProfile/RhemaProfile.png", StoryLineText: "The hallway. The one with no windows. Go!" },

    // CHAPTER 4 CONTINUATION OF STORY //
    { StoryLineNumber: 66, StoryChapter: 4, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "In the hallway, a cracked mirror hung on the wall. Their reflections looked distorted. Beneath the mirror's frame — a faint scratch mark." },

    { StoryLineNumber: 67, StoryChapter: 4, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "40:00" },

    { StoryLineNumber: 68, StoryChapter: 4, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "*Clue 2 whispered from the walls:*" },

    { StoryLineNumber: 69, StoryChapter: 4, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "**Look beneath what reflects you.**" },

    { StoryLineNumber: 70, StoryChapter: 4, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "The mirror shattered. Glass exploded across the floor. Rhema dropped to her knees, ignoring the glass cutting her skin. She found a latch. She pulled it open." },

    { StoryLineNumber: 71, StoryChapter: 4, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "Inside — not a key. Another clue." },

    { StoryLineNumber: 72, StoryChapter: 4, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "**Trust is heavier than fear.**" },

    { StoryLineNumber: 73, StoryChapter: 4, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "TIMER: 30:00" },

    { StoryLineNumber: 74, StoryChapter: 4, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "Another room collapsed completely. They stumbled into the last remaining room. One door. Locked. Carved above it:" },

    { StoryLineNumber: 75, StoryChapter: 4, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "**One of you already holds the key.**" },

    { StoryLineNumber: 76, StoryChapter: 4, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "TIMER: 20:00" },

    { StoryLineNumber: 77, StoryChapter: 4, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "Rhema slowly reached into her jacket. Her fingers touched something cold. Metal. She pulled it out." },

    { StoryLineNumber: 78, StoryChapter: 4, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "A small, old key." },

    { StoryLineNumber: 79, StoryChapter: 4, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "She hadn't put it there." },

    //START OF CHAPTER 5 HERE //
    { StoryLineNumber: 80, StoryChapter: 5, StoryCharacter: "Kevin", StoryCharacterImg: "../OtherImages/CharacterProfile/KevinProfile.png", StoryLineText: "One key. Three players." },

    { StoryLineNumber: 81, StoryChapter: 5, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "The carving above the door burned and shifted. New words:" },

    { StoryLineNumber: 82, StoryChapter: 5, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "**Only one walks free.**" },

    { StoryLineNumber: 83, StoryChapter: 5, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "05:00" },

    { StoryLineNumber: 84, StoryChapter: 5, StoryCharacter: "Lyza", StoryCharacterImg: "../OtherImages/CharacterProfile/LyzaProfile.png", StoryLineText: "*(tears in her eyes)* Rhema... please." },

    // CHOICE A LINES //
    { StoryLineNumber: 85, StoryChapter: 5, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "Rhema raised the key toward the lock. Her hand trembled." },

    { StoryLineNumber: 86, StoryChapter: 5, StoryCharacter: "AJ", StoryCharacterImg: "../OtherImages/CharacterProfile/AJProfile.png", StoryLineText: "Rhema, don't—" },

    { StoryLineNumber: 87, StoryChapter: 5, StoryCharacter: "Rhema", StoryCharacterImg: "../OtherImages/CharacterProfile/RhemaProfile.png", StoryLineText: "*(stops)* ...I can't. I can't do this." },

    { StoryLineNumber: 88, StoryChapter: 5, StoryCharacter: "Rhema", StoryCharacterImg: "../OtherImages/CharacterProfile/RhemaProfile.png", StoryLineText: "*She steps back. She can't leave them.*" },

    // CHOICE B LINES //
    { StoryLineNumber: 89, StoryChapter: 5, StoryCharacter: "Rhema", StoryCharacterImg: "../OtherImages/CharacterProfile/RhemaProfile.png", StoryLineText: "This isn't about sacrifice." },

    { StoryLineNumber: 90, StoryChapter: 5, StoryCharacter: "Kevin", StoryCharacterImg: "../OtherImages/CharacterProfile/KevinProfile.png", StoryLineText: "*(smile fading)* ...What are you doing?" },

    { StoryLineNumber: 91, StoryChapter: 5, StoryCharacter: "Rhema", StoryCharacterImg: "../OtherImages/CharacterProfile/RhemaProfile.png", StoryLineText: "If only one walks free — then none of us walk alone." },

    // CHAPTER 5 CONTINUATION OF THE STORY //
    { StoryLineNumber: 92, StoryChapter: 5, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "Rhema threw the key across the room. It hit the ground — and split in half." },

    { StoryLineNumber: 93, StoryChapter: 5, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "*— violent shake —*" },

    { StoryLineNumber: 94, StoryChapter: 5, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "The carving above the door shattered. New words carved themselves into the wood:" },

    { StoryLineNumber: 95, StoryChapter: 5, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "**Correct.**" },

    { StoryLineNumber: 96, StoryChapter: 5, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "The door unlocked with a loud metallic snap." },

    { StoryLineNumber: 97, StoryChapter: 5, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "**00:47**" },

    { StoryLineNumber: 98, StoryChapter: 5, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "The walls stopped. The ceiling rose slightly. All three of them — still alive." },

    { StoryLineNumber: 99, StoryChapter: 5, StoryCharacter: "Lyza", StoryCharacterImg: "../OtherImages/CharacterProfile/LyzaProfile.png", StoryLineText: "*— bursts into tears —*" },

    { StoryLineNumber: 100, StoryChapter: 5, StoryCharacter: "AJ", StoryCharacterImg: "../OtherImages/CharacterProfile/AJProfile.png", StoryLineText: "How did you know?" },

    { StoryLineNumber: 101, StoryChapter: 5, StoryCharacter: "Rhema", StoryCharacterImg: "../OtherImages/CharacterProfile/RhemaProfile.png", StoryLineText: "He wanted one of us to choose themselves. The game was built on fear. So I chose trust." },

    { StoryLineNumber: 102, StoryChapter: 5, StoryCharacter: "Kevin", StoryCharacterImg: "../OtherImages/CharacterProfile/KevinProfile.png", StoryLineText: "*(stepping back into shadows)*" },

    { StoryLineNumber: 103, StoryChapter: 5, StoryCharacter: "Kevin", StoryCharacterImg: "../OtherImages/CharacterProfile/KevinProfile.png", StoryLineText: "You passed this round. The next one won't be about trust." },

    { StoryLineNumber: 104, StoryChapter: 5, StoryCharacter: "Rhema", StoryCharacterImg: "../OtherImages/CharacterProfile/RhemaProfile.png", StoryLineText: "A new timer appeared above the doorway." },

    { StoryLineNumber: 105, StoryChapter: 5, StoryCharacter: "Rhema", StoryCharacterImg: "../OtherImages/CharacterProfile/RhemaProfile.png", StoryLineText: "**60:00** - Rhema stared at it. Then at Kevin. Her fear was gone — replaced by something sharper." },

    { StoryLineNumber: 106, StoryChapter: 5, StoryCharacter: "Rhema", StoryCharacterImg: "../OtherImages/CharacterProfile/RhemaProfile.png", StoryLineText: "You made a mistake. You think we're trapped in your game. But now we know the rules." },

    { StoryLineNumber: 107, StoryChapter: 5, StoryCharacter: "Kevin", StoryCharacterImg: "../OtherImages/CharacterProfile/KevinProfile.png", StoryLineText: "*(smiling slowly)* - Good." },

    { StoryLineNumber: 108, StoryChapter: 5, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "The door creaked open again. Darkness waiting. But this time — they didn't look like victims." },

    { StoryLineNumber: 109, StoryChapter: 5, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "They looked ready." },

    { StoryLineNumber: 110, StoryChapter: 5, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "59:59" },

    { StoryLineNumber: 111, StoryChapter: 5, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "*And together — they stepped back inside.*" },

    // END //
    { StoryLineNumber: 112, StoryChapter: 5, StoryCharacter: "", StoryCharacterImg: "../OtherImages/CharacterProfile/NarratorProfile.png", StoryLineText: "END" },

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
        StoryChoiceA: "Rhema confronts Kevin head-on. ",
        StoryChoiceB: "AJ steps forward to reason with Kevin.",
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
    const ImageStoryVisualMain = document.getElementById("ImageStoryVisualMain");
    
    StorySavingSession()

    console.log("Current Story Line:", currentStoryLinesMain);

    const MainDialoguePanel = document.getElementById("MainDialoguePanel");
    const DialogueCharName = document.getElementById("DialogueCharName");
    const DialogueLines = document.getElementById("DialogueLines");
    const DialogueProfileIMG = document.getElementById("DialogueProfileIMG");

    setTimeout(() => {
        if (StoryLineNumberSelected == 1) {
            setupChoice(0);
        } else if (StoryLineNumberSelected == 15) {
            setupChoice(1);
        } else if (StoryLineNumberSelected == 41) {
            setupChoice(2);
        } else if (StoryLineNumberSelected == 63) {
            setupChoice(3);
        }
    }, 1400);


    StoryLineNextButton();  

    ImageStoryVisualMain.style.display = "block";
    MainDialoguePanel.style.display = "block";
    DialogueCharName.innerHTML = currentStoryLinesMain.StoryCharacter;
    DialogueLines.innerHTML = currentStoryLinesMain.StoryLineText;
    DialogueProfileIMG.src = currentStoryLinesMain.StoryCharacterImg;
    ImageStoryVisualMain.style.backgroundImage = `url('${currentStoryLinesMain.StoryVisualImg}')`;
    HideStoryCharacterImageNarr();
}

function HideStoryCharacterImageNarr() {
    const MainDialoguePanel = document.getElementById("MainDialoguePanel");
    const DialogueCharName = document.getElementById("DialogueCharName");
    const DialogueLines = document.getElementById("DialogueLines");
    const DialogueProfileIMG = document.getElementById("DialogueProfileIMG");

    if (DialogueCharName.innerHTML === "") {
        DialogueProfileIMG.style.display = "none";
    } else {
        DialogueProfileIMG.style.display = "block";
    }
}

// FOR STORY CHANGES SYSTEM. ✌💋🌹😜 VURICAT VILCAT BUT WITHOUT C💕💕 //

const StoryLineChoicesPanel = document.getElementById("Story-Line-Choices-Panel");
const StoryLineChoice1 = document.querySelector(".StoryLineChoice1");
const StoryLineChoice2 = document.querySelector(".StoryLineChoice2");

let ChoiceFinalMade = "none";
const ChoiceFinalMadeSave = localStorage.getItem("ChoiceFinalMadeSaved", ChoiceFinalMade);

NextStoryLineButton.addEventListener('click', () => {
    NextStoryLineButton.classList.remove('Animation-Move-Left');
    void NextStoryLineButton.offsetWidth;
    NextStoryLineButton.classList.add('Animation-Clicked-FadeOut');

    NextStoryLineButton.addEventListener('animationend', () => {
        NextStoryLineButton.style.display = "none";


        StoryLineNumberSelected++;
        localStorage.setItem("LineStorySavee", StoryLineNumberSelected);
        StoryLineSkipChoices();

        MainDialoguePanel.classList.remove('Fadein1sec');
        void MainDialoguePanel.offsetWidth;
        MainDialoguePanel.classList.add('Fadein1sec');

        DisplayStoryLine();

    }, { once: true });

});

//setup choices function that will be called when the StoryLineNumberSelected matches a choice line. It will set the choices text and trigger the animations for the choices panel and buttons for it. You're dying foret//

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
    localStorage.setItem("ChoiceFinalMadeSaved", ChoiceFinalMadeSave);
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
            localStorage.setItem("LineStorySavee", StoryLineNumberSelected);
        DisplayStoryLine();
    } else if (ChoiceFinalMade == "1A") {
        console.log("Choice 1A was selected.");
        StoryLineChoicesPanel.classList.remove('Fadeout2A');
        void StoryLineChoicesPanel.offsetWidth;
        StoryLineChoicesPanel.classList.add('Fadeout2A');
        setTimeout(() => {
            StoryLineChoicesPanel.style.display = "none";
        }, 1200);
        StoryLineNumberSelected = 16;
            localStorage.setItem("LineStorySavee", StoryLineNumberSelected);
        DisplayStoryLine();
    } else if (ChoiceFinalMade == "2A") {
        console.log("Choice 2A was selected.");
        StoryLineChoicesPanel.classList.remove('Fadeout2A');
        void StoryLineChoicesPanel.offsetWidth;
        StoryLineChoicesPanel.classList.add('Fadeout2A');
        setTimeout(() => {
            StoryLineChoicesPanel.style.display = "none";
        }, 1200);
        StoryLineNumberSelected = 42;
            localStorage.setItem("LineStorySavee", StoryLineNumberSelected);
        DisplayStoryLine();
    } else if (ChoiceFinalMade == "3A") {
        console.log("Choice 3A was selected.");
        StoryLineChoicesPanel.classList.remove('Fadeout2A');
        void StoryLineChoicesPanel.offsetWidth;
        StoryLineChoicesPanel.classList.add('Fadeout2A');
        setTimeout(() => {
            StoryLineChoicesPanel.style.display = "none";
        }, 1200);
        StoryLineNumberSelected = 64;
            localStorage.setItem("LineStorySavee", StoryLineNumberSelected);
        DisplayStoryLine();
    }
})


StoryLineChoice2.addEventListener('click', () => {
    ChoiceFinalMade = StoryChoiceLetterSelected + "B";
    localStorage.setItem("ChoiceFinalMadeSaved", ChoiceFinalMadeSave);
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
            localStorage.setItem("LineStorySavee", StoryLineNumberSelected);
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
            localStorage.setItem("LineStorySavee", StoryLineNumberSelected);
        DisplayStoryLine();
    } else if (ChoiceFinalMade == "2B") {
        console.log("Choice 2B was selected.");
        StoryLineChoicesPanel.classList.remove('Fadeout2A');
        void StoryLineChoicesPanel.offsetWidth;
        StoryLineChoicesPanel.classList.add('Fadeout2A');
        setTimeout(() => {
            StoryLineChoicesPanel.style.display = "none";
        }, 1200);
        StoryLineNumberSelected = 46;
            localStorage.setItem("LineStorySavee", StoryLineNumberSelected);
        DisplayStoryLine();
    } else if (ChoiceFinalMade == "3B") {
        console.log("Choice 3B was selected.");
        StoryLineChoicesPanel.classList.remove('Fadeout2A');
        void StoryLineChoicesPanel.offsetWidth;
        StoryLineChoicesPanel.classList.add('Fadeout2A');
        setTimeout(() => {
            StoryLineChoicesPanel.style.display = "none";
        }, 1200);
        StoryLineNumberSelected = 68;
            localStorage.setItem("LineStorySavee", StoryLineNumberSelected);
        DisplayStoryLine();
    }
})

function StoryLineSkipChoices() {
    if (ChoiceFinalMade == "0A") {
        if (StoryLineNumberSelected == 4) {
            StoryLineNumberSelected = 6;
            localStorage.setItem("LineStorySavee", StoryLineNumberSelected);
            ChoiceFinalMade = "none";
        }
    } else if (ChoiceFinalMade == "1A") {
        if (StoryLineNumberSelected == 19) {
            StoryLineNumberSelected = 22;
            localStorage.setItem("LineStorySavee", StoryLineNumberSelected);
            ChoiceFinalMade = "none";
        }
    } else if (ChoiceFinalMade == "2A") {
        if (StoryLineNumberSelected == 45) {
            StoryLineNumberSelected = 45;
            localStorage.setItem("LineStorySavee", StoryLineNumberSelected);
            ChoiceFinalMade = "none";
        }
    }  else if (ChoiceFinalMade == "3A") {
        if (StoryLineNumberSelected == 62) {
            StoryLineNumberSelected = 66;
            localStorage.setItem("LineStorySavee", StoryLineNumberSelected);
            ChoiceFinalMade = "none";
        }
    }
}

// Story Saving Section yan ah//

let NotificationTimeout = null;

const MainNotificationMenu = document.getElementById("MainNotificationMenu");
const MainNotificationText =  document.getElementById("MainNotificationText");
const MainNotificationText1 =  document.getElementById("MainNotificationText1");
const LoadingLineAnimationNotification = document.getElementById("LoadingLineAnimationNotification");

var SoundEffectBoom1 = document.getElementById("SoundEffectBoom1");
const ChapterDisplayNextWindow = document.getElementById("ChapterDisplayNextWindow");
const ChapterDisplayText = document.getElementById("ChapterDisplayText");

function StorySavingSession() {
    if (StoryLineNumberSelected === 0) {
        ChapterNextWindow();
        
        setTimeout(() => {
            ChapterDisplayText.innerHTML = "Chapter 1 | The Sleepover";
        }, 3600);

        setTimeout(() => {
            clearTimeout(NotificationTimeout);
            MainNotificationMenu.style.display = "block";
            MainNotificationMenu.classList.remove('Notification-Animation1');
            MainNotificationMenu.classList.remove('Notification-Animation');
            void MainNotificationMenu.offsetWidth;
            MainNotificationMenu.classList.add('Notification-Animation');

            ChapterDisplayText.textContent = "Chapter 1 | The Sleepover";

            NotificationTimeout = setTimeout(() => {
                MainNotificationMenu.style.display = "none";
            }, 6000);
    
            LoadingLineAnimationNotification.classList.remove('Notification-Loading-Line-Animation');
            void LoadingLineAnimationNotification.offsetWidth;
            LoadingLineAnimationNotification.classList.add('Notification-Loading-Line-Animation');
    
            MainNotificationText.innerHTML = "New Journey!";
            MainNotificationText1.innerHTML = "You've started Unspoken game.";
        
            Chapter1FinishedSave = "True";
            localStorage.setItem("Chapter1FinishedSaved", Chapter1FinishedSave);
            console.log("GAME SAVED NOTIFICATION: CHAPTER 1");
        }, 10500);
    } if (StoryLineNumberSelected === 10) {
        ChapterNextWindow();

        setTimeout(() => {
            ChapterDisplayText.innerHTML = "Chapter 2 | Into the Forest";
        }, 3600);

        setTimeout(() => {
            clearTimeout(NotificationTimeout);
            MainNotificationMenu.style.display = "block";
            MainNotificationMenu.classList.remove('Notification-Animation1');
            MainNotificationMenu.classList.remove('Notification-Animation');
            void MainNotificationMenu.offsetWidth;
            MainNotificationMenu.classList.add('Notification-Animation');

            ChapterDisplayText.textContent = "Chapter 2 | Into the Forest";

            NotificationTimeout = setTimeout(() => {
                ChapterDisplayText.textContent = "Chapter 2 | Into the Forest";
            }, 3700);
    
            NotificationTimeout = setTimeout(() => {
                MainNotificationMenu.style.display = "none";
            }, 6000);
    
            LoadingLineAnimationNotification.classList.remove('Notification-Loading-Line-Animation');
            void LoadingLineAnimationNotification.offsetWidth;
            LoadingLineAnimationNotification.classList.add('Notification-Loading-Line-Animation');
    
            MainNotificationText.innerHTML = "Chapter 1 Finished";
            MainNotificationText1.innerHTML = "Congratulations! You have finished the Chapter 1. Your chapters has been saved at Loads.";
        
            Chapter2FinishedSave = "True";
            localStorage.setItem("Chapter2FinishedSaved", Chapter2FinishedSave);
            console.log("GAME SAVED NOTIFICATION: CHAPTER 1");
        }, 10500);
    }   else if (StoryLineNumberSelected === 31) {
        ChapterNextWindow();

        setTimeout(() => {
            ChapterDisplayText.innerHTML = "Chapter 3 | Into the Forest";
        }, 3600);
        
        setTimeout(() => {
            clearTimeout(NotificationTimeout);
            MainNotificationMenu.style.display = "block";
            MainNotificationMenu.classList.remove('Notification-Animation1');
            MainNotificationMenu.classList.remove('Notification-Animation');
            void MainNotificationMenu.offsetWidth;
            MainNotificationMenu.classList.add('Notification-Animation');

            ChapterDisplayText.textContent = "Chapter 3 | Into the Forest";

            setTimeout(() => {
                ChapterDisplayText.textContent = "Chapter 3 | Into the Forest";
            }, 3700);

            NotificationTimeout = setTimeout(() => {
                MainNotificationMenu.style.display = "none";
            }, 6000);

            LoadingLineAnimationNotification.classList.remove('Notification-Loading-Line-Animation');
            void LoadingLineAnimationNotification.offsetWidth;
            LoadingLineAnimationNotification.classList.add('Notification-Loading-Line-Animation');

            MainNotificationText.innerHTML = "Chapter 2 Finished";
            MainNotificationText1.innerHTML = "Congratulations! You have finished the Chapter 2. Your chapters has been saved at Loads.";
            Chapter3FinishedSave = "True";
            localStorage.setItem("Chapter3FinishedSaved", Chapter3FinishedSave);
            console.log("GAME SAVED NOTIFICATION: CHAPTER 2");
        }, 10500);
    } else if (StoryLineNumberSelected === 54) {
        ChapterNextWindow();

        setTimeout(() => {
            ChapterDisplayText.innerHTML = "Chapter 4 | The Haunted House";
        }, 3600);
        
        setTimeout(() => {
            clearTimeout(NotificationTimeout);
            MainNotificationMenu.style.display = "block";
            MainNotificationMenu.classList.remove('Notification-Animation1');
            MainNotificationMenu.classList.remove('Notification-Animation');
            void MainNotificationMenu.offsetWidth;
            MainNotificationMenu.classList.add('Notification-Animation');
    
            NotificationTimeout = setTimeout(() => {
                MainNotificationMenu.style.display = "none";
            }, 6000);
    
            LoadingLineAnimationNotification.classList.remove('Notification-Loading-Line-Animation');
            void LoadingLineAnimationNotification.offsetWidth;
            LoadingLineAnimationNotification.classList.add('Notification-Loading-Line-Animation');
    
            MainNotificationText.innerHTML = "Chapter 3 Finished";
            MainNotificationText1.innerHTML = "Congratulations! You have finished the Chapter 3. Your chapters has been saved at Loads.";
            Chapter4FinishedSave = "True";
            localStorage.setItem("Chapter4FinishedSaved", Chapter4FinishedSave);
            console.log("GAME SAVED NOTIFICATION: CHAPTER 3");
        }, 10500);
    } 
}


function ChapterNextWindow() {
    ChapterDisplayNextWindow.style.display = "block";
    ChapterDisplayText.style.display = "block";
    ChapterDisplayText.style.opacity = "0";
    ChapterDisplayNextWindow.classList.remove('Fadeout2A');
    void ChapterDisplayNextWindow.offsetWidth;
    
    ChapterDisplayText.classList.remove('DisplayNextChapterAnims1');
    void ChapterDisplayText.offsetWidth;
    ChapterDisplayText.classList.add('DisplayNextChapterAnims1');

    setTimeout(() => {
        SoundEffectBoom1.play();
    }, 2000);

    setTimeout(() => {
        ChapterDisplayText.classList.remove('DisplayNextChapterAnims1');
        void ChapterDisplayText.offsetWidth;
        ChapterDisplayNextWindow.classList.add('Fadeout2A');
    }, 9000);


    setTimeout(() => {
        ChapterDisplayNextWindow.style.display = "none";
        ChapterDisplayText.style.display = "none";
    }, 10000);
}

// pinish na, ayan lang pu💕 onti lang no //