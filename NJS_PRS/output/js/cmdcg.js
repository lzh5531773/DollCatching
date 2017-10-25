var DC=DC||{};DC["do"]=function(){var e=Matter.Engine,r=Matter.Render,a=Matter.Runner,t=Matter.Body,n=Matter.Composite,c=Matter.Composites,o=Matter.Common,d=Matter.Constraint,i=Matter.MouseConstraint,l=Matter.Mouse,m=Matter.World,s=Matter.Events,u=Matter.Bodies,g=(Matter.Vertices,Matter.Svg,Matter.Query,Matter.Sleeping,CMDC.clearSource),p=CMDC.eventOff,f=CMDC.timeout,S=CMDC.bhObj,b=CMDC.playAgain,x=CMDC.sourceLinkRoot;DC["do"].createRagdoll=function(e,r,a,c,i){var l=.8;a="undefined"==typeof a?1:a;var m=o.extend({label:"chest",collisionFilter:{group:t.nextGroup(!0)},chamfer:{radius:[10*a,10*a,16*a,16*a]},render:{sprite:{xScale:.7,yScale:.7,texture:x+"img/chest.png"}},frictionAir:0},c),s=o.extend({label:"left-arm",collisionFilter:{group:t.nextGroup(!0)},chamfer:{radius:10*a},render:{fillStyle:"#bdbabb"},timeScale:l},c),g=o.extend({},s,{label:"left-lower-arm",render:{fillStyle:"#cfcdd2"},chamfer:{radius:6*a}}),p=o.extend({label:"right-arm",collisionFilter:{group:t.nextGroup(!0)},chamfer:{radius:10*a},render:{fillStyle:"#bdbabb"},timeScale:l},c),f=o.extend({},p,{label:"right-lower-arm",render:{fillStyle:"#cfcdd2"},chamfer:{radius:6*a}}),S=u.rectangle(e,r,45*a,30*a,m),b=u.rectangle(e+39*a,r-15*a,17*a,54*a,p),h=u.rectangle(e+39*a,r+25*a,14*a,86*a,f),y=u.rectangle(e-39*a,r-15*a,17*a,54*a,s),v=u.rectangle(e-39*a,r+25*a,14*a,86*a,g),C=d.create({label:"CHEST_TO_RIGHT_UPPER",bodyA:S,pointA:{x:24*a,y:0},pointB:{x:0,y:-32*a},bodyB:b,angularStiffness:.2,length:0,render:{anchors:!1,visible:!1}}),M=d.create({label:"CHEST_TO_LEFT_UPPER",bodyA:S,pointA:{x:-24*a,y:0},pointB:{x:0,y:-32*a},bodyB:y,angularStiffness:.2,length:0,render:{anchors:!1,visible:!1}}),A=d.create({label:"UPPER_TO_LOWER_RIGHT",bodyA:b,bodyB:h,pointA:{x:0,y:20*a},pointB:{x:0,y:-36*a},angularStiffness:1,render:{visible:!0,anchors:!1},length:0}),w=d.create({label:"UPPER_TO_LOWER_LEFT",bodyA:y,bodyB:v,pointA:{x:0,y:20*a},pointB:{x:0,y:-36*a},angularStiffness:1,render:{visible:!0,anchors:!1},length:0});return n.create({bodies:[S,v,y,h,b],constraints:[w,A,M,C]})},DC["do"].createStacks=function(e){var r=.1,a=.7;return c.stack(e.x,e.y,e.columns,e.rows,0,0,function(e,t){return o.random()<.05?u.rectangle(e+15*o.random(),t+15*o.random(),26,16,{render:{sprite:{xScale:.8-v,yScale:.8-v,texture:x+"img/double11_1.png"}},chamfer:{radius:5},timeScale:a,mass:r}):o.random()>.05&&o.random()<.1?u.rectangle(e+15*o.random(),t+30*o.random(),24,24,{render:{sprite:{xScale:.8-v,yScale:.8-v,texture:"//act.cmcmcdn.com/upload/201710/f8e6bdd1572a5e8a2e2f73d8c52b1bf6.png"}},chamfer:{radius:5},timeScale:a,mass:r}):o.random()>.1&&o.random()<.15?u.rectangle(e+15*o.random(),t+15*o.random(),22,30,{render:{sprite:{xScale:.8-v,yScale:.8-v,texture:x+"img/red.png"}},chamfer:{radius:5},timeScale:a,mass:r}):o.random()>.15&&o.random()<.2?u.rectangle(e+15*o.random(),t+15*o.random(),24,24,{render:{sprite:{xScale:.8-v,yScale:.8-v,texture:x+"img/gift.png"}},chamfer:{radius:5},timeScale:a,mass:r}):o.random()>.2&&o.random()<.25?u.circle(e+15*o.random(),t+5*o.random(),16,{render:{sprite:{xScale:.8-v,yScale:.8-v,texture:x+"img/coin.png"}},timeScale:a,mass:r}):o.random()>.25&&o.random()<.3?u.circle(e+15*o.random(),t+10*o.random(),12,{render:{sprite:{xScale:.8-v,yScale:.8-v,texture:x+"img/duck.png"}},timeScale:a,mass:r}):o.random()>.3&&o.random()<.35?u.circle(e+15*o.random(),t+5*o.random(),16,{render:{sprite:{xScale:.8-v,yScale:.8-v,texture:"//act.cmcmcdn.com/upload/201710/bd2bd1fb94a20ca2f9eea1088925050a.png"}},timeScale:a,mass:r}):o.random()>.35&&o.random()<.4?u.rectangle(e+15*o.random(),t+15*o.random(),28,38,{render:{sprite:{xScale:.8-v,yScale:.8-v,texture:"//act.cmcmcdn.com/upload/201710/24af186e46de0d872942ef2709f83b71.gif"}},chamfer:{radius:5},timeScale:a,mass:r}):o.random()>.4&&o.random()<.45?u.rectangle(e+15*o.random(),t+45*o.random(),38,18,{render:{sprite:{xScale:.5-v,yScale:.5-v,texture:"//act.cmcmcdn.com/upload/201710/2a126249ff498557a38cc920a64481c7.png"}},chamfer:{radius:5},timeScale:a,mass:r}):o.random()>.45&&o.random()<.5?u.rectangle(e+15*o.random(),t+40*o.random(),28,23,{render:{sprite:{xScale:.7-v,yScale:.7-v,texture:x+"img/10.png"}},chamfer:{radius:5},timeScale:a,mass:r}):o.random()>.5&&o.random()<.55?u.rectangle(e+15*o.random(),t+32*o.random(),38,23,{render:{sprite:{xScale:.7-v,yScale:.7-v,texture:x+"img/500.png"}},chamfer:{radius:5},timeScale:a,mass:r}):o.random()>.55&&o.random()<.6?u.rectangle(e+15*o.random(),t+44*o.random(),38,23,{render:{sprite:{xScale:.7-v,yScale:.7-v,texture:x+"/img/100.png"}},chamfer:{radius:5},timeScale:a,mass:r}):o.random()>.6&&o.random()<.65?u.rectangle(e+15*o.random(),t+21*o.random(),63,23,{render:{sprite:{xScale:.7-v,yScale:.7-v,texture:x+"/img/10000.png"}},chamfer:{radius:5},timeScale:a,mass:r}):o.random()>.65&&o.random()<.7?u.rectangle(e+15*o.random(),t+29*o.random(),28,23,{render:{sprite:{xScale:.7-v,yScale:.7-v,texture:x+"/img/50.png"}},chamfer:{radius:5},timeScale:a,mass:r}):o.random()>.7&&o.random()<.75?u.rectangle(e+15*o.random(),t+15*o.random(),28,28,{render:{sprite:{xScale:.8-v,yScale:.8-v,texture:"//act.cmcmcdn.com/upload/201710/25cd325bae7818e30a4d4676ec0880bf.png"}},chamfer:{radius:5},timeScale:a,mass:r}):o.random()>.75&&o.random()<.8?u.rectangle(e+15*o.random(),t+15*o.random(),28,28,{render:{sprite:{xScale:.8-v,yScale:.8-v,texture:"//act.cmcmcdn.com/upload/201710/c1fede413fbd7b3de23a771472e67d29.png"}},chamfer:{radius:5},timeScale:a,mass:r}):o.random()>.8&&o.random()<.85?u.rectangle(e+15*o.random(),t+15*o.random(),28,28,{render:{sprite:{xScale:.8-v,yScale:.8-v,texture:"//act.cmcmcdn.com/upload/201710/9de67782c268517089e6d031af85405c.png"}},chamfer:{radius:5},timeScale:a,mass:r}):o.random()>.85&&o.random()<.9?u.rectangle(e+15*o.random(),t+15*o.random(),28,28,{render:{sprite:{xScale:.8-v,yScale:.8-v,texture:"//act.cmcmcdn.com/upload/201710/45991158829180f3a86597a0ef781c3a.png"}},chamfer:{radius:5},timeScale:a,mass:r}):o.random()>.95&&o.random()<1?u.rectangle(e+15*o.random(),t+15*o.random(),28,28,{render:{sprite:{xScale:.8-v,yScale:.8-v,texture:"//act.cmcmcdn.com/upload/201710/328c7178f239ce35264850419510b3be.png"}},chamfer:{radius:5},timeScale:a,mass:r}):u.circle(e+15*o.random(),t+15*o.random(),16,{render:{sprite:{xScale:.7-v,yScale:.7-v,texture:x+"img/liebao.png"}},timeScale:a,mass:r})})};var h=!1,y=!1,v=.1,C=e.create({}),M=C.world,A=r.create({element:document.body,engine:C,options:{width:1180,height:document.documentElement.clientHeight,background:"transparent",showAngleIndicator:!1,wireframes:!1}}),w=a.create(),k={isStatic:!0,background:"transparent",render:{fillStyle:"#f84851"}},B=document.documentElement.clientWidth,E=10,D=.01;r.run(A),a.run(w,C),M.bodies=[],$("#cm-d-c").css("min-width",1180);u.rectangle(0,600,3*B,D,k),u.rectangle(0,0,3*B,D,k),u.rectangle(.13*-B+E,300,D,620,k),u.rectangle(.6*B+E,300,D,620,k);m.add(M,[u.rectangle(400,600+E,800.5+2*E,D,k),u.rectangle(800+E,300,D,600.5+2*E,k),u.rectangle(-E,300,D,600.5+2*E,k)]);var R,T=!1,_=function(){return T?(!b&&$("#cm-dc-switch1").prop("checked",!1),void(b&&$("#cm-dc-switch1").prop("checked",!0))):(y=!1,T=!0,j.stiffness=.005,j.length=300,void setTimeout(function(){z=!0,setTimeout(function(){j.length=10,setTimeout(function(){$(".simpleAlert").length>0||(R=simpleAlert({content:"游戏结束啦！",buttons:{"再玩一次":function(){P(C,!1),b=!0,$("#cm-dc-switch1").prop("checked",!0),R.close()},"退出":function(){g(),p=!0,R.close(),m.clear(M),$("#cm-d-c").remove(),S.dispose()}}}),P(C,!0))},3*f)},2.5*f)},f))};$(".start-btn").click(_);var O={x:0,y:400,columns:28,rows:2},F=DC["do"].createStacks(O);m.add(M,F),setTimeout(function(){m.add(M,[U,I,q]),$(".start-btn").css("display","block"),h=!0,setTimeout(function(){y=!0},f)},f);var P=function(e,r){for(var a=n.allBodies(e.world),c=0;c<a.length;c++){var o=a[c];o.position.y<=400&&!~["chest","left-arm","right-arm"].indexOf(o.label)&&t.setStatic(o,r)}},L=400,G=t.nextGroup(!0),H=-1,U=c.stack(L,0,2,1,0,10,function(e,r){return u.rectangle(e,r,30,15,{label:"component",collisionFilter:{group:G},chamfer:.5,render:{sprite:{xScale:.6,yScale:.6,texture:x+"img/component.png"}},frictionAirVal:0})}),W=u.rectangle(400,100,40,25,{label:"arm",render:{strokeStyle:"#3c3f41",sprite:{xScale:.8,yScale:.8,texture:x+"img/arm.png"}},frictionAirVal:0});U.bodies.push(W),c.chain(U,.5,0,-.5,0,{length:0,render:{visible:!1}}),n.add(U,d.create({label:"spring",bodyB:U.bodies[0],pointB:{x:-20,y:0},pointA:{x:U.bodies[0].position.x,y:U.bodies[0].position.y},stiffness:.02,damping:1,length:0,render:{visible:!0,lineWidth:1.5,strokeStyle:"#29a3f1"}}));var I,V=[],j=U.constraints[2];o.choose(["#556270","#4ECDC4","#C7F464","#FF6B6B","#C44D58"]);I=DC["do"].createRagdoll(400,100,1.1,{},V);var Q,q=d.create({bodyA:U.bodies[U.bodies.length-1],bodyB:I.bodies[0],pointA:{x:28,y:0},pointB:{x:0,y:-7},length:0,render:{visible:!1},stiffness:1}),z=!1,J=.5,K=-.5,N=3.5,X=-3.5,Y=j.pointA.x;s.on(C,"beforeUpdate",function(e){if(!(!I||I.length<=0||p)&&(z?(b?(N+=.03,X-=.03,J+=.01,K-=.01,N>=3.5&&(N=3.5,X=-3.5),J>=.5&&(J=.5,K=-.5,z=!1,y=!0,b=!1,T=!1,j.stiffness=.01)):(N-=.02,X+=.02,J-=.01,K+=.01,N<=1.2&&(N=1.2,X=-1.2),J<=-.95&&(J=-.95,K=.95)),t.setAngle(I.bodies[1],J),t.setAngle(I.bodies[2],N),t.setAngle(I.bodies[3],K),t.setAngle(I.bodies[4],X)):(t.setAngle(I.bodies[1],.5),t.setAngle(I.bodies[2],3.3),t.setAngle(I.bodies[3],-.5),t.setAngle(I.bodies[4],-3.3)),y)){if(H+=.015,H<0)return;Q=Y+200*Math.sin(H),T||(j.pointA.x=Q)}});var Z=l.create(A.canvas),ee=i.create(C,{mouse:Z,constraint:{stiffness:.2,render:{visible:!1}}});return Z.element.removeEventListener("mousewheel",Z.mousewheel),Z.element.removeEventListener("DOMMouseScroll",Z.mousewheel),s.on(ee,"mouseup",function(e){h&&($("#cm-dc-switch1").prop("checked",!1),_())}),A.mouse=Z,r.lookAt(A,{min:{x:0,y:0},max:{x:800,y:600}}),$(".cm-d-c-close").click(function(){g(),p=!0,m.clear(M),$("#cm-d-c").remove(),S.dispose()}),$("#cm-d-c").css({cursor:"url('https://www.duba.com/static/v2/images/point.cur'),auto"}),{engine:C,runner:w,render:A,canvas:A.canvas,stop:function(){Matter.Render.stop(A),Matter.Runner.stop(w)}}};