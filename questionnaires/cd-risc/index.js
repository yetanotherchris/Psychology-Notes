/// <reference path="../surveyjs/survey-core/survey.core.d.ts" />
/// <reference path="../common.js" />

const STORAGE_ITEM_KEY = "cd-risc-survey-v1";
const ELEMENTS_PER_PAGE = 10;

function getIntroPage(){
    return {
        title: "Welcome to the CD-RISC Questionnaire",
        description: "This questionnaire is designed to measure your resilience. It consists of 25 questions and should take about 5 minutes to complete. Please answer each question honestly.",
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
        var score = parseInt(survey.valuesHash[key], 10);

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
    survey.title = "CD-RISC Questionnaire";
    survey.description = "Connor-Davidson Resilience Scale (CD-RISC)";
    survey.showQuestionNumbers =  true;
    survey.showProgressBar =  "aboveHeader";
    survey.progressBarType =  "pages";
    survey.progressBarShowPageNumbers =  true;
    survey.progressBarShowPageTitles =  true;
    survey.focusFirstQuestionAutomatic = true;

    survey.onComplete.add(surveyComplete);
    survey.onValueChanged.add(survey => saveSurveyData(survey, STORAGE_ITEM_KEY));
    survey.onCurrentPageChanged.add(survey => saveSurveyData(survey, STORAGE_ITEM_KEY));

    survey.getAllQuestions().forEach(question => {
        question.choices = surveyJson.likertChoices
    });

    restoreSurveyData(survey, STORAGE_ITEM_KEY);
    console.log("loaded");
    survey.render(document.getElementById("surveyElement"));
});
