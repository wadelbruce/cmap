webpackJsonp([5],{"8GYB":function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("LMZF"),d=function(){},t=u("LdGb"),a=u("TRAr"),o=u("dCJI"),i=u("M3Sp"),s=u("e7TK"),r=u("7xw/"),p=u("4WAf"),c=u("glnW"),m=u("Ex9R"),b=u("UHIZ"),f=function(){function l(l){this.el=l}return l.prototype.ngAfterContentInit=function(){var l=this;u.e(37).then(u.bind(null,"od+j")).then(function(){return u.e(40).then(u.bind(null,"9qK5"))}).then(function(){switch(n.element=l.el.nativeElement.children[0],n.data=l.data,l.type){case"area":Morris.Area(n);break;case"bar":Morris.Bar(n);break;case"line":Morris.Line(n);break;case"donut":Morris.Donut(n)}});var n=this.options||{}},l}(),y=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function g(l){return e["\u0275vid"](0,[(l()(),e["\u0275ted"](-1,null,["\n     "])),(l()(),e["\u0275eld"](1,0,null,null,0,"div",[["class","chart no-padding"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n  "]))],null,null)}var h=u("9Nsw"),v=u("BkHw"),w=u("gP0V"),R=u("ycwL"),x=u("tYx6"),D=u("Eowk"),k=u("Un6q"),E=u("6Xbx"),I=u("bPGP"),C=u("mozt"),G=function(){function l(l){this.jsonApiService=l}return l.prototype.ngOnInit=function(){var l=this;this.jsonApiService.fetch("/graphs/morris.json").subscribe(function(n){return l.morrisDemoData=n})},l.prototype.barColorsDemo=function(l,n,u){return"bar"===u?"rgb("+Math.ceil(150*l.y/8)+",0,0)":"#000"},l.prototype.percentageFormat=function(l){return l+"%"},l.prototype.dateFormat=function(l){return l.getMonth()+1+"/"+l.getDate()+"/"+l.getFullYear()},Object(E.__decorate)([Object(C.a)()],l)}(),L=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function M(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,359,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n      "])),(l()(),e["\u0275eld"](2,0,null,null,29,"article",[["class","col-sm-12 col-md-12 col-lg-12"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](4,0,null,null,26,"div",[["editbutton","{false}"],["sa-widget",""]],[[1,"id",0]],null,null,c.b,c.a)),e["\u0275did"](5,4308992,null,0,m.a,[e.ElementRef,b.l],{editbutton:[0,"editbutton"]},null),(l()(),e["\u0275ted"](-1,0,["\n          "])),(l()(),e["\u0275eld"](7,0,null,0,9,"header",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](9,0,null,null,3,"span",[["class","widget-icon"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" "])),(l()(),e["\u0275eld"](11,0,null,null,0,"i",[["class","fa fa-bar-chart-o"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" "])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](14,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Sales Graphs"])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,0,["\n          "])),(l()(),e["\u0275eld"](18,0,null,0,11,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](20,0,null,null,8,"div",[["class","widget-body no-padding"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](22,0,null,null,5,"sa-morris-graph",[["type","area"]],null,null,null,g,y)),e["\u0275did"](23,1097728,null,0,f,[e.ElementRef],{data:[0,"data"],options:[1,"options"],type:[2,"type"]},null),e["\u0275pad"](24,3),e["\u0275pad"](25,3),e["\u0275pad"](26,1),e["\u0275pod"](27,{xkey:0,ykeys:1,labels:2,pointSize:3,hideHover:4}),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,0,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n\n      "])),(l()(),e["\u0275ted"](-1,null,["\n\n\n      "])),(l()(),e["\u0275eld"](33,0,null,null,28,"article",[["class","col-xs-12 col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n        "])),(l()(),e["\u0275eld"](35,0,null,null,25,"div",[["editbutton","{false}"],["sa-widget",""]],[[1,"id",0]],null,null,c.b,c.a)),e["\u0275did"](36,4308992,null,0,m.a,[e.ElementRef,b.l],{editbutton:[0,"editbutton"]},null),(l()(),e["\u0275ted"](-1,0,["\n          "])),(l()(),e["\u0275eld"](38,0,null,0,9,"header",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](40,0,null,null,3,"span",[["class","widget-icon"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" "])),(l()(),e["\u0275eld"](42,0,null,null,0,"i",[["class","fa fa-bar-chart-o"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" "])),(l()(),e["\u0275ted"](-1,null,["\n\n            "])),(l()(),e["\u0275eld"](45,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Area Graph"])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,0,["\n\n          "])),(l()(),e["\u0275eld"](49,0,null,0,10,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](51,0,null,null,7,"div",[["class","widget-body no-padding"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](53,0,null,null,4,"sa-morris-graph",[["type","area"]],null,null,null,g,y)),e["\u0275did"](54,1097728,null,0,f,[e.ElementRef],{data:[0,"data"],options:[1,"options"],type:[2,"type"]},null),e["\u0275pad"](55,2),e["\u0275pad"](56,2),e["\u0275pod"](57,{xkey:0,ykeys:1,labels:2}),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,0,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n\n      "])),(l()(),e["\u0275ted"](-1,null,["\n\n\n      "])),(l()(),e["\u0275eld"](63,0,null,null,26,"article",[["class","col-xs-12 col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n        "])),(l()(),e["\u0275eld"](65,0,null,null,23,"div",[["editbutton","{false}"],["sa-widget",""]],[[1,"id",0]],null,null,c.b,c.a)),e["\u0275did"](66,4308992,null,0,m.a,[e.ElementRef,b.l],{editbutton:[0,"editbutton"]},null),(l()(),e["\u0275ted"](-1,0,["\n          "])),(l()(),e["\u0275eld"](68,0,null,0,9,"header",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](70,0,null,null,3,"span",[["class","widget-icon"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" "])),(l()(),e["\u0275eld"](72,0,null,null,0,"i",[["class","fa fa-bar-chart-o"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" "])),(l()(),e["\u0275ted"](-1,null,["\n\n            "])),(l()(),e["\u0275eld"](75,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Bar Graph"])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,0,["\n\n          "])),(l()(),e["\u0275eld"](79,0,null,0,8,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](81,0,null,null,5,"div",[["class","widget-body no-padding"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](83,0,null,null,2,"sa-morris-graph",[["type","bar"]],null,null,null,g,y)),e["\u0275did"](84,1097728,null,0,f,[e.ElementRef],{data:[0,"data"],options:[1,"options"],type:[2,"type"]},null),e["\u0275pod"](85,{xkey:0,ykeys:1,labels:2,barColors:3}),(l()(),e["\u0275ted"](-1,null,["\n\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,0,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n\n      "])),(l()(),e["\u0275ted"](-1,null,["\n\n\n      "])),(l()(),e["\u0275eld"](91,0,null,null,28,"article",[["class","col-xs-12 col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n        "])),(l()(),e["\u0275eld"](93,0,null,null,25,"div",[["editbutton","{false}"],["sa-widget",""]],[[1,"id",0]],null,null,c.b,c.a)),e["\u0275did"](94,4308992,null,0,m.a,[e.ElementRef,b.l],{editbutton:[0,"editbutton"]},null),(l()(),e["\u0275ted"](-1,0,["\n          "])),(l()(),e["\u0275eld"](96,0,null,0,9,"header",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](98,0,null,null,3,"span",[["class","widget-icon"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" "])),(l()(),e["\u0275eld"](100,0,null,null,0,"i",[["class","fa fa-bar-chart-o"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" "])),(l()(),e["\u0275ted"](-1,null,["\n\n            "])),(l()(),e["\u0275eld"](103,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Normal Bar Graph"])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,0,["\n\n          "])),(l()(),e["\u0275eld"](107,0,null,0,10,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](109,0,null,null,7,"div",[["class","widget-body no-padding"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n              "])),(l()(),e["\u0275eld"](111,0,null,null,4,"sa-morris-graph",[["type","bar"]],null,null,null,g,y)),e["\u0275did"](112,1097728,null,0,f,[e.ElementRef],{data:[0,"data"],options:[1,"options"],type:[2,"type"]},null),e["\u0275pad"](113,3),e["\u0275pad"](114,3),e["\u0275pod"](115,{xkey:0,ykeys:1,labels:2}),(l()(),e["\u0275ted"](-1,null,["\n\n\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,0,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n\n      "])),(l()(),e["\u0275ted"](-1,null,["\n\n\n      "])),(l()(),e["\u0275eld"](121,0,null,null,28,"article",[["class","col-xs-12 col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n        "])),(l()(),e["\u0275eld"](123,0,null,null,25,"div",[["editbutton","{false}"],["sa-widget",""]],[[1,"id",0]],null,null,c.b,c.a)),e["\u0275did"](124,4308992,null,0,m.a,[e.ElementRef,b.l],{editbutton:[0,"editbutton"]},null),(l()(),e["\u0275ted"](-1,0,["\n          "])),(l()(),e["\u0275eld"](126,0,null,0,9,"header",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](128,0,null,null,3,"span",[["class","widget-icon"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" "])),(l()(),e["\u0275eld"](130,0,null,null,0,"i",[["class","fa fa-bar-chart-o"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" "])),(l()(),e["\u0275ted"](-1,null,["\n\n            "])),(l()(),e["\u0275eld"](133,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Stacked Bar Graph"])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,0,["\n          "])),(l()(),e["\u0275eld"](137,0,null,0,10,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](139,0,null,null,7,"div",[["class","widget-body no-padding"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n              "])),(l()(),e["\u0275eld"](141,0,null,null,4,"sa-morris-graph",[["type","bar"]],null,null,null,g,y)),e["\u0275did"](142,1097728,null,0,f,[e.ElementRef],{data:[0,"data"],options:[1,"options"],type:[2,"type"]},null),e["\u0275pad"](143,3),e["\u0275pad"](144,3),e["\u0275pod"](145,{xkey:0,ykeys:1,labels:2,staked:3}),(l()(),e["\u0275ted"](-1,null,["\n\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,0,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n\n      "])),(l()(),e["\u0275ted"](-1,null,["\n\n\n      "])),(l()(),e["\u0275eld"](151,0,null,null,28,"article",[["class","col-xs-12 col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n        "])),(l()(),e["\u0275eld"](153,0,null,null,25,"div",[["editbutton","{false}"],["sa-widget",""]],[[1,"id",0]],null,null,c.b,c.a)),e["\u0275did"](154,4308992,null,0,m.a,[e.ElementRef,b.l],{editbutton:[0,"editbutton"]},null),(l()(),e["\u0275ted"](-1,0,["\n          "])),(l()(),e["\u0275eld"](156,0,null,0,9,"header",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](158,0,null,null,3,"span",[["class","widget-icon"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" "])),(l()(),e["\u0275eld"](160,0,null,null,0,"i",[["class","fa fa-bar-chart-o"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" "])),(l()(),e["\u0275ted"](-1,null,["\n\n            "])),(l()(),e["\u0275eld"](163,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Year Graph"])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,0,["\n\n          "])),(l()(),e["\u0275eld"](167,0,null,0,10,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](169,0,null,null,7,"div",[["class","widget-body no-padding"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](171,0,null,null,4,"sa-morris-graph",[["type","line"]],null,null,null,g,y)),e["\u0275did"](172,1097728,null,0,f,[e.ElementRef],{data:[0,"data"],options:[1,"options"],type:[2,"type"]},null),e["\u0275pad"](173,2),e["\u0275pad"](174,2),e["\u0275pod"](175,{xkey:0,ykeys:1,labels:2}),(l()(),e["\u0275ted"](-1,null,["\n\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,0,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n\n      "])),(l()(),e["\u0275ted"](-1,null,["\n\n      "])),(l()(),e["\u0275eld"](181,0,null,null,26,"article",[["class","col-xs-12 col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n        "])),(l()(),e["\u0275eld"](183,0,null,null,23,"div",[["editbutton","{false}"],["sa-widget",""]],[[1,"id",0]],null,null,c.b,c.a)),e["\u0275did"](184,4308992,null,0,m.a,[e.ElementRef,b.l],{editbutton:[0,"editbutton"]},null),(l()(),e["\u0275ted"](-1,0,["\n          "])),(l()(),e["\u0275eld"](186,0,null,0,9,"header",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](188,0,null,null,3,"span",[["class","widget-icon"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" "])),(l()(),e["\u0275eld"](190,0,null,null,0,"i",[["class","fa fa-bar-chart-o"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" "])),(l()(),e["\u0275ted"](-1,null,["\n\n            "])),(l()(),e["\u0275eld"](193,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Donut Graph"])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,0,["\n\n          "])),(l()(),e["\u0275eld"](197,0,null,0,8,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](199,0,null,null,5,"div",[["class","widget-body no-padding"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](201,0,null,null,2,"sa-morris-graph",[["type","donut"]],null,null,null,g,y)),e["\u0275did"](202,1097728,null,0,f,[e.ElementRef],{data:[0,"data"],options:[1,"options"],type:[2,"type"]},null),e["\u0275pod"](203,{formater:0}),(l()(),e["\u0275ted"](-1,null,["\n\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,0,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n\n      "])),(l()(),e["\u0275ted"](-1,null,["\n\n      "])),(l()(),e["\u0275eld"](209,0,null,null,29,"article",[["class","col-xs-12 col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n        "])),(l()(),e["\u0275eld"](211,0,null,null,26,"div",[["editbutton","{false}"],["sa-widget",""]],[[1,"id",0]],null,null,c.b,c.a)),e["\u0275did"](212,4308992,null,0,m.a,[e.ElementRef,b.l],{editbutton:[0,"editbutton"]},null),(l()(),e["\u0275ted"](-1,0,["\n          "])),(l()(),e["\u0275eld"](214,0,null,0,9,"header",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](216,0,null,null,3,"span",[["class","widget-icon"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" "])),(l()(),e["\u0275eld"](218,0,null,null,0,"i",[["class","fa fa-bar-chart-o"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" "])),(l()(),e["\u0275ted"](-1,null,["\n\n            "])),(l()(),e["\u0275eld"](221,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Time Graph"])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,0,["\n\n          "])),(l()(),e["\u0275eld"](225,0,null,0,11,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](227,0,null,null,8,"div",[["class","widget-body no-padding"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n              "])),(l()(),e["\u0275eld"](229,0,null,null,5,"sa-morris-graph",[["type","line"]],null,null,null,g,y)),e["\u0275did"](230,1097728,null,0,f,[e.ElementRef],{data:[0,"data"],options:[1,"options"],type:[2,"type"]},null),e["\u0275pad"](231,2),e["\u0275pad"](232,2),e["\u0275pad"](233,2),e["\u0275pod"](234,{xkey:0,ykeys:1,labels:2,events:3}),(l()(),e["\u0275ted"](-1,null,["\n\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,0,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n\n      "])),(l()(),e["\u0275ted"](-1,null,["\n\n      "])),(l()(),e["\u0275eld"](240,0,null,null,28,"article",[["class","col-xs-12 col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n        "])),(l()(),e["\u0275eld"](242,0,null,null,25,"div",[["editbutton","{false}"],["sa-widget",""]],[[1,"id",0]],null,null,c.b,c.a)),e["\u0275did"](243,4308992,null,0,m.a,[e.ElementRef,b.l],{editbutton:[0,"editbutton"]},null),(l()(),e["\u0275ted"](-1,0,["\n          "])),(l()(),e["\u0275eld"](245,0,null,0,9,"header",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](247,0,null,null,3,"span",[["class","widget-icon"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" "])),(l()(),e["\u0275eld"](249,0,null,null,0,"i",[["class","fa fa-bar-chart-o"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" "])),(l()(),e["\u0275ted"](-1,null,["\n\n            "])),(l()(),e["\u0275eld"](252,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Line Graph A"])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,0,["\n\n          "])),(l()(),e["\u0275eld"](256,0,null,0,10,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](258,0,null,null,7,"div",[["class","widget-body no-padding"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](260,0,null,null,4,"sa-morris-graph",[["type","line"]],null,null,null,g,y)),e["\u0275did"](261,1097728,null,0,f,[e.ElementRef],{data:[0,"data"],options:[1,"options"],type:[2,"type"]},null),e["\u0275pad"](262,1),e["\u0275pad"](263,1),e["\u0275pod"](264,{xkey:0,ykeys:1,labels:2,units:3}),(l()(),e["\u0275ted"](-1,null,["\n\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,0,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n\n      "])),(l()(),e["\u0275ted"](-1,null,["\n\n      "])),(l()(),e["\u0275eld"](270,0,null,null,28,"article",[["class","col-xs-12 col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n        "])),(l()(),e["\u0275eld"](272,0,null,null,25,"div",[["editbutton","{false}"],["sa-widget",""]],[[1,"id",0]],null,null,c.b,c.a)),e["\u0275did"](273,4308992,null,0,m.a,[e.ElementRef,b.l],{editbutton:[0,"editbutton"]},null),(l()(),e["\u0275ted"](-1,0,["\n          "])),(l()(),e["\u0275eld"](275,0,null,0,9,"header",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](277,0,null,null,3,"span",[["class","widget-icon"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" "])),(l()(),e["\u0275eld"](279,0,null,null,0,"i",[["class","fa fa-bar-chart-o"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" "])),(l()(),e["\u0275ted"](-1,null,["\n\n            "])),(l()(),e["\u0275eld"](282,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Line Graph B"])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,0,["\n\n          "])),(l()(),e["\u0275eld"](286,0,null,0,10,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](288,0,null,null,7,"div",[["class","widget-body no-padding"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](290,0,null,null,4,"sa-morris-graph",[["type","line"]],null,null,null,g,y)),e["\u0275did"](291,1097728,null,0,f,[e.ElementRef],{data:[0,"data"],options:[1,"options"],type:[2,"type"]},null),e["\u0275pad"](292,3),e["\u0275pad"](293,3),e["\u0275pod"](294,{xkey:0,ykeys:1,labels:2,xLabels:3,xLabelFormat:4}),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,0,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n\n      "])),(l()(),e["\u0275ted"](-1,null,["\n\n      "])),(l()(),e["\u0275eld"](300,0,null,null,28,"article",[["class","col-xs-12 col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n        "])),(l()(),e["\u0275eld"](302,0,null,null,25,"div",[["editbutton","{false}"],["sa-widget",""]],[[1,"id",0]],null,null,c.b,c.a)),e["\u0275did"](303,4308992,null,0,m.a,[e.ElementRef,b.l],{editbutton:[0,"editbutton"]},null),(l()(),e["\u0275ted"](-1,0,["\n          "])),(l()(),e["\u0275eld"](305,0,null,0,9,"header",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](307,0,null,null,3,"span",[["class","widget-icon"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" "])),(l()(),e["\u0275eld"](309,0,null,null,0,"i",[["class","fa fa-bar-chart-o"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" "])),(l()(),e["\u0275ted"](-1,null,["\n\n            "])),(l()(),e["\u0275eld"](312,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["No Grid Graph"])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,0,["\n\n          "])),(l()(),e["\u0275eld"](316,0,null,0,10,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](318,0,null,null,7,"div",[["class","widget-body no-padding"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](320,0,null,null,4,"sa-morris-graph",[["type","line"]],null,null,null,g,y)),e["\u0275did"](321,1097728,null,0,f,[e.ElementRef],{data:[0,"data"],options:[1,"options"],type:[2,"type"]},null),e["\u0275pad"](322,2),e["\u0275pad"](323,2),e["\u0275pod"](324,{xkey:0,ykeys:1,labels:2,grid:3}),(l()(),e["\u0275ted"](-1,null,["\n\n\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,0,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n\n      "])),(l()(),e["\u0275ted"](-1,null,["\n\n      "])),(l()(),e["\u0275eld"](330,0,null,null,28,"article",[["class","col-xs-12 col-sm-12"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n        "])),(l()(),e["\u0275eld"](332,0,null,null,25,"div",[["editbutton","{false}"],["sa-widget",""]],[[1,"id",0]],null,null,c.b,c.a)),e["\u0275did"](333,4308992,null,0,m.a,[e.ElementRef,b.l],{editbutton:[0,"editbutton"]},null),(l()(),e["\u0275ted"](-1,0,["\n          "])),(l()(),e["\u0275eld"](335,0,null,0,9,"header",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](337,0,null,null,3,"span",[["class","widget-icon"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" "])),(l()(),e["\u0275eld"](339,0,null,null,0,"i",[["class","fa fa-bar-chart-o"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" "])),(l()(),e["\u0275ted"](-1,null,["\n\n            "])),(l()(),e["\u0275eld"](342,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Line Graph C"])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,0,["\n\n          "])),(l()(),e["\u0275eld"](346,0,null,0,10,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](348,0,null,null,7,"div",[["class","widget-body no-padding"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](350,0,null,null,4,"sa-morris-graph",[["type","line"]],null,null,null,g,y)),e["\u0275did"](351,1097728,null,0,f,[e.ElementRef],{data:[0,"data"],options:[1,"options"],type:[2,"type"]},null),e["\u0275pad"](352,1),e["\u0275pad"](353,1),e["\u0275pod"](354,{xkey:0,ykeys:1,labels:2,parseTime:3}),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,0,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n\n      "])),(l()(),e["\u0275ted"](-1,null,["\n\n\n    "]))],function(l,n){var u=n.component;l(n,5,0,"{false}"),l(n,23,0,u.morrisDemoData.sales,l(n,27,0,"period",l(n,24,0,"iphone","ipad","itouch"),l(n,25,0,"iPhone","iPad","iPod Touch"),l(n,26,0,2),"auto"),"area"),l(n,36,0,"{false}"),l(n,54,0,u.morrisDemoData["area-demo"],l(n,57,0,"x",l(n,55,0,"y","z"),l(n,56,0,"Y","Z")),"area"),l(n,66,0,"{false}"),l(n,84,0,u.morrisDemoData["bar-demo"],l(n,85,0,"x","y","Y",u.barColorsDemo),"bar"),l(n,94,0,"{false}"),l(n,112,0,u.morrisDemoData["normal-bar-demo"],l(n,115,0,"x",l(n,113,0,"y","z","a"),l(n,114,0,"Y","Z","A")),"bar"),l(n,124,0,"{false}"),l(n,142,0,u.morrisDemoData["stacked-bar-demo"],l(n,145,0,"x",l(n,143,0,"y","z","a"),l(n,144,0,"Y","Z","A"),!0),"bar"),l(n,154,0,"{false}"),l(n,172,0,u.morrisDemoData["line-year-demo"],l(n,175,0,"period",l(n,173,0,"licensed","sorned"),l(n,174,0,"Licensed","SORN")),"line"),l(n,184,0,"{false}"),l(n,202,0,u.morrisDemoData["donut-demo"],l(n,203,0,u.percentageFormat),"donut"),l(n,212,0,"{false}"),l(n,230,0,u.morrisDemoData["line-time-demo"],l(n,234,0,"period",l(n,231,0,"licensed","sorned"),l(n,232,0,"Licensed","SORN"),l(n,233,0,"2011-04","2011-08")),"line"),l(n,243,0,"{false}"),l(n,261,0,u.morrisDemoData["line-graph-a-demo"],l(n,264,0,"period",l(n,262,0,"a"),l(n,263,0,"Series A"),"%"),"line"),l(n,273,0,"{false}"),l(n,291,0,u.morrisDemoData["line-graph-b-demo"],l(n,294,0,"period",l(n,292,0,"licensed","sorned","other"),l(n,293,0,"Licensed","SORN","Other"),"day",u.dateFormat),"line"),l(n,303,0,"{false}"),l(n,321,0,u.morrisDemoData["no-grid-demo"],l(n,324,0,"period",l(n,322,0,"licensed","sorned"),l(n,323,0,"Licensed","SORN"),!1),"line"),l(n,333,0,"{false}"),l(n,351,0,u.morrisDemoData["line-graph-c-demo"],l(n,354,0,"elapsed",l(n,352,0,"value"),l(n,353,0,"value"),!1),"line")},function(l,n){l(n,4,0,e["\u0275nov"](n,5).widgetId),l(n,35,0,e["\u0275nov"](n,36).widgetId),l(n,65,0,e["\u0275nov"](n,66).widgetId),l(n,93,0,e["\u0275nov"](n,94).widgetId),l(n,123,0,e["\u0275nov"](n,124).widgetId),l(n,153,0,e["\u0275nov"](n,154).widgetId),l(n,183,0,e["\u0275nov"](n,184).widgetId),l(n,211,0,e["\u0275nov"](n,212).widgetId),l(n,242,0,e["\u0275nov"](n,243).widgetId),l(n,272,0,e["\u0275nov"](n,273).widgetId),l(n,302,0,e["\u0275nov"](n,303).widgetId),l(n,332,0,e["\u0275nov"](n,333).widgetId)})}function A(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,18,"div",[["id","content"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275eld"](2,0,null,null,8,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](4,0,null,null,2,"sa-big-breadcrumbs",[["class","col-xs-12 col-sm-7 col-md-7 col-lg-4"],["icon","bar-chart-o"]],null,null,null,h.b,h.a)),e["\u0275did"](5,114688,null,0,v.a,[],{icon:[0,"icon"],items:[1,"items"]},null),e["\u0275pad"](6,2),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](8,0,null,null,1,"sa-stats",[],null,null,null,w.b,w.a)),e["\u0275did"](9,114688,null,0,R.a,[],null,null),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275eld"](12,0,null,null,5,"sa-widgets-grid",[],null,null,null,x.b,x.a)),e["\u0275did"](13,4243456,null,0,D.a,[e.ElementRef],null,null),(l()(),e["\u0275ted"](-1,0,["\n    "])),(l()(),e["\u0275and"](16777216,null,0,1,null,M)),e["\u0275did"](16,16384,null,0,k.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,0,["\n  "])),(l()(),e["\u0275ted"](-1,null,["\n"])),(l()(),e["\u0275ted"](-1,null,["\n"]))],function(l,n){var u=n.component;l(n,5,0,"bar-chart-o",l(n,6,0,"Graphs","Morris Charts")),l(n,9,0),l(n,16,0,u.morrisDemoData)},null)}var F=e["\u0275ccf"]("sa-morris-charts",G,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"sa-morris-charts",[],null,null,null,A,L)),e["\u0275did"](1,114688,null,0,G,[I.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),N=u("0nO6"),O=u("a2Cb"),S=u("uV7t"),j=u("Mo4H"),z=u("HRhd"),P=u("twb9"),T=u("enKR"),Y=u("1KO1"),B=u("EQxj"),K=u("xHno"),Z=u("u/Dz"),H=u("yroR"),_=u("Xuu1"),U=u("bIam"),J=u("IeKR"),V=u("pGHC"),X=u("CFhc"),q=u("MpZt"),Q=u("Q6Im"),W=u("LxCY"),$=u("KJ+y"),ll=u("U52T"),nl=u("k0wK"),ul=u("Ib9c"),el=u("jKo7"),dl=u("1xNg"),tl=u("haTU"),al=u("OAb1"),ol=u("ZT2h"),il=u("+Bd0"),sl=u("gX8m"),rl=u("8ZzG"),pl=function(){};u.d(n,"MorrisChartsModuleNgFactory",function(){return cl});var cl=e["\u0275cmf"](d,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[t.a,a.a,o.a,i.a,s.a,r.a,p.a,F]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,k.NgLocalization,k.NgLocaleLocalization,[e.LOCALE_ID,[2,k["\u0275a"]]]),e["\u0275mpd"](4608,N.o,N.o,[]),e["\u0275mpd"](4608,O.a,O.a,[]),e["\u0275mpd"](4608,S.a,S.a,[O.a]),e["\u0275mpd"](4608,j.a,j.a,[]),e["\u0275mpd"](4608,z.a,z.a,[]),e["\u0275mpd"](4608,P.a,P.a,[e.ComponentFactoryResolver,e.ApplicationRef,S.a,z.a,O.a,j.a,b.l,T.a]),e["\u0275mpd"](4608,Y.a,Y.a,[I.a,e.ApplicationRef]),e["\u0275mpd"](512,k.CommonModule,k.CommonModule,[]),e["\u0275mpd"](512,b.o,b.o,[[2,b.t],[2,b.l]]),e["\u0275mpd"](512,N.m,N.m,[]),e["\u0275mpd"](512,N.e,N.e,[]),e["\u0275mpd"](512,B.a,B.a,[]),e["\u0275mpd"](512,K.a,K.a,[]),e["\u0275mpd"](512,Z.a,Z.a,[]),e["\u0275mpd"](512,H.a,H.a,[]),e["\u0275mpd"](512,_.a,_.a,[]),e["\u0275mpd"](512,U.a,U.a,[]),e["\u0275mpd"](512,J.a,J.a,[]),e["\u0275mpd"](512,V.PopoverModule,V.PopoverModule,[]),e["\u0275mpd"](512,X.a,X.a,[]),e["\u0275mpd"](512,q.a,q.a,[]),e["\u0275mpd"](512,Q.a,Q.a,[]),e["\u0275mpd"](512,W.a,W.a,[]),e["\u0275mpd"](512,$.a,$.a,[]),e["\u0275mpd"](512,ll.a,ll.a,[]),e["\u0275mpd"](512,nl.a,nl.a,[]),e["\u0275mpd"](512,ul.a,ul.a,[]),e["\u0275mpd"](512,el.a,el.a,[]),e["\u0275mpd"](512,dl.a,dl.a,[]),e["\u0275mpd"](512,tl.a,tl.a,[]),e["\u0275mpd"](512,al.a,al.a,[]),e["\u0275mpd"](512,ol.a,ol.a,[]),e["\u0275mpd"](512,il.a,il.a,[]),e["\u0275mpd"](512,sl.a,sl.a,[]),e["\u0275mpd"](512,rl.a,rl.a,[]),e["\u0275mpd"](512,pl,pl,[]),e["\u0275mpd"](512,d,d,[]),e["\u0275mpd"](1024,b.j,function(){return[[{path:"",component:G}]]},[])])})}});