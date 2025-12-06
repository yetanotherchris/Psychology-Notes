/// <reference path="../surveyjs/survey-core/survey.core.d.ts" />
/// <reference path="../common.js" />

const STORAGE_ITEM_KEY = "fq-survey-v1";
const ELEMENTS_PER_PAGE = 7;

function getIntroPage(){
    return {
        title: "Welcome to the Friendship Questionnaire",
        description: "This questionnaire measures friendship style and may be used as part of comprehensive assessment for Autism Spectrum conditions to measure your friendship style. It consists of 35 questions and should take about 10 minutes to complete. Please answer the questions as honestly as possible.",
        questions: [
            {
                type: "html",
                name: "info",
                html: "<p><b>No data is sent to the server, everything stays in your browser.</b><br /> Click 'Next' to begin the questionnaire.</p>"
            }
        ]
    };
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
    const pages = addPagesForSurvey(surveyJson, getIntroPage(), ELEMENTS_PER_PAGE);

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
    survey.onValueChanged.add(survey => saveSurveyData(survey, STORAGE_ITEM_KEY));
    survey.onCurrentPageChanged.add(survey => saveSurveyData(survey, STORAGE_ITEM_KEY));

    restoreSurveyData(survey, STORAGE_ITEM_KEY);
    console.log("loaded");
    survey.render(document.getElementById("surveyElement"));
});
