const fs = require('fs').promises;
const path = require('path');
const { marked } = require('marked');

// Configuration
const DATA_DIR = './data';
const DATA_FILE = path.join(DATA_DIR, 'data.json');
const OUTPUT_DIR = './';

// Model configurations
const MODELS = [
    { id: 'claude', name: 'Claude', file: 'claude.md', icon: 'claude.png' },
    { id: 'chatgpt', name: 'Chat GPT', file: 'gpt.md', icon: 'openai.png', iconBg: '#000' },
    { id: 'deepseek', name: 'Deepseek', file: 'deepseek.md', icon: 'deepseek.png' },
    { id: 'gemini', name: 'Google Gemini', file: 'gemini.md', icon: 'gemini.png' },
    { id: 'grok', name: 'Grok', file: 'grok.md', icon: 'grok.png', iconBg: '#000' },
    { id: 'merged', name: 'Merged response', file: 'merged.md', icon: 'claude.png', optional: true }
];

// HTML Template
function generateHTML(question, modelContents, allQuestions) {
    const modelVersions = {
        'Claude': question.models.Claude || '',
        'Chat GPT': question.models.ChatGPT || '',
        'Deepseek': question.models.Deepseek || '',
        'Google Gemini': question.models.Gemini || '',
        'Grok': question.models.Grok || ''
    };

    // Generate accordion items
    const accordionItems = MODELS.map(model => {
        if (model.optional && !modelContents[model.id]) {
            return ''; // Skip if merged doesn't exist
        }

        const content = modelContents[model.id] || '<p>Content not available</p>';
        const version = modelVersions[model.name] || '';
        const iconStyle = model.iconBg ? `style="background-color: ${model.iconBg};"` : '';

        return `
            <!-- ${model.name} -->
            <div class="accordion-item">
                <h2 class="accordion-header" id="heading${model.id}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse${model.id}" aria-expanded="${model.id === 'claude' ? 'true' : 'false'}"
                        aria-controls="collapse${model.id}">
                        <div class="row">
                            <div class="col-1">
                                <img src="assets/${model.icon}" width="16" height="16" ${iconStyle} />
                            </div>
                            <div class="col">
                                <b>${model.name} ${version ? `<span style="font-weight: bold;">${version}</span>` : ''}</b>
                            </div>
                        </div>
                    </button>
                </h2>
                <div id="collapse${model.id}" class="accordion-collapse collapse ${model.id === 'claude' ? 'show' : ''}"
                     aria-labelledby="heading${model.id}" data-bs-parent="#accordionParent">
                    <div class="accordion-body">${content}</div>
                </div>
            </div>`;
    }).join('\n');

    // Generate footer links (grouped in rows of 4)
    const footerRows = [];
    for (let i = 0; i < allQuestions.length; i += 4) {
        const row = allQuestions.slice(i, i + 4).map((q, idx) => {
            const separator = idx < 3 && (i + idx + 1) < allQuestions.length ? '&nbsp;|&nbsp;' : '';
            return `<li style="display: inline-block;"><a href="${q.id}.html">${q.title}</a>${separator}</li>`;
        }).join('\n                    ');

        footerRows.push(`
                <ul style="font-size: 8pt; list-style-type: none; padding: 0; margin: 0;">
                    ${row}
                </ul>`);
    }

    return `<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${question.title} - Ask LLamas</title>
    <meta name="description" content="${question.subtitle || question.title}" />
    <link rel="icon" type="image/png" href="assets/favicon.png" />
    <link rel="apple-touch-icon" href="assets/favicon.png" />

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,500;1,14..32,500&family=Nunito:ital,wght@0,700;1,700&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <style>
        * {
            font-family: "Inter", sans-serif;
            font-optical-sizing: auto;
            font-weight: 500;
            font-style: normal;
        }

        .card, .accordion {
            margin-bottom:20px
        }

        .accordion-body {
            background-color: #fafafa;
        }

        .card, .accordion-item {
            border: 1px solid rgb(165, 165, 165);
        }
        .italic {
            font-style: italic;
        }
        .bold {
            font-weight: bold;
        }
        .light-grey {
            color: rgb(165, 165, 165);
        }
    </style>
</head>

<body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>

    <div class="container" style="padding:20px;">

        <div style="margin-bottom: 20px;">
            <a href="index.html">← Back to Ask LLamas</a>
        </div>

        <div class="card">
            <div class="card-body">
                <h5 class="card-title" style="font-weight:700;">${question.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${question.subtitle || ''}</h6>
                <p class="card-text"><span class="smaller italic light-grey">Prompt:</span>
                    <span>${question.prompt || ''}</span>
                </p>
            </div>
        </div>

        <div class="accordion" id="accordionParent">
${accordionItems}
        </div>

        <footer class="light-grey">
            <small><a href="../" >Home</a>&nbsp;|&nbsp;The multi-model answers were retrieved using <a href="https://www.openrouter.ai/chat" target="_blank">openrouter.ai</a>.</small>
            <br /><br />
            <div id="footer-links">
${footerRows.join('\n')}
            </div>
        </footer>
    </div>
</body>
</html>`;
}

// Generate index page with list of all questions
function generateIndexHTML(allQuestions) {
    const questionsList = allQuestions.map(q =>
        `                <li><a href="${q.id}.html" class="list-group-item list-group-item-action">
                    <h5>${q.title}</h5>
                    <p class="mb-1 text-muted">${q.subtitle || ''}</p>
                </a></li>`
    ).join('\n');

    return `<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Asking multiple LLM models Psychology-specific questions</title>
    <meta name="description" content="Asking multiple LLM models Psychology-specific questions." />
    <link rel="icon" type="image/png" href="assets/favicon.png" />
    <link rel="apple-touch-icon" href="assets/favicon.png" />

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,500;1,14..32,500&display=swap" rel="stylesheet">
    <style>
        * {
            font-family: "Inter", sans-serif;
            font-optical-sizing: auto;
            font-weight: 500;
            font-style: normal;
        }
        .card {
            margin-bottom: 40px;
        }
        .card, .list-group-item {
            border: 1px solid rgb(165, 165, 165);
        }
        .list-group {
            list-style-type: none;
        }
        .list-group-item {
            margin-bottom: 10px;
            border-radius: 5px;
        }
        .list-group-item:hover {
            background-color: #f8f9fa;
        }
    </style>
</head>

<body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>

    <div class="container" style="padding:20px;">
        <div class="card">
            <div class="card-body">
                <h1 class="card-title" style="font-weight:700;">Ask LLamas</h1>
                <p class="card-text lead">Comparing answers from multiple AI models on Psychology-specific questions</p>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <h2 class="mb-4">Browse Questions</h2>
                <ul class="list-group">
${questionsList}
                </ul>
            </div>
        </div>

        <footer class="text-muted text-center mt-5">
            <small><a href="../">Home</a>&nbsp;|&nbsp;The multi-model answers were retrieved using <a href="https://www.openrouter.ai/chat" target="_blank">openrouter.ai</a>.</small>
        </footer>
    </div>
</body>
</html>`;
}

// Main build function
async function build() {
    console.log('🚀 Starting static site generation...\n');

    try {
        // Read data.json
        console.log('📖 Reading data.json...');
        const dataContent = await fs.readFile(DATA_FILE, 'utf-8');
        const data = JSON.parse(dataContent);
        const questions = data.questions;

        console.log(`✓ Found ${questions.length} questions\n`);

        // Process each question
        for (const question of questions) {
            console.log(`📝 Processing: ${question.title}`);
            const questionDir = path.join(DATA_DIR, question.id);
            const modelContents = {};

            // Load markdown content for each model
            for (const model of MODELS) {
                const mdPath = path.join(questionDir, model.file);

                try {
                    const mdContent = await fs.readFile(mdPath, 'utf-8');
                    modelContents[model.id] = marked(mdContent);
                    console.log(`  ✓ Loaded ${model.name}`);
                } catch (err) {
                    if (!model.optional) {
                        console.log(`  ⚠️  ${model.name} not found`);
                        modelContents[model.id] = '<p><em>Content not available</em></p>';
                    }
                }
            }

            // Generate HTML
            const html = generateHTML(question, modelContents, questions);
            const outputPath = path.join(OUTPUT_DIR, `${question.id}.html`);

            await fs.writeFile(outputPath, html, 'utf-8');
            console.log(`  ✓ Generated ${question.id}.html\n`);
        }

        // Generate index page
        console.log('📝 Generating index.html...');
        const indexHTML = generateIndexHTML(questions);
        await fs.writeFile(path.join(OUTPUT_DIR, 'index.html'), indexHTML, 'utf-8');
        console.log('  ✓ Generated index.html\n');

        console.log('✅ Build completed successfully!');
        console.log(`📊 Generated ${questions.length} question pages + 1 index page`);

    } catch (error) {
        console.error('❌ Build failed:', error);
        process.exit(1);
    }
}

// Run the build
build();
