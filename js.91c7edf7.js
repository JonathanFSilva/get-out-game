parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"nf3I":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Character=void 0;var e=require("../globals");function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}var n=function(){function a(e,r,n){t(this,a),this.name=e,this.health=r,this.kinship=n}return r(a,[{key:"looseHealth",value:function(t){this.health>0&&(this.health-=t,this.health<=0?(this.health=0,e.Globals.logs.push(this.name+" died at day "+e.Globals.currentDay)):e.Globals.logs.push(this.name+" lost -"+t+" health"))}}]),a}();exports.Character=n;
},{"../globals":"5zVv"}],"5zVv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Globals=void 0;var e=require("/js/entities/Character.js"),a={gameStates:{TRAVEL:1,CAMP:2,SLEEP:3,HUNT:4,HEAL:5,STATS:6,EVENT:7,WALKING:8,REPORT:9,GAME_OVER:10},currentState:1,currentDay:0,hours:0,characters:[],travelledDistance:0,logs:[],gamePages:{travelPage:document.getElementById("travel-page"),campPage:document.getElementById("camp-page"),sleepPage:document.getElementById("sleep-page"),huntPage:document.getElementById("hunt-page"),healPage:document.getElementById("heal-page"),statsPage:document.getElementById("stats-page"),eventPage:document.getElementById("event-page"),walkingPage:document.getElementById("walking-page"),reportPage:document.getElementById("report-page"),gameOverPage:document.getElementById("game-over-page")}};exports.Globals=a,a.characters.push(new e.Character("Ethan",5,"father")),a.characters.push(new e.Character("Olivia",5,"mother")),a.characters.push(new e.Character("Michael",5,"son")),a.characters.push(new e.Character("Sophia",5,"daughter")),a.characters.push(new e.Character("Emma",5,"grandmother"));
},{"/js/entities/Character.js":"nf3I"}],"xsWE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Camp=void 0;var t=require("../globals.js");function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function a(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}var o=function(){function n(t){var a=this;e(this,n),this.game=t,this.campImg=document.querySelector("#camp-img"),this.travelBtn=document.querySelector("#travel-btn"),this.statsBtn=document.querySelector("#stats-btn"),this.sleepBtn=document.querySelector("#sleep-btn"),this.huntBtn=document.querySelector("#hunt-btn"),this.healBtn=document.querySelector("#heal-btn"),this.travelBtn.addEventListener("click",function(t){a.onClickTravel(t)}),this.statsBtn.addEventListener("click",function(t){a.onClickStats(t)}),this.sleepBtn.addEventListener("click",function(t){a.onClickSleep(t)}),this.huntBtn.addEventListener("click",function(t){a.onClickHunt(t)}),this.healBtn.addEventListener("click",function(t){a.onClickHeal(t)})}return a(n,[{key:"start",value:function(){}},{key:"onClickTravel",value:function(){this.game.goToState(t.Globals.gameStates.TRAVEL)}},{key:"onClickStats",value:function(){this.game.goToState(t.Globals.gameStates.STATS)}},{key:"onClickSleep",value:function(){this.game.goToState(t.Globals.gameStates.SLEEP)}},{key:"onClickHunt",value:function(){this.game.goToState(t.Globals.gameStates.HUNT)}},{key:"onClickHeal",value:function(){this.game.goToState(t.Globals.gameStates.HEAL)}}]),n}();exports.Camp=o;
},{"../globals.js":"5zVv"}],"khus":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Event=void 0;var e=require("../globals.js");function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=function e(n,s){t(this,e),this.name=n,this.description=s};exports.Event=n;
},{"../globals.js":"5zVv"}],"HaJu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Events=void 0;var e=require("./Event.js"),t=require("../globals.js");function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}var r=function(){function a(e){var t=this;n(this,a),this.game=e,this.reportPage=document.getElementById("report-page"),this.eventPageTitle=document.getElementById("event-page-title"),this.eventPageDescription=document.getElementById("event-page-description"),this.eventPageImage=document.getElementById("event-page-image"),this.eventPageBackBtn=document.getElementById("event-page-back-btn"),this.eventPageBackBtn.addEventListener("click",function(e){t.onEventPageBackBtn(e)})}return i(a,[{key:"start",value:function(){var t=[new e.Event("Event 1","Event description"),new e.Event("Wolf","Event description")],n=this.getRandomArbitrary(t.length);this.event=t[n],this.showEvent()}},{key:"showEvent",value:function(){this.eventPageTitle.innerHTML=this.event.name,this.eventPageDescription.innerHTML=this.event.description}},{key:"onEventPageBackBtn",value:function(e){this.game.goToState(t.Globals.gameStates.TRAVEL)}},{key:"getRandomArbitrary",value:function(e){return Math.floor(Math.random()*e)}}]),a}();exports.Events=r;
},{"./Event.js":"khus","../globals.js":"5zVv"}],"ipOg":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.GameOver=void 0;var e=require("../globals.js");function r(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function t(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}var a=function(){function e(t){r(this,e),this.game=t}return n(e,[{key:"start",value:function(){}}]),e}();exports.GameOver=a;
},{"../globals.js":"5zVv"}],"k8bR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Heal=void 0;var e=require("../globals.js");function r(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function t(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}var a=function(){function e(t){r(this,e),this.game=t}return n(e,[{key:"start",value:function(){}}]),e}();exports.Heal=a;
},{"../globals.js":"5zVv"}],"mPZJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Hunt=void 0;var e=require("../globals.js");function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}var o=function(){function e(n){t(this,e),this.game=n}return r(e,[{key:"start",value:function(){}}]),e}();exports.Hunt=o;
},{"../globals.js":"5zVv"}],"Bh8L":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Report=void 0;var e=require("../globals.js");function r(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function t(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}var o=function(){function e(t){r(this,e),this.game=t}return n(e,[{key:"start",value:function(){}}]),e}();exports.Report=o;
},{"../globals.js":"5zVv"}],"VEAF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Sleep=void 0;var e=require("../globals.js");function r(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function t(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}var o=function(){function e(t){r(this,e),this.game=t}return n(e,[{key:"start",value:function(){}}]),e}();exports.Sleep=o;
},{"../globals.js":"5zVv"}],"1NOm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Stats=void 0;var e=require("../globals.js");function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}var i=function(){function r(e){t(this,r),this.game=e,this.currentCharacterIndex=0,this.getPageElements()}return n(r,[{key:"start",value:function(){this.showCurrentCharacter()}},{key:"getPageElements",value:function(){var e=this;this.nameField=document.querySelector("#name-field"),this.kinshipField=document.querySelector("#kinship-field"),this.thinkingField=document.querySelector("#thinking-field"),this.healthField=document.querySelector("#health-field"),this.woundsField=document.querySelector("#wounds-field"),this.hungerField=document.querySelector("#hunger-field"),this.fatigueField=document.querySelector("#fatigue-field"),this.feelingField=document.querySelector("#feeling-field"),this.itemField=document.querySelector("#item-field"),this.previousCharacterBtn=document.querySelector("#previous-character-btn"),this.nextCharacterBtn=document.querySelector("#next-character-btn"),this.backCharacterBtn=document.querySelector("#back-character-btn"),this.previousCharacterBtn.addEventListener("click",function(t){e.onClickPreviousCharacter(t)}),this.nextCharacterBtn.addEventListener("click",function(t){e.onClickNextCharacter(t)}),this.backCharacterBtn.addEventListener("click",function(t){e.onClickBackCharacter(t)})}},{key:"onClickPreviousCharacter",value:function(){this.currentCharacterIndex>0&&this.currentCharacterIndex--,this.showCurrentCharacter()}},{key:"onClickNextCharacter",value:function(){this.currentCharacterIndex<e.Globals.characters.length-1&&this.currentCharacterIndex++,this.showCurrentCharacter()}},{key:"showCurrentCharacter",value:function(){var t=e.Globals.characters[this.currentCharacterIndex];this.nameField.innerHTML="Name: "+t.name,this.healthField.innerHTML="Health: "+t.health,this.kinshipField.innerHTML="Kinship: "+t.kinship}},{key:"onClickBackCharacter",value:function(){this.game.goToState(e.Globals.gameStates.CAMP)}}]),r}();exports.Stats=i;
},{"../globals.js":"5zVv"}],"dfWL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Travel=void 0;var e=require("../globals.js");function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function l(e,t,l){return t&&a(e.prototype,t),l&&a(e,l),e}var n=function(){function a(e){var l=this;t(this,a),this.game=e,this.travelPage=document.querySelector("#travel-page"),this.travelImage=document.querySelector("#travel-img"),this.travelledDistanceField=document.querySelector("#travelled-distance"),this.currentTimeField=document.querySelector("#current-time-field"),this.progressBar=document.querySelector("#progress-bar"),this.walkBtn=document.querySelector("#walk-btn"),this.campBtn=document.querySelector("#camp-btn"),this.walkBtn.addEventListener("click",function(e){l.onClickWalk(e)}),this.campBtn.addEventListener("click",function(e){l.onClickCamp(e)})}return l(a,[{key:"start",value:function(){e.Globals.currentDay++,this.showTime()}},{key:"onClickWalk",value:function(e){this.startWalking(),this.passHours(3)}},{key:"onClickCamp",value:function(t){this.game.goToState(e.Globals.gameStates.CAMP)}},{key:"passHours",value:function(e){for(var t=0;t<e&&this.walking;t++)this.gotoNextHour()}},{key:"gotoNextHour",value:function(){this.walkOneHour(),e.Globals.hours>=24&&(e.Globals.hours=0,this.gotoNextDay()),this.showTime(),this.checkEvent()}},{key:"checkEvent",value:function(){this.getRandomArbitrary(1,100)<=50&&this.game.goToState(e.Globals.gameStates.EVENT)}},{key:"getRandomArbitrary",value:function(e,t){return Math.random()*(t-e)+e}},{key:"gotoNextDay",value:function(){e.Globals.currentDay++,this.showTime()}},{key:"passOneHour",value:function(){e.Globals.hours++,this.showTime()}},{key:"showTime",value:function(){this.currentTimeField.innerHTML=e.Globals.hours+":00 - day "+e.Globals.currentDay,e.Globals.hours>=18||e.Globals.hours<=6?this.currentTimeField.innerHTML+=" - night":this.currentTimeField.innerHTML+=" - daylight"}},{key:"walkOneHour",value:function(){e.Globals.travelledDistance+=2,this.showTravelledDistance(),this.passOneHour(),e.Globals.characters[0].looseHealth(1),console.log(e.Globals.logs),e.Globals.travelledDistance>300&&this.arrivedAtTheGoal()}},{key:"showTravelledDistance",value:function(){this.travelledDistanceField.innerHTML="Travelled distance: "+e.Globals.travelledDistance+" miles"}},{key:"startWalking",value:function(){this.walking=!0}},{key:"stopWalking",value:function(){this.walking=!1}},{key:"arrivedAtTheGoal",value:function(){stopWalking(),this.game.goToState(e.Globals.gameStates.GAME_OVER)}}]),a}();exports.Travel=n;
},{"../globals.js":"5zVv"}],"uz18":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Walk=void 0;var e=require("../globals.js");function r(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function t(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}var a=function(){function e(t){r(this,e),this.game=t}return n(e,[{key:"start",value:function(){}}]),e}();exports.Walk=a;
},{"../globals.js":"5zVv"}],"6+xC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Game=void 0;var e=require("./globals.js"),a=require("./managers/Camp.js"),s=require("./managers/Events.js"),t=require("./managers/GameOver.js"),i=require("./managers/Heal.js"),r=require("./managers/Hunt.js"),h=require("./managers/Report.js"),n=require("./managers/Sleep.js"),g=require("./managers/Stats.js"),l=require("./managers/Travel.js"),o=require("./managers/Walk.js");function P(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function u(e,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function c(e,a,s){return a&&u(e.prototype,a),s&&u(e,s),e}var v=function(){function u(){P(this,u),this.states=e.Globals.gameStates,this.pages=e.Globals.gamePages,this.camp=new a.Camp(this),this.events=new s.Events(this),this.gameOver=new t.GameOver(this),this.heal=new i.Heal(this),this.hunt=new r.Hunt(this),this.report=new h.Report(this),this.sleep=new n.Sleep(this),this.stats=new g.Stats(this),this.travel=new l.Travel(this),this.walk=new o.Walk(this)}return c(u,[{key:"start",value:function(){var a=e.Globals.gamePages;this.hideAllPages(),this.showPage(a.campPage)}},{key:"onClick",value:function(e){this.goToState(this.states.TRAVEL)}},{key:"goToState",value:function(a){if(!a)throw"Invalid state!";e.Globals.currentState=a,this.setState()}},{key:"showPage",value:function(e){e.style.display="block"}},{key:"hidePage",value:function(e){e.style.display="none"}},{key:"hideAllPages",value:function(){var a=e.Globals.gamePages;this.hidePage(a.travelPage),this.hidePage(a.campPage),this.hidePage(a.sleepPage),this.hidePage(a.huntPage),this.hidePage(a.healPage),this.hidePage(a.statsPage),this.hidePage(a.eventPage),this.hidePage(a.reportPage),this.hidePage(a.walkingPage),this.hidePage(a.gameOverPage)}},{key:"setState",value:function(){var a=e.Globals.gamePages,s=e.Globals.gameStates;switch(this.hideAllPages(),e.Globals.currentState){case s.TRAVEL:this.showPage(a.travelPage),this.travel.start();break;case s.CAMP:this.showPage(a.campPage),this.camp.start();break;case s.SLEEP:this.showPage(a.sleepPage);break;case s.HUNT:this.showPage(a.huntPage);break;case s.HEAL:this.showPage(a.healPage);break;case s.STATS:this.showPage(a.statsPage),this.stats.start();break;case s.EVENT:this.showPage(a.eventPage),this.events.start();break;case s.WALK:this.showPage(a.walkingPage);break;case s.REPORT:this.showPage(a.reportPage);break;case s.GAME_OVER:this.showPage(a.gameOverPage)}}}]),u}();exports.Game=v;
},{"./globals.js":"5zVv","./managers/Camp.js":"xsWE","./managers/Events.js":"HaJu","./managers/GameOver.js":"ipOg","./managers/Heal.js":"k8bR","./managers/Hunt.js":"mPZJ","./managers/Report.js":"Bh8L","./managers/Sleep.js":"VEAF","./managers/Stats.js":"1NOm","./managers/Travel.js":"dfWL","./managers/Walk.js":"uz18"}],"QvaY":[function(require,module,exports) {
"use strict";var e=require("./Game.js"),r=new e.Game;r.start();
},{"./Game.js":"6+xC"}]},{},["QvaY"], null)
//# sourceMappingURL=/js.91c7edf7.map