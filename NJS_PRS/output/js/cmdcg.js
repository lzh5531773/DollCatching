var cmdcAlert=function(e){var t={closeAll:!1,content:"",buttons:{}},o=$.extend(t,e),c={},r=$('<div class="simpleAlert">'),n=$('<div class="simpleAlertShelter">'),a=$('<div class="simpleAlertBody">'),l=$('<img class="simpleAlertBodyClose" height="14" width="14"/>');$('<p class="simpleAlertBodyContent">'+o.content+"</p>");return c.init=function(){for(var e=0,t=!1,c=[],l=0;l<2;l++)for(var i in o.buttons)switch(l){case 0:c.push(i);break;case 1:t=c.length<=1,e++;var s=$('<a class="simpleAlertBtn simpleAlertBtn'+e+'"></a>'),d=$('<div class="simpleAlertFlash"></div>');s.bind("click",o.buttons[i]),a.bind("click",o.buttons[i]),d.bind("click",o.buttons[i]),a.append(s)}r.append(n).append(a).append(d),$("body").append(r),a.show().animate({opacity:"1"},350)},l.bind("click",function(){o.closeAll=!1,c.close()}),c.close=function(){o.closeAll?$(".simpleAlert").remove():a.animate({marginTop:"-188px",opacity:"0"},200,function(){$(".simpleAlert").last().remove()})},c.init(),c},CMDCG=CMDCG||{};CMDCG["do"]=function(){function e(){CMDCG["do"].raf=window.requestAnimationFrame(e),t.update(h,1e3/60,1)}var t=Matter.Engine,o=Matter.Render,c=Matter.Runner,r=Matter.Body,n=Matter.Composite,a=Matter.Composites,l=Matter.Common,i=Matter.Constraint,s=Matter.MouseConstraint,d=Matter.Mouse,m=Matter.World,u=Matter.Events,g=Matter.Bodies,b=CMDC.clearSource,C=CMDC.timeout,p=CMDC.playAgain,M=CMDC.sourceLinkRoot,f=CMDC.tmallLink;CMDCG["do"].disappearSTO={},CMDCG["do"].sto1={},CMDCG["do"].sto1p5={},CMDCG["do"].sto0p3={},CMDCG["do"].sto1p8={},CMDCG["do"].sto0p2={},CMDCG["do"].sto1p2={},CMDCG["do"].sto2={},CMDCG["do"].clicked=!1,CMDCG["do"].redAlertShow=!1,CMDCG["do"].ragdollMove=!1,CMDCG["do"].raf={},CMDCG["do"].engineCallback={},CMDCG["do"].createRagdoll=function(e,t,o,c,a){var s=.6,d=.8,m=.6;o="undefined"==typeof o?1:o;var u=l.extend({label:"chest",collisionFilter:{group:r.nextGroup(!0)},chamfer:{radius:[10*o,10*o,16*o,16*o]},render:{visible:!1},mass:s,frictionAir:0},c),b=l.extend({label:"left-arm",collisionFilter:{group:r.nextGroup(!0)},chamfer:{radius:10*o},render:{fillStyle:"#bdbabb",visible:!1,sprite:{xScale:m,yScale:m,texture:M+"img/left-upper-arm.png"}},mass:s,timeScale:d},c),C=l.extend({},b,{label:"left-lower-arm",render:{fillStyle:"#cfcdd2",visible:!1,sprite:{xScale:m,yScale:m,texture:M+"img/left-bottom-arm.png"}},chamfer:{radius:6*o},mass:s}),p=l.extend({label:"right-arm",collisionFilter:{group:r.nextGroup(!0)},chamfer:{radius:10*o},render:{fillStyle:"#bdbabb",visible:!1,sprite:{xScale:m,yScale:m,texture:M+"img/right-upper-arm.png"}},mass:s,timeScale:d},c),f=l.extend({},p,{label:"right-lower-arm",render:{fillStyle:"#cfcdd2",visible:!1,sprite:{xScale:m,yScale:m,texture:M+"img/right-bottom-arm.png"}},chamfer:{radius:6*o},mass:s}),h=g.rectangle(e,t,70*o,25*o,u),D=g.rectangle(e+45*o,t-10*o,17*o,54*o,p),k=g.rectangle(e+45*o,t+20*o,14*o,86*o,f),G=g.rectangle(e-45*o,t-10*o,17*o,54*o,b),v=g.rectangle(e-45*o,t+20*o,14*o,86*o,C),y=i.create({label:"CHEST_TO_RIGHT_UPPER",bodyA:h,pointA:{x:24*o,y:0},pointB:{x:-5,y:-45*o},bodyB:D,angularStiffness:.4,length:0,render:{anchors:!1,visible:!1}}),S=i.create({label:"CHEST_TO_LEFT_UPPER",bodyA:h,pointA:{x:-24*o,y:0},pointB:{x:5,y:-45*o},bodyB:G,angularStiffness:.4,length:0,render:{anchors:!1,visible:!1}}),x=i.create({label:"UPPER_TO_LOWER_RIGHT",bodyA:D,bodyB:k,pointA:{x:0,y:20*o},pointB:{x:-8,y:-38*o},angularStiffness:1,render:{visible:!1,anchors:!1},length:0}),L=i.create({label:"UPPER_TO_LOWER_LEFT",bodyA:G,bodyB:v,pointA:{x:0,y:20*o},pointB:{x:8,y:-38*o},angularStiffness:1,render:{visible:!1,anchors:!1},length:0});return n.create({bodies:[h,v,G,k,D],constraints:[L,x,S,y]})},CMDCG["do"].createStacks=function(e){var t=.02,o=.6,c=15,r=.65,n="stack";return a.stack(e.x,e.y,e.columns,e.rows,0,0,function(e,a){return l.random()<.3?g.rectangle(e+25*l.random(),a+5*l.random(),36,46,{label:n,render:{sprite:{xScale:r,yScale:r,texture:M+"img/rred.png"}},chamfer:{radius:c},timeScale:o,mass:t,angle:-Math.PI*l.random(0,1)}):l.random()>.3&&l.random()<.6?g.rectangle(e+25*l.random(),a+l.random(),36,46,{label:n,render:{sprite:{xScale:r,yScale:r,texture:M+"img/pred.png"}},chamfer:{radius:c},timeScale:o,mass:t,angle:-Math.PI*l.random(0,1)}):l.random()>.6&&l.random()<.65?g.rectangle(e+25*l.random(),a+15*l.random(),30,40,{label:n,render:{sprite:{xScale:r,yScale:r,texture:M+"img/ggift.png"}},chamfer:{radius:c},timeScale:o,mass:t,angle:-Math.PI*l.random(0,1)}):l.random()>.65&&l.random()<.7?g.rectangle(e+25*l.random(),a+15*l.random(),30,40,{label:n,render:{sprite:{xScale:r,yScale:r,texture:M+"img/pgift.png"}},chamfer:{radius:c},timeScale:o,mass:t,angle:-Math.PI*l.random(0,1)}):l.random()>.7&&l.random()<.75?g.rectangle(e+25*l.random(),a+4*l.random(),30,40,{label:n,render:{sprite:{xScale:r,yScale:r,texture:M+"img/bgift.png"}},chamfer:{radius:c},timeScale:o,mass:t,angle:-Math.PI*l.random(0,1)}):l.random()>.75&&l.random()<.8?g.rectangle(e+25*l.random(),a+4*l.random(),30,44,{label:n,render:{sprite:{xScale:r,yScale:r,texture:M+"img/obag.png"}},chamfer:{radius:c},timeScale:o,mass:t,angle:-Math.PI*l.random(0,1)}):l.random()>.8&&l.random()<.85?g.rectangle(e+25*l.random(),a+3*l.random(),30,44,{label:n,render:{sprite:{xScale:r,yScale:r,texture:M+"img/pbag.png"}},chamfer:{radius:c},timeScale:o,mass:t,angle:-Math.PI*l.random(0,1)}):l.random()>.85&&l.random()<.9?g.rectangle(e+25*l.random(),a+44*l.random(),30,44,{label:n,render:{sprite:{xScale:r,yScale:r,texture:M+"/img/rbag.png"}},chamfer:{radius:c},timeScale:o,mass:t,angle:-Math.PI*l.random(0,1)}):g.rectangle(e+25*l.random(),a+4*l.random(),30,44,{label:n,render:{sprite:{xScale:r,yScale:r,texture:M+"/img/rred.png"}},chamfer:{radius:c},timeScale:o,mass:t,angle:-Math.PI*l.random(0,1)})})},CMDCG["do"].setVisible=function(){F.render.visible=!0;for(var e=0;e<w.bodies.length;e++)w.bodies[e].render.visible=!0;for(var t=0;t<I.bodies.length;t++){var o=I.bodies[t];"chest"!==o.label&&(o.render.visible=!0)}},CMDCG["do"].openNewWindow=function(e,t){var o=document.createElement("a");o.setAttribute("href",e),o.setAttribute("target","blank"),o.setAttribute("id",t),document.getElementById(t)||document.body.appendChild(o),o.click()},CMDCG["do"].clickFun=function(e){if(!CMDCG["do"].clicked&&CMDCG["do"].ragdollMove){CMDCG["do"].ragdollMove=!1,CMDCG["do"].clicked=!0,F.stiffness=.005;var t=setInterval(function(){F.length>=200&&clearInterval(t),F.length+=30},80);CMDCG["do"].sto1=setTimeout(function(){_=!0,CMDCG["do"].sto1p5=setTimeout(function(){F.length=20,CMDCG["do"].sto1p8=setTimeout(function(){$(".simpleAlert").length>0||(CMDCG["do"].redAlertShow=!0,CMDCG["do"].alert=cmdcAlert({buttons:{gotmall:function(){window.open(f),CMDCG["do"].closeFun("receive"),CMDC.Interface.reportClick("click5",1)}}}),CMDCG["do"].setBodiesStatic(h,!0))},1.2*C)},1.5*C)},C),CMDC.Interface.reportClick(e)}},CMDCG["do"].closeFun=function(e){"disappear"!==e&&cmdcCookie.setToday("cmdcg",1),CMDCG["do"].disappearSTO&&clearTimeout(CMDCG["do"].disappearSTO),CMDCG["do"].sto1&&clearTimeout(CMDCG["do"].sto1),CMDCG["do"].sto1p5&&clearTimeout(CMDCG["do"].sto1p5),CMDCG["do"].sto0p3&&clearTimeout(CMDCG["do"].sto0p3),CMDCG["do"].sto1p8&&clearTimeout(CMDCG["do"].sto1p8),CMDCG["do"].sto0p2&&clearTimeout(CMDCG["do"].sto0p2),CMDCG["do"].sto1p2&&clearTimeout(CMDCG["do"].sto1p2),CMDCG["do"].sto2&&clearTimeout(CMDCG["do"].sto2),cancelAnimationFrame(CMDCG["do"].raf),setTimeout(function(){u.off(h,"beforeUpdate",CMDCG["do"].engineCallback)},C),$("body").css("overflow-y","auto"),window.scrollTo(255,0),b(),m.clear(D),$("#cm-d-c").remove(),$(".cm-dc-class").remove(),$("#cm-d-c-style").remove(),$(".simpleAlert").remove(),CMDCG["do"].unbindEvents(),CMDCG["do"].alert&&CMDCG["do"].alert.close(),CMDC.Interface.close(e)},CMDCG["do"].bindEvents=function(){$(".cm-dc-middle").bind("click mouseover mouseout",function(e){"mouseover"===e.type?CMDCG["do"].disappearSTO&&clearTimeout(CMDCG["do"].disappearSTO):"mouseout"===e.type?CMDCG["do"].disappear():"click"===e.type&&CMDCG["do"].clickFun("click1")}),$(".cm-dc-start-btn, .cm-dc-start-small-btn").bind("click mouseover mouseout",function(){"mouseover"===event.type?CMDCG["do"].disappearSTO&&clearTimeout(CMDCG["do"].disappearSTO):"mouseout"===event.type?CMDCG["do"].disappear():"click"===event.type&&CMDCG["do"].clickFun("click2")}),$(".cm-dc-close, .cm-dc-close-small").bind("click",function(){!CMDCG["do"].redAlertShow&&CMDCG["do"].closeFun("exit1"),CMDCG["do"].redAlertShow&&CMDCG["do"].closeFun("exit2")}),document.onkeydown=function(e){CMDCG["do"].clickFun("click4")},$(".cm-dc-left, .cm-dc-right").bind("click",function(){window.open(f),CMDC.Interface.reportClick("click6",1)}),$(".cm-dc-left").bind("mouseover",function(){$(".cm-dc-11logo-left").css("background-image","url("+M+"img/11logo-hover.png)")}),$(".cm-dc-left").bind("mouseout",function(){$(".cm-dc-11logo-left").css("background-image","url("+M+"img/11logo.png)")}),$(".cm-dc-right").bind("mouseover",function(){$(".cm-dc-11logo-right").css("background-image","url("+M+"img/11logo-hover.png)")}),$(".cm-dc-right").bind("mouseout",function(){$(".cm-dc-11logo-right").css("background-image","url("+M+"img/11logo.png)")})},CMDCG["do"].unbindEvents=function(){$(".cm-dc-middle").unbind("click mouseover mouseout"),$(".cm-dc-start-btn, .cm-dc-start-small-btn").unbind("click mouseover mouseout"),$(".cm-dc-close, .cm-dc-close-small").unbind("click"),document.onkeydown=function(e){},$(".cm-dc-left, .cm-dc-right").unbind("click mouseover mouseout")},CMDCG["do"].setBodiesStatic=function(e,t){for(var o,c=n.allBodies(e.world),a=!1,l=!1,i=0;i<c.length;i++)o=c[i],o.position.y<=400&&!~["chest","left-arm","right-arm"].indexOf(o.label)?("stack"===o.label&&(a=!0),r.setStatic(o,t)):("left-lower-arm"===o.label||"right-lower-arm"===o.label)&&o.position.y>405&&(l=!0);a&&CMDC.Interface.reportClick("click3"),!a&&l&&CMDC.Interface.reportClick("click3")},CMDCG["do"].disappear=function(){CMDCG["do"].disappearSTO=setTimeout(function(){!CMDCG["do"].clicked&&CMDCG["do"].closeFun("disappear")},20*C)},CMDCG["do"].disappear();var h=t.create({}),D=h.world,k=o.create({element:document.body,engine:h,options:{width:1180,height:document.documentElement.clientHeight,background:"transparent",showAngleIndicator:!1,wireframes:!1}}),G=c.create(),v={isStatic:!0,background:"transparent",render:{fillStyle:"#f84851"}},y=10,S=.01;o.run(k),c.run(G,h),D.bodies=[],$("#cm-d-c").css("min-width",1180),m.add(D,[g.rectangle(400,450+y,800.5+2*y,S,v),g.rectangle(800+y,300,S,600.5+2*y,v),g.rectangle(-y,300,S,600.5+2*y,v)]);var x={x:5,y:350,columns:14,rows:1},L=CMDCG["do"].createStacks(x);m.add(D,L),CMDCG["do"].sto0p2=setTimeout(function(){m.add(D,[I,R,w]),CMDCG["do"].sto1p2=setTimeout(function(){CMDCG["do"].setVisible()},1.5*C),CMDCG["do"].sto2=setTimeout(function(){CMDCG["do"].ragdollMove=!0},2*C)},.2*C);var A=400,E=10,O=r.nextGroup(!0),T=-1,w=a.stack(A,E,1,1,0,10,function(e,t){return g.rectangle(e,t,25,15,{label:"component",collisionFilter:{group:O},chamfer:.5,render:{visible:!1,sprite:{xScale:.66,yScale:.66,texture:M+"img/connect.png"}}})}),j=g.rectangle(A,100,35,55,{label:"arm",render:{visible:!1,sprite:{xScale:.66,yScale:.66,texture:M+"img/chest.png"}}});w.bodies.push(j),a.chain(w,.5,0,-.5,0,{length:0,render:{visible:!1}}),n.add(w,i.create({label:"spring",bodyB:w.bodies[0],pointB:{x:-5,y:0},pointA:{x:w.bodies[0].position.x,y:w.bodies[0].position.y},stiffness:.05,damping:1,length:80,render:{visible:!1,lineWidth:4,strokeStyle:"#3442c7"}}));var I,B=[],F=w.constraints[1];I=CMDCG["do"].createRagdoll(400,100,1.1,{},B);var P,R=i.create({bodyA:w.bodies[w.bodies.length-1],bodyB:I.bodies[0],pointA:{x:28,y:0},pointB:{x:0,y:-5},length:0,render:{visible:!1},stiffness:1}),_=!1,H=.5,U=-.5,W=2,V=-2,q=F.pointA.x,N=!1;CMDCG["do"].engineCallback=u.on(h,"beforeUpdate",function(e){if(I&&!(I.length<=0)){if(_?(p?(W+=.03,V-=.03,H+=.01,U-=.01,W>=2&&(W=2,V=-2),H>=.5&&(H=.5,U=-.5,_=!1,CMDCG["do"].ragdollMove=!0,p=!1,F.stiffness=.009)):(W-=.02,V+=.02,H-=.01,U+=.01,W<=.75&&(W=.75,V=-.75),H<=-.95&&(H=-.95,U=.95)),r.setAngle(I.bodies[1],H),r.setAngle(I.bodies[2],W),r.setAngle(I.bodies[3],U),r.setAngle(I.bodies[4],V)):(r.setAngle(I.bodies[1],.5),r.setAngle(I.bodies[2],2.2),r.setAngle(I.bodies[3],-.5),r.setAngle(I.bodies[4],-2.2)),CMDCG["do"].ragdollMove){if(T+=.0135,T<0)return;P=q+200*Math.sin(T),CMDCG["do"].clicked||(F.pointA.x=P)}window.innerHeight<=800&&!N?(cmdcObj.botEL.style.backgroundImage="url("+M+"img/control-small.png)",cmdcObj.botEL.style.height="180px",cmdcObj.buttonEL.style.backgroundImage="url("+M+"img/button-small.png)",cmdcObj.buttonEL.classList.contains("cm-dc-start-btn")&&cmdcObj.buttonEL.classList.remove("cm-dc-start-btn"),cmdcObj.rockerEL.classList.contains("cm-dc-rocker")&&cmdcObj.rockerEL.classList.remove("cm-dc-rocker"),cmdcObj.buttonEL.classList.toggle("cm-dc-start-small-btn"),cmdcObj.rockerEL.classList.toggle("cm-dc-rocker-small"),cmdcObj.rockerEL.style.backgroundImage="url("+M+"img/rocker-small.png)",cmdcObj.bottombakEL.style.backgroundImage="url("+M+"img/allbodies-small.png)",cmdcObj.bottombakEL.style.height="215px",cmdcObj.closeEL.style.backgroundImage="url("+M+"img/close-small.png)",cmdcObj.closeEL.classList.contains("cm-dc-close")&&cmdcObj.closeEL.classList.remove("cm-dc-close"),cmdcObj.closeEL.classList.toggle("cm-dc-close-small"),clearInterval(cmdcObj.si),cmdcObj.changeRockerSmall(),N=!0):window.innerHeight>800&&N&&(cmdcObj.botEL.style.backgroundImage="url("+M+"img/control.png)",cmdcObj.botEL.style.height="240px",cmdcObj.buttonEL.style.backgroundImage="url("+M+"img/button.png)",cmdcObj.buttonEL.classList.contains("cm-dc-start-small-btn")&&cmdcObj.buttonEL.classList.remove("cm-dc-start-small-btn"),cmdcObj.rockerEL.classList.contains("cm-dc-rocker-small")&&cmdcObj.rockerEL.classList.remove("cm-dc-rocker-small"),cmdcObj.buttonEL.classList.toggle("cm-dc-start-btn"),cmdcObj.rockerEL.classList.toggle("cm-dc-rocker"),cmdcObj.rockerEL.style.backgroundImage="url("+M+"img/rocker.png)",cmdcObj.bottombakEL.style.backgroundImage="url("+M+"img/allbodies.png)",cmdcObj.bottombakEL.style.height="300px",cmdcObj.closeEL.style.backgroundImage="url("+M+"img/close.png)",cmdcObj.closeEL.classList.contains("cm-dc-close-small")&&cmdcObj.closeEL.classList.remove("cm-dc-close-small"),cmdcObj.closeEL.classList.toggle("cm-dc-close"),clearInterval(cmdcObj.sis),cmdcObj.changeRocker(),N=!1)}});var z=d.create(k.canvas);s.create(h,{mouse:z,constraint:{stiffness:.2,render:{visible:!1}}});return k.mouse=z,o.lookAt(k,{min:{x:0,y:0},max:{x:800,y:600}}),e(),CMDCG["do"].bindEvents(),CMDC.Interface.reportShow("winpop"),$(".link_break")[1]&&window.scrollTo(255,$(".link_break")[1].offsetTop),{engine:h,runner:G,render:k,canvas:k.canvas,stop:function(){Matter.Render.stop(k),Matter.Runner.stop(G)}}};