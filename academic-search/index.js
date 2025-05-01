async function fetchCitation(doi) {
    let url = `https://citation.doi.org/format?doi=${doi}&style=harvard-cite-them-right&lang=en-GB`;
    console.log('Fetching citation from URL:', url);
    try {
        const response = await fetch(url, { method: 'GET' });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const citation = await response.text();
        return citation;
    }
    catch (error) {
        console.error('Error fetching citation:', error);
        return null;
    }
}

/**
 * Fetches metadata for a DOI and displays it using HTML templates
 * @param {string} doi - The DOI to look up (e.g., "10.4236/psych.2023.147061")
 * @param {string} targetElementId - ID of the HTML element where results will be displayed
 */
async function fetchAndDisplayDOI(doi, targetElementId) {

    doi = doi.replace(/https?:\/\/doi\.org\//, '');

    try {
        const targetElement = document.getElementById(targetElementId);
        if (!targetElement) {
            console.error(`Target element with ID "${targetElementId}" not found`);
            return;
        }

        // Clear previous results
        targetElement.innerHTML = '';

        // Show loading indicator
        const loadingTemplate = document.getElementById('loadingTemplate');
        const loadingElement = loadingTemplate.cloneNode(true);
        loadingElement.classList.remove('template');
        targetElement.appendChild(loadingElement);

        // Construct the API URL with the provided DOI
        // https://api.crossref.org/swagger-ui/index.html#/Works/get_works
        // https://api.crossref.org/works?query=richard+feynman
        const url = `https://api.crossref.org/works/${encodeURIComponent(doi)}`;

        // Make the API request
        const response = await fetch(url);

        // Remove loading indicator
        targetElement.innerHTML = '';

        // Check specifically for 404 status
        if (response.status === 404) {
            const errorTemplate = document.getElementById('errorTemplate');
            const errorElement = errorTemplate.cloneNode(true);
            errorElement.classList.remove('template');
            errorElement.querySelector('.alert').textContent = `DOI "${doi}" not found. Please check the DOI and try again.`;
            targetElement.appendChild(errorElement);
            return;
        }

        // Check for other HTTP errors
        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
        }

        // Parse the JSON response
        const data = await response.json();
        const metadata = data.message;

        // Clone the result card template
        const resultTemplate = document.getElementById('resultCardTemplate');
        const resultElement = resultTemplate.cloneNode(true);
        resultElement.classList.remove('template');

        // Set title
        resultElement.querySelector('.data-title').textContent =
            metadata.title ? metadata.title[0] : 'No title available';

        // Set authors
        const authorsElement = resultElement.querySelector('.data-authors');
        if (metadata.author && metadata.author.length > 0) {
            const authorList = metadata.author.map(author => {
                const name = [];
                if (author.given) name.push(author.given);
                if (author.family) name.push(author.family);
                return name.join(' ') || 'Unknown Author';
            }).join(', ');

            authorsElement.textContent = authorList;
        } else {
            authorsElement.innerHTML = '<p class="text-muted">No author information available</p>';
        }

        // Set DOI with link
        const doiElement = resultElement.querySelector('.data-doi');
        doiElement.innerHTML = ''; // Clear any existing links

        const doiLink = document.createElement('a');
        doiLink.href = `https://doi.org/${doi}`; // Use original DOI instead of metadata.DOI
        doiLink.target = '_blank';
        doiLink.textContent = doi; // Use original DOI for display text as well
        doiElement.appendChild(doiLink);

        // Set publisher
        resultElement.querySelector('.data-publisher').textContent =
            metadata.publisher || 'Not available';

        // Set publication date
        const pubDateElement = resultElement.querySelector('.data-pubdate');
        let pubDate = 'No date available';
        if (metadata.created && metadata.created['date-parts'] && metadata.created['date-parts'][0]) {
            const dateParts = metadata.created['date-parts'][0];
            // Handle different date formats
            if (dateParts.length >= 3) {
                pubDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2])
                    .toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
            } else if (dateParts.length === 2) {
                pubDate = new Date(dateParts[0], dateParts[1] - 1)
                    .toLocaleDateString(undefined, { year: 'numeric', month: 'long' });
            } else if (dateParts.length === 1) {
                pubDate = dateParts[0].toString();
            }
        }
        pubDateElement.textContent = pubDate;

        // Set number of references
        resultElement.querySelector('.data-references').textContent =
            metadata['reference-count'] !== undefined ? metadata['reference-count'] : 'Not available';

        // Set license information
        const licenseElement = resultElement.querySelector('.data-license');
        if (metadata.license && metadata.license.length > 0) {
            const license = metadata.license[0];

            if (license.URL) {
                const licenseLink = document.createElement('a');
                licenseLink.href = license.URL;
                licenseLink.target = '_blank';
                licenseLink.textContent = license.URL;
                licenseElement.appendChild(licenseLink);
            } else {
                licenseElement.textContent = 'License URL not available';
            }
        } else {
            licenseElement.innerHTML = '<p class="text-muted">No license information available</p>';
        }

        // Set citation information
        let citation = await fetchCitation(doi);
        const citationElement = resultElement.querySelector('.data-citation');
        citationElement.innerHTML = `<code>${citation}</code>`;

        // Add the populated template to the target element
        targetElement.appendChild(resultElement);

    } catch (error) {
        console.error('Error fetching DOI information:', error);

        const targetElement = document.getElementById(targetElementId);
        targetElement.innerHTML = '';

        const errorTemplate = document.getElementById('errorTemplate');
        const errorElement = errorTemplate.cloneNode(true);
        errorElement.classList.remove('template');
        errorElement.querySelector('.alert').textContent = `Error retrieving DOI information: ${error.message}`;
        targetElement.appendChild(errorElement);
    }
}

async function searchCrossref(query, type) {
    try {
        let url;
        const resultsPerPage = document.getElementById('resultsPerPage').value;
        
        if (type === 'doi') {
            url = `https://api.crossref.org/works/${encodeURIComponent(query)}`;
        } else {
            const filter = type === 'author' ? '&query.author=' : 
                          type === 'title' ? '&query.title=' : '&query=';
            url = `https://api.crossref.org/works?rows=${resultsPerPage}${filter}${encodeURIComponent(query)}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error searching Crossref:', error);
        throw error;
    }
}

async function displayDetailedView(item, expandedContent) {
    // Clear any existing expanded content
    expandedContent.innerHTML = '';
    
    // Show loading indicator
    const loadingTemplate = document.getElementById('loadingTemplate');
    const loadingElement = loadingTemplate.cloneNode(true);
    loadingElement.classList.remove('template');
    expandedContent.appendChild(loadingElement);

    try {
        // Get detailed information using the DOI
        const url = `https://api.crossref.org/works/${encodeURIComponent(item.DOI)}`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        const metadata = data.message;

        // Clone the result card template
        const resultTemplate = document.getElementById('resultCardTemplate');
        const resultElement = resultTemplate.cloneNode(true);
        resultElement.classList.remove('template');

        // Populate all the fields
        resultElement.querySelector('.data-title').textContent = metadata.title ? metadata.title[0] : 'No title available';
        
        const authorsElement = resultElement.querySelector('.data-authors');
        if (metadata.author && metadata.author.length > 0) {
            const authorLinks = metadata.author.map(author => {
                const name = [];
                if (author.given) name.push(author.given);
                if (author.family) name.push(author.family);
                const authorName = name.join(' ') || 'Unknown Author';
                return `<a href="#" onclick="document.getElementById('searchType').value='author'; document.getElementById('doiInput').value='${authorName}'; document.getElementById('lookupButton').click(); return false;">${authorName}</a>`;
            }).join(', ');
            authorsElement.innerHTML = authorLinks;
        } else {
            authorsElement.innerHTML = '<p class="text-muted">No author information available</p>';
        }

        // Set DOI with link
        const doiElement = resultElement.querySelector('.data-doi');
        doiElement.innerHTML = ''; // Clear any existing links

        const doiLink = document.createElement('a');
        doiLink.href = `https://doi.org/${metadata.DOI}`; 
        doiLink.target = '_blank';
        doiLink.textContent = metadata.DOI;
        doiElement.appendChild(doiLink);

        // Set other fields
        resultElement.querySelector('.data-publisher').textContent = metadata.publisher || 'Not available';
        
        // Handle publication date
        let pubDate = 'No date available';
        if (metadata.created && metadata.created['date-parts'] && metadata.created['date-parts'][0]) {
            const dateParts = metadata.created['date-parts'][0];
            if (dateParts.length >= 3) {
                pubDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2])
                    .toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
            } else if (dateParts.length === 2) {
                pubDate = new Date(dateParts[0], dateParts[1] - 1)
                    .toLocaleDateString(undefined, { year: 'numeric', month: 'long' });
            } else if (dateParts.length === 1) {
                pubDate = dateParts[0].toString();
            }
        }
        resultElement.querySelector('.data-pubdate').textContent = pubDate;

        resultElement.querySelector('.data-references').textContent = 
            metadata['reference-count'] !== undefined ? metadata['reference-count'] : 'Not available';

        // Handle license
        const licenseElement = resultElement.querySelector('.data-license');
        if (metadata.license && metadata.license.length > 0) {
            const license = metadata.license[0];
            if (license.URL) {
                const licenseLink = document.createElement('a');
                licenseLink.href = license.URL;
                licenseLink.target = '_blank';
                licenseLink.textContent = license.URL;
                licenseElement.appendChild(licenseLink);
            } else {
                licenseElement.textContent = 'License URL not available';
            }
        } else {
            licenseElement.innerHTML = '<p class="text-muted">No license information available</p>';
        }

        // Get and set citation
        const citation = await fetchCitation(item.DOI);
        const citationElement = resultElement.querySelector('.data-citation');
        citationElement.innerHTML = citation ? `<code>${citation}</code>` : '<p class="text-muted">Citation not available</p>';

        // Clear loading indicator and show the detailed view
        expandedContent.innerHTML = '';
        expandedContent.appendChild(resultElement);

    } catch (error) {
        console.error('Error fetching detailed information:', error);
        expandedContent.innerHTML = '';
        const errorTemplate = document.getElementById('errorTemplate');
        const errorElement = errorTemplate.cloneNode(true);
        errorElement.classList.remove('template');
        errorElement.querySelector('.alert').textContent = `Error retrieving article information: ${error.message}`;
        expandedContent.appendChild(errorElement);
    }
}

function calculateRelevanceScore(item, searchQuery) {
    let score = 0;
    const query = searchQuery.toLowerCase();

    // Title matching
    if (item.title && item.title[0]) {
        const title = item.title[0].toLowerCase();
        if (title === query) score += 100;
        else if (title.includes(query)) score += 50;
        
        // Count word matches
        const queryWords = query.split(/\s+/);
        queryWords.forEach(word => {
            if (title.includes(word)) score += 10;
        });
    }

    // Author matching (increased weight)
    if (item.author) {
        item.author.forEach(author => {
            const authorName = `${author.given || ''} ${author.family || ''}`.toLowerCase();
            // Exact author name match
            if (authorName === query) score += 200;
            // Partial author name match
            else if (authorName.includes(query)) score += 100;
            // Individual name parts matching
            const authorParts = authorName.split(/\s+/);
            const queryWords = query.split(/\s+/);
            queryWords.forEach(word => {
                if (word.length > 2) { // Only match name parts longer than 2 characters
                    authorParts.forEach(part => {
                        if (part === word) score += 50;
                        else if (part.includes(word)) score += 20;
                    });
                }
            });
        });
    }

    // Recent papers get a small boost (up to 20 points for current year)
    if (item.created && item.created['date-parts'] && item.created['date-parts'][0]) {
        const year = item.created['date-parts'][0][0];
        const currentYear = new Date().getFullYear();
        const yearDiff = Math.max(0, Math.min(20, 20 - (currentYear - year)));
        score += yearDiff;
    }

    return score;
}

function displaySearchResults(results, targetElementId) {
    const targetElement = document.getElementById(targetElementId);
    targetElement.innerHTML = '';

    const searchResultsTemplate = document.getElementById('searchResultsTemplate');
    const resultsContainer = searchResultsTemplate.cloneNode(true);
    resultsContainer.classList.remove('template');
    const listGroup = resultsContainer.querySelector('.list-group');

    // Sort results by relevance and date
    const searchQuery = document.getElementById('doiInput').value.trim();
    const sortedResults = [...results].sort((a, b) => {
        // Calculate relevance scores
        const scoreA = calculateRelevanceScore(a, searchQuery);
        const scoreB = calculateRelevanceScore(b, searchQuery);

        // If scores are significantly different, sort by score
        if (Math.abs(scoreA - scoreB) > 10) {
            return scoreB - scoreA;
        }

        // If scores are similar, sort by date
        const dateA = a.created && a.created['date-parts'] ? a.created['date-parts'][0][0] : 0;
        const dateB = b.created && b.created['date-parts'] ? b.created['date-parts'][0][0] : 0;
        return dateB - dateA;
    });

    sortedResults.forEach(item => {
        // Create the main result item container
        const resultItemContainer = document.createElement('div');
        resultItemContainer.className = 'list-group-item position-relative';
        
        // Create the collapsible button
        const resultItem = document.createElement('button');
        resultItem.className = 'search-result-button w-100 border-0 bg-transparent p-0 text-start';
        resultItem.type = 'button';
        
        const title = item.title ? item.title[0] : 'No title available';
        const year = item.created ? item.created['date-parts'][0][0] : 'No date';
        
        // Create authors list with clickable links
        const authorLinks = item.author ? item.author.map(a => {
            const authorName = `${a.given || ''} ${a.family || ''}`.trim();
            return `<a href="#" onclick="event.stopPropagation(); document.getElementById('searchType').value='author'; document.getElementById('doiInput').value='${authorName}'; document.getElementById('lookupButton').click(); return false;">${authorName}</a>`;
        }).join(', ') : 'No authors';
        
        resultItem.innerHTML = `
            <div class="d-flex w-100 justify-content-between pe-4">
                <h5 class="mb-1">${title}</h5>
                <small>${year}</small>
            </div>
            <p class="mb-1">${authorLinks}</p>
            <small class="text-muted">DOI: ${item.DOI}</small>
        `;

        // Create a container for the expanded content
        const expandedContent = document.createElement('div');
        expandedContent.className = 'mt-3 d-none';
        
        let isExpanded = false;
        resultItem.addEventListener('click', async () => {
            const allExpanded = listGroup.querySelectorAll('.expanded-content');
            const allButtons = listGroup.querySelectorAll('.search-result-button');
            
            allExpanded.forEach(content => {
                if (content !== expandedContent) {
                    content.classList.add('d-none');
                    content.classList.remove('expanded-content');
                }
            });
            
            allButtons.forEach(button => {
                if (button !== resultItem) {
                    button.classList.remove('expanded');
                }
            });

            if (!isExpanded) {
                expandedContent.classList.remove('d-none');
                expandedContent.classList.add('expanded-content');
                resultItem.classList.add('expanded');
                await displayDetailedView(item, expandedContent);
                isExpanded = true;
            } else {
                expandedContent.classList.add('d-none');
                expandedContent.classList.remove('expanded-content');
                resultItem.classList.remove('expanded');
                isExpanded = false;
            }
        });

        // Add the button and expanded content to the container
        resultItemContainer.appendChild(resultItem);
        resultItemContainer.appendChild(expandedContent);
        listGroup.appendChild(resultItemContainer);
    });

    targetElement.appendChild(resultsContainer);
}

// Update URL and browser history when performing a search
async function performSearch(query, searchType) {
    // Update URL without triggering a navigation event
    const url = new URL(window.location);
    url.searchParams.set('q', query);
    url.searchParams.set('type', searchType);
    window.history.pushState({ query, searchType }, '', url);

    // Show loading indicator
    const targetElement = document.getElementById('results');
    targetElement.innerHTML = '';
    const loadingTemplate = document.getElementById('loadingTemplate');
    const loadingElement = loadingTemplate.cloneNode(true);
    loadingElement.classList.remove('template');
    targetElement.appendChild(loadingElement);

    try {
        const data = await searchCrossref(query, searchType);
        
        if (searchType === 'doi') {
            fetchAndDisplayDOI(query, 'results');
        } else {
            const works = data.message.items;
            if (works && works.length > 0) {
                displaySearchResults(works, 'results');
            } else {
                const errorTemplate = document.getElementById('errorTemplate');
                const errorElement = errorTemplate.cloneNode(true);
                errorElement.classList.remove('template');
                errorElement.querySelector('.alert').textContent = 'No results found';
                targetElement.innerHTML = '';
                targetElement.appendChild(errorElement);
            }
        }
    } catch (error) {
        console.error('Error:', error);
        targetElement.innerHTML = '';
        const errorTemplate = document.getElementById('errorTemplate');
        const errorElement = errorTemplate.cloneNode(true);
        errorElement.classList.remove('template');
        errorElement.querySelector('.alert').textContent = `Error: ${error.message}`;
        targetElement.appendChild(errorElement);
    }
}

// Handle browser back/forward navigation
window.addEventListener('popstate', (event) => {
    if (event.state) {
        const { query, searchType } = event.state;
        // Update UI to match the history state
        document.getElementById('doiInput').value = query;
        document.getElementById('searchType').value = searchType;
        // Perform the search without updating history
        performSearch(query, searchType);
    } else {
        // If no state (e.g. initial page load), clear the search
        document.getElementById('doiInput').value = '';
        document.getElementById('results').innerHTML = '';
    }
});

// Update the click handler
document.getElementById('lookupButton').addEventListener('click', async () => {
    const query = document.getElementById('doiInput').value.trim();
    const searchType = document.getElementById('searchType').value;

    if (!query || query.trim() === '') {
        const resultsElement = document.getElementById('results');
        resultsElement.innerHTML = '';

        const warningTemplate = document.getElementById('warningTemplate');
        const warningElement = warningTemplate.cloneNode(true);
        warningElement.classList.remove('template');
        warningElement.querySelector('.alert').textContent = 'Please enter a search term';
        resultsElement.appendChild(warningElement);
        return;
    }

    await performSearch(query, searchType);
});

// Add clear button functionality
document.getElementById('clearButton').addEventListener('click', () => {
    document.getElementById('doiInput').value = '';
    document.getElementById('results').innerHTML = '';
    document.getElementById('doiInput').focus();
    
    // Update URL without triggering a navigation event
    const url = new URL(window.location);
    url.searchParams.delete('q');
    url.searchParams.delete('doi');
    url.searchParams.delete('type');
    window.history.pushState({}, '', url);
});

// Update the input placeholder and results per page dropdown based on search type
document.getElementById('searchType').addEventListener('change', (event) => {
    const input = document.getElementById('doiInput');
    const resultsPerPage = document.getElementById('resultsPerPage');
    
    // Enable/disable results per page dropdown based on search type
    resultsPerPage.disabled = event.target.value === 'doi';
    
    switch (event.target.value) {
        case 'doi':
            input.placeholder = 'Enter DOI (e.g., 10.4236/psych.2023.147061)';
            break;
        case 'search':
            input.placeholder = 'Enter search terms';
            break;
        case 'author':
            input.placeholder = 'Enter author name';
            break;
        case 'title':
            input.placeholder = 'Enter article title';
            break;
    }
});

// Also trigger lookup when Enter key is pressed in the input field
document.getElementById('doiInput').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        document.getElementById('lookupButton').click();
    }
});

// Update DOMContentLoaded handler to handle initial state
document.addEventListener("DOMContentLoaded", async function() {
    const doiInput = document.getElementById('doiInput');
    const searchType = document.getElementById('searchType');
    const resultsPerPage = document.getElementById('resultsPerPage');
    const searchParams = new URLSearchParams(window.location.search);
    const query = searchParams.get('q') || searchParams.get('doi'); // Support both new 'q' and old 'doi' parameter
    const type = searchParams.get('type') || 'doi';

    // Set search type and update placeholder
    searchType.value = type;
    // Set initial disabled state of results per page dropdown
    resultsPerPage.disabled = type === 'doi';
    
    switch (type) {
        case 'doi':
            doiInput.placeholder = 'Enter DOI (e.g., 10.4236/psych.2023.147061)';
            break;
        case 'search':
            doiInput.placeholder = 'Enter search terms';
            break;
        case 'author':
            doiInput.placeholder = 'Enter author name';
            break;
        case 'title':
            doiInput.placeholder = 'Enter article title';
            break;
    }

    if (query) {
        doiInput.value = query;
        // Perform the search without pushing a new history entry
        await performSearch(query, type);
    }
});

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}