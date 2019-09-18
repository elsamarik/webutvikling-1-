/*
    Brainstorming app
    idea-txt, add-idea-btn, ideas-ul
*/

(function treningsApplikasjon() {
    //    brainstorming app
    "use strict";
    const ideaTxt = document.getElementById("idea-txt");
    const addIdeaBtn = document.getElementById("add-idea-btn");
    const ideasUl = document.getElementById("ideas-ul");

    //treningsplan
    const planTxt = document.getElementById("plan-txt");
    const addPlanBtn = document.getElementById("add-plan-btn");
    const planUl = document.getElementById("plan-ul");


    addIdeaBtn.onclick = addIdea;
    addPlanBtn.onclick = addPlan;


    ideaTxt.focus();
    planTxt.focus();

    //brainstortming
    function addPlan() {
        let plan = planTxt.value;
        planUl.innerHTML += `
        <li>${plan}</li>
        `;
        planTxt.value = "";
        planTxt.focus();
    }

    //treningsplan
    function addIdea() {
        let idea = ideaTxt.value;
        ideasUl.innerHTML += `
            <li>${idea}</li>
        `;
        ideaTxt.value = "";
        ideaTxt.focus();
    }

    //bmi kalkulator
    window.onload = oppstart;

    function oppstart() {
        document.getElementById("btnBeregn").onclick = beregn;
    }

    function beregn() {
        var vekt = document.getElementById("txtVekt").value;
        var hoyde = document.getElementById("txtHoyde").value;

        var bmi = vekt / (hoyde * hoyde);

        document.getElementById("resultat").innerHTML = "Din BMI er: " + bmi;
    }

}())
