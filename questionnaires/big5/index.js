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

const STORAGE_ITEM_KEY = "big5-survey-v1";

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

    for (let i = 0; i < survey.elements.length; i += elementsPerPage) {
        pages.push({
            name: `Page ${i / elementsPerPage + 1}`,
            elements: survey.elements.slice(i, i + elementsPerPage)
        });
    }

    return pages;
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

    var scores = {
        "O" : 0,
        "C" : 0,
        "E" : 0,
        "A" : 0,
        "N" : 0    
    }

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

    var finishedDiv = document.getElementById("finished");
    finishedDiv.style.display = "inline-block";
    document.getElementById("finished").remove();

    var html = finishedDiv.outerHTML;
    html = html.replace("{{o-score}}", scores["O"]); 
    html = html.replace("{{c-score}}", scores["C"]); 
    html = html.replace("{{e-score}}", scores["E"]); 
    html = html.replace("{{a-score}}", scores["A"]); 
    html = html.replace("{{n-score}}", scores["N"]); 

    html = html.replace("{{o-style}}", "background-color:rgb(20, 149, 20, 0."+scores["O"] *2+");"); 
    html = html.replace("{{c-style}}", "background-color:rgb(20, 149, 20, 0."+scores["C"] *2+");"); 
    html = html.replace("{{e-style}}", "background-color:rgb(20, 149, 20, 0."+scores["E"] *2+");"); 
    html = html.replace("{{a-style}}", "background-color:rgb(20, 149, 20, 0."+scores["A"] *2+");"); 
    html = html.replace("{{n-style}}", "background-color:rgb(20, 149, 20, 0."+scores["N"] *2+");"); 

    survey.completedHtml = html;
}

document.addEventListener("DOMContentLoaded", async function() {
    var surveyJson = await loadJson('./questions.json');
    const pages = addPagesForSurvey(surveyJson);

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
    survey.onValueChanged.add(saveSurveyData);
    survey.onCurrentPageChanged.add(saveSurveyData)

    restoreSurveyData(survey);
    console.log("loaded");
    survey.render(document.getElementById("surveyElement"));
});
