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
body .slideout-panel .main {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}

/* 块颜色初始化 */
body .slideout-menu {
    background-color: rgba(255, 255, 255, .5);
}

body .slideout-panel .main .row .large-9 .section,
body .slideout-panel .main .row .large-3 .section,
body .slideout-panel .main .row .medium-9 .section,
body .slideout-panel .main .row .medium-3 .section {
    background-color: rgba(255, 255, 255, .7);
}

.typo a:not(.user-profile-name):not(.media-link),
.typo .link:not(.user-profile-name):not(.media-link),
.typo-a:not(.user-profile-name):not(.media-link),
.typo a:visited:not(.user-profile-name):not(.media-link),
.typo .link:visited:not(.user-profile-name):not(.media-link),
.typo-a:visited:not(.user-profile-name):not(.media-link),
.typo a:active:not(.user-profile-name):not(.media-link),
.typo .link:active:not(.user-profile-name):not(.media-link),
.typo-a:active:not(.user-profile-name):not(.media-link) {
    color: #5f9fd6;
}

/* 动画初始化 */
@keyframes up {
    0% {
        margin-top: -50px;
    }
}

@keyframes le {
    0% {
        margin-left: -50px;
    }
}

.typo a:hover:not(.user-profile-name):not(.media-link),
.typo .link:hover:not(.user-profile-name):not(.media-link),
.typo-a:hover:not(.user-profile-name):not(.media-link) {
    color: #fa4b4b;
    text-decoration: none;
    -webkit-transition: color 300ms;
    -o-transition: color 300ms;
    transition: color 300ms;
}

body .slideout-panel .footer {
    background: rgba(255, 255, 255, .7);
}

.page--discussion_main .discussion__title a:visited {
    color: grey;
}

.page--discussion_main .discussion__title a:visited:hover {
    color: #fa4b4b;
    text-decoration: none;
    -webkit-transition: color 300ms;
    -o-transition: color 300ms;
    transition: color 300ms;
}

.numbox__text {
    color: #000;
}


.supplementary li {
    color: #464444;
}

/* 圆角 */
body .slideout-panel .main .row .large-9 .section,
body .slideout-panel .main .row .large-6 .section,
body .slideout-panel .main .row .large-3 .section,
body .slideout-panel .main .row .medium-9 .section,
body .slideout-panel .main .row .medium-6 .section,
body .slideout-panel .main .row .medium-3 .section,
body .slideout-panel .main .row .medium-12 .section,
body .slideout-panel .main .row .medium-12 .section,
body .slideout-panel .main .row .medium-10 .section,
body .slideout-panel .main .row .medium-2 .section,
body .slideout-panel .footer,
.expanded,
.warn,
.note,
.syntax-hl,
.dialog__content,
.scratchpad-container,
.drop-element,
.drop-element:after,
.drop-element:before,
.drop-element *,
.drop-element *:after,
.drop-element *:before {
    border-radius: 20px !important;
}

.autocomplete-wrapper,
.compact,
.primary,
.button,
.textbox,
.notification,
.bp5-toast,
.scratchpad__toolbar__item {
    border-radius: 15px !important;
}

.status_title,
.select,
.bp5-tag,
.problem__tag-link {
    border-radius: 5px !important;
}

.widget--category-filter__tag {
    border-radius: 10px !important;
}

.section__list {
    background: #fff0;
}

.section__list__item {
    background: rgba(255, 255, 255, .31);
    border-radius: 20px !important;
}


.section {
    border-radius: 20px !important;
    background-color: rgba(255, 255, 255, .8);
}

.profile__bg {
    position: absolute;
}

.toolbar {
    background-color: #fff0;
}

.user-profile-badge {
    border-radius: 8px !important;
}

.menu__link {
    border-radius: 20px !important;
    background-color: #fff0;
}

.scratchpad--hide {
    border-radius: 20px !important;
    background-color: #fff0;
}

.section,
.omnibar-toggle,
.zc__sdk__sys__btn {
    border-radius: 7px;
    box-shadow: 01px 3px 9px #656565;
}

.user-profile-badge {
    border-radius: 7px;
    box-shadow: 0px 1px 3px #656565;
}

.syntax-hl {
    border-radius: 7px;
    box-shadow: 0px 1px 5px #656565;
}

/* 按钮 */
a {
    position: relative;
}

a:hover {
    text-decoration: none;
    color: #fa4b4b;
    -webkit-transition: color 300ms;
    -o-transition: color 300ms;
    transition: color 300ms;
}

.error__container {
    background-color: #ffffff69 !important;
}

a:after {
    content: "";
    width: 0;
    height: 2px;
    background: rgba(0, 110, 255, .575);
    position: absolute;
    top: 100%;
    left: 50%;
    transition: all .3s;
}

a:hover::after {
    left: 0%;
    width: 100%;
}

/* 个别设置 */

.section {
    width: 102%;
}

.graphiql-container {
    position: absolute;
    border-radius: 20px !important;
    width: 80%;
    left: 10%;
    height: 53rem;
}

.nav {

    position: absolute;
    border-radius: 20px !important;
    left: 15.2%;
    top: 10px;
    width: 69.9%;
    height: 2.8125rem;
    font-size: .875rem;
    transition: background .2s;
    transition-timing-function: cubic-bezier(.215, .61, .355, 1);
    z-index: 500;
    background: #fa4b4b;
}

.nav {
    animation: up 1s;
}

.large-9 {
    animation: le 1s;
}

.section {
    animation: le 1s;
}

#searchForm {
    border-radius: 20px !important;
    background: rgba(255, 255, 255, .8);
}

.section__table-container {
    border-radius: 20px !important;
    background: rgba(255, 255, 255, .8);

}

.dropdown .menu {
    background: #e5e5e5ba;
}

.nav .nav__item:hover {
    background: #e5e5e599;
    color: #fa4b4b;
}

.nav .nav__item {
    color: #000;
}



.nav--shadow {
    border-radius: 20px !important;
    position: absolute;
    left: 10%;
    top: 10px;
    width: 0%;
    height: 2.8125rem;
    z-index: 300;
    transition: box-shadow .2s;
    transition-timing-function: cubic-bezier(.215, .61, .355, 1);
    box-shadow: 0 0 6px rgba(0, 0, 0, .3);
}

.page--discussion_main .discussion__title a:visited,
.page--discussion_node .discussion__title a:visited,
.page--blog_main .discussion__title a:visited,
.page--user_detail .discussion__title a:visited {
    color: grey;
}`;
var domain=window.location.host;
if(domain=='hydro.ac'||domain=='oiclass.com'||domain=='kedaoi.cn'||domain=='vijos.org')
	document.head.append(a);
})();