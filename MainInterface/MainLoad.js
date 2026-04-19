const MainIntroPanel1 = document.getElementById("MainIntroPanel1");
const MainContainerofLoadUI = document.getElementById("MainContainerofLoadUI");
const LoadGameH1A1 = document.getElementById("LoadGameH1A1");
const LoadGameContainer = document.getElementById("LoadGameContainer");

function OpenLoadMenu() {

    MainIntroPanel1.style.animation = 'Fadeout 0.5s ease both, ScaleUPAnimation 1s ease 0.1s both';
    MainContainerofLoadUI.style.display = "block";
    MainContainerofLoadUI.style.animation = "ScaleDownAnimation1 1s ease-out both 1s, Fadein 1s ease-out both 1s";

    LoadGameH1A1.style.animation = 'Fadein 1s ease 1.7s both, FadeInScaleAnimationIntroleft 1s ease 1.7s both';
    LoadGameContainer.style.animation = 'Fadein 1s ease 2s both, FadeInScaleAnimationIntroleft 1s ease 2s both';

}

function CloseLoadMenu() {


    MainContainerofLoadUI.style.animation = 'Fadeout 0.5s ease both, ScaleUPAnimation 1s ease 0.1s both';
        setTimeout(() => {  
            MainContainerofLoadUI.style.display = "none";
            MainIntroPanel1.style.display = "block";
            MainIntroPanel1.style.animation = "ScaleDownAnimation1 1s ease both, Fadein 1s ease both";
        }, 700);
}

/* FOR ACHIEVEMENTS */

function OpenAchievements() {
    CheckingAchievements();
    const AchievementsDesignMain = document.getElementById("Achievements-UI-Design-Main");
    const AchievementsDesignSub = document.getElementById("Achievements-UI-Design-Sub");
    const AchievementNum1Dis1 = document.getElementById("AchievementNum1Dis1")
    const AchievementNum1Dis2 = document.getElementById("AchievementNum1Dis2")
    const AchievementNum1Dis3 = document.getElementById("AchievementNum1Dis3")
    const AchievementNum1Dis4 = document.getElementById("AchievementNum1Dis4")

    AchievementNum1Dis1.style.opacity = "0";
    AchievementNum1Dis2.style.opacity = "0";
    AchievementNum1Dis3.style.opacity = "0";
    AchievementNum1Dis4.style.opacity = "0";

    AchievementsDesignMain.classList.remove("Fadeout2A");
    AchievementsDesignSub.classList.remove("Fadeout2A");
    AchievementNum1Dis1.classList.remove("Fadeout2A");
    AchievementNum1Dis2.classList.remove("Fadeout2A");
    AchievementNum1Dis3.classList.remove("Fadeout2A");
    AchievementNum1Dis4.classList.remove("Fadeout2A");

    void AchievementsDesignMain.offsetWidth;
    void AchievementsDesignSub.offsetWidth;
    void AchievementNum1Dis1.offsetWidth;
    void AchievementNum1Dis2.offsetWidth;
    void AchievementNum1Dis3.offsetWidth;
    void AchievementNum1Dis4.offsetWidth;
    
    AchievementsDesignMain.style.display = "block";
    AchievementsDesignMain.classList.add("Fadein1sec");
    AchievementsDesignSub.classList.add("ScaleUptoNormalAnim");

    setTimeout(() => {
        AchievementNum1Dis1.classList.add("ScaleUptoNormalAnim");
        setTimeout(() => {
            AchievementNum1Dis2.classList.add("ScaleUptoNormalAnim");
            setTimeout(() => {
                AchievementNum1Dis3.classList.add("ScaleUptoNormalAnim");
                setTimeout(() => {
                    AchievementNum1Dis4.classList.add("ScaleUptoNormalAnim");
                }, 50);
            }, 100);
        }, 150);
    }, 200);
}


function CloseAchievements() {
    const AchievementsDesignMain = document.getElementById("Achievements-UI-Design-Main");
    const AchievementsDesignSub = document.getElementById("Achievements-UI-Design-Sub");
    const AchievementNum1Dis1 = document.getElementById("AchievementNum1Dis1")
    const AchievementNum1Dis2 = document.getElementById("AchievementNum1Dis2")
    const AchievementNum1Dis3 = document.getElementById("AchievementNum1Dis3")
    const AchievementNum1Dis4 = document.getElementById("AchievementNum1Dis4")

    setTimeout(() => {
        AchievementNum1Dis4.classList.remove("ScaleUptoNormalAnim");
        void AchievementNum1Dis4.offsetWidth;
        AchievementNum1Dis4.classList.add("Fadeout2A");
        setTimeout(() => {
            AchievementNum1Dis3.classList.remove("ScaleUptoNormalAnim");
            void AchievementNum1Dis3.offsetWidth;
            AchievementNum1Dis3.classList.add("Fadeout2A");
            setTimeout(() => {
                AchievementNum1Dis2.classList.remove("ScaleUptoNormalAnim");
                void AchievementNum1Dis2.offsetWidth;
                AchievementNum1Dis2.classList.add("Fadeout2A");
                setTimeout(() => {
                    AchievementNum1Dis1.classList.remove("ScaleUptoNormalAnim");
                    void AchievementNum1Dis1.offsetWidth;
                    AchievementNum1Dis1.classList.add("Fadeout2A");

                    AchievementsDesignMain.classList.remove("Fadeout2A");
                    AchievementsDesignSub.classList.remove("ScaleUptoNormalAnim");

                    void AchievementsDesignMain.offsetWidth;
                    void AchievementsDesignSub.offsetWidth;

                    AchievementsDesignSub.classList.add("Fadeout2A");
                    AchievementsDesignMain.classList.add("Fadein1sec");
                    setTimeout(() => {
                        AchievementsDesignMain.style.display = "none";
                    }, 500);
                }, 100);
            }, 100);
        }, 100);
    }, 100);
}

function CheckingAchievements() {
    const PercentageofFinishedChap1 = document.getElementById("PercentageofFinishedChap1");
    const PercentageofFinishedChap2 = document.getElementById("PercentageofFinishedChap2");
    const PercentageofFinishedChap3 = document.getElementById("PercentageofFinishedChap3");
    const PercentageofFinishedChap4 = document.getElementById("PercentageofFinishedChap4");
    const PercentageofFinishedChap5 = document.getElementById("PercentageofFinishedChap5");
    const PercentageofFinishedGame = document.getElementById("PercentageofFinishedGame");
    
    if (Chapter1FinishedSave === "True") {
        PercentageofFinishedChap1.style.width = "100%";
        PercentageofFinishedChap1.style.backgroundColor = "rgb(13, 255, 0)";

        console.log("Chapter1 achievement are claimed due to user Data.")
    } else if (Chapter1FinishedSave === "False") {
        PercentageofFinishedChap1.style.width = "1%";
        PercentageofFinishedChap1.style.backgroundColor = "rgb(255, 255, 255)";

        console.log("Chapter2 achievement are not claimed due to user Data.")
    }

     if (Chapter2FinishedSave === "True") {
        PercentageofFinishedChap2.style.width = "100%";
        PercentageofFinishedChap2.style.backgroundColor = "rgb(13, 255, 0)";

        console.log("Chapter2 achievement are claimed due to user Data.")
    } else if (Chapter2FinishedSave === "False") {
        PercentageofFinishedChap2.style.width = "1%";
        PercentageofFinishedChap2.style.backgroundColor = "rgb(255, 255, 255)";
        
        console.log("Chapter2 achievement are not claimed due to user Data.")
    }

    if (Chapter3FinishedSave === "True") {
        PercentageofFinishedChap3.style.width = "100%";
        PercentageofFinishedChap3.style.backgroundColor = "rgb(13, 255, 0)";
        
        console.log("Chapter3 achievement are claimed due to user Data.")
    } else if (Chapter3FinishedSave === "False") {
        PercentageofFinishedChap3.style.width = "1%";
        PercentageofFinishedChap3.style.backgroundColor = "rgb(255, 255, 255)";

        console.log("Chapter3 achievement are not claimed due to user Data.")
    }

    if (Chapter4FinishedSave === "True") {
        PercentageofFinishedChap4.style.width = "100%";
        PercentageofFinishedChap4.style.backgroundColor = "rgb(13, 255, 0)";

        console.log("Chapter4 achievement are claimed due to user Data.")
    } else if (Chapter4FinishedSave === "False") {
        PercentageofFinishedChap4.style.width = "1%";
        PercentageofFinishedChap4.style.backgroundColor = "rgb(255, 255, 255)";

        console.log("Chapter4 achievement are not claimed due to user Data.")
    }

    if (Chapter5FinishedSave === "True") {
        PercentageofFinishedChap5.style.width = "100%";
        PercentageofFinishedChap5.style.backgroundColor = "rgb(13, 255, 0)";

        console.log("Chapter5 achievement are claimed due to user Data.")

        
    } else if (Chapter5FinishedSave === "False") {
        PercentageofFinishedChap5.style.width = "1%";
        PercentageofFinishedChap5.style.backgroundColor = "rgb(255, 255, 255)";

        console.log("Chapter5 achievement are not claimed due to user Data.")
    }

    if (FinishedGame === "True") {
        PercentageofFinishedGame.style.width = "100%";
        PercentageofFinishedGame.style.backgroundColor = "rgb(13, 255, 0)";

        console.log("Finished Game achievement are not claimed due to user Data.")
    } else if (FinishedGame === "False") {
        PercentageofFinishedGame.style.width = "1%";
        PercentageofFinishedGame.style.backgroundColor = "rgb(255, 255, 255)";

        console.log("Finished Game achievement are claimed due to user Data.")
    }
}

