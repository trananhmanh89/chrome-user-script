// ==UserScript==
// @name         Telegram Custom
// @namespace    meo`
// @version      2022.01.17.01
// @description  như tên
// @author       You
// @match        https://web.telegram.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=web.telegram.org
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at       document-body
// @antifeature  tracking
// ==/UserScript==
const css = `
<style>
  :root {
    --font-regular: "Intel One Mono", Segoe UI Regular,sans-serif !important;
    --messages-container-width: 1000px;
    --right-column-width: 20vw;
    --messages-line-height: 1.7;
  }

  .night {
    --primary-text-color: #ddd !important;
    --message-background-color: #2b2d31 !important;
  }

  .bubbles-group {
    margin-bottom: 1rem;
  }

  .bubbles-inner:not(.is-broadcast) .message, .bubbles-inner:not(.is-broadcast) {
    max-width: 1000px;
  }

</style>
`;
document.head.insertAdjacentHTML("beforeend", css)
