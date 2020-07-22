// ==UserScript==
// @name         8kun Disclaimer Hider
// @namespace    https://github.com/2sn0w/8kun-disclaimer-hider
// @version      1.0
// @description  Hide annoying disclaimer on 8kun.top
// @author       sn0w
// @match        http*://8kun.top/*
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
    'use strict';
    $('.disclaimer-8kun').hide()
    var el, els = document.getElementsByTagName('*');
    var node, nodes;
    for (var i=0, iLen=els.length; i<iLen; i++) {
      el = els[i];
      if (el.tagName.toLowerCase() != 'script') {
        nodes = el.childNodes;
      } else {
        nodes = [];
      }
      for (var j=0, jLen=nodes.length; j<jLen; j++) {
          node = nodes[j];
          if (node.nodeType == 3) {
              node.data = node.data.replace('        ____________________________        ', '');
          }
      }
    }
})();
