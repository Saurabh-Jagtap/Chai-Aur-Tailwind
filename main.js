import { ChaiEngine } from './chaisheet.js'; // Ensure this matches your filename exactly

// 1. Initialize the engine
const chai = new ChaiEngine();

// 2. Select Elements
const editor = document.querySelector('#editor');
const preview = document.querySelector('#preview');

// 3. Define a single Update Function
const updatePreview = () => {
    const content = editor.value;
    const iframeDoc = preview.contentDocument || preview.contentWindow.document;

    // Set up the iframe structure once
    iframeDoc.open();
    iframeDoc.write(`
        <!DOCTYPE html>
        <html>
            <head>
                <style>
                    body { font-family: sans-serif; margin: 20px; }
                </style>
            </head>
            <body>
                ${content}
            </body>
        </html>
    `);
    iframeDoc.close();

    // Run the engine on the new content
    chai.run(iframeDoc);
};

// 4. Set up Listeners
editor.addEventListener('input', updatePreview);

// 5. Initial Runs
chai.run(); // Style the main landing page
window.addEventListener('load', updatePreview); // Style the default playground content