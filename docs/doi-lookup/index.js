/**
 * Fetches metadata for a DOI and displays it using HTML templates
 * @param {string} doi - The DOI to look up (e.g., "10.4236/psych.2023.147061")
 * @param {string} targetElementId - ID of the HTML element where results will be displayed
 * p.s. Claude 3.7 built this entire function for me 😱 - I just added a bit of string cleaning
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
        const doiLink = document.createElement('a');
        doiLink.href = `https://doi.org/${metadata.DOI}`;
        doiLink.target = '_blank';
        doiLink.textContent = metadata.DOI;
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

// Add event listener to the lookup button
document.getElementById('lookupButton').addEventListener('click', () => {
    const doi = document.getElementById('doiInput').value.trim();

    // Check if the DOI is valid, e.g. 10.0000/{identifier}
    // 10.0000 is the prefix and the registry, e.g. crossref
    // The identifier can be anything, usually an internal reference for the publisher
    // and it has to be registered with a registry e.g. crossref, datacite.
    // p.s. I wrote these comments not Claude 3.7
    if (!doi || doi.trim() === '' || doi.length < 10 || doi.indexOf('/') == -1) {
        const resultsElement = document.getElementById('results');
        resultsElement.innerHTML = '';

        const warningTemplate = document.getElementById('warningTemplate');
        const warningElement = warningTemplate.cloneNode(true);
        warningElement.classList.remove('template');
        warningElement.querySelector('.alert').textContent = 'Please enter a valid DOI, e.g. 10.0001/123456';
        resultsElement.appendChild(warningElement);
        return;
    }

    fetchAndDisplayDOI(doi, 'results');
});

// Also trigger lookup when Enter key is pressed in the input field
document.getElementById('doiInput').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        document.getElementById('lookupButton').click();
    }
});
