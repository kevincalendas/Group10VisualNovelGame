function OpenLoadMenu() {
    const MainIntroPanel1 = document.getElementById("MainIntroPanel1");
    const MainContainerofLoadUI = document.getElementById("MainContainerofLoadUI");

    MainIntroPanel1.style.animation = 'ScaleUPAnimation 0.5s ease-out forwards, Fadeout 0.5s ease-out forwards';
    MainContainerofLoadUI.style.display = "block";
    MainContainerofLoadUI.style.animation = "ScaleDownAnimation1 1s ease-out forwards 1s, Fadein 1s ease-out forwards 1.3s";

}

function CloseLoadMenu() {
    const MainIntroPanel1 = document.getElementById("MainIntroPanel1");
    const MainContainerofLoadUI = document.getElementById("MainContainerofLoadUI");


    MainContainerofLoadUI.style.animation = 'ScaleUPAnimation 0.5s ease-out forwards, Fadeout 0.5s ease-out forwards';
        setTimeout(() => {  
            MainContainerofLoadUI.style.display = "none";
            MainIntroPanel1.style.display = "block";
            MainIntroPanel1.style.animation = "ScaleDownAnimation1 1s ease forwards, Fadein 1s ease forwards";
        }, 700);
}