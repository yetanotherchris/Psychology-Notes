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

const STORAGE_ITEM_KEY = "pss-10-survey-v1";

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
    const elementsPerPage = 10;
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
        title: "Welcome to the PSS-10 Questionnaire",
        description: "This questionnaire is designed to measure the degree to which individuals perceive their lives as stressful. It consists of 10 questions and should take about 5 minutes to complete. Please answer each question honestly.",
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
    const pages = addPagesForSurvey(surveyJson);

    let survey = new Survey.Model({pages});
    survey.title = "PSS-10 Questionnaire";
    survey.description = "Perceived Stress Scale (PSS-10)";
    survey.showQuestionNumbers =  true;
    survey.showProgressBar =  "aboveHeader";
    survey.progressBarType =  "pages";
    survey.progressBarShowPageNumbers =  true;
    survey.progressBarShowPageTitles =  true;
    survey.focusFirstQuestionAutomatic = true;

    survey.onComplete.add(surveyComplete);
    survey.onValueChanged.add(saveSurveyData);
    survey.onCurrentPageChanged.add(saveSurveyData);

    survey.getAllQuestions().forEach(question => {
        if (question.reversedValues)
            question.choices = surveyJson.likertChoicesReversed;
        else
            question.choices = surveyJson.likertChoices;
    });

    restoreSurveyData(survey);
    console.log("loaded");
    survey.render(document.getElementById("surveyElement"));
});
