/// <reference path="../surveyjs/survey-core/survey.core.d.ts" />
/// <reference path="../common.js" />

const STORAGE_ITEM_KEY = "big5-survey-v1";
const ELEMENTS_PER_PAGE = 10;
const CHARACTER_NAME = "Your Character";

function getIntroPage(){
    return {
        title: "Welcome to the BIG 5 Questionnaire",
        description: "This questionnaire is a personality test based on the NEO-PI model. It consists of 50 questions and should take about 10 minutes to complete.",
        questions: [
            {
                type: "html",
                html: "<p><b>No data is sent to the server, everything stays in your browser.</b><br /> Click 'Next' to begin the questionnaire.</p>"
            }
        ]
    };
}

function surveyComplete (survey)
{
    const userId = "";
    survey.setValue("userId", userId);
    console.log(survey);

    var scores = {
        "O" : 0,
        "C" : 0,
        "E" : 0,
        "A" : 0,
        "N" : 0    
    }

    // Skipped questions need a 0
    let data = survey.data;
    for (let key in data) {
        if (data[key] === undefined) data[key] = 0;
    }

    for (const valueKey in survey.valuesHash) 
    {
        for (const scoreKey in scores)
        {
            if (valueKey.indexOf(scoreKey) != -1)
            {
                score = parseInt(survey.valuesHash[valueKey], 10);
                scores[scoreKey] += score;
            }
        }
    }

    var chatGptTextarea = document.getElementById("chatgpt-prompt");
    var promptText = chatGptTextarea.textContent;
    promptText = promptText.replace("{{o-score}}", describeBar(scores["O"]));
    promptText = promptText.replace("{{c-score}}", describeBar(scores["C"]));
    promptText = promptText.replace("{{e-score}}", describeBar(scores["E"]));
    promptText = promptText.replace("{{a-score}}", describeBar(scores["A"]));
    promptText = promptText.replace("{{n-score}}", describeBar(scores["N"]));
    chatGptTextarea.textContent = promptText;

    var finishedDiv = document.getElementById("finished");
    finishedDiv.style.display = "inline-block";
    document.getElementById("finished").remove();

    var html = finishedDiv.outerHTML;
    html = html.replace("{{o-score}}", scores["O"]); 
    html = html.replace("{{c-score}}", scores["C"]); 
    html = html.replace("{{e-score}}", scores["E"]); 
    html = html.replace("{{a-score}}", scores["A"]); 
    html = html.replace("{{n-score}}", scores["N"]); 

    html = html.replace("{{o-style}}", "background-color:rgb(20 149 20 / "+scores["O"] *2+"%);"); 
    html = html.replace("{{c-style}}", "background-color:rgb(20 149 20 / "+scores["C"] *2+"%);"); 
    html = html.replace("{{e-style}}", "background-color:rgb(20 149 20 / "+scores["E"] *2+"%);"); 
    html = html.replace("{{a-style}}", "background-color:rgb(20 149 20 / "+scores["A"] *2+"%);"); 
    html = html.replace("{{n-style}}", "background-color:rgb(20 149 20 / "+scores["N"] *2+"%);");

    html = html.replace("{{character-card}}", renderCharacterCard(scores));

    survey.completedHtml = html;
}

function renderCharacterCard(scores) {
    const traits = [
        { key: 'O', label: 'Openness' },
        { key: 'C', label: 'Conscientiousness' },
        { key: 'E', label: 'Extraversion' },
        { key: 'A', label: 'Agreeableness' },
        { key: 'N', label: 'Neuroticism' }
    ];

    const barsHtml = traits.map(({ key, label }) => {
        const score = scores[key];
        const pct = Math.round((score / 50) * 100);
        const colourClass = score > 25 ? 'bar-green' : 'bar-red';
        return `<div class="stat-row">
                <span class="stat-label">${label}</span>
                <div class="stat-bar-track">
                    <div class="stat-bar-fill ${colourClass}" style="width:${pct}%"></div>
                </div>
                <span class="stat-value">${score}/50</span>
            </div>`;
    }).join('');

    return `<div class="character-card">
        <div class="card-inner">
            <div class="card-name">${CHARACTER_NAME}</div>
            <div class="card-subtitle">OCEAN Personality Profile</div>
            <hr class="card-divider">
            <div class="card-stats">
                ${barsHtml}
            </div>
        </div>
    </div>
    <button class="card-download-btn" onclick="downloadCardAsPng()">Download as PNG</button>`;
}

function downloadCardAsPng() {
    const card = document.querySelector('.character-card');
    html2canvas(card, { backgroundColor: null, scale: 2 }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'ocean-profile.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}

function describeBar(score) {
    const colour = score > 25 ? "GREEN" : "RED";
    const pct = Math.round((score / 50) * 100);
    let fill;
    if (pct >= 90) fill = "nearly full";
    else if (pct >= 70) fill = "about three-quarters full";
    else if (pct >= 45) fill = "about half full";
    else if (pct >= 20) fill = "about one-quarter full";
    else fill = "barely filled";
    return `${score}/50 — ${colour} bar, ${fill}`;
}

document.addEventListener("DOMContentLoaded", async function() {
    var surveyJson = await loadJson('./questions.json');
    const pages = addPagesForSurvey(surveyJson, getIntroPage(), ELEMENTS_PER_PAGE);

    let survey = new Survey.Model({pages});
    survey.title = "BIG 5";
    survey.description = "Personality test (NEO-PI)";
    survey.showQuestionNumbers =  true;
    survey.showProgressBar =  "aboveHeader";
    survey.progressBarType =  "pages";
    survey.progressBarShowPageNumbers =  true;
    survey.progressBarShowPageTitles =  true;
    survey.focusFirstQuestionAutomatic = true;

    survey.onComplete.add(surveyComplete);
    survey.onValueChanged.add(survey => saveSurveyData(survey, STORAGE_ITEM_KEY));
    survey.onCurrentPageChanged.add(survey => saveSurveyData(survey, STORAGE_ITEM_KEY));

    restoreSurveyData(survey, STORAGE_ITEM_KEY);
    console.log("loaded");
    survey.render(document.getElementById("surveyElement"));
});
