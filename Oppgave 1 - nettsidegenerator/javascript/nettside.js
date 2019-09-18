//HTML objekter
const mobilMain = document.getElementById("mobil-main");


//Bilder til siden
let mobileImages = ["huawei p20.jpg", "iphone5.jpg", "nokia.jpg", "samsung.jpg", "kampanje1.jpg", "kampanje2.jpg"];
//Array for overskriftene 
let mobileHeading = ["Iphone 8 64gb", "Nokia 8110 4g", "Nokia Galaxy 128gb", "Huawei p20", "KAMPANJE!!", "KAMPANJE!!"];
//Array for beskrivelse
let mobileDescription = ["Denne telefonen er ufattelig rask og stabil, samtidig som den har 12 MP kamera.", "Denne har en beskuttelsedeksel som du kan skyve for å ta imot samtaler!", "Denne har bedre skjerm og stor batterikapasitet.", "Denne har en 6.4 Oled skjerm med 6GB RAM + 128 GB lagringsplass.", "Denne telefonen kan bli din idag for kun 1999kr!", "Denne telefonen kan du få for kun 999kr!!"];

generateMobiles();


function generateMobiles() {
    let htmlTxt = "";
    let numberOfMobiles = mobileImages.length;

    for (let teller = 0; teller < numberOfMobiles; teller++) {
//HTML TEKST
        htmlTxt += `
<div id="main-page">
<article>
                <h3>${mobileHeading[teller]}</h3>
                <p>${mobileDescription[teller]}</p>
                <img id ="images" src="images/${mobileImages[teller]}">
<br>
                <input type="button" id="button" value="Les mer...">
</article>
</div>

`;
    }


    mobilMain.innerHTML = htmlTxt;


}
