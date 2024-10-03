// ==UserScript==
// @name         Hydro
// @namespace    http://tampermonkey.net/
// @version      2024-09-15
// @description  CSS
// @author       unincluded
// @match        http://hydro.ac/*
// @match        https://hydro.ac/*
// @grant        GM_addStyle
// @grant        GM_getResourceText

// ==/UserScript==

(function() {

    var css = "";

   css += [
       /* 圆角 */
      "div:not(.split-view-view.allotment-module_splitViewView__MGZ6O.split-view-view-visible * ) {",
       "    font-family: \'Times New Roman\',\'YouYuan\';",
       "   border-radius: 25px;",
       "}",
       "span:not(.split-view-view.allotment-module_splitViewView__MGZ6O.split-view-view-visible *, .pager__item.current, .pager__item.ellipsis , code span) {",
       "    font-family: \'Times New Roman\',\'YouYuan\';",
       "   border-radius: 25px;",
       "}",
       ".user-profile-badge {",
       "    font-family: \'Times New Roman\',\'YouYuan\';",
       "   border-radius: 25px;",
       "}",
       ".typo.supplementary {",
       "    font-family: \'Times New Roman\',\'YouYuan\';",
       "   border-radius: 0px; !important",
       "}",
       ".monaco-scrollable-element {",
       "   border-radius: 0px; !important",
       "   font-family: \'Consolas\';",
       "}",
       ".bp5-tag.bp5-large.bp5-minimal.bp5-interactive.problem__tag-item {",
       "    border-radius: 25px;",
       "}",
       ".menu * {",
       "    border-radius: 25px;",
       "}",
       "#searchForm * {",
       "    border-radius: 25px;",
       "}",
       ".expanded.button {",
       "    border-radius: 25px;",
       "}",
       /*
       "div.typo.supplementary {",
       "    border-radius: 0px; !important",
       "}",
       */
       /* 文本 */
       "p {",
       "    font-family: \'Times New Roman\',\'YouYuan\';",
       "}",
       "h1 {",
       "    font-family: \'Times New Roman\',\'YouYuan\';",
       "}",
       "h2 {",
       "    font-family: \'Times New Roman\',\'YouYuan\';",
       "}",
       "h3 {",
       "    font-family: \'Times New Roman\',\'YouYuan\';",
       "}",
       "h4 {",
       "    font-family: \'Times New Roman\',\'YouYuan\';",
       "}",
       "h5 {",
       "    font-family: \'Times New Roman\',\'YouYuan\';",
       "}",
       "h6 {",
       "    font-family: \'Times New Roman\',\'YouYuan\';",
       "}",
       "code span {",
       "    font-family: \'Consolas\',\'YaHei\'; !important",
       "}",
       /* 广告 */
       ".nothing-icon {",
       "height: 184px;",
       "margin-bottom: 1.25rem;",
       "}",
       ".page--error .error__twd2 {",
       "height: 300px;",
       "object-fit:cover;",
       "transform: translate(45px, 25px);",
       "margin-bottom: 1.25rem;",
       "}",
       /* 背景 */
       "body",
       "{",
       "background-repeat: no-repeat;",
       "background-size: cover;",
       "background-position: center;",
       "background-attachment: fixed;",
       "}",
       "#panel {",
       "    visibility:hidden;",
       //"    left: -9999px;",
       "}",
       "#panel > * {",
       "    visibility:visible; !important",
       //"    left: -9999px;",
       "}",
       "* {",
       "    opacity: 0.98;",
       "}"
   ].join("\n");
var domain = window.location.host;
if(domain=='hydro.ac'||domain=='oiclass.com'||domain=='kedaoi.cn'||domain=='vijos.org')
{
    if (typeof GM_addStyle != "undefined") {
        GM_addStyle(css);
    } else if (typeof PRO_addStyle != "undefined") {
        PRO_addStyle(css);
    } else if (typeof addStyle != "undefined") {
        addStyle(css);
    } else {
        var node = document.createElement("style");
        node.appendChild(document.createTextNode(css));
        var heads = document.getElementsByTagName("head");
        if (heads.length > 0) {
		heads[0].appendChild(node);
        } else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
    }
}
})();
