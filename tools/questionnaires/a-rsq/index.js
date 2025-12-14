/// <reference path="../surveyjs/survey-core/survey.core.d.ts" />
/// <reference path="../common.js" />

const STORAGE_ITEM_KEY = "arsq-v1";
const ELEMENTS_PER_PAGE = 8;

function getIntroPage(){
    return {
        title: "Welcome to the Adult Rejection Sensitivity Questionnaire (A-RSQ)",
        description: "This questionnaire is designed to assess how adults respond to potential social rejection by measuring their. Please imagine yourself in each of the following situations and answer the two questions in each provided.",
        questions: [
            {
                type: "html",
                name: "info",
                html: "<p><b>No data is sent to the server, everything stays in your browser.</b><br /> Click 'Next' to begin the questionnaire.</p>"
            }
        ]
    };
}

class QuestionScore {
    constructor() {
        this.concern = 0;
        this.expectancy = 0;
    }

    get total() {
        return this.concern * (7 - this.expectancy);
    }
}

function surveyComplete (survey)
{
    const userId = "";
    survey.setValue("userId", userId);
    console.log(survey);

    var scores = {
        "1" : new QuestionScore(),
        "2" : new QuestionScore(),
        "3" : new QuestionScore(),
        "4" : new QuestionScore(),
        "5" : new QuestionScore(),
        "6" : new QuestionScore(),
        "7" : new QuestionScore(),
        "8" : new QuestionScore(),
        "9" : new QuestionScore(),   
    };

    for (const key in survey.valuesHash) 
    {
        var score = parseInt(survey.valuesHash[key], 10);
        var questionNo = key.substring(0,1);

        if (key.indexOf("concern") != -1)
        {
            scores[questionNo].concern = score;
        }
        else if (key.indexOf("expectancy") != -1)
        {
            scores[questionNo].expectancy = score;
        }
    }

    var finishedDiv = document.getElementById("finished");
    finishedDiv.style.display = "inline-block";
    document.getElementById("finished").remove();

    var totalScore = 0;
    var scoresKeys = Object.keys(scores);
    scoresKeys.map(key => {
        totalScore += scores[key].total;
    });
    totalScore = Math.round(totalScore / scoresKeys.length);

    var html = finishedDiv.outerHTML;
    html = html.replace("{{totalScore}}", totalScore);
    survey.completedHtml = html;
}

document.addEventListener("DOMContentLoaded", async function() { 
    var surveyJson = await loadJson('./questions.json');
    const pages = addPagesForSurvey(surveyJson, getIntroPage(), ELEMENTS_PER_PAGE);

    let survey = new Survey.Model({pages});
    survey.title = "A-RSQ Questionnaire";
    survey.description = "Adult Rejection Sensitivity Questionnaire (A-RSQ)";
    survey.showQuestionNumbers =  false;
    survey.showProgressBar =  "aboveHeader";
    survey.progressBarType =  "pages";
    survey.progressBarShowPageNumbers =  true;
    survey.progressBarShowPageTitles =  true;
    survey.focusFirstQuestionAutomatic = true;

    survey.onComplete.add(surveyComplete);
    survey.onValueChanged.add(survey => saveSurveyData(survey, STORAGE_ITEM_KEY));
    survey.onCurrentPageChanged.add(survey => saveSurveyData(survey, STORAGE_ITEM_KEY));

    survey.getAllQuestions().forEach(question => {
        if (question.name.indexOf("expectancy") != -1)
            question.choices = surveyJson.expectancyChoices;
        else
            question.choices = surveyJson.concernChoices;
    });

    restoreSurveyData(survey, STORAGE_ITEM_KEY);
    console.log("loaded");
    survey.render(document.getElementById("surveyElement"));
});
