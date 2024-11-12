// noinspection CssUnusedSymbol

const resetPuzzleSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"23\" " +
    "viewBox=\"0 0 21 23\"><path d=\"M18 9.5h-4C14 7.6 12.4 6 10.5 6S7 7.6 7 9.5H3C3 5.4 6.4 2 10.5 " +
    "2S18 5.4 18 9.5zM10.5 21C6.4 21 3 17.6 3 13.5h4c0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5h4c0 4.1-3" +
    ".4 7.5-7.5 7.5zM4 20.5H1V12h8.5v3H4zM20 11h-8.5V8H17V2.5h3z\" fill=\"accentColor\"/></svg>";
const settingsGearSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"23\" height=\"23\" " +
    "viewBox=\"0 0 23 23\"><path d=\"M7.522 19.014c.468.248.963.454 1.478.612v1.376c0 1.1.898 1.998 " +
    "2.005 1.998h.99c1.11 0 2.005-.894 2.005-1.998v-1.376c.515-.158 1.01-.364 1.478-.612l.973.973c.7" +
    "8.777 2.05.778 2.84-.005l.7-.7c.79-.786.79-2.05.01-2.83l-.97-.974c.25-.468.46-.963.61-1.478h1.3" +
    "8c1.1 0 2-.898 2-2.005v-.99C23 9.895 22.11 9 21.01 9h-1.38c-.158-.515-.364-1.01-.612-1.478l.973" +
    "-.973c.78-.78.78-2.05-.01-2.84l-.7-.7c-.78-.79-2.05-.79-2.83-.01l-.97.97c-.47-.25-.97-.46-1.48-" +
    ".61V2c0-1.102-.9-2-2.01-2H11C9.893 0 9 .894 9 1.998v1.376c-.515.158-1.01.364-1.478.612l-.973-.9" +
    "73c-.78-.777-2.05-.778-2.84.005l-.7.7c-.79.786-.79 2.05-.01 2.83l.97.974c-.25.468-.45.963-.61 1" +
    ".478H2c-1.102 0-2 .898-2 2.005v.99C0 13.105.894 14 1.998 14h1.376c.158.515.364 1.01.612 1.478l-" +
    ".973.973c-.777.78-.778 2.05.005 2.84l.7.7c.786.79 2.05.79 2.83.01l.974-.97zM11.5 15c1.933 0 3.5" +
    "-1.567 3.5-3.5S13.433 8 11.5 8 8 9.567 8 11.5 9.567 15 11.5 15z\" fill-rule=\"evenodd\" " +
    "fill=\"accentColor\"/></svg>";
const pencilSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"23\" height=\"23\" " +
    "viewBox=\"0 0.5 23 23\"><path fill=\"accentColor\" d=\"M3.2 15.3l5 5-7.8 2.8z\"/><path fill=\"mainColor\" " +
    "d=\"M3.6 17.8l2.1 2.1L2.5 21z\"/><path fill=\"accentColor\" d=\"M8.172 20.28l-4.95-4.95L13.828 4.722l4.95 " +
    "4.95zM17.4 1.2c.4-.4 1-.4 1.4 0l3.5 3.5c.4.4.4 1 0 1.4l-2.1 2.1-4.9-4.9 2.1-2.1z\"/></svg>";
const pencilWhiteSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"23\" height=\"23\" " +
    "viewBox=\"0 0.5 23 23\"><path d=\"M3.2 15.3l5 5-7.8 2.8zm.4 2.5l2.1 2.1L2.5 21zm4.572 2.48l-4.9" +
    "5-4.95L13.828 4.722l4.95 4.95zM17.4 1.2c.4-.4 1-.4 1.4 0l3.5 3.5c.4.4.4 1 0 1.4l-2.1 2.1-4.9-4." +
    "9 2.1-2.1z\" fill=\"mainColor\"/></svg>";
const infoSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"21\" " +
    "viewBox=\"0 0 11 21\"><path d=\"M.5 16.987h3v-5.994h-3V6.996h7v9.99h3V21l-10-.004v-4.01zM3.5 " +
    "0h4v3.997h-4V0z\" fill=\"accentColor\" fill-rule=\"evenodd\"/></svg>";
const lifesaverWhiteSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" " +
    "viewBox=\"0 0.5 21 21\"><path fill=\"mainColor\" d=\"M10.5.5C4.7.5 0 5.2 0 11s4.7 10.5 10.5 10.5S21 16.8 21 " +
    "11 16.3.5 10.5.5zm4.9 2L19 6.1l-4.2 2.8-2.1-2.1 2.7-4.3zm-9.8 0l2.8 4.2-2.1 2.2L2 6.1l3.6-3.6zm0 17L2 15.9l4" +
    ".2-2.8 2.1 2.1-2.7 4.3zM7 11c0-1.9 1.6-3.5 3.5-3.5S14 9.1 14 11s-1.6 3.5-3.5 3.5S7 12.9 7 11zm8.4 8.5l-2.8-4" +
    ".2 2.1-2.1 4.2 2.8-3.5 3.5zM10.5.5C4.7.5 0 5.2 0 11s4.7 10.5 10.5 10.5S21 16.8 21 11 16.3.5 10.5.5zm0 19C5.8" +
    " 19.5 2 15.7 2 11s3.8-8.5 8.5-8.5S19 6.3 19 11s-3.8 8.5-8.5 8.5zm0-13.5c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5" +
    "-2.2-5-5-5zm0 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z\"/></svg>";
const lifesaverSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" " +
    "viewBox=\"0 0.5 21 21\"><path fill=\"accentColor\" d=\"M10.5.5C4.7.5 0 5.2 0 11s4.7 10.5 10.5 10.5S21 16.8 21 " +
    "11 16.3.5 10.5.5zm4.9 2L19 6.1l-4.2 2.8-2.1-2.1 2.7-4.3zm-9.8 0l2.8 4.2-2.1 2.2L2 6.1l3.6-3.6zm0 17L2 15.9l4.2" +
    "-2.8 2.1 2.1-2.7 4.3zM7 11c0-1.9 1.6-3.5 3.5-3.5S14 9.1 14 11s-1.6 3.5-3.5 3.5S7 12.9 7 11zm8.4 8.5l-2.8-4.2 2" +
    ".1-2.1 4.2 2.8-3.5 3.5zM10.5.5C4.7.5 0 5.2 0 11s4.7 10.5 10.5 10.5S21 16.8 21 11 16.3.5 10.5.5zm0 19C5.8 19.5 " +
    "2 15.7 2 11s3.8-8.5 8.5-8.5S19 6.3 19 11s-3.8 8.5-8.5 8.5zm0-13.5c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5" +
    "-5zm0 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z\"/></svg>"
// noinspection CssUnknownProperty,XmlUnusedNamespaceDeclaration,HtmlDeprecatedAttribute
const printSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" " +
    "version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 19 17\" " +
    "style=\"enable-background:new 0 0 19 17;\" xml:space=\"preserve\">" +
    "<style type=\"text/css\">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style>" +
    "<desc>Created with sketchtool.</desc>" +
    "<g><g transform=\"translate(-301 -263)\"><g transform=\"translate(234 250)\">" +
    "<g transform=\"translate(66.5 12.5)\">" +
    "<path fill=\"textColor\" class=\"st0\" d=\"M16.7,0.5H3.3v5.8h1V1.5h11.3v4.8h1V0.5\"/>" +
    "<path fill=\"textColor\" class=\"st0\" d=\"M15.4,10.7h-1v5.8H5.6v-5.8h-1l0,3.3h0.5v1H4.6v2.5h10.8V15h-0.5v" +
    "-1h0.5V10.7\"/>" +
    "<path fill=\"textColor\" class=\"st0\" d=\"M3.8,10.7h12.3v-1H3.8C3.8,9.7,3.8,10.7,3.8,10.7z\"/>" +
    "<path fill=\"textColor\" class=\"st0\" d=\"M19.1,6.3H0.9V15h4.2v-1H1.9V7.3h16.2V14h-3.2v1h4.2L19.1,6.3\"/>" +
    "</g></g></g></g></svg>"
const closeSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">" +
    "<title>Close Icon</title><g id=\"close\">" +
    "<path id=\"x\" d=\"M18.717 6.697l-1.414-1.414-5.303 5.303-5.303-5.303-1.414 1.414 5.303 5.303-5.303 5.303 " +
    "1.414 1.414 5.303-5.303 5.303 5.303 1.414-1.414-5.303-5.303z\" fill=\"textColor\"/></g></svg>"
const pauseSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"9\" height=\"12\" viewBox=\"0 0 9 12\" " +
    "fill=\"none\">" +
    // these aren't actually #000000 black, but it's close enough
    "<rect y=\"0.5\" width=\"3\" height=\"11\" rx=\"0.5\" fill=\"textColor\"/>" +
    "<rect x=\"6\" y=\"0.5\" width=\"3\" height=\"11\" rx=\"0.5\" fill=\"textColor\"/>" +
    "</svg>"

const styleText = (options) => {
    const blend = (c1, p1, c2) => `color-mix(in srgb, ${c1} ${p1}%, ${c2})`;

    const mainC = options.mainPageColor;
    const accentC = options.pageAccentColor;
    const textC = options.pageTextColor;
    const clueBarC = options.clueBarBackgroundColor;
    const cellC = options.cellColor;
    const cellTextC = options.cellTextColor;
    // const pencilC = `color-mix(in srgb, ${mainC} 58%, ${textC})`;
    const pencilC = blend(mainC, 58, textC);
    const blockC = options.blockCellColor;
    const selectedC = options.selectedCellColor;
    const highlightedC = options.highlightedCellColor;
    const relatedC = options.relatedCellColor;
    // const shadedC = `color-mix(in srgb, ${mainC} 86%, ${textC})`;
    const shadedC = blend(mainC, 86, textC);

    // noinspection CssInvalidPseudoSelector,CssInvalidHtmlTagReference
    const svgUrl = (s) => "data:image/svg+xml;utf8," + encodeURIComponent(
        s.replaceAll("mainColor", mainC)
            .replaceAll("accentColor", accentC)
            .replaceAll("textColor", textC));


    // language=CSS
    return `
        /* i went through every scss file on the website, extracted the rules related to color, translated them to css, 
           replaced them with the relevant variables, and placed them here. in general i also ignored rules for 
           non-desktop devices  */

        /* Board/Cell.scss */
        .xwd__cell text {
            fill: ${cellTextC};
        }

        .xwd__cell--cell {
            fill: ${cellC};
        }

        .xwd__cell--block {
            fill: ${blockC};
        }

        .xwd__cell--penciled ~ text:last-of-type {
            fill: ${pencilC};
        }

        .xwd__cell--shaded {
            fill: ${shadedC};
        }

        .xwd__cell--shaded .xwd__cell--guess {
            text-shadow: -1px 0 ${shadedC}, 0 1px ${shadedC}, 1px 0 ${shadedC}, 0 -1px ${shadedC};
        }

        .xwd__cell--highlighted {
            fill: ${highlightedC};
        }

        .xwd__cell--highlighted .xwd__cell--guess {
            text-shadow: -1px 0 ${highlightedC}, 0 1px ${highlightedC}, 1px 0 ${highlightedC}, 0 -1px ${highlightedC};
        }

        .xwd__cell--highlighted.xwd__cell--shaded {
            fill: ${blend(highlightedC, 65, shadedC)};
        }

        .xwd__cell--highlighted.xwd__cell--shaded .xwd__cell--guess {
            text-shadow: -1px 0 ${blend(highlightedC, 65, shadedC)}, 0 1px ${blend(highlightedC, 65, shadedC)}, 1px 0 ${blend(highlightedC, 65, shadedC)}, 0 -1px ${blend(highlightedC, 65, shadedC)};
        }

        .xwd__cell--selected {
            fill: ${selectedC};
        }

        .xwd__cell--selected .xwd__cell--guess {
            text-shadow: -1px 0 ${selectedC}, 0 1px ${selectedC}, 1px 0 ${selectedC}, 0 -1px ${selectedC};
        }

        .xwd__cell--selected.xwd__cell--shaded {
            fill: ${blend(selectedC, 65, shadedC)};
        }

        .xwd__cell--selected.xwd__cell--shaded .xwd__cell--guess {
            text-shadow: -1px 0 ${blend(selectedC, 65, shadedC)}, 0 1px ${blend(selectedC, 65, shadedC)}, 1px 0 ${blend(selectedC, 65, shadedC)}, 0 -1px ${blend(selectedC, 65, shadedC)};
        }

        .xwd__cell--related {
            fill: ${relatedC};
        }

        .xwd__cell--related.xwd__cell--highlighted {
            fill: ${blend(highlightedC, 65, relatedC)};
        }

        .xwd__cell--related.xwd__cell--highlighted.xwd__cell--selected {
            fill: ${blend(selectedC, 65, relatedC)};
        }

        .xwd__cell--related .xwd__cell--guess {
            text-shadow: -1px 0 ${relatedC}, 0 1px ${relatedC}, 1px 0 ${relatedC}, 0 -1px ${relatedC};
        }

        .xwd__cell--related.xwd__cell--shaded {
            fill: ${blend(shadedC, 65, relatedC)};
        }

        /*custom*/
        #xwd-board > g[data-group="grid"] > path {
            stroke: ${blend(mainC, 41, textC)}
        }

        #xwd-board > g[data-group="grid"] > rect {
            stroke: ${blockC}
        }

        /* Board/assistance.scss */
        /* i think these are ok to keep as they are */
        /*.xwd__assistance--checked {*/
        /*    .xwd__assistance--slash {*/
        /*        stroke: $red1;*/
        /*    }*/
        /*}*/

        /*.xwd__assistance--revealed {*/
        /*    .xwd__assistance--flag {*/
        /*        fill: $red1;*/
        /*    }*/

        /*    .xwd__assistance--tatter {*/
        /*        fill: white;*/
        /*    }*/
        /*}*/

        /*.xwd__assistance--confirmed {*/
        /*    ~ text:last-of-type {*/
        /*        fill: $blue2;*/
        /*    }*/
        /*}*/

        /* ClueBar/ClueBarDesktop.scss */
        .xwd__clue-bar-desktop--bar {
            background: ${clueBarC};
        }

        .xwd__clue-bar-desktop--bar.obscured {
            background-color: ${shadedC};
        }

        /* ClueBar/ClueBarMobile.scss */
        .xwd__clue-bar-mobile--bar {
            /* for some reason, this color is the highlighted cell color, not the same clue bar bg color as on desktop */
            background-color: ${highlightedC};
        }

        /* ClueList/Clue/Clue.scss */
        .xwd__clue--filled {
            /* TODO: change to own color? */
            color: ${pencilC};
        }

        .xwd__clue--related {
            background-color: ${relatedC};
        }

        .xwd__clue--selected {
            background-color: ${highlightedC};
        }

        .xwd__clue--highlighted {
            border-left-color: ${highlightedC};
        }

        /* ClueList/ClueList.scss */
        .xwd__clue-list--obscured {
            li span:last-child {
                background-color: ${shadedC};
                color: ${shadedC};
            }
        }

        .xwd__clue-list--title {
            border-bottom-color: ${blend(mainC, 90, textC)};
        }

        /* CrosswordPage/CrosswordLoading.scss */
        .xwd__loading {
            background-color: ${blend(mainC, 98, textC)};
        }

        .xwd--loading-bar {
            background-color: ${blend(mainC, 80, textC)};
        }

        .xwd--loading-bar__fill {
            background-color: ${textC};
        }

        /* EditorialContent/EditorialCard.scss */
        .xwd__editorial-content--editorialCard {
            color: ${textC};

            .xwd__editorial-content--byline {
                /* this isn't exact but it's close enough */
                color: ${blend(textC, 42, mainC)};
            }

            .xwd__editorial-content--kicker {
                color: ${blend(textC, 80, mainC)};
            }
        }

        /* EditorialContent/SubGameplayGrid.scss */
        .xwd__editorial-content--subGameplayGrid {
            .xwd__editorial-content--header {
                border-top-color: ${textC};

                a {
                    color: ${textC};

                    &::after {
                        border-color: ${textC};
                    }
                }
            }
        }

        .xwd__editorial-content--cardsContainer a {
            border-left-color: ${blend(mainC, 86, textC)};
        }

        /* Juice/Milestone.scss */
        /* TODO: i have no idea what this is. there's one span with this class and it seems like it's always empty */
        .xwd__pill {
            background: #4f85e5;
            color: ${mainC};
        }

        /* Keyboard/Keyboard.scss */
        /* this file does have color stuff, but i'm going to choose to ignore it. i think it's for an onscreen keyboard 
           for mobile. i'm gonna go ahead and say that that's out of scope for this extension, considering the crossword 
           app already has a builtin dark mode */

        /* LandscapeWarning/LandscapeWarning.scss */
        .xwd__landscape-warning {
            /* not really sure what this is */
            background-color: ${mainC};
        }

        /* Modals/CongratsModal/Promotion/NextGameSuggestion.scss */
        .xwd__nextGameSuggestion--spellingBeeBase {
            > i {
                color: ${textC};
            }

            span {
                color: ${textC};
            }
        }

        /* Modals/CongratsModal/Promotion/PromotionalContent.scss */
        .xwd__promotional-content--link {
            color: ${textC};
        }

        /* Modals/CongratsModal/CongratsModal.scss */
        /* rules combined since they're all the same */
        .xwd__congrats-modal--homeDelivery_main,
        /*.xwd__congrats-modal--streakLength,*/ /* this should actually stay black since it's on a background of gold */
        .xwd__congrats-modal--content,
        .mini__congrats-modal--content {
            color: ${textC};
        }

        /* Modals/PrintOptionsModal/PrintOptionsModal.scss */
        /* there are colors here but i can't find them on the page or in the print modal */

        /* Modals/SettingsModal/SettingsModal.scss */
        /* there are colors here for the settings popup buttons but i'm gonna ignore it for now. 
           might come back to it later */

        /* Modals/SettingsModal/ShareModal.scss */
        /* there are colors here for but i'm gonna ignore it for now. might come back to it later */

        /* Modals/ModalButtons.scss */
        .mini-welcome-subscribe-cta_button {
            background-color: ${mainC};
            color: ${textC};
        }

        /* PuzzleHeader/Notes.scss */
        .xwd__info-modal {
            .xwd__notes--content {
                color: ${textC};
            }
        }

        .xwd__notes--content-container {
            /* not exact but close enough */
            background-color: ${blend(mainC, 95, textC)};
            border-color: ${blend(mainC, 90, textC)};
        }

        /* i'm not sure what this is for so i'm gonna ignore it */
        /*.xwd__notes--revealer {*/
        /*    button {*/
        /*        color: $red1;*/
        /*        background-color: #fff;*/
        /*        border: 1px solid $red1;*/
        /*    }*/
        /*}*/

        /* PuzzleHeader/PrintAndDownloadTools.scss */
        .xwd__printtools--button {
            background-color: ${mainC};
            color: ${textC};
            border: 1px solid ${textC};

            &:hover {
                background-color: ${blend(mainC, 95, textC)};
                color: ${textC};
            }
        }

        /* custom */
        .pz-icon-print-black {
            background-image: url('${svgUrl(printSVG)}');
        }

        /* RebusField/RebusField.scss */
        .xwd__rebus {
            background-color: ${mainC};
        }

        .xwd__rebus--input {
            background-color: ${mainC};
            color: ${textC};

            &:disabled {
                background-color: ${mainC};
            }
        }

        /* Toolbar/HelpMenu/HelpMenu.scss */
        .xwd__menu--item {
            /* close enough */
            background-color: ${blend(mainC, 98, textC)};
            color: ${textC};

            &:hover {
                /* close enough */
                background-color: ${blend(mainC, 90, textC)};
                color: ${textC};
            }
        }

        .xwd__menu--container {
            border-color: ${blend(mainC, 90, textC)};
        }

        /* Toolbar/Tool/Tool.scss */
        .xwd__toolbar_icon--reset-puzzle {
            background-image: url('${svgUrl(resetPuzzleSVG)}');
        }

        .xwd__toolbar_icon--settings-gear {
            background-image: url('${svgUrl(settingsGearSVG)}');
        }

        .xwd__toolbar_icon--pencil {
            background-image: url('${svgUrl(pencilSVG)}');
        }

        .xwd__toolbar_icon--pencil-active {
            background-image: url('${svgUrl(pencilWhiteSVG)}');
        }

        .xwd__toolbar_icon--info {
            background-image: url('${svgUrl(infoSVG)}');
        }

        .xwd__toolbar_icon--cheat-menu-active {
            background-image: url('${svgUrl(lifesaverWhiteSVG)}');
        }

        .xwd__toolbar_icon--cheat-menu {
            background-image: url('${svgUrl(lifesaverSVG)}');
        }

        .xwd__tool--button {
            :hover {
                background-color: ${blend(mainC, 95, textC)};;
            }
        }

        .xwd__tool--texty {
            color: ${textC};

            :hover {
                color: ${textC};
            }
        }

        .xwd__tool--autocheck,
        .xwd__tool--active {
            background-color: ${accentC};
            color: ${mainC};

            :hover {
                background-color: ${accentC};
                color: ${mainC};
            }
        }

        .xwd__tool--open {
            background-color: ${blend(mainC, 98, textC)};
            border-radius: 0;
            color: ${textC};

            &:hover {
                background-color: ${blend(mainC, 98, textC)};
                color: ${textC};
            }
        }

        .xwd__tool--autocheck.xwd__tool--open {
            background-color: ${accentC};
            color: ${mainC};

            :hover {
                background-color: ${blend(mainC, 98, textC)};
                color: ${textC};
            }

            > button:hover {
                background-color: ${accentC};
                color: ${mainC};
            }
        }

        /*custom*/
        .pz-icon-close {
            background-image: url('${svgUrl(closeSVG)}');
        }

        .pz-icon-pause {
            background-image: url('${svgUrl(pauseSVG)}');
        }

        /* Toolbar/Toolbar.scss */
        .xwd__toolbar--wrapper {
            background-color: ${mainC};
        }

        /*custom*/
        .pz-game-toolbar {
            border-color: ${blend(mainC, 87, textC)};
        }

        /* ../shared/ */

        /* Banner/Banner.module.scss */
        .banner {
            background: ${mainC};
            color: ${textC};
        }

        .arrow {
            background: ${mainC};
        }

        /* there are more but i can't find them on the page, so i'm gonna move on */

        /* ModalSystem/ModalWrapper.scss */
        .xwd__modal--overlay {
            background-color: ${mainC}60;
        }

        .xwd__modal--body {
            background-color: ${mainC};
            box-shadow: 0 3px 12px -1px ${textC}4d;
        }

        /* PillBlue/PillBlue.module.scss */
        .pill {
            color: ${mainC};
            border: 1px solid ${textC};
        }

        /* ../shared/ */

        /* foundation-game/index.scss */
        .pz-game-field {
            background: ${mainC};
            color: ${textC};
        }

        .pz-toolbar-button {
            color: ${textC};

            /*&:hover {*/
            /*    background-color: $gray6;*/
            /*}*/
        }

        /* foundation-game/modals.scss */
        /* i don't know where all this pzm stuff comes in. i can't find it, so i'm going to ignore it for now */
        .pzm-modals-wrapper {
            /*background: rgba(255, 255, 255, 0.85);*/
            background: ${mainC}d9;
        }

        .pzm-modal {
            background: ${mainC};
            /*border: 1px solid $gray5;*/
        }

        .pzm-modal-ex {
            /*TODO*/
            color: ${pencilC};
        }

        .pzm-modal__button {
            /*border: 1px solid $gray4;*/
            /*TODO*/
            color: #333;
            background: ${mainC};

            /* TODO: maybe later, for all 3 */
            /*@include button-states(#fff);*/
            /*&:hover {*/
            /*    background-color: darken($bg, 5);*/
            /*}*/
            /*&:active {*/
            /*    background-color: darken($bg, 10);*/
            /*}*/

            &.primary {
                /*TODO*/
                background: #4f85e5;
                color: ${mainC};
                /*@include button-states($blue3);*/
            }

            &.black {
                background: ${textC};
                color: ${mainC};
                /*@include button-states(#000);*/
            }
        }

        .pz-modal__title {
            color: ${textC};
        }

        .pz-modal__button {
            /*border: 1px solid #ccc;*/
            /*TODO*/
            color: #333;

            &.white {
                background-color: ${mainC};
                color: ${textC};

                &:hover {
                    background-color: ${mainC}f4;
                }
            }

            &.dark {
                background-color: ${textC};
                color: ${mainC};

                &:hover {
                    /*TODO*/
                    background-color: #333;
                }
            }

            &.disabled {
                background-color: ${textC}4d;
                color: ${mainC}80;

                &:hover {
                    background-color: ${textC}4d;
                }
            }
        }

        /* custom :/ */
        .xwd__modal--content {
            color: ${textC};
        }

        .pz-content {
            background: ${mainC};
            color: ${textC};
        }

        /* foundation-game/moments.scss */
        .pz-moment {
            color: ${textC};
        }

        .pz-moment__button {
            background: ${textC};
            color: ${mainC};

            &.secondary {
                color: ${textC};
                border-color: ${textC};
            }

            &.link {
                color: ${mainC};
                /*border-bottom: 1px solid $black;*/
            }
        }

        .pz-moment__button.secondary:active {
            color: ${mainC};
            border-color: ${mainC};
        }

        .pz-moment__button.extra-extra-wide:active {
            color: ${mainC};
            /*background: var(--bg-btn-emphasis);*/
        }

        .pz-moment__close_text {
            color: ${mainC};
        }

        /* foundation/scss/footer.scss */
        /* actually custom - i think this is enough */
        .pz-footer {
            background-color: ${mainC};
            color: ${textC};
        }

        .pz-footer__legal a {
            color: ${textC};
        }

        /* foundation/scss/hamburgers.scss */
        .pz-nav__hamburger {
            &:focus {
                background-color: ${blend(mainC, 90, textC)};
            }
        }

        /* foundation/scss/navigation.scss */
        .pz-nav, .pz-header {
            background: ${mainC};
        }

        /*custom*/
        .pz-nav {
            background: ${mainC};
            box-shadow: 0 1px 0 ${blend(mainC, 87, textC)};
        }

        .pz-nav__logo rect {
            fill: ${mainC};
        }

        .pz-nav__logo path {
            fill: ${textC};
        }

        .pz-nav__hamburger-inner, .pz-nav__hamburger-inner::before, .pz-nav__hamburger-inner::after {
            background-color: ${textC};
        }

        .pz-nav-drawer {
            background: ${mainC};
            color: ${textC};
        }

        .pz-nav-drawer__link.selected, .pz-nav-drawer__link:hover,
        .pz-nav-drawer__link:focus, .pz-nav-drawer__link:active {
            background-color: ${blend(mainC, 95, textC)};
        }

        .pz-nav__button, .pz-nav__button.gray {
            color: ${textC};
            /*border-color: #111;*/
            background-color: ${mainC};
        }

        .pz-nav__button:hover {
            color: ${textC};
            /*background-color: #1a1a1a;*/
        }

        .pz-nav-drawer__account {
            border-top-color: ${textC};
            background-color: ${mainC};
            box-shadow: 0 0 10px ${textC}40;
        }

        .pz-nav-drawer hr {
            background-color: ${blend(mainC, 86, textC)};
        }

        /* recolor the scroll bar, for fun */
        /* taken from https://stackoverflow.com/a/9664451/ */
        ::-webkit-scrollbar, ::-webkit-scrollbar-corner {
            background: ${blend(mainC, 95, textC)};
        }

        ::-webkit-scrollbar-thumb {
            background: ${blend(mainC, 50, textC)};
        }

        /*  
            TODO: still to fix:
                [done] change pencil to simply be a mix of cell and text color 
                [done] color of border below header
                [done] hamburger button becomes solid on click
                [done] pause icon
                [done] loading screen
                [done] exchange svg files for raw paths so they're colorable (https://stackoverflow.com/q/11529470/)
                [done] intersection of related and selected (ex. 11/15/24)
                [done] shaded (and intersection of shaded and selected) (ex. 7/3/2023)
                [done] color of note (ex. 2/29/2024)
            TODO: new features:
                [done] popup with color selection - selection color, highlighted color, related color, block color 
                [done] color presets - color selections are still there and can be changed, 
                    and there's a "save to custom" option
                rainbow text option!!
                seasonal decorations
                
            TODO: [done] instead of all this nonsense, copy over Cell.scss from nyt's website, 
                should be much easier to handle 
        */
    `;
};

console.log("CONTENT SCRIPT START");
const styleId = "nyt-dark-mode-extension-style";
let style = document.getElementById(styleId);

if (style === null) {
    console.log("Adding new style element");
    style = document.createElement("style");
    style.id = styleId;
    document.head.appendChild(style);
} else {
    // this should never happen, but just to be safe
    console.log("Found existing style element");
}

function changeStyle(options) {
    console.log("Style has been CHANGED: " + options.colors);
    style.innerText = styleText(options.colors);
}

// eslint-disable-next-line no-undef
chrome.storage.sync.get(["options"], (result) => {
    console.log("Options retrieved:", result.options);
    changeStyle(result.options);
});

// eslint-disable-next-line no-undef
chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === "sync" && changes.options) {
        console.log("Sync storage changed:", changes.options.newValue)
        changeStyle(changes.options.newValue);
    }
});
