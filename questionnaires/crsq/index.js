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

const STORAGE_ITEM_KEY = "crsq-v1";

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
    const elementsPerPage = 8;
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
        title: "Welcome to the CSRQ Questionnaire",
        description: "This questionnaire is designed to assess how children respond to potential social rejection by measuring their tendency to anxiously or angrily expect, perceive, and overreact to it. Please answer each question honestly.",
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

class QuestionScore {
    constructor() {
        this.nervousness = 0;
        this.expectations = 0;
    }

    get total() {
        return this.nervousness * this.expectations;
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
    };

    for (const key in survey.valuesHash) 
    {
        var score = parseInt(survey.valuesHash[key], 10);
        var questionNo = key.substring(0,1);

        if (key.indexOf("nervousness") != -1)
        {
            scores[questionNo].nervousness = score;
        }
        else if (key.indexOf("expectations") != -1)
        {
            scores[questionNo].expectations = score;
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
    const pages = addPagesForSurvey(surveyJson);

    let survey = new Survey.Model({pages});
    survey.title = "CRSQ Questionnaire";
    survey.description = "Children's Rejection Sensitivity Questionnaire (CRSQ)";
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
