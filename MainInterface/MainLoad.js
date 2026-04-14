function OpenLoadMenu() {
    const MainIntroPanel1 = document.getElementById("MainIntroPanel1");
    const MainContainerofLoadUI = document.getElementById("MainContainerofLoadUI");
    const LoadGameH1A1 = document.getElementById("LoadGameH1A1");
    const LoadGameContainer = document.getElementById("LoadGameContainer");

    MainIntroPanel1.style.animation = 'Fadeout 0.5s ease both, ScaleUPAnimation 1s ease 0.1s both';
    MainContainerofLoadUI.style.display = "block";
    MainContainerofLoadUI.style.animation = "ScaleDownAnimation1 1s ease-out both 1s, Fadein 1s ease-out both 1s";

    LoadGameH1A1.style.animation = 'Fadein 1s ease 1.7s both, FadeInScaleAnimationIntroleft 1s ease 1.7s both';
    LoadGameContainer.style.animation = 'Fadein 1s ease 2s both, FadeInScaleAnimationIntroleft 1s ease 2s both';

}

function CloseLoadMenu() {
    const MainIntroPanel1 = document.getElementById("MainIntroPanel1");
    const MainContainerofLoadUI = document.getElementById("MainContainerofLoadUI");


    MainContainerofLoadUI.style.animation = 'Fadeout 0.5s ease both, ScaleUPAnimation 1s ease 0.1s both';
        setTimeout(() => {  
            MainContainerofLoadUI.style.display = "none";
            MainIntroPanel1.style.display = "block";
            MainIntroPanel1.style.animation = "ScaleDownAnimation1 1s ease both, Fadein 1s ease both";
        }, 700);
}