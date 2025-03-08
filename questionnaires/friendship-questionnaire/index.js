/// <reference path="../surveyjs/survey-core/survey.core.d.ts" />

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

    pages.push(addIntroPage());

    for (let i = 0; i < survey.elements.length; i += elementsPerPage) {
        pages.push({
            name: `Page ${i / elementsPerPage + 1}`,
            elements: survey.elements.slice(i, i + elementsPerPage)
        });
    }

    return pages;
}

function addIntroPage(){
    return {
        title: "Welcome to the Friendship Questionnaire",
        description: "This questionnaire is used in Autism Spectrum Diagnosis to measure your friendship style. It consists of 35 questions and should take about 10 minutes to complete. Please answer the questions as honestly as possible.",
        questions: [
            {
                type: "html",
                name: "info",
                html: "<p><b>No data is sent to the server, everything stays in your browser.</b><br /> Click 'Next' to begin the questionnaire.</p>"
            }
        ]
    };
}

function resetSurvey()
{
    window.localStorage.removeItem(STORAGE_ITEM_KEY);
    location.reload();
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

    var finishedDiv = document.getElementById("finished");
    finishedDiv.style.display = "inline-block";
    document.getElementById("finished").remove();

    var html = finishedDiv.outerHTML;
    html = html.replace("{{totalScore}}", totalScore);
    survey.completedHtml = html;
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
    survey.onCurrentPageChanged.add(saveSurveyData);

    restoreSurveyData(survey);
    console.log("loaded");
    survey.render(document.getElementById("surveyElement"));
});
