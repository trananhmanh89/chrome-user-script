// ==UserScript==
// @name         DeepCorp Custom
// @namespace    meo`
// @version      2022.01.17.01
// @description  như tên
// @author       You
// @match        https://discord.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at       document-start
// @antifeature  tracking
// ==/UserScript==

window.addEventListener('DOMContentLoaded', async () => {
    const css = `
    <style>
        :root {
            --font-primary: Segoe UI Regular,sans-serif;
        }
    </style>
    `;
    document.head.insertAdjacentHTML("beforeend", css)
})
