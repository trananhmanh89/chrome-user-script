// ==UserScript==
// @name         Show image attachment
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.joomlart.com/*/ticket/*
// @grant        none
// ==/UserScript==

(function($) {
    $('.am-helpdesk-message-attachments-item .link').each((i, el) => {
        const $link = $(el);
        const tooltip = $link.data('tooltip');

        if (!/^<img/.test(tooltip)) {
            return true;
        }

        const $parent = $link.parent();

        $parent.css('margin-top', '10px');
        $parent.append(`<div style="margin-top: 10px;">${tooltip}</div>`)
        $parent.find('img').attr('width', false).css('max-width', '100%');
    })
})(window.jQuery);
