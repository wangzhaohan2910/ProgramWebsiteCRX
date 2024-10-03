// ==UserScript==
// @name         Hydro优化
// @namespace    http://tampermonkey.net/
// @version      1.1.0
// @description  try to take over the world!
// @match        *://oiclass.com/*
// @match        *://www.oiclass.com/*
// @match        *://hydro.ac/*
// @match        *://vijos.org/*
// @match        *://43.139.175.183/*
// @icon         https://hydro.ac/favicon-96x96.png
// @author       Ymxxxx
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
const a = document.createElement('style');
a.innerHTML = `
  .section{
    border-radius: 8px !important;
  }
  .section__table-header{
    border-radius: 8px 8px 0 0;
  }
  .section {
  transition: box-shadow 0.2s, transform .5s,opacity .5s;
    transition-timing-function: cubic-bezier(.215,.61,.355,1);
}html.theme--dark {
	 color-scheme: dark;
}
 .theme--dark body {
	 color: #d9dfe7;
	 background-color: #3b3b3b;
}
 .theme--dark #panel {
	 background-color: #2b3031;
}
 .theme--dark .nav {
	 background-color: rgba(59,59,59,0.98);
}
 .theme--dark .nav .nav__item {
	 color: #d9dfe7;
}
 .theme--dark .nav .nav__item.nav--active {
	 border-top-color: #9e2e4a;
}
 .theme--dark .nav .nav__item:hover {
	 background-color: #444;
	 border-top-color: #005dca;
}
 .theme--dark .section {
	 background-color: #3b3b3b;
	 box-shadow: 0 0.375rem 1.375rem rgba(21,23,30,0.5);
}
 .theme--dark .footer {
	 background-color: #262626;
	 color: #d9dfe7;
}
 .theme--dark h1, .theme--dark h2, .theme--dark h3, .theme--dark h4, .theme--dark h5, .theme--dark h6 {
	 color: #d9dfe7;
}
 .theme--dark a, .theme--dark .link, .theme--dark a:visited, .theme--dark .link:visited, .theme--dark a:hover, .theme--dark .link:hover, .theme--dark a:active, .theme--dark .link:active {
	 color: #bbb;
}
 .theme--dark .typo a:not(.user-profile-name):not(.media-link), .theme--dark .typo .link:not(.user-profile-name):not(.media-link), .theme--dark .typo-a:not(.user-profile-name):not(.media-link), .theme--dark .typo a:visited:not(.user-profile-name):not(.media-link), .theme--dark .typo .link:visited:not(.user-profile-name):not(.media-link), .theme--dark .typo-a:visited:not(.user-profile-name):not(.media-link), .theme--dark .typo a:active:not(.user-profile-name):not(.media-link), .theme--dark .typo .link:active:not(.user-profile-name):not(.media-link), .theme--dark .typo-a:active:not(.user-profile-name):not(.media-link), .theme--dark .typo a:hover:not(.user-profile-name):not(.media-link), .theme--dark .typo .link:hover:not(.user-profile-name):not(.media-link), .theme--dark .typo-a:hover:not(.user-profile-name):not(.media-link) {
	 color: #2495db;
}
 .theme--dark .section__title {
	 color: #bbb;
}
 .theme--dark .dropdown .menu {
	 box-shadow: 0 0.125rem 0.4375rem #3d3d3d;
	 background-color: #3b3b3b;
}
 .theme--dark a.menu__link:not(.disabled):hover, .theme--dark button.menu__link:not(.disabled):hover {
	 color: #aaa;
	 background-color: #444;
}
 .theme--dark blockquote, .theme--dark blockquote.blue, .theme--dark blockquote.red, .theme--dark blockquote.yellow, .theme--dark blockquote.warn, .theme--dark blockquote.note {
	 background-color: #3b3b3b;
	 color: #aaa;
}
 .theme--dark blockquote {
	 border-left-color: #323232;
}
 .theme--dark a .menu__link.active, .theme--dark button .menu__link.active, .theme--dark a .menu__link.active:hover, .theme--dark button .menu__link.active:hover {
	 background-color: #ed5f82;
	 color: #fff;
}
 .theme--dark .menu__seperator {
	 border-top-color: #4f4f4f;
}
 .theme--dark .menu__link {
	 color: #aaa;
}
 .theme--dark .button:not(.codicon) {
	 background-color: #4a4a4a;
	 border-color: #4f4f4f;
}
 .theme--dark .button:not(.codicon), .theme--dark .typo .button:not(.codicon), .theme--dark .button:not(.codicon):visited, .theme--dark .typo .button:not(.codicon):visited, .theme--dark .button:not(.codicon):hover, .theme--dark .typo .button:not(.codicon):hover {
	 color: #aaa;
}
 .theme--dark .button:not(.codicon):not(.disabled):hover, .theme--dark .button:not(.codicon):not(.disabled):focus {
	 background-color: #555;
	 border-color: #4f4f4f;
	 box-shadow: 0 4px 15px rgba(56,56,56,0.5);
}
 .theme--dark .button:not(.codicon):not(.disabled).primary {
	 background-color: #1555a0;
	 border-color: #1555a0;
}
 .theme--dark .button:not(.codicon):not(.disabled).primary:hover, .theme--dark .button:not(.codicon):not(.disabled).primary:focus {
	 background-color: #2960a0;
	 border-color: #005dca;
}
 .theme--dark .dialog {
	 background-color: rgba(15,15,15,0.565);
}
 .theme--dark .dialog.withBg .dialog__content {
	 background-color: #3b3b3b;
	 border: 1px solid #323232;
	 box-shadow: 0 0.125rem 0.625rem rgba(255,255,255,0.2);
}
 .theme--dark .dialog--signin__main {
	 background-color: #3b3b3b;
	 box-shadow: 0 0 30px rgba(0,0,0,0.6);
}
 .theme--dark .section__table-header {
	 background-color: rgba(59,59,59,0.949);
}
 .theme--dark .section__table-header.is-stuck {
	 box-shadow: 0 0.1875rem 0.125rem rgba(255,255,255,0.03);
}
 .theme--dark.page--record_main .col--status, .theme--dark.page--record_main .col--submit-by, .theme--dark.page--record_main .col--lang {
	 border-right-color: #4f4f4f;
}
 .theme--dark.page--problem_main .col--status, .theme--dark.page--problem_category .col--status {
	 border-right-color: #4f4f4f;
}
 .theme--dark.page--problem_main .col--ac-tried, .theme--dark.page--problem_category .col--ac-tried {
	 border-left-color: #4f4f4f;
}
 .theme--dark.page--contest_main .contest__item.live {
	 border-left-color: #9e2e4a;
}
 .theme--dark .data-table tr {
	 border-top-color: #4f4f4f;
	 border-bottom-color: #4f4f4f;
}
 .theme--dark .data-table tr:nth-child(even) {
	 background-color: #333;
}
 .theme--dark .checkbox input {
	 border-color: #4f4f4f;
}
 .theme--dark .sidebar-user-profile .user-profile-name {
	 color: #bbb;
}
 .theme--dark .section__tab-header-item:hover {
	 background-color: #171717;
}
 .theme--dark.page--home_security .sessionlist__item {
	 border-bottom-color: #4f4f4f;
}
 .theme--dark .pager.pager-top, .theme--dark .pager.pager-top .pager__item {
	 border-bottom-color: #4f4f4f;
}
 .theme--dark .pager.pager-bottom, .theme--dark .pager.pager-bottom .pager__item {
	 border-top-color: #4f4f4f;
}
 .theme--dark input {
	 background-color: #3b3b3b;
}
 .search>.theme--dark input {
	 border-color: #4f4f4f;
	 border-top-color: #4f4f4f;
	 border-bottom-color: #4f4f4f;
	 border-left-color: #4f4f4f;
	 color: #fff;
}
 .theme--dark .select {
	 border-color: #4f4f4f;
	 background-color: #3b3b3b;
}
 .theme--dark .select:focus {
	 border-color: #2960a0;
	 outline-color: #102f4e;
}
 .theme--dark input.textbox, .theme--dark textarea.textbox {
	 border-color: #4f4f4f;
	 background-color: #3b3b3b;
}
 .theme--dark .autocomplete-wrapper {
	 border-color: #4f4f4f;
	 background-color: #3b3b3b;
}
 .theme--dark .autocomplete-wrapper input {
	 background-color: #3b3b3b;
	 color: rgba(255,255,255,0.85);
}
 .theme--dark label:not(.quick-input-list-label) {
	 color: #999;
}
 .theme--dark .scratchpad-container {
	 background-color: #1f1f1f;
}
 .theme--dark .toolbar {
	 background-color: rgba(59,59,59,0.8);
}
 .theme--dark div.code-toolbar > .toolbar > .toolbar-item > a, .theme--dark div.code-toolbar > .toolbar > .toolbar-item > button, .theme--dark div.code-toolbar > .toolbar > .toolbar-item > span {
	 color: #666;
	 box-shadow: 0 2px rgba(255,255,255,0.2);
}
 .theme--dark div.code-toolbar > .toolbar > .toolbar-item > a:hover, .theme--dark div.code-toolbar > .toolbar > .toolbar-item > button:hover, .theme--dark div.code-toolbar > .toolbar > .toolbar-item > span:hover, .theme--dark div.code-toolbar > .toolbar > .toolbar-item > a:focus, .theme--dark div.code-toolbar > .toolbar > .toolbar-item > button:focus, .theme--dark div.code-toolbar > .toolbar > .toolbar-item > span:focus {
	 color: inherit;
	 text-decoration: none;
}
 .theme--dark pre[class*=language-] {
	 border-color: #686868;
	 background-color: #3b3b3b;
}
 .theme--dark code[class*=language-], .theme--dark pre[class*=language-] {
	 color: #cbc5c6;
}
 .theme--dark pre[class*=language-]::-moz-selection, .theme--dark pre[class*=language-] ::-moz-selection, .theme--dark code[class*=language-]::-moz-selection, .theme--dark code[class*=language-] ::-moz-selection {
	 background-color: rgba(173,214,255,0.149);
}
 .theme--dark pre[class*=language-]::selection, .theme--dark pre[class*=language-] ::selection, .theme--dark code[class*=language-]::selection, .theme--dark code[class*=language-] ::selection {
	 background-color: rgba(173,214,255,0.149);
}
 .theme--dark :not(pre)>code[class*=language-] {
	 background-color: #171717;
	 border: 1px solid #323232;
}
 .theme--dark .scratchpad__data-input {
	 border-left-color: #2f2f2f;
	 background-color: #171717;
	 color: #999;
}
 .theme--dark pre:not(.vditor-sv), .theme--dark code {
	 background-color: #3b3b3b;
}
 .theme--dark .scratchpad__toolbar {
	 background-color: #18191d;
}
 .theme--dark .scratchpad__toolbar__button.enabled:hover {
	 color: #8a94a5;
	 background-color: #27282c;
}
 .theme--dark .scratchpad__toolbar__split {
	 background-color: #313131;
}
 .theme--dark .menu__link.highlight {
	 background: rgba(237,95,130,0.2);
}
 .theme--dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]) {
	 background-color: #4a4a4a;
	 color: inherit;
}
 .theme--dark .typo table thead th {
	 background-color: #4a4a4a;
}
 .theme--dark .typo table th, .theme--dark .typo table td, .theme--dark .typo table caption {
	 border-color: #686868;
	 color: #aaa;
}
 .theme--dark.page--discussion_main .discussion__item.highlight, .theme--dark.page--discussion_node .discussion__item.highlight, .theme--dark.page--blog_main .discussion__item.highlight, .theme--dark.page--user_detail .discussion__item.highlight {
	 border-left-color: #9e2e4a;
}
 .theme--dark body>.marker {
	 box-shadow: 0 2px 7px rgba(255,255,255,0.3);
	 background-color: #1f1f1f;
	 border-color: #555;
}
 .theme--dark body>.marker .marker__toolbar {
	 background-color: #18191d;
}
 .theme--dark .messagepad__list-item:hover {
	 border-color: #4f4f4f;
	 background-color: #444;
}
 .theme--dark .messagepad__list-item.active {
	 border-color: #9e2e4a;
	 background-color: rgba(237,95,130,0.07);
}
 .theme--dark .messagepad__sidebar {
	 border-right-color: #4f4f4f;
}
 .theme--dark .messagepad__input {
	 border-top-color: #4f4f4f;
}
 .side--self .theme--dark .messagepad__message__body {
	 color: #fff;
	 background-color: #4a4a4a;
}
 .side--self .theme--dark .messagepad__message__body:after {
	 border-top-color: #4a4a4a;
}
 .side--other .theme--dark .messagepad__message__body {
	 color: #fff;
	 background-color: #2960a0;
}
 .side--other .theme--dark .messagepad__message__body:after {
	 border-top-color: #2960a0;
}
 .theme--dark .section__tab-container.immersive .section__tab-header-item.selected {
	 background-color: #0f0f0f;
	 color: #999;
	 box-shadow: 0 0 10px rgba(255,255,255,0.3);
}
 .theme--dark .nothing-icon {
	 filter: brightness(50%);
}
 .theme--dark .scratchpad__data-input:focus {
	 background: #1f1f1f;
	 border-color: #1c2d40;
}
 .theme--dark .section__list__item {
	 border-bottom-color: #4f4f4f;
}
 .theme--dark .autocomplete-list {
	 background-color: #4a4a4a;
}
 .theme--dark .autocomplete-list li[aria-selected=true] {
	 background-color: #444;
}
 .theme--dark .autocomplete-list li[data-focus=true] {
	 background-color: #2e4476;
	 cursor: pointer;
}
 .theme--dark .dczcomments__item, .theme--dark .dczcomments__reply {
	 border-top-color: #2b2b2b;
}
 .theme--dark .autocomplete-tag {
	 background-color: #f00;
}
 .theme--dark .problem__tag-link {
	 background-color: #4a4a4a;
	 color: #bbb !important;
}
 .theme--dark .problem__tag-link:hover {
	 background-color: #2960a0;
}
 .theme--dark label.textbox.material input {
	 border-color: #333;
	 color: #aaa;
	 border-bottom-color: rgba(170,170,170,0.4);
}
 .theme--dark .widget--category-filter__drop {
	 background-color: #1f1f1f;
	 box-shadow: 0 0.125rem 0.4375rem rgba(255,255,255,0.3);
}
 .theme--dark hr {
	 border-bottom-color: #404040;
}
 .theme--dark .section__footer {
	 border-top-color: #2b2b2b;
}
 .theme--dark .data-table thead>tr {
	 border-bottom-color: #2b2b2b;
}
 .theme--dark blockquote.note {
	 border-left-color: #29679e;
}
 .theme--dark blockquote.note:before {
	 color: #29679e;
}
 .theme--dark blockquote.warn {
	 border-left-color: #a80800;
}
 .theme--dark blockquote.warn:before {
	 color: #a80800;
}
 .theme--dark blockquote.red {
	 border-left-color: #a80800;
}
 .theme--dark blockquote.yellow {
	 border-left-color: #8f7c00;
}
 .theme--dark blockquote.blue {
	 border-left-color: #00396b;
}
 .theme--dark .token.comment, .theme--dark .token.prolog, .theme--dark .token.doctype, .theme--dark .token.cdata {
	 color: #57a64a;
	 font-style: italic;
}
 .theme--dark .token.namespace {
	 opacity: 0.7;
}
 .theme--dark .token.string {
	 color: #d69d85;
}
 .theme--dark .token.punctuation, .theme--dark .token.operator {
	 color: #b4b4b4;
}
 .theme--dark .token.url, .theme--dark .token.symbol, .theme--dark .token.number, .theme--dark .token.boolean, .theme--dark .token.variable, .theme--dark .token.constant, .theme--dark .token.inserted {
	 color: #b5cea8;
}
 .theme--dark .token.atrule, .theme--dark .token.keyword, .theme--dark .token.attr-value, .theme--dark .language-autohotkey .token.selector, .theme--dark .language-json .token.boolean, .theme--dark .language-json .token.number, .theme--dark code[class*=language-css] {
	 color: #569cd6;
}
 .theme--dark .token.function {
	 color: #c8c8c8;
}
 .theme--dark .token.deleted, .theme--dark .language-autohotkey .token.tag {
	 color: #9a050f;
}
 .theme--dark .token.selector, .theme--dark .language-autohotkey .token.keyword {
	 color: #00009f;
}
 .theme--dark .token.important {
	 color: #e90;
}
 .theme--dark .token.important, .theme--dark .token.bold {
	 font-weight: 700;
}
 .theme--dark .token.italic {
	 font-style: italic;
}
 .theme--dark .token.class-name, .theme--dark .language-json .token.property {
	 color: #4ec9b0;
}
 .theme--dark .token.tag, .theme--dark .token.selector {
	 color: #d7ba7d;
}
 .theme--dark .token.attr-name, .theme--dark .token.property, .theme--dark .token.regex, .theme--dark .token.entity {
	 color: #d16969;
}
 .theme--dark .token.directive.tag .tag {
	 background: #ff0;
	 color: #393a34;
}
 .theme--dark .badge--su {
	 background-color: #c00 !important;
}
 .theme--dark .badge--mod {
	 background-color: #ac3980 !important;
}
 @media only screen and (max-width: 600px) {
	 .theme--dark .footer__category {
		 border-bottom-color: #4f4f4f;
	}
}

.section:hover {
  box-shadow: 0 0.375rem 1.375rem #97b1bb99;
}`;
document.head.append(a);
})();