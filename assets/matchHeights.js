
// https://john-dugan.com/javascript-debounce/
// https://codepen.io/johndugan/pen/BNwBWL?editors=001
var debounce=function(e,t,n){var a;return function(){var r=this,i=arguments,o=function(){a=null,n||e.apply(r,i)},s=n&&!a;clearTimeout(a),a=setTimeout(o,t||200),s&&e.apply(r,i)}};



// Remove SVG focus in IE v1.0 17/08/2016
// https://websemantics.uk/articles/removing-svg-keyboard-focus-in-internet-explorer/
// 275 bytes gzipped (384 bytes uncompressed)
(function(e,c){function f(){for(var a=c.getElementsByTagName("svg"),b=a.length;b--;)a[b].setAttribute("focusable",!1)}(function(){var a=-1,b=e.navigator.userAgent,d=b.indexOf("MSIE "),c=b.indexOf("Trident/");0<d?a=parseInt(b.substring(d+5,b.indexOf(".",d)),10):0<c&&(a=b.indexOf("rv:"),a=parseInt(b.substring(a+3,b.indexOf(".",a)),10));return-1<a?a:void 0})()&&f()})(window,document);



// Adjust heights along a grid row - Requires matchHeights().
// MUST: Initial run before matchHeight()

(function(config) {
  "use strict";

  // Sets the values of data-matchHeights along a grid row.
  // Which are then height matched by the original matchHeights() function.

  var dataAttr = config.dataAttr || "data-matchheights";
  var gridItemClass = config.gridItemClass || "mf-post";

  function getRowLength(gridItems, totalItems) {

    var firstItemTop = gridItems[0].offsetTop;
    var itemNo;

    for (itemNo = 1; itemNo < totalItems; itemNo++) {
      if (firstItemTop < gridItems[itemNo].offsetTop) {
        break;
      }
    }
    return itemNo;

  }

  function init() {

    var gridItems = document.querySelectorAll("." + gridItemClass);

    if (!gridItems) {return false;}

    var totalItems = gridItems.length;
    var rowLength = getRowLength(gridItems, totalItems);
    var rows = Math.ceil(totalItems / rowLength);
    var rowNo, itemNo, elementNo, stampNo, matchElements, matchElementsLength;

    // ES5 for compatability down to IE10
    for (rowNo = 0; rowNo < rows; rowNo++) { // Each row
      for (itemNo = 0; itemNo < rowLength; itemNo++) { // Each grid item

        stampNo = (rowNo * rowLength) + itemNo;
        if (stampNo >= totalItems) {break;}

        matchElements = gridItems[stampNo].querySelectorAll("[" + dataAttr + "]");
        matchElementsLength = matchElements.length;

        for (elementNo = 0; elementNo < matchElementsLength; elementNo++) { // Each element
          matchElements[elementNo].setAttribute(dataAttr, String.fromCharCode(65 + elementNo) + rowNo);
        }

      }
    }
  }

  init();
  window.addEventListener("resize", debounce(init, 100, false), false);

})({dataAttr: "data-matchheights", gridItemClass: "mf-post"});



// Matching non-linear element heights - v1.0 - 18/12/2016 - M.J.Foskett - https://websemantics.uk/
// https://codepen.io/2kool2/pen/MbqGOQ
var matchHeights = function () {

  "use strict";

  var dataAttr ="data-matchheights";
  var minViewportWidth = 628;

  function _getHeightSetsArray(dataAttr) {
    // Return an array containing the different values of data-data-heightmatch
    var value;
    var arr = [];
    var sets = document.querySelectorAll("[" + dataAttr + "]");
    var i = sets.length;
    while (i--) {
      value = sets[i].getAttribute(dataAttr);
      if (arr.indexOf(value) === -1) {
        arr.push(value);
      }
    }
    return arr;
  }

  function _resetMinHeights(set) {
    // reset min-heights by removing the inline style.
    var i = set.length;
    while (i--) {
      set[i].removeAttribute("style");
    }
  }

  function _getMaxSetHeight(set) {
    // return the height of the tallest element in set
    var maxHeight = 0;
    var currentHeight;
    var i = set.length;
    while (i--) {
      currentHeight = set[i].clientHeight;
      if (currentHeight > maxHeight) {
        maxHeight = currentHeight;
      }
    }
    return maxHeight;
  }

  function _setMinHeight(set, matchedHeight) {
    var i = set.length;

    while (i--) {
      set[i].style.minHeight = matchedHeight + "px";
    }
  }

  function init() {

    var sets = _getHeightSetsArray(dataAttr);
    var i = sets.length;
    var set;

    while (i--) {

      set = document.querySelectorAll("[" + dataAttr + "=\"" + sets[i] + "\"]");

      _resetMinHeights(set);

      // Only above minimum screen width
      if (document.body.clientWidth >= minViewportWidth) {

        _setMinHeight(set, _getMaxSetHeight(set));

      }
    }
  }

  init();

};


window.addEventListener("load", matchHeights, false);
window.addEventListener("resize", debounce(matchHeights, 100, false), false);

export default addListeners;
