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
        .nameTag-H6kSJ0 {
            line-height: 1.5;
        }
        .discriminator-WV5K5s {
            line-height: 23px;
        }
    </style>
    `;
    document.head.insertAdjacentHTML("beforeend", css)
})
