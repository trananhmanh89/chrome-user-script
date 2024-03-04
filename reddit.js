// ==UserScript==
// @name         Reddit Custom
// @namespace    meo`
// @version      2022.01.17.01
// @description  như tên
// @author       You
// @match        https://www.reddit.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=www.reddit.com
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at       document-body
// @antifeature  tracking
// ==/UserScript==
const css = `
<style>
  .text-14 {
    font-size: 1rem;
  }

</style>
`;
document.head.insertAdjacentHTML("beforeend", css)
