const DATA_ROOT = "./data/";

async function loadJson(filename)
{
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

async function loadMarkdown(filename)
{
    try {
        const response = await fetch(filename);
        if (!response.ok) {
            console.error('Network response was not ok');
            return "";
        }
        return await response.text();
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; 
    }
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

document.addEventListener("DOMContentLoaded", async function() {

    let questionsJson = await loadJson(`${DATA_ROOT}/data.json`);

    // Query parameters
    let questionId = getQueryParam("questionId");
    let questionIndex = getQueryParam("questionIndex");
    if (!questionId) {
        questionId = questionsJson.questions[0].id;
    } 
    if (questionIndex && questionIndex < questionsJson.questions.length) {
        questionId = questionsJson.questions[questionIndex].id;
    } 
    
    // Fill the dropdown with questions
    for (let i = 0; i < questionsJson.questions.length; i++) {
        let question = questionsJson.questions[i];
        let questionId = question.id;

        let anchorElement = document.createElement("a");
        anchorElement.setAttribute("data-question-id", questionId);
        anchorElement.setAttribute("class", "dropdown-item");
        anchorElement.setAttribute("href", "#");
        anchorElement.innerHTML = `${question.title}`;// <span class="italic light-grey">(${question.subtitle})</span>`;
        anchorElement.addEventListener("click", async function(event) {
            await renderContent(question);
        });

        let liElement = document.createElement("li");
        liElement.appendChild(anchorElement);
        document.getElementById("dropdownQuestions").appendChild(liElement);
    }

    // Render the first question by default
    let question = questionsJson.questions.find(q => q.id === questionId);
    renderContent(question);
});

async function renderContent(question)
{
    document.getElementById("question-title").innerHTML = question.title;
    document.getElementById("question-subtitle").innerHTML = question.subtitle;
    document.getElementById("prompt-text").innerHTML = question.prompt;

    document.getElementById("claude-version").innerHTML = question.models["Claude"];
    document.getElementById("gemini-version").innerHTML = question.models["Gemini"];
    document.getElementById("grok-version").innerHTML = question.models["Grok"];
    document.getElementById("chatgpt-version").innerHTML = question.models["ChatGPT"];
    document.getElementById("deepseek-version").innerHTML = question.models["Deepseek"];

    let questionPath = DATA_ROOT + question.id;

    let claudeMarkdown = await loadMarkdown(`${questionPath}/claude.md`);
    let geminiMarkdown = await loadMarkdown(`${questionPath}/gemini.md`);
    let grokMarkdown = await loadMarkdown(`${questionPath}/grok.md`);
    let gptMarkdown = await loadMarkdown(`${questionPath}/gpt.md`);
    let deepseekMarkdown = await loadMarkdown(`${questionPath}/deepseek.md`);
    let mergedMarkdown = await loadMarkdown(`${questionPath}/merged.md`);
    
    let claudeHtml = marked.parse(claudeMarkdown);
    let geminiHtml = marked.parse(geminiMarkdown);
    let grokHtml = marked.parse(grokMarkdown);
    let gptHtml = marked.parse(gptMarkdown);
    let deepseekHtml = marked.parse(deepseekMarkdown);
    let mergedHtml = marked.parse(mergedMarkdown);

    document.getElementById("claude-body").innerHTML = claudeHtml;
    document.getElementById("gemini-body").innerHTML = geminiHtml;
    document.getElementById("grok-body").innerHTML = grokHtml;
    document.getElementById("gpt-body").innerHTML = gptHtml;
    document.getElementById("deepseek-body").innerHTML = deepseekHtml;
    document.getElementById("merged-body").innerHTML = mergedHtml;
}