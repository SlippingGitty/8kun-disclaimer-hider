// ==UserScript==
// @name         8kun Disclaimer Hider
// @namespace    https://github.com/SlippingGitty/8kun-disclaimer-hider
// @version      1.0.1
// @description  Hide annoying disclaimers on 8kun.top
// @author       sn0w, SlippingGitty
// @match        http*://8kun.top/*
// ==/UserScript==

(function() {
    'use strict';
    $('.disclaimer-8kun').hide()
    $('section.col-12.col.box.description:nth-of-type(3)').hide()
    $('div.col-5.col:nth-of-type(3)').hide()
    $('p.unimportant:nth-of-type(2)').hide()
    $('p.unimportant:nth-of-type(3)').hide()
    $('p.unimportant:nth-of-type(4)').hide()

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
