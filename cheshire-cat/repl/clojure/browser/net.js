// Compiled by ClojureScript 1.9.293 {}
goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.net.WebSocket');
goog.require('goog.net.EventType');
goog.require('goog.json');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.XhrIo');
goog.require('clojure.browser.event');
goog.require('goog.net.xpc.CrossPageChannel');
clojure.browser.net._STAR_timeout_STAR_ = (10000);
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__12851){
var vec__12852 = p__12851;
var k = cljs.core.nth.call(null,vec__12852,(0),null);
var v = cljs.core.nth.call(null,vec__12852,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k.toLowerCase()),v], null);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));

/**
 * @interface
 */
clojure.browser.net.IConnection = function(){};

clojure.browser.net.connect = (function clojure$browser$net$connect(var_args){
var args12855 = [];
var len__8290__auto___12861 = arguments.length;
var i__8291__auto___12862 = (0);
while(true){
if((i__8291__auto___12862 < len__8290__auto___12861)){
args12855.push((arguments[i__8291__auto___12862]));

var G__12863 = (i__8291__auto___12862 + (1));
i__8291__auto___12862 = G__12863;
continue;
} else {
}
break;
}

var G__12857 = args12855.length;
switch (G__12857) {
case 1:
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12855.length)].join('')));

}
});

clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.clojure$browser$net$IConnection$connect$arity$1 == null)))){
return this$.clojure$browser$net$IConnection$connect$arity$1(this$);
} else {
var x__7845__auto__ = (((this$ == null))?null:this$);
var m__7846__auto__ = (clojure.browser.net.connect[goog.typeOf(x__7845__auto__)]);
if(!((m__7846__auto__ == null))){
return m__7846__auto__.call(null,this$);
} else {
var m__7846__auto____$1 = (clojure.browser.net.connect["_"]);
if(!((m__7846__auto____$1 == null))){
return m__7846__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
}
});

clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2 = (function (this$,opt1){
if((!((this$ == null))) && (!((this$.clojure$browser$net$IConnection$connect$arity$2 == null)))){
return this$.clojure$browser$net$IConnection$connect$arity$2(this$,opt1);
} else {
var x__7845__auto__ = (((this$ == null))?null:this$);
var m__7846__auto__ = (clojure.browser.net.connect[goog.typeOf(x__7845__auto__)]);
if(!((m__7846__auto__ == null))){
return m__7846__auto__.call(null,this$,opt1);
} else {
var m__7846__auto____$1 = (clojure.browser.net.connect["_"]);
if(!((m__7846__auto____$1 == null))){
return m__7846__auto____$1.call(null,this$,opt1);
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
}
});

clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$3 = (function (this$,opt1,opt2){
if((!((this$ == null))) && (!((this$.clojure$browser$net$IConnection$connect$arity$3 == null)))){
return this$.clojure$browser$net$IConnection$connect$arity$3(this$,opt1,opt2);
} else {
var x__7845__auto__ = (((this$ == null))?null:this$);
var m__7846__auto__ = (clojure.browser.net.connect[goog.typeOf(x__7845__auto__)]);
if(!((m__7846__auto__ == null))){
return m__7846__auto__.call(null,this$,opt1,opt2);
} else {
var m__7846__auto____$1 = (clojure.browser.net.connect["_"]);
if(!((m__7846__auto____$1 == null))){
return m__7846__auto____$1.call(null,this$,opt1,opt2);
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
}
});

clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$4 = (function (this$,opt1,opt2,opt3){
if((!((this$ == null))) && (!((this$.clojure$browser$net$IConnection$connect$arity$4 == null)))){
return this$.clojure$browser$net$IConnection$connect$arity$4(this$,opt1,opt2,opt3);
} else {
var x__7845__auto__ = (((this$ == null))?null:this$);
var m__7846__auto__ = (clojure.browser.net.connect[goog.typeOf(x__7845__auto__)]);
if(!((m__7846__auto__ == null))){
return m__7846__auto__.call(null,this$,opt1,opt2,opt3);
} else {
var m__7846__auto____$1 = (clojure.browser.net.connect["_"]);
if(!((m__7846__auto____$1 == null))){
return m__7846__auto____$1.call(null,this$,opt1,opt2,opt3);
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
}
});

clojure.browser.net.connect.cljs$lang$maxFixedArity = 4;


clojure.browser.net.transmit = (function clojure$browser$net$transmit(var_args){
var args12858 = [];
var len__8290__auto___12865 = arguments.length;
var i__8291__auto___12866 = (0);
while(true){
if((i__8291__auto___12866 < len__8290__auto___12865)){
args12858.push((arguments[i__8291__auto___12866]));

var G__12867 = (i__8291__auto___12866 + (1));
i__8291__auto___12866 = G__12867;
continue;
} else {
}
break;
}

var G__12860 = args12858.length;
switch (G__12860) {
case 2:
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12858.length)].join('')));

}
});

clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2 = (function (this$,opt){
if((!((this$ == null))) && (!((this$.clojure$browser$net$IConnection$transmit$arity$2 == null)))){
return this$.clojure$browser$net$IConnection$transmit$arity$2(this$,opt);
} else {
var x__7845__auto__ = (((this$ == null))?null:this$);
var m__7846__auto__ = (clojure.browser.net.transmit[goog.typeOf(x__7845__auto__)]);
if(!((m__7846__auto__ == null))){
return m__7846__auto__.call(null,this$,opt);
} else {
var m__7846__auto____$1 = (clojure.browser.net.transmit["_"]);
if(!((m__7846__auto____$1 == null))){
return m__7846__auto____$1.call(null,this$,opt);
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
}
});

clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3 = (function (this$,opt,opt2){
if((!((this$ == null))) && (!((this$.clojure$browser$net$IConnection$transmit$arity$3 == null)))){
return this$.clojure$browser$net$IConnection$transmit$arity$3(this$,opt,opt2);
} else {
var x__7845__auto__ = (((this$ == null))?null:this$);
var m__7846__auto__ = (clojure.browser.net.transmit[goog.typeOf(x__7845__auto__)]);
if(!((m__7846__auto__ == null))){
return m__7846__auto__.call(null,this$,opt,opt2);
} else {
var m__7846__auto____$1 = (clojure.browser.net.transmit["_"]);
if(!((m__7846__auto____$1 == null))){
return m__7846__auto____$1.call(null,this$,opt,opt2);
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
}
});

clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$4 = (function (this$,opt,opt2,opt3){
if((!((this$ == null))) && (!((this$.clojure$browser$net$IConnection$transmit$arity$4 == null)))){
return this$.clojure$browser$net$IConnection$transmit$arity$4(this$,opt,opt2,opt3);
} else {
var x__7845__auto__ = (((this$ == null))?null:this$);
var m__7846__auto__ = (clojure.browser.net.transmit[goog.typeOf(x__7845__auto__)]);
if(!((m__7846__auto__ == null))){
return m__7846__auto__.call(null,this$,opt,opt2,opt3);
} else {
var m__7846__auto____$1 = (clojure.browser.net.transmit["_"]);
if(!((m__7846__auto____$1 == null))){
return m__7846__auto____$1.call(null,this$,opt,opt2,opt3);
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
}
});

clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$5 = (function (this$,opt,opt2,opt3,opt4){
if((!((this$ == null))) && (!((this$.clojure$browser$net$IConnection$transmit$arity$5 == null)))){
return this$.clojure$browser$net$IConnection$transmit$arity$5(this$,opt,opt2,opt3,opt4);
} else {
var x__7845__auto__ = (((this$ == null))?null:this$);
var m__7846__auto__ = (clojure.browser.net.transmit[goog.typeOf(x__7845__auto__)]);
if(!((m__7846__auto__ == null))){
return m__7846__auto__.call(null,this$,opt,opt2,opt3,opt4);
} else {
var m__7846__auto____$1 = (clojure.browser.net.transmit["_"]);
if(!((m__7846__auto____$1 == null))){
return m__7846__auto____$1.call(null,this$,opt,opt2,opt3,opt4);
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
}
});

clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6 = (function (this$,opt,opt2,opt3,opt4,opt5){
if((!((this$ == null))) && (!((this$.clojure$browser$net$IConnection$transmit$arity$6 == null)))){
return this$.clojure$browser$net$IConnection$transmit$arity$6(this$,opt,opt2,opt3,opt4,opt5);
} else {
var x__7845__auto__ = (((this$ == null))?null:this$);
var m__7846__auto__ = (clojure.browser.net.transmit[goog.typeOf(x__7845__auto__)]);
if(!((m__7846__auto__ == null))){
return m__7846__auto__.call(null,this$,opt,opt2,opt3,opt4,opt5);
} else {
var m__7846__auto____$1 = (clojure.browser.net.transmit["_"]);
if(!((m__7846__auto____$1 == null))){
return m__7846__auto____$1.call(null,this$,opt,opt2,opt3,opt4,opt5);
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
}
});

clojure.browser.net.transmit.cljs$lang$maxFixedArity = 6;


clojure.browser.net.close = (function clojure$browser$net$close(this$){
if((!((this$ == null))) && (!((this$.clojure$browser$net$IConnection$close$arity$1 == null)))){
return this$.clojure$browser$net$IConnection$close$arity$1(this$);
} else {
var x__7845__auto__ = (((this$ == null))?null:this$);
var m__7846__auto__ = (clojure.browser.net.close[goog.typeOf(x__7845__auto__)]);
if(!((m__7846__auto__ == null))){
return m__7846__auto__.call(null,this$);
} else {
var m__7846__auto____$1 = (clojure.browser.net.close["_"]);
if(!((m__7846__auto____$1 == null))){
return m__7846__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
}
});

goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$2 = (function (this$,uri){
var this$__$1 = this;
return clojure.browser.net.transmit.call(null,this$__$1,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});

goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$3 = (function (this$,uri,method){
var this$__$1 = this;
return clojure.browser.net.transmit.call(null,this$__$1,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});

goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$4 = (function (this$,uri,method,content){
var this$__$1 = this;
return clojure.browser.net.transmit.call(null,this$__$1,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});

goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$5 = (function (this$,uri,method,content,headers){
var this$__$1 = this;
return clojure.browser.net.transmit.call(null,this$__$1,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});

goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$6 = (function (this$,uri,method,content,headers,timeout){
var this$__$1 = this;
this$__$1.setTimeoutInterval(timeout);

return this$__$1.send(uri,method,content,headers);
});

goog.net.XhrIo.prototype.clojure$browser$event$IEventType$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.XhrIo.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (this$__$1){
return (function (p__12869){
var vec__12870 = p__12869;
var k = cljs.core.nth.call(null,vec__12870,(0),null);
var v = cljs.core.nth.call(null,vec__12870,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__12873){
var vec__12874 = p__12873;
var k = cljs.core.nth.call(null,vec__12874,(0),null);
var v = cljs.core.nth.call(null,vec__12874,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k.toLowerCase()),v], null);
}),cljs.core.js__GT_clj.call(null,goog.net.xpc.CfgFields)));
/**
 * Returns an XhrIo connection
 */
clojure.browser.net.xhr_connection = (function clojure$browser$net$xhr_connection(){
return (new goog.net.XhrIo());
});

/**
 * @interface
 */
clojure.browser.net.ICrossPageChannel = function(){};

clojure.browser.net.register_service = (function clojure$browser$net$register_service(var_args){
var args12877 = [];
var len__8290__auto___12880 = arguments.length;
var i__8291__auto___12881 = (0);
while(true){
if((i__8291__auto___12881 < len__8290__auto___12880)){
args12877.push((arguments[i__8291__auto___12881]));

var G__12882 = (i__8291__auto___12881 + (1));
i__8291__auto___12881 = G__12882;
continue;
} else {
}
break;
}

var G__12879 = args12877.length;
switch (G__12879) {
case 3:
return clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12877.length)].join('')));

}
});

clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3 = (function (this$,service_name,fn){
if((!((this$ == null))) && (!((this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3 == null)))){
return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3(this$,service_name,fn);
} else {
var x__7845__auto__ = (((this$ == null))?null:this$);
var m__7846__auto__ = (clojure.browser.net.register_service[goog.typeOf(x__7845__auto__)]);
if(!((m__7846__auto__ == null))){
return m__7846__auto__.call(null,this$,service_name,fn);
} else {
var m__7846__auto____$1 = (clojure.browser.net.register_service["_"]);
if(!((m__7846__auto____$1 == null))){
return m__7846__auto____$1.call(null,this$,service_name,fn);
} else {
throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
}
});

clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$4 = (function (this$,service_name,fn,encode_json_QMARK_){
if((!((this$ == null))) && (!((this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4 == null)))){
return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4(this$,service_name,fn,encode_json_QMARK_);
} else {
var x__7845__auto__ = (((this$ == null))?null:this$);
var m__7846__auto__ = (clojure.browser.net.register_service[goog.typeOf(x__7845__auto__)]);
if(!((m__7846__auto__ == null))){
return m__7846__auto__.call(null,this$,service_name,fn,encode_json_QMARK_);
} else {
var m__7846__auto____$1 = (clojure.browser.net.register_service["_"]);
if(!((m__7846__auto____$1 == null))){
return m__7846__auto____$1.call(null,this$,service_name,fn,encode_json_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
}
});

clojure.browser.net.register_service.cljs$lang$maxFixedArity = 4;


goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$3 = (function (this$,service_name,fn){
var this$__$1 = this;
return clojure.browser.net.register_service.call(null,this$__$1,service_name,fn,false);
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$4 = (function (this$,service_name,fn,encode_json_QMARK_){
var this$__$1 = this;
return this$__$1.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$1 = (function (this$){
var this$__$1 = this;
return clojure.browser.net.connect.call(null,this$__$1,null);
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$2 = (function (this$,on_connect_fn){
var this$__$1 = this;
return this$__$1.connect(on_connect_fn);
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$3 = (function (this$,on_connect_fn,config_iframe_fn){
var this$__$1 = this;
return clojure.browser.net.connect.call(null,this$__$1,on_connect_fn,config_iframe_fn,document.body);
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$4 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
var this$__$1 = this;
this$__$1.createPeerIframe(iframe_parent,config_iframe_fn);

return this$__$1.connect(on_connect_fn);
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit$arity$3 = (function (this$,service_name,payload){
var this$__$1 = this;
return this$__$1.send(cljs.core.name.call(null,service_name),payload);
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.close();
});
/**
 * When passed with a config hash-map, returns a parent
 *   CrossPageChannel object. Keys in the config hash map are downcased
 *   versions of the goog.net.xpc.CfgFields enum keys,
 *   e.g. goog.net.xpc.CfgFields.PEER_URI becomes :peer_uri in the config
 *   hash.
 * 
 *   When passed with no args, creates a child CrossPageChannel object,
 *   and the config is automatically taken from the URL param 'xpc', as
 *   per the CrossPageChannel API.
 */
clojure.browser.net.xpc_connection = (function clojure$browser$net$xpc_connection(var_args){
var args12884 = [];
var len__8290__auto___12894 = arguments.length;
var i__8291__auto___12895 = (0);
while(true){
if((i__8291__auto___12895 < len__8290__auto___12894)){
args12884.push((arguments[i__8291__auto___12895]));

var G__12896 = (i__8291__auto___12895 + (1));
i__8291__auto___12895 = G__12896;
continue;
} else {
}
break;
}

var G__12886 = args12884.length;
switch (G__12886) {
case 0:
return clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12884.length)].join('')));

}
});

clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$0 = (function (){
var temp__4657__auto__ = (new goog.Uri(window.location.href)).getParameterValue("xpc");
if(cljs.core.truth_(temp__4657__auto__)){
var config = temp__4657__auto__;
return (new goog.net.xpc.CrossPageChannel(goog.json.parse(config)));
} else {
return null;
}
});

clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$1 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__12887){
var vec__12888 = p__12887;
var k = cljs.core.nth.call(null,vec__12888,(0),null);
var v = cljs.core.nth.call(null,vec__12888,(1),null);
var temp__4655__auto__ = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k);
if(cljs.core.truth_(temp__4655__auto__)){
var field = temp__4655__auto__;
var G__12891 = sum;
(G__12891[field] = v);

return G__12891;
} else {
return sum;
}
}),{},config)));
});

clojure.browser.net.xpc_connection.cljs$lang$maxFixedArity = 1;


/**
 * @interface
 */
clojure.browser.net.IWebSocket = function(){};

clojure.browser.net.open_QMARK_ = (function clojure$browser$net$open_QMARK_(this$){
if((!((this$ == null))) && (!((this$.clojure$browser$net$IWebSocket$open_QMARK_$arity$1 == null)))){
return this$.clojure$browser$net$IWebSocket$open_QMARK_$arity$1(this$);
} else {
var x__7845__auto__ = (((this$ == null))?null:this$);
var m__7846__auto__ = (clojure.browser.net.open_QMARK_[goog.typeOf(x__7845__auto__)]);
if(!((m__7846__auto__ == null))){
return m__7846__auto__.call(null,this$);
} else {
var m__7846__auto____$1 = (clojure.browser.net.open_QMARK_["_"]);
if(!((m__7846__auto____$1 == null))){
return m__7846__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWebSocket.open?",this$);
}
}
}
});

goog.net.WebSocket.prototype.clojure$browser$net$IWebSocket$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.WebSocket.prototype.clojure$browser$net$IWebSocket$open_QMARK_$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.isOpen(cljs.core.List.EMPTY);
});

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$connect$arity$2 = (function (this$,url){
var this$__$1 = this;
return clojure.browser.net.connect.call(null,this$__$1,url,null);
});

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$connect$arity$3 = (function (this$,url,protocol){
var this$__$1 = this;
return this$__$1.open(url,protocol);
});

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$transmit$arity$2 = (function (this$,message){
var this$__$1 = this;
return this$__$1.send(message);
});

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$close$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.close(cljs.core.List.EMPTY);
});

goog.net.WebSocket.prototype.clojure$browser$event$IEventType$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.WebSocket.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (this$__$1){
return (function (p__12898){
var vec__12899 = p__12898;
var k = cljs.core.nth.call(null,vec__12899,(0),null);
var v = cljs.core.nth.call(null,vec__12899,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.WebSocket.EventType))));
});
clojure.browser.net.websocket_connection = (function clojure$browser$net$websocket_connection(var_args){
var args12902 = [];
var len__8290__auto___12905 = arguments.length;
var i__8291__auto___12906 = (0);
while(true){
if((i__8291__auto___12906 < len__8290__auto___12905)){
args12902.push((arguments[i__8291__auto___12906]));

var G__12907 = (i__8291__auto___12906 + (1));
i__8291__auto___12906 = G__12907;
continue;
} else {
}
break;
}

var G__12904 = args12902.length;
switch (G__12904) {
case 0:
return clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12902.length)].join('')));

}
});

clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure.browser.net.websocket_connection.call(null,null,null);
});

clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$1 = (function (auto_reconnect_QMARK_){
return clojure.browser.net.websocket_connection.call(null,auto_reconnect_QMARK_,null);
});

clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$2 = (function (auto_reconnect_QMARK_,next_reconnect_fn){
return (new goog.net.WebSocket(auto_reconnect_QMARK_,next_reconnect_fn));
});

clojure.browser.net.websocket_connection.cljs$lang$maxFixedArity = 2;

