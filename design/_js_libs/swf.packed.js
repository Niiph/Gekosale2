(function(a,b){var c=function(a){var b,c=[];for(b in a){c.push(b+'="'+a[b]+'"')}return c.join("")},d=function(a){var b,c,d=[],e;for(b in a){if(typeof a[b]=="object"){e=[];for(c in a[b]){e.push([c,"=",encodeURIComponent(a[b][c])].join(""))}a[b]=e.join("&")}d.push(['<param name="',b,'" value="',a[b],'" />'].join(""))}return d.join("")},e=false;a[b]=function(){var f="0,0,0",g=navigator.plugins["Shockwave Flash"]||ActiveXObject;f=g.description||function(){try{return(new g("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")}catch(a){}}();f=f.match(/^[A-Za-z\s]*?(\d+)[\.|,](\d+)(?:\s+r|,)(\d+)/);return{available:f[1]>0,activeX:!g.name,version:{major:f[1]*1,minor:f[2]*1,release:f[3]*1},hasVersion:function(a){var b=this.version,c="major",d="minor",e="release";a=/string|number/.test(typeof a)?a.toString().split("."):a||[0,0,0];a=[a[c]||a[0]||b[c],a[d]||a[1]||b[d],a[e]||a[2]||b[e]];return a[0]<b[c]||a[0]==b[c]&&a[1]<b[d]||a[0]==b[c]&&a[1]==b[d]&&a[2]<=b[e]},expressInstall:"expressInstall.swf",create:function(f){if(!a[b].available||e||!typeof f=="object"||!f.swf){return false}if(f.hasVersion&&!a[b].hasVersion(f.hasVersion)){f={swf:f.expressInstall||a[b].expressInstall,attrs:{id:"SWFObjectExprInst",height:Math.max(f.height||137),width:Math.max(f.width||214)},params:{flashvars:{MMredirectURL:location.href,MMplayerType:a[b].activeX?"ActiveX":"PlugIn",MMdoctitle:document.title.slice(0,47)+" - Flash Player Installation"}}};e=true}else{f=a.extend(true,{attrs:{height:f.height||180,width:f.width||320},params:{wmode:f.wmode||"opaque",flashvars:f.flashvars}},f)}return"<object "+c(f.attrs)+(a[b].activeX?' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"><param name="movie" value="'+f.swf+'" />':' type="application/x-shockwave-flash" data="'+f.swf+'">')+d(f.params)+"</object>"}}}();a.fn[b]=function(c){if(typeof c=="object"){this.each(function(){var d=document.createElement(b);d.innerHTML=a[b].create(c);if(d.childNodes[0]){this.appendChild(d.childNodes[0])}})}else{if(typeof c=="function"){this.find("object").andSelf().filter("object").each(function(){var d=this,e="jsInteractionTimeoutMs";d[e]=d[e]||0;if(d[e]<660){if(d.clientWidth||d.clientHeight){c.call(this)}else{setTimeout(function(){a(d)[b](c)},d[e]+66)}}})}}return this}})(jQuery,"flash");(function(a){var b=["swfupload_loaded_handler","file_queued_handler","file_queue_error_handler","file_dialog_start_handler","file_dialog_complete_handler","upload_start_handler","upload_progress_handler","upload_error_handler","upload_success_handler","upload_complete_handler","queue_complete_handler"];var c=[];a.fn.swfupload=function(){var d=a.makeArray(arguments);return this.each(function(){var e;if(d.length==1&&typeof d[0]=="object"){e=a(this).data("__swfu");if(!e){var f=d[0];var g=a(this);var h=[];a.merge(h,b);a.merge(h,c);a.each(h,function(b,c){var d=c.replace(/_handler$/,"").replace(/_([a-z])/g,function(){return arguments[1].toUpperCase()});f[c]=function(){var b=a.Event(d);g.trigger(b,a.makeArray(arguments));return!b.isDefaultPrevented()}});a(this).data("__swfu",new SWFUpload(f))}}else if(d.length>0&&typeof d[0]=="string"){var i=d.shift();e=a(this).data("__swfu");if(e&&e[i]){e[i].apply(e,d)}}})};a.swfupload={additionalHandlers:function(){if(arguments.length===0){return c.slice()}else{a(arguments).each(function(b,d){a.merge(c,a.makeArray(d))})}},defaultHandlers:function(){return b.slice()},getInstance:function(b){return a(b).data("__swfu")}}})(jQuery);var swfobject=function(){function V(b){var c=/[\\\"<>\.;]/;var d=c.exec(b)!=null;return d&&typeof encodeURIComponent!=a?encodeURIComponent(b):b}function U(a,b){if(!x){return}var c=b?"visible":"hidden";if(t&&P(a)){P(a).style.visibility=c}else{T("#"+a,"visibility:"+c)}}function T(c,d,e,f){if(y.ie&&y.mac){return}var g=i.getElementsByTagName("head")[0];if(!g){return}var h=e&&typeof e=="string"?e:"screen";if(f){v=null;w=null}if(!v||w!=h){var j=Q("style");j.setAttribute("type","text/css");j.setAttribute("media",h);v=g.appendChild(j);if(y.ie&&y.win&&typeof i.styleSheets!=a&&i.styleSheets.length>0){v=i.styleSheets[i.styleSheets.length-1]}w=h}if(y.ie&&y.win){if(v&&typeof v.addRule==b){v.addRule(c,d)}}else{if(v&&typeof i.createTextNode!=a){v.appendChild(i.createTextNode(c+" {"+d+"}"))}}}function S(a){var b=y.pv,c=a.split(".");c[0]=parseInt(c[0],10);c[1]=parseInt(c[1],10)||0;c[2]=parseInt(c[2],10)||0;return b[0]>c[0]||b[0]==c[0]&&b[1]>c[1]||b[0]==c[0]&&b[1]==c[1]&&b[2]>=c[2]?true:false}function R(a,b,c){a.attachEvent(b,c);o[o.length]=[a,b,c]}function Q(a){return i.createElement(a)}function P(a){var b=null;try{b=i.getElementById(a)}catch(c){}return b}function O(a){var b=P(a);if(b){for(var c in b){if(typeof b[c]=="function"){b[c]=null}}b.parentNode.removeChild(b)}}function N(a){var b=P(a);if(b&&b.nodeName=="OBJECT"){if(y.ie&&y.win){b.style.display="none";(function(){if(b.readyState==4){O(a)}else{setTimeout(arguments.callee,10)}})()}else{b.parentNode.removeChild(b)}}}function M(a,b,c){var d=Q("param");d.setAttribute("name",b);d.setAttribute("value",c);a.appendChild(d)}function L(c,d,f){var g,h=P(f);if(y.wk&&y.wk<312){return g}if(h){if(typeof c.id==a){c.id=f}if(y.ie&&y.win){var i="";for(var j in c){if(c[j]!=Object.prototype[j]){if(j.toLowerCase()=="data"){d.movie=c[j]}else{if(j.toLowerCase()=="styleclass"){i+=' class="'+c[j]+'"'}else{if(j.toLowerCase()!="classid"){i+=" "+j+'="'+c[j]+'"'}}}}}var k="";for(var l in d){if(d[l]!=Object.prototype[l]){k+='<param name="'+l+'" value="'+d[l]+'" />'}}h.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+i+">"+k+"</object>";n[n.length]=c.id;g=P(c.id)}else{var m=Q(b);m.setAttribute("type",e);for(var o in c){if(c[o]!=Object.prototype[o]){if(o.toLowerCase()=="styleclass"){m.setAttribute("class",c[o])}else{if(o.toLowerCase()!="classid"){m.setAttribute(o,c[o])}}}}for(var p in d){if(d[p]!=Object.prototype[p]&&p.toLowerCase()!="movie"){M(m,p,d[p])}}h.parentNode.replaceChild(m,h);g=m}}return g}function K(a){var c=Q("div");if(y.win&&y.ie){c.innerHTML=a.innerHTML}else{var d=a.getElementsByTagName(b)[0];if(d){var e=d.childNodes;if(e){var f=e.length;for(var g=0;g<f;g++){if(!(e[g].nodeType==1&&e[g].nodeName=="PARAM")&&!(e[g].nodeType==8)){c.appendChild(e[g].cloneNode(true))}}}}}return c}function J(a){if(y.ie&&y.win&&a.readyState!=4){var b=Q("div");a.parentNode.insertBefore(b,a);b.parentNode.replaceChild(K(a),b);a.style.display="none";(function(){if(a.readyState==4){a.parentNode.removeChild(a)}else{setTimeout(arguments.callee,10)}})()}else{a.parentNode.replaceChild(K(a),a)}}function I(b,c,d,e){u=true;r=e||null;s={success:false,id:d};var g=P(d);if(g){if(g.nodeName=="OBJECT"){p=K(g);q=null}else{p=g;q=d}b.id=f;if(typeof b.width==a||!/%$/.test(b.width)&&parseInt(b.width,10)<310){b.width="310"}if(typeof b.height==a||!/%$/.test(b.height)&&parseInt(b.height,10)<137){b.height="137"}i.title=i.title.slice(0,47)+" - Flash Player Installation";var j=y.ie&&y.win?"ActiveX":"PlugIn",k="MMredirectURL="+h.location.toString().replace(/&/g,"%26")+"&MMplayerType="+j+"&MMdoctitle="+i.title;if(typeof c.flashvars!=a){c.flashvars+="&"+k}else{c.flashvars=k}if(y.ie&&y.win&&g.readyState!=4){var l=Q("div");d+="SWFObjectNew";l.setAttribute("id",d);g.parentNode.insertBefore(l,g);g.style.display="none";(function(){if(g.readyState==4){g.parentNode.removeChild(g)}else{setTimeout(arguments.callee,10)}})()}L(b,c,d)}}function H(){return!u&&S("6.0.65")&&(y.win||y.mac)&&!(y.wk&&y.wk<312)}function G(c){var d=null;var e=P(c);if(e&&e.nodeName=="OBJECT"){if(typeof e.SetVariable!=a){d=e}else{var f=e.getElementsByTagName(b)[0];if(f){d=f}}}return d}function F(){var b=m.length;if(b>0){for(var c=0;c<b;c++){var d=m[c].id;var e=m[c].callbackFn;var f={success:false,id:d};if(y.pv[0]>0){var g=P(d);if(g){if(S(m[c].swfVersion)&&!(y.wk&&y.wk<312)){U(d,true);if(e){f.success=true;f.ref=G(d);e(f)}}else{if(m[c].expressInstall&&H()){var h={};h.data=m[c].expressInstall;h.width=g.getAttribute("width")||"0";h.height=g.getAttribute("height")||"0";if(g.getAttribute("class")){h.styleclass=g.getAttribute("class")}if(g.getAttribute("align")){h.align=g.getAttribute("align")}var i={};var j=g.getElementsByTagName("param");var k=j.length;for(var l=0;l<k;l++){if(j[l].getAttribute("name").toLowerCase()!="movie"){i[j[l].getAttribute("name")]=j[l].getAttribute("value")}}I(h,i,d,e)}else{J(g);if(e){e(f)}}}}}else{U(d,true);if(e){var n=G(d);if(n&&typeof n.SetVariable!=a){f.success=true;f.ref=n}e(f)}}}}}function E(){var c=i.getElementsByTagName("body")[0];var d=Q(b);d.setAttribute("type",e);var f=c.appendChild(d);if(f){var g=0;(function(){if(typeof f.GetVariable!=a){var b=f.GetVariable("$version");if(b){b=b.split(" ")[1].split(",");y.pv=[parseInt(b[0],10),parseInt(b[1],10),parseInt(b[2],10)]}}else{if(g<10){g++;setTimeout(arguments.callee,10);return}}c.removeChild(d);f=null;F()})()}else{F()}}function D(){if(k){E()}else{F()}}function C(b){if(typeof h.addEventListener!=a){h.addEventListener("load",b,false)}else{if(typeof i.addEventListener!=a){i.addEventListener("load",b,false)}else{if(typeof h.attachEvent!=a){R(h,"onload",b)}else{if(typeof h.onload=="function"){var c=h.onload;h.onload=function(){c();b()}}else{h.onload=b}}}}}function B(a){if(t){a()}else{l[l.length]=a}}function A(){if(t){return}try{var a=i.getElementsByTagName("body")[0].appendChild(Q("span"));a.parentNode.removeChild(a)}catch(b){return}t=true;var c=l.length;for(var d=0;d<c;d++){l[d]()}}var a="undefined",b="object",c="Shockwave Flash",d="ShockwaveFlash.ShockwaveFlash",e="application/x-shockwave-flash",f="SWFObjectExprInst",g="onreadystatechange",h=window,i=document,j=navigator,k=false,l=[D],m=[],n=[],o=[],p,q,r,s,t=false,u=false,v,w,x=true,y=function(){var f=typeof i.getElementById!=a&&typeof i.getElementsByTagName!=a&&typeof i.createElement!=a,g=j.userAgent.toLowerCase(),l=j.platform.toLowerCase(),m=l?/win/.test(l):/win/.test(g),n=l?/mac/.test(l):/mac/.test(g),o=/webkit/.test(g)?parseFloat(g.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,p=!+"1",q=[0,0,0],r=null;if(typeof j.plugins!=a&&typeof j.plugins[c]==b){r=j.plugins[c].description;if(r&&!(typeof j.mimeTypes!=a&&j.mimeTypes[e]&&!j.mimeTypes[e].enabledPlugin)){k=true;p=false;r=r.replace(/^.*\s+(\S+\s+\S+$)/,"$1");q[0]=parseInt(r.replace(/^(.*)\..*$/,"$1"),10);q[1]=parseInt(r.replace(/^.*\.(.*)\s.*$/,"$1"),10);q[2]=/[a-zA-Z]/.test(r)?parseInt(r.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof h.ActiveXObject!=a){try{var s=new ActiveXObject(d);if(s){r=s.GetVariable("$version");if(r){p=true;r=r.split(" ")[1].split(",");q=[parseInt(r[0],10),parseInt(r[1],10),parseInt(r[2],10)]}}}catch(t){}}}return{w3:f,pv:q,wk:o,ie:p,win:m,mac:n}}(),z=function(){if(!y.w3){return}if(typeof i.readyState!=a&&i.readyState=="complete"||typeof i.readyState==a&&(i.getElementsByTagName("body")[0]||i.body)){A()}if(!t){if(typeof i.addEventListener!=a){i.addEventListener("DOMContentLoaded",A,false)}if(y.ie&&y.win){i.attachEvent(g,function(){if(i.readyState=="complete"){i.detachEvent(g,arguments.callee);A()}});if(h==top){(function(){if(t){return}try{i.documentElement.doScroll("left")}catch(a){setTimeout(arguments.callee,0);return}A()})()}}if(y.wk){(function(){if(t){return}if(!/loaded|complete/.test(i.readyState)){setTimeout(arguments.callee,0);return}A()})()}C(A)}}();var W=function(){if(y.ie&&y.win){window.attachEvent("onunload",function(){var a=o.length;for(var b=0;b<a;b++){o[b][0].detachEvent(o[b][1],o[b][2])}var c=n.length;for(var d=0;d<c;d++){N(n[d])}for(var e in y){y[e]=null}y=null;for(var f in swfobject){swfobject[f]=null}swfobject=null})}}();return{registerObject:function(a,b,c,d){if(y.w3&&a&&b){var e={};e.id=a;e.swfVersion=b;e.expressInstall=c;e.callbackFn=d;m[m.length]=e;U(a,false)}else{if(d){d({success:false,id:a})}}},getObjectById:function(a){if(y.w3){return G(a)}},embedSWF:function(c,d,e,f,g,h,i,j,k,l){var m={success:false,id:d};if(y.w3&&!(y.wk&&y.wk<312)&&c&&d&&e&&f&&g){U(d,false);B(function(){e+="";f+="";var n={};if(k&&typeof k===b){for(var o in k){n[o]=k[o]}}n.data=c;n.width=e;n.height=f;var p={};if(j&&typeof j===b){for(var q in j){p[q]=j[q]}}if(i&&typeof i===b){for(var r in i){if(typeof p.flashvars!=a){p.flashvars+="&"+r+"="+i[r]}else{p.flashvars=r+"="+i[r]}}}if(S(g)){var s=L(n,p,d);if(n.id==d){U(d,true)}m.success=true;m.ref=s}else{if(h&&H()){n.data=h;I(n,p,d,l);return}else{U(d,true)}}if(l){l(m)}})}else{if(l){l(m)}}},switchOffAutoHideShow:function(){x=false},ua:y,getFlashPlayerVersion:function(){return{major:y.pv[0],minor:y.pv[1],release:y.pv[2]}},hasFlashPlayerVersion:S,createSWF:function(a,b,c){if(y.w3){return L(a,b,c)}else{return undefined}},showExpressInstall:function(a,b,c,d){if(y.w3&&H()){I(a,b,c,d)}},removeSWF:function(a){if(y.w3){N(a)}},createCSS:function(a,b,c,d){if(y.w3){T(a,b,c,d)}},addDomLoadEvent:B,addLoadEvent:C,getQueryParamValue:function(a){var b=i.location.search||i.location.hash;if(b){if(/\?/.test(b)){b=b.split("?")[1]}if(a==null){return V(b)}var c=b.split("&");for(var d=0;d<c.length;d++){if(c[d].substring(0,c[d].indexOf("="))==a){return V(c[d].substring(c[d].indexOf("=")+1))}}}return""},expressInstallCallback:function(){if(u){var a=P(f);if(a&&p){a.parentNode.replaceChild(p,a);if(q){U(q,true);if(y.ie&&y.win){p.style.display="block"}}if(r){r(s)}}u=false}}}}();var SWFUpload;if(SWFUpload==undefined){SWFUpload=function(a){this.initSWFUpload(a)}}SWFUpload.prototype.initSWFUpload=function(a){try{this.customSettings={};this.settings=a;this.eventQueue=[];this.movieName="SWFUpload_"+SWFUpload.movieCount++;this.movieElement=null;SWFUpload.instances[this.movieName]=this;this.initSettings();this.loadFlash();this.displayDebugInfo()}catch(b){delete SWFUpload.instances[this.movieName];throw b}};SWFUpload.instances={};SWFUpload.movieCount=0;SWFUpload.version="2.2.0 2009-03-25";SWFUpload.QUEUE_ERROR={QUEUE_LIMIT_EXCEEDED:-100,FILE_EXCEEDS_SIZE_LIMIT:-110,ZERO_BYTE_FILE:-120,INVALID_FILETYPE:-130};SWFUpload.UPLOAD_ERROR={HTTP_ERROR:-200,MISSING_UPLOAD_URL:-210,IO_ERROR:-220,SECURITY_ERROR:-230,UPLOAD_LIMIT_EXCEEDED:-240,UPLOAD_FAILED:-250,SPECIFIED_FILE_ID_NOT_FOUND:-260,FILE_VALIDATION_FAILED:-270,FILE_CANCELLED:-280,UPLOAD_STOPPED:-290};SWFUpload.FILE_STATUS={QUEUED:-1,IN_PROGRESS:-2,ERROR:-3,COMPLETE:-4,CANCELLED:-5};SWFUpload.BUTTON_ACTION={SELECT_FILE:-100,SELECT_FILES:-110,START_UPLOAD:-120};SWFUpload.CURSOR={ARROW:-1,HAND:-2};SWFUpload.WINDOW_MODE={WINDOW:"window",TRANSPARENT:"transparent",OPAQUE:"opaque"};SWFUpload.completeURL=function(a){if(typeof a!=="string"||a.match(/^https?:\/\//i)||a.match(/^\//)){return a}var b=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"");var c=window.location.pathname.lastIndexOf("/");if(c<=0){path="/"}else{path=window.location.pathname.substr(0,c)+"/"}return path+a};SWFUpload.prototype.initSettings=function(){this.ensureDefault=function(a,b){this.settings[a]=this.settings[a]==undefined?b:this.settings[a]};this.ensureDefault("upload_url","");this.ensureDefault("preserve_relative_urls",false);this.ensureDefault("file_post_name","Filedata");this.ensureDefault("post_params",{});this.ensureDefault("use_query_string",false);this.ensureDefault("requeue_on_error",false);this.ensureDefault("http_success",[]);this.ensureDefault("assume_success_timeout",0);this.ensureDefault("file_types","*.*");this.ensureDefault("file_types_description","All Files");this.ensureDefault("file_size_limit",0);this.ensureDefault("file_upload_limit",0);this.ensureDefault("file_queue_limit",0);this.ensureDefault("flash_url","swfupload.swf");this.ensureDefault("prevent_swf_caching",true);this.ensureDefault("button_image_url","");this.ensureDefault("button_width",1);this.ensureDefault("button_height",1);this.ensureDefault("button_text","");this.ensureDefault("button_text_style","color: #000000; font-size: 16pt;");this.ensureDefault("button_text_top_padding",0);this.ensureDefault("button_text_left_padding",0);this.ensureDefault("button_action",SWFUpload.BUTTON_ACTION.SELECT_FILES);this.ensureDefault("button_disabled",false);this.ensureDefault("button_placeholder_id","");this.ensureDefault("button_placeholder",null);this.ensureDefault("button_cursor",SWFUpload.CURSOR.ARROW);this.ensureDefault("button_window_mode",SWFUpload.WINDOW_MODE.WINDOW);this.ensureDefault("debug",false);this.settings.debug_enabled=this.settings.debug;this.settings.return_upload_start_handler=this.returnUploadStart;this.ensureDefault("swfupload_loaded_handler",null);this.ensureDefault("file_dialog_start_handler",null);this.ensureDefault("file_queued_handler",null);this.ensureDefault("file_queue_error_handler",null);this.ensureDefault("file_dialog_complete_handler",null);this.ensureDefault("upload_start_handler",null);this.ensureDefault("upload_progress_handler",null);this.ensureDefault("upload_error_handler",null);this.ensureDefault("upload_success_handler",null);this.ensureDefault("upload_complete_handler",null);this.ensureDefault("debug_handler",this.debugMessage);this.ensureDefault("custom_settings",{});this.customSettings=this.settings.custom_settings;if(!!this.settings.prevent_swf_caching){this.settings.flash_url=this.settings.flash_url+(this.settings.flash_url.indexOf("?")<0?"?":"&")+"preventswfcaching="+(new Date).getTime()}if(!this.settings.preserve_relative_urls){this.settings.upload_url=SWFUpload.completeURL(this.settings.upload_url);this.settings.button_image_url=SWFUpload.completeURL(this.settings.button_image_url)}delete this.ensureDefault};SWFUpload.prototype.loadFlash=function(){var a,b;if(document.getElementById(this.movieName)!==null){throw"ID "+this.movieName+" is already in use. The Flash Object could not be added"}a=document.getElementById(this.settings.button_placeholder_id)||this.settings.button_placeholder;if(a==undefined){throw"Could not find the placeholder element: "+this.settings.button_placeholder_id}b=document.createElement("div");b.innerHTML=this.getFlashHTML();a.parentNode.replaceChild(b.firstChild,a);if(window[this.movieName]==undefined){window[this.movieName]=this.getMovieElement()}};SWFUpload.prototype.getFlashHTML=function(){return['<object id="',this.movieName,'" type="application/x-shockwave-flash" data="',this.settings.flash_url,'" width="',this.settings.button_width,'" height="',this.settings.button_height,'" class="swfupload">','<param name="wmode" value="',this.settings.button_window_mode,'" />','<param name="movie" value="',this.settings.flash_url,'" />','<param name="quality" value="high" />','<param name="menu" value="false" />','<param name="allowScriptAccess" value="always" />','<param name="flashvars" value="'+this.getFlashVars()+'" />',"</object>"].join("")};SWFUpload.prototype.getFlashVars=function(){var a=this.buildParamString();var b=this.settings.http_success.join(",");return["movieName=",encodeURIComponent(this.movieName),"&uploadURL=",encodeURIComponent(this.settings.upload_url),"&useQueryString=",encodeURIComponent(this.settings.use_query_string),"&requeueOnError=",encodeURIComponent(this.settings.requeue_on_error),"&httpSuccess=",encodeURIComponent(b),"&assumeSuccessTimeout=",encodeURIComponent(this.settings.assume_success_timeout),"&params=",encodeURIComponent(a),"&filePostName=",encodeURIComponent(this.settings.file_post_name),"&fileTypes=",encodeURIComponent(this.settings.file_types),"&fileTypesDescription=",encodeURIComponent(this.settings.file_types_description),"&fileSizeLimit=",encodeURIComponent(this.settings.file_size_limit),"&fileUploadLimit=",encodeURIComponent(this.settings.file_upload_limit),"&fileQueueLimit=",encodeURIComponent(this.settings.file_queue_limit),"&debugEnabled=",encodeURIComponent(this.settings.debug_enabled),"&buttonImageURL=",encodeURIComponent(this.settings.button_image_url),"&buttonWidth=",encodeURIComponent(this.settings.button_width),"&buttonHeight=",encodeURIComponent(this.settings.button_height),"&buttonText=",encodeURIComponent(this.settings.button_text),"&buttonTextTopPadding=",encodeURIComponent(this.settings.button_text_top_padding),"&buttonTextLeftPadding=",encodeURIComponent(this.settings.button_text_left_padding),"&buttonTextStyle=",encodeURIComponent(this.settings.button_text_style),"&buttonAction=",encodeURIComponent(this.settings.button_action),"&buttonDisabled=",encodeURIComponent(this.settings.button_disabled),"&buttonCursor=",encodeURIComponent(this.settings.button_cursor)].join("")};SWFUpload.prototype.getMovieElement=function(){if(this.movieElement==undefined){this.movieElement=document.getElementById(this.movieName)}if(this.movieElement===null){throw"Could not find Flash element"}return this.movieElement};SWFUpload.prototype.buildParamString=function(){var a=this.settings.post_params;var b=[];if(typeof a==="object"){for(var c in a){if(a.hasOwnProperty(c)){b.push(encodeURIComponent(c.toString())+"="+encodeURIComponent(a[c].toString()))}}}return b.join("&")};SWFUpload.prototype.destroy=function(){try{this.cancelUpload(null,false);var a=null;a=this.getMovieElement();if(a&&typeof a.CallFunction==="unknown"){for(var b in a){try{if(typeof a[b]==="function"){a[b]=null}}catch(c){}}try{a.parentNode.removeChild(a)}catch(d){}}window[this.movieName]=null;SWFUpload.instances[this.movieName]=null;delete SWFUpload.instances[this.movieName];this.movieElement=null;this.settings=null;this.customSettings=null;this.eventQueue=null;this.movieName=null;return true}catch(e){return false}};SWFUpload.prototype.displayDebugInfo=function(){this.debug(["---SWFUpload Instance Info---\n","Version: ",SWFUpload.version,"\n","Movie Name: ",this.movieName,"\n","Settings:\n","\t","upload_url:               ",this.settings.upload_url,"\n","\t","flash_url:                ",this.settings.flash_url,"\n","\t","use_query_string:         ",this.settings.use_query_string.toString(),"\n","\t","requeue_on_error:         ",this.settings.requeue_on_error.toString(),"\n","\t","http_success:             ",this.settings.http_success.join(", "),"\n","\t","assume_success_timeout:   ",this.settings.assume_success_timeout,"\n","\t","file_post_name:           ",this.settings.file_post_name,"\n","\t","post_params:              ",this.settings.post_params.toString(),"\n","\t","file_types:               ",this.settings.file_types,"\n","\t","file_types_description:   ",this.settings.file_types_description,"\n","\t","file_size_limit:          ",this.settings.file_size_limit,"\n","\t","file_upload_limit:        ",this.settings.file_upload_limit,"\n","\t","file_queue_limit:         ",this.settings.file_queue_limit,"\n","\t","debug:                    ",this.settings.debug.toString(),"\n","\t","prevent_swf_caching:      ",this.settings.prevent_swf_caching.toString(),"\n","\t","button_placeholder_id:    ",this.settings.button_placeholder_id.toString(),"\n","\t","button_placeholder:       ",this.settings.button_placeholder?"Set":"Not Set","\n","\t","button_image_url:         ",this.settings.button_image_url.toString(),"\n","\t","button_width:             ",this.settings.button_width.toString(),"\n","\t","button_height:            ",this.settings.button_height.toString(),"\n","\t","button_text:              ",this.settings.button_text.toString(),"\n","\t","button_text_style:        ",this.settings.button_text_style.toString(),"\n","\t","button_text_top_padding:  ",this.settings.button_text_top_padding.toString(),"\n","\t","button_text_left_padding: ",this.settings.button_text_left_padding.toString(),"\n","\t","button_action:            ",this.settings.button_action.toString(),"\n","\t","button_disabled:          ",this.settings.button_disabled.toString(),"\n","\t","custom_settings:          ",this.settings.custom_settings.toString(),"\n","Event Handlers:\n","\t","swfupload_loaded_handler assigned:  ",(typeof this.settings.swfupload_loaded_handler==="function").toString(),"\n","\t","file_dialog_start_handler assigned: ",(typeof this.settings.file_dialog_start_handler==="function").toString(),"\n","\t","file_queued_handler assigned:       ",(typeof this.settings.file_queued_handler==="function").toString(),"\n","\t","file_queue_error_handler assigned:  ",(typeof this.settings.file_queue_error_handler==="function").toString(),"\n","\t","upload_start_handler assigned:      ",(typeof this.settings.upload_start_handler==="function").toString(),"\n","\t","upload_progress_handler assigned:   ",(typeof this.settings.upload_progress_handler==="function").toString(),"\n","\t","upload_error_handler assigned:      ",(typeof this.settings.upload_error_handler==="function").toString(),"\n","\t","upload_success_handler assigned:    ",(typeof this.settings.upload_success_handler==="function").toString(),"\n","\t","upload_complete_handler assigned:   ",(typeof this.settings.upload_complete_handler==="function").toString(),"\n","\t","debug_handler assigned:             ",(typeof this.settings.debug_handler==="function").toString(),"\n"].join(""))};SWFUpload.prototype.addSetting=function(a,b,c){if(b==undefined){return this.settings[a]=c}else{return this.settings[a]=b}};SWFUpload.prototype.getSetting=function(a){if(this.settings[a]!=undefined){return this.settings[a]}return""};SWFUpload.prototype.callFlash=function(functionName,argumentArray){argumentArray=argumentArray||[];var movieElement=this.getMovieElement();var returnValue,returnString;try{returnString=movieElement.CallFunction('<invoke name="'+functionName+'" returntype="javascript">'+__flash__argumentsToXML(argumentArray,0)+"</invoke>");returnValue=eval(returnString)}catch(ex){throw"Call to "+functionName+" failed"}if(returnValue!=undefined&&typeof returnValue.post==="object"){returnValue=this.unescapeFilePostParams(returnValue)}return returnValue};SWFUpload.prototype.selectFile=function(){this.callFlash("SelectFile")};SWFUpload.prototype.selectFiles=function(){this.callFlash("SelectFiles")};SWFUpload.prototype.startUpload=function(a){this.callFlash("StartUpload",[a])};SWFUpload.prototype.cancelUpload=function(a,b){if(b!==false){b=true}this.callFlash("CancelUpload",[a,b])};SWFUpload.prototype.stopUpload=function(){this.callFlash("StopUpload")};SWFUpload.prototype.getStats=function(){return this.callFlash("GetStats")};SWFUpload.prototype.setStats=function(a){this.callFlash("SetStats",[a])};SWFUpload.prototype.getFile=function(a){if(typeof a==="number"){return this.callFlash("GetFileByIndex",[a])}else{return this.callFlash("GetFile",[a])}};SWFUpload.prototype.addFileParam=function(a,b,c){return this.callFlash("AddFileParam",[a,b,c])};SWFUpload.prototype.removeFileParam=function(a,b){this.callFlash("RemoveFileParam",[a,b])};SWFUpload.prototype.setUploadURL=function(a){this.settings.upload_url=a.toString();this.callFlash("SetUploadURL",[a])};SWFUpload.prototype.setPostParams=function(a){this.settings.post_params=a;this.callFlash("SetPostParams",[a])};SWFUpload.prototype.addPostParam=function(a,b){this.settings.post_params[a]=b;this.callFlash("SetPostParams",[this.settings.post_params])};SWFUpload.prototype.removePostParam=function(a){delete this.settings.post_params[a];this.callFlash("SetPostParams",[this.settings.post_params])};SWFUpload.prototype.setFileTypes=function(a,b){this.settings.file_types=a;this.settings.file_types_description=b;this.callFlash("SetFileTypes",[a,b])};SWFUpload.prototype.setFileSizeLimit=function(a){this.settings.file_size_limit=a;this.callFlash("SetFileSizeLimit",[a])};SWFUpload.prototype.setFileUploadLimit=function(a){this.settings.file_upload_limit=a;this.callFlash("SetFileUploadLimit",[a])};SWFUpload.prototype.setFileQueueLimit=function(a){this.settings.file_queue_limit=a;this.callFlash("SetFileQueueLimit",[a])};SWFUpload.prototype.setFilePostName=function(a){this.settings.file_post_name=a;this.callFlash("SetFilePostName",[a])};SWFUpload.prototype.setUseQueryString=function(a){this.settings.use_query_string=a;this.callFlash("SetUseQueryString",[a])};SWFUpload.prototype.setRequeueOnError=function(a){this.settings.requeue_on_error=a;this.callFlash("SetRequeueOnError",[a])};SWFUpload.prototype.setHTTPSuccess=function(a){if(typeof a==="string"){a=a.replace(" ","").split(",")}this.settings.http_success=a;this.callFlash("SetHTTPSuccess",[a])};SWFUpload.prototype.setAssumeSuccessTimeout=function(a){this.settings.assume_success_timeout=a;this.callFlash("SetAssumeSuccessTimeout",[a])};SWFUpload.prototype.setDebugEnabled=function(a){this.settings.debug_enabled=a;this.callFlash("SetDebugEnabled",[a])};SWFUpload.prototype.setButtonImageURL=function(a){if(a==undefined){a=""}this.settings.button_image_url=a;this.callFlash("SetButtonImageURL",[a])};SWFUpload.prototype.setButtonDimensions=function(a,b){this.settings.button_width=a;this.settings.button_height=b;var c=this.getMovieElement();if(c!=undefined){c.style.width=a+"px";c.style.height=b+"px"}this.callFlash("SetButtonDimensions",[a,b])};SWFUpload.prototype.setButtonText=function(a){this.settings.button_text=a;this.callFlash("SetButtonText",[a])};SWFUpload.prototype.setButtonTextPadding=function(a,b){this.settings.button_text_top_padding=b;this.settings.button_text_left_padding=a;this.callFlash("SetButtonTextPadding",[a,b])};SWFUpload.prototype.setButtonTextStyle=function(a){this.settings.button_text_style=a;this.callFlash("SetButtonTextStyle",[a])};SWFUpload.prototype.setButtonDisabled=function(a){this.settings.button_disabled=a;this.callFlash("SetButtonDisabled",[a])};SWFUpload.prototype.setButtonAction=function(a){this.settings.button_action=a;this.callFlash("SetButtonAction",[a])};SWFUpload.prototype.setButtonCursor=function(a){this.settings.button_cursor=a;this.callFlash("SetButtonCursor",[a])};SWFUpload.prototype.queueEvent=function(a,b){if(b==undefined){b=[]}else if(!(b instanceof Array)){b=[b]}var c=this;if(typeof this.settings[a]==="function"){this.eventQueue.push(function(){this.settings[a].apply(this,b)});setTimeout(function(){c.executeNextEvent()},0)}else if(this.settings[a]!==null){throw"Event handler "+a+" is unknown or is not a function"}};SWFUpload.prototype.executeNextEvent=function(){var a=this.eventQueue?this.eventQueue.shift():null;if(typeof a==="function"){a.apply(this)}};SWFUpload.prototype.unescapeFilePostParams=function(a){var b=/[$]([0-9a-f]{4})/i;var c={};var d;if(a!=undefined){for(var e in a.post){if(a.post.hasOwnProperty(e)){d=e;var f;while((f=b.exec(d))!==null){d=d.replace(f[0],String.fromCharCode(parseInt("0x"+f[1],16)))}c[d]=a.post[e]}}a.post=c}return a};SWFUpload.prototype.testExternalInterface=function(){try{return this.callFlash("TestExternalInterface")}catch(a){return false}};SWFUpload.prototype.flashReady=function(){var a=this.getMovieElement();if(!a){this.debug("Flash called back ready but the flash movie can't be found.");return}this.cleanUp(a);this.queueEvent("swfupload_loaded_handler")};SWFUpload.prototype.cleanUp=function(a){try{if(this.movieElement&&typeof a.CallFunction==="unknown"){this.debug("Removing Flash functions hooks (this should only run in IE and should prevent memory leaks)");for(var b in a){try{if(typeof a[b]==="function"){a[b]=null}}catch(c){}}}}catch(d){}window["__flash__removeCallback"]=function(a,b){try{if(a){a[b]=null}}catch(c){}}};SWFUpload.prototype.fileDialogStart=function(){this.queueEvent("file_dialog_start_handler")};SWFUpload.prototype.fileQueued=function(a){a=this.unescapeFilePostParams(a);this.queueEvent("file_queued_handler",a)};SWFUpload.prototype.fileQueueError=function(a,b,c){a=this.unescapeFilePostParams(a);this.queueEvent("file_queue_error_handler",[a,b,c])};SWFUpload.prototype.fileDialogComplete=function(a,b,c){this.queueEvent("file_dialog_complete_handler",[a,b,c])};SWFUpload.prototype.uploadStart=function(a){a=this.unescapeFilePostParams(a);this.queueEvent("return_upload_start_handler",a)};SWFUpload.prototype.returnUploadStart=function(a){var b;if(typeof this.settings.upload_start_handler==="function"){a=this.unescapeFilePostParams(a);b=this.settings.upload_start_handler.call(this,a)}else if(this.settings.upload_start_handler!=undefined){throw"upload_start_handler must be a function"}if(b===undefined){b=true}b=!!b;this.callFlash("ReturnUploadStart",[b])};SWFUpload.prototype.uploadProgress=function(a,b,c){a=this.unescapeFilePostParams(a);this.queueEvent("upload_progress_handler",[a,b,c])};SWFUpload.prototype.uploadError=function(a,b,c){a=this.unescapeFilePostParams(a);this.queueEvent("upload_error_handler",[a,b,c])};SWFUpload.prototype.uploadSuccess=function(a,b,c){a=this.unescapeFilePostParams(a);this.queueEvent("upload_success_handler",[a,b,c])};SWFUpload.prototype.uploadComplete=function(a){a=this.unescapeFilePostParams(a);this.queueEvent("upload_complete_handler",a)};SWFUpload.prototype.debug=function(a){this.queueEvent("debug_handler",a)};SWFUpload.prototype.debugMessage=function(a){if(this.settings.debug){var b,c=[];if(typeof a==="object"&&typeof a.name==="string"&&typeof a.message==="string"){for(var d in a){if(a.hasOwnProperty(d)){c.push(d+": "+a[d])}}b=c.join("\n")||"";c=b.split("\n");b="EXCEPTION: "+c.join("\nEXCEPTION: ");SWFUpload.Console.writeLine(b)}else{SWFUpload.Console.writeLine(a)}}};SWFUpload.Console={};SWFUpload.Console.writeLine=function(a){var b,c;try{b=document.getElementById("SWFUpload_Console");if(!b){c=document.createElement("form");document.getElementsByTagName("body")[0].appendChild(c);b=document.createElement("textarea");b.id="SWFUpload_Console";b.style.fontFamily="monospace";b.setAttribute("wrap","off");b.wrap="off";b.style.overflow="auto";b.style.width="700px";b.style.height="350px";b.style.margin="5px";c.appendChild(b)}b.value+=a+"\n";b.scrollTop=b.scrollHeight-b.clientHeight}catch(d){alert("Exception: "+d.name+" Message: "+d.message)}};var SWFUpload;if(typeof SWFUpload==="function"){SWFUpload.queue={};SWFUpload.prototype.initSettings=function(a){return function(){if(typeof a==="function"){a.call(this)}this.queueSettings={};this.queueSettings.queue_cancelled_flag=false;this.queueSettings.queue_upload_count=0;this.queueSettings.user_upload_complete_handler=this.settings.upload_complete_handler;this.queueSettings.user_upload_start_handler=this.settings.upload_start_handler;this.settings.upload_complete_handler=SWFUpload.queue.uploadCompleteHandler;this.settings.upload_start_handler=SWFUpload.queue.uploadStartHandler;this.settings.queue_complete_handler=this.settings.queue_complete_handler||null}}(SWFUpload.prototype.initSettings);SWFUpload.prototype.startUpload=function(a){this.queueSettings.queue_cancelled_flag=false;this.callFlash("StartUpload",[a])};SWFUpload.prototype.cancelQueue=function(){this.queueSettings.queue_cancelled_flag=true;this.stopUpload();var a=this.getStats();while(a.files_queued>0){this.cancelUpload();a=this.getStats()}};SWFUpload.queue.uploadStartHandler=function(a){var b;if(typeof this.queueSettings.user_upload_start_handler==="function"){b=this.queueSettings.user_upload_start_handler.call(this,a)}b=b===false?false:true;this.queueSettings.queue_cancelled_flag=!b;return b};SWFUpload.queue.uploadCompleteHandler=function(a){var b=this.queueSettings.user_upload_complete_handler;var c;if(a.filestatus===SWFUpload.FILE_STATUS.COMPLETE){this.queueSettings.queue_upload_count++}if(typeof b==="function"){c=b.call(this,a)===false?false:true}else if(a.filestatus===SWFUpload.FILE_STATUS.QUEUED){c=false}else{c=true}if(c){var d=this.getStats();if(d.files_queued>0&&this.queueSettings.queue_cancelled_flag===false){this.startUpload()}else if(this.queueSettings.queue_cancelled_flag===false){this.queueEvent("queue_complete_handler",[this.queueSettings.queue_upload_count]);this.queueSettings.queue_upload_count=0}else{this.queueSettings.queue_cancelled_flag=false;this.queueSettings.queue_upload_count=0}}}}