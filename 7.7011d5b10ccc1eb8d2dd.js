(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{nVOV:function(n,e,l){"use strict";function t(n){return u.gb(0,[(n()(),u.Na(0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),u.Ma(1,212992,null,0,o.q,[o.b,u.N,u.j,[8,null],u.h],null,null)],function(n,e){n(e,1,0)},null)}function a(n){return u.gb(0,[(n()(),u.Na(0,0,null,null,4,"nb-layout",[],[[2,"window-mode",null],[2,"with-scroll",null]],[["window","resize"]],function(n,e,l){var t=!0;return"window:resize"===e&&(t=!1!==u.Xa(n,1).onResize(l)&&t),t},g.f,g.b)),u.Ma(1,4440064,null,0,m.b,[h.a,b.a,u.j,u.k,u.B,o.l,p.f,p.b,u.z,V.c],null,null),(n()(),u.Na(2,0,null,2,2,"nb-layout-column",[],[[2,"left",null],[2,"start",null]],null,null,g.e,g.a)),u.Ma(3,49152,null,0,m.a,[],null,null),(n()(),u.eb(-1,0,["Example not found."]))],function(n,e){n(e,1,0)},function(n,e){n(e,0,0,u.Xa(e,1).windowModeValue,u.Xa(e,1).withScrollValue),n(e,2,0,u.Xa(e,3).leftValue,u.Xa(e,3).startValue)})}l.r(e);var u=l("CcnG"),i=function(){},o=l("ZYCi"),c=l("jvbL"),r=(l("cwSc"),l("hzLA"),function(){function n(n,e,l,t){this.communicator=n,this.themeService=e,this.router=l,this.document=t,this.alive=!0}return n.prototype.ngOnInit=function(){this.setupId(),this.subscribeOnThemeSwitch()},n.prototype.ngAfterViewInit=function(){this.sendHeight()},n.prototype.ngOnDestroy=function(){this.alive=!1},n.prototype.setupId=function(){this.id=this.getId()},n.prototype.subscribeOnThemeSwitch=function(){var n=this;this.communicator.receive(this.id).pipe(Object(c.a)(function(){return n.alive})).subscribe(function(e){return n.changeTheme(e)})},n.prototype.changeTheme=function(n){this.themeService.changeTheme(n.theme),this.sendHeight()},n.prototype.getId=function(){var n=this.router.url.split("/");return n.splice(0,2),n.join("/")},n.prototype.sendHeight=function(){this.communicator.send({id:this.id,height:this.document.body.clientHeight})},n}()),s=l("VkvS"),h=l("4vXS"),p=l("MGne"),d=u.La({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;background-color:#f1f2f3}"]],data:{}}),f=u.Ja("ngd-example",r,function(n){return u.gb(0,[(n()(),u.Na(0,0,null,null,1,"ngd-example",[],null,null,null,t,d)),u.Ma(1,4440064,null,0,r,[s.a,h.a,o.l,p.b],null,null)],function(n,e){n(e,1,0)},null)},{},{},[]),g=l("KM9H"),m=l("vuB0"),b=l("7uv5"),V=l("NfCQ"),y=function(n){this.themeService=n,this.themeService.changeTheme("default")},w=u.La({encapsulation:0,styles:[["nb-layout-column{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;color:gray;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:5rem}"]],data:{}}),v=u.Ja("ngd-example-404",y,function(n){return u.gb(0,[(n()(),u.Na(0,0,null,null,1,"ngd-example-404",[],null,null,null,a,w)),u.Ma(1,49152,null,0,y,[h.a],null,null)],null,null)},{},{},[]),x=l("Ip0R"),M=l("gIcY"),k=function(){},N=l("i6JN"),S=l("F4EV"),j=l("q1xA"),I=l("0AKQ"),J=l("gM8K"),O=l("sQZK"),T=l("9bB3"),X=l("DJEY"),z=l("lnUJ");l.d(e,"NgdExampleModuleNgFactory",function(){return C});var C=u.Ka(i,[],function(n){return u.Ua([u.Va(512,u.j,u.Y,[[8,[f,v]],[3,u.j],u.v]),u.Va(4608,x.n,x.m,[u.s,[2,x.v]]),u.Va(4608,M.x,M.x,[]),u.Va(4608,M.d,M.d,[]),u.Va(1073742336,o.p,o.p,[[2,o.u],[2,o.l]]),u.Va(1073742336,k,k,[]),u.Va(1073742336,x.c,x.c,[]),u.Va(1073742336,M.v,M.v,[]),u.Va(1073742336,M.g,M.g,[]),u.Va(1073742336,N.a,N.a,[]),u.Va(1073742336,S.a,S.a,[]),u.Va(1073742336,j.a,j.a,[]),u.Va(1073742336,I.a,I.a,[]),u.Va(1073742336,J.a,J.a,[]),u.Va(1073742336,O.a,O.a,[]),u.Va(1073742336,T.a,T.a,[]),u.Va(1073742336,M.s,M.s,[]),u.Va(1073742336,X.a,X.a,[]),u.Va(1073742336,z.a,z.a,[]),u.Va(1073742336,i,i,[]),u.Va(1024,o.j,function(){return[[{path:"",component:r,children:[{path:"",loadChildren:"../../../src/playground/playground.module#NbPlaygroundModule"},{path:"**",component:y}]}]]},[])])})}}]);