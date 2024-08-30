// language=CSS (injection comment for WebStorm)
const styleText = `
    .xwd__cell--cell {
        fill: #121212;
    }

    .xwd__cell--related {
        fill: #394f32;
    }

    .xwd__cell--block {
        fill: #d0d0d0;
    }

    .xwd__cell--highlighted {
        fill: #3c146c;
    }

    .xwd__cell--selected {
        fill: #712ec1;
    }

    .xwd__cell text {
        fill: #ededed;
    }

    .xwd__layout_puzzle--desktop {
        background-color: #121212;
    }

    .xwd__clue--li span {
        color: #ededed;
    }

    .xwd__clue--filled span {
        color: #828282;
    }

    .xwd__clue--selected {
        background-color: #641db6;
    }

    .xwd__clue--highlighted {
        border-left-color: #641db6;
    }

    .xwd__clue--related {
        background-color: #394f32;
    }

    .xwd__clue-list--title {
        color: #ededed;
        border-bottom-color: #2d2d2d;
    }

    .xwd__clue-bar-desktop--bar {
        background: #2e1b45;
    }

    .xwd__clue-bar-desktop--bar div {
        color: #ededed;
    }

    .xwd__modal--overlay {
        background-color: #121212;
    }

    .xwd__modal--body {
        background-color: #222222;
    }

    .xwd__modal--content {
        color: #ededed;
    }

    .xwd__congrats-modal--content {
        color: #ededed;
    }

    .pz-moment__button {
        background: #ededed;
        color: #121212;
    }

    .pz-content {
        background: #121212;
        color: #ededed;
    }

    .xwd__clue-list--obscured li span:last-child {
        background-color: #222222;
        color: #222222;
    }

    .xwd__clue-bar-desktop--bar.obscured {
        background-color: #222222;
    }

    .xwd__toolbar--wrapper {
        background-color: #121212;
    }

    .xwd__tool--button, .xwd__tool--button button {
        color: #ededed;
    }

    .xwd__tool--button:hover, .xwd__tool--button button:hover {
        background-color: #1b1b1b;
        color: #ededed;
    }

    .xwd__tool--texty:hover {
        color: #ededed;
    }

    .xwd__timer--button, .xwd__timer--button button, .xwd__timer--button:hover, .xwd__timer--button button:hover, .xwd__timer--texty:hover {
        background-color: #121212;
        color: #ededed;
    }

    .pz-footer {
        background-color: #121212;
        color: #ededed;
    }

    .pz-footer__legal-link a {
        color: #ededed;
    }

    .xwd__printtools--button {
        background-color: #121212;
        color: #ededed;
        border-color: #ededed;
    }

    .xwd__printtools--button:hover {
        background-color: #1b1b1b;
        color: #ededed;
    }

    .pz-icon-print-black {
        filter: brightness(0) saturate(100%) invert(98%) sepia(5%) saturate(223%) hue-rotate(239deg) brightness(116%) contrast(86%);
    }

    .pz-nav {
        background: #121212;
    }

    .pz-header {
        background: #121212;
    }

    .pz-game-toolbar {
        border-top-color: #404040;
        border-bottom-color: #404040;
    }

    .pz-nav-drawer {
        background: #2a2a2a;
        color: #ededed;
    }

    .pz-nav-drawer__link.selected, .pz-nav-drawer__link:hover {
        background-color: #3f3f3f;
    }

    .pz-nav-drawer__account {
        border-top-color: #ededed;
        background-color: #2a2a2a;
    }

    .pz-nav__button, .pz-nav__button.gray {
        color: #ededed;
        border-color: #111;
        background-color: #2a2a2a;
    }

    .pz-nav__button:hover {
        color: #ededed;
        background-color: #1a1a1a;
    }

    .xwd__toolbar_icon--settings-gear {
        filter: brightness(0) saturate(100%) invert(18%) sepia(100%) saturate(3110%) hue-rotate(263deg) brightness(85%) contrast(104%);
        background-color: initial !important; /* this is kinda scuffed */
    }

    .xwd__toolbar_icon--pencil {
        filter: brightness(0) saturate(100%) invert(18%) sepia(100%) saturate(3110%) hue-rotate(263deg) brightness(85%) contrast(104%);
        background-color: initial !important; /* this is kinda scuffed */
    }

    .xwd__editorial-content--subGameplayGrid .xwd__editorial-content--header {
        border-top-color: #ededed;
    }

    .xwd__editorial-content--subGameplayGrid .xwd__editorial-content--header a {
        color: #ededed;
    }

    .pz-nav__logo rect {
        fill: #121212;
    }

    .pz-nav__logo path {
        fill: #ededed;
    }

    .xwd__editorial-content--editorialCard .xwd__editorial-content--kicker {
        color: #ddd;
    }

    .xwd__editorial-content--editorialCard {
        color: #ededed;
    }

    .xwd__editorial-content--editorialCard .xwd__editorial-content--byline {
        color: #6a6a6a;
    }

    .xwd__editorial-content--cardsContainer a {
        border-left-color: #6a6a6a;
    }

    .pz-nav__hamburger-inner, .pz-nav__hamburger-inner::before, .pz-nav__hamburger-inner::after {
        background-color: #ededed;
    }

    .xwd__layout_container {
        background-color: #121212;
    }

    .pz-moment__button.secondary, .pz-moment__button.secondary:active {
        color: #ededed;
    }

    .xwd__svg g rect {
        stroke: #d0d0d0;
    }

    .xwd__svg g path {
        stroke: #767676;
    }

    /*  
        TODO: still to fix:
            color of border below header
            hamburger button becomes solid on click
            exchange svg files for raw paths so they're colorable (https://stackoverflow.com/q/11529470/8673320)
            intersection of related and selected
            shaded (and intersection of shaded and selected) (ex. 7/3/2023)
        TODO: new features:
            popup with color selection - selection color, highlighted color, related color, block color 
    */
`;

const style = document.createElement("style");
style.innerText = styleText;
document.head.appendChild(style);
