import{S as ae,i as ie,s as oe,l as b,e as de,K as Tt,m as w,h as d,q as m,F as y,n as ee,Q as ge,b as V,G as jt,p as S,H as It,I as Rt,J as St,f as O,t as X,o as qt,T as pt,a as W,c as K,r as $,u as Ne,v as Ee,w as _t,U as Ht,x as pe,y as _e,z as ye,g as Pt,d as Dt,V as Ft,C as xe,W as Be,j as Lt}from"../chunks/index-c70d96c8.js";import{d as Vt}from"../chunks/transform-d6b5607a.js";function me(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function yt(e){let t,n,r;e.length!==2?(t=me,n=(l,f)=>me(e(l),f),r=(l,f)=>e(l)-f):(t=e===me||e===Vt?e:Bt,n=e,r=e);function a(l,f,c=0,s=l.length){if(c<s){if(t(f,f)!==0)return s;do{const u=c+s>>>1;n(l[u],f)<0?c=u+1:s=u}while(c<s)}return c}function i(l,f,c=0,s=l.length){if(c<s){if(t(f,f)!==0)return s;do{const u=c+s>>>1;n(l[u],f)<=0?c=u+1:s=u}while(c<s)}return c}function o(l,f,c=0,s=l.length){const u=a(l,f,c,s-1);return u>c&&r(l[u-1],f)>-r(l[u],f)?u-1:u}return{left:a,center:o,right:i}}function Bt(){return 0}function zt(e){return e===null?NaN:+e}const Ct=yt(me),$t=Ct.right;yt(zt).center;const Ot=$t;var je=Math.sqrt(50),Ie=Math.sqrt(10),Re=Math.sqrt(2);function Wt(e,t,n){var r,a=-1,i,o,l;if(t=+t,e=+e,n=+n,e===t&&n>0)return[e];if((r=t<e)&&(i=e,e=t,t=i),(l=xt(e,t,n))===0||!isFinite(l))return[];if(l>0){let f=Math.round(e/l),c=Math.round(t/l);for(f*l<e&&++f,c*l>t&&--c,o=new Array(i=c-f+1);++a<i;)o[a]=(f+a)*l}else{l=-l;let f=Math.round(e*l),c=Math.round(t*l);for(f/l<e&&++f,c/l>t&&--c,o=new Array(i=c-f+1);++a<i;)o[a]=(f+a)/l}return r&&o.reverse(),o}function xt(e,t,n){var r=(t-e)/Math.max(0,n),a=Math.floor(Math.log(r)/Math.LN10),i=r/Math.pow(10,a);return a>=0?(i>=je?10:i>=Ie?5:i>=Re?2:1)*Math.pow(10,a):-Math.pow(10,-a)/(i>=je?10:i>=Ie?5:i>=Re?2:1)}function Kt(e,t,n){var r=Math.abs(t-e)/Math.max(0,n),a=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),i=r/a;return i>=je?a*=10:i>=Ie?a*=5:i>=Re&&(a*=2),t<e?-a:a}function Gt(e,t){let n;if(t===void 0)for(const r of e)r!=null&&(n<r||n===void 0&&r>=r)&&(n=r);else{let r=-1;for(let a of e)(a=t(a,++r,e))!=null&&(n<a||n===void 0&&a>=a)&&(n=a)}return n}function ze(e,t,n){e=+e,t=+t,n=(a=arguments.length)<2?(t=e,e=0,1):a<3?1:+n;for(var r=-1,a=Math.max(0,Math.ceil((t-e)/n))|0,i=new Array(a);++r<a;)i[r]=e+r*n;return i}function De(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function bt(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function le(){}var te=.7,be=1/te,Q="\\s*([+-]?\\d+)\\s*",ne="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",L="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Ut=/^#([0-9a-f]{3,8})$/,Xt=new RegExp(`^rgb\\(${Q},${Q},${Q}\\)$`),Yt=new RegExp(`^rgb\\(${L},${L},${L}\\)$`),Jt=new RegExp(`^rgba\\(${Q},${Q},${Q},${ne}\\)$`),Qt=new RegExp(`^rgba\\(${L},${L},${L},${ne}\\)$`),Zt=new RegExp(`^hsl\\(${ne},${L},${L}\\)$`),en=new RegExp(`^hsla\\(${ne},${L},${L},${ne}\\)$`),Ce={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};De(le,re,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:$e,formatHex:$e,formatHex8:tn,formatHsl:nn,formatRgb:Oe,toString:Oe});function $e(){return this.rgb().formatHex()}function tn(){return this.rgb().formatHex8()}function nn(){return wt(this).formatHsl()}function Oe(){return this.rgb().formatRgb()}function re(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=Ut.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?We(t):n===3?new R(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?ce(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?ce(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Xt.exec(e))?new R(t[1],t[2],t[3],1):(t=Yt.exec(e))?new R(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Jt.exec(e))?ce(t[1],t[2],t[3],t[4]):(t=Qt.exec(e))?ce(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Zt.exec(e))?Ue(t[1],t[2]/100,t[3]/100,1):(t=en.exec(e))?Ue(t[1],t[2]/100,t[3]/100,t[4]):Ce.hasOwnProperty(e)?We(Ce[e]):e==="transparent"?new R(NaN,NaN,NaN,0):null}function We(e){return new R(e>>16&255,e>>8&255,e&255,1)}function ce(e,t,n,r){return r<=0&&(e=t=n=NaN),new R(e,t,n,r)}function rn(e){return e instanceof le||(e=re(e)),e?(e=e.rgb(),new R(e.r,e.g,e.b,e.opacity)):new R}function Se(e,t,n,r){return arguments.length===1?rn(e):new R(e,t,n,r==null?1:r)}function R(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}De(R,Se,bt(le,{brighter(e){return e=e==null?be:Math.pow(be,e),new R(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?te:Math.pow(te,e),new R(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new R(Y(this.r),Y(this.g),Y(this.b),we(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Ke,formatHex:Ke,formatHex8:an,formatRgb:Ge,toString:Ge}));function Ke(){return`#${U(this.r)}${U(this.g)}${U(this.b)}`}function an(){return`#${U(this.r)}${U(this.g)}${U(this.b)}${U((isNaN(this.opacity)?1:this.opacity)*255)}`}function Ge(){const e=we(this.opacity);return`${e===1?"rgb(":"rgba("}${Y(this.r)}, ${Y(this.g)}, ${Y(this.b)}${e===1?")":`, ${e})`}`}function we(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Y(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function U(e){return e=Y(e),(e<16?"0":"")+e.toString(16)}function Ue(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new D(e,t,n,r)}function wt(e){if(e instanceof D)return new D(e.h,e.s,e.l,e.opacity);if(e instanceof le||(e=re(e)),!e)return new D;if(e instanceof D)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,a=Math.min(t,n,r),i=Math.max(t,n,r),o=NaN,l=i-a,f=(i+a)/2;return l?(t===i?o=(n-r)/l+(n<r)*6:n===i?o=(r-t)/l+2:o=(t-n)/l+4,l/=f<.5?i+a:2-i-a,o*=60):l=f>0&&f<1?0:o,new D(o,l,f,e.opacity)}function on(e,t,n,r){return arguments.length===1?wt(e):new D(e,t,n,r==null?1:r)}function D(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}De(D,on,bt(le,{brighter(e){return e=e==null?be:Math.pow(be,e),new D(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?te:Math.pow(te,e),new D(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,a=2*n-r;return new R(Ae(e>=240?e-240:e+120,a,r),Ae(e,a,r),Ae(e<120?e+240:e-120,a,r),this.opacity)},clamp(){return new D(Xe(this.h),ue(this.s),ue(this.l),we(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=we(this.opacity);return`${e===1?"hsl(":"hsla("}${Xe(this.h)}, ${ue(this.s)*100}%, ${ue(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Xe(e){return e=(e||0)%360,e<0?e+360:e}function ue(e){return Math.max(0,Math.min(1,e||0))}function Ae(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const Fe=e=>()=>e;function ln(e,t){return function(n){return e+n*t}}function fn(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function sn(e){return(e=+e)==1?vt:function(t,n){return n-t?fn(t,n,e):Fe(isNaN(t)?n:t)}}function vt(e,t){var n=t-e;return n?ln(e,n):Fe(isNaN(e)?t:e)}const Ye=function e(t){var n=sn(t);function r(a,i){var o=n((a=Se(a)).r,(i=Se(i)).r),l=n(a.g,i.g),f=n(a.b,i.b),c=vt(a.opacity,i.opacity);return function(s){return a.r=o(s),a.g=l(s),a.b=f(s),a.opacity=c(s),a+""}}return r.gamma=e,r}(1);function cn(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,r=t.slice(),a;return function(i){for(a=0;a<n;++a)r[a]=e[a]*(1-i)+t[a]*i;return r}}function un(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function hn(e,t){var n=t?t.length:0,r=e?Math.min(n,e.length):0,a=new Array(r),i=new Array(n),o;for(o=0;o<r;++o)a[o]=Le(e[o],t[o]);for(;o<n;++o)i[o]=t[o];return function(l){for(o=0;o<r;++o)i[o]=a[o](l);return i}}function mn(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function ve(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function dn(e,t){var n={},r={},a;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(a in t)a in e?n[a]=Le(e[a],t[a]):r[a]=t[a];return function(i){for(a in n)r[a]=n[a](i);return r}}var qe=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Te=new RegExp(qe.source,"g");function gn(e){return function(){return e}}function pn(e){return function(t){return e(t)+""}}function _n(e,t){var n=qe.lastIndex=Te.lastIndex=0,r,a,i,o=-1,l=[],f=[];for(e=e+"",t=t+"";(r=qe.exec(e))&&(a=Te.exec(t));)(i=a.index)>n&&(i=t.slice(n,i),l[o]?l[o]+=i:l[++o]=i),(r=r[0])===(a=a[0])?l[o]?l[o]+=a:l[++o]=a:(l[++o]=null,f.push({i:o,x:ve(r,a)})),n=Te.lastIndex;return n<t.length&&(i=t.slice(n),l[o]?l[o]+=i:l[++o]=i),l.length<2?f[0]?pn(f[0].x):gn(t):(t=f.length,function(c){for(var s=0,u;s<t;++s)l[(u=f[s]).i]=u.x(c);return l.join("")})}function Le(e,t){var n=typeof t,r;return t==null||n==="boolean"?Fe(t):(n==="number"?ve:n==="string"?(r=re(t))?(t=r,Ye):_n:t instanceof re?Ye:t instanceof Date?mn:un(t)?cn:Array.isArray(t)?hn:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?dn:ve)(e,t)}function yn(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}function xn(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function Me(e,t){if((n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null;var n,r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function Z(e){return e=Me(Math.abs(e)),e?e[1]:NaN}function bn(e,t){return function(n,r){for(var a=n.length,i=[],o=0,l=e[0],f=0;a>0&&l>0&&(f+l+1>r&&(l=Math.max(1,r-f)),i.push(n.substring(a-=l,a+l)),!((f+=l+1)>r));)l=e[o=(o+1)%e.length];return i.reverse().join(t)}}function wn(e){return function(t){return t.replace(/[0-9]/g,function(n){return e[+n]})}}var vn=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function ke(e){if(!(t=vn.exec(e)))throw new Error("invalid format: "+e);var t;return new Ve({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}ke.prototype=Ve.prototype;function Ve(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}Ve.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Mn(e){e:for(var t=e.length,n=1,r=-1,a;n<t;++n)switch(e[n]){case".":r=a=n;break;case"0":r===0&&(r=n),a=n;break;default:if(!+e[n])break e;r>0&&(r=0);break}return r>0?e.slice(0,r)+e.slice(a+1):e}var Mt;function kn(e,t){var n=Me(e,t);if(!n)return e+"";var r=n[0],a=n[1],i=a-(Mt=Math.max(-8,Math.min(8,Math.floor(a/3)))*3)+1,o=r.length;return i===o?r:i>o?r+new Array(i-o+1).join("0"):i>0?r.slice(0,i)+"."+r.slice(i):"0."+new Array(1-i).join("0")+Me(e,Math.max(0,t+i-1))[0]}function Je(e,t){var n=Me(e,t);if(!n)return e+"";var r=n[0],a=n[1];return a<0?"0."+new Array(-a).join("0")+r:r.length>a+1?r.slice(0,a+1)+"."+r.slice(a+1):r+new Array(a-r.length+2).join("0")}const Qe={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:xn,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>Je(e*100,t),r:Je,s:kn,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function Ze(e){return e}var et=Array.prototype.map,tt=["y","z","a","f","p","n","\xB5","m","","k","M","G","T","P","E","Z","Y"];function Nn(e){var t=e.grouping===void 0||e.thousands===void 0?Ze:bn(et.call(e.grouping,Number),e.thousands+""),n=e.currency===void 0?"":e.currency[0]+"",r=e.currency===void 0?"":e.currency[1]+"",a=e.decimal===void 0?".":e.decimal+"",i=e.numerals===void 0?Ze:wn(et.call(e.numerals,String)),o=e.percent===void 0?"%":e.percent+"",l=e.minus===void 0?"\u2212":e.minus+"",f=e.nan===void 0?"NaN":e.nan+"";function c(u){u=ke(u);var h=u.fill,v=u.align,E=u.sign,T=u.symbol,j=u.zero,I=u.width,q=u.comma,_=u.precision,A=u.trim,M=u.type;M==="n"?(q=!0,M="g"):Qe[M]||(_===void 0&&(_=12),A=!0,M="g"),(j||h==="0"&&v==="=")&&(j=!0,h="0",v="=");var z=T==="$"?n:T==="#"&&/[boxX]/.test(M)?"0"+M.toLowerCase():"",F=T==="$"?r:/[%p]/.test(M)?o:"",H=Qe[M],C=/[defgprs%]/.test(M);_=_===void 0?6:/[gprs]/.test(M)?Math.max(1,Math.min(21,_)):Math.max(0,Math.min(20,_));function P(p){var k=z,x=F,g,N,G;if(M==="c")x=H(p)+x,p="";else{p=+p;var fe=p<0||1/p<0;if(p=isNaN(p)?f:H(Math.abs(p),_),A&&(p=Mn(p)),fe&&+p==0&&E!=="+"&&(fe=!1),k=(fe?E==="("?E:l:E==="-"||E==="("?"":E)+k,x=(M==="s"?tt[8+Mt/3]:"")+x+(fe&&E==="("?")":""),C){for(g=-1,N=p.length;++g<N;)if(G=p.charCodeAt(g),48>G||G>57){x=(G===46?a+p.slice(g+1):p.slice(g))+x,p=p.slice(0,g);break}}}q&&!j&&(p=t(p,1/0));var se=k.length+p.length+x.length,B=se<I?new Array(I-se+1).join(h):"";switch(q&&j&&(p=t(B+p,B.length?I-x.length:1/0),B=""),v){case"<":p=k+p+x+B;break;case"=":p=k+B+p+x;break;case"^":p=B.slice(0,se=B.length>>1)+k+p+x+B.slice(se);break;default:p=B+k+p+x;break}return i(p)}return P.toString=function(){return u+""},P}function s(u,h){var v=c((u=ke(u),u.type="f",u)),E=Math.max(-8,Math.min(8,Math.floor(Z(h)/3)))*3,T=Math.pow(10,-E),j=tt[8+E/3];return function(I){return v(T*I)+j}}return{format:c,formatPrefix:s}}var he,kt,Nt;En({thousands:",",grouping:[3],currency:["$",""]});function En(e){return he=Nn(e),kt=he.format,Nt=he.formatPrefix,he}function An(e){return Math.max(0,-Z(Math.abs(e)))}function Tn(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Z(t)/3)))*3-Z(Math.abs(e)))}function jn(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,Z(t)-Z(e))+1}function In(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function Rn(e){return function(){return e}}function Sn(e){return+e}var nt=[0,1];function J(e){return e}function He(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:Rn(isNaN(t)?NaN:.5)}function qn(e,t){var n;return e>t&&(n=e,e=t,t=n),function(r){return Math.max(e,Math.min(t,r))}}function Hn(e,t,n){var r=e[0],a=e[1],i=t[0],o=t[1];return a<r?(r=He(a,r),i=n(o,i)):(r=He(r,a),i=n(i,o)),function(l){return i(r(l))}}function Pn(e,t,n){var r=Math.min(e.length,t.length)-1,a=new Array(r),i=new Array(r),o=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++o<r;)a[o]=He(e[o],e[o+1]),i[o]=n(t[o],t[o+1]);return function(l){var f=Ot(e,l,1,r)-1;return i[f](a[f](l))}}function Dn(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function Fn(){var e=nt,t=nt,n=Le,r,a,i,o=J,l,f,c;function s(){var h=Math.min(e.length,t.length);return o!==J&&(o=qn(e[0],e[h-1])),l=h>2?Pn:Hn,f=c=null,u}function u(h){return h==null||isNaN(h=+h)?i:(f||(f=l(e.map(r),t,n)))(r(o(h)))}return u.invert=function(h){return o(a((c||(c=l(t,e.map(r),ve)))(h)))},u.domain=function(h){return arguments.length?(e=Array.from(h,Sn),s()):e.slice()},u.range=function(h){return arguments.length?(t=Array.from(h),s()):t.slice()},u.rangeRound=function(h){return t=Array.from(h),n=yn,s()},u.clamp=function(h){return arguments.length?(o=h?!0:J,s()):o!==J},u.interpolate=function(h){return arguments.length?(n=h,s()):n},u.unknown=function(h){return arguments.length?(i=h,u):i},function(h,v){return r=h,a=v,s()}}function Ln(){return Fn()(J,J)}function Vn(e,t,n,r){var a=Kt(e,t,n),i;switch(r=ke(r==null?",f":r),r.type){case"s":{var o=Math.max(Math.abs(e),Math.abs(t));return r.precision==null&&!isNaN(i=Tn(a,o))&&(r.precision=i),Nt(r,o)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(i=jn(a,Math.max(Math.abs(e),Math.abs(t))))&&(r.precision=i-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(i=An(a))&&(r.precision=i-(r.type==="%")*2);break}}return kt(r)}function Bn(e){var t=e.domain;return e.ticks=function(n){var r=t();return Wt(r[0],r[r.length-1],n==null?10:n)},e.tickFormat=function(n,r){var a=t();return Vn(a[0],a[a.length-1],n==null?10:n,r)},e.nice=function(n){n==null&&(n=10);var r=t(),a=0,i=r.length-1,o=r[a],l=r[i],f,c,s=10;for(l<o&&(c=o,o=l,l=c,c=a,a=i,i=c);s-- >0;){if(c=xt(o,l,n),c===f)return r[a]=o,r[i]=l,t(r);if(c>0)o=Math.floor(o/c)*c,l=Math.ceil(l/c)*c;else if(c<0)o=Math.ceil(o*c)/c,l=Math.floor(l*c)/c;else break;f=c}return e},e}function Et(){var e=Ln();return e.copy=function(){return Dn(e,Et())},In.apply(e,arguments),Bn(e)}function rt(e,t,n){const r=e.slice();return r[5]=t[n],r}function at(e){let t,n;return{c(){t=b("link"),this.h()},l(r){t=w(r,"LINK",{rel:!0,href:!0,as:!0,type:!0,crossorigin:!0}),this.h()},h(){m(t,"rel","preload"),m(t,"href",n=e[5]),m(t,"as","font"),m(t,"type","font/woff2"),m(t,"crossorigin","")},m(r,a){V(r,t,a)},p(r,a){a&16&&n!==(n=r[5])&&m(t,"href",n)},d(r){r&&d(t)}}}function zn(e){let t,n,r,a,i,o,l,f,c,s,u,h,v,E,T,j,I,q,_,A,M,z,F,H,C,P;document.title=t=e[0];let p=e[4],k=[];for(let x=0;x<p.length;x+=1)k[x]=at(rt(e,p,x));return{c(){n=b("meta"),r=b("meta"),a=b("meta"),i=b("meta"),o=b("meta"),l=b("meta"),f=b("meta"),c=b("meta"),s=b("meta"),u=b("meta"),v=b("meta"),E=b("meta"),T=b("meta"),j=b("meta"),I=b("meta"),q=b("meta"),_=b("meta"),A=b("meta"),M=b("meta"),F=b("meta"),H=b("link");for(let x=0;x<k.length;x+=1)k[x].c();P=de(),this.h()},l(x){const g=Tt('[data-svelte="svelte-1htu80s"]',document.head);n=w(g,"META",{name:!0,content:!0}),r=w(g,"META",{name:!0,content:!0}),a=w(g,"META",{name:!0,content:!0}),i=w(g,"META",{property:!0,content:!0}),o=w(g,"META",{property:!0,content:!0}),l=w(g,"META",{property:!0,content:!0}),f=w(g,"META",{property:!0,content:!0}),c=w(g,"META",{property:!0,content:!0}),s=w(g,"META",{property:!0,content:!0}),u=w(g,"META",{property:!0,content:!0}),v=w(g,"META",{property:!0,content:!0}),E=w(g,"META",{property:!0,content:!0}),T=w(g,"META",{property:!0,content:!0}),j=w(g,"META",{name:!0,content:!0}),I=w(g,"META",{name:!0,content:!0}),q=w(g,"META",{name:!0,content:!0}),_=w(g,"META",{name:!0,content:!0}),A=w(g,"META",{name:!0,content:!0}),M=w(g,"META",{name:!0,content:!0}),F=w(g,"META",{name:!0,content:!0}),H=w(g,"LINK",{rel:!0,href:!0});for(let N=0;N<k.length;N+=1)k[N].l(g);P=de(),g.forEach(d),this.h()},h(){m(n,"name","description"),m(n,"content",e[1]),m(r,"name","author"),m(r,"content","The Pudding"),m(a,"name","news_keywords"),m(a,"content",e[3]),m(i,"property","og:title"),m(i,"content",e[0]),m(o,"property","og:site_name"),m(o,"content","The Pudding"),m(l,"property","og:url"),m(l,"content",e[2]),m(f,"property","og:description"),m(f,"content",e[1]),m(c,"property","og:type"),m(c,"content","article"),m(s,"property","og:locale"),m(s,"content","en_US"),m(u,"property","og:image"),m(u,"content",h=e[2]+"/assets/social-facebook.jpg"),m(v,"property","og:image:type"),m(v,"content","image/jpeg"),m(E,"property","og:image:width"),m(E,"content","1200"),m(T,"property","og:image:height"),m(T,"content","600"),m(j,"name","twitter:card"),m(j,"content","summary_large_image"),m(I,"name","twitter:site"),m(I,"content","https://pudding.cool"),m(q,"name","twitter:creator"),m(q,"content","@puddingviz"),m(_,"name","twitter:title"),m(_,"content",e[0]),m(A,"name","twitter:description"),m(A,"content",e[1]),m(M,"name","twitter:image:src"),m(M,"content",z=e[2]+"/assets/social-twitter.jpg"),m(F,"name","robots"),m(F,"content","max-image-preview:large"),m(H,"rel","canonical"),m(H,"href",C=e[2]+"/")},m(x,g){y(document.head,n),y(document.head,r),y(document.head,a),y(document.head,i),y(document.head,o),y(document.head,l),y(document.head,f),y(document.head,c),y(document.head,s),y(document.head,u),y(document.head,v),y(document.head,E),y(document.head,T),y(document.head,j),y(document.head,I),y(document.head,q),y(document.head,_),y(document.head,A),y(document.head,M),y(document.head,F),y(document.head,H);for(let N=0;N<k.length;N+=1)k[N].m(document.head,null);y(document.head,P)},p(x,[g]){if(g&1&&t!==(t=x[0])&&(document.title=t),g&2&&m(n,"content",x[1]),g&8&&m(a,"content",x[3]),g&1&&m(i,"content",x[0]),g&4&&m(l,"content",x[2]),g&2&&m(f,"content",x[1]),g&4&&h!==(h=x[2]+"/assets/social-facebook.jpg")&&m(u,"content",h),g&1&&m(_,"content",x[0]),g&2&&m(A,"content",x[1]),g&4&&z!==(z=x[2]+"/assets/social-twitter.jpg")&&m(M,"content",z),g&4&&C!==(C=x[2]+"/")&&m(H,"href",C),g&16){p=x[4];let N;for(N=0;N<p.length;N+=1){const G=rt(x,p,N);k[N]?k[N].p(G,g):(k[N]=at(G),k[N].c(),k[N].m(P.parentNode,P))}for(;N<k.length;N+=1)k[N].d(1);k.length=p.length}},i:ee,o:ee,d(x){d(n),d(r),d(a),d(i),d(o),d(l),d(f),d(c),d(s),d(u),d(v),d(E),d(T),d(j),d(I),d(q),d(_),d(A),d(M),d(F),d(H),ge(k,x),d(P)}}}function Cn(e,t,n){let{title:r="Title TK"}=t,{description:a="Description TK"}=t,{url:i="https://pudding.cool"}=t,{keywords:o=""}=t,{preloadFont:l=[]}=t;return e.$$set=f=>{"title"in f&&n(0,r=f.title),"description"in f&&n(1,a=f.description),"url"in f&&n(2,i=f.url),"keywords"in f&&n(3,o=f.keywords),"preloadFont"in f&&n(4,l=f.preloadFont)},[r,a,i,o,l]}class $n extends ae{constructor(t){super(),ie(this,t,Cn,zn,oe,{title:0,description:1,url:2,keywords:3,preloadFont:4})}}function On(e){let t,n;const r=e[7].default,a=jt(r,e,e[6],null);return{c(){t=b("div"),a&&a.c(),this.h()},l(i){t=w(i,"DIV",{class:!0});var o=S(t);a&&a.l(o),o.forEach(d),this.h()},h(){m(t,"class","container svelte-eygin2")},m(i,o){V(i,t,o),a&&a.m(t,null),e[8](t),n=!0},p(i,[o]){a&&a.p&&(!n||o&64)&&It(a,r,i,i[6],n?St(r,i[6],o,null):Rt(i[6]),null)},i(i){n||(O(a,i),n=!0)},o(i){X(a,i),n=!1},d(i){i&&d(t),a&&a.d(i),e[8](null)}}}function Wn(e,t,n){let{$$slots:r={},$$scope:a}=t,{root:i=null}=t,{top:o=0}=t,{bottom:l=0}=t,{increments:f=100}=t,{value:c=void 0}=t;const s=[],u=[];let h=[],v=[],E;const T=()=>{!h.length||h.forEach(I)},j=()=>{let _=0,A=0;for(let M=0;M<s.length;M++)s[M]>_&&(_=s[M],A=M);_>0?n(1,c=A):n(1,c=void 0)},I=(_,A)=>{const M=p=>{p[0].isIntersecting;const k=p[0].intersectionRatio;s[A]=k,j()},z=o?o*-1:0,F=l?l*-1:0,H=`${z}px 0px ${F}px 0px`,C={root:i,rootMargin:H,threshold:u};v[A]&&v[A].disconnect();const P=new IntersectionObserver(M,C);P.observe(_),v[A]=P};qt(()=>{for(let _=0;_<f+1;_++)u.push(_/f);h=E.querySelectorAll(":scope > *"),T()});function q(_){pt[_?"unshift":"push"](()=>{E=_,n(0,E)})}return e.$$set=_=>{"root"in _&&n(2,i=_.root),"top"in _&&n(3,o=_.top),"bottom"in _&&n(4,l=_.bottom),"increments"in _&&n(5,f=_.increments),"value"in _&&n(1,c=_.value),"$$scope"in _&&n(6,a=_.$$scope)},e.$$.update=()=>{e.$$.dirty&24&&T()},[E,c,i,o,l,f,a,r,q]}class Kn extends ae{constructor(t){super(),ie(this,t,Wn,On,oe,{root:2,top:3,bottom:4,increments:5,value:1})}}function it(e,t,n){const r=e.slice();r[6]=t[n];const a=`${r[4](r[6].female_year_2022)}px`;r[7]=a;const i=`${Un}px`;r[8]=i;const o=r[6].female_year_2022>=.5;r[9]=o;const l=r[2]&&r[9]?r[5][1]:r[5][0];return r[10]=l,r}function ot(e,t,n){const r=e.slice();r[13]=t[n];const a=(r[3]/(Pe-1)*r[13]).toFixed(1);return r[14]=a,r}function lt(e){let t,n=(e[14]==="0.0"?0:e[14])+"",r;return{c(){t=b("div"),r=Ne(n)},l(a){t=w(a,"DIV",{});var i=S(t);r=Ee(i,n),i.forEach(d)},m(a,i){V(a,t,i),y(t,r)},p(a,i){i&8&&n!==(n=(a[14]==="0.0"?0:a[14])+"")&&_t(r,n)},d(a){a&&d(t)}}}function ft(e){let t,n,r,a,i=e[6].genre+"",o,l;return{c(){t=b("div"),n=b("div"),r=W(),a=b("div"),o=Ne(i),l=W(),this.h()},l(f){t=w(f,"DIV",{class:!0});var c=S(t);n=w(c,"DIV",{class:!0}),S(n).forEach(d),r=K(c),a=w(c,"DIV",{class:!0});var s=S(a);o=Ee(s,i),s.forEach(d),l=K(c),c.forEach(d),this.h()},h(){m(n,"class","bar svelte-15hdr9h"),$(n,"height",e[7],!1),$(n,"width",e[8],!1),$(n,"background",e[10],!1),m(a,"class","label svelte-15hdr9h"),m(t,"class","bar-group svelte-15hdr9h")},m(f,c){V(f,t,c),y(t,n),y(t,r),y(t,a),y(a,o),y(t,l)},p(f,c){c&17&&$(n,"height",f[7],!1),c&5&&$(n,"background",f[10],!1),c&1&&i!==(i=f[6].genre+"")&&_t(o,i)},d(f){f&&d(t)}}}function st(e){let t,n,r,a,i;return{c(){t=b("div"),n=b("div"),r=W(),a=b("div"),i=Ne("majority streams by female or mixed-gender artists"),this.h()},l(o){t=w(o,"DIV",{class:!0});var l=S(t);n=w(l,"DIV",{class:!0}),S(n).forEach(d),r=K(l),a=w(l,"DIV",{class:!0});var f=S(a);i=Ee(f,"majority streams by female or mixed-gender artists"),f.forEach(d),l.forEach(d),this.h()},h(){m(n,"class","line svelte-15hdr9h"),m(a,"class","line-label svelte-15hdr9h"),m(t,"class","line-group svelte-15hdr9h"),$(t,"bottom",`${e[4](.5)}px`,!1)},m(o,l){V(o,t,l),y(t,n),y(t,r),y(t,a),y(a,i)},p(o,l){l&16&&$(t,"bottom",`${o[4](.5)}px`,!1)},d(o){o&&d(t)}}}function Gn(e){let t,n,r,a,i=ze(Pe),o=[];for(let s=0;s<i.length;s+=1)o[s]=lt(ot(e,i,s));let l=e[0],f=[];for(let s=0;s<l.length;s+=1)f[s]=ft(it(e,l,s));let c=e[1]&&st(e);return{c(){t=b("figure"),n=b("div");for(let s=0;s<o.length;s+=1)o[s].c();r=W();for(let s=0;s<f.length;s+=1)f[s].c();a=W(),c&&c.c(),this.h()},l(s){t=w(s,"FIGURE",{class:!0});var u=S(t);n=w(u,"DIV",{class:!0});var h=S(n);for(let v=0;v<o.length;v+=1)o[v].l(h);h.forEach(d),r=K(u);for(let v=0;v<f.length;v+=1)f[v].l(u);a=K(u),c&&c.l(u),u.forEach(d),this.h()},h(){m(n,"class","axis svelte-15hdr9h"),m(t,"class","svelte-15hdr9h"),$(t,"height",`${At}px`,!1)},m(s,u){V(s,t,u),y(t,n);for(let h=0;h<o.length;h+=1)o[h].m(n,null);y(t,r);for(let h=0;h<f.length;h+=1)f[h].m(t,null);y(t,a),c&&c.m(t,null)},p(s,[u]){if(u&8){i=ze(Pe);let h;for(h=0;h<i.length;h+=1){const v=ot(s,i,h);o[h]?o[h].p(v,u):(o[h]=lt(v),o[h].c(),o[h].m(n,null))}for(;h<o.length;h+=1)o[h].d(1);o.length=i.length}if(u&53){l=s[0];let h;for(h=0;h<l.length;h+=1){const v=it(s,l,h);f[h]?f[h].p(v,u):(f[h]=ft(v),f[h].c(),f[h].m(t,a))}for(;h<f.length;h+=1)f[h].d(1);f.length=l.length}s[1]?c?c.p(s,u):(c=st(s),c.c(),c.m(t,null)):c&&(c.d(1),c=null)},i:ee,o:ee,d(s){s&&d(t),ge(o,s),ge(f,s),c&&c.d()}}}const At=600,Un=25,Pe=7;function Xn(e,t,n){let r,a,{data:i}=t,{middleLine:o}=t,{colorByMajority:l}=t;const f=["cornflowerblue","red"];return e.$$set=c=>{"data"in c&&n(0,i=c.data),"middleLine"in c&&n(1,o=c.middleLine),"colorByMajority"in c&&n(2,l=c.colorByMajority)},e.$$.update=()=>{e.$$.dirty&1&&n(3,r=Gt(i.map(c=>c.female_year_2022))),e.$$.dirty&8&&n(4,a=Et().domain([0,r]).range([0,At]))},[i,o,l,r,a,f]}class Yn extends ae{constructor(t){super(),ie(this,t,Xn,Gn,oe,{data:0,middleLine:1,colorByMajority:2})}}const ct=[{genre:"k-pop",female_year_2022:"0.346"},{genre:"pop",female_year_2022:"0.507"},{genre:"r&b",female_year_2022:"0.551"},{genre:"dance pop",female_year_2022:"0.607"},{genre:"latin pop",female_year_2022:"0.39"},{genre:"latin",female_year_2022:"0.22"},{genre:"reggaeton",female_year_2022:"0.134"},{genre:"modern rock",female_year_2022:"0.113"},{genre:"trap latino",female_year_2022:"0.075"},{genre:"tropical house",female_year_2022:"0.326"},{genre:"pop rap",female_year_2022:"0.158"},{genre:"edm",female_year_2022:"0.303"},{genre:"mellow gold",female_year_2022:"0.164"},{genre:"rock",female_year_2022:"0.068"},{genre:"classic rock",female_year_2022:"0.061"},{genre:"rap",female_year_2022:"0.037"},{genre:"hip hop",female_year_2022:"0.04"},{genre:"trap",female_year_2022:"0.027"},{genre:"alternative metal",female_year_2022:"0.062"}],ut=[{genre:"trap",female_year_2022:"0.027"},{genre:"rap",female_year_2022:"0.037"},{genre:"hip hop",female_year_2022:"0.04"},{genre:"classic rock",female_year_2022:"0.061"},{genre:"alternative metal",female_year_2022:"0.062"},{genre:"rock",female_year_2022:"0.068"},{genre:"trap latino",female_year_2022:"0.075"},{genre:"modern rock",female_year_2022:"0.113"},{genre:"reggaeton",female_year_2022:"0.134"},{genre:"pop rap",female_year_2022:"0.158"},{genre:"mellow gold",female_year_2022:"0.164"},{genre:"latin",female_year_2022:"0.22"},{genre:"edm",female_year_2022:"0.303"},{genre:"tropical house",female_year_2022:"0.326"},{genre:"k-pop",female_year_2022:"0.346"},{genre:"latin pop",female_year_2022:"0.39"},{genre:"pop",female_year_2022:"0.507"},{genre:"r&b",female_year_2022:"0.551"},{genre:"dance pop",female_year_2022:"0.607"}];function ht(e,t,n){const r=e.slice();r[7]=t[n],r[10]=n;const a=r[0]===r[10];return r[8]=a,r}function mt(e){let t,n;return t=new Yn({props:{data:e[1],middleLine:e[2],colorByMajority:e[3]}}),{c(){pe(t.$$.fragment)},l(r){_e(t.$$.fragment,r)},m(r,a){ye(t,r,a),n=!0},p(r,a){const i={};a&2&&(i.data=r[1]),a&4&&(i.middleLine=r[2]),a&8&&(i.colorByMajority=r[3]),t.$set(i)},i(r){n||(O(t.$$.fragment,r),n=!0)},o(r){X(t.$$.fragment,r),n=!1},d(r){xe(t,r)}}}function dt(e){let t,n,r=e[7]+"",a,i;return{c(){t=b("div"),n=b("p"),a=Ne(r),i=W(),this.h()},l(o){t=w(o,"DIV",{class:!0});var l=S(t);n=w(l,"P",{class:!0});var f=S(n);a=Ee(f,r),f.forEach(d),i=K(l),l.forEach(d),this.h()},h(){m(n,"class","svelte-19t4l9q"),m(t,"class","step svelte-19t4l9q"),Be(t,"active",e[8])},m(o,l){V(o,t,l),y(t,n),y(n,a),y(t,i)},p(o,l){l&1&&Be(t,"active",o[8])},d(o){o&&d(t)}}}function Jn(e){let t,n=e[4],r=[];for(let a=0;a<n.length;a+=1)r[a]=dt(ht(e,n,a));return{c(){for(let a=0;a<r.length;a+=1)r[a].c();t=de()},l(a){for(let i=0;i<r.length;i+=1)r[i].l(a);t=de()},m(a,i){for(let o=0;o<r.length;o+=1)r[o].m(a,i);V(a,t,i)},p(a,i){if(i&17){n=a[4];let o;for(o=0;o<n.length;o+=1){const l=ht(a,n,o);r[o]?r[o].p(l,i):(r[o]=dt(l),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(a){ge(r,a),a&&d(t)}}}function Qn(e){let t,n,r,a,i,o,l=e[1]&&mt(e);function f(s){e[5](s)}let c={$$slots:{default:[Jn]},$$scope:{ctx:e}};return e[0]!==void 0&&(c.value=e[0]),a=new Kn({props:c}),pt.push(()=>Ht(a,"value",f)),{c(){t=b("section"),n=b("div"),l&&l.c(),r=W(),pe(a.$$.fragment),this.h()},l(s){t=w(s,"SECTION",{id:!0});var u=S(t);n=w(u,"DIV",{class:!0});var h=S(n);l&&l.l(h),h.forEach(d),r=K(u),_e(a.$$.fragment,u),u.forEach(d),this.h()},h(){m(n,"class","sticky svelte-19t4l9q"),m(t,"id","scrolly")},m(s,u){V(s,t,u),y(t,n),l&&l.m(n,null),y(t,r),ye(a,t,null),o=!0},p(s,[u]){s[1]?l?(l.p(s,u),u&2&&O(l,1)):(l=mt(s),l.c(),O(l,1),l.m(n,null)):l&&(Pt(),X(l,1,1,()=>{l=null}),Dt());const h={};u&2049&&(h.$$scope={dirty:u,ctx:s}),!i&&u&1&&(i=!0,h.value=s[0],Ft(()=>i=!1)),a.$set(h)},i(s){o||(O(l),O(a.$$.fragment,s),o=!0)},o(s){X(l),X(a.$$.fragment,s),o=!1},d(s){s&&d(t),l&&l.d(),xe(a)}}}function Zn(e,t,n){let r;const a=["Ok so here\u2019s genres and their share of streams by women/mixed gender bands","Let\u2019s add in a line that\u2019s the cut off of women majority.","let\u2019s resort these by % women/mixed-gender","and then also add in one more data-point, the genres that are majority listened to by women.","We also have this data over time. Here\u2019s pop music.","And k-pop. There are now fewer women artists in k-pop by streams.","We can look at a different data point: where female listeners play female artists more than male listeners do, which is most of them"];let i,o,l;const f=()=>{r===0?(n(1,i=ct.map(s=>({...s,female_year_2022:+s.female_year_2022}))),n(2,o=!1),n(3,l=!1)):r===1?(n(1,i=ct.map(s=>({...s,female_year_2022:+s.female_year_2022}))),n(2,o=!0),n(3,l=!1)):r===2?(n(1,i=ut.map(s=>({...s,female_year_2022:+s.female_year_2022}))),n(2,o=!0),n(3,l=!1)):r===3&&(n(1,i=ut.map(s=>({...s,female_year_2022:+s.female_year_2022}))),n(2,o=!0),n(3,l=!0))};function c(s){r=s,n(0,r)}return e.$$.update=()=>{e.$$.dirty&1&&f()},[r,i,o,l,a,c]}class er extends ae{constructor(t){super(),ie(this,t,Zn,Qn,oe,{})}}const tr="Title TK",nr="Description tk.",gt={title:tr,description:nr};function rr(){console.log("--- --- --- --- --- ---"),console.log("svelte-starter: 3.1.2"),console.log("build: 2022-08-17-18:21"),console.log("--- --- --- --- --- ---")}function ar(e){let t,n,r,a;return t=new $n({props:{title:e[1],description:e[2],url:e[3],preloadFont:e[0],keywords:e[4]}}),r=new er({}),{c(){pe(t.$$.fragment),n=W(),pe(r.$$.fragment)},l(i){_e(t.$$.fragment,i),n=K(i),_e(r.$$.fragment,i)},m(i,o){ye(t,i,o),V(i,n,o),ye(r,i,o),a=!0},p:ee,i(i){a||(O(t.$$.fragment,i),O(r.$$.fragment,i),a=!0)},o(i){X(t.$$.fragment,i),X(r.$$.fragment,i),a=!1},d(i){xe(t,i),i&&d(n),xe(r,i)}}}function ir(e){rr();const t=["https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Regular.woff2","https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Bold.woff2","https://pudding.cool/assets/fonts/national/National2Web-Regular.woff2","https://pudding.cool/assets/fonts/national/National2Web-Bold.woff2"],{title:n,description:r,url:a,keywords:i}=gt;return Lt("copy",gt),[t,n,r,a,i]}class fr extends ae{constructor(t){super(),ie(this,t,ir,ar,oe,{})}}export{fr as default};
