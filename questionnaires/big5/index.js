/// <reference path="../surveyjs/survey-core/survey.core.d.ts" />
/// <reference path="../common.js" />

const STORAGE_ITEM_KEY = "big5-survey-v1";
const ELEMENTS_PER_PAGE = 10;

function getIntroPage(){
    return {
        title: "Welcome to the BIG 5 Questionnaire",
        description: "This questionnaire is a personality test based on the NEO-PI model. It consists of 50 questions and should take about 10 minutes to complete.",
        questions: [
            {
                type: "html",
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

    html = html.replace("{{o-style}}", "background-color:rgb(20 149 20 / "+scores["O"] *2+"%);"); 
    html = html.replace("{{c-style}}", "background-color:rgb(20 149 20 / "+scores["C"] *2+"%);"); 
    html = html.replace("{{e-style}}", "background-color:rgb(20 149 20 / "+scores["E"] *2+"%);"); 
    html = html.replace("{{a-style}}", "background-color:rgb(20 149 20 / "+scores["A"] *2+"%);"); 
    html = html.replace("{{n-style}}", "background-color:rgb(20 149 20 / "+scores["N"] *2+"%);"); 

    survey.completedHtml = html;
}

document.addEventListener("DOMContentLoaded", async function() {
    var surveyJson = await loadJson('./questions.json');
    const pages = addPagesForSurvey(surveyJson, getIntroPage(), ELEMENTS_PER_PAGE);

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
    survey.onValueChanged.add(survey => saveSurveyData(survey, STORAGE_ITEM_KEY));
    survey.onCurrentPageChanged.add(survey => saveSurveyData(survey, STORAGE_ITEM_KEY));

    restoreSurveyData(survey, STORAGE_ITEM_KEY);
    console.log("loaded");
    survey.render(document.getElementById("surveyElement"));
});
