!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function i(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"64zv":function(e,a,n){"use strict";n.d(a,"a",(function(){return h}));var o,c,r,s=n("58Y9"),l=n("fXoL"),d=n("qZph"),u=n("ofXK"),b=((r=function(){function e(){t(this,e)}return i(e,[{key:"transform",value:function(t,e){if(t){var i=Object(s.t)(!0),a=Object(s.u)(t,!1),n=Math.floor((+i-+a)/1e3),o=Math.floor(n/60);if(o<1)return"1 min ago";var c,r={day:1440,hour:60,min:1};for(var l in r){if((c=Math.floor(o/r[l]))>0&&e)return 1===c?c+" "+l+" ago":c+" "+l+"s ago";if(c>0&&!e)return 1===c?c+" "+l+" ago":c<=7||"day"!==l?c+" "+l+"s ago":t}}return t}}]),e}()).\u0275fac=function(t){return new(t||r)},r.\u0275pipe=l.Mb({name:"dateAgo",type:r,pure:!0}),r),g=((c=function(){function e(){t(this,e)}return i(e,[{key:"transform",value:function(t){if(t){var e=Object(s.t)(!0),i=Object(s.u)(t,!1),a=Math.floor((+e-+i)/1e3);if(Math.floor(a/60)<1)return"1 min ago";var n,o={day:86400,hour:3600,minute:60,second:1};for(var c in o)if((n=Math.floor(a/o[c]))>0)return 1===n?n+" "+c:n+" "+c+"s"}return t}}]),e}()).\u0275fac=function(t){return new(t||c)},c.\u0275pipe=l.Mb({name:"dateDays",type:c,pure:!0}),c),h=((o=function e(){t(this,e),this.format="MMM dd, yyyy hh:mm a",this.date=new Date,this.timeZoneWithUTC=Object(s.K)()}).\u0275fac=function(t){return new(t||o)},o.\u0275cmp=l.Hb({type:o,selectors:[["app-date-time"]],inputs:{timezone:"timezone",format:"format",tooltipPrefix:"tooltipPrefix",prefixString:"prefixString",suffixString:"suffixString",date:"date",enableAgo:"enableAgo",enableDays:"enableDays",enableOnlyAgo:"enableOnlyAgo"},decls:11,vars:34,consts:[["data-non-elliptical","true"]],template:function(t,e){1&t&&(l.Tb(0,"span",0),l.hc(1,"dateTimeUTC"),l.hc(2,"date"),l.Lc(3),l.hc(4,"dateAgo"),l.hc(5,"date"),l.hc(6,"dateAgo"),l.hc(7,"date"),l.hc(8,"dateDays"),l.hc(9,"date"),l.hc(10,"date"),l.Sb()),2&t&&(l.Ab("data-title","",e.tooltipPrefix," ",l.ic(1,5,l.kc(2,7,e.date,e.format,e.timezone)),""),l.xb(3),l.Pc(" ",e.prefixString," ",e.enableAgo&&!e.enableOnlyAgo?l.ic(4,11,l.kc(5,13,e.date,e.format,e.timezone)):e.enableAgo&&e.enableOnlyAgo?l.jc(6,17,l.kc(7,20,e.date,e.format,e.timezone),!0):e.enableDays?l.ic(8,24,l.kc(9,26,e.date,e.format,e.timezone)):l.kc(10,30,e.date,e.format,e.timezone)," ",e.suffixString," "))},pipes:[d.a,u.d,b,g],styles:[""]}),o)},mrjb:function(e,i,a){"use strict";a.d(i,"a",(function(){return c}));var n=a("dSv1"),o=a("fXoL"),c=function(){var e=function e(){t(this,e),this.title=Object(n.a)("PAGENOTFOUND"),this.message=Object(n.a)("PAGENOTFOUNDMESSAGE")};return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Hb({type:e,selectors:[["app-page-not-found"]],decls:10,vars:2,consts:[[1,"fallback-container","flex-vertical"],[1,"row","container","align-center","mt-100"],[1,"col-xs-12","col-sm-12","col-md-12","col-lg-12"],[1,"fallback_image"],["height","300","width","300","src","assets/images/page-not-found.png"],[1,"fallback_message"],[1,"error-font"],[1,"message-style","font-16"]],template:function(t,e){1&t&&(o.Tb(0,"div",0),o.Tb(1,"div",1),o.Tb(2,"div",2),o.Tb(3,"div",3),o.Ob(4,"img",4),o.Sb(),o.Tb(5,"div",5),o.Tb(6,"div",6),o.Lc(7),o.Sb(),o.Tb(8,"span",7),o.Lc(9),o.Sb(),o.Sb(),o.Sb(),o.Sb(),o.Sb()),2&t&&(o.xb(7),o.Mc(e.title),o.xb(2),o.Mc(e.message))},styles:[".fallback-container[_ngcontent-%COMP%]{height:100%;text-align:center}.fallback-container[_ngcontent-%COMP%]   .message-style[_ngcontent-%COMP%]{font-weight:400;line-height:24px;padding-top:6px}"]}),e}()},qZph:function(e,a,n){"use strict";n.d(a,"a",(function(){return s}));var o=n("58Y9"),c=n("4SUy"),r=n("fXoL"),s=function(){var e=function(){function e(){t(this,e)}return i(e,[{key:"transform",value:function(t){if(!Object(c.X)(t))return t+" (UTC "+Object(o.K)()+")"}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=r.Mb({name:"dateTimeUTC",type:e,pure:!0}),e}()},uT83:function(e,a,n){"use strict";n.r(a),n.d(a,"AuditLogModule",(function(){return st}));var o=n("ofXK"),c=n("ltyr"),r=n("GJ+o"),s=n("hXFv"),l=n("np3I"),d=n("jcQU"),u=n("Pk9d"),b=n("tyNb"),g=n("mrjb"),h=n("H552"),p=n("58Y9"),f=n("M9dC"),v=n("A4Lh"),m=n("dSv1"),y=n("1gpv"),T={AuditLogList:y.f+"activity_logs",AuditLogEventType:y.f+"activity_logs/event_types",AuditLogEventCategory:y.f+"activity_logs/event_categories",AccessLogList:y.f+"access_logs",AccessLogEventCategory:y.f+"access_logs/event_categories"},S=[{label:"Today",start:Object(p.u)(Object(p.t)(!1).setHours(0,0,0,0)),end:Object(p.t)(!1)},{label:"Yesterday",start:Object(p.u)(Object(p.t)(!1).setDate(Object(p.t)(!1).getDate()-1),!1),end:Object(p.u)(Object(p.t)(!1).setDate(Object(p.t)(!1).getDate()-1),!1)},{label:"This week",start:Object(p.w)(),end:Object(p.t)(!1)},{label:"Last 7 days",start:Object(p.u)(Object(p.t)(!1).setDate(Object(p.t)(!1).getDate()-7),!1),end:Object(p.t)(!1)},{label:"Last 15 days",start:Object(p.u)(Object(p.t)(!1).setDate(Object(p.t)(!1).getDate()-15),!1),end:Object(p.t)(!1)},{label:"This month",start:Object(p.u)(Object(p.u)(Object(p.t)(!1).setDate(1)),!1),end:Object(p.t)(!1)},{label:"Last 30 days",start:Object(p.u)(Object(p.t)(!1).setDate(Object(p.t)(!1).getDate()-30),!1),end:Object(p.t)(!1)},{label:"Last 60 days",start:Object(p.u)(Object(p.t)(!1).setDate(Object(p.t)(!1).getDate()-60),!1),end:Object(p.t)(!1)},{label:"Last 90 days",start:Object(p.u)(Object(p.t)(!1).setDate(Object(p.t)(!1).getDate()-90),!1),end:Object(p.t)(!1)}],L=n("ScLb"),x=function(t){return t.ActivityLogs="Activity Logs",t.AccessLogs="Access Logs",t}({}),O=function(t){return t.ActivityLogs="0",t.AccessLog="1",t}({}),D=n("fXoL"),A=n("1kef"),w=n("JCZ/"),C=n("ed8r"),j=n("SRvG"),E=n("64zv"),M=n("AjNn"),k=["auditLogListGrid"],N=["eventCategory"],I=["eventType"],P=["eventDate"],F=["auditLogSummaryDialog"],U=["agentDrop"],R=["logsViewTab"];function G(t,e){1&t&&(D.Tb(0,"span"),D.Lc(1),D.hc(2,"translate"),D.Sb()),2&t&&(D.xb(1),D.Mc(D.ic(2,1,"AUDITLOGMODULEINFO")))}function J(t,e){1&t&&(D.Tb(0,"span"),D.Lc(1),D.hc(2,"translate"),D.Sb()),2&t&&(D.xb(1),D.Mc(D.ic(2,1,"ACCESSLOGMODULEINFO")))}function _(t,e){if(1&t){var i=D.Ub();D.Tb(0,"div",7),D.Tb(1,"ejs-multiselect",34,35),D.ec("change",(function(){return D.Bc(i),D.gc().eventTypeChange()})),D.hc(3,"translate"),D.hc(4,"translate"),D.Sb(),D.Sb()}if(2&t){var a=D.gc();D.xb(1),D.oc("filterBarPlaceholder",D.ic(3,6,"SEARCH")),D.oc("placeholder",D.ic(4,8,"EVENTTYPE")),D.nc("htmlAttributes",a.autoCompleteAttribute)("showDropDownIcon",!0)("dataSource",a.eventTypeData)("fields",a.eventTypeFields)}}function B(t,e){if(1&t&&(D.Tb(0,"div",36),D.Tb(1,"div",37),D.Tb(2,"span"),D.Lc(3),D.Sb(),D.Sb(),D.Tb(4,"span",38),D.Ob(5,"app-date-time",39),D.Sb(),D.Sb()),2&t){var i=e.$implicit,a=D.gc();D.xb(2),D.yb("data-title",i.user),D.xb(1),D.Nc(" ",i.user," "),D.xb(2),D.nc("date",i.eventDate)("format",a.format)("timezone",a.timeZone)}}function z(t,e){if(1&t&&(D.Tb(0,"div",40),D.Tb(1,"span",41),D.Lc(2),D.Sb(),D.Sb()),2&t){var i=e.$implicit;D.xb(2),D.Nc(" ",i.changeSummary," ")}}function V(t,e){if(1&t){var i=D.Ub();D.Tb(0,"div",42),D.ec("click",(function(){D.Bc(i);var t=e.$implicit;return D.gc().showAuditLogSummaryDialog(t)})),D.Lc(1),D.hc(2,"translate"),D.Sb()}2&t&&(D.xb(1),D.Nc(" ",D.ic(2,1,"VIEW"),""))}function W(t,e){1&t&&(D.Tb(0,"div",43),D.Lc(1),D.hc(2,"translate"),D.Sb()),2&t&&(D.xb(1),D.Nc(" ",D.ic(2,1,"DETAIL")," "))}function Y(t,e){if(1&t){var i=D.Ub();D.Tb(0,"div"),D.Tb(1,"button",44),D.ec("click",(function(){return D.Bc(i),D.gc().closeAuditLogSummaryDialog()})),D.Lc(2),D.hc(3,"translate"),D.Sb(),D.Sb()}2&t&&(D.xb(2),D.Mc(D.ic(3,1,"CANCEL")))}function H(t,e){1&t&&D.Ob(0,"div",52)}function K(t,e){if(1&t&&(D.Tb(0,"div"),D.Tb(1,"div",57),D.Tb(2,"div",50),D.Tb(3,"span"),D.Lc(4),D.hc(5,"translate"),D.Sb(),D.Sb(),D.Tb(6,"div",58),D.Tb(7,"span"),D.Lc(8),D.Sb(),D.Sb(),D.Sb(),D.Sb()),2&t){var i=D.gc().$implicit;D.xb(4),D.Mc(D.ic(5,3,"CHANGEITEM")),D.xb(3),D.yb("data-title",i.value),D.xb(1),D.Mc(i.value)}}function Q(t,e){if(1&t&&(D.Tb(0,"div"),D.Jc(1,K,9,5,"div",5),D.Sb()),2&t){var i=e.$implicit;D.xb(1),D.nc("ngIf","Item"==i.key)}}function q(t,e){if(1&t&&(D.Tb(0,"div",47),D.Tb(1,"div",48),D.Lc(2),D.Sb(),D.Tb(3,"div",49),D.Lc(4),D.Sb(),D.Sb()),2&t){var i=D.gc().$implicit;D.xb(2),D.Nc(" ",i.key," "),D.xb(2),D.Nc(" ",i.value," ")}}function X(t,e){if(1&t&&(D.Tb(0,"div"),D.Jc(1,q,5,2,"div",59),D.Sb()),2&t){var i=e.$implicit;D.xb(1),D.nc("ngIf","Item"!==i.key)}}function $(t,e){1&t&&D.Ob(0,"div",52)}function Z(t,e){if(1&t&&(D.Tb(0,"div",55),D.Jc(1,Q,2,1,"div",56),D.hc(2,"keyvalue"),D.Jc(3,X,2,1,"div",56),D.hc(4,"keyvalue"),D.Jc(5,$,1,0,"div",51),D.Sb()),2&t){var i=e.$implicit,a=e.last;D.xb(1),D.nc("ngForOf",D.ic(2,3,i)),D.xb(2),D.nc("ngForOf",D.ic(4,5,i)),D.xb(2),D.nc("ngIf",!a)}}function tt(t,e){if(1&t&&(D.Tb(0,"div"),D.Tb(1,"div",53),D.Lc(2),D.hc(3,"translate"),D.Sb(),D.Jc(4,Z,6,7,"div",54),D.Sb()),2&t){var i=D.gc(3);D.xb(2),D.Nc("",D.ic(3,2,"CHANGELOGS")," "),D.xb(2),D.nc("ngForOf",i.auditLogSummaryDetail)}}function et(t,e){if(1&t&&(D.Tb(0,"div",46),D.Tb(1,"div",47),D.Tb(2,"div",48),D.Lc(3),D.hc(4,"translate"),D.Sb(),D.Tb(5,"div",49),D.Tb(6,"span"),D.Lc(7),D.Sb(),D.Sb(),D.Sb(),D.Tb(8,"div",47),D.Tb(9,"div",50),D.Lc(10),D.hc(11,"translate"),D.Sb(),D.Tb(12,"div",49),D.Ob(13,"app-date-time",39),D.Sb(),D.Sb(),D.Tb(14,"div",47),D.Tb(15,"div",48),D.Lc(16),D.hc(17,"translate"),D.Sb(),D.Tb(18,"div",49),D.Tb(19,"span"),D.Lc(20),D.Sb(),D.Sb(),D.Sb(),D.Tb(21,"div",47),D.Tb(22,"div",48),D.Lc(23),D.hc(24,"translate"),D.Sb(),D.Tb(25,"div",49),D.Tb(26,"span"),D.Lc(27),D.Sb(),D.Sb(),D.Sb(),D.Tb(28,"div",47),D.Tb(29,"div",48),D.Lc(30),D.hc(31,"translate"),D.Sb(),D.Tb(32,"div",49),D.Tb(33,"span"),D.Lc(34),D.Sb(),D.Sb(),D.Sb(),D.Tb(35,"div",47),D.Tb(36,"div",48),D.Lc(37),D.hc(38,"translate"),D.Sb(),D.Tb(39,"div",49),D.Tb(40,"span"),D.Lc(41),D.Sb(),D.Sb(),D.Sb(),D.Tb(42,"div",47),D.Tb(43,"div",48),D.Lc(44),D.hc(45,"translate"),D.Sb(),D.Tb(46,"div",49),D.Tb(47,"span"),D.Lc(48),D.Sb(),D.Sb(),D.Sb(),D.Jc(49,H,1,0,"div",51),D.Jc(50,tt,5,4,"div",5),D.Sb()),2&t){var i=D.gc(2);D.xb(3),D.Nc("",D.ic(4,18,"SUMMARY")," "),D.xb(4),D.Mc(i.auditLogData.changeSummary),D.xb(3),D.Nc("",D.ic(11,20,"DATE")," "),D.xb(3),D.oc("date",i.auditLogData.eventDate),D.nc("format",i.format)("timezone",i.timeZone),D.xb(3),D.Nc("",D.ic(17,22,"USER")," "),D.xb(4),D.Mc(i.auditLogData.user),D.xb(3),D.Nc("",D.ic(24,24,"IPADDRESS")," "),D.xb(4),D.Mc(i.auditLogData.ipAddress),D.xb(3),D.Nc("",D.ic(31,26,"EVENTCATEGORY")," "),D.xb(4),D.Mc(i.auditLogData.eventCategory),D.xb(3),D.Nc("",D.ic(38,28,"EVENTTYPE")," "),D.xb(4),D.Mc(i.auditLogData.eventType),D.xb(3),D.Nc("",D.ic(45,30,"USERAGENT")," "),D.xb(4),D.Mc(i.auditLogData.browserDetails),D.xb(1),D.nc("ngIf",i.auditLogSummaryDetail),D.xb(1),D.nc("ngIf",i.auditLogSummaryDetail)}}function it(t,e){if(1&t&&D.Jc(0,et,51,32,"div",45),2&t){var i=D.gc();D.nc("ngIf",i.auditLogData)}}var at,nt,ot,ct=[{path:"",component:(at=function(){function e(i,a){t(this,e),this.appRootService=i,this.seoService=a,this.startDate=Object(p.u)(Object(p.t)(!1).setDate(Object(p.t)(!1).getDate()-30),!1),this.endDate=Object(p.t)(!1),this.queryParamterKey="q",this.autoCompleteAttribute={autocomplete:"anyrandomstring"},this.eventCategoryFields={text:"name",value:"id"},this.eventTypeFields={text:"name",value:"id"},this.agentListFields={value:"userId",text:"displayName"},this.presets=S,this.agentTemplate='<span style="display:inline-flex;width:calc(100% - 36px)"><div class="flex-horizontal p-2 ellipsis no-wrap"><div class="wrapper flex-horizontal" style="width:100%"><div class="flex-vertical ellipsis no-wrap" style="text-indent:initial"><span class="e-text">${displayName}</span><span class="e-text">${emailId}</span></div></div></div></span>',this.dialogAgentPosition={X:"right"},this.tabContent=[{text:x.ActivityLogs},{text:x.AccessLogs}],this.tabAnimationSettings={next:{effect:"None"},previous:{effect:"None"}},this.isActivityTab=!0,this.timeZone=v.P.timeZoneOffset,this.format=v.e.dateFormat+" "+v.e.timeFormat;var n=Object(m.a)("ADMIN")+" / "+Object(m.a)("AUDITLOG"),o=Object(m.a)("AUDITLOG")+" | "+Object(m.a)("ADMIN");this.appRootService.setAppTitleText(n),this.seoService.setHeaderElements({title:o}),this.appRootService.isSideBarNeeded(!0),this.appRootService.setBrandDropDownVisibility(!1)}return i(e,[{key:"ngOnInit",value:function(){var t=this;this.pageSettings={pageSize:v.q},this.refreshEventCategory(T.AuditLogEventCategory),this.eventTypeData=new h.a({url:T.AuditLogEventType,adaptor:new f.b}),this.refreshagentOrUserData(L.a.Assignee),this.currentTabUrl=T.AuditLogList,setTimeout((function(){t.applyFilter()}))}},{key:"auditLogListDataBound",value:function(){Object(p.a)(this.auditLogListGrid),this.logsViewTab.selectingID===O.AccessLog?(this.auditLogListGrid.showColumns([Object(m.a)("LOGINSOURCE"),Object(m.a)("BRANDNAME"),Object(m.a)("IPADDRESS")]),this.auditLogListGrid.hideColumns([Object(m.a)("EVENTTYPE"),Object(m.a)("SUMMARY"),Object(m.a)("DETAIL")])):(this.auditLogListGrid.hideColumns([Object(m.a)("LOGINSOURCE"),Object(m.a)("BRANDNAME"),Object(m.a)("IPADDRESS")]),this.auditLogListGrid.showColumns([Object(m.a)("EVENTTYPE"),Object(m.a)("SUMMARY"),Object(m.a)("DETAIL")]))}},{key:"openAuditLogSummaryDialog",value:function(){var t=this.auditLogSummaryDialog.element.querySelector(".summary-cancel-button");t&&t.focus()}},{key:"closeAuditLogSummaryDialog",value:function(){this.auditLogSummaryDialog.hide()}},{key:"showAuditLogSummaryDialog",value:function(t){this.auditLogSummaryDetail=JSON.parse(t.changeLog),this.auditLogData=t,this.auditLogSummaryDialog.show()}},{key:"eventCategoryChange",value:function(){this.eventCategory.value&&0===this.eventCategory.value.length&&(this.eventCategory.value=null)}},{key:"eventTypeChange",value:function(){0===this.eventType.value.length&&(this.eventType.value=null)}},{key:"agentDropChange",value:function(){this.eventCategory.value&&0===this.agentDrop.value.length&&(this.agentDrop.value=null)}},{key:"getFilterValues",value:function(){return{eventdate:this.eventDate.value,eventcategory:this.eventCategory.value,eventtype:this.eventType?this.eventType.value:null,user:this.agentDrop?this.agentDrop.value:null}}},{key:"applyFilter",value:function(){var t;t=this.setFilterUrl();var e={};this.getFilterValues()&&(e=t,this.refreshGridDataSource(e))}},{key:"setFilterUrl",value:function(){return JSON.parse(this.setQueryParametersFromFormValue())}},{key:"setQueryParametersFromFormValue",value:function(){var t=this,e="",i={},a=JSON.stringify(this.getFilterValues()),n=JSON.parse(a);return Object.keys(n).map((function(a){if(e=a,Array.isArray(n[a])&&"eventdate"!==e&&0===n[a].length&&(n[a]=null),!Object(p.D)(n[a])){if("eventdate"===e)if(n.eventdate_preset){if("customrange"!==n.eventdate_preset.split(" ").join("").toLowerCase())n[a]="eventdate:"+n.eventdate_preset.split(" ").join("").toLowerCase();else if(Array.isArray(n[a])){var o=n.eventdate;o&&2===o.length&&(n[a]=t.eventDateFormatChange(o))}}else if(Array.isArray(n[a])){var c=n.eventdate;c&&2===c.length&&(n[a]=t.eventDateFormatChange(c))}Array.isArray(n[a])&&(n[a]=t.convertArrayToArrayString(a,n[a])),i[e]=n[a]}})),JSON.stringify(i)}},{key:"eventDateFormatChange",value:function(t){var e={};return e.from=Object(p.F)(Object(p.u)(t[0]).toString()),e.to=Object(p.F)(Object(p.u)(t[1]).toString()),"eventdate:"+JSON.stringify(e)}},{key:"convertArrayToArrayString",value:function(t,e){return t.toLowerCase()+":"+JSON.stringify(e)}},{key:"refreshGridDataSource",value:function(t){var e;e=this.currentTabUrl,t&&(Array.isArray(t)||"object"==typeof t?Object.keys(t).map((function(i){e=Object(p.i)(e,"q",t[i])})):e=Object(p.i)(e,"q",t.toString())),this.auditLogList=new h.a({url:e,adaptor:new f.a})}},{key:"refreshEventCategory",value:function(t){this.eventCategoryData=new h.a({url:t,adaptor:new f.b})}},{key:"refreshagentOrUserData",value:function(t){this.agentOrUserDropData=new h.a({url:t,adaptor:new f.b})}},{key:"tabSelecting",value:function(){this.eventCategory.value=null,this.agentDrop.value=null,this.logsViewTab.selectingID===O.AccessLog?(this.isAccessLog=!0,this.selectAccessLogTab()):(this.isAccessLog=!1,this.selectAuditLogTab())}},{key:"selectAuditLogTab",value:function(){this.isActivityTab=!0,this.currentTabUrl=T.AuditLogList,this.refreshEventCategory(T.AuditLogEventCategory),this.refreshagentOrUserData(L.a.Assignee),this.applyFilter()}},{key:"selectAccessLogTab",value:function(){this.isActivityTab=!1,this.currentTabUrl=T.AccessLogList,this.refreshEventCategory(T.AccessLogEventCategory),this.refreshagentOrUserData(L.a.Requester),this.applyFilter()}},{key:"rowClick",value:function(t){this.auditLogSummaryDialog.position={X:this.auditLogListGrid.element.offsetWidth-111};var e=t.data;e&&this.showAuditLogSummaryDialog(e)}}]),e}(),at.\u0275fac=function(t){return new(t||at)(D.Nb(A.a),D.Nb(w.a))},at.\u0275cmp=D.Hb({type:at,selectors:[["ng-component"]],viewQuery:function(t,e){var i;1&t&&(D.Qc(k,!0),D.Qc(N,!0),D.Qc(I,!0),D.Qc(P,!0),D.Qc(F,!0),D.Qc(U,!0),D.Qc(R,!0)),2&t&&(D.xc(i=D.fc())&&(e.auditLogListGrid=i.first),D.xc(i=D.fc())&&(e.eventCategory=i.first),D.xc(i=D.fc())&&(e.eventType=i.first),D.xc(i=D.fc())&&(e.eventDate=i.first),D.xc(i=D.fc())&&(e.auditLogSummaryDialog=i.first),D.xc(i=D.fc())&&(e.agentDrop=i.first),D.xc(i=D.fc())&&(e.logsViewTab=i.first))},decls:67,vars:71,consts:[[1,"auditlog-grid"],[3,"animation","selecting"],["logsViewTab",""],[3,"header"],[1,"pl-3","pt-3","pb-2","secondary"],[4,"ngIf"],[1,"flex-horizontal","mt-3"],[1,"pl-3","pb-3"],["id","event-date-field","width","150",3,"placeholder","allowEdit","showClearButton","startDate","endDate","presets"],["eventDate",""],["width","160","popupHeight","200px","popupWidth","200px","mode","CheckBox",3,"htmlAttributes","dataSource","filterBarPlaceholder","fields","showDropDownIcon","placeholder","change"],["eventCategory",""],["class","pl-3 pb-3",4,"ngIf"],["width","160","popupHeight","250px","popupWidth","250px","mode","CheckBox",3,"htmlAttributes","showDropDownIcon","dataSource","filterBarPlaceholder","fields","placeholder","itemTemplate","change"],["agentDrop",""],["ejs-button","",1,"e-flat","e-btn","e-primary","e-outline","audit-log-apply-button",3,"click"],[1,"no-margin","no-padding","auditlog-grid"],[2,"height","100%"],["id","auditLoglistgrid","allowPaging","true","allowResizing","true","height","100%",3,"dataSource","pageSettings","dataBound","rowSelecting"],["auditLogListGrid",""],["field","user","minWidth","100px","width","200",3,"headerText"],["template",""],["field","ipAddress","clipMode","EllipsisWithTooltip","minWidth","110px","width","120",3,"headerText","visible"],["field","eventType","clipMode","EllipsisWithTooltip","minWidth","100px","width","120",3,"headerText"],["field","eventCategory","clipMode","EllipsisWithTooltip","minWidth","120px","width","130",3,"headerText"],["field","changeSummary","width","340",3,"headerText"],["clipMode","EllipsisWithTooltip","minWidth","80px","width","80",3,"headerText"],["field","brandName","clipMode","EllipsisWithTooltip","minWidth","120px","width","140",3,"headerText"],["field","loginSource","clipMode","EllipsisWithTooltip","minWidth","120px","width","140",3,"headerText"],["id","auditlogdialog","width","500px","showCloseIcon","true","closeOnEscape","true","cssClass","dialog-height rounded-0","height","100%",3,"visible","isModal","position","overlayClick","close","open"],["auditLogSummaryDialog",""],["header",""],["footerTemplate",""],["content",""],["width","160","popupHeight","200px","popupWidth","200px","mode","CheckBox",3,"htmlAttributes","showDropDownIcon","dataSource","filterBarPlaceholder","fields","placeholder","change"],["eventType",""],[1,"cursor-pointer","grid-text-font-color","user-name-audit-log","flex-vertical"],[1,"ellipsis","accesslog-user-name","font-500"],[1,"font-400","font-13","secondary"],[3,"date","format","timezone"],[1,"cursor-pointer","grid-text-font-color","flex-vertical"],[2,"overflow-wrap","anywhere !important","white-space","normal","text-overflow","auto"],[1,"link","font-13",3,"click"],[1,"audit-log-dialog-title"],[1,"e-control","e-btn","e-secondary","e-flat","summary-cancel-button",3,"click"],["style","width: 100%;",4,"ngIf"],[2,"width","100%"],[1,"flex-horizontal"],[1,"font-500","audit-log-dialog-header",2,"margin-bottom","auto"],[1,"audit-log-dialog-content"],[1,"font-500","audit-log-dialog-header"],["class","border-bottom m-2",4,"ngIf"],[1,"border-bottom","m-2"],[1,"font-500","audit-log-dialog-header","font-15"],["class","no-padding",4,"ngFor","ngForOf"],[1,"no-padding"],[4,"ngFor","ngForOf"],[1,"flex-horizontal","no-padding",2,"margin-bottom","auto"],[1,"pt-2","no-wrap","ellipsis","audit-log-dialog-content"],["class","flex-horizontal",4,"ngIf"]],template:function(t,e){1&t&&(D.Tb(0,"div",0),D.Tb(1,"div"),D.Tb(2,"ejs-tab",1,2),D.ec("selecting",(function(){return e.tabSelecting()})),D.Tb(4,"e-tabitems"),D.Ob(5,"e-tabitem",3),D.Ob(6,"e-tabitem",3),D.Sb(),D.Sb(),D.Sb(),D.Tb(7,"div",4),D.Jc(8,G,3,3,"span",5),D.Jc(9,J,3,3,"span",5),D.Sb(),D.Tb(10,"div",6),D.Tb(11,"div",7),D.Ob(12,"ejs-daterangepicker",8,9),D.hc(14,"translate"),D.Sb(),D.Tb(15,"div",7),D.Tb(16,"ejs-multiselect",10,11),D.ec("change",(function(){return e.eventCategoryChange()})),D.hc(18,"translate"),D.hc(19,"translate"),D.Sb(),D.Sb(),D.Jc(20,_,5,10,"div",12),D.Tb(21,"div",7),D.Tb(22,"ejs-multiselect",13,14),D.ec("change",(function(){return e.agentDropChange()})),D.hc(24,"translate"),D.hc(25,"translate"),D.Sb(),D.Sb(),D.Tb(26,"div",7),D.Tb(27,"button",15),D.ec("click",(function(){return e.applyFilter()})),D.Lc(28),D.hc(29,"translate"),D.Sb(),D.Sb(),D.Sb(),D.Tb(30,"div",16),D.Tb(31,"div",17),D.Tb(32,"ejs-grid",18,19),D.ec("dataBound",(function(){return e.auditLogListDataBound()}))("rowSelecting",(function(t){return e.rowClick(t)})),D.Tb(34,"e-columns"),D.Tb(35,"e-column",20),D.hc(36,"translate"),D.hc(37,"translate"),D.Jc(38,B,6,5,"ng-template",null,21,D.Kc),D.Sb(),D.Ob(40,"e-column",22),D.hc(41,"translate"),D.Ob(42,"e-column",23),D.hc(43,"translate"),D.Ob(44,"e-column",24),D.hc(45,"translate"),D.Tb(46,"e-column",25),D.hc(47,"translate"),D.Jc(48,z,3,1,"ng-template",null,21,D.Kc),D.Sb(),D.Tb(50,"e-column",26),D.hc(51,"translate"),D.Jc(52,V,3,3,"ng-template",null,21,D.Kc),D.Sb(),D.Ob(54,"e-column",27),D.hc(55,"translate"),D.Ob(56,"e-column",28),D.hc(57,"translate"),D.Sb(),D.Sb(),D.Sb(),D.Sb(),D.Sb(),D.Tb(58,"div"),D.Tb(59,"ejs-dialog",29,30),D.ec("overlayClick",(function(){return e.closeAuditLogSummaryDialog()}))("close",(function(){return e.closeAuditLogSummaryDialog()}))("open",(function(){return e.openAuditLogSummaryDialog()})),D.Jc(61,W,3,3,"ng-template",null,31,D.Kc),D.Jc(63,Y,4,3,"ng-template",null,32,D.Kc),D.Jc(65,it,1,1,"ng-template",null,33,D.Kc),D.Sb(),D.Sb()),2&t&&(D.xb(2),D.nc("animation",e.tabAnimationSettings),D.xb(3),D.nc("header",e.tabContent[0]),D.xb(1),D.nc("header",e.tabContent[1]),D.xb(2),D.nc("ngIf",!e.isAccessLog),D.xb(1),D.nc("ngIf",e.isAccessLog),D.xb(3),D.oc("placeholder",D.ic(14,41,"DATE")),D.nc("allowEdit",!1)("showClearButton",!1)("startDate",e.startDate)("endDate",e.endDate)("presets",e.presets),D.xb(4),D.oc("filterBarPlaceholder",D.ic(18,43,"SEARCH")),D.oc("placeholder",D.ic(19,45,"EVENTCATEGORY")),D.nc("htmlAttributes",e.autoCompleteAttribute)("dataSource",e.eventCategoryData)("fields",e.eventCategoryFields)("showDropDownIcon",!0),D.xb(4),D.nc("ngIf",e.isActivityTab),D.xb(2),D.oc("filterBarPlaceholder",D.ic(24,47,"SEARCH")),D.oc("placeholder",D.ic(25,49,"USER")),D.nc("htmlAttributes",e.autoCompleteAttribute)("showDropDownIcon",!0)("dataSource",e.agentOrUserDropData)("fields",e.agentListFields)("itemTemplate",e.agentTemplate),D.xb(6),D.Nc(" ",D.ic(29,51,"APPLY")," "),D.xb(4),D.nc("dataSource",e.auditLogList)("pageSettings",e.pageSettings),D.xb(3),D.qc("headerText","",D.ic(36,53,"USER")," / ",D.ic(37,55,"DATE"),""),D.xb(5),D.oc("headerText",D.ic(41,57,"IPADDRESS")),D.nc("visible",!1),D.xb(2),D.oc("headerText",D.ic(43,59,"EVENTTYPE")),D.xb(2),D.oc("headerText",D.ic(45,61,"EVENTCATEGORY")),D.xb(2),D.oc("headerText",D.ic(47,63,"SUMMARY")),D.xb(4),D.oc("headerText",D.ic(51,65,"DETAIL")),D.xb(4),D.oc("headerText",D.ic(55,67,"BRANDNAME")),D.xb(2),D.oc("headerText",D.ic(57,69,"LOGINSOURCE")),D.xb(3),D.nc("visible",!1)("isModal",!1)("position",e.dialogAgentPosition))},directives:[s.m,s.o,s.n,o.n,C.d,d.h,j.c,r.k,r.e,r.b,r.d,r.a,u.b,E.a,o.m],pipes:[M.a,o.g],styles:[".auditlog-grid[_ngcontent-%COMP%]{padding:0 16px}.auditlog-grid[_ngcontent-%COMP%]   .e-gridcontent[_ngcontent-%COMP%]   .e-content[_ngcontent-%COMP%]   .e-movablecontent[_ngcontent-%COMP%]{overflow-y:hidden!important}.audit-log-dialog-height[_ngcontent-%COMP%]{max-height:70%!important}.audit-log-dialog-header[_ngcontent-%COMP%]{line-height:22px;padding:10px;width:30%}.audit-log-dialog-content[_ngcontent-%COMP%]{line-height:22px;overflow-wrap:anywhere;padding:10px;width:80%}.user-name-audit-log[_ngcontent-%COMP%]{padding:16px 23px 14px 5px}.audit-log-dialog-title[_ngcontent-%COMP%]{padding-left:9px!important}.accesslog-user-name[_ngcontent-%COMP%]{padding-bottom:4px}.audit-log-apply-button[_ngcontent-%COMP%]{height:30px!important}"]}),at)},{path:"**",component:g.a}],rt=((ot=function e(){t(this,e)}).\u0275mod=D.Lb({type:ot}),ot.\u0275inj=D.Kb({factory:function(t){return new(t||ot)},imports:[[b.k.forChild(ct)],b.k]}),ot),st=((nt=function e(){t(this,e)}).\u0275mod=D.Lb({type:nt}),nt.\u0275inj=D.Kb({factory:function(t){return new(t||nt)},providers:[r.l,r.s,r.t,r.o,r.g],imports:[[o.b,rt,c.a,r.j,s.j,l.AdminModule,d.d,u.a,C.c,d.g,s.l,j.b]]}),nt)}}])}();