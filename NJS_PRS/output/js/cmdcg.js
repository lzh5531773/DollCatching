var CMDCG=CMDCG||{};CMDCG["do"]=function(){function e(){window.requestAnimationFrame(e),t.update(C,5)}var t=Matter.Engine,r=Matter.Render,n=Matter.Runner,a=Matter.Body,i=Matter.Composite,o=Matter.Composites,l=Matter.Common,s=Matter.Constraint,c=Matter.MouseConstraint,d=Matter.Mouse,m=Matter.World,g=Matter.Events,u=Matter.Bodies,b=(Matter.Vertices,Matter.Svg,Matter.Query,Matter.Sleeping,CMDC.clearSource),f=CMDC.eventOff,p=CMDC.timeout,h=CMDC.playAgain,x=CMDC.sourceLinkRoot,S=CMDC.tmallLink;CMDCG["do"].createRagdoll=function(e,t,r,n,o){var c=.8,d=.6;r="undefined"==typeof r?1:r;var m=l.extend({label:"chest",collisionFilter:{group:a.nextGroup(!0)},chamfer:{radius:[10*r,10*r,16*r,16*r]},render:{visible:!1,sprite:{xScale:1.3,yScale:1.3,texture:x+"img/flash.png"}},frictionAir:0},n),g=l.extend({label:"left-arm",collisionFilter:{group:a.nextGroup(!0)},chamfer:{radius:10*r},render:{fillStyle:"#bdbabb",visible:!1,sprite:{xScale:d,yScale:d,texture:x+"img/left-upper-arm.png"}},timeScale:c},n),b=l.extend({},g,{label:"left-lower-arm",render:{fillStyle:"#cfcdd2",visible:!1,sprite:{xScale:d,yScale:d,texture:x+"img/left-bottom-arm.png"}},chamfer:{radius:6*r}}),f=l.extend({label:"right-arm",collisionFilter:{group:a.nextGroup(!0)},chamfer:{radius:10*r},render:{fillStyle:"#bdbabb",visible:!1,sprite:{xScale:d,yScale:d,texture:x+"img/right-upper-arm.png"}},timeScale:c},n),p=l.extend({},f,{label:"right-lower-arm",render:{fillStyle:"#cfcdd2",visible:!1,sprite:{xScale:d,yScale:d,texture:x+"img/right-bottom-arm.png"}},chamfer:{radius:6*r}}),h=u.rectangle(e,t,70*r,25*r,m),S=u.rectangle(e+45*r,t-10*r,17*r,54*r,f),y=u.rectangle(e+45*r,t+20*r,14*r,86*r,p),v=u.rectangle(e-45*r,t-10*r,17*r,54*r,g),M=u.rectangle(e-45*r,t+20*r,14*r,86*r,b),C=s.create({label:"CHEST_TO_RIGHT_UPPER",bodyA:h,pointA:{x:24*r,y:0},pointB:{x:-5,y:-45*r},bodyB:S,angularStiffness:.4,length:0,render:{anchors:!1,visible:!1}}),A=s.create({label:"CHEST_TO_LEFT_UPPER",bodyA:h,pointA:{x:-24*r,y:0},pointB:{x:5,y:-45*r},bodyB:v,angularStiffness:.4,length:0,render:{anchors:!1,visible:!1}}),w=s.create({label:"UPPER_TO_LOWER_RIGHT",bodyA:S,bodyB:y,pointA:{x:0,y:20*r},pointB:{x:-8,y:-38*r},angularStiffness:1,render:{visible:!1,anchors:!1},length:0}),B=s.create({label:"UPPER_TO_LOWER_LEFT",bodyA:v,bodyB:M,pointA:{x:0,y:20*r},pointB:{x:8,y:-38*r},angularStiffness:1,render:{visible:!1,anchors:!1},length:0});return i.create({bodies:[h,M,v,y,S],constraints:[B,w,A,C]})},CMDCG["do"].createStacks=function(e){var t=.05,r=.6,n=15;return o.stack(e.x,e.y,e.columns,e.rows,0,0,function(e,a){return l.random()<.3?u.rectangle(e+25*l.random(),a+5*l.random(),36,46,{render:{sprite:{xScale:M,yScale:M,texture:x+"img/rred.png"}},chamfer:{radius:n},timeScale:r,mass:t,angle:-Math.PI*l.random(0,1)}):l.random()>.3&&l.random()<.6?u.rectangle(e+25*l.random(),a+l.random(),36,46,{render:{sprite:{xScale:M,yScale:M,texture:x+"img/pred.png"}},chamfer:{radius:n},timeScale:r,mass:t,angle:-Math.PI*l.random(0,1)}):l.random()>.6&&l.random()<.65?u.rectangle(e+25*l.random(),a+15*l.random(),30,40,{render:{sprite:{xScale:M,yScale:M,texture:x+"img/ggift.png"}},chamfer:{radius:n},timeScale:r,mass:t,angle:-Math.PI*l.random(0,1)}):l.random()>.65&&l.random()<.7?u.rectangle(e+25*l.random(),a+15*l.random(),30,40,{render:{sprite:{xScale:M,yScale:M,texture:x+"img/pgift.png"}},chamfer:{radius:n},timeScale:r,mass:t,angle:-Math.PI*l.random(0,1)}):l.random()>.7&&l.random()<.75?u.rectangle(e+25*l.random(),a+4*l.random(),30,40,{render:{sprite:{xScale:M,yScale:M,texture:x+"img/bgift.png"}},chamfer:{radius:n},timeScale:r,mass:t,angle:-Math.PI*l.random(0,1)}):l.random()>.75&&l.random()<.8?u.rectangle(e+25*l.random(),a+4*l.random(),30,44,{render:{sprite:{xScale:M,yScale:M,texture:x+"img/obag.png"}},chamfer:{radius:n},timeScale:r,mass:t,angle:-Math.PI*l.random(0,1)}):l.random()>.8&&l.random()<.85?u.rectangle(e+25*l.random(),a+3*l.random(),30,44,{render:{sprite:{xScale:M,yScale:M,texture:x+"img/pbag.png"}},chamfer:{radius:n},timeScale:r,mass:t,angle:-Math.PI*l.random(0,1)}):l.random()>.85&&l.random()<.9?u.rectangle(e+25*l.random(),a+44*l.random(),30,44,{render:{sprite:{xScale:M,yScale:M,texture:x+"/img/rbag.png"}},chamfer:{radius:n},timeScale:r,mass:t,angle:-Math.PI*l.random(0,1)}):u.rectangle(e+25*l.random(),a+4*l.random(),30,44,{render:{sprite:{xScale:M,yScale:M,texture:x+"/img/rred.png"}},chamfer:{radius:n},timeScale:r,mass:t,angle:-Math.PI*l.random(0,1)})})},CMDCG["do"].setVisible=function(){N.render.visible=!0;for(var e=0;e<U.bodies.length;e++)U.bodies[e].render.visible=!0;for(var t=0;t<V.bodies.length;t++){var r=V.bodies[t];"chest"!==r.label&&(r.render.visible=!0)}},CMDCG["do"].openNewWindow=function(e,t){var r=document.createElement("a");r.setAttribute("href",e),r.setAttribute("target","blank"),r.setAttribute("id",t),document.getElementById(t)||document.body.appendChild(r),r.click()};var y=!1,v=!1,M=.55,C=t.create({}),A=C.world,w=r.create({element:document.body,engine:C,options:{width:1180,height:document.documentElement.clientHeight,background:"transparent",showAngleIndicator:!1,wireframes:!1}}),B=n.create(),D={isStatic:!0,background:"transparent",render:{fillStyle:"#f84851"}},T=10,P=.01;r.run(w),n.run(B,C),A.bodies=[],$("#cm-d-c").css("min-width",1180),m.add(A,[u.rectangle(400,470+T,800.5+2*T,P,D),u.rectangle(800+T,300,P,600.5+2*T,D),u.rectangle(-T,300,P,600.5+2*T,D)]);var E,G=!1,I=function(){if(!G&&v){v=!1,G=!0,N.stiffness=.005;var e=setInterval(function(){N.length>=200&&clearInterval(e),N.length+=30},80);setTimeout(function(){z=!0,setTimeout(function(){N.length=20,setTimeout(function(){"chest"===V.bodies[0].label&&(V.bodies[0].render.visible=!0)},.3*p),setTimeout(function(){$(".simpleAlert").length>0||(E=simpleAlert({content:"游戏结束啦！",buttons:{"再玩一次":function(){F(C,!1),h=!0,E.close()},"退出":function(){b(),f=!0,E.close(),m.clear(A),$("#cm-d-c").remove()}}}),window.open(S),F(C,!0),R())},3*p)},1.5*p)},p)}},R=function(){b(),f=!0,m.clear(A),window.scrollTo(255,0),$("#cm-d-c").remove(),$(".cm-dc-class").remove(),$("#cm-d-c-style").remove(),$(".simpleAlert").remove()},k={x:5,y:300,columns:24,rows:1},_=CMDCG["do"].createStacks(k);m.add(A,_),setTimeout(function(){m.add(A,[V,j,U]),y=!0,setTimeout(function(){v=!0},1.5*p),setTimeout(function(){CMDCG["do"].setVisible()},p)},.3*p);var F=function(e,t){for(var r=i.allBodies(e.world),n=0;n<r.length;n++){var o=r[n];o.position.y<=400&&!~["chest","left-arm","right-arm"].indexOf(o.label)&&a.setStatic(o,t)}},O=400,L=a.nextGroup(!0),H=-1,U=o.stack(O,45,1,1,0,10,function(e,t){return u.rectangle(e,t,25,15,{label:"component",collisionFilter:{group:L},chamfer:.5,render:{visible:!1,sprite:{xScale:.66,yScale:.66,texture:x+"img/connect.png"}}})}),W=u.rectangle(O,100,35,55,{label:"arm",render:{visible:!1,sprite:{xScale:.66,yScale:.66,texture:x+"img/chest.png"}}});U.bodies.push(W),o.chain(U,.5,0,-.5,0,{length:0,render:{visible:!1}}),i.add(U,s.create({label:"spring",bodyB:U.bodies[0],pointB:{x:-5,y:0},pointA:{x:U.bodies[0].position.x,y:U.bodies[0].position.y},stiffness:.009,damping:1,length:0,render:{visible:!1,lineWidth:4,strokeStyle:"#3442c7"}}));var V,q=[],N=U.constraints[1];l.choose(["#556270","#4ECDC4","#C7F464","#FF6B6B","#C44D58"]);V=CMDCG["do"].createRagdoll(400,100,1.1,{},q);var Q,j=s.create({bodyA:U.bodies[U.bodies.length-1],bodyB:V.bodies[0],pointA:{x:28,y:0},pointB:{x:0,y:-5},length:0,render:{visible:!1},stiffness:1}),z=!1,J=.5,K=-.5,X=2,Y=-2,Z=N.pointA.x;g.on(C,"beforeUpdate",function(e){if(!(!V||V.length<=0||f)&&(z?(h?(X+=.03,Y-=.03,J+=.01,K-=.01,X>=2&&(X=2,Y=-2),J>=.5&&(J=.5,K=-.5,z=!1,v=!0,h=!1,G=!1,N.stiffness=.009)):(X-=.02,Y+=.02,J-=.01,K+=.01,X<=.75&&(X=.75,Y=-.75),J<=-.95&&(J=-.95,K=.95)),a.setAngle(V.bodies[1],J),a.setAngle(V.bodies[2],X),a.setAngle(V.bodies[3],K),a.setAngle(V.bodies[4],Y)):(a.setAngle(V.bodies[1],.5),a.setAngle(V.bodies[2],2.2),a.setAngle(V.bodies[3],-.5),a.setAngle(V.bodies[4],-2.2)),v)){if(H+=.012,H<0)return;Q=Z+200*Math.sin(H),G||(N.pointA.x=Q)}});var ee=d.create(w.canvas),te=c.create(C,{mouse:ee,constraint:{stiffness:.2,render:{visible:!1}}});return g.on(te,"mouseup",function(e){I()}),w.mouse=ee,r.lookAt(w,{min:{x:0,y:0},max:{x:800,y:600}}),$(".cm-dc-start-btn").click(function(){I()}),$(".cm-dc-close").click(function(){R()}),e(),{engine:C,runner:B,render:w,canvas:w.canvas,stop:function(){Matter.Render.stop(w),Matter.Runner.stop(B)}}};