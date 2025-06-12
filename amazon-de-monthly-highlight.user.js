// ==UserScript==
// @name         Amazon.de Monthly Payment Highlighter
// @namespace    https://amazon.de/
// @version      1.0
// @description  Highlight Amazon.de items with monthly payment options
// @author       dmxpowa
// @match        https://www.amazon.de/*
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
    'use strict';

    function highlightMonthlyPayments() {
        const items = document.querySelectorAll('[data-cy="price-recipe"]');
        items.forEach(item => {
            const monthlyRow = Array.from(item.querySelectorAll('.a-row')).find(row =>
                row.textContent.includes("/ Mon. für") || row.textContent.toLowerCase().includes("/month for")
            );
            if (monthlyRow) {
                // Highlight the whole item or just the row, depending on preference
                item.style.border = "2px solid orange";
                item.style.backgroundColor = "#fff8e1"; // light yellow background
            }
        });
    }

    // Run once and then observe changes for dynamic content
    highlightMonthlyPayments();

    // Observe dynamic changes (e.g. for search filters)
    const observer = new MutationObserver(() => {
        highlightMonthlyPayments();
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
