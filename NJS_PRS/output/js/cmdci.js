!function(){var e={sourceLinkRoot:"//act.cmcmcdn.com/dollcatching/NJS_PRS/output/",dc:{},playAgain:!1,bhObj:{},timeout:1e3,eventOff:!1,isInclude:function(e){for(var t=/js$/i.test(e),o=document.getElementsByTagName(t?"script":"link"),n=0;n<o.length;n++)if(o[n][t?"src":"href"].indexOf(e)!==-1)return!0;return!1},loadSource:function(){if(!e.isInclude("cmdcg.js")){var t=document.getElementsByTagName("HEAD").item(0),o=document.createElement("script"),n=document.createElement("script"),r=document.createElement("script"),c=document.createElement("script"),s=document.createElement("script"),i=document.createElement("script"),a=document.createElement("link"),m=document.createElement("script"),l=document.createElement("link"),d=e.sourceLinkRoot;o.src=d+"js/polyfill.js",n.src=d+"js/matter.js",r.src=d+"js/matter-tools.gui.js",c.src=d+"js/matter-tools.demo.js",s.src=d+"js/cmdcg.js",i.src=d+"js/simpleAlert.js",m.src=d+"js/tipso.min.js",a.href=d+"css/simpleAlert.css",l.href=d+"css/tipso.min.css",a.rel="stylesheet",a.type="text/css",l.rel="stylesheet",l.type="text/css",t.appendChild(a),t.appendChild(l),t.appendChild(o),t.appendChild(n),setTimeout(function(){t.appendChild(r),t.appendChild(c),t.appendChild(s),t.appendChild(i),t.appendChild(m)},500)}},removejscssfile:function(e,t){for(var o="js"===t?"script":"css"===t?"link":"none",n="js"===t?"src":"css"===t?"href":"none",r=document.getElementsByTagName(o),c=r.length;c>=0;c--)r[c]&&r[c].getAttribute(n)&&r[c].getAttribute(n).indexOf(e)!==-1&&r[c].parentNode.removeChild(r[c])},clearSource:function(){var t=e.removejscssfile,o=e.sourceLinkRoot;t(o+"js/simpleAlert.js","js"),t(o+"js/tipso.min.js","js"),t(o+"js/matter-dev.js","js"),t(o+"js/polyfill.js","js"),t(o+"js/matter-tools.demo.js","js"),t(o+"js/cmdcg.js","js"),t(o+"js/cmdcbh.js","js"),t(o+"css/simpleAlert.css","css"),t(o+"css/tipso.min.css","css")},Interface:{close:function(e){try{"receive"===e?parkOur.receive():parkOur.gameOver()}catch(t){}this.reportClose(e||"exit")},ready:function(){if(window.requestAnimationFrame&&Adventrue.sizeSupport()){try{parkOur.ready()}catch(e){}return this.reportShow("show"),!0}try{parkOur.notSupport()}catch(e){}return this.reportShow("not-support"),!1},click:function(){try{parkOur.receive()}catch(e){}},reportShow:function(e){this.report({snode:1365,expand:e})},reportClick:function(e,t,o){var n={snode:1163,expand:e,idx:t||1};o&&(n.shuang11=1),this.report(n)},reportClose:function(e){this.report({snode:10147,expand:e})},report:function(e){var t={node:1031100};for(var o in e)t[o]=e[o];t.w="zpgame",t.cid="";try{parkOur.report(t)}catch(n){window.console&&console.log("report",t)}}},play:function(){var t={toolbar:{title:"天猫双11主场",url:""},tools:{gui:!1},startExample:"cmdcg",examples:[{name:"DOLL_CATCHING",id:"cmdcg",init:DC["do"],sourceLink:e.sourceLinkRoot+"js/cmdcg.js"}]},o=e.dc;o=MatterTools.Demo.create(t),document.body.appendChild(o.dom.root),MatterTools.Demo.start(o)},buildWalls:function(){var e={botImg:"//act.cmcmcdn.com/upload/201710/1a0ea44ac368226ee4bb035db276356a.png",leftImg:"//act.cmcmcdn.com/upload/201710/1a0ea44ac368226ee4bb035db276356a.png"},t={$:function(e){return document.querySelector(e)},init:function(e){t.createDom(e)},createDom:function(e){var t="@-webkit-keyframes move_upper {from {opacity: 0;}to {opacity: 1; -webkit-transform: translateY(-100px);transform: translateY(-100px);}} @keyframes move_upper {from {opacity: 0;}to {opacity: 1; -webkit-transform: translateY(-100px);transform: translateY(-100px); }}.move_upper { -webkit-animation-name: move_upper;animation-name: move_upper; -webkit-animation-duration: .7s;animation-duration: .7s; -webkit-animation-iteration-count: 1;animation-iteration-count: 1; -webkit-animation-fill-mode: forwards;animation-fill-mode: forwards;}.cm-dc-bottom {cursor: pointer;z-index:99999;width:100%;height:100px;line-height:35px;position:fixed;bottom:0;left:0;font-size:14px;color:#000;text-align:center;;display:none} .cm-dc-left {cursor: pointer;z-index:99999;position:fixed;bottom:0;left:0;top:0;display:none}",o={};o=document.createElement("style"),o.type="text/css",o.innerHTML=t,document.getElementsByTagName("HEAD").item(0).appendChild(o);var n=document.createElement("div"),r=document.createElement("div"),c=document.createElement("img"),s=document.createElement("img");n.className="cm-dc-bottom",r.className="cm-dc-left",c.src=e.botImg,c.style.display="inline-block",s.src=e.leftImg,s.style.display="inline-block",n.appendChild(c),r.appendChild(s),document.body.appendChild(n),document.body.appendChild(r)},show:function(){t.botEL.style.display="block",t.leftEL.style.display="block",t.botEL.style.bottom="-100px",t.botEL.classList.toggle("move_upper")},botEL:{},leftEL:{}};t.init(e),t.botEL=t.$(".cm-dc-bottom"),t.leftEL=t.$(".cm-dc-left")}};window.CMDC=e,e.loadSource(),e.buildWalls(),setTimeout(function(){e.play()},e.timeout)}();