!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"14Tt":function(t,n,o){"use strict";o.r(n),o.d(n,"ViewsModule",(function(){return ue}));var r,c=o("ofXK"),a=o("tyNb"),s=o("mrjb"),l=o("A4Lh"),u=o("H552"),b=o("kR0U"),p=o("M9dC"),d=o("58Y9"),h=o("dSv1"),g=o("Pk9d"),f=o("ScLb"),v=o("4SUy"),w=o("fXoL"),m=o("1kef"),S=o("X8pc"),O=o("tk/3"),T=((r=function(){function t(i,n){e(this,t),this.http=i,this.spinService=n,this.httpOptions={headers:new O.e({"Content-Type":"application/json"})}}return i(t,[{key:"changeOwnerForView",value:function(e,t){return this.http.put(f.a.TicketViews+"/"+e+"/change_owner/"+t,this.httpOptions).toPromise()}}]),t}()).\u0275fac=function(e){return new(e||r)(w.bc(O.b),w.bc(S.a))},r.\u0275prov=w.Jb({token:r,factory:r.\u0275fac}),r),x=o("JCZ/"),y=o("IaKf"),C=o("QYJQ"),k=o("GJ+o"),M=o("hXFv"),E=o("jcQU"),L=o("AjNn"),D=o("EiDu"),I=["viewListGrid"],N=["viewListEle"],P=["viewChangeOwnerDialog"],A=["agentDrop"],V=["moreOptionsContextMenu"],j=["searchView"],R=["viewListPageElement"];function B(e,t){if(1&e){var i=w.Ub();w.Tb(0,"div",27),w.Tb(1,"span",28),w.ec("click",(function(){w.Bc(i);var e=t.$implicit;return w.gc().rowSelect(e)})),w.Lc(2),w.Sb(),w.Sb()}if(2&e){var n=t.$implicit;w.xb(2),w.Nc(" ",n.name," ")}}function _(e,t){if(1&e&&(w.Tb(0,"div",29),w.Lc(1),w.Sb()),2&e){var i=t.$implicit;w.xb(1),w.Nc(" ",i.owner.displayName," ")}}function J(e,t){1&e&&(w.Tb(0,"div",29),w.Lc(1),w.hc(2,"translate"),w.Sb()),2&e&&(w.xb(1),w.Nc(" ",w.ic(2,1,"PUBLIC"),""))}function F(e,t){1&e&&(w.Tb(0,"div",29),w.Lc(1),w.hc(2,"translate"),w.Sb()),2&e&&(w.xb(1),w.Nc(" ",w.ic(2,1,"PRIVATE"),""))}function U(e,t){if(1&e&&(w.Tb(0,"span"),w.Lc(1),w.hc(2,"translate"),w.Sb()),2&e){var i=w.gc().$implicit;w.yb("data-title",i),w.xb(1),w.Oc(" ",w.ic(2,3,"GROUP"),": ",i," ")}}function W(e,t){if(1&e&&(w.Tb(0,"span"),w.Lc(1),w.hc(2,"translate"),w.Sb()),2&e){var i=w.gc().$implicit;w.xb(1),w.Oc(" ",w.ic(2,2,"GROUP"),": ",i," ")}}function G(e,t){if(1&e&&(w.Tb(0,"div"),w.Tb(1,"span"),w.Tb(2,"span",34),w.Lc(3),w.Sb(),w.Sb(),w.Sb()),2&e){var i=w.gc(3).$implicit;w.xb(1),w.yb("data-non-elliptical",!0)("data-title",i.groups),w.xb(2),w.Nc("\xa0+ ",i.groups.split(",").length-1," more")}}function K(e,t){if(1&e&&(w.Tb(0,"div",33),w.Tb(1,"div",27),w.Jc(2,U,3,5,"span",31),w.Jc(3,W,3,4,"span",31),w.Sb(),w.Jc(4,G,4,3,"div",31),w.Sb()),2&e){var i=t.first,n=w.gc(2).$implicit;w.xb(2),w.nc("ngIf",1===n.groups.length&&i),w.xb(1),w.nc("ngIf",n.groups.length>1&&i),w.xb(1),w.nc("ngIf",n.groups.split(",").length>1&&i)}}function Q(e,t){if(1&e&&(w.Tb(0,"div"),w.Jc(1,K,5,3,"div",32),w.Sb()),2&e){var i=w.gc().$implicit;w.xb(1),w.nc("ngForOf",i.groups.split(","))}}function z(e,t){if(1&e&&(w.Jc(0,J,3,3,"div",30),w.Jc(1,F,3,3,"div",30),w.Jc(2,Q,2,1,"div",31)),2&e){var i=t.$implicit;w.nc("ngIf","Agents"===i.accessScope),w.xb(1),w.nc("ngIf","Onlyme"===i.accessScope),w.xb(1),w.nc("ngIf","GroupMembers"===i.accessScope&&i.groups)}}function H(e,t){if(1&e){var i=w.Ub();w.Tb(0,"div",35),w.Tb(1,"span",36),w.ec("click",(function(e){w.Bc(i);var n=t.$implicit;return w.gc().moreOptionButtonClick(e,n)})),w.Sb(),w.Sb()}}function $(e,t){1&e&&(w.Tb(0,"div"),w.Lc(1),w.hc(2,"translate"),w.Sb()),2&e&&(w.xb(1),w.Nc(" ",w.ic(2,1,"CHANGEOWNER")," "))}function q(e,t){if(1&e){var i=w.Ub();w.Tb(0,"div"),w.Tb(1,"button",37),w.ec("click",(function(){return w.Bc(i),w.gc().closeDialog()})),w.Lc(2),w.hc(3,"translate"),w.Sb(),w.Tb(4,"button",38),w.ec("click",(function(){return w.Bc(i),w.gc().updateOwnerClick()})),w.Lc(5),w.hc(6,"translate"),w.Sb(),w.Sb()}2&e&&(w.xb(2),w.Mc(w.ic(3,2,"CANCEL")),w.xb(3),w.Mc(w.ic(6,4,"UPDATE")))}function X(e,t){if(1&e&&(w.Tb(0,"div"),w.Ob(1,"span",47),w.hc(2,"safe"),w.Sb()),2&e){var i=w.gc(2);w.xb(1),w.nc("innerHTML",w.jc(2,1,i.errorMessage,"html"),w.Cc)}}function Y(e,t){if(1&e&&(w.Tb(0,"div",48),w.Tb(1,"div",49),w.Tb(2,"div",50),w.Tb(3,"span",51),w.Lc(4),w.Sb(),w.Tb(5,"span",51),w.Tb(6,"span",52),w.Lc(7),w.Sb(),w.Sb(),w.Sb(),w.Sb(),w.Sb()),2&e){var i=t.$implicit;w.nc("ngClass",i.isAgent?"agent":""),w.yb("data-user-id",i.userId),w.xb(4),w.Nc(" ",i.displayName," "),w.xb(3),w.Mc(i.emailId)}}function Z(e,t){1&e&&(w.Tb(0,"div"),w.Tb(1,"span",53),w.Lc(2),w.hc(3,"translate"),w.Sb(),w.Sb()),2&e&&(w.xb(2),w.Nc(" ",w.ic(3,1,"FIELDREQUIRED"),""))}function ee(e,t){if(1&e){var i=w.Ub();w.Tb(0,"div",null,39),w.Tb(2,"div",40),w.Tb(3,"div",41),w.Jc(4,X,3,4,"div",31),w.Tb(5,"div",42),w.Tb(6,"label"),w.Lc(7),w.hc(8,"translate"),w.Tb(9,"span",43),w.Lc(10,"*"),w.Sb(),w.Sb(),w.Tb(11,"ejs-dropdownlist",44,45),w.ec("focus",(function(){return w.Bc(i),w.gc().assigneeFocus()}))("blur",(function(){return w.Bc(i),w.gc().assigneeFocusOut()}))("change",(function(){return w.Bc(i),w.gc().assigneeFocusOut()})),w.hc(13,"translate"),w.hc(14,"translate"),w.Jc(15,Y,8,4,"ng-template",null,46,w.Kc),w.Sb(),w.Jc(17,Z,4,3,"div",31),w.Sb(),w.Sb(),w.Sb(),w.Sb()}if(2&e){var n=w.gc();w.xb(4),w.nc("ngIf",n.errorMessage),w.xb(3),w.Nc(" ",w.ic(8,11,"AGENT")," "),w.xb(4),w.oc("placeholder",w.ic(13,13,"DROPDOWNPLACEHOLDER")),w.oc("filterBarPlaceholder",w.ic(14,15,"SEARCH")),w.nc("dataSource",n.assigneeDataConfig)("fields",n.assigneeFieldConfig)("allowFiltering",!0)("showClearButton",!0)("htmlAttributes",n.autoCompleteAttribute)("query",n.agentDropQuery),w.xb(6),w.nc("ngIf",n.isRequired)}}var te,ie,ne,oe=[{path:"",component:(te=function(){function t(i,n,o,r,c,a){e(this,t),this.appRootService=i,this.spinService=n,this.viewService=o,this.seoService=r,this.router=c,this.toastService=a,this.assigneeFieldConfig={value:"userId",text:"displayName"},this.autoCompleteAttribute={autocomplete:"anyrandomstring"},this.changeOwner=Object(h.a)("CHANGEOWNER"),this.showView=Object(h.a)("VIEW"),this.moreActionsWithViews=[{text:this.showView,id:"0"},{text:this.changeOwner,id:"1"}],this.changeOwnerDialogOpen=!1,this.appRootService.setAppTitleText(Object(h.a)("TICKETSETTINGS")),this.appRootService.isSideBarNeeded(!0);var s=Object(h.a)("ADMIN")+" / "+Object(h.a)("TICKETVIEWS"),l=Object(h.a)("TICKETVIEWS")+" | "+Object(h.a)("ADMIN");this.appRootService.setAppTitleText(s),this.seoService.setHeaderElements({title:l}),this.viewList=new u.a({url:b.a.TicketViews,adaptor:new p.b})}return i(t,[{key:"rowSelect",value:function(e){e&&this.showTicketView(e.filterId)}},{key:"ngOnInit",value:function(){this.pageSettings={pageSize:l.q}}},{key:"ngAfterViewInit",value:function(){var e=this;this.viewListEle.nativeElement.addEventListener("keydown",(function(t){Object(d.l)(t,e.viewListEle.nativeElement)})),this.viewListPageElement.nativeElement.addEventListener("scroll",(function(){e.moreOptionsMenu.close()}))}},{key:"viewListDataBound",value:function(){Object(d.a)(this.grid)}},{key:"moreOptionsButtonOpen",value:function(){var e=this.viewListEle.nativeElement.querySelectorAll(".view-more-option-button.e-active");e.length>1&&e&&e[0].ej2_instances[0].toggle()}},{key:"contextMenuBeforeOpen",value:function(e,t){t.isDefault?(this.moreOptionsMenu.hideItems([this.changeOwner]),this.moreOptionsMenu.showItems([this.showView])):"Active"!==t.owner.status?this.moreOptionsMenu.showItems([this.showView,this.changeOwner]):(this.moreOptionsMenu.hideItems([this.changeOwner]),this.moreOptionsMenu.showItems([this.showView]))}},{key:"moreOptionButtonClick",value:function(e,t){var i=e.target,n=Object(g.f)(i);this.viewData=t,this.moreOptionsMenu.open(n.top+25,n.left,i)}},{key:"moreOptionsSelect",value:function(e){e.item.text===this.showView?this.showTicketView(this.viewData.filterId):e.item.text===this.changeOwner&&(this.changeOwnerOfView(this.viewData),this.changeOwnerDialogOpen=!0)}},{key:"showTicketView",value:function(e){this.router.navigateByUrl("/tickets?filterid="+e+"&isFromAdminModule=true")}},{key:"loadGrid",value:function(){this.viewList=new u.a({url:b.a.TicketViews,adaptor:new p.a})}},{key:"changeOwnerOfView",value:function(e){this.assigneeDataConfig=new u.a({url:f.a.Assignee,adaptor:new p.b}),this.agentDropQuery=(new u.g).addParams("exclusionIds",e.owner.userId.toString()),this.ViewDialog.show(),this.viewID=e.filterId}},{key:"updateOwnerClick",value:function(){var e=this;this.agentDrop.value&&!Object(v.X)(this.agentDrop.value)&&(this.spinService.showSpinner(),this.viewService.changeOwnerForView(this.viewID,this.agentDrop.value).then((function(t){t&&(e.spinService.hideSpinner(),e.toastService.successToast(t.message),e.closeDialog(),e.loadGrid())})).catch((function(t){e.spinService.hideSpinner(),t.error&&t.error.errors&&t.error.errors.length>0&&(e.errorMessage=t.error.errors[0].errorMessage)})))}},{key:"viewsDialogOpen",value:function(){var e=this;this.changeOwnerDialogOpen&&setTimeout((function(){e.agentDrop.focusIn()}))}},{key:"assigneeFocus",value:function(){this.isRequired=!1}},{key:"assigneeFocusOut",value:function(){this.isRequired=!this.agentDrop.value}},{key:"closeDialog",value:function(){this.agentDrop.value=null,this.isRequired=null,this.errorMessage=null,this.ViewDialog.hide()}},{key:"searchNodes",value:function(){var e=this.searchView.value.trim();this.grid.search(e)}}]),t}(),te.\u0275fac=function(e){return new(e||te)(w.Nb(m.a),w.Nb(S.a),w.Nb(T),w.Nb(x.a),w.Nb(a.g),w.Nb(y.a))},te.\u0275cmp=w.Hb({type:te,selectors:[["ng-component"]],viewQuery:function(e,t){var i;1&e&&(w.Qc(I,!0),w.Qc(N,!0),w.Qc(P,!0),w.Qc(A,!0),w.Qc(V,!0),w.Qc(j,!0),w.Qc(R,!0)),2&e&&(w.xc(i=w.fc())&&(t.grid=i.first),w.xc(i=w.fc())&&(t.viewListEle=i.first),w.xc(i=w.fc())&&(t.ViewDialog=i.first),w.xc(i=w.fc())&&(t.agentDrop=i.first),w.xc(i=w.fc())&&(t.moreOptionsMenu=i.first),w.xc(i=w.fc())&&(t.searchView=i.first),w.xc(i=w.fc())&&(t.viewListPageElement=i.first))},decls:45,vars:23,consts:[[1,"view-list","no-padding","no-margin"],["viewListPageElement",""],[1,"secondary","padding-10","information-content"],[1,"bd-icon","bd-icon-info","information-icon","information-icon-position"],[1,"mt-10","no-padding"],[1,"grid-menu-bar","mb-2"],[1,"view-menu-bar","pr-2"],[1,"search-box"],["id","search","showClearButton","true","autocomplete","off","maxlength","150",3,"placeholder","change"],["searchView",""],[2,"height","90%"],[1,"type-list","col-xs-12","col-sm-12","col-md-12","col-lg-12","pl-20","pr-20"],["viewListEle",""],["height","100%",3,"dataSource","allowPaging","allowSorting","pageSettings","allowResizing","dataBound"],["viewListGrid",""],["field","name","minWidth","230","width","270","textAlign","Left","clipMode","EllipsisWithTooltip",1,"cursor-pointer",3,"headerText"],["template",""],["field","owner","minWidth","180","width","220","textAlign","Left","clipMode","EllipsisWithTooltip",3,"headerText"],["field","accessScope","minWidth","80","width","120","textAlign","Left",3,"headerText","allowSorting"],["headerText","","clipMode","EllipsisWithTooltip","minWidth","100","width","100","textAlign","Center"],["id","contextmenu","cssClass","context-view-more-options",3,"items","select","beforeOpen"],["moreOptionsContextMenu",""],["id","viewdialog","width","450px","isModal","true","showCloseIcon","true","closeOnEscape","true","cssClass","dialog-height","height","Auto",3,"visible","overlayClick","close","open"],["viewChangeOwnerDialog",""],["header",""],["footerTemplate",""],["content",""],[1,"no-wrap","ellipsis"],[1,"primary-link-color","cursor-pointer",3,"click"],[1,"grid-text-font-color"],["class","grid-text-font-color",4,"ngIf"],[4,"ngIf"],["class","flex-horizontal grid-text-font-color",4,"ngFor","ngForOf"],[1,"flex-horizontal","grid-text-font-color"],[1,"more-items"],[1,"cursor-pointer","action-content-padding"],[1,"e-btn","e-icon-btn","e-dropdown-btn","no-border","hd-icon","hd-vertical-menu","more-option-button-background","more-option-button",3,"click"],["data-ripple","true",1,"e-control","e-btn","e-secondary","e-flat",3,"click"],["data-ripple","true",1,"e-control","e-btn","e-primary","e-flat",3,"click"],["contentGroupForm",""],[1,"dialog-content"],["id","editAgentContent"],[1,"form-group","pt-3"],[1,"error"],[3,"placeholder","dataSource","fields","allowFiltering","showClearButton","htmlAttributes","query","filterBarPlaceholder","focus","blur","change"],["agentDrop",""],["itemTemplate",""],[1,"error",3,"innerHTML"],[1,"flex-horizontal","p-2",3,"ngClass"],[1,"wrapper","flex-horizontal","full-width"],[1,"flex-vertical","no-wrap","ellipsis"],[1,"e-text"],[1,"font-12"],[1,"required"]],template:function(e,t){1&e&&(w.Tb(0,"div",0,1),w.Tb(2,"div",2),w.Ob(3,"div",3),w.Lc(4),w.hc(5,"translate"),w.Sb(),w.Tb(6,"div",4),w.Tb(7,"div",5),w.Tb(8,"div",6),w.Tb(9,"div",7),w.Tb(10,"ejs-textbox",8,9),w.ec("change",(function(){return t.searchNodes()})),w.hc(12,"translate"),w.Sb(),w.Sb(),w.Sb(),w.Sb(),w.Sb(),w.Tb(13,"div",10),w.Tb(14,"div",11,12),w.Tb(16,"ejs-grid",13,14),w.ec("dataBound",(function(){return t.viewListDataBound()})),w.Tb(18,"e-columns"),w.Tb(19,"e-column",15),w.hc(20,"translate"),w.Jc(21,B,3,1,"ng-template",null,16,w.Kc),w.Sb(),w.Tb(23,"e-column",17),w.hc(24,"translate"),w.Jc(25,_,2,1,"ng-template",null,16,w.Kc),w.Sb(),w.Tb(27,"e-column",18),w.hc(28,"translate"),w.Jc(29,z,3,3,"ng-template",null,16,w.Kc),w.Sb(),w.Tb(31,"e-column",19),w.Jc(32,H,2,0,"ng-template",null,16,w.Kc),w.Sb(),w.Sb(),w.Sb(),w.Sb(),w.Sb(),w.Sb(),w.Tb(34,"ejs-contextmenu",20,21),w.ec("select",(function(e){return t.moreOptionsSelect(e)}))("beforeOpen",(function(e){return t.contextMenuBeforeOpen(e,t.viewData)})),w.Sb(),w.Tb(36,"div"),w.Tb(37,"ejs-dialog",22,23),w.ec("overlayClick",(function(){return t.closeDialog()}))("close",(function(){return t.closeDialog()}))("open",(function(){return t.viewsDialogOpen()})),w.Jc(39,$,3,3,"ng-template",null,24,w.Kc),w.Jc(41,q,7,6,"ng-template",null,25,w.Kc),w.Jc(43,ee,18,17,"ng-template",null,26,w.Kc),w.Sb(),w.Sb()),2&e&&(w.xb(4),w.Nc(" ",w.ic(5,13,"VIEWMODULEINFO"),""),w.xb(6),w.oc("placeholder",w.ic(12,15,"SEARCH")),w.xb(6),w.nc("dataSource",t.viewList)("allowPaging",!0)("allowSorting",!0)("pageSettings",t.pageSettings)("allowResizing",!0),w.xb(3),w.oc("headerText",w.ic(20,17,"VIEWNAME")),w.xb(4),w.oc("headerText",w.ic(24,19,"OWNER")),w.xb(4),w.oc("headerText",w.ic(28,21,"PERMISSIONACCESSSCOPE")),w.nc("allowSorting",!1),w.xb(7),w.nc("items",t.moreActionsWithViews),w.xb(3),w.nc("visible",!1))},directives:[C.i,k.k,k.e,k.b,k.d,k.a,M.f,g.b,c.n,c.m,E.e,c.l],pipes:[L.a,D.a],styles:["body[_ngcontent-%COMP%]{--theme-color:#ff4800;--header-background-color:#ff4800;--header-font-color:#183247;--header-font-style:Roboto,segoe ui;--body-background-color:#f3f5f7;--primary-color:rgba(0,0,0,0.87);--secondary-color:#718096;--font-style:Roboto,segoe ui;--footer-background-color:#f1f1f1}.border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid #e2e8f0!important}.border-top[_ngcontent-%COMP%]{border-top:1px solid #e2e8f0!important}.border-right[_ngcontent-%COMP%]{border-right:1px solid #e2e8f0!important}.border-left[_ngcontent-%COMP%]{border-left:1px solid #e2e8f0!important}.border[_ngcontent-%COMP%]{border:1px solid #e2e8f0!important}.border-radius[_ngcontent-%COMP%]{border-radius:5px}.action-content-padding[_ngcontent-%COMP%]   .hd-vertical-menu[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.action-content-padding[_ngcontent-%COMP%]   .hd-vertical-menu[_ngcontent-%COMP%]:hover{border-radius:25px}.view-list[_ngcontent-%COMP%]{height:100%;overflow:auto}.view-list[_ngcontent-%COMP%]   .grid-menu-bar[_ngcontent-%COMP%]{height:50px;width:100%}.view-list[_ngcontent-%COMP%]   .grid-menu-bar[_ngcontent-%COMP%]   .view-menu-bar[_ngcontent-%COMP%]{border-radius:0;height:32px;padding-right:5px;width:100%}"],changeDetection:0}),te)},{path:"**",component:s.a}],re=((ie=function t(){e(this,t)}).\u0275mod=w.Lb({type:ie}),ie.\u0275inj=w.Kb({factory:function(e){return new(e||ie)},imports:[[a.k.forChild(oe)],a.k]}),ie),ce=o("ltyr"),ae=o("np3I"),se=o("5OZa"),le=o("SRvG"),ue=((ne=function t(){e(this,t)}).\u0275mod=w.Lb({type:ne}),ne.\u0275inj=w.Kb({factory:function(e){return new(e||ne)},providers:[k.l,k.s,k.g,k.t,k.p,k.r,T],imports:[[c.b,re,ce.a,k.j,M.j,ae.AdminModule,E.d,se.c,g.a,C.h,le.d,le.h,M.e]]}),ne)},EiDu:function(t,n,o){"use strict";o.d(n,"a",(function(){return a}));var r=o("fXoL"),c=o("jhN1"),a=function(){var t=function(){function t(i){e(this,t),this.sanitizer=i}return i(t,[{key:"transform",value:function(e,t){switch(t){case"html":return this.sanitizer.bypassSecurityTrustHtml(e);case"style":return this.sanitizer.bypassSecurityTrustStyle(e);case"script":return this.sanitizer.bypassSecurityTrustScript(e);case"url":return this.sanitizer.bypassSecurityTrustUrl(e);case"resourceUrl":return this.sanitizer.bypassSecurityTrustResourceUrl(e);default:throw new Error("Invalid safe type specified: "+t)}}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Nb(c.c))},t.\u0275pipe=r.Mb({name:"safe",type:t,pure:!0}),t}()},mrjb:function(t,i,n){"use strict";n.d(i,"a",(function(){return c}));var o=n("dSv1"),r=n("fXoL"),c=function(){var t=function t(){e(this,t),this.title=Object(o.a)("PAGENOTFOUND"),this.message=Object(o.a)("PAGENOTFOUNDMESSAGE")};return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Hb({type:t,selectors:[["app-page-not-found"]],decls:10,vars:2,consts:[[1,"fallback-container","flex-vertical"],[1,"row","container","align-center","mt-100"],[1,"col-xs-12","col-sm-12","col-md-12","col-lg-12"],[1,"fallback_image"],["height","300","width","300","src","assets/images/page-not-found.png"],[1,"fallback_message"],[1,"error-font"],[1,"message-style","font-16"]],template:function(e,t){1&e&&(r.Tb(0,"div",0),r.Tb(1,"div",1),r.Tb(2,"div",2),r.Tb(3,"div",3),r.Ob(4,"img",4),r.Sb(),r.Tb(5,"div",5),r.Tb(6,"div",6),r.Lc(7),r.Sb(),r.Tb(8,"span",7),r.Lc(9),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb()),2&e&&(r.xb(7),r.Mc(t.title),r.xb(2),r.Mc(t.message))},styles:[".fallback-container[_ngcontent-%COMP%]{height:100%;text-align:center}.fallback-container[_ngcontent-%COMP%]   .message-style[_ngcontent-%COMP%]{font-weight:400;line-height:24px;padding-top:6px}"]}),t}()}}])}();