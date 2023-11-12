(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yh="157",On={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Cc={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lv=0,Vd=1,uv=2,Em=1,xh=2,Ni=3,Hi=0,gn=1,Tn=2,Bi=0,Hr=1,Go=2,zd=3,Gd=4,hv=5,Lr=100,dv=101,fv=102,Hd=103,Wd=104,pv=200,mv=201,gv=202,_v=203,wm=204,Am=205,vv=206,yv=207,xv=208,Sv=209,Mv=210,bv=0,Tv=1,Ev=2,Vu=3,wv=4,Av=5,Cv=6,Rv=7,Sh=0,Iv=1,Dv=2,cs=0,Cm=1,Rm=2,Im=3,Dm=4,Pv=5,Pm=300,Kr=301,Zr=302,zu=303,Gu=304,gl=306,mn=1e3,Un=1001,Rc=1002,Dt=1003,Hu=1004,bc=1005,dn=1006,Nm=1007,Js=1008,ls=1009,Nv=1010,Lv=1011,Mh=1012,Lm=1013,os=1014,ci=1015,Qr=1016,Om=1017,Um=1018,Xs=1020,Ov=1021,En=1023,Uv=1024,Fv=1025,qs=1026,Jr=1027,kv=1028,Fm=1029,Bv=1030,km=1031,Bm=1033,Gl=33776,Hl=33777,Wl=33778,Xl=33779,Xd=35840,qd=35841,jd=35842,Yd=35843,Vv=36196,$d=37492,Kd=37496,Zd=37808,Qd=37809,Jd=37810,ef=37811,tf=37812,nf=37813,sf=37814,rf=37815,of=37816,af=37817,cf=37818,lf=37819,uf=37820,hf=37821,ql=36492,df=36494,ff=36495,zv=36283,pf=36284,mf=36285,gf=36286,Gv=2200,Vm=2201,Hv=2202,Ko=2300,eo=2301,jl=2302,kr=2400,Br=2401,Ic=2402,bh=2500,zm=2501,Wv=0,Gm=1,Wu=2,Hm=3e3,js=3001,Xv=3200,qv=3201,Th=0,jv=1,Fn="",gt="srgb",Wt="srgb-linear",Eh="display-p3",_l="display-p3-linear",Dc="linear",ut="srgb",Pc="rec709",Nc="p3",Yl=7680,Yv=519,$v=512,Kv=513,Zv=514,Qv=515,Jv=516,e0=517,t0=518,n0=519,Xu=35044,wh=35048,_f="300 es",qu=1035,ki=2e3,Lc=2001;class ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vf=1234567;const Ho=Math.PI/180,to=180/Math.PI;function jn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[s&255]+qt[s>>8&255]+qt[s>>16&255]+qt[s>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function Bt(s,e,t){return Math.max(e,Math.min(t,s))}function Ah(s,e){return(s%e+e)%e}function i0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function s0(s,e,t){return s!==e?(t-s)/(e-s):0}function Wo(s,e,t){return(1-t)*s+t*e}function r0(s,e,t,n){return Wo(s,e,1-Math.exp(-t*n))}function o0(s,e=1){return e-Math.abs(Ah(s,e*2)-e)}function a0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function c0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function l0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function u0(s,e){return s+Math.random()*(e-s)}function h0(s){return s*(.5-Math.random())}function d0(s){s!==void 0&&(vf=s);let e=vf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function f0(s){return s*Ho}function p0(s){return s*to}function ju(s){return(s&s-1)===0&&s!==0}function Wm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Oc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function m0(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*u,c*h,c*d,a*l);break;case"YZY":s.set(c*d,a*u,c*h,a*l);break;case"ZXZ":s.set(c*h,c*d,a*u,a*l);break;case"XZX":s.set(a*u,c*m,c*f,a*l);break;case"YXY":s.set(c*f,a*u,c*m,a*l);break;case"ZYZ":s.set(c*m,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function oi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function st(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const et={DEG2RAD:Ho,RAD2DEG:to,generateUUID:jn,clamp:Bt,euclideanModulo:Ah,mapLinear:i0,inverseLerp:s0,lerp:Wo,damp:r0,pingpong:o0,smoothstep:a0,smootherstep:c0,randInt:l0,randFloat:u0,randFloatSpread:h0,seededRandom:d0,degToRad:f0,radToDeg:p0,isPowerOfTwo:ju,ceilPowerOfTwo:Wm,floorPowerOfTwo:Oc,setQuaternionFromProperEuler:m0,normalize:st,denormalize:oi};class _e{constructor(e=0,t=0){_e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,i,r,o,a,c,l){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],_=i[0],g=i[3],p=i[6],x=i[1],v=i[4],M=i[7],y=i[2],b=i[5],E=i[8];return r[0]=o*_+a*x+c*y,r[3]=o*g+a*v+c*b,r[6]=o*p+a*M+c*E,r[1]=l*_+u*x+h*y,r[4]=l*g+u*v+h*b,r[7]=l*p+u*M+h*E,r[2]=d*_+f*x+m*y,r[5]=d*g+f*v+m*b,r[8]=d*p+f*M+m*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,m=t*h+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=h*_,e[1]=(i*l-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply($l.makeScale(e,t)),this}rotate(e){return this.premultiply($l.makeRotation(-e)),this}translate(e,t){return this.premultiply($l.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $l=new He;function Xm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Zo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function g0(){const s=Zo("canvas");return s.style.display="block",s}const yf={};function Xo(s){s in yf||(yf[s]=!0,console.warn(s))}const xf=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sf=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Oa={[Wt]:{transfer:Dc,primaries:Pc,toReference:s=>s,fromReference:s=>s},[gt]:{transfer:ut,primaries:Pc,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[_l]:{transfer:Dc,primaries:Nc,toReference:s=>s.applyMatrix3(Sf),fromReference:s=>s.applyMatrix3(xf)},[Eh]:{transfer:ut,primaries:Nc,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Sf),fromReference:s=>s.applyMatrix3(xf).convertLinearToSRGB()}},_0=new Set([Wt,_l]),Qe={enabled:!0,_workingColorSpace:Wt,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!_0.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Oa[e].toReference,i=Oa[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Oa[s].primaries},getTransfer:function(s){return s===Fn?Dc:Oa[s].transfer}};function Wr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Kl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let hr;class qm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hr===void 0&&(hr=Zo("canvas")),hr.width=e.width,hr.height=e.height;const n=hr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=hr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Wr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wr(t[n]/255)*255):t[n]=Wr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let v0=0,jm=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=jn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Zl(i[o].image)):r.push(Zl(i[o]))}else r=Zl(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Zl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?qm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let y0=0;class Gt extends ji{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,n=Un,i=Un,r=dn,o=Js,a=En,c=ls,l=Gt.DEFAULT_ANISOTROPY,u=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=jn(),this.name="",this.source=new jm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Xo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===js?gt:Fn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mn:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case Rc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mn:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case Rc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Xo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===gt?js:Hm}set encoding(e){Xo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===js?gt:Fn}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=Pm;Gt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,i=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,M=(f+1)/2,y=(p+1)/2,b=(u+d)/4,E=(h+_)/4,T=(m+g)/4;return v>M&&v>y?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=b/n,r=E/n):M>y?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=b/i,r=T/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=E/r,i=T/r),this.set(n,i,r,t),this}let x=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(h-_)/x,this.z=(d-u)/x,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class x0 extends ji{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Xo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===js?gt:Fn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Gt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new jm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hs extends x0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ym extends Gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class S0 extends Gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ht{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==m){let g=1-a;const p=c*d+l*f+u*m+h*_,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const y=Math.sqrt(v),b=Math.atan2(y,p*x);g=Math.sin(g*b)/y,a=Math.sin(a*b)/y}const M=a*x;if(c=c*g+d*M,l=l*g+f*M,u=u*g+m*M,h=h*g+_*M,g===1-a){const y=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=y,l*=y,u*=y,h*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+u*h+c*f-l*d,e[t+1]=c*m+u*d+l*h-a*f,e[t+2]=l*m+u*f+a*d-c*h,e[t+3]=u*m-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),d=c(n/2),f=c(i/2),m=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"YZX":this._x=d*u*h+l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h-d*f*m;break;case"XZY":this._x=d*u*h-l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,u=c*n+a*t-r*i,h=c*i+r*n-o*t,d=-r*t-o*n-a*i;return this.x=l*c+d*-r+u*-a-h*-o,this.y=u*c+d*-o+h*-r-l*-a,this.z=h*c+d*-a+l*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ql.copy(this).projectOnVector(e),this.sub(Ql)}reflect(e){return this.sub(Ql.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ql=new N,Mf=new Ht;class $n{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),dr.copy(e.boundingBox),dr.applyMatrix4(e.matrixWorld),this.union(dr);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)bi.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(bi)}else i.boundingBox===null&&i.computeBoundingBox(),dr.copy(i.boundingBox),dr.applyMatrix4(e.matrixWorld),this.union(dr)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),Ua.subVectors(this.max,Ro),fr.subVectors(e.a,Ro),pr.subVectors(e.b,Ro),mr.subVectors(e.c,Ro),Zi.subVectors(pr,fr),Qi.subVectors(mr,pr),Es.subVectors(fr,mr);let t=[0,-Zi.z,Zi.y,0,-Qi.z,Qi.y,0,-Es.z,Es.y,Zi.z,0,-Zi.x,Qi.z,0,-Qi.x,Es.z,0,-Es.x,-Zi.y,Zi.x,0,-Qi.y,Qi.x,0,-Es.y,Es.x,0];return!Jl(t,fr,pr,mr,Ua)||(t=[1,0,0,0,1,0,0,0,1],!Jl(t,fr,pr,mr,Ua))?!1:(Fa.crossVectors(Zi,Qi),t=[Fa.x,Fa.y,Fa.z],Jl(t,fr,pr,mr,Ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mi=[new N,new N,new N,new N,new N,new N,new N,new N],bi=new N,dr=new $n,fr=new N,pr=new N,mr=new N,Zi=new N,Qi=new N,Es=new N,Ro=new N,Ua=new N,Fa=new N,ws=new N;function Jl(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ws.fromArray(s,r);const a=i.x*Math.abs(ws.x)+i.y*Math.abs(ws.y)+i.z*Math.abs(ws.z),c=e.dot(ws),l=t.dot(ws),u=n.dot(ws);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const M0=new $n,Io=new N,eu=new N;class mi{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):M0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const t=Io.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Io,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(eu)),this.expandByPoint(Io.copy(e.center).sub(eu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ti=new N,tu=new N,ka=new N,Ji=new N,nu=new N,Ba=new N,iu=new N;class va{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){tu.copy(e).add(t).multiplyScalar(.5),ka.copy(t).sub(e).normalize(),Ji.copy(this.origin).sub(tu);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ka),a=Ji.dot(this.direction),c=-Ji.dot(ka),l=Ji.lengthSq(),u=Math.abs(1-o*o);let h,d,f,m;if(u>0)if(h=o*c-a,d=o*a-c,m=r*u,h>=0)if(d>=-m)if(d<=m){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-m?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=m?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(tu).addScaledVector(ka,d),f}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);const n=Ti.dot(this.direction),i=Ti.dot(Ti)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,n,i,r){nu.subVectors(t,e),Ba.subVectors(n,e),iu.crossVectors(nu,Ba);let o=this.direction.dot(iu),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ji.subVectors(this.origin,e);const c=a*this.direction.dot(Ba.crossVectors(Ji,Ba));if(c<0)return null;const l=a*this.direction.dot(nu.cross(Ji));if(l<0||c+l>o)return null;const u=-a*Ji.dot(iu);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(e,t,n,i,r,o,a,c,l,u,h,d,f,m,_,g){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,u,h,d,f,m,_,g)}set(e,t,n,i,r,o,a,c,l,u,h,d,f,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/gr.setFromMatrixColumn(e,0).length(),r=1/gr.setFromMatrixColumn(e,1).length(),o=1/gr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,m=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+m*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,m=l*u,_=l*h;t[0]=d+_*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,m=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,m=a*u,_=a*h;t[0]=c*u,t[4]=m*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=m*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+m,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(b0,e,T0)}lookAt(e,t,n){const i=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),es.crossVectors(n,xn),es.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),es.crossVectors(n,xn)),es.normalize(),Va.crossVectors(xn,es),i[0]=es.x,i[4]=Va.x,i[8]=xn.x,i[1]=es.y,i[5]=Va.y,i[9]=xn.y,i[2]=es.z,i[6]=Va.z,i[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],x=n[3],v=n[7],M=n[11],y=n[15],b=i[0],E=i[4],T=i[8],S=i[12],w=i[1],L=i[5],U=i[9],V=i[13],C=i[2],P=i[6],F=i[10],k=i[14],j=i[3],B=i[7],X=i[11],R=i[15];return r[0]=o*b+a*w+c*C+l*j,r[4]=o*E+a*L+c*P+l*B,r[8]=o*T+a*U+c*F+l*X,r[12]=o*S+a*V+c*k+l*R,r[1]=u*b+h*w+d*C+f*j,r[5]=u*E+h*L+d*P+f*B,r[9]=u*T+h*U+d*F+f*X,r[13]=u*S+h*V+d*k+f*R,r[2]=m*b+_*w+g*C+p*j,r[6]=m*E+_*L+g*P+p*B,r[10]=m*T+_*U+g*F+p*X,r[14]=m*S+_*V+g*k+p*R,r[3]=x*b+v*w+M*C+y*j,r[7]=x*E+v*L+M*P+y*B,r[11]=x*T+v*U+M*F+y*X,r[15]=x*S+v*V+M*k+y*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+r*c*h-i*l*h-r*a*d+n*l*d+i*a*f-n*c*f)+_*(+t*c*f-t*l*d+r*o*d-i*o*f+i*l*u-r*c*u)+g*(+t*l*h-t*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+p*(-i*a*u-t*c*h+t*a*d+i*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],x=h*g*l-_*d*l+_*c*f-a*g*f-h*c*p+a*d*p,v=m*d*l-u*g*l-m*c*f+o*g*f+u*c*p-o*d*p,M=u*_*l-m*h*l+m*a*f-o*_*f-u*a*p+o*h*p,y=m*h*c-u*_*c-m*a*d+o*_*d+u*a*g-o*h*g,b=t*x+n*v+i*M+r*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=x*E,e[1]=(_*d*r-h*g*r-_*i*f+n*g*f+h*i*p-n*d*p)*E,e[2]=(a*g*r-_*c*r+_*i*l-n*g*l-a*i*p+n*c*p)*E,e[3]=(h*c*r-a*d*r-h*i*l+n*d*l+a*i*f-n*c*f)*E,e[4]=v*E,e[5]=(u*g*r-m*d*r+m*i*f-t*g*f-u*i*p+t*d*p)*E,e[6]=(m*c*r-o*g*r-m*i*l+t*g*l+o*i*p-t*c*p)*E,e[7]=(o*d*r-u*c*r+u*i*l-t*d*l-o*i*f+t*c*f)*E,e[8]=M*E,e[9]=(m*h*r-u*_*r-m*n*f+t*_*f+u*n*p-t*h*p)*E,e[10]=(o*_*r-m*a*r+m*n*l-t*_*l-o*n*p+t*a*p)*E,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*f-t*a*f)*E,e[12]=y*E,e[13]=(u*_*i-m*h*i+m*n*d-t*_*d-u*n*g+t*h*g)*E,e[14]=(m*a*i-o*_*i-m*n*c+t*_*c+o*n*g-t*a*g)*E,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*d+t*a*d)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,m=r*h,_=o*u,g=o*h,p=a*h,x=c*l,v=c*u,M=c*h,y=n.x,b=n.y,E=n.z;return i[0]=(1-(_+p))*y,i[1]=(f+M)*y,i[2]=(m-v)*y,i[3]=0,i[4]=(f-M)*b,i[5]=(1-(d+p))*b,i[6]=(g+x)*b,i[7]=0,i[8]=(m+v)*E,i[9]=(g-x)*E,i[10]=(1-(d+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=gr.set(i[0],i[1],i[2]).length();const o=gr.set(i[4],i[5],i[6]).length(),a=gr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Vn.copy(this);const l=1/r,u=1/o,h=1/a;return Vn.elements[0]*=l,Vn.elements[1]*=l,Vn.elements[2]*=l,Vn.elements[4]*=u,Vn.elements[5]*=u,Vn.elements[6]*=u,Vn.elements[8]*=h,Vn.elements[9]*=h,Vn.elements[10]*=h,t.setFromRotationMatrix(Vn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=ki){const c=this.elements,l=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,m;if(a===ki)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Lc)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ki){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(o-r),d=(t+e)*l,f=(n+i)*u;let m,_;if(a===ki)m=(o+r)*h,_=-2*h;else if(a===Lc)m=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const gr=new N,Vn=new Ue,b0=new N(0,0,0),T0=new N(1,1,1),es=new N,Va=new N,xn=new N,bf=new Ue,Tf=new Ht;class vl{constructor(e=0,t=0,n=0,i=vl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tf.setFromEuler(this),this.setFromQuaternion(Tf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vl.DEFAULT_ORDER="XYZ";class Ch{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let E0=0;const Ef=new N,_r=new Ht,Ei=new Ue,za=new N,Do=new N,w0=new N,A0=new Ht,wf=new N(1,0,0),Af=new N(0,1,0),Cf=new N(0,0,1),C0={type:"added"},R0={type:"removed"};class _t extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new N,t=new vl,n=new Ht,i=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new He}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ch,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _r.setFromAxisAngle(e,t),this.quaternion.multiply(_r),this}rotateOnWorldAxis(e,t){return _r.setFromAxisAngle(e,t),this.quaternion.premultiply(_r),this}rotateX(e){return this.rotateOnAxis(wf,e)}rotateY(e){return this.rotateOnAxis(Af,e)}rotateZ(e){return this.rotateOnAxis(Cf,e)}translateOnAxis(e,t){return Ef.copy(e).applyQuaternion(this.quaternion),this.position.add(Ef.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wf,e)}translateY(e){return this.translateOnAxis(Af,e)}translateZ(e){return this.translateOnAxis(Cf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?za.copy(e):za.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Do,za,this.up):Ei.lookAt(za,Do,this.up),this.quaternion.setFromRotationMatrix(Ei),i&&(Ei.extractRotation(i.matrixWorld),_r.setFromRotationMatrix(Ei),this.quaternion.premultiply(_r.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(C0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(R0)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,e,w0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,A0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}_t.DEFAULT_UP=new N(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new N,wi=new N,su=new N,Ai=new N,vr=new N,yr=new N,Rf=new N,ru=new N,ou=new N,au=new N;let Ga=!1;class Gn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),zn.subVectors(e,t),i.cross(zn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){zn.subVectors(i,t),wi.subVectors(n,t),su.subVectors(e,t);const o=zn.dot(zn),a=zn.dot(wi),c=zn.dot(su),l=wi.dot(wi),u=wi.dot(su),h=o*l-a*a;if(h===0)return r.set(-2,-1,-1);const d=1/h,f=(l*c-a*u)*d,m=(o*u-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ai),Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getUV(e,t,n,i,r,o,a,c){return Ga===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ga=!0),this.getInterpolation(e,t,n,i,r,o,a,c)}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Ai),c.setScalar(0),c.addScaledVector(r,Ai.x),c.addScaledVector(o,Ai.y),c.addScaledVector(a,Ai.z),c}static isFrontFacing(e,t,n,i){return zn.subVectors(n,t),wi.subVectors(e,t),zn.cross(wi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),zn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Ga===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ga=!0),Gn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Gn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;vr.subVectors(i,n),yr.subVectors(r,n),ru.subVectors(e,n);const c=vr.dot(ru),l=yr.dot(ru);if(c<=0&&l<=0)return t.copy(n);ou.subVectors(e,i);const u=vr.dot(ou),h=yr.dot(ou);if(u>=0&&h<=u)return t.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(vr,o);au.subVectors(e,r);const f=vr.dot(au),m=yr.dot(au);if(m>=0&&f<=m)return t.copy(r);const _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(yr,a);const g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return Rf.subVectors(r,i),a=(h-u)/(h-u+(f-m)),t.copy(i).addScaledVector(Rf,a);const p=1/(g+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(vr,o).addScaledVector(yr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let I0=0;class Yn extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=Hr,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wm,this.blendDst=Am,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Vu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yl,this.stencilZFail=Yl,this.stencilZPass=Yl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(n.blending=this.blending),this.side!==Hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const $m={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},Ha={h:0,s:0,l:0};function cu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Qe.workingColorSpace){if(e=Ah(e,1),t=Bt(t,0,1),n=Bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=cu(o,r,e+1/3),this.g=cu(o,r,e),this.b=cu(o,r,e-1/3)}return Qe.toWorkingColorSpace(this,i),this}setStyle(e,t=gt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){const n=$m[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}copyLinearToSRGB(e){return this.r=Kl(e.r),this.g=Kl(e.g),this.b=Kl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return Qe.fromWorkingColorSpace(jt.copy(this),e),Math.round(Bt(jt.r*255,0,255))*65536+Math.round(Bt(jt.g*255,0,255))*256+Math.round(Bt(jt.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(jt.copy(this),t);const n=jt.r,i=jt.g,r=jt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=gt){Qe.fromWorkingColorSpace(jt.copy(this),e);const t=jt.r,n=jt.g,i=jt.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ts),this.setHSL(ts.h+e,ts.s+t,ts.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ts),e.getHSL(Ha);const n=Wo(ts.h,Ha.h,t),i=Wo(ts.s,Ha.s,t),r=Wo(ts.l,Ha.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Te;Te.NAMES=$m;class li extends Yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new N,Wa=new _e;class un{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xu,this.updateRange={offset:0,count:-1},this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wa.fromBufferAttribute(this,t),Wa.applyMatrix3(e),this.setXY(t,Wa.x,Wa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Km extends un{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Zm extends un{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Zt extends un{constructor(e,t,n){super(new Float32Array(e),t,n)}}let D0=0;const In=new Ue,lu=new _t,xr=new N,Sn=new $n,Po=new $n,Ft=new N;class Cn extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xm(e)?Zm:Km)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,n){return In.makeTranslation(e,t,n),this.applyMatrix4(In),this}scale(e,t,n){return In.makeScale(e,t,n),this.applyMatrix4(In),this}lookAt(e){return lu.lookAt(e),lu.updateMatrix(),this.applyMatrix4(lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Zt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Po.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(Sn.min,Po.min),Sn.expandByPoint(Ft),Ft.addVectors(Sn.max,Po.max),Sn.expandByPoint(Ft)):(Sn.expandByPoint(Po.min),Sn.expandByPoint(Po.max))}Sn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Ft.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ft));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ft.fromBufferAttribute(a,l),c&&(xr.fromBufferAttribute(e,l),Ft.add(xr)),i=Math.max(i,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let w=0;w<a;w++)l[w]=new N,u[w]=new N;const h=new N,d=new N,f=new N,m=new _e,_=new _e,g=new _e,p=new N,x=new N;function v(w,L,U){h.fromArray(i,w*3),d.fromArray(i,L*3),f.fromArray(i,U*3),m.fromArray(o,w*2),_.fromArray(o,L*2),g.fromArray(o,U*2),d.sub(h),f.sub(h),_.sub(m),g.sub(m);const V=1/(_.x*g.y-g.x*_.y);isFinite(V)&&(p.copy(d).multiplyScalar(g.y).addScaledVector(f,-_.y).multiplyScalar(V),x.copy(f).multiplyScalar(_.x).addScaledVector(d,-g.x).multiplyScalar(V),l[w].add(p),l[L].add(p),l[U].add(p),u[w].add(x),u[L].add(x),u[U].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let w=0,L=M.length;w<L;++w){const U=M[w],V=U.start,C=U.count;for(let P=V,F=V+C;P<F;P+=3)v(n[P+0],n[P+1],n[P+2])}const y=new N,b=new N,E=new N,T=new N;function S(w){E.fromArray(r,w*3),T.copy(E);const L=l[w];y.copy(L),y.sub(E.multiplyScalar(E.dot(L))).normalize(),b.crossVectors(T,L);const V=b.dot(u[w])<0?-1:1;c[w*4]=y.x,c[w*4+1]=y.y,c[w*4+2]=y.z,c[w*4+3]=V}for(let w=0,L=M.length;w<L;++w){const U=M[w],V=U.start,C=U.count;for(let P=V,F=V+C;P<F;P+=3)S(n[P+0]),S(n[P+1]),S(n[P+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new N,r=new N,o=new N,a=new N,c=new N,l=new N,u=new N,h=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)d[m++]=l[f++]}return new un(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Cn,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const If=new Ue,As=new va,Xa=new mi,Df=new N,Sr=new N,Mr=new N,br=new N,uu=new N,qa=new N,ja=new _e,Ya=new _e,$a=new _e,Pf=new N,Nf=new N,Lf=new N,Ka=new N,Za=new N;class Kt extends _t{constructor(e=new Cn,t=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){qa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(uu.fromBufferAttribute(h,e),o?qa.addScaledVector(uu,u):qa.addScaledVector(uu.sub(t),u))}t.add(qa)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xa.copy(n.boundingSphere),Xa.applyMatrix4(r),As.copy(e.ray).recast(e.near),!(Xa.containsPoint(As.origin)===!1&&(As.intersectSphere(Xa,Df)===null||As.origin.distanceToSquared(Df)>(e.far-e.near)**2))&&(If.copy(r).invert(),As.copy(e.ray).applyMatrix4(If),!(n.boundingBox!==null&&As.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),v=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let M=x,y=v;M<y;M+=3){const b=a.getX(M),E=a.getX(M+1),T=a.getX(M+2);i=Qa(this,p,e,n,l,u,h,b,E,T),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const x=a.getX(g),v=a.getX(g+1),M=a.getX(g+2);i=Qa(this,o,e,n,l,u,h,x,v,M),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),v=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let M=x,y=v;M<y;M+=3){const b=M,E=M+1,T=M+2;i=Qa(this,p,e,n,l,u,h,b,E,T),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const x=g,v=g+1,M=g+2;i=Qa(this,o,e,n,l,u,h,x,v,M),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function P0(s,e,t,n,i,r,o,a){let c;if(e.side===gn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Hi,a),c===null)return null;Za.copy(a),Za.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Za);return l<t.near||l>t.far?null:{distance:l,point:Za.clone(),object:s}}function Qa(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Sr),s.getVertexPosition(c,Mr),s.getVertexPosition(l,br);const u=P0(s,e,t,n,Sr,Mr,br,Ka);if(u){i&&(ja.fromBufferAttribute(i,a),Ya.fromBufferAttribute(i,c),$a.fromBufferAttribute(i,l),u.uv=Gn.getInterpolation(Ka,Sr,Mr,br,ja,Ya,$a,new _e)),r&&(ja.fromBufferAttribute(r,a),Ya.fromBufferAttribute(r,c),$a.fromBufferAttribute(r,l),u.uv1=Gn.getInterpolation(Ka,Sr,Mr,br,ja,Ya,$a,new _e),u.uv2=u.uv1),o&&(Pf.fromBufferAttribute(o,a),Nf.fromBufferAttribute(o,c),Lf.fromBufferAttribute(o,l),u.normal=Gn.getInterpolation(Ka,Sr,Mr,br,Pf,Nf,Lf,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new N,materialIndex:0};Gn.getNormal(Sr,Mr,br,h.normal),u.face=h}return u}class ya extends Cn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(h,2));function m(_,g,p,x,v,M,y,b,E,T,S){const w=M/E,L=y/T,U=M/2,V=y/2,C=b/2,P=E+1,F=T+1;let k=0,j=0;const B=new N;for(let X=0;X<F;X++){const R=X*L-V;for(let H=0;H<P;H++){const re=H*w-U;B[_]=re*x,B[g]=R*v,B[p]=C,l.push(B.x,B.y,B.z),B[_]=0,B[g]=0,B[p]=b>0?1:-1,u.push(B.x,B.y,B.z),h.push(H/E),h.push(1-X/T),k+=1}}for(let X=0;X<T;X++)for(let R=0;R<E;R++){const H=d+R+P*X,re=d+R+P*(X+1),ce=d+(R+1)+P*(X+1),J=d+(R+1)+P*X;c.push(H,re,J),c.push(re,ce,J),j+=6}a.addGroup(f,j,S),f+=j,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ya(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function no(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function rn(s){const e={};for(let t=0;t<s.length;t++){const n=no(s[t]);for(const i in n)e[i]=n[i]}return e}function N0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Qm(s){return s.getRenderTarget()===null?s.outputColorSpace:Qe.workingColorSpace}const Rh={clone:no,merge:rn};var L0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends Yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L0,this.fragmentShader=O0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=no(e.uniforms),this.uniformsGroups=N0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Jm extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class on extends Jm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=to*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ho*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return to*2*Math.atan(Math.tan(Ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ho*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Tr=-90,Er=1;class U0 extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new on(Tr,Er,e,t);i.layers=this.layers,this.add(i);const r=new on(Tr,Er,e,t);r.layers=this.layers,this.add(r);const o=new on(Tr,Er,e,t);o.layers=this.layers,this.add(o);const a=new on(Tr,Er,e,t);a.layers=this.layers,this.add(a);const c=new on(Tr,Er,e,t);c.layers=this.layers,this.add(c);const l=new on(Tr,Er,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===ki)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Lc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class eg extends Gt{constructor(e,t,n,i,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Kr,super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class F0 extends hs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Xo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===js?gt:Fn),this.texture=new eg(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ya(5,5,5),r=new ui({name:"CubemapFromEquirect",uniforms:no(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:Bi});r.uniforms.tEquirect.value=t;const o=new Kt(i,r),a=t.minFilter;return t.minFilter===Js&&(t.minFilter=dn),new U0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const hu=new N,k0=new N,B0=new He;class Ps{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=hu.subVectors(n,t).cross(k0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(hu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||B0.getNormalMatrix(e),i=this.coplanarPoint(hu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cs=new mi,Ja=new N;class Ih{constructor(e=new Ps,t=new Ps,n=new Ps,i=new Ps,r=new Ps,o=new Ps){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ki){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],d=i[7],f=i[8],m=i[9],_=i[10],g=i[11],p=i[12],x=i[13],v=i[14],M=i[15];if(n[0].setComponents(c-r,d-l,g-f,M-p).normalize(),n[1].setComponents(c+r,d+l,g+f,M+p).normalize(),n[2].setComponents(c+o,d+u,g+m,M+x).normalize(),n[3].setComponents(c-o,d-u,g-m,M-x).normalize(),n[4].setComponents(c-a,d-h,g-_,M-v).normalize(),t===ki)n[5].setComponents(c+a,d+h,g+_,M+v).normalize();else if(t===Lc)n[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(e){return Cs.center.set(0,0,0),Cs.radius=.7071067811865476,Cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ja.x=i.normal.x>0?e.max.x:e.min.x,Ja.y=i.normal.y>0?e.max.y:e.min.y,Ja.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ja)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tg(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function V0(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,d=l.usage,f=s.createBuffer();s.bindBuffer(u,f),s.bufferData(u,h,d),l.onUploadCallback();let m;if(h instanceof Float32Array)m=s.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)m=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=s.SHORT;else if(h instanceof Uint32Array)m=s.UNSIGNED_INT;else if(h instanceof Int32Array)m=s.INT;else if(h instanceof Int8Array)m=s.BYTE;else if(h instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,h){const d=u.array,f=u.updateRange;s.bindBuffer(h,l),f.count===-1?s.bufferSubData(h,0,d):(t?s.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,u)):h.version<l.version&&(r(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}class yl extends Cn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,d=t/c,f=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const x=p*d-o;for(let v=0;v<l;v++){const M=v*h-r;m.push(M,-x,0),_.push(0,0,1),g.push(v/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){const v=x+l*p,M=x+l*(p+1),y=x+1+l*(p+1),b=x+1+l*p;f.push(v,M,b),f.push(M,y,b)}this.setIndex(f),this.setAttribute("position",new Zt(m,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.width,e.height,e.widthSegments,e.heightSegments)}}var z0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,H0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,q0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,j0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Y0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,K0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Z0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Q0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,J0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ey=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ty=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ny=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ry=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ay=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,cy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ly=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uy=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,py=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,my="gl_FragColor = linearToOutputTexel( gl_FragColor );",gy=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,_y=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,My=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,by=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ty=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ey=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ay=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Cy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ry=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Iy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Py=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ny=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ly=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Oy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,ky=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,By=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal;
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Xy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,qy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$y=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ky=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ex=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,tx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,nx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ix=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ox=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ax=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ux=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,px=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_x=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Sx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ex=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,wx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ax=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Cx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ix=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Px=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Nx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,qx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$x=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qx=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,iS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pS=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_S=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:z0,alphahash_pars_fragment:G0,alphamap_fragment:H0,alphamap_pars_fragment:W0,alphatest_fragment:X0,alphatest_pars_fragment:q0,aomap_fragment:j0,aomap_pars_fragment:Y0,begin_vertex:$0,beginnormal_vertex:K0,bsdfs:Z0,iridescence_fragment:Q0,bumpmap_pars_fragment:J0,clipping_planes_fragment:ey,clipping_planes_pars_fragment:ty,clipping_planes_pars_vertex:ny,clipping_planes_vertex:iy,color_fragment:sy,color_pars_fragment:ry,color_pars_vertex:oy,color_vertex:ay,common:cy,cube_uv_reflection_fragment:ly,defaultnormal_vertex:uy,displacementmap_pars_vertex:hy,displacementmap_vertex:dy,emissivemap_fragment:fy,emissivemap_pars_fragment:py,colorspace_fragment:my,colorspace_pars_fragment:gy,envmap_fragment:_y,envmap_common_pars_fragment:vy,envmap_pars_fragment:yy,envmap_pars_vertex:xy,envmap_physical_pars_fragment:Py,envmap_vertex:Sy,fog_vertex:My,fog_pars_vertex:by,fog_fragment:Ty,fog_pars_fragment:Ey,gradientmap_pars_fragment:wy,lightmap_fragment:Ay,lightmap_pars_fragment:Cy,lights_lambert_fragment:Ry,lights_lambert_pars_fragment:Iy,lights_pars_begin:Dy,lights_toon_fragment:Ny,lights_toon_pars_fragment:Ly,lights_phong_fragment:Oy,lights_phong_pars_fragment:Uy,lights_physical_fragment:Fy,lights_physical_pars_fragment:ky,lights_fragment_begin:By,lights_fragment_maps:Vy,lights_fragment_end:zy,logdepthbuf_fragment:Gy,logdepthbuf_pars_fragment:Hy,logdepthbuf_pars_vertex:Wy,logdepthbuf_vertex:Xy,map_fragment:qy,map_pars_fragment:jy,map_particle_fragment:Yy,map_particle_pars_fragment:$y,metalnessmap_fragment:Ky,metalnessmap_pars_fragment:Zy,morphcolor_vertex:Qy,morphnormal_vertex:Jy,morphtarget_pars_vertex:ex,morphtarget_vertex:tx,normal_fragment_begin:nx,normal_fragment_maps:ix,normal_pars_fragment:sx,normal_pars_vertex:rx,normal_vertex:ox,normalmap_pars_fragment:ax,clearcoat_normal_fragment_begin:cx,clearcoat_normal_fragment_maps:lx,clearcoat_pars_fragment:ux,iridescence_pars_fragment:hx,opaque_fragment:dx,packing:fx,premultiplied_alpha_fragment:px,project_vertex:mx,dithering_fragment:gx,dithering_pars_fragment:_x,roughnessmap_fragment:vx,roughnessmap_pars_fragment:yx,shadowmap_pars_fragment:xx,shadowmap_pars_vertex:Sx,shadowmap_vertex:Mx,shadowmask_pars_fragment:bx,skinbase_vertex:Tx,skinning_pars_vertex:Ex,skinning_vertex:wx,skinnormal_vertex:Ax,specularmap_fragment:Cx,specularmap_pars_fragment:Rx,tonemapping_fragment:Ix,tonemapping_pars_fragment:Dx,transmission_fragment:Px,transmission_pars_fragment:Nx,uv_pars_fragment:Lx,uv_pars_vertex:Ox,uv_vertex:Ux,worldpos_vertex:Fx,background_vert:kx,background_frag:Bx,backgroundCube_vert:Vx,backgroundCube_frag:zx,cube_vert:Gx,cube_frag:Hx,depth_vert:Wx,depth_frag:Xx,distanceRGBA_vert:qx,distanceRGBA_frag:jx,equirect_vert:Yx,equirect_frag:$x,linedashed_vert:Kx,linedashed_frag:Zx,meshbasic_vert:Qx,meshbasic_frag:Jx,meshlambert_vert:eS,meshlambert_frag:tS,meshmatcap_vert:nS,meshmatcap_frag:iS,meshnormal_vert:sS,meshnormal_frag:rS,meshphong_vert:oS,meshphong_frag:aS,meshphysical_vert:cS,meshphysical_frag:lS,meshtoon_vert:uS,meshtoon_frag:hS,points_vert:dS,points_frag:fS,shadow_vert:pS,shadow_frag:mS,sprite_vert:gS,sprite_frag:_S},he={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},si={basic:{uniforms:rn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:rn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Te(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:rn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:rn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:rn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Te(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:rn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:rn([he.points,he.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:rn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:rn([he.common,he.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:rn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:rn([he.sprite,he.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:rn([he.common,he.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:rn([he.lights,he.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};si.physical={uniforms:rn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const ec={r:0,b:0,g:0};function vS(s,e,t,n,i,r,o){const a=new Te(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function m(g,p){let x=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,c):v&&v.isColor&&(_(v,1),x=!0);const M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===gl)?(u===void 0&&(u=new Kt(new ya(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:no(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(y,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(v.colorSpace)!==ut,(h!==v||d!==v.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Kt(new yl(2,2),new ui({name:"BackgroundMaterial",uniforms:no(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(v.colorSpace)!==ut,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function _(g,p){g.getRGB(ec,Qm(s)),n.buffers.color.setClear(ec.r,ec.g,ec.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),c=p,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,_(a,c)},render:m}}function yS(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=g(null);let l=c,u=!1;function h(C,P,F,k,j){let B=!1;if(o){const X=_(k,F,P);l!==X&&(l=X,f(l.object)),B=p(C,k,F,j),B&&x(C,k,F,j)}else{const X=P.wireframe===!0;(l.geometry!==k.id||l.program!==F.id||l.wireframe!==X)&&(l.geometry=k.id,l.program=F.id,l.wireframe=X,B=!0)}j!==null&&t.update(j,s.ELEMENT_ARRAY_BUFFER),(B||u)&&(u=!1,T(C,P,F,k),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(C){return n.isWebGL2?s.bindVertexArray(C):r.bindVertexArrayOES(C)}function m(C){return n.isWebGL2?s.deleteVertexArray(C):r.deleteVertexArrayOES(C)}function _(C,P,F){const k=F.wireframe===!0;let j=a[C.id];j===void 0&&(j={},a[C.id]=j);let B=j[P.id];B===void 0&&(B={},j[P.id]=B);let X=B[k];return X===void 0&&(X=g(d()),B[k]=X),X}function g(C){const P=[],F=[],k=[];for(let j=0;j<i;j++)P[j]=0,F[j]=0,k[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:k,object:C,attributes:{},index:null}}function p(C,P,F,k){const j=l.attributes,B=P.attributes;let X=0;const R=F.getAttributes();for(const H in R)if(R[H].location>=0){const ce=j[H];let J=B[H];if(J===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(J=C.instanceColor)),ce===void 0||ce.attribute!==J||J&&ce.data!==J.data)return!0;X++}return l.attributesNum!==X||l.index!==k}function x(C,P,F,k){const j={},B=P.attributes;let X=0;const R=F.getAttributes();for(const H in R)if(R[H].location>=0){let ce=B[H];ce===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(ce=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(ce=C.instanceColor));const J={};J.attribute=ce,ce&&ce.data&&(J.data=ce.data),j[H]=J,X++}l.attributes=j,l.attributesNum=X,l.index=k}function v(){const C=l.newAttributes;for(let P=0,F=C.length;P<F;P++)C[P]=0}function M(C){y(C,0)}function y(C,P){const F=l.newAttributes,k=l.enabledAttributes,j=l.attributeDivisors;F[C]=1,k[C]===0&&(s.enableVertexAttribArray(C),k[C]=1),j[C]!==P&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,P),j[C]=P)}function b(){const C=l.newAttributes,P=l.enabledAttributes;for(let F=0,k=P.length;F<k;F++)P[F]!==C[F]&&(s.disableVertexAttribArray(F),P[F]=0)}function E(C,P,F,k,j,B,X){X===!0?s.vertexAttribIPointer(C,P,F,j,B):s.vertexAttribPointer(C,P,F,k,j,B)}function T(C,P,F,k){if(n.isWebGL2===!1&&(C.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const j=k.attributes,B=F.getAttributes(),X=P.defaultAttributeValues;for(const R in B){const H=B[R];if(H.location>=0){let re=j[R];if(re===void 0&&(R==="instanceMatrix"&&C.instanceMatrix&&(re=C.instanceMatrix),R==="instanceColor"&&C.instanceColor&&(re=C.instanceColor)),re!==void 0){const ce=re.normalized,J=re.itemSize,de=t.get(re);if(de===void 0)continue;const Se=de.buffer,Q=de.type,Ge=de.bytesPerElement,vt=n.isWebGL2===!0&&(Q===s.INT||Q===s.UNSIGNED_INT||re.gpuType===Lm);if(re.isInterleavedBufferAttribute){const De=re.data,z=De.stride,Ut=re.offset;if(De.isInstancedInterleavedBuffer){for(let Ae=0;Ae<H.locationSize;Ae++)y(H.location+Ae,De.meshPerAttribute);C.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let Ae=0;Ae<H.locationSize;Ae++)M(H.location+Ae);s.bindBuffer(s.ARRAY_BUFFER,Se);for(let Ae=0;Ae<H.locationSize;Ae++)E(H.location+Ae,J/H.locationSize,Q,ce,z*Ge,(Ut+J/H.locationSize*Ae)*Ge,vt)}else{if(re.isInstancedBufferAttribute){for(let De=0;De<H.locationSize;De++)y(H.location+De,re.meshPerAttribute);C.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let De=0;De<H.locationSize;De++)M(H.location+De);s.bindBuffer(s.ARRAY_BUFFER,Se);for(let De=0;De<H.locationSize;De++)E(H.location+De,J/H.locationSize,Q,ce,J*Ge,J/H.locationSize*De*Ge,vt)}}else if(X!==void 0){const ce=X[R];if(ce!==void 0)switch(ce.length){case 2:s.vertexAttrib2fv(H.location,ce);break;case 3:s.vertexAttrib3fv(H.location,ce);break;case 4:s.vertexAttrib4fv(H.location,ce);break;default:s.vertexAttrib1fv(H.location,ce)}}}}b()}function S(){U();for(const C in a){const P=a[C];for(const F in P){const k=P[F];for(const j in k)m(k[j].object),delete k[j];delete P[F]}delete a[C]}}function w(C){if(a[C.id]===void 0)return;const P=a[C.id];for(const F in P){const k=P[F];for(const j in k)m(k[j].object),delete k[j];delete P[F]}delete a[C.id]}function L(C){for(const P in a){const F=a[P];if(F[C.id]===void 0)continue;const k=F[C.id];for(const j in k)m(k[j].object),delete k[j];delete F[C.id]}}function U(){V(),u=!0,l!==c&&(l=c,f(l.object))}function V(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:U,resetDefaultState:V,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:M,disableUnusedAttributes:b}}function xS(s,e,t,n){const i=n.isWebGL2;let r;function o(l){r=l}function a(l,u){s.drawArrays(r,l,u),t.update(u,r,1)}function c(l,u,h){if(h===0)return;let d,f;if(i)d=s,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,l,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=c}function SS(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,M=o||e.has("OES_texture_float"),y=v&&M,b=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:y,maxSamples:b}}function MS(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Ps,a=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=s.get(h);if(!i||m===null||m.length===0||r&&!g)r?u(null):l();else{const x=r?0:n,v=x*4;let M=p.clippingState||null;c.value=M,M=u(m,d,v,f);for(let y=0;y!==v;++y)M[y]=t[y];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,M=f;v!==_;++v,M+=4)o.copy(h[v]).applyMatrix4(x,a),o.normal.toArray(g,M),g[M+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function bS(s){let e=new WeakMap;function t(o,a){return a===zu?o.mapping=Kr:a===Gu&&(o.mapping=Zr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===zu||a===Gu)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new F0(c.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class _o extends Jm{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Vr=4,Of=[.125,.215,.35,.446,.526,.582],Os=20,du=new _o,Uf=new Te;let fu=null;const Ns=(1+Math.sqrt(5))/2,wr=1/Ns,Ff=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Ns,wr),new N(0,Ns,-wr),new N(wr,0,Ns),new N(-wr,0,Ns),new N(Ns,wr,0),new N(-Ns,wr,0)];class kf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){fu=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fu),e.scissorTest=!1,tc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Kr||e.mapping===Zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fu=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Qr,format:En,colorSpace:Wt,depthBuffer:!1},i=Bf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bf(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=TS(r)),this._blurMaterial=ES(r,e,t)}return i}_compileMaterial(e){const t=new Kt(this._lodPlanes[0],e);this._renderer.compile(t,du)}_sceneToCubeUV(e,t,n,i){const a=new on(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Uf),u.toneMapping=cs,u.autoClear=!1;const f=new li({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),m=new Kt(new ya,f);let _=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,_=!0):(f.color.copy(Uf),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):x===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const v=this._cubeSize;tc(i,x*v,p>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Kr||e.mapping===Zr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=zf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vf());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Kt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;tc(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,du)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ff[(i-1)%Ff.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Kt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Os-1),_=r/m,g=isFinite(r)?1+Math.floor(u*_):Os;g>Os&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Os}`);const p=[];let x=0;for(let E=0;E<Os;++E){const T=E/_,S=Math.exp(-T*T/2);p.push(S),E===0?x+=S:E<g&&(x+=2*S)}for(let E=0;E<p.length;E++)p[E]=p[E]/x;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=m,d.mipInt.value=v-n;const M=this._sizeLods[i],y=3*M*(i>v-Vr?i-v+Vr:0),b=4*(this._cubeSize-M);tc(t,y,b,3*M,2*M),c.setRenderTarget(t),c.render(h,du)}}function TS(s){const e=[],t=[],n=[];let i=s;const r=s-Vr+1+Of.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Vr?c=Of[o-s+Vr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,_=3,g=2,p=1,x=new Float32Array(_*m*f),v=new Float32Array(g*m*f),M=new Float32Array(p*m*f);for(let b=0;b<f;b++){const E=b%3*2/3-1,T=b>2?0:-1,S=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];x.set(S,_*m*b),v.set(d,g*m*b);const w=[b,b,b,b,b,b];M.set(w,p*m*b)}const y=new Cn;y.setAttribute("position",new un(x,_)),y.setAttribute("uv",new un(v,g)),y.setAttribute("faceIndex",new un(M,p)),e.push(y),i>Vr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Bf(s,e,t){const n=new hs(s,e,t);return n.texture.mapping=gl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tc(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function ES(s,e,t){const n=new Float32Array(Os),i=new N(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Vf(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function zf(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Dh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wS(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===zu||c===Gu,u=c===Kr||c===Zr;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new kf(s)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new kf(s));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function AS(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function CS(s,e,t,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const _=d.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)e.remove(_[g])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const m in d)e.update(d[m],s.ARRAY_BUFFER);const f=h.morphAttributes;for(const m in f){const _=f[m];for(let g=0,p=_.length;g<p;g++)e.update(_[g],s.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,m=h.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let v=0,M=x.length;v<M;v+=3){const y=x[v+0],b=x[v+1],E=x[v+2];d.push(y,b,b,E,E,y)}}else if(m!==void 0){const x=m.array;_=m.version;for(let v=0,M=x.length/3-1;v<M;v+=3){const y=v+0,b=v+1,E=v+2;d.push(y,b,b,E,E,y)}}else return;const g=new(Xm(d)?Zm:Km)(d,1);g.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,g)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function RS(s,e,t,n){const i=n.isWebGL2;let r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,f){s.drawElements(r,f,a,d*c),t.update(f,r,1)}function h(d,f,m){if(m===0)return;let _,g;if(i)_=s,g="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[g](r,f,a,d*c,m),t.update(f,r,m)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function IS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function DS(s,e){return s[0]-e[0]}function PS(s,e){return Math.abs(e[1])-Math.abs(s[1])}function NS(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new ct,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=f!==void 0?f.length:0;let _=r.get(u);if(_===void 0||_.count!==m){let C=function(){U.dispose(),r.delete(u),u.removeEventListener("dispose",C)};_!==void 0&&_.texture.dispose();const x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],E=u.morphAttributes.color||[];let T=0;x===!0&&(T=1),v===!0&&(T=2),M===!0&&(T=3);let S=u.attributes.position.count*T,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const L=new Float32Array(S*w*4*m),U=new Ym(L,S,w,m);U.type=ci,U.needsUpdate=!0;const V=T*4;for(let P=0;P<m;P++){const F=y[P],k=b[P],j=E[P],B=S*w*4*P;for(let X=0;X<F.count;X++){const R=X*V;x===!0&&(o.fromBufferAttribute(F,X),L[B+R+0]=o.x,L[B+R+1]=o.y,L[B+R+2]=o.z,L[B+R+3]=0),v===!0&&(o.fromBufferAttribute(k,X),L[B+R+4]=o.x,L[B+R+5]=o.y,L[B+R+6]=o.z,L[B+R+7]=0),M===!0&&(o.fromBufferAttribute(j,X),L[B+R+8]=o.x,L[B+R+9]=o.y,L[B+R+10]=o.z,L[B+R+11]=j.itemSize===4?o.w:1)}}_={count:m,texture:U,size:new _e(S,w)},r.set(u,_),u.addEventListener("dispose",C)}let g=0;for(let x=0;x<d.length;x++)g+=d[x];const p=u.morphTargetsRelative?1:1-g;h.getUniforms().setValue(s,"morphTargetBaseInfluence",p),h.getUniforms().setValue(s,"morphTargetInfluences",d),h.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const f=d===void 0?0:d.length;let m=n[u.id];if(m===void 0||m.length!==f){m=[];for(let v=0;v<f;v++)m[v]=[v,0];n[u.id]=m}for(let v=0;v<f;v++){const M=m[v];M[0]=v,M[1]=d[v]}m.sort(PS);for(let v=0;v<8;v++)v<f&&m[v][1]?(a[v][0]=m[v][0],a[v][1]=m[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(DS);const _=u.morphAttributes.position,g=u.morphAttributes.normal;let p=0;for(let v=0;v<8;v++){const M=a[v],y=M[0],b=M[1];y!==Number.MAX_SAFE_INTEGER&&b?(_&&u.getAttribute("morphTarget"+v)!==_[y]&&u.setAttribute("morphTarget"+v,_[y]),g&&u.getAttribute("morphNormal"+v)!==g[y]&&u.setAttribute("morphNormal"+v,g[y]),i[v]=b,p+=b):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),g&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const x=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(s,"morphTargetBaseInfluence",x),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function LS(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const ng=new Gt,ig=new Ym,sg=new S0,rg=new eg,Gf=[],Hf=[],Wf=new Float32Array(16),Xf=new Float32Array(9),qf=new Float32Array(4);function vo(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Gf[i];if(r===void 0&&(r=new Float32Array(i),Gf[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Nt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Lt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function xl(s,e){let t=Hf[e];t===void 0&&(t=new Int32Array(e),Hf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function OS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function US(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;s.uniform2fv(this.addr,e),Lt(t,e)}}function FS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;s.uniform3fv(this.addr,e),Lt(t,e)}}function kS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;s.uniform4fv(this.addr,e),Lt(t,e)}}function BS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Nt(t,n))return;qf.set(n),s.uniformMatrix2fv(this.addr,!1,qf),Lt(t,n)}}function VS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Nt(t,n))return;Xf.set(n),s.uniformMatrix3fv(this.addr,!1,Xf),Lt(t,n)}}function zS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Nt(t,n))return;Wf.set(n),s.uniformMatrix4fv(this.addr,!1,Wf),Lt(t,n)}}function GS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function HS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;s.uniform2iv(this.addr,e),Lt(t,e)}}function WS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;s.uniform3iv(this.addr,e),Lt(t,e)}}function XS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;s.uniform4iv(this.addr,e),Lt(t,e)}}function qS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function jS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;s.uniform2uiv(this.addr,e),Lt(t,e)}}function YS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;s.uniform3uiv(this.addr,e),Lt(t,e)}}function $S(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;s.uniform4uiv(this.addr,e),Lt(t,e)}}function KS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||ng,i)}function ZS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||sg,i)}function QS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||rg,i)}function JS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ig,i)}function eM(s){switch(s){case 5126:return OS;case 35664:return US;case 35665:return FS;case 35666:return kS;case 35674:return BS;case 35675:return VS;case 35676:return zS;case 5124:case 35670:return GS;case 35667:case 35671:return HS;case 35668:case 35672:return WS;case 35669:case 35673:return XS;case 5125:return qS;case 36294:return jS;case 36295:return YS;case 36296:return $S;case 35678:case 36198:case 36298:case 36306:case 35682:return KS;case 35679:case 36299:case 36307:return ZS;case 35680:case 36300:case 36308:case 36293:return QS;case 36289:case 36303:case 36311:case 36292:return JS}}function tM(s,e){s.uniform1fv(this.addr,e)}function nM(s,e){const t=vo(e,this.size,2);s.uniform2fv(this.addr,t)}function iM(s,e){const t=vo(e,this.size,3);s.uniform3fv(this.addr,t)}function sM(s,e){const t=vo(e,this.size,4);s.uniform4fv(this.addr,t)}function rM(s,e){const t=vo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function oM(s,e){const t=vo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function aM(s,e){const t=vo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function cM(s,e){s.uniform1iv(this.addr,e)}function lM(s,e){s.uniform2iv(this.addr,e)}function uM(s,e){s.uniform3iv(this.addr,e)}function hM(s,e){s.uniform4iv(this.addr,e)}function dM(s,e){s.uniform1uiv(this.addr,e)}function fM(s,e){s.uniform2uiv(this.addr,e)}function pM(s,e){s.uniform3uiv(this.addr,e)}function mM(s,e){s.uniform4uiv(this.addr,e)}function gM(s,e,t){const n=this.cache,i=e.length,r=xl(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||ng,r[o])}function _M(s,e,t){const n=this.cache,i=e.length,r=xl(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||sg,r[o])}function vM(s,e,t){const n=this.cache,i=e.length,r=xl(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||rg,r[o])}function yM(s,e,t){const n=this.cache,i=e.length,r=xl(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||ig,r[o])}function xM(s){switch(s){case 5126:return tM;case 35664:return nM;case 35665:return iM;case 35666:return sM;case 35674:return rM;case 35675:return oM;case 35676:return aM;case 5124:case 35670:return cM;case 35667:case 35671:return lM;case 35668:case 35672:return uM;case 35669:case 35673:return hM;case 5125:return dM;case 36294:return fM;case 36295:return pM;case 36296:return mM;case 35678:case 36198:case 36298:case 36306:case 35682:return gM;case 35679:case 36299:case 36307:return _M;case 35680:case 36300:case 36308:case 36293:return vM;case 36289:case 36303:case 36311:case 36292:return yM}}class SM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=eM(t.type)}}class MM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=xM(t.type)}}class bM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const pu=/(\w+)(\])?(\[|\.)?/g;function jf(s,e){s.seq.push(e),s.map[e.id]=e}function TM(s,e,t){const n=s.name,i=n.length;for(pu.lastIndex=0;;){const r=pu.exec(n),o=pu.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){jf(t,l===void 0?new SM(a,s,e):new MM(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new bM(a),jf(t,h)),t=h}}}class Tc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);TM(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Yf(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let EM=0;function wM(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function AM(s){const e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(s);let n;switch(e===t?n="":e===Nc&&t===Pc?n="LinearDisplayP3ToLinearSRGB":e===Pc&&t===Nc&&(n="LinearSRGBToLinearDisplayP3"),s){case Wt:case _l:return[n,"LinearTransferOETF"];case gt:case Eh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function $f(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+wM(s.getShaderSource(e),o)}else return i}function CM(s,e){const t=AM(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function RM(s,e){let t;switch(e){case Cm:t="Linear";break;case Rm:t="Reinhard";break;case Im:t="OptimizedCineon";break;case Dm:t="ACESFilmic";break;case Pv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function IM(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Bo).join(`
`)}function DM(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function PM(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Bo(s){return s!==""}function Kf(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yu(s){return s.replace(NM,OM)}const LM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function OM(s,e){let t=Be[e];if(t===void 0){const n=LM.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Yu(t)}const UM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qf(s){return s.replace(UM,FM)}function FM(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Jf(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Em?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===xh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ni&&(e="SHADOWMAP_TYPE_VSM"),e}function BM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Kr:case Zr:e="ENVMAP_TYPE_CUBE";break;case gl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function VM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Zr:e="ENVMAP_MODE_REFRACTION";break}return e}function zM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Sh:e="ENVMAP_BLENDING_MULTIPLY";break;case Iv:e="ENVMAP_BLENDING_MIX";break;case Dv:e="ENVMAP_BLENDING_ADD";break}return e}function GM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function HM(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=kM(t),l=BM(t),u=VM(t),h=zM(t),d=GM(t),f=t.isWebGL2?"":IM(t),m=DM(r),_=i.createProgram();let g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Bo).join(`
`),g.length>0&&(g+=`
`),p=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Bo).join(`
`),p.length>0&&(p+=`
`)):(g=[Jf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),p=[f,Jf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cs?"#define TONE_MAPPING":"",t.toneMapping!==cs?Be.tonemapping_pars_fragment:"",t.toneMapping!==cs?RM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,CM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bo).join(`
`)),o=Yu(o),o=Kf(o,t),o=Zf(o,t),a=Yu(a),a=Kf(a,t),a=Zf(a,t),o=Qf(o),a=Qf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===_f?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_f?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=x+g+o,M=x+p+a,y=Yf(i,i.VERTEX_SHADER,v),b=Yf(i,i.FRAGMENT_SHADER,M);if(i.attachShader(_,y),i.attachShader(_,b),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),s.debug.checkShaderErrors){const S=i.getProgramInfoLog(_).trim(),w=i.getShaderInfoLog(y).trim(),L=i.getShaderInfoLog(b).trim();let U=!0,V=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(U=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,y,b);else{const C=$f(i,y,"vertex"),P=$f(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+C+`
`+P)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(w===""||L==="")&&(V=!1);V&&(this.diagnostics={runnable:U,programLog:S,vertexShader:{log:w,prefix:g},fragmentShader:{log:L,prefix:p}})}i.deleteShader(y),i.deleteShader(b);let E;this.getUniforms=function(){return E===void 0&&(E=new Tc(i,_)),E};let T;return this.getAttributes=function(){return T===void 0&&(T=PM(i,_)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=EM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=b,this}let WM=0;class XM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new qM(e),t.set(e,n)),n}}class qM{constructor(e){this.id=WM++,this.code=e,this.usedTimes=0}}function jM(s,e,t,n,i,r,o){const a=new Ch,c=new XM,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function g(S,w,L,U,V){const C=U.fog,P=V.geometry,F=S.isMeshStandardMaterial?U.environment:null,k=(S.isMeshStandardMaterial?t:e).get(S.envMap||F),j=k&&k.mapping===gl?k.image.height:null,B=m[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const X=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,R=X!==void 0?X.length:0;let H=0;P.morphAttributes.position!==void 0&&(H=1),P.morphAttributes.normal!==void 0&&(H=2),P.morphAttributes.color!==void 0&&(H=3);let re,ce,J,de;if(B){const ft=si[B];re=ft.vertexShader,ce=ft.fragmentShader}else re=S.vertexShader,ce=S.fragmentShader,c.update(S),J=c.getVertexShaderID(S),de=c.getFragmentShaderID(S);const Se=s.getRenderTarget(),Q=V.isInstancedMesh===!0,Ge=!!S.map,vt=!!S.matcap,De=!!k,z=!!S.aoMap,Ut=!!S.lightMap,Ae=!!S.bumpMap,K=!!S.normalMap,te=!!S.displacementMap,Fe=!!S.emissiveMap,xe=!!S.metalnessMap,pe=!!S.roughnessMap,Ee=S.anisotropy>0,Je=S.clearcoat>0,dt=S.iridescence>0,D=S.sheen>0,A=S.transmission>0,q=Ee&&!!S.anisotropyMap,ie=Je&&!!S.clearcoatMap,ne=Je&&!!S.clearcoatNormalMap,oe=Je&&!!S.clearcoatRoughnessMap,Me=dt&&!!S.iridescenceMap,ue=dt&&!!S.iridescenceThicknessMap,me=D&&!!S.sheenColorMap,Pe=D&&!!S.sheenRoughnessMap,Ze=!!S.specularMap,se=!!S.specularColorMap,it=!!S.specularIntensityMap,ke=A&&!!S.transmissionMap,Ne=A&&!!S.thicknessMap,Ce=!!S.gradientMap,O=!!S.alphaMap,le=S.alphaTest>0,ae=!!S.alphaHash,ge=!!S.extensions,fe=!!P.attributes.uv1,ee=!!P.attributes.uv2,be=!!P.attributes.uv3;let Ve=cs;return S.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(Ve=s.toneMapping),{isWebGL2:u,shaderID:B,shaderType:S.type,shaderName:S.name,vertexShader:re,fragmentShader:ce,defines:S.defines,customVertexShaderID:J,customFragmentShaderID:de,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,instancing:Q,instancingColor:Q&&V.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Se===null?s.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Wt,map:Ge,matcap:vt,envMap:De,envMapMode:De&&k.mapping,envMapCubeUVHeight:j,aoMap:z,lightMap:Ut,bumpMap:Ae,normalMap:K,displacementMap:d&&te,emissiveMap:Fe,normalMapObjectSpace:K&&S.normalMapType===jv,normalMapTangentSpace:K&&S.normalMapType===Th,metalnessMap:xe,roughnessMap:pe,anisotropy:Ee,anisotropyMap:q,clearcoat:Je,clearcoatMap:ie,clearcoatNormalMap:ne,clearcoatRoughnessMap:oe,iridescence:dt,iridescenceMap:Me,iridescenceThicknessMap:ue,sheen:D,sheenColorMap:me,sheenRoughnessMap:Pe,specularMap:Ze,specularColorMap:se,specularIntensityMap:it,transmission:A,transmissionMap:ke,thicknessMap:Ne,gradientMap:Ce,opaque:S.transparent===!1&&S.blending===Hr,alphaMap:O,alphaTest:le,alphaHash:ae,combine:S.combine,mapUv:Ge&&_(S.map.channel),aoMapUv:z&&_(S.aoMap.channel),lightMapUv:Ut&&_(S.lightMap.channel),bumpMapUv:Ae&&_(S.bumpMap.channel),normalMapUv:K&&_(S.normalMap.channel),displacementMapUv:te&&_(S.displacementMap.channel),emissiveMapUv:Fe&&_(S.emissiveMap.channel),metalnessMapUv:xe&&_(S.metalnessMap.channel),roughnessMapUv:pe&&_(S.roughnessMap.channel),anisotropyMapUv:q&&_(S.anisotropyMap.channel),clearcoatMapUv:ie&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:me&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&_(S.sheenRoughnessMap.channel),specularMapUv:Ze&&_(S.specularMap.channel),specularColorMapUv:se&&_(S.specularColorMap.channel),specularIntensityMapUv:it&&_(S.specularIntensityMap.channel),transmissionMapUv:ke&&_(S.transmissionMap.channel),thicknessMapUv:Ne&&_(S.thicknessMap.channel),alphaMapUv:O&&_(S.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(K||Ee),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUv1s:fe,vertexUv2s:ee,vertexUv3s:be,pointsUvs:V.isPoints===!0&&!!P.attributes.uv&&(Ge||O),fog:!!C,useFog:S.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:V.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:R,morphTextureStride:H,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ve,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Ge&&S.map.isVideoTexture===!0&&Qe.getTransfer(S.map.colorSpace)===ut,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Tn,flipSided:S.side===gn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ge&&S.extensions.derivatives===!0,extensionFragDepth:ge&&S.extensions.fragDepth===!0,extensionDrawBuffers:ge&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)w.push(L),w.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(x(w,S),v(w,S),w.push(s.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function x(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function v(S,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function M(S){const w=m[S.type];let L;if(w){const U=si[w];L=Rh.clone(U.uniforms)}else L=S.uniforms;return L}function y(S,w){let L;for(let U=0,V=l.length;U<V;U++){const C=l[U];if(C.cacheKey===w){L=C,++L.usedTimes;break}}return L===void 0&&(L=new HM(s,w,S,r),l.push(L)),L}function b(S){if(--S.usedTimes===0){const w=l.indexOf(S);l[w]=l[l.length-1],l.pop(),S.destroy()}}function E(S){c.remove(S)}function T(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:M,acquireProgram:y,releaseProgram:b,releaseShaderCache:E,programs:l,dispose:T}}function YM(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function $M(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ep(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function tp(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,m,_,g){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},s[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=g),e++,p}function a(h,d,f,m,_,g){const p=o(h,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(h,d,f,m,_,g){const p=o(h,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||$M),n.length>1&&n.sort(d||ep),i.length>1&&i.sort(d||ep)}function u(){for(let h=e,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function KM(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new tp,s.set(n,[o])):i>=r.length?(o=new tp,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function ZM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Te};break;case"SpotLight":t={position:new N,direction:new N,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new N,halfWidth:new N,halfHeight:new N};break}return s[e.id]=t,t}}}function QM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let JM=0;function eb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function tb(s,e){const t=new ZM,n=QM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new N);const r=new N,o=new Ue,a=new Ue;function c(u,h){let d=0,f=0,m=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let _=0,g=0,p=0,x=0,v=0,M=0,y=0,b=0,E=0,T=0,S=0;u.sort(eb);const w=h===!0?Math.PI:1;for(let U=0,V=u.length;U<V;U++){const C=u[U],P=C.color,F=C.intensity,k=C.distance,j=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=P.r*F*w,f+=P.g*F*w,m+=P.b*F*w;else if(C.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(C.sh.coefficients[B],F);S++}else if(C.isDirectionalLight){const B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity*w),C.castShadow){const X=C.shadow,R=n.get(C);R.shadowBias=X.bias,R.shadowNormalBias=X.normalBias,R.shadowRadius=X.radius,R.shadowMapSize=X.mapSize,i.directionalShadow[_]=R,i.directionalShadowMap[_]=j,i.directionalShadowMatrix[_]=C.shadow.matrix,M++}i.directional[_]=B,_++}else if(C.isSpotLight){const B=t.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(P).multiplyScalar(F*w),B.distance=k,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,i.spot[p]=B;const X=C.shadow;if(C.map&&(i.spotLightMap[E]=C.map,E++,X.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[p]=X.matrix,C.castShadow){const R=n.get(C);R.shadowBias=X.bias,R.shadowNormalBias=X.normalBias,R.shadowRadius=X.radius,R.shadowMapSize=X.mapSize,i.spotShadow[p]=R,i.spotShadowMap[p]=j,b++}p++}else if(C.isRectAreaLight){const B=t.get(C);B.color.copy(P).multiplyScalar(F),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),i.rectArea[x]=B,x++}else if(C.isPointLight){const B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity*w),B.distance=C.distance,B.decay=C.decay,C.castShadow){const X=C.shadow,R=n.get(C);R.shadowBias=X.bias,R.shadowNormalBias=X.normalBias,R.shadowRadius=X.radius,R.shadowMapSize=X.mapSize,R.shadowCameraNear=X.camera.near,R.shadowCameraFar=X.camera.far,i.pointShadow[g]=R,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=C.shadow.matrix,y++}i.point[g]=B,g++}else if(C.isHemisphereLight){const B=t.get(C);B.skyColor.copy(C.color).multiplyScalar(F*w),B.groundColor.copy(C.groundColor).multiplyScalar(F*w),i.hemi[v]=B,v++}}x>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=m;const L=i.hash;(L.directionalLength!==_||L.pointLength!==g||L.spotLength!==p||L.rectAreaLength!==x||L.hemiLength!==v||L.numDirectionalShadows!==M||L.numPointShadows!==y||L.numSpotShadows!==b||L.numSpotMaps!==E||L.numLightProbes!==S)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=x,i.point.length=g,i.hemi.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=b+E-T,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=S,L.directionalLength=_,L.pointLength=g,L.spotLength=p,L.rectAreaLength=x,L.hemiLength=v,L.numDirectionalShadows=M,L.numPointShadows=y,L.numSpotShadows=b,L.numSpotMaps=E,L.numLightProbes=S,i.version=JM++)}function l(u,h){let d=0,f=0,m=0,_=0,g=0;const p=h.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const M=u[x];if(M.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),d++}else if(M.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),m++}else if(M.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const y=i.hemi[g];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(p),g++}}}return{setup:c,setupView:l,state:i}}function np(s,e){const t=new tb(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function nb(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new np(s,e),t.set(r,[c])):o>=a.length?(c=new np(s,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class ib extends Yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sb extends Yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ob=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ab(s,e,t){let n=new Ih;const i=new _e,r=new _e,o=new ct,a=new ib({depthPacking:qv}),c=new sb,l={},u=t.maxTextureSize,h={[Hi]:gn,[gn]:Hi,[Tn]:Tn},d=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:rb,fragmentShader:ob}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Cn;m.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Kt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Em;let p=this.type;this.render=function(y,b,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;const T=s.getRenderTarget(),S=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Bi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const U=p!==Ni&&this.type===Ni,V=p===Ni&&this.type!==Ni;for(let C=0,P=y.length;C<P;C++){const F=y[C],k=F.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const j=k.getFrameExtents();if(i.multiply(j),r.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/j.x),i.x=r.x*j.x,k.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/j.y),i.y=r.y*j.y,k.mapSize.y=r.y)),k.map===null||U===!0||V===!0){const X=this.type!==Ni?{minFilter:Dt,magFilter:Dt}:{};k.map!==null&&k.map.dispose(),k.map=new hs(i.x,i.y,X),k.map.texture.name=F.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const B=k.getViewportCount();for(let X=0;X<B;X++){const R=k.getViewport(X);o.set(r.x*R.x,r.y*R.y,r.x*R.z,r.y*R.w),L.viewport(o),k.updateMatrices(F,X),n=k.getFrustum(),M(b,E,k.camera,F,this.type)}k.isPointLightShadow!==!0&&this.type===Ni&&x(k,E),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(T,S,w)};function x(y,b){const E=e.update(_);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new hs(i.x,i.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(b,null,E,d,_,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(b,null,E,f,_,null)}function v(y,b,E,T){let S=null;const w=E.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(w!==void 0)S=w;else if(S=E.isPointLight===!0?c:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const L=S.uuid,U=b.uuid;let V=l[L];V===void 0&&(V={},l[L]=V);let C=V[U];C===void 0&&(C=S.clone(),V[U]=C),S=C}if(S.visible=b.visible,S.wireframe=b.wireframe,T===Ni?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:h[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,E.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const L=s.properties.get(S);L.light=E}return S}function M(y,b,E,T,S){if(y.visible===!1)return;if(y.layers.test(b.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&S===Ni)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,y.matrixWorld);const U=e.update(y),V=y.material;if(Array.isArray(V)){const C=U.groups;for(let P=0,F=C.length;P<F;P++){const k=C[P],j=V[k.materialIndex];if(j&&j.visible){const B=v(y,j,T,S);s.renderBufferDirect(E,null,U,B,y,k)}}}else if(V.visible){const C=v(y,V,T,S);s.renderBufferDirect(E,null,U,C,y,null)}}const L=y.children;for(let U=0,V=L.length;U<V;U++)M(L[U],b,E,T,S)}}function cb(s,e,t){const n=t.isWebGL2;function i(){let O=!1;const le=new ct;let ae=null;const ge=new ct(0,0,0,0);return{setMask:function(fe){ae!==fe&&!O&&(s.colorMask(fe,fe,fe,fe),ae=fe)},setLocked:function(fe){O=fe},setClear:function(fe,ee,be,Ve,en){en===!0&&(fe*=Ve,ee*=Ve,be*=Ve),le.set(fe,ee,be,Ve),ge.equals(le)===!1&&(s.clearColor(fe,ee,be,Ve),ge.copy(le))},reset:function(){O=!1,ae=null,ge.set(-1,0,0,0)}}}function r(){let O=!1,le=null,ae=null,ge=null;return{setTest:function(fe){fe?Se(s.DEPTH_TEST):Q(s.DEPTH_TEST)},setMask:function(fe){le!==fe&&!O&&(s.depthMask(fe),le=fe)},setFunc:function(fe){if(ae!==fe){switch(fe){case bv:s.depthFunc(s.NEVER);break;case Tv:s.depthFunc(s.ALWAYS);break;case Ev:s.depthFunc(s.LESS);break;case Vu:s.depthFunc(s.LEQUAL);break;case wv:s.depthFunc(s.EQUAL);break;case Av:s.depthFunc(s.GEQUAL);break;case Cv:s.depthFunc(s.GREATER);break;case Rv:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ae=fe}},setLocked:function(fe){O=fe},setClear:function(fe){ge!==fe&&(s.clearDepth(fe),ge=fe)},reset:function(){O=!1,le=null,ae=null,ge=null}}}function o(){let O=!1,le=null,ae=null,ge=null,fe=null,ee=null,be=null,Ve=null,en=null;return{setTest:function(ft){O||(ft?Se(s.STENCIL_TEST):Q(s.STENCIL_TEST))},setMask:function(ft){le!==ft&&!O&&(s.stencilMask(ft),le=ft)},setFunc:function(ft,ni,tn){(ae!==ft||ge!==ni||fe!==tn)&&(s.stencilFunc(ft,ni,tn),ae=ft,ge=ni,fe=tn)},setOp:function(ft,ni,tn){(ee!==ft||be!==ni||Ve!==tn)&&(s.stencilOp(ft,ni,tn),ee=ft,be=ni,Ve=tn)},setLocked:function(ft){O=ft},setClear:function(ft){en!==ft&&(s.clearStencil(ft),en=ft)},reset:function(){O=!1,le=null,ae=null,ge=null,fe=null,ee=null,be=null,Ve=null,en=null}}}const a=new i,c=new r,l=new o,u=new WeakMap,h=new WeakMap;let d={},f={},m=new WeakMap,_=[],g=null,p=!1,x=null,v=null,M=null,y=null,b=null,E=null,T=null,S=!1,w=null,L=null,U=null,V=null,C=null;const P=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,k=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(j)[1]),F=k>=1):j.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),F=k>=2);let B=null,X={};const R=s.getParameter(s.SCISSOR_BOX),H=s.getParameter(s.VIEWPORT),re=new ct().fromArray(R),ce=new ct().fromArray(H);function J(O,le,ae,ge){const fe=new Uint8Array(4),ee=s.createTexture();s.bindTexture(O,ee),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let be=0;be<ae;be++)n&&(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)?s.texImage3D(le,0,s.RGBA,1,1,ge,0,s.RGBA,s.UNSIGNED_BYTE,fe):s.texImage2D(le+be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,fe);return ee}const de={};de[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),de[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(de[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),de[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Se(s.DEPTH_TEST),c.setFunc(Vu),te(!1),Fe(Vd),Se(s.CULL_FACE),Ae(Bi);function Se(O){d[O]!==!0&&(s.enable(O),d[O]=!0)}function Q(O){d[O]!==!1&&(s.disable(O),d[O]=!1)}function Ge(O,le){return f[O]!==le?(s.bindFramebuffer(O,le),f[O]=le,n&&(O===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=le),O===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=le)),!0):!1}function vt(O,le){let ae=_,ge=!1;if(O)if(ae=m.get(le),ae===void 0&&(ae=[],m.set(le,ae)),O.isWebGLMultipleRenderTargets){const fe=O.texture;if(ae.length!==fe.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let ee=0,be=fe.length;ee<be;ee++)ae[ee]=s.COLOR_ATTACHMENT0+ee;ae.length=fe.length,ge=!0}}else ae[0]!==s.COLOR_ATTACHMENT0&&(ae[0]=s.COLOR_ATTACHMENT0,ge=!0);else ae[0]!==s.BACK&&(ae[0]=s.BACK,ge=!0);ge&&(t.isWebGL2?s.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function De(O){return g!==O?(s.useProgram(O),g=O,!0):!1}const z={[Lr]:s.FUNC_ADD,[dv]:s.FUNC_SUBTRACT,[fv]:s.FUNC_REVERSE_SUBTRACT};if(n)z[Hd]=s.MIN,z[Wd]=s.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(z[Hd]=O.MIN_EXT,z[Wd]=O.MAX_EXT)}const Ut={[pv]:s.ZERO,[mv]:s.ONE,[gv]:s.SRC_COLOR,[wm]:s.SRC_ALPHA,[Mv]:s.SRC_ALPHA_SATURATE,[xv]:s.DST_COLOR,[vv]:s.DST_ALPHA,[_v]:s.ONE_MINUS_SRC_COLOR,[Am]:s.ONE_MINUS_SRC_ALPHA,[Sv]:s.ONE_MINUS_DST_COLOR,[yv]:s.ONE_MINUS_DST_ALPHA};function Ae(O,le,ae,ge,fe,ee,be,Ve){if(O===Bi){p===!0&&(Q(s.BLEND),p=!1);return}if(p===!1&&(Se(s.BLEND),p=!0),O!==hv){if(O!==x||Ve!==S){if((v!==Lr||b!==Lr)&&(s.blendEquation(s.FUNC_ADD),v=Lr,b=Lr),Ve)switch(O){case Hr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Go:s.blendFunc(s.ONE,s.ONE);break;case zd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gd:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Hr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Go:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case zd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gd:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,y=null,E=null,T=null,x=O,S=Ve}return}fe=fe||le,ee=ee||ae,be=be||ge,(le!==v||fe!==b)&&(s.blendEquationSeparate(z[le],z[fe]),v=le,b=fe),(ae!==M||ge!==y||ee!==E||be!==T)&&(s.blendFuncSeparate(Ut[ae],Ut[ge],Ut[ee],Ut[be]),M=ae,y=ge,E=ee,T=be),x=O,S=!1}function K(O,le){O.side===Tn?Q(s.CULL_FACE):Se(s.CULL_FACE);let ae=O.side===gn;le&&(ae=!ae),te(ae),O.blending===Hr&&O.transparent===!1?Ae(Bi):Ae(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),c.setFunc(O.depthFunc),c.setTest(O.depthTest),c.setMask(O.depthWrite),a.setMask(O.colorWrite);const ge=O.stencilWrite;l.setTest(ge),ge&&(l.setMask(O.stencilWriteMask),l.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),l.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),pe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Se(s.SAMPLE_ALPHA_TO_COVERAGE):Q(s.SAMPLE_ALPHA_TO_COVERAGE)}function te(O){w!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),w=O)}function Fe(O){O!==lv?(Se(s.CULL_FACE),O!==L&&(O===Vd?s.cullFace(s.BACK):O===uv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Q(s.CULL_FACE),L=O}function xe(O){O!==U&&(F&&s.lineWidth(O),U=O)}function pe(O,le,ae){O?(Se(s.POLYGON_OFFSET_FILL),(V!==le||C!==ae)&&(s.polygonOffset(le,ae),V=le,C=ae)):Q(s.POLYGON_OFFSET_FILL)}function Ee(O){O?Se(s.SCISSOR_TEST):Q(s.SCISSOR_TEST)}function Je(O){O===void 0&&(O=s.TEXTURE0+P-1),B!==O&&(s.activeTexture(O),B=O)}function dt(O,le,ae){ae===void 0&&(B===null?ae=s.TEXTURE0+P-1:ae=B);let ge=X[ae];ge===void 0&&(ge={type:void 0,texture:void 0},X[ae]=ge),(ge.type!==O||ge.texture!==le)&&(B!==ae&&(s.activeTexture(ae),B=ae),s.bindTexture(O,le||de[O]),ge.type=O,ge.texture=le)}function D(){const O=X[B];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function A(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ie(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ze(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(O){re.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),re.copy(O))}function it(O){ce.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),ce.copy(O))}function ke(O,le){let ae=h.get(le);ae===void 0&&(ae=new WeakMap,h.set(le,ae));let ge=ae.get(O);ge===void 0&&(ge=s.getUniformBlockIndex(le,O.name),ae.set(O,ge))}function Ne(O,le){const ge=h.get(le).get(O);u.get(le)!==ge&&(s.uniformBlockBinding(le,ge,O.__bindingPointIndex),u.set(le,ge))}function Ce(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},B=null,X={},f={},m=new WeakMap,_=[],g=null,p=!1,x=null,v=null,M=null,y=null,b=null,E=null,T=null,S=!1,w=null,L=null,U=null,V=null,C=null,re.set(0,0,s.canvas.width,s.canvas.height),ce.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Se,disable:Q,bindFramebuffer:Ge,drawBuffers:vt,useProgram:De,setBlending:Ae,setMaterial:K,setFlipSided:te,setCullFace:Fe,setLineWidth:xe,setPolygonOffset:pe,setScissorTest:Ee,activeTexture:Je,bindTexture:dt,unbindTexture:D,compressedTexImage2D:A,compressedTexImage3D:q,texImage2D:Pe,texImage3D:Ze,updateUBOMapping:ke,uniformBlockBinding:Ne,texStorage2D:ue,texStorage3D:me,texSubImage2D:ie,texSubImage3D:ne,compressedTexSubImage2D:oe,compressedTexSubImage3D:Me,scissor:se,viewport:it,reset:Ce}}function lb(s,e,t,n,i,r,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let _;const g=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,A){return p?new OffscreenCanvas(D,A):Zo("canvas")}function v(D,A,q,ie){let ne=1;if((D.width>ie||D.height>ie)&&(ne=ie/Math.max(D.width,D.height)),ne<1||A===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){const oe=A?Oc:Math.floor,Me=oe(ne*D.width),ue=oe(ne*D.height);_===void 0&&(_=x(Me,ue));const me=q?x(Me,ue):_;return me.width=Me,me.height=ue,me.getContext("2d").drawImage(D,0,0,Me,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+Me+"x"+ue+")."),me}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function M(D){return ju(D.width)&&ju(D.height)}function y(D){return a?!1:D.wrapS!==Un||D.wrapT!==Un||D.minFilter!==Dt&&D.minFilter!==dn}function b(D,A){return D.generateMipmaps&&A&&D.minFilter!==Dt&&D.minFilter!==dn}function E(D){s.generateMipmap(D)}function T(D,A,q,ie,ne=!1){if(a===!1)return A;if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let oe=A;if(A===s.RED&&(q===s.FLOAT&&(oe=s.R32F),q===s.HALF_FLOAT&&(oe=s.R16F),q===s.UNSIGNED_BYTE&&(oe=s.R8)),A===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(oe=s.R8UI),q===s.UNSIGNED_SHORT&&(oe=s.R16UI),q===s.UNSIGNED_INT&&(oe=s.R32UI),q===s.BYTE&&(oe=s.R8I),q===s.SHORT&&(oe=s.R16I),q===s.INT&&(oe=s.R32I)),A===s.RG&&(q===s.FLOAT&&(oe=s.RG32F),q===s.HALF_FLOAT&&(oe=s.RG16F),q===s.UNSIGNED_BYTE&&(oe=s.RG8)),A===s.RGBA){const Me=ne?Dc:Qe.getTransfer(ie);q===s.FLOAT&&(oe=s.RGBA32F),q===s.HALF_FLOAT&&(oe=s.RGBA16F),q===s.UNSIGNED_BYTE&&(oe=Me===ut?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(oe=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(oe=s.RGB5_A1)}return(oe===s.R16F||oe===s.R32F||oe===s.RG16F||oe===s.RG32F||oe===s.RGBA16F||oe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function S(D,A,q){return b(D,q)===!0||D.isFramebufferTexture&&D.minFilter!==Dt&&D.minFilter!==dn?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function w(D){return D===Dt||D===Hu||D===bc?s.NEAREST:s.LINEAR}function L(D){const A=D.target;A.removeEventListener("dispose",L),V(A),A.isVideoTexture&&m.delete(A)}function U(D){const A=D.target;A.removeEventListener("dispose",U),P(A)}function V(D){const A=n.get(D);if(A.__webglInit===void 0)return;const q=D.source,ie=g.get(q);if(ie){const ne=ie[A.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&C(D),Object.keys(ie).length===0&&g.delete(q)}n.remove(D)}function C(D){const A=n.get(D);s.deleteTexture(A.__webglTexture);const q=D.source,ie=g.get(q);delete ie[A.__cacheKey],o.memory.textures--}function P(D){const A=D.texture,q=n.get(D),ie=n.get(A);if(ie.__webglTexture!==void 0&&(s.deleteTexture(ie.__webglTexture),o.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(q.__webglFramebuffer[ne]))for(let oe=0;oe<q.__webglFramebuffer[ne].length;oe++)s.deleteFramebuffer(q.__webglFramebuffer[ne][oe]);else s.deleteFramebuffer(q.__webglFramebuffer[ne]);q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer[ne])}else{if(Array.isArray(q.__webglFramebuffer))for(let ne=0;ne<q.__webglFramebuffer.length;ne++)s.deleteFramebuffer(q.__webglFramebuffer[ne]);else s.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&s.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let ne=0;ne<q.__webglColorRenderbuffer.length;ne++)q.__webglColorRenderbuffer[ne]&&s.deleteRenderbuffer(q.__webglColorRenderbuffer[ne]);q.__webglDepthRenderbuffer&&s.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let ne=0,oe=A.length;ne<oe;ne++){const Me=n.get(A[ne]);Me.__webglTexture&&(s.deleteTexture(Me.__webglTexture),o.memory.textures--),n.remove(A[ne])}n.remove(A),n.remove(D)}let F=0;function k(){F=0}function j(){const D=F;return D>=c&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+c),F+=1,D}function B(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function X(D,A){const q=n.get(D);if(D.isVideoTexture&&Je(D),D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){const ie=D.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(q,D,A);return}}t.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+A)}function R(D,A){const q=n.get(D);if(D.version>0&&q.__version!==D.version){Ge(q,D,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+A)}function H(D,A){const q=n.get(D);if(D.version>0&&q.__version!==D.version){Ge(q,D,A);return}t.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+A)}function re(D,A){const q=n.get(D);if(D.version>0&&q.__version!==D.version){vt(q,D,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+A)}const ce={[mn]:s.REPEAT,[Un]:s.CLAMP_TO_EDGE,[Rc]:s.MIRRORED_REPEAT},J={[Dt]:s.NEAREST,[Hu]:s.NEAREST_MIPMAP_NEAREST,[bc]:s.NEAREST_MIPMAP_LINEAR,[dn]:s.LINEAR,[Nm]:s.LINEAR_MIPMAP_NEAREST,[Js]:s.LINEAR_MIPMAP_LINEAR},de={[$v]:s.NEVER,[n0]:s.ALWAYS,[Kv]:s.LESS,[Qv]:s.LEQUAL,[Zv]:s.EQUAL,[t0]:s.GEQUAL,[Jv]:s.GREATER,[e0]:s.NOTEQUAL};function Se(D,A,q){if(q?(s.texParameteri(D,s.TEXTURE_WRAP_S,ce[A.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,ce[A.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,ce[A.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,J[A.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,J[A.minFilter])):(s.texParameteri(D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(A.wrapS!==Un||A.wrapT!==Un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(D,s.TEXTURE_MAG_FILTER,w(A.magFilter)),s.texParameteri(D,s.TEXTURE_MIN_FILTER,w(A.minFilter)),A.minFilter!==Dt&&A.minFilter!==dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,de[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Dt||A.minFilter!==bc&&A.minFilter!==Js||A.type===ci&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===Qr&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(s.texParameterf(D,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function Q(D,A){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",L));const ie=A.source;let ne=g.get(ie);ne===void 0&&(ne={},g.set(ie,ne));const oe=B(A);if(oe!==D.__cacheKey){ne[oe]===void 0&&(ne[oe]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ne[oe].usedTimes++;const Me=ne[D.__cacheKey];Me!==void 0&&(ne[D.__cacheKey].usedTimes--,Me.usedTimes===0&&C(A)),D.__cacheKey=oe,D.__webglTexture=ne[oe].texture}return q}function Ge(D,A,q){let ie=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ie=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ie=s.TEXTURE_3D);const ne=Q(D,A),oe=A.source;t.bindTexture(ie,D.__webglTexture,s.TEXTURE0+q);const Me=n.get(oe);if(oe.version!==Me.__version||ne===!0){t.activeTexture(s.TEXTURE0+q);const ue=Qe.getPrimaries(Qe.workingColorSpace),me=A.colorSpace===Fn?null:Qe.getPrimaries(A.colorSpace),Pe=A.colorSpace===Fn||ue===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Ze=y(A)&&M(A.image)===!1;let se=v(A.image,Ze,!1,u);se=dt(A,se);const it=M(se)||a,ke=r.convert(A.format,A.colorSpace);let Ne=r.convert(A.type),Ce=T(A.internalFormat,ke,Ne,A.colorSpace,A.isVideoTexture);Se(ie,A,it);let O;const le=A.mipmaps,ae=a&&A.isVideoTexture!==!0,ge=Me.__version===void 0||ne===!0,fe=S(A,se,it);if(A.isDepthTexture)Ce=s.DEPTH_COMPONENT,a?A.type===ci?Ce=s.DEPTH_COMPONENT32F:A.type===os?Ce=s.DEPTH_COMPONENT24:A.type===Xs?Ce=s.DEPTH24_STENCIL8:Ce=s.DEPTH_COMPONENT16:A.type===ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===qs&&Ce===s.DEPTH_COMPONENT&&A.type!==Mh&&A.type!==os&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=os,Ne=r.convert(A.type)),A.format===Jr&&Ce===s.DEPTH_COMPONENT&&(Ce=s.DEPTH_STENCIL,A.type!==Xs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Xs,Ne=r.convert(A.type))),ge&&(ae?t.texStorage2D(s.TEXTURE_2D,1,Ce,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,Ce,se.width,se.height,0,ke,Ne,null));else if(A.isDataTexture)if(le.length>0&&it){ae&&ge&&t.texStorage2D(s.TEXTURE_2D,fe,Ce,le[0].width,le[0].height);for(let ee=0,be=le.length;ee<be;ee++)O=le[ee],ae?t.texSubImage2D(s.TEXTURE_2D,ee,0,0,O.width,O.height,ke,Ne,O.data):t.texImage2D(s.TEXTURE_2D,ee,Ce,O.width,O.height,0,ke,Ne,O.data);A.generateMipmaps=!1}else ae?(ge&&t.texStorage2D(s.TEXTURE_2D,fe,Ce,se.width,se.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,se.width,se.height,ke,Ne,se.data)):t.texImage2D(s.TEXTURE_2D,0,Ce,se.width,se.height,0,ke,Ne,se.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ae&&ge&&t.texStorage3D(s.TEXTURE_2D_ARRAY,fe,Ce,le[0].width,le[0].height,se.depth);for(let ee=0,be=le.length;ee<be;ee++)O=le[ee],A.format!==En?ke!==null?ae?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,O.width,O.height,se.depth,ke,O.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,Ce,O.width,O.height,se.depth,0,O.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,O.width,O.height,se.depth,ke,Ne,O.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,Ce,O.width,O.height,se.depth,0,ke,Ne,O.data)}else{ae&&ge&&t.texStorage2D(s.TEXTURE_2D,fe,Ce,le[0].width,le[0].height);for(let ee=0,be=le.length;ee<be;ee++)O=le[ee],A.format!==En?ke!==null?ae?t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,O.width,O.height,ke,O.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,Ce,O.width,O.height,0,O.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?t.texSubImage2D(s.TEXTURE_2D,ee,0,0,O.width,O.height,ke,Ne,O.data):t.texImage2D(s.TEXTURE_2D,ee,Ce,O.width,O.height,0,ke,Ne,O.data)}else if(A.isDataArrayTexture)ae?(ge&&t.texStorage3D(s.TEXTURE_2D_ARRAY,fe,Ce,se.width,se.height,se.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ke,Ne,se.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ce,se.width,se.height,se.depth,0,ke,Ne,se.data);else if(A.isData3DTexture)ae?(ge&&t.texStorage3D(s.TEXTURE_3D,fe,Ce,se.width,se.height,se.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ke,Ne,se.data)):t.texImage3D(s.TEXTURE_3D,0,Ce,se.width,se.height,se.depth,0,ke,Ne,se.data);else if(A.isFramebufferTexture){if(ge)if(ae)t.texStorage2D(s.TEXTURE_2D,fe,Ce,se.width,se.height);else{let ee=se.width,be=se.height;for(let Ve=0;Ve<fe;Ve++)t.texImage2D(s.TEXTURE_2D,Ve,Ce,ee,be,0,ke,Ne,null),ee>>=1,be>>=1}}else if(le.length>0&&it){ae&&ge&&t.texStorage2D(s.TEXTURE_2D,fe,Ce,le[0].width,le[0].height);for(let ee=0,be=le.length;ee<be;ee++)O=le[ee],ae?t.texSubImage2D(s.TEXTURE_2D,ee,0,0,ke,Ne,O):t.texImage2D(s.TEXTURE_2D,ee,Ce,ke,Ne,O);A.generateMipmaps=!1}else ae?(ge&&t.texStorage2D(s.TEXTURE_2D,fe,Ce,se.width,se.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ke,Ne,se)):t.texImage2D(s.TEXTURE_2D,0,Ce,ke,Ne,se);b(A,it)&&E(ie),Me.__version=oe.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function vt(D,A,q){if(A.image.length!==6)return;const ie=Q(D,A),ne=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+q);const oe=n.get(ne);if(ne.version!==oe.__version||ie===!0){t.activeTexture(s.TEXTURE0+q);const Me=Qe.getPrimaries(Qe.workingColorSpace),ue=A.colorSpace===Fn?null:Qe.getPrimaries(A.colorSpace),me=A.colorSpace===Fn||Me===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Pe=A.isCompressedTexture||A.image[0].isCompressedTexture,Ze=A.image[0]&&A.image[0].isDataTexture,se=[];for(let ee=0;ee<6;ee++)!Pe&&!Ze?se[ee]=v(A.image[ee],!1,!0,l):se[ee]=Ze?A.image[ee].image:A.image[ee],se[ee]=dt(A,se[ee]);const it=se[0],ke=M(it)||a,Ne=r.convert(A.format,A.colorSpace),Ce=r.convert(A.type),O=T(A.internalFormat,Ne,Ce,A.colorSpace),le=a&&A.isVideoTexture!==!0,ae=oe.__version===void 0||ie===!0;let ge=S(A,it,ke);Se(s.TEXTURE_CUBE_MAP,A,ke);let fe;if(Pe){le&&ae&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,O,it.width,it.height);for(let ee=0;ee<6;ee++){fe=se[ee].mipmaps;for(let be=0;be<fe.length;be++){const Ve=fe[be];A.format!==En?Ne!==null?le?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,0,0,Ve.width,Ve.height,Ne,Ve.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,O,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):le?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,0,0,Ve.width,Ve.height,Ne,Ce,Ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,O,Ve.width,Ve.height,0,Ne,Ce,Ve.data)}}}else{fe=A.mipmaps,le&&ae&&(fe.length>0&&ge++,t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,O,se[0].width,se[0].height));for(let ee=0;ee<6;ee++)if(Ze){le?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,se[ee].width,se[ee].height,Ne,Ce,se[ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,O,se[ee].width,se[ee].height,0,Ne,Ce,se[ee].data);for(let be=0;be<fe.length;be++){const en=fe[be].image[ee].image;le?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,0,0,en.width,en.height,Ne,Ce,en.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,O,en.width,en.height,0,Ne,Ce,en.data)}}else{le?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ne,Ce,se[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,O,Ne,Ce,se[ee]);for(let be=0;be<fe.length;be++){const Ve=fe[be];le?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,0,0,Ne,Ce,Ve.image[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,O,Ne,Ce,Ve.image[ee])}}}b(A,ke)&&E(s.TEXTURE_CUBE_MAP),oe.__version=ne.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function De(D,A,q,ie,ne,oe){const Me=r.convert(q.format,q.colorSpace),ue=r.convert(q.type),me=T(q.internalFormat,Me,ue,q.colorSpace);if(!n.get(A).__hasExternalTextures){const Ze=Math.max(1,A.width>>oe),se=Math.max(1,A.height>>oe);ne===s.TEXTURE_3D||ne===s.TEXTURE_2D_ARRAY?t.texImage3D(ne,oe,me,Ze,se,A.depth,0,Me,ue,null):t.texImage2D(ne,oe,me,Ze,se,0,Me,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),Ee(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,ne,n.get(q).__webglTexture,0,pe(A)):(ne===s.TEXTURE_2D||ne>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ie,ne,n.get(q).__webglTexture,oe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function z(D,A,q){if(s.bindRenderbuffer(s.RENDERBUFFER,D),A.depthBuffer&&!A.stencilBuffer){let ie=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(q||Ee(A)){const ne=A.depthTexture;ne&&ne.isDepthTexture&&(ne.type===ci?ie=s.DEPTH_COMPONENT32F:ne.type===os&&(ie=s.DEPTH_COMPONENT24));const oe=pe(A);Ee(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,ie,A.width,A.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,ie,A.width,A.height)}else s.renderbufferStorage(s.RENDERBUFFER,ie,A.width,A.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,D)}else if(A.depthBuffer&&A.stencilBuffer){const ie=pe(A);q&&Ee(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,s.DEPTH24_STENCIL8,A.width,A.height):Ee(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ie,s.DEPTH24_STENCIL8,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,D)}else{const ie=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ne=0;ne<ie.length;ne++){const oe=ie[ne],Me=r.convert(oe.format,oe.colorSpace),ue=r.convert(oe.type),me=T(oe.internalFormat,Me,ue,oe.colorSpace),Pe=pe(A);q&&Ee(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,me,A.width,A.height):Ee(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe,me,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,me,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ut(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),X(A.depthTexture,0);const ie=n.get(A.depthTexture).__webglTexture,ne=pe(A);if(A.depthTexture.format===qs)Ee(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0);else if(A.depthTexture.format===Jr)Ee(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ae(D){const A=n.get(D),q=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Ut(A.__webglFramebuffer,D)}else if(q){A.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[ie]),A.__webglDepthbuffer[ie]=s.createRenderbuffer(),z(A.__webglDepthbuffer[ie],D,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),z(A.__webglDepthbuffer,D,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function K(D,A,q){const ie=n.get(D);A!==void 0&&De(ie.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&Ae(D)}function te(D){const A=D.texture,q=n.get(D),ie=n.get(A);D.addEventListener("dispose",U),D.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=A.version,o.memory.textures++);const ne=D.isWebGLCubeRenderTarget===!0,oe=D.isWebGLMultipleRenderTargets===!0,Me=M(D)||a;if(ne){q.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(a&&A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer[ue]=[];for(let me=0;me<A.mipmaps.length;me++)q.__webglFramebuffer[ue][me]=s.createFramebuffer()}else q.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer=[];for(let ue=0;ue<A.mipmaps.length;ue++)q.__webglFramebuffer[ue]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(oe)if(i.drawBuffers){const ue=D.texture;for(let me=0,Pe=ue.length;me<Pe;me++){const Ze=n.get(ue[me]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&D.samples>0&&Ee(D)===!1){const ue=oe?A:[A];q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let me=0;me<ue.length;me++){const Pe=ue[me];q.__webglColorRenderbuffer[me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[me]);const Ze=r.convert(Pe.format,Pe.colorSpace),se=r.convert(Pe.type),it=T(Pe.internalFormat,Ze,se,Pe.colorSpace,D.isXRRenderTarget===!0),ke=pe(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,ke,it,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,q.__webglColorRenderbuffer[me])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),z(q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ne){t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture),Se(s.TEXTURE_CUBE_MAP,A,Me);for(let ue=0;ue<6;ue++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let me=0;me<A.mipmaps.length;me++)De(q.__webglFramebuffer[ue][me],D,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,me);else De(q.__webglFramebuffer[ue],D,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);b(A,Me)&&E(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){const ue=D.texture;for(let me=0,Pe=ue.length;me<Pe;me++){const Ze=ue[me],se=n.get(Ze);t.bindTexture(s.TEXTURE_2D,se.__webglTexture),Se(s.TEXTURE_2D,Ze,Me),De(q.__webglFramebuffer,D,Ze,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,0),b(Ze,Me)&&E(s.TEXTURE_2D)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(a?ue=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,ie.__webglTexture),Se(ue,A,Me),a&&A.mipmaps&&A.mipmaps.length>0)for(let me=0;me<A.mipmaps.length;me++)De(q.__webglFramebuffer[me],D,A,s.COLOR_ATTACHMENT0,ue,me);else De(q.__webglFramebuffer,D,A,s.COLOR_ATTACHMENT0,ue,0);b(A,Me)&&E(ue),t.unbindTexture()}D.depthBuffer&&Ae(D)}function Fe(D){const A=M(D)||a,q=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let ie=0,ne=q.length;ie<ne;ie++){const oe=q[ie];if(b(oe,A)){const Me=D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ue=n.get(oe).__webglTexture;t.bindTexture(Me,ue),E(Me),t.unbindTexture()}}}function xe(D){if(a&&D.samples>0&&Ee(D)===!1){const A=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],q=D.width,ie=D.height;let ne=s.COLOR_BUFFER_BIT;const oe=[],Me=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=n.get(D),me=D.isWebGLMultipleRenderTargets===!0;if(me)for(let Pe=0;Pe<A.length;Pe++)t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Pe=0;Pe<A.length;Pe++){oe.push(s.COLOR_ATTACHMENT0+Pe),D.depthBuffer&&oe.push(Me);const Ze=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(Ze===!1&&(D.depthBuffer&&(ne|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&(ne|=s.STENCIL_BUFFER_BIT)),me&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ue.__webglColorRenderbuffer[Pe]),Ze===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Me]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Me])),me){const se=n.get(A[Pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,se,0)}s.blitFramebuffer(0,0,q,ie,0,0,q,ie,ne,s.NEAREST),f&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),me)for(let Pe=0;Pe<A.length;Pe++){t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,ue.__webglColorRenderbuffer[Pe]);const Ze=n.get(A[Pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,Ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function pe(D){return Math.min(h,D.samples)}function Ee(D){const A=n.get(D);return a&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Je(D){const A=o.render.frame;m.get(D)!==A&&(m.set(D,A),D.update())}function dt(D,A){const q=D.colorSpace,ie=D.format,ne=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===qu||q!==Wt&&q!==Fn&&(Qe.getTransfer(q)===ut?a===!1?e.has("EXT_sRGB")===!0&&ie===En?(D.format=qu,D.minFilter=dn,D.generateMipmaps=!1):A=qm.sRGBToLinear(A):(ie!==En||ne!==ls)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),A}this.allocateTextureUnit=j,this.resetTextureUnits=k,this.setTexture2D=X,this.setTexture2DArray=R,this.setTexture3D=H,this.setTextureCube=re,this.rebindTextures=K,this.setupRenderTarget=te,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Ee}function ub(s,e,t){const n=t.isWebGL2;function i(r,o=Fn){let a;const c=Qe.getTransfer(o);if(r===ls)return s.UNSIGNED_BYTE;if(r===Om)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Um)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Nv)return s.BYTE;if(r===Lv)return s.SHORT;if(r===Mh)return s.UNSIGNED_SHORT;if(r===Lm)return s.INT;if(r===os)return s.UNSIGNED_INT;if(r===ci)return s.FLOAT;if(r===Qr)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Ov)return s.ALPHA;if(r===En)return s.RGBA;if(r===Uv)return s.LUMINANCE;if(r===Fv)return s.LUMINANCE_ALPHA;if(r===qs)return s.DEPTH_COMPONENT;if(r===Jr)return s.DEPTH_STENCIL;if(r===qu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===kv)return s.RED;if(r===Fm)return s.RED_INTEGER;if(r===Bv)return s.RG;if(r===km)return s.RG_INTEGER;if(r===Bm)return s.RGBA_INTEGER;if(r===Gl||r===Hl||r===Wl||r===Xl)if(c===ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Gl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Wl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Xl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Gl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Wl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Xl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Xd||r===qd||r===jd||r===Yd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Xd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===qd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===jd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Yd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Vv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===$d||r===Kd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===$d)return c===ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Kd)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Zd||r===Qd||r===Jd||r===ef||r===tf||r===nf||r===sf||r===rf||r===of||r===af||r===cf||r===lf||r===uf||r===hf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Zd)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Qd)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jd)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ef)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===tf)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===nf)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===sf)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===rf)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===of)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===af)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===cf)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===lf)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===uf)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===hf)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ql||r===df||r===ff)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===ql)return c===ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===df)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ff)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===zv||r===pf||r===mf||r===gf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===ql)return a.COMPRESSED_RED_RGTC1_EXT;if(r===pf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===mf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===gf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xs?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class hb extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bs extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const db={type:"move"};class mu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(db)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class fb extends Gt{constructor(e,t,n,i,r,o,a,c,l,u){if(u=u!==void 0?u:qs,u!==qs&&u!==Jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===qs&&(n=os),n===void 0&&u===Jr&&(n=Xs),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Dt,this.minFilter=c!==void 0?c:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class pb extends ji{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,m=null;const _=t.getContextAttributes();let g=null,p=null;const x=[],v=[],M=new on;M.layers.enable(1),M.viewport=new ct;const y=new on;y.layers.enable(2),y.viewport=new ct;const b=[M,y],E=new hb;E.layers.enable(1),E.layers.enable(2);let T=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let H=x[R];return H===void 0&&(H=new mu,x[R]=H),H.getTargetRaySpace()},this.getControllerGrip=function(R){let H=x[R];return H===void 0&&(H=new mu,x[R]=H),H.getGripSpace()},this.getHand=function(R){let H=x[R];return H===void 0&&(H=new mu,x[R]=H),H.getHandSpace()};function w(R){const H=v.indexOf(R.inputSource);if(H===-1)return;const re=x[H];re!==void 0&&(re.update(R.inputSource,R.frame,l||o),re.dispatchEvent({type:R.type,data:R.inputSource}))}function L(){i.removeEventListener("select",w),i.removeEventListener("selectstart",w),i.removeEventListener("selectend",w),i.removeEventListener("squeeze",w),i.removeEventListener("squeezestart",w),i.removeEventListener("squeezeend",w),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",U);for(let R=0;R<x.length;R++){const H=v[R];H!==null&&(v[R]=null,x[R].disconnect(H))}T=null,S=null,e.setRenderTarget(g),f=null,d=null,h=null,i=null,p=null,X.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){r=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){a=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(R){l=R},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(R){if(i=R,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",w),i.addEventListener("selectstart",w),i.addEventListener("selectend",w),i.addEventListener("squeeze",w),i.addEventListener("squeezestart",w),i.addEventListener("squeezeend",w),i.addEventListener("end",L),i.addEventListener("inputsourceschange",U),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const H={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,H),i.updateRenderState({baseLayer:f}),p=new hs(f.framebufferWidth,f.framebufferHeight,{format:En,type:ls,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let H=null,re=null,ce=null;_.depth&&(ce=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,H=_.stencil?Jr:qs,re=_.stencil?Xs:os);const J={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(J),i.updateRenderState({layers:[d]}),p=new hs(d.textureWidth,d.textureHeight,{format:En,type:ls,depthTexture:new fb(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const de=e.properties.get(p);de.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),X.setContext(i),X.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function U(R){for(let H=0;H<R.removed.length;H++){const re=R.removed[H],ce=v.indexOf(re);ce>=0&&(v[ce]=null,x[ce].disconnect(re))}for(let H=0;H<R.added.length;H++){const re=R.added[H];let ce=v.indexOf(re);if(ce===-1){for(let de=0;de<x.length;de++)if(de>=v.length){v.push(re),ce=de;break}else if(v[de]===null){v[de]=re,ce=de;break}if(ce===-1)break}const J=x[ce];J&&J.connect(re)}}const V=new N,C=new N;function P(R,H,re){V.setFromMatrixPosition(H.matrixWorld),C.setFromMatrixPosition(re.matrixWorld);const ce=V.distanceTo(C),J=H.projectionMatrix.elements,de=re.projectionMatrix.elements,Se=J[14]/(J[10]-1),Q=J[14]/(J[10]+1),Ge=(J[9]+1)/J[5],vt=(J[9]-1)/J[5],De=(J[8]-1)/J[0],z=(de[8]+1)/de[0],Ut=Se*De,Ae=Se*z,K=ce/(-De+z),te=K*-De;H.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(te),R.translateZ(K),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert();const Fe=Se+K,xe=Q+K,pe=Ut-te,Ee=Ae+(ce-te),Je=Ge*Q/xe*Fe,dt=vt*Q/xe*Fe;R.projectionMatrix.makePerspective(pe,Ee,Je,dt,Fe,xe),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}function F(R,H){H===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(H.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(i===null)return;E.near=y.near=M.near=R.near,E.far=y.far=M.far=R.far,(T!==E.near||S!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,S=E.far);const H=R.parent,re=E.cameras;F(E,H);for(let ce=0;ce<re.length;ce++)F(re[ce],H);re.length===2?P(E,M,y):E.projectionMatrix.copy(M.projectionMatrix),k(R,E,H)};function k(R,H,re){re===null?R.matrix.copy(H.matrixWorld):(R.matrix.copy(re.matrixWorld),R.matrix.invert(),R.matrix.multiply(H.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(H.projectionMatrix),R.projectionMatrixInverse.copy(H.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=to*2*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(R){c=R,d!==null&&(d.fixedFoveation=R),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=R)};let j=null;function B(R,H){if(u=H.getViewerPose(l||o),m=H,u!==null){const re=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ce=!1;re.length!==E.cameras.length&&(E.cameras.length=0,ce=!0);for(let J=0;J<re.length;J++){const de=re[J];let Se=null;if(f!==null)Se=f.getViewport(de);else{const Ge=h.getViewSubImage(d,de);Se=Ge.viewport,J===0&&(e.setRenderTargetTextures(p,Ge.colorTexture,d.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(p))}let Q=b[J];Q===void 0&&(Q=new on,Q.layers.enable(J),Q.viewport=new ct,b[J]=Q),Q.matrix.fromArray(de.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(de.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Se.x,Se.y,Se.width,Se.height),J===0&&(E.matrix.copy(Q.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ce===!0&&E.cameras.push(Q)}}for(let re=0;re<x.length;re++){const ce=v[re],J=x[re];ce!==null&&J!==void 0&&J.update(ce,H,l||o)}j&&j(R,H),H.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:H}),m=null}const X=new tg;X.setAnimationLoop(B),this.setAnimationLoop=function(R){j=R},this.dispose=function(){}}}function mb(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Qm(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,v,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,M)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,x,v):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===gn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===gn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,x,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=v*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function gb(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,v){const M=v.program;n.uniformBlockBinding(x,M)}function l(x,v){let M=i[x.id];M===void 0&&(m(x),M=u(x),i[x.id]=M,x.addEventListener("dispose",g));const y=v.program;n.updateUBOMapping(x,y);const b=e.render.frame;r[x.id]!==b&&(d(x),r[x.id]=b)}function u(x){const v=h();x.__bindingPointIndex=v;const M=s.createBuffer(),y=x.__size,b=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,y,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,M),M}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=i[x.id],M=x.uniforms,y=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let b=0,E=M.length;b<E;b++){const T=M[b];if(f(T,b,y)===!0){const S=T.__offset,w=Array.isArray(T.value)?T.value:[T.value];let L=0;for(let U=0;U<w.length;U++){const V=w[U],C=_(V);typeof V=="number"?(T.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,S+L,T.__data)):V.isMatrix3?(T.__data[0]=V.elements[0],T.__data[1]=V.elements[1],T.__data[2]=V.elements[2],T.__data[3]=V.elements[0],T.__data[4]=V.elements[3],T.__data[5]=V.elements[4],T.__data[6]=V.elements[5],T.__data[7]=V.elements[0],T.__data[8]=V.elements[6],T.__data[9]=V.elements[7],T.__data[10]=V.elements[8],T.__data[11]=V.elements[0]):(V.toArray(T.__data,L),L+=C.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,S,T.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,v,M){const y=x.value;if(M[v]===void 0){if(typeof y=="number")M[v]=y;else{const b=Array.isArray(y)?y:[y],E=[];for(let T=0;T<b.length;T++)E.push(b[T].clone());M[v]=E}return!0}else if(typeof y=="number"){if(M[v]!==y)return M[v]=y,!0}else{const b=Array.isArray(M[v])?M[v]:[M[v]],E=Array.isArray(y)?y:[y];for(let T=0;T<b.length;T++){const S=b[T];if(S.equals(E[T])===!1)return S.copy(E[T]),!0}}return!1}function m(x){const v=x.uniforms;let M=0;const y=16;let b=0;for(let E=0,T=v.length;E<T;E++){const S=v[E],w={boundary:0,storage:0},L=Array.isArray(S.value)?S.value:[S.value];for(let U=0,V=L.length;U<V;U++){const C=L[U],P=_(C);w.boundary+=P.boundary,w.storage+=P.storage}if(S.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=M,E>0){b=M%y;const U=y-b;b!==0&&U-w.boundary<0&&(M+=y-b,S.__offset=M)}M+=w.storage}return b=M%y,b>0&&(M+=y-b),x.__size=M,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class Sl{constructor(e={}){const{canvas:t=g0(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),m=new Int32Array(4);let _=null,g=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gt,this._useLegacyLights=!1,this.toneMapping=cs,this.toneMappingExposure=1;const v=this;let M=!1,y=0,b=0,E=null,T=-1,S=null;const w=new ct,L=new ct;let U=null;const V=new Te(0);let C=0,P=t.width,F=t.height,k=1,j=null,B=null;const X=new ct(0,0,P,F),R=new ct(0,0,P,F);let H=!1;const re=new Ih;let ce=!1,J=!1,de=null;const Se=new Ue,Q=new _e,Ge=new N,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return E===null?k:1}let z=n;function Ut(I,G){for(let Y=0;Y<I.length;Y++){const W=I[Y],$=t.getContext(W,G);if($!==null)return $}return null}try{const I={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yh}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",ge,!1),z===null){const G=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&G.shift(),z=Ut(G,I),z===null)throw Ut(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Ae,K,te,Fe,xe,pe,Ee,Je,dt,D,A,q,ie,ne,oe,Me,ue,me,Pe,Ze,se,it,ke,Ne;function Ce(){Ae=new AS(z),K=new SS(z,Ae,e),Ae.init(K),it=new ub(z,Ae,K),te=new cb(z,Ae,K),Fe=new IS(z),xe=new YM,pe=new lb(z,Ae,te,xe,K,it,Fe),Ee=new bS(v),Je=new wS(v),dt=new V0(z,K),ke=new yS(z,Ae,dt,K),D=new CS(z,dt,Fe,ke),A=new LS(z,D,dt,Fe),Pe=new NS(z,K,pe),Me=new MS(xe),q=new jM(v,Ee,Je,Ae,K,ke,Me),ie=new mb(v,xe),ne=new KM,oe=new nb(Ae,K),me=new vS(v,Ee,Je,te,A,d,c),ue=new ab(v,A,K),Ne=new gb(z,Fe,K,te),Ze=new xS(z,Ae,Fe,K),se=new RS(z,Ae,Fe,K),Fe.programs=q.programs,v.capabilities=K,v.extensions=Ae,v.properties=xe,v.renderLists=ne,v.shadowMap=ue,v.state=te,v.info=Fe}Ce();const O=new pb(v,z);this.xr=O,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const I=Ae.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Ae.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(I){I!==void 0&&(k=I,this.setSize(P,F,!1))},this.getSize=function(I){return I.set(P,F)},this.setSize=function(I,G,Y=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=I,F=G,t.width=Math.floor(I*k),t.height=Math.floor(G*k),Y===!0&&(t.style.width=I+"px",t.style.height=G+"px"),this.setViewport(0,0,I,G)},this.getDrawingBufferSize=function(I){return I.set(P*k,F*k).floor()},this.setDrawingBufferSize=function(I,G,Y){P=I,F=G,k=Y,t.width=Math.floor(I*Y),t.height=Math.floor(G*Y),this.setViewport(0,0,I,G)},this.getCurrentViewport=function(I){return I.copy(w)},this.getViewport=function(I){return I.copy(X)},this.setViewport=function(I,G,Y,W){I.isVector4?X.set(I.x,I.y,I.z,I.w):X.set(I,G,Y,W),te.viewport(w.copy(X).multiplyScalar(k).floor())},this.getScissor=function(I){return I.copy(R)},this.setScissor=function(I,G,Y,W){I.isVector4?R.set(I.x,I.y,I.z,I.w):R.set(I,G,Y,W),te.scissor(L.copy(R).multiplyScalar(k).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(I){te.setScissorTest(H=I)},this.setOpaqueSort=function(I){j=I},this.setTransparentSort=function(I){B=I},this.getClearColor=function(I){return I.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(I=!0,G=!0,Y=!0){let W=0;if(I){let $=!1;if(E!==null){const ve=E.texture.format;$=ve===Bm||ve===km||ve===Fm}if($){const ve=E.texture.type,we=ve===ls||ve===os||ve===Mh||ve===Xs||ve===Om||ve===Um,Le=me.getClearColor(),Oe=me.getClearAlpha(),We=Le.r,Ie=Le.g,ze=Le.b;we?(f[0]=We,f[1]=Ie,f[2]=ze,f[3]=Oe,z.clearBufferuiv(z.COLOR,0,f)):(m[0]=We,m[1]=Ie,m[2]=ze,m[3]=Oe,z.clearBufferiv(z.COLOR,0,m))}else W|=z.COLOR_BUFFER_BIT}G&&(W|=z.DEPTH_BUFFER_BIT),Y&&(W|=z.STENCIL_BUFFER_BIT),z.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),ne.dispose(),oe.dispose(),xe.dispose(),Ee.dispose(),Je.dispose(),A.dispose(),ke.dispose(),Ne.dispose(),q.dispose(),O.dispose(),O.removeEventListener("sessionstart",ft),O.removeEventListener("sessionend",ni),de&&(de.dispose(),de=null),tn.stop()};function le(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const I=Fe.autoReset,G=ue.enabled,Y=ue.autoUpdate,W=ue.needsUpdate,$=ue.type;Ce(),Fe.autoReset=I,ue.enabled=G,ue.autoUpdate=Y,ue.needsUpdate=W,ue.type=$}function ge(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function fe(I){const G=I.target;G.removeEventListener("dispose",fe),ee(G)}function ee(I){be(I),xe.remove(I)}function be(I){const G=xe.get(I).programs;G!==void 0&&(G.forEach(function(Y){q.releaseProgram(Y)}),I.isShaderMaterial&&q.releaseShaderCache(I))}this.renderBufferDirect=function(I,G,Y,W,$,ve){G===null&&(G=vt);const we=$.isMesh&&$.matrixWorld.determinant()<0,Le=rv(I,G,Y,W,$);te.setMaterial(W,we);let Oe=Y.index,We=1;if(W.wireframe===!0){if(Oe=D.getWireframeAttribute(Y),Oe===void 0)return;We=2}const Ie=Y.drawRange,ze=Y.attributes.position;let yt=Ie.start*We,St=(Ie.start+Ie.count)*We;ve!==null&&(yt=Math.max(yt,ve.start*We),St=Math.min(St,(ve.start+ve.count)*We)),Oe!==null?(yt=Math.max(yt,0),St=Math.min(St,Oe.count)):ze!=null&&(yt=Math.max(yt,0),St=Math.min(St,ze.count));const Rn=St-yt;if(Rn<0||Rn===1/0)return;ke.setup($,W,Le,Y,Oe);let Si,Et=Ze;if(Oe!==null&&(Si=dt.get(Oe),Et=se,Et.setIndex(Si)),$.isMesh)W.wireframe===!0?(te.setLineWidth(W.wireframeLinewidth*De()),Et.setMode(z.LINES)):Et.setMode(z.TRIANGLES);else if($.isLine){let qe=W.linewidth;qe===void 0&&(qe=1),te.setLineWidth(qe*De()),$.isLineSegments?Et.setMode(z.LINES):$.isLineLoop?Et.setMode(z.LINE_LOOP):Et.setMode(z.LINE_STRIP)}else $.isPoints?Et.setMode(z.POINTS):$.isSprite&&Et.setMode(z.TRIANGLES);if($.isInstancedMesh)Et.renderInstances(yt,Rn,$.count);else if(Y.isInstancedBufferGeometry){const qe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,kl=Math.min(Y.instanceCount,qe);Et.renderInstances(yt,Rn,kl)}else Et.render(yt,Rn)},this.compile=function(I,G){function Y(W,$,ve){W.transparent===!0&&W.side===Tn&&W.forceSinglePass===!1?(W.side=gn,W.needsUpdate=!0,La(W,$,ve),W.side=Hi,W.needsUpdate=!0,La(W,$,ve),W.side=Tn):La(W,$,ve)}g=oe.get(I),g.init(),x.push(g),I.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights(v._useLegacyLights),I.traverse(function(W){const $=W.material;if($)if(Array.isArray($))for(let ve=0;ve<$.length;ve++){const we=$[ve];Y(we,I,W)}else Y($,I,W)}),x.pop(),g=null};let Ve=null;function en(I){Ve&&Ve(I)}function ft(){tn.stop()}function ni(){tn.start()}const tn=new tg;tn.setAnimationLoop(en),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(I){Ve=I,O.setAnimationLoop(I),I===null?tn.stop():tn.start()},O.addEventListener("sessionstart",ft),O.addEventListener("sessionend",ni),this.render=function(I,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(G),G=O.getCamera()),I.isScene===!0&&I.onBeforeRender(v,I,G,E),g=oe.get(I,x.length),g.init(),x.push(g),Se.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),re.setFromProjectionMatrix(Se),J=this.localClippingEnabled,ce=Me.init(this.clippingPlanes,J),_=ne.get(I,p.length),_.init(),p.push(_),Ld(I,G,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(j,B),this.info.render.frame++,ce===!0&&Me.beginShadows();const Y=g.state.shadowsArray;if(ue.render(Y,I,G),ce===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),me.render(_,I),g.setupLights(v._useLegacyLights),G.isArrayCamera){const W=G.cameras;for(let $=0,ve=W.length;$<ve;$++){const we=W[$];Od(_,I,we,we.viewport)}}else Od(_,I,G);E!==null&&(pe.updateMultisampleRenderTarget(E),pe.updateRenderTargetMipmap(E)),I.isScene===!0&&I.onAfterRender(v,I,G),ke.resetDefaultState(),T=-1,S=null,x.pop(),x.length>0?g=x[x.length-1]:g=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Ld(I,G,Y,W){if(I.visible===!1)return;if(I.layers.test(G.layers)){if(I.isGroup)Y=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(G);else if(I.isLight)g.pushLight(I),I.castShadow&&g.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||re.intersectsSprite(I)){W&&Ge.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Se);const we=A.update(I),Le=I.material;Le.visible&&_.push(I,we,Le,Y,Ge.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||re.intersectsObject(I))){const we=A.update(I),Le=I.material;if(W&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Ge.copy(I.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ge.copy(we.boundingSphere.center)),Ge.applyMatrix4(I.matrixWorld).applyMatrix4(Se)),Array.isArray(Le)){const Oe=we.groups;for(let We=0,Ie=Oe.length;We<Ie;We++){const ze=Oe[We],yt=Le[ze.materialIndex];yt&&yt.visible&&_.push(I,we,yt,Y,Ge.z,ze)}}else Le.visible&&_.push(I,we,Le,Y,Ge.z,null)}}const ve=I.children;for(let we=0,Le=ve.length;we<Le;we++)Ld(ve[we],G,Y,W)}function Od(I,G,Y,W){const $=I.opaque,ve=I.transmissive,we=I.transparent;g.setupLightsView(Y),ce===!0&&Me.setGlobalState(v.clippingPlanes,Y),ve.length>0&&sv($,ve,G,Y),W&&te.viewport(w.copy(W)),$.length>0&&Na($,G,Y),ve.length>0&&Na(ve,G,Y),we.length>0&&Na(we,G,Y),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function sv(I,G,Y,W){const $=K.isWebGL2;de===null&&(de=new hs(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")?Qr:ls,minFilter:Js,samples:$?4:0})),v.getDrawingBufferSize(Q),$?de.setSize(Q.x,Q.y):de.setSize(Oc(Q.x),Oc(Q.y));const ve=v.getRenderTarget();v.setRenderTarget(de),v.getClearColor(V),C=v.getClearAlpha(),C<1&&v.setClearColor(16777215,.5),v.clear();const we=v.toneMapping;v.toneMapping=cs,Na(I,Y,W),pe.updateMultisampleRenderTarget(de),pe.updateRenderTargetMipmap(de);let Le=!1;for(let Oe=0,We=G.length;Oe<We;Oe++){const Ie=G[Oe],ze=Ie.object,yt=Ie.geometry,St=Ie.material,Rn=Ie.group;if(St.side===Tn&&ze.layers.test(W.layers)){const Si=St.side;St.side=gn,St.needsUpdate=!0,Ud(ze,Y,W,yt,St,Rn),St.side=Si,St.needsUpdate=!0,Le=!0}}Le===!0&&(pe.updateMultisampleRenderTarget(de),pe.updateRenderTargetMipmap(de)),v.setRenderTarget(ve),v.setClearColor(V,C),v.toneMapping=we}function Na(I,G,Y){const W=G.isScene===!0?G.overrideMaterial:null;for(let $=0,ve=I.length;$<ve;$++){const we=I[$],Le=we.object,Oe=we.geometry,We=W===null?we.material:W,Ie=we.group;Le.layers.test(Y.layers)&&Ud(Le,G,Y,Oe,We,Ie)}}function Ud(I,G,Y,W,$,ve){I.onBeforeRender(v,G,Y,W,$,ve),I.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),$.onBeforeRender(v,G,Y,W,I,ve),$.transparent===!0&&$.side===Tn&&$.forceSinglePass===!1?($.side=gn,$.needsUpdate=!0,v.renderBufferDirect(Y,G,W,$,I,ve),$.side=Hi,$.needsUpdate=!0,v.renderBufferDirect(Y,G,W,$,I,ve),$.side=Tn):v.renderBufferDirect(Y,G,W,$,I,ve),I.onAfterRender(v,G,Y,W,$,ve)}function La(I,G,Y){G.isScene!==!0&&(G=vt);const W=xe.get(I),$=g.state.lights,ve=g.state.shadowsArray,we=$.state.version,Le=q.getParameters(I,$.state,ve,G,Y),Oe=q.getProgramCacheKey(Le);let We=W.programs;W.environment=I.isMeshStandardMaterial?G.environment:null,W.fog=G.fog,W.envMap=(I.isMeshStandardMaterial?Je:Ee).get(I.envMap||W.environment),We===void 0&&(I.addEventListener("dispose",fe),We=new Map,W.programs=We);let Ie=We.get(Oe);if(Ie!==void 0){if(W.currentProgram===Ie&&W.lightsStateVersion===we)return Fd(I,Le),Ie}else Le.uniforms=q.getUniforms(I),I.onBuild(Y,Le,v),I.onBeforeCompile(Le,v),Ie=q.acquireProgram(Le,Oe),We.set(Oe,Ie),W.uniforms=Le.uniforms;const ze=W.uniforms;(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(ze.clippingPlanes=Me.uniform),Fd(I,Le),W.needsLights=av(I),W.lightsStateVersion=we,W.needsLights&&(ze.ambientLightColor.value=$.state.ambient,ze.lightProbe.value=$.state.probe,ze.directionalLights.value=$.state.directional,ze.directionalLightShadows.value=$.state.directionalShadow,ze.spotLights.value=$.state.spot,ze.spotLightShadows.value=$.state.spotShadow,ze.rectAreaLights.value=$.state.rectArea,ze.ltc_1.value=$.state.rectAreaLTC1,ze.ltc_2.value=$.state.rectAreaLTC2,ze.pointLights.value=$.state.point,ze.pointLightShadows.value=$.state.pointShadow,ze.hemisphereLights.value=$.state.hemi,ze.directionalShadowMap.value=$.state.directionalShadowMap,ze.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ze.spotShadowMap.value=$.state.spotShadowMap,ze.spotLightMatrix.value=$.state.spotLightMatrix,ze.spotLightMap.value=$.state.spotLightMap,ze.pointShadowMap.value=$.state.pointShadowMap,ze.pointShadowMatrix.value=$.state.pointShadowMatrix);const yt=Ie.getUniforms(),St=Tc.seqWithValue(yt.seq,ze);return W.currentProgram=Ie,W.uniformsList=St,Ie}function Fd(I,G){const Y=xe.get(I);Y.outputColorSpace=G.outputColorSpace,Y.instancing=G.instancing,Y.instancingColor=G.instancingColor,Y.skinning=G.skinning,Y.morphTargets=G.morphTargets,Y.morphNormals=G.morphNormals,Y.morphColors=G.morphColors,Y.morphTargetsCount=G.morphTargetsCount,Y.numClippingPlanes=G.numClippingPlanes,Y.numIntersection=G.numClipIntersection,Y.vertexAlphas=G.vertexAlphas,Y.vertexTangents=G.vertexTangents,Y.toneMapping=G.toneMapping}function rv(I,G,Y,W,$){G.isScene!==!0&&(G=vt),pe.resetTextureUnits();const ve=G.fog,we=W.isMeshStandardMaterial?G.environment:null,Le=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Wt,Oe=(W.isMeshStandardMaterial?Je:Ee).get(W.envMap||we),We=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ie=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),ze=!!Y.morphAttributes.position,yt=!!Y.morphAttributes.normal,St=!!Y.morphAttributes.color;let Rn=cs;W.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Rn=v.toneMapping);const Si=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Et=Si!==void 0?Si.length:0,qe=xe.get(W),kl=g.state.lights;if(ce===!0&&(J===!0||I!==S)){const yn=I===S&&W.id===T;Me.setState(W,I,yn)}let wt=!1;W.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==kl.state.version||qe.outputColorSpace!==Le||$.isInstancedMesh&&qe.instancing===!1||!$.isInstancedMesh&&qe.instancing===!0||$.isSkinnedMesh&&qe.skinning===!1||!$.isSkinnedMesh&&qe.skinning===!0||$.isInstancedMesh&&qe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&qe.instancingColor===!1&&$.instanceColor!==null||qe.envMap!==Oe||W.fog===!0&&qe.fog!==ve||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Me.numPlanes||qe.numIntersection!==Me.numIntersection)||qe.vertexAlphas!==We||qe.vertexTangents!==Ie||qe.morphTargets!==ze||qe.morphNormals!==yt||qe.morphColors!==St||qe.toneMapping!==Rn||K.isWebGL2===!0&&qe.morphTargetsCount!==Et)&&(wt=!0):(wt=!0,qe.__version=W.version);let bs=qe.currentProgram;wt===!0&&(bs=La(W,G,$));let kd=!1,Co=!1,Bl=!1;const nn=bs.getUniforms(),Ts=qe.uniforms;if(te.useProgram(bs.program)&&(kd=!0,Co=!0,Bl=!0),W.id!==T&&(T=W.id,Co=!0),kd||S!==I){nn.setValue(z,"projectionMatrix",I.projectionMatrix),nn.setValue(z,"viewMatrix",I.matrixWorldInverse);const yn=nn.map.cameraPosition;yn!==void 0&&yn.setValue(z,Ge.setFromMatrixPosition(I.matrixWorld)),K.logarithmicDepthBuffer&&nn.setValue(z,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&nn.setValue(z,"isOrthographic",I.isOrthographicCamera===!0),S!==I&&(S=I,Co=!0,Bl=!0)}if($.isSkinnedMesh){nn.setOptional(z,$,"bindMatrix"),nn.setOptional(z,$,"bindMatrixInverse");const yn=$.skeleton;yn&&(K.floatVertexTextures?(yn.boneTexture===null&&yn.computeBoneTexture(),nn.setValue(z,"boneTexture",yn.boneTexture,pe),nn.setValue(z,"boneTextureSize",yn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Vl=Y.morphAttributes;if((Vl.position!==void 0||Vl.normal!==void 0||Vl.color!==void 0&&K.isWebGL2===!0)&&Pe.update($,Y,bs),(Co||qe.receiveShadow!==$.receiveShadow)&&(qe.receiveShadow=$.receiveShadow,nn.setValue(z,"receiveShadow",$.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ts.envMap.value=Oe,Ts.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),Co&&(nn.setValue(z,"toneMappingExposure",v.toneMappingExposure),qe.needsLights&&ov(Ts,Bl),ve&&W.fog===!0&&ie.refreshFogUniforms(Ts,ve),ie.refreshMaterialUniforms(Ts,W,k,F,de),Tc.upload(z,qe.uniformsList,Ts,pe)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Tc.upload(z,qe.uniformsList,Ts,pe),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&nn.setValue(z,"center",$.center),nn.setValue(z,"modelViewMatrix",$.modelViewMatrix),nn.setValue(z,"normalMatrix",$.normalMatrix),nn.setValue(z,"modelMatrix",$.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const yn=W.uniformsGroups;for(let zl=0,cv=yn.length;zl<cv;zl++)if(K.isWebGL2){const Bd=yn[zl];Ne.update(Bd,bs),Ne.bind(Bd,bs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return bs}function ov(I,G){I.ambientLightColor.needsUpdate=G,I.lightProbe.needsUpdate=G,I.directionalLights.needsUpdate=G,I.directionalLightShadows.needsUpdate=G,I.pointLights.needsUpdate=G,I.pointLightShadows.needsUpdate=G,I.spotLights.needsUpdate=G,I.spotLightShadows.needsUpdate=G,I.rectAreaLights.needsUpdate=G,I.hemisphereLights.needsUpdate=G}function av(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(I,G,Y){xe.get(I.texture).__webglTexture=G,xe.get(I.depthTexture).__webglTexture=Y;const W=xe.get(I);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=Y===void 0,W.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,G){const Y=xe.get(I);Y.__webglFramebuffer=G,Y.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(I,G=0,Y=0){E=I,y=G,b=Y;let W=!0,$=null,ve=!1,we=!1;if(I){const Oe=xe.get(I);Oe.__useDefaultFramebuffer!==void 0?(te.bindFramebuffer(z.FRAMEBUFFER,null),W=!1):Oe.__webglFramebuffer===void 0?pe.setupRenderTarget(I):Oe.__hasExternalTextures&&pe.rebindTextures(I,xe.get(I.texture).__webglTexture,xe.get(I.depthTexture).__webglTexture);const We=I.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(we=!0);const Ie=xe.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Ie[G])?$=Ie[G][Y]:$=Ie[G],ve=!0):K.isWebGL2&&I.samples>0&&pe.useMultisampledRTT(I)===!1?$=xe.get(I).__webglMultisampledFramebuffer:Array.isArray(Ie)?$=Ie[Y]:$=Ie,w.copy(I.viewport),L.copy(I.scissor),U=I.scissorTest}else w.copy(X).multiplyScalar(k).floor(),L.copy(R).multiplyScalar(k).floor(),U=H;if(te.bindFramebuffer(z.FRAMEBUFFER,$)&&K.drawBuffers&&W&&te.drawBuffers(I,$),te.viewport(w),te.scissor(L),te.setScissorTest(U),ve){const Oe=xe.get(I.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+G,Oe.__webglTexture,Y)}else if(we){const Oe=xe.get(I.texture),We=G||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Oe.__webglTexture,Y||0,We)}T=-1},this.readRenderTargetPixels=function(I,G,Y,W,$,ve,we){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=xe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le){te.bindFramebuffer(z.FRAMEBUFFER,Le);try{const Oe=I.texture,We=Oe.format,Ie=Oe.type;if(We!==En&&it.convert(We)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Ie===Qr&&(Ae.has("EXT_color_buffer_half_float")||K.isWebGL2&&Ae.has("EXT_color_buffer_float"));if(Ie!==ls&&it.convert(Ie)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===ci&&(K.isWebGL2||Ae.has("OES_texture_float")||Ae.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=I.width-W&&Y>=0&&Y<=I.height-$&&z.readPixels(G,Y,W,$,it.convert(We),it.convert(Ie),ve)}finally{const Oe=E!==null?xe.get(E).__webglFramebuffer:null;te.bindFramebuffer(z.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(I,G,Y=0){const W=Math.pow(2,-Y),$=Math.floor(G.image.width*W),ve=Math.floor(G.image.height*W);pe.setTexture2D(G,0),z.copyTexSubImage2D(z.TEXTURE_2D,Y,0,0,I.x,I.y,$,ve),te.unbindTexture()},this.copyTextureToTexture=function(I,G,Y,W=0){const $=G.image.width,ve=G.image.height,we=it.convert(Y.format),Le=it.convert(Y.type);pe.setTexture2D(Y,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Y.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Y.unpackAlignment),G.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,W,I.x,I.y,$,ve,we,Le,G.image.data):G.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,W,I.x,I.y,G.mipmaps[0].width,G.mipmaps[0].height,we,G.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,W,I.x,I.y,we,Le,G.image),W===0&&Y.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),te.unbindTexture()},this.copyTextureToTexture3D=function(I,G,Y,W,$=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=I.max.x-I.min.x+1,we=I.max.y-I.min.y+1,Le=I.max.z-I.min.z+1,Oe=it.convert(W.format),We=it.convert(W.type);let Ie;if(W.isData3DTexture)pe.setTexture3D(W,0),Ie=z.TEXTURE_3D;else if(W.isDataArrayTexture)pe.setTexture2DArray(W,0),Ie=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);const ze=z.getParameter(z.UNPACK_ROW_LENGTH),yt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),St=z.getParameter(z.UNPACK_SKIP_PIXELS),Rn=z.getParameter(z.UNPACK_SKIP_ROWS),Si=z.getParameter(z.UNPACK_SKIP_IMAGES),Et=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,Et.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Et.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,I.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,I.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,I.min.z),Y.isDataTexture||Y.isData3DTexture?z.texSubImage3D(Ie,$,G.x,G.y,G.z,ve,we,Le,Oe,We,Et.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Ie,$,G.x,G.y,G.z,ve,we,Le,Oe,Et.data)):z.texSubImage3D(Ie,$,G.x,G.y,G.z,ve,we,Le,Oe,We,Et),z.pixelStorei(z.UNPACK_ROW_LENGTH,ze),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,yt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,St),z.pixelStorei(z.UNPACK_SKIP_ROWS,Rn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Si),$===0&&W.generateMipmaps&&z.generateMipmap(Ie),te.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?pe.setTextureCube(I,0):I.isData3DTexture?pe.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?pe.setTexture2DArray(I,0):pe.setTexture2D(I,0),te.unbindTexture()},this.resetState=function(){y=0,b=0,E=null,te.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Eh?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===_l?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===gt?js:Hm}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===js?gt:Wt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class _b extends Sl{}_b.prototype.isWebGL1Renderer=!0;class Ys extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class vb{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xu,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const sn=new N;class Ph{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=oi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=oi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=oi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=oi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ph(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ip=new N,sp=new ct,rp=new ct,yb=new N,op=new Ue,Ar=new N,gu=new mi,ap=new Ue,_u=new va;class xb extends Kt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $n),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Ar.fromBufferAttribute(t,n),this.applyBoneTransform(n,Ar),this.boundingBox.expandByPoint(Ar)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Ar.fromBufferAttribute(t,n),this.applyBoneTransform(n,Ar),this.boundingSphere.expandByPoint(Ar)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gu.copy(this.boundingSphere),gu.applyMatrix4(i),e.ray.intersectsSphere(gu)!==!1&&(ap.copy(i).invert(),_u.copy(e.ray).applyMatrix4(ap),!(this.boundingBox!==null&&_u.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,_u)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ct,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;sp.fromBufferAttribute(i.attributes.skinIndex,e),rp.fromBufferAttribute(i.attributes.skinWeight,e),ip.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=rp.getComponent(r);if(o!==0){const a=sp.getComponent(r);op.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(yb.copy(ip).applyMatrix4(op),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class og extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ag extends Gt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Dt,u=Dt,h,d){super(null,o,a,c,l,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cp=new Ue,Sb=new Ue;class Nh{constructor(e=[],t=[]){this.uuid=jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Sb;cp.multiplyMatrices(a,t[r]),cp.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Nh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Wm(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ag(t,e,e,En,ci);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new og),this.bones.push(o),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Uc extends un{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Cr=new Ue,lp=new Ue,nc=[],up=new $n,Mb=new Ue,No=new Kt,Lo=new mi;class Qn extends Kt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Uc(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Mb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $n),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cr),up.copy(e.boundingBox).applyMatrix4(Cr),this.boundingBox.union(up)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cr),Lo.copy(e.boundingSphere).applyMatrix4(Cr),this.boundingSphere.union(Lo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(No.geometry=this.geometry,No.material=this.material,No.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lo.copy(this.boundingSphere),Lo.applyMatrix4(n),e.ray.intersectsSphere(Lo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Cr),lp.multiplyMatrices(n,Cr),No.matrixWorld=lp,No.raycast(e,nc);for(let o=0,a=nc.length;o<a;o++){const c=nc[o];c.instanceId=r,c.object=this,t.push(c)}nc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Uc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Lh extends Yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hp=new N,dp=new N,fp=new Ue,vu=new va,ic=new mi;class Oh extends _t{constructor(e=new Cn,t=new Lh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)hp.fromBufferAttribute(t,i-1),dp.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=hp.distanceTo(dp);e.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ic.copy(n.boundingSphere),ic.applyMatrix4(i),ic.radius+=r,e.ray.intersectsSphere(ic)===!1)return;fp.copy(i).invert(),vu.copy(e.ray).applyMatrix4(fp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new N,u=new N,h=new N,d=new N,f=this.isLineSegments?2:1,m=n.index,g=n.attributes.position;if(m!==null){const p=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let v=p,M=x-1;v<M;v+=f){const y=m.getX(v),b=m.getX(v+1);if(l.fromBufferAttribute(g,y),u.fromBufferAttribute(g,b),vu.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let v=p,M=x-1;v<M;v+=f){if(l.fromBufferAttribute(g,v),u.fromBufferAttribute(g,v+1),vu.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const pp=new N,mp=new N;class cg extends Oh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)pp.fromBufferAttribute(t,i),mp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+pp.distanceTo(mp);e.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bb extends Oh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class lg extends Yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gp=new Ue,$u=new va,sc=new mi,rc=new N;class Tb extends _t{constructor(e=new Cn,t=new lg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sc.copy(n.boundingSphere),sc.applyMatrix4(i),sc.radius+=r,e.ray.intersectsSphere(sc)===!1)return;gp.copy(i).invert(),$u.copy(e.ray).applyMatrix4(gp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,_=f;m<_;m++){const g=l.getX(m);rc.fromBufferAttribute(h,g),_p(rc,g,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=d,_=f;m<_;m++)rc.fromBufferAttribute(h,m),_p(rc,m,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function _p(s,e,t,n,i,r,o){const a=$u.distanceSqToPoint(s);if(a<t){const c=new N;$u.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class Eb{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new _e:new N);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new N,i=[],r=[],o=[],a=new N,c=new Ue;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new N)}r[0]=new N,o[0]=new N;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Bt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Bt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function wb(s,e){const t=1-s;return t*t*t*e}function Ab(s,e){const t=1-s;return 3*t*t*s*e}function Cb(s,e){return 3*(1-s)*s*s*e}function Rb(s,e){return s*s*s*e}function yu(s,e,t,n,i){return wb(s,e)+Ab(s,t)+Cb(s,n)+Rb(s,i)}class vp extends Eb{constructor(e=new N,t=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new N){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yu(e,i.x,r.x,o.x,a.x),yu(e,i.y,r.y,o.y,a.y),yu(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Uh extends Cn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new N,d=new N,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const x=[],v=p/n;let M=0;p===0&&o===0?M=.5/t:p===n&&c===Math.PI&&(M=-.5/t);for(let y=0;y<=t;y++){const b=y/t;h.x=-e*Math.cos(i+b*r)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(i+b*r)*Math.sin(o+v*a),m.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),g.push(b+M,1-v),x.push(l++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const v=u[p][x+1],M=u[p][x],y=u[p+1][x],b=u[p+1][x+1];(p!==0||o>0)&&f.push(v,M,b),(p!==n-1||c<Math.PI)&&f.push(M,y,b)}this.setIndex(f),this.setAttribute("position",new Zt(m,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ib extends ui{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Fh extends Yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Th,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vs extends Fh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ls extends Yn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Te(16777215),this.specular=new Te(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Th,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Vs(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function ug(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function hg(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ku(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function kh(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}function Db(s,e,t,n,i=30){const r=s.clone();r.name=e;const o=[];for(let c=0;c<r.tracks.length;++c){const l=r.tracks[c],u=l.getValueSize(),h=[],d=[];for(let f=0;f<l.times.length;++f){const m=l.times[f]*i;if(!(m<t||m>=n)){h.push(l.times[f]);for(let _=0;_<u;++_)d.push(l.values[f*u+_])}}h.length!==0&&(l.times=Vs(h,l.times.constructor),l.values=Vs(d,l.values.constructor),o.push(l))}r.tracks=o;let a=1/0;for(let c=0;c<r.tracks.length;++c)a>r.tracks[c].times[0]&&(a=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*a);return r.resetDuration(),r}function Pb(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let o=0;o<i;++o){const a=t.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=s.tracks.find(function(p){return p.name===a.name&&p.ValueTypeName===c});if(l===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0;const f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const m=a.times.length-1;let _;if(r<=a.times[0]){const p=u,x=h-u;_=a.values.slice(p,x)}else if(r>=a.times[m]){const p=m*h+u,x=p+h-u;_=a.values.slice(p,x)}else{const p=a.createInterpolant(),x=u,v=h-u;p.evaluate(r),_=p.resultBuffer.slice(x,v)}c==="quaternion"&&new Ht().fromArray(_).normalize().conjugate().toArray(_);const g=l.times.length;for(let p=0;p<g;++p){const x=p*f+d;if(c==="quaternion")Ht.multiplyQuaternionsFlat(l.values,x,_,0,l.values,x);else{const v=f-d*2;for(let M=0;M<v;++M)l.values[x+M]-=_[M]}}}return s.blendMode=zm,s}const Rs={convertArray:Vs,isTypedArray:ug,getKeyframeOrder:hg,sortedArray:Ku,flattenJSON:kh,subclip:Db,makeClipAdditive:Pb};class xa{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Nb extends xa{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kr,endingEnd:kr}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Br:r=e,a=2*t-n;break;case Ic:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Br:o=e,c=2*n-t;break;case Ic:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,x=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,v=(-1-f)*g+(1.5+f)*_+.5*m,M=f*g-f*_;for(let y=0;y!==a;++y)r[y]=p*o[u+y]+x*o[l+y]+v*o[c+y]+M*o[h+y];return r}}class dg extends xa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}}class Lb extends xa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class gi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vs(t,this.TimeBufferType),this.values=Vs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Vs(e.times,Array),values:Vs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new dg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nb(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ko:t=this.InterpolantFactoryMethodDiscrete;break;case eo:t=this.InterpolantFactoryMethodLinear;break;case jl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ko;case this.InterpolantFactoryMethodLinear:return eo;case this.InterpolantFactoryMethodSmooth:return jl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&ug(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===jl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const h=a*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){const _=t[h+m];if(_!==t[d+m]||_!==t[f+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}gi.prototype.TimeBufferType=Float32Array;gi.prototype.ValueBufferType=Float32Array;gi.prototype.DefaultInterpolation=eo;class yo extends gi{}yo.prototype.ValueTypeName="bool";yo.prototype.ValueBufferType=Array;yo.prototype.DefaultInterpolation=Ko;yo.prototype.InterpolantFactoryMethodLinear=void 0;yo.prototype.InterpolantFactoryMethodSmooth=void 0;class fg extends gi{}fg.prototype.ValueTypeName="color";class io extends gi{}io.prototype.ValueTypeName="number";class Ob extends xa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)Ht.slerpFlat(r,0,o,l-a,o,l,c);return r}}class er extends gi{InterpolantFactoryMethodLinear(e){return new Ob(this.times,this.values,this.getValueSize(),e)}}er.prototype.ValueTypeName="quaternion";er.prototype.DefaultInterpolation=eo;er.prototype.InterpolantFactoryMethodSmooth=void 0;class xo extends gi{}xo.prototype.ValueTypeName="string";xo.prototype.ValueBufferType=Array;xo.prototype.DefaultInterpolation=Ko;xo.prototype.InterpolantFactoryMethodLinear=void 0;xo.prototype.InterpolantFactoryMethodSmooth=void 0;class so extends gi{}so.prototype.ValueTypeName="vector";class Zu{constructor(e,t=-1,n,i=bh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=jn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Fb(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(gi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=hg(c);c=Ku(c,1,u),l=Ku(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new io(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,m,_){if(f.length!==0){const g=[],p=[];kh(f,g,p,m),g.length!==0&&_.push(new h(d,g,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(const _ in f){const g=[],p=[];for(let x=0;x!==d[m].morphTargets.length;++x){const v=d[m];g.push(v.time),p.push(v.morphTarget===_?1:0)}i.push(new io(".morphTargetInfluence["+_+"]",g,p))}c=f.length*o}else{const f=".bones["+t[h].name+"]";n(so,f+".position",d,"pos",i),n(er,f+".quaternion",d,"rot",i),n(so,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ub(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return io;case"vector":case"vector2":case"vector3":case"vector4":return so;case"color":return fg;case"quaternion":return er;case"bool":case"boolean":return yo;case"string":return xo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Fb(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ub(s.type);if(s.times===void 0){const t=[],n=[];kh(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ro={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class kb{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],m=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}}const Bb=new kb;class So{constructor(e){this.manager=e!==void 0?e:Bb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}So.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ci={};class Vb extends Error{constructor(e,t){super(e),this.response=t}}class pg extends So{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ro.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ci[e]!==void 0){Ci[e].push({onLoad:t,onProgress:n,onError:i});return}Ci[e]=[],Ci[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Ci[e],h=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,m=f!==0;let _=0;const g=new ReadableStream({start(p){x();function x(){h.read().then(({done:v,value:M})=>{if(v)p.close();else{_+=M.byteLength;const y=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let b=0,E=u.length;b<E;b++){const T=u[b];T.onProgress&&T.onProgress(y)}p.enqueue(M),x()}})}}});return new Response(g)}else throw new Vb(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{ro.add(e,l);const u=Ci[e];delete Ci[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=Ci[e];if(u===void 0)throw this.manager.itemError(e),l;delete Ci[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class zb extends So{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ro.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Zo("img");function c(){u(),ro.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class mg extends So{constructor(e){super(e)}load(e,t,n,i){const r=new Gt,o=new zb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ml extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const xu=new Ue,yp=new N,xp=new N;class Bh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ih,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;yp.setFromMatrixPosition(e.matrixWorld),t.position.copy(yp),xp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xp),t.updateMatrixWorld(),xu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Gb extends Bh{constructor(){super(new on(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=to*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class gg extends Ml{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Gb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Sp=new Ue,Oo=new N,Su=new N;class Hb extends Bh{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Oo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Oo),Su.copy(n.position),Su.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Su),n.updateMatrixWorld(),i.makeTranslation(-Oo.x,-Oo.y,-Oo.z),Sp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sp)}}class Wb extends Ml{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Hb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Xb extends Bh{constructor(){super(new _o(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _g extends Ml{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new Xb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class vg extends Ml{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qu{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class qb extends So{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ro.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){ro.add(e,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){i&&i(c),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}let yg=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Mp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Mp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Mp(){return(typeof performance>"u"?Date:performance).now()}class jb{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Ht.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;Ht.multiplyQuaternionsFlat(e,o,e,t,e,n),Ht.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Vh="\\[\\]\\.:\\/",Yb=new RegExp("["+Vh+"]","g"),zh="[^"+Vh+"]",$b="[^"+Vh.replace("\\.","")+"]",Kb=/((?:WC+[\/:])*)/.source.replace("WC",zh),Zb=/(WCOD+)?/.source.replace("WCOD",$b),Qb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zh),Jb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zh),eT=new RegExp("^"+Kb+Zb+Qb+Jb+"$"),tT=["material","materials","bones","map"];class nT{constructor(e,t,n){const i=n||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class tt{constructor(e,t,n){this.path=t,this.parsedPath=n||tt.parseTrackName(t),this.node=tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new tt.Composite(e,t,n):new tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yb,"")}static parseTrackName(e){const t=eT.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);tT.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tt.Composite=nT;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class iT{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:kr,endingEnd:kr};for(let l=0;l!==o;++l){const u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Vm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case zm:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case bh:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===Hv;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Gv){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Br,i.endingEnd=Br):(e?i.endingStart=this.zeroSlopeAtStart?Br:kr:i.endingStart=Ic,t?i.endingEnd=this.zeroSlopeAtEnd?Br:kr:i.endingEnd=Ic)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}}const sT=new Float32Array(1);class rT extends ji{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){const d=i[h],f=d.name;let m=u[f];if(m!==void 0)++m.referenceCount,o[h]=m;else{if(m=o[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;m=new jb(tt.create(n,f,_),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),o[h]=m}a[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new dg(new Float32Array(2),new Float32Array(2),1,sT),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?Zu.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=bh),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new iT(this,o,t,n);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Zu.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class xg{constructor(e,t,n=0,i=1/0){this.ray=new va(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ch,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ju(e,this,n,t),n.sort(bp),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Ju(e[i],this,n,t);return n.sort(bp),n}}function bp(s,e){return s.distance-e.distance}function Ju(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)Ju(i[r],e,t,!0)}}class oT extends cg{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Cn;i.setAttribute("position",new Zt(t,3)),i.setAttribute("color",new Zt(n,3));const r=new Lh({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new Te,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yh);function Tp(s,e){if(e===Wv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Wu||e===Gm){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Wu)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Sg extends So{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new hT(t)}),this.register(function(t){return new yT(t)}),this.register(function(t){return new xT(t)}),this.register(function(t){return new ST(t)}),this.register(function(t){return new fT(t)}),this.register(function(t){return new pT(t)}),this.register(function(t){return new mT(t)}),this.register(function(t){return new gT(t)}),this.register(function(t){return new uT(t)}),this.register(function(t){return new _T(t)}),this.register(function(t){return new dT(t)}),this.register(function(t){return new vT(t)}),this.register(function(t){return new cT(t)}),this.register(function(t){return new MT(t)}),this.register(function(t){return new bT(t)})}load(e,t,n,i){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Qu.extractUrlBase(e),this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new pg(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Mg){try{o[$e.KHR_BINARY_GLTF]=new TT(e)}catch(h){i&&i(h);return}r=JSON.parse(o[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new FT(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case $e.KHR_MATERIALS_UNLIT:o[h]=new lT;break;case $e.KHR_DRACO_MESH_COMPRESSION:o[h]=new ET(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:o[h]=new wT;break;case $e.KHR_MESH_QUANTIZATION:o[h]=new AT;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function aT(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class cT{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new Te(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Wt);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new _g(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Wb(u),l.distance=h;break;case"spot":l=new gg(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ss(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class lT{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return li}extendParams(e,t,n){const i=[];e.color=new Te(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Wt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,gt))}return Promise.all(i)}}class uT{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class hT{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vs}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new _e(a,a)}return Promise.all(r)}}class dT{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vs}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class fT{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vs}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Wt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,gt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class pT{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vs}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class mT{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vs}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(a[0],a[1],a[2],Wt),Promise.all(r)}}class gT{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vs}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class _T{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vs}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(a[0],a[1],a[2],Wt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,gt)),Promise.all(r)}}class vT{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vs}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class yT{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class xT{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ST{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class MT{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class bT{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Nn.TRIANGLES&&l.mode!==Nn.TRIANGLE_STRIP&&l.mode!==Nn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const m of h){const _=new Ue,g=new N,p=new Ht,x=new N(1,1,1),v=new Qn(m.geometry,m.material,d);for(let M=0;M<d;M++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,M),c.SCALE&&x.fromBufferAttribute(c.SCALE,M),v.setMatrixAt(M,_.compose(g,p,x));for(const M in c)M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&m.geometry.setAttribute(M,c[M]);_t.prototype.copy.call(v,m),this.parser.assignFinalMaterial(v),f.push(v)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Mg="glTF",Uo=12,Ep={JSON:1313821514,BIN:5130562};class TT{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Uo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Mg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Uo,r=new DataView(e,Uo);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Ep.JSON){const l=new Uint8Array(e,Uo+o,a);this.content=n.decode(l)}else if(c===Ep.BIN){const l=Uo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ET{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=eh[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=eh[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Xr[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(d){for(const f in d.attributes){const m=d.attributes[f],_=c[f];_!==void 0&&(m.normalized=_)}h(d)},a,l)})})}}class wT{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class AT{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class bg extends xa{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,m=e*l,_=m-l,g=-2*f+3*d,p=f-d,x=1-g,v=p-d+h;for(let M=0;M!==a;M++){const y=o[_+M+a],b=o[_+M+c]*u,E=o[m+M+a],T=o[m+M]*u;r[M]=x*y+v*b+g*E+p*T}return r}}const CT=new Ht;class RT extends bg{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return CT.fromArray(r).normalize().toArray(r),r}}const Nn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Xr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},wp={9728:Dt,9729:dn,9984:Hu,9985:Nm,9986:bc,9987:Js},Ap={33071:Un,33648:Rc,10497:mn},Mu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},eh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ns={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},IT={CUBICSPLINE:void 0,LINEAR:eo,STEP:Ko},bu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function DT(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Fh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Hi})),s.DefaultMaterial}function Is(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ss(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function PT(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function NT(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function LT(s){let e;const t=s.extensions&&s.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Tu(t.attributes):e=s.indices+":"+Tu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Tu(s.targets[n]);return e}function Tu(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function th(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function OT(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const UT=new Ue;class FT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new aT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new mg(this.options.manager):this.textureLoader=new qb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new pg(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Is(r,a,i),ss(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Qu.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Mu[i.type],a=Xr[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new un(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Mu[i.type],l=Xr[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let _,g;if(f&&f!==h){const p=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let v=t.cache.get(x);v||(_=new l(a,p*f,i.count*f/u),v=new vb(_,f/u),t.cache.add(x,v)),g=new Ph(v,c,d%f/u,m)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),g=new un(_,c,m);if(i.sparse!==void 0){const p=Mu.SCALAR,x=Xr[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,y=new x(o[1],v,i.sparse.count*p),b=new l(o[2],M,i.sparse.count*c);a!==null&&(g=new un(g.array.slice(),g.itemSize,g.normalized));for(let E=0,T=y.length;E<T;E++){const S=y[E];if(g.setX(S,b[E*c]),c>=2&&g.setY(S,b[E*c+1]),c>=3&&g.setZ(S,b[E*c+2]),c>=4&&g.setW(S,b[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=wp[d.magFilter]||dn,u.minFilter=wp[d.minFilter]||Js,u.wrapS=Ap[d.wrapS]||mn,u.wrapT=Ap[d.wrapT]||mn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(_){const g=new Gt(_);g.needsUpdate=!0,d(g)}),t.load(Qu.resolveURL(h,r.path),m,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),h.userData.mimeType=o.mimeType||OT(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new lg,Yn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Lh,Yn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Fh}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[$e.KHR_MATERIALS_UNLIT]){const h=i[$e.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Te(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Wt),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,gt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Tn);const u=r.alphaMode||bu.OPAQUE;if(u===bu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===bu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==li&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new _e(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==li&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==li){const h=r.emissiveFactor;a.emissive=new Te().setRGB(h[0],h[1],h[2],Wt)}return r.emissiveTexture!==void 0&&o!==li&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,gt)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),ss(h,r),t.associations.set(h,{materials:e}),r.extensions&&Is(i,h,r),h})}createUniqueName(e){const t=tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Cp(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=LT(l),h=i[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Cp(new Cn,l,t),i[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?DT(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,m=u.length;f<m;f++){const _=u[f],g=o[f];let p;const x=l[f];if(g.mode===Nn.TRIANGLES||g.mode===Nn.TRIANGLE_STRIP||g.mode===Nn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new xb(_,x):new Kt(_,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Nn.TRIANGLE_STRIP?p.geometry=Tp(p.geometry,Gm):g.mode===Nn.TRIANGLE_FAN&&(p.geometry=Tp(p.geometry,Wu));else if(g.mode===Nn.LINES)p=new cg(_,x);else if(g.mode===Nn.LINE_STRIP)p=new Oh(_,x);else if(g.mode===Nn.LINE_LOOP)p=new bb(_,x);else if(g.mode===Nn.POINTS)p=new Tb(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&NT(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ss(p,r),g.extensions&&Is(i,p,g),t.assignFinalMaterial(p),h.push(p)}for(let f=0,m=h.length;f<m;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Is(i,h[0],r),h[0];const d=new Bs;r.extensions&&Is(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=h.length;f<m;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new on(et.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new _o(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ss(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const d=new Ue;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Nh(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],m=i.samplers[f.sampler],_=f.target,g=_.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,x=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(m),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],m=h[2],_=h[3],g=h[4],p=[];for(let x=0,v=d.length;x<v;x++){const M=d[x],y=f[x],b=m[x],E=_[x],T=g[x];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const S=n._createAnimationTracks(M,y,b,E,T);if(S)for(let w=0;w<S.length;w++)p.push(S[w])}return new Zu(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,UT)});for(let f=0,m=h.length;f<m;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new og:l.length>1?u=new Bs:l.length===1?u=l[0]:u=new _t,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),ss(u,r),r.extensions&&Is(n,u,r),r.matrix!==void 0){const h=new Ue;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Bs;n.name&&(r.name=i.createUniqueName(n.name)),ss(r,n),n.extensions&&Is(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof Yn||d instanceof Gt)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];ns[r.path]===ns.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(ns[r.path]){case ns.weights:l=io;break;case ns.rotation:l=er;break;case ns.position:case ns.scale:l=so;break;default:switch(n.itemSize){case 1:l=io;break;case 2:case 3:default:l=so;break}break}const u=i.interpolation!==void 0?IT[i.interpolation]:eo,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const m=new l(c[d]+"."+ns[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=th(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof er?RT:bg;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function kT(s,e,t){const n=e.attributes,i=new $n;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new N(c[0],c[1],c[2]),new N(l[0],l[1],l[2])),a.normalized){const u=th(Xr[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new N,c=new N;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const _=th(Xr[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new mi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Cp(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=eh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Qe.workingColorSpace!==Wt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),ss(s,e),kT(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?PT(s,e.targets,t):s})}var zr={i8:"i8",ui8:"ui8",ui8c:"ui8c",i16:"i16",ui16:"ui16",i32:"i32",ui32:"ui32",f32:"f32",f64:"f64",eid:"eid"},Rp={i8:"Int8",ui8:"Uint8",ui8c:"Uint8Clamped",i16:"Int16",ui16:"Uint16",i32:"Int32",ui32:"Uint32",eid:"Uint32",f32:"Float32",f64:"Float64"},zs={i8:Int8Array,ui8:Uint8Array,ui8c:Uint8ClampedArray,i16:Int16Array,ui16:Uint16Array,i32:Int32Array,ui32:Uint32Array,f32:Float32Array,f64:Float64Array,eid:Uint32Array},Ip={uint8:2**8,uint16:2**16,uint32:2**32},BT=s=>e=>Math.ceil(e/s)*s,VT=BT(4),zT=Symbol("storeRef"),nh=Symbol("storeSize"),GT=Symbol("storeMaps"),$s=Symbol("storeFlattened"),oc=Symbol("storeBase"),HT=Symbol("storeType"),Tg=Symbol("storeArrayElementCounts"),Ec=Symbol("storeSubarrays"),Eg=Symbol("subarrayCursors"),WT=Symbol("subarray"),ih=Symbol("parentArray"),wg=Symbol("tagStore"),Dp=Symbol("indexType"),Pp=Symbol("indexBytes"),Ag=Symbol("isEidType"),Ri={},XT=(s,e)=>{if(ArrayBuffer.isView(s))s[e]=s.slice(0);else{const t=s[ih].slice(0);s[e]=s.map((n,i)=>{const{length:r}=s[i],o=r*i,a=o+r;return t.subarray(o,a)})}},qT=(s,e)=>{s[$s]&&s[$s].forEach(t=>{ArrayBuffer.isView(t)?t[e]=0:t[e].fill(0)})},jT=(s,e)=>{const t=e*zs[s].BYTES_PER_ELEMENT,n=new ArrayBuffer(t),i=new zs[s](n);return i[Ag]=s===zr.eid,i},YT=(s,e,t)=>{const n=s[nh],i=Array(n).fill(0);i[HT]=e,i[Ag]=e===zr.eid;const r=s[Eg],o=t<=Ip.uint8?zr.ui8:t<=Ip.uint16?zr.ui16:zr.ui32;if(!t)throw new Error("bitECS - Must define component array length");if(!zs[e])throw new Error(`bitECS - Invalid component array property type ${e}`);if(!s[Ec][e]){const l=s[Tg][e],u=new zs[e](VT(l*n));u[Dp]=Rp[o],u[Pp]=zs[o].BYTES_PER_ELEMENT,s[Ec][e]=u}const a=r[e],c=a+n*t;r[e]=c,i[ih]=s[Ec][e].subarray(a,c);for(let l=0;l<n;l++){const u=t*l,h=u+t;i[l]=i[ih].subarray(u,h),i[l][Dp]=Rp[o],i[l][Pp]=zs[o].BYTES_PER_ELEMENT,i[l][WT]=!0}return i},Np=s=>Array.isArray(s)&&typeof s[0]=="string"&&typeof s[1]=="number",$T=(s,e)=>{const t=Symbol("store");if(!s||!Object.keys(s).length)return Ri[t]={[nh]:e,[wg]:!0,[oc]:()=>Ri[t]},Ri[t];s=JSON.parse(JSON.stringify(s));const n={},i=o=>{const a=Object.keys(o);for(const c of a)Np(o[c])?(n[o[c][0]]||(n[o[c][0]]=0),n[o[c][0]]+=o[c][1]):o[c]instanceof Object&&i(o[c])};i(s);const r={[nh]:e,[GT]:{},[Ec]:{},[zT]:t,[Eg]:Object.keys(zs).reduce((o,a)=>({...o,[a]:0}),{}),[$s]:[],[Tg]:n};if(s instanceof Object&&Object.keys(s).length){const o=(a,c)=>{if(typeof a[c]=="string")a[c]=jT(a[c],e),a[c][oc]=()=>Ri[t],r[$s].push(a[c]);else if(Np(a[c])){const[l,u]=a[c];a[c]=YT(r,l,u),a[c][oc]=()=>Ri[t],r[$s].push(a[c])}else a[c]instanceof Object&&(a[c]=Object.keys(a[c]).reduce(o,a[c]));return a};return Ri[t]=Object.assign(Object.keys(s).reduce(o,s),r),Ri[t][oc]=()=>Ri[t],Ri[t]}},Vo=()=>{const s=[],e=[];s.sort=function(o){const a=Array.prototype.sort.call(this,o);for(let c=0;c<s.length;c++)e[s[c]]=c;return a};const t=o=>s[e[o]]===o;return{add:o=>{t(o)||(e[o]=s.push(o)-1)},remove:o=>{if(!t(o))return;const a=e[o],c=s.pop();c!==o&&(s[a]=c,e[c]=a)},has:t,sparse:e,dense:s,reset:()=>{s.length=0,e.length=0}}},ds=Symbol("entityMasks"),bl=Symbol("entityComponents"),tr=Symbol("entitySparseSet"),qo=Symbol("entityArray"),KT=1e5,sh=0,Cg=KT,Gh=()=>Cg,zo=[],ZT=.01,QT=ZT,JT=()=>sh,eE=new Map,Lp=s=>{const e=s[Yh]?zo.length?zo.shift():sh++:zo.length>Math.round(Cg*QT)?zo.shift():sh++;if(e>s[jh])throw new Error("bitECS - max entities reached");return s[tr].add(e),eE.set(e,s),s[Hh].forEach(t=>{Wh(s,t,e)&&Xh(t,e)}),s[bl].set(e,new Set),e},tE=(s,e)=>{if(s[tr].has(e)){s[Tl].forEach(t=>{Dg(s,t,e)}),s[Yh]||zo.push(e),s[tr].remove(e),s[bl].delete(e),s[Pg].delete(s[oh].get(e)),s[oh].delete(e);for(let t=0;t<s[ds].length;t++)s[ds][t][e]=0}},nE=Symbol("$modifier"),Tl=Symbol("queries"),Hh=Symbol("notQueries"),iE=Symbol("queryAny"),sE=Symbol("queryAll"),rE=Symbol("queryNone"),Fc=Symbol("queryMap"),jo=Symbol("$dirtyQueries"),Rg=Symbol("queryComponents"),oE=(s,e)=>{const t=[],n=[],i=[];e[Rg].forEach(y=>{if(typeof y=="function"&&y[nE]){const[b,E]=y();s[Vi].has(b)||rh(s,b),E==="not"&&n.push(b),E==="changed"&&(i.push(b),t.push(b))}else s[Vi].has(y)||rh(s,y),t.push(y)});const r=y=>s[Vi].get(y),o=t.concat(n).map(r),a=Vo(),c=[],l=[],u=Vo(),h=Vo(),d=Vo(),f=o.map(y=>y.generationId).reduce((y,b)=>(y.includes(b)||y.push(b),y),[]),m=(y,b)=>(y[b.generationId]||(y[b.generationId]=0),y[b.generationId]|=b.bitflag,y),_=t.map(r).reduce(m,{}),g=n.map(r).reduce(m,{}),p=o.reduce(m,{}),x=t.filter(y=>!y[wg]).map(y=>Object.getOwnPropertySymbols(y).includes($s)?y[$s]:[y]).reduce((y,b)=>y.concat(b),[]),M=Object.assign(a,{archetypes:c,changed:l,components:t,notComponents:n,changedComponents:i,allComponents:o,masks:_,notMasks:g,hasMasks:p,generations:f,flatProps:x,toRemove:u,entered:h,exited:d,shadows:[]});s[Fc].set(e,M),s[Tl].add(M),o.forEach(y=>{y.queries.add(M)}),n.length&&s[Hh].add(M);for(let y=0;y<JT();y++){if(!s[tr].has(y))continue;Wh(s,M,y)&&Xh(M,y)}},aE=(s,e)=>{const t=Symbol(),n=s.flatProps[e];return XT(n,t),s.shadows[e]=n[t],n[t]},cE=(s,e)=>{e&&(s.changed=[]);const{flatProps:t,shadows:n}=s;for(let i=0;i<s.dense.length;i++){const r=s.dense[i];let o=!1;for(let a=0;a<t.length;a++){const c=t[a],l=n[a]||aE(s,a);if(ArrayBuffer.isView(c[r])){for(let u=0;u<c[r].length;u++)if(c[r][u]!==l[r][u]){o=!0;break}l[r].set(c[r])}else c[r]!==l[r]&&(o=!0,l[r]=c[r])}o&&s.changed.push(r)}return s.changed},Ig=(...s)=>{let e,t,n,i;if(Array.isArray(s[0])&&(e=s[0]),e===void 0||e[Vi]!==void 0)return o=>o?o[qo]:e[qo];const r=function(o,a=!0){o[Fc].has(r)||oE(o,r);const c=o[Fc].get(r);return uE(o),c.changedComponents.length?cE(c,a):c.dense};return r[Rg]=e,r[iE]=t,r[sE]=n,r[rE]=i,r},Wh=(s,e,t)=>{const{masks:n,notMasks:i,generations:r}=e;for(let o=0;o<r.length;o++){const a=r[o],c=n[a],l=i[a],u=s[ds][a][t];if(l&&u&l||c&&(u&c)!==c)return!1}return!0},Xh=(s,e)=>{s.toRemove.remove(e),s.entered.add(e),s.add(e)},lE=s=>{for(let e=s.toRemove.dense.length-1;e>=0;e--){const t=s.toRemove.dense[e];s.toRemove.remove(t),s.remove(t)}},uE=s=>{s[jo].size&&(s[jo].forEach(lE),s[jo].clear())},Dg=(s,e,t)=>{!e.has(t)||e.toRemove.has(t)||(e.toRemove.add(t),s[jo].add(e),e.exited.add(t))},Vi=Symbol("componentMap"),qh=(s,e)=>{const t=$T(s,e||Gh());return s&&Object.keys(s).length,t},hE=s=>{s[Yo]*=2,s[Yo]>=2**31&&(s[Yo]=1,s[ds].push(new Uint32Array(s[jh])))},rh=(s,e)=>{if(!e)throw new Error("bitECS - Cannot register null or undefined component");const t=new Set,n=new Set,i=new Set;s[Tl].forEach(r=>{r.allComponents.includes(e)&&t.add(r)}),s[Vi].set(e,{generationId:s[ds].length-1,bitflag:s[Yo],store:e,queries:t,notQueries:n,changedQueries:i}),hE(s)},dE=(s,e,t)=>{const n=s[Vi].get(e);if(!n)return!1;const{generationId:i,bitflag:r}=n;return(s[ds][i][t]&r)===r},ac=(s,e,t,n=!1)=>{if(t===void 0)throw new Error("bitECS - entity is undefined.");if(!s[tr].has(t))throw new Error("bitECS - entity does not exist in the world.");if(s[Vi].has(e)||rh(s,e),dE(s,e,t))return;const i=s[Vi].get(e),{generationId:r,bitflag:o,queries:a,notQueries:c}=i;s[ds][r][t]|=o,a.forEach(l=>{l.toRemove.remove(t);const u=Wh(s,l,t);u&&(l.exited.remove(t),Xh(l,t)),u||(l.entered.remove(t),Dg(s,l,t))}),s[bl].get(t).add(e),n&&qT(e,t)},jh=Symbol("size"),Yo=Symbol("bitflag"),fE=Symbol("archetypes"),Pg=Symbol("localEntities"),oh=Symbol("localEntityLookup"),Yh=Symbol("manualEntityRecycling"),pE=(...s)=>{const e=typeof s[0]=="object"?s[0]:{},t=typeof s[0]=="number"?s[0]:typeof s[1]=="number"?s[1]:Gh();return mE(e,t),e},mE=(s,e=Gh())=>(s[jh]=e,s[qo]&&s[qo].forEach(t=>tE(s,t)),s[ds]=[new Uint32Array(e)],s[bl]=new Map,s[fE]=[],s[tr]=Vo(),s[qo]=s[tr].dense,s[Yo]=1,s[Vi]=new Map,s[Fc]=new Map,s[Tl]=new Set,s[Hh]=new Set,s[jo]=new Set,s[Pg]=new Map,s[oh]=new Map,s[Yh]=!1,s),gE=(...s)=>e=>{let t=e;for(let n=0;n<s.length;n++){const i=s[n];t=i(t)}return t},_E=zr;const vE=s=>{const e=pE();return s===void 0?e.camera=new on(120,1/(window.innerWidth/window.innerHeight),.01,1e3):e.camera=s,e.scene=new Ys,e.renderer=new Sl({antialias:!1}),e.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(e.renderer.domElement),e.camera.aspect=window.innerWidth/window.innerHeight,e.camera.updateProjectionMatrix(),window.addEventListener("resize",()=>{e.camera.aspect=window.innerWidth/window.innerHeight,e.camera.updateProjectionMatrix(),e.renderer.setSize(window.innerWidth,window.innerHeight),console.log(e.renderer.getRenderTarget())}),e.objects=new Map,e.clock=new yg,e.time={last:0,delta:0,elapsed:0},e.pointer=new _e,e},{f32:Gs}=_E,Op={x:Gs,y:Gs,z:Gs},yE={x:Gs,y:Gs,z:Gs,w:Gs},xE={position:Op,rotation:yE,scale:Op},oo=qh(xE),Ng=qh(),Lg=qh(),Up=(s,e)=>(s.eid=e,Object.defineProperty(s.position,"eid",{get:()=>e}),Object.defineProperty(s.position,"store",{get:()=>oo.position}),Object.defineProperty(s.position,"x",{get(){return this.store.x[this.eid]},set(t){this.store.x[this.eid]=t}}),Object.defineProperty(s.position,"y",{get(){return this.store.y[this.eid]},set(t){this.store.y[this.eid]=t}}),Object.defineProperty(s.position,"z",{get(){return this.store.z[this.eid]},set(t){this.store.z[this.eid]=t}}),Object.defineProperty(s.rotation,"eid",{get:()=>e}),Object.defineProperty(s.rotation,"store",{get:()=>oo.rotation}),Object.defineProperty(s.rotation,"_x",{get(){return this.store.x[this.eid]},set(t){this.store.x[this.eid]=t}}),Object.defineProperty(s.rotation,"_y",{get(){return this.store.y[this.eid]},set(t){this.store.y[this.eid]=t}}),Object.defineProperty(s.rotation,"_z",{get(){return this.store.z[this.eid]},set(t){this.store.z[this.eid]=t}}),s);let Og={MoveDir:new _e,SPACE:0,LeftClick:0,RightClick:0,pointer:new _e,diffX:0,diffY:0,pointerX:.5,pointerY:.5,startX:.5,startY:.5,mouseMove:!1};const Fp={type:"start"},SE={type:"end"};class ME extends ji{constructor(e){super();const t=new _e(0,1),n=new _e(0,-1),i=new _e(1,0),r=new _e(-1,0);this.domElement=e,this.domElement.style.touchAction="none";const o=this;this.current_input=Og;let a=[];this.touches={ONE:Cc.MOVE,TWO:Cc.DOLLY_PAN};const c=[],l={},u={NONE:-1,MOVE:0};let h=u.NONE;function d(R){return a.includes(R)}this.keydown=function(R){a.includes(R.keyCode)||a.push(R.keyCode)},this.keyup=function(R){a.includes(R.keyCode)&&a.splice(a.indexOf(R.keyCode),1)},this.checkGameKeys=function(){this.current_input.MoveDir.set(0,0),d(65)&&this.current_input.MoveDir.add(r),d(68)&&this.current_input.MoveDir.add(i),d(87)&&this.current_input.MoveDir.add(t),d(83)&&this.current_input.MoveDir.add(n)};let f=!1,m=window.innerWidth/2,_=window.innerHeight/2,g=window.innerWidth/2,p=window.innerHeight/2,x=0,v=0;this.update=function(R){this.checkGameKeys(),this.current_input.diffX=x/window.innerWidth,this.current_input.diffY=v/window.innerWidth,this.current_input.startX=g/window.innerWidth*2-1,this.current_input.startY=-(p/window.innerWidth)*2+1,this.current_input.pointerX=m/window.innerWidth*2-1,this.current_input.pointerY=-(_/window.innerWidth)*2+1,this.current_input.mouseMove=f,x=v=0};const M=this.keydown.bind(this),y=this.keyup.bind(this);function b(R){let H=l[R.pointerId];H===void 0&&(H=new _e,l[R.pointerId]=H),H.set(R.pageX,R.pageY)}function E(R){switch(b(R),c.length){case 1:if(o.enableRotate===!1)return;T(),h=u.MOVE;break;case 2:switch(o.touches.TWO){default:h=u.NONE}break;default:h=u.NONE}h!==u.NONE&&o.dispatchEvent(Fp)}function T(){c.length===1&&(m=c[0].pageX,g=c[0].pageX,_=c[0].pageY,p=c[0].pageY)}function S(R){switch(b(R),h){case u.MOVE:if(o.enableRotate===!1)return;w(R);break;default:h=u.NONE}}function w(R){c.length===1&&(f=!0,R.pageX<m?x=m-R.pageX:R.pageX>m&&(x=R.pageX-m),x=R.pageX-m,R.pageY<_?v=_-R.pageY:R.pageY>_&&(v=R.pageY-_),v=R.pageY-_,m=R.pageX,_=R.pageY)}let L=On.None;function U(R){switch(R.button){case 0:L=On.LEFT,V(R);break;case 1:L=On.MIDDLE;break;case 2:L=On.RIGHT;break;default:L=-1}h!==u.NONE&&o.dispatchEvent(Fp)}function V(R){m=R.pageX,_=R.pageY,g=R.pageX,p=R.pageY}function C(R){if(o.enabled!==!1)switch(L){case On.LEFT:if(o.enableZoom===!1)return;P(R);break;case On.MIDDLE:if(o.enablePan===!1)return;handleMouseMovePan(R);break}}function P(R){f=!0,R.pageX<m?x=m-R.pageX:R.pageX>m&&(x=R.pageX-m),x=R.pageX-m,R.pageY<_?v=_-R.pageY:R.pageY>_&&(v=R.pageY-_),v=R.pageY-_,m=R.pageX,_=R.pageY}function F(R){c.push(R)}function k(R){delete l[R.pointerId];for(let H=0;H<c.length;H++)if(c[H].pointerId==R.pointerId){c.splice(H,1);return}}function j(R){o.enabled!==!1&&(c.length===0&&(o.domElement.setPointerCapture(R.pointerId),o.domElement.addEventListener("pointermove",B),o.domElement.addEventListener("pointerup",X)),F(R),R.pointerType==="touch"?E(R):U(R))}function B(R){o.enabled!==!1&&(R.pointerType==="touch"?S(R):C(R))}function X(R){k(R),c.length===0&&(o.domElement.releasePointerCapture(R.pointerId),o.domElement.removeEventListener("pointermove",B),o.domElement.removeEventListener("pointerup",X)),o.dispatchEvent(SE),L=-1,f=!1,x=0,v=0}window.addEventListener("keydown",M,!1),window.addEventListener("keyup",y,!1),o.domElement.addEventListener("pointerdown",j,!1),o.domElement.addEventListener("pointercancel",X,!1)}init(e){}execute(e,t){this.checkGameKeys()}}const Ug="14.7.77",kp=(s,e,t)=>({endTime:e,insertTime:t,type:"exponentialRampToValue",value:s}),Bp=(s,e,t)=>({endTime:e,insertTime:t,type:"linearRampToValue",value:s}),ah=(s,e)=>({startTime:e,type:"setValue",value:s}),Fg=(s,e,t)=>({duration:t,startTime:e,type:"setValueCurve",values:s}),kg=(s,e,{startTime:t,target:n,timeConstant:i})=>n+(e-n)*Math.exp((t-s)/i),Gr=s=>s.type==="exponentialRampToValue",kc=s=>s.type==="linearRampToValue",rs=s=>Gr(s)||kc(s),$h=s=>s.type==="setValue",Oi=s=>s.type==="setValueCurve",Bc=(s,e,t,n)=>{const i=s[e];return i===void 0?n:rs(i)||$h(i)?i.value:Oi(i)?i.values[i.values.length-1]:kg(t,Bc(s,e-1,i.startTime,n),i)},Vp=(s,e,t,n,i)=>t===void 0?[n.insertTime,i]:rs(t)?[t.endTime,t.value]:$h(t)?[t.startTime,t.value]:Oi(t)?[t.startTime+t.duration,t.values[t.values.length-1]]:[t.startTime,Bc(s,e-1,t.startTime,i)],ch=s=>s.type==="cancelAndHold",lh=s=>s.type==="cancelScheduledValues",is=s=>ch(s)||lh(s)?s.cancelTime:Gr(s)||kc(s)?s.endTime:s.startTime,zp=(s,e,t,{endTime:n,value:i})=>t===i?i:0<t&&0<i||t<0&&i<0?t*(i/t)**((s-e)/(n-e)):0,Gp=(s,e,t,{endTime:n,value:i})=>t+(s-e)/(n-e)*(i-t),bE=(s,e)=>{const t=Math.floor(e),n=Math.ceil(e);return t===n?s[t]:(1-(e-t))*s[t]+(1-(n-e))*s[n]},TE=(s,{duration:e,startTime:t,values:n})=>{const i=(s-t)/e*(n.length-1);return bE(n,i)},cc=s=>s.type==="setTarget";class EE{constructor(e){this._automationEvents=[],this._currenTime=0,this._defaultValue=e}[Symbol.iterator](){return this._automationEvents[Symbol.iterator]()}add(e){const t=is(e);if(ch(e)||lh(e)){const n=this._automationEvents.findIndex(r=>lh(e)&&Oi(r)?r.startTime+r.duration>=t:is(r)>=t),i=this._automationEvents[n];if(n!==-1&&(this._automationEvents=this._automationEvents.slice(0,n)),ch(e)){const r=this._automationEvents[this._automationEvents.length-1];if(i!==void 0&&rs(i)){if(r!==void 0&&cc(r))throw new Error("The internal list is malformed.");const o=r===void 0?i.insertTime:Oi(r)?r.startTime+r.duration:is(r),a=r===void 0?this._defaultValue:Oi(r)?r.values[r.values.length-1]:r.value,c=Gr(i)?zp(t,o,a,i):Gp(t,o,a,i),l=Gr(i)?kp(c,t,this._currenTime):Bp(c,t,this._currenTime);this._automationEvents.push(l)}if(r!==void 0&&cc(r)&&this._automationEvents.push(ah(this.getValue(t),t)),r!==void 0&&Oi(r)&&r.startTime+r.duration>t){const o=t-r.startTime,a=(r.values.length-1)/r.duration,c=Math.max(2,1+Math.ceil(o*a)),l=o/(c-1)*a,u=r.values.slice(0,c);if(l<1)for(let h=1;h<c;h+=1){const d=l*h%1;u[h]=r.values[h-1]*(1-d)+r.values[h]*d}this._automationEvents[this._automationEvents.length-1]=Fg(u,r.startTime,o)}}}else{const n=this._automationEvents.findIndex(o=>is(o)>t),i=n===-1?this._automationEvents[this._automationEvents.length-1]:this._automationEvents[n-1];if(i!==void 0&&Oi(i)&&is(i)+i.duration>t)return!1;const r=Gr(e)?kp(e.value,e.endTime,this._currenTime):kc(e)?Bp(e.value,t,this._currenTime):e;if(n===-1)this._automationEvents.push(r);else{if(Oi(e)&&t+e.duration>is(this._automationEvents[n]))return!1;this._automationEvents.splice(n,0,r)}}return!0}flush(e){const t=this._automationEvents.findIndex(n=>is(n)>e);if(t>1){const n=this._automationEvents.slice(t-1),i=n[0];cc(i)&&n.unshift(ah(Bc(this._automationEvents,t-2,i.startTime,this._defaultValue),i.startTime)),this._automationEvents=n}}getValue(e){if(this._automationEvents.length===0)return this._defaultValue;const t=this._automationEvents.findIndex(o=>is(o)>e),n=this._automationEvents[t],i=(t===-1?this._automationEvents.length:t)-1,r=this._automationEvents[i];if(r!==void 0&&cc(r)&&(n===void 0||!rs(n)||n.insertTime>e))return kg(e,Bc(this._automationEvents,i-1,r.startTime,this._defaultValue),r);if(r!==void 0&&$h(r)&&(n===void 0||!rs(n)))return r.value;if(r!==void 0&&Oi(r)&&(n===void 0||!rs(n)||r.startTime+r.duration>e))return e<r.startTime+r.duration?TE(e,r):r.values[r.values.length-1];if(r!==void 0&&rs(r)&&(n===void 0||!rs(n)))return r.value;if(n!==void 0&&Gr(n)){const[o,a]=Vp(this._automationEvents,i,r,n,this._defaultValue);return zp(e,o,a,n)}if(n!==void 0&&kc(n)){const[o,a]=Vp(this._automationEvents,i,r,n,this._defaultValue);return Gp(e,o,a,n)}return this._defaultValue}}const wE=s=>({cancelTime:s,type:"cancelAndHold"}),AE=s=>({cancelTime:s,type:"cancelScheduledValues"}),CE=(s,e)=>({endTime:e,type:"exponentialRampToValue",value:s}),RE=(s,e)=>({endTime:e,type:"linearRampToValue",value:s}),IE=(s,e,t)=>({startTime:e,target:s,timeConstant:t,type:"setTarget"}),DE=()=>new DOMException("","AbortError"),PE=s=>(e,t,[n,i,r],o)=>{s(e[i],[t,n,r],a=>a[0]===t&&a[1]===n,o)},NE=s=>(e,t,n)=>{const i=[];for(let r=0;r<n.numberOfInputs;r+=1)i.push(new Set);s.set(e,{activeInputs:i,outputs:new Set,passiveInputs:new WeakMap,renderer:t})},LE=s=>(e,t)=>{s.set(e,{activeInputs:new Set,passiveInputs:new WeakMap,renderer:t})},ao=new WeakSet,Bg=new WeakMap,Kh=new WeakMap,Vg=new WeakMap,Zh=new WeakMap,El=new WeakMap,zg=new WeakMap,uh=new WeakMap,hh=new WeakMap,dh=new WeakMap,Gg={construct(){return Gg}},OE=s=>{try{const e=new Proxy(s,Gg);new e}catch{return!1}return!0},Hp=/^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,Wp=(s,e)=>{const t=[];let n=s.replace(/^[\s]+/,""),i=n.match(Hp);for(;i!==null;){const r=i[1].slice(1,-1),o=i[0].replace(/([\s]+)?;?$/,"").replace(r,new URL(r,e).toString());t.push(o),n=n.slice(i[0].length).replace(/^[\s]+/,""),i=n.match(Hp)}return[t.join(";"),n]},Xp=s=>{if(s!==void 0&&!Array.isArray(s))throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.")},qp=s=>{if(!OE(s))throw new TypeError("The given value for processorCtor should be a constructor.");if(s.prototype===null||typeof s.prototype!="object")throw new TypeError("The given value for processorCtor should have a prototype.")},UE=(s,e,t,n,i,r,o,a,c,l,u,h,d)=>{let f=0;return(m,_,g={credentials:"omit"})=>{const p=u.get(m);if(p!==void 0&&p.has(_))return Promise.resolve();const x=l.get(m);if(x!==void 0){const y=x.get(_);if(y!==void 0)return y}const v=r(m),M=v.audioWorklet===void 0?i(_).then(([y,b])=>{const[E,T]=Wp(y,b),S=`${E};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${T}
})})(window,'_AWGS')`;return t(S)}).then(()=>{const y=d._AWGS.pop();if(y===void 0)throw new SyntaxError;n(v.currentTime,v.sampleRate,()=>y(class{},void 0,(b,E)=>{if(b.trim()==="")throw e();const T=hh.get(v);if(T!==void 0){if(T.has(b))throw e();qp(E),Xp(E.parameterDescriptors),T.set(b,E)}else qp(E),Xp(E.parameterDescriptors),hh.set(v,new Map([[b,E]]))},v.sampleRate,void 0,void 0))}):Promise.all([i(_),Promise.resolve(s(h,h))]).then(([[y,b],E])=>{const T=f+1;f=T;const[S,w]=Wp(y,b),C=`${S};((AudioWorkletProcessor,registerProcessor)=>{${w}
})(${E?"AudioWorkletProcessor":"class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"},(n,p)=>registerProcessor(n,class extends p{${E?"":"__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${E?"":"i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${T}',class extends AudioWorkletProcessor{process(){return !1}})`,P=new Blob([C],{type:"application/javascript; charset=utf-8"}),F=URL.createObjectURL(P);return v.audioWorklet.addModule(F,g).then(()=>{if(a(v))return v;const k=o(v);return k.audioWorklet.addModule(F,g).then(()=>k)}).then(k=>{if(c===null)throw new SyntaxError;try{new c(k,`__sac${T}`)}catch{throw new SyntaxError}}).finally(()=>URL.revokeObjectURL(F))});return x===void 0?l.set(m,new Map([[_,M]])):x.set(_,M),M.then(()=>{const y=u.get(m);y===void 0?u.set(m,new Set([_])):y.add(_)}).finally(()=>{const y=l.get(m);y!==void 0&&y.delete(_)}),M}},Kn=(s,e)=>{const t=s.get(e);if(t===void 0)throw new Error("A value with the given key could not be found.");return t},wl=(s,e)=>{const t=Array.from(s).filter(e);if(t.length>1)throw Error("More than one element was found.");if(t.length===0)throw Error("No element was found.");const[n]=t;return s.delete(n),n},Hg=(s,e,t,n)=>{const i=Kn(s,e),r=wl(i,o=>o[0]===t&&o[1]===n);return i.size===0&&s.delete(e),r},Sa=s=>Kn(zg,s),co=s=>{if(ao.has(s))throw new Error("The AudioNode is already stored.");ao.add(s),Sa(s).forEach(e=>e(!0))},Wg=s=>"port"in s,Ma=s=>{if(!ao.has(s))throw new Error("The AudioNode is not stored.");ao.delete(s),Sa(s).forEach(e=>e(!1))},fh=(s,e)=>{!Wg(s)&&e.every(t=>t.size===0)&&Ma(s)},FE=(s,e,t,n,i,r,o,a,c,l,u,h,d)=>{const f=new WeakMap;return(m,_,g,p,x)=>{const{activeInputs:v,passiveInputs:M}=r(_),{outputs:y}=r(m),b=a(m),E=T=>{const S=c(_),w=c(m);if(T){const L=Hg(M,m,g,p);s(v,m,L,!1),!x&&!h(m)&&t(w,S,g,p),d(_)&&co(_)}else{const L=n(v,m,g,p);e(M,p,L,!1),!x&&!h(m)&&i(w,S,g,p);const U=o(_);if(U===0)u(_)&&fh(_,v);else{const V=f.get(_);V!==void 0&&clearTimeout(V),f.set(_,setTimeout(()=>{u(_)&&fh(_,v)},U*1e3))}}};return l(y,[_,g,p],T=>T[0]===_&&T[1]===g&&T[2]===p,!0)?(b.add(E),u(m)?s(v,m,[g,p,E],!0):e(M,p,[m,g,E],!0),!0):!1}},kE=s=>(e,t,[n,i,r],o)=>{const a=e.get(n);a===void 0?e.set(n,new Set([[i,t,r]])):s(a,[i,t,r],c=>c[0]===i&&c[1]===t,o)},BE=s=>(e,t)=>{const n=s(e,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});t.connect(n).connect(e.destination);const i=()=>{t.removeEventListener("ended",i),t.disconnect(n),n.disconnect()};t.addEventListener("ended",i)},VE=s=>(e,t)=>{s(e).add(t)},zE={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",fftSize:2048,maxDecibels:-30,minDecibels:-100,smoothingTimeConstant:.8},GE=(s,e,t,n,i,r)=>class extends s{constructor(a,c){const l=i(a),u={...zE,...c},h=n(l,u),d=r(l)?e():null;super(a,!1,h,d),this._nativeAnalyserNode=h}get fftSize(){return this._nativeAnalyserNode.fftSize}set fftSize(a){this._nativeAnalyserNode.fftSize=a}get frequencyBinCount(){return this._nativeAnalyserNode.frequencyBinCount}get maxDecibels(){return this._nativeAnalyserNode.maxDecibels}set maxDecibels(a){const c=this._nativeAnalyserNode.maxDecibels;if(this._nativeAnalyserNode.maxDecibels=a,!(a>this._nativeAnalyserNode.minDecibels))throw this._nativeAnalyserNode.maxDecibels=c,t()}get minDecibels(){return this._nativeAnalyserNode.minDecibels}set minDecibels(a){const c=this._nativeAnalyserNode.minDecibels;if(this._nativeAnalyserNode.minDecibels=a,!(this._nativeAnalyserNode.maxDecibels>a))throw this._nativeAnalyserNode.minDecibels=c,t()}get smoothingTimeConstant(){return this._nativeAnalyserNode.smoothingTimeConstant}set smoothingTimeConstant(a){this._nativeAnalyserNode.smoothingTimeConstant=a}getByteFrequencyData(a){this._nativeAnalyserNode.getByteFrequencyData(a)}getByteTimeDomainData(a){this._nativeAnalyserNode.getByteTimeDomainData(a)}getFloatFrequencyData(a){this._nativeAnalyserNode.getFloatFrequencyData(a)}getFloatTimeDomainData(a){this._nativeAnalyserNode.getFloatTimeDomainData(a)}},Jt=(s,e)=>s.context===e,HE=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,o)=>{let a=e(r);if(!Jt(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,fftSize:a.fftSize,maxDecibels:a.maxDecibels,minDecibels:a.minDecibels,smoothingTimeConstant:a.smoothingTimeConstant};a=s(o,l)}return n.set(o,a),await t(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},Vc=s=>{try{s.copyToChannel(new Float32Array(1),0,-1)}catch{return!1}return!0},_i=()=>new DOMException("","IndexSizeError"),Qh=s=>{s.getChannelData=(e=>t=>{try{return e.call(s,t)}catch(n){throw n.code===12?_i():n}})(s.getChannelData)},WE={numberOfChannels:1},XE=(s,e,t,n,i,r,o,a)=>{let c=null;return class Xg{constructor(u){if(i===null)throw new Error("Missing the native OfflineAudioContext constructor.");const{length:h,numberOfChannels:d,sampleRate:f}={...WE,...u};c===null&&(c=new i(1,1,44100));const m=n!==null&&e(r,r)?new n({length:h,numberOfChannels:d,sampleRate:f}):c.createBuffer(d,h,f);if(m.numberOfChannels===0)throw t();return typeof m.copyFromChannel!="function"?(o(m),Qh(m)):e(Vc,()=>Vc(m))||a(m),s.add(m),m}static[Symbol.hasInstance](u){return u!==null&&typeof u=="object"&&Object.getPrototypeOf(u)===Xg.prototype||s.has(u)}}},fn=-34028234663852886e22,an=-fn,zi=s=>ao.has(s),qE={buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1},jE=(s,e,t,n,i,r,o,a)=>class extends s{constructor(l,u){const h=r(l),d={...qE,...u},f=i(h,d),m=o(h),_=m?e():null;super(l,!1,f,_),this._audioBufferSourceNodeRenderer=_,this._isBufferNullified=!1,this._isBufferSet=d.buffer!==null,this._nativeAudioBufferSourceNode=f,this._onended=null,this._playbackRate=t(this,m,f.playbackRate,an,fn)}get buffer(){return this._isBufferNullified?null:this._nativeAudioBufferSourceNode.buffer}set buffer(l){if(this._nativeAudioBufferSourceNode.buffer=l,l!==null){if(this._isBufferSet)throw n();this._isBufferSet=!0}}get loop(){return this._nativeAudioBufferSourceNode.loop}set loop(l){this._nativeAudioBufferSourceNode.loop=l}get loopEnd(){return this._nativeAudioBufferSourceNode.loopEnd}set loopEnd(l){this._nativeAudioBufferSourceNode.loopEnd=l}get loopStart(){return this._nativeAudioBufferSourceNode.loopStart}set loopStart(l){this._nativeAudioBufferSourceNode.loopStart=l}get onended(){return this._onended}set onended(l){const u=typeof l=="function"?a(this,l):null;this._nativeAudioBufferSourceNode.onended=u;const h=this._nativeAudioBufferSourceNode.onended;this._onended=h!==null&&h===u?l:h}get playbackRate(){return this._playbackRate}start(l=0,u=0,h){if(this._nativeAudioBufferSourceNode.start(l,u,h),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.start=h===void 0?[l,u]:[l,u,h]),this.context.state!=="closed"){co(this);const d=()=>{this._nativeAudioBufferSourceNode.removeEventListener("ended",d),zi(this)&&Ma(this)};this._nativeAudioBufferSourceNode.addEventListener("ended",d)}}stop(l=0){this._nativeAudioBufferSourceNode.stop(l),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.stop=l)}},YE=(s,e,t,n,i)=>()=>{const r=new WeakMap;let o=null,a=null;const c=async(l,u)=>{let h=t(l);const d=Jt(h,u);if(!d){const f={buffer:h.buffer,channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,loop:h.loop,loopEnd:h.loopEnd,loopStart:h.loopStart,playbackRate:h.playbackRate.value};h=e(u,f),o!==null&&h.start(...o),a!==null&&h.stop(a)}return r.set(u,h),d?await s(u,l.playbackRate,h.playbackRate):await n(u,l.playbackRate,h.playbackRate),await i(l,u,h),h};return{set start(l){o=l},set stop(l){a=l},render(l,u){const h=r.get(u);return h!==void 0?Promise.resolve(h):c(l,u)}}},$E=s=>"playbackRate"in s,KE=s=>"frequency"in s&&"gain"in s,ZE=s=>"offset"in s,QE=s=>!("frequency"in s)&&"gain"in s,JE=s=>"detune"in s&&"frequency"in s,ew=s=>"pan"in s,ln=s=>Kn(Bg,s),ba=s=>Kn(Vg,s),ph=(s,e)=>{const{activeInputs:t}=ln(s);t.forEach(i=>i.forEach(([r])=>{e.includes(s)||ph(r,[...e,s])}));const n=$E(s)?[s.playbackRate]:Wg(s)?Array.from(s.parameters.values()):KE(s)?[s.Q,s.detune,s.frequency,s.gain]:ZE(s)?[s.offset]:QE(s)?[s.gain]:JE(s)?[s.detune,s.frequency]:ew(s)?[s.pan]:[];for(const i of n){const r=ba(i);r!==void 0&&r.activeInputs.forEach(([o])=>ph(o,e))}zi(s)&&Ma(s)},qg=s=>{ph(s.destination,[])},tw=s=>s===void 0||typeof s=="number"||typeof s=="string"&&(s==="balanced"||s==="interactive"||s==="playback"),nw=(s,e,t,n,i,r,o,a,c)=>class extends s{constructor(u={}){if(c===null)throw new Error("Missing the native AudioContext constructor.");let h;try{h=new c(u)}catch(m){throw m.code===12&&m.message==="sampleRate is not in range"?t():m}if(h===null)throw n();if(!tw(u.latencyHint))throw new TypeError(`The provided value '${u.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);if(u.sampleRate!==void 0&&h.sampleRate!==u.sampleRate)throw t();super(h,2);const{latencyHint:d}=u,{sampleRate:f}=h;if(this._baseLatency=typeof h.baseLatency=="number"?h.baseLatency:d==="balanced"?512/f:d==="interactive"||d===void 0?256/f:d==="playback"?1024/f:Math.max(2,Math.min(128,Math.round(d*f/128)))*128/f,this._nativeAudioContext=h,c.name==="webkitAudioContext"?(this._nativeGainNode=h.createGain(),this._nativeOscillatorNode=h.createOscillator(),this._nativeGainNode.gain.value=1e-37,this._nativeOscillatorNode.connect(this._nativeGainNode).connect(h.destination),this._nativeOscillatorNode.start()):(this._nativeGainNode=null,this._nativeOscillatorNode=null),this._state=null,h.state==="running"){this._state="suspended";const m=()=>{this._state==="suspended"&&(this._state=null),h.removeEventListener("statechange",m)};h.addEventListener("statechange",m)}}get baseLatency(){return this._baseLatency}get state(){return this._state!==null?this._state:this._nativeAudioContext.state}close(){return this.state==="closed"?this._nativeAudioContext.close().then(()=>{throw e()}):(this._state==="suspended"&&(this._state=null),this._nativeAudioContext.close().then(()=>{this._nativeGainNode!==null&&this._nativeOscillatorNode!==null&&(this._nativeOscillatorNode.stop(),this._nativeGainNode.disconnect(),this._nativeOscillatorNode.disconnect()),qg(this)}))}createMediaElementSource(u){return new i(this,{mediaElement:u})}createMediaStreamDestination(){return new r(this)}createMediaStreamSource(u){return new o(this,{mediaStream:u})}createMediaStreamTrackSource(u){return new a(this,{mediaStreamTrack:u})}resume(){return this._state==="suspended"?new Promise((u,h)=>{const d=()=>{this._nativeAudioContext.removeEventListener("statechange",d),this._nativeAudioContext.state==="running"?u():this.resume().then(u,h)};this._nativeAudioContext.addEventListener("statechange",d)}):this._nativeAudioContext.resume().catch(u=>{throw u===void 0||u.code===15?e():u})}suspend(){return this._nativeAudioContext.suspend().catch(u=>{throw u===void 0?e():u})}},iw=(s,e,t,n,i,r,o,a)=>class extends s{constructor(l,u){const h=r(l),d=o(h),f=i(h,u,d),m=d?e(a):null;super(l,!1,f,m),this._isNodeOfNativeOfflineAudioContext=d,this._nativeAudioDestinationNode=f}get channelCount(){return this._nativeAudioDestinationNode.channelCount}set channelCount(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();if(l>this._nativeAudioDestinationNode.maxChannelCount)throw t();this._nativeAudioDestinationNode.channelCount=l}get channelCountMode(){return this._nativeAudioDestinationNode.channelCountMode}set channelCountMode(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();this._nativeAudioDestinationNode.channelCountMode=l}get maxChannelCount(){return this._nativeAudioDestinationNode.maxChannelCount}},sw=s=>{const e=new WeakMap,t=async(n,i)=>{const r=i.destination;return e.set(i,r),await s(n,i,r),r};return{render(n,i){const r=e.get(i);return r!==void 0?Promise.resolve(r):t(n,i)}}},rw=(s,e,t,n,i,r,o,a)=>(c,l)=>{const u=l.listener,h=()=>{const y=new Float32Array(1),b=e(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:9}),E=o(l);let T=!1,S=[0,0,-1,0,1,0],w=[0,0,0];const L=()=>{if(T)return;T=!0;const P=n(l,256,9,0);P.onaudioprocess=({inputBuffer:F})=>{const k=[r(F,y,0),r(F,y,1),r(F,y,2),r(F,y,3),r(F,y,4),r(F,y,5)];k.some((B,X)=>B!==S[X])&&(u.setOrientation(...k),S=k);const j=[r(F,y,6),r(F,y,7),r(F,y,8)];j.some((B,X)=>B!==w[X])&&(u.setPosition(...j),w=j)},b.connect(P)},U=P=>F=>{F!==S[P]&&(S[P]=F,u.setOrientation(...S))},V=P=>F=>{F!==w[P]&&(w[P]=F,u.setPosition(...w))},C=(P,F,k)=>{const j=t(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:F});j.connect(b,0,P),j.start(),Object.defineProperty(j.offset,"defaultValue",{get(){return F}});const B=s({context:c},E,j.offset,an,fn);return a(B,"value",X=>()=>X.call(B),X=>R=>{try{X.call(B,R)}catch(H){if(H.code!==9)throw H}L(),E&&k(R)}),B.cancelAndHoldAtTime=(X=>E?()=>{throw i()}:(...R)=>{const H=X.apply(B,R);return L(),H})(B.cancelAndHoldAtTime),B.cancelScheduledValues=(X=>E?()=>{throw i()}:(...R)=>{const H=X.apply(B,R);return L(),H})(B.cancelScheduledValues),B.exponentialRampToValueAtTime=(X=>E?()=>{throw i()}:(...R)=>{const H=X.apply(B,R);return L(),H})(B.exponentialRampToValueAtTime),B.linearRampToValueAtTime=(X=>E?()=>{throw i()}:(...R)=>{const H=X.apply(B,R);return L(),H})(B.linearRampToValueAtTime),B.setTargetAtTime=(X=>E?()=>{throw i()}:(...R)=>{const H=X.apply(B,R);return L(),H})(B.setTargetAtTime),B.setValueAtTime=(X=>E?()=>{throw i()}:(...R)=>{const H=X.apply(B,R);return L(),H})(B.setValueAtTime),B.setValueCurveAtTime=(X=>E?()=>{throw i()}:(...R)=>{const H=X.apply(B,R);return L(),H})(B.setValueCurveAtTime),B};return{forwardX:C(0,0,U(0)),forwardY:C(1,0,U(1)),forwardZ:C(2,-1,U(2)),positionX:C(6,0,V(0)),positionY:C(7,0,V(1)),positionZ:C(8,0,V(2)),upX:C(3,0,U(3)),upY:C(4,1,U(4)),upZ:C(5,0,U(5))}},{forwardX:d,forwardY:f,forwardZ:m,positionX:_,positionY:g,positionZ:p,upX:x,upY:v,upZ:M}=u.forwardX===void 0?h():u;return{get forwardX(){return d},get forwardY(){return f},get forwardZ(){return m},get positionX(){return _},get positionY(){return g},get positionZ(){return p},get upX(){return x},get upY(){return v},get upZ(){return M}}},zc=s=>"context"in s,Ta=s=>zc(s[0]),ar=(s,e,t,n)=>{for(const i of s)if(t(i)){if(n)return!1;throw Error("The set contains at least one similar element.")}return s.add(e),!0},jp=(s,e,[t,n],i)=>{ar(s,[e,t,n],r=>r[0]===e&&r[1]===t,i)},Yp=(s,[e,t,n],i)=>{const r=s.get(e);r===void 0?s.set(e,new Set([[t,n]])):ar(r,[t,n],o=>o[0]===t,i)},Mo=s=>"inputs"in s,Gc=(s,e,t,n)=>{if(Mo(e)){const i=e.inputs[n];return s.connect(i,t,0),[i,t,0]}return s.connect(e,t,n),[e,t,n]},jg=(s,e,t)=>{for(const n of s)if(n[0]===e&&n[1]===t)return s.delete(n),n;return null},ow=(s,e,t)=>wl(s,n=>n[0]===e&&n[1]===t),Yg=(s,e)=>{if(!Sa(s).delete(e))throw new Error("Missing the expected event listener.")},$g=(s,e,t)=>{const n=Kn(s,e),i=wl(n,r=>r[0]===t);return n.size===0&&s.delete(e),i},Hc=(s,e,t,n)=>{Mo(e)?s.disconnect(e.inputs[n],t,0):s.disconnect(e,t,n)},pt=s=>Kn(Kh,s),Qo=s=>Kn(Zh,s),nr=s=>uh.has(s),wc=s=>!ao.has(s),$p=(s,e)=>new Promise(t=>{if(e!==null)t(!0);else{const n=s.createScriptProcessor(256,1,1),i=s.createGain(),r=s.createBuffer(1,2,44100),o=r.getChannelData(0);o[0]=1,o[1]=1;const a=s.createBufferSource();a.buffer=r,a.loop=!0,a.connect(n).connect(s.destination),a.connect(i),a.disconnect(i),n.onaudioprocess=c=>{const l=c.inputBuffer.getChannelData(0);Array.prototype.some.call(l,u=>u===1)?t(!0):t(!1),a.stop(),n.onaudioprocess=null,a.disconnect(n),n.disconnect(s.destination)},a.start()}}),Eu=(s,e)=>{const t=new Map;for(const n of s)for(const i of n){const r=t.get(i);t.set(i,r===void 0?1:r+1)}t.forEach((n,i)=>e(i,n))},Wc=s=>"context"in s,aw=s=>{const e=new Map;s.connect=(t=>(n,i=0,r=0)=>{const o=Wc(n)?t(n,i,r):t(n,i),a=e.get(n);return a===void 0?e.set(n,[{input:r,output:i}]):a.every(c=>c.input!==r||c.output!==i)&&a.push({input:r,output:i}),o})(s.connect.bind(s)),s.disconnect=(t=>(n,i,r)=>{if(t.apply(s),n===void 0)e.clear();else if(typeof n=="number")for(const[o,a]of e){const c=a.filter(l=>l.output!==n);c.length===0?e.delete(o):e.set(o,c)}else if(e.has(n))if(i===void 0)e.delete(n);else{const o=e.get(n);if(o!==void 0){const a=o.filter(c=>c.output!==i&&(c.input!==r||r===void 0));a.length===0?e.delete(n):e.set(n,a)}}for(const[o,a]of e)a.forEach(c=>{Wc(o)?s.connect(o,c.output,c.input):s.connect(o,c.output)})})(s.disconnect)},cw=(s,e,t,n)=>{const{activeInputs:i,passiveInputs:r}=ba(e),{outputs:o}=ln(s),a=Sa(s),c=l=>{const u=pt(s),h=Qo(e);if(l){const d=$g(r,s,t);jp(i,s,d,!1),!n&&!nr(s)&&u.connect(h,t)}else{const d=ow(i,s,t);Yp(r,d,!1),!n&&!nr(s)&&u.disconnect(h,t)}};return ar(o,[e,t],l=>l[0]===e&&l[1]===t,!0)?(a.add(c),zi(s)?jp(i,s,[t,c],!0):Yp(r,[s,t,c],!0),!0):!1},lw=(s,e,t,n)=>{const{activeInputs:i,passiveInputs:r}=ln(e),o=jg(i[n],s,t);return o===null?[Hg(r,s,t,n)[2],!1]:[o[2],!0]},uw=(s,e,t)=>{const{activeInputs:n,passiveInputs:i}=ba(e),r=jg(n,s,t);return r===null?[$g(i,s,t)[1],!1]:[r[2],!0]},Jh=(s,e,t,n,i)=>{const[r,o]=lw(s,t,n,i);if(r!==null&&(Yg(s,r),o&&!e&&!nr(s)&&Hc(pt(s),pt(t),n,i)),zi(t)){const{activeInputs:a}=ln(t);fh(t,a)}},ed=(s,e,t,n)=>{const[i,r]=uw(s,t,n);i!==null&&(Yg(s,i),r&&!e&&!nr(s)&&pt(s).disconnect(Qo(t),n))},hw=(s,e)=>{const t=ln(s),n=[];for(const i of t.outputs)Ta(i)?Jh(s,e,...i):ed(s,e,...i),n.push(i[0]);return t.outputs.clear(),n},dw=(s,e,t)=>{const n=ln(s),i=[];for(const r of n.outputs)r[1]===t&&(Ta(r)?Jh(s,e,...r):ed(s,e,...r),i.push(r[0]),n.outputs.delete(r));return i},fw=(s,e,t,n,i)=>{const r=ln(s);return Array.from(r.outputs).filter(o=>o[0]===t&&(n===void 0||o[1]===n)&&(i===void 0||o[2]===i)).map(o=>(Ta(o)?Jh(s,e,...o):ed(s,e,...o),r.outputs.delete(o),o[0]))},pw=(s,e,t,n,i,r,o,a,c,l,u,h,d,f,m,_)=>class extends l{constructor(p,x,v,M){super(v),this._context=p,this._nativeAudioNode=v;const y=u(p);h(y)&&t($p,()=>$p(y,_))!==!0&&aw(v),Kh.set(this,v),zg.set(this,new Set),p.state!=="closed"&&x&&co(this),s(this,M,v)}get channelCount(){return this._nativeAudioNode.channelCount}set channelCount(p){this._nativeAudioNode.channelCount=p}get channelCountMode(){return this._nativeAudioNode.channelCountMode}set channelCountMode(p){this._nativeAudioNode.channelCountMode=p}get channelInterpretation(){return this._nativeAudioNode.channelInterpretation}set channelInterpretation(p){this._nativeAudioNode.channelInterpretation=p}get context(){return this._context}get numberOfInputs(){return this._nativeAudioNode.numberOfInputs}get numberOfOutputs(){return this._nativeAudioNode.numberOfOutputs}connect(p,x=0,v=0){if(x<0||x>=this._nativeAudioNode.numberOfOutputs)throw i();const M=u(this._context),y=m(M);if(d(p)||f(p))throw r();if(zc(p)){const T=pt(p);try{const w=Gc(this._nativeAudioNode,T,x,v),L=wc(this);(y||L)&&this._nativeAudioNode.disconnect(...w),this.context.state!=="closed"&&!L&&wc(p)&&co(p)}catch(w){throw w.code===12?r():w}if(e(this,p,x,v,y)){const w=c([this],p);Eu(w,n(y))}return p}const b=Qo(p);if(b.name==="playbackRate"&&b.maxValue===1024)throw o();try{this._nativeAudioNode.connect(b,x),(y||wc(this))&&this._nativeAudioNode.disconnect(b,x)}catch(T){throw T.code===12?r():T}if(cw(this,p,x,y)){const T=c([this],p);Eu(T,n(y))}}disconnect(p,x,v){let M;const y=u(this._context),b=m(y);if(p===void 0)M=hw(this,b);else if(typeof p=="number"){if(p<0||p>=this.numberOfOutputs)throw i();M=dw(this,b,p)}else{if(x!==void 0&&(x<0||x>=this.numberOfOutputs)||zc(p)&&v!==void 0&&(v<0||v>=p.numberOfInputs))throw i();if(M=fw(this,b,p,x,v),M.length===0)throw r()}for(const E of M){const T=c([this],E);Eu(T,a)}}},mw=(s,e,t,n,i,r,o,a,c,l,u,h,d)=>(f,m,_,g=null,p=null)=>{const x=_.value,v=new EE(x),M=m?n(v):null,y={get defaultValue(){return x},get maxValue(){return g===null?_.maxValue:g},get minValue(){return p===null?_.minValue:p},get value(){return _.value},set value(b){_.value=b,y.setValueAtTime(b,f.context.currentTime)},cancelAndHoldAtTime(b){if(typeof _.cancelAndHoldAtTime=="function")M===null&&v.flush(f.context.currentTime),v.add(i(b)),_.cancelAndHoldAtTime(b);else{const E=Array.from(v).pop();M===null&&v.flush(f.context.currentTime),v.add(i(b));const T=Array.from(v).pop();_.cancelScheduledValues(b),E!==T&&T!==void 0&&(T.type==="exponentialRampToValue"?_.exponentialRampToValueAtTime(T.value,T.endTime):T.type==="linearRampToValue"?_.linearRampToValueAtTime(T.value,T.endTime):T.type==="setValue"?_.setValueAtTime(T.value,T.startTime):T.type==="setValueCurve"&&_.setValueCurveAtTime(T.values,T.startTime,T.duration))}return y},cancelScheduledValues(b){return M===null&&v.flush(f.context.currentTime),v.add(r(b)),_.cancelScheduledValues(b),y},exponentialRampToValueAtTime(b,E){if(b===0)throw new RangeError;if(!Number.isFinite(E)||E<0)throw new RangeError;const T=f.context.currentTime;return M===null&&v.flush(T),Array.from(v).length===0&&(v.add(l(x,T)),_.setValueAtTime(x,T)),v.add(o(b,E)),_.exponentialRampToValueAtTime(b,E),y},linearRampToValueAtTime(b,E){const T=f.context.currentTime;return M===null&&v.flush(T),Array.from(v).length===0&&(v.add(l(x,T)),_.setValueAtTime(x,T)),v.add(a(b,E)),_.linearRampToValueAtTime(b,E),y},setTargetAtTime(b,E,T){return M===null&&v.flush(f.context.currentTime),v.add(c(b,E,T)),_.setTargetAtTime(b,E,T),y},setValueAtTime(b,E){return M===null&&v.flush(f.context.currentTime),v.add(l(b,E)),_.setValueAtTime(b,E),y},setValueCurveAtTime(b,E,T){const S=b instanceof Float32Array?b:new Float32Array(b);if(h!==null&&h.name==="webkitAudioContext"){const w=E+T,L=f.context.sampleRate,U=Math.ceil(E*L),V=Math.floor(w*L),C=V-U,P=new Float32Array(C);for(let k=0;k<C;k+=1){const j=(S.length-1)/T*((U+k)/L-E),B=Math.floor(j),X=Math.ceil(j);P[k]=B===X?S[B]:(1-(j-B))*S[B]+(1-(X-j))*S[X]}M===null&&v.flush(f.context.currentTime),v.add(u(P,E,T)),_.setValueCurveAtTime(P,E,T);const F=V/L;F<w&&d(y,P[P.length-1],F),d(y,S[S.length-1],w)}else M===null&&v.flush(f.context.currentTime),v.add(u(S,E,T)),_.setValueCurveAtTime(S,E,T);return y}};return t.set(y,_),e.set(y,f),s(y,M),y},gw=s=>({replay(e){for(const t of s)if(t.type==="exponentialRampToValue"){const{endTime:n,value:i}=t;e.exponentialRampToValueAtTime(i,n)}else if(t.type==="linearRampToValue"){const{endTime:n,value:i}=t;e.linearRampToValueAtTime(i,n)}else if(t.type==="setTarget"){const{startTime:n,target:i,timeConstant:r}=t;e.setTargetAtTime(i,n,r)}else if(t.type==="setValue"){const{startTime:n,value:i}=t;e.setValueAtTime(i,n)}else if(t.type==="setValueCurve"){const{duration:n,startTime:i,values:r}=t;e.setValueCurveAtTime(r,i,n)}else throw new Error("Can't apply an unknown automation.")}});class Kg{constructor(e){this._map=new Map(e)}get size(){return this._map.size}entries(){return this._map.entries()}forEach(e,t=null){return this._map.forEach((n,i)=>e.call(t,n,i,this))}get(e){return this._map.get(e)}has(e){return this._map.has(e)}keys(){return this._map.keys()}values(){return this._map.values()}}const _w={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:1,numberOfOutputs:1,parameterData:{},processorOptions:{}},vw=(s,e,t,n,i,r,o,a,c,l,u,h,d,f)=>class extends e{constructor(_,g,p){var x;const v=a(_),M=c(v),y=u({..._w,...p});d(y);const b=hh.get(v),E=b?.get(g),T=M||v.state!=="closed"?v:(x=o(v))!==null&&x!==void 0?x:v,S=i(T,M?null:_.baseLatency,l,g,E,y),w=M?n(g,y,E):null;super(_,!0,S,w);const L=[];S.parameters.forEach((V,C)=>{const P=t(this,M,V);L.push([C,P])}),this._nativeAudioWorkletNode=S,this._onprocessorerror=null,this._parameters=new Kg(L),M&&s(v,this);const{activeInputs:U}=r(this);h(S,U)}get onprocessorerror(){return this._onprocessorerror}set onprocessorerror(_){const g=typeof _=="function"?f(this,_):null;this._nativeAudioWorkletNode.onprocessorerror=g;const p=this._nativeAudioWorkletNode.onprocessorerror;this._onprocessorerror=p!==null&&p===g?_:p}get parameters(){return this._parameters===null?this._nativeAudioWorkletNode.parameters:this._parameters}get port(){return this._nativeAudioWorkletNode.port}};function Xc(s,e,t,n,i){if(typeof s.copyFromChannel=="function")e[t].byteLength===0&&(e[t]=new Float32Array(128)),s.copyFromChannel(e[t],n,i);else{const r=s.getChannelData(n);if(e[t].byteLength===0)e[t]=r.slice(i,i+128);else{const o=new Float32Array(r.buffer,i*Float32Array.BYTES_PER_ELEMENT,128);e[t].set(o)}}}const Zg=(s,e,t,n,i)=>{typeof s.copyToChannel=="function"?e[t].byteLength!==0&&s.copyToChannel(e[t],n,i):e[t].byteLength!==0&&s.getChannelData(n).set(e[t],i)},qc=(s,e)=>{const t=[];for(let n=0;n<s;n+=1){const i=[],r=typeof e=="number"?e:e[n];for(let o=0;o<r;o+=1)i.push(new Float32Array(128));t.push(i)}return t},yw=(s,e)=>{const t=Kn(dh,s),n=pt(e);return Kn(t,n)},xw=async(s,e,t,n,i,r,o)=>{const a=e===null?Math.ceil(s.context.length/128)*128:e.length,c=n.channelCount*n.numberOfInputs,l=i.reduce((g,p)=>g+p,0),u=l===0?null:t.createBuffer(l,a,t.sampleRate);if(r===void 0)throw new Error("Missing the processor constructor.");const h=ln(s),d=await yw(t,s),f=qc(n.numberOfInputs,n.channelCount),m=qc(n.numberOfOutputs,i),_=Array.from(s.parameters.keys()).reduce((g,p)=>({...g,[p]:new Float32Array(128)}),{});for(let g=0;g<a;g+=128){if(n.numberOfInputs>0&&e!==null)for(let p=0;p<n.numberOfInputs;p+=1)for(let x=0;x<n.channelCount;x+=1)Xc(e,f[p],x,x,g);r.parameterDescriptors!==void 0&&e!==null&&r.parameterDescriptors.forEach(({name:p},x)=>{Xc(e,_,p,c+x,g)});for(let p=0;p<n.numberOfInputs;p+=1)for(let x=0;x<i[p];x+=1)m[p][x].byteLength===0&&(m[p][x]=new Float32Array(128));try{const p=f.map((v,M)=>h.activeInputs[M].size===0?[]:v),x=o(g/t.sampleRate,t.sampleRate,()=>d.process(p,m,_));if(u!==null)for(let v=0,M=0;v<n.numberOfOutputs;v+=1){for(let y=0;y<i[v];y+=1)Zg(u,m[v],y,M+y,g);M+=i[v]}if(!x)break}catch(p){s.dispatchEvent(new ErrorEvent("processorerror",{colno:p.colno,filename:p.filename,lineno:p.lineno,message:p.message}));break}}return u},Sw=(s,e,t,n,i,r,o,a,c,l,u,h,d,f,m,_)=>(g,p,x)=>{const v=new WeakMap;let M=null;const y=async(b,E)=>{let T=u(b),S=null;const w=Jt(T,E),L=Array.isArray(p.outputChannelCount)?p.outputChannelCount:Array.from(p.outputChannelCount);if(h===null){const U=L.reduce((F,k)=>F+k,0),V=i(E,{channelCount:Math.max(1,U),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,U)}),C=[];for(let F=0;F<b.numberOfOutputs;F+=1)C.push(n(E,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:L[F]}));const P=o(E,{channelCount:p.channelCount,channelCountMode:p.channelCountMode,channelInterpretation:p.channelInterpretation,gain:1});P.connect=e.bind(null,C),P.disconnect=c.bind(null,C),S=[V,C,P]}else w||(T=new h(E,g));if(v.set(E,S===null?T:S[2]),S!==null){if(M===null){if(x===void 0)throw new Error("Missing the processor constructor.");if(d===null)throw new Error("Missing the native OfflineAudioContext constructor.");const k=b.channelCount*b.numberOfInputs,j=x.parameterDescriptors===void 0?0:x.parameterDescriptors.length,B=k+j;M=xw(b,B===0?null:await(async()=>{const R=new d(B,Math.ceil(b.context.length/128)*128,E.sampleRate),H=[],re=[];for(let de=0;de<p.numberOfInputs;de+=1)H.push(o(R,{channelCount:p.channelCount,channelCountMode:p.channelCountMode,channelInterpretation:p.channelInterpretation,gain:1})),re.push(i(R,{channelCount:p.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:p.channelCount}));const ce=await Promise.all(Array.from(b.parameters.values()).map(async de=>{const Se=r(R,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:de.value});return await f(R,de,Se.offset),Se})),J=n(R,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,k+j)});for(let de=0;de<p.numberOfInputs;de+=1){H[de].connect(re[de]);for(let Se=0;Se<p.channelCount;Se+=1)re[de].connect(J,Se,de*p.channelCount+Se)}for(const[de,Se]of ce.entries())Se.connect(J,0,k+de),Se.start(0);return J.connect(R.destination),await Promise.all(H.map(de=>m(b,R,de))),_(R)})(),E,p,L,x,l)}const U=await M,V=t(E,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),[C,P,F]=S;U!==null&&(V.buffer=U,V.start(0)),V.connect(C);for(let k=0,j=0;k<b.numberOfOutputs;k+=1){const B=P[k];for(let X=0;X<L[k];X+=1)C.connect(B,j+X,X);j+=L[k]}return F}if(w)for(const[U,V]of b.parameters.entries())await s(E,V,T.parameters.get(U));else for(const[U,V]of b.parameters.entries())await f(E,V,T.parameters.get(U));return await m(b,E,T),T};return{render(b,E){a(E,b);const T=v.get(E);return T!==void 0?Promise.resolve(T):y(b,E)}}},Mw=(s,e,t,n,i,r,o,a,c,l,u,h,d,f,m,_,g,p,x,v)=>class extends m{constructor(y,b){super(y,b),this._nativeContext=y,this._audioWorklet=s===void 0?void 0:{addModule:(E,T)=>s(this,E,T)}}get audioWorklet(){return this._audioWorklet}createAnalyser(){return new e(this)}createBiquadFilter(){return new i(this)}createBuffer(y,b,E){return new t({length:b,numberOfChannels:y,sampleRate:E})}createBufferSource(){return new n(this)}createChannelMerger(y=6){return new r(this,{numberOfInputs:y})}createChannelSplitter(y=6){return new o(this,{numberOfOutputs:y})}createConstantSource(){return new a(this)}createConvolver(){return new c(this)}createDelay(y=1){return new u(this,{maxDelayTime:y})}createDynamicsCompressor(){return new h(this)}createGain(){return new d(this)}createIIRFilter(y,b){return new f(this,{feedback:b,feedforward:y})}createOscillator(){return new _(this)}createPanner(){return new g(this)}createPeriodicWave(y,b,E={disableNormalization:!1}){return new p(this,{...E,imag:b,real:y})}createStereoPanner(){return new x(this)}createWaveShaper(){return new v(this)}decodeAudioData(y,b,E){return l(this._nativeContext,y).then(T=>(typeof b=="function"&&b(T),T),T=>{throw typeof E=="function"&&E(T),T})}},bw={Q:1,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:350,gain:0,type:"lowpass"},Tw=(s,e,t,n,i,r,o,a)=>class extends s{constructor(l,u){const h=r(l),d={...bw,...u},f=i(h,d),m=o(h),_=m?t():null;super(l,!1,f,_),this._Q=e(this,m,f.Q,an,fn),this._detune=e(this,m,f.detune,1200*Math.log2(an),-1200*Math.log2(an)),this._frequency=e(this,m,f.frequency,l.sampleRate/2,0),this._gain=e(this,m,f.gain,40*Math.log10(an),fn),this._nativeBiquadFilterNode=f,a(this,1)}get detune(){return this._detune}get frequency(){return this._frequency}get gain(){return this._gain}get Q(){return this._Q}get type(){return this._nativeBiquadFilterNode.type}set type(l){this._nativeBiquadFilterNode.type=l}getFrequencyResponse(l,u,h){try{this._nativeBiquadFilterNode.getFrequencyResponse(l,u,h)}catch(d){throw d.code===11?n():d}if(l.length!==u.length||u.length!==h.length)throw n()}},Ew=(s,e,t,n,i)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=t(a);const u=Jt(l,c);if(!u){const h={Q:l.Q.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,detune:l.detune.value,frequency:l.frequency.value,gain:l.gain.value,type:l.type};l=e(c,h)}return r.set(c,l),u?(await s(c,a.Q,l.Q),await s(c,a.detune,l.detune),await s(c,a.frequency,l.frequency),await s(c,a.gain,l.gain)):(await n(c,a.Q,l.Q),await n(c,a.detune,l.detune),await n(c,a.frequency,l.frequency),await n(c,a.gain,l.gain)),await i(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},ww=(s,e)=>(t,n)=>{const i=e.get(t);if(i!==void 0)return i;const r=s.get(t);if(r!==void 0)return r;try{const o=n();return o instanceof Promise?(s.set(t,o),o.catch(()=>!1).then(a=>(s.delete(t),e.set(t,a),a))):(e.set(t,o),o)}catch{return e.set(t,!1),!1}},Aw={channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6},Cw=(s,e,t,n,i)=>class extends s{constructor(o,a){const c=n(o),l={...Aw,...a},u=t(c,l),h=i(c)?e():null;super(o,!1,u,h)}},Rw=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,o)=>{let a=e(r);if(!Jt(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,numberOfInputs:a.numberOfInputs};a=s(o,l)}return n.set(o,a),await t(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},Iw={channelCount:6,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:6},Dw=(s,e,t,n,i,r)=>class extends s{constructor(a,c){const l=n(a),u=r({...Iw,...c}),h=t(l,u),d=i(l)?e():null;super(a,!1,h,d)}},Pw=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,o)=>{let a=e(r);if(!Jt(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,numberOfOutputs:a.numberOfOutputs};a=s(o,l)}return n.set(o,a),await t(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},Nw=s=>(e,t,n)=>s(t,e,n),Lw=s=>(e,t,n=0,i=0)=>{const r=e[n];if(r===void 0)throw s();return Wc(t)?r.connect(t,0,i):r.connect(t,0)},Ow=s=>(e,t)=>{const n=s(e,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),i=e.createBuffer(1,2,44100);return n.buffer=i,n.loop=!0,n.connect(t),n.start(),()=>{n.stop(),n.disconnect(t)}},Uw={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",offset:1},Fw=(s,e,t,n,i,r,o)=>class extends s{constructor(c,l){const u=i(c),h={...Uw,...l},d=n(u,h),f=r(u),m=f?t():null;super(c,!1,d,m),this._constantSourceNodeRenderer=m,this._nativeConstantSourceNode=d,this._offset=e(this,f,d.offset,an,fn),this._onended=null}get offset(){return this._offset}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?o(this,c):null;this._nativeConstantSourceNode.onended=l;const u=this._nativeConstantSourceNode.onended;this._onended=u!==null&&u===l?c:u}start(c=0){if(this._nativeConstantSourceNode.start(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.start=c),this.context.state!=="closed"){co(this);const l=()=>{this._nativeConstantSourceNode.removeEventListener("ended",l),zi(this)&&Ma(this)};this._nativeConstantSourceNode.addEventListener("ended",l)}}stop(c=0){this._nativeConstantSourceNode.stop(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.stop=c)}},kw=(s,e,t,n,i)=>()=>{const r=new WeakMap;let o=null,a=null;const c=async(l,u)=>{let h=t(l);const d=Jt(h,u);if(!d){const f={channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,offset:h.offset.value};h=e(u,f),o!==null&&h.start(o),a!==null&&h.stop(a)}return r.set(u,h),d?await s(u,l.offset,h.offset):await n(u,l.offset,h.offset),await i(l,u,h),h};return{set start(l){o=l},set stop(l){a=l},render(l,u){const h=r.get(u);return h!==void 0?Promise.resolve(h):c(l,u)}}},Bw=s=>e=>(s[0]=e,s[0]),Vw={buffer:null,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",disableNormalization:!1},zw=(s,e,t,n,i,r)=>class extends s{constructor(a,c){const l=n(a),u={...Vw,...c},h=t(l,u),f=i(l)?e():null;super(a,!1,h,f),this._isBufferNullified=!1,this._nativeConvolverNode=h,u.buffer!==null&&r(this,u.buffer.duration)}get buffer(){return this._isBufferNullified?null:this._nativeConvolverNode.buffer}set buffer(a){if(this._nativeConvolverNode.buffer=a,a===null&&this._nativeConvolverNode.buffer!==null){const c=this._nativeConvolverNode.context;this._nativeConvolverNode.buffer=c.createBuffer(1,1,c.sampleRate),this._isBufferNullified=!0,r(this,0)}else this._isBufferNullified=!1,r(this,this._nativeConvolverNode.buffer===null?0:this._nativeConvolverNode.buffer.duration)}get normalize(){return this._nativeConvolverNode.normalize}set normalize(a){this._nativeConvolverNode.normalize=a}},Gw=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,o)=>{let a=e(r);if(!Jt(a,o)){const l={buffer:a.buffer,channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,disableNormalization:!a.normalize};a=s(o,l)}return n.set(o,a),Mo(a)?await t(r,o,a.inputs[0]):await t(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},Hw=(s,e)=>(t,n,i)=>{if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");try{return new e(t,n,i)}catch(r){throw r.name==="SyntaxError"?s():r}},Ww=()=>new DOMException("","DataCloneError"),Kp=s=>{const{port1:e,port2:t}=new MessageChannel;return new Promise(n=>{const i=()=>{t.onmessage=null,e.close(),t.close(),n()};t.onmessage=()=>i();try{e.postMessage(s,[s])}catch{}finally{i()}})},Xw=(s,e,t,n,i,r,o,a,c,l,u)=>(h,d)=>{const f=o(h)?h:r(h);if(i.has(d)){const m=t();return Promise.reject(m)}try{i.add(d)}catch{}return e(c,()=>c(f))?f.decodeAudioData(d).then(m=>(Kp(d).catch(()=>{}),e(a,()=>a(m))||u(m),s.add(m),m)):new Promise((m,_)=>{const g=async()=>{try{await Kp(d)}catch{}},p=x=>{_(x),g()};try{f.decodeAudioData(d,x=>{typeof x.copyFromChannel!="function"&&(l(x),Qh(x)),s.add(x),g().then(()=>m(x))},x=>{p(x===null?n():x)})}catch(x){p(x)}})},qw=(s,e,t,n,i,r,o,a)=>(c,l)=>{const u=e.get(c);if(u===void 0)throw new Error("Missing the expected cycle count.");const h=r(c.context),d=a(h);if(u===l){if(e.delete(c),!d&&o(c)){const f=n(c),{outputs:m}=t(c);for(const _ of m)if(Ta(_)){const g=n(_[0]);s(f,g,_[1],_[2])}else{const g=i(_[0]);f.connect(g,_[1])}}}else e.set(c,u-l)},jw={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",delayTime:0,maxDelayTime:1},Yw=(s,e,t,n,i,r,o)=>class extends s{constructor(c,l){const u=i(c),h={...jw,...l},d=n(u,h),f=r(u),m=f?t(h.maxDelayTime):null;super(c,!1,d,m),this._delayTime=e(this,f,d.delayTime),o(this,h.maxDelayTime)}get delayTime(){return this._delayTime}},$w=(s,e,t,n,i)=>r=>{const o=new WeakMap,a=async(c,l)=>{let u=t(c);const h=Jt(u,l);if(!h){const d={channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,delayTime:u.delayTime.value,maxDelayTime:r};u=e(l,d)}return o.set(l,u),h?await s(l,c.delayTime,u.delayTime):await n(l,c.delayTime,u.delayTime),await i(c,l,u),u};return{render(c,l){const u=o.get(l);return u!==void 0?Promise.resolve(u):a(c,l)}}},Kw=s=>(e,t,n,i)=>s(e[i],r=>r[0]===t&&r[1]===n),Zw=s=>(e,t)=>{s(e).delete(t)},Qw=s=>"delayTime"in s,Jw=(s,e,t)=>function n(i,r){const o=zc(r)?r:t(s,r);if(Qw(o))return[];if(i[0]===o)return[i];if(i.includes(o))return[];const{outputs:a}=e(o);return Array.from(a).map(c=>n([...i,o],c[0])).reduce((c,l)=>c.concat(l),[])},lc=(s,e,t)=>{const n=e[t];if(n===void 0)throw s();return n},eA=s=>(e,t=void 0,n=void 0,i=0)=>t===void 0?e.forEach(r=>r.disconnect()):typeof t=="number"?lc(s,e,t).disconnect():Wc(t)?n===void 0?e.forEach(r=>r.disconnect(t)):i===void 0?lc(s,e,n).disconnect(t,0):lc(s,e,n).disconnect(t,0,i):n===void 0?e.forEach(r=>r.disconnect(t)):lc(s,e,n).disconnect(t,0),tA={attack:.003,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",knee:30,ratio:12,release:.25,threshold:-24},nA=(s,e,t,n,i,r,o,a)=>class extends s{constructor(l,u){const h=r(l),d={...tA,...u},f=n(h,d),m=o(h),_=m?t():null;super(l,!1,f,_),this._attack=e(this,m,f.attack),this._knee=e(this,m,f.knee),this._nativeDynamicsCompressorNode=f,this._ratio=e(this,m,f.ratio),this._release=e(this,m,f.release),this._threshold=e(this,m,f.threshold),a(this,.006)}get attack(){return this._attack}get channelCount(){return this._nativeDynamicsCompressorNode.channelCount}set channelCount(l){const u=this._nativeDynamicsCompressorNode.channelCount;if(this._nativeDynamicsCompressorNode.channelCount=l,l>2)throw this._nativeDynamicsCompressorNode.channelCount=u,i()}get channelCountMode(){return this._nativeDynamicsCompressorNode.channelCountMode}set channelCountMode(l){const u=this._nativeDynamicsCompressorNode.channelCountMode;if(this._nativeDynamicsCompressorNode.channelCountMode=l,l==="max")throw this._nativeDynamicsCompressorNode.channelCountMode=u,i()}get knee(){return this._knee}get ratio(){return this._ratio}get reduction(){return typeof this._nativeDynamicsCompressorNode.reduction.value=="number"?this._nativeDynamicsCompressorNode.reduction.value:this._nativeDynamicsCompressorNode.reduction}get release(){return this._release}get threshold(){return this._threshold}},iA=(s,e,t,n,i)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=t(a);const u=Jt(l,c);if(!u){const h={attack:l.attack.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,knee:l.knee.value,ratio:l.ratio.value,release:l.release.value,threshold:l.threshold.value};l=e(c,h)}return r.set(c,l),u?(await s(c,a.attack,l.attack),await s(c,a.knee,l.knee),await s(c,a.ratio,l.ratio),await s(c,a.release,l.release),await s(c,a.threshold,l.threshold)):(await n(c,a.attack,l.attack),await n(c,a.knee,l.knee),await n(c,a.ratio,l.ratio),await n(c,a.release,l.release),await n(c,a.threshold,l.threshold)),await i(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},sA=()=>new DOMException("","EncodingError"),rA=s=>e=>new Promise((t,n)=>{if(s===null){n(new SyntaxError);return}const i=s.document.head;if(i===null)n(new SyntaxError);else{const r=s.document.createElement("script"),o=new Blob([e],{type:"application/javascript"}),a=URL.createObjectURL(o),c=s.onerror,l=()=>{s.onerror=c,URL.revokeObjectURL(a)};s.onerror=(u,h,d,f,m)=>{if(h===a||h===s.location.href&&d===1&&f===1)return l(),n(m),!1;if(c!==null)return c(u,h,d,f,m)},r.onerror=()=>{l(),n(new SyntaxError)},r.onload=()=>{l(),t()},r.src=a,r.type="module",i.appendChild(r)}}),oA=s=>class{constructor(t){this._nativeEventTarget=t,this._listeners=new WeakMap}addEventListener(t,n,i){if(n!==null){let r=this._listeners.get(n);r===void 0&&(r=s(this,n),typeof n=="function"&&this._listeners.set(n,r)),this._nativeEventTarget.addEventListener(t,r,i)}}dispatchEvent(t){return this._nativeEventTarget.dispatchEvent(t)}removeEventListener(t,n,i){const r=n===null?void 0:this._listeners.get(n);this._nativeEventTarget.removeEventListener(t,r===void 0?null:r,i)}},aA=s=>(e,t,n)=>{Object.defineProperties(s,{currentFrame:{configurable:!0,get(){return Math.round(e*t)}},currentTime:{configurable:!0,get(){return e}}});try{return n()}finally{s!==null&&(delete s.currentFrame,delete s.currentTime)}},cA=s=>async e=>{try{const t=await fetch(e);if(t.ok)return[await t.text(),t.url]}catch{}throw s()},lA={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",gain:1},uA=(s,e,t,n,i,r)=>class extends s{constructor(a,c){const l=i(a),u={...lA,...c},h=n(l,u),d=r(l),f=d?t():null;super(a,!1,h,f),this._gain=e(this,d,h.gain,an,fn)}get gain(){return this._gain}},hA=(s,e,t,n,i)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=t(a);const u=Jt(l,c);if(!u){const h={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,gain:l.gain.value};l=e(c,h)}return r.set(c,l),u?await s(c,a.gain,l.gain):await n(c,a.gain,l.gain),await i(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},dA=(s,e)=>t=>e(s,t),fA=s=>e=>{const t=s(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioNode in the audio graph.");return t.renderer},pA=s=>e=>{var t;return(t=s.get(e))!==null&&t!==void 0?t:0},mA=s=>e=>{const t=s(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioParam in the audio graph.");return t.renderer},gA=s=>e=>s.get(e),zt=()=>new DOMException("","InvalidStateError"),_A=s=>e=>{const t=s.get(e);if(t===void 0)throw zt();return t},vA=(s,e)=>t=>{let n=s.get(t);if(n!==void 0)return n;if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");return n=new e(1,1,44100),s.set(t,n),n},yA=s=>e=>{const t=s.get(e);if(t===void 0)throw new Error("The context has no set of AudioWorkletNodes.");return t},Al=()=>new DOMException("","InvalidAccessError"),xA=s=>{s.getFrequencyResponse=(e=>(t,n,i)=>{if(t.length!==n.length||n.length!==i.length)throw Al();return e.call(s,t,n,i)})(s.getFrequencyResponse)},SA={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers"},MA=(s,e,t,n,i,r)=>class extends s{constructor(a,c){const l=n(a),u=i(l),h={...SA,...c},d=e(l,u?null:a.baseLatency,h),f=u?t(h.feedback,h.feedforward):null;super(a,!1,d,f),xA(d),this._nativeIIRFilterNode=d,r(this,1)}getFrequencyResponse(a,c,l){return this._nativeIIRFilterNode.getFrequencyResponse(a,c,l)}},Qg=(s,e,t,n,i,r,o,a,c,l,u)=>{const h=l.length;let d=a;for(let f=0;f<h;f+=1){let m=t[0]*l[f];for(let _=1;_<i;_+=1){const g=d-_&c-1;m+=t[_]*r[g],m-=s[_]*o[g]}for(let _=i;_<n;_+=1)m+=t[_]*r[d-_&c-1];for(let _=i;_<e;_+=1)m-=s[_]*o[d-_&c-1];r[d]=l[f],o[d]=m,d=d+1&c-1,u[f]=m}return d},bA=(s,e,t,n)=>{const i=t instanceof Float64Array?t:new Float64Array(t),r=n instanceof Float64Array?n:new Float64Array(n),o=i.length,a=r.length,c=Math.min(o,a);if(i[0]!==1){for(let m=0;m<o;m+=1)r[m]/=i[0];for(let m=1;m<a;m+=1)i[m]/=i[0]}const l=32,u=new Float32Array(l),h=new Float32Array(l),d=e.createBuffer(s.numberOfChannels,s.length,s.sampleRate),f=s.numberOfChannels;for(let m=0;m<f;m+=1){const _=s.getChannelData(m),g=d.getChannelData(m);u.fill(0),h.fill(0),Qg(i,o,r,a,c,u,h,0,l,_,g)}return d},TA=(s,e,t,n,i)=>(r,o)=>{const a=new WeakMap;let c=null;const l=async(u,h)=>{let d=null,f=e(u);const m=Jt(f,h);if(h.createIIRFilter===void 0?d=s(h,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}):m||(f=h.createIIRFilter(o,r)),a.set(h,d===null?f:d),d!==null){if(c===null){if(t===null)throw new Error("Missing the native OfflineAudioContext constructor.");const g=new t(u.context.destination.channelCount,u.context.length,h.sampleRate);c=(async()=>{await n(u,g,g.destination);const p=await i(g);return bA(p,h,r,o)})()}const _=await c;return d.buffer=_,d.start(0),d}return await n(u,h,f),f};return{render(u,h){const d=a.get(h);return d!==void 0?Promise.resolve(d):l(u,h)}}},EA=(s,e,t,n,i,r)=>o=>(a,c)=>{const l=s.get(a);if(l===void 0){if(!o&&r(a)){const u=n(a),{outputs:h}=t(a);for(const d of h)if(Ta(d)){const f=n(d[0]);e(u,f,d[1],d[2])}else{const f=i(d[0]);u.disconnect(f,d[1])}}s.set(a,c)}else s.set(a,l+c)},wA=(s,e)=>t=>{const n=s.get(t);return e(n)||e(t)},AA=(s,e)=>t=>s.has(t)||e(t),CA=(s,e)=>t=>s.has(t)||e(t),RA=(s,e)=>t=>{const n=s.get(t);return e(n)||e(t)},IA=s=>e=>s!==null&&e instanceof s,DA=s=>e=>s!==null&&typeof s.AudioNode=="function"&&e instanceof s.AudioNode,PA=s=>e=>s!==null&&typeof s.AudioParam=="function"&&e instanceof s.AudioParam,NA=(s,e)=>t=>s(t)||e(t),LA=s=>e=>s!==null&&e instanceof s,OA=s=>s!==null&&s.isSecureContext,UA=(s,e,t,n)=>class extends s{constructor(r,o){const a=t(r),c=e(a,o);if(n(a))throw TypeError();super(r,!0,c,null),this._nativeMediaElementAudioSourceNode=c}get mediaElement(){return this._nativeMediaElementAudioSourceNode.mediaElement}},FA={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers"},kA=(s,e,t,n)=>class extends s{constructor(r,o){const a=t(r);if(n(a))throw new TypeError;const c={...FA,...o},l=e(a,c);super(r,!1,l,null),this._nativeMediaStreamAudioDestinationNode=l}get stream(){return this._nativeMediaStreamAudioDestinationNode.stream}},BA=(s,e,t,n)=>class extends s{constructor(r,o){const a=t(r),c=e(a,o);if(n(a))throw new TypeError;super(r,!0,c,null),this._nativeMediaStreamAudioSourceNode=c}get mediaStream(){return this._nativeMediaStreamAudioSourceNode.mediaStream}},VA=(s,e,t)=>class extends s{constructor(i,r){const o=t(i),a=e(o,r);super(i,!0,a,null)}},zA=(s,e,t,n,i,r)=>class extends t{constructor(a,c){super(a),this._nativeContext=a,El.set(this,a),n(a)&&i.set(a,new Set),this._destination=new s(this,c),this._listener=e(this,a),this._onstatechange=null}get currentTime(){return this._nativeContext.currentTime}get destination(){return this._destination}get listener(){return this._listener}get onstatechange(){return this._onstatechange}set onstatechange(a){const c=typeof a=="function"?r(this,a):null;this._nativeContext.onstatechange=c;const l=this._nativeContext.onstatechange;this._onstatechange=l!==null&&l===c?a:l}get sampleRate(){return this._nativeContext.sampleRate}get state(){return this._nativeContext.state}},Jo=s=>{const e=new Uint32Array([1179011410,40,1163280727,544501094,16,131073,44100,176400,1048580,1635017060,4,0]);try{const t=s.decodeAudioData(e.buffer,()=>{});return t===void 0?!1:(t.catch(()=>{}),!0)}catch{}return!1},GA=(s,e)=>(t,n,i)=>{const r=new Set;return t.connect=(o=>(a,c=0,l=0)=>{const u=r.size===0;if(e(a))return o.call(t,a,c,l),s(r,[a,c,l],h=>h[0]===a&&h[1]===c&&h[2]===l,!0),u&&n(),a;o.call(t,a,c),s(r,[a,c],h=>h[0]===a&&h[1]===c,!0),u&&n()})(t.connect),t.disconnect=(o=>(a,c,l)=>{const u=r.size>0;if(a===void 0)o.apply(t),r.clear();else if(typeof a=="number"){o.call(t,a);for(const d of r)d[1]===a&&r.delete(d)}else{e(a)?o.call(t,a,c,l):o.call(t,a,c);for(const d of r)d[0]===a&&(c===void 0||d[1]===c)&&(l===void 0||d[2]===l)&&r.delete(d)}const h=r.size===0;u&&h&&i()})(t.disconnect),t},mt=(s,e,t)=>{const n=e[t];n!==void 0&&n!==s[t]&&(s[t]=n)},Ot=(s,e)=>{mt(s,e,"channelCount"),mt(s,e,"channelCountMode"),mt(s,e,"channelInterpretation")},Zp=s=>typeof s.getFloatTimeDomainData=="function",HA=s=>{s.getFloatTimeDomainData=e=>{const t=new Uint8Array(e.length);s.getByteTimeDomainData(t);const n=Math.max(t.length,s.fftSize);for(let i=0;i<n;i+=1)e[i]=(t[i]-128)*.0078125;return e}},WA=(s,e)=>(t,n)=>{const i=t.createAnalyser();if(Ot(i,n),!(n.maxDecibels>n.minDecibels))throw e();return mt(i,n,"fftSize"),mt(i,n,"maxDecibels"),mt(i,n,"minDecibels"),mt(i,n,"smoothingTimeConstant"),s(Zp,()=>Zp(i))||HA(i),i},XA=s=>s===null?null:s.hasOwnProperty("AudioBuffer")?s.AudioBuffer:null,xt=(s,e,t)=>{const n=e[t];n!==void 0&&n!==s[t].value&&(s[t].value=n)},qA=s=>{s.start=(e=>{let t=!1;return(n=0,i=0,r)=>{if(t)throw zt();e.call(s,n,i,r),t=!0}})(s.start)},td=s=>{s.start=(e=>(t=0,n=0,i)=>{if(typeof i=="number"&&i<0||n<0||t<0)throw new RangeError("The parameters can't be negative.");e.call(s,t,n,i)})(s.start)},nd=s=>{s.stop=(e=>(t=0)=>{if(t<0)throw new RangeError("The parameter can't be negative.");e.call(s,t)})(s.stop)},jA=(s,e,t,n,i,r,o,a,c,l,u)=>(h,d)=>{const f=h.createBufferSource();return Ot(f,d),xt(f,d,"playbackRate"),mt(f,d,"buffer"),mt(f,d,"loop"),mt(f,d,"loopEnd"),mt(f,d,"loopStart"),e(t,()=>t(h))||qA(f),e(n,()=>n(h))||c(f),e(i,()=>i(h))||l(f,h),e(r,()=>r(h))||td(f),e(o,()=>o(h))||u(f,h),e(a,()=>a(h))||nd(f),s(h,f),f},YA=s=>s===null?null:s.hasOwnProperty("AudioContext")?s.AudioContext:s.hasOwnProperty("webkitAudioContext")?s.webkitAudioContext:null,$A=(s,e)=>(t,n,i)=>{const r=t.destination;if(r.channelCount!==n)try{r.channelCount=n}catch{}i&&r.channelCountMode!=="explicit"&&(r.channelCountMode="explicit"),r.maxChannelCount===0&&Object.defineProperty(r,"maxChannelCount",{value:n});const o=s(t,{channelCount:n,channelCountMode:r.channelCountMode,channelInterpretation:r.channelInterpretation,gain:1});return e(o,"channelCount",a=>()=>a.call(o),a=>c=>{a.call(o,c);try{r.channelCount=c}catch(l){if(c>r.maxChannelCount)throw l}}),e(o,"channelCountMode",a=>()=>a.call(o),a=>c=>{a.call(o,c),r.channelCountMode=c}),e(o,"channelInterpretation",a=>()=>a.call(o),a=>c=>{a.call(o,c),r.channelInterpretation=c}),Object.defineProperty(o,"maxChannelCount",{get:()=>r.maxChannelCount}),o.connect(r),o},KA=s=>s===null?null:s.hasOwnProperty("AudioWorkletNode")?s.AudioWorkletNode:null,ZA=s=>{const{port1:e}=new MessageChannel;try{e.postMessage(s)}finally{e.close()}},QA=(s,e,t,n,i)=>(r,o,a,c,l,u)=>{if(a!==null)try{const h=new a(r,c,u),d=new Map;let f=null;if(Object.defineProperties(h,{channelCount:{get:()=>u.channelCount,set:()=>{throw s()}},channelCountMode:{get:()=>"explicit",set:()=>{throw s()}},onprocessorerror:{get:()=>f,set:m=>{typeof f=="function"&&h.removeEventListener("processorerror",f),f=typeof m=="function"?m:null,typeof f=="function"&&h.addEventListener("processorerror",f)}}}),h.addEventListener=(m=>(..._)=>{if(_[0]==="processorerror"){const g=typeof _[1]=="function"?_[1]:typeof _[1]=="object"&&_[1]!==null&&typeof _[1].handleEvent=="function"?_[1].handleEvent:null;if(g!==null){const p=d.get(_[1]);p!==void 0?_[1]=p:(_[1]=x=>{x.type==="error"?(Object.defineProperties(x,{type:{value:"processorerror"}}),g(x)):g(new ErrorEvent(_[0],{...x}))},d.set(g,_[1]))}}return m.call(h,"error",_[1],_[2]),m.call(h,..._)})(h.addEventListener),h.removeEventListener=(m=>(..._)=>{if(_[0]==="processorerror"){const g=d.get(_[1]);g!==void 0&&(d.delete(_[1]),_[1]=g)}return m.call(h,"error",_[1],_[2]),m.call(h,_[0],_[1],_[2])})(h.removeEventListener),u.numberOfOutputs!==0){const m=t(r,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return h.connect(m).connect(r.destination),i(h,()=>m.disconnect(),()=>m.connect(r.destination))}return h}catch(h){throw h.code===11?n():h}if(l===void 0)throw n();return ZA(u),e(r,o,l,u)},Jg=(s,e)=>s===null?512:Math.max(512,Math.min(16384,Math.pow(2,Math.round(Math.log2(s*e))))),JA=s=>new Promise((e,t)=>{const{port1:n,port2:i}=new MessageChannel;n.onmessage=({data:r})=>{n.close(),i.close(),e(r)},n.onmessageerror=({data:r})=>{n.close(),i.close(),t(r)},i.postMessage(s)}),e1=async(s,e)=>{const t=await JA(e);return new s(t)},t1=(s,e,t,n)=>{let i=dh.get(s);i===void 0&&(i=new WeakMap,dh.set(s,i));const r=e1(t,n);return i.set(e,r),r},n1=(s,e,t,n,i,r,o,a,c,l,u,h,d)=>(f,m,_,g)=>{if(g.numberOfInputs===0&&g.numberOfOutputs===0)throw c();const p=Array.isArray(g.outputChannelCount)?g.outputChannelCount:Array.from(g.outputChannelCount);if(p.some(K=>K<1))throw c();if(p.length!==g.numberOfOutputs)throw e();if(g.channelCountMode!=="explicit")throw c();const x=g.channelCount*g.numberOfInputs,v=p.reduce((K,te)=>K+te,0),M=_.parameterDescriptors===void 0?0:_.parameterDescriptors.length;if(x+M>6||v>6)throw c();const y=new MessageChannel,b=[],E=[];for(let K=0;K<g.numberOfInputs;K+=1)b.push(o(f,{channelCount:g.channelCount,channelCountMode:g.channelCountMode,channelInterpretation:g.channelInterpretation,gain:1})),E.push(i(f,{channelCount:g.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:g.channelCount}));const T=[];if(_.parameterDescriptors!==void 0)for(const{defaultValue:K,maxValue:te,minValue:Fe,name:xe}of _.parameterDescriptors){const pe=r(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:g.parameterData[xe]!==void 0?g.parameterData[xe]:K===void 0?0:K});Object.defineProperties(pe.offset,{defaultValue:{get:()=>K===void 0?0:K},maxValue:{get:()=>te===void 0?an:te},minValue:{get:()=>Fe===void 0?fn:Fe}}),T.push(pe)}const S=n(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,x+M)}),w=Jg(m,f.sampleRate),L=a(f,w,x+M,Math.max(1,v)),U=i(f,{channelCount:Math.max(1,v),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,v)}),V=[];for(let K=0;K<g.numberOfOutputs;K+=1)V.push(n(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:p[K]}));for(let K=0;K<g.numberOfInputs;K+=1){b[K].connect(E[K]);for(let te=0;te<g.channelCount;te+=1)E[K].connect(S,te,K*g.channelCount+te)}const C=new Kg(_.parameterDescriptors===void 0?[]:_.parameterDescriptors.map(({name:K},te)=>{const Fe=T[te];return Fe.connect(S,0,x+te),Fe.start(0),[K,Fe.offset]}));S.connect(L);let P=g.channelInterpretation,F=null;const k=g.numberOfOutputs===0?[L]:V,j={get bufferSize(){return w},get channelCount(){return g.channelCount},set channelCount(K){throw t()},get channelCountMode(){return g.channelCountMode},set channelCountMode(K){throw t()},get channelInterpretation(){return P},set channelInterpretation(K){for(const te of b)te.channelInterpretation=K;P=K},get context(){return L.context},get inputs(){return b},get numberOfInputs(){return g.numberOfInputs},get numberOfOutputs(){return g.numberOfOutputs},get onprocessorerror(){return F},set onprocessorerror(K){typeof F=="function"&&j.removeEventListener("processorerror",F),F=typeof K=="function"?K:null,typeof F=="function"&&j.addEventListener("processorerror",F)},get parameters(){return C},get port(){return y.port2},addEventListener(...K){return L.addEventListener(K[0],K[1],K[2])},connect:s.bind(null,k),disconnect:l.bind(null,k),dispatchEvent(...K){return L.dispatchEvent(K[0])},removeEventListener(...K){return L.removeEventListener(K[0],K[1],K[2])}},B=new Map;y.port1.addEventListener=(K=>(...te)=>{if(te[0]==="message"){const Fe=typeof te[1]=="function"?te[1]:typeof te[1]=="object"&&te[1]!==null&&typeof te[1].handleEvent=="function"?te[1].handleEvent:null;if(Fe!==null){const xe=B.get(te[1]);xe!==void 0?te[1]=xe:(te[1]=pe=>{u(f.currentTime,f.sampleRate,()=>Fe(pe))},B.set(Fe,te[1]))}}return K.call(y.port1,te[0],te[1],te[2])})(y.port1.addEventListener),y.port1.removeEventListener=(K=>(...te)=>{if(te[0]==="message"){const Fe=B.get(te[1]);Fe!==void 0&&(B.delete(te[1]),te[1]=Fe)}return K.call(y.port1,te[0],te[1],te[2])})(y.port1.removeEventListener);let X=null;Object.defineProperty(y.port1,"onmessage",{get:()=>X,set:K=>{typeof X=="function"&&y.port1.removeEventListener("message",X),X=typeof K=="function"?K:null,typeof X=="function"&&(y.port1.addEventListener("message",X),y.port1.start())}}),_.prototype.port=y.port1;let R=null;t1(f,j,_,g).then(K=>R=K);const re=qc(g.numberOfInputs,g.channelCount),ce=qc(g.numberOfOutputs,p),J=_.parameterDescriptors===void 0?[]:_.parameterDescriptors.reduce((K,{name:te})=>({...K,[te]:new Float32Array(128)}),{});let de=!0;const Se=()=>{g.numberOfOutputs>0&&L.disconnect(U);for(let K=0,te=0;K<g.numberOfOutputs;K+=1){const Fe=V[K];for(let xe=0;xe<p[K];xe+=1)U.disconnect(Fe,te+xe,xe);te+=p[K]}},Q=new Map;L.onaudioprocess=({inputBuffer:K,outputBuffer:te})=>{if(R!==null){const Fe=h(j);for(let xe=0;xe<w;xe+=128){for(let pe=0;pe<g.numberOfInputs;pe+=1)for(let Ee=0;Ee<g.channelCount;Ee+=1)Xc(K,re[pe],Ee,Ee,xe);_.parameterDescriptors!==void 0&&_.parameterDescriptors.forEach(({name:pe},Ee)=>{Xc(K,J,pe,x+Ee,xe)});for(let pe=0;pe<g.numberOfInputs;pe+=1)for(let Ee=0;Ee<p[pe];Ee+=1)ce[pe][Ee].byteLength===0&&(ce[pe][Ee]=new Float32Array(128));try{const pe=re.map((Je,dt)=>{if(Fe[dt].size>0)return Q.set(dt,w/128),Je;const A=Q.get(dt);return A===void 0?[]:(Je.every(q=>q.every(ie=>ie===0))&&(A===1?Q.delete(dt):Q.set(dt,A-1)),Je)});de=u(f.currentTime+xe/f.sampleRate,f.sampleRate,()=>R.process(pe,ce,J));for(let Je=0,dt=0;Je<g.numberOfOutputs;Je+=1){for(let D=0;D<p[Je];D+=1)Zg(te,ce[Je],D,dt+D,xe);dt+=p[Je]}}catch(pe){de=!1,j.dispatchEvent(new ErrorEvent("processorerror",{colno:pe.colno,filename:pe.filename,lineno:pe.lineno,message:pe.message}))}if(!de){for(let pe=0;pe<g.numberOfInputs;pe+=1){b[pe].disconnect(E[pe]);for(let Ee=0;Ee<g.channelCount;Ee+=1)E[xe].disconnect(S,Ee,pe*g.channelCount+Ee)}if(_.parameterDescriptors!==void 0){const pe=_.parameterDescriptors.length;for(let Ee=0;Ee<pe;Ee+=1){const Je=T[Ee];Je.disconnect(S,0,x+Ee),Je.stop()}}S.disconnect(L),L.onaudioprocess=null,Ge?Se():z();break}}}};let Ge=!1;const vt=o(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0}),De=()=>L.connect(vt).connect(f.destination),z=()=>{L.disconnect(vt),vt.disconnect()},Ut=()=>{if(de){z(),g.numberOfOutputs>0&&L.connect(U);for(let K=0,te=0;K<g.numberOfOutputs;K+=1){const Fe=V[K];for(let xe=0;xe<p[K];xe+=1)U.connect(Fe,te+xe,xe);te+=p[K]}}Ge=!0},Ae=()=>{de&&(De(),Se()),Ge=!1};return De(),d(j,Ut,Ae)},e_=(s,e)=>{const t=s.createBiquadFilter();return Ot(t,e),xt(t,e,"Q"),xt(t,e,"detune"),xt(t,e,"frequency"),xt(t,e,"gain"),mt(t,e,"type"),t},i1=(s,e)=>(t,n)=>{const i=t.createChannelMerger(n.numberOfInputs);return s!==null&&s.name==="webkitAudioContext"&&e(t,i),Ot(i,n),i},s1=s=>{const e=s.numberOfOutputs;Object.defineProperty(s,"channelCount",{get:()=>e,set:t=>{if(t!==e)throw zt()}}),Object.defineProperty(s,"channelCountMode",{get:()=>"explicit",set:t=>{if(t!=="explicit")throw zt()}}),Object.defineProperty(s,"channelInterpretation",{get:()=>"discrete",set:t=>{if(t!=="discrete")throw zt()}})},Ea=(s,e)=>{const t=s.createChannelSplitter(e.numberOfOutputs);return Ot(t,e),s1(t),t},r1=(s,e,t,n,i)=>(r,o)=>{if(r.createConstantSource===void 0)return t(r,o);const a=r.createConstantSource();return Ot(a,o),xt(a,o,"offset"),e(n,()=>n(r))||td(a),e(i,()=>i(r))||nd(a),s(r,a),a},bo=(s,e)=>(s.connect=e.connect.bind(e),s.disconnect=e.disconnect.bind(e),s),o1=(s,e,t,n)=>(i,{offset:r,...o})=>{const a=i.createBuffer(1,2,44100),c=e(i,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),l=t(i,{...o,gain:r}),u=a.getChannelData(0);u[0]=1,u[1]=1,c.buffer=a,c.loop=!0;const h={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(m){l.channelCount=m},get channelCountMode(){return l.channelCountMode},set channelCountMode(m){l.channelCountMode=m},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(m){l.channelInterpretation=m},get context(){return l.context},get inputs(){return[]},get numberOfInputs(){return c.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get offset(){return l.gain},get onended(){return c.onended},set onended(m){c.onended=m},addEventListener(...m){return c.addEventListener(m[0],m[1],m[2])},dispatchEvent(...m){return c.dispatchEvent(m[0])},removeEventListener(...m){return c.removeEventListener(m[0],m[1],m[2])},start(m=0){c.start.call(c,m)},stop(m=0){c.stop.call(c,m)}},d=()=>c.connect(l),f=()=>c.disconnect(l);return s(i,c),n(bo(h,l),d,f)},a1=(s,e)=>(t,n)=>{const i=t.createConvolver();if(Ot(i,n),n.disableNormalization===i.normalize&&(i.normalize=!n.disableNormalization),mt(i,n,"buffer"),n.channelCount>2||(e(i,"channelCount",r=>()=>r.call(i),r=>o=>{if(o>2)throw s();return r.call(i,o)}),n.channelCountMode==="max"))throw s();return e(i,"channelCountMode",r=>()=>r.call(i),r=>o=>{if(o==="max")throw s();return r.call(i,o)}),i},t_=(s,e)=>{const t=s.createDelay(e.maxDelayTime);return Ot(t,e),xt(t,e,"delayTime"),t},c1=s=>(e,t)=>{const n=e.createDynamicsCompressor();if(Ot(n,t),t.channelCount>2||t.channelCountMode==="max")throw s();return xt(n,t,"attack"),xt(n,t,"knee"),xt(n,t,"ratio"),xt(n,t,"release"),xt(n,t,"threshold"),n},vn=(s,e)=>{const t=s.createGain();return Ot(t,e),xt(t,e,"gain"),t},l1=s=>(e,t,n)=>{if(e.createIIRFilter===void 0)return s(e,t,n);const i=e.createIIRFilter(n.feedforward,n.feedback);return Ot(i,n),i};function u1(s,e){const t=e[0]*e[0]+e[1]*e[1];return[(s[0]*e[0]+s[1]*e[1])/t,(s[1]*e[0]-s[0]*e[1])/t]}function h1(s,e){return[s[0]*e[0]-s[1]*e[1],s[0]*e[1]+s[1]*e[0]]}function Qp(s,e){let t=[0,0];for(let n=s.length-1;n>=0;n-=1)t=h1(t,e),t[0]+=s[n];return t}const d1=(s,e,t,n)=>(i,r,{channelCount:o,channelCountMode:a,channelInterpretation:c,feedback:l,feedforward:u})=>{const h=Jg(r,i.sampleRate),d=l instanceof Float64Array?l:new Float64Array(l),f=u instanceof Float64Array?u:new Float64Array(u),m=d.length,_=f.length,g=Math.min(m,_);if(m===0||m>20)throw n();if(d[0]===0)throw e();if(_===0||_>20)throw n();if(f[0]===0)throw e();if(d[0]!==1){for(let T=0;T<_;T+=1)f[T]/=d[0];for(let T=1;T<m;T+=1)d[T]/=d[0]}const p=t(i,h,o,o);p.channelCount=o,p.channelCountMode=a,p.channelInterpretation=c;const x=32,v=[],M=[],y=[];for(let T=0;T<o;T+=1){v.push(0);const S=new Float32Array(x),w=new Float32Array(x);S.fill(0),w.fill(0),M.push(S),y.push(w)}p.onaudioprocess=T=>{const S=T.inputBuffer,w=T.outputBuffer,L=S.numberOfChannels;for(let U=0;U<L;U+=1){const V=S.getChannelData(U),C=w.getChannelData(U);v[U]=Qg(d,m,f,_,g,M[U],y[U],v[U],x,V,C)}};const b=i.sampleRate/2;return bo({get bufferSize(){return h},get channelCount(){return p.channelCount},set channelCount(T){p.channelCount=T},get channelCountMode(){return p.channelCountMode},set channelCountMode(T){p.channelCountMode=T},get channelInterpretation(){return p.channelInterpretation},set channelInterpretation(T){p.channelInterpretation=T},get context(){return p.context},get inputs(){return[p]},get numberOfInputs(){return p.numberOfInputs},get numberOfOutputs(){return p.numberOfOutputs},addEventListener(...T){return p.addEventListener(T[0],T[1],T[2])},dispatchEvent(...T){return p.dispatchEvent(T[0])},getFrequencyResponse(T,S,w){if(T.length!==S.length||S.length!==w.length)throw s();const L=T.length;for(let U=0;U<L;U+=1){const V=-Math.PI*(T[U]/b),C=[Math.cos(V),Math.sin(V)],P=Qp(f,C),F=Qp(d,C),k=u1(P,F);S[U]=Math.sqrt(k[0]*k[0]+k[1]*k[1]),w[U]=Math.atan2(k[1],k[0])}},removeEventListener(...T){return p.removeEventListener(T[0],T[1],T[2])}},p)},f1=(s,e)=>s.createMediaElementSource(e.mediaElement),p1=(s,e)=>{const t=s.createMediaStreamDestination();return Ot(t,e),t.numberOfOutputs===1&&Object.defineProperty(t,"numberOfOutputs",{get:()=>0}),t},m1=(s,{mediaStream:e})=>{const t=e.getAudioTracks();t.sort((r,o)=>r.id<o.id?-1:r.id>o.id?1:0);const n=t.slice(0,1),i=s.createMediaStreamSource(new MediaStream(n));return Object.defineProperty(i,"mediaStream",{value:e}),i},g1=(s,e)=>(t,{mediaStreamTrack:n})=>{if(typeof t.createMediaStreamTrackSource=="function")return t.createMediaStreamTrackSource(n);const i=new MediaStream([n]),r=t.createMediaStreamSource(i);if(n.kind!=="audio")throw s();if(e(t))throw new TypeError;return r},_1=s=>s===null?null:s.hasOwnProperty("OfflineAudioContext")?s.OfflineAudioContext:s.hasOwnProperty("webkitOfflineAudioContext")?s.webkitOfflineAudioContext:null,v1=(s,e,t,n,i,r)=>(o,a)=>{const c=o.createOscillator();return Ot(c,a),xt(c,a,"detune"),xt(c,a,"frequency"),a.periodicWave!==void 0?c.setPeriodicWave(a.periodicWave):mt(c,a,"type"),e(t,()=>t(o))||td(c),e(n,()=>n(o))||r(c,o),e(i,()=>i(o))||nd(c),s(o,c),c},y1=s=>(e,t)=>{const n=e.createPanner();return n.orientationX===void 0?s(e,t):(Ot(n,t),xt(n,t,"orientationX"),xt(n,t,"orientationY"),xt(n,t,"orientationZ"),xt(n,t,"positionX"),xt(n,t,"positionY"),xt(n,t,"positionZ"),mt(n,t,"coneInnerAngle"),mt(n,t,"coneOuterAngle"),mt(n,t,"coneOuterGain"),mt(n,t,"distanceModel"),mt(n,t,"maxDistance"),mt(n,t,"panningModel"),mt(n,t,"refDistance"),mt(n,t,"rolloffFactor"),n)},x1=(s,e,t,n,i,r,o,a,c,l)=>(u,{coneInnerAngle:h,coneOuterAngle:d,coneOuterGain:f,distanceModel:m,maxDistance:_,orientationX:g,orientationY:p,orientationZ:x,panningModel:v,positionX:M,positionY:y,positionZ:b,refDistance:E,rolloffFactor:T,...S})=>{const w=u.createPanner();if(S.channelCount>2||S.channelCountMode==="max")throw o();Ot(w,S);const L={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},U=t(u,{...L,channelInterpretation:"speakers",numberOfInputs:6}),V=n(u,{...S,gain:1}),C=n(u,{...L,gain:1}),P=n(u,{...L,gain:0}),F=n(u,{...L,gain:0}),k=n(u,{...L,gain:0}),j=n(u,{...L,gain:0}),B=n(u,{...L,gain:0}),X=i(u,256,6,1),R=r(u,{...L,curve:new Float32Array([1,1]),oversample:"none"});let H=[g,p,x],re=[M,y,b];const ce=new Float32Array(1);X.onaudioprocess=({inputBuffer:Q})=>{const Ge=[c(Q,ce,0),c(Q,ce,1),c(Q,ce,2)];Ge.some((De,z)=>De!==H[z])&&(w.setOrientation(...Ge),H=Ge);const vt=[c(Q,ce,3),c(Q,ce,4),c(Q,ce,5)];vt.some((De,z)=>De!==re[z])&&(w.setPosition(...vt),re=vt)},Object.defineProperty(P.gain,"defaultValue",{get:()=>0}),Object.defineProperty(F.gain,"defaultValue",{get:()=>0}),Object.defineProperty(k.gain,"defaultValue",{get:()=>0}),Object.defineProperty(j.gain,"defaultValue",{get:()=>0}),Object.defineProperty(B.gain,"defaultValue",{get:()=>0});const J={get bufferSize(){},get channelCount(){return w.channelCount},set channelCount(Q){if(Q>2)throw o();V.channelCount=Q,w.channelCount=Q},get channelCountMode(){return w.channelCountMode},set channelCountMode(Q){if(Q==="max")throw o();V.channelCountMode=Q,w.channelCountMode=Q},get channelInterpretation(){return w.channelInterpretation},set channelInterpretation(Q){V.channelInterpretation=Q,w.channelInterpretation=Q},get coneInnerAngle(){return w.coneInnerAngle},set coneInnerAngle(Q){w.coneInnerAngle=Q},get coneOuterAngle(){return w.coneOuterAngle},set coneOuterAngle(Q){w.coneOuterAngle=Q},get coneOuterGain(){return w.coneOuterGain},set coneOuterGain(Q){if(Q<0||Q>1)throw e();w.coneOuterGain=Q},get context(){return w.context},get distanceModel(){return w.distanceModel},set distanceModel(Q){w.distanceModel=Q},get inputs(){return[V]},get maxDistance(){return w.maxDistance},set maxDistance(Q){if(Q<0)throw new RangeError;w.maxDistance=Q},get numberOfInputs(){return w.numberOfInputs},get numberOfOutputs(){return w.numberOfOutputs},get orientationX(){return C.gain},get orientationY(){return P.gain},get orientationZ(){return F.gain},get panningModel(){return w.panningModel},set panningModel(Q){w.panningModel=Q},get positionX(){return k.gain},get positionY(){return j.gain},get positionZ(){return B.gain},get refDistance(){return w.refDistance},set refDistance(Q){if(Q<0)throw new RangeError;w.refDistance=Q},get rolloffFactor(){return w.rolloffFactor},set rolloffFactor(Q){if(Q<0)throw new RangeError;w.rolloffFactor=Q},addEventListener(...Q){return V.addEventListener(Q[0],Q[1],Q[2])},dispatchEvent(...Q){return V.dispatchEvent(Q[0])},removeEventListener(...Q){return V.removeEventListener(Q[0],Q[1],Q[2])}};h!==J.coneInnerAngle&&(J.coneInnerAngle=h),d!==J.coneOuterAngle&&(J.coneOuterAngle=d),f!==J.coneOuterGain&&(J.coneOuterGain=f),m!==J.distanceModel&&(J.distanceModel=m),_!==J.maxDistance&&(J.maxDistance=_),g!==J.orientationX.value&&(J.orientationX.value=g),p!==J.orientationY.value&&(J.orientationY.value=p),x!==J.orientationZ.value&&(J.orientationZ.value=x),v!==J.panningModel&&(J.panningModel=v),M!==J.positionX.value&&(J.positionX.value=M),y!==J.positionY.value&&(J.positionY.value=y),b!==J.positionZ.value&&(J.positionZ.value=b),E!==J.refDistance&&(J.refDistance=E),T!==J.rolloffFactor&&(J.rolloffFactor=T),(H[0]!==1||H[1]!==0||H[2]!==0)&&w.setOrientation(...H),(re[0]!==0||re[1]!==0||re[2]!==0)&&w.setPosition(...re);const de=()=>{V.connect(w),s(V,R,0,0),R.connect(C).connect(U,0,0),R.connect(P).connect(U,0,1),R.connect(F).connect(U,0,2),R.connect(k).connect(U,0,3),R.connect(j).connect(U,0,4),R.connect(B).connect(U,0,5),U.connect(X).connect(u.destination)},Se=()=>{V.disconnect(w),a(V,R,0,0),R.disconnect(C),C.disconnect(U),R.disconnect(P),P.disconnect(U),R.disconnect(F),F.disconnect(U),R.disconnect(k),k.disconnect(U),R.disconnect(j),j.disconnect(U),R.disconnect(B),B.disconnect(U),U.disconnect(X),X.disconnect(u.destination)};return l(bo(J,w),de,Se)},S1=s=>(e,{disableNormalization:t,imag:n,real:i})=>{const r=n instanceof Float32Array?n:new Float32Array(n),o=i instanceof Float32Array?i:new Float32Array(i),a=e.createPeriodicWave(o,r,{disableNormalization:t});if(Array.from(n).length<2)throw s();return a},wa=(s,e,t,n)=>s.createScriptProcessor(e,t,n),M1=(s,e)=>(t,n)=>{const i=n.channelCountMode;if(i==="clamped-max")throw e();if(t.createStereoPanner===void 0)return s(t,n);const r=t.createStereoPanner();return Ot(r,n),xt(r,n,"pan"),Object.defineProperty(r,"channelCountMode",{get:()=>i,set:o=>{if(o!==i)throw e()}}),r},b1=(s,e,t,n,i,r)=>{const a=new Float32Array([1,1]),c=Math.PI/2,l={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},u={...l,oversample:"none"},h=(m,_,g,p)=>{const x=new Float32Array(16385),v=new Float32Array(16385);for(let S=0;S<16385;S+=1){const w=S/16384*c;x[S]=Math.cos(w),v[S]=Math.sin(w)}const M=t(m,{...l,gain:0}),y=n(m,{...u,curve:x}),b=n(m,{...u,curve:a}),E=t(m,{...l,gain:0}),T=n(m,{...u,curve:v});return{connectGraph(){_.connect(M),_.connect(b.inputs===void 0?b:b.inputs[0]),_.connect(E),b.connect(g),g.connect(y.inputs===void 0?y:y.inputs[0]),g.connect(T.inputs===void 0?T:T.inputs[0]),y.connect(M.gain),T.connect(E.gain),M.connect(p,0,0),E.connect(p,0,1)},disconnectGraph(){_.disconnect(M),_.disconnect(b.inputs===void 0?b:b.inputs[0]),_.disconnect(E),b.disconnect(g),g.disconnect(y.inputs===void 0?y:y.inputs[0]),g.disconnect(T.inputs===void 0?T:T.inputs[0]),y.disconnect(M.gain),T.disconnect(E.gain),M.disconnect(p,0,0),E.disconnect(p,0,1)}}},d=(m,_,g,p)=>{const x=new Float32Array(16385),v=new Float32Array(16385),M=new Float32Array(16385),y=new Float32Array(16385),b=Math.floor(16385/2);for(let k=0;k<16385;k+=1)if(k>b){const j=(k-b)/(16384-b)*c;x[k]=Math.cos(j),v[k]=Math.sin(j),M[k]=0,y[k]=1}else{const j=k/(16384-b)*c;x[k]=1,v[k]=0,M[k]=Math.cos(j),y[k]=Math.sin(j)}const E=e(m,{channelCount:2,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:2}),T=t(m,{...l,gain:0}),S=n(m,{...u,curve:x}),w=t(m,{...l,gain:0}),L=n(m,{...u,curve:v}),U=n(m,{...u,curve:a}),V=t(m,{...l,gain:0}),C=n(m,{...u,curve:M}),P=t(m,{...l,gain:0}),F=n(m,{...u,curve:y});return{connectGraph(){_.connect(E),_.connect(U.inputs===void 0?U:U.inputs[0]),E.connect(T,0),E.connect(w,0),E.connect(V,1),E.connect(P,1),U.connect(g),g.connect(S.inputs===void 0?S:S.inputs[0]),g.connect(L.inputs===void 0?L:L.inputs[0]),g.connect(C.inputs===void 0?C:C.inputs[0]),g.connect(F.inputs===void 0?F:F.inputs[0]),S.connect(T.gain),L.connect(w.gain),C.connect(V.gain),F.connect(P.gain),T.connect(p,0,0),V.connect(p,0,0),w.connect(p,0,1),P.connect(p,0,1)},disconnectGraph(){_.disconnect(E),_.disconnect(U.inputs===void 0?U:U.inputs[0]),E.disconnect(T,0),E.disconnect(w,0),E.disconnect(V,1),E.disconnect(P,1),U.disconnect(g),g.disconnect(S.inputs===void 0?S:S.inputs[0]),g.disconnect(L.inputs===void 0?L:L.inputs[0]),g.disconnect(C.inputs===void 0?C:C.inputs[0]),g.disconnect(F.inputs===void 0?F:F.inputs[0]),S.disconnect(T.gain),L.disconnect(w.gain),C.disconnect(V.gain),F.disconnect(P.gain),T.disconnect(p,0,0),V.disconnect(p,0,0),w.disconnect(p,0,1),P.disconnect(p,0,1)}}},f=(m,_,g,p,x)=>{if(_===1)return h(m,g,p,x);if(_===2)return d(m,g,p,x);throw i()};return(m,{channelCount:_,channelCountMode:g,pan:p,...x})=>{if(g==="max")throw i();const v=s(m,{...x,channelCount:1,channelCountMode:g,numberOfInputs:2}),M=t(m,{...x,channelCount:_,channelCountMode:g,gain:1}),y=t(m,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:p});let{connectGraph:b,disconnectGraph:E}=f(m,_,M,y,v);Object.defineProperty(y.gain,"defaultValue",{get:()=>0}),Object.defineProperty(y.gain,"maxValue",{get:()=>1}),Object.defineProperty(y.gain,"minValue",{get:()=>-1});const T={get bufferSize(){},get channelCount(){return M.channelCount},set channelCount(U){M.channelCount!==U&&(S&&E(),{connectGraph:b,disconnectGraph:E}=f(m,U,M,y,v),S&&b()),M.channelCount=U},get channelCountMode(){return M.channelCountMode},set channelCountMode(U){if(U==="clamped-max"||U==="max")throw i();M.channelCountMode=U},get channelInterpretation(){return M.channelInterpretation},set channelInterpretation(U){M.channelInterpretation=U},get context(){return M.context},get inputs(){return[M]},get numberOfInputs(){return M.numberOfInputs},get numberOfOutputs(){return M.numberOfOutputs},get pan(){return y.gain},addEventListener(...U){return M.addEventListener(U[0],U[1],U[2])},dispatchEvent(...U){return M.dispatchEvent(U[0])},removeEventListener(...U){return M.removeEventListener(U[0],U[1],U[2])}};let S=!1;const w=()=>{b(),S=!0},L=()=>{E(),S=!1};return r(bo(T,v),w,L)}},T1=(s,e,t,n,i,r,o)=>(a,c)=>{const l=a.createWaveShaper();if(r!==null&&r.name==="webkitAudioContext"&&a.createGain().gain.automationRate===void 0)return t(a,c);Ot(l,c);const u=c.curve===null||c.curve instanceof Float32Array?c.curve:new Float32Array(c.curve);if(u!==null&&u.length<2)throw e();mt(l,{curve:u},"curve"),mt(l,c,"oversample");let h=null,d=!1;return o(l,"curve",_=>()=>_.call(l),_=>g=>(_.call(l,g),d&&(n(g)&&h===null?h=s(a,l):!n(g)&&h!==null&&(h(),h=null)),g)),i(l,()=>{d=!0,n(l.curve)&&(h=s(a,l))},()=>{d=!1,h!==null&&(h(),h=null)})},E1=(s,e,t,n,i)=>(r,{curve:o,oversample:a,...c})=>{const l=r.createWaveShaper(),u=r.createWaveShaper();Ot(l,c),Ot(u,c);const h=t(r,{...c,gain:1}),d=t(r,{...c,gain:-1}),f=t(r,{...c,gain:1}),m=t(r,{...c,gain:-1});let _=null,g=!1,p=null;const x={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(y){h.channelCount=y,d.channelCount=y,l.channelCount=y,f.channelCount=y,u.channelCount=y,m.channelCount=y},get channelCountMode(){return l.channelCountMode},set channelCountMode(y){h.channelCountMode=y,d.channelCountMode=y,l.channelCountMode=y,f.channelCountMode=y,u.channelCountMode=y,m.channelCountMode=y},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(y){h.channelInterpretation=y,d.channelInterpretation=y,l.channelInterpretation=y,f.channelInterpretation=y,u.channelInterpretation=y,m.channelInterpretation=y},get context(){return l.context},get curve(){return p},set curve(y){if(y!==null&&y.length<2)throw e();if(y===null)l.curve=y,u.curve=y;else{const b=y.length,E=new Float32Array(b+2-b%2),T=new Float32Array(b+2-b%2);E[0]=y[0],T[0]=-y[b-1];const S=Math.ceil((b+1)/2),w=(b+1)/2-1;for(let L=1;L<S;L+=1){const U=L/S*w,V=Math.floor(U),C=Math.ceil(U);E[L]=V===C?y[V]:(1-(U-V))*y[V]+(1-(C-U))*y[C],T[L]=V===C?-y[b-1-V]:-((1-(U-V))*y[b-1-V])-(1-(C-U))*y[b-1-C]}E[S]=b%2===1?y[S-1]:(y[S-2]+y[S-1])/2,l.curve=E,u.curve=T}p=y,g&&(n(p)&&_===null?_=s(r,h):_!==null&&(_(),_=null))},get inputs(){return[h]},get numberOfInputs(){return l.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get oversample(){return l.oversample},set oversample(y){l.oversample=y,u.oversample=y},addEventListener(...y){return h.addEventListener(y[0],y[1],y[2])},dispatchEvent(...y){return h.dispatchEvent(y[0])},removeEventListener(...y){return h.removeEventListener(y[0],y[1],y[2])}};o!==null&&(x.curve=o instanceof Float32Array?o:new Float32Array(o)),a!==x.oversample&&(x.oversample=a);const v=()=>{h.connect(l).connect(f),h.connect(d).connect(u).connect(m).connect(f),g=!0,n(p)&&(_=s(r,h))},M=()=>{h.disconnect(l),l.disconnect(f),h.disconnect(d),d.disconnect(u),u.disconnect(m),m.disconnect(f),g=!1,_!==null&&(_(),_=null)};return i(bo(x,f),v,M)},hn=()=>new DOMException("","NotSupportedError"),w1={numberOfChannels:1},A1=(s,e,t,n,i)=>class extends s{constructor(o,a,c){let l;if(typeof o=="number"&&a!==void 0&&c!==void 0)l={length:a,numberOfChannels:o,sampleRate:c};else if(typeof o=="object")l=o;else throw new Error("The given parameters are not valid.");const{length:u,numberOfChannels:h,sampleRate:d}={...w1,...l},f=n(h,u,d);e(Jo,()=>Jo(f))||f.addEventListener("statechange",(()=>{let m=0;const _=g=>{this._state==="running"&&(m>0?(f.removeEventListener("statechange",_),g.stopImmediatePropagation(),this._waitForThePromiseToSettle(g)):m+=1)};return _})()),super(f,h),this._length=u,this._nativeOfflineAudioContext=f,this._state=null}get length(){return this._nativeOfflineAudioContext.length===void 0?this._length:this._nativeOfflineAudioContext.length}get state(){return this._state===null?this._nativeOfflineAudioContext.state:this._state}startRendering(){return this._state==="running"?Promise.reject(t()):(this._state="running",i(this.destination,this._nativeOfflineAudioContext).finally(()=>{this._state=null,qg(this)}))}_waitForThePromiseToSettle(o){this._state===null?this._nativeOfflineAudioContext.dispatchEvent(o):setTimeout(()=>this._waitForThePromiseToSettle(o))}},C1={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:440,periodicWave:void 0,type:"sine"},R1=(s,e,t,n,i,r,o)=>class extends s{constructor(c,l){const u=i(c),h={...C1,...l},d=t(u,h),f=r(u),m=f?n():null,_=c.sampleRate/2;super(c,!1,d,m),this._detune=e(this,f,d.detune,153600,-153600),this._frequency=e(this,f,d.frequency,_,-_),this._nativeOscillatorNode=d,this._onended=null,this._oscillatorNodeRenderer=m,this._oscillatorNodeRenderer!==null&&h.periodicWave!==void 0&&(this._oscillatorNodeRenderer.periodicWave=h.periodicWave)}get detune(){return this._detune}get frequency(){return this._frequency}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?o(this,c):null;this._nativeOscillatorNode.onended=l;const u=this._nativeOscillatorNode.onended;this._onended=u!==null&&u===l?c:u}get type(){return this._nativeOscillatorNode.type}set type(c){this._nativeOscillatorNode.type=c,this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=null)}setPeriodicWave(c){this._nativeOscillatorNode.setPeriodicWave(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=c)}start(c=0){if(this._nativeOscillatorNode.start(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.start=c),this.context.state!=="closed"){co(this);const l=()=>{this._nativeOscillatorNode.removeEventListener("ended",l),zi(this)&&Ma(this)};this._nativeOscillatorNode.addEventListener("ended",l)}}stop(c=0){this._nativeOscillatorNode.stop(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.stop=c)}},I1=(s,e,t,n,i)=>()=>{const r=new WeakMap;let o=null,a=null,c=null;const l=async(u,h)=>{let d=t(u);const f=Jt(d,h);if(!f){const m={channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,detune:d.detune.value,frequency:d.frequency.value,periodicWave:o===null?void 0:o,type:d.type};d=e(h,m),a!==null&&d.start(a),c!==null&&d.stop(c)}return r.set(h,d),f?(await s(h,u.detune,d.detune),await s(h,u.frequency,d.frequency)):(await n(h,u.detune,d.detune),await n(h,u.frequency,d.frequency)),await i(u,h,d),d};return{set periodicWave(u){o=u},set start(u){a=u},set stop(u){c=u},render(u,h){const d=r.get(h);return d!==void 0?Promise.resolve(d):l(u,h)}}},D1={channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",coneInnerAngle:360,coneOuterAngle:360,coneOuterGain:0,distanceModel:"inverse",maxDistance:1e4,orientationX:1,orientationY:0,orientationZ:0,panningModel:"equalpower",positionX:0,positionY:0,positionZ:0,refDistance:1,rolloffFactor:1},P1=(s,e,t,n,i,r,o)=>class extends s{constructor(c,l){const u=i(c),h={...D1,...l},d=t(u,h),f=r(u),m=f?n():null;super(c,!1,d,m),this._nativePannerNode=d,this._orientationX=e(this,f,d.orientationX,an,fn),this._orientationY=e(this,f,d.orientationY,an,fn),this._orientationZ=e(this,f,d.orientationZ,an,fn),this._positionX=e(this,f,d.positionX,an,fn),this._positionY=e(this,f,d.positionY,an,fn),this._positionZ=e(this,f,d.positionZ,an,fn),o(this,1)}get coneInnerAngle(){return this._nativePannerNode.coneInnerAngle}set coneInnerAngle(c){this._nativePannerNode.coneInnerAngle=c}get coneOuterAngle(){return this._nativePannerNode.coneOuterAngle}set coneOuterAngle(c){this._nativePannerNode.coneOuterAngle=c}get coneOuterGain(){return this._nativePannerNode.coneOuterGain}set coneOuterGain(c){this._nativePannerNode.coneOuterGain=c}get distanceModel(){return this._nativePannerNode.distanceModel}set distanceModel(c){this._nativePannerNode.distanceModel=c}get maxDistance(){return this._nativePannerNode.maxDistance}set maxDistance(c){this._nativePannerNode.maxDistance=c}get orientationX(){return this._orientationX}get orientationY(){return this._orientationY}get orientationZ(){return this._orientationZ}get panningModel(){return this._nativePannerNode.panningModel}set panningModel(c){this._nativePannerNode.panningModel=c}get positionX(){return this._positionX}get positionY(){return this._positionY}get positionZ(){return this._positionZ}get refDistance(){return this._nativePannerNode.refDistance}set refDistance(c){this._nativePannerNode.refDistance=c}get rolloffFactor(){return this._nativePannerNode.rolloffFactor}set rolloffFactor(c){this._nativePannerNode.rolloffFactor=c}},N1=(s,e,t,n,i,r,o,a,c,l)=>()=>{const u=new WeakMap;let h=null;const d=async(f,m)=>{let _=null,g=r(f);const p={channelCount:g.channelCount,channelCountMode:g.channelCountMode,channelInterpretation:g.channelInterpretation},x={...p,coneInnerAngle:g.coneInnerAngle,coneOuterAngle:g.coneOuterAngle,coneOuterGain:g.coneOuterGain,distanceModel:g.distanceModel,maxDistance:g.maxDistance,panningModel:g.panningModel,refDistance:g.refDistance,rolloffFactor:g.rolloffFactor},v=Jt(g,m);if("bufferSize"in g)_=n(m,{...p,gain:1});else if(!v){const M={...x,orientationX:g.orientationX.value,orientationY:g.orientationY.value,orientationZ:g.orientationZ.value,positionX:g.positionX.value,positionY:g.positionY.value,positionZ:g.positionZ.value};g=i(m,M)}if(u.set(m,_===null?g:_),_!==null){if(h===null){if(o===null)throw new Error("Missing the native OfflineAudioContext constructor.");const L=new o(6,f.context.length,m.sampleRate),U=e(L,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6});U.connect(L.destination),h=(async()=>{const V=await Promise.all([f.orientationX,f.orientationY,f.orientationZ,f.positionX,f.positionY,f.positionZ].map(async(C,P)=>{const F=t(L,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:P===0?1:0});return await a(L,C,F.offset),F}));for(let C=0;C<6;C+=1)V[C].connect(U,0,C),V[C].start(0);return l(L)})()}const M=await h,y=n(m,{...p,gain:1});await c(f,m,y);const b=[];for(let L=0;L<M.numberOfChannels;L+=1)b.push(M.getChannelData(L));let E=[b[0][0],b[1][0],b[2][0]],T=[b[3][0],b[4][0],b[5][0]],S=n(m,{...p,gain:1}),w=i(m,{...x,orientationX:E[0],orientationY:E[1],orientationZ:E[2],positionX:T[0],positionY:T[1],positionZ:T[2]});y.connect(S).connect(w.inputs[0]),w.connect(_);for(let L=128;L<M.length;L+=128){const U=[b[0][L],b[1][L],b[2][L]],V=[b[3][L],b[4][L],b[5][L]];if(U.some((C,P)=>C!==E[P])||V.some((C,P)=>C!==T[P])){E=U,T=V;const C=L/m.sampleRate;S.gain.setValueAtTime(0,C),S=n(m,{...p,gain:0}),w=i(m,{...x,orientationX:E[0],orientationY:E[1],orientationZ:E[2],positionX:T[0],positionY:T[1],positionZ:T[2]}),S.gain.setValueAtTime(1,C),y.connect(S).connect(w.inputs[0]),w.connect(_)}}return _}return v?(await s(m,f.orientationX,g.orientationX),await s(m,f.orientationY,g.orientationY),await s(m,f.orientationZ,g.orientationZ),await s(m,f.positionX,g.positionX),await s(m,f.positionY,g.positionY),await s(m,f.positionZ,g.positionZ)):(await a(m,f.orientationX,g.orientationX),await a(m,f.orientationY,g.orientationY),await a(m,f.orientationZ,g.orientationZ),await a(m,f.positionX,g.positionX),await a(m,f.positionY,g.positionY),await a(m,f.positionZ,g.positionZ)),Mo(g)?await c(f,m,g.inputs[0]):await c(f,m,g),g};return{render(f,m){const _=u.get(m);return _!==void 0?Promise.resolve(_):d(f,m)}}},L1={disableNormalization:!1},O1=(s,e,t,n)=>class n_{constructor(r,o){const a=e(r),c=n({...L1,...o}),l=s(a,c);return t.add(l),l}static[Symbol.hasInstance](r){return r!==null&&typeof r=="object"&&Object.getPrototypeOf(r)===n_.prototype||t.has(r)}},U1=(s,e)=>(t,n,i)=>(s(n).replay(i),e(n,t,i)),F1=(s,e,t)=>async(n,i,r)=>{const o=s(n);await Promise.all(o.activeInputs.map((a,c)=>Array.from(a).map(async([l,u])=>{const d=await e(l).render(l,i),f=n.context.destination;!t(l)&&(n!==f||!t(n))&&d.connect(r,u,c)})).reduce((a,c)=>[...a,...c],[]))},k1=(s,e,t)=>async(n,i,r)=>{const o=e(n);await Promise.all(Array.from(o.activeInputs).map(async([a,c])=>{const u=await s(a).render(a,i);t(a)||u.connect(r,c)}))},B1=(s,e,t,n)=>i=>s(Jo,()=>Jo(i))?Promise.resolve(s(n,n)).then(r=>{if(!r){const o=t(i,512,0,1);i.oncomplete=()=>{o.onaudioprocess=null,o.disconnect()},o.onaudioprocess=()=>i.currentTime,o.connect(i.destination)}return i.startRendering()}):new Promise(r=>{const o=e(i,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});i.oncomplete=a=>{o.disconnect(),r(a.renderedBuffer)},o.connect(i.destination),i.startRendering()}),V1=s=>(e,t)=>{s.set(e,t)},z1=s=>(e,t)=>s.set(e,t),G1=(s,e,t,n,i,r,o,a)=>(c,l)=>t(c).render(c,l).then(()=>Promise.all(Array.from(n(l)).map(u=>t(u).render(u,l)))).then(()=>i(l)).then(u=>(typeof u.copyFromChannel!="function"?(o(u),Qh(u)):e(r,()=>r(u))||a(u),s.add(u),u)),H1={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",pan:0},W1=(s,e,t,n,i,r)=>class extends s{constructor(a,c){const l=i(a),u={...H1,...c},h=t(l,u),d=r(l),f=d?n():null;super(a,!1,h,f),this._pan=e(this,d,h.pan)}get pan(){return this._pan}},X1=(s,e,t,n,i)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=t(a);const u=Jt(l,c);if(!u){const h={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,pan:l.pan.value};l=e(c,h)}return r.set(c,l),u?await s(c,a.pan,l.pan):await n(c,a.pan,l.pan),Mo(l)?await i(a,c,l.inputs[0]):await i(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},q1=s=>()=>{if(s===null)return!1;try{new s({length:1,sampleRate:44100})}catch{return!1}return!0},j1=(s,e)=>async()=>{if(s===null)return!0;if(e===null)return!1;const t=new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'],{type:"application/javascript; charset=utf-8"}),n=new e(1,128,44100),i=URL.createObjectURL(t);let r=!1,o=!1;try{await n.audioWorklet.addModule(i);const a=new s(n,"a",{numberOfOutputs:0}),c=n.createOscillator();a.port.onmessage=()=>r=!0,a.onprocessorerror=()=>o=!0,c.connect(a),c.start(0),await n.startRendering(),await new Promise(l=>setTimeout(l))}catch{}finally{URL.revokeObjectURL(i)}return r&&!o},Y1=(s,e)=>()=>{if(e===null)return Promise.resolve(!1);const t=new e(1,1,44100),n=s(t,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return new Promise(i=>{t.oncomplete=()=>{n.disconnect(),i(t.currentTime!==0)},t.startRendering()})},$1=()=>new DOMException("","UnknownError"),K1={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",curve:null,oversample:"none"},Z1=(s,e,t,n,i,r,o)=>class extends s{constructor(c,l){const u=i(c),h={...K1,...l},d=t(u,h),m=r(u)?n():null;super(c,!0,d,m),this._isCurveNullified=!1,this._nativeWaveShaperNode=d,o(this,1)}get curve(){return this._isCurveNullified?null:this._nativeWaveShaperNode.curve}set curve(c){if(c===null)this._isCurveNullified=!0,this._nativeWaveShaperNode.curve=new Float32Array([0,0]);else{if(c.length<2)throw e();this._isCurveNullified=!1,this._nativeWaveShaperNode.curve=c}}get oversample(){return this._nativeWaveShaperNode.oversample}set oversample(c){this._nativeWaveShaperNode.oversample=c}},Q1=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,o)=>{let a=e(r);if(!Jt(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,curve:a.curve,oversample:a.oversample};a=s(o,l)}return n.set(o,a),Mo(a)?await t(r,o,a.inputs[0]):await t(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},J1=()=>typeof window>"u"?null:window,eC=(s,e)=>t=>{t.copyFromChannel=(n,i,r=0)=>{const o=s(r),a=s(i);if(a>=t.numberOfChannels)throw e();const c=t.length,l=t.getChannelData(a),u=n.length;for(let h=o<0?-o:0;h+o<c&&h<u;h+=1)n[h]=l[h+o]},t.copyToChannel=(n,i,r=0)=>{const o=s(r),a=s(i);if(a>=t.numberOfChannels)throw e();const c=t.length,l=t.getChannelData(a),u=n.length;for(let h=o<0?-o:0;h+o<c&&h<u;h+=1)l[h+o]=n[h]}},tC=s=>e=>{e.copyFromChannel=(t=>(n,i,r=0)=>{const o=s(r),a=s(i);if(o<e.length)return t.call(e,n,a,o)})(e.copyFromChannel),e.copyToChannel=(t=>(n,i,r=0)=>{const o=s(r),a=s(i);if(o<e.length)return t.call(e,n,a,o)})(e.copyToChannel)},nC=s=>(e,t)=>{const n=t.createBuffer(1,1,44100);e.buffer===null&&(e.buffer=n),s(e,"buffer",i=>()=>{const r=i.call(e);return r===n?null:r},i=>r=>i.call(e,r===null?n:r))},iC=(s,e)=>(t,n)=>{n.channelCount=1,n.channelCountMode="explicit",Object.defineProperty(n,"channelCount",{get:()=>1,set:()=>{throw s()}}),Object.defineProperty(n,"channelCountMode",{get:()=>"explicit",set:()=>{throw s()}});const i=t.createBufferSource();e(n,()=>{const a=n.numberOfInputs;for(let c=0;c<a;c+=1)i.connect(n,0,c)},()=>i.disconnect(n))},i_=(s,e,t)=>s.copyFromChannel===void 0?s.getChannelData(t)[0]:(s.copyFromChannel(e,t),e[0]),s_=s=>{if(s===null)return!1;const e=s.length;return e%2!==0?s[Math.floor(e/2)]!==0:s[e/2-1]+s[e/2]!==0},Aa=(s,e,t,n)=>{let i=s;for(;!i.hasOwnProperty(e);)i=Object.getPrototypeOf(i);const{get:r,set:o}=Object.getOwnPropertyDescriptor(i,e);Object.defineProperty(s,e,{get:t(r),set:n(o)})},sC=s=>({...s,outputChannelCount:s.outputChannelCount!==void 0?s.outputChannelCount:s.numberOfInputs===1&&s.numberOfOutputs===1?[s.channelCount]:Array.from({length:s.numberOfOutputs},()=>1)}),rC=s=>({...s,channelCount:s.numberOfOutputs}),oC=s=>{const{imag:e,real:t}=s;return e===void 0?t===void 0?{...s,imag:[0,0],real:[0,0]}:{...s,imag:Array.from(t,()=>0),real:t}:t===void 0?{...s,imag:e,real:Array.from(e,()=>0)}:{...s,imag:e,real:t}},r_=(s,e,t)=>{try{s.setValueAtTime(e,t)}catch(n){if(n.code!==9)throw n;r_(s,e,t+1e-7)}},aC=s=>{const e=s.createBufferSource();e.start();try{e.start()}catch{return!0}return!1},cC=s=>{const e=s.createBufferSource(),t=s.createBuffer(1,1,44100);e.buffer=t;try{e.start(0,1)}catch{return!1}return!0},lC=s=>{const e=s.createBufferSource();e.start();try{e.stop()}catch{return!1}return!0},id=s=>{const e=s.createOscillator();try{e.start(-1)}catch(t){return t instanceof RangeError}return!1},o_=s=>{const e=s.createBuffer(1,1,44100),t=s.createBufferSource();t.buffer=e,t.start(),t.stop();try{return t.stop(),!0}catch{return!1}},sd=s=>{const e=s.createOscillator();try{e.stop(-1)}catch(t){return t instanceof RangeError}return!1},uC=s=>{const{port1:e,port2:t}=new MessageChannel;try{e.postMessage(s)}finally{e.close(),t.close()}},hC=s=>{s.start=(e=>(t=0,n=0,i)=>{const r=s.buffer,o=r===null?n:Math.min(r.duration,n);r!==null&&o>r.duration-.5/s.context.sampleRate?e.call(s,t,0,0):e.call(s,t,o,i)})(s.start)},a_=(s,e)=>{const t=e.createGain();s.connect(t);const n=(i=>()=>{i.call(s,t),s.removeEventListener("ended",n)})(s.disconnect);s.addEventListener("ended",n),bo(s,t),s.stop=(i=>{let r=!1;return(o=0)=>{if(r)try{i.call(s,o)}catch{t.gain.setValueAtTime(0,o)}else i.call(s,o),r=!0}})(s.stop)},To=(s,e)=>t=>{const n={value:s};return Object.defineProperties(t,{currentTarget:n,target:n}),typeof e=="function"?e.call(s,t):e.handleEvent.call(s,t)},dC=PE(ar),fC=kE(ar),pC=Kw(wl),c_=new WeakMap,mC=pA(c_),Jn=ww(new Map,new WeakMap),hi=J1(),l_=WA(Jn,_i),rd=fA(ln),Xt=F1(ln,rd,nr),gC=HE(l_,pt,Xt),ht=_A(El),Yi=_1(hi),at=LA(Yi),u_=new WeakMap,h_=oA(To),Ca=YA(hi),od=IA(Ca),ad=DA(hi),d_=PA(hi),ea=KA(hi),Tt=pw(NE(Bg),FE(dC,fC,Gc,pC,Hc,ln,mC,Sa,pt,ar,zi,nr,wc),Jn,EA(uh,Hc,ln,pt,Qo,zi),_i,Al,hn,qw(Gc,uh,ln,pt,Qo,ht,zi,at),Jw(u_,ln,Kn),h_,ht,od,ad,d_,at,ea),_C=GE(Tt,gC,_i,l_,ht,at),cd=new WeakSet,Jp=XA(hi),f_=Bw(new Uint32Array(1)),ld=eC(f_,_i),ud=tC(f_),vC=XE(cd,Jn,hn,Jp,Yi,q1(Jp),ld,ud),Cl=BE(vn),p_=k1(rd,ba,nr),vi=Nw(p_),Eo=jA(Cl,Jn,aC,cC,lC,id,o_,sd,hC,nC(Aa),a_),yi=U1(mA(ba),p_),yC=YE(vi,Eo,pt,yi,Xt),ei=mw(LE(Vg),u_,Zh,gw,wE,AE,CE,RE,IE,ah,Fg,Ca,r_),xC=jE(Tt,yC,ei,zt,Eo,ht,at,To),SC=iw(Tt,sw,_i,zt,$A(vn,Aa),ht,at,Xt),MC=Ew(vi,e_,pt,yi,Xt),cr=z1(c_),bC=Tw(Tt,ei,MC,Al,e_,ht,at,cr),ys=GA(ar,ad),TC=iC(zt,ys),xs=i1(Ca,TC),EC=Rw(xs,pt,Xt),wC=Cw(Tt,EC,xs,ht,at),AC=Pw(Ea,pt,Xt),CC=Dw(Tt,AC,Ea,ht,at,rC),RC=o1(Cl,Eo,vn,ys),wo=r1(Cl,Jn,RC,id,sd),IC=kw(vi,wo,pt,yi,Xt),DC=Fw(Tt,ei,IC,wo,ht,at,To),m_=a1(hn,Aa),PC=Gw(m_,pt,Xt),NC=zw(Tt,PC,m_,ht,at,cr),LC=$w(vi,t_,pt,yi,Xt),OC=Yw(Tt,ei,LC,t_,ht,at,cr),g_=c1(hn),UC=iA(vi,g_,pt,yi,Xt),FC=nA(Tt,ei,UC,g_,hn,ht,at,cr),kC=hA(vi,vn,pt,yi,Xt),BC=uA(Tt,ei,kC,vn,ht,at),VC=d1(Al,zt,wa,hn),Rl=B1(Jn,vn,wa,Y1(vn,Yi)),zC=TA(Eo,pt,Yi,Xt,Rl),GC=l1(VC),HC=MA(Tt,GC,zC,ht,at,cr),WC=rw(ei,xs,wo,wa,hn,i_,at,Aa),__=new WeakMap,XC=zA(SC,WC,h_,at,__,To),v_=v1(Cl,Jn,id,o_,sd,a_),qC=I1(vi,v_,pt,yi,Xt),jC=R1(Tt,ei,v_,qC,ht,at,To),y_=Ow(Eo),YC=E1(y_,zt,vn,s_,ys),Il=T1(y_,zt,YC,s_,ys,Ca,Aa),$C=x1(Gc,zt,xs,vn,wa,Il,hn,Hc,i_,ys),x_=y1($C),KC=N1(vi,xs,wo,vn,x_,pt,Yi,yi,Xt,Rl),ZC=P1(Tt,ei,x_,KC,ht,at,cr),QC=S1(_i),JC=O1(QC,ht,new WeakSet,oC),eR=b1(xs,Ea,vn,Il,hn,ys),S_=M1(eR,hn),tR=X1(vi,S_,pt,yi,Xt),nR=W1(Tt,ei,S_,tR,ht,at),iR=Q1(Il,pt,Xt),sR=Z1(Tt,zt,Il,iR,ht,at,cr),M_=OA(hi),hd=aA(hi),b_=new WeakMap,rR=vA(b_,Yi),oR=M_?UE(Jn,hn,rA(hi),hd,cA(DE),ht,rR,at,ea,new WeakMap,new WeakMap,j1(ea,Yi),hi):void 0,aR=NA(od,at),cR=Xw(cd,Jn,Ww,sA,new WeakSet,ht,aR,Vc,Jo,ld,ud),T_=Mw(oR,_C,vC,xC,bC,wC,CC,DC,NC,cR,OC,FC,BC,HC,XC,jC,ZC,JC,nR,sR),lR=UA(Tt,f1,ht,at),uR=kA(Tt,p1,ht,at),hR=BA(Tt,m1,ht,at),dR=g1(zt,at),fR=VA(Tt,dR,ht),pR=nw(T_,zt,hn,$1,lR,uR,hR,fR,Ca),dd=yA(__),mR=VE(dd),E_=Lw(_i),gR=Zw(dd),w_=eA(_i),A_=new WeakMap,_R=dA(A_,Kn),vR=n1(E_,_i,zt,xs,Ea,wo,vn,wa,hn,w_,hd,_R,ys),yR=QA(zt,vR,vn,hn,ys),xR=Sw(vi,E_,Eo,xs,Ea,wo,vn,gR,w_,hd,pt,ea,Yi,yi,Xt,Rl),SR=gA(b_),MR=V1(A_),em=M_?vw(mR,Tt,ei,xR,yR,ln,SR,ht,at,ea,sC,MR,uC,To):void 0,bR=Hw(hn,Yi),TR=G1(cd,Jn,rd,dd,Rl,Vc,ld,ud),ER=A1(T_,Jn,zt,bR,TR),wR=wA(El,od),AR=AA(Kh,ad),CR=CA(Zh,d_),RR=RA(El,at);function Re(s,e){if(!s)throw new Error(e)}function fs(s,e,t=1/0){if(!(e<=s&&s<=t))throw new RangeError(`Value must be within [${e}, ${t}], got: ${s}`)}function C_(s){!s.isOffline&&s.state!=="running"&&fd('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.')}let R_=console;function IR(...s){R_.log(...s)}function fd(...s){R_.warn(...s)}function Bn(s){return typeof s>"u"}function Ye(s){return!Bn(s)}function DR(s){return typeof s=="function"}function Wi(s){return typeof s=="number"}function Ks(s){return Object.prototype.toString.call(s)==="[object Object]"&&s.constructor===Object}function PR(s){return typeof s=="boolean"}function An(s){return Array.isArray(s)}function di(s){return typeof s=="string"}function uc(s){return di(s)&&/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(s)}function NR(s){return new pR(s)}function LR(s,e,t){return new ER(s,e,t)}const Zs=typeof self=="object"?self:null,OR=Zs&&(Zs.hasOwnProperty("AudioContext")||Zs.hasOwnProperty("webkitAudioContext"));function UR(s,e,t){return Re(Ye(em),"This node only works in a secure context (https or localhost)"),new em(s,e,t)}function ti(s,e,t,n){var i=arguments.length,r=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,n);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(i<3?o(r):i>3?o(e,t,r):o(e,t))||r);return i>3&&r&&Object.defineProperty(e,t,r),r}function It(s,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((n=n.apply(s,e||[])).next())})}class FR{constructor(e,t,n){this._callback=e,this._type=t,this._updateInterval=n,this._createClock()}_createWorker(){const e=new Blob([`
			// the initial timeout time
			let timeoutTime =  ${(this._updateInterval*1e3).toFixed(1)};
			// onmessage callback
			self.onmessage = function(msg){
				timeoutTime = parseInt(msg.data);
			};
			// the tick function which posts a message
			// and schedules a new tick
			function tick(){
				setTimeout(tick, timeoutTime);
				self.postMessage('tick');
			}
			// call tick initially
			tick();
			`],{type:"text/javascript"}),t=URL.createObjectURL(e),n=new Worker(t);n.onmessage=this._callback.bind(this),this._worker=n}_createTimeout(){this._timeout=setTimeout(()=>{this._createTimeout(),this._callback()},this._updateInterval*1e3)}_createClock(){if(this._type==="worker")try{this._createWorker()}catch{this._type="timeout",this._createClock()}else this._type==="timeout"&&this._createTimeout()}_disposeClock(){this._timeout&&(clearTimeout(this._timeout),this._timeout=0),this._worker&&(this._worker.terminate(),this._worker.onmessage=null)}get updateInterval(){return this._updateInterval}set updateInterval(e){this._updateInterval=Math.max(e,128/44100),this._type==="worker"&&this._worker.postMessage(Math.max(e*1e3,1))}get type(){return this._type}set type(e){this._disposeClock(),this._type=e,this._createClock()}dispose(){this._disposeClock()}}function ir(s){return CR(s)}function us(s){return AR(s)}function Ac(s){return RR(s)}function Or(s){return wR(s)}function I_(s){return s instanceof AudioBuffer}function kR(s,e){return s==="value"||ir(e)||us(e)||I_(e)}function Qs(s,...e){if(!e.length)return s;const t=e.shift();if(Ks(s)&&Ks(t))for(const n in t)kR(n,t[n])?s[n]=t[n]:Ks(t[n])?(s[n]||Object.assign(s,{[n]:{}}),Qs(s[n],t[n])):Object.assign(s,{[n]:t[n]});return Qs(s,...e)}function BR(s,e){return s.length===e.length&&s.every((t,n)=>e[n]===t)}function Z(s,e,t=[],n){const i={},r=Array.from(e);if(Ks(r[0])&&n&&!Reflect.has(r[0],n)&&(Object.keys(r[0]).some(a=>Reflect.has(s,a))||(Qs(i,{[n]:r[0]}),t.splice(t.indexOf(n),1),r.shift())),r.length===1&&Ks(r[0]))Qs(i,r[0]);else for(let o=0;o<t.length;o++)Ye(r[o])&&(i[t[o]]=r[o]);return Qs(s,i)}function VR(s){return s.constructor.getDefaults()}function qr(s,e){return Bn(s)?e:s}function ta(s,e){return e.forEach(t=>{Reflect.has(s,t)&&delete s[t]}),s}/**
 * Tone.js
 * @author Yotam Mann
 * @license http://opensource.org/licenses/MIT MIT License
 * @copyright 2014-2019 Yotam Mann
 */class $i{constructor(){this.debug=!1,this._wasDisposed=!1}static getDefaults(){return{}}log(...e){(this.debug||Zs&&this.toString()===Zs.TONE_DEBUG_CLASS)&&IR(this,...e)}dispose(){return this._wasDisposed=!0,this}get disposed(){return this._wasDisposed}toString(){return this.name}}$i.version=Ug;const pd=1e-6;function jc(s,e){return s>e+pd}function mh(s,e){return jc(s,e)||Hn(s,e)}function D_(s,e){return s+pd<e}function Hn(s,e){return Math.abs(s-e)<pd}function zR(s,e,t){return Math.max(Math.min(s,t),e)}class xi extends $i{constructor(){super(),this.name="Timeline",this._timeline=[];const e=Z(xi.getDefaults(),arguments,["memory"]);this.memory=e.memory,this.increasing=e.increasing}static getDefaults(){return{memory:1/0,increasing:!1}}get length(){return this._timeline.length}add(e){if(Re(Reflect.has(e,"time"),"Timeline: events must have a time attribute"),e.time=e.time.valueOf(),this.increasing&&this.length){const t=this._timeline[this.length-1];Re(mh(e.time,t.time),"The time must be greater than or equal to the last scheduled time"),this._timeline.push(e)}else{const t=this._search(e.time);this._timeline.splice(t+1,0,e)}if(this.length>this.memory){const t=this.length-this.memory;this._timeline.splice(0,t)}return this}remove(e){const t=this._timeline.indexOf(e);return t!==-1&&this._timeline.splice(t,1),this}get(e,t="time"){const n=this._search(e,t);return n!==-1?this._timeline[n]:null}peek(){return this._timeline[0]}shift(){return this._timeline.shift()}getAfter(e,t="time"){const n=this._search(e,t);return n+1<this._timeline.length?this._timeline[n+1]:null}getBefore(e){const t=this._timeline.length;if(t>0&&this._timeline[t-1].time<e)return this._timeline[t-1];const n=this._search(e);return n-1>=0?this._timeline[n-1]:null}cancel(e){if(this._timeline.length>1){let t=this._search(e);if(t>=0)if(Hn(this._timeline[t].time,e)){for(let n=t;n>=0&&Hn(this._timeline[n].time,e);n--)t=n;this._timeline=this._timeline.slice(0,t)}else this._timeline=this._timeline.slice(0,t+1);else this._timeline=[]}else this._timeline.length===1&&mh(this._timeline[0].time,e)&&(this._timeline=[]);return this}cancelBefore(e){const t=this._search(e);return t>=0&&(this._timeline=this._timeline.slice(t+1)),this}previousEvent(e){const t=this._timeline.indexOf(e);return t>0?this._timeline[t-1]:null}_search(e,t="time"){if(this._timeline.length===0)return-1;let n=0;const i=this._timeline.length;let r=i;if(i>0&&this._timeline[i-1][t]<=e)return i-1;for(;n<r;){let o=Math.floor(n+(r-n)/2);const a=this._timeline[o],c=this._timeline[o+1];if(Hn(a[t],e)){for(let l=o;l<this._timeline.length;l++){const u=this._timeline[l];if(Hn(u[t],e))o=l;else break}return o}else{if(D_(a[t],e)&&jc(c[t],e))return o;jc(a[t],e)?r=o:n=o+1}}return-1}_iterate(e,t=0,n=this._timeline.length-1){this._timeline.slice(t,n+1).forEach(e)}forEach(e){return this._iterate(e),this}forEachBefore(e,t){const n=this._search(e);return n!==-1&&this._iterate(t,0,n),this}forEachAfter(e,t){const n=this._search(e);return this._iterate(t,n+1),this}forEachBetween(e,t,n){let i=this._search(e),r=this._search(t);return i!==-1&&r!==-1?(this._timeline[i].time!==e&&(i+=1),this._timeline[r].time===t&&(r-=1),this._iterate(n,i,r)):i===-1&&this._iterate(n,0,r),this}forEachFrom(e,t){let n=this._search(e);for(;n>=0&&this._timeline[n].time>=e;)n--;return this._iterate(t,n+1),this}forEachAtTime(e,t){const n=this._search(e);if(n!==-1&&Hn(this._timeline[n].time,e)){let i=n;for(let r=n;r>=0&&Hn(this._timeline[r].time,e);r--)i=r;this._iterate(r=>{t(r)},i,n)}return this}dispose(){return super.dispose(),this._timeline=[],this}}const P_=[];function Dl(s){P_.push(s)}function GR(s){P_.forEach(e=>e(s))}const N_=[];function Pl(s){N_.push(s)}function HR(s){N_.forEach(e=>e(s))}class Ra extends $i{constructor(){super(...arguments),this.name="Emitter"}on(e,t){return e.split(/\W+/).forEach(i=>{Bn(this._events)&&(this._events={}),this._events.hasOwnProperty(i)||(this._events[i]=[]),this._events[i].push(t)}),this}once(e,t){const n=(...i)=>{t(...i),this.off(e,n)};return this.on(e,n),this}off(e,t){return e.split(/\W+/).forEach(i=>{if(Bn(this._events)&&(this._events={}),this._events.hasOwnProperty(e))if(Bn(t))this._events[e]=[];else{const r=this._events[e];for(let o=r.length-1;o>=0;o--)r[o]===t&&r.splice(o,1)}}),this}emit(e,...t){if(this._events&&this._events.hasOwnProperty(e)){const n=this._events[e].slice(0);for(let i=0,r=n.length;i<r;i++)n[i].apply(this,t)}return this}static mixin(e){["on","once","off","emit"].forEach(t=>{const n=Object.getOwnPropertyDescriptor(Ra.prototype,t);Object.defineProperty(e.prototype,t,n)})}dispose(){return super.dispose(),this._events=void 0,this}}class L_ extends Ra{constructor(){super(...arguments),this.isOffline=!1}toJSON(){return{}}}class Ia extends L_{constructor(){super(),this.name="Context",this._constants=new Map,this._timeouts=new xi,this._timeoutIds=0,this._initialized=!1,this.isOffline=!1,this._workletModules=new Map;const e=Z(Ia.getDefaults(),arguments,["context"]);e.context?this._context=e.context:this._context=NR({latencyHint:e.latencyHint}),this._ticker=new FR(this.emit.bind(this,"tick"),e.clockSource,e.updateInterval),this.on("tick",this._timeoutLoop.bind(this)),this._context.onstatechange=()=>{this.emit("statechange",this.state)},this._setLatencyHint(e.latencyHint),this.lookAhead=e.lookAhead}static getDefaults(){return{clockSource:"worker",latencyHint:"interactive",lookAhead:.1,updateInterval:.05}}initialize(){return this._initialized||(GR(this),this._initialized=!0),this}createAnalyser(){return this._context.createAnalyser()}createOscillator(){return this._context.createOscillator()}createBufferSource(){return this._context.createBufferSource()}createBiquadFilter(){return this._context.createBiquadFilter()}createBuffer(e,t,n){return this._context.createBuffer(e,t,n)}createChannelMerger(e){return this._context.createChannelMerger(e)}createChannelSplitter(e){return this._context.createChannelSplitter(e)}createConstantSource(){return this._context.createConstantSource()}createConvolver(){return this._context.createConvolver()}createDelay(e){return this._context.createDelay(e)}createDynamicsCompressor(){return this._context.createDynamicsCompressor()}createGain(){return this._context.createGain()}createIIRFilter(e,t){return this._context.createIIRFilter(e,t)}createPanner(){return this._context.createPanner()}createPeriodicWave(e,t,n){return this._context.createPeriodicWave(e,t,n)}createStereoPanner(){return this._context.createStereoPanner()}createWaveShaper(){return this._context.createWaveShaper()}createMediaStreamSource(e){return Re(Or(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamSource(e)}createMediaElementSource(e){return Re(Or(this._context),"Not available if OfflineAudioContext"),this._context.createMediaElementSource(e)}createMediaStreamDestination(){return Re(Or(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamDestination()}decodeAudioData(e){return this._context.decodeAudioData(e)}get currentTime(){return this._context.currentTime}get state(){return this._context.state}get sampleRate(){return this._context.sampleRate}get listener(){return this.initialize(),this._listener}set listener(e){Re(!this._initialized,"The listener cannot be set after initialization."),this._listener=e}get transport(){return this.initialize(),this._transport}set transport(e){Re(!this._initialized,"The transport cannot be set after initialization."),this._transport=e}get draw(){return this.initialize(),this._draw}set draw(e){Re(!this._initialized,"Draw cannot be set after initialization."),this._draw=e}get destination(){return this.initialize(),this._destination}set destination(e){Re(!this._initialized,"The destination cannot be set after initialization."),this._destination=e}createAudioWorkletNode(e,t){return UR(this.rawContext,e,t)}addAudioWorkletModule(e,t){return It(this,void 0,void 0,function*(){Re(Ye(this.rawContext.audioWorklet),"AudioWorkletNode is only available in a secure context (https or localhost)"),this._workletModules.has(t)||this._workletModules.set(t,this.rawContext.audioWorklet.addModule(e)),yield this._workletModules.get(t)})}workletsAreReady(){return It(this,void 0,void 0,function*(){const e=[];this._workletModules.forEach(t=>e.push(t)),yield Promise.all(e)})}get updateInterval(){return this._ticker.updateInterval}set updateInterval(e){this._ticker.updateInterval=e}get clockSource(){return this._ticker.type}set clockSource(e){this._ticker.type=e}get latencyHint(){return this._latencyHint}_setLatencyHint(e){let t=0;if(this._latencyHint=e,di(e))switch(e){case"interactive":t=.1;break;case"playback":t=.5;break;case"balanced":t=.25;break}this.lookAhead=t,this.updateInterval=t/2}get rawContext(){return this._context}now(){return this._context.currentTime+this.lookAhead}immediate(){return this._context.currentTime}resume(){return Or(this._context)?this._context.resume():Promise.resolve()}close(){return It(this,void 0,void 0,function*(){Or(this._context)&&(yield this._context.close()),this._initialized&&HR(this)})}getConstant(e){if(this._constants.has(e))return this._constants.get(e);{const t=this._context.createBuffer(1,128,this._context.sampleRate),n=t.getChannelData(0);for(let r=0;r<n.length;r++)n[r]=e;const i=this._context.createBufferSource();return i.channelCount=1,i.channelCountMode="explicit",i.buffer=t,i.loop=!0,i.start(0),this._constants.set(e,i),i}}dispose(){return super.dispose(),this._ticker.dispose(),this._timeouts.dispose(),Object.keys(this._constants).map(e=>this._constants[e].disconnect()),this}_timeoutLoop(){const e=this.now();let t=this._timeouts.peek();for(;this._timeouts.length&&t&&t.time<=e;)t.callback(),this._timeouts.shift(),t=this._timeouts.peek()}setTimeout(e,t){this._timeoutIds++;const n=this.now();return this._timeouts.add({callback:e,id:this._timeoutIds,time:n+t}),this._timeoutIds}clearTimeout(e){return this._timeouts.forEach(t=>{t.id===e&&this._timeouts.remove(t)}),this}clearInterval(e){return this.clearTimeout(e)}setInterval(e,t){const n=++this._timeoutIds,i=()=>{const r=this.now();this._timeouts.add({callback:()=>{e(),i()},id:n,time:r+t})};return i(),n}}class WR extends L_{constructor(){super(...arguments),this.lookAhead=0,this.latencyHint=0,this.isOffline=!1}createAnalyser(){return{}}createOscillator(){return{}}createBufferSource(){return{}}createBiquadFilter(){return{}}createBuffer(e,t,n){return{}}createChannelMerger(e){return{}}createChannelSplitter(e){return{}}createConstantSource(){return{}}createConvolver(){return{}}createDelay(e){return{}}createDynamicsCompressor(){return{}}createGain(){return{}}createIIRFilter(e,t){return{}}createPanner(){return{}}createPeriodicWave(e,t,n){return{}}createStereoPanner(){return{}}createWaveShaper(){return{}}createMediaStreamSource(e){return{}}createMediaElementSource(e){return{}}createMediaStreamDestination(){return{}}decodeAudioData(e){return Promise.resolve({})}createAudioWorkletNode(e,t){return{}}get rawContext(){return{}}addAudioWorkletModule(e,t){return It(this,void 0,void 0,function*(){return Promise.resolve()})}resume(){return Promise.resolve()}setTimeout(e,t){return 0}clearTimeout(e){return this}setInterval(e,t){return 0}clearInterval(e){return this}getConstant(e){return{}}get currentTime(){return 0}get state(){return{}}get sampleRate(){return 0}get listener(){return{}}get transport(){return{}}get draw(){return{}}set draw(e){}get destination(){return{}}set destination(e){}now(){return 0}immediate(){return 0}}function Ke(s,e){An(e)?e.forEach(t=>Ke(s,t)):Object.defineProperty(s,e,{enumerable:!0,writable:!1})}function md(s,e){An(e)?e.forEach(t=>md(s,t)):Object.defineProperty(s,e,{writable:!0})}const rt=()=>{};class nt extends $i{constructor(){super(),this.name="ToneAudioBuffer",this.onload=rt;const e=Z(nt.getDefaults(),arguments,["url","onload","onerror"]);this.reverse=e.reverse,this.onload=e.onload,e.url&&I_(e.url)||e.url instanceof nt?this.set(e.url):di(e.url)&&this.load(e.url).catch(e.onerror)}static getDefaults(){return{onerror:rt,onload:rt,reverse:!1}}get sampleRate(){return this._buffer?this._buffer.sampleRate:Xn().sampleRate}set(e){return e instanceof nt?e.loaded?this._buffer=e.get():e.onload=()=>{this.set(e),this.onload(this)}:this._buffer=e,this._reversed&&this._reverse(),this}get(){return this._buffer}load(e){return It(this,void 0,void 0,function*(){const t=nt.load(e).then(n=>{this.set(n),this.onload(this)});nt.downloads.push(t);try{yield t}finally{const n=nt.downloads.indexOf(t);nt.downloads.splice(n,1)}return this})}dispose(){return super.dispose(),this._buffer=void 0,this}fromArray(e){const t=An(e)&&e[0].length>0,n=t?e.length:1,i=t?e[0].length:e.length,r=Xn(),o=r.createBuffer(n,i,r.sampleRate),a=!t&&n===1?[e]:e;for(let c=0;c<n;c++)o.copyToChannel(a[c],c);return this._buffer=o,this}toMono(e){if(Wi(e))this.fromArray(this.toArray(e));else{let t=new Float32Array(this.length);const n=this.numberOfChannels;for(let i=0;i<n;i++){const r=this.toArray(i);for(let o=0;o<r.length;o++)t[o]+=r[o]}t=t.map(i=>i/n),this.fromArray(t)}return this}toArray(e){if(Wi(e))return this.getChannelData(e);if(this.numberOfChannels===1)return this.toArray(0);{const t=[];for(let n=0;n<this.numberOfChannels;n++)t[n]=this.getChannelData(n);return t}}getChannelData(e){return this._buffer?this._buffer.getChannelData(e):new Float32Array(0)}slice(e,t=this.duration){const n=Math.floor(e*this.sampleRate),i=Math.floor(t*this.sampleRate);Re(n<i,"The start time must be less than the end time");const r=i-n,o=Xn().createBuffer(this.numberOfChannels,r,this.sampleRate);for(let a=0;a<this.numberOfChannels;a++)o.copyToChannel(this.getChannelData(a).subarray(n,i),a);return new nt(o)}_reverse(){if(this.loaded)for(let e=0;e<this.numberOfChannels;e++)this.getChannelData(e).reverse();return this}get loaded(){return this.length>0}get duration(){return this._buffer?this._buffer.duration:0}get length(){return this._buffer?this._buffer.length:0}get numberOfChannels(){return this._buffer?this._buffer.numberOfChannels:0}get reverse(){return this._reversed}set reverse(e){this._reversed!==e&&(this._reversed=e,this._reverse())}static fromArray(e){return new nt().fromArray(e)}static fromUrl(e){return It(this,void 0,void 0,function*(){return yield new nt().load(e)})}static load(e){return It(this,void 0,void 0,function*(){const t=e.match(/\[([^\]\[]+\|.+)\]$/);if(t){const a=t[1].split("|");let c=a[0];for(const l of a)if(nt.supportsType(l)){c=l;break}e=e.replace(t[0],c)}const n=nt.baseUrl===""||nt.baseUrl.endsWith("/")?nt.baseUrl:nt.baseUrl+"/",i=yield fetch(n+e);if(!i.ok)throw new Error(`could not load url: ${e}`);const r=yield i.arrayBuffer();return yield Xn().decodeAudioData(r)})}static supportsType(e){const t=e.split("."),n=t[t.length-1];return document.createElement("audio").canPlayType("audio/"+n)!==""}static loaded(){return It(this,void 0,void 0,function*(){for(yield Promise.resolve();nt.downloads.length;)yield nt.downloads[0]})}}nt.baseUrl="";nt.downloads=[];class gd extends Ia{constructor(){super({clockSource:"offline",context:Ac(arguments[0])?arguments[0]:LR(arguments[0],arguments[1]*arguments[2],arguments[2]),lookAhead:0,updateInterval:Ac(arguments[0])?128/arguments[0].sampleRate:128/arguments[2]}),this.name="OfflineContext",this._currentTime=0,this.isOffline=!0,this._duration=Ac(arguments[0])?arguments[0].length/arguments[0].sampleRate:arguments[1]}now(){return this._currentTime}get currentTime(){return this._currentTime}_renderClock(e){return It(this,void 0,void 0,function*(){let t=0;for(;this._duration-this._currentTime>=0;){this.emit("tick"),this._currentTime+=128/this.sampleRate,t++;const n=Math.floor(this.sampleRate/128);e&&t%n===0&&(yield new Promise(i=>setTimeout(i,1)))}})}render(e=!0){return It(this,void 0,void 0,function*(){yield this.workletsAreReady(),yield this._renderClock(e);const t=yield this._context.startRendering();return new nt(t)})}close(){return Promise.resolve()}}const O_=new WR;let jr=O_;function Xn(){return jr===O_&&OR&&XR(new Ia),jr}function XR(s){Or(s)?jr=new Ia(s):Ac(s)?jr=new gd(s):jr=s}function qR(){return jr.resume()}if(Zs&&!Zs.TONE_SILENCE_LOGGING){const e=` * Tone.js v${Ug} * `;console.log(`%c${e}`,"background: #000; color: #fff")}function jR(s){return Math.pow(10,s/20)}function YR(s){return 20*(Math.log(s)/Math.LN10)}function U_(s){return Math.pow(2,s/12)}let Nl=440;function $R(){return Nl}function KR(s){Nl=s}function Hs(s){return Math.round(F_(s))}function F_(s){return 69+12*Math.log2(s/Nl)}function k_(s){return Nl*Math.pow(2,(s-69)/12)}class _d extends $i{constructor(e,t,n){super(),this.defaultUnits="s",this._val=t,this._units=n,this.context=e,this._expressions=this._getExpressions()}_getExpressions(){return{hz:{method:e=>this._frequencyToUnits(parseFloat(e)),regexp:/^(\d+(?:\.\d+)?)hz$/i},i:{method:e=>this._ticksToUnits(parseInt(e,10)),regexp:/^(\d+)i$/i},m:{method:e=>this._beatsToUnits(parseInt(e,10)*this._getTimeSignature()),regexp:/^(\d+)m$/i},n:{method:(e,t)=>{const n=parseInt(e,10),i=t==="."?1.5:1;return n===1?this._beatsToUnits(this._getTimeSignature())*i:this._beatsToUnits(4/n)*i},regexp:/^(\d+)n(\.?)$/i},number:{method:e=>this._expressions[this.defaultUnits].method.call(this,e),regexp:/^(\d+(?:\.\d+)?)$/},s:{method:e=>this._secondsToUnits(parseFloat(e)),regexp:/^(\d+(?:\.\d+)?)s$/},samples:{method:e=>parseInt(e,10)/this.context.sampleRate,regexp:/^(\d+)samples$/},t:{method:e=>{const t=parseInt(e,10);return this._beatsToUnits(8/(Math.floor(t)*3))},regexp:/^(\d+)t$/i},tr:{method:(e,t,n)=>{let i=0;return e&&e!=="0"&&(i+=this._beatsToUnits(this._getTimeSignature()*parseFloat(e))),t&&t!=="0"&&(i+=this._beatsToUnits(parseFloat(t))),n&&n!=="0"&&(i+=this._beatsToUnits(parseFloat(n)/4)),i},regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/}}}valueOf(){if(this._val instanceof _d&&this.fromType(this._val),Bn(this._val))return this._noArg();if(di(this._val)&&Bn(this._units)){for(const e in this._expressions)if(this._expressions[e].regexp.test(this._val.trim())){this._units=e;break}}else if(Ks(this._val)){let e=0;for(const t in this._val)if(Ye(this._val[t])){const n=this._val[t],i=new this.constructor(this.context,t).valueOf()*n;e+=i}return e}if(Ye(this._units)){const e=this._expressions[this._units],t=this._val.toString().trim().match(e.regexp);return t?e.method.apply(this,t.slice(1)):e.method.call(this,this._val)}else return di(this._val)?parseFloat(this._val):this._val}_frequencyToUnits(e){return 1/e}_beatsToUnits(e){return 60/this._getBpm()*e}_secondsToUnits(e){return e}_ticksToUnits(e){return e*this._beatsToUnits(1)/this._getPPQ()}_noArg(){return this._now()}_getBpm(){return this.context.transport.bpm.value}_getTimeSignature(){return this.context.transport.timeSignature}_getPPQ(){return this.context.transport.PPQ}fromType(e){switch(this._units=void 0,this.defaultUnits){case"s":this._val=e.toSeconds();break;case"i":this._val=e.toTicks();break;case"hz":this._val=e.toFrequency();break;case"midi":this._val=e.toMidi();break}return this}toFrequency(){return 1/this.toSeconds()}toSamples(){return this.toSeconds()*this.context.sampleRate}toMilliseconds(){return this.toSeconds()*1e3}}class qn extends _d{constructor(){super(...arguments),this.name="TimeClass"}_getExpressions(){return Object.assign(super._getExpressions(),{now:{method:e=>this._now()+new this.constructor(this.context,e).valueOf(),regexp:/^\+(.+)/},quantize:{method:e=>{const t=new qn(this.context,e).valueOf();return this._secondsToUnits(this.context.transport.nextSubdivision(t))},regexp:/^@(.+)/}})}quantize(e,t=1){const n=new this.constructor(this.context,e).valueOf(),i=this.valueOf(),a=Math.round(i/n)*n-i;return i+a*t}toNotation(){const e=this.toSeconds(),t=["1m"];for(let r=1;r<9;r++){const o=Math.pow(2,r);t.push(o+"n."),t.push(o+"n"),t.push(o+"t")}t.push("0");let n=t[0],i=new qn(this.context,t[0]).toSeconds();return t.forEach(r=>{const o=new qn(this.context,r).toSeconds();Math.abs(o-e)<Math.abs(i-e)&&(n=r,i=o)}),n}toBarsBeatsSixteenths(){const e=this._beatsToUnits(1);let t=this.valueOf()/e;t=parseFloat(t.toFixed(4));const n=Math.floor(t/this._getTimeSignature());let i=t%1*4;t=Math.floor(t)%this._getTimeSignature();const r=i.toString();return r.length>3&&(i=parseFloat(parseFloat(r).toFixed(3))),[n,t,i].join(":")}toTicks(){const e=this._beatsToUnits(1),t=this.valueOf()/e;return Math.round(t*this._getPPQ())}toSeconds(){return this.valueOf()}toMidi(){return Hs(this.toFrequency())}_now(){return this.context.now()}}class wn extends qn{constructor(){super(...arguments),this.name="Frequency",this.defaultUnits="hz"}static get A4(){return $R()}static set A4(e){KR(e)}_getExpressions(){return Object.assign({},super._getExpressions(),{midi:{regexp:/^(\d+(?:\.\d+)?midi)/,method(e){return this.defaultUnits==="midi"?e:wn.mtof(e)}},note:{regexp:/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,method(e,t){const i=ZR[e.toLowerCase()]+(parseInt(t,10)+1)*12;return this.defaultUnits==="midi"?i:wn.mtof(i)}},tr:{regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,method(e,t,n){let i=1;return e&&e!=="0"&&(i*=this._beatsToUnits(this._getTimeSignature()*parseFloat(e))),t&&t!=="0"&&(i*=this._beatsToUnits(parseFloat(t))),n&&n!=="0"&&(i*=this._beatsToUnits(parseFloat(n)/4)),i}}})}transpose(e){return new wn(this.context,this.valueOf()*U_(e))}harmonize(e){return e.map(t=>this.transpose(t))}toMidi(){return Hs(this.valueOf())}toNote(){const e=this.toFrequency(),t=Math.log2(e/wn.A4);let n=Math.round(12*t)+57;const i=Math.floor(n/12);return i<0&&(n+=-12*i),QR[n%12]+i.toString()}toSeconds(){return 1/super.toSeconds()}toTicks(){const e=this._beatsToUnits(1),t=this.valueOf()/e;return Math.floor(t*this._getPPQ())}_noArg(){return 0}_frequencyToUnits(e){return e}_ticksToUnits(e){return 1/(e*60/(this._getBpm()*this._getPPQ()))}_beatsToUnits(e){return 1/super._beatsToUnits(e)}_secondsToUnits(e){return 1/e}static mtof(e){return k_(e)}static ftom(e){return Hs(e)}}const ZR={cbb:-2,cb:-1,c:0,"c#":1,cx:2,dbb:0,db:1,d:2,"d#":3,dx:4,ebb:2,eb:3,e:4,"e#":5,ex:6,fbb:3,fb:4,f:5,"f#":6,fx:7,gbb:5,gb:6,g:7,"g#":8,gx:9,abb:7,ab:8,a:9,"a#":10,ax:11,bbb:9,bb:10,b:11,"b#":12,bx:13},QR=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];class $o extends qn{constructor(){super(...arguments),this.name="TransportTime"}_now(){return this.context.transport.seconds}}class _n extends $i{constructor(){super();const e=Z(_n.getDefaults(),arguments,["context"]);this.defaultContext?this.context=this.defaultContext:this.context=e.context}static getDefaults(){return{context:Xn()}}now(){return this.context.currentTime+this.context.lookAhead}immediate(){return this.context.currentTime}get sampleTime(){return 1/this.context.sampleRate}get blockTime(){return 128/this.context.sampleRate}toSeconds(e){return new qn(this.context,e).toSeconds()}toFrequency(e){return new wn(this.context,e).toFrequency()}toTicks(e){return new $o(this.context,e).toTicks()}_getPartialProperties(e){const t=this.get();return Object.keys(t).forEach(n=>{Bn(e[n])&&delete t[n]}),t}get(){const e=VR(this);return Object.keys(e).forEach(t=>{if(Reflect.has(this,t)){const n=this[t];Ye(n)&&Ye(n.value)&&Ye(n.setValueAtTime)?e[t]=n.value:n instanceof _n?e[t]=n._getPartialProperties(e[t]):An(n)||Wi(n)||di(n)||PR(n)?e[t]=n:delete e[t]}}),e}set(e){return Object.keys(e).forEach(t=>{Reflect.has(this,t)&&Ye(this[t])&&(this[t]&&Ye(this[t].value)&&Ye(this[t].setValueAtTime)?this[t].value!==e[t]&&(this[t].value=e[t]):this[t]instanceof _n?this[t].set(e[t]):this[t]=e[t])}),this}}class vd extends xi{constructor(e="stopped"){super(),this.name="StateTimeline",this._initial=e,this.setStateAtTime(this._initial,0)}getValueAtTime(e){const t=this.get(e);return t!==null?t.state:this._initial}setStateAtTime(e,t,n){return fs(t,0),this.add(Object.assign({},n,{state:e,time:t})),this}getLastState(e,t){const n=this._search(t);for(let i=n;i>=0;i--){const r=this._timeline[i];if(r.state===e)return r}}getNextState(e,t){const n=this._search(t);if(n!==-1)for(let i=n;i<this._timeline.length;i++){const r=this._timeline[i];if(r.state===e)return r}}}class je extends _n{constructor(){super(Z(je.getDefaults(),arguments,["param","units","convert"])),this.name="Param",this.overridden=!1,this._minOutput=1e-7;const e=Z(je.getDefaults(),arguments,["param","units","convert"]);for(Re(Ye(e.param)&&(ir(e.param)||e.param instanceof je),"param must be an AudioParam");!ir(e.param);)e.param=e.param._param;this._swappable=Ye(e.swappable)?e.swappable:!1,this._swappable?(this.input=this.context.createGain(),this._param=e.param,this.input.connect(this._param)):this._param=this.input=e.param,this._events=new xi(1e3),this._initialValue=this._param.defaultValue,this.units=e.units,this.convert=e.convert,this._minValue=e.minValue,this._maxValue=e.maxValue,Ye(e.value)&&e.value!==this._toType(this._initialValue)&&this.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(_n.getDefaults(),{convert:!0,units:"number"})}get value(){const e=this.now();return this.getValueAtTime(e)}set value(e){this.cancelScheduledValues(this.now()),this.setValueAtTime(e,this.now())}get minValue(){return Ye(this._minValue)?this._minValue:this.units==="time"||this.units==="frequency"||this.units==="normalRange"||this.units==="positive"||this.units==="transportTime"||this.units==="ticks"||this.units==="bpm"||this.units==="hertz"||this.units==="samples"?0:this.units==="audioRange"?-1:this.units==="decibels"?-1/0:this._param.minValue}get maxValue(){return Ye(this._maxValue)?this._maxValue:this.units==="normalRange"||this.units==="audioRange"?1:this._param.maxValue}_is(e,t){return this.units===t}_assertRange(e){return Ye(this.maxValue)&&Ye(this.minValue)&&fs(e,this._fromType(this.minValue),this._fromType(this.maxValue)),e}_fromType(e){return this.convert&&!this.overridden?this._is(e,"time")?this.toSeconds(e):this._is(e,"decibels")?jR(e):this._is(e,"frequency")?this.toFrequency(e):e:this.overridden?0:e}_toType(e){return this.convert&&this.units==="decibels"?YR(e):e}setValueAtTime(e,t){const n=this.toSeconds(t),i=this._fromType(e);return Re(isFinite(i)&&isFinite(n),`Invalid argument(s) to setValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._assertRange(i),this.log(this.units,"setValueAtTime",e,n),this._events.add({time:n,type:"setValueAtTime",value:i}),this._param.setValueAtTime(i,n),this}getValueAtTime(e){const t=Math.max(this.toSeconds(e),0),n=this._events.getAfter(t),i=this._events.get(t);let r=this._initialValue;if(i===null)r=this._initialValue;else if(i.type==="setTargetAtTime"&&(n===null||n.type==="setValueAtTime")){const o=this._events.getBefore(i.time);let a;o===null?a=this._initialValue:a=o.value,i.type==="setTargetAtTime"&&(r=this._exponentialApproach(i.time,a,i.value,i.constant,t))}else if(n===null)r=i.value;else if(n.type==="linearRampToValueAtTime"||n.type==="exponentialRampToValueAtTime"){let o=i.value;if(i.type==="setTargetAtTime"){const a=this._events.getBefore(i.time);a===null?o=this._initialValue:o=a.value}n.type==="linearRampToValueAtTime"?r=this._linearInterpolate(i.time,o,n.time,n.value,t):r=this._exponentialInterpolate(i.time,o,n.time,n.value,t)}else r=i.value;return this._toType(r)}setRampPoint(e){e=this.toSeconds(e);let t=this.getValueAtTime(e);return this.cancelAndHoldAtTime(e),this._fromType(t)===0&&(t=this._toType(this._minOutput)),this.setValueAtTime(t,e),this}linearRampToValueAtTime(e,t){const n=this._fromType(e),i=this.toSeconds(t);return Re(isFinite(n)&&isFinite(i),`Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._assertRange(n),this._events.add({time:i,type:"linearRampToValueAtTime",value:n}),this.log(this.units,"linearRampToValueAtTime",e,i),this._param.linearRampToValueAtTime(n,i),this}exponentialRampToValueAtTime(e,t){let n=this._fromType(e);n=Hn(n,0)?this._minOutput:n,this._assertRange(n);const i=this.toSeconds(t);return Re(isFinite(n)&&isFinite(i),`Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._events.add({time:i,type:"exponentialRampToValueAtTime",value:n}),this.log(this.units,"exponentialRampToValueAtTime",e,i),this._param.exponentialRampToValueAtTime(n,i),this}exponentialRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialRampToValueAtTime(e,n+this.toSeconds(t)),this}linearRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.linearRampToValueAtTime(e,n+this.toSeconds(t)),this}targetRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialApproachValueAtTime(e,n,t),this}exponentialApproachValueAtTime(e,t,n){t=this.toSeconds(t),n=this.toSeconds(n);const i=Math.log(n+1)/Math.log(200);return this.setTargetAtTime(e,t,i),this.cancelAndHoldAtTime(t+n*.9),this.linearRampToValueAtTime(e,t+n),this}setTargetAtTime(e,t,n){const i=this._fromType(e);Re(isFinite(n)&&n>0,"timeConstant must be a number greater than 0");const r=this.toSeconds(t);return this._assertRange(i),Re(isFinite(i)&&isFinite(r),`Invalid argument(s) to setTargetAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._events.add({constant:n,time:r,type:"setTargetAtTime",value:i}),this.log(this.units,"setTargetAtTime",e,r,n),this._param.setTargetAtTime(i,r,n),this}setValueCurveAtTime(e,t,n,i=1){n=this.toSeconds(n),t=this.toSeconds(t);const r=this._fromType(e[0])*i;this.setValueAtTime(this._toType(r),t);const o=n/(e.length-1);for(let a=1;a<e.length;a++){const c=this._fromType(e[a])*i;this.linearRampToValueAtTime(this._toType(c),t+a*o)}return this}cancelScheduledValues(e){const t=this.toSeconds(e);return Re(isFinite(t),`Invalid argument to cancelScheduledValues: ${JSON.stringify(e)}`),this._events.cancel(t),this._param.cancelScheduledValues(t),this.log(this.units,"cancelScheduledValues",t),this}cancelAndHoldAtTime(e){const t=this.toSeconds(e),n=this._fromType(this.getValueAtTime(t));Re(isFinite(t),`Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(e)}`),this.log(this.units,"cancelAndHoldAtTime",t,"value="+n);const i=this._events.get(t),r=this._events.getAfter(t);return i&&Hn(i.time,t)?r?(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time)):(this._param.cancelAndHoldAtTime(t),this._events.cancel(t+this.sampleTime)):r&&(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time),r.type==="linearRampToValueAtTime"?this.linearRampToValueAtTime(this._toType(n),t):r.type==="exponentialRampToValueAtTime"&&this.exponentialRampToValueAtTime(this._toType(n),t)),this._events.add({time:t,type:"setValueAtTime",value:n}),this._param.setValueAtTime(n,t),this}rampTo(e,t=.1,n){return this.units==="frequency"||this.units==="bpm"||this.units==="decibels"?this.exponentialRampTo(e,t,n):this.linearRampTo(e,t,n),this}apply(e){const t=this.context.currentTime;e.setValueAtTime(this.getValueAtTime(t),t);const n=this._events.get(t);if(n&&n.type==="setTargetAtTime"){const i=this._events.getAfter(n.time),r=i?i.time:t+2,o=(r-t)/10;for(let a=t;a<r;a+=o)e.linearRampToValueAtTime(this.getValueAtTime(a),a)}return this._events.forEachAfter(this.context.currentTime,i=>{i.type==="cancelScheduledValues"?e.cancelScheduledValues(i.time):i.type==="setTargetAtTime"?e.setTargetAtTime(i.value,i.time,i.constant):e[i.type](i.value,i.time)}),this}setParam(e){Re(this._swappable,"The Param must be assigned as 'swappable' in the constructor");const t=this.input;return t.disconnect(this._param),this.apply(e),this._param=e,t.connect(this._param),this}dispose(){return super.dispose(),this._events.dispose(),this}get defaultValue(){return this._toType(this._param.defaultValue)}_exponentialApproach(e,t,n,i,r){return n+(t-n)*Math.exp(-(r-e)/i)}_linearInterpolate(e,t,n,i,r){return t+(i-t)*((r-e)/(n-e))}_exponentialInterpolate(e,t,n,i,r){return t*Math.pow(i/t,(r-e)/(n-e))}}class ye extends _n{constructor(){super(...arguments),this.name="ToneAudioNode",this._internalChannels=[]}get numberOfInputs(){return Ye(this.input)?ir(this.input)||this.input instanceof je?1:this.input.numberOfInputs:0}get numberOfOutputs(){return Ye(this.output)?this.output.numberOfOutputs:0}_isAudioNode(e){return Ye(e)&&(e instanceof ye||us(e))}_getInternalNodes(){const e=this._internalChannels.slice(0);return this._isAudioNode(this.input)&&e.push(this.input),this._isAudioNode(this.output)&&this.input!==this.output&&e.push(this.output),e}_setChannelProperties(e){this._getInternalNodes().forEach(n=>{n.channelCount=e.channelCount,n.channelCountMode=e.channelCountMode,n.channelInterpretation=e.channelInterpretation})}_getChannelProperties(){const e=this._getInternalNodes();Re(e.length>0,"ToneAudioNode does not have any internal nodes");const t=e[0];return{channelCount:t.channelCount,channelCountMode:t.channelCountMode,channelInterpretation:t.channelInterpretation}}get channelCount(){return this._getChannelProperties().channelCount}set channelCount(e){const t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelCount:e}))}get channelCountMode(){return this._getChannelProperties().channelCountMode}set channelCountMode(e){const t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelCountMode:e}))}get channelInterpretation(){return this._getChannelProperties().channelInterpretation}set channelInterpretation(e){const t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelInterpretation:e}))}connect(e,t=0,n=0){return fi(this,e,t,n),this}toDestination(){return this.connect(this.context.destination),this}toMaster(){return fd("toMaster() has been renamed toDestination()"),this.toDestination()}disconnect(e,t=0,n=0){return JR(this,e,t,n),this}chain(...e){return ps(this,...e),this}fan(...e){return e.forEach(t=>this.connect(t)),this}dispose(){return super.dispose(),Ye(this.input)&&(this.input instanceof ye?this.input.dispose():us(this.input)&&this.input.disconnect()),Ye(this.output)&&(this.output instanceof ye?this.output.dispose():us(this.output)&&this.output.disconnect()),this._internalChannels=[],this}}function ps(...s){const e=s.shift();s.reduce((t,n)=>(t instanceof ye?t.connect(n):us(t)&&fi(t,n),n),e)}function fi(s,e,t=0,n=0){for(Re(Ye(s),"Cannot connect from undefined node"),Re(Ye(e),"Cannot connect to undefined node"),(e instanceof ye||us(e))&&Re(e.numberOfInputs>0,"Cannot connect to node with no inputs"),Re(s.numberOfOutputs>0,"Cannot connect from node with no outputs");e instanceof ye||e instanceof je;)Ye(e.input)&&(e=e.input);for(;s instanceof ye;)Ye(s.output)&&(s=s.output);ir(e)?s.connect(e,t):s.connect(e,t,n)}function JR(s,e,t=0,n=0){if(Ye(e))for(;e instanceof ye;)e=e.input;for(;!us(s);)Ye(s.output)&&(s=s.output);ir(e)?s.disconnect(e,t):us(e)?s.disconnect(e,t,n):s.disconnect()}class ot extends ye{constructor(){super(Z(ot.getDefaults(),arguments,["gain","units"])),this.name="Gain",this._gainNode=this.context.createGain(),this.input=this._gainNode,this.output=this._gainNode;const e=Z(ot.getDefaults(),arguments,["gain","units"]);this.gain=new je({context:this.context,convert:e.convert,param:this._gainNode.gain,units:e.units,value:e.gain,minValue:e.minValue,maxValue:e.maxValue}),Ke(this,"gain")}static getDefaults(){return Object.assign(ye.getDefaults(),{convert:!0,gain:1,units:"gain"})}dispose(){return super.dispose(),this._gainNode.disconnect(),this.gain.dispose(),this}}class lo extends ye{constructor(e){super(e),this.onended=rt,this._startTime=-1,this._stopTime=-1,this._timeout=-1,this.output=new ot({context:this.context,gain:0}),this._gainNode=this.output,this.getStateAtTime=function(t){const n=this.toSeconds(t);return this._startTime!==-1&&n>=this._startTime&&(this._stopTime===-1||n<=this._stopTime)?"started":"stopped"},this._fadeIn=e.fadeIn,this._fadeOut=e.fadeOut,this._curve=e.curve,this.onended=e.onended}static getDefaults(){return Object.assign(ye.getDefaults(),{curve:"linear",fadeIn:0,fadeOut:0,onended:rt})}_startGain(e,t=1){Re(this._startTime===-1,"Source cannot be started more than once");const n=this.toSeconds(this._fadeIn);return this._startTime=e+n,this._startTime=Math.max(this._startTime,this.context.currentTime),n>0?(this._gainNode.gain.setValueAtTime(0,e),this._curve==="linear"?this._gainNode.gain.linearRampToValueAtTime(t,e+n):this._gainNode.gain.exponentialApproachValueAtTime(t,e,n)):this._gainNode.gain.setValueAtTime(t,e),this}stop(e){return this.log("stop",e),this._stopGain(this.toSeconds(e)),this}_stopGain(e){Re(this._startTime!==-1,"'start' must be called before 'stop'"),this.cancelStop();const t=this.toSeconds(this._fadeOut);return this._stopTime=this.toSeconds(e)+t,this._stopTime=Math.max(this._stopTime,this.context.currentTime),t>0?this._curve==="linear"?this._gainNode.gain.linearRampTo(0,t,e):this._gainNode.gain.targetRampTo(0,t,e):(this._gainNode.gain.cancelAndHoldAtTime(e),this._gainNode.gain.setValueAtTime(0,e)),this.context.clearTimeout(this._timeout),this._timeout=this.context.setTimeout(()=>{const n=this._curve==="exponential"?t*2:0;this._stopSource(this.now()+n),this._onended()},this._stopTime-this.context.currentTime),this}_onended(){if(this.onended!==rt&&(this.onended(this),this.onended=rt,!this.context.isOffline)){const e=()=>this.dispose();typeof window.requestIdleCallback<"u"?window.requestIdleCallback(e):setTimeout(e,1e3)}}get state(){return this.getStateAtTime(this.now())}cancelStop(){return this.log("cancelStop"),Re(this._startTime!==-1,"Source is not started"),this._gainNode.gain.cancelScheduledValues(this._startTime+this.sampleTime),this.context.clearTimeout(this._timeout),this._stopTime=-1,this}dispose(){return super.dispose(),this._gainNode.disconnect(),this}}class Yc extends lo{constructor(){super(Z(Yc.getDefaults(),arguments,["offset"])),this.name="ToneConstantSource",this._source=this.context.createConstantSource();const e=Z(Yc.getDefaults(),arguments,["offset"]);fi(this._source,this._gainNode),this.offset=new je({context:this.context,convert:e.convert,param:this._source.offset,units:e.units,value:e.offset,minValue:e.minValue,maxValue:e.maxValue})}static getDefaults(){return Object.assign(lo.getDefaults(),{convert:!0,offset:1,units:"number"})}start(e){const t=this.toSeconds(e);return this.log("start",t),this._startGain(t),this._source.start(t),this}_stopSource(e){this._source.stop(e)}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._source.disconnect(),this.offset.dispose(),this}}class lt extends ye{constructor(){super(Z(lt.getDefaults(),arguments,["value","units"])),this.name="Signal",this.override=!0;const e=Z(lt.getDefaults(),arguments,["value","units"]);this.output=this._constantSource=new Yc({context:this.context,convert:e.convert,offset:e.value,units:e.units,minValue:e.minValue,maxValue:e.maxValue}),this._constantSource.start(0),this.input=this._param=this._constantSource.offset}static getDefaults(){return Object.assign(ye.getDefaults(),{convert:!0,units:"number",value:0})}connect(e,t=0,n=0){return yd(this,e,t,n),this}dispose(){return super.dispose(),this._param.dispose(),this._constantSource.dispose(),this}setValueAtTime(e,t){return this._param.setValueAtTime(e,t),this}getValueAtTime(e){return this._param.getValueAtTime(e)}setRampPoint(e){return this._param.setRampPoint(e),this}linearRampToValueAtTime(e,t){return this._param.linearRampToValueAtTime(e,t),this}exponentialRampToValueAtTime(e,t){return this._param.exponentialRampToValueAtTime(e,t),this}exponentialRampTo(e,t,n){return this._param.exponentialRampTo(e,t,n),this}linearRampTo(e,t,n){return this._param.linearRampTo(e,t,n),this}targetRampTo(e,t,n){return this._param.targetRampTo(e,t,n),this}exponentialApproachValueAtTime(e,t,n){return this._param.exponentialApproachValueAtTime(e,t,n),this}setTargetAtTime(e,t,n){return this._param.setTargetAtTime(e,t,n),this}setValueCurveAtTime(e,t,n,i){return this._param.setValueCurveAtTime(e,t,n,i),this}cancelScheduledValues(e){return this._param.cancelScheduledValues(e),this}cancelAndHoldAtTime(e){return this._param.cancelAndHoldAtTime(e),this}rampTo(e,t,n){return this._param.rampTo(e,t,n),this}get value(){return this._param.value}set value(e){this._param.value=e}get convert(){return this._param.convert}set convert(e){this._param.convert=e}get units(){return this._param.units}get overridden(){return this._param.overridden}set overridden(e){this._param.overridden=e}get maxValue(){return this._param.maxValue}get minValue(){return this._param.minValue}apply(e){return this._param.apply(e),this}}function yd(s,e,t,n){(e instanceof je||ir(e)||e instanceof lt&&e.override)&&(e.cancelScheduledValues(0),e.setValueAtTime(0,0),e instanceof lt&&(e.overridden=!0)),fi(s,e,t,n)}class $c extends je{constructor(){super(Z($c.getDefaults(),arguments,["value"])),this.name="TickParam",this._events=new xi(1/0),this._multiplier=1;const e=Z($c.getDefaults(),arguments,["value"]);this._multiplier=e.multiplier,this._events.cancel(0),this._events.add({ticks:0,time:0,type:"setValueAtTime",value:this._fromType(e.value)}),this.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(je.getDefaults(),{multiplier:1,units:"hertz",value:1})}setTargetAtTime(e,t,n){t=this.toSeconds(t),this.setRampPoint(t);const i=this._fromType(e),r=this._events.get(t),o=Math.round(Math.max(1/n,1));for(let a=0;a<=o;a++){const c=n*a+t,l=this._exponentialApproach(r.time,r.value,i,n,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}setValueAtTime(e,t){const n=this.toSeconds(t);super.setValueAtTime(e,t);const i=this._events.get(n),r=this._events.previousEvent(i),o=this._getTicksUntilEvent(r,n);return i.ticks=Math.max(o,0),this}linearRampToValueAtTime(e,t){const n=this.toSeconds(t);super.linearRampToValueAtTime(e,t);const i=this._events.get(n),r=this._events.previousEvent(i),o=this._getTicksUntilEvent(r,n);return i.ticks=Math.max(o,0),this}exponentialRampToValueAtTime(e,t){t=this.toSeconds(t);const n=this._fromType(e),i=this._events.get(t),r=Math.round(Math.max((t-i.time)*10,1)),o=(t-i.time)/r;for(let a=0;a<=r;a++){const c=o*a+i.time,l=this._exponentialInterpolate(i.time,i.value,t,n,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}_getTicksUntilEvent(e,t){if(e===null)e={ticks:0,time:0,type:"setValueAtTime",value:0};else if(Bn(e.ticks)){const o=this._events.previousEvent(e);e.ticks=this._getTicksUntilEvent(o,e.time)}const n=this._fromType(this.getValueAtTime(e.time));let i=this._fromType(this.getValueAtTime(t));const r=this._events.get(t);return r&&r.time===t&&r.type==="setValueAtTime"&&(i=this._fromType(this.getValueAtTime(t-this.sampleTime))),.5*(t-e.time)*(n+i)+e.ticks}getTicksAtTime(e){const t=this.toSeconds(e),n=this._events.get(t);return Math.max(this._getTicksUntilEvent(n,t),0)}getDurationOfTicks(e,t){const n=this.toSeconds(t),i=this.getTicksAtTime(t);return this.getTimeOfTick(i+e)-n}getTimeOfTick(e){const t=this._events.get(e,"ticks"),n=this._events.getAfter(e,"ticks");if(t&&t.ticks===e)return t.time;if(t&&n&&n.type==="linearRampToValueAtTime"&&t.value!==n.value){const i=this._fromType(this.getValueAtTime(t.time)),o=(this._fromType(this.getValueAtTime(n.time))-i)/(n.time-t.time),a=Math.sqrt(Math.pow(i,2)-2*o*(t.ticks-e)),c=(-i+a)/o,l=(-i-a)/o;return(c>0?c:l)+t.time}else return t?t.value===0?1/0:t.time+(e-t.ticks)/t.value:e/this._initialValue}ticksToTime(e,t){return this.getDurationOfTicks(e,t)}timeToTicks(e,t){const n=this.toSeconds(t),i=this.toSeconds(e),r=this.getTicksAtTime(n);return this.getTicksAtTime(n+i)-r}_fromType(e){return this.units==="bpm"&&this.multiplier?1/(60/e/this.multiplier):super._fromType(e)}_toType(e){return this.units==="bpm"&&this.multiplier?e/this.multiplier*60:super._toType(e)}get multiplier(){return this._multiplier}set multiplier(e){const t=this.value;this._multiplier=e,this.cancelScheduledValues(0),this.setValueAtTime(t,0)}}class Kc extends lt{constructor(){super(Z(Kc.getDefaults(),arguments,["value"])),this.name="TickSignal";const e=Z(Kc.getDefaults(),arguments,["value"]);this.input=this._param=new $c({context:this.context,convert:e.convert,multiplier:e.multiplier,param:this._constantSource.offset,units:e.units,value:e.value})}static getDefaults(){return Object.assign(lt.getDefaults(),{multiplier:1,units:"hertz",value:1})}ticksToTime(e,t){return this._param.ticksToTime(e,t)}timeToTicks(e,t){return this._param.timeToTicks(e,t)}getTimeOfTick(e){return this._param.getTimeOfTick(e)}getDurationOfTicks(e,t){return this._param.getDurationOfTicks(e,t)}getTicksAtTime(e){return this._param.getTicksAtTime(e)}get multiplier(){return this._param.multiplier}set multiplier(e){this._param.multiplier=e}dispose(){return super.dispose(),this._param.dispose(),this}}class Zc extends _n{constructor(){super(Z(Zc.getDefaults(),arguments,["frequency"])),this.name="TickSource",this._state=new vd,this._tickOffset=new xi;const e=Z(Zc.getDefaults(),arguments,["frequency"]);this.frequency=new Kc({context:this.context,units:e.units,value:e.frequency}),Ke(this,"frequency"),this._state.setStateAtTime("stopped",0),this.setTicksAtTime(0,0)}static getDefaults(){return Object.assign({frequency:1,units:"hertz"},_n.getDefaults())}get state(){return this.getStateAtTime(this.now())}start(e,t){const n=this.toSeconds(e);return this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),Ye(t)&&this.setTicksAtTime(t,n)),this}stop(e){const t=this.toSeconds(e);if(this._state.getValueAtTime(t)==="stopped"){const n=this._state.get(t);n&&n.time>0&&(this._tickOffset.cancel(n.time),this._state.cancel(n.time))}return this._state.cancel(t),this._state.setStateAtTime("stopped",t),this.setTicksAtTime(0,t),this}pause(e){const t=this.toSeconds(e);return this._state.getValueAtTime(t)==="started"&&this._state.setStateAtTime("paused",t),this}cancel(e){return e=this.toSeconds(e),this._state.cancel(e),this._tickOffset.cancel(e),this}getTicksAtTime(e){const t=this.toSeconds(e),n=this._state.getLastState("stopped",t),i={state:"paused",time:t};this._state.add(i);let r=n,o=0;return this._state.forEachBetween(n.time,t+this.sampleTime,a=>{let c=r.time;const l=this._tickOffset.get(a.time);l&&l.time>=r.time&&(o=l.ticks,c=l.time),r.state==="started"&&a.state!=="started"&&(o+=this.frequency.getTicksAtTime(a.time)-this.frequency.getTicksAtTime(c)),r=a}),this._state.remove(i),o}get ticks(){return this.getTicksAtTime(this.now())}set ticks(e){this.setTicksAtTime(e,this.now())}get seconds(){return this.getSecondsAtTime(this.now())}set seconds(e){const t=this.now(),n=this.frequency.timeToTicks(e,t);this.setTicksAtTime(n,t)}getSecondsAtTime(e){e=this.toSeconds(e);const t=this._state.getLastState("stopped",e),n={state:"paused",time:e};this._state.add(n);let i=t,r=0;return this._state.forEachBetween(t.time,e+this.sampleTime,o=>{let a=i.time;const c=this._tickOffset.get(o.time);c&&c.time>=i.time&&(r=c.seconds,a=c.time),i.state==="started"&&o.state!=="started"&&(r+=o.time-a),i=o}),this._state.remove(n),r}setTicksAtTime(e,t){return t=this.toSeconds(t),this._tickOffset.cancel(t),this._tickOffset.add({seconds:this.frequency.getDurationOfTicks(e,t),ticks:e,time:t}),this}getStateAtTime(e){return e=this.toSeconds(e),this._state.getValueAtTime(e)}getTimeOfTick(e,t=this.now()){const n=this._tickOffset.get(t),i=this._state.get(t),r=Math.max(n.time,i.time),o=this.frequency.getTicksAtTime(r)+e-n.ticks;return this.frequency.getTimeOfTick(o)}forEachTickBetween(e,t,n){let i=this._state.get(e);this._state.forEachBetween(e,t,o=>{i&&i.state==="started"&&o.state!=="started"&&this.forEachTickBetween(Math.max(i.time,e),o.time-this.sampleTime,n),i=o});let r=null;if(i&&i.state==="started"){const o=Math.max(i.time,e),a=this.frequency.getTicksAtTime(o),c=this.frequency.getTicksAtTime(i.time),l=a-c;let u=Math.ceil(l)-l;u=Hn(u,1)?0:u;let h=this.frequency.getTimeOfTick(a+u);for(;h<t;){try{n(h,Math.round(this.getTicksAtTime(h)))}catch(d){r=d;break}h+=this.frequency.getDurationOfTicks(1,h)}}if(r)throw r;return this}dispose(){return super.dispose(),this._state.dispose(),this._tickOffset.dispose(),this.frequency.dispose(),this}}class na extends _n{constructor(){super(Z(na.getDefaults(),arguments,["callback","frequency"])),this.name="Clock",this.callback=rt,this._lastUpdate=0,this._state=new vd("stopped"),this._boundLoop=this._loop.bind(this);const e=Z(na.getDefaults(),arguments,["callback","frequency"]);this.callback=e.callback,this._tickSource=new Zc({context:this.context,frequency:e.frequency,units:e.units}),this._lastUpdate=0,this.frequency=this._tickSource.frequency,Ke(this,"frequency"),this._state.setStateAtTime("stopped",0),this.context.on("tick",this._boundLoop)}static getDefaults(){return Object.assign(_n.getDefaults(),{callback:rt,frequency:1,units:"hertz"})}get state(){return this._state.getValueAtTime(this.now())}start(e,t){C_(this.context);const n=this.toSeconds(e);return this.log("start",n),this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),this._tickSource.start(n,t),n<this._lastUpdate&&this.emit("start",n,t)),this}stop(e){const t=this.toSeconds(e);return this.log("stop",t),this._state.cancel(t),this._state.setStateAtTime("stopped",t),this._tickSource.stop(t),t<this._lastUpdate&&this.emit("stop",t),this}pause(e){const t=this.toSeconds(e);return this._state.getValueAtTime(t)==="started"&&(this._state.setStateAtTime("paused",t),this._tickSource.pause(t),t<this._lastUpdate&&this.emit("pause",t)),this}get ticks(){return Math.ceil(this.getTicksAtTime(this.now()))}set ticks(e){this._tickSource.ticks=e}get seconds(){return this._tickSource.seconds}set seconds(e){this._tickSource.seconds=e}getSecondsAtTime(e){return this._tickSource.getSecondsAtTime(e)}setTicksAtTime(e,t){return this._tickSource.setTicksAtTime(e,t),this}getTimeOfTick(e,t=this.now()){return this._tickSource.getTimeOfTick(e,t)}getTicksAtTime(e){return this._tickSource.getTicksAtTime(e)}nextTickTime(e,t){const n=this.toSeconds(t),i=this.getTicksAtTime(n);return this._tickSource.getTimeOfTick(i+e,n)}_loop(){const e=this._lastUpdate,t=this.now();this._lastUpdate=t,this.log("loop",e,t),e!==t&&(this._state.forEachBetween(e,t,n=>{switch(n.state){case"started":const i=this._tickSource.getTicksAtTime(n.time);this.emit("start",n.time,i);break;case"stopped":n.time!==0&&this.emit("stop",n.time);break;case"paused":this.emit("pause",n.time);break}}),this._tickSource.forEachTickBetween(e,t,(n,i)=>{this.callback(n,i)}))}getStateAtTime(e){const t=this.toSeconds(e);return this._state.getValueAtTime(t)}dispose(){return super.dispose(),this.context.off("tick",this._boundLoop),this._tickSource.dispose(),this._state.dispose(),this}}Ra.mixin(na);class Qc extends ye{constructor(){super(Z(Qc.getDefaults(),arguments,["delayTime","maxDelay"])),this.name="Delay";const e=Z(Qc.getDefaults(),arguments,["delayTime","maxDelay"]),t=this.toSeconds(e.maxDelay);this._maxDelay=Math.max(t,this.toSeconds(e.delayTime)),this._delayNode=this.input=this.output=this.context.createDelay(t),this.delayTime=new je({context:this.context,param:this._delayNode.delayTime,units:"time",value:e.delayTime,minValue:0,maxValue:this.maxDelay}),Ke(this,"delayTime")}static getDefaults(){return Object.assign(ye.getDefaults(),{delayTime:0,maxDelay:1})}get maxDelay(){return this._maxDelay}dispose(){return super.dispose(),this._delayNode.disconnect(),this.delayTime.dispose(),this}}class xd extends $i{constructor(){super(),this.name="ToneAudioBuffers",this._buffers=new Map,this._loadingCount=0;const e=Z(xd.getDefaults(),arguments,["urls","onload","baseUrl"],"urls");this.baseUrl=e.baseUrl,Object.keys(e.urls).forEach(t=>{this._loadingCount++;const n=e.urls[t];this.add(t,n,this._bufferLoaded.bind(this,e.onload),e.onerror)})}static getDefaults(){return{baseUrl:"",onerror:rt,onload:rt,urls:{}}}has(e){return this._buffers.has(e.toString())}get(e){return Re(this.has(e),`ToneAudioBuffers has no buffer named: ${e}`),this._buffers.get(e.toString())}_bufferLoaded(e){this._loadingCount--,this._loadingCount===0&&e&&e()}get loaded(){return Array.from(this._buffers).every(([e,t])=>t.loaded)}add(e,t,n=rt,i=rt){return di(t)?this._buffers.set(e.toString(),new nt(this.baseUrl+t,n,i)):this._buffers.set(e.toString(),new nt(t,n,i)),this}dispose(){return super.dispose(),this._buffers.forEach(e=>e.dispose()),this._buffers.clear(),this}}class Jc extends wn{constructor(){super(...arguments),this.name="MidiClass",this.defaultUnits="midi"}_frequencyToUnits(e){return Hs(super._frequencyToUnits(e))}_ticksToUnits(e){return Hs(super._ticksToUnits(e))}_beatsToUnits(e){return Hs(super._beatsToUnits(e))}_secondsToUnits(e){return Hs(super._secondsToUnits(e))}toMidi(){return this.valueOf()}toFrequency(){return k_(this.toMidi())}transpose(e){return new Jc(this.context,this.toMidi()+e)}}class Ui extends $o{constructor(){super(...arguments),this.name="Ticks",this.defaultUnits="i"}_now(){return this.context.transport.ticks}_beatsToUnits(e){return this._getPPQ()*e}_secondsToUnits(e){return Math.floor(e/(60/this._getBpm())*this._getPPQ())}_ticksToUnits(e){return e}toTicks(){return this.valueOf()}toSeconds(){return this.valueOf()/this._getPPQ()*(60/this._getBpm())}}class eI extends _n{constructor(){super(...arguments),this.name="Draw",this.expiration=.25,this.anticipation=.008,this._events=new xi,this._boundDrawLoop=this._drawLoop.bind(this),this._animationFrame=-1}schedule(e,t){return this._events.add({callback:e,time:this.toSeconds(t)}),this._events.length===1&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop)),this}cancel(e){return this._events.cancel(this.toSeconds(e)),this}_drawLoop(){const e=this.context.currentTime;for(;this._events.length&&this._events.peek().time-this.anticipation<=e;){const t=this._events.shift();t&&e-t.time<=this.expiration&&t.callback()}this._events.length>0&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop))}dispose(){return super.dispose(),this._events.dispose(),cancelAnimationFrame(this._animationFrame),this}}Dl(s=>{s.draw=new eI({context:s})});Pl(s=>{s.draw.dispose()});class tI extends $i{constructor(){super(...arguments),this.name="IntervalTimeline",this._root=null,this._length=0}add(e){Re(Ye(e.time),"Events must have a time property"),Re(Ye(e.duration),"Events must have a duration parameter"),e.time=e.time.valueOf();let t=new nI(e.time,e.time+e.duration,e);for(this._root===null?this._root=t:this._root.insert(t),this._length++;t!==null;)t.updateHeight(),t.updateMax(),this._rebalance(t),t=t.parent;return this}remove(e){if(this._root!==null){const t=[];this._root.search(e.time,t);for(const n of t)if(n.event===e){this._removeNode(n),this._length--;break}}return this}get length(){return this._length}cancel(e){return this.forEachFrom(e,t=>this.remove(t)),this}_setRoot(e){this._root=e,this._root!==null&&(this._root.parent=null)}_replaceNodeInParent(e,t){e.parent!==null?(e.isLeftChild()?e.parent.left=t:e.parent.right=t,this._rebalance(e.parent)):this._setRoot(t)}_removeNode(e){if(e.left===null&&e.right===null)this._replaceNodeInParent(e,null);else if(e.right===null)this._replaceNodeInParent(e,e.left);else if(e.left===null)this._replaceNodeInParent(e,e.right);else{const t=e.getBalance();let n,i=null;if(t>0)if(e.left.right===null)n=e.left,n.right=e.right,i=n;else{for(n=e.left.right;n.right!==null;)n=n.right;n.parent&&(n.parent.right=n.left,i=n.parent,n.left=e.left,n.right=e.right)}else if(e.right.left===null)n=e.right,n.left=e.left,i=n;else{for(n=e.right.left;n.left!==null;)n=n.left;n.parent&&(n.parent.left=n.right,i=n.parent,n.left=e.left,n.right=e.right)}e.parent!==null?e.isLeftChild()?e.parent.left=n:e.parent.right=n:this._setRoot(n),i&&this._rebalance(i)}e.dispose()}_rotateLeft(e){const t=e.parent,n=e.isLeftChild(),i=e.right;i&&(e.right=i.left,i.left=e),t!==null?n?t.left=i:t.right=i:this._setRoot(i)}_rotateRight(e){const t=e.parent,n=e.isLeftChild(),i=e.left;i&&(e.left=i.right,i.right=e),t!==null?n?t.left=i:t.right=i:this._setRoot(i)}_rebalance(e){const t=e.getBalance();t>1&&e.left?e.left.getBalance()<0?this._rotateLeft(e.left):this._rotateRight(e):t<-1&&e.right&&(e.right.getBalance()>0?this._rotateRight(e.right):this._rotateLeft(e))}get(e){if(this._root!==null){const t=[];if(this._root.search(e,t),t.length>0){let n=t[0];for(let i=1;i<t.length;i++)t[i].low>n.low&&(n=t[i]);return n.event}}return null}forEach(e){if(this._root!==null){const t=[];this._root.traverse(n=>t.push(n)),t.forEach(n=>{n.event&&e(n.event)})}return this}forEachAtTime(e,t){if(this._root!==null){const n=[];this._root.search(e,n),n.forEach(i=>{i.event&&t(i.event)})}return this}forEachFrom(e,t){if(this._root!==null){const n=[];this._root.searchAfter(e,n),n.forEach(i=>{i.event&&t(i.event)})}return this}dispose(){return super.dispose(),this._root!==null&&this._root.traverse(e=>e.dispose()),this._root=null,this}}class nI{constructor(e,t,n){this._left=null,this._right=null,this.parent=null,this.height=0,this.event=n,this.low=e,this.high=t,this.max=this.high}insert(e){e.low<=this.low?this.left===null?this.left=e:this.left.insert(e):this.right===null?this.right=e:this.right.insert(e)}search(e,t){e>this.max||(this.left!==null&&this.left.search(e,t),this.low<=e&&this.high>e&&t.push(this),!(this.low>e)&&this.right!==null&&this.right.search(e,t))}searchAfter(e,t){this.low>=e&&(t.push(this),this.left!==null&&this.left.searchAfter(e,t)),this.right!==null&&this.right.searchAfter(e,t)}traverse(e){e(this),this.left!==null&&this.left.traverse(e),this.right!==null&&this.right.traverse(e)}updateHeight(){this.left!==null&&this.right!==null?this.height=Math.max(this.left.height,this.right.height)+1:this.right!==null?this.height=this.right.height+1:this.left!==null?this.height=this.left.height+1:this.height=0}updateMax(){this.max=this.high,this.left!==null&&(this.max=Math.max(this.max,this.left.max)),this.right!==null&&(this.max=Math.max(this.max,this.right.max))}getBalance(){let e=0;return this.left!==null&&this.right!==null?e=this.left.height-this.right.height:this.left!==null?e=this.left.height+1:this.right!==null&&(e=-(this.right.height+1)),e}isLeftChild(){return this.parent!==null&&this.parent.left===this}get left(){return this._left}set left(e){this._left=e,e!==null&&(e.parent=this),this.updateHeight(),this.updateMax()}get right(){return this._right}set right(e){this._right=e,e!==null&&(e.parent=this),this.updateHeight(),this.updateMax()}dispose(){this.parent=null,this._left=null,this._right=null,this.event=null}}class sr extends ye{constructor(){super(Z(sr.getDefaults(),arguments,["volume"])),this.name="Volume";const e=Z(sr.getDefaults(),arguments,["volume"]);this.input=this.output=new ot({context:this.context,gain:e.volume,units:"decibels"}),this.volume=this.output.gain,Ke(this,"volume"),this._unmutedVolume=e.volume,this.mute=e.mute}static getDefaults(){return Object.assign(ye.getDefaults(),{mute:!1,volume:0})}get mute(){return this.volume.value===-1/0}set mute(e){!this.mute&&e?(this._unmutedVolume=this.volume.value,this.volume.value=-1/0):this.mute&&!e&&(this.volume.value=this._unmutedVolume)}dispose(){return super.dispose(),this.input.dispose(),this.volume.dispose(),this}}class el extends ye{constructor(){super(Z(el.getDefaults(),arguments)),this.name="Destination",this.input=new sr({context:this.context}),this.output=new ot({context:this.context}),this.volume=this.input.volume;const e=Z(el.getDefaults(),arguments);ps(this.input,this.output,this.context.rawContext.destination),this.mute=e.mute,this._internalChannels=[this.input,this.context.rawContext.destination,this.output]}static getDefaults(){return Object.assign(ye.getDefaults(),{mute:!1,volume:0})}get mute(){return this.input.mute}set mute(e){this.input.mute=e}chain(...e){return this.input.disconnect(),e.unshift(this.input),e.push(this.output),ps(...e),this}get maxChannelCount(){return this.context.rawContext.destination.maxChannelCount}dispose(){return super.dispose(),this.volume.dispose(),this}}Dl(s=>{s.destination=new el({context:s})});Pl(s=>{s.destination.dispose()});class iI extends $i{constructor(e){super(),this.name="TimelineValue",this._timeline=new xi({memory:10}),this._initialValue=e}set(e,t){return this._timeline.add({value:e,time:t}),this}get(e){const t=this._timeline.get(e);return t?t.value:this._initialValue}}class ms{constructor(e,t){this.id=ms._eventId++;const n=Object.assign(ms.getDefaults(),t);this.transport=e,this.callback=n.callback,this._once=n.once,this.time=n.time}static getDefaults(){return{callback:rt,once:!1,time:0}}invoke(e){this.callback&&(this.callback(e),this._once&&this.transport.clear(this.id))}dispose(){return this.callback=void 0,this}}ms._eventId=0;class Sd extends ms{constructor(e,t){super(e,t),this._currentId=-1,this._nextId=-1,this._nextTick=this.time,this._boundRestart=this._restart.bind(this);const n=Object.assign(Sd.getDefaults(),t);this.duration=new Ui(e.context,n.duration).valueOf(),this._interval=new Ui(e.context,n.interval).valueOf(),this._nextTick=n.time,this.transport.on("start",this._boundRestart),this.transport.on("loopStart",this._boundRestart),this.context=this.transport.context,this._restart()}static getDefaults(){return Object.assign({},ms.getDefaults(),{duration:1/0,interval:1,once:!1})}invoke(e){this._createEvents(e),super.invoke(e)}_createEvents(e){const t=this.transport.getTicksAtTime(e);t>=this.time&&t>=this._nextTick&&this._nextTick+this._interval<this.time+this.duration&&(this._nextTick+=this._interval,this._currentId=this._nextId,this._nextId=this.transport.scheduleOnce(this.invoke.bind(this),new Ui(this.context,this._nextTick).toSeconds()))}_restart(e){this.transport.clear(this._currentId),this.transport.clear(this._nextId),this._nextTick=this.time;const t=this.transport.getTicksAtTime(e);t>this.time&&(this._nextTick=this.time+Math.ceil((t-this.time)/this._interval)*this._interval),this._currentId=this.transport.scheduleOnce(this.invoke.bind(this),new Ui(this.context,this._nextTick).toSeconds()),this._nextTick+=this._interval,this._nextId=this.transport.scheduleOnce(this.invoke.bind(this),new Ui(this.context,this._nextTick).toSeconds())}dispose(){return super.dispose(),this.transport.clear(this._currentId),this.transport.clear(this._nextId),this.transport.off("start",this._boundRestart),this.transport.off("loopStart",this._boundRestart),this}}class ia extends _n{constructor(){super(Z(ia.getDefaults(),arguments)),this.name="Transport",this._loop=new iI(!1),this._loopStart=0,this._loopEnd=0,this._scheduledEvents={},this._timeline=new xi,this._repeatedEvents=new tI,this._syncedSignals=[],this._swingAmount=0;const e=Z(ia.getDefaults(),arguments);this._ppq=e.ppq,this._clock=new na({callback:this._processTick.bind(this),context:this.context,frequency:0,units:"bpm"}),this._bindClockEvents(),this.bpm=this._clock.frequency,this._clock.frequency.multiplier=e.ppq,this.bpm.setValueAtTime(e.bpm,0),Ke(this,"bpm"),this._timeSignature=e.timeSignature,this._swingTicks=e.ppq/2}static getDefaults(){return Object.assign(_n.getDefaults(),{bpm:120,loopEnd:"4m",loopStart:0,ppq:192,swing:0,swingSubdivision:"8n",timeSignature:4})}_processTick(e,t){if(this._loop.get(e)&&t>=this._loopEnd&&(this.emit("loopEnd",e),this._clock.setTicksAtTime(this._loopStart,e),t=this._loopStart,this.emit("loopStart",e,this._clock.getSecondsAtTime(e)),this.emit("loop",e)),this._swingAmount>0&&t%this._ppq!==0&&t%(this._swingTicks*2)!==0){const n=t%(this._swingTicks*2)/(this._swingTicks*2),i=Math.sin(n*Math.PI)*this._swingAmount;e+=new Ui(this.context,this._swingTicks*2/3).toSeconds()*i}this._timeline.forEachAtTime(t,n=>n.invoke(e))}schedule(e,t){const n=new ms(this,{callback:e,time:new $o(this.context,t).toTicks()});return this._addEvent(n,this._timeline)}scheduleRepeat(e,t,n,i=1/0){const r=new Sd(this,{callback:e,duration:new qn(this.context,i).toTicks(),interval:new qn(this.context,t).toTicks(),time:new $o(this.context,n).toTicks()});return this._addEvent(r,this._repeatedEvents)}scheduleOnce(e,t){const n=new ms(this,{callback:e,once:!0,time:new $o(this.context,t).toTicks()});return this._addEvent(n,this._timeline)}clear(e){if(this._scheduledEvents.hasOwnProperty(e)){const t=this._scheduledEvents[e.toString()];t.timeline.remove(t.event),t.event.dispose(),delete this._scheduledEvents[e.toString()]}return this}_addEvent(e,t){return this._scheduledEvents[e.id.toString()]={event:e,timeline:t},t.add(e),e.id}cancel(e=0){const t=this.toTicks(e);return this._timeline.forEachFrom(t,n=>this.clear(n.id)),this._repeatedEvents.forEachFrom(t,n=>this.clear(n.id)),this}_bindClockEvents(){this._clock.on("start",(e,t)=>{t=new Ui(this.context,t).toSeconds(),this.emit("start",e,t)}),this._clock.on("stop",e=>{this.emit("stop",e)}),this._clock.on("pause",e=>{this.emit("pause",e)})}get state(){return this._clock.getStateAtTime(this.now())}start(e,t){let n;return Ye(t)&&(n=this.toTicks(t)),this._clock.start(e,n),this}stop(e){return this._clock.stop(e),this}pause(e){return this._clock.pause(e),this}toggle(e){return e=this.toSeconds(e),this._clock.getStateAtTime(e)!=="started"?this.start(e):this.stop(e),this}get timeSignature(){return this._timeSignature}set timeSignature(e){An(e)&&(e=e[0]/e[1]*4),this._timeSignature=e}get loopStart(){return new qn(this.context,this._loopStart,"i").toSeconds()}set loopStart(e){this._loopStart=this.toTicks(e)}get loopEnd(){return new qn(this.context,this._loopEnd,"i").toSeconds()}set loopEnd(e){this._loopEnd=this.toTicks(e)}get loop(){return this._loop.get(this.now())}set loop(e){this._loop.set(e,this.now())}setLoopPoints(e,t){return this.loopStart=e,this.loopEnd=t,this}get swing(){return this._swingAmount}set swing(e){this._swingAmount=e}get swingSubdivision(){return new Ui(this.context,this._swingTicks).toNotation()}set swingSubdivision(e){this._swingTicks=this.toTicks(e)}get position(){const e=this.now(),t=this._clock.getTicksAtTime(e);return new Ui(this.context,t).toBarsBeatsSixteenths()}set position(e){const t=this.toTicks(e);this.ticks=t}get seconds(){return this._clock.seconds}set seconds(e){const t=this.now(),n=this._clock.frequency.timeToTicks(e,t);this.ticks=n}get progress(){if(this.loop){const e=this.now();return(this._clock.getTicksAtTime(e)-this._loopStart)/(this._loopEnd-this._loopStart)}else return 0}get ticks(){return this._clock.ticks}set ticks(e){if(this._clock.ticks!==e){const t=this.now();if(this.state==="started"){const n=this._clock.getTicksAtTime(t),i=this._clock.frequency.getDurationOfTicks(Math.ceil(n)-n,t),r=t+i;this.emit("stop",r),this._clock.setTicksAtTime(e,r),this.emit("start",r,this._clock.getSecondsAtTime(r))}else this._clock.setTicksAtTime(e,t)}}getTicksAtTime(e){return Math.round(this._clock.getTicksAtTime(e))}getSecondsAtTime(e){return this._clock.getSecondsAtTime(e)}get PPQ(){return this._clock.frequency.multiplier}set PPQ(e){this._clock.frequency.multiplier=e}nextSubdivision(e){if(e=this.toTicks(e),this.state!=="started")return 0;{const t=this.now(),n=this.getTicksAtTime(t),i=e-n%e;return this._clock.nextTickTime(i,t)}}syncSignal(e,t){if(!t){const i=this.now();if(e.getValueAtTime(i)!==0){const o=1/(60/this.bpm.getValueAtTime(i)/this.PPQ);t=e.getValueAtTime(i)/o}else t=0}const n=new ot(t);return this.bpm.connect(n),n.connect(e._param),this._syncedSignals.push({initial:e.value,ratio:n,signal:e}),e.value=0,this}unsyncSignal(e){for(let t=this._syncedSignals.length-1;t>=0;t--){const n=this._syncedSignals[t];n.signal===e&&(n.ratio.dispose(),n.signal.value=n.initial,this._syncedSignals.splice(t,1))}return this}dispose(){return super.dispose(),this._clock.dispose(),md(this,"bpm"),this._timeline.dispose(),this._repeatedEvents.dispose(),this}}Ra.mixin(ia);Dl(s=>{s.transport=new ia({context:s})});Pl(s=>{s.transport.dispose()});class Qt extends ye{constructor(e){super(e),this.input=void 0,this._state=new vd("stopped"),this._synced=!1,this._scheduled=[],this._syncedStart=rt,this._syncedStop=rt,this._state.memory=100,this._state.increasing=!0,this._volume=this.output=new sr({context:this.context,mute:e.mute,volume:e.volume}),this.volume=this._volume.volume,Ke(this,"volume"),this.onstop=e.onstop}static getDefaults(){return Object.assign(ye.getDefaults(),{mute:!1,onstop:rt,volume:0})}get state(){return this._synced?this.context.transport.state==="started"?this._state.getValueAtTime(this.context.transport.seconds):"stopped":this._state.getValueAtTime(this.now())}get mute(){return this._volume.mute}set mute(e){this._volume.mute=e}_clampToCurrentTime(e){return this._synced?e:Math.max(e,this.context.currentTime)}start(e,t,n){let i=Bn(e)&&this._synced?this.context.transport.seconds:this.toSeconds(e);if(i=this._clampToCurrentTime(i),!this._synced&&this._state.getValueAtTime(i)==="started")Re(jc(i,this._state.get(i).time),"Start time must be strictly greater than previous start time"),this._state.cancel(i),this._state.setStateAtTime("started",i),this.log("restart",i),this.restart(i,t,n);else if(this.log("start",i),this._state.setStateAtTime("started",i),this._synced){const r=this._state.get(i);r&&(r.offset=this.toSeconds(qr(t,0)),r.duration=n?this.toSeconds(n):void 0);const o=this.context.transport.schedule(a=>{this._start(a,t,n)},i);this._scheduled.push(o),this.context.transport.state==="started"&&this.context.transport.getSecondsAtTime(this.immediate())>i&&this._syncedStart(this.now(),this.context.transport.seconds)}else C_(this.context),this._start(i,t,n);return this}stop(e){let t=Bn(e)&&this._synced?this.context.transport.seconds:this.toSeconds(e);if(t=this._clampToCurrentTime(t),this._state.getValueAtTime(t)==="started"||Ye(this._state.getNextState("started",t))){if(this.log("stop",t),!this._synced)this._stop(t);else{const n=this.context.transport.schedule(this._stop.bind(this),t);this._scheduled.push(n)}this._state.cancel(t),this._state.setStateAtTime("stopped",t)}return this}restart(e,t,n){return e=this.toSeconds(e),this._state.getValueAtTime(e)==="started"&&(this._state.cancel(e),this._restart(e,t,n)),this}sync(){return this._synced||(this._synced=!0,this._syncedStart=(e,t)=>{if(t>0){const n=this._state.get(t);if(n&&n.state==="started"&&n.time!==t){const i=t-this.toSeconds(n.time);let r;n.duration&&(r=this.toSeconds(n.duration)-i),this._start(e,this.toSeconds(n.offset)+i,r)}}},this._syncedStop=e=>{const t=this.context.transport.getSecondsAtTime(Math.max(e-this.sampleTime,0));this._state.getValueAtTime(t)==="started"&&this._stop(e)},this.context.transport.on("start",this._syncedStart),this.context.transport.on("loopStart",this._syncedStart),this.context.transport.on("stop",this._syncedStop),this.context.transport.on("pause",this._syncedStop),this.context.transport.on("loopEnd",this._syncedStop)),this}unsync(){return this._synced&&(this.context.transport.off("stop",this._syncedStop),this.context.transport.off("pause",this._syncedStop),this.context.transport.off("loopEnd",this._syncedStop),this.context.transport.off("start",this._syncedStart),this.context.transport.off("loopStart",this._syncedStart)),this._synced=!1,this._scheduled.forEach(e=>this.context.transport.clear(e)),this._scheduled=[],this._state.cancel(0),this._stop(0),this}dispose(){return super.dispose(),this.onstop=rt,this.unsync(),this._volume.dispose(),this._state.dispose(),this}}class uo extends lo{constructor(){super(Z(uo.getDefaults(),arguments,["url","onload"])),this.name="ToneBufferSource",this._source=this.context.createBufferSource(),this._internalChannels=[this._source],this._sourceStarted=!1,this._sourceStopped=!1;const e=Z(uo.getDefaults(),arguments,["url","onload"]);fi(this._source,this._gainNode),this._source.onended=()=>this._stopSource(),this.playbackRate=new je({context:this.context,param:this._source.playbackRate,units:"positive",value:e.playbackRate}),this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this._buffer=new nt(e.url,e.onload,e.onerror),this._internalChannels.push(this._source)}static getDefaults(){return Object.assign(lo.getDefaults(),{url:new nt,loop:!1,loopEnd:0,loopStart:0,onload:rt,onerror:rt,playbackRate:1})}get fadeIn(){return this._fadeIn}set fadeIn(e){this._fadeIn=e}get fadeOut(){return this._fadeOut}set fadeOut(e){this._fadeOut=e}get curve(){return this._curve}set curve(e){this._curve=e}start(e,t,n,i=1){Re(this.buffer.loaded,"buffer is either not set or not loaded");const r=this.toSeconds(e);this._startGain(r,i),this.loop?t=qr(t,this.loopStart):t=qr(t,0);let o=Math.max(this.toSeconds(t),0);if(this.loop){const a=this.toSeconds(this.loopEnd)||this.buffer.duration,c=this.toSeconds(this.loopStart),l=a-c;mh(o,a)&&(o=(o-c)%l+c),Hn(o,this.buffer.duration)&&(o=0)}if(this._source.buffer=this.buffer.get(),this._source.loopEnd=this.toSeconds(this.loopEnd)||this.buffer.duration,D_(o,this.buffer.duration)&&(this._sourceStarted=!0,this._source.start(r,o)),Ye(n)){let a=this.toSeconds(n);a=Math.max(a,0),this.stop(r+a)}return this}_stopSource(e){!this._sourceStopped&&this._sourceStarted&&(this._sourceStopped=!0,this._source.stop(this.toSeconds(e)),this._onended())}get loopStart(){return this._source.loopStart}set loopStart(e){this._source.loopStart=this.toSeconds(e)}get loopEnd(){return this._source.loopEnd}set loopEnd(e){this._source.loopEnd=this.toSeconds(e)}get buffer(){return this._buffer}set buffer(e){this._buffer.set(e)}get loop(){return this._source.loop}set loop(e){this._source.loop=e,this._sourceStarted&&this.cancelStop()}dispose(){return super.dispose(),this._source.onended=null,this._source.disconnect(),this._buffer.dispose(),this.playbackRate.dispose(),this}}class sa extends Qt{constructor(){super(Z(sa.getDefaults(),arguments,["type"])),this.name="Noise",this._source=null;const e=Z(sa.getDefaults(),arguments,["type"]);this._playbackRate=e.playbackRate,this.type=e.type,this._fadeIn=e.fadeIn,this._fadeOut=e.fadeOut}static getDefaults(){return Object.assign(Qt.getDefaults(),{fadeIn:0,fadeOut:0,playbackRate:1,type:"white"})}get type(){return this._type}set type(e){if(Re(e in tm,"Noise: invalid type: "+e),this._type!==e&&(this._type=e,this.state==="started")){const t=this.now();this._stop(t),this._start(t)}}get playbackRate(){return this._playbackRate}set playbackRate(e){this._playbackRate=e,this._source&&(this._source.playbackRate.value=e)}_start(e){const t=tm[this._type];this._source=new uo({url:t,context:this.context,fadeIn:this._fadeIn,fadeOut:this._fadeOut,loop:!0,onended:()=>this.onstop(this),playbackRate:this._playbackRate}).connect(this.output),this._source.start(this.toSeconds(e),Math.random()*(t.duration-.001))}_stop(e){this._source&&(this._source.stop(this.toSeconds(e)),this._source=null)}get fadeIn(){return this._fadeIn}set fadeIn(e){this._fadeIn=e,this._source&&(this._source.fadeIn=this._fadeIn)}get fadeOut(){return this._fadeOut}set fadeOut(e){this._fadeOut=e,this._source&&(this._source.fadeOut=this._fadeOut)}_restart(e){this._stop(e),this._start(e)}dispose(){return super.dispose(),this._source&&this._source.disconnect(),this}}const Rr=44100*5,wu=2,Ii={brown:null,pink:null,white:null},tm={get brown(){if(!Ii.brown){const s=[];for(let e=0;e<wu;e++){const t=new Float32Array(Rr);s[e]=t;let n=0;for(let i=0;i<Rr;i++){const r=Math.random()*2-1;t[i]=(n+.02*r)/1.02,n=t[i],t[i]*=3.5}}Ii.brown=new nt().fromArray(s)}return Ii.brown},get pink(){if(!Ii.pink){const s=[];for(let e=0;e<wu;e++){const t=new Float32Array(Rr);s[e]=t;let n,i,r,o,a,c,l;n=i=r=o=a=c=l=0;for(let u=0;u<Rr;u++){const h=Math.random()*2-1;n=.99886*n+h*.0555179,i=.99332*i+h*.0750759,r=.969*r+h*.153852,o=.8665*o+h*.3104856,a=.55*a+h*.5329522,c=-.7616*c-h*.016898,t[u]=n+i+r+o+a+c+l+h*.5362,t[u]*=.11,l=h*.115926}}Ii.pink=new nt().fromArray(s)}return Ii.pink},get white(){if(!Ii.white){const s=[];for(let e=0;e<wu;e++){const t=new Float32Array(Rr);s[e]=t;for(let n=0;n<Rr;n++)t[n]=Math.random()*2-1}Ii.white=new nt().fromArray(s)}return Ii.white}};function lr(s,e){return It(this,void 0,void 0,function*(){const t=e/s.context.sampleRate,n=new gd(1,t,s.context.sampleRate);return new s.constructor(Object.assign(s.get(),{frequency:2/t,detune:0,context:n})).toDestination().start(0),(yield n.render()).getChannelData(0)})}class tl extends lo{constructor(){super(Z(tl.getDefaults(),arguments,["frequency","type"])),this.name="ToneOscillatorNode",this._oscillator=this.context.createOscillator(),this._internalChannels=[this._oscillator];const e=Z(tl.getDefaults(),arguments,["frequency","type"]);fi(this._oscillator,this._gainNode),this.type=e.type,this.frequency=new je({context:this.context,param:this._oscillator.frequency,units:"frequency",value:e.frequency}),this.detune=new je({context:this.context,param:this._oscillator.detune,units:"cents",value:e.detune}),Ke(this,["frequency","detune"])}static getDefaults(){return Object.assign(lo.getDefaults(),{detune:0,frequency:440,type:"sine"})}start(e){const t=this.toSeconds(e);return this.log("start",t),this._startGain(t),this._oscillator.start(t),this}_stopSource(e){this._oscillator.stop(e)}setPeriodicWave(e){return this._oscillator.setPeriodicWave(e),this}get type(){return this._oscillator.type}set type(e){this._oscillator.type=e}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._oscillator.disconnect(),this.frequency.dispose(),this.detune.dispose(),this}}class bt extends Qt{constructor(){super(Z(bt.getDefaults(),arguments,["frequency","type"])),this.name="Oscillator",this._oscillator=null;const e=Z(bt.getDefaults(),arguments,["frequency","type"]);this.frequency=new lt({context:this.context,units:"frequency",value:e.frequency}),Ke(this,"frequency"),this.detune=new lt({context:this.context,units:"cents",value:e.detune}),Ke(this,"detune"),this._partials=e.partials,this._partialCount=e.partialCount,this._type=e.type,e.partialCount&&e.type!=="custom"&&(this._type=this.baseType+e.partialCount.toString()),this.phase=e.phase}static getDefaults(){return Object.assign(Qt.getDefaults(),{detune:0,frequency:440,partialCount:0,partials:[],phase:0,type:"sine"})}_start(e){const t=this.toSeconds(e),n=new tl({context:this.context,onended:()=>this.onstop(this)});this._oscillator=n,this._wave?this._oscillator.setPeriodicWave(this._wave):this._oscillator.type=this._type,this._oscillator.connect(this.output),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.start(t)}_stop(e){const t=this.toSeconds(e);this._oscillator&&this._oscillator.stop(t)}_restart(e){const t=this.toSeconds(e);return this.log("restart",t),this._oscillator&&this._oscillator.cancelStop(),this._state.cancel(t),this}syncFrequency(){return this.context.transport.syncSignal(this.frequency),this}unsyncFrequency(){return this.context.transport.unsyncSignal(this.frequency),this}_getCachedPeriodicWave(){if(this._type==="custom")return bt._periodicWaveCache.find(t=>t.phase===this._phase&&BR(t.partials,this._partials));{const e=bt._periodicWaveCache.find(t=>t.type===this._type&&t.phase===this._phase);return this._partialCount=e?e.partialCount:this._partialCount,e}}get type(){return this._type}set type(e){this._type=e;const t=["sine","square","sawtooth","triangle"].indexOf(e)!==-1;if(this._phase===0&&t)this._wave=void 0,this._partialCount=0,this._oscillator!==null&&(this._oscillator.type=e);else{const n=this._getCachedPeriodicWave();if(Ye(n)){const{partials:i,wave:r}=n;this._wave=r,this._partials=i,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave)}else{const[i,r]=this._getRealImaginary(e,this._phase),o=this.context.createPeriodicWave(i,r);this._wave=o,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave),bt._periodicWaveCache.push({imag:r,partialCount:this._partialCount,partials:this._partials,phase:this._phase,real:i,type:this._type,wave:this._wave}),bt._periodicWaveCache.length>100&&bt._periodicWaveCache.shift()}}}get baseType(){return this._type.replace(this.partialCount.toString(),"")}set baseType(e){this.partialCount&&this._type!=="custom"&&e!=="custom"?this.type=e+this.partialCount:this.type=e}get partialCount(){return this._partialCount}set partialCount(e){fs(e,0);let t=this._type;const n=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);if(n&&(t=n[1]),this._type!=="custom")e===0?this.type=t:this.type=t+e.toString();else{const i=new Float32Array(e);this._partials.forEach((r,o)=>i[o]=r),this._partials=Array.from(i),this.type=this._type}}_getRealImaginary(e,t){let i=2048;const r=new Float32Array(i),o=new Float32Array(i);let a=1;if(e==="custom"){if(a=this._partials.length+1,this._partialCount=this._partials.length,i=a,this._partials.length===0)return[r,o]}else{const c=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(e);c?(a=parseInt(c[2],10)+1,this._partialCount=parseInt(c[2],10),e=c[1],a=Math.max(a,2),i=a):this._partialCount=0,this._partials=[]}for(let c=1;c<i;++c){const l=2/(c*Math.PI);let u;switch(e){case"sine":u=c<=a?1:0,this._partials[c-1]=u;break;case"square":u=c&1?2*l:0,this._partials[c-1]=u;break;case"sawtooth":u=l*(c&1?1:-1),this._partials[c-1]=u;break;case"triangle":c&1?u=2*(l*l)*(c-1>>1&1?-1:1):u=0,this._partials[c-1]=u;break;case"custom":u=this._partials[c-1];break;default:throw new TypeError("Oscillator: invalid type: "+e)}u!==0?(r[c]=-u*Math.sin(t*c),o[c]=u*Math.cos(t*c)):(r[c]=0,o[c]=0)}return[r,o]}_inverseFFT(e,t,n){let i=0;const r=e.length;for(let o=0;o<r;o++)i+=e[o]*Math.cos(o*n)+t[o]*Math.sin(o*n);return i}getInitialValue(){const[e,t]=this._getRealImaginary(this._type,0);let n=0;const i=Math.PI*2,r=32;for(let o=0;o<r;o++)n=Math.max(this._inverseFFT(e,t,o/r*i),n);return zR(-this._inverseFFT(e,t,this._phase)/n,-1,1)}get partials(){return this._partials.slice(0,this.partialCount)}set partials(e){this._partials=e,this._partialCount=this._partials.length,e.length&&(this.type="custom")}get phase(){return this._phase*(180/Math.PI)}set phase(e){this._phase=e*Math.PI/180,this.type=this._type}asArray(e=1024){return It(this,void 0,void 0,function*(){return lr(this,e)})}dispose(){return super.dispose(),this._oscillator!==null&&this._oscillator.dispose(),this._wave=void 0,this.frequency.dispose(),this.detune.dispose(),this}}bt._periodicWaveCache=[];class rr extends ye{constructor(){super(Object.assign(Z(rr.getDefaults(),arguments,["context"])))}connect(e,t=0,n=0){return yd(this,e,t,n),this}}class gs extends rr{constructor(){super(Object.assign(Z(gs.getDefaults(),arguments,["mapping","length"]))),this.name="WaveShaper",this._shaper=this.context.createWaveShaper(),this.input=this._shaper,this.output=this._shaper;const e=Z(gs.getDefaults(),arguments,["mapping","length"]);An(e.mapping)||e.mapping instanceof Float32Array?this.curve=Float32Array.from(e.mapping):DR(e.mapping)&&this.setMap(e.mapping,e.length)}static getDefaults(){return Object.assign(lt.getDefaults(),{length:1024})}setMap(e,t=1024){const n=new Float32Array(t);for(let i=0,r=t;i<r;i++){const o=i/(r-1)*2-1;n[i]=e(o,i)}return this.curve=n,this}get curve(){return this._shaper.curve}set curve(e){this._shaper.curve=e}get oversample(){return this._shaper.oversample}set oversample(e){const t=["none","2x","4x"].some(n=>n.includes(e));Re(t,"oversampling must be either 'none', '2x', or '4x'"),this._shaper.oversample=e}dispose(){return super.dispose(),this._shaper.disconnect(),this}}class sI extends rr{constructor(){super(...arguments),this.name="AudioToGain",this._norm=new gs({context:this.context,mapping:e=>(e+1)/2}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}}class _s extends lt{constructor(){super(Object.assign(Z(_s.getDefaults(),arguments,["value"]))),this.name="Multiply",this.override=!1;const e=Z(_s.getDefaults(),arguments,["value"]);this._mult=this.input=this.output=new ot({context:this.context,minValue:e.minValue,maxValue:e.maxValue}),this.factor=this._param=this._mult.gain,this.factor.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(lt.getDefaults(),{value:0})}dispose(){return super.dispose(),this._mult.dispose(),this}}class ra extends Qt{constructor(){super(Z(ra.getDefaults(),arguments,["frequency","type","modulationType"])),this.name="AMOscillator",this._modulationScale=new sI({context:this.context}),this._modulationNode=new ot({context:this.context});const e=Z(ra.getDefaults(),arguments,["frequency","type","modulationType"]);this._carrier=new bt({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase,type:e.type}),this.frequency=this._carrier.frequency,this.detune=this._carrier.detune,this._modulator=new bt({context:this.context,phase:e.phase,type:e.modulationType}),this.harmonicity=new _s({context:this.context,units:"positive",value:e.harmonicity}),this.frequency.chain(this.harmonicity,this._modulator.frequency),this._modulator.chain(this._modulationScale,this._modulationNode.gain),this._carrier.chain(this._modulationNode,this.output),Ke(this,["frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(bt.getDefaults(),{harmonicity:1,modulationType:"square"})}_start(e){this._modulator.start(e),this._carrier.start(e)}_stop(e){this._modulator.stop(e),this._carrier.stop(e)}_restart(e){this._modulator.restart(e),this._carrier.restart(e)}get type(){return this._carrier.type}set type(e){this._carrier.type=e}get baseType(){return this._carrier.baseType}set baseType(e){this._carrier.baseType=e}get partialCount(){return this._carrier.partialCount}set partialCount(e){this._carrier.partialCount=e}get modulationType(){return this._modulator.type}set modulationType(e){this._modulator.type=e}get phase(){return this._carrier.phase}set phase(e){this._carrier.phase=e,this._modulator.phase=e}get partials(){return this._carrier.partials}set partials(e){this._carrier.partials=e}asArray(e=1024){return It(this,void 0,void 0,function*(){return lr(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this._modulationScale.dispose(),this}}class oa extends Qt{constructor(){super(Z(oa.getDefaults(),arguments,["frequency","type","modulationType"])),this.name="FMOscillator",this._modulationNode=new ot({context:this.context,gain:0});const e=Z(oa.getDefaults(),arguments,["frequency","type","modulationType"]);this._carrier=new bt({context:this.context,detune:e.detune,frequency:0,onstop:()=>this.onstop(this),phase:e.phase,type:e.type}),this.detune=this._carrier.detune,this.frequency=new lt({context:this.context,units:"frequency",value:e.frequency}),this._modulator=new bt({context:this.context,phase:e.phase,type:e.modulationType}),this.harmonicity=new _s({context:this.context,units:"positive",value:e.harmonicity}),this.modulationIndex=new _s({context:this.context,units:"positive",value:e.modulationIndex}),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output),this.detune.connect(this._modulator.detune),Ke(this,["modulationIndex","frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(bt.getDefaults(),{harmonicity:1,modulationIndex:2,modulationType:"square"})}_start(e){this._modulator.start(e),this._carrier.start(e)}_stop(e){this._modulator.stop(e),this._carrier.stop(e)}_restart(e){return this._modulator.restart(e),this._carrier.restart(e),this}get type(){return this._carrier.type}set type(e){this._carrier.type=e}get baseType(){return this._carrier.baseType}set baseType(e){this._carrier.baseType=e}get partialCount(){return this._carrier.partialCount}set partialCount(e){this._carrier.partialCount=e}get modulationType(){return this._modulator.type}set modulationType(e){this._modulator.type=e}get phase(){return this._carrier.phase}set phase(e){this._carrier.phase=e,this._modulator.phase=e}get partials(){return this._carrier.partials}set partials(e){this._carrier.partials=e}asArray(e=1024){return It(this,void 0,void 0,function*(){return lr(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this.modulationIndex.dispose(),this}}class ho extends Qt{constructor(){super(Z(ho.getDefaults(),arguments,["frequency","width"])),this.name="PulseOscillator",this._widthGate=new ot({context:this.context,gain:0}),this._thresh=new gs({context:this.context,mapping:t=>t<=0?-1:1});const e=Z(ho.getDefaults(),arguments,["frequency","width"]);this.width=new lt({context:this.context,units:"audioRange",value:e.width}),this._triangle=new bt({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase,type:"triangle"}),this.frequency=this._triangle.frequency,this.detune=this._triangle.detune,this._triangle.chain(this._thresh,this.output),this.width.chain(this._widthGate,this._thresh),Ke(this,["width","frequency","detune"])}static getDefaults(){return Object.assign(Qt.getDefaults(),{detune:0,frequency:440,phase:0,type:"pulse",width:.2})}_start(e){e=this.toSeconds(e),this._triangle.start(e),this._widthGate.gain.setValueAtTime(1,e)}_stop(e){e=this.toSeconds(e),this._triangle.stop(e),this._widthGate.gain.cancelScheduledValues(e),this._widthGate.gain.setValueAtTime(0,e)}_restart(e){this._triangle.restart(e),this._widthGate.gain.cancelScheduledValues(e),this._widthGate.gain.setValueAtTime(1,e)}get phase(){return this._triangle.phase}set phase(e){this._triangle.phase=e}get type(){return"pulse"}get baseType(){return"pulse"}get partials(){return[]}get partialCount(){return 0}set carrierType(e){this._triangle.type=e}asArray(e=1024){return It(this,void 0,void 0,function*(){return lr(this,e)})}dispose(){return super.dispose(),this._triangle.dispose(),this.width.dispose(),this._widthGate.dispose(),this._thresh.dispose(),this}}class aa extends Qt{constructor(){super(Z(aa.getDefaults(),arguments,["frequency","type","spread"])),this.name="FatOscillator",this._oscillators=[];const e=Z(aa.getDefaults(),arguments,["frequency","type","spread"]);this.frequency=new lt({context:this.context,units:"frequency",value:e.frequency}),this.detune=new lt({context:this.context,units:"cents",value:e.detune}),this._spread=e.spread,this._type=e.type,this._phase=e.phase,this._partials=e.partials,this._partialCount=e.partialCount,this.count=e.count,Ke(this,["frequency","detune"])}static getDefaults(){return Object.assign(bt.getDefaults(),{count:3,spread:20,type:"sawtooth"})}_start(e){e=this.toSeconds(e),this._forEach(t=>t.start(e))}_stop(e){e=this.toSeconds(e),this._forEach(t=>t.stop(e))}_restart(e){this._forEach(t=>t.restart(e))}_forEach(e){for(let t=0;t<this._oscillators.length;t++)e(this._oscillators[t],t)}get type(){return this._type}set type(e){this._type=e,this._forEach(t=>t.type=e)}get spread(){return this._spread}set spread(e){if(this._spread=e,this._oscillators.length>1){const t=-e/2,n=e/(this._oscillators.length-1);this._forEach((i,r)=>i.detune.value=t+n*r)}}get count(){return this._oscillators.length}set count(e){if(fs(e,1),this._oscillators.length!==e){this._forEach(t=>t.dispose()),this._oscillators=[];for(let t=0;t<e;t++){const n=new bt({context:this.context,volume:-6-e*1.1,type:this._type,phase:this._phase+t/e*360,partialCount:this._partialCount,onstop:t===0?()=>this.onstop(this):rt});this.type==="custom"&&(n.partials=this._partials),this.frequency.connect(n.frequency),this.detune.connect(n.detune),n.detune.overridden=!1,n.connect(this.output),this._oscillators[t]=n}this.spread=this._spread,this.state==="started"&&this._forEach(t=>t.start())}}get phase(){return this._phase}set phase(e){this._phase=e,this._forEach((t,n)=>t.phase=this._phase+n/this.count*360)}get baseType(){return this._oscillators[0].baseType}set baseType(e){this._forEach(t=>t.baseType=e),this._type=this._oscillators[0].type}get partials(){return this._oscillators[0].partials}set partials(e){this._partials=e,this._partialCount=this._partials.length,e.length&&(this._type="custom",this._forEach(t=>t.partials=e))}get partialCount(){return this._oscillators[0].partialCount}set partialCount(e){this._partialCount=e,this._forEach(t=>t.partialCount=e),this._type=this._oscillators[0].type}asArray(e=1024){return It(this,void 0,void 0,function*(){return lr(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this._forEach(e=>e.dispose()),this}}class ca extends Qt{constructor(){super(Z(ca.getDefaults(),arguments,["frequency","modulationFrequency"])),this.name="PWMOscillator",this.sourceType="pwm",this._scale=new _s({context:this.context,value:2});const e=Z(ca.getDefaults(),arguments,["frequency","modulationFrequency"]);this._pulse=new ho({context:this.context,frequency:e.modulationFrequency}),this._pulse.carrierType="sine",this.modulationFrequency=this._pulse.frequency,this._modulator=new bt({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase}),this.frequency=this._modulator.frequency,this.detune=this._modulator.detune,this._modulator.chain(this._scale,this._pulse.width),this._pulse.connect(this.output),Ke(this,["modulationFrequency","frequency","detune"])}static getDefaults(){return Object.assign(Qt.getDefaults(),{detune:0,frequency:440,modulationFrequency:.4,phase:0,type:"pwm"})}_start(e){e=this.toSeconds(e),this._modulator.start(e),this._pulse.start(e)}_stop(e){e=this.toSeconds(e),this._modulator.stop(e),this._pulse.stop(e)}_restart(e){this._modulator.restart(e),this._pulse.restart(e)}get type(){return"pwm"}get baseType(){return"pwm"}get partials(){return[]}get partialCount(){return 0}get phase(){return this._modulator.phase}set phase(e){this._modulator.phase=e}asArray(e=1024){return It(this,void 0,void 0,function*(){return lr(this,e)})}dispose(){return super.dispose(),this._pulse.dispose(),this._scale.dispose(),this._modulator.dispose(),this}}const nm={am:ra,fat:aa,fm:oa,oscillator:bt,pulse:ho,pwm:ca};class la extends Qt{constructor(){super(Z(la.getDefaults(),arguments,["frequency","type"])),this.name="OmniOscillator";const e=Z(la.getDefaults(),arguments,["frequency","type"]);this.frequency=new lt({context:this.context,units:"frequency",value:e.frequency}),this.detune=new lt({context:this.context,units:"cents",value:e.detune}),Ke(this,["frequency","detune"]),this.set(e)}static getDefaults(){return Object.assign(bt.getDefaults(),oa.getDefaults(),ra.getDefaults(),aa.getDefaults(),ho.getDefaults(),ca.getDefaults())}_start(e){this._oscillator.start(e)}_stop(e){this._oscillator.stop(e)}_restart(e){return this._oscillator.restart(e),this}get type(){let e="";return["am","fm","fat"].some(t=>this._sourceType===t)&&(e=this._sourceType),e+this._oscillator.type}set type(e){e.substr(0,2)==="fm"?(this._createNewOscillator("fm"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(2)):e.substr(0,2)==="am"?(this._createNewOscillator("am"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(2)):e.substr(0,3)==="fat"?(this._createNewOscillator("fat"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(3)):e==="pwm"?(this._createNewOscillator("pwm"),this._oscillator=this._oscillator):e==="pulse"?this._createNewOscillator("pulse"):(this._createNewOscillator("oscillator"),this._oscillator=this._oscillator,this._oscillator.type=e)}get partials(){return this._oscillator.partials}set partials(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partials=e)}get partialCount(){return this._oscillator.partialCount}set partialCount(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partialCount=e)}set(e){return Reflect.has(e,"type")&&e.type&&(this.type=e.type),super.set(e),this}_createNewOscillator(e){if(e!==this._sourceType){this._sourceType=e;const t=nm[e],n=this.now();if(this._oscillator){const i=this._oscillator;i.stop(n),this.context.setTimeout(()=>i.dispose(),this.blockTime)}this._oscillator=new t({context:this.context}),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.connect(this.output),this._oscillator.onstop=()=>this.onstop(this),this.state==="started"&&this._oscillator.start(n)}}get phase(){return this._oscillator.phase}set phase(e){this._oscillator.phase=e}get sourceType(){return this._sourceType}set sourceType(e){let t="sine";this._oscillator.type!=="pwm"&&this._oscillator.type!=="pulse"&&(t=this._oscillator.type),e==="fm"?this.type="fm"+t:e==="am"?this.type="am"+t:e==="fat"?this.type="fat"+t:e==="oscillator"?this.type=t:e==="pulse"?this.type="pulse":e==="pwm"&&(this.type="pwm")}_getOscType(e,t){return e instanceof nm[t]}get baseType(){return this._oscillator.baseType}set baseType(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&e!=="pulse"&&e!=="pwm"&&(this._oscillator.baseType=e)}get width(){if(this._getOscType(this._oscillator,"pulse"))return this._oscillator.width}get count(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.count}set count(e){this._getOscType(this._oscillator,"fat")&&Wi(e)&&(this._oscillator.count=e)}get spread(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.spread}set spread(e){this._getOscType(this._oscillator,"fat")&&Wi(e)&&(this._oscillator.spread=e)}get modulationType(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.modulationType}set modulationType(e){(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))&&di(e)&&(this._oscillator.modulationType=e)}get modulationIndex(){if(this._getOscType(this._oscillator,"fm"))return this._oscillator.modulationIndex}get harmonicity(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.harmonicity}get modulationFrequency(){if(this._getOscType(this._oscillator,"pwm"))return this._oscillator.modulationFrequency}asArray(e=1024){return It(this,void 0,void 0,function*(){return lr(this,e)})}dispose(){return super.dispose(),this.detune.dispose(),this.frequency.dispose(),this._oscillator.dispose(),this}}class Md extends lt{constructor(){super(Object.assign(Z(Md.getDefaults(),arguments,["value"]))),this.override=!1,this.name="Add",this._sum=new ot({context:this.context}),this.input=this._sum,this.output=this._sum,this.addend=this._param,ps(this._constantSource,this._sum)}static getDefaults(){return Object.assign(lt.getDefaults(),{value:0})}dispose(){return super.dispose(),this._sum.dispose(),this}}class nl extends rr{constructor(){super(Object.assign(Z(nl.getDefaults(),arguments,["min","max"]))),this.name="Scale";const e=Z(nl.getDefaults(),arguments,["min","max"]);this._mult=this.input=new _s({context:this.context,value:e.max-e.min}),this._add=this.output=new Md({context:this.context,value:e.min}),this._min=e.min,this._max=e.max,this.input.connect(this.output)}static getDefaults(){return Object.assign(rr.getDefaults(),{max:1,min:0})}get min(){return this._min}set min(e){this._min=e,this._setRange()}get max(){return this._max}set max(e){this._max=e,this._setRange()}_setRange(){this._add.value=this._min,this._mult.value=this._max-this._min}dispose(){return super.dispose(),this._add.dispose(),this._mult.dispose(),this}}function B_(s,e=1/0){const t=new WeakMap;return function(n,i){Reflect.defineProperty(n,i,{configurable:!0,enumerable:!0,get:function(){return t.get(this)},set:function(r){fs(r,s,e),t.set(this,r)}})}}function Ki(s,e=1/0){const t=new WeakMap;return function(n,i){Reflect.defineProperty(n,i,{configurable:!0,enumerable:!0,get:function(){return t.get(this)},set:function(r){fs(this.toSeconds(r),s,e),t.set(this,r)}})}}class ua extends Qt{constructor(){super(Z(ua.getDefaults(),arguments,["url","onload"])),this.name="Player",this._activeSources=new Set;const e=Z(ua.getDefaults(),arguments,["url","onload"]);this._buffer=new nt({onload:this._onload.bind(this,e.onload),onerror:e.onerror,reverse:e.reverse,url:e.url}),this.autostart=e.autostart,this._loop=e.loop,this._loopStart=e.loopStart,this._loopEnd=e.loopEnd,this._playbackRate=e.playbackRate,this.fadeIn=e.fadeIn,this.fadeOut=e.fadeOut}static getDefaults(){return Object.assign(Qt.getDefaults(),{autostart:!1,fadeIn:0,fadeOut:0,loop:!1,loopEnd:0,loopStart:0,onload:rt,onerror:rt,playbackRate:1,reverse:!1})}load(e){return It(this,void 0,void 0,function*(){return yield this._buffer.load(e),this._onload(),this})}_onload(e=rt){e(),this.autostart&&this.start()}_onSourceEnd(e){this.onstop(this),this._activeSources.delete(e),this._activeSources.size===0&&!this._synced&&this._state.getValueAtTime(this.now())==="started"&&(this._state.cancel(this.now()),this._state.setStateAtTime("stopped",this.now()))}start(e,t,n){return super.start(e,t,n),this}_start(e,t,n){this._loop?t=qr(t,this._loopStart):t=qr(t,0);const i=this.toSeconds(t),r=n;n=qr(n,Math.max(this._buffer.duration-i,0));let o=this.toSeconds(n);o=o/this._playbackRate,e=this.toSeconds(e);const a=new uo({url:this._buffer,context:this.context,fadeIn:this.fadeIn,fadeOut:this.fadeOut,loop:this._loop,loopEnd:this._loopEnd,loopStart:this._loopStart,onended:this._onSourceEnd.bind(this),playbackRate:this._playbackRate}).connect(this.output);!this._loop&&!this._synced&&(this._state.cancel(e+o),this._state.setStateAtTime("stopped",e+o,{implicitEnd:!0})),this._activeSources.add(a),this._loop&&Bn(r)?a.start(e,i):a.start(e,i,o-this.toSeconds(this.fadeOut))}_stop(e){const t=this.toSeconds(e);this._activeSources.forEach(n=>n.stop(t))}restart(e,t,n){return super.restart(e,t,n),this}_restart(e,t,n){this._stop(e),this._start(e,t,n)}seek(e,t){const n=this.toSeconds(t);if(this._state.getValueAtTime(n)==="started"){const i=this.toSeconds(e);this._stop(n),this._start(n,i)}return this}setLoopPoints(e,t){return this.loopStart=e,this.loopEnd=t,this}get loopStart(){return this._loopStart}set loopStart(e){this._loopStart=e,this.buffer.loaded&&fs(this.toSeconds(e),0,this.buffer.duration),this._activeSources.forEach(t=>{t.loopStart=e})}get loopEnd(){return this._loopEnd}set loopEnd(e){this._loopEnd=e,this.buffer.loaded&&fs(this.toSeconds(e),0,this.buffer.duration),this._activeSources.forEach(t=>{t.loopEnd=e})}get buffer(){return this._buffer}set buffer(e){this._buffer.set(e)}get loop(){return this._loop}set loop(e){if(this._loop!==e&&(this._loop=e,this._activeSources.forEach(t=>{t.loop=e}),e)){const t=this._state.getNextState("stopped",this.now());t&&this._state.cancel(t.time)}}get playbackRate(){return this._playbackRate}set playbackRate(e){this._playbackRate=e;const t=this.now(),n=this._state.getNextState("stopped",t);n&&n.implicitEnd&&(this._state.cancel(n.time),this._activeSources.forEach(i=>i.cancelStop())),this._activeSources.forEach(i=>{i.playbackRate.setValueAtTime(e,t)})}get reverse(){return this._buffer.reverse}set reverse(e){this._buffer.reverse=e}get loaded(){return this._buffer.loaded}dispose(){return super.dispose(),this._activeSources.forEach(e=>e.dispose()),this._activeSources.clear(),this._buffer.dispose(),this}}ti([Ki(0)],ua.prototype,"fadeIn",void 0);ti([Ki(0)],ua.prototype,"fadeOut",void 0);class rI extends rr{constructor(){super(...arguments),this.name="GainToAudio",this._norm=new gs({context:this.context,mapping:e=>Math.abs(e)*2-1}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}}class pi extends ye{constructor(){super(Z(pi.getDefaults(),arguments,["attack","decay","sustain","release"])),this.name="Envelope",this._sig=new lt({context:this.context,value:0}),this.output=this._sig,this.input=void 0;const e=Z(pi.getDefaults(),arguments,["attack","decay","sustain","release"]);this.attack=e.attack,this.decay=e.decay,this.sustain=e.sustain,this.release=e.release,this.attackCurve=e.attackCurve,this.releaseCurve=e.releaseCurve,this.decayCurve=e.decayCurve}static getDefaults(){return Object.assign(ye.getDefaults(),{attack:.01,attackCurve:"linear",decay:.1,decayCurve:"exponential",release:1,releaseCurve:"exponential",sustain:.5})}get value(){return this.getValueAtTime(this.now())}_getCurve(e,t){if(di(e))return e;{let n;for(n in hc)if(hc[n][t]===e)return n;return e}}_setCurve(e,t,n){if(di(n)&&Reflect.has(hc,n)){const i=hc[n];Ks(i)?e!=="_decayCurve"&&(this[e]=i[t]):this[e]=i}else if(An(n)&&e!=="_decayCurve")this[e]=n;else throw new Error("Envelope: invalid curve: "+n)}get attackCurve(){return this._getCurve(this._attackCurve,"In")}set attackCurve(e){this._setCurve("_attackCurve","In",e)}get releaseCurve(){return this._getCurve(this._releaseCurve,"Out")}set releaseCurve(e){this._setCurve("_releaseCurve","Out",e)}get decayCurve(){return this._decayCurve}set decayCurve(e){Re(["linear","exponential"].some(t=>t===e),`Invalid envelope curve: ${e}`),this._decayCurve=e}triggerAttack(e,t=1){this.log("triggerAttack",e,t),e=this.toSeconds(e);let i=this.toSeconds(this.attack);const r=this.toSeconds(this.decay),o=this.getValueAtTime(e);if(o>0){const a=1/i;i=(1-o)/a}if(i<this.sampleTime)this._sig.cancelScheduledValues(e),this._sig.setValueAtTime(t,e);else if(this._attackCurve==="linear")this._sig.linearRampTo(t,i,e);else if(this._attackCurve==="exponential")this._sig.targetRampTo(t,i,e);else{this._sig.cancelAndHoldAtTime(e);let a=this._attackCurve;for(let c=1;c<a.length;c++)if(a[c-1]<=o&&o<=a[c]){a=this._attackCurve.slice(c),a[0]=o;break}this._sig.setValueCurveAtTime(a,e,i,t)}if(r&&this.sustain<1){const a=t*this.sustain,c=e+i;this.log("decay",c),this._decayCurve==="linear"?this._sig.linearRampToValueAtTime(a,r+c):this._sig.exponentialApproachValueAtTime(a,c,r)}return this}triggerRelease(e){this.log("triggerRelease",e),e=this.toSeconds(e);const t=this.getValueAtTime(e);if(t>0){const n=this.toSeconds(this.release);n<this.sampleTime?this._sig.setValueAtTime(0,e):this._releaseCurve==="linear"?this._sig.linearRampTo(0,n,e):this._releaseCurve==="exponential"?this._sig.targetRampTo(0,n,e):(Re(An(this._releaseCurve),"releaseCurve must be either 'linear', 'exponential' or an array"),this._sig.cancelAndHoldAtTime(e),this._sig.setValueCurveAtTime(this._releaseCurve,e,n,t))}return this}getValueAtTime(e){return this._sig.getValueAtTime(e)}triggerAttackRelease(e,t,n=1){return t=this.toSeconds(t),this.triggerAttack(t,n),this.triggerRelease(t+this.toSeconds(e)),this}cancel(e){return this._sig.cancelScheduledValues(this.toSeconds(e)),this}connect(e,t=0,n=0){return yd(this,e,t,n),this}asArray(e=1024){return It(this,void 0,void 0,function*(){const t=e/this.context.sampleRate,n=new gd(1,t,this.context.sampleRate),i=this.toSeconds(this.attack)+this.toSeconds(this.decay),r=i+this.toSeconds(this.release),o=r*.1,a=r+o,c=new this.constructor(Object.assign(this.get(),{attack:t*this.toSeconds(this.attack)/a,decay:t*this.toSeconds(this.decay)/a,release:t*this.toSeconds(this.release)/a,context:n}));return c._sig.toDestination(),c.triggerAttackRelease(t*(i+o)/a,0),(yield n.render()).getChannelData(0)})}dispose(){return super.dispose(),this._sig.dispose(),this}}ti([Ki(0)],pi.prototype,"attack",void 0);ti([Ki(0)],pi.prototype,"decay",void 0);ti([B_(0,1)],pi.prototype,"sustain",void 0);ti([Ki(0)],pi.prototype,"release",void 0);const hc=(()=>{let e,t;const n=[];for(e=0;e<128;e++)n[e]=Math.sin(e/(128-1)*(Math.PI/2));const i=[],r=6.4;for(e=0;e<128-1;e++){t=e/(128-1);const d=Math.sin(t*(Math.PI*2)*r-Math.PI/2)+1;i[e]=d/10+t*.83}i[128-1]=1;const o=[],a=5;for(e=0;e<128;e++)o[e]=Math.ceil(e/(128-1)*a)/a;const c=[];for(e=0;e<128;e++)t=e/(128-1),c[e]=.5*(1-Math.cos(Math.PI*t));const l=[];for(e=0;e<128;e++){t=e/(128-1);const d=Math.pow(t,3)*4+.2,f=Math.cos(d*Math.PI*2*t);l[e]=Math.abs(f*(1-t))}function u(d){const f=new Array(d.length);for(let m=0;m<d.length;m++)f[m]=1-d[m];return f}function h(d){return d.slice(0).reverse()}return{bounce:{In:u(l),Out:l},cosine:{In:n,Out:h(n)},exponential:"exponential",linear:"linear",ripple:{In:i,Out:u(i)},sine:{In:c,Out:u(c)},step:{In:o,Out:u(o)}}})();class Zn extends ye{constructor(){super(Z(Zn.getDefaults(),arguments)),this._scheduledEvents=[],this._synced=!1,this._original_triggerAttack=this.triggerAttack,this._original_triggerRelease=this.triggerRelease;const e=Z(Zn.getDefaults(),arguments);this._volume=this.output=new sr({context:this.context,volume:e.volume}),this.volume=this._volume.volume,Ke(this,"volume")}static getDefaults(){return Object.assign(ye.getDefaults(),{volume:0})}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",0)),this}_syncState(){let e=!1;return this._synced||(this._synced=!0,e=!0),e}_syncMethod(e,t){const n=this["_original_"+e]=this[e];this[e]=(...i)=>{const r=i[t],o=this.context.transport.schedule(a=>{i[t]=a,n.apply(this,i)},r);this._scheduledEvents.push(o)}}unsync(){return this._scheduledEvents.forEach(e=>this.context.transport.clear(e)),this._scheduledEvents=[],this._synced&&(this._synced=!1,this.triggerAttack=this._original_triggerAttack,this.triggerRelease=this._original_triggerRelease),this}triggerAttackRelease(e,t,n,i){const r=this.toSeconds(n),o=this.toSeconds(t);return this.triggerAttack(e,r,i),this.triggerRelease(r+o),this}dispose(){return super.dispose(),this._volume.dispose(),this.unsync(),this._scheduledEvents=[],this}}class or extends Zn{constructor(){super(Z(or.getDefaults(),arguments));const e=Z(or.getDefaults(),arguments);this.portamento=e.portamento,this.onsilence=e.onsilence}static getDefaults(){return Object.assign(Zn.getDefaults(),{detune:0,onsilence:rt,portamento:0})}triggerAttack(e,t,n=1){this.log("triggerAttack",e,t,n);const i=this.toSeconds(t);return this._triggerEnvelopeAttack(i,n),this.setNote(e,i),this}triggerRelease(e){this.log("triggerRelease",e);const t=this.toSeconds(e);return this._triggerEnvelopeRelease(t),this}setNote(e,t){const n=this.toSeconds(t),i=e instanceof wn?e.toFrequency():e;if(this.portamento>0&&this.getLevelAtTime(n)>.05){const r=this.toSeconds(this.portamento);this.frequency.exponentialRampTo(i,r,n)}else this.frequency.setValueAtTime(i,n);return this}}ti([Ki(0)],or.prototype,"portamento",void 0);class Ll extends pi{constructor(){super(Z(Ll.getDefaults(),arguments,["attack","decay","sustain","release"])),this.name="AmplitudeEnvelope",this._gainNode=new ot({context:this.context,gain:0}),this.output=this._gainNode,this.input=this._gainNode,this._sig.connect(this._gainNode.gain),this.output=this._gainNode,this.input=this._gainNode}dispose(){return super.dispose(),this._gainNode.dispose(),this}}class Xi extends or{constructor(){super(Z(Xi.getDefaults(),arguments)),this.name="Synth";const e=Z(Xi.getDefaults(),arguments);this.oscillator=new la(Object.assign({context:this.context,detune:e.detune,onstop:()=>this.onsilence(this)},e.oscillator)),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.envelope=new Ll(Object.assign({context:this.context},e.envelope)),this.oscillator.chain(this.envelope,this.output),Ke(this,["oscillator","frequency","detune","envelope"])}static getDefaults(){return Object.assign(or.getDefaults(),{envelope:Object.assign(ta(pi.getDefaults(),Object.keys(ye.getDefaults())),{attack:.005,decay:.1,release:1,sustain:.3}),oscillator:Object.assign(ta(la.getDefaults(),[...Object.keys(Qt.getDefaults()),"frequency","detune"]),{type:"triangle"})})}_triggerEnvelopeAttack(e,t){if(this.envelope.triggerAttack(e,t),this.oscillator.start(e),this.envelope.sustain===0){const n=this.toSeconds(this.envelope.attack),i=this.toSeconds(this.envelope.decay);this.oscillator.stop(e+n+i)}}_triggerEnvelopeRelease(e){this.envelope.triggerRelease(e),this.oscillator.stop(e+this.toSeconds(this.envelope.release))}getLevelAtTime(e){return e=this.toSeconds(e),this.envelope.getValueAtTime(e)}dispose(){return super.dispose(),this.oscillator.dispose(),this.envelope.dispose(),this}}class ha extends ye{constructor(){super(Z(ha.getDefaults(),arguments,["frequency","type"])),this.name="BiquadFilter";const e=Z(ha.getDefaults(),arguments,["frequency","type"]);this._filter=this.context.createBiquadFilter(),this.input=this.output=this._filter,this.Q=new je({context:this.context,units:"number",value:e.Q,param:this._filter.Q}),this.frequency=new je({context:this.context,units:"frequency",value:e.frequency,param:this._filter.frequency}),this.detune=new je({context:this.context,units:"cents",value:e.detune,param:this._filter.detune}),this.gain=new je({context:this.context,units:"decibels",convert:!1,value:e.gain,param:this._filter.gain}),this.type=e.type}static getDefaults(){return Object.assign(ye.getDefaults(),{Q:1,type:"lowpass",frequency:350,detune:0,gain:0})}get type(){return this._filter.type}set type(e){Re(["lowpass","highpass","bandpass","lowshelf","highshelf","notch","allpass","peaking"].indexOf(e)!==-1,`Invalid filter type: ${e}`),this._filter.type=e}getFrequencyResponse(e=128){const t=new Float32Array(e);for(let o=0;o<e;o++){const c=Math.pow(o/e,2)*(2e4-20)+20;t[o]=c}const n=new Float32Array(e),i=new Float32Array(e),r=this.context.createBiquadFilter();return r.type=this.type,r.Q.value=this.Q.value,r.frequency.value=this.frequency.value,r.gain.value=this.gain.value,r.getFrequencyResponse(t,n,i),n}dispose(){return super.dispose(),this._filter.disconnect(),this.Q.dispose(),this.frequency.dispose(),this.gain.dispose(),this.detune.dispose(),this}}class il extends ye{constructor(){super(Z(il.getDefaults(),arguments,["frequency","type","rolloff"])),this.name="Filter",this.input=new ot({context:this.context}),this.output=new ot({context:this.context}),this._filters=[];const e=Z(il.getDefaults(),arguments,["frequency","type","rolloff"]);this._filters=[],this.Q=new lt({context:this.context,units:"positive",value:e.Q}),this.frequency=new lt({context:this.context,units:"frequency",value:e.frequency}),this.detune=new lt({context:this.context,units:"cents",value:e.detune}),this.gain=new lt({context:this.context,units:"decibels",convert:!1,value:e.gain}),this._type=e.type,this.rolloff=e.rolloff,Ke(this,["detune","frequency","gain","Q"])}static getDefaults(){return Object.assign(ye.getDefaults(),{Q:1,detune:0,frequency:350,gain:0,rolloff:-12,type:"lowpass"})}get type(){return this._type}set type(e){Re(["lowpass","highpass","bandpass","lowshelf","highshelf","notch","allpass","peaking"].indexOf(e)!==-1,`Invalid filter type: ${e}`),this._type=e,this._filters.forEach(n=>n.type=e)}get rolloff(){return this._rolloff}set rolloff(e){const t=Wi(e)?e:parseInt(e,10),n=[-12,-24,-48,-96];let i=n.indexOf(t);Re(i!==-1,`rolloff can only be ${n.join(", ")}`),i+=1,this._rolloff=t,this.input.disconnect(),this._filters.forEach(r=>r.disconnect()),this._filters=new Array(i);for(let r=0;r<i;r++){const o=new ha({context:this.context});o.type=this._type,this.frequency.connect(o.frequency),this.detune.connect(o.detune),this.Q.connect(o.Q),this.gain.connect(o.gain),this._filters[r]=o}this._internalChannels=this._filters,ps(this.input,...this._internalChannels,this.output)}getFrequencyResponse(e=128){const t=new ha({frequency:this.frequency.value,gain:this.gain.value,Q:this.Q.value,type:this._type,detune:this.detune.value}),n=new Float32Array(e).map(()=>1);return this._filters.forEach(()=>{t.getFrequencyResponse(e).forEach((r,o)=>n[o]*=r)}),t.dispose(),n}dispose(){return super.dispose(),this._filters.forEach(e=>{e.dispose()}),md(this,["detune","frequency","gain","Q"]),this.frequency.dispose(),this.Q.dispose(),this.detune.dispose(),this.gain.dispose(),this}}class fo extends Xi{constructor(){super(Z(fo.getDefaults(),arguments)),this.name="MembraneSynth",this.portamento=0;const e=Z(fo.getDefaults(),arguments);this.pitchDecay=e.pitchDecay,this.octaves=e.octaves,Ke(this,["oscillator","envelope"])}static getDefaults(){return Qs(or.getDefaults(),Xi.getDefaults(),{envelope:{attack:.001,attackCurve:"exponential",decay:.4,release:1.4,sustain:.01},octaves:10,oscillator:{type:"sine"},pitchDecay:.05})}setNote(e,t){const n=this.toSeconds(t),i=this.toFrequency(e instanceof wn?e.toFrequency():e),r=i*this.octaves;return this.oscillator.frequency.setValueAtTime(r,n),this.oscillator.frequency.exponentialRampToValueAtTime(i,n+this.toSeconds(this.pitchDecay)),this}dispose(){return super.dispose(),this}}ti([B_(0)],fo.prototype,"octaves",void 0);ti([Ki(0)],fo.prototype,"pitchDecay",void 0);let oI=class gh extends Zn{constructor(){super(Z(gh.getDefaults(),arguments)),this.name="NoiseSynth";const e=Z(gh.getDefaults(),arguments);this.noise=new sa(Object.assign({context:this.context},e.noise)),this.envelope=new Ll(Object.assign({context:this.context},e.envelope)),this.noise.chain(this.envelope,this.output)}static getDefaults(){return Object.assign(Zn.getDefaults(),{envelope:Object.assign(ta(pi.getDefaults(),Object.keys(ye.getDefaults())),{decay:.1,sustain:0}),noise:Object.assign(ta(sa.getDefaults(),Object.keys(Qt.getDefaults())),{type:"white"})})}triggerAttack(e,t=1){return e=this.toSeconds(e),this.envelope.triggerAttack(e,t),this.noise.start(e),this.envelope.sustain===0&&this.noise.stop(e+this.toSeconds(this.envelope.attack)+this.toSeconds(this.envelope.decay)),this}triggerRelease(e){return e=this.toSeconds(e),this.envelope.triggerRelease(e),this.noise.stop(e+this.toSeconds(this.envelope.release)),this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",0),this._syncMethod("triggerRelease",0)),this}triggerAttackRelease(e,t,n=1){return t=this.toSeconds(t),e=this.toSeconds(e),this.triggerAttack(t,n),this.triggerRelease(t+e),this}dispose(){return super.dispose(),this.noise.dispose(),this.envelope.dispose(),this}};const bd=new Set;function Td(s){bd.add(s)}function V_(s,e){const t=`registerProcessor("${s}", ${e})`;bd.add(t)}function aI(){return Array.from(bd).join(`
`)}class cI extends ye{constructor(e){super(e),this.name="ToneAudioWorklet",this.workletOptions={},this.onprocessorerror=rt;const t=URL.createObjectURL(new Blob([aI()],{type:"text/javascript"})),n=this._audioWorkletName();this._dummyGain=this.context.createGain(),this._dummyParam=this._dummyGain.gain,this.context.addAudioWorkletModule(t,n).then(()=>{this.disposed||(this._worklet=this.context.createAudioWorkletNode(n,this.workletOptions),this._worklet.onprocessorerror=this.onprocessorerror.bind(this),this.onReady(this._worklet))})}dispose(){return super.dispose(),this._dummyGain.disconnect(),this._worklet&&(this._worklet.port.postMessage("dispose"),this._worklet.disconnect()),this}}const lI=`
	/**
	 * The base AudioWorkletProcessor for use in Tone.js. Works with the [[ToneAudioWorklet]]. 
	 */
	class ToneAudioWorkletProcessor extends AudioWorkletProcessor {

		constructor(options) {
			
			super(options);
			/**
			 * If the processor was disposed or not. Keep alive until it's disposed.
			 */
			this.disposed = false;
		   	/** 
			 * The number of samples in the processing block
			 */
			this.blockSize = 128;
			/**
			 * the sample rate
			 */
			this.sampleRate = sampleRate;

			this.port.onmessage = (event) => {
				// when it receives a dispose 
				if (event.data === "dispose") {
					this.disposed = true;
				}
			};
		}
	}
`;Td(lI);const uI=`
	/**
	 * Abstract class for a single input/output processor. 
	 * has a 'generate' function which processes one sample at a time
	 */
	class SingleIOProcessor extends ToneAudioWorkletProcessor {

		constructor(options) {
			super(Object.assign(options, {
				numberOfInputs: 1,
				numberOfOutputs: 1
			}));
			/**
			 * Holds the name of the parameter and a single value of that
			 * parameter at the current sample
			 * @type { [name: string]: number }
			 */
			this.params = {}
		}

		/**
		 * Generate an output sample from the input sample and parameters
		 * @abstract
		 * @param input number
		 * @param channel number
		 * @param parameters { [name: string]: number }
		 * @returns number
		 */
		generate(){}

		/**
		 * Update the private params object with the 
		 * values of the parameters at the given index
		 * @param parameters { [name: string]: Float32Array },
		 * @param index number
		 */
		updateParams(parameters, index) {
			for (const paramName in parameters) {
				const param = parameters[paramName];
				if (param.length > 1) {
					this.params[paramName] = parameters[paramName][index];
				} else {
					this.params[paramName] = parameters[paramName][0];
				}
			}
		}

		/**
		 * Process a single frame of the audio
		 * @param inputs Float32Array[][]
		 * @param outputs Float32Array[][]
		 */
		process(inputs, outputs, parameters) {
			const input = inputs[0];
			const output = outputs[0];
			// get the parameter values
			const channelCount = Math.max(input && input.length || 0, output.length);
			for (let sample = 0; sample < this.blockSize; sample++) {
				this.updateParams(parameters, sample);
				for (let channel = 0; channel < channelCount; channel++) {
					const inputSample = input && input.length ? input[channel][sample] : 0;
					output[channel][sample] = this.generate(inputSample, channel, this.params);
				}
			}
			return !this.disposed;
		}
	};
`;Td(uI);const hI=`
	/**
	 * A multichannel buffer for use within an AudioWorkletProcessor as a delay line
	 */
	class DelayLine {
		
		constructor(size, channels) {
			this.buffer = [];
			this.writeHead = []
			this.size = size;

			// create the empty channels
			for (let i = 0; i < channels; i++) {
				this.buffer[i] = new Float32Array(this.size);
				this.writeHead[i] = 0;
			}
		}

		/**
		 * Push a value onto the end
		 * @param channel number
		 * @param value number
		 */
		push(channel, value) {
			this.writeHead[channel] += 1;
			if (this.writeHead[channel] > this.size) {
				this.writeHead[channel] = 0;
			}
			this.buffer[channel][this.writeHead[channel]] = value;
		}

		/**
		 * Get the recorded value of the channel given the delay
		 * @param channel number
		 * @param delay number delay samples
		 */
		get(channel, delay) {
			let readHead = this.writeHead[channel] - Math.floor(delay);
			if (readHead < 0) {
				readHead += this.size;
			}
			return this.buffer[channel][readHead];
		}
	}
`;Td(hI);const z_="feedback-comb-filter",dI=`
	class FeedbackCombFilterWorklet extends SingleIOProcessor {

		constructor(options) {
			super(options);
			this.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);
		}

		static get parameterDescriptors() {
			return [{
				name: "delayTime",
				defaultValue: 0.1,
				minValue: 0,
				maxValue: 1,
				automationRate: "k-rate"
			}, {
				name: "feedback",
				defaultValue: 0.5,
				minValue: 0,
				maxValue: 0.9999,
				automationRate: "k-rate"
			}];
		}

		generate(input, channel, parameters) {
			const delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);
			this.delayLine.push(channel, input + delayedSample * parameters.feedback);
			return delayedSample;
		}
	}
`;V_(z_,dI);class sl extends cI{constructor(){super(Z(sl.getDefaults(),arguments,["delayTime","resonance"])),this.name="FeedbackCombFilter";const e=Z(sl.getDefaults(),arguments,["delayTime","resonance"]);this.input=new ot({context:this.context}),this.output=new ot({context:this.context}),this.delayTime=new je({context:this.context,value:e.delayTime,units:"time",minValue:0,maxValue:1,param:this._dummyParam,swappable:!0}),this.resonance=new je({context:this.context,value:e.resonance,units:"normalRange",param:this._dummyParam,swappable:!0}),Ke(this,["resonance","delayTime"])}_audioWorkletName(){return z_}static getDefaults(){return Object.assign(ye.getDefaults(),{delayTime:.1,resonance:.5})}onReady(e){ps(this.input,e,this.output);const t=e.parameters.get("delayTime");this.delayTime.setParam(t);const n=e.parameters.get("feedback");this.resonance.setParam(n)}dispose(){return super.dispose(),this.input.dispose(),this.output.dispose(),this.delayTime.dispose(),this.resonance.dispose(),this}}class po extends Zn{constructor(){super(Z(po.getDefaults(),arguments,["voice","options"])),this.name="PolySynth",this._availableVoices=[],this._activeVoices=[],this._voices=[],this._gcTimeout=-1,this._averageActiveVoices=0;const e=Z(po.getDefaults(),arguments,["voice","options"]);Re(!Wi(e.voice),"DEPRECATED: The polyphony count is no longer the first argument.");const t=e.voice.getDefaults();this.options=Object.assign(t,e.options),this.voice=e.voice,this.maxPolyphony=e.maxPolyphony,this._dummyVoice=this._getNextAvailableVoice();const n=this._voices.indexOf(this._dummyVoice);this._voices.splice(n,1),this._gcTimeout=this.context.setInterval(this._collectGarbage.bind(this),1)}static getDefaults(){return Object.assign(Zn.getDefaults(),{maxPolyphony:32,options:{},voice:Xi})}get activeVoices(){return this._activeVoices.length}_makeVoiceAvailable(e){this._availableVoices.push(e);const t=this._activeVoices.findIndex(n=>n.voice===e);this._activeVoices.splice(t,1)}_getNextAvailableVoice(){if(this._availableVoices.length)return this._availableVoices.shift();if(this._voices.length<this.maxPolyphony){const e=new this.voice(Object.assign(this.options,{context:this.context,onsilence:this._makeVoiceAvailable.bind(this)}));return e.connect(this.output),this._voices.push(e),e}else fd("Max polyphony exceeded. Note dropped.")}_collectGarbage(){if(this._averageActiveVoices=Math.max(this._averageActiveVoices*.95,this.activeVoices),this._availableVoices.length&&this._voices.length>Math.ceil(this._averageActiveVoices+1)){const e=this._availableVoices.shift(),t=this._voices.indexOf(e);this._voices.splice(t,1),this.context.isOffline||e.dispose()}}_triggerAttack(e,t,n){e.forEach(i=>{const r=new Jc(this.context,i).toMidi(),o=this._getNextAvailableVoice();o&&(o.triggerAttack(i,t,n),this._activeVoices.push({midi:r,voice:o,released:!1}),this.log("triggerAttack",i,t))})}_triggerRelease(e,t){e.forEach(n=>{const i=new Jc(this.context,n).toMidi(),r=this._activeVoices.find(({midi:o,released:a})=>o===i&&!a);r&&(r.voice.triggerRelease(t),r.released=!0,this.log("triggerRelease",n,t))})}_scheduleEvent(e,t,n,i){Re(!this.disposed,"Synth was already disposed"),n<=this.now()?e==="attack"?this._triggerAttack(t,n,i):this._triggerRelease(t,n):this.context.setTimeout(()=>{this._scheduleEvent(e,t,n,i)},n-this.now())}triggerAttack(e,t,n){Array.isArray(e)||(e=[e]);const i=this.toSeconds(t);return this._scheduleEvent("attack",e,i,n),this}triggerRelease(e,t){Array.isArray(e)||(e=[e]);const n=this.toSeconds(t);return this._scheduleEvent("release",e,n),this}triggerAttackRelease(e,t,n,i){const r=this.toSeconds(n);if(this.triggerAttack(e,r,i),An(t)){Re(An(e),"If the duration is an array, the notes must also be an array"),e=e;for(let o=0;o<e.length;o++){const a=t[Math.min(o,t.length-1)],c=this.toSeconds(a);Re(c>0,"The duration must be greater than 0"),this.triggerRelease(e[o],r+c)}}else{const o=this.toSeconds(t);Re(o>0,"The duration must be greater than 0"),this.triggerRelease(e,r+o)}return this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1)),this}set(e){const t=ta(e,["onsilence","context"]);return this.options=Qs(this.options,t),this._voices.forEach(n=>n.set(t)),this._dummyVoice.set(t),this}get(){return this._dummyVoice.get()}releaseAll(e){const t=this.toSeconds(e);return this._activeVoices.forEach(({voice:n})=>{n.triggerRelease(t)}),this}dispose(){return super.dispose(),this._dummyVoice.dispose(),this._voices.forEach(e=>e.dispose()),this._activeVoices=[],this._availableVoices=[],this.context.clearInterval(this._gcTimeout),this}}class da extends Zn{constructor(){super(Z(da.getDefaults(),arguments,["urls","onload","baseUrl"],"urls")),this.name="Sampler",this._activeSources=new Map;const e=Z(da.getDefaults(),arguments,["urls","onload","baseUrl"],"urls"),t={};Object.keys(e.urls).forEach(n=>{const i=parseInt(n,10);if(Re(uc(n)||Wi(i)&&isFinite(i),`url key is neither a note or midi pitch: ${n}`),uc(n)){const r=new wn(this.context,n).toMidi();t[r]=e.urls[n]}else Wi(i)&&isFinite(i)&&(t[i]=e.urls[i])}),this._buffers=new xd({urls:t,onload:e.onload,baseUrl:e.baseUrl,onerror:e.onerror}),this.attack=e.attack,this.release=e.release,this.curve=e.curve,this._buffers.loaded&&Promise.resolve().then(e.onload)}static getDefaults(){return Object.assign(Zn.getDefaults(),{attack:0,baseUrl:"",curve:"exponential",onload:rt,onerror:rt,release:.1,urls:{}})}_findClosest(e){let n=0;for(;n<96;){if(this._buffers.has(e+n))return-n;if(this._buffers.has(e-n))return n;n++}throw new Error(`No available buffers for note: ${e}`)}triggerAttack(e,t,n=1){return this.log("triggerAttack",e,t,n),Array.isArray(e)||(e=[e]),e.forEach(i=>{const r=F_(new wn(this.context,i).toFrequency()),o=Math.round(r),a=r-o,c=this._findClosest(o),l=o-c,u=this._buffers.get(l),h=U_(c+a),d=new uo({url:u,context:this.context,curve:this.curve,fadeIn:this.attack,fadeOut:this.release,playbackRate:h}).connect(this.output);d.start(t,0,u.duration/h,n),An(this._activeSources.get(o))||this._activeSources.set(o,[]),this._activeSources.get(o).push(d),d.onended=()=>{if(this._activeSources&&this._activeSources.has(o)){const f=this._activeSources.get(o),m=f.indexOf(d);m!==-1&&f.splice(m,1)}}}),this}triggerRelease(e,t){return this.log("triggerRelease",e,t),Array.isArray(e)||(e=[e]),e.forEach(n=>{const i=new wn(this.context,n).toMidi();if(this._activeSources.has(i)&&this._activeSources.get(i).length){const r=this._activeSources.get(i);t=this.toSeconds(t),r.forEach(o=>{o.stop(t)}),this._activeSources.set(i,[])}}),this}releaseAll(e){const t=this.toSeconds(e);return this._activeSources.forEach(n=>{for(;n.length;)n.shift().stop(t)}),this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1)),this}triggerAttackRelease(e,t,n,i=1){const r=this.toSeconds(n);return this.triggerAttack(e,r,i),An(t)?(Re(An(e),"notes must be an array when duration is array"),e.forEach((o,a)=>{const c=t[Math.min(a,t.length-1)];this.triggerRelease(o,r+this.toSeconds(c))})):this.triggerRelease(e,r+this.toSeconds(t)),this}add(e,t,n){if(Re(uc(e)||isFinite(e),`note must be a pitch or midi: ${e}`),uc(e)){const i=new wn(this.context,e).toMidi();this._buffers.add(i,t,n)}else this._buffers.add(e,t,n);return this}get loaded(){return this._buffers.loaded}dispose(){return super.dispose(),this._buffers.dispose(),this._activeSources.forEach(e=>{e.forEach(t=>t.dispose())}),this._activeSources.clear(),this}}ti([Ki(0)],da.prototype,"attack",void 0);ti([Ki(0)],da.prototype,"release",void 0);class fa extends ye{constructor(){super(Object.assign(Z(fa.getDefaults(),arguments,["fade"]))),this.name="CrossFade",this._panner=this.context.createStereoPanner(),this._split=this.context.createChannelSplitter(2),this._g2a=new rI({context:this.context}),this.a=new ot({context:this.context,gain:0}),this.b=new ot({context:this.context,gain:0}),this.output=new ot({context:this.context}),this._internalChannels=[this.a,this.b];const e=Z(fa.getDefaults(),arguments,["fade"]);this.fade=new lt({context:this.context,units:"normalRange",value:e.fade}),Ke(this,"fade"),this.context.getConstant(1).connect(this._panner),this._panner.connect(this._split),this._panner.channelCount=1,this._panner.channelCountMode="explicit",fi(this._split,this.a.gain,0),fi(this._split,this.b.gain,1),this.fade.chain(this._g2a,this._panner.pan),this.a.connect(this.output),this.b.connect(this.output)}static getDefaults(){return Object.assign(ye.getDefaults(),{fade:.5})}dispose(){return super.dispose(),this.a.dispose(),this.b.dispose(),this.output.dispose(),this.fade.dispose(),this._g2a.dispose(),this._panner.disconnect(),this._split.disconnect(),this}}class mo extends ye{constructor(e){super(e),this.name="Effect",this._dryWet=new fa({context:this.context}),this.wet=this._dryWet.fade,this.effectSend=new ot({context:this.context}),this.effectReturn=new ot({context:this.context}),this.input=new ot({context:this.context}),this.output=this._dryWet,this.input.fan(this._dryWet.a,this.effectSend),this.effectReturn.connect(this._dryWet.b),this.wet.setValueAtTime(e.wet,0),this._internalChannels=[this.effectReturn,this.effectSend],Ke(this,"wet")}static getDefaults(){return Object.assign(ye.getDefaults(),{wet:1})}connectEffect(e){return this._internalChannels.push(e),this.effectSend.chain(e,this.effectReturn),this}dispose(){return super.dispose(),this._dryWet.dispose(),this.effectSend.dispose(),this.effectReturn.dispose(),this.wet.dispose(),this}}class rl extends ye{constructor(){super(Object.assign(Z(rl.getDefaults(),arguments,["pan"]))),this.name="Panner",this._panner=this.context.createStereoPanner(),this.input=this._panner,this.output=this._panner;const e=Z(rl.getDefaults(),arguments,["pan"]);this.pan=new je({context:this.context,param:this._panner.pan,value:e.pan,minValue:-1,maxValue:1}),this._panner.channelCount=e.channelCount,this._panner.channelCountMode="explicit",Ke(this,"pan")}static getDefaults(){return Object.assign(ye.getDefaults(),{pan:0,channelCount:1})}dispose(){return super.dispose(),this._panner.disconnect(),this.pan.dispose(),this}}const fI="bit-crusher",pI=`
	class BitCrusherWorklet extends SingleIOProcessor {

		static get parameterDescriptors() {
			return [{
				name: "bits",
				defaultValue: 12,
				minValue: 1,
				maxValue: 16,
				automationRate: 'k-rate'
			}];
		}

		generate(input, _channel, parameters) {
			const step = Math.pow(0.5, parameters.bits - 1);
			const val = step * Math.floor(input / step + 0.5);
			return val;
		}
	}
`;V_(fI,pI);class pa extends mo{constructor(){super(Z(pa.getDefaults(),arguments,["order"])),this.name="Chebyshev";const e=Z(pa.getDefaults(),arguments,["order"]);this._shaper=new gs({context:this.context,length:4096}),this._order=e.order,this.connectEffect(this._shaper),this.order=e.order,this.oversample=e.oversample}static getDefaults(){return Object.assign(mo.getDefaults(),{order:1,oversample:"none"})}_getCoefficient(e,t,n){return n.has(t)||(t===0?n.set(t,0):t===1?n.set(t,e):n.set(t,2*e*this._getCoefficient(e,t-1,n)-this._getCoefficient(e,t-2,n))),n.get(t)}get order(){return this._order}set order(e){this._order=e,this._shaper.setMap(t=>this._getCoefficient(t,e,new Map))}get oversample(){return this._shaper.oversample}set oversample(e){this._shaper.oversample=e}dispose(){return super.dispose(),this._shaper.dispose(),this}}class ol extends ye{constructor(){super(Z(ol.getDefaults(),arguments,["channels"])),this.name="Split";const e=Z(ol.getDefaults(),arguments,["channels"]);this._splitter=this.input=this.output=this.context.createChannelSplitter(e.channels),this._internalChannels=[this._splitter]}static getDefaults(){return Object.assign(ye.getDefaults(),{channels:2})}dispose(){return super.dispose(),this._splitter.disconnect(),this}}class al extends ye{constructor(){super(Z(al.getDefaults(),arguments,["channels"])),this.name="Merge";const e=Z(al.getDefaults(),arguments,["channels"]);this._merger=this.output=this.input=this.context.createChannelMerger(e.channels)}static getDefaults(){return Object.assign(ye.getDefaults(),{channels:2})}dispose(){return super.dispose(),this._merger.disconnect(),this}}class im extends ye{constructor(e){super(e),this.name="StereoEffect",this.input=new ot({context:this.context}),this.input.channelCount=2,this.input.channelCountMode="explicit",this._dryWet=this.output=new fa({context:this.context,fade:e.wet}),this.wet=this._dryWet.fade,this._split=new ol({context:this.context,channels:2}),this._merge=new al({context:this.context,channels:2}),this.input.connect(this._split),this.input.connect(this._dryWet.a),this._merge.connect(this._dryWet.b),Ke(this,["wet"])}connectEffectLeft(...e){this._split.connect(e[0],0,0),ps(...e),fi(e[e.length-1],this._merge,0,0)}connectEffectRight(...e){this._split.connect(e[0],1,0),ps(...e),fi(e[e.length-1],this._merge,0,1)}static getDefaults(){return Object.assign(ye.getDefaults(),{wet:1})}dispose(){return super.dispose(),this._dryWet.dispose(),this._split.dispose(),this._merge.dispose(),this}}class cl extends mo{constructor(){super(Z(cl.getDefaults(),arguments,["distortion"])),this.name="Distortion";const e=Z(cl.getDefaults(),arguments,["distortion"]);this._shaper=new gs({context:this.context,length:4096}),this._distortion=e.distortion,this.connectEffect(this._shaper),this.distortion=e.distortion,this.oversample=e.oversample}static getDefaults(){return Object.assign(mo.getDefaults(),{distortion:.4,oversample:"none"})}get distortion(){return this._distortion}set distortion(e){this._distortion=e;const t=e*100,n=Math.PI/180;this._shaper.setMap(i=>Math.abs(i)<.001?0:(3+t)*i*20*n/(Math.PI+t*Math.abs(i)))}get oversample(){return this._shaper.oversample}set oversample(e){this._shaper.oversample=e}dispose(){return super.dispose(),this._shaper.dispose(),this}}class sm extends mo{constructor(e){super(e),this.name="FeedbackEffect",this._feedbackGain=new ot({context:this.context,gain:e.feedback,units:"normalRange"}),this.feedback=this._feedbackGain.gain,Ke(this,"feedback"),this.effectReturn.chain(this._feedbackGain,this.effectSend)}static getDefaults(){return Object.assign(mo.getDefaults(),{feedback:.125})}dispose(){return super.dispose(),this._feedbackGain.dispose(),this.feedback.dispose(),this}}class ll extends sm{constructor(){super(Z(ll.getDefaults(),arguments,["delayTime","feedback"])),this.name="FeedbackDelay";const e=Z(ll.getDefaults(),arguments,["delayTime","feedback"]);this._delayNode=new Qc({context:this.context,delayTime:e.delayTime,maxDelay:e.maxDelay}),this.delayTime=this._delayNode.delayTime,this.connectEffect(this._delayNode),Ke(this,"delayTime")}static getDefaults(){return Object.assign(sm.getDefaults(),{delayTime:.25,maxDelay:1})}dispose(){return super.dispose(),this._delayNode.dispose(),this.delayTime.dispose(),this}}const rm=[1687/25e3,1601/25e3,2053/25e3,2251/25e3],mI=[.773,.802,.753,.733],gI=[347,113,37];class ma extends im{constructor(){super(Z(ma.getDefaults(),arguments,["roomSize"])),this.name="JCReverb",this._allpassFilters=[],this._feedbackCombFilters=[];const e=Z(ma.getDefaults(),arguments,["roomSize"]);this.roomSize=new lt({context:this.context,value:e.roomSize,units:"normalRange"}),this._scaleRoomSize=new nl({context:this.context,min:-.733,max:.197}),this._allpassFilters=gI.map(t=>{const n=this.context.createBiquadFilter();return n.type="allpass",n.frequency.value=t,n}),this._feedbackCombFilters=rm.map((t,n)=>{const i=new sl({context:this.context,delayTime:t});return this._scaleRoomSize.connect(i.resonance),i.resonance.value=mI[n],n<rm.length/2?this.connectEffectLeft(...this._allpassFilters,i):this.connectEffectRight(...this._allpassFilters,i),i}),this.roomSize.connect(this._scaleRoomSize),Ke(this,["roomSize"])}static getDefaults(){return Object.assign(im.getDefaults(),{roomSize:.5})}dispose(){return super.dispose(),this._allpassFilters.forEach(e=>e.disconnect()),this._feedbackCombFilters.forEach(e=>e.dispose()),this.roomSize.dispose(),this._scaleRoomSize.dispose(),this}}class Mt extends ye{constructor(){super(Z(Mt.getDefaults(),arguments,["solo"])),this.name="Solo";const e=Z(Mt.getDefaults(),arguments,["solo"]);this.input=this.output=new ot({context:this.context}),Mt._allSolos.has(this.context)||Mt._allSolos.set(this.context,new Set),Mt._allSolos.get(this.context).add(this),this.solo=e.solo}static getDefaults(){return Object.assign(ye.getDefaults(),{solo:!1})}get solo(){return this._isSoloed()}set solo(e){e?this._addSolo():this._removeSolo(),Mt._allSolos.get(this.context).forEach(t=>t._updateSolo())}get muted(){return this.input.gain.value===0}_addSolo(){Mt._soloed.has(this.context)||Mt._soloed.set(this.context,new Set),Mt._soloed.get(this.context).add(this)}_removeSolo(){Mt._soloed.has(this.context)&&Mt._soloed.get(this.context).delete(this)}_isSoloed(){return Mt._soloed.has(this.context)&&Mt._soloed.get(this.context).has(this)}_noSolos(){return!Mt._soloed.has(this.context)||Mt._soloed.has(this.context)&&Mt._soloed.get(this.context).size===0}_updateSolo(){this._isSoloed()?this.input.gain.value=1:this._noSolos()?this.input.gain.value=1:this.input.gain.value=0}dispose(){return super.dispose(),Mt._allSolos.get(this.context).delete(this),this._removeSolo(),this}}Mt._allSolos=new Map;Mt._soloed=new Map;class ul extends ye{constructor(){super(Z(ul.getDefaults(),arguments,["pan","volume"])),this.name="PanVol";const e=Z(ul.getDefaults(),arguments,["pan","volume"]);this._panner=this.input=new rl({context:this.context,pan:e.pan,channelCount:e.channelCount}),this.pan=this._panner.pan,this._volume=this.output=new sr({context:this.context,volume:e.volume}),this.volume=this._volume.volume,this._panner.connect(this._volume),this.mute=e.mute,Ke(this,["pan","volume"])}static getDefaults(){return Object.assign(ye.getDefaults(),{mute:!1,pan:0,volume:0,channelCount:1})}get mute(){return this._volume.mute}set mute(e){this._volume.mute=e}dispose(){return super.dispose(),this._panner.dispose(),this.pan.dispose(),this._volume.dispose(),this.volume.dispose(),this}}class Us extends ye{constructor(){super(Z(Us.getDefaults(),arguments,["volume","pan"])),this.name="Channel";const e=Z(Us.getDefaults(),arguments,["volume","pan"]);this._solo=this.input=new Mt({solo:e.solo,context:this.context}),this._panVol=this.output=new ul({context:this.context,pan:e.pan,volume:e.volume,mute:e.mute,channelCount:e.channelCount}),this.pan=this._panVol.pan,this.volume=this._panVol.volume,this._solo.connect(this._panVol),Ke(this,["pan","volume"])}static getDefaults(){return Object.assign(ye.getDefaults(),{pan:0,volume:0,mute:!1,solo:!1,channelCount:1})}get solo(){return this._solo.solo}set solo(e){this._solo.solo=e}get muted(){return this._solo.muted||this.mute}get mute(){return this._panVol.mute}set mute(e){this._panVol.mute=e}_getBus(e){return Us.buses.has(e)||Us.buses.set(e,new ot({context:this.context})),Us.buses.get(e)}send(e,t=0){const n=this._getBus(e),i=new ot({context:this.context,units:"decibels",gain:t});return this.connect(i),i.connect(n),i}receive(e){return this._getBus(e).connect(this),this}dispose(){return super.dispose(),this._panVol.dispose(),this.pan.dispose(),this.volume.dispose(),this._solo.dispose(),this}}Us.buses=new Map;class _I extends ye{constructor(){super(...arguments),this.name="Listener",this.positionX=new je({context:this.context,param:this.context.rawContext.listener.positionX}),this.positionY=new je({context:this.context,param:this.context.rawContext.listener.positionY}),this.positionZ=new je({context:this.context,param:this.context.rawContext.listener.positionZ}),this.forwardX=new je({context:this.context,param:this.context.rawContext.listener.forwardX}),this.forwardY=new je({context:this.context,param:this.context.rawContext.listener.forwardY}),this.forwardZ=new je({context:this.context,param:this.context.rawContext.listener.forwardZ}),this.upX=new je({context:this.context,param:this.context.rawContext.listener.upX}),this.upY=new je({context:this.context,param:this.context.rawContext.listener.upY}),this.upZ=new je({context:this.context,param:this.context.rawContext.listener.upZ})}static getDefaults(){return Object.assign(ye.getDefaults(),{positionX:0,positionY:0,positionZ:0,forwardX:0,forwardY:0,forwardZ:-1,upX:0,upY:1,upZ:0})}dispose(){return super.dispose(),this.positionX.dispose(),this.positionY.dispose(),this.positionZ.dispose(),this.forwardX.dispose(),this.forwardY.dispose(),this.forwardZ.dispose(),this.upX.dispose(),this.upY.dispose(),this.upZ.dispose(),this}}Dl(s=>{s.listener=new _I({context:s})});Pl(s=>{s.listener.dispose()});class hl extends ye{constructor(){super(Z(hl.getDefaults(),arguments,["threshold","ratio"])),this.name="Compressor",this._compressor=this.context.createDynamicsCompressor(),this.input=this._compressor,this.output=this._compressor;const e=Z(hl.getDefaults(),arguments,["threshold","ratio"]);this.threshold=new je({minValue:this._compressor.threshold.minValue,maxValue:this._compressor.threshold.maxValue,context:this.context,convert:!1,param:this._compressor.threshold,units:"decibels",value:e.threshold}),this.attack=new je({minValue:this._compressor.attack.minValue,maxValue:this._compressor.attack.maxValue,context:this.context,param:this._compressor.attack,units:"time",value:e.attack}),this.release=new je({minValue:this._compressor.release.minValue,maxValue:this._compressor.release.maxValue,context:this.context,param:this._compressor.release,units:"time",value:e.release}),this.knee=new je({minValue:this._compressor.knee.minValue,maxValue:this._compressor.knee.maxValue,context:this.context,convert:!1,param:this._compressor.knee,units:"decibels",value:e.knee}),this.ratio=new je({minValue:this._compressor.ratio.minValue,maxValue:this._compressor.ratio.maxValue,context:this.context,convert:!1,param:this._compressor.ratio,units:"positive",value:e.ratio}),Ke(this,["knee","release","attack","ratio","threshold"])}static getDefaults(){return Object.assign(ye.getDefaults(),{attack:.003,knee:30,ratio:12,release:.25,threshold:-24})}get reduction(){return this._compressor.reduction}dispose(){return super.dispose(),this._compressor.disconnect(),this.attack.dispose(),this.release.dispose(),this.threshold.dispose(),this.ratio.dispose(),this.knee.dispose(),this}}class dl extends ye{constructor(){super(Object.assign(Z(dl.getDefaults(),arguments,["threshold"]))),this.name="Limiter";const e=Z(dl.getDefaults(),arguments,["threshold"]);this._compressor=this.input=this.output=new hl({context:this.context,ratio:20,attack:.003,release:.01,threshold:e.threshold}),this.threshold=this._compressor.threshold,Ke(this,"threshold")}static getDefaults(){return Object.assign(ye.getDefaults(),{threshold:-12})}get reduction(){return this._compressor.reduction}dispose(){return super.dispose(),this._compressor.dispose(),this.threshold.dispose(),this}}Xn().transport;Xn().destination;Xn().destination;Xn().listener;Xn().draw;Xn();let fl=!1;window.addEventListener("pointerup",async()=>{fl||(await qR(),fl=!0,console.log("audio is ready"))});const Ed={C:[16.35,32.7,65.41,130.81,261.63,523.25,1046.5,2093,4186.01],Db:[17.32,34.65,69.3,138.59,277.18,554.37,1108.73,2217.46,4434.92],D:[18.35,36.71,73.42,146.83,293.66,587.33,1174.66,2349.32,4698.64],Eb:[19.45,38.89,77.78,155.56,311.13,622.25,1244.51,2489.02,4978.03],E:[20.6,41.2,82.41,164.81,329.63,659.26,1318.51,2637.02],F:[21.83,43.65,87.31,174.61,349.23,698.46,1396.91,2793.83],Gb:[23.12,46.25,92.5,185,369.99,739.99,1479.98,2959.96],G:[24.5,49,98,196,392,783.99,1567.98,3135.96],Ab:[25.96,51.91,103.83,207.65,415.3,830.61,1661.22,3322.44],A:[27.5,55,110,220,440,880,1760,3520],Bb:[29.14,58.27,116.54,233.08,466.16,932.33,1864.66,3729.31],B:[30.87,61.74,123.47,246.94,493.88,987.77,1975.53,3951.07]},vI="A",yI=2,xI="majorScale",Ir={tonic:"A",octave:2};let wd=Ed.A[2];const SI=[0,2,4,7,9],MI=[0,3,5,6,7,10],bI=[0,3,5,7,10],G_=[0,2,4,5,7,9,11],TI=[0,2,3,5,7,9,11],EI=[0,2,3,5,7,8,10],Dr={majorPentatonic:SI,bluesScale:MI,minorPentatonic:bI,majorScale:G_,melodicMinorScale:TI,naturalMinorScale:EI};let cn=G_;function wI(s){let e=s.length,t;for(;e>0;)t=Math.floor(Math.random()*e),e--,[s[e],s[t]]=[s[t],s[e]];return s}function Ad(s,e){return(s%e+e)%e}const AI=new Xi().toDestination(),go=["sine","amsine","amsine2","amsquare","amtriangle","amsawtooth"],pl=["white","brown","pink"];let CI=function(s){s.callbacks===void 0&&(s.callbacks=[]),s.eventOnModify=function(e,t){s[e]=t,s.callbacks!==void 0&&s.callbacks.length>0&&s.callbacks.forEach(n=>n(e))},s.addOnModifyEventListener=function(e){if(s.callbacks===void 0)throw"addModifyEventListener: Array Modify Event Not Initialized";s.callbacks.includes(e)||s.callbacks.push(e)}};const ga=new dl(-10).toDestination(),RI=function(){const s=new ma().connect(ga),e=new cl(1).connect(s),t=new po(Xi,{oscillator:{type:"amtriangle",decayCurve:"linear",harmonicity:.5,modulationType:"sine"}}).connect(e);this.name="AttackReleaseSynth",this.parameters={volume:{value:-15,min:-50,max:-5},attack:{value:.05,min:.005,max:1},release:{value:.5,min:.01,max:2},harmonicity:{value:3,min:.01,max:5},waveform:{value:0,min:0,max:go.length-1},distortion:{value:1,min:1,max:100},reverb:{value:0,min:0,max:1}},this.parameterNames=["volume","attack","release","harmonicity","waveform","distortion","reverb"],this.updateAllParameters=function(){t.maxPolyphony=10,t.volume.value=this.parameters.volume.value,e.distortion=Math.floor(this.parameters.distortion.value)/100,s.roomSize.value=.8,s.wet.value=this.parameters.reverb.value,t.set({oscillator:{harmonicity:Math.floor(this.parameters.harmonicity.value*10)/10,type:go[Math.floor(this.parameters.waveform.value)]},envelope:{attack:this.parameters.attack.value,decay:0,sustain:1,release:this.parameters.release.value}})},this.updateAllParameters(),this.getParamValueFromNormRange=function(n,i){return this.parameters[n].default===void 0&&(this.parameters[n].default=this.parameters[n].value),et.lerp(this.parameters[n].min,this.parameters[n].max,i)},this.modifyParameter=function(n,i){this.parameters[n].default===void 0&&(this.parameters[n].default=this.parameters[n].value),this.parameters[n].value=i,this.updateAllParameters()},this.getDefault01=function(n){return(this.parameters[n].value-this.parameters[n].min)/(this.parameters[n].max-this.parameters[n].min)},this.play=function(n,i){const r=wd*Math.pow(2,Math.floor(n/cn.length)+cn[Ad(n,cn.length)]/12);console.log("synth.voices.length: "+t._voices.length),console.log("synth.activeVoices.length: "+t._activeVoices.length),console.log("synth.availableVoices.length: "+t._availableVoices.length),console.log("synth.maxPolyphony: "+t.maxPolyphony),t.maxPolyphony>0&&t._activeVoices.length===t.maxPolyphony&&t._availableVoices.length===0?(console.log(t._activeVoices[0]),t._activeVoices[0].released=!0,t._activeVoices[0].voice.triggerAttackRelease(r,this.parameters.attack.value)):t.triggerAttackRelease(r,this.parameters.attack.value)},this.releaseAll=function(){t.releaseAll(0)}},II=function(){const s=new ma().connect(ga),e=new pa(50).connect(s),t=new po(Xi,{oscillator:{type:"amsawtooth",decayCurve:"linear",harmonicity:.5,modulationType:"sine"}}).connect(e);this.name="SustainSynth",this.parameters={volume:{value:-15,min:-50,max:-5},attack:{value:.05,min:.005,max:1.5},sustainTime:{value:.5,min:.01,max:2},harmonicity:{value:3,min:.01,max:5},waveform:{value:0,min:0,max:go.length-1},distortion:{value:1,min:1,max:100},reverb:{value:.034,min:0,max:1}},this.parameterNames=["volume","attack","sustainTime","harmonicity","waveform","distortion","reverb"],this.updateAllParameters=function(){t.maxPolyphony=10,t.volume.value=this.parameters.volume.value,e.order=Math.floor(this.parameters.distortion.value),s.roomSize.value=.8,s.wet.value=this.parameters.reverb.value,t.set({oscillator:{harmonicity:Math.floor(this.parameters.harmonicity.value*10)/10,type:go[Math.floor(this.parameters.waveform.value)]},envelope:{attack:this.parameters.attack.value,decay:this.parameters.sustainTime.value,sustain:1,release:.05}})},this.updateAllParameters(),this.getParamValueFromNormRange=function(n,i){return this.parameters[n].default===void 0&&(this.parameters[n].default=this.parameters[n].value),et.lerp(this.parameters[n].min,this.parameters[n].max,i)},this.modifyParameter=function(n,i){this.parameters[n].default===void 0&&(this.parameters[n].default=this.parameters[n].value),this.parameters[n].value=i,this.updateAllParameters()},this.getDefault01=function(n){return(this.parameters[n].value-this.parameters[n].min)/(this.parameters[n].max-this.parameters[n].min)},this.play=function(n,i){const r=wd*Math.pow(2,Math.floor(n/cn.length)+cn[Ad(n,cn.length)]/12);t.maxPolyphony>0&&t._activeVoices.length===t.maxPolyphony&&t._availableVoices.length===0?(console.log(t._activeVoices[0]),t._activeVoices[0].released=!0,t._activeVoices[0].voice.triggerAttackRelease(r,this.parameters.sustainTime.value+this.parameters.attack.value)):t.triggerAttackRelease(r,this.parameters.sustainTime.value+this.parameters.attack.value)},this.releaseAll=function(){t.releaseAll(0)}},DI=function(){const s=new il({frequency:11e3,type:"highpass"}).connect(ga),e=new oI().connect(s);this.name="NoiseSynth",this.parameters={volume:{value:-15,min:-50,max:-5},attack:{value:.05,min:.005,max:3},decay:{value:.5,min:.01,max:4},noiseType:{value:0,min:0,max:pl.length-1},cutOffFrequency:{value:11e3,min:100,max:2e4},playbackRate:{value:1,min:.05,max:3}},this.parameterNames=["volume","attack","decay","noiseType","cutOffFrequency","playbackRate"],this.updateAllParameters=function(){e.volume.value=this.parameters.volume.value,s.frequency.value=this.parameters.cutOffFrequency.value,e.noise.noiseType=pl[Math.floor(this.parameters.noiseType.value)],e.noise.playbackRate=this.parameters.playbackRate.value,e.envelope.set({attack:this.parameters.attack.value,decay:this.parameters.decay.value,sustain:0,release:0})},this.updateAllParameters(),this.getParamValueFromNormRange=function(t,n){return this.parameters[t].default===void 0&&(this.parameters[t].default=this.parameters[t].value),et.lerp(this.parameters[t].min,this.parameters[t].max,n)},this.modifyParameter=function(t,n){this.parameters[t].default===void 0&&(this.parameters[t].default=this.parameters[t].value),this.parameters[t].value=n,this.updateAllParameters()},this.getDefault01=function(t){return(this.parameters[t].value-this.parameters[t].min)/(this.parameters[t].max-this.parameters[t].min)},this.play=function(t,n){e.triggerAttackRelease(this.parameters.attack.value+this.parameters.decay.value)},this.releaseAll=function(){}},PI=function(){const s=new ll().connect(ga),e=new pa(50).connect(s).connect(ga),t=new po(fo).connect(e);this.name="Membrane",this.parameters={volume:{value:-15,min:-50,max:-5},attack:{value:.001,min:.001,max:1.5},pitchDecay:{value:.05,min:.01,max:1.5},octaves:{value:10,min:1,max:20},distortion:{value:1,min:1,max:100},delayTime:{value:.1,min:0,max:1},feedback:{value:0,min:0,max:1}},this.parameterNames=["volume","attack","pitchDecay","octaves","distortion","delayTime","feedback"],this.updateAllParameters=function(){e.order=Math.floor(this.parameters.distortion.value),s.delayTime.value=this.parameters.delayTime.value,s.feedback.value=this.parameters.feedback.value,t.maxPolyphony=10,t.volume.value=this.parameters.volume.value,t.set({octaves:Math.floor(this.parameters.octaves.value),envelope:{attack:this.parameters.attack.value,decay:this.parameters.pitchDecay.value,sustain:0,release:0}})},this.updateAllParameters(),this.getParamValueFromNormRange=function(n,i){return this.parameters[n].default===void 0&&(this.parameters[n].default=this.parameters[n].value),et.lerp(this.parameters[n].min,this.parameters[n].max,i)},this.modifyParameter=function(n,i){this.parameters[n].default===void 0&&(this.parameters[n].default=this.parameters[n].value),this.parameters[n].value=i,this.updateAllParameters()},this.getDefault01=function(n){return(this.parameters[n].value-this.parameters[n].min)/(this.parameters[n].max-this.parameters[n].min)},this.play=function(n,i){const r=Ed.C[0]*Math.pow(2,Math.floor(n/cn.length)+cn[Ad(n,cn.length)]/12);t.maxPolyphony>0&&t._activeVoices.length===t.maxPolyphony&&t._availableVoices.length===0?(console.log(t._activeVoices[0]),t._activeVoices[0].released=!0,t._activeVoices[0].voice.triggerAttackRelease(r,this.parameters.pitchDecay.value+this.parameters.attack.value)):t.triggerAttackRelease(r,this.parameters.attack.value+this.parameters.pitchDecay.value)},this.releaseAll=function(){t.releaseAll(0)}};class NI{#e=4;melody=[];availableMelody=[{notes:[]},{notes:[]},{notes:[]},{notes:[]}];instruments=[new RI,new II,new PI,new DI];#t=0;#n=0;constructor(e){this.#e=e,this.melodyInstrumentID=new Array(e*40).fill(4),CI(this.melodyInstrumentID),this.activeEffectID=[],this.melodyPlaySequence=[],this.availableIds=[],this.availableEffectIds=[];for(let t=0;t<e*40;t++)this.availableEffectIds.push({effect:-1-Math.floor(t/40),id_on_beat:t%40});wI(this.availableEffectIds),this.melody=new Array(this.#e);for(let t=0;t<this.#e;t++)this.melody[t]={instances:[]}}getMelodyData(e){var t={name:e,scale:"",tonicOctave:Ir,Synth1:{},Synth2:{},Synth3:{},Synth4:{},melody:[]};Object.keys(Dr).forEach(n=>{Dr[n]===cn&&(t.scale=n)}),console.log(t.scale);for(let n=0;n<4;n++){const i=this.instruments[n];t[`Synth${n+1}`].parameters={},Object.keys(i.parameters).forEach(r=>{t[`Synth${n+1}`].parameters[r]=i.parameters[r].value})}return this.melody.forEach((n,i)=>{n.instances.forEach((r,o)=>{t.melody.push({beat:i,id_on_beat:r.id_on_beat,instrument:r.instrument,pitch:r.pitch})})}),t}setActiveScale(e){cn=Dr[e]}getActiveScale(){return Object.keys(Dr).forEach(e=>{if(Dr[e]===cn)return e}),"bluesScale"}getDefaultScale(){return xI}getDefaultTonicAndOctave(){return{tonic:vI,octave:yI}}setTonicAndOctave(e,t){e!==void 0&&(Ir.tonic=e),t!==void 0&&(Ir.octave=t),wd=Ed[Ir.tonic][Ir.octave]}getCurrentTonicAndOctave(){return Ir}setMelodyFromJsonData(e,t=!1){e.scale!==void 0&&(cn=Dr[e.scale]),e.tonicOctave!==void 0&&this.setTonicAndOctave(e.tonicOctave.tonic,e.tonicOctave.octave),console.log(cn);for(let n=0;n<4;n++){const i=this.instruments[n];Object.keys(i.parameters).forEach(r=>{e[`Synth${n+1}`].parameters[r]!==void 0&&(console.log(r),console.log(e[`Synth${n+1}`].parameters[r]),i.modifyParameter(r,e[`Synth${n+1}`].parameters[r]))})}this.#t=0,e.melody.forEach(n=>{t?this.addInstrumentOnPosition(n.instrument,n.beat,n.id_on_beat,n.pitch):this.availableMelody[n.instrument].notes.push({beat:n.beat,id_on_beat:n.id_on_beat,pitch:n.pitch}),this.#t++})}resetMelody(){for(let e=0;e<4;e++){const t=this.instruments[e];Object.keys(t.parameters).forEach(n=>{console.log(t.parameterNames[n]),console.log(t.parameters[n].default),console.log(t.parameters[n].value),t.parameters[n].default!==void 0&&(t.parameters[n].value=t.parameters[n].default)})}for(let e=0;e<this.#e;e++)this.melody[e].instances.length=0;console.log(this.melody),this.melodyInstrumentID.fill(4);for(let e=0;e<this.melodyInstrumentID.length;e++)this.melodyInstrumentID.eventOnModify(e,4);this.activeEffectID.length=0,console.log(this.activeEffectID),this.availableMelody=[{notes:[]},{notes:[]},{notes:[]},{notes:[]}],this.#t=1,this.#n=0}addInstrumentOnPosition(e,t,n,i){this.melodyInstrumentID.eventOnModify(t*40+n,e);let r;if(this.melody[t].instances.forEach((a,c)=>{a.id_on_beat===n&&(r=c,a.instrument=e)}),e===4){r!==void 0&&this.melody[t].instances.splice(r,1);return}else if(r!==void 0)return this.melody[t].instances[r];this.availableIds.includes(t*40+n)||this.availableIds.push(t*40+n);const o={id_on_beat:n,instrument:e,effect:-1-t,played_at:-1,pitch:i};return this.melody[t].instances.push(o),o}addInstrumentOnRandomAvailablePosition(e){if(this.availableMelody[e].notes.length===0){console.log("no available ids");return}const t=this.availableMelody[e].notes.pop(),n={id_on_beat:t.id_on_beat,instrument:e,effect:-1-t.beat,played_at:-1,pitch:t.pitch};this.melody[t.beat].instances.push(n),this.#n++,this.melodyInstrumentID.eventOnModify(t.beat*40+t.id_on_beat,e),this.playInstrumentAt(n)}getProgress(){return this.#n/this.#t}addEffectOnRandomAvailablePosition(e,t){if(this.availableEffectIds.length===0){console.log("no available ids");return}const n=this.availableEffectIds.pop(),i=-1-n.effect,r=n.id_on_beat%40;this.activeEffectID.push({beat:i,id_on_beat:r,effect:e,color:t})}addEffectOnPosition(e,t,n,i,r){let o;if(this.melody[t].instances.forEach((c,l)=>{c.id_on_beat===n&&(o=c,c.effect[e]=i)}),!o)return;let a=!1;return this.activeEffectID.forEach((c,l)=>{c.beat===t&&c.id_on_beat===n&&(a=!0,c.effect=e,c.color=r)}),a||this.activeEffectID.push({beat:t,id_on_beat:n,effect:e,color:r}),o}playInstrumentAt(e,t=1){let n=this.instruments[e.instrument];fl&&(Math.floor(Math.random()*cn.length),t>.5?t=0:t=Math.floor((1-t/.5)*10),n.play(e.pitch-t,e.effect))}playEmptyInstrument(){fl&&AI.triggerAttackRelease(30,.01)}flattenMelody(){let e=[];return this.melody.forEach(t=>{t.beat.forEach(n=>{e.push(n)})}),e}}const LI=s=>{const e=s.clock.getDelta();return s.paused||document.hidden||e>.5?(s.time.delta=0,s):(s.time.delta=e,s.time.elapsed=s.clock.elapsedTime,s)},OI=s=>(s.composer.render(s.scene,s.camera),s),UI=Ig([oo,Ng]),FI=s=>1/(1+s+.48*s*s+.235*s*s*s);function Au(s,e,t,n=.25,i=.01,r=1/0,o=FI,a=.001){const c="velocity_"+e;if(s.__damp===void 0&&(s.__damp={}),s.__damp[c]===void 0&&(s.__damp[c]=0),Math.abs(s[e]-t)<=a)return s[e]=t,!1;n=Math.max(1e-4,n);const l=2/n,u=o(l*i);let h=s[e]-t;const d=t,f=r*n;h=Math.min(Math.max(h,-f),f),t=s[e]-h;const m=(s.__damp[c]+l*h)*i;s.__damp[c]=(s.__damp[c]-l*m)*u;let _=t+(h+m)*u;return d-s[e]>0==_>d&&(_=d,s.__damp[c]=(_-d)/i),s[e]=_,!0}const dc=new N;let om,am,cm;function Cu(s,e,t,n,i,r,o){return dc.copy(e),om=Au(s,"x",dc.x,t,n,i,r,o),am=Au(s,"y",dc.y,t,n,i,r,o),cm=Au(s,"z",dc.z,t,n,i,r,o),om||am||cm}const Di=new N,Ru=new N,kI=s=>{const e=UI(s);for(let t=0;t<e.length;t++){const n=e[t],i=s.objects.get(n);s.win||(s.Input.current_input.mouseMove&&(i.userData.dirV.x+=s.Input.current_input.diffX*4*3.14,i.userData.dirV.y-=s.Input.current_input.diffY*4*3.14),i.userData.dirV.x+=s.Input.current_input.MoveDir.x/8/3.14,i.userData.dirV.y+=s.Input.current_input.MoveDir.y/8/3.14),i.userData.dirV.x=Math.min(Math.max(i.userData.dirV.x,-1),1),i.userData.dirV.y=Math.min(Math.max(i.userData.dirV.y,-1),1);const r=s.Curve.pos.clone();Di.copy(i.userData.dirV);let o=Math.max(.5,1-Di.length());Di.copy(s.Curve.biNormal.clone().multiplyScalar(Di.x).add(s.Curve.normal.clone().multiplyScalar(Di.y))),Di.multiplyScalar(1-o),s.GlobalParameters.speed=i.userData.speed*o,i.userData.offset.add(Di.clone().multiplyScalar(3.5*s.time.delta)).clampLength(0,.5),s.Input.current_input.mouseMove||Cu(i.userData.dirV,Ru.set(0,0,0),.25,s.time.delta),(s.win===!0||s.editMode===!0&&!s.Input.current_input.mouseMove)&&(Cu(i.userData.dirV,Ru.set(0,0,0),.25,s.time.delta),Cu(i.userData.offset,Ru.set(0,0,0),.25,s.time.delta)),i.position.copy(r.add(i.userData.offset)),i.up.copy(s.Curve.normal),Di.add(s.Curve.tangent.clone().multiplyScalar(o*2)),i.lookAt(r.clone().add(Di))}return s},BI=Ig([oo,Lg]),VI=s=>{const e=BI(s);for(let t=0;t<e.length;t++){const n=e[t],i=s.objects.get(n),r=s.Curve.normal.clone();i.position.copy(s.camera.position.clone().add(s.Curve.tangent.clone().multiplyScalar(.01))),i.position.add(r.clone().multiplyScalar(-.08)),i.up.copy(r.clone().multiplyScalar(-1)),i.lookAt(s.Curve.pos.clone().sub(s.Curve.tangent).sub(r.multiplyScalar(.2)))}return s};function fc(s,e){s.enabled=!0,s.setEffectiveTimeScale(1),s.setEffectiveWeight(e)}function lm(s,e,t){return Math.min(Math.max(s,e),t)}const zI=s=>{const e=s.camera,t=lm(e.userData.dirV.x/1.2,-1,1),n=lm(e.userData.dirV.y/1,-.5,1),i=t<0?-t:0,r=t>0?t:0;fc(s.hand_actions[1],i),fc(s.hand_actions[2],r);const o=n>0?n:0,a=n<0?-n:0;return fc(s.hand_actions[3],o),fc(s.hand_actions[4],a),s.mixer.update(s.time.delta),s},Ur=4,Yr=1024,Vt=4,pc=new Ue;new N(1,1,1);let Fs;function GI(s=1){const e=new Float32Array(Yr*Vt*s*Ur),t=new ag(e,Yr,Vt*s,En,ci);return t.wrapS=mn,t.wrapY=mn,t.magFilter=Dt,t.needsUpdate=!0,t}function HI(s,e,t=0,n=void 0,i){e.computeFrenetFramesLookingAtPreviuos===void 0&&(e.computeFrenetFramesLookingAtPreviuos=function(c,l,u,h){new N;const d=[],f=[],m=[],_=new N,g=new Ue;for(let x=0;x<=c;x++){const v=x/c;d[x]=this.getTangentAt(v,new N)}f[0]=u,m[0]=h;function p(x,v,M){return Math.max(v,Math.min(M,x))}for(let x=1;x<=c;x++){if(f[x]=f[x-1].clone(),m[x]=m[x-1].clone(),_.crossVectors(d[x-1],d[x]),_.length()>Number.EPSILON){_.normalize();const v=Math.acos(p(d[x-1].dot(d[x]),-1,1));f[x].applyMatrix4(g.makeRotationAxis(_,v))}m[x].crossVectors(d[x],f[x])}if(l===!0){let x=Math.acos(p(f[0].dot(f[c]),-1,1));x/=c,d[0].dot(_.crossVectors(f[0],f[c]))>0&&(x=-x);for(let v=1;v<=c;v++)f[v].applyMatrix4(g.makeRotationAxis(d[v],x*v)),m[v].crossVectors(d[v],f[v])}return{tangents:d,normals:f,binormals:m}});const r=Math.floor(Yr*(Vt/4));e.arcLengthDivisions=r/2,e.updateArcLengths();const o=e.getSpacedPoints(r);let a;n===void 0&&t===0?a=e.computeFrenetFrames(r,!1):(n===void 0&&(n=t-1),a=e.computeFrenetFramesLookingAtPreviuos(r,!1,i[n].normals[r-1],i[n].binormals[r-1])),a.points=o,i[t]=a;for(let c=0;c<r;c++){const l=Math.floor(c/Yr),u=c%Yr;let h=a.points[c];mc(s,u,h.x,h.y,h.z,0+l+Vt*t),h=a.tangents[c],mc(s,u,h.x,h.y,h.z,1+l+Vt*t),h=a.normals[c],mc(s,u,h.x,h.y,h.z,2+l+Vt*t),h=a.binormals[c],mc(s,u,h.x,h.y,h.z,3+l+Vt*t)}s.needsUpdate=!0}function mc(s,e,t,n,i,r){const o=s.image,{data:a}=o,c=Ur*Yr*r;a[e*Ur+c+0]=t,a[e*Ur+c+1]=n,a[e*Ur+c+2]=i,a[e*Ur+c+3]=1}function WI(s){return{spineTexture:{value:s},pathOffset:{type:"f",value:0},pathSegment:{type:"f",value:1},spineOffset:{type:"f",value:0},spineLength:{type:"f",value:.01},flow:{type:"i",value:1},time:{type:"f",value:0},colors:{value:[.8,.8,.8,.1,0,.3,1,1,1,.7,.2,.2,.2,.2,.6]}}}function Gi(s,e,t,n){s.setAttribute(e.toString(),new Uc(new Int32Array(t),n)),s.attributes[e.toString()].setUsage(wh),s.attributes[e.toString()].needsUpdate=!0}class XI{constructor(e=1){const t=GI(e),n=WI(t);this.renderable=[],this.curveArray=new Array(e),this.curveLengthArray=new Array(e),this.splineTexure=t,this.uniforms=n,this.frenetFrames=new Array(e),Fs=this}updateCurve(e,t,n=void 0){if(e>=this.curveArray.length)throw Error("Index out of range for Flow");const i=t.getLength();this.uniforms.spineLength.value=i,this.curveLengthArray[e]=i,this.curveArray[e]=t,HI(this.splineTexure,t,e,n,this.frenetFrames)}addFlowRenderer(e){let t=new Ss(this,e);return this.renderable.push(t),t}addSIFlowRenderer(e,t,n){let i=new jI(e,t,n);return this.renderable.push(i),i}addIFlowRenderer(e,t,n,i){let r=new YI(e,t,n,i);return this.renderable.push(r),r}addIIFlowRenderer(e,t,n,i){let r=new H_(e,t,n,i);return this.renderable.push(r),r}}class qI{constructor(e,t){this.cellCount=e,this.instancedMatrices=t,this.uniforms={flowData:{value:new Array(e*2).fill(0)},iMatrix:{value:new Array(t.length*16).fill(0)}};for(let n=0;n<t.length;n++)t[n].toArray(this.uniforms.iMatrix.value,n*16);this.offsets=new Array(e).fill(0)}renderables=[];addObject(e,t,n=void 0){const i=new e(this.cellCount,t,this.instancedMatrices,{...this.uniforms,...n});return this.renderables.push(i),i}writeChanges(e,t=void 0){this.uniforms.flowData.value[e*2+0]=Fs.curveLengthArray[t],this.uniforms.flowData.value[e*2+1]=this.offsets[e]}moveIndividualAlongCurve(e,t,n=void 0){this.offsets[e]+=t,this.writeChanges(e,n)}setIndividualAlongCurve(e,t,n=void 0){this.offsets[e]=t,this.writeChanges(e,n)}updatePerPlacingIndex=(e,t,n)=>{this.renderables.forEach(i=>i.updatePerPlacingIndex(e,t,n))};moveGeometryForward=(e,t,n)=>{this.setIndividualAlongCurve(e,t+n,n)}}class Ss{uniforms={spineTexture:{value:null},pathOffset:{type:"f",value:0},pathSegment:{type:"f",value:1},spineOffset:{type:"f",value:0},spineLength:{type:"f",value:400},flow:{type:"i",value:1},time:{type:"f",value:0},colors:{value:[.05,.2,.6,.1,.6,.3,.3,.3,.45,.7,.1,.1,.05,.05,.05]}};curveLengthArray;attributeNames;modifyShader(e,t,n=1){e.__ok||(e.__ok=!0,e.onBeforeCompile=i=>{if(i.__modified)return;i.__modified=!0,Object.assign(i.uniforms,t);const r=`
		attribute uint _id;
		attribute vec3 _normal_;
		attribute uint instanceID;
		uniform sampler2D spineTexture;
		uniform float pathOffset;
		uniform float pathSegment;
		uniform float spineOffset;
		uniform float spineLength;
		uniform int flow;
		uniform float time;
		uniform vec3 colors[4];
		float textureLayers = ${Vt*n}.;
		float textureStacks = ${n}.;

		${i.vertexShader}
		`.replace("#include <beginnormal_vertex>","").replace("#include <defaultnormal_vertex>","").replace("#include <begin_vertex>","").replace(/void\s*main\s*\(\)\s*\{/,`
uint hash( uint x ) {
    x += ( x << 10u );
    x ^= ( x >>  6u );
    x += ( x <<  3u );
    x ^= ( x >> 11u );
    x += ( x << 15u );
    return x;
}
float floatConstruct( uint m ) {
    const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
    const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32

    m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
    m |= ieeeOne;                          // Add fractional part to 1.0

    float  f = uintBitsToFloat( m );       // Range [1:2]
    return f - 1.0;                        // Range [0:1]
}

float random( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }
void main() {
#include <beginnormal_vertex>
vec3 pos = position.xyz;
pos.yz+=pos.yz*sin(time*10.+2.*random(float(_id)))*0.05;
vec4 worldPos = modelMatrix * vec4(pos, 1.);

bool bend = flow > 0;
float xWeight = bend ? 0. : 1.;
#ifdef USE_INSTANCING
float pathOffsetFromInstanceMatrix = instanceMatrix[2][3];
float spineLengthFromInstanceMatrix = instanceMatrix[0][3];
float spinePortion = bend ? (worldPos.x + spineOffset) / spineLengthFromInstanceMatrix : 0.;
float mt = (spinePortion * pathSegment + pathOffset + pathOffsetFromInstanceMatrix);
//mt = pathOffset;
#else
float spinePortion = bend ? (worldPos.x + spineOffset) / spineLength : 0.;
float mt = (spinePortion * pathSegment + pathOffset)*textureStacks;
#endif

float m_mt = mod(mt, textureStacks);
float rowOffset = floor(m_mt)*4.;
mt = fract(m_mt);
#ifdef USE_INSTANCING
//rowOffset += instanceMatrix[1][3] * ${Vt}.;
#endif

vec3 spinePos = texture2D(spineTexture, vec2(mt, (0. + rowOffset + 0.5) / textureLayers)).xyz;
vec3 a =        texture2D(spineTexture, vec2(mt, (1. + rowOffset + 0.5) / textureLayers)).xyz;
vec3 b =        texture2D(spineTexture, vec2(mt, (2. + rowOffset + 0.5) / textureLayers)).xyz;
vec3 c =        texture2D(spineTexture, vec2(mt, (3. + rowOffset + 0.5) / textureLayers)).xyz;
mat3 basis = mat3(a, b, c);

vec3 transformed = basis*
 vec3(worldPos.x * xWeight, worldPos.y * 1., worldPos.z * 1.)
	+ spinePos;

vec3 transformedNormal = normalMatrix * (basis * objectNormal);

			`).replace("#include <project_vertex>",`vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );
				gl_Position = projectionMatrix * mvPosition;`).replace("#include <color_vertex>",`#ifdef USE_INSTANCING_COLOR
				int r_n = int(random(float(_id)+pathOffsetFromInstanceMatrix)*4.);
				r_n = int(time/2.)%4;
				r_n = int(pathOffsetFromInstanceMatrix);
	//vColor.xyz = colors[r_n];
	vColor.xyz = vec3(1,1,1);
	#if defined( USE_MAP )
	vec2 nUv = vec2(r_n % 2 , ((r_n)/2))*0.5;
	vMapUv/=2.;
	vMapUv.xy += nUv;
	#endif
	#endif`);i.vertexShader=r})}constructor(e,t){this.uniforms.spineTexture=Fs.uniforms.spineTexture,this.uniforms.spineLength=Fs.uniforms.spineLength,this.uniforms.pathOffset=Fs.uniforms.pathOffset,this.uniforms.time=Fs.uniforms.time,this.curveLengthArray=Fs.curveLengthArray;let n=i=>{i.traverse(function(r){(r instanceof Kt||r instanceof Qn)&&(r.material=r.material.clone(),this.modifyShader(r.material,this.uniforms,this.curveLengthArray.length))}.bind(this))};Array.isArray(e)?e.forEach(i=>{n(i)}):n(e),t!==void 0&&Object.assign(this.uniforms,t),this.object3D=e}moveAlongCurve(e){this.uniforms.pathOffset.value+=e}setAlongCurve(e){this.uniforms.pathOffset.value=e}}class jI extends Ss{modifyShader(e,t,n=1){e.__ok||(e.__ok=!0,e.onBeforeCompile=i=>{if(i.__modified)return;i.__modified=!0,Object.assign(i.uniforms,t);const r=`
		attribute uint _id;
		attribute vec3 _normal_;
		attribute uint instanceID;
		uniform sampler2D spineTexture;
		uniform float pathOffset;
		uniform float pathSegment;
		uniform float spineOffset;
		uniform float spineLength;
		uniform int flow;
		uniform float time;
		uniform vec3 colors[4];
		float textureLayers = ${Vt*n}.;
		float textureStacks = ${n}.;

		${i.vertexShader}
		`.replace("#include <beginnormal_vertex>","").replace("#include <defaultnormal_vertex>","").replace("#include <begin_vertex>","").replace(/void\s*main\s*\(\)\s*\{/,`
uint hash( uint x ) {
    x += ( x << 10u );
    x ^= ( x >>  6u );
    x += ( x <<  3u );
    x ^= ( x >> 11u );
    x += ( x << 15u );
    return x;
}
float floatConstruct( uint m ) {
    const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
    const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32

    m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
    m |= ieeeOne;                          // Add fractional part to 1.0

    float  f = uintBitsToFloat( m );       // Range [1:2]
    return f - 1.0;                        // Range [0:1]
}

float random( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }
void main() {
#include <beginnormal_vertex>

  //float angle =    sin(time*0.5+2.*random(float(instanceMatrix[2][3])));
  
  float angle = time*0.5+float(instanceMatrix[2][3])*time;
  float si = sin(angle);
  float co = cos(angle);
  mat3 rotMat = mat3(
    1,0,0,
    0,co, si, 
    0,-si, co 
  );
  rotMat = mat3(1);
  
vec3 pos = rotMat * position.xyz;
pos.yz+=pos.yz*sin(time*10.+2.*random(float(_id)))*0.05;
vec4 worldPos = modelMatrix * vec4(pos, 1.);

bool bend = flow > 0;
float xWeight = bend ? 0. : 1.;
#ifdef USE_INSTANCING
float pathOffsetFromInstanceMatrix = instanceMatrix[2][3];
float spineLengthFromInstanceMatrix = instanceMatrix[0][3];
float spinePortion = bend ? (worldPos.x + spineOffset) / spineLengthFromInstanceMatrix : 0.;
float mt = (spinePortion * pathSegment + pathOffset + pathOffsetFromInstanceMatrix);
//mt = pathOffset;
#else
float spinePortion = bend ? (worldPos.x + spineOffset) / spineLength : 0.;
float mt = (spinePortion * pathSegment + pathOffset)*textureStacks;
#endif

float m_mt = mod(mt, textureStacks);
float rowOffset = floor(m_mt)*4.;
mt = fract(m_mt);
#ifdef USE_INSTANCING
//rowOffset += instanceMatrix[1][3] * ${Vt}.;
#endif

vec3 spinePos = texture2D(spineTexture, vec2(mt, (0. + rowOffset + 0.5) / textureLayers)).xyz;
vec3 a =        texture2D(spineTexture, vec2(mt, (1. + rowOffset + 0.5) / textureLayers)).xyz;
vec3 b =        texture2D(spineTexture, vec2(mt, (2. + rowOffset + 0.5) / textureLayers)).xyz;
vec3 c =        texture2D(spineTexture, vec2(mt, (3. + rowOffset + 0.5) / textureLayers)).xyz;
mat3 basis = mat3(a, b, c);

vec3 transformed = basis*
 vec3(worldPos.x * xWeight, worldPos.y * 1., worldPos.z * 1.)
	+ spinePos;

vec3 transformedNormal = normalMatrix * (basis * rotMat * objectNormal);

			`).replace("#include <project_vertex>",`vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );
				gl_Position = projectionMatrix * mvPosition;`).replace("#include <color_vertex>",`#ifdef USE_INSTANCING_COLOR
				int r_n = int(random(float(_id)+pathOffsetFromInstanceMatrix)*4.);
				
				r_n = int(random(float(_id)+pathOffsetFromInstanceMatrix)*4.);
			//	r_n = int(time/2.)%4;
			//	r_n = int(pathOffsetFromInstanceMatrix);
	//			r_n = int(_id)%2;
	r_n =2;
				vColor.xyz = vec3(0.05);
				vColor.x = mix(vColor.x,0.25,sin(time*10.+2.*random(float(_id)))*0.5+0.5);
			/*	if (float(_id) < 0.5) vColor.xyz = vec3(1,0,0);
				else if (float(_id) < 1.5 ) vColor.xyz = vec3(0,1,0);
				else if (float(_id) < 2.5 ) vColor.xyz = vec3(0,0,1);
				else vColor.xyz = vec3(0);*/
				//vColor.xyz = vec3(1,1,1);
				#if defined( USE_MAP )
				vec2 nUv = vec2(r_n % 2 , ((r_n)/2))*0.5;
				vMapUv/=2.;
				vMapUv.xy += nUv;
				#endif
				#endif`);i.vertexShader=r})}constructor(e,t,n){const i=new Qn(t,n,e);i.instanceMatrix.setUsage(wh),i.frustumCulled=!1,super(i,void 0),console.log(this.uniforms),this.offsets=new Array(e).fill(0)}writeChanges(e,t=void 0){pc.elements[3]=this.curveLengthArray[t],pc.elements[7]=t,pc.elements[11]=this.offsets[e],this.object3D.setMatrixAt(e,pc),this.object3D.instanceMatrix.needsUpdate=!0}moveIndividualAlongCurve(e,t,n=void 0){this.offsets[e]+=t,this.writeChanges(e,n)}setIndividualAlongCurve(e,t,n=void 0){this.offsets[e]=t,this.writeChanges(e,n)}setCurve(e,t){if(isNaN(t))throw Error("curve index being set is Not a Number (NaN)");this.writeChanges(e,t)}}class YI extends Ss{matrices=void 0;cell_count=0;instane_count=0;modifyShader(e,t,n=1){e.__ok||(e.__ok=!0,e.onBeforeCompile=i=>{if(i.__modified)return;i.__modified=!0,Object.assign(i.uniforms,t);const r=`
				attribute int instanceID;
				attribute int flowID;
				attribute int effectID;

				uniform sampler2D spineTexture;
				
				uniform float pathOffset;
				uniform float pathSegment;
				uniform float spineOffset;
				uniform float spineLength;
				
				uniform float flowData[16];
				uniform mat4 iMatrix[40];
				uniform vec3 colors[4];
				uniform float rotationSpeed;
				uniform float triAmplitude;
				
				uniform int flow;
				uniform float time;

				float textureLayers = ${Vt*n}.;
				float textureStacks = ${n}.;

		${i.vertexShader}
		`.replace("#include <beginnormal_vertex>","").replace("#include <defaultnormal_vertex>","").replace("#include <begin_vertex>","").replace(/void\s*main\s*\(\)\s*\{/,`
				uint hash( uint x ) {
					x += ( x << 10u );
					x ^= ( x >>  6u );
					x += ( x <<  3u );
					x ^= ( x >> 11u );
					x += ( x << 15u );
					return x;
				}
				float floatConstruct( uint m ) {
					const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
					const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32
				
					m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
					m |= ieeeOne;                          // Add fractional part to 1.0
				
					float  f = uintBitsToFloat( m );       // Range [1:2]
					return f - 1.0;                        // Range [0:1]
				}
				
				float random( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }
				
				mat3 getRotZ(float angle){
				 float si = sin(angle);
					  float co = cos(angle);
					  return mat3(
						co, si, 0.0,
						-si, co, 0.0,
						0.0, 0.0, 1.0
					  );
				}
				
				mat3 rotationMatrix(vec3 axis, float angle) {
					axis = normalize(axis);
					float s = sin(angle);
					float c = cos(angle);
					float oc = 1.0 - c;

					return mat3(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,
					oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  
					oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c      );
				}

				vec3 rotate(vec3 v, vec3 axis, float angle,out mat3 rotMat) {
				mat3 m = rotationMatrix(axis, angle);
				rotMat =m;
					return (m * v).xyz;
				}
				void main() {
					#include <beginnormal_vertex>
					vec3 pos = position.xyz;
					float n03 =  flowData[0+flowID*2];
					float n23 = flowData[1+flowID*2];
					
					mat4 im = iMatrix[instanceID];
					float r = random(float(instanceID));
					float local_angle =    sin(time*10.+2.*random(float(instanceID)));
					mat3 local_rotMat = getRotZ(local_angle);
					
					float angle =    sin((time+random(float(flowID)*100.)))*rotationSpeed*3.14;
					//rotate in at origin, then translate to world 
					mat3 rotMat;
					vec4 worldPos = /*modelMatrix **/ im  * vec4(local_rotMat*pos, 1.);
					
					worldPos.xyz = rotate(worldPos.xyz,vec3(1,0,0),angle,rotMat);
					//yz - towards center direction
					worldPos.yz+=worldPos.yz*sin(time*10.+2.*random(float(instanceID)))*0.05*triAmplitude;
					//yz - towards center direction

					bool bend = flow > 0;
					float xWeight = bend ? 0. : 1.;
					#ifdef USE_INSTANCING
					float pathOffsetFromInstanceMatrix = n23;
					float spineLengthFromInstanceMatrix = n03;
					
					float spinePortion = bend ? (worldPos.x + spineOffset) / spineLengthFromInstanceMatrix : 0.;
					float u_per_vertex = (spinePortion * pathSegment + pathOffsetFromInstanceMatrix);
					
					#else
					float spinePortion = bend ? (worldPos.x + spineOffset) / spineLength : 0.;
					float u_per_vertex = (spinePortion * pathSegment + pathOffset);
					#endif
					
					float cI = mod(u_per_vertex, textureStacks);
					float rowOffset = floor(cI)*4.;
					
					float u_norm = fract(u_per_vertex);
					
					vec3 spinePos = texture2D(spineTexture, vec2(u_norm, (0. + rowOffset + 0.5) / textureLayers)).xyz;
					vec3 a =        texture2D(spineTexture, vec2(u_norm, (1. + rowOffset + 0.5) / textureLayers)).xyz;
					vec3 b =        texture2D(spineTexture, vec2(u_norm, (2. + rowOffset + 0.5) / textureLayers)).xyz;
					vec3 c =        texture2D(spineTexture, vec2(u_norm, (3. + rowOffset + 0.5) / textureLayers)).xyz;

					mat3 basis = mat3(a, b, c);
					
					vec3 transformed = basis*
					 vec3(worldPos.x * xWeight, worldPos.y * 1., worldPos.z * 1.)
						+ spinePos;
						
					//transformed = worldPos.xyz+0.1*float(instanceID);
					
					vec3 transformedNormal =  local_rotMat*objectNormal;
					
					mat3 im_rot = mat3( im );
					transformedNormal /= vec3( dot( im_rot[ 0 ], im_rot[ 0 ] ), dot( im_rot[ 1 ], im_rot[ 1 ] ), dot( im_rot[ 2 ], im_rot[ 2 ] ) );
					transformedNormal = im_rot *transformedNormal;
					transformedNormal = rotMat * transformedNormal;
					transformedNormal = normalMatrix * (basis * transformedNormal);
					
						`).replace("#include <project_vertex>",`vec4 mvPosition = viewMatrix * vec4( transformed, 1.0 );
							gl_Position = projectionMatrix * mvPosition;`).replace("#include <color_vertex>",`
							int r_n = int(random(random(float(instanceID))+pathOffsetFromInstanceMatrix)*4.);
							r_n = effectID;
							//r_n = int(time/2.)%4;
							//r_n = int(pathOffsetFromInstanceMatrix);
				vColor.xyz = colors[r_n];
				#if defined( USE_MAP )
				vec2 nUv = vec2(r_n % 2 , ((r_n)/2))*0.5;
				vMapUv/=2.;
				vMapUv.xy += nUv;
				#endif
				//vColor.xyz = vec3(1,1,1);
	
	`);i.vertexShader=r})}constructor(e,t,n,i=void 0){const r=n.length;let o=c=>{const l=new Qn(c.geometry.clone(),c.material.clone(),0);return l.name=c.name,l.material.vertexColors=!0,l.frustumCulled=!1,l.userData.per_cell_count=0,Gi(l.geometry,"instanceID",e*r,1),Gi(l.geometry,"flowID",e*r,1),Gi(l.geometry,"effectID",e*r,1),l},a;Array.isArray(t)?(a=[],t.forEach(c=>{a.push(o(c))})):a=o(t),super(a,i),this.matrices=n,this.cell_count=e,this.instane_count=r;for(let c=0;c<e;c++)this.clearInstanceIdsAt(c);if(i===void 0||i.flowData===void 0||i.iMatrix===void 0){this.uniforms.flowData={value:new Array(e*2).fill(0)},this.uniforms.iMatrix={value:new Array(r*16).fill(0)};for(let c=0;c<n.length;c++)n[c].toArray(this.uniforms.iMatrix.value,c*16)}else this.uniforms.flowData=i.flowData,this.uniforms.iMatrix=i.iMatrix;this.offsets=new Array(e).fill(0)}writeChanges(e,t=void 0){this.uniforms.flowData.value[e*2+0]=this.curveLengthArray[t],this.uniforms.flowData.value[e*2+1]=this.offsets[e]}moveIndividualAlongCurve(e,t,n=void 0){this.offsets[e]+=t,this.writeChanges(e,n)}setIndividualAlongCurve(e,t,n=void 0){this.offsets[e]=t,this.writeChanges(e,n)}setCurve(e,t){if(isNaN(t))throw Error("curve index being set is Not a Number (NaN)");this.writeChanges(e,t)}clearInstanceIdsAt=e=>{let t=n=>{n.count=0};Array.isArray(this.object3D)?this.object3D.forEach(n=>{t(n)}):t(this.object3D)};updateInstancesAt=()=>{for(let e=0;e<this.uniforms.activeEffectID.value.length;e++){const t=this.uniforms.activeEffectID.value[e].beat,n=this.uniforms.activeEffectID.value[e].id_on_beat,i=this.uniforms.activeEffectID.value[e].effect,r=this.uniforms.activeEffectID.value[e].color,o=this.object3D[i];this.cell_count/this.uniforms.barLoops.value,o.geometry.attributes.flowID.array[o.count]=t,o.geometry.attributes.flowID.needsUpdate=!0,o.geometry.attributes.instanceID.array[o.count]=n,o.geometry.attributes.instanceID.needsUpdate=!0,o.geometry.attributes.effectID.array[o.count]=r,o.geometry.attributes.effectID.needsUpdate=!0,o.count++}};updatePlacement=(e,t,n)=>{this.setIndividualAlongCurve(e,t+n,n)};updatePerPlacingIndex=(e,t,n)=>{this.clearInstanceIdsAt(e),this.updateInstancesAt(e)}}class $I extends Ss{matrices=void 0;cell_count=0;instane_count=0;modifyShader(e,t,n=1){e.__ok||(e.__ok=!0,e.onBeforeCompile=i=>{if(i.__modified)return;i.__modified=!0,Object.assign(i.uniforms,t);const r=`
				attribute int instanceID;
				attribute int flowID;
				attribute int melodyInstrumentID;
				uniform sampler2D spineTexture;
				
				uniform float pathOffset;
				uniform float pathSegment;
				uniform float spineOffset;
				uniform float spineLength;
				//uniform int melodyInstrumentID[40];
				uniform float flowData[16];
				uniform mat4 iMatrix[40];
				uniform vec3 colors[5];
				uniform float rotationSpeed;
				uniform float triAmplitude;
				
				uniform int flow;
				uniform float time;

				float textureLayers = ${Vt*n}.;
				float textureStacks = ${n}.;

		${i.vertexShader}
		`.replace("#include <beginnormal_vertex>","").replace("#include <defaultnormal_vertex>","").replace("#include <begin_vertex>","").replace(/void\s*main\s*\(\)\s*\{/,`
				uint hash( uint x ) {
					x += ( x << 10u );
					x ^= ( x >>  6u );
					x += ( x <<  3u );
					x ^= ( x >> 11u );
					x += ( x << 15u );
					return x;
				}
				float floatConstruct( uint m ) {
					const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
					const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32
				
					m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
					m |= ieeeOne;                          // Add fractional part to 1.0
				
					float  f = uintBitsToFloat( m );       // Range [1:2]
					return f - 1.0;                        // Range [0:1]
				}
				
				float random( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }
				
				mat3 getRotZ(float angle){
				 float si = sin(angle);
					  float co = cos(angle);
					  return mat3(
						co, si, 0.0,
						-si, co, 0.0,
						0.0, 0.0, 1.0
					  );
				}
				mat3 getRotX(float angle){
				
				  float si = sin(angle);
				  float co = cos(angle);
				  return mat3(
					co, 0, si,
					0, co, -si,
					0.0, 0.0, 1.0
				  );
				 }
				mat3 rotationMatrix(vec3 axis, float angle) {
					axis = normalize(axis);
					float s = sin(angle);
					float c = cos(angle);
					float oc = 1.0 - c;

					return mat3(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,
					oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  
					oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c      );
				}

				vec3 rotate(vec3 v, vec3 axis, float angle,out mat3 rotMat) {
				mat3 m = rotationMatrix(axis, angle);
				rotMat =m;
					return (m * v).xyz;
				}
				void main() {
					#include <beginnormal_vertex>
					vec3 pos = position.xyz;
					float n03 =  flowData[0+flowID*2];
					float n23 = flowData[1+flowID*2];
					
					mat4 im = iMatrix[instanceID];
					float r = random(float(instanceID));
					float angle =    sin((time+random(float(flowID)*100.)))*rotationSpeed*3.14;
					mat3 rotMat;
					
					//rotate in at origin, then translate to world 
					vec4 worldPos = /*modelMatrix **/ im  * vec4(pos, 1.);
					worldPos.xyz = rotate(worldPos.xyz,vec3(1,0,0),angle,rotMat);
					//yz - towards center direction
					worldPos.yz+=worldPos.yz*sin(time*10.+2.*random(float(instanceID)))*0.05*triAmplitude;

					bool bend = flow > 0;
					float xWeight = bend ? 0. : 1.;
					#ifdef USE_INSTANCING
					float pathOffsetFromInstanceMatrix = n23;
					float spineLengthFromInstanceMatrix = n03;
					
					
					float spinePortion = bend ? (worldPos.x + spineOffset) / spineLengthFromInstanceMatrix : 0.;
					float u_per_vertex = (spinePortion * pathSegment + pathOffsetFromInstanceMatrix);
					
					#else
					float spinePortion = bend ? (worldPos.x + spineOffset) / spineLength : 0.;
					float u_per_vertex = (spinePortion * pathSegment + pathOffset);
					#endif
					
					float cI = mod(u_per_vertex, textureStacks);
					float rowOffset = floor(cI)*4.;
					
					float u_norm = fract(u_per_vertex);
					
					vec3 spinePos = texture2D(spineTexture, vec2(u_norm, (0. + rowOffset + 0.5) / textureLayers)).xyz;
					vec3 a =        texture2D(spineTexture, vec2(u_norm, (1. + rowOffset + 0.5) / textureLayers)).xyz;
					vec3 b =        texture2D(spineTexture, vec2(u_norm, (2. + rowOffset + 0.5) / textureLayers)).xyz;
					vec3 c =        texture2D(spineTexture, vec2(u_norm, (3. + rowOffset + 0.5) / textureLayers)).xyz;

					mat3 basis = mat3(a, b, c);
					
					vec3 transformed = basis*
					 vec3(worldPos.x * xWeight, worldPos.y * 1., worldPos.z * 1.)
						+ spinePos;
						
					//transformed = worldPos.xyz+0.1*float(instanceID);
					
					vec3 transformedNormal =  objectNormal;
					
					mat3 im_rot = mat3( im );
					transformedNormal /= vec3( dot( im_rot[ 0 ], im_rot[ 0 ] ), dot( im_rot[ 1 ], im_rot[ 1 ] ), dot( im_rot[ 2 ], im_rot[ 2 ] ) );
					transformedNormal =rotMat* im_rot *transformedNormal;
						
					transformedNormal = normalMatrix * (basis * transformedNormal);
					
						`).replace("#include <project_vertex>",`vec4 mvPosition = viewMatrix * vec4( transformed, 1.0 );
							gl_Position = projectionMatrix * mvPosition;`).replace("#include <color_vertex>",`
				//int r_n = int(random(random(float(instanceID))+pathOffsetFromInstanceMatrix)*4.);
				//int r_n = 2;
				//r_n = int(time/2.)%4;
				//r_n = int(pathOffsetFromInstanceMatrix);
				int r_n = melodyInstrumentID;
				//vColor.xyz = colors[];
				if (r_n==4)
					{
						vColor.xyz = vec3(0.3,0.3,0.3);
						vColor.x = mix(vColor.x,0.45,sin(time*10.+2.*random(float(instanceID)))*0.5+0.5);
						r_n = 2;
					}
					else
						vColor.xyz = vec3(1);
				#if defined( USE_MAP )
				vec2 nUv = vec2(r_n % 2 , ((r_n)/2))*0.5;
				vMapUv/=2.;
				vMapUv.xy += nUv;
				#endif
				//vColor.xyz = vec3(1,1,1);
	
	`);i.vertexShader=r})}constructor(e,t,n,i=void 0){const r=n.length;let o=c=>{const l=new Qn(c.geometry.clone(),c.material.clone(),0);return l.name=c.name,l.material.vertexColors=!0,l.frustumCulled=!1,l.userData.per_cell_count=0,Gi(l.geometry,"instanceID",e*r,1),Gi(l.geometry,"flowID",e*r,1),Gi(l.geometry,"melodyInstrumentID",e*r,1),l},a;if(Array.isArray(t)?(a=[],t.forEach(c=>{a.push(o(c))})):a=o(t),super(a,i),this.matrices=n,this.cell_count=e,this.instane_count=r,this.fillInstanceData(e,r),this.uniforms.melodyInstrumentID!==void 0&&this.uniforms.melodyInstrumentID.value.addOnModifyEventListener(c=>{this.updateInstanceAt(c)}),i===void 0||i.flowData===void 0||i.iMatrix===void 0){this.uniforms.flowData={value:new Array(e*2).fill(0)},this.uniforms.iMatrix={value:new Array(r*16).fill(0)};for(let c=0;c<n.length;c++)n[c].toArray(this.uniforms.iMatrix.value,c*16)}else this.uniforms.flowData=i.flowData,this.uniforms.iMatrix=i.iMatrix;this.offsets=new Array(e).fill(0)}writeChanges(e,t=void 0){this.uniforms.flowData.value[e*2+0]=this.curveLengthArray[t],this.uniforms.flowData.value[e*2+1]=this.offsets[e]}moveIndividualAlongCurve(e,t,n=void 0){this.offsets[e]+=t,this.writeChanges(e,n)}setIndividualAlongCurve(e,t,n=void 0){this.offsets[e]=t,this.writeChanges(e,n)}setCurve(e,t){if(isNaN(t))throw Error("curve index being set is Not a Number (NaN)");this.writeChanges(e,t)}fillInstanceData=(e,t)=>{const n=this.object3D;{n.count=0;for(let i=0;i<e;i++)for(let r=0;r<t;r++){n.geometry.attributes.flowID.array[n.count]=i,n.geometry.attributes.flowID.needsUpdate=!0,n.geometry.attributes.instanceID.array[n.count]=r,n.geometry.attributes.instanceID.needsUpdate=!0;let o=i*this.instane_count+r;this.uniforms.melodyInstrumentID!==void 0&&(o%=this.uniforms.melodyInstrumentID.value.length,n.geometry.attributes.melodyInstrumentID.array[n.count]=this.uniforms.melodyInstrumentID.value[o]),n.geometry.attributes.melodyInstrumentID.needsUpdate=!0,n.count++}}};updateInstanceAt=e=>{const t=this.object3D;this.uniforms.melodyInstrumentID!==void 0&&(t.geometry.attributes.melodyInstrumentID.array[e]=this.uniforms.melodyInstrumentID.value[e]),t.geometry.attributes.melodyInstrumentID.needsUpdate=!0};updatePlacement=(e,t,n)=>{this.setIndividualAlongCurve(e,t+n,n)};updatePerPlacingIndex=(e,t,n)=>{}}class KI extends Ss{matrices=void 0;cell_count=0;instane_count=0;modifyShader(e,t,n=1){e.__ok||(e.__ok=!0,e.onBeforeCompile=i=>{if(i.__modified)return;i.__modified=!0,Object.assign(i.uniforms,t);const r=`
				attribute int instanceID;
				attribute int flowID;
				attribute int melodyInstrumentID;
				attribute uint _tube_id;
				uniform sampler2D spineTexture;
				
				uniform float pathOffset;
				uniform float pathSegment;
				uniform float spineOffset;
				uniform float spineLength;
				//uniform int melodyInstrumentID[40];
				uniform float flowData[16];
				uniform mat4 iMatrix[40];
				uniform vec3 colors[5];
				
				uniform float rotationSpeed;
				uniform float triAmplitude;
				
				uniform int flow;
				uniform float time;

				float textureLayers = ${Vt*n}.;
				float textureStacks = ${n}.;

		${i.vertexShader}
		`.replace("#include <beginnormal_vertex>","").replace("#include <defaultnormal_vertex>","").replace("#include <begin_vertex>","").replace(/void\s*main\s*\(\)\s*\{/,`
				uint hash( uint x ) {
					x += ( x << 10u );
					x ^= ( x >>  6u );
					x += ( x <<  3u );
					x ^= ( x >> 11u );
					x += ( x << 15u );
					return x;
				}
				float floatConstruct( uint m ) {
					const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
					const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32
				
					m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
					m |= ieeeOne;                          // Add fractional part to 1.0
				
					float  f = uintBitsToFloat( m );       // Range [1:2]
					return f - 1.0;                        // Range [0:1]
				}
				
				float random( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }
				
				mat3 getRotZ(float angle){
				 float si = sin(angle);
					  float co = cos(angle);
					  return mat3(
						co, si, 0.0,
						-si, co, 0.0,
						0.0, 0.0, 1.0
					  );
				}
				vec2 SpriteSheetAnimationUV(vec2 uv, float size, float speed)
				{
					uv /= size;
					uv.x += floor(mod(time * speed, 1.0) * size) / size;
					uv.y -= 1./size;
					uv.y += (1. - floor(mod(time * speed / size, 1.0) * size) / size);
					return uv;
				}
				mat3 rotationMatrix(vec3 axis, float angle) {
					axis = normalize(axis);
					float s = sin(angle);
					float c = cos(angle);
					float oc = 1.0 - c;

					return mat3(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,
					oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  
					oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c      );
				}

				vec3 rotate(vec3 v, vec3 axis, float angle,out mat3 rotMat) {
				mat3 m = rotationMatrix(axis, angle);
				rotMat =m;
					return (m * v).xyz;
				}
				void main() {
					#include <beginnormal_vertex>
					vec3 pos = position.xyz;
					float n03 =  flowData[0+flowID*2];
					float n23 = flowData[1+flowID*2];
					
					mat4 im = iMatrix[instanceID];
					float r = random(float(instanceID));
					float angle =    sin((time+random(float(flowID)*100.)))*rotationSpeed*3.14;
					mat3 rotMat = getRotZ(angle);
					
					//rotate in at origin, then translate to world 
					float rand = random(float(instanceID));
					vec3 n_pos= pos.xyz;
					n_pos.xy+= pos.xy*sin(pos.z*50.-time*20.+rand)*float(_tube_id+uint(1))*10./100.;
					vec4 worldPos = /*modelMatrix **/ im  *  modelMatrix*vec4(n_pos, 1.);
					
					worldPos.xyz = rotate(worldPos.xyz,vec3(1,0,0),angle,rotMat);
					
					//yz - towards center direction
					worldPos.yz+=worldPos.yz*sin(time*10.+2.*rand)*0.05*triAmplitude;

					bool bend = flow > 0;
					float xWeight = bend ? 0. : 1.;
					#ifdef USE_INSTANCING
					float pathOffsetFromInstanceMatrix = n23;
					float spineLengthFromInstanceMatrix = n03;
					
					
					float spinePortion = bend ? (worldPos.x + spineOffset) / spineLengthFromInstanceMatrix : 0.;
					float u_per_vertex = (spinePortion * pathSegment + pathOffsetFromInstanceMatrix);
					
					#else
					float spinePortion = bend ? (worldPos.x + spineOffset) / spineLength : 0.;
					float u_per_vertex = (spinePortion * pathSegment + pathOffset);
					#endif
					
					float cI = mod(u_per_vertex, textureStacks);
					float rowOffset = floor(cI)*4.;
					
					float u_norm = fract(u_per_vertex);
					
					vec3 spinePos = texture2D(spineTexture, vec2(u_norm, (0. + rowOffset + 0.5) / textureLayers)).xyz;
					vec3 a =        texture2D(spineTexture, vec2(u_norm, (1. + rowOffset + 0.5) / textureLayers)).xyz;
					vec3 b =        texture2D(spineTexture, vec2(u_norm, (2. + rowOffset + 0.5) / textureLayers)).xyz;
					vec3 c =        texture2D(spineTexture, vec2(u_norm, (3. + rowOffset + 0.5) / textureLayers)).xyz;

					mat3 basis = mat3(a, b, c);
					
					vec3 transformed = basis*
					 vec3(worldPos.x * xWeight, worldPos.y * 1., worldPos.z * 1.)
						+ spinePos;
						
					//transformed = worldPos.xyz+0.1*float(instanceID);
					
					vec3 transformedNormal =  objectNormal;
					
					mat3 im_rot = mat3( im );
					transformedNormal /= vec3( dot( im_rot[ 0 ], im_rot[ 0 ] ), dot( im_rot[ 1 ], im_rot[ 1 ] ), dot( im_rot[ 2 ], im_rot[ 2 ] ) );
					transformedNormal = im_rot *transformedNormal;
						
					transformedNormal = normalMatrix * (basis * transformedNormal);
					
						`).replace("#include <project_vertex>",`vec4 mvPosition = viewMatrix * vec4( transformed, 1.0 );
							gl_Position = projectionMatrix * mvPosition;`).replace("#include <color_vertex>",`
				//int r_n = int(random(random(float(instanceID))+pathOffsetFromInstanceMatrix)*4.);
				//int r_n = 2;
				//r_n = int(time/2.)%4;
				//r_n = int(pathOffsetFromInstanceMatrix);
				vColor.xyz = colors[_tube_id+uint(1)]*(2.-float(_tube_id)/3.)*2.;
				vColor.xyz = colors[melodyInstrumentID*int(_tube_id)]*(5.-4.*float(_tube_id));
				
					vColor.xyz*=vMapUv.y;
					//vColor.xyz = vec3(10.);
					//vColor.xyz = vec3(10.);
				
				#if defined( USE_MAP )
				
				float r_n = floor((random(float(instanceID)))*3.)/3.;
				float r_n_1 = floor((random(float(instanceID+14))*3.))/3.;
				r_n=0.;
				r_n_1=0.;
				vMapUv.y += time+rand;
				#endif
				//vColor.xyz = vec3(1,1,1);
	
	`);i.vertexShader=r})}constructor(e,t,n,i=void 0){const r=n.length;let o=c=>{const l=new Qn(c.geometry.clone(),c.material.clone(),0);return l.name=c.name,l.material.vertexColors=!0,l.frustumCulled=!1,l.userData.per_cell_count=0,Gi(l.geometry,"instanceID",e*r,1),Gi(l.geometry,"flowID",e*r,1),Gi(l.geometry,"melodyInstrumentID",e*r,1),l},a;if(Array.isArray(t)?(a=[],t.forEach(c=>{a.push(o(c))})):a=o(t),super(a,i),this.matrices=n,this.cell_count=e,this.instane_count=r,i===void 0||i.flowData===void 0||i.iMatrix===void 0){this.uniforms.flowData={value:new Array(e*2).fill(0)},this.uniforms.iMatrix={value:new Array(r*16).fill(0)};for(let c=0;c<n.length;c++)n[c].toArray(this.uniforms.iMatrix.value,c*16)}else this.uniforms.flowData=i.flowData,this.uniforms.iMatrix=i.iMatrix;this.offsets=new Array(e).fill(0)}writeChanges(e,t=void 0){this.uniforms.flowData.value[e*2+0]=this.curveLengthArray[t],this.uniforms.flowData.value[e*2+1]=this.offsets[e]}moveIndividualAlongCurve(e,t,n=void 0){this.offsets[e]+=t,this.writeChanges(e,n)}setIndividualAlongCurve(e,t,n=void 0){this.offsets[e]=t,this.writeChanges(e,n)}setCurve(e,t){if(isNaN(t))throw Error("curve index being set is Not a Number (NaN)");this.writeChanges(e,t)}clearInstanceIdsAt=()=>{this.object3D.count=0};updateInstancesAt=()=>{{const e=this.object3D;for(let t=0;t<this.uniforms.melody.value.length;t++){const n=this.uniforms.melody.value[t];for(let i=0;i<n.instances.length;i++){const r=n.instances[i].id_on_beat;e.geometry.attributes.flowID.array[e.count]=t,e.geometry.attributes.flowID.needsUpdate=!0,e.geometry.attributes.instanceID.array[e.count]=r,e.geometry.attributes.instanceID.needsUpdate=!0;let o=t*this.instane_count+r;this.uniforms.melodyInstrumentID!==void 0&&(o%=this.uniforms.melodyInstrumentID.value.length,e.geometry.attributes.melodyInstrumentID.array[e.count]=this.uniforms.melodyInstrumentID.value[o]),e.geometry.attributes.melodyInstrumentID.needsUpdate=!0,e.count++}}}};updatePlacement=(e,t,n)=>{this.setIndividualAlongCurve(e,t+n,n)};updatePerPlacingIndex=(e,t,n)=>{this.clearInstanceIdsAt(),this.updateInstancesAt()}}class H_ extends Ss{modifyShader(e,t,n=1){e.__ok||(e.__ok=!0,e.onBeforeCompile=i=>{if(i.__modified)return;i.__modified=!0,Object.assign(i.uniforms,t);const r=`

			uniform sampler2D spineTexture;
			uniform float pathOffset;
			uniform float pathSegment;
			uniform float spineOffset;
			uniform float spineLength;
			uniform int flow;
			uniform float time;
			uniform vec3 colors[4];
			//uniform mat4 iMatrix[40];
			//uniform float flowData[48];
			float textureLayers = ${Vt*n}.;
			float textureStacks = ${n}.;

		${i.vertexShader}
		`.replace("#include <beginnormal_vertex>","").replace("#include <defaultnormal_vertex>","").replace("#include <begin_vertex>","").replace(/void\s*main\s*\(\)\s*\{/,`
				uint hash( uint x ) {
					x += ( x << 10u );
					x ^= ( x >>  6u );
					x += ( x <<  3u );
					x ^= ( x >> 11u );
					x += ( x << 15u );
					return x;
				}
				float floatConstruct( uint m ) {
					const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
					const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32
				
					m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
					m |= ieeeOne;                          // Add fractional part to 1.0
				
					float  f = uintBitsToFloat( m );       // Range [1:2]
					return f - 1.0;                        // Range [0:1]
				}
				
				float random( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }
				
				mat3 getRotX(float angle){
				
				  float si = sin(angle);
				  float co = cos(angle);
				  return mat3(
					co, si, 0.0,
					-si, co, 0.0,
					0.0, 0.0, 1.0
				  );
				 }
				void main() {
				#include <beginnormal_vertex>
				int instanceID = int(instanceMatrix[0][3]);
				vec3 pos = position.xyz;
				
				mat4 im = instanceMatrix;
				im[0][3] = 0.;
				  
				float angle =    sin(time*10.+2.*random(float(instanceID)));
				mat3 rotMat = getRotX(angle);
				rotMat = mat3(1);
				  
				vec4 worldPos = modelMatrix * im  * vec4(rotMat*pos, 1.);
				
				//worldPos.yz+=worldPos.yz*sin(time*10.+2.*random(float(instanceID)))*0.05;
				
				vec3 transformed = worldPos.xyz;

				vec3 transformedNormal =  rotMat*objectNormal;
				
				mat3 im_rot = mat3( im );
				transformedNormal /= vec3( dot( im_rot[ 0 ], im_rot[ 0 ] ), dot( im_rot[ 1 ], im_rot[ 1 ] ), dot( im_rot[ 2 ], im_rot[ 2 ] ) );
				transformedNormal = im_rot *transformedNormal;
					
				transformedNormal = normalMatrix * transformedNormal;
					
			`).replace("#include <project_vertex>",`vec4 mvPosition = viewMatrix * vec4( transformed, 1.0 );
				gl_Position = projectionMatrix * mvPosition;`).replace("#include <color_vertex>",`
				//int r_n = int(random(random(float(instanceID))+pathOffsetFromInstanceMatrix)*4.);
				//r_n = int(time/2.)%4;
				int r_n = int(instanceID);
	vColor.xyz = colors[r_n];
	#if defined( USE_MAP )
	vec2 nUv = vec2(r_n % 2 , ((r_n)/2))*0.5;
	vMapUv/=2.;
	vMapUv.xy += nUv;
		#ifdef USE_EMISSIVEMAP
		vEmissiveMapUv = vMapUv;
	#endif
	//vColor.xyz = vec3(1,1,1);
	
	#endif`);i.vertexShader=r})}constructor(e,t,n,i,r=void 0){let o=c=>{const l=new Qn(c.geometry.clone(),c.material.clone(),i);return l.name=c.name,l.material.vertexColors=!0,l.frustumCulled=!1,l.count=0,l},a;Array.isArray(t)?(a=[],t.forEach(c=>{a.push(o(c))})):a=o(t),super(a,r),this.cell_count=e;for(let c=0;c<e;c++)this.clearInstanceIdsAt(c)}clearInstanceIdsAt=e=>{let t=(n,i)=>{n.userData.indexDictionary===void 0&&(n.userData.indexDictionary=new Array(this.cell_count)),n.userData.indexDictionary[i]===void 0&&(n.userData.indexDictionary[i]={id:[]}),n.count-=n.userData.indexDictionary[i].id.length,n.userData.indexDictionary[i].id=[]};Array.isArray(this.object3D)?this.object3D.forEach(n=>{t(n,e)}):t(this.object3D,e)};updateInstancesAt=(e,t)=>{let n=i=>{i.userData.indexDictionary===void 0&&(i.userData.indexDictionary=new Array(this.cell_count)),i.userData.indexDictionary[e]===void 0&&(i.userData.indexDictionary[e]={id:[]}),i.userData.indexDictionary[e].id.push(t.clone()),i.count++};Array.isArray(this.object3D)?this.object3D.forEach(i=>{n(i)}):n(this.object3D)};fillInstanceData=()=>{let e=t=>{let n=0;for(let i=0;i<t.userData.indexDictionary.length;i++){const r=t.userData.indexDictionary[i].id;for(let o=0;o<r.length;o++)t.setMatrixAt(n,r[o]),n++}t.instanceMatrix.needsUpdate=!0};Array.isArray(this.object3D)?this.object3D.forEach(t=>{e(t)}):e(this.object3D)};updatePerPlacingIndex=e=>{this.clearInstanceIdsAt(e),this.updateInstancesAt(e),this.fillInstanceData()}}class ZI extends Ss{modifyShader(e,t,n=1){e.__ok||(e.__ok=!0,e.onBeforeCompile=i=>{if(i.__modified)return;i.__modified=!0,Object.assign(i.uniforms,t);const r=`

			uniform sampler2D spineTexture;
			uniform float pathOffset;
			uniform float pathSegment;
			uniform float spineOffset;
			uniform float spineLength;
			uniform int flow;
			uniform float time;
			uniform vec3 colors[4];
			//uniform mat4 iMatrix[40];
			//uniform float flowData[48];
			float textureLayers = ${Vt*n}.;
			float textureStacks = ${n}.;

		${i.vertexShader}
		`.replace("#include <beginnormal_vertex>","").replace("#include <defaultnormal_vertex>","").replace("#include <begin_vertex>","").replace(/void\s*main\s*\(\)\s*\{/,`
				uint hash( uint x ) {
					x += ( x << 10u );
					x ^= ( x >>  6u );
					x += ( x <<  3u );
					x ^= ( x >> 11u );
					x += ( x << 15u );
					return x;
				}
				float floatConstruct( uint m ) {
					const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
					const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32
				
					m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
					m |= ieeeOne;                          // Add fractional part to 1.0
				
					float  f = uintBitsToFloat( m );       // Range [1:2]
					return f - 1.0;                        // Range [0:1]
				}
				
				float random( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }
				vec2 SpriteSheetAnimationUV(vec2 uv, float size, float speed)
				{
					uv /= size;
					uv.x += floor(mod(time * speed, 1.0) * size) / size;
					uv.y -= 1./size;
					uv.y += (1. - floor(mod(time * speed / size, 1.0) * size) / size);
					return uv;
				}
				mat3 getRotX(float angle){
				
				  float si = sin(angle);
				  float co = cos(angle);
				  return mat3(
					co, si, 0.0,
					-si, co, 0.0,
					0.0, 0.0, 1.0
				  );
				 }
				void main() {
				#include <beginnormal_vertex>
				int instanceID = int(instanceMatrix[0][3]);
				vec3 pos = position.xyz;
				
				mat4 im = instanceMatrix;
				im[0][3] = 0.;
				  
				float angle =    sin(time*10.+2.*random(float(instanceID)));
				mat3 rotMat = getRotX(angle);
				rotMat = mat3(1);
				  
				vec4 worldPos = modelMatrix * im  * vec4(rotMat*pos, 1.);
				
				//worldPos.yz+=worldPos.yz*sin(time*10.+2.*random(float(instanceID)))*0.05;
				
				vec3 transformed = worldPos.xyz;

				vec3 transformedNormal =  rotMat*objectNormal;
				
				mat3 im_rot = mat3( im );
				transformedNormal /= vec3( dot( im_rot[ 0 ], im_rot[ 0 ] ), dot( im_rot[ 1 ], im_rot[ 1 ] ), dot( im_rot[ 2 ], im_rot[ 2 ] ) );
				transformedNormal = im_rot *transformedNormal;
					
				transformedNormal = normalMatrix * transformedNormal;
					
			`).replace("#include <project_vertex>",`vec4 mvPosition = viewMatrix * vec4( transformed, 1.0 );
				gl_Position = projectionMatrix * mvPosition;`).replace("#include <color_vertex>",`
				//int r_n = int(random(random(float(instanceID))+pathOffsetFromInstanceMatrix)*4.);
				//int r_n = 2;
				//r_n = int(time/2.)%4;
				//r_n = int(pathOffsetFromInstanceMatrix);
				//vColor.xyz = colors[];
				
					vColor.xyz = vec3(2.,1.,0.9);
					//vColor.xyz*=(1.-vMapUv.y);
					//vColor.xyz = vec3(10.);
					vColor.xyz = vec3(100.);
				
				#if defined( USE_MAP )
				
				float r_n = floor((random(float(instanceID)))*3.)/3.;
				float r_n_1 = floor((random(float(instanceID+14))*3.))/3.;
				r_n=0.;
				r_n_1=0.;
				float swap = vMapUv.x;
				vMapUv.x = (vMapUv.y+r_n);
				vMapUv.y = (swap+r_n_1);
				
				vMapUv=SpriteSheetAnimationUV(vMapUv,3.,4.);
				//vMapUv.xy/=3.;
				//vMapUv.x+= mod(floor(time/3.),3.);
				//vMapUv.y+= mod(floor(mod(time,3.)),3.);
				//vMapUv=fract(vMapUv);
				//vMapUv.y -= time*2.;
				#endif
				//vColor.xyz = vec3(1,1,1);
	
	`);i.vertexShader=r})}constructor(e,t,n,i,r=void 0){let o=c=>{const l=new Qn(c.geometry.clone(),c.material.clone(),i);return l.name=c.name,l.material.vertexColors=!0,l.frustumCulled=!1,l.count=0,l},a;Array.isArray(t)?(a=[],t.forEach(c=>{a.push(o(c))})):a=o(t),super(a,r),this.cell_count=e;for(let c=0;c<e;c++)this.clearInstanceIdsAt(c)}clearInstanceIdsAt=e=>{let t=(n,i)=>{n.userData.indexDictionary===void 0&&(n.userData.indexDictionary=new Array(this.cell_count)),n.userData.indexDictionary[i]===void 0&&(n.userData.indexDictionary[i]={id:[]}),n.count-=n.userData.indexDictionary[i].id.length,n.userData.indexDictionary[i].id=[]};Array.isArray(this.object3D)?this.object3D.forEach(n=>{t(n,e)}):t(this.object3D,e)};updateInstancesAt=(e,t)=>{let n=i=>{i.userData.indexDictionary===void 0&&(i.userData.indexDictionary=new Array(this.cell_count)),i.userData.indexDictionary[e]===void 0&&(i.userData.indexDictionary[e]={id:[]}),i.userData.indexDictionary[e].id.push(t.clone()),i.count++};Array.isArray(this.object3D)?this.object3D.forEach(i=>{n(i)}):n(this.object3D)};fillInstanceData=()=>{let e=t=>{let n=0;for(let i=0;i<t.userData.indexDictionary.length;i++){const r=t.userData.indexDictionary[i].id;for(let o=0;o<r.length;o++)t.setMatrixAt(n,r[o]),n++}t.instanceMatrix.needsUpdate=!0};Array.isArray(this.object3D)?this.object3D.forEach(t=>{e(t)}):e(this.object3D)};updatePerPlacingIndex=e=>{this.clearInstanceIdsAt(e),this.updateInstancesAt(e),this.fillInstanceData()}}class QI extends Ss{modifyShader(e,t,n=1){e.__ok||(e.__ok=!0,e.onBeforeCompile=i=>{if(i.__modified)return;i.__modified=!0,Object.assign(i.uniforms,t);const r={bomb_colors:{value:[1,1,1,1,1,0,1,0,0]}};Object.assign(i.uniforms,r);const o=`
			
			attribute uint _tube_id;
			uniform sampler2D spineTexture;
			uniform float pathOffset;
			uniform float pathSegment;
			uniform float spineOffset;
			uniform float spineLength;
			uniform int flow;
			uniform float time;
			uniform vec3 colors[4];
			uniform vec3 bomb_colors[3];
			//uniform mat4 iMatrix[40];
			//uniform float flowData[48];
			float textureLayers = ${Vt*n}.;
			float textureStacks = ${n}.;
		${i.vertexShader}
		`.replace("#include <beginnormal_vertex>","").replace("#include <defaultnormal_vertex>","").replace("#include <begin_vertex>","").replace(/void\s*main\s*\(\)\s*\{/,`
				uint hash( uint x ) {
					x += ( x << 10u );
					x ^= ( x >>  6u );
					x += ( x <<  3u );
					x ^= ( x >> 11u );
					x += ( x << 15u );
					return x;
				}
				float floatConstruct( uint m ) {
					const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
					const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32
				
					m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
					m |= ieeeOne;                          // Add fractional part to 1.0
				
					float  f = uintBitsToFloat( m );       // Range [1:2]
					return f - 1.0;                        // Range [0:1]
				}
				
				float random( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }

				mat3 getRotX(float angle){
				
				  float si = sin(angle);
				  float co = cos(angle);
				  return mat3(
					co, si, 0.0,
					-si, co, 0.0,
					0.0, 0.0, 1.0
				  );
				 }
				void main() {
				#include <beginnormal_vertex>
				int instanceID = int(instanceMatrix[0][3]);
				vec3 pos = position.xyz;
				
				mat4 im = instanceMatrix;
				im[0][3] = 0.;
				  
				float angle =    sin(time*10.+2.*random(float(instanceID)));
				mat3 rotMat = getRotX(angle);
				//rotMat = mat3(1);
				 
				vec3 n_pos = pos;
				
				n_pos.xyz+=objectNormal.xyz*sin(time*10.+2.*random(float(instanceID))+pos.z*3.+float(_tube_id)*3.14*0.5)*0.05*float(_tube_id);
				vec4 worldPos = modelMatrix * im  * vec4(n_pos, 1.);
				
				
				vec3 transformed = worldPos.xyz;

				vec3 transformedNormal =  rotMat*objectNormal;
				
				mat3 im_rot = mat3( im );
				transformedNormal /= vec3( dot( im_rot[ 0 ], im_rot[ 0 ] ), dot( im_rot[ 1 ], im_rot[ 1 ] ), dot( im_rot[ 2 ], im_rot[ 2 ] ) );
				transformedNormal = im_rot *transformedNormal;
					
				transformedNormal = normalMatrix * transformedNormal;
					
			`).replace("#include <project_vertex>",`vec4 mvPosition = viewMatrix * vec4( transformed, 1.0 );
				gl_Position = projectionMatrix * mvPosition;`).replace("#include <color_vertex>",`
				//int r_n = int(random(random(float(instanceID))+pathOffsetFromInstanceMatrix)*4.);
				//int r_n = 2;
				//r_n = int(time/2.)%4;
				//r_n = int(pathOffsetFromInstanceMatrix);
				//vColor.xyz = colors[];
				
				//	vColor.xyz = vec3(2.,1.,0.9);
				vColor.xyz = bomb_colors[_tube_id]*0.5;
			//	if (float(_tube_id)<0.5) vColor.xyzw = vec4(1,1,1,1);
			//	else if (float(_tube_id)<1.5) vColor.xyzw = vec4(1,1,0,1);
			//	else vColor.xyzw = vec4(1,0,0,1);
				//vColor.xyz = vec3(0,0,0);
				//vColor.a = 1.;
				#if defined( USE_MAP )
				
				float r_n = floor((random(float(instanceID)))*3.)/3.;
				float r_n_1 = floor((random(float(instanceID+14))*3.))/3.;
				r_n=0.;
				r_n_1=0.;
				
				vMapUv.xy*=1.;
				
								vMapUv.y += time/10.+float(_tube_id)*0.5;
							//	if (_tube_id ==uint(0)) vMapUv.xy = vec2(1,1);

				#endif
				//vColor.xyz = vec3(1,1,1);
	
	`);i.vertexShader=o})}constructor(e,t,n,i,r=void 0){let o=c=>{const l=new Qn(c.geometry.clone(),c.material.clone(),i);return l.name=c.name,l.material.vertexColors=!0,l.frustumCulled=!1,l.count=0,l},a;Array.isArray(t)?(a=[],t.forEach(c=>{a.push(o(c))})):a=o(t),super(a,r),this.cell_count=e;for(let c=0;c<e;c++)this.clearInstanceIdsAt(c)}clearInstanceIdsAt=e=>{let t=(n,i)=>{n.userData.indexDictionary===void 0&&(n.userData.indexDictionary=new Array(this.cell_count)),n.userData.indexDictionary[i]===void 0&&(n.userData.indexDictionary[i]={id:[]}),n.count-=n.userData.indexDictionary[i].id.length,n.userData.indexDictionary[i].id=[]};Array.isArray(this.object3D)?this.object3D.forEach(n=>{t(n,e)}):t(this.object3D,e)};updateInstancesAt=(e,t)=>{let n=i=>{i.userData.indexDictionary===void 0&&(i.userData.indexDictionary=new Array(this.cell_count)),i.userData.indexDictionary[e]===void 0&&(i.userData.indexDictionary[e]={id:[]}),i.userData.indexDictionary[e].id.push(t.clone()),i.count++};Array.isArray(this.object3D)?this.object3D.forEach(i=>{n(i)}):n(this.object3D)};fillInstanceData=()=>{let e=t=>{let n=0;for(let i=0;i<t.userData.indexDictionary.length;i++){const r=t.userData.indexDictionary[i].id;for(let o=0;o<r.length;o++)t.setMatrixAt(n,r[o]),n++}t.instanceMatrix.needsUpdate=!0};Array.isArray(this.object3D)?this.object3D.forEach(t=>{e(t)}):e(this.object3D)};updatePerPlacingIndex=e=>{this.clearInstanceIdsAt(e),this.updateInstancesAt(e),this.fillInstanceData()}}const Iu=(s,e,t=1)=>{s.__ok||(s.__ok=!0,s.vertexColors=!1,s.onBeforeCompile=n=>{if(n.__modified)return;n.__modified=!0,Object.assign(n.uniforms,e);const i=`

			uniform sampler2D spineTexture;
			uniform float pathOffset;
			uniform float pathSegment;
			uniform float spineOffset;
			uniform float spineLength;
			uniform int flow;
			uniform float time;
			uniform vec3 colors[5];
			//uniform mat4 iMatrix[40];
			//uniform float flowData[48];
			float textureLayers = ${Vt*t}.;
			float textureStacks = ${t}.;

		${n.vertexShader}
		`.replace("#include <beginnormal_vertex>","").replace("#include <defaultnormal_vertex>","").replace("#include <begin_vertex>","").replace(/void\s*main\s*\(\)\s*\{/,`
				uint hash( uint x ) {
					x += ( x << 10u );
					x ^= ( x >>  6u );
					x += ( x <<  3u );
					x ^= ( x >> 11u );
					x += ( x << 15u );
					return x;
				}
				float floatConstruct( uint m ) {
					const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
					const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32
				
					m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
					m |= ieeeOne;                          // Add fractional part to 1.0
				
					float  f = uintBitsToFloat( m );       // Range [1:2]
					return f - 1.0;                        // Range [0:1]
				}
				
				float random( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }
				
				mat3 getRotX(float angle){
				
				  float si = sin(angle);
				  float co = cos(angle);
				  return mat3(
					co, si, 0.0,
					-si, co, 0.0,
					0.0, 0.0, 1.0
				  );
				 }
				void main() {
				#include <beginnormal_vertex>
				int instanceID = int(instanceMatrix[0][3]);
				vec3 pos = position.xyz;
				
				mat4 im = instanceMatrix;
				im[0][3] = 0.;
				  
				float angle =    sin(time*10.+2.*random(float(instanceID)));
				mat3 rotMat = getRotX(angle);
				rotMat = mat3(1);
				  
				vec4 worldPos = modelMatrix * im  * vec4(rotMat*pos, 1.);
				
				//worldPos.yz+=worldPos.yz*sin(time*10.+2.*random(float(instanceID)))*0.05;
				
				vec3 transformed = worldPos.xyz;

				vec3 transformedNormal =  rotMat*objectNormal;
				
				mat3 im_rot = mat3( im );
				transformedNormal /= vec3( dot( im_rot[ 0 ], im_rot[ 0 ] ), dot( im_rot[ 1 ], im_rot[ 1 ] ), dot( im_rot[ 2 ], im_rot[ 2 ] ) );
				transformedNormal = im_rot *transformedNormal;
					
				transformedNormal = normalMatrix * transformedNormal;
					
			`).replace("#include <project_vertex>",`vec4 mvPosition = viewMatrix * vec4( transformed, 1.0 );
				gl_Position = projectionMatrix * mvPosition;`).replace("#include <color_vertex>",`
				//int r_n = int(random(random(float(instanceID))+pathOffsetFromInstanceMatrix)*4.);
				//r_n = int(time/2.)%4;
				int r_n = instanceID;
	#if defined( USE_MAP )
	vec2 nUv = vec2(r_n % 2 , ((r_n)/2))*0.5;
	vMapUv/=2.;
	vMapUv.xy += nUv;
	//vColor.xyz = vec3(1,1,1);
	
	#endif`);n.vertexShader=i})},Pi=new Ue,gc=new Ht,Du=new N(1,1,1);class JI{u;ccc;pos;normal;tangent;biNormal;geometryNeedsUpdate=!0;#e;#t;#n;#h;#l;#u;#s;#i;#o;#a;#r;curveLength;#c;constructor(e=3,t=7,n=8){this.pos=new N,this.normal=new N,this.tangent=new N,this.biNormal=new N,this.u=0,this.#o=this.#a=0,this.#e=new Array(e),this.curveLength=t,this.#r=0,this.#s=n,this.#i=0,this.#c=7;const i=this.#c;{let r=new N(0,0,0),o=new N(et.randFloatSpread(i),et.randFloatSpread(i),-t/2),a=new N(et.randFloatSpread(i),et.randFloatSpread(i),-t/2),c=new N(et.randFloatSpread(i),et.randFloatSpread(i),-t),l=new N(0,0,0);for(let u=0;u<e;u++){o.copy(l.clone()),a.set(et.randFloatSpread(i),et.randFloatSpread(i),-t/2),c.set(et.randFloatSpread(i),et.randFloatSpread(i),-t);const h=new vp(r.clone(),o.add(r).clone(),a.add(r).clone(),c.add(r).clone());l.subVectors(c,a),r.copy(c),this.#e[u]=h}}this.#t=new XI(this.#e.length),this.#e.forEach(function(r,o){this.#t.updateCurve(o,r)}.bind(this))}resetCurves(e){const t=this.#e.length,n=this.curveLength,i=this.#s;this.u=0,this.#o=this.#a=0,this.#r=0,this.#i=0,this.#c=7;const r=this.#c;{let o=new N(0,0,0),a=new N(et.randFloatSpread(r),et.randFloatSpread(r),-n/2),c=new N(et.randFloatSpread(r),et.randFloatSpread(r),-n/2),l=new N(et.randFloatSpread(r),et.randFloatSpread(r),-n),u=new N(0,0,0);for(let h=0;h<t;h++){a.copy(u.clone()),c.set(et.randFloatSpread(r),et.randFloatSpread(r),-n/2),l.set(et.randFloatSpread(r),et.randFloatSpread(r),-n);const d=new vp(o.clone(),a.add(o).clone(),c.add(o).clone(),l.add(o).clone());u.subVectors(l,c),o.copy(l),this.#e[h]=d}}this.#e.forEach(function(o,a){this.#t.updateCurve(a,o)}.bind(this));for(let o=0;o<i;o++){const{curveIndex:a,u:c}=this.getCurveIndexAndUAt(.5+o);e.geometry.level.moveGeometryForward(o,c,a)}this.geometryNeedsUpdate=!0,this.updateGeometry(e),e.geometry.interactives.forEach(o=>{for(let a=0;a<t;a++)o.clearInstanceIdsAt(a)})}updateCurve(e,t){let n=i=>{const r=this.curveLength,o=this.#c,a=i-1<0?this.#e.length-1:i-1;this.#o-=this.#e[i].getLength();const c=this.#e[a].v2,l=this.#e[a].v3;this.#e[i].v0=l.clone();const u=new N;u.subVectors(l,c).add(l),this.#e[i].v1=u,this.#e[i].v2=new N(et.randFloatSpread(o),et.randFloatSpread(o),-r/2).add(l),this.#e[i].v3=new N(et.randFloatSpread(o),et.randFloatSpread(o),-r).add(l),this.#e[i].updateArcLengths(),this.#t.updateCurve(i,this.#e[i],a)};if(e>.3&&this.#r!==t){n(this.#r,this.#e.length);const i=this.#r;return this.#r=t,i}else return-1}#d=new Ht;placeInteractive=(e,t)=>{e.geometry.interactives!==void 0&&(e.win===!0||e.editMode===!0||e.geometry.interactives.forEach(n=>{n.clearInstanceIdsAt(t);const i=this.#t.frenetFrames[t];for(let r=0;r<3;r++){let o=Math.random();const a=Math.floor(o*i.points.length);let c=Math.random()*.5-.25,l=Math.random()*.5-.25;c*=2,l*=2;let u=i.points[a].clone();const h=i.normals[a].clone(),d=i.binormals[a].clone();u.add(h.multiplyScalar(c)).add(d.multiplyScalar(l));let f=1;if(n.object3D.name.includes("ELECTRICITY")||n.object3D.name.includes("TO_SELF")?(Pi.compose(u,gc.identity(),Du.set(f,f,f)),Pi.lookAt(u,u.clone().add(i.tangents[a]),h.clone().applyAxisAngle(i.tangents[a],Math.random()*3.14*2))):(gc.random(),Pi.compose(u,gc,Du.set(f,f,f))),n.object3D.name.includes("TO1-Knob")&&(Pi.elements[3]=Math.floor(Math.random()*4)),n.object3D.name.includes("TO_SELF")){let m=0;for(;m<4;){if(e.AudioSystem.availableMelody[m].notes.length!==0){Pi.elements[3]=m;break}m++}if(m===4)return}Pi.elements[7]=2,n.updateInstancesAt(t,Pi)}n.fillInstanceData()}))};updateGeometry=e=>{if(this.#t&&e.geometry.level!==void 0){if(this.#t.uniforms.time.value+=e.time.delta,Math.floor(this.#a-1)>this.#i){const t=this.#i%this.#s,{curveIndex:n,u:i}=this.getCurveIndexAndUAt(this.#s+.5+this.#i-(this.#a-this.#o));e.geometry.level.moveGeometryForward(t,i,n),this.#i++}this.geometryNeedsUpdate===!0&&(this.geometryNeedsUpdate=!1,e.geometry.level.updatePerPlacingIndex())}return e};curveSystem=e=>{this.#o+=e.GlobalParameters.speed*e.time.delta,this.#a+=e.GlobalParameters.speed*e.time.delta;const{curveIndex:t,u:n}=this.getCurveIndexAndUAt(this.#o);this.u=n,this.ccc=t;const i=this.updateCurve(n,t);i>=0&&(console.log("placingInteractive "+i),this.placeInteractive(e,i));const r=this.#t.frenetFrames[t];return this.pos=r.points[Math.floor(n*r.points.length)],this.tangent=r.tangents[Math.floor(n*r.tangents.length)],this.normal=r.normals[Math.floor(n*r.normals.length)],this.biNormal=r.binormals[Math.floor(n*r.binormals.length)],e};getCurrentNormalizedCell(e=0){return(this.#i+e)%this.#s}getCurrentCell(e=0){return this.#i+e}getTBNAt(e,t){const n=Math.floor(e),i=e-n,r=this.#t.frenetFrames[n],o=Math.floor(i*r.points.length);t.set(r.tangents[o].x,r.normals[o].x,r.binormals[o].x,r.points[o].x,r.tangents[o].y,r.normals[o].y,r.binormals[o].y,r.points[o].y,r.tangents[o].z,r.normals[o].z,r.binormals[o].z,r.points[o].z,0,0,0,1)}getCurveIndexAndUAt(e){let t=0,n=0;const i=this.#e;for(let r=0;r<i.length;r++){const o=et.euclideanModulo(r+this.#r,i.length);if(t+=i[o].getLength(),t>e)return{curveIndex:o,u:(e-n)/i[o].getLength()};n=t}return{curveIndex:0,u:0}}}const ai=new N,Pu=new N,Nu=new N,Lu=new N,Ou=new Ht;let um=0;function eD(s,e,t,n){ai.subVectors(t,e),Nu.subVectors(s,e);const i=ai.dot(ai),r=Nu.dot(ai),o=Nu.multiplyScalar(i).sub(ai.multiplyScalar(r)).length()-n*i,a=Math.abs(r-i*.5)-i*.5,c=o*o,l=a*a*i,u=Math.max(o,a)<0?-Math.min(c,l):(o>0?c:0)+(a>0?l:0);return Math.sign(u)*Math.sqrt(Math.abs(u))/i}const tD=s=>{let e=(t,n)=>{switch(t){default:break;case"TO_SELF":console.log("TO_SELF"),s.AudioSystem.addInstrumentOnRandomAvailablePosition(n),s.progressMustUpdate=!0,s.Curve.geometryNeedsUpdate=!0;break;case"ELECTRICITY":s.hand.userData.removeFinger=!0;break;case"BOMB":s.hand.userData.removeFinger=!0;break;case"TO1-Knob-C":s.AudioSystem.addEffectOnRandomAvailablePosition(0,n),s.Curve.geometryNeedsUpdate=!0;break;case"TO1-Knob-T":s.AudioSystem.addEffectOnRandomAvailablePosition(1,n),s.Curve.geometryNeedsUpdate=!0;break;case"TO1-Knob-Ic":s.AudioSystem.addEffectOnRandomAvailablePosition(2,n),s.Curve.geometryNeedsUpdate=!0;break}};return s.geometry.interactives.forEach(t=>{const n=t.object3D.name;t.object3D.userData.indexDictionary[s.Curve.ccc].id.forEach(i=>{let r=100;n==="ELECTRICITY"?(Ou.setFromRotationMatrix(i),ai.setFromMatrixPosition(i),Pu.set(0,1,0).applyQuaternion(Ou),Lu.set(0,-1,0).applyQuaternion(Ou),Pu.add(ai),Lu.add(ai),r=eD(s.hand.position,Pu,Lu,.1),r<0?r=0:r=100):(ai.setFromMatrixPosition(i),r=ai.distanceTo(s.hand.position)),r<.25&&i.elements[7]!==-1&&(e(n,i.elements[3]),i.elements[7]=-1,n==="ELECTRICITY"&&(um===s.Curve.ccc||(um=s.Curve.ccc)))})}),s},nD={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Da{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const iD=new _o(-1,1,1,-1,0,1),Cd=new Cn;Cd.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3));Cd.setAttribute("uv",new Zt([0,2,0,0,2,0],2));class W_{constructor(e){this._mesh=new Kt(Cd,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,iD)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class X_ extends Da{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ui?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Rh.clone(e.uniforms),this.material=new ui({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new W_(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class hm extends Da{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class sD extends Da{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class rD{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new _e);this._width=n.width,this._height=n.height,t=new hs(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qr}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new X_(nD),this.copyPass.material.blending=Bi,this.clock=new yg}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}hm!==void 0&&(o instanceof hm?n=!0:o instanceof sD&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new _e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class oD extends Da{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Te}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const aD={uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		`+Be.tonemapping_pars_fragment+Be.colorspace_pars_fragment+`

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class cD extends Da{constructor(){super();const e=aD;this.uniforms=Rh.clone(e.uniforms),this.material=new Ib({uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new W_(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Qe.getTransfer(this._outputColorSpace)===ut&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Cm?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Rm?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Im?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Dm&&(this.material.defines.ACES_FILMIC_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const lD={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;
        uniform float time;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;
		
        mat4 bayerIndex = mat4(
    vec4(00.0/16.0, 12.0/16.0, 03.0/16.0, 15.0/16.0),
    vec4(08.0/16.0, 04.0/16.0, 11.0/16.0, 07.0/16.0),
    vec4(02.0/16.0, 14.0/16.0, 01.0/16.0, 13.0/16.0),
    vec4(10.0/16.0, 06.0/16.0, 09.0/16.0, 05.0/16.0));

		void main() {
            vec2 lightDir = vec2(sin(time),cos(time));
            int samples = 10;
            float decay =1.;
            vec2 uv = vUv;
            vec2 vv = normalize(uv-vec2(0.5));
            lightDir = vv;
            vec4 texel = texture2D( tDiffuse, uv );
            float offset = 0.05; 
            offset = mix(0.,offset,clamp((distance(uv,vec2(0.5,0.5))*2.-0.4),0.,1.));
            vec4 t = texture2D( tDiffuse, uv );
            t.x = texture2D( tDiffuse, uv - vec2(offset , 0) ).r;
            t.z = texture2D( tDiffuse, uv - vec2(0 , offset) ).b;
            
            gl_FragColor = t*1.5;
            //return;
            float bayerValue = bayerIndex[int(gl_FragCoord.x) % 4][int(gl_FragCoord.y) % 4]/4.;
       /*     for (int i=0;i<samples;i++) {
                uv += (lightDir.xy * float(i))/vec2(gl_FragCoord.x,gl_FragCoord.x)*bayerValue;
                    texel = texture2D( tDiffuse, uv );
                    decay *= 0.65;
                    float x = dot(texel.xyz,vec3(0.3,0.59,0.11));
                    x *=x;
                  //  gl_FragColor.xyz += decay*texel.xyz;
                
            }*/
			//vec4 texel = texture2D( tDiffuse, vUv );
		//	gl_FragColor = vec4(1 * texel.xyz*2.,1);


		}`};new N;const Uu=new Ue,_c=new N(0,0,1),dm=new N(0,0,0),Ws=new N,uD=(s,e,t)=>{dm.set(0,0,0);let n=s.geometry.level.instancedMatrices[t].clone();_c.set(0,1,0);let i=_c.applyMatrix4(n);Ws.setFromMatrixPosition(n),Ws.add(i.multiplyScalar(-.08)),n.setPosition(Ws);const r=s.geometry.level.offsets[e];s.Curve.getTBNAt(r,Uu),_c.set(0,0,1),i=_c.applyMatrix4(n);const o=dm.applyMatrix4(n);return o.applyMatrix4(Uu),i.applyMatrix4(Uu),i.sub(o),i.normalize(),{origin:o,direction:i}},hD=(s,e,t,n)=>{Ws.subVectors(s,t);const i=e.dot(e),r=2*Ws.dot(e),o=Ws.dot(Ws)-n*n,a=r*r-4*i*o;return a<0?-1:(-r-Math.sqrt(a))/(2*i)},dD=s=>{let e=(i,r)=>{const o=i.id_on_beat;i.instrument,i.effect;const a=uD(s,r%s.GlobalParameters.barSize,o),c=hD(a.origin,a.direction,s.camera.position,.2);c!==-1&&c<1&&(s.AudioSystem.playInstrumentAt(i,c),i.played_at=r)};const t=s.Curve.getCurrentCell(1),n=t%s.GlobalParameters.barSize;return s.AudioSystem.melody[n].instances.forEach(i=>{i.played_at!==t&&e(i,t)}),s};new N;new Ue;new N;const vc=[],fD=new N,pD=new Te,mD=new Te;let Ds=-1;const gD=s=>{if(Ds<0&&s.hand.userData.removeFinger===!0&&s.fingersAlive>0){s.hand.userData.removeFinger=!1,s.AudioSystem.playEmptyInstrument(),s.hand.children[0].material.color.set(1,0,0),Ds=0,s.hand.userData.fingers_bones[s.fingersAlive-1].scale.set(0,0,0);const t=s.hand.userData.fingers[s.fingersAlive-1];t.bindMode="detached",vc.push(t),console.log(t.rotation),console.log(t.position),t.visible=!0,t.userData.fallDirection=fD.set(Math.random()*2-1,Math.random()*2-1,-Math.random()*.5).normalize().clone().multiplyScalar(20),s.fingersAlive--}return Ds>=0&&(s.hand.children[0].material.color.lerpColors(pD.set(1,0,0),mD.set(1,1,1),Math.sin(Ds*20)*.5+.5),Ds+=s.time.delta,Ds>s.GlobalParameters.safeTime&&(Ds=-1,s.hand.userData.removeFinger=!1,s.hand.children[0].material.color.set(1,1,1))),vc.length>0&&vc.forEach((e,t)=>{e.rotateX(.1),e.rotateZ(.1),e.position.add(e.userData.fallDirection.clone().multiplyScalar(s.time.delta)),e.scale.subScalar(s.time.delta/2),e.scale.x<.01&&(e.visible=!1,s.scene.remove(e),vc.splice(t,1))}),s},_D=s=>(s.fingersAlive===0&&(console.log("U DED"),s.paused=!0,s.showEndScreen(!0)),s),vD=s=>{if(s.progressMustUpdate===!0){let e=document.getElementById("progressbar_position");e.style.width=Math.floor(s.AudioSystem.getProgress()*100)+"%",s.progressMustUpdate=!1,s.AudioSystem.getProgress()>=1&&(s.win=!0,s.geometry.interactives.forEach(t=>{for(let n=0;n<s.Curve.curveLength;n++)t.clearInstanceIdsAt(n)})),console.log("progressSystem",s.AudioSystem.getProgress()*100)}return s};function yD(s,e,t){const n=[...s];var i=t>n.length?t%n.length:t;return n.concat(n.splice(0,e>0?n.length-i:i))}class xD{timer=0;global_timer=0;visual_step=.1;done=!1;initialized=!1;constructor(e){this.duration=e}initialize(e){if(this.initialized!==!0){this.timer=this.global_timer=0,this.done=!1,e.GlobalParameters.rotationSpeed.value=.1,this.colors_array=[];for(let t=0;t<e.AudioSystem.melodyInstrumentID.length;t++)this.colors_array.push(t/40/2%4);this.ignored_positions_array=[];for(let t=0;t<e.AudioSystem.melodyInstrumentID.length;t++)e.AudioSystem.melodyInstrumentID[t]===4?e.AudioSystem.melodyInstrumentID.eventOnModify(t,this.colors_array[t]):this.ignored_positions_array.push(t);this.initialized=!0}}cleanup(e){e.GlobalParameters.triAmplitude.value=1,e.GlobalParameters.rotationSpeed.value=0}play(e){if(this.timer>this.visual_step){const t=yD(this.colors_array,1,40);for(let n=0;n<e.AudioSystem.melodyInstrumentID.length;n++)this.colors_array[n]=t[n],this.ignored_positions_array.indexOf(n)===-1&&e.AudioSystem.melodyInstrumentID.eventOnModify(n,this.colors_array[n]);this.timer=0}this.timer+=e.time.delta,this.global_timer+=e.time.delta,this.global_timer>this.duration&&(this.done=!0,this.initialized=!1,this.global_timer=0),this.global_timer>5&&(e.GlobalParameters.triAmplitude.value=(this.global_timer-5)/2.5*((this.global_timer-5)/2.5),e.GlobalParameters.rotationSpeed.value=Math.sqrt(this.global_timer-5)/2)}}let yc=new xD(15.5);const SD=s=>(s.win===!0&&!s.paused&&(yc.initialized||yc.initialize(s),yc.play(s),yc.done&&(s.win=!1,s.paused=!0,s.showWinScreen(!0))),s);class MD{world;#e;#t;#n=new Ys;#h=!1;constructor(e){this.world=vE(),this.world.songEditingUnlocked=!1,this.world.editMode=!1,this.world.paused=!0,this.world.progressMustUpdate=!1,this.world.win=!1,this.world.GlobalParameters={speed:2.5,curveCount:3,curveLength:8,barSize:8,loops:1,safeTime:2,rotationSpeed:{value:0},triAmplitude:{value:1}},this.world.Input=new ME(this.world.renderer.domElement),this.world.Curve=new JI(this.world.GlobalParameters.curveCount,this.world.GlobalParameters.curveLength,this.world.GlobalParameters.barSize*this.world.GlobalParameters.loops),this.world.AudioSystem=new NI(this.world.GlobalParameters.barSize),e!==void 0&&(this.#s(e),this.world.scene.add(this.#n)),this.#l(),this.#u(),this.#e=gE(LI,this.world.Curve.curveSystem,this.world.Curve.updateGeometry,kI,VI,zI,tD,gD,_D,vD,SD,dD,OI)}#l(){const e=Lp(this.world);Up(this.world.camera,e),ac(this.world,oo,e),ac(this.world,Ng,e),this.world.objects.set(this.world.camera.eid,this.world.camera),this.world.camera.userData.speed=this.world.GlobalParameters.speed,this.world.camera.userData.dirV=new N(0,0,-1),this.world.camera.userData.offset=new N(0,0,0);const t=new Kt(new Uh(1e-4,32,32),new li({color:65280}));this.world.scene.add(new oT(5)),this.world.scene.add(new vg(16777215,.05)),this.world.scene.add(t);let n=new gg(16777215,3);n.position.set(0,0,.5),n.angle=3.14/4,n.decay=2,n.distance=30,n.penumbra=0,n.target=this.world.camera,n.castShadow=!1,this.world.camera.add(n),this.world.scene.add(this.world.camera),this.world.composer=new rD(this.world.renderer);const i=new oD(this.world.scene,this.world.camera);this.world.composer.addPass(i);const r=new X_(lD);r.uniforms.time={value:0},this.world.composer.addPass(r);const o=new cD;o.material.defines.ACES_FILMIC_TONE_MAPPING=!0,this.world.composer.addPass(o)}update(){this.world.Input.update(),this.world.composer.passes[1].uniforms.time.value=this.world.time.elapsedTime,this.#e(this.world)}#u(){}#s(e){new Sg().setPath("/models/");let t,n=[],i,r,o,a;e.traverse(function(P){P.name.includes("TO_SELF")?t=P:P.name.includes("TO1")||(P.name.includes("VISUAL_QUAD")?i=P:P.name.includes("HAND")?r=P:P.name.includes("ELECTRICITY")?o=P:P.name.includes("BOMB")&&(a=P)),P.name.includes("knobs")&&(P.updateMatrixWorld(),n.push(P.matrixWorld))});const c=this.world.GlobalParameters.loops*this.world.GlobalParameters.barSize;this.world.geometry={},this.world.geometry.level=[],this.world.geometry.level=new qI(c,n);const l=this.world.geometry.level.addObject($I,t,{melodyInstrumentID:{value:this.world.AudioSystem.melodyInstrumentID},rotationSpeed:this.world.GlobalParameters.rotationSpeed,triAmplitude:this.world.GlobalParameters.triAmplitude});this.#n.add(l.object3D),t.material.emissiveIntensity=.5,t.material.emissiveMap=t.material.map,t.material.emissive=t.material.color;const u=this.world.geometry.level.addObject(KI,i,{melodyInstrumentID:{value:this.world.AudioSystem.melodyInstrumentID},melody:{value:this.world.AudioSystem.melody},rotationSpeed:this.world.GlobalParameters.rotationSpeed});u.object3D.position.set(0,-.2,-.08),u.object3D.scale.set(1.25,1.25,1.25),this.#n.add(u.object3D);for(let P=0;P<c;P++){const{curveIndex:F,u:k}=this.world.Curve.getCurveIndexAndUAt(.5+P);this.world.geometry.level.moveGeometryForward(P,k,F)}this.world.geometry.interactives=[];const h=new H_(this.world.GlobalParameters.curveCount,t,t.material,400,Iu);this.world.geometry.interactives.push(h),this.#n.add(h.object3D);const d=new ZI(this.world.GlobalParameters.curveCount,o,o.material,400,Iu);this.world.geometry.interactives.push(d),this.#n.add(d.object3D);const f=new QI(this.world.GlobalParameters.curveCount,a,a.material,400,Iu);this.world.geometry.interactives.push(f),this.#n.add(f.object3D);const m=r.animations[0],_=[];m.tracks.forEach((P,F)=>{P.name.includes("scale")&&_.push(F)});for(let P=_.length;P>0;P--)m.tracks.splice(_[P-1],1);const g=m.tracks[0].times.length/m.duration;Rs.makeClipAdditive(m);const p=Rs.subclip(m,"IDLE",0,1,g),x=Rs.subclip(m,"LEFT",2,3,g),v=Rs.subclip(m,"RIGHT",4,5,g),M=Rs.subclip(m,"UP",6,7,g),y=Rs.subclip(m,"DOWN",8,9,g),b=Rs.subclip(m,"MOVING",10,34,g);r.position.set(0,-0,-.2),r.rotation.set(0,0,0),r.scale.set(.01,.01,.01),r.userData.fingers_bones=[r.getObjectByName("middle_01_l"),r.getObjectByName("thumb_02_l"),r.getObjectByName("index_01_l"),r.getObjectByName("ring_01_l"),r.getObjectByName("pinky_01_l")],r.userData.fingers=[r.getObjectByName("heroBodymiddle"),r.getObjectByName("heroBodythumb"),r.getObjectByName("heroBodyindex"),r.getObjectByName("heroBodyring"),r.getObjectByName("heroBodypinky")],r.userData.storedFingerData=[],r.userData.fingers.forEach(P=>{r.userData.storedFingerData.push({position:P.position.clone(),rotation:P.rotation.clone(),scale:P.scale.clone()})}),this.world.fingersAlive=r.userData.fingers.length,r.userData.fingers.forEach(P=>{P.visible=!1}),r.userData.removeFinger=!1,this.world.mixer=new rT(r),this.world.hand=r;const E=Lp(this.world);Up(r,E),ac(this.world,oo,E),ac(this.world,Lg,E),this.world.objects.set(r.eid,r);const T=this.world.mixer.clipAction(p),S=this.world.mixer.clipAction(x),w=this.world.mixer.clipAction(v),L=this.world.mixer.clipAction(y),U=this.world.mixer.clipAction(M),V=this.world.mixer.clipAction(b);V.loop=Vm;function C(P,F){P.enabled=!0,P.setEffectiveTimeScale(1),P.setEffectiveWeight(F)}this.world.hand_actions=[T,S,w,L,U,V],this.world.hand_actions.forEach(P=>{C(P,0),P.play()}),C(V,1),this.#n.add(r)}resetGameState(){this.world.win=!1,this.world.GlobalParameters.rotationSpeed.value=0,this.world.GlobalParameters.triAmplitude.value=1,this.world.hand.userData.fingers.forEach((e,t)=>{e.position.copy(this.world.hand.userData.storedFingerData[t].position),e.rotation.copy(this.world.hand.userData.storedFingerData[t].rotation),e.scale.copy(this.world.hand.userData.storedFingerData[t].scale),e.visible=!1}),this.world.hand.userData.fingers_bones.forEach(e=>{e.scale.set(1,1,1)}),this.world.hand.userData.removeFinger=!1,this.world.fingersAlive=5,this.world.AudioSystem.resetMelody(),this.world.Curve.resetCurves(this.world),this.world.progressMustUpdate=!0,this.world.camera.position.set(0,0,0)}}const fm={type:"start"},bD={type:"end"};class q_ extends ji{constructor(e){super(),new _e(0,1),new _e(0,-1),new _e(1,0),new _e(-1,0),this.domElement=e,this.domElement.style.touchAction="none";const t=this;this.current_input=Og,this.touches={ONE:Cc.MOVE,TWO:Cc.DOLLY_PAN};const n=[],i={},r={NONE:-1,MOVE:0};let o=r.NONE,a=!1,c=window.innerWidth/2,l=window.innerHeight/2,u=window.innerWidth/2,h=window.innerHeight/2,d=0,f=0;this.update=function(C){this.current_input.diffX=d/t.domElement.clientWidth,this.current_input.diffY=f/t.domElement.clientHeight,this.current_input.startX=u/t.domElement.clientWidth*2-1,this.current_input.startY=-(h/t.domElement.clientHeight)*2+1,this.current_input.pointerX=c/t.domElement.clientWidth*2-1,this.current_input.pointerY=-(l/t.domElement.clientHeight)*2+1,this.current_input.mouseMove=a,d=f=0};function m(C,P,F){const k=C.getBoundingClientRect(),j=P-k.left,B=F-k.top;return{x:j,y:B}}function _(C){let P=i[C.pointerId];P===void 0&&(P=new _e,i[C.pointerId]=P),P.set(C.pageX,C.pageY)}function g(C){switch(_(C),n.length){case 1:if(t.enableRotate===!1)return;p(),o=r.MOVE;break;case 2:switch(t.touches.TWO){default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&t.dispatchEvent(fm)}function p(){if(n.length===1){const{x:C,y:P}=m(t.domElement,n[0].pageX,n[0].pageY);c=C,u=C,l=P,h=P}}function x(C){switch(_(C),o){case r.MOVE:if(t.enableRotate===!1)return;v(C);break;default:o=r.NONE}}function v(C){if(n.length===1){a=!0;const{x:P,y:F}=m(t.domElement,C.pageX,C.pageY);P<c?d=c-P:P>c&&(d=P-c),d=P-c,F<l?f=l-F:F>l&&(f=F-l),f=F-l,c=P,l=F}}let M=On.None;function y(C){switch(C.button){case 0:M=On.LEFT,b(C);break;case 1:M=On.MIDDLE;break;case 2:M=On.RIGHT;break;default:M=-1}o!==r.NONE&&t.dispatchEvent(fm)}function b(C){const{x:P,y:F}=m(t.domElement,C.pageX,C.pageY);c=P,l=F,u=P,h=F}function E(C){if(t.enabled!==!1)switch(M){case On.LEFT:if(t.enableZoom===!1)return;T(C);break;case On.MIDDLE:if(t.enablePan===!1)return;handleMouseMovePan(C);break}}function T(C){a=!0;const{x:P,y:F}=m(t.domElement,C.pageX,C.pageY);P<c?d=c-P:P>c&&(d=P-c),d=P-c,F<l?f=l-F:F>l&&(f=F-l),f=F-l,c=P,l=F}function S(C){n.push(C)}function w(C){delete i[C.pointerId];for(let P=0;P<n.length;P++)if(n[P].pointerId==C.pointerId){n.splice(P,1);return}}function L(C){t.enabled!==!1&&(n.length===0&&(C.target.setPointerCapture(C.pointerId),t.domElement.addEventListener("pointermove",U),t.domElement.addEventListener("pointerup",V)),S(C),C.pointerType==="touch"?g(C):y(C))}function U(C){t.enabled!==!1&&(C.pointerType==="touch"?x(C):E(C))}function V(C){w(C),n.length===0&&(C.target.releasePointerCapture(C.pointerId),t.domElement.removeEventListener("pointermove",U),t.domElement.removeEventListener("pointerup",V)),t.dispatchEvent(bD),M=-1,a=!1,d=0,f=0}t.domElement.addEventListener("pointerdown",L,!1),t.domElement.addEventListener("pointercancel",V,!1)}init(e){}execute(e,t){this.checkGameKeys()}}let j_=!1;const bn=document.getElementById("musicSheet"),kn=document.getElementById("musicSheetContainer"),Wn=document.getElementById("slider"),_a=document.getElementById("slider_position"),pm=document.getElementById("sheetMenu"),mm=document.getElementById("sheet_tooltips"),gm=document.getElementById("scale-div"),Y_=document.getElementById("synth-name"),ks=document.getElementById("e-list"),TD=document.getElementById("sheet_songList"),Fu=[28,38,29,39,20,30,21,31,22,32,23,33,24,34,25,35,26,36,27,37],ku=[18,17,16,13,12,11,10,8,7,6,5,3,4,2,9,14,15,1,0,19],Ln=[.05,.2,.6,.1,.6,.3,.5,.5,.65,.7,.1,.1,.05,.05,.05],ii=new Ys;ii.background=new Te(3355443);const kt=10;[bn.width,bn.height]=[window.innerWidth,window.innerHeight];let Fi,pn,Ct;bn.width*=.95,bn.height*=.95,pn=bn.width/bn.height,pn>1&&(pn=8/10),bn.width=bn.height*pn,Fi=new _o(pn*kt/-2,pn*kt/2,kt/2,kt/-2,1,1e3),Fi.position.y=-.1,Fi.position.z=5,Fi.position.y=-2.5,Fi.lookAt(0,0,0);_a.style.width=`${pn/.804*100}%`;const $r=1-pn/.804;document.getElementById("sheetMenu").style.width=`${bn.width}px`;Ao(!1);let Ol=new Sl({canvas:bn,antialias:!0,alpha:!0});Ol.shadowMap.enabled=!0;Ol.shadowMap.type=xh;let Dn;const $t={},_m=new xg,Yt=new _e,Mn=new _e;new _e;const ED=new _e;new _e;const qi=[],_h=[];let Fo=[],Pt,vm,Rt;const ym={instrument:0,pitch:10};let Pn=[],xm=0;const Sm=new q_(kn);kn.addEventListener("pointerdown",vh,!1);Wn.addEventListener("pointerdown",wD,!1);function Rd(s,e,t){const n=s.getBoundingClientRect(),i=e.clientX-n.left,r=e.clientY-n.top;t.set(i,r)}function vh(s){kn.addEventListener("pointerup",$_),Rd(kn,s,Yt),ED.copy(Yt),Yt.x=Yt.x/kn.clientWidth*2-1,Yt.y=-Yt.y/kn.clientHeight*2+1}function $_(s){kn.releasePointerCapture(s.pointerId),Ct!==void 0&&Rt!==void 0&&Rt!==4&&(Pt.AudioSystem.instruments[Rt].modifyParameter(Ct.userData.parameter.name,Ct.userData.parameter.value),ym.instrument=Rt,Pt.AudioSystem.playInstrumentAt(ym)),Ct=void 0,kn.removeEventListener("pointerup",$_)}function wD(s){Wn.addEventListener("pointerup",K_),Wn.addEventListener("pointermove",Z_),Rd(Wn,s,Mn);const e=_a.getBoundingClientRect();let t=(e.right-e.left)/2;t=t/Wn.clientWidth,console.log(t),Mn.x=Mn.x/Wn.clientWidth;let n=Mn.x-t;Mn.x=Math.max(0,Math.min($r,Mn.x)),n=Math.max(0,Math.min($r,n));for(let i=0;i<qi.length;i++){const r=qi[i];r.position.x=r.userData.cachedXPos-n*kt/1.23}_a.style.transform=`translateX(${n*100/(1-$r)}%)`,console.log(Mn)}function K_(s){Wn.releasePointerCapture(s.pointerId),Wn.removeEventListener("pointermove",Z_),Wn.removeEventListener("pointerup",K_)}function Z_(s){Rd(bn,s,Mn);const e=_a.getBoundingClientRect();let t=(e.right-e.left)/2;t=t/Wn.clientWidth,console.log(t),Mn.x=Mn.x/Wn.clientWidth;let n=Mn.x-t;Mn.x=Math.max(0,Math.min($r,Mn.x)),n=Math.max(0,Math.min($r,n));for(let i=0;i<qi.length;i++){const r=qi[i];r.position.x=r.userData.cachedXPos-n*kt/1.23}_a.style.transform=`translateX(${n*100/(1-$r)}%)`}function Q_(s,e,...t){s.utils_modified||(s.utils_modified=!0,s.onBeforeCompile=n=>{if(n._utils_modified)return;n._utils_modified=!0,Object.assign(n.uniforms,e);const i=`
				attribute int instanceID;
				/*attribute int flowID;*/
				attribute int melodyInstrumentID;
				uniform sampler2D spineTexture;
				
				uniform float pathOffset;
				uniform float pathSegment;
				uniform float spineOffset;
				uniform float spineLength;
				//uniform int melodyInstrumentID[40];
				uniform float flowData[16];
				uniform vec3 colors[5];
				uniform int picked;
				
				uniform int flow;
				uniform float time;
uint hash( uint x ) {
					x += ( x << 10u );
					x ^= ( x >>  6u );
					x += ( x <<  3u );
					x ^= ( x >> 11u );
					x += ( x << 15u );
					return x;
				}
				float floatConstruct( uint m ) {
					const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
					const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32
				
					m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
					m |= ieeeOne;                          // Add fractional part to 1.0
				
					float  f = uintBitsToFloat( m );       // Range [1:2]
					return f - 1.0;                        // Range [0:1]
				}
				
				float random( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }
				

		${n.vertexShader}
		`.replace("#include <begin_vertex>",`
                
					vec3 transformed = vec3( position );
					float a = time*2.-1.;
					if (picked==instanceID) 
					    transformed*=0.2*a*a+0.8;
                    #ifdef USE_ALPHAHASH
                        vPosition = vec3( position );
                    #endif
						`).replace("#include <color_vertex>",`
				
				int r_n = melodyInstrumentID;
				if (r_n==4)
					{
						vColor.xyz = vec3(0.2);
						vColor.x = mix(vColor.x,0.45,0.9);
						r_n = 2;
					}
					else
						vColor.xyz = vec3(1);
				#if defined( USE_MAP )
				vec2 nUv = vec2(r_n % 2 , ((r_n)/2))*0.5;
				vMapUv/=2.;
				vMapUv.xy += nUv;
				#endif
	
	`);n.vertexShader=i})}function ml(s,e,t,n){s.setAttribute(e.toString(),new Uc(new Int32Array(t),n)),s.attributes[e.toString()].setUsage(wh),s.attributes[e.toString()].needsUpdate=!0}let Mm=(s,e,t)=>{const n=new Qn(s.geometry.clone(),s.material.clone(),e.length);n.name=s.name,n.material.vertexColors=!0,n.frustumCulled=!1,ml(n.geometry,"instanceID",40,1),ml(n.geometry,"melodyInstrumentID",40,1);for(let i=0;i<e.length;i++)n.geometry.attributes.instanceID.array[i]=i+t*40,n.setMatrixAt(i,e[i]),n.geometry.attributes.melodyInstrumentID.array[i]=$t.melodyInstrumentID.value[i];return n.geometry.attributes.instanceID.needsUpdate=!0,n.geometry.attributes.melodyInstrumentID.needsUpdate=!0,$t.picked={value:-1},Q_(n.material,$t),n},AD=(s,e)=>{const t=new Qn(s.geometry.clone(),s.material.clone(),e.length);t.name=s.name,t.material.vertexColors=!0,ml(t.geometry,"instanceID",e.length,1),ml(t.geometry,"melodyInstrumentID",e.length,1);for(let n=0;n<e.length;n++)t.geometry.attributes.instanceID.array[n]=n-40,t.setMatrixAt(n,e[n]),t.geometry.attributes.melodyInstrumentID.array[n]=(n+4)%4;return t.instanceMatrix.needsUpdate=!0,t.geometry.attributes.instanceID.needsUpdate=!0,t.geometry.attributes.melodyInstrumentID.needsUpdate=!0,Q_(t.material,$t),t};function CD(s,e){Pt=e,$t.melodyInstrumentID={value:e.AudioSystem.melodyInstrumentID},$t.time={value:0};let t=[],n,i=[],r,o=[],a;new li({color:65280}),s.traverse(function(T){T.name.includes("TO_SELF")?Dn=T:T.name.includes("TO1")&&Fo.push(T),T.name.includes("Node")&&(n=T),T.parent!==null&&T.parent.name.includes("sheet_positions")&&T.name.includes("TO_")&&(T.name.includes("TO_position1")&&(r=T),T.updateMatrixWorld(),i.push(T.matrixWorld.clone())),T.name.includes("knob_")&&(T.updateMatrixWorld(),o.push(T.matrixWorld)),T.name.includes("mixer")&&(T.updateMatrixWorld(),a=T,a.userData.skipInteraction=!0),T.name.includes("bezier")&&(T.updateMatrixWorld(),Pn.push(T))}),n.children.forEach(T=>{T.updateMatrixWorld(),T.matrixWorld.elements[14]=+T.name.slice(-(T.name.length-3)),t.push(T.matrixWorld),T.material=new Ls({color:16777215})}),t.sort((T,S)=>{if(T.elements[14]>S.elements[14])return 1;if(T.elements[14]<S.elements[14])return-1;if(T.elements[14]===S.elements[14])return 0}),t.forEach(T=>{T.elements[14]=0}),Dn.material=Dn.material.clone(),Dn.material.emissivemap=void 0,Dn.material.emissiveColor={r:0,g:0,b:0},Dn.material.emissiveIntensity=0,Dn.material.vertexColors=!0,Dn.geometry.computeBoundingBox();var c=new yl(kt*2,kt*2,2,2);const l=Fo[0].material.map.clone();l.wrapS=mn,l.wrapT=mn,l.repeat=new _e(3.5,3.5);const u=4;var h=new li({color:new Te(Ln[u*3+0],Ln[u*3+1],Ln[u*3+2]).multiply(new Te(.5,.5,.5)),map:l}),d=new Kt(c,h);d.userData.skipInteraction=!0,d.position.z=-1,ii.add(d),ii.add(new vg(16777215,.5));const f=new _g(16777215,2);f.castShadow=!0,f.name="DIRLIGHT",f.shadow.mapSize.width=512,f.shadow.mapSize.height=512,f.shadow.camera.near=0,f.shadow.camera.far=1e3,f.shadow.camera.position.copy(Fi.position),f.position.set(50,50,50),ii.add(f);const m=Mm(Dn,t,0);m.position.set(-kt*pn/2+.75,kt/2+.35),m.setRotationFromAxisAngle(new N(0,0,1),-3.14/2),m.userData.beat=0,m.userData.cachedXPos=m.position.x,qi.push(m),ii.add(m);for(let T=1;T<e.GlobalParameters.barSize;T++){const S=Mm(Dn,t,T);S.position.set(-kt*pn/2+.75+T,kt/2+.35,0),S.setRotationFromAxisAngle(new N(0,0,1),-3.14/2),S.userData.beat=T,S.geometry.attributes.melodyInstrumentID.needsUpdate=!0,S.userData.cachedXPos=S.position.x,qi.push(S),ii.add(S);for(let w=0;w<40;w++)S.geometry.attributes.melodyInstrumentID.array[w]=$t.melodyInstrumentID.value[T*40+w]}-kt*pn/2+.75+e.GlobalParameters.barSize-1;let _=2.5;new Array(4).fill(0).map((T,S)=>{const w=new Ue;return w.compose(new N(-kt*pn/2+.25*_+S*.27*_,-kt/2+1.5,0),new Ht().setFromAxisAngle(new N(0,0,1),S*3.14),new N(_,_,_)),w});const g=new _t;r.material=Dn.material.clone();const p=AD(r,i);p.receiveShadow=!0,p.name=Dn.name,p.userData.beat=-1,g.add(p),a.castShadow=!1,g.add(a);const x=Pn[0];Pn[0]=Pn[1],Pn[1]=x;for(let T=0;T<Pn.length;T++)Pn[T].visible=!1,Pn[T].userData.skipInteraction=!0,Pn[T].castShadow=!0,g.add(Pn[T]);const v=3;for(let T=0;T<o.length;T++){const S=new N().setFromMatrixPosition(o[o.length-T-1]),w=Math.floor(Math.random()*(Fo.length-1))+1,L=Fo[w].clone();L.material=Fo[w].material.clone(),L.rotateX(3.14/2),L.position.copy(S),L.material.color=new Te(Ln[(T*3+v)%(Ln.length-3)],Ln[(T*3+1+v)%(Ln.length-3)],Ln[(T*3+2+v)%(Ln.length-3)]),L.userData.knob=T+1,L.userData.color=T+v,L.castShadow=!0,L.recieveShadow=!1;const U=.8;L.scale.set(U,U,U),L.updateMatrixWorld(),_h.push(L),g.add(L)}g.castShadow=!0,g.receiveShadow=!0;const M=kt*pn/1.85;g.scale.set(M,M,M);let y=new $n;g.traverse(T=>{if(T.geometry){const S=new $n;T.geometry.computeBoundingBox(),S.copy(T.geometry.boundingBox).applyMatrix4(T.matrixWorld)}}),y.setFromObject(g);const b=new N,E=new N;new N,y.getSize(b),y.getCenter(E),g.position.y=-kt/2-E.y+b.y/2+M/8,g.position.x+=-kt*pn/2-E.x+b.x/2,ii.add(g),a.receiveShadow=!0,Ol.render(ii,Fi)}function RD(){if(!j_||TD.style.display!=="none")return;if(Sm.update(),Yt.x,Ct!==void 0&&Rt!==void 0&&Rt!==4){const e=Pt.AudioSystem.instruments[Rt],t=e.parameterNames[-vm-1];Ct.userData.cachedRotation===void 0&&(Ct.userData.cachedRotation=e.getDefault01(t)),Ct.userData.cachedRotation+=-Sm.current_input.diffY*10,Ct.userData.cachedRotation=Math.min(Math.max(Ct.userData.cachedRotation,0),1),Ct.userData.parameter===void 0?Ct.userData.parameter={name:t,value:e.getParamValueFromNormRange(t,Ct.userData.cachedRotation)}:(Ct.userData.parameter.name=t,Ct.userData.parameter.value=e.getParamValueFromNormRange(t,Ct.userData.cachedRotation)),ID(Rt,t,Ct.userData.parameter.value),Ct.rotation.set(0,0,-Ct.userData.cachedRotation*3.14*2)}Rt===void 0&&(xm+=.015,_h.forEach((e,t)=>{const n=Math.sin(xm*1+t)*6.28;e.rotation.set(0,0,n)})),_m.setFromCamera(Yt,Fi),$t.time.value>0?$t.time.value-=.1:$t.time.value=0;const s=_m.intersectObjects(ii.children);if(Ol.render(ii,Fi),s.length!==0){let e;for(let a=0;a<s.length;a++)if(!(s[a].object.userData.skipInteraction||s[a].object.visible===!1)){e=s[a];break}if(e===void 0)return;if(e.object.userData.beat===-1){const a=e.object.geometry.attributes.melodyInstrumentID.array[e.instanceId]%5;Rt!==void 0&&(Pn[Rt].visible=!1),Pn[a].visible=!0,Rt=a;const c=Pt.AudioSystem.instruments[Rt];_h.forEach((l,u)=>{const h=u<c.parameterNames.length;l.visible=h,h&&(l.userData.cachedRotation=c.getDefault01(c.parameterNames[u]),l.rotation.set(0,0,-l.userData.cachedRotation*3.14*2))}),console.log("SETCACHEDROTATION"),$t.time.value=1,$t.picked.value=e.instanceId+e.object.userData.beat*40,Yt.x=Yt.y=-2,J_(Rt);return}if(e.object.userData.knob!==void 0){vm=-e.object.userData.knob;const a=e.object.userData.color=Math.floor(Math.random()*4);e.object.material.color=new Te(Ln[a*3],Ln[a*3+1],Ln[a*3+2]),Ct=e.object,Yt.x=Yt.y=-2;return}const t=e.object.userData.beat,n=e.instanceId;if($t.time.value=1,$t.picked.value=e.instanceId+t*40,Rt===void 0){Pt.AudioSystem.playEmptyInstrument(),Yt.x=Yt.y=-2;return}let i=0;Fu.includes(n)?i=Fu.length-1-Fu.indexOf(n):ku.includes(n)?i=ku.length-1-ku.indexOf(n):console.log("there is no instance with given id");let r=e.object.geometry.attributes.melodyInstrumentID.array[n];r=r===Rt?4:Rt,e.object.geometry.attributes.melodyInstrumentID.array[n]=r,$t.melodyInstrumentID.value[t*40+n]=r;const o=Pt.AudioSystem.addInstrumentOnPosition(r,t,n,i);r!==4&&Pt.AudioSystem.playInstrumentAt(o),Pt.Curve.geometryNeedsUpdate=!0,e.object.geometry.attributes.melodyInstrumentID.needsUpdate=!0,Yt.x=Yt.y=-2}}function Ao(s){j_=s,s?(bn.style.display="block",kn.style.display="block",pm.style.display="block",mm.style.display="block",gm.style.display="flex"):(kn.style.display="none",bn.style.display="none",pm.style.display="none",mm.style.display="none",gm.style.display="none")}function J_(s){const e=Pt.AudioSystem.instruments[s];for(let t=0;t<ks.children.length;t++)ks.children[t].children[0].textContent="            ",ks.children[t].children[1].textContent="   ";Object.keys(e.parameters).forEach((t,n)=>{let i;t==="waveform"?i=go[Math.floor(e.parameters[t].value)]:t==="noiseType"?i=pl[Math.floor(e.parameters[t].value)]:i=e.parameters[t].max>5?e.parameters[t].value.toFixed(0):e.parameters[t].value.toFixed(2),ks.children[n].children[0].textContent=t,ks.children[n].children[1].textContent=i}),Y_.textContent=e.name}function ID(s,e,t){const n=Pt.AudioSystem.instruments[s];Object.keys(n.parameters).forEach((i,r)=>{i===e&&(i==="waveform"?t=go[Math.floor(t)]:i==="noiseType"?t=pl[Math.floor(t)]:t=t>5?t.toFixed(0):t.toPrecision(2),ks.children[r].children[0].textContent=i,ks.children[r].children[1].textContent=t)}),Y_.textContent=n.name}function DD(s){const e=Pt.AudioSystem.getMelodyData(s);e.speed=Pt.GlobalParameters.speed;let t=JSON.stringify(e);PD(t,"my_melody.txt","text/plain")}function PD(s,e,t){var n=document.createElement("a"),i=new Blob([s],{type:t});n.href=URL.createObjectURL(i),n.download=e,n.click()}function ev(s,e=!1){fetch(s).then(t=>t.json()).then(t=>{const n=t;Pt.AudioSystem.setMelodyFromJsonData(n,e),n.speed!==void 0&&(Pt.GlobalParameters.speed=n.speed,Pt.camera.userData.speed=n.speed,document.getElementById("speedSelect").value=n.speed),n.melody.forEach(i=>{qi[i.beat].geometry.attributes.melodyInstrumentID.array[i.id_on_beat]=i.instrument}),qi.forEach(i=>{i.geometry.attributes.melodyInstrumentID.needsUpdate=!0}),Pt.Curve.geometryNeedsUpdate=!0,n.scale!==void 0&&(document.getElementById("scaleSelect").value=n.scale),console.log(n.tonicOctave),n.tonicOctave!==void 0&&(document.getElementById("tonicSelect").value=n.tonicOctave.tonic,document.getElementById("octaveSelect").value=n.tonicOctave.octave),Rt!==void 0&&Rt!==4&&J_(Rt)})}function Ul(s,e=!1){document.getElementById("scaleSelect").value=Pt.AudioSystem.getDefaultScale();const{tonic:t,octave:n}=Pt.AudioSystem.getDefaultTonicAndOctave();document.getElementById("tonicSelect").value=t,document.getElementById("octaveSelect").value=n,document.getElementById("speedSelect").value=2.5,qi.forEach((i,r)=>{for(let o=0;o<40;o++)i.geometry.attributes.melodyInstrumentID.array[o]=$t.melodyInstrumentID.value[r*40+o];i.geometry.attributes.melodyInstrumentID.needsUpdate=!0})}function Id(s){let e=document.getElementById("sheet_songList");s?(kn.removeEventListener("pointerdown",vh,!1),e.style.display="block",document.querySelectorAll("span").forEach(t=>{t.offsetWidth>250&&(console.log(t.offsetWidth),console.log(t.textContent),console.log(t.getAnimations()[0]),t.animate({transform:["translateX(0px)","translateX(-"+(t.offsetWidth-250)+"px)"]},{duration:2e3,iterations:1/0,direction:"alternate"}))})):(kn.addEventListener("pointerdown",vh,!1),e.style.display="none")}const ri=document.getElementById("howToPlayScreen"),as=document.getElementById("howToPlayContainer"),ND=new Ys;ND.background=new Te(3355443);const xc=10;[ri.width,ri.height]=[window.innerWidth,window.innerHeight];let Bu,Pr,Sc;ri.width*=.95,ri.height*=.95,Pr=ri.width/ri.height,Pr>1&&(Pr=8/10),ri.width=ri.height*Pr,Bu=new _o(Pr*xc/-2,Pr*xc/2,xc/2,xc/-2,1,1e3),Bu.position.z=5,Bu.lookAt(0,0,0);document.getElementById("sheetMenu").style.width=`${ri.width}px`;let tv=new Sl({canvas:ri,antialias:!0,alpha:!0});tv.shadowMap.enabled=!0;tv.shadowMap.type=xh;new xg;const Nr=new _e;new _e;new _e;const LD=new _e;new _e;let bm,Mc;const Tm={instrument:0,pitch:10};new q_(as);as.addEventListener("pointerdown",UD,!1);function OD(s,e,t){const n=s.getBoundingClientRect(),i=e.clientX-n.left,r=e.clientY-n.top;t.set(i,r)}function UD(s){as.addEventListener("pointerup",nv),OD(as,s,Nr),LD.copy(Nr),Nr.x=Nr.x/as.clientWidth*2-1,Nr.y=-Nr.y/as.clientHeight*2+1}function nv(s){as.releasePointerCapture(s.pointerId),Sc!==void 0&&Mc!==void 0&&Mc!==4&&(bm.AudioSystem.instruments[Mc].modifyParameter(Sc.userData.parameter.name,Sc.userData.parameter.value),Tm.instrument=Mc,bm.AudioSystem.playInstrumentAt(Tm)),Sc=void 0,as.removeEventListener("pointerup",nv)}const FD="sleepwell";let Xe,Li,Fr,ko,Pa=!1;await BD().catch(s=>console.error(s));VD();CD(Fr,Xe.world);Xe.update();window.addEventListener("deviceorientation",kD,!0);function kD(s){var e=s.absolute,t=s.alpha,n=s.beta,i=s.gamma;console.log(e),console.log(t),console.log(n),console.log(i)}document.styleSheets[0].insertRule("canvas { outline:none; border:none; }",0);async function BD(){Li=new Ys,Fr=new Ys,ko=new Ys;const s=new Sg().setPath("/models/"),e=new mg().setPath("/textures/"),t=await e.loadAsync("rgbw.png");t.flipY=!1,t.colorSpace=gt;const i=(await s.loadAsync("TO_self.gltf")).scene.children[0];i.name="TO_SELF",i.material=new Ls({color:16777215}),i.material.roughness=0,i.material.map=t,Li.add(i),Fr.add(i.clone()),ko.add(i.clone());const r=await s.loadAsync("knob_mat.gltf");Li.add(r.scene.children[0]);const o=await e.loadAsync("w_k.png");o.flipY=!1,o.colorSpace=gt;const a=await s.loadAsync("knobs_self.gltf");a.scene.traverse(M=>{M.isMesh&&(M.material=new Ls({color:16777215}),M.material.roughness=0,M.material.map=o)}),Li.add(a.scene),Fr.add(a.scene.clone());const c=await s.loadAsync("musicSheetTris1.gltf"),l=await s.loadAsync("sheet_positions.gltf");console.log(c);const h=(await s.loadAsync("beam.gltf")).scene.children[0];h.name="VISUAL_QUAD",h.material=new Ls({color:16777215}),h.roughness=0,h.material.side=Tn,h.material.transparent=!0,h.material.opacity=.5,h.material.blending=Go,h.material.depthWrite=!1;const d=await e.loadAsync("fractal1.png");d.wrapS=mn,d.wrapT=mn,d.repeat=new _e(1,1),h.material.map=d,Li.add(h),Fr.add(c.scene),Fr.add(l.scene);const f=await s.loadAsync("hand_w_fingers.gltf");for(f.scene.children[0].name="HAND";f.scene.children.length>1;)f.scene.children[0].attach(f.scene.children[1]);f.scene.children[0].animations=f.animations,f.scene.children[0].children[0].material=new Ls({color:16777215,emissive:3355443}),f.scene.children[0].children[0].material.roughness=0;const m=f.scene.children[0];Li.add(m),ko.add(m.clone());const g=(await s.loadAsync("electricity.gltf")).scene.children[0];g.name="ELECTRICITY",g.material=new Ls({color:16777215}),g.roughness=0,g.material.side=Tn,g.material.transparent=!0,g.material.opacity=.5,g.material.blending=Go,g.material.depthWrite=!1;const p=await e.loadAsync("electric.png");p.wrapS=mn,p.wrapT=mn,p.repeat=new _e(1,1),g.material.map=p,Li.add(g),ko.add(g.clone());const v=(await s.loadAsync("bomb.gltf")).scene.children[0];v.name="BOMB",v.material=new Ls({color:16777215}),v.roughness=0,v.material.side=Tn,v.material.transparent=!0,v.material.opacity=1,v.material.blending=Go,v.material.depthWrite=!1,Li.add(v),ko.add(v.clone())}function VD(){Xe=new MD(Li)}function Dd(){Pa=!0,Xe.world.paused=!1}function Ms(s){let e=document.getElementById("startScreen");s?e.style.display="block":e.style.display="none"}function Pd(s){let e=document.getElementById("codeEntering");s?e.style.display="block":e.style.display="none"}function Fl(s){let e=document.getElementById("pauseScreen");s?e.style.display="block":e.style.display="none"}function Nd(s){let e=document.getElementById("songList");s?(e.style.display="block",document.querySelectorAll("span").forEach(t=>{t.offsetWidth>250&&(console.log(t.offsetWidth),console.log(t.textContent),console.log(t.getAnimations()[0]),t.animate({transform:["translateX(0px)","translateX(-"+(t.offsetWidth-250)+"px)"]},{duration:2e3,iterations:1/0,direction:"alternate"}))})):e.style.display="none"}function ur(s){let e=document.getElementById("playScreen");s?e.style.display="flex":e.style.display="none",Xe.world.songEditingUnlocked&&Xe.world.editMode===!0?document.getElementById("editSongButton").style.display="block":document.getElementById("editSongButton").style.display="none"}document.getElementById("chooseSong").addEventListener("click",function(){Ms(!1),Nd(!0)});document.getElementById("submitButton").addEventListener("click",function(){document.getElementById("input_text").value===FD&&(Xe.world.songEditingUnlocked=!0,Pd(!1),Ao(!0))});function zD(s){console.log(s.target),console.log(s.target.dataset.url),Nd(!1),ur(!0),ev(s.target.dataset.url),Xe.world.Curve.placeInteractive(Xe.world,1),Xe.world.Curve.placeInteractive(Xe.world,2),Dd()}function GD(s){Id(!1),Xe.world.AudioSystem.resetMelody(),Ul(),ev(s.target.dataset.url,!0),this.geometryNeedsUpdate=!0,this.updateGeometry(Xe.world)}document.querySelectorAll("div.melody").forEach(s=>{s.addEventListener("click",zD)});document.querySelectorAll("div.sheet_melody").forEach(s=>{s.addEventListener("click",GD)});document.getElementById("continueBtn").addEventListener("click",function(){Fl(!1),ur(!0),Dd()});document.getElementById("makeSong").addEventListener("click",function(){Ms(!1),Xe.world.songEditingUnlocked?Ao(!0):Pd(!0)});document.getElementById("editSongButton").addEventListener("click",function(){ur(!1),Xe.world.paused=!0,Xe.world.AudioSystem.instruments.forEach(s=>{s.releaseAll()}),Ao(!0)});document.getElementById("resetAndExitToMenu").addEventListener("click",function(){Pa=!1,Fl(!1),Ms(!0),Xe.world.editMode=!1,Xe.resetGameState(),Ul()});document.getElementById("pausebtn").addEventListener("click",function(){ur(!1),Fl(!0),Xe.world.paused=!0});document.getElementById("playFromSheetBtn").addEventListener("click",function(){Ao(!1),Xe.world.editMode=!0,ur(!0),Dd()});document.getElementById("closeSheetBtn").addEventListener("click",function(){Ao(!1),Pa?Fl(!0):Ms(!0)});document.getElementById("rtmm").addEventListener("click",function(){Nd(!1),Ms(!0)});document.getElementById("sheet_goback").addEventListener("click",function(){Id(!1)});document.getElementById("rtm").addEventListener("click",function(){Pd(!1),Ms(!0)});document.getElementById("gotomenu").addEventListener("click",function(){Pa=!1,Xe.world.showEndScreen(!1),Ms(!0),Xe.world.editMode=!1,Xe.resetGameState(),Ul()});document.getElementById("gotomenu_w").addEventListener("click",function(){Pa=!1,Xe.resetGameState(),Ul(),Xe.world.showWinScreen(!1),Ms(!0)});document.getElementById("savemelody").addEventListener("click",function(){DD()});document.getElementById("readFromJson").addEventListener("click",function(){Id(!0)});document.getElementById("scaleSelect").onchange=s=>{Xe.world.AudioSystem.setActiveScale(s.target.value)};document.getElementById("tonicSelect").onchange=s=>{Xe.world.AudioSystem.setTonicAndOctave(s.target.value,void 0)};document.getElementById("octaveSelect").onchange=s=>{console.log(s.target.value),Xe.world.AudioSystem.setTonicAndOctave(void 0,s.target.value)};document.getElementById("speedSelect").onchange=s=>{console.log(s.target.value),console.log(Xe.world.GlobalParameters.speed),Xe.world.GlobalParameters.speed=s.target.value,console.log(Xe.world.GlobalParameters.speed),Xe.world.camera.userData.speed=Xe.world.GlobalParameters.speed};Xe.world.showEndScreen=function(s){ur(!1);let e=document.getElementById("endScreen");s?e.style.display="block":e.style.display="none"};Xe.world.showWinScreen=function(s){ur(!1);let e=document.getElementById("winScreen");s?e.style.display="block":e.style.display="none"};Xe.world.updateProgressBar=function(s){};iv();function iv(){requestAnimationFrame(iv),RD(),Xe.update()}document.addEventListener("wheel",function(e){e.ctrlKey&&e.preventDefault()},{passive:!1});
