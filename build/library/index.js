/*! v1.0.0 Build Tue Feb 02 2016 17:36:23 GMT+0300 (MSK) */
!function(){var e={},t=function(){var t,n,r,u=Array.prototype.slice.call(arguments,0);"string"==typeof u[0]?(r=u[0],t=u[1],n=u[2]):Array.isArray(u[0])&&(t=u[0],n=u[1]);var a=t.reduce(function(e,t){return e.addDependency(t)},tau.mashups);return a=a.addDependency(r+"/config"),a=a.addMashup(function(){var u=Array.prototype.slice.call(arguments,0);if(t.length>0&&1===u.length)throw new Error("Can't properly load dependencies for mashup \""+r+'", mashup is stopped.');return e.variables=u[u.length-1],u.length-t.length===2?e.config=u[u.length-2]:e.config={},Object.freeze&&(Object.freeze(e.variables),Object.freeze(e.config),Object.freeze(e)),n.apply(null,u)})};t("CustomFieldConstraints",["jQuery","Underscore","tau/configurator","tp3/mashups/sliceinterrupter","tp3/mashups/storage","react","tau/utils/utils.date","tau/components/component.container","tau/components/component.creator","tau/service.container","tau/services/service.navigator","tau/services/service.applicationContext","tau/components/component.application.generic","tau/ui/extensions/application.generic/ui.extension.application.generic.placeholder","tau/components/component.page.base","tau/core/class","tau/core/extension.base","tau/core/bus.reg","tau/core/templates-factory","tau/core/view-base","tau/services/service.customFields.cached","tau/libs/store2/store2"],function(t,n,r,u,a,i,o,s,c,f,l,d,m,p,g,y,v,h,C,b,F,T){return function(t){function n(e){if(u[e])return u[e].exports;var r=u[e]={exports:{},id:e,loaded:!1};return t[e].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}var r=window.webpackJsonp_mashup_CustomFieldConstraints;window.webpackJsonp_mashup_CustomFieldConstraints=function(e,u){for(var i,o,s=0,c=[];s<e.length;s++)o=e[s],a[o]&&c.push.apply(c,a[o]),a[o]=0;for(i in u)t[i]=u[i];for(r&&r(e,u);c.length;)c.shift().call(null,n)};var u={},a={2:0};return n.e=function(e,t){if(0===a[e])return t.call(null,n);if(void 0!==a[e])a[e].push(t);else{a[e]=[t];var r=document.getElementsByTagName("head")[0],u=document.createElement("script");u.type="text/javascript",u.charset="utf-8",u.async=!0,u.src=n.p+"chunks/"+e+"."+({3:"FormContainer"}[e]||e)+".51ee8e29b50dcf20e894.js",r.appendChild(u)}},n.m=t,n.c=u,n.p="",n.p=e.variables?e.variables.mashupPath:n.p,n(0)}([function(e,t,n){n(3),n(21),n(8),n(36),n(45),n(72),n(73),n(74),n(75),n(76),n(77),n(78),n(79),n(80),n(81),n(20),n(82),n(83),n(84),e.exports=n(85)},,,function(t,n,r){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}var a=r(4),i=u(a),o=r(15),s=u(o),c=r(19),f=u(c),l=e.variables.placeholderId,d=e.config,m=function(e,t){var n=e.entity,u=e.axes;r.e(3,function(){var e=r(21),a=r(22)["default"],i=document.getElementById(l).appendChild(document.createElement("div")),o=function(){e.unmountComponentAtNode(i),t.reject({response:{Message:"The changes were not saved as you didn't fill out the required custom fields"},status:400})},s=function(){e.unmountComponentAtNode(i),t.resolve()};e.render(e.createElement(a,{changes:u,entity:n,mashupConfig:d,onAfterSave:s,onCancel:o}),i)})},p=function(){m.apply(void 0,arguments)},g=function(){(0,s["default"])(d,p),(0,f["default"])(d,p),(0,i["default"])(d)};setTimeout(g,100)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};Object.defineProperty(t,"__esModule",{value:!0});var a=n(5),i=r(a),o=n(6),s=n(7),c=n(9),f=r(c),l=n(10),d=n(11),m=function(e,t,n){var r=function(e){var t=e.data.element,r=this;n(t,r)};e.getComponentBusRegistry().getByName(t).then(function(e){e.on("afterRender",r)})},p=function(e){return{type:"CustomField",config:e.config,caption:e.name,fieldType:e.fieldType,processId:e.process?e.process.id:null,required:!0,options:u({},e)}},g=["afterInit:last","before_dataBind"],y=function(e,t){return(0,s.addBusListener)(e,g.join(" + "),function(e){e.before_dataBind.suspendMain();var n=e.afterInit.data,r=e.before_dataBind.data,u=e["settings.ready"]?e["settings.ready"].data:void 0,a=function(){var t=arguments.length<=0||void 0===arguments[0]?[]:arguments[0];t.forEach(function(e){return r.types[e.entityType.name].template.items.push(p(e))}),e.before_dataBind.resumeMain()},i=n.config.context.configurator;t(a,i,n,r,u)})},v=function(e){var t=e.config;return t.options&&t.options.slice?t.options.slice.config.definition:null},h=function(e,t){var n=e.config;return(0,f["default"])(n.options.action?n.options.action[t]:(0,o.last)(n.options.path))},C=function(e,t){if(t.types)return(0,o.map)(t.types,function(e){return{name:e.entityType.name}});if(e.addAction)return e.addAction.data.types.map(function(e){return{name:e.name}});var n=v(e);return n?n.cells.types.map(function(e){return{name:e.type}}):[]},b=function(e,t){var n=[{type:"entitystate",targetValue:"_Initial"}],r=v(e),u=["x","y"].reduce(function(t,n){var u=r?r[n]:null;if(!u)return t;if((0,l.inValues)(u.types,"entitystate"))return t.concat({type:"entitystate",targetValue:h(e,n)});var a=(0,o.find)(u.types,function(e){return e.match(l.SLICE_CUSTOMFIELD_PREFIX)});return a?t.concat({type:"customfield",customFieldName:a.replace(l.SLICE_CUSTOMFIELD_PREFIX,""),targetValue:h(e,n)}):t},[]);return(0,l.isAssignable)({entityType:t})?(0,o.unique)(u.concat(n),function(e){return e.type}):u},F=function(e,t){var n=e.getApplicationContextService(),r=new a.Deferred;return n.getApplicationContext(t,{success:r.resolve}),r.promise()},T=function(e){var t=e.getAppStateStore();return(0,a.when)(t.get({fields:["acid"]})).then(function(t){var n=t.acid;return F(e,{acid:n})}).then(function(e){var t=e.processes;return t})},w=function(e,t){return e.find("[data-iscf=true][data-fieldname="+t+"]")},I=function(e){e.parent().removeClass("show"),e.parent().find("input, select").toArray().forEach(function(e){return(0,i["default"])(e).data("validate").rules=(0,o.without)((0,i["default"])(e).data("validate").rules,"required")})},_=function(e){e.parent().addClass("show"),e.parent().find("input, select").toArray().forEach(function(e){return(0,i["default"])(e).data("validate").rules=(0,i["default"])(e).data("validate").rules.concat("required")})},j=function(e,t,n){t.forEach(function(t){return I(w(e,t.name))}),n.forEach(function(t){return _(w(e,t.name))})},x=function(e,t){return(0,o.object)(t.map(function(t){return[t.name,w(e,t.name).val()]}))},S=function(e,t){return(0,i["default"])(e.find(".tau-control-set").toArray().filter(function(e){return(0,l.equalIgnoreCase)((0,i["default"])(e).data("type"),t.name)}))},E=function(e,t,n){return t.map(function(t){return w(e,t.name).on("change, input",(0,o.compose)(n,(0,o.constant)(void 0)))})},A=function(e,t){return e.find(".project").on("change, input",function(e){var n=(0,i["default"])(e.currentTarget),r=n.val(),u=parseInt(n.children().filter("[value="+r+"]").data("option").processId,10);setTimeout(function(){return t({id:u})},1)})},q=function(e,t,n,r,u,i,o){var s=[],c=[],f={};m(e,t,function(e,t){var o=S(e,i),l=function(){return t.fire("adjustPosition")},m=function(){var e=arguments.length<=0||void 0===arguments[0]?u:arguments[0],t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return(0,a.when)((0,d.getCustomFieldsForAxes)(n,r,e,{entityType:i},t,{skipValuesCheck:!1})).then(function(e){c=e,j(o,s,c)}).then(l)};m(),E(o,s,function(){f=x(o,c),m(u,f)}),A(o,function(e){return m([e],f)})}),(0,a.when)((0,d.getCustomFieldsForAxes)(n,r,u,{entityType:i},{},{skipValuesCheck:!0})).then(function(e){s=e}).then(function(){return o(s)}).fail(function(){return o([])})},k=function(e,t){var n=t.busName;return y(n,function(t,r,u,i){d.getCustomFieldsForAxes.resetCache();var s=C(u,i);(0,a.when)(T(r)).then(function(i){return(0,a.whenList)(s.map(function(t){var o=new a.Deferred,s=b(u,t);return s.length?q(r,n,e,s,i,t,o.resolve):o.resolve([]),o.promise()})).then(function(){for(var e=arguments.length,n=Array(e),r=0;e>r;r++)n[r]=arguments[r];return t((0,o.flatten)(n))})}).fail(function(){return t()})})};t["default"]=function(e){var t="board plus quick add general",n="board plus quick add cells",r="board axis quick add",u="board.cell.quick.add",a="relations-quick-add-general",i=[{busName:t},{busName:n},{busName:r},{busName:u},{busName:a}];i.forEach(function(t){k(e,t)})}},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){"use strict";var r=n(8),u=r.getBusRegistry(),a=function(e){return function(){e.apply(null,Array.prototype.slice.call(arguments).slice(1))}},i=function(e,t,n,r){var i=a(function(u){var a=u.bus;a.name===e&&a[r?"once":"on"](t,n)}),o=u.addEventListener("create",i);return u.addEventListener("destroy",a(function(r){var u=r.bus;u.name===e&&u.removeListener(t,n,o)})),{remove:function(){u.removeListener("create",i,o),u.getBusRegistry().getByName(e).then(function(e){e.removeListener(t,n,o)})}}},o=function(e,t,n){return i(e,t,n,!0)};e.exports={addBusListener:i,addBusListenerOnce:o}},function(e,t){e.exports=r},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){var t,n,r={},u=[],a="",i=String.fromCharCode,o=[[65,91],[97,123],[48,58],[43,44],[47,48]];for(n in o)for(t=o[n][0];t<o[n][1];t++)u.push(i(t));for(t=0;64>t;t++)r[u[t]]=t;for(t=0;t<e.length;t+=72){var s,c,f=0,l=0,d=e.substring(t,t+72);for(c=0;c<d.length;c++)for(s=r[d.charAt(c)],f=(f<<6)+s,l+=6;l>=8;)a+=i((f>>>(l-=8))%256)}return a.replace(/[^\w\s]/gi,"")};t["default"]=function(e){if(0!==e.indexOf("b64_"))return e;var t=e;return t=t.replace(/_0/g,"+"),t=t.replace(/_1/g,"/"),t=t.replace(/_2/g,"="),t=t.substring(4,t.length-1),n(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isStateRelated=t.SLICE_CUSTOMFIELD_PREFIX=t.getEntityTypesNamesFromConfig=t.isUser=t.isAssignable=t.isGeneral=t.inValues=t.equalByShortcut=t.equalIgnoreCase=t.lc=void 0;var r=n(6),u=t.lc=function(e){return e.toLowerCase()},a=t.equalIgnoreCase=function(e,t){return u(String(e))===u(String(t))},i=(t.equalByShortcut=function(e,t){return{_initial:t.isInitial,_final:t.isFinal,_planned:t.isPlanned}[u(e)]||!1},t.inValues=function(e){var t=arguments.length<=1||void 0===arguments[1]?"":arguments[1];return(0,r.isArray)(t)?t.some(function(t){return e.some(function(e){return a(t,e)})}):e.some(function(e){return a(e,t)})});t.isGeneral=function(e){return i(["General","Assignable","InboundAssignable","OutboundAssignable","Epic","Feature","UserStory","Task","Bug","TestPlan","TestPlanRun","Request","Project","Program","Release","Iteration","TeamIteration","Team","TestCase","Build","Impediment"],e.entityType.name)},t.isAssignable=function(e){return i(["Assignable","InboundAssignable","OutboundAssignable","Epic","Feature","UserStory","Task","Bug","TestPlan","TestPlanRun","Request"],e.entityType.name)},t.isUser=function(e){return i(["GeneralUser","User","Requester"],e.entityType.name)},t.getEntityTypesNamesFromConfig=function(e){return(0,r.unique)(e.reduce(function(e,t){return e.concat(Object.keys(t.constraints))},[]))},t.SLICE_CUSTOMFIELD_PREFIX=/^ddl(multipleselectionlist)?/,t.isStateRelated=function(e){return i(["entitystate","assignedteams","teamentitystate"],e)}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};Object.defineProperty(t,"__esModule",{value:!0}),t.getCustomFieldsForAxes=void 0;var i=n(5),o=n(6),s=n(10),c=n(12),f=r(c),l=n(13),d=r(l),m=n(14),p=function(e,t){return e.reduce(function(e,n){var r=(0,o.find)(t,function(e){return(0,s.equalIgnoreCase)(e.name,n)});return r?e.concat(r):e},[])},g=(0,o.memoize)(function(e,t){return(0,s.isGeneral)({entityType:t})?d["default"].get("CustomField",{take:1e3,where:"process.id == "+e+' and entityType.name == "'+t.name+'"',select:"new(required, name, id, config, fieldType, value, entityType, process)"}):d["default"].get("CustomField",{take:1e3,where:'process.id == null and entityType.name == "'+t.name+'"',select:"new(required, name, id, config, fieldType, value, entityType, process)"})}),y=function(e,t,n){return e.length?(0,i.when)(g(t,n)).then(function(t){return p(e,t)}):[]},v=(0,o.memoize)(function(e){return f["default"].get("EntityStates",{include:[{workflow:["id"]},{process:["id"]},{entityType:["name"]},"name","isInitial","isFinal","isPlanned",{subEntityStates:["id","name",{workflow:["id"]},"isInitial","isFinal","isPlanned"]}],where:"Process.Id in ("+e+")"})}),h=function(e,t,n){return(0,s.equalIgnoreCase)(n.entityType.name,t.name)&&((0,s.equalIgnoreCase)(e,n.name)||(0,s.equalByShortcut)(e,n))},C=function(e,t,n){var r=(0,o.partial)(h,e,t);return r(n)||n.subEntityStates.items.some(r)},b=function(e,t,n){return(0,i.when)(v(t)).then(function(t){return e.id?(0,o.find)(t,function(t){return t.id===e.id}):(0,o.find)(t,function(t){return h(e,n,t)})})},F=function(e,t,n){return(0,i.when)(y([e],t,n)).then(function(e){return e.length?e[0]:null})},T=(0,o.memoize)(function(e){return f["default"].get(e.entityType.name,e.id,{include:[{project:{process:["id"],teamProjects:["id"]},assignedTeams:["id",{team:["id"]}]}]})}),w=(0,o.memoize)(function(e){return e.length?f["default"].get("TeamProjects",{include:[{team:["id"]},{project:["id"]},{workflows:["id","name",{entityType:["name"]},{parentWorkflow:["id"]}]}],where:"id in ("+e.join(",")+")"}):[]}),I=function(e,t,n){if(e.id)return b(e,t,n.entityType);if(!(0,s.isAssignable)(n))return null;var r=n.entityType;return(0,i.when)(v(t),T(n)).then(function(e,t){var n=t.project?t.project.teamProjects.items:[],r=t.assignedTeams.items,u=t.project;return(0,i.when)(e,r,u,w((0,o.pluck)(n,"id")))}).then(function(t,u,a,i){var c=u.reduce(function(e,t){var r=t.team,u=(0,o.find)(i,function(e){return e.project.id===a.id&&e.team.id===r.id});if(!u)return e;var c=u.workflows.items.find(function(e){return(0,s.equalIgnoreCase)(e.entityType.name,n.entityType.name)});return c?e.concat(c):e},[]),f=(0,o.pluck)(c,"id");return t.find(function(t){return(0,s.inValues)(f,t.workflow.id)&&C(e,r,t)})})},_=function(e,t,n,r){return"entitystate"===e.type?b(t,n,r.entityType):"customfield"===e.type?F(e.customFieldName,n,r.entityType):"assignedteams"===e.type||"teamentitystate"===e.type?I(t,n,r):void 0},j=function(e,t,n,r){var o=arguments.length<=4||void 0===arguments[4]?{}:arguments[4],c=arguments.length<=5||void 0===arguments[5]?{skipValuesCheck:!1}:arguments[5],f=arguments.length<=6||void 0===arguments[6]?{}:arguments[6],l=[],d=t.targetValue;return n.reduce(function(n,i){var p=i.id;return n.then(function(){return _(t,d,p,r)}).then(function(n){if(!n)return[];if((0,s.isStateRelated)(t.type))return(0,m.getCustomFieldsNamesForNewState)(n,e,p,r.entityType.name,o,f,c);if("customfield"===t.type){var i=a({},o,u({},n.name,d));return(0,m.getCustomFieldsNamesForChangedCustomFields)([n.name],e,p,r.entityType.name,i,f,c)}return[]}).then(function(e){return y(e,p,r.entityType)}).then(function(e){l=l.concat(e)})},(0,i.when)([])).then(function(){return l})},x=t.getCustomFieldsForAxes=function(e,t,n,r){var u=arguments.length<=4||void 0===arguments[4]?{}:arguments[4],a=arguments.length<=5||void 0===arguments[5]?{}:arguments[5],c=arguments.length<=6||void 0===arguments[6]?{}:arguments[6];return(0,i.whenList)(t.map(function(t){return j(e,t,n,r,u,a,c)})).then(function(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return(0,o.flatten)(t)}).then(function(e){var n=(0,o.unique)(e,function(e){return e.name}),r=t.reduce(function(e,t){return"customfield"===t.type?e.concat(t.customFieldName):e},[]);return n.filter(function(e){return!(0,s.inValues)(r,e.name)})})};x.resetCache=function(){g.cache=[],v.cache=[],T.cache=[],w.cache=[]}},function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},a=n(5),i=n(6),o=n(8),s=o.getStore().getTypes().getDictionary(),c=o.getApplicationPath(),f=function v(e){var t="";return e&&(Array.isArray(e)?t=e.map(v).join(","):"object"===("undefined"==typeof e?"undefined":u(e))?t=Object.keys(e).map(function(t){return t+"["+v(e[t])+"]"}).join(","):"function"!=typeof e&&(t=String(e))),t},l=function(e){return s[e.toLowerCase()].resource},d=function(e,t,n){return a.ajax({type:e,url:c+"/api/v1/"+t,contentType:"application/json; charset=utf-8",dataType:"json",data:JSON.stringify(n)})},m=function(e,t,n){return a.ajax({type:e,url:c+"/api/v1/"+t,contentType:"application/json; charset=utf-8",dataType:"json",data:n})},p=function(e,t){var n=function r(e,t){return m("get",e,t).then(function(e){var t=e.Items;return e.Next?r(e.Next).then(t.concat.bind(t)):t})};return n(e,t)},g=function h(e){return i.isArray(e)?e.map(function(e){return h(e)}):i.isObject(e)?i.object(i.map(e,function(e,t){var n=t[0].toLowerCase()+t.slice(1);return"Items"===n&&i.isArray(e)?h(e):[n,h(e)]})):e},y=function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments.length<=1||void 0===arguments[1]?{take:1e3}:arguments[1],n=r({},t,e);return e.include&&"string"!=typeof e.include&&(n.include="["+f(e.include)+"]"),n};e.exports={get:function(){var e=Array.prototype.slice.call(arguments);return 3===e.length?m("GET",l(e[0])+"/"+e[1],y(e[2])).then(g):p(e[0],y(e[1],{take:1e3})).then(g)},remove:function(e,t){return m("DELETE",l(e)+"/"+t)},create:function(e,t){return d("POST",l(e),t)},save:function(e,t,n){return d("POST",l(e)+"/"+t,n)}}},function(e,t,n){"use strict";var r=n(5),u=n(6),a=n(8),i=a.getStore().getTypes().getDictionary(),o=a.getApplicationPath(),s=function(e){return i[e.toLowerCase()].resource},c=function(e,t,n){return r.ajax({type:e,url:o+"/api/v2/"+t,contentType:"application/json; charset=utf-8",dataType:"json",data:n})},f=function(e,t){var n=function(e,t){return c("get",e,t).then(function(e){var t=e.items;return t})};return n(e,t)},l=function m(e){return u.isArray(e)?e.map(function(e){return m(e)}):u.isObject(e)?u.object(u.map(e,function(e,t){var n=t[0].toLowerCase()+t.slice(1);return"Items"===n&&u.isArray(e)?m(e):[n,m(e)]})):e},d=function(e){return e};e.exports={get:function(){var e=Array.prototype.slice.call(arguments);return 3===e.length?c("GET",s(e[0])+"/"+e[1],d(e[2])).then(l):f(e[0],d(e[1])).then(l)}}},function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};Object.defineProperty(t,"__esModule",{value:!0}),t.getCustomFieldsNamesForChangedCustomFields=t.getCustomFieldsNamesForNewState=void 0;var u=n(6),a=function(e,t){return String(e).toLowerCase()===String(t).toLowerCase()},i=function(e,t){return(0,u.find)(e,function(e,n){return a(n,t)})},o=function(e){var t=arguments.length<=1||void 0===arguments[1]?"":arguments[1];return(0,u.isArray)(t)?t.some(function(t){return e.some(function(e){return a(t,e)})}):e.some(function(e){return a(e,t)})},s=function(e,t){return{_initial:t.isInitial,_final:t.isFinal,_planned:t.isPlanned}[e]||!1},c=function(e,t,n,u){var o=u;"string"==typeof u&&(o={name:u});var c=o,f=c.name,l=e.filter(function(e){return!e.processId||e.processId===t});return l.reduce(function(e,t){var u=i(t.constraints,n);if(!u)return e;var c=i(u,"entityStates");if(!c)return e;var l=c.filter(function(e){return a(e.name,f)||s(e.name,o)});return l.reduce(function(e,t){return r({},e,{requiredCustomFields:e.requiredCustomFields.concat(t.requiredCustomFields||[])})},e)},{name:f,requiredCustomFields:[]})},f=function(e,t,n){var r=e.filter(function(e){return!e.processId||e.processId===t});return r.reduce(function(e,t){var r=i(t.constraints,n);if(!r)return e;var u=i(r,"customFields");return u?e.concat(u):e},[])},l=function(e){return e.map(function(e){return r({},e,{requiredCustomFields:(e.requiredCustomFields||[]).map(function(e){return{name:e}})})})},d=function(e,t){return t[e.name]},m=function(e,t){return e.valueIn&&!o(e.valueIn,t)?!1:e.valueNotIn&&o(e.valueNotIn,t)?!1:!0},p=function(e,t,n){return e.requiredCustomFields?n?e.requiredCustomFields:m(e,t)?e.requiredCustomFields:[]:[]},g=function(e,t,n,r){return e.reduce(function(e,n){return e.concat(p(n,t,r))},[])},y=function(e,t,n,r,i){var o=t.filter(function(t){return a(t.name,e.name)}),s=d(e,n),c=(0,u.pluck)(o,"name"),f=t.filter(function(e){return c.indexOf(e.name)<0}),l=g(o,s,f,i);return l.length?v(l,f,n,r,!0,i):[]},v=function(e,t,n,r){var u=arguments.length<=4||void 0===arguments[4]?!0:arguments[4],a=arguments.length<=5||void 0===arguments[5]?!1:arguments[5];return e.reduce(function(e,i){if(u&&r.hasOwnProperty(i.name))return e;var o=e;return u&&(o=o.concat(i)),o=o.concat(y(i,t,n,r,a))},[])};t.getCustomFieldsNamesForNewState=function(e,t,n,r){var a=arguments.length<=4||void 0===arguments[4]?{}:arguments[4],i=arguments.length<=5||void 0===arguments[5]?{}:arguments[5],o=arguments.length<=6||void 0===arguments[6]?{skipValuesCheck:!1}:arguments[6],s=o.skipValuesCheck,d=c(t,n,r,e),m=l(f(t,n,r)),p=d.requiredCustomFields.map(function(e){return{name:e}}),g=v(p,m,a,i,!0,s);return(0,u.uniq)((0,u.pluck)(g,"name"))},t.getCustomFieldsNamesForChangedCustomFields=function(e,t,n,r){var a=arguments.length<=4||void 0===arguments[4]?{}:arguments[4],i=arguments.length<=5||void 0===arguments[5]?{}:arguments[5],s=arguments.length<=6||void 0===arguments[6]?{skipValuesCheck:!1}:arguments[6],c=s.skipValuesCheck,p=l(f(t,n,r)),g=p.filter(function(t){return o(e,t.name)&&m(t,d(t,a))}),y=v(g,p,a,i,!1,c);return(0,u.uniq)((0,u.pluck)(y,"name"))}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(6),a=n(5),i=n(16),o=r(i),s=n(9),c=r(s),f=n(10),l=n(17),d=n(18),m=function(e,t){var n={entity:{id:parseInt((0,c["default"])(e.id),10),entityType:{name:e.type}},axes:t.reduce(function(e,t){return t.name.match(f.SLICE_CUSTOMFIELD_PREFIX)?e.concat({type:"customfield",customFieldName:t.name.replace(f.SLICE_CUSTOMFIELD_PREFIX,""),targetValue:(0,c["default"])(t.value)}):(0,f.isStateRelated)(t.name)?e.concat({type:(0,f.lc)(t.name),targetValue:(0,c["default"])(t.value)}):e},[])};return(0,a.when)((0,d.createRequirementsByTasks)(n)).then(function(e){return[n].concat(e)})},p=function(e){return(0,a.whenList)(e.map(function(e){return m(e,e.changes)})).then(function(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return(0,u.flatten)(t)})};t["default"]=(0,l.createInterrupter)({systemInterrupter:new o["default"],getEntitiesFromChanges:p})},function(e,t){e.exports=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createFullChanges=t.createInterrupter=void 0;var r=n(5),u=n(10),a=function(e,t,n,u){var a=e.reduce(function(e,n){return e.then(function(){var e=new r.Deferred;return t(n,e),e.promise()})},(0,r.when)(!0));(0,r.when)(a).then(n,u)};t.createInterrupter=function(e){var t=e.systemInterrupter,n=e.getEntitiesFromChanges;return function(e,i){var o=(0,u.getEntityTypesNamesFromConfig)(e);o.forEach(function(e){t.interruptSave(e,function(e,t){var u=e.resolve,o=e.reject,s=t.filter(function(e){return e.id});return s.length?void(0,r.when)(n(s)).then(function(e){return e.filter(function(e){return e&&e.axes.length})}).then(function(e){return a(e,i,u,o)}).fail(function(){return u()}):void u()})})}},t.createFullChanges=function(e){return e.map(function(e){return{entity:{},to:e,processId:null}})}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.createRequirementsByTasks=void 0;var u=n(6),a=n(5),i=n(12),o=r(i),s=n(10),c=function(e){return o["default"].get("EntityStates",e,{include:["isFinal"]})},f=function(e){return(0,s.equalIgnoreCase)(e,"_final")?!0:e.id?(0,a.when)(c(e.id)).then(function(e){return e.isFinal}):void 0},l=function(e){return e.filter(function(e){return!e.entityState.isFinal}).map(function(e){return{entity:e,axes:[{type:"entitystate",targetValue:"_final"}]}})},d=function(e){return o["default"].get("Tasks",{include:["EntityType",{EntityState:["isFinal"]}],where:"UserStory.id eq "+e.id})};t.createRequirementsByTasks=function(e){var t=e.entity,n=e.axes;if((0,s.equalIgnoreCase)(t.entityType.name,"userstory")){var r=(0,u.find)(n,function(e){return"entitystate"===e.type});if(r)return(0,a.when)(f(r.targetValue)).then(function(e){return e?(0,a.when)(d(t)).then(function(e){return l(e)}):[]})}return[]}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(6),a=n(5),i=n(20),o=r(i),s=n(10),c=n(17),f=n(18),l=function(e,t){var n={entity:{id:e.id,entityType:{name:e.type}},axes:t.reduce(function(e,t){return(0,s.equalIgnoreCase)(t.name,"customfields")?e.concat(t.value.map(function(e){return{type:"customfield",customFieldName:e.name,targetValue:e.value}})):(0,s.isStateRelated)(t.name)?e.concat({type:(0,s.lc)(t.name),targetValue:t.value}):e},[])};return(0,a.when)((0,f.createRequirementsByTasks)(n)).then(function(e){return[n].concat(e)})},d=function(e){return(0,a.whenList)(e.map(function(e){return l(e,e.changes)})).then(function(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return(0,u.flatten)(t)})};t["default"]=(0,c.createInterrupter)({systemInterrupter:new o["default"],getEntitiesFromChanges:d})},function(e,t){e.exports=a},function(e,t){e.exports=i},,,,,,,,,,,,,,,function(e,t){e.exports=o},,,,,,,,,function(e,t){e.exports=s},,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){e.exports=c},function(e,t){e.exports=f},function(e,t){e.exports=l},function(e,t){e.exports=d},function(e,t){e.exports=m},function(e,t){e.exports=p},function(e,t){e.exports=g},function(e,t){e.exports=y},function(e,t){e.exports=v},function(e,t){e.exports=h},function(e,t){e.exports=C},function(e,t){e.exports=b},function(e,t){e.exports=F},function(e,t){e.exports=T}])})}();