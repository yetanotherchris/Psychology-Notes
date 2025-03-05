/// <reference path="surveyjs/survey-core/survey.core.d.ts" />

async function loadJson(filename)
{
    // The questionnaire is stored as JSON instead of JS so it
    // can be re-used in other programming languages.
    try {
        const response = await fetch(filename);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; 
    }
}

const STORAGE_ITEM_KEY = "fq-survey-v1";

function saveSurveyData (survey)
{
    const data = survey.data;
    data.pageNo = survey.currentPageNo;
    window.localStorage.setItem(STORAGE_ITEM_KEY, JSON.stringify(data));
}

function restoreSurveyData (survey)
{
    const prevData = window.localStorage.getItem(STORAGE_ITEM_KEY) || null;
    if (prevData) {
        const data = JSON.parse(prevData);
        survey.data = data;
        if (data.pageNo) {
            survey.currentPageNo = data.pageNo;
        }
    }
}

function addPagesForSurvey(survey) {
    const elementsPerPage = 7;
    const pages = [];

    for (let i = 0; i < survey.elements.length; i += elementsPerPage) {
        pages.push({
            name: `Page ${i / elementsPerPage + 1}`,
            elements: survey.elements.slice(i, i + elementsPerPage)
        });
    }

    return pages;
}

function surveyComplete (survey)
{
    // Notes about the scoring:
    //
    // - The original PDF has 0 for some answers, and multiple answers with 0.
    //  - Because radioboxes in HTML can't have the same value, these are stored as -1, -2 etc. in the JSON.
    // - The original PDF has multiple "5" answers for some questions.#
    //  - Because radioboxes in HTML can't have the same value, these are stored as 6 or 7.
    //  - The value is capped at 5 in the code below. 

    const userId = "";
    survey.setValue("userId", userId);
    console.log(survey);

    let totalScore = 0;

    for (const key in survey.valuesHash) 
    {
        var score = 0;

        if (survey.valuesHash[key].length > 0)
        {
            // rankings have an array of values
            survey.valuesHash[key].forEach(element => {
                score += parseInt(element, 10);
            });
        }
        else
        {
            score = parseInt(survey.valuesHash[key], 10);

            // radiogroup work around for multiple "5" values - anything above 5 is the same as 5
            if (score > 5)
                score = 5;
        }

        // Ignore any score lower than 0 (e.g. minus scores)
        if (score > 0)
        {
            totalScore += score;   
        }
    }

    survey.completedHtml = `<h3>Your score was ${totalScore}</h3>`;
    survey.completedHtml += "<b>Mean scores:</b>";
    survey.completedHtml += "<div>";
    survey.completedHtml += "<li>Neuro-diverse: 59.8 (Female), 53.2 (Male)</li>";
    survey.completedHtml += "<li>Neuro-typical: 90.0 (Female), 70.3 (Male)</li>";
    survey.completedHtml += "<li>Standard deviation is 18/24 and 15.7/16.1 respectively.</li>";
    survey.completedHtml += "</div>";

}

document.addEventListener("DOMContentLoaded", async function() {
    var surveyJson = await loadJson('./questions.json');
    const pages = addPagesForSurvey(surveyJson);

    let survey = new Survey.Model({pages});
    survey.title = "Friendship Questionnaire";
    survey.description = "For educational purposes only.";
    survey.showQuestionNumbers =  true;
    survey.showProgressBar =  "aboveHeader";
    survey.progressBarType =  "pages";
    survey.progressBarShowPageNumbers =  true;
    survey.progressBarShowPageTitles =  true;
    survey.focusFirstQuestionAutomatic = true;

    survey.onComplete.add(surveyComplete);
    survey.onValueChanged.add(saveSurveyData);
    survey.onCurrentPageChanged.add(saveSurveyData)

    restoreSurveyData(survey);
    console.log("loaded");
    survey.render(document.getElementById("surveyElement"));
});
