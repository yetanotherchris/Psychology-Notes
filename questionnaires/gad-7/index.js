/// <reference path="../surveyjs/survey-core/survey.core.d.ts" />
/// <reference path="../surveyjs/survey-core/survey.core.d.ts" />
/// <reference path="../common.js" />

const STORAGE_ITEM_KEY = "gad-7-survey-v1";
const ELEMENTS_PER_PAGE = 7;

function getIntroPage(){
    return {
        title: "Welcome to the GAD-7 Questionnaire",
        description: "The Generalized Anxiety Disorder 7-item scale (GAD-7) is used to measure the severity of generalized anxiety disorder. It consists of 7 questions and should take about 2-3 minutes to complete.\n\nPlease answer each question honestly based on how you have been feeling over the last two weeks.",
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
        if (key !== "functional_impairment" && key !== "userId")
        {
            var score = parseInt(survey.valuesHash[key], 10);

            if (score >= 0)
            {
                totalScore += score;
            }
        }
    }

    let severity = "";
    if (totalScore <= 4) {
        severity = "minimal anxiety";
    } else if (totalScore <= 9) {
        severity = "mild anxiety";
    } else if (totalScore <= 14) {
        severity = "moderate anxiety";
    } else {
        severity = "severe anxiety";
    }

    var finishedDiv = document.getElementById("finished");
    finishedDiv.style.display = "inline-block";
    document.getElementById("finished").remove();

    var html = finishedDiv.outerHTML;
    html = html.replace("{{totalScore}}", totalScore);
    html = html.replace("{{severity}}", severity);
    survey.completedHtml = html;
}

document.addEventListener("DOMContentLoaded", async function() {

    var surveyJson = await loadJson('./questions.json');
    const pages = addPagesForSurvey(surveyJson, getIntroPage(), ELEMENTS_PER_PAGE);

    let survey = new Survey.Model({pages});
    survey.title = "GAD-7 Questionnaire";
    survey.description = "Generalized Anxiety Disorder 7-item Scale";
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
        if (question.name !== "functional_impairment") {
            question.choices = surveyJson.likertChoices;
        }
    });

    restoreSurveyData(survey, STORAGE_ITEM_KEY);
    console.log("loaded");
    survey.render(document.getElementById("surveyElement"));
});
