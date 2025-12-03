/// <reference path="../surveyjs/survey-core/survey.core.d.ts" />
/// <reference path="../surveyjs/survey-core/survey.core.d.ts" />
/// <reference path="../common.js" />

const STORAGE_ITEM_KEY = "gad-7-child-survey-v1";
const ELEMENTS_PER_PAGE = 10;

function getIntroPage(){
    return {
        title: "Severity Measure for Generalized Anxiety Disorder—Child Age 11-17",
        description: "The following is an adapted version of the GAD-7 questionnaire for children aged 11-17, by Craske, M., Wittchen, U., Bogels, S., Stein, M., Andrews, G., & Lebeu, R. (2013).\n\nResponses to each item should be based on the past 7 days.",
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
    const userId = "";
    survey.setValue("userId", userId);
    console.log(survey);

    let totalScore = 0;

    for (const key in survey.valuesHash)
    {
        if (key !== "userId")
        {
            var score = parseInt(survey.valuesHash[key], 10);

            if (score >= 0)
            {
                totalScore += score;
            }
        }
    }

    const averageScore = Math.round(totalScore / 10);

    let severity = "";
    if (averageScore === 0) {
        severity = "None";
    } else if (averageScore === 1) {
        severity = "Mild";
    } else if (averageScore === 2) {
        severity = "Moderate";
    } else if (averageScore === 3) {
        severity = "Severe";
    } else {
        severity = "Extreme";
    }

    var finishedDiv = document.getElementById("finished");
    finishedDiv.style.display = "inline-block";
    document.getElementById("finished").remove();

    var html = finishedDiv.outerHTML;
    html = html.replace("{{totalScore}}", totalScore);
    html = html.replace("{{averageScore}}", averageScore);
    html = html.replace("{{severity}}", severity);
    survey.completedHtml = html;
}

document.addEventListener("DOMContentLoaded", async function() {

    var surveyJson = await loadJson('./questions.json');
    const pages = addPagesForSurvey(surveyJson, getIntroPage(), ELEMENTS_PER_PAGE);

    let survey = new Survey.Model({pages});
    survey.title = "Severity Measure for Generalized Anxiety Disorder—Child Age 11-17";
    survey.description = "Child version (Ages 11-17)";
    survey.showQuestionNumbers = true;
    survey.showProgressBar = "aboveHeader";
    survey.progressBarType = "pages";
    survey.progressBarShowPageNumbers = true;
    survey.progressBarShowPageTitles = true;
    survey.focusFirstQuestionAutomatic = true;

    survey.onComplete.add(surveyComplete);
    survey.onValueChanged.add(survey => saveSurveyData(survey, STORAGE_ITEM_KEY));
    survey.onCurrentPageChanged.add(survey => saveSurveyData(survey, STORAGE_ITEM_KEY));

    survey.getAllQuestions().forEach(question => {
        question.choices = surveyJson.likertChoices;
    });

    restoreSurveyData(survey, STORAGE_ITEM_KEY);
    console.log("loaded");
    survey.render(document.getElementById("surveyElement"));
});
