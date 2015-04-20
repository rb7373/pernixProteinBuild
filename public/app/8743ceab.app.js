"use strict";angular.module("proteinApp",["ngCookies","ngResource","ngSanitize","ui.router","ui.bootstrap","ngAnimate","ngMdIcons","ngTouch","ngMaterial"]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function(a,b,c){b.otherwise("/"),c.html5Mode(!0)}]),function(){function a(a){function b(){return a.when(u)}function c(){var a,b=I.section;return a=b===x?C:k()[b].name}function d(){var a,b=I.section,c=I.subSection;return a=q(b,c)?z:p(b,c)?C:!r(b)&&o(c)?k()[b-1].name:m()[c-1]}function e(){var a,b=I.section,c=I.subSection;return a=n(b,c)?z:q(b,c)?k()[A].name:s(c)&&!t(b)?k()[b+1].name:m()[c+1]}function f(a,b){I.section=a,I.subSection=b,console.log("Current section state"),console.log(a,b)}function g(a){var b=a.name.length;F=b>F?b:F}function h(){var a=k();return F=-1,a.forEach(g),F}function i(){var a=I.section,b=I.subSection;return q(a,b)?(f(A,B),!0):s(b)&&!t(a)?(f(a+1,B),!0):n()?void 0:(f(a,b+1),!0)}function j(){var a=I.section,b=I.subSection;return p(a,b)?(f(x,y),!0):o(b)?(f(a-1,B),!0):(f(a,b-1),!0)}function k(){return E.sections}function l(){return E.name}function m(){return D}function n(a,b){return a===G&&b===H}function o(a){return a===B}function p(a,b){return a===A&&b===B}function q(a,b){return a===x|b===y}function r(a){return a===A}function s(a){return a===H}function t(a){return a===G}var u=[{id:1,name:"Protein Structure",sections:[{name:"Polypeptide Chains",objectives:["Identify the functional groups involved in peptide bond formation","Describe the limitations on polypeptide sequence variation"],animation:"protein_structure_part1",practiceSession:[{PDB:"threonine",instructions:"Click an atom in the amino group.",goal:"amino"},{PDB:"threonine",instructions:"Click an atom in the carboxyl group.",goal:"carboxyl"},{PDB:"threonine",instructions:"Click an atom in the side chain.",goal:"sideChain"}]},{name:"Secondary Structure",objectives:["Explain why the rotational freedom of a polypeptide is restricted","Recognize the hydrogen bonding patterns of secondary structures such as alpha helices and beta sheets"],animation:"protein_structure_part1",practiceSession:[{PDB:"threonine",instructions:"Click an atom in the amino group.",goal:"amino"},{PDB:"threonine",instructions:"Click an atom in the carboxyl group.",goal:"carboxyl"},{PDB:"threonine",instructions:"Click an atom in the side chain.",goal:"sideChain"}]},{name:"Three-dimensional Structure",objectives:["Locate regular and irregular backbone structures","Compare ball-and-stick, spacefilling, and ribbon models of protein structure","Distinguish tertiary and quaternary structure"],animation:"secondary structure",practiceSession:[{PDB:"threonine",instructions:"Click an atom in the amino group.",goal:"amino"},{PDB:"threonine",instructions:"Click an atom in the carboxyl group.",goal:"carboxyl"},{PDB:"threonine",instructions:"Click an atom in the side chain.",goal:"sideChain"}]},{name:"Protein Families",objectives:["Recognize that different amino acid sequences can form similar structures","Identify the key residues in coiled coils and in collagen"],animation:"secondary structure",practiceSession:[{PDB:"threonine",instructions:"Click an atom in the amino group.",goal:"amino"},{PDB:"threonine",instructions:"Click an atom in the carboxyl group.",goal:"carboxyl"},{PDB:"threonine",instructions:"Click an atom in the side chain.",goal:"sideChain"}]},{name:"Protein Stability",objectives:["Describe protein structure in terms of the hydrophobic effect","Identify different types of intramolecular forces that help stabilize proteins","Describe how changing salt concentration or pH can alter protein structure","Explain why a protein’s structure must be somewhat flexible"],animation:"protein_structure_part1",practiceSession:[{PDB:"threonine",instructions:"Click an atom in the amino group.",goal:"amino"},{PDB:"threonine",instructions:"Click an atom in the carboxyl group.",goal:"carboxyl"},{PDB:"threonine",instructions:"Click an atom in the side chain.",goal:"sideChain"}]}]}],v={loadAll:b,getSections:k,getCurrentStateTitle:l,getSectionStructure:m,gettitleMaxLength:h,setCurrentSectionState:f,getCurrentTitle:c,getPreviousTitle:d,getNextTitle:e,goNext:i,goPrevious:j},w=0,x=-1,y=-1,z="",A=0,B=0,C="Introduction",D=["Objectives","Animation","Practice Session"],E=u[w],F=-1,G=E.sections.length-1,H=D.length-1,I={section:x,subSection:y};return v}angular.module("proteinApp").factory("navigationService",a),a.$inject=["$q"]}(),function(){function a(a){function b(){a.loadAll().then(function(a){c.states=[].concat(a),c.currentState=c.states[0]})}var c=this;c.activate=b,c.title="MainController",c.states=[],c.currentState=[],c.navigation=a,b()}angular.module("proteinApp").controller("MainController",a),a.$inject=["navigationService"]}(),angular.module("proteinApp").config(["$stateProvider",function(a){a.state("main",{url:"/main",templateUrl:"app/layout/main/main.html",controller:"MainController",controllerAs:"mainController"})}]),function(){function a(a,b){function c(a,c,d){a.navigation=b}var d={link:c,templateUrl:"app/widgets/footer/pn-footer/pn-footer.html",restrict:"EA"};return d}angular.module("proteinApp").directive("pnFooter",a),a.$inject=["$window","navigationService"]}(),function(){function a(a,b,c){function d(a,d,e){function f(){a.currentIcon="add"==a.currentIcon?"remove":"add",a.showMenu=!a.showMenu,a.currentSubSection=-1}function g(){a.showMenu=!0,a.currentIcon="remove",a.currentSubSection=-1}function h(){a.showMenu=!1,a.currentIcon="add",a.currentSubSection=-1}function i(){a.closeOnLeave&&h()}function j(b){a.currentSubSection=a.currentSubSection!=b?b:-1}function k(b){return a.currentSubSection===b}function l(b,c){console.log("Section: "+b+" subSection: "+c),a.navigation.setCurrentSectionState(b,c)}function m(){a.selectOption(-1,-1)}d.bind("click",function(a){a.stopPropagation()}),c.bind("click",function(){a.closeOnClickOutSide&&a.hideOptions(),a.$apply()}),a.showMenu=!1,a.navigation=b,a.sections=a.navigation.getSections(),a.showOptions=g,a.hideOptions=h,a.toogleOptionsMenu=f,a.currentIcon="add",a.currentSubSection=-1,a.updateCurrentSubSection=j,a.isSelectedSubSection=k,a.widthMenu="inherit",a.closeOnLeaveMouse=i,a.selectOption=l,a.introduction=m}var e={scope:{closeOnLeave:"=",closeOnClickOutSide:"="},link:d,templateUrl:"app/widgets/mainMenu/pnMainMenu/pnMainMenu.html",restrict:"EA"};return e}angular.module("proteinApp").directive("pnMainMenu",a),a.$inject=["$window","navigationService","$document"]}(),angular.module("proteinApp").factory("Modal",["$rootScope","$modal",function(a,b){function c(c,d){var e=a.$new();return c=c||{},d=d||"modal-default",angular.extend(e,c),b.open({templateUrl:"components/modal/modal.html",windowClass:d,scope:e})}return{confirm:{"delete":function(a){return a=a||angular.noop,function(){var b,d=Array.prototype.slice.call(arguments),e=d.shift();b=c({modal:{dismissable:!0,title:"Confirm Delete",html:"<p>Are you sure you want to delete <strong>"+e+"</strong> ?</p>",buttons:[{classes:"btn-danger",text:"Delete",click:function(a){b.close(a)}},{classes:"btn-default",text:"Cancel",click:function(a){b.dismiss(a)}}]}},"modal-danger"),b.result.then(function(b){a.apply(b,d)})}}}}}]),angular.module("proteinApp").controller("NavbarCtrl",["$scope","$location",function(a,b){a.menu=[{title:"Home",link:"/"}],a.isCollapsed=!0,a.isActive=function(a){return a===b.path()}}]),angular.module("proteinApp").run(["$templateCache",function(a){a.put("app/layout/main/main.html","<div class=col-md-12><br><pn-main-menu></pn-main-menu></div><pn-footer></pn-footer>"),a.put("app/widgets/footer/pn-footer/pn-footer.html",'<div class=container><div class="navbar navbar-inverse navbar-fixed-bottom"><div class="container-fluid text-center"><div class=row><a class="btn navbar-btn pull-left pn-footer-button"><span aria-hidden=true class="glyphicon glyphicon-triangle-left"></span>&nbsp;123456789</a><a class="btn navbar-btn pull-right pn-footer-button">123456789&nbsp;<span aria-hidden=true class="glyphicon glyphicon-triangle-right"></span></a><a class="btn navbar-btn pn-footer-button">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{navigation.getCurrentStateName()}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></div></div></div></div>')}]),angular.module("proteinApp").run(["$templateCache",function(a){a.put("app/layout/main/main.html","<h1 class=text-center>Fundamentals of Biochemistry</h1>"),a.put("app/widgets/footer/pn-footer/pn-footer.html",'<div class=container><div class="navbar navbar-inverse navbar-fixed-bottom"><div class="container-fluid text-center"><div class=row><a ng-show=!!navigation.getPreviousTitle() ng-click=navigation.goPrevious() class="btn navbar-btn pull-left pn-footer-button"><span aria-hidden=true class="glyphicon glyphicon-triangle-left"></span>&nbsp {{navigation.getPreviousTitle()}}</a><a ng-show=!!navigation.getNextTitle() ng-click=navigation.goNext() class="btn navbar-btn pull-right pn-footer-button">{{navigation.getNextTitle()}} &nbsp;<span aria-hidden=true class="glyphicon glyphicon-triangle-right"></span></a><a class="btn navbar-btn pn-footer-button">{{navigation.getCurrentTitle()}}</a></div></div></div></div>'),a.put("app/widgets/mainMenu/pnMainMenu/pnMainMenu.html",'<div style="position: fixed)" class=container-fluid><div class=row><ul id=mainTopMenu ng-class="{\'menuShadow\':showMenu}" ng-style="{\'width\': widthMenu }" ng-mouseleave=closeOnLeaveMouse() class=menu><li><a href="" ng-click=toogleOptionsMenu() class="topMenuOption menuShadow"><span><ng-md-icon icon={{currentIcon}} size=22 options="{&quot;duration&quot;: 375}"></ng-md-icon></span><span class=titleMenu>{{navigation.getCurrentStateTitle()}}</span></a></li><li ng-show=showMenu ng-repeat="section in sections" ng-class="{\'active\' : isSelectedSubSection($index)}" class="subMenu fadeMenu"><a href="" ng-click=updateCurrentSubSection($index)><span class=subTitleMenu>{{section.name}}</span></a><ul><li ng-repeat="item in navigation.getSectionStructure()"><a href="" ng-click="selectOption($parent.$index, $index)"><span class=subTitleItemMenu>{{item}}</span></a></li></ul></li><li><a ng-show=showMenu ng-click=introduction() href="" class="topMenuOption fadeMenu"><div><span class=footerSubTitleMenu>Voet, Voet & Pratt</span></div><div><span class=footerTitleMenu>Fundamentals of Biochemistry</span></div></a></li></ul></div></div><!--, ng-mouseleave = "hideOptions()"-->'),a.put("components/modal/modal.html",'<div class=modal-header><button ng-if=modal.dismissable type=button ng-click=$dismiss() class=close>&times;</button><h4 ng-if=modal.title ng-bind=modal.title class=modal-title></h4></div><div class=modal-body><p ng-if=modal.text ng-bind=modal.text></p><div ng-if=modal.html ng-bind-html=modal.html></div></div><div class=modal-footer><button ng-repeat="button in modal.buttons" ng-class=button.classes ng-click=button.click($event) ng-bind=button.text class=btn></button></div>'),a.put("components/navbar/navbar.html",'<div ng-controller=NavbarCtrl class="navbar navbar-default navbar-static-top"><div class=container><div class=navbar-header><button type=button ng-click="isCollapsed = !isCollapsed" class=navbar-toggle><span class=sr-only>Toggle navigation</span><span class=icon-bar></span><span class=icon-bar></span><span class=icon-bar></span></button><a href="/" class=navbar-brand>protein</a></div><div id=navbar-main collapse=isCollapsed class="navbar-collapse collapse"><ul class="nav navbar-nav"><li ng-repeat="item in menu" ng-class="{active: isActive(item.link)}"><a ng-href={{item.link}}>{{item.title}}</a></li></ul></div></div></div>')}]);