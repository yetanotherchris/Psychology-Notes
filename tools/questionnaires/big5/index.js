/// <reference path="../surveyjs/survey-core/survey.core.d.ts" />
/// <reference path="../common.js" />

const STORAGE_ITEM_KEY = "big5-survey-v1";
const ELEMENTS_PER_PAGE = 10;
const CHARACTER_NAME = "Your name";

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

/**
 * Build an HTML string for a single stat bar.
 * @param {string} label   – Trait name, e.g. "Openness"
 * @param {number} score   – 0-50
 * @returns {string} HTML
 */
function renderStatBar(label, score) {
    const pct = Math.round((score / 50) * 100);
    const colourClass = score > 25 ? "cc-bar-green" : "cc-bar-low";
    // 10 tick marks
    const ticks = '<span></span>'.repeat(10);

    return `
        <div class="cc-stat">
            <div class="cc-stat-header">
                <span class="cc-stat-label">${label}</span>
                <span class="cc-stat-value">${score} / 50</span>
            </div>
            <div class="${colourClass}">
                <div class="cc-bar-track">
                    <div class="cc-bar-ticks">${ticks}</div>
                    <div class="cc-bar-fill" style="width:${pct}%"></div>
                </div>
            </div>
        </div>`;
}

/**
 * Render the full RPG character card.
 * @param {{O:number, C:number, E:number, A:number, N:number}} scores
 * @returns {string} HTML
 */
function renderCharacterCard(scores) {
    const traits = [
        { label: "Openness",          key: "O" },
        { label: "Conscientiousness", key: "C" },
        { label: "Extraversion",      key: "E" },
        { label: "Agreeableness",     key: "A" },
        { label: "Neuroticism",       key: "N" }
    ];

    const bars = traits.map(t => renderStatBar(t.label, scores[t.key])).join("");

    return `
        <div class="cc-name-row">
            <label for="cc-name-input">Your name</label>
            <input id="cc-name-input" type="text" maxlength="40" placeholder="Your name" oninput="updateCardName(this.value)">
        </div>
        <div class="cc-frame" id="cc-card">
            <div class="cc-nail cc-nail-tl"></div>
            <div class="cc-nail cc-nail-tr"></div>
            <div class="cc-nail cc-nail-bl"></div>
            <div class="cc-nail cc-nail-br"></div>
            <div class="cc-parchment">
                <div class="cc-content">
                    <div class="cc-divider">\u2B25 \u2B25 \u2B25</div>
                    <h1 class="cc-name">${CHARACTER_NAME}</h1>
                    <p class="cc-subtitle">Adventurer</p>
                    <div class="cc-section-title">Personality Traits</div>
                    ${bars}
                    <div class="cc-flourish">\u2E3B \u2726 \u2E3B</div>
                </div>
            </div>
        </div>
        <br>
        <button class="cc-download-btn" onclick="downloadCard()">Download as PNG</button>`;
}

/**
 * Use html2canvas to rasterise the card and trigger a download.
 */
function updateCardName(value) {
    var nameEl = document.querySelector('.cc-name');
    if (nameEl) nameEl.textContent = value || CHARACTER_NAME;
}

function downloadCard() {
    var card = document.getElementById("cc-card");
    if (!card) return;

    html2canvas(card, {
        scale: 2,
        useCORS: true,
        backgroundColor: null
    }).then(function(canvas) {
        var link = document.createElement("a");
        link.download = "ocean-character-card.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}

function surveyComplete(survey)
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
    };

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

    // Populate the image-generator prompt textarea
    var chatGptTextarea = document.getElementById("chatgpt-prompt");
    var promptText = chatGptTextarea.textContent;
    promptText = promptText.replace("{{o-score}}", describeBar(scores["O"]));
    promptText = promptText.replace("{{c-score}}", describeBar(scores["C"]));
    promptText = promptText.replace("{{e-score}}", describeBar(scores["E"]));
    promptText = promptText.replace("{{a-score}}", describeBar(scores["A"]));
    promptText = promptText.replace("{{n-score}}", describeBar(scores["N"]));
    chatGptTextarea.textContent = promptText;

    // Build the finished panel HTML
    var finishedDiv = document.getElementById("finished");
    finishedDiv.style.display = "block";
    document.getElementById("finished").remove();

    var html = finishedDiv.outerHTML;

    // Inject the character card
    html = html.replace("{{character-card}}", renderCharacterCard(scores));

    survey.completedHtml = html;
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
    return `${score}/50 - ${colour} bar, ${fill}`;
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
