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
        const $img = $parent.find('img');
        $img.attr('width', false)
            .attr('loading', 'lazy')
            .css({'max-width': '100%', 'box-shadow': 'rgba(0, 0, 0, 0.24) 0px 3px 8px' });
    })
})(window.jQuery);
