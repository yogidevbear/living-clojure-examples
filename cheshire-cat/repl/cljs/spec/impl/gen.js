// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__7788__auto__,writer__7789__auto__,opt__7790__auto__){
return cljs.core._write.call(null,writer__7789__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12605 = arguments.length;
var i__8291__auto___12606 = (0);
while(true){
if((i__8291__auto___12606 < len__8290__auto___12605)){
args__8297__auto__.push((arguments[i__8291__auto___12606]));

var G__12607 = (i__8291__auto___12606 + (1));
i__8291__auto___12606 = G__12607;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq12604){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12604));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12609 = arguments.length;
var i__8291__auto___12610 = (0);
while(true){
if((i__8291__auto___12610 < len__8290__auto___12609)){
args__8297__auto__.push((arguments[i__8291__auto___12610]));

var G__12611 = (i__8291__auto___12610 + (1));
i__8291__auto___12610 = G__12611;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq12608){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12608));
});

var g_QMARK__12612 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_12613 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__12612){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__12612))
,null));
var mkg_12614 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__12612,g_12613){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__12612,g_12613))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__12612,g_12613,mkg_12614){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__12612).call(null,x);
});})(g_QMARK__12612,g_12613,mkg_12614))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__12612,g_12613,mkg_12614){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_12614).call(null,gfn);
});})(g_QMARK__12612,g_12613,mkg_12614))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__12612,g_12613,mkg_12614){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_12613).call(null,generator);
});})(g_QMARK__12612,g_12613,mkg_12614))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__12576__auto___12633 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__12576__auto___12633){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12634 = arguments.length;
var i__8291__auto___12635 = (0);
while(true){
if((i__8291__auto___12635 < len__8290__auto___12634)){
args__8297__auto__.push((arguments[i__8291__auto___12635]));

var G__12636 = (i__8291__auto___12635 + (1));
i__8291__auto___12635 = G__12636;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12576__auto___12633))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12576__auto___12633){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12576__auto___12633),args);
});})(g__12576__auto___12633))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__12576__auto___12633){
return (function (seq12615){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12615));
});})(g__12576__auto___12633))
;


var g__12576__auto___12637 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__12576__auto___12637){
return (function cljs$spec$impl$gen$list(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12638 = arguments.length;
var i__8291__auto___12639 = (0);
while(true){
if((i__8291__auto___12639 < len__8290__auto___12638)){
args__8297__auto__.push((arguments[i__8291__auto___12639]));

var G__12640 = (i__8291__auto___12639 + (1));
i__8291__auto___12639 = G__12640;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12576__auto___12637))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12576__auto___12637){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12576__auto___12637),args);
});})(g__12576__auto___12637))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__12576__auto___12637){
return (function (seq12616){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12616));
});})(g__12576__auto___12637))
;


var g__12576__auto___12641 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__12576__auto___12641){
return (function cljs$spec$impl$gen$map(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12642 = arguments.length;
var i__8291__auto___12643 = (0);
while(true){
if((i__8291__auto___12643 < len__8290__auto___12642)){
args__8297__auto__.push((arguments[i__8291__auto___12643]));

var G__12644 = (i__8291__auto___12643 + (1));
i__8291__auto___12643 = G__12644;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12576__auto___12641))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12576__auto___12641){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12576__auto___12641),args);
});})(g__12576__auto___12641))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__12576__auto___12641){
return (function (seq12617){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12617));
});})(g__12576__auto___12641))
;


var g__12576__auto___12645 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__12576__auto___12645){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12646 = arguments.length;
var i__8291__auto___12647 = (0);
while(true){
if((i__8291__auto___12647 < len__8290__auto___12646)){
args__8297__auto__.push((arguments[i__8291__auto___12647]));

var G__12648 = (i__8291__auto___12647 + (1));
i__8291__auto___12647 = G__12648;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12576__auto___12645))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12576__auto___12645){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12576__auto___12645),args);
});})(g__12576__auto___12645))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__12576__auto___12645){
return (function (seq12618){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12618));
});})(g__12576__auto___12645))
;


var g__12576__auto___12649 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__12576__auto___12649){
return (function cljs$spec$impl$gen$set(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12650 = arguments.length;
var i__8291__auto___12651 = (0);
while(true){
if((i__8291__auto___12651 < len__8290__auto___12650)){
args__8297__auto__.push((arguments[i__8291__auto___12651]));

var G__12652 = (i__8291__auto___12651 + (1));
i__8291__auto___12651 = G__12652;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12576__auto___12649))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12576__auto___12649){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12576__auto___12649),args);
});})(g__12576__auto___12649))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__12576__auto___12649){
return (function (seq12619){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12619));
});})(g__12576__auto___12649))
;


var g__12576__auto___12653 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__12576__auto___12653){
return (function cljs$spec$impl$gen$vector(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12654 = arguments.length;
var i__8291__auto___12655 = (0);
while(true){
if((i__8291__auto___12655 < len__8290__auto___12654)){
args__8297__auto__.push((arguments[i__8291__auto___12655]));

var G__12656 = (i__8291__auto___12655 + (1));
i__8291__auto___12655 = G__12656;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12576__auto___12653))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12576__auto___12653){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12576__auto___12653),args);
});})(g__12576__auto___12653))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__12576__auto___12653){
return (function (seq12620){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12620));
});})(g__12576__auto___12653))
;


var g__12576__auto___12657 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__12576__auto___12657){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12658 = arguments.length;
var i__8291__auto___12659 = (0);
while(true){
if((i__8291__auto___12659 < len__8290__auto___12658)){
args__8297__auto__.push((arguments[i__8291__auto___12659]));

var G__12660 = (i__8291__auto___12659 + (1));
i__8291__auto___12659 = G__12660;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12576__auto___12657))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12576__auto___12657){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12576__auto___12657),args);
});})(g__12576__auto___12657))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__12576__auto___12657){
return (function (seq12621){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12621));
});})(g__12576__auto___12657))
;


var g__12576__auto___12661 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__12576__auto___12661){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12662 = arguments.length;
var i__8291__auto___12663 = (0);
while(true){
if((i__8291__auto___12663 < len__8290__auto___12662)){
args__8297__auto__.push((arguments[i__8291__auto___12663]));

var G__12664 = (i__8291__auto___12663 + (1));
i__8291__auto___12663 = G__12664;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12576__auto___12661))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12576__auto___12661){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12576__auto___12661),args);
});})(g__12576__auto___12661))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__12576__auto___12661){
return (function (seq12622){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12622));
});})(g__12576__auto___12661))
;


var g__12576__auto___12665 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__12576__auto___12665){
return (function cljs$spec$impl$gen$elements(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12666 = arguments.length;
var i__8291__auto___12667 = (0);
while(true){
if((i__8291__auto___12667 < len__8290__auto___12666)){
args__8297__auto__.push((arguments[i__8291__auto___12667]));

var G__12668 = (i__8291__auto___12667 + (1));
i__8291__auto___12667 = G__12668;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12576__auto___12665))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12576__auto___12665){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12576__auto___12665),args);
});})(g__12576__auto___12665))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__12576__auto___12665){
return (function (seq12623){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12623));
});})(g__12576__auto___12665))
;


var g__12576__auto___12669 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__12576__auto___12669){
return (function cljs$spec$impl$gen$bind(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12670 = arguments.length;
var i__8291__auto___12671 = (0);
while(true){
if((i__8291__auto___12671 < len__8290__auto___12670)){
args__8297__auto__.push((arguments[i__8291__auto___12671]));

var G__12672 = (i__8291__auto___12671 + (1));
i__8291__auto___12671 = G__12672;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12576__auto___12669))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12576__auto___12669){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12576__auto___12669),args);
});})(g__12576__auto___12669))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__12576__auto___12669){
return (function (seq12624){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12624));
});})(g__12576__auto___12669))
;


var g__12576__auto___12673 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__12576__auto___12673){
return (function cljs$spec$impl$gen$choose(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12674 = arguments.length;
var i__8291__auto___12675 = (0);
while(true){
if((i__8291__auto___12675 < len__8290__auto___12674)){
args__8297__auto__.push((arguments[i__8291__auto___12675]));

var G__12676 = (i__8291__auto___12675 + (1));
i__8291__auto___12675 = G__12676;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12576__auto___12673))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12576__auto___12673){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12576__auto___12673),args);
});})(g__12576__auto___12673))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__12576__auto___12673){
return (function (seq12625){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12625));
});})(g__12576__auto___12673))
;


var g__12576__auto___12677 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__12576__auto___12677){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12678 = arguments.length;
var i__8291__auto___12679 = (0);
while(true){
if((i__8291__auto___12679 < len__8290__auto___12678)){
args__8297__auto__.push((arguments[i__8291__auto___12679]));

var G__12680 = (i__8291__auto___12679 + (1));
i__8291__auto___12679 = G__12680;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12576__auto___12677))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12576__auto___12677){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12576__auto___12677),args);
});})(g__12576__auto___12677))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__12576__auto___12677){
return (function (seq12626){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12626));
});})(g__12576__auto___12677))
;


var g__12576__auto___12681 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__12576__auto___12681){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12682 = arguments.length;
var i__8291__auto___12683 = (0);
while(true){
if((i__8291__auto___12683 < len__8290__auto___12682)){
args__8297__auto__.push((arguments[i__8291__auto___12683]));

var G__12684 = (i__8291__auto___12683 + (1));
i__8291__auto___12683 = G__12684;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12576__auto___12681))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12576__auto___12681){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12576__auto___12681),args);
});})(g__12576__auto___12681))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__12576__auto___12681){
return (function (seq12627){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12627));
});})(g__12576__auto___12681))
;


var g__12576__auto___12685 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__12576__auto___12685){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12686 = arguments.length;
var i__8291__auto___12687 = (0);
while(true){
if((i__8291__auto___12687 < len__8290__auto___12686)){
args__8297__auto__.push((arguments[i__8291__auto___12687]));

var G__12688 = (i__8291__auto___12687 + (1));
i__8291__auto___12687 = G__12688;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12576__auto___12685))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12576__auto___12685){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12576__auto___12685),args);
});})(g__12576__auto___12685))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__12576__auto___12685){
return (function (seq12628){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12628));
});})(g__12576__auto___12685))
;


var g__12576__auto___12689 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__12576__auto___12689){
return (function cljs$spec$impl$gen$sample(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12690 = arguments.length;
var i__8291__auto___12691 = (0);
while(true){
if((i__8291__auto___12691 < len__8290__auto___12690)){
args__8297__auto__.push((arguments[i__8291__auto___12691]));

var G__12692 = (i__8291__auto___12691 + (1));
i__8291__auto___12691 = G__12692;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12576__auto___12689))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12576__auto___12689){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12576__auto___12689),args);
});})(g__12576__auto___12689))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__12576__auto___12689){
return (function (seq12629){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12629));
});})(g__12576__auto___12689))
;


var g__12576__auto___12693 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__12576__auto___12693){
return (function cljs$spec$impl$gen$return(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12694 = arguments.length;
var i__8291__auto___12695 = (0);
while(true){
if((i__8291__auto___12695 < len__8290__auto___12694)){
args__8297__auto__.push((arguments[i__8291__auto___12695]));

var G__12696 = (i__8291__auto___12695 + (1));
i__8291__auto___12695 = G__12696;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12576__auto___12693))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12576__auto___12693){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12576__auto___12693),args);
});})(g__12576__auto___12693))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__12576__auto___12693){
return (function (seq12630){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12630));
});})(g__12576__auto___12693))
;


var g__12576__auto___12697 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__12576__auto___12697){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12698 = arguments.length;
var i__8291__auto___12699 = (0);
while(true){
if((i__8291__auto___12699 < len__8290__auto___12698)){
args__8297__auto__.push((arguments[i__8291__auto___12699]));

var G__12700 = (i__8291__auto___12699 + (1));
i__8291__auto___12699 = G__12700;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12576__auto___12697))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12576__auto___12697){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12576__auto___12697),args);
});})(g__12576__auto___12697))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__12576__auto___12697){
return (function (seq12631){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12631));
});})(g__12576__auto___12697))
;


var g__12576__auto___12701 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__12576__auto___12701){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12702 = arguments.length;
var i__8291__auto___12703 = (0);
while(true){
if((i__8291__auto___12703 < len__8290__auto___12702)){
args__8297__auto__.push((arguments[i__8291__auto___12703]));

var G__12704 = (i__8291__auto___12703 + (1));
i__8291__auto___12703 = G__12704;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12576__auto___12701))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12576__auto___12701){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12576__auto___12701),args);
});})(g__12576__auto___12701))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__12576__auto___12701){
return (function (seq12632){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12632));
});})(g__12576__auto___12701))
;

var g__12589__auto___12726 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__12589__auto___12726){
return (function cljs$spec$impl$gen$any(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12727 = arguments.length;
var i__8291__auto___12728 = (0);
while(true){
if((i__8291__auto___12728 < len__8290__auto___12727)){
args__8297__auto__.push((arguments[i__8291__auto___12728]));

var G__12729 = (i__8291__auto___12728 + (1));
i__8291__auto___12728 = G__12729;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12589__auto___12726))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12589__auto___12726){
return (function (args){
return cljs.core.deref.call(null,g__12589__auto___12726);
});})(g__12589__auto___12726))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__12589__auto___12726){
return (function (seq12705){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12705));
});})(g__12589__auto___12726))
;


var g__12589__auto___12730 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__12589__auto___12730){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12731 = arguments.length;
var i__8291__auto___12732 = (0);
while(true){
if((i__8291__auto___12732 < len__8290__auto___12731)){
args__8297__auto__.push((arguments[i__8291__auto___12732]));

var G__12733 = (i__8291__auto___12732 + (1));
i__8291__auto___12732 = G__12733;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12589__auto___12730))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12589__auto___12730){
return (function (args){
return cljs.core.deref.call(null,g__12589__auto___12730);
});})(g__12589__auto___12730))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__12589__auto___12730){
return (function (seq12706){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12706));
});})(g__12589__auto___12730))
;


var g__12589__auto___12734 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__12589__auto___12734){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12735 = arguments.length;
var i__8291__auto___12736 = (0);
while(true){
if((i__8291__auto___12736 < len__8290__auto___12735)){
args__8297__auto__.push((arguments[i__8291__auto___12736]));

var G__12737 = (i__8291__auto___12736 + (1));
i__8291__auto___12736 = G__12737;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12589__auto___12734))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12589__auto___12734){
return (function (args){
return cljs.core.deref.call(null,g__12589__auto___12734);
});})(g__12589__auto___12734))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__12589__auto___12734){
return (function (seq12707){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12707));
});})(g__12589__auto___12734))
;


var g__12589__auto___12738 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__12589__auto___12738){
return (function cljs$spec$impl$gen$char(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12739 = arguments.length;
var i__8291__auto___12740 = (0);
while(true){
if((i__8291__auto___12740 < len__8290__auto___12739)){
args__8297__auto__.push((arguments[i__8291__auto___12740]));

var G__12741 = (i__8291__auto___12740 + (1));
i__8291__auto___12740 = G__12741;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12589__auto___12738))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12589__auto___12738){
return (function (args){
return cljs.core.deref.call(null,g__12589__auto___12738);
});})(g__12589__auto___12738))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__12589__auto___12738){
return (function (seq12708){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12708));
});})(g__12589__auto___12738))
;


var g__12589__auto___12742 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__12589__auto___12742){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12743 = arguments.length;
var i__8291__auto___12744 = (0);
while(true){
if((i__8291__auto___12744 < len__8290__auto___12743)){
args__8297__auto__.push((arguments[i__8291__auto___12744]));

var G__12745 = (i__8291__auto___12744 + (1));
i__8291__auto___12744 = G__12745;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12589__auto___12742))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12589__auto___12742){
return (function (args){
return cljs.core.deref.call(null,g__12589__auto___12742);
});})(g__12589__auto___12742))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__12589__auto___12742){
return (function (seq12709){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12709));
});})(g__12589__auto___12742))
;


var g__12589__auto___12746 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__12589__auto___12746){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12747 = arguments.length;
var i__8291__auto___12748 = (0);
while(true){
if((i__8291__auto___12748 < len__8290__auto___12747)){
args__8297__auto__.push((arguments[i__8291__auto___12748]));

var G__12749 = (i__8291__auto___12748 + (1));
i__8291__auto___12748 = G__12749;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12589__auto___12746))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12589__auto___12746){
return (function (args){
return cljs.core.deref.call(null,g__12589__auto___12746);
});})(g__12589__auto___12746))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__12589__auto___12746){
return (function (seq12710){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12710));
});})(g__12589__auto___12746))
;


var g__12589__auto___12750 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__12589__auto___12750){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12751 = arguments.length;
var i__8291__auto___12752 = (0);
while(true){
if((i__8291__auto___12752 < len__8290__auto___12751)){
args__8297__auto__.push((arguments[i__8291__auto___12752]));

var G__12753 = (i__8291__auto___12752 + (1));
i__8291__auto___12752 = G__12753;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12589__auto___12750))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12589__auto___12750){
return (function (args){
return cljs.core.deref.call(null,g__12589__auto___12750);
});})(g__12589__auto___12750))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__12589__auto___12750){
return (function (seq12711){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12711));
});})(g__12589__auto___12750))
;


var g__12589__auto___12754 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__12589__auto___12754){
return (function cljs$spec$impl$gen$double(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12755 = arguments.length;
var i__8291__auto___12756 = (0);
while(true){
if((i__8291__auto___12756 < len__8290__auto___12755)){
args__8297__auto__.push((arguments[i__8291__auto___12756]));

var G__12757 = (i__8291__auto___12756 + (1));
i__8291__auto___12756 = G__12757;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12589__auto___12754))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12589__auto___12754){
return (function (args){
return cljs.core.deref.call(null,g__12589__auto___12754);
});})(g__12589__auto___12754))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__12589__auto___12754){
return (function (seq12712){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12712));
});})(g__12589__auto___12754))
;


var g__12589__auto___12758 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__12589__auto___12758){
return (function cljs$spec$impl$gen$int(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12759 = arguments.length;
var i__8291__auto___12760 = (0);
while(true){
if((i__8291__auto___12760 < len__8290__auto___12759)){
args__8297__auto__.push((arguments[i__8291__auto___12760]));

var G__12761 = (i__8291__auto___12760 + (1));
i__8291__auto___12760 = G__12761;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12589__auto___12758))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12589__auto___12758){
return (function (args){
return cljs.core.deref.call(null,g__12589__auto___12758);
});})(g__12589__auto___12758))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__12589__auto___12758){
return (function (seq12713){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12713));
});})(g__12589__auto___12758))
;


var g__12589__auto___12762 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__12589__auto___12762){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12763 = arguments.length;
var i__8291__auto___12764 = (0);
while(true){
if((i__8291__auto___12764 < len__8290__auto___12763)){
args__8297__auto__.push((arguments[i__8291__auto___12764]));

var G__12765 = (i__8291__auto___12764 + (1));
i__8291__auto___12764 = G__12765;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12589__auto___12762))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12589__auto___12762){
return (function (args){
return cljs.core.deref.call(null,g__12589__auto___12762);
});})(g__12589__auto___12762))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__12589__auto___12762){
return (function (seq12714){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12714));
});})(g__12589__auto___12762))
;


var g__12589__auto___12766 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__12589__auto___12766){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12767 = arguments.length;
var i__8291__auto___12768 = (0);
while(true){
if((i__8291__auto___12768 < len__8290__auto___12767)){
args__8297__auto__.push((arguments[i__8291__auto___12768]));

var G__12769 = (i__8291__auto___12768 + (1));
i__8291__auto___12768 = G__12769;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12589__auto___12766))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12589__auto___12766){
return (function (args){
return cljs.core.deref.call(null,g__12589__auto___12766);
});})(g__12589__auto___12766))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__12589__auto___12766){
return (function (seq12715){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12715));
});})(g__12589__auto___12766))
;


var g__12589__auto___12770 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__12589__auto___12770){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12771 = arguments.length;
var i__8291__auto___12772 = (0);
while(true){
if((i__8291__auto___12772 < len__8290__auto___12771)){
args__8297__auto__.push((arguments[i__8291__auto___12772]));

var G__12773 = (i__8291__auto___12772 + (1));
i__8291__auto___12772 = G__12773;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12589__auto___12770))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12589__auto___12770){
return (function (args){
return cljs.core.deref.call(null,g__12589__auto___12770);
});})(g__12589__auto___12770))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__12589__auto___12770){
return (function (seq12716){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12716));
});})(g__12589__auto___12770))
;


var g__12589__auto___12774 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__12589__auto___12774){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12775 = arguments.length;
var i__8291__auto___12776 = (0);
while(true){
if((i__8291__auto___12776 < len__8290__auto___12775)){
args__8297__auto__.push((arguments[i__8291__auto___12776]));

var G__12777 = (i__8291__auto___12776 + (1));
i__8291__auto___12776 = G__12777;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12589__auto___12774))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12589__auto___12774){
return (function (args){
return cljs.core.deref.call(null,g__12589__auto___12774);
});})(g__12589__auto___12774))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__12589__auto___12774){
return (function (seq12717){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12717));
});})(g__12589__auto___12774))
;


var g__12589__auto___12778 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__12589__auto___12778){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12779 = arguments.length;
var i__8291__auto___12780 = (0);
while(true){
if((i__8291__auto___12780 < len__8290__auto___12779)){
args__8297__auto__.push((arguments[i__8291__auto___12780]));

var G__12781 = (i__8291__auto___12780 + (1));
i__8291__auto___12780 = G__12781;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12589__auto___12778))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12589__auto___12778){
return (function (args){
return cljs.core.deref.call(null,g__12589__auto___12778);
});})(g__12589__auto___12778))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__12589__auto___12778){
return (function (seq12718){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12718));
});})(g__12589__auto___12778))
;


var g__12589__auto___12782 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__12589__auto___12782){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12783 = arguments.length;
var i__8291__auto___12784 = (0);
while(true){
if((i__8291__auto___12784 < len__8290__auto___12783)){
args__8297__auto__.push((arguments[i__8291__auto___12784]));

var G__12785 = (i__8291__auto___12784 + (1));
i__8291__auto___12784 = G__12785;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12589__auto___12782))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12589__auto___12782){
return (function (args){
return cljs.core.deref.call(null,g__12589__auto___12782);
});})(g__12589__auto___12782))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__12589__auto___12782){
return (function (seq12719){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12719));
});})(g__12589__auto___12782))
;


var g__12589__auto___12786 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__12589__auto___12786){
return (function cljs$spec$impl$gen$string(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12787 = arguments.length;
var i__8291__auto___12788 = (0);
while(true){
if((i__8291__auto___12788 < len__8290__auto___12787)){
args__8297__auto__.push((arguments[i__8291__auto___12788]));

var G__12789 = (i__8291__auto___12788 + (1));
i__8291__auto___12788 = G__12789;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12589__auto___12786))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12589__auto___12786){
return (function (args){
return cljs.core.deref.call(null,g__12589__auto___12786);
});})(g__12589__auto___12786))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__12589__auto___12786){
return (function (seq12720){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12720));
});})(g__12589__auto___12786))
;


var g__12589__auto___12790 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__12589__auto___12790){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12791 = arguments.length;
var i__8291__auto___12792 = (0);
while(true){
if((i__8291__auto___12792 < len__8290__auto___12791)){
args__8297__auto__.push((arguments[i__8291__auto___12792]));

var G__12793 = (i__8291__auto___12792 + (1));
i__8291__auto___12792 = G__12793;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12589__auto___12790))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12589__auto___12790){
return (function (args){
return cljs.core.deref.call(null,g__12589__auto___12790);
});})(g__12589__auto___12790))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__12589__auto___12790){
return (function (seq12721){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12721));
});})(g__12589__auto___12790))
;


var g__12589__auto___12794 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__12589__auto___12794){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12795 = arguments.length;
var i__8291__auto___12796 = (0);
while(true){
if((i__8291__auto___12796 < len__8290__auto___12795)){
args__8297__auto__.push((arguments[i__8291__auto___12796]));

var G__12797 = (i__8291__auto___12796 + (1));
i__8291__auto___12796 = G__12797;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12589__auto___12794))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12589__auto___12794){
return (function (args){
return cljs.core.deref.call(null,g__12589__auto___12794);
});})(g__12589__auto___12794))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__12589__auto___12794){
return (function (seq12722){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12722));
});})(g__12589__auto___12794))
;


var g__12589__auto___12798 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__12589__auto___12798){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12799 = arguments.length;
var i__8291__auto___12800 = (0);
while(true){
if((i__8291__auto___12800 < len__8290__auto___12799)){
args__8297__auto__.push((arguments[i__8291__auto___12800]));

var G__12801 = (i__8291__auto___12800 + (1));
i__8291__auto___12800 = G__12801;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12589__auto___12798))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12589__auto___12798){
return (function (args){
return cljs.core.deref.call(null,g__12589__auto___12798);
});})(g__12589__auto___12798))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__12589__auto___12798){
return (function (seq12723){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12723));
});})(g__12589__auto___12798))
;


var g__12589__auto___12802 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__12589__auto___12802){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12803 = arguments.length;
var i__8291__auto___12804 = (0);
while(true){
if((i__8291__auto___12804 < len__8290__auto___12803)){
args__8297__auto__.push((arguments[i__8291__auto___12804]));

var G__12805 = (i__8291__auto___12804 + (1));
i__8291__auto___12804 = G__12805;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12589__auto___12802))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12589__auto___12802){
return (function (args){
return cljs.core.deref.call(null,g__12589__auto___12802);
});})(g__12589__auto___12802))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__12589__auto___12802){
return (function (seq12724){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12724));
});})(g__12589__auto___12802))
;


var g__12589__auto___12806 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__12589__auto___12806){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12807 = arguments.length;
var i__8291__auto___12808 = (0);
while(true){
if((i__8291__auto___12808 < len__8290__auto___12807)){
args__8297__auto__.push((arguments[i__8291__auto___12808]));

var G__12809 = (i__8291__auto___12808 + (1));
i__8291__auto___12808 = G__12809;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12589__auto___12806))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12589__auto___12806){
return (function (args){
return cljs.core.deref.call(null,g__12589__auto___12806);
});})(g__12589__auto___12806))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__12589__auto___12806){
return (function (seq12725){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12725));
});})(g__12589__auto___12806))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12812 = arguments.length;
var i__8291__auto___12813 = (0);
while(true){
if((i__8291__auto___12813 < len__8290__auto___12812)){
args__8297__auto__.push((arguments[i__8291__auto___12813]));

var G__12814 = (i__8291__auto___12813 + (1));
i__8291__auto___12813 = G__12814;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__12810_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__12810_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq12811){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12811));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__12815_SHARP_){
return (new Date(p1__12815_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});
