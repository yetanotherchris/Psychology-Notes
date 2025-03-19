/// <reference path="./surveyjs/survey-core/survey.core.d.ts" />

async function loadJson(filename)
{
    // The questionnaires are stored as JSON instead of JS so it can be re-used in other programming languages.
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

function saveSurveyData (survey, storageKey)
{
    const data = survey.data;
    data.pageNo = survey.currentPageNo;
    window.localStorage.setItem(storageKey, JSON.stringify(data));
}

function restoreSurveyData (survey, storageKey)
{
    const prevData = window.localStorage.getItem(storageKey) || null;
    if (prevData) {
        const data = JSON.parse(prevData);
        survey.data = data;
        if (data.pageNo) {
            survey.currentPageNo = data.pageNo;
        }
    }
}

function addPagesForSurvey(survey, introPage, elementsPerPage) {
    const pages = [];

    pages.push(introPage);

    for (let i = 0; i < survey.elements.length; i += elementsPerPage) {
        pages.push({
            name: `Page ${i / elementsPerPage + 1}`,
            elements: survey.elements.slice(i, i + elementsPerPage)
        });
    }

    return pages;
}

function resetSurvey(storageKey)
{
    window.localStorage.removeItem(storageKey);
    location.reload();
}