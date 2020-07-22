// ==UserScript==
// @name         8kun Disclaimer Hider
// @namespace    https://github.com/2sn0w/8kun-disclaimer-hider/
// @version      1.0
// @description  Hide annoying disclaimer on 8kun.top
// @author       sn0w
// @match        http*://8kun.top/*
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
    'use strict';
    $('.disclaimer-8kun').hide()
})();
