(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uh="157",kn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Wc={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Av=0,rf=1,wv=2,Gm=1,Hm=2,Hi=3,es=0,yn=1,Cn=2,Ki=0,Jr=1,Jo=2,of=3,af=4,Cv=5,Wr=100,Rv=101,Iv=102,cf=103,lf=104,Dv=200,Pv=201,Nv=202,Lv=203,Wm=204,Xm=205,Ov=206,Uv=207,Fv=208,kv=209,Bv=210,Vv=0,zv=1,Gv=2,ih=3,Hv=4,Wv=5,Xv=6,qv=7,Fh=0,jv=1,Yv=2,xs=0,qm=1,jm=2,Ym=3,$m=4,$v=5,Km=300,ao=301,co=302,sh=303,rh=304,Dl=306,vn=1e3,zn=1001,Xc=1002,Pt=1003,oh=1004,kc=1005,pn=1006,Zm=1007,ur=1008,Ss=1009,Kv=1010,Zv=1011,kh=1012,Qm=1013,ys=1014,vi=1015,lo=1016,Jm=1017,eg=1018,nr=1020,Qv=1021,Rn=1023,Jv=1024,e0=1025,ir=1026,uo=1027,t0=1028,tg=1029,n0=1030,ng=1031,ig=1033,iu=33776,su=33777,ru=33778,ou=33779,uf=35840,hf=35841,df=35842,ff=35843,i0=36196,pf=37492,mf=37496,gf=37808,_f=37809,vf=37810,yf=37811,xf=37812,Sf=37813,Mf=37814,bf=37815,Tf=37816,Ef=37817,Af=37818,wf=37819,Cf=37820,Rf=37821,au=36492,If=36494,Df=36495,s0=36283,Pf=36284,Nf=36285,Lf=36286,r0=2200,sg=2201,o0=2202,aa=2300,ho=2301,cu=2302,Yr=2400,$r=2401,qc=2402,Bh=2500,rg=2501,a0=0,og=1,ah=2,ag=3e3,sr=3001,c0=3200,l0=3201,Vh=0,u0=1,Gn="",vt="srgb",Yt="srgb-linear",zh="display-p3",Pl="display-p3-linear",jc="linear",ht="srgb",Yc="rec709",$c="p3",lu=7680,h0=519,d0=512,f0=513,p0=514,m0=515,g0=516,_0=517,v0=518,y0=519,ch=35044,Nl=35048,Of="300 es",lh=1035,$i=2e3,Kc=2001;class ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Uf=1234567;const ea=Math.PI/180,fo=180/Math.PI;function si(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[s&255]+Kt[s>>8&255]+Kt[s>>16&255]+Kt[s>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function zt(s,e,t){return Math.max(e,Math.min(t,s))}function Gh(s,e){return(s%e+e)%e}function x0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function S0(s,e,t){return s!==e?(t-s)/(e-s):0}function ta(s,e,t){return(1-t)*s+t*e}function M0(s,e,t,n){return ta(s,e,1-Math.exp(-t*n))}function b0(s,e=1){return e-Math.abs(Gh(s,e*2)-e)}function T0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function E0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function A0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function w0(s,e){return s+Math.random()*(e-s)}function C0(s){return s*(.5-Math.random())}function R0(s){s!==void 0&&(Uf=s);let e=Uf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function I0(s){return s*ea}function D0(s){return s*fo}function uh(s){return(s&s-1)===0&&s!==0}function cg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Zc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function P0(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*u,c*h,c*d,a*l);break;case"YZY":s.set(c*d,a*u,c*h,a*l);break;case"ZXZ":s.set(c*h,c*d,a*u,a*l);break;case"XZX":s.set(a*u,c*m,c*f,a*l);break;case"YXY":s.set(c*f,a*u,c*m,a*l);break;case"ZYZ":s.set(c*m,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function gi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function rt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const tt={DEG2RAD:ea,RAD2DEG:fo,generateUUID:si,clamp:zt,euclideanModulo:Gh,mapLinear:x0,inverseLerp:S0,lerp:ta,damp:M0,pingpong:b0,smoothstep:T0,smootherstep:E0,randInt:A0,randFloat:w0,randFloatSpread:C0,seededRandom:R0,degToRad:I0,radToDeg:D0,isPowerOfTwo:uh,ceilPowerOfTwo:cg,floorPowerOfTwo:Zc,setQuaternionFromProperEuler:P0,normalize:rt,denormalize:gi};class _e{constructor(e=0,t=0){_e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,n,i,r,o,a,c,l){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],_=i[0],g=i[3],p=i[6],x=i[1],v=i[4],M=i[7],y=i[2],b=i[5],E=i[8];return r[0]=o*_+a*x+c*y,r[3]=o*g+a*v+c*b,r[6]=o*p+a*M+c*E,r[1]=l*_+u*x+h*y,r[4]=l*g+u*v+h*b,r[7]=l*p+u*M+h*E,r[2]=d*_+f*x+m*y,r[5]=d*g+f*v+m*b,r[8]=d*p+f*M+m*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,m=t*h+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=h*_,e[1]=(i*l-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(uu.makeScale(e,t)),this}rotate(e){return this.premultiply(uu.makeRotation(-e)),this}translate(e,t){return this.premultiply(uu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uu=new Xe;function lg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ca(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function N0(){const s=ca("canvas");return s.style.display="block",s}const Ff={};function na(s){s in Ff||(Ff[s]=!0,console.warn(s))}const kf=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bf=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ya={[Yt]:{transfer:jc,primaries:Yc,toReference:s=>s,fromReference:s=>s},[vt]:{transfer:ht,primaries:Yc,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Pl]:{transfer:jc,primaries:$c,toReference:s=>s.applyMatrix3(Bf),fromReference:s=>s.applyMatrix3(kf)},[zh]:{transfer:ht,primaries:$c,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Bf),fromReference:s=>s.applyMatrix3(kf).convertLinearToSRGB()}},L0=new Set([Yt,Pl]),Je={enabled:!0,_workingColorSpace:Yt,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!L0.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Ya[e].toReference,i=Ya[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Ya[s].primaries},getTransfer:function(s){return s===Gn?jc:Ya[s].transfer}};function eo(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function hu(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Mr;class ug{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mr===void 0&&(Mr=ca("canvas")),Mr.width=e.width,Mr.height=e.height;const n=Mr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Mr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ca("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=eo(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(eo(t[n]/255)*255):t[n]=eo(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let O0=0,hg=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=si(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(du(i[o].image)):r.push(du(i[o]))}else r=du(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function du(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ug.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let U0=0;class jt extends ss{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,n=zn,i=zn,r=pn,o=ur,a=Rn,c=Ss,l=jt.DEFAULT_ANISOTROPY,u=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=si(),this.name="",this.source=new hg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===sr?vt:Gn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Km)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vn:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case Xc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vn:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case Xc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===vt?sr:ag}set encoding(e){na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===sr?vt:Gn}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Km;jt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,i=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,M=(f+1)/2,y=(p+1)/2,b=(u+d)/4,E=(h+_)/4,T=(m+g)/4;return v>M&&v>y?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=b/n,r=E/n):M>y?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=b/i,r=T/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=E/r,i=T/r),this.set(n,i,r,t),this}let x=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(h-_)/x,this.z=(d-u)/x,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class F0 extends ss{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(na("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===sr?vt:Gn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new jt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bs extends F0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class dg extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class k0 extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ht{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==m){let g=1-a;const p=c*d+l*f+u*m+h*_,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const y=Math.sqrt(v),b=Math.atan2(y,p*x);g=Math.sin(g*b)/y,a=Math.sin(a*b)/y}const M=a*x;if(c=c*g+d*M,l=l*g+f*M,u=u*g+m*M,h=h*g+_*M,g===1-a){const y=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=y,l*=y,u*=y,h*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+u*h+c*f-l*d,e[t+1]=c*m+u*d+l*h-a*f,e[t+2]=l*m+u*f+a*d-c*h,e[t+3]=u*m-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),d=c(n/2),f=c(i/2),m=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"YZX":this._x=d*u*h+l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h-d*f*m;break;case"XZY":this._x=d*u*h-l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,u=c*n+a*t-r*i,h=c*i+r*n-o*t,d=-r*t-o*n-a*i;return this.x=l*c+d*-r+u*-a-h*-o,this.y=u*c+d*-o+h*-r-l*-a,this.z=h*c+d*-a+l*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fu.copy(this).projectOnVector(e),this.sub(fu)}reflect(e){return this.sub(fu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fu=new P,Vf=new Ht;class oi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),br.copy(e.boundingBox),br.applyMatrix4(e.matrixWorld),this.union(br);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)Ni.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Ni)}else i.boundingBox===null&&i.computeBoundingBox(),br.copy(i.boundingBox),br.applyMatrix4(e.matrixWorld),this.union(br)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vo),$a.subVectors(this.max,Vo),Tr.subVectors(e.a,Vo),Er.subVectors(e.b,Vo),Ar.subVectors(e.c,Vo),cs.subVectors(Er,Tr),ls.subVectors(Ar,Er),Us.subVectors(Tr,Ar);let t=[0,-cs.z,cs.y,0,-ls.z,ls.y,0,-Us.z,Us.y,cs.z,0,-cs.x,ls.z,0,-ls.x,Us.z,0,-Us.x,-cs.y,cs.x,0,-ls.y,ls.x,0,-Us.y,Us.x,0];return!pu(t,Tr,Er,Ar,$a)||(t=[1,0,0,0,1,0,0,0,1],!pu(t,Tr,Er,Ar,$a))?!1:(Ka.crossVectors(cs,ls),t=[Ka.x,Ka.y,Ka.z],pu(t,Tr,Er,Ar,$a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new P,new P,new P,new P,new P,new P,new P,new P],Ni=new P,br=new oi,Tr=new P,Er=new P,Ar=new P,cs=new P,ls=new P,Us=new P,Vo=new P,$a=new P,Ka=new P,Fs=new P;function pu(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Fs.fromArray(s,r);const a=i.x*Math.abs(Fs.x)+i.y*Math.abs(Fs.y)+i.z*Math.abs(Fs.z),c=e.dot(Fs),l=t.dot(Fs),u=n.dot(Fs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const B0=new oi,zo=new P,mu=new P;class Ti{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):B0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);const t=zo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(zo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(mu)),this.expandByPoint(zo.copy(e.center).sub(mu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new P,gu=new P,Za=new P,us=new P,_u=new P,Qa=new P,vu=new P;class Ia{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){gu.copy(e).add(t).multiplyScalar(.5),Za.copy(t).sub(e).normalize(),us.copy(this.origin).sub(gu);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Za),a=us.dot(this.direction),c=-us.dot(Za),l=us.lengthSq(),u=Math.abs(1-o*o);let h,d,f,m;if(u>0)if(h=o*c-a,d=o*a-c,m=r*u,h>=0)if(d>=-m)if(d<=m){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-m?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=m?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(gu).addScaledVector(Za,d),f}intersectSphere(e,t){Li.subVectors(e.center,this.origin);const n=Li.dot(this.direction),i=Li.dot(Li)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,n,i,r){_u.subVectors(t,e),Qa.subVectors(n,e),vu.crossVectors(_u,Qa);let o=this.direction.dot(vu),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;us.subVectors(this.origin,e);const c=a*this.direction.dot(Qa.crossVectors(us,Qa));if(c<0)return null;const l=a*this.direction.dot(_u.cross(us));if(l<0||c+l>o)return null;const u=-a*us.dot(vu);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe{constructor(e,t,n,i,r,o,a,c,l,u,h,d,f,m,_,g){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,u,h,d,f,m,_,g)}set(e,t,n,i,r,o,a,c,l,u,h,d,f,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/wr.setFromMatrixColumn(e,0).length(),r=1/wr.setFromMatrixColumn(e,1).length(),o=1/wr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,m=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+m*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,m=l*u,_=l*h;t[0]=d+_*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,m=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,m=a*u,_=a*h;t[0]=c*u,t[4]=m*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=m*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+m,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(V0,e,z0)}lookAt(e,t,n){const i=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),hs.crossVectors(n,Tn),hs.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),hs.crossVectors(n,Tn)),hs.normalize(),Ja.crossVectors(Tn,hs),i[0]=hs.x,i[4]=Ja.x,i[8]=Tn.x,i[1]=hs.y,i[5]=Ja.y,i[9]=Tn.y,i[2]=hs.z,i[6]=Ja.z,i[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],x=n[3],v=n[7],M=n[11],y=n[15],b=i[0],E=i[4],T=i[8],S=i[12],A=i[1],N=i[5],U=i[9],z=i[13],C=i[2],D=i[6],F=i[10],B=i[14],Y=i[3],V=i[7],j=i[11],O=i[15];return r[0]=o*b+a*A+c*C+l*Y,r[4]=o*E+a*N+c*D+l*V,r[8]=o*T+a*U+c*F+l*j,r[12]=o*S+a*z+c*B+l*O,r[1]=u*b+h*A+d*C+f*Y,r[5]=u*E+h*N+d*D+f*V,r[9]=u*T+h*U+d*F+f*j,r[13]=u*S+h*z+d*B+f*O,r[2]=m*b+_*A+g*C+p*Y,r[6]=m*E+_*N+g*D+p*V,r[10]=m*T+_*U+g*F+p*j,r[14]=m*S+_*z+g*B+p*O,r[3]=x*b+v*A+M*C+y*Y,r[7]=x*E+v*N+M*D+y*V,r[11]=x*T+v*U+M*F+y*j,r[15]=x*S+v*z+M*B+y*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+r*c*h-i*l*h-r*a*d+n*l*d+i*a*f-n*c*f)+_*(+t*c*f-t*l*d+r*o*d-i*o*f+i*l*u-r*c*u)+g*(+t*l*h-t*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+p*(-i*a*u-t*c*h+t*a*d+i*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],x=h*g*l-_*d*l+_*c*f-a*g*f-h*c*p+a*d*p,v=m*d*l-u*g*l-m*c*f+o*g*f+u*c*p-o*d*p,M=u*_*l-m*h*l+m*a*f-o*_*f-u*a*p+o*h*p,y=m*h*c-u*_*c-m*a*d+o*_*d+u*a*g-o*h*g,b=t*x+n*v+i*M+r*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=x*E,e[1]=(_*d*r-h*g*r-_*i*f+n*g*f+h*i*p-n*d*p)*E,e[2]=(a*g*r-_*c*r+_*i*l-n*g*l-a*i*p+n*c*p)*E,e[3]=(h*c*r-a*d*r-h*i*l+n*d*l+a*i*f-n*c*f)*E,e[4]=v*E,e[5]=(u*g*r-m*d*r+m*i*f-t*g*f-u*i*p+t*d*p)*E,e[6]=(m*c*r-o*g*r-m*i*l+t*g*l+o*i*p-t*c*p)*E,e[7]=(o*d*r-u*c*r+u*i*l-t*d*l-o*i*f+t*c*f)*E,e[8]=M*E,e[9]=(m*h*r-u*_*r-m*n*f+t*_*f+u*n*p-t*h*p)*E,e[10]=(o*_*r-m*a*r+m*n*l-t*_*l-o*n*p+t*a*p)*E,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*f-t*a*f)*E,e[12]=y*E,e[13]=(u*_*i-m*h*i+m*n*d-t*_*d-u*n*g+t*h*g)*E,e[14]=(m*a*i-o*_*i-m*n*c+t*_*c+o*n*g-t*a*g)*E,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*d+t*a*d)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,m=r*h,_=o*u,g=o*h,p=a*h,x=c*l,v=c*u,M=c*h,y=n.x,b=n.y,E=n.z;return i[0]=(1-(_+p))*y,i[1]=(f+M)*y,i[2]=(m-v)*y,i[3]=0,i[4]=(f-M)*b,i[5]=(1-(d+p))*b,i[6]=(g+x)*b,i[7]=0,i[8]=(m+v)*E,i[9]=(g-x)*E,i[10]=(1-(d+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=wr.set(i[0],i[1],i[2]).length();const o=wr.set(i[4],i[5],i[6]).length(),a=wr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],$n.copy(this);const l=1/r,u=1/o,h=1/a;return $n.elements[0]*=l,$n.elements[1]*=l,$n.elements[2]*=l,$n.elements[4]*=u,$n.elements[5]*=u,$n.elements[6]*=u,$n.elements[8]*=h,$n.elements[9]*=h,$n.elements[10]*=h,t.setFromRotationMatrix($n),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=$i){const c=this.elements,l=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,m;if(a===$i)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Kc)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=$i){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(o-r),d=(t+e)*l,f=(n+i)*u;let m,_;if(a===$i)m=(o+r)*h,_=-2*h;else if(a===Kc)m=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const wr=new P,$n=new Pe,V0=new P(0,0,0),z0=new P(1,1,1),hs=new P,Ja=new P,Tn=new P,zf=new Pe,Gf=new Ht;class Ll{constructor(e=0,t=0,n=0,i=Ll.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gf.setFromEuler(this),this.setFromQuaternion(Gf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ll.DEFAULT_ORDER="XYZ";class Hh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let G0=0;const Hf=new P,Cr=new Ht,Oi=new Pe,ec=new P,Go=new P,H0=new P,W0=new Ht,Wf=new P(1,0,0),Xf=new P(0,1,0),qf=new P(0,0,1),X0={type:"added"},q0={type:"removed"};class mt extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new P,t=new Ll,n=new Ht,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Xe}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Hh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.premultiply(Cr),this}rotateX(e){return this.rotateOnAxis(Wf,e)}rotateY(e){return this.rotateOnAxis(Xf,e)}rotateZ(e){return this.rotateOnAxis(qf,e)}translateOnAxis(e,t){return Hf.copy(e).applyQuaternion(this.quaternion),this.position.add(Hf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wf,e)}translateY(e){return this.translateOnAxis(Xf,e)}translateZ(e){return this.translateOnAxis(qf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ec.copy(e):ec.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Go,ec,this.up):Oi.lookAt(ec,Go,this.up),this.quaternion.setFromRotationMatrix(Oi),i&&(Oi.extractRotation(i.matrixWorld),Cr.setFromRotationMatrix(Oi),this.quaternion.premultiply(Cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(X0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(q0)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,H0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,W0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}mt.DEFAULT_UP=new P(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new P,Ui=new P,yu=new P,Fi=new P,Rr=new P,Ir=new P,jf=new P,xu=new P,Su=new P,Mu=new P;let tc=!1;class Jn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Kn.subVectors(e,t),i.cross(Kn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Kn.subVectors(i,t),Ui.subVectors(n,t),yu.subVectors(e,t);const o=Kn.dot(Kn),a=Kn.dot(Ui),c=Kn.dot(yu),l=Ui.dot(Ui),u=Ui.dot(yu),h=o*l-a*a;if(h===0)return r.set(-2,-1,-1);const d=1/h,f=(l*c-a*u)*d,m=(o*u-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Fi),Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getUV(e,t,n,i,r,o,a,c){return tc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),tc=!0),this.getInterpolation(e,t,n,i,r,o,a,c)}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Fi),c.setScalar(0),c.addScaledVector(r,Fi.x),c.addScaledVector(o,Fi.y),c.addScaledVector(a,Fi.z),c}static isFrontFacing(e,t,n,i){return Kn.subVectors(n,t),Ui.subVectors(e,t),Kn.cross(Ui).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),Kn.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return tc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),tc=!0),Jn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Jn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Rr.subVectors(i,n),Ir.subVectors(r,n),xu.subVectors(e,n);const c=Rr.dot(xu),l=Ir.dot(xu);if(c<=0&&l<=0)return t.copy(n);Su.subVectors(e,i);const u=Rr.dot(Su),h=Ir.dot(Su);if(u>=0&&h<=u)return t.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Rr,o);Mu.subVectors(e,r);const f=Rr.dot(Mu),m=Ir.dot(Mu);if(m>=0&&f<=m)return t.copy(r);const _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(Ir,a);const g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return jf.subVectors(r,i),a=(h-u)/(h-u+(f-m)),t.copy(i).addScaledVector(jf,a);const p=1/(g+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Rr,o).addScaledVector(Ir,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let j0=0;class ri extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=si(),this.name="",this.type="Material",this.blending=Jr,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wm,this.blendDst=Xm,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ih,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=h0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lu,this.stencilZFail=lu,this.stencilZPass=lu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Jr&&(n.blending=this.blending),this.side!==es&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const fg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},nc={h:0,s:0,l:0};function bu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Me{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Je.workingColorSpace){if(e=Gh(e,1),t=zt(t,0,1),n=zt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=bu(o,r,e+1/3),this.g=bu(o,r,e),this.b=bu(o,r,e-1/3)}return Je.toWorkingColorSpace(this,i),this}setStyle(e,t=vt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){const n=fg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=eo(e.r),this.g=eo(e.g),this.b=eo(e.b),this}copyLinearToSRGB(e){return this.r=hu(e.r),this.g=hu(e.g),this.b=hu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return Je.fromWorkingColorSpace(Zt.copy(this),e),Math.round(zt(Zt.r*255,0,255))*65536+Math.round(zt(Zt.g*255,0,255))*256+Math.round(zt(Zt.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Zt.copy(this),t);const n=Zt.r,i=Zt.g,r=Zt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=vt){Je.fromWorkingColorSpace(Zt.copy(this),e);const t=Zt.r,n=Zt.g,i=Zt.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ds),this.setHSL(ds.h+e,ds.s+t,ds.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ds),e.getHSL(nc);const n=ta(ds.h,nc.h,t),i=ta(ds.s,nc.s,t),r=ta(ds.l,nc.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new Me;Me.NAMES=fg;class Hn extends ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new P,ic=new _e;class hn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ch,this.updateRange={offset:0,count:-1},this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ic.fromBufferAttribute(this,t),ic.applyMatrix3(e),this.setXY(t,ic.x,ic.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ch&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class pg extends hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class mg extends hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class xn extends hn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Y0=0;const Nn=new Pe,Tu=new mt,Dr=new P,En=new oi,Ho=new oi,kt=new P;class jn extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lg(e)?mg:pg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,n){return Nn.makeTranslation(e,t,n),this.applyMatrix4(Nn),this}scale(e,t,n){return Nn.makeScale(e,t,n),this.applyMatrix4(Nn),this}lookAt(e){return Tu.lookAt(e),Tu.updateMatrix(),this.applyMatrix4(Tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new xn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ho.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(En.min,Ho.min),En.expandByPoint(kt),kt.addVectors(En.max,Ho.max),En.expandByPoint(kt)):(En.expandByPoint(Ho.min),En.expandByPoint(Ho.max))}En.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)kt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(kt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)kt.fromBufferAttribute(a,l),c&&(Dr.fromBufferAttribute(e,l),kt.add(Dr)),i=Math.max(i,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let A=0;A<a;A++)l[A]=new P,u[A]=new P;const h=new P,d=new P,f=new P,m=new _e,_=new _e,g=new _e,p=new P,x=new P;function v(A,N,U){h.fromArray(i,A*3),d.fromArray(i,N*3),f.fromArray(i,U*3),m.fromArray(o,A*2),_.fromArray(o,N*2),g.fromArray(o,U*2),d.sub(h),f.sub(h),_.sub(m),g.sub(m);const z=1/(_.x*g.y-g.x*_.y);isFinite(z)&&(p.copy(d).multiplyScalar(g.y).addScaledVector(f,-_.y).multiplyScalar(z),x.copy(f).multiplyScalar(_.x).addScaledVector(d,-g.x).multiplyScalar(z),l[A].add(p),l[N].add(p),l[U].add(p),u[A].add(x),u[N].add(x),u[U].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let A=0,N=M.length;A<N;++A){const U=M[A],z=U.start,C=U.count;for(let D=z,F=z+C;D<F;D+=3)v(n[D+0],n[D+1],n[D+2])}const y=new P,b=new P,E=new P,T=new P;function S(A){E.fromArray(r,A*3),T.copy(E);const N=l[A];y.copy(N),y.sub(E.multiplyScalar(E.dot(N))).normalize(),b.crossVectors(T,N);const z=b.dot(u[A])<0?-1:1;c[A*4]=y.x,c[A*4+1]=y.y,c[A*4+2]=y.z,c[A*4+3]=z}for(let A=0,N=M.length;A<N;++A){const U=M[A],z=U.start,C=U.count;for(let D=z,F=z+C;D<F;D+=3)S(n[D+0]),S(n[D+1]),S(n[D+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new P,r=new P,o=new P,a=new P,c=new P,l=new P,u=new P,h=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)d[m++]=l[f++]}return new hn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jn,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yf=new Pe,ks=new Ia,sc=new Ti,$f=new P,Pr=new P,Nr=new P,Lr=new P,Eu=new P,rc=new P,oc=new _e,ac=new _e,cc=new _e,Kf=new P,Zf=new P,Qf=new P,lc=new P,uc=new P;class qt extends mt{constructor(e=new jn,t=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){rc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Eu.fromBufferAttribute(h,e),o?rc.addScaledVector(Eu,u):rc.addScaledVector(Eu.sub(t),u))}t.add(rc)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sc.copy(n.boundingSphere),sc.applyMatrix4(r),ks.copy(e.ray).recast(e.near),!(sc.containsPoint(ks.origin)===!1&&(ks.intersectSphere(sc,$f)===null||ks.origin.distanceToSquared($f)>(e.far-e.near)**2))&&(Yf.copy(r).invert(),ks.copy(e.ray).applyMatrix4(Yf),!(n.boundingBox!==null&&ks.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ks)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),v=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let M=x,y=v;M<y;M+=3){const b=a.getX(M),E=a.getX(M+1),T=a.getX(M+2);i=hc(this,p,e,n,l,u,h,b,E,T),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const x=a.getX(g),v=a.getX(g+1),M=a.getX(g+2);i=hc(this,o,e,n,l,u,h,x,v,M),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),v=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let M=x,y=v;M<y;M+=3){const b=M,E=M+1,T=M+2;i=hc(this,p,e,n,l,u,h,b,E,T),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const x=g,v=g+1,M=g+2;i=hc(this,o,e,n,l,u,h,x,v,M),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function $0(s,e,t,n,i,r,o,a){let c;if(e.side===yn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===es,a),c===null)return null;uc.copy(a),uc.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(uc);return l<t.near||l>t.far?null:{distance:l,point:uc.clone(),object:s}}function hc(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Pr),s.getVertexPosition(c,Nr),s.getVertexPosition(l,Lr);const u=$0(s,e,t,n,Pr,Nr,Lr,lc);if(u){i&&(oc.fromBufferAttribute(i,a),ac.fromBufferAttribute(i,c),cc.fromBufferAttribute(i,l),u.uv=Jn.getInterpolation(lc,Pr,Nr,Lr,oc,ac,cc,new _e)),r&&(oc.fromBufferAttribute(r,a),ac.fromBufferAttribute(r,c),cc.fromBufferAttribute(r,l),u.uv1=Jn.getInterpolation(lc,Pr,Nr,Lr,oc,ac,cc,new _e),u.uv2=u.uv1),o&&(Kf.fromBufferAttribute(o,a),Zf.fromBufferAttribute(o,c),Qf.fromBufferAttribute(o,l),u.normal=Jn.getInterpolation(lc,Pr,Nr,Lr,Kf,Zf,Qf,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new P,materialIndex:0};Jn.getNormal(Pr,Nr,Lr,h.normal),u.face=h}return u}class Da extends jn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new xn(l,3)),this.setAttribute("normal",new xn(u,3)),this.setAttribute("uv",new xn(h,2));function m(_,g,p,x,v,M,y,b,E,T,S){const A=M/E,N=y/T,U=M/2,z=y/2,C=b/2,D=E+1,F=T+1;let B=0,Y=0;const V=new P;for(let j=0;j<F;j++){const O=j*N-z;for(let X=0;X<D;X++){const ie=X*A-U;V[_]=ie*x,V[g]=O*v,V[p]=C,l.push(V.x,V.y,V.z),V[_]=0,V[g]=0,V[p]=b>0?1:-1,u.push(V.x,V.y,V.z),h.push(X/E),h.push(1-j/T),B+=1}}for(let j=0;j<T;j++)for(let O=0;O<E;O++){const X=d+O+D*j,ie=d+O+D*(j+1),ce=d+(O+1)+D*(j+1),k=d+(O+1)+D*j;c.push(X,ie,k),c.push(ie,ce,k),Y+=6}a.addGroup(f,Y,S),f+=Y,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function po(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function an(s){const e={};for(let t=0;t<s.length;t++){const n=po(s[t]);for(const i in n)e[i]=n[i]}return e}function K0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function gg(s){return s.getRenderTarget()===null?s.outputColorSpace:Je.workingColorSpace}const Wh={clone:po,merge:an};var Z0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Q0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Z0,this.fragmentShader=Q0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=po(e.uniforms),this.uniformsGroups=K0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class _g extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=$i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class cn extends _g{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fo*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ea*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Or=-90,Ur=1;class J0 extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new cn(Or,Ur,e,t);i.layers=this.layers,this.add(i);const r=new cn(Or,Ur,e,t);r.layers=this.layers,this.add(r);const o=new cn(Or,Ur,e,t);o.layers=this.layers,this.add(o);const a=new cn(Or,Ur,e,t);a.layers=this.layers,this.add(a);const c=new cn(Or,Ur,e,t);c.layers=this.layers,this.add(c);const l=new cn(Or,Ur,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===$i)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Kc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class vg extends jt{constructor(e,t,n,i,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:ao,super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ey extends bs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(na("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===sr?vt:Gn),this.texture=new vg(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Da(5,5,5),r=new yi({name:"CubemapFromEquirect",uniforms:po(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:Ki});r.uniforms.tEquirect.value=t;const o=new qt(i,r),a=t.minFilter;return t.minFilter===ur&&(t.minFilter=pn),new J0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Au=new P,ty=new P,ny=new Xe;class Hs{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Au.subVectors(n,t).cross(ty.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Au),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ny.getNormalMatrix(e),i=this.coplanarPoint(Au).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bs=new Ti,dc=new P;class Xh{constructor(e=new Hs,t=new Hs,n=new Hs,i=new Hs,r=new Hs,o=new Hs){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$i){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],d=i[7],f=i[8],m=i[9],_=i[10],g=i[11],p=i[12],x=i[13],v=i[14],M=i[15];if(n[0].setComponents(c-r,d-l,g-f,M-p).normalize(),n[1].setComponents(c+r,d+l,g+f,M+p).normalize(),n[2].setComponents(c+o,d+u,g+m,M+x).normalize(),n[3].setComponents(c-o,d-u,g-m,M-x).normalize(),n[4].setComponents(c-a,d-h,g-_,M-v).normalize(),t===$i)n[5].setComponents(c+a,d+h,g+_,M+v).normalize();else if(t===Kc)n[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(e){return Bs.center.set(0,0,0),Bs.radius=.7071067811865476,Bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(dc.x=i.normal.x>0?e.max.x:e.min.x,dc.y=i.normal.y>0?e.max.y:e.min.y,dc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(dc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yg(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function iy(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,d=l.usage,f=s.createBuffer();s.bindBuffer(u,f),s.bufferData(u,h,d),l.onUploadCallback();let m;if(h instanceof Float32Array)m=s.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)m=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=s.SHORT;else if(h instanceof Uint32Array)m=s.UNSIGNED_INT;else if(h instanceof Int32Array)m=s.INT;else if(h instanceof Int8Array)m=s.BYTE;else if(h instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,h){const d=u.array,f=u.updateRange;s.bindBuffer(h,l),f.count===-1?s.bufferSubData(h,0,d):(t?s.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,u)):h.version<l.version&&(r(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}class Pa extends jn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,d=t/c,f=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const x=p*d-o;for(let v=0;v<l;v++){const M=v*h-r;m.push(M,-x,0),_.push(0,0,1),g.push(v/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){const v=x+l*p,M=x+l*(p+1),y=x+1+l*(p+1),b=x+1+l*p;f.push(v,M,b),f.push(M,y,b)}this.setIndex(f),this.setAttribute("position",new xn(m,3)),this.setAttribute("normal",new xn(_,3)),this.setAttribute("uv",new xn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.width,e.height,e.widthSegments,e.heightSegments)}}var sy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ry=`#ifdef USE_ALPHAHASH
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
#endif`,oy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ay=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ly=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,py=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,my=`#ifdef USE_IRIDESCENCE
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
#endif`,gy=`#ifdef USE_BUMPMAP
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
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,My=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,by=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ty=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ey=`#define PI 3.141592653589793
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
} // validated`,Ay=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wy=`vec3 transformedNormal = objectNormal;
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
#endif`,Cy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ry=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Iy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Py="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ny=`
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
}`,Ly=`#ifdef USE_ENVMAP
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
#endif`,Oy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uy=`#ifdef USE_ENVMAP
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
#endif`,Fy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ky=`#ifdef USE_ENVMAP
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
#endif`,By=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hy=`#ifdef USE_GRADIENTMAP
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
}`,Wy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Xy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yy=`uniform bool receiveShadow;
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
#endif`,$y=`#ifdef USE_ENVMAP
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
#endif`,Ky=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ex=`PhysicalMaterial material;
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
#endif`,tx=`struct PhysicalMaterial {
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
}`,nx=`
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
#endif`,ix=`#if defined( RE_IndirectDiffuse )
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
#endif`,sx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ox=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ax=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,cx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ux=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dx=`#if defined( USE_POINTS_UV )
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
#endif`,fx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,px=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gx=`#ifdef USE_MORPHNORMALS
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
#endif`,_x=`#ifdef USE_MORPHTARGETS
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
#endif`,vx=`#ifdef USE_MORPHTARGETS
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
#endif`,yx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tx=`#ifdef USE_NORMALMAP
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
#endif`,Ex=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ax=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ix=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Px=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ox=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ux=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vx=`float getShadowMask() {
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
}`,zx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gx=`#ifdef USE_SKINNING
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
#endif`,Hx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wx=`#ifdef USE_SKINNING
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
#endif`,Xx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$x=`#ifdef USE_TRANSMISSION
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
#endif`,Kx=`#ifdef USE_TRANSMISSION
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
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nS=`uniform sampler2D t2D;
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
}`,iS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aS=`#include <common>
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
}`,cS=`#if DEPTH_PACKING == 3200
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
}`,lS=`#define DISTANCE
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
}`,uS=`#define DISTANCE
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
}`,hS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fS=`uniform float scale;
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
}`,pS=`uniform vec3 diffuse;
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
}`,mS=`#include <common>
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
}`,gS=`uniform vec3 diffuse;
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
}`,_S=`#define LAMBERT
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
}`,vS=`#define LAMBERT
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
}`,yS=`#define MATCAP
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
}`,xS=`#define MATCAP
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
}`,SS=`#define NORMAL
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
}`,MS=`#define NORMAL
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
}`,bS=`#define PHONG
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
}`,TS=`#define PHONG
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
}`,ES=`#define STANDARD
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
}`,AS=`#define STANDARD
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
}`,wS=`#define TOON
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
}`,CS=`#define TOON
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
}`,RS=`uniform float size;
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
}`,IS=`uniform vec3 diffuse;
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
}`,DS=`#include <common>
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
}`,PS=`uniform vec3 color;
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
}`,NS=`uniform float rotation;
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
}`,LS=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:sy,alphahash_pars_fragment:ry,alphamap_fragment:oy,alphamap_pars_fragment:ay,alphatest_fragment:cy,alphatest_pars_fragment:ly,aomap_fragment:uy,aomap_pars_fragment:hy,begin_vertex:dy,beginnormal_vertex:fy,bsdfs:py,iridescence_fragment:my,bumpmap_pars_fragment:gy,clipping_planes_fragment:_y,clipping_planes_pars_fragment:vy,clipping_planes_pars_vertex:yy,clipping_planes_vertex:xy,color_fragment:Sy,color_pars_fragment:My,color_pars_vertex:by,color_vertex:Ty,common:Ey,cube_uv_reflection_fragment:Ay,defaultnormal_vertex:wy,displacementmap_pars_vertex:Cy,displacementmap_vertex:Ry,emissivemap_fragment:Iy,emissivemap_pars_fragment:Dy,colorspace_fragment:Py,colorspace_pars_fragment:Ny,envmap_fragment:Ly,envmap_common_pars_fragment:Oy,envmap_pars_fragment:Uy,envmap_pars_vertex:Fy,envmap_physical_pars_fragment:$y,envmap_vertex:ky,fog_vertex:By,fog_pars_vertex:Vy,fog_fragment:zy,fog_pars_fragment:Gy,gradientmap_pars_fragment:Hy,lightmap_fragment:Wy,lightmap_pars_fragment:Xy,lights_lambert_fragment:qy,lights_lambert_pars_fragment:jy,lights_pars_begin:Yy,lights_toon_fragment:Ky,lights_toon_pars_fragment:Zy,lights_phong_fragment:Qy,lights_phong_pars_fragment:Jy,lights_physical_fragment:ex,lights_physical_pars_fragment:tx,lights_fragment_begin:nx,lights_fragment_maps:ix,lights_fragment_end:sx,logdepthbuf_fragment:rx,logdepthbuf_pars_fragment:ox,logdepthbuf_pars_vertex:ax,logdepthbuf_vertex:cx,map_fragment:lx,map_pars_fragment:ux,map_particle_fragment:hx,map_particle_pars_fragment:dx,metalnessmap_fragment:fx,metalnessmap_pars_fragment:px,morphcolor_vertex:mx,morphnormal_vertex:gx,morphtarget_pars_vertex:_x,morphtarget_vertex:vx,normal_fragment_begin:yx,normal_fragment_maps:xx,normal_pars_fragment:Sx,normal_pars_vertex:Mx,normal_vertex:bx,normalmap_pars_fragment:Tx,clearcoat_normal_fragment_begin:Ex,clearcoat_normal_fragment_maps:Ax,clearcoat_pars_fragment:wx,iridescence_pars_fragment:Cx,opaque_fragment:Rx,packing:Ix,premultiplied_alpha_fragment:Dx,project_vertex:Px,dithering_fragment:Nx,dithering_pars_fragment:Lx,roughnessmap_fragment:Ox,roughnessmap_pars_fragment:Ux,shadowmap_pars_fragment:Fx,shadowmap_pars_vertex:kx,shadowmap_vertex:Bx,shadowmask_pars_fragment:Vx,skinbase_vertex:zx,skinning_pars_vertex:Gx,skinning_vertex:Hx,skinnormal_vertex:Wx,specularmap_fragment:Xx,specularmap_pars_fragment:qx,tonemapping_fragment:jx,tonemapping_pars_fragment:Yx,transmission_fragment:$x,transmission_pars_fragment:Kx,uv_pars_fragment:Zx,uv_pars_vertex:Qx,uv_vertex:Jx,worldpos_vertex:eS,background_vert:tS,background_frag:nS,backgroundCube_vert:iS,backgroundCube_frag:sS,cube_vert:rS,cube_frag:oS,depth_vert:aS,depth_frag:cS,distanceRGBA_vert:lS,distanceRGBA_frag:uS,equirect_vert:hS,equirect_frag:dS,linedashed_vert:fS,linedashed_frag:pS,meshbasic_vert:mS,meshbasic_frag:gS,meshlambert_vert:_S,meshlambert_frag:vS,meshmatcap_vert:yS,meshmatcap_frag:xS,meshnormal_vert:SS,meshnormal_frag:MS,meshphong_vert:bS,meshphong_frag:TS,meshphysical_vert:ES,meshphysical_frag:AS,meshtoon_vert:wS,meshtoon_frag:CS,points_vert:RS,points_frag:IS,shadow_vert:DS,shadow_frag:PS,sprite_vert:NS,sprite_frag:LS},de={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},mi={basic:{uniforms:an([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:an([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Me(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:an([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:an([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:an([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Me(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:an([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:an([de.points,de.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:an([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:an([de.common,de.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:an([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:an([de.sprite,de.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:an([de.common,de.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:an([de.lights,de.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};mi.physical={uniforms:an([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const fc={r:0,b:0,g:0};function OS(s,e,t,n,i,r,o){const a=new Me(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function m(g,p){let x=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,c):v&&v.isColor&&(_(v,1),x=!0);const M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Dl)?(u===void 0&&(u=new qt(new Da(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:po(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(y,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=Je.getTransfer(v.colorSpace)!==ht,(h!==v||d!==v.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new qt(new Pa(2,2),new yi({name:"BackgroundMaterial",uniforms:po(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=Je.getTransfer(v.colorSpace)!==ht,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function _(g,p){g.getRGB(fc,gg(s)),n.buffers.color.setClear(fc.r,fc.g,fc.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),c=p,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,_(a,c)},render:m}}function US(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=g(null);let l=c,u=!1;function h(C,D,F,B,Y){let V=!1;if(o){const j=_(B,F,D);l!==j&&(l=j,f(l.object)),V=p(C,B,F,Y),V&&x(C,B,F,Y)}else{const j=D.wireframe===!0;(l.geometry!==B.id||l.program!==F.id||l.wireframe!==j)&&(l.geometry=B.id,l.program=F.id,l.wireframe=j,V=!0)}Y!==null&&t.update(Y,s.ELEMENT_ARRAY_BUFFER),(V||u)&&(u=!1,T(C,D,F,B),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(C){return n.isWebGL2?s.bindVertexArray(C):r.bindVertexArrayOES(C)}function m(C){return n.isWebGL2?s.deleteVertexArray(C):r.deleteVertexArrayOES(C)}function _(C,D,F){const B=F.wireframe===!0;let Y=a[C.id];Y===void 0&&(Y={},a[C.id]=Y);let V=Y[D.id];V===void 0&&(V={},Y[D.id]=V);let j=V[B];return j===void 0&&(j=g(d()),V[B]=j),j}function g(C){const D=[],F=[],B=[];for(let Y=0;Y<i;Y++)D[Y]=0,F[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:B,object:C,attributes:{},index:null}}function p(C,D,F,B){const Y=l.attributes,V=D.attributes;let j=0;const O=F.getAttributes();for(const X in O)if(O[X].location>=0){const ce=Y[X];let k=V[X];if(k===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(k=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(k=C.instanceColor)),ce===void 0||ce.attribute!==k||k&&ce.data!==k.data)return!0;j++}return l.attributesNum!==j||l.index!==B}function x(C,D,F,B){const Y={},V=D.attributes;let j=0;const O=F.getAttributes();for(const X in O)if(O[X].location>=0){let ce=V[X];ce===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(ce=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(ce=C.instanceColor));const k={};k.attribute=ce,ce&&ce.data&&(k.data=ce.data),Y[X]=k,j++}l.attributes=Y,l.attributesNum=j,l.index=B}function v(){const C=l.newAttributes;for(let D=0,F=C.length;D<F;D++)C[D]=0}function M(C){y(C,0)}function y(C,D){const F=l.newAttributes,B=l.enabledAttributes,Y=l.attributeDivisors;F[C]=1,B[C]===0&&(s.enableVertexAttribArray(C),B[C]=1),Y[C]!==D&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,D),Y[C]=D)}function b(){const C=l.newAttributes,D=l.enabledAttributes;for(let F=0,B=D.length;F<B;F++)D[F]!==C[F]&&(s.disableVertexAttribArray(F),D[F]=0)}function E(C,D,F,B,Y,V,j){j===!0?s.vertexAttribIPointer(C,D,F,Y,V):s.vertexAttribPointer(C,D,F,B,Y,V)}function T(C,D,F,B){if(n.isWebGL2===!1&&(C.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const Y=B.attributes,V=F.getAttributes(),j=D.defaultAttributeValues;for(const O in V){const X=V[O];if(X.location>=0){let ie=Y[O];if(ie===void 0&&(O==="instanceMatrix"&&C.instanceMatrix&&(ie=C.instanceMatrix),O==="instanceColor"&&C.instanceColor&&(ie=C.instanceColor)),ie!==void 0){const ce=ie.normalized,k=ie.itemSize,oe=t.get(ie);if(oe===void 0)continue;const ye=oe.buffer,J=oe.type,We=oe.bytesPerElement,yt=n.isWebGL2===!0&&(J===s.INT||J===s.UNSIGNED_INT||ie.gpuType===Qm);if(ie.isInterleavedBufferAttribute){const Ne=ie.data,G=Ne.stride,Ft=ie.offset;if(Ne.isInstancedInterleavedBuffer){for(let Ce=0;Ce<X.locationSize;Ce++)y(X.location+Ce,Ne.meshPerAttribute);C.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let Ce=0;Ce<X.locationSize;Ce++)M(X.location+Ce);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let Ce=0;Ce<X.locationSize;Ce++)E(X.location+Ce,k/X.locationSize,J,ce,G*We,(Ft+k/X.locationSize*Ce)*We,yt)}else{if(ie.isInstancedBufferAttribute){for(let Ne=0;Ne<X.locationSize;Ne++)y(X.location+Ne,ie.meshPerAttribute);C.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ne=0;Ne<X.locationSize;Ne++)M(X.location+Ne);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let Ne=0;Ne<X.locationSize;Ne++)E(X.location+Ne,k/X.locationSize,J,ce,k*We,k/X.locationSize*Ne*We,yt)}}else if(j!==void 0){const ce=j[O];if(ce!==void 0)switch(ce.length){case 2:s.vertexAttrib2fv(X.location,ce);break;case 3:s.vertexAttrib3fv(X.location,ce);break;case 4:s.vertexAttrib4fv(X.location,ce);break;default:s.vertexAttrib1fv(X.location,ce)}}}}b()}function S(){U();for(const C in a){const D=a[C];for(const F in D){const B=D[F];for(const Y in B)m(B[Y].object),delete B[Y];delete D[F]}delete a[C]}}function A(C){if(a[C.id]===void 0)return;const D=a[C.id];for(const F in D){const B=D[F];for(const Y in B)m(B[Y].object),delete B[Y];delete D[F]}delete a[C.id]}function N(C){for(const D in a){const F=a[D];if(F[C.id]===void 0)continue;const B=F[C.id];for(const Y in B)m(B[Y].object),delete B[Y];delete F[C.id]}}function U(){z(),u=!0,l!==c&&(l=c,f(l.object))}function z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:U,resetDefaultState:z,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:M,disableUnusedAttributes:b}}function FS(s,e,t,n){const i=n.isWebGL2;let r;function o(l){r=l}function a(l,u){s.drawArrays(r,l,u),t.update(u,r,1)}function c(l,u,h){if(h===0)return;let d,f;if(i)d=s,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,l,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=c}function kS(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,M=o||e.has("OES_texture_float"),y=v&&M,b=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:y,maxSamples:b}}function BS(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Hs,a=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=s.get(h);if(!i||m===null||m.length===0||r&&!g)r?u(null):l();else{const x=r?0:n,v=x*4;let M=p.clippingState||null;c.value=M,M=u(m,d,v,f);for(let y=0;y!==v;++y)M[y]=t[y];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,M=f;v!==_;++v,M+=4)o.copy(h[v]).applyMatrix4(x,a),o.normal.toArray(g,M),g[M+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function VS(s){let e=new WeakMap;function t(o,a){return a===sh?o.mapping=ao:a===rh&&(o.mapping=co),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===sh||a===rh)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new ey(c.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Co extends _g{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Kr=4,Jf=[.125,.215,.35,.446,.526,.582],qs=20,wu=new Co,ep=new Me;let Cu=null;const Ws=(1+Math.sqrt(5))/2,Fr=1/Ws,tp=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Ws,Fr),new P(0,Ws,-Fr),new P(Fr,0,Ws),new P(-Fr,0,Ws),new P(Ws,Fr,0),new P(-Ws,Fr,0)];class np{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Cu=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cu),e.scissorTest=!1,pc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ao||e.mapping===co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cu=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:lo,format:Rn,colorSpace:Yt,depthBuffer:!1},i=ip(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ip(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zS(r)),this._blurMaterial=GS(r,e,t)}return i}_compileMaterial(e){const t=new qt(this._lodPlanes[0],e);this._renderer.compile(t,wu)}_sceneToCubeUV(e,t,n,i){const a=new cn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(ep),u.toneMapping=xs,u.autoClear=!1;const f=new Hn({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),m=new qt(new Da,f);let _=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,_=!0):(f.color.copy(ep),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):x===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const v=this._cubeSize;pc(i,x*v,p>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ao||e.mapping===co;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sp());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new qt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;pc(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,wu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=tp[(i-1)%tp.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new qt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*qs-1),_=r/m,g=isFinite(r)?1+Math.floor(u*_):qs;g>qs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${qs}`);const p=[];let x=0;for(let E=0;E<qs;++E){const T=E/_,S=Math.exp(-T*T/2);p.push(S),E===0?x+=S:E<g&&(x+=2*S)}for(let E=0;E<p.length;E++)p[E]=p[E]/x;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=m,d.mipInt.value=v-n;const M=this._sizeLods[i],y=3*M*(i>v-Kr?i-v+Kr:0),b=4*(this._cubeSize-M);pc(t,y,b,3*M,2*M),c.setRenderTarget(t),c.render(h,wu)}}function zS(s){const e=[],t=[],n=[];let i=s;const r=s-Kr+1+Jf.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Kr?c=Jf[o-s+Kr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,_=3,g=2,p=1,x=new Float32Array(_*m*f),v=new Float32Array(g*m*f),M=new Float32Array(p*m*f);for(let b=0;b<f;b++){const E=b%3*2/3-1,T=b>2?0:-1,S=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];x.set(S,_*m*b),v.set(d,g*m*b);const A=[b,b,b,b,b,b];M.set(A,p*m*b)}const y=new jn;y.setAttribute("position",new hn(x,_)),y.setAttribute("uv",new hn(v,g)),y.setAttribute("faceIndex",new hn(M,p)),e.push(y),i>Kr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ip(s,e,t){const n=new bs(s,e,t);return n.texture.mapping=Dl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pc(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function GS(s,e,t){const n=new Float32Array(qs),i=new P(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:qs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:qh(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function sp(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qh(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function rp(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function qh(){return`

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
	`}function HS(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===sh||c===rh,u=c===ao||c===co;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new np(s)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new np(s));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function WS(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function XS(s,e,t,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const _=d.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)e.remove(_[g])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const m in d)e.update(d[m],s.ARRAY_BUFFER);const f=h.morphAttributes;for(const m in f){const _=f[m];for(let g=0,p=_.length;g<p;g++)e.update(_[g],s.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,m=h.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let v=0,M=x.length;v<M;v+=3){const y=x[v+0],b=x[v+1],E=x[v+2];d.push(y,b,b,E,E,y)}}else if(m!==void 0){const x=m.array;_=m.version;for(let v=0,M=x.length/3-1;v<M;v+=3){const y=v+0,b=v+1,E=v+2;d.push(y,b,b,E,E,y)}}else return;const g=new(lg(d)?mg:pg)(d,1);g.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,g)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function qS(s,e,t,n){const i=n.isWebGL2;let r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,f){s.drawElements(r,f,a,d*c),t.update(f,r,1)}function h(d,f,m){if(m===0)return;let _,g;if(i)_=s,g="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[g](r,f,a,d*c,m),t.update(f,r,m)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function jS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function YS(s,e){return s[0]-e[0]}function $S(s,e){return Math.abs(e[1])-Math.abs(s[1])}function KS(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new lt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=f!==void 0?f.length:0;let _=r.get(u);if(_===void 0||_.count!==m){let C=function(){U.dispose(),r.delete(u),u.removeEventListener("dispose",C)};_!==void 0&&_.texture.dispose();const x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],E=u.morphAttributes.color||[];let T=0;x===!0&&(T=1),v===!0&&(T=2),M===!0&&(T=3);let S=u.attributes.position.count*T,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const N=new Float32Array(S*A*4*m),U=new dg(N,S,A,m);U.type=vi,U.needsUpdate=!0;const z=T*4;for(let D=0;D<m;D++){const F=y[D],B=b[D],Y=E[D],V=S*A*4*D;for(let j=0;j<F.count;j++){const O=j*z;x===!0&&(o.fromBufferAttribute(F,j),N[V+O+0]=o.x,N[V+O+1]=o.y,N[V+O+2]=o.z,N[V+O+3]=0),v===!0&&(o.fromBufferAttribute(B,j),N[V+O+4]=o.x,N[V+O+5]=o.y,N[V+O+6]=o.z,N[V+O+7]=0),M===!0&&(o.fromBufferAttribute(Y,j),N[V+O+8]=o.x,N[V+O+9]=o.y,N[V+O+10]=o.z,N[V+O+11]=Y.itemSize===4?o.w:1)}}_={count:m,texture:U,size:new _e(S,A)},r.set(u,_),u.addEventListener("dispose",C)}let g=0;for(let x=0;x<d.length;x++)g+=d[x];const p=u.morphTargetsRelative?1:1-g;h.getUniforms().setValue(s,"morphTargetBaseInfluence",p),h.getUniforms().setValue(s,"morphTargetInfluences",d),h.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const f=d===void 0?0:d.length;let m=n[u.id];if(m===void 0||m.length!==f){m=[];for(let v=0;v<f;v++)m[v]=[v,0];n[u.id]=m}for(let v=0;v<f;v++){const M=m[v];M[0]=v,M[1]=d[v]}m.sort($S);for(let v=0;v<8;v++)v<f&&m[v][1]?(a[v][0]=m[v][0],a[v][1]=m[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(YS);const _=u.morphAttributes.position,g=u.morphAttributes.normal;let p=0;for(let v=0;v<8;v++){const M=a[v],y=M[0],b=M[1];y!==Number.MAX_SAFE_INTEGER&&b?(_&&u.getAttribute("morphTarget"+v)!==_[y]&&u.setAttribute("morphTarget"+v,_[y]),g&&u.getAttribute("morphNormal"+v)!==g[y]&&u.setAttribute("morphNormal"+v,g[y]),i[v]=b,p+=b):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),g&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const x=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(s,"morphTargetBaseInfluence",x),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function ZS(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const xg=new jt,Sg=new dg,Mg=new k0,bg=new vg,op=[],ap=[],cp=new Float32Array(16),lp=new Float32Array(9),up=new Float32Array(4);function Ro(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=op[i];if(r===void 0&&(r=new Float32Array(i),op[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Lt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ot(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ol(s,e){let t=ap[e];t===void 0&&(t=new Int32Array(e),ap[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function QS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function JS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;s.uniform2fv(this.addr,e),Ot(t,e)}}function eM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;s.uniform3fv(this.addr,e),Ot(t,e)}}function tM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;s.uniform4fv(this.addr,e),Ot(t,e)}}function nM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Lt(t,n))return;up.set(n),s.uniformMatrix2fv(this.addr,!1,up),Ot(t,n)}}function iM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Lt(t,n))return;lp.set(n),s.uniformMatrix3fv(this.addr,!1,lp),Ot(t,n)}}function sM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Lt(t,n))return;cp.set(n),s.uniformMatrix4fv(this.addr,!1,cp),Ot(t,n)}}function rM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function oM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;s.uniform2iv(this.addr,e),Ot(t,e)}}function aM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;s.uniform3iv(this.addr,e),Ot(t,e)}}function cM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;s.uniform4iv(this.addr,e),Ot(t,e)}}function lM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function uM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;s.uniform2uiv(this.addr,e),Ot(t,e)}}function hM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;s.uniform3uiv(this.addr,e),Ot(t,e)}}function dM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;s.uniform4uiv(this.addr,e),Ot(t,e)}}function fM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||xg,i)}function pM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Mg,i)}function mM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||bg,i)}function gM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Sg,i)}function _M(s){switch(s){case 5126:return QS;case 35664:return JS;case 35665:return eM;case 35666:return tM;case 35674:return nM;case 35675:return iM;case 35676:return sM;case 5124:case 35670:return rM;case 35667:case 35671:return oM;case 35668:case 35672:return aM;case 35669:case 35673:return cM;case 5125:return lM;case 36294:return uM;case 36295:return hM;case 36296:return dM;case 35678:case 36198:case 36298:case 36306:case 35682:return fM;case 35679:case 36299:case 36307:return pM;case 35680:case 36300:case 36308:case 36293:return mM;case 36289:case 36303:case 36311:case 36292:return gM}}function vM(s,e){s.uniform1fv(this.addr,e)}function yM(s,e){const t=Ro(e,this.size,2);s.uniform2fv(this.addr,t)}function xM(s,e){const t=Ro(e,this.size,3);s.uniform3fv(this.addr,t)}function SM(s,e){const t=Ro(e,this.size,4);s.uniform4fv(this.addr,t)}function MM(s,e){const t=Ro(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function bM(s,e){const t=Ro(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function TM(s,e){const t=Ro(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function EM(s,e){s.uniform1iv(this.addr,e)}function AM(s,e){s.uniform2iv(this.addr,e)}function wM(s,e){s.uniform3iv(this.addr,e)}function CM(s,e){s.uniform4iv(this.addr,e)}function RM(s,e){s.uniform1uiv(this.addr,e)}function IM(s,e){s.uniform2uiv(this.addr,e)}function DM(s,e){s.uniform3uiv(this.addr,e)}function PM(s,e){s.uniform4uiv(this.addr,e)}function NM(s,e,t){const n=this.cache,i=e.length,r=Ol(t,i);Lt(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||xg,r[o])}function LM(s,e,t){const n=this.cache,i=e.length,r=Ol(t,i);Lt(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Mg,r[o])}function OM(s,e,t){const n=this.cache,i=e.length,r=Ol(t,i);Lt(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||bg,r[o])}function UM(s,e,t){const n=this.cache,i=e.length,r=Ol(t,i);Lt(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Sg,r[o])}function FM(s){switch(s){case 5126:return vM;case 35664:return yM;case 35665:return xM;case 35666:return SM;case 35674:return MM;case 35675:return bM;case 35676:return TM;case 5124:case 35670:return EM;case 35667:case 35671:return AM;case 35668:case 35672:return wM;case 35669:case 35673:return CM;case 5125:return RM;case 36294:return IM;case 36295:return DM;case 36296:return PM;case 35678:case 36198:case 36298:case 36306:case 35682:return NM;case 35679:case 36299:case 36307:return LM;case 35680:case 36300:case 36308:case 36293:return OM;case 36289:case 36303:case 36311:case 36292:return UM}}class kM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=_M(t.type)}}class BM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=FM(t.type)}}class VM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Ru=/(\w+)(\])?(\[|\.)?/g;function hp(s,e){s.seq.push(e),s.map[e.id]=e}function zM(s,e,t){const n=s.name,i=n.length;for(Ru.lastIndex=0;;){const r=Ru.exec(n),o=Ru.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){hp(t,l===void 0?new kM(a,s,e):new BM(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new VM(a),hp(t,h)),t=h}}}class Bc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);zM(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function dp(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let GM=0;function HM(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function WM(s){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(s);let n;switch(e===t?n="":e===$c&&t===Yc?n="LinearDisplayP3ToLinearSRGB":e===Yc&&t===$c&&(n="LinearSRGBToLinearDisplayP3"),s){case Yt:case Pl:return[n,"LinearTransferOETF"];case vt:case zh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function fp(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+HM(s.getShaderSource(e),o)}else return i}function XM(s,e){const t=WM(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function qM(s,e){let t;switch(e){case qm:t="Linear";break;case jm:t="Reinhard";break;case Ym:t="OptimizedCineon";break;case $m:t="ACESFilmic";break;case $v:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function jM(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($o).join(`
`)}function YM(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $M(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function $o(s){return s!==""}function pp(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const KM=/^[ \t]*#include +<([\w\d./]+)>/gm;function hh(s){return s.replace(KM,QM)}const ZM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function QM(s,e){let t=Ve[e];if(t===void 0){const n=ZM.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return hh(t)}const JM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gp(s){return s.replace(JM,eb)}function eb(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function _p(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tb(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Gm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Hm?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function nb(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ao:case co:e="ENVMAP_TYPE_CUBE";break;case Dl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ib(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case co:e="ENVMAP_MODE_REFRACTION";break}return e}function sb(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Fh:e="ENVMAP_BLENDING_MULTIPLY";break;case jv:e="ENVMAP_BLENDING_MIX";break;case Yv:e="ENVMAP_BLENDING_ADD";break}return e}function rb(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ob(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=tb(t),l=nb(t),u=ib(t),h=sb(t),d=rb(t),f=t.isWebGL2?"":jM(t),m=YM(r),_=i.createProgram();let g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter($o).join(`
`),g.length>0&&(g+=`
`),p=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter($o).join(`
`),p.length>0&&(p+=`
`)):(g=[_p(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),p=[f,_p(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xs?"#define TONE_MAPPING":"",t.toneMapping!==xs?Ve.tonemapping_pars_fragment:"",t.toneMapping!==xs?qM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,XM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($o).join(`
`)),o=hh(o),o=pp(o,t),o=mp(o,t),a=hh(a),a=pp(a,t),a=mp(a,t),o=gp(o),a=gp(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Of?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Of?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=x+g+o,M=x+p+a,y=dp(i,i.VERTEX_SHADER,v),b=dp(i,i.FRAGMENT_SHADER,M);if(i.attachShader(_,y),i.attachShader(_,b),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),s.debug.checkShaderErrors){const S=i.getProgramInfoLog(_).trim(),A=i.getShaderInfoLog(y).trim(),N=i.getShaderInfoLog(b).trim();let U=!0,z=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(U=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,y,b);else{const C=fp(i,y,"vertex"),D=fp(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+C+`
`+D)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(A===""||N==="")&&(z=!1);z&&(this.diagnostics={runnable:U,programLog:S,vertexShader:{log:A,prefix:g},fragmentShader:{log:N,prefix:p}})}i.deleteShader(y),i.deleteShader(b);let E;this.getUniforms=function(){return E===void 0&&(E=new Bc(i,_)),E};let T;return this.getAttributes=function(){return T===void 0&&(T=$M(i,_)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=GM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=b,this}let ab=0;class cb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new lb(e),t.set(e,n)),n}}class lb{constructor(e){this.id=ab++,this.code=e,this.usedTimes=0}}function ub(s,e,t,n,i,r,o){const a=new Hh,c=new cb,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function g(S,A,N,U,z){const C=U.fog,D=z.geometry,F=S.isMeshStandardMaterial?U.environment:null,B=(S.isMeshStandardMaterial?t:e).get(S.envMap||F),Y=B&&B.mapping===Dl?B.image.height:null,V=m[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const j=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,O=j!==void 0?j.length:0;let X=0;D.morphAttributes.position!==void 0&&(X=1),D.morphAttributes.normal!==void 0&&(X=2),D.morphAttributes.color!==void 0&&(X=3);let ie,ce,k,oe;if(V){const pt=mi[V];ie=pt.vertexShader,ce=pt.fragmentShader}else ie=S.vertexShader,ce=S.fragmentShader,c.update(S),k=c.getVertexShaderID(S),oe=c.getFragmentShaderID(S);const ye=s.getRenderTarget(),J=z.isInstancedMesh===!0,We=!!S.map,yt=!!S.matcap,Ne=!!B,G=!!S.aoMap,Ft=!!S.lightMap,Ce=!!S.bumpMap,Z=!!S.normalMap,te=!!S.displacementMap,ke=!!S.emissiveMap,Se=!!S.metalnessMap,pe=!!S.roughnessMap,Ae=S.anisotropy>0,et=S.clearcoat>0,ft=S.iridescence>0,I=S.sheen>0,w=S.transmission>0,q=Ae&&!!S.anisotropyMap,se=et&&!!S.clearcoatMap,ne=et&&!!S.clearcoatNormalMap,ae=et&&!!S.clearcoatRoughnessMap,be=ft&&!!S.iridescenceMap,he=ft&&!!S.iridescenceThicknessMap,me=I&&!!S.sheenColorMap,Le=I&&!!S.sheenRoughnessMap,Qe=!!S.specularMap,re=!!S.specularColorMap,st=!!S.specularIntensityMap,Be=w&&!!S.transmissionMap,Oe=w&&!!S.thicknessMap,Re=!!S.gradientMap,L=!!S.alphaMap,ue=S.alphaTest>0,le=!!S.alphaHash,ge=!!S.extensions,fe=!!D.attributes.uv1,ee=!!D.attributes.uv2,Te=!!D.attributes.uv3;let ze=xs;return S.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(ze=s.toneMapping),{isWebGL2:u,shaderID:V,shaderType:S.type,shaderName:S.name,vertexShader:ie,fragmentShader:ce,defines:S.defines,customVertexShaderID:k,customFragmentShaderID:oe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,instancing:J,instancingColor:J&&z.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ye===null?s.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Yt,map:We,matcap:yt,envMap:Ne,envMapMode:Ne&&B.mapping,envMapCubeUVHeight:Y,aoMap:G,lightMap:Ft,bumpMap:Ce,normalMap:Z,displacementMap:d&&te,emissiveMap:ke,normalMapObjectSpace:Z&&S.normalMapType===u0,normalMapTangentSpace:Z&&S.normalMapType===Vh,metalnessMap:Se,roughnessMap:pe,anisotropy:Ae,anisotropyMap:q,clearcoat:et,clearcoatMap:se,clearcoatNormalMap:ne,clearcoatRoughnessMap:ae,iridescence:ft,iridescenceMap:be,iridescenceThicknessMap:he,sheen:I,sheenColorMap:me,sheenRoughnessMap:Le,specularMap:Qe,specularColorMap:re,specularIntensityMap:st,transmission:w,transmissionMap:Be,thicknessMap:Oe,gradientMap:Re,opaque:S.transparent===!1&&S.blending===Jr,alphaMap:L,alphaTest:ue,alphaHash:le,combine:S.combine,mapUv:We&&_(S.map.channel),aoMapUv:G&&_(S.aoMap.channel),lightMapUv:Ft&&_(S.lightMap.channel),bumpMapUv:Ce&&_(S.bumpMap.channel),normalMapUv:Z&&_(S.normalMap.channel),displacementMapUv:te&&_(S.displacementMap.channel),emissiveMapUv:ke&&_(S.emissiveMap.channel),metalnessMapUv:Se&&_(S.metalnessMap.channel),roughnessMapUv:pe&&_(S.roughnessMap.channel),anisotropyMapUv:q&&_(S.anisotropyMap.channel),clearcoatMapUv:se&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:he&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:me&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(S.sheenRoughnessMap.channel),specularMapUv:Qe&&_(S.specularMap.channel),specularColorMapUv:re&&_(S.specularColorMap.channel),specularIntensityMapUv:st&&_(S.specularIntensityMap.channel),transmissionMapUv:Be&&_(S.transmissionMap.channel),thicknessMapUv:Oe&&_(S.thicknessMap.channel),alphaMapUv:L&&_(S.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Z||Ae),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:fe,vertexUv2s:ee,vertexUv3s:Te,pointsUvs:z.isPoints===!0&&!!D.attributes.uv&&(We||L),fog:!!C,useFog:S.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:z.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:X,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:ze,useLegacyLights:s._useLegacyLights,decodeVideoTexture:We&&S.map.isVideoTexture===!0&&Je.getTransfer(S.map.colorSpace)===ht,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Cn,flipSided:S.side===yn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ge&&S.extensions.derivatives===!0,extensionFragDepth:ge&&S.extensions.fragDepth===!0,extensionDrawBuffers:ge&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)A.push(N),A.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(x(A,S),v(A,S),A.push(s.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function x(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function v(S,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function M(S){const A=m[S.type];let N;if(A){const U=mi[A];N=Wh.clone(U.uniforms)}else N=S.uniforms;return N}function y(S,A){let N;for(let U=0,z=l.length;U<z;U++){const C=l[U];if(C.cacheKey===A){N=C,++N.usedTimes;break}}return N===void 0&&(N=new ob(s,A,S,r),l.push(N)),N}function b(S){if(--S.usedTimes===0){const A=l.indexOf(S);l[A]=l[l.length-1],l.pop(),S.destroy()}}function E(S){c.remove(S)}function T(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:M,acquireProgram:y,releaseProgram:b,releaseShaderCache:E,programs:l,dispose:T}}function hb(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function db(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function vp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function yp(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,m,_,g){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},s[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=g),e++,p}function a(h,d,f,m,_,g){const p=o(h,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(h,d,f,m,_,g){const p=o(h,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||db),n.length>1&&n.sort(d||vp),i.length>1&&i.sort(d||vp)}function u(){for(let h=e,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function fb(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new yp,s.set(n,[o])):i>=r.length?(o=new yp,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function pb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Me};break;case"SpotLight":t={position:new P,direction:new P,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function mb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let gb=0;function _b(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function vb(s,e){const t=new pb,n=mb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new P);const r=new P,o=new Pe,a=new Pe;function c(u,h){let d=0,f=0,m=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let _=0,g=0,p=0,x=0,v=0,M=0,y=0,b=0,E=0,T=0,S=0;u.sort(_b);const A=h===!0?Math.PI:1;for(let U=0,z=u.length;U<z;U++){const C=u[U],D=C.color,F=C.intensity,B=C.distance,Y=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=D.r*F*A,f+=D.g*F*A,m+=D.b*F*A;else if(C.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(C.sh.coefficients[V],F);S++}else if(C.isDirectionalLight){const V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity*A),C.castShadow){const j=C.shadow,O=n.get(C);O.shadowBias=j.bias,O.shadowNormalBias=j.normalBias,O.shadowRadius=j.radius,O.shadowMapSize=j.mapSize,i.directionalShadow[_]=O,i.directionalShadowMap[_]=Y,i.directionalShadowMatrix[_]=C.shadow.matrix,M++}i.directional[_]=V,_++}else if(C.isSpotLight){const V=t.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(D).multiplyScalar(F*A),V.distance=B,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,i.spot[p]=V;const j=C.shadow;if(C.map&&(i.spotLightMap[E]=C.map,E++,j.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[p]=j.matrix,C.castShadow){const O=n.get(C);O.shadowBias=j.bias,O.shadowNormalBias=j.normalBias,O.shadowRadius=j.radius,O.shadowMapSize=j.mapSize,i.spotShadow[p]=O,i.spotShadowMap[p]=Y,b++}p++}else if(C.isRectAreaLight){const V=t.get(C);V.color.copy(D).multiplyScalar(F),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),i.rectArea[x]=V,x++}else if(C.isPointLight){const V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity*A),V.distance=C.distance,V.decay=C.decay,C.castShadow){const j=C.shadow,O=n.get(C);O.shadowBias=j.bias,O.shadowNormalBias=j.normalBias,O.shadowRadius=j.radius,O.shadowMapSize=j.mapSize,O.shadowCameraNear=j.camera.near,O.shadowCameraFar=j.camera.far,i.pointShadow[g]=O,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=C.shadow.matrix,y++}i.point[g]=V,g++}else if(C.isHemisphereLight){const V=t.get(C);V.skyColor.copy(C.color).multiplyScalar(F*A),V.groundColor.copy(C.groundColor).multiplyScalar(F*A),i.hemi[v]=V,v++}}x>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=m;const N=i.hash;(N.directionalLength!==_||N.pointLength!==g||N.spotLength!==p||N.rectAreaLength!==x||N.hemiLength!==v||N.numDirectionalShadows!==M||N.numPointShadows!==y||N.numSpotShadows!==b||N.numSpotMaps!==E||N.numLightProbes!==S)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=x,i.point.length=g,i.hemi.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=b+E-T,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=S,N.directionalLength=_,N.pointLength=g,N.spotLength=p,N.rectAreaLength=x,N.hemiLength=v,N.numDirectionalShadows=M,N.numPointShadows=y,N.numSpotShadows=b,N.numSpotMaps=E,N.numLightProbes=S,i.version=gb++)}function l(u,h){let d=0,f=0,m=0,_=0,g=0;const p=h.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const M=u[x];if(M.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),d++}else if(M.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),m++}else if(M.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const y=i.hemi[g];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(p),g++}}}return{setup:c,setupView:l,state:i}}function xp(s,e){const t=new vb(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function yb(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new xp(s,e),t.set(r,[c])):o>=a.length?(c=new xp(s,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class xb extends ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=c0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sb extends ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Mb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bb=`uniform sampler2D shadow_pass;
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
}`;function Tb(s,e,t){let n=new Xh;const i=new _e,r=new _e,o=new lt,a=new xb({depthPacking:l0}),c=new Sb,l={},u=t.maxTextureSize,h={[es]:yn,[yn]:es,[Cn]:Cn},d=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:Mb,fragmentShader:bb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new jn;m.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new qt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gm;let p=this.type;this.render=function(y,b,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;const T=s.getRenderTarget(),S=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Ki),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=p!==Hi&&this.type===Hi,z=p===Hi&&this.type!==Hi;for(let C=0,D=y.length;C<D;C++){const F=y[C],B=F.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const Y=B.getFrameExtents();if(i.multiply(Y),r.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Y.x),i.x=r.x*Y.x,B.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Y.y),i.y=r.y*Y.y,B.mapSize.y=r.y)),B.map===null||U===!0||z===!0){const j=this.type!==Hi?{minFilter:Pt,magFilter:Pt}:{};B.map!==null&&B.map.dispose(),B.map=new bs(i.x,i.y,j),B.map.texture.name=F.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const V=B.getViewportCount();for(let j=0;j<V;j++){const O=B.getViewport(j);o.set(r.x*O.x,r.y*O.y,r.x*O.z,r.y*O.w),N.viewport(o),B.updateMatrices(F,j),n=B.getFrustum(),M(b,E,B.camera,F,this.type)}B.isPointLightShadow!==!0&&this.type===Hi&&x(B,E),B.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(T,S,A)};function x(y,b){const E=e.update(_);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new bs(i.x,i.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(b,null,E,d,_,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(b,null,E,f,_,null)}function v(y,b,E,T){let S=null;const A=E.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(A!==void 0)S=A;else if(S=E.isPointLight===!0?c:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const N=S.uuid,U=b.uuid;let z=l[N];z===void 0&&(z={},l[N]=z);let C=z[U];C===void 0&&(C=S.clone(),z[U]=C),S=C}if(S.visible=b.visible,S.wireframe=b.wireframe,T===Hi?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:h[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,E.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=s.properties.get(S);N.light=E}return S}function M(y,b,E,T,S){if(y.visible===!1)return;if(y.layers.test(b.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&S===Hi)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,y.matrixWorld);const U=e.update(y),z=y.material;if(Array.isArray(z)){const C=U.groups;for(let D=0,F=C.length;D<F;D++){const B=C[D],Y=z[B.materialIndex];if(Y&&Y.visible){const V=v(y,Y,T,S);s.renderBufferDirect(E,null,U,V,y,B)}}}else if(z.visible){const C=v(y,z,T,S);s.renderBufferDirect(E,null,U,C,y,null)}}const N=y.children;for(let U=0,z=N.length;U<z;U++)M(N[U],b,E,T,S)}}function Eb(s,e,t){const n=t.isWebGL2;function i(){let L=!1;const ue=new lt;let le=null;const ge=new lt(0,0,0,0);return{setMask:function(fe){le!==fe&&!L&&(s.colorMask(fe,fe,fe,fe),le=fe)},setLocked:function(fe){L=fe},setClear:function(fe,ee,Te,ze,nn){nn===!0&&(fe*=ze,ee*=ze,Te*=ze),ue.set(fe,ee,Te,ze),ge.equals(ue)===!1&&(s.clearColor(fe,ee,Te,ze),ge.copy(ue))},reset:function(){L=!1,le=null,ge.set(-1,0,0,0)}}}function r(){let L=!1,ue=null,le=null,ge=null;return{setTest:function(fe){fe?ye(s.DEPTH_TEST):J(s.DEPTH_TEST)},setMask:function(fe){ue!==fe&&!L&&(s.depthMask(fe),ue=fe)},setFunc:function(fe){if(le!==fe){switch(fe){case Vv:s.depthFunc(s.NEVER);break;case zv:s.depthFunc(s.ALWAYS);break;case Gv:s.depthFunc(s.LESS);break;case ih:s.depthFunc(s.LEQUAL);break;case Hv:s.depthFunc(s.EQUAL);break;case Wv:s.depthFunc(s.GEQUAL);break;case Xv:s.depthFunc(s.GREATER);break;case qv:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}le=fe}},setLocked:function(fe){L=fe},setClear:function(fe){ge!==fe&&(s.clearDepth(fe),ge=fe)},reset:function(){L=!1,ue=null,le=null,ge=null}}}function o(){let L=!1,ue=null,le=null,ge=null,fe=null,ee=null,Te=null,ze=null,nn=null;return{setTest:function(pt){L||(pt?ye(s.STENCIL_TEST):J(s.STENCIL_TEST))},setMask:function(pt){ue!==pt&&!L&&(s.stencilMask(pt),ue=pt)},setFunc:function(pt,di,sn){(le!==pt||ge!==di||fe!==sn)&&(s.stencilFunc(pt,di,sn),le=pt,ge=di,fe=sn)},setOp:function(pt,di,sn){(ee!==pt||Te!==di||ze!==sn)&&(s.stencilOp(pt,di,sn),ee=pt,Te=di,ze=sn)},setLocked:function(pt){L=pt},setClear:function(pt){nn!==pt&&(s.clearStencil(pt),nn=pt)},reset:function(){L=!1,ue=null,le=null,ge=null,fe=null,ee=null,Te=null,ze=null,nn=null}}}const a=new i,c=new r,l=new o,u=new WeakMap,h=new WeakMap;let d={},f={},m=new WeakMap,_=[],g=null,p=!1,x=null,v=null,M=null,y=null,b=null,E=null,T=null,S=!1,A=null,N=null,U=null,z=null,C=null;const D=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,B=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Y)[1]),F=B>=1):Y.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),F=B>=2);let V=null,j={};const O=s.getParameter(s.SCISSOR_BOX),X=s.getParameter(s.VIEWPORT),ie=new lt().fromArray(O),ce=new lt().fromArray(X);function k(L,ue,le,ge){const fe=new Uint8Array(4),ee=s.createTexture();s.bindTexture(L,ee),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Te=0;Te<le;Te++)n&&(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)?s.texImage3D(ue,0,s.RGBA,1,1,ge,0,s.RGBA,s.UNSIGNED_BYTE,fe):s.texImage2D(ue+Te,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,fe);return ee}const oe={};oe[s.TEXTURE_2D]=k(s.TEXTURE_2D,s.TEXTURE_2D,1),oe[s.TEXTURE_CUBE_MAP]=k(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(oe[s.TEXTURE_2D_ARRAY]=k(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),oe[s.TEXTURE_3D]=k(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ye(s.DEPTH_TEST),c.setFunc(ih),te(!1),ke(rf),ye(s.CULL_FACE),Ce(Ki);function ye(L){d[L]!==!0&&(s.enable(L),d[L]=!0)}function J(L){d[L]!==!1&&(s.disable(L),d[L]=!1)}function We(L,ue){return f[L]!==ue?(s.bindFramebuffer(L,ue),f[L]=ue,n&&(L===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ue),L===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ue)),!0):!1}function yt(L,ue){let le=_,ge=!1;if(L)if(le=m.get(ue),le===void 0&&(le=[],m.set(ue,le)),L.isWebGLMultipleRenderTargets){const fe=L.texture;if(le.length!==fe.length||le[0]!==s.COLOR_ATTACHMENT0){for(let ee=0,Te=fe.length;ee<Te;ee++)le[ee]=s.COLOR_ATTACHMENT0+ee;le.length=fe.length,ge=!0}}else le[0]!==s.COLOR_ATTACHMENT0&&(le[0]=s.COLOR_ATTACHMENT0,ge=!0);else le[0]!==s.BACK&&(le[0]=s.BACK,ge=!0);ge&&(t.isWebGL2?s.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function Ne(L){return g!==L?(s.useProgram(L),g=L,!0):!1}const G={[Wr]:s.FUNC_ADD,[Rv]:s.FUNC_SUBTRACT,[Iv]:s.FUNC_REVERSE_SUBTRACT};if(n)G[cf]=s.MIN,G[lf]=s.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(G[cf]=L.MIN_EXT,G[lf]=L.MAX_EXT)}const Ft={[Dv]:s.ZERO,[Pv]:s.ONE,[Nv]:s.SRC_COLOR,[Wm]:s.SRC_ALPHA,[Bv]:s.SRC_ALPHA_SATURATE,[Fv]:s.DST_COLOR,[Ov]:s.DST_ALPHA,[Lv]:s.ONE_MINUS_SRC_COLOR,[Xm]:s.ONE_MINUS_SRC_ALPHA,[kv]:s.ONE_MINUS_DST_COLOR,[Uv]:s.ONE_MINUS_DST_ALPHA};function Ce(L,ue,le,ge,fe,ee,Te,ze){if(L===Ki){p===!0&&(J(s.BLEND),p=!1);return}if(p===!1&&(ye(s.BLEND),p=!0),L!==Cv){if(L!==x||ze!==S){if((v!==Wr||b!==Wr)&&(s.blendEquation(s.FUNC_ADD),v=Wr,b=Wr),ze)switch(L){case Jr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jo:s.blendFunc(s.ONE,s.ONE);break;case of:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case af:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Jr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case of:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case af:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,y=null,E=null,T=null,x=L,S=ze}return}fe=fe||ue,ee=ee||le,Te=Te||ge,(ue!==v||fe!==b)&&(s.blendEquationSeparate(G[ue],G[fe]),v=ue,b=fe),(le!==M||ge!==y||ee!==E||Te!==T)&&(s.blendFuncSeparate(Ft[le],Ft[ge],Ft[ee],Ft[Te]),M=le,y=ge,E=ee,T=Te),x=L,S=!1}function Z(L,ue){L.side===Cn?J(s.CULL_FACE):ye(s.CULL_FACE);let le=L.side===yn;ue&&(le=!le),te(le),L.blending===Jr&&L.transparent===!1?Ce(Ki):Ce(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);const ge=L.stencilWrite;l.setTest(ge),ge&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),pe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ye(s.SAMPLE_ALPHA_TO_COVERAGE):J(s.SAMPLE_ALPHA_TO_COVERAGE)}function te(L){A!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),A=L)}function ke(L){L!==Av?(ye(s.CULL_FACE),L!==N&&(L===rf?s.cullFace(s.BACK):L===wv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):J(s.CULL_FACE),N=L}function Se(L){L!==U&&(F&&s.lineWidth(L),U=L)}function pe(L,ue,le){L?(ye(s.POLYGON_OFFSET_FILL),(z!==ue||C!==le)&&(s.polygonOffset(ue,le),z=ue,C=le)):J(s.POLYGON_OFFSET_FILL)}function Ae(L){L?ye(s.SCISSOR_TEST):J(s.SCISSOR_TEST)}function et(L){L===void 0&&(L=s.TEXTURE0+D-1),V!==L&&(s.activeTexture(L),V=L)}function ft(L,ue,le){le===void 0&&(V===null?le=s.TEXTURE0+D-1:le=V);let ge=j[le];ge===void 0&&(ge={type:void 0,texture:void 0},j[le]=ge),(ge.type!==L||ge.texture!==ue)&&(V!==le&&(s.activeTexture(le),V=le),s.bindTexture(L,ue||oe[L]),ge.type=L,ge.texture=ue)}function I(){const L=j[V];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function w(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Qe(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(L){ie.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),ie.copy(L))}function st(L){ce.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),ce.copy(L))}function Be(L,ue){let le=h.get(ue);le===void 0&&(le=new WeakMap,h.set(ue,le));let ge=le.get(L);ge===void 0&&(ge=s.getUniformBlockIndex(ue,L.name),le.set(L,ge))}function Oe(L,ue){const ge=h.get(ue).get(L);u.get(ue)!==ge&&(s.uniformBlockBinding(ue,ge,L.__bindingPointIndex),u.set(ue,ge))}function Re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},V=null,j={},f={},m=new WeakMap,_=[],g=null,p=!1,x=null,v=null,M=null,y=null,b=null,E=null,T=null,S=!1,A=null,N=null,U=null,z=null,C=null,ie.set(0,0,s.canvas.width,s.canvas.height),ce.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ye,disable:J,bindFramebuffer:We,drawBuffers:yt,useProgram:Ne,setBlending:Ce,setMaterial:Z,setFlipSided:te,setCullFace:ke,setLineWidth:Se,setPolygonOffset:pe,setScissorTest:Ae,activeTexture:et,bindTexture:ft,unbindTexture:I,compressedTexImage2D:w,compressedTexImage3D:q,texImage2D:Le,texImage3D:Qe,updateUBOMapping:Be,uniformBlockBinding:Oe,texStorage2D:he,texStorage3D:me,texSubImage2D:se,texSubImage3D:ne,compressedTexSubImage2D:ae,compressedTexSubImage3D:be,scissor:re,viewport:st,reset:Re}}function Ab(s,e,t,n,i,r,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let _;const g=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,w){return p?new OffscreenCanvas(I,w):ca("canvas")}function v(I,w,q,se){let ne=1;if((I.width>se||I.height>se)&&(ne=se/Math.max(I.width,I.height)),ne<1||w===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const ae=w?Zc:Math.floor,be=ae(ne*I.width),he=ae(ne*I.height);_===void 0&&(_=x(be,he));const me=q?x(be,he):_;return me.width=be,me.height=he,me.getContext("2d").drawImage(I,0,0,be,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+be+"x"+he+")."),me}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function M(I){return uh(I.width)&&uh(I.height)}function y(I){return a?!1:I.wrapS!==zn||I.wrapT!==zn||I.minFilter!==Pt&&I.minFilter!==pn}function b(I,w){return I.generateMipmaps&&w&&I.minFilter!==Pt&&I.minFilter!==pn}function E(I){s.generateMipmap(I)}function T(I,w,q,se,ne=!1){if(a===!1)return w;if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ae=w;if(w===s.RED&&(q===s.FLOAT&&(ae=s.R32F),q===s.HALF_FLOAT&&(ae=s.R16F),q===s.UNSIGNED_BYTE&&(ae=s.R8)),w===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(ae=s.R8UI),q===s.UNSIGNED_SHORT&&(ae=s.R16UI),q===s.UNSIGNED_INT&&(ae=s.R32UI),q===s.BYTE&&(ae=s.R8I),q===s.SHORT&&(ae=s.R16I),q===s.INT&&(ae=s.R32I)),w===s.RG&&(q===s.FLOAT&&(ae=s.RG32F),q===s.HALF_FLOAT&&(ae=s.RG16F),q===s.UNSIGNED_BYTE&&(ae=s.RG8)),w===s.RGBA){const be=ne?jc:Je.getTransfer(se);q===s.FLOAT&&(ae=s.RGBA32F),q===s.HALF_FLOAT&&(ae=s.RGBA16F),q===s.UNSIGNED_BYTE&&(ae=be===ht?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(ae=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(ae=s.RGB5_A1)}return(ae===s.R16F||ae===s.R32F||ae===s.RG16F||ae===s.RG32F||ae===s.RGBA16F||ae===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function S(I,w,q){return b(I,q)===!0||I.isFramebufferTexture&&I.minFilter!==Pt&&I.minFilter!==pn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function A(I){return I===Pt||I===oh||I===kc?s.NEAREST:s.LINEAR}function N(I){const w=I.target;w.removeEventListener("dispose",N),z(w),w.isVideoTexture&&m.delete(w)}function U(I){const w=I.target;w.removeEventListener("dispose",U),D(w)}function z(I){const w=n.get(I);if(w.__webglInit===void 0)return;const q=I.source,se=g.get(q);if(se){const ne=se[w.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&C(I),Object.keys(se).length===0&&g.delete(q)}n.remove(I)}function C(I){const w=n.get(I);s.deleteTexture(w.__webglTexture);const q=I.source,se=g.get(q);delete se[w.__cacheKey],o.memory.textures--}function D(I){const w=I.texture,q=n.get(I),se=n.get(w);if(se.__webglTexture!==void 0&&(s.deleteTexture(se.__webglTexture),o.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(q.__webglFramebuffer[ne]))for(let ae=0;ae<q.__webglFramebuffer[ne].length;ae++)s.deleteFramebuffer(q.__webglFramebuffer[ne][ae]);else s.deleteFramebuffer(q.__webglFramebuffer[ne]);q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer[ne])}else{if(Array.isArray(q.__webglFramebuffer))for(let ne=0;ne<q.__webglFramebuffer.length;ne++)s.deleteFramebuffer(q.__webglFramebuffer[ne]);else s.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&s.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let ne=0;ne<q.__webglColorRenderbuffer.length;ne++)q.__webglColorRenderbuffer[ne]&&s.deleteRenderbuffer(q.__webglColorRenderbuffer[ne]);q.__webglDepthRenderbuffer&&s.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let ne=0,ae=w.length;ne<ae;ne++){const be=n.get(w[ne]);be.__webglTexture&&(s.deleteTexture(be.__webglTexture),o.memory.textures--),n.remove(w[ne])}n.remove(w),n.remove(I)}let F=0;function B(){F=0}function Y(){const I=F;return I>=c&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+c),F+=1,I}function V(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function j(I,w){const q=n.get(I);if(I.isVideoTexture&&et(I),I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){const se=I.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{We(q,I,w);return}}t.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+w)}function O(I,w){const q=n.get(I);if(I.version>0&&q.__version!==I.version){We(q,I,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+w)}function X(I,w){const q=n.get(I);if(I.version>0&&q.__version!==I.version){We(q,I,w);return}t.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+w)}function ie(I,w){const q=n.get(I);if(I.version>0&&q.__version!==I.version){yt(q,I,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+w)}const ce={[vn]:s.REPEAT,[zn]:s.CLAMP_TO_EDGE,[Xc]:s.MIRRORED_REPEAT},k={[Pt]:s.NEAREST,[oh]:s.NEAREST_MIPMAP_NEAREST,[kc]:s.NEAREST_MIPMAP_LINEAR,[pn]:s.LINEAR,[Zm]:s.LINEAR_MIPMAP_NEAREST,[ur]:s.LINEAR_MIPMAP_LINEAR},oe={[d0]:s.NEVER,[y0]:s.ALWAYS,[f0]:s.LESS,[m0]:s.LEQUAL,[p0]:s.EQUAL,[v0]:s.GEQUAL,[g0]:s.GREATER,[_0]:s.NOTEQUAL};function ye(I,w,q){if(q?(s.texParameteri(I,s.TEXTURE_WRAP_S,ce[w.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,ce[w.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,ce[w.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,k[w.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,k[w.minFilter])):(s.texParameteri(I,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(I,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(w.wrapS!==zn||w.wrapT!==zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(I,s.TEXTURE_MAG_FILTER,A(w.magFilter)),s.texParameteri(I,s.TEXTURE_MIN_FILTER,A(w.minFilter)),w.minFilter!==Pt&&w.minFilter!==pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,oe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Pt||w.minFilter!==kc&&w.minFilter!==ur||w.type===vi&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===lo&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(s.texParameterf(I,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function J(I,w){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",N));const se=w.source;let ne=g.get(se);ne===void 0&&(ne={},g.set(se,ne));const ae=V(w);if(ae!==I.__cacheKey){ne[ae]===void 0&&(ne[ae]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ne[ae].usedTimes++;const be=ne[I.__cacheKey];be!==void 0&&(ne[I.__cacheKey].usedTimes--,be.usedTimes===0&&C(w)),I.__cacheKey=ae,I.__webglTexture=ne[ae].texture}return q}function We(I,w,q){let se=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(se=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(se=s.TEXTURE_3D);const ne=J(I,w),ae=w.source;t.bindTexture(se,I.__webglTexture,s.TEXTURE0+q);const be=n.get(ae);if(ae.version!==be.__version||ne===!0){t.activeTexture(s.TEXTURE0+q);const he=Je.getPrimaries(Je.workingColorSpace),me=w.colorSpace===Gn?null:Je.getPrimaries(w.colorSpace),Le=w.colorSpace===Gn||he===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Qe=y(w)&&M(w.image)===!1;let re=v(w.image,Qe,!1,u);re=ft(w,re);const st=M(re)||a,Be=r.convert(w.format,w.colorSpace);let Oe=r.convert(w.type),Re=T(w.internalFormat,Be,Oe,w.colorSpace,w.isVideoTexture);ye(se,w,st);let L;const ue=w.mipmaps,le=a&&w.isVideoTexture!==!0,ge=be.__version===void 0||ne===!0,fe=S(w,re,st);if(w.isDepthTexture)Re=s.DEPTH_COMPONENT,a?w.type===vi?Re=s.DEPTH_COMPONENT32F:w.type===ys?Re=s.DEPTH_COMPONENT24:w.type===nr?Re=s.DEPTH24_STENCIL8:Re=s.DEPTH_COMPONENT16:w.type===vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===ir&&Re===s.DEPTH_COMPONENT&&w.type!==kh&&w.type!==ys&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=ys,Oe=r.convert(w.type)),w.format===uo&&Re===s.DEPTH_COMPONENT&&(Re=s.DEPTH_STENCIL,w.type!==nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=nr,Oe=r.convert(w.type))),ge&&(le?t.texStorage2D(s.TEXTURE_2D,1,Re,re.width,re.height):t.texImage2D(s.TEXTURE_2D,0,Re,re.width,re.height,0,Be,Oe,null));else if(w.isDataTexture)if(ue.length>0&&st){le&&ge&&t.texStorage2D(s.TEXTURE_2D,fe,Re,ue[0].width,ue[0].height);for(let ee=0,Te=ue.length;ee<Te;ee++)L=ue[ee],le?t.texSubImage2D(s.TEXTURE_2D,ee,0,0,L.width,L.height,Be,Oe,L.data):t.texImage2D(s.TEXTURE_2D,ee,Re,L.width,L.height,0,Be,Oe,L.data);w.generateMipmaps=!1}else le?(ge&&t.texStorage2D(s.TEXTURE_2D,fe,Re,re.width,re.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,re.width,re.height,Be,Oe,re.data)):t.texImage2D(s.TEXTURE_2D,0,Re,re.width,re.height,0,Be,Oe,re.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){le&&ge&&t.texStorage3D(s.TEXTURE_2D_ARRAY,fe,Re,ue[0].width,ue[0].height,re.depth);for(let ee=0,Te=ue.length;ee<Te;ee++)L=ue[ee],w.format!==Rn?Be!==null?le?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,L.width,L.height,re.depth,Be,L.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,Re,L.width,L.height,re.depth,0,L.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,L.width,L.height,re.depth,Be,Oe,L.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,Re,L.width,L.height,re.depth,0,Be,Oe,L.data)}else{le&&ge&&t.texStorage2D(s.TEXTURE_2D,fe,Re,ue[0].width,ue[0].height);for(let ee=0,Te=ue.length;ee<Te;ee++)L=ue[ee],w.format!==Rn?Be!==null?le?t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,L.width,L.height,Be,L.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,Re,L.width,L.height,0,L.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?t.texSubImage2D(s.TEXTURE_2D,ee,0,0,L.width,L.height,Be,Oe,L.data):t.texImage2D(s.TEXTURE_2D,ee,Re,L.width,L.height,0,Be,Oe,L.data)}else if(w.isDataArrayTexture)le?(ge&&t.texStorage3D(s.TEXTURE_2D_ARRAY,fe,Re,re.width,re.height,re.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Be,Oe,re.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,re.width,re.height,re.depth,0,Be,Oe,re.data);else if(w.isData3DTexture)le?(ge&&t.texStorage3D(s.TEXTURE_3D,fe,Re,re.width,re.height,re.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Be,Oe,re.data)):t.texImage3D(s.TEXTURE_3D,0,Re,re.width,re.height,re.depth,0,Be,Oe,re.data);else if(w.isFramebufferTexture){if(ge)if(le)t.texStorage2D(s.TEXTURE_2D,fe,Re,re.width,re.height);else{let ee=re.width,Te=re.height;for(let ze=0;ze<fe;ze++)t.texImage2D(s.TEXTURE_2D,ze,Re,ee,Te,0,Be,Oe,null),ee>>=1,Te>>=1}}else if(ue.length>0&&st){le&&ge&&t.texStorage2D(s.TEXTURE_2D,fe,Re,ue[0].width,ue[0].height);for(let ee=0,Te=ue.length;ee<Te;ee++)L=ue[ee],le?t.texSubImage2D(s.TEXTURE_2D,ee,0,0,Be,Oe,L):t.texImage2D(s.TEXTURE_2D,ee,Re,Be,Oe,L);w.generateMipmaps=!1}else le?(ge&&t.texStorage2D(s.TEXTURE_2D,fe,Re,re.width,re.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Be,Oe,re)):t.texImage2D(s.TEXTURE_2D,0,Re,Be,Oe,re);b(w,st)&&E(se),be.__version=ae.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function yt(I,w,q){if(w.image.length!==6)return;const se=J(I,w),ne=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+q);const ae=n.get(ne);if(ne.version!==ae.__version||se===!0){t.activeTexture(s.TEXTURE0+q);const be=Je.getPrimaries(Je.workingColorSpace),he=w.colorSpace===Gn?null:Je.getPrimaries(w.colorSpace),me=w.colorSpace===Gn||be===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Le=w.isCompressedTexture||w.image[0].isCompressedTexture,Qe=w.image[0]&&w.image[0].isDataTexture,re=[];for(let ee=0;ee<6;ee++)!Le&&!Qe?re[ee]=v(w.image[ee],!1,!0,l):re[ee]=Qe?w.image[ee].image:w.image[ee],re[ee]=ft(w,re[ee]);const st=re[0],Be=M(st)||a,Oe=r.convert(w.format,w.colorSpace),Re=r.convert(w.type),L=T(w.internalFormat,Oe,Re,w.colorSpace),ue=a&&w.isVideoTexture!==!0,le=ae.__version===void 0||se===!0;let ge=S(w,st,Be);ye(s.TEXTURE_CUBE_MAP,w,Be);let fe;if(Le){ue&&le&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,L,st.width,st.height);for(let ee=0;ee<6;ee++){fe=re[ee].mipmaps;for(let Te=0;Te<fe.length;Te++){const ze=fe[Te];w.format!==Rn?Oe!==null?ue?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,ze.width,ze.height,Oe,ze.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,L,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,ze.width,ze.height,Oe,Re,ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,L,ze.width,ze.height,0,Oe,Re,ze.data)}}}else{fe=w.mipmaps,ue&&le&&(fe.length>0&&ge++,t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,L,re[0].width,re[0].height));for(let ee=0;ee<6;ee++)if(Qe){ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,re[ee].width,re[ee].height,Oe,Re,re[ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,L,re[ee].width,re[ee].height,0,Oe,Re,re[ee].data);for(let Te=0;Te<fe.length;Te++){const nn=fe[Te].image[ee].image;ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,nn.width,nn.height,Oe,Re,nn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,L,nn.width,nn.height,0,Oe,Re,nn.data)}}else{ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Oe,Re,re[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,L,Oe,Re,re[ee]);for(let Te=0;Te<fe.length;Te++){const ze=fe[Te];ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,Oe,Re,ze.image[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,L,Oe,Re,ze.image[ee])}}}b(w,Be)&&E(s.TEXTURE_CUBE_MAP),ae.__version=ne.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Ne(I,w,q,se,ne,ae){const be=r.convert(q.format,q.colorSpace),he=r.convert(q.type),me=T(q.internalFormat,be,he,q.colorSpace);if(!n.get(w).__hasExternalTextures){const Qe=Math.max(1,w.width>>ae),re=Math.max(1,w.height>>ae);ne===s.TEXTURE_3D||ne===s.TEXTURE_2D_ARRAY?t.texImage3D(ne,ae,me,Qe,re,w.depth,0,be,he,null):t.texImage2D(ne,ae,me,Qe,re,0,be,he,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),Ae(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,se,ne,n.get(q).__webglTexture,0,pe(w)):(ne===s.TEXTURE_2D||ne>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,se,ne,n.get(q).__webglTexture,ae),t.bindFramebuffer(s.FRAMEBUFFER,null)}function G(I,w,q){if(s.bindRenderbuffer(s.RENDERBUFFER,I),w.depthBuffer&&!w.stencilBuffer){let se=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(q||Ae(w)){const ne=w.depthTexture;ne&&ne.isDepthTexture&&(ne.type===vi?se=s.DEPTH_COMPONENT32F:ne.type===ys&&(se=s.DEPTH_COMPONENT24));const ae=pe(w);Ae(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ae,se,w.width,w.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ae,se,w.width,w.height)}else s.renderbufferStorage(s.RENDERBUFFER,se,w.width,w.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,I)}else if(w.depthBuffer&&w.stencilBuffer){const se=pe(w);q&&Ae(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,se,s.DEPTH24_STENCIL8,w.width,w.height):Ae(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se,s.DEPTH24_STENCIL8,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,I)}else{const se=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ne=0;ne<se.length;ne++){const ae=se[ne],be=r.convert(ae.format,ae.colorSpace),he=r.convert(ae.type),me=T(ae.internalFormat,be,he,ae.colorSpace),Le=pe(w);q&&Ae(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,me,w.width,w.height):Ae(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Le,me,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,me,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ft(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),j(w.depthTexture,0);const se=n.get(w.depthTexture).__webglTexture,ne=pe(w);if(w.depthTexture.format===ir)Ae(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,se,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,se,0);else if(w.depthTexture.format===uo)Ae(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,se,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Ce(I){const w=n.get(I),q=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Ft(w.__webglFramebuffer,I)}else if(q){w.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[se]),w.__webglDepthbuffer[se]=s.createRenderbuffer(),G(w.__webglDepthbuffer[se],I,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),G(w.__webglDepthbuffer,I,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Z(I,w,q){const se=n.get(I);w!==void 0&&Ne(se.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&Ce(I)}function te(I){const w=I.texture,q=n.get(I),se=n.get(w);I.addEventListener("dispose",U),I.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=s.createTexture()),se.__version=w.version,o.memory.textures++);const ne=I.isWebGLCubeRenderTarget===!0,ae=I.isWebGLMultipleRenderTargets===!0,be=M(I)||a;if(ne){q.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer[he]=[];for(let me=0;me<w.mipmaps.length;me++)q.__webglFramebuffer[he][me]=s.createFramebuffer()}else q.__webglFramebuffer[he]=s.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer=[];for(let he=0;he<w.mipmaps.length;he++)q.__webglFramebuffer[he]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(ae)if(i.drawBuffers){const he=I.texture;for(let me=0,Le=he.length;me<Le;me++){const Qe=n.get(he[me]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&I.samples>0&&Ae(I)===!1){const he=ae?w:[w];q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let me=0;me<he.length;me++){const Le=he[me];q.__webglColorRenderbuffer[me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[me]);const Qe=r.convert(Le.format,Le.colorSpace),re=r.convert(Le.type),st=T(Le.internalFormat,Qe,re,Le.colorSpace,I.isXRRenderTarget===!0),Be=pe(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Be,st,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,q.__webglColorRenderbuffer[me])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),G(q.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ne){t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture),ye(s.TEXTURE_CUBE_MAP,w,be);for(let he=0;he<6;he++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let me=0;me<w.mipmaps.length;me++)Ne(q.__webglFramebuffer[he][me],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,me);else Ne(q.__webglFramebuffer[he],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);b(w,be)&&E(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){const he=I.texture;for(let me=0,Le=he.length;me<Le;me++){const Qe=he[me],re=n.get(Qe);t.bindTexture(s.TEXTURE_2D,re.__webglTexture),ye(s.TEXTURE_2D,Qe,be),Ne(q.__webglFramebuffer,I,Qe,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,0),b(Qe,be)&&E(s.TEXTURE_2D)}t.unbindTexture()}else{let he=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(a?he=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,se.__webglTexture),ye(he,w,be),a&&w.mipmaps&&w.mipmaps.length>0)for(let me=0;me<w.mipmaps.length;me++)Ne(q.__webglFramebuffer[me],I,w,s.COLOR_ATTACHMENT0,he,me);else Ne(q.__webglFramebuffer,I,w,s.COLOR_ATTACHMENT0,he,0);b(w,be)&&E(he),t.unbindTexture()}I.depthBuffer&&Ce(I)}function ke(I){const w=M(I)||a,q=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let se=0,ne=q.length;se<ne;se++){const ae=q[se];if(b(ae,w)){const be=I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,he=n.get(ae).__webglTexture;t.bindTexture(be,he),E(be),t.unbindTexture()}}}function Se(I){if(a&&I.samples>0&&Ae(I)===!1){const w=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],q=I.width,se=I.height;let ne=s.COLOR_BUFFER_BIT;const ae=[],be=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=n.get(I),me=I.isWebGLMultipleRenderTargets===!0;if(me)for(let Le=0;Le<w.length;Le++)t.bindFramebuffer(s.FRAMEBUFFER,he.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,he.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Le=0;Le<w.length;Le++){ae.push(s.COLOR_ATTACHMENT0+Le),I.depthBuffer&&ae.push(be);const Qe=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Qe===!1&&(I.depthBuffer&&(ne|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&(ne|=s.STENCIL_BUFFER_BIT)),me&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,he.__webglColorRenderbuffer[Le]),Qe===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[be]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[be])),me){const re=n.get(w[Le]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,re,0)}s.blitFramebuffer(0,0,q,se,0,0,q,se,ne,s.NEAREST),f&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ae)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),me)for(let Le=0;Le<w.length;Le++){t.bindFramebuffer(s.FRAMEBUFFER,he.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,he.__webglColorRenderbuffer[Le]);const Qe=n.get(w[Le]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,he.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,Qe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function pe(I){return Math.min(h,I.samples)}function Ae(I){const w=n.get(I);return a&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function et(I){const w=o.render.frame;m.get(I)!==w&&(m.set(I,w),I.update())}function ft(I,w){const q=I.colorSpace,se=I.format,ne=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===lh||q!==Yt&&q!==Gn&&(Je.getTransfer(q)===ht?a===!1?e.has("EXT_sRGB")===!0&&se===Rn?(I.format=lh,I.minFilter=pn,I.generateMipmaps=!1):w=ug.sRGBToLinear(w):(se!==Rn||ne!==Ss)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),w}this.allocateTextureUnit=Y,this.resetTextureUnits=B,this.setTexture2D=j,this.setTexture2DArray=O,this.setTexture3D=X,this.setTextureCube=ie,this.rebindTextures=Z,this.setupRenderTarget=te,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=Ae}function wb(s,e,t){const n=t.isWebGL2;function i(r,o=Gn){let a;const c=Je.getTransfer(o);if(r===Ss)return s.UNSIGNED_BYTE;if(r===Jm)return s.UNSIGNED_SHORT_4_4_4_4;if(r===eg)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Kv)return s.BYTE;if(r===Zv)return s.SHORT;if(r===kh)return s.UNSIGNED_SHORT;if(r===Qm)return s.INT;if(r===ys)return s.UNSIGNED_INT;if(r===vi)return s.FLOAT;if(r===lo)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Qv)return s.ALPHA;if(r===Rn)return s.RGBA;if(r===Jv)return s.LUMINANCE;if(r===e0)return s.LUMINANCE_ALPHA;if(r===ir)return s.DEPTH_COMPONENT;if(r===uo)return s.DEPTH_STENCIL;if(r===lh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===t0)return s.RED;if(r===tg)return s.RED_INTEGER;if(r===n0)return s.RG;if(r===ng)return s.RG_INTEGER;if(r===ig)return s.RGBA_INTEGER;if(r===iu||r===su||r===ru||r===ou)if(c===ht)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===iu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===su)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ru)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ou)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===iu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===su)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ru)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ou)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===uf||r===hf||r===df||r===ff)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===uf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===df)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ff)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===i0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===pf||r===mf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===pf)return c===ht?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===mf)return c===ht?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===gf||r===_f||r===vf||r===yf||r===xf||r===Sf||r===Mf||r===bf||r===Tf||r===Ef||r===Af||r===wf||r===Cf||r===Rf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===gf)return c===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_f)return c===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vf)return c===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===yf)return c===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xf)return c===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Sf)return c===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Mf)return c===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===bf)return c===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Tf)return c===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ef)return c===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Af)return c===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wf)return c===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Cf)return c===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Rf)return c===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===au||r===If||r===Df)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===au)return c===ht?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===If)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Df)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===s0||r===Pf||r===Nf||r===Lf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===au)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Pf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Nf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===nr?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Cb extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ks extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rb={type:"move"};class Iu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rb)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ks;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ib extends jt{constructor(e,t,n,i,r,o,a,c,l,u){if(u=u!==void 0?u:ir,u!==ir&&u!==uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ir&&(n=ys),n===void 0&&u===uo&&(n=nr),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Pt,this.minFilter=c!==void 0?c:Pt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Db extends ss{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,m=null;const _=t.getContextAttributes();let g=null,p=null;const x=[],v=[],M=new cn;M.layers.enable(1),M.viewport=new lt;const y=new cn;y.layers.enable(2),y.viewport=new lt;const b=[M,y],E=new Cb;E.layers.enable(1),E.layers.enable(2);let T=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let X=x[O];return X===void 0&&(X=new Iu,x[O]=X),X.getTargetRaySpace()},this.getControllerGrip=function(O){let X=x[O];return X===void 0&&(X=new Iu,x[O]=X),X.getGripSpace()},this.getHand=function(O){let X=x[O];return X===void 0&&(X=new Iu,x[O]=X),X.getHandSpace()};function A(O){const X=v.indexOf(O.inputSource);if(X===-1)return;const ie=x[X];ie!==void 0&&(ie.update(O.inputSource,O.frame,l||o),ie.dispatchEvent({type:O.type,data:O.inputSource}))}function N(){i.removeEventListener("select",A),i.removeEventListener("selectstart",A),i.removeEventListener("selectend",A),i.removeEventListener("squeeze",A),i.removeEventListener("squeezestart",A),i.removeEventListener("squeezeend",A),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",U);for(let O=0;O<x.length;O++){const X=v[O];X!==null&&(v[O]=null,x[O].disconnect(X))}T=null,S=null,e.setRenderTarget(g),f=null,d=null,h=null,i=null,p=null,j.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",A),i.addEventListener("selectstart",A),i.addEventListener("selectend",A),i.addEventListener("squeeze",A),i.addEventListener("squeezestart",A),i.addEventListener("squeezeend",A),i.addEventListener("end",N),i.addEventListener("inputsourceschange",U),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,X),i.updateRenderState({baseLayer:f}),p=new bs(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:Ss,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let X=null,ie=null,ce=null;_.depth&&(ce=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=_.stencil?uo:ir,ie=_.stencil?nr:ys);const k={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(k),i.updateRenderState({layers:[d]}),p=new bs(d.textureWidth,d.textureHeight,{format:Rn,type:Ss,depthTexture:new Ib(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const oe=e.properties.get(p);oe.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),j.setContext(i),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function U(O){for(let X=0;X<O.removed.length;X++){const ie=O.removed[X],ce=v.indexOf(ie);ce>=0&&(v[ce]=null,x[ce].disconnect(ie))}for(let X=0;X<O.added.length;X++){const ie=O.added[X];let ce=v.indexOf(ie);if(ce===-1){for(let oe=0;oe<x.length;oe++)if(oe>=v.length){v.push(ie),ce=oe;break}else if(v[oe]===null){v[oe]=ie,ce=oe;break}if(ce===-1)break}const k=x[ce];k&&k.connect(ie)}}const z=new P,C=new P;function D(O,X,ie){z.setFromMatrixPosition(X.matrixWorld),C.setFromMatrixPosition(ie.matrixWorld);const ce=z.distanceTo(C),k=X.projectionMatrix.elements,oe=ie.projectionMatrix.elements,ye=k[14]/(k[10]-1),J=k[14]/(k[10]+1),We=(k[9]+1)/k[5],yt=(k[9]-1)/k[5],Ne=(k[8]-1)/k[0],G=(oe[8]+1)/oe[0],Ft=ye*Ne,Ce=ye*G,Z=ce/(-Ne+G),te=Z*-Ne;X.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(te),O.translateZ(Z),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const ke=ye+Z,Se=J+Z,pe=Ft-te,Ae=Ce+(ce-te),et=We*J/Se*ke,ft=yt*J/Se*ke;O.projectionMatrix.makePerspective(pe,Ae,et,ft,ke,Se),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function F(O,X){X===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(X.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;E.near=y.near=M.near=O.near,E.far=y.far=M.far=O.far,(T!==E.near||S!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,S=E.far);const X=O.parent,ie=E.cameras;F(E,X);for(let ce=0;ce<ie.length;ce++)F(ie[ce],X);ie.length===2?D(E,M,y):E.projectionMatrix.copy(M.projectionMatrix),B(O,E,X)};function B(O,X,ie){ie===null?O.matrix.copy(X.matrixWorld):(O.matrix.copy(ie.matrixWorld),O.matrix.invert(),O.matrix.multiply(X.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(X.projectionMatrix),O.projectionMatrixInverse.copy(X.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=fo*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(O){c=O,d!==null&&(d.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)};let Y=null;function V(O,X){if(u=X.getViewerPose(l||o),m=X,u!==null){const ie=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ce=!1;ie.length!==E.cameras.length&&(E.cameras.length=0,ce=!0);for(let k=0;k<ie.length;k++){const oe=ie[k];let ye=null;if(f!==null)ye=f.getViewport(oe);else{const We=h.getViewSubImage(d,oe);ye=We.viewport,k===0&&(e.setRenderTargetTextures(p,We.colorTexture,d.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(p))}let J=b[k];J===void 0&&(J=new cn,J.layers.enable(k),J.viewport=new lt,b[k]=J),J.matrix.fromArray(oe.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(oe.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(ye.x,ye.y,ye.width,ye.height),k===0&&(E.matrix.copy(J.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ce===!0&&E.cameras.push(J)}}for(let ie=0;ie<x.length;ie++){const ce=v[ie],k=x[ie];ce!==null&&k!==void 0&&k.update(ce,X,l||o)}Y&&Y(O,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),m=null}const j=new yg;j.setAnimationLoop(V),this.setAnimationLoop=function(O){Y=O},this.dispose=function(){}}}function Pb(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,gg(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,v,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,M)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,x,v):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===yn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===yn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,x,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=v*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===yn&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Nb(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,v){const M=v.program;n.uniformBlockBinding(x,M)}function l(x,v){let M=i[x.id];M===void 0&&(m(x),M=u(x),i[x.id]=M,x.addEventListener("dispose",g));const y=v.program;n.updateUBOMapping(x,y);const b=e.render.frame;r[x.id]!==b&&(d(x),r[x.id]=b)}function u(x){const v=h();x.__bindingPointIndex=v;const M=s.createBuffer(),y=x.__size,b=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,y,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,M),M}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=i[x.id],M=x.uniforms,y=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let b=0,E=M.length;b<E;b++){const T=M[b];if(f(T,b,y)===!0){const S=T.__offset,A=Array.isArray(T.value)?T.value:[T.value];let N=0;for(let U=0;U<A.length;U++){const z=A[U],C=_(z);typeof z=="number"?(T.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,S+N,T.__data)):z.isMatrix3?(T.__data[0]=z.elements[0],T.__data[1]=z.elements[1],T.__data[2]=z.elements[2],T.__data[3]=z.elements[0],T.__data[4]=z.elements[3],T.__data[5]=z.elements[4],T.__data[6]=z.elements[5],T.__data[7]=z.elements[0],T.__data[8]=z.elements[6],T.__data[9]=z.elements[7],T.__data[10]=z.elements[8],T.__data[11]=z.elements[0]):(z.toArray(T.__data,N),N+=C.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,S,T.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,v,M){const y=x.value;if(M[v]===void 0){if(typeof y=="number")M[v]=y;else{const b=Array.isArray(y)?y:[y],E=[];for(let T=0;T<b.length;T++)E.push(b[T].clone());M[v]=E}return!0}else if(typeof y=="number"){if(M[v]!==y)return M[v]=y,!0}else{const b=Array.isArray(M[v])?M[v]:[M[v]],E=Array.isArray(y)?y:[y];for(let T=0;T<b.length;T++){const S=b[T];if(S.equals(E[T])===!1)return S.copy(E[T]),!0}}return!1}function m(x){const v=x.uniforms;let M=0;const y=16;let b=0;for(let E=0,T=v.length;E<T;E++){const S=v[E],A={boundary:0,storage:0},N=Array.isArray(S.value)?S.value:[S.value];for(let U=0,z=N.length;U<z;U++){const C=N[U],D=_(C);A.boundary+=D.boundary,A.storage+=D.storage}if(S.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=M,E>0){b=M%y;const U=y-b;b!==0&&U-A.boundary<0&&(M+=y-b,S.__offset=M)}M+=A.storage}return b=M%y,b>0&&(M+=y-b),x.__size=M,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class Ul{constructor(e={}){const{canvas:t=N0(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),m=new Int32Array(4);let _=null,g=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vt,this._useLegacyLights=!1,this.toneMapping=xs,this.toneMappingExposure=1;const v=this;let M=!1,y=0,b=0,E=null,T=-1,S=null;const A=new lt,N=new lt;let U=null;const z=new Me(0);let C=0,D=t.width,F=t.height,B=1,Y=null,V=null;const j=new lt(0,0,D,F),O=new lt(0,0,D,F);let X=!1;const ie=new Xh;let ce=!1,k=!1,oe=null;const ye=new Pe,J=new _e,We=new P,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ne(){return E===null?B:1}let G=n;function Ft(R,H){for(let $=0;$<R.length;$++){const W=R[$],K=t.getContext(W,H);if(K!==null)return K}return null}try{const R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uh}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",ge,!1),G===null){const H=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&H.shift(),G=Ft(H,R),G===null)throw Ft(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ce,Z,te,ke,Se,pe,Ae,et,ft,I,w,q,se,ne,ae,be,he,me,Le,Qe,re,st,Be,Oe;function Re(){Ce=new WS(G),Z=new kS(G,Ce,e),Ce.init(Z),st=new wb(G,Ce,Z),te=new Eb(G,Ce,Z),ke=new jS(G),Se=new hb,pe=new Ab(G,Ce,te,Se,Z,st,ke),Ae=new VS(v),et=new HS(v),ft=new iy(G,Z),Be=new US(G,Ce,ft,Z),I=new XS(G,ft,ke,Be),w=new ZS(G,I,ft,ke),Le=new KS(G,Z,pe),be=new BS(Se),q=new ub(v,Ae,et,Ce,Z,Be,be),se=new Pb(v,Se),ne=new fb,ae=new yb(Ce,Z),me=new OS(v,Ae,et,te,w,d,c),he=new Tb(v,w,Z),Oe=new Nb(G,ke,Z,te),Qe=new FS(G,Ce,ke,Z),re=new qS(G,Ce,ke,Z),ke.programs=q.programs,v.capabilities=Z,v.extensions=Ce,v.properties=Se,v.renderLists=ne,v.shadowMap=he,v.state=te,v.info=ke}Re();const L=new Db(v,G);this.xr=L,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=Ce.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ce.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(R){R!==void 0&&(B=R,this.setSize(D,F,!1))},this.getSize=function(R){return R.set(D,F)},this.setSize=function(R,H,$=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=R,F=H,t.width=Math.floor(R*B),t.height=Math.floor(H*B),$===!0&&(t.style.width=R+"px",t.style.height=H+"px"),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(D*B,F*B).floor()},this.setDrawingBufferSize=function(R,H,$){D=R,F=H,B=$,t.width=Math.floor(R*$),t.height=Math.floor(H*$),this.setViewport(0,0,R,H)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(j)},this.setViewport=function(R,H,$,W){R.isVector4?j.set(R.x,R.y,R.z,R.w):j.set(R,H,$,W),te.viewport(A.copy(j).multiplyScalar(B).floor())},this.getScissor=function(R){return R.copy(O)},this.setScissor=function(R,H,$,W){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,H,$,W),te.scissor(N.copy(O).multiplyScalar(B).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(R){te.setScissorTest(X=R)},this.setOpaqueSort=function(R){Y=R},this.setTransparentSort=function(R){V=R},this.getClearColor=function(R){return R.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(R=!0,H=!0,$=!0){let W=0;if(R){let K=!1;if(E!==null){const ve=E.texture.format;K=ve===ig||ve===ng||ve===tg}if(K){const ve=E.texture.type,we=ve===Ss||ve===ys||ve===kh||ve===nr||ve===Jm||ve===eg,Ue=me.getClearColor(),Fe=me.getClearAlpha(),qe=Ue.r,De=Ue.g,Ge=Ue.b;we?(f[0]=qe,f[1]=De,f[2]=Ge,f[3]=Fe,G.clearBufferuiv(G.COLOR,0,f)):(m[0]=qe,m[1]=De,m[2]=Ge,m[3]=Fe,G.clearBufferiv(G.COLOR,0,m))}else W|=G.COLOR_BUFFER_BIT}H&&(W|=G.DEPTH_BUFFER_BIT),$&&(W|=G.STENCIL_BUFFER_BIT),G.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),ne.dispose(),ae.dispose(),Se.dispose(),Ae.dispose(),et.dispose(),w.dispose(),Be.dispose(),Oe.dispose(),q.dispose(),L.dispose(),L.removeEventListener("sessionstart",pt),L.removeEventListener("sessionend",di),oe&&(oe.dispose(),oe=null),sn.stop()};function ue(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const R=ke.autoReset,H=he.enabled,$=he.autoUpdate,W=he.needsUpdate,K=he.type;Re(),ke.autoReset=R,he.enabled=H,he.autoUpdate=$,he.needsUpdate=W,he.type=K}function ge(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function fe(R){const H=R.target;H.removeEventListener("dispose",fe),ee(H)}function ee(R){Te(R),Se.remove(R)}function Te(R){const H=Se.get(R).programs;H!==void 0&&(H.forEach(function($){q.releaseProgram($)}),R.isShaderMaterial&&q.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,$,W,K,ve){H===null&&(H=yt);const we=K.isMesh&&K.matrixWorld.determinant()<0,Ue=Mv(R,H,$,W,K);te.setMaterial(W,we);let Fe=$.index,qe=1;if(W.wireframe===!0){if(Fe=I.getWireframeAttribute($),Fe===void 0)return;qe=2}const De=$.drawRange,Ge=$.attributes.position;let xt=De.start*qe,Mt=(De.start+De.count)*qe;ve!==null&&(xt=Math.max(xt,ve.start*qe),Mt=Math.min(Mt,(ve.start+ve.count)*qe)),Fe!==null?(xt=Math.max(xt,0),Mt=Math.min(Mt,Fe.count)):Ge!=null&&(xt=Math.max(xt,0),Mt=Math.min(Mt,Ge.count));const Pn=Mt-xt;if(Pn<0||Pn===1/0)return;Be.setup(K,W,Ue,$,Fe);let Di,At=Qe;if(Fe!==null&&(Di=ft.get(Fe),At=re,At.setIndex(Di)),K.isMesh)W.wireframe===!0?(te.setLineWidth(W.wireframeLinewidth*Ne()),At.setMode(G.LINES)):At.setMode(G.TRIANGLES);else if(K.isLine){let je=W.linewidth;je===void 0&&(je=1),te.setLineWidth(je*Ne()),K.isLineSegments?At.setMode(G.LINES):K.isLineLoop?At.setMode(G.LINE_LOOP):At.setMode(G.LINE_STRIP)}else K.isPoints?At.setMode(G.POINTS):K.isSprite&&At.setMode(G.TRIANGLES);if(K.isInstancedMesh)At.renderInstances(xt,Pn,K.count);else if($.isInstancedBufferGeometry){const je=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Jl=Math.min($.instanceCount,je);At.renderInstances(xt,Pn,Jl)}else At.render(xt,Pn)},this.compile=function(R,H){function $(W,K,ve){W.transparent===!0&&W.side===Cn&&W.forceSinglePass===!1?(W.side=yn,W.needsUpdate=!0,ja(W,K,ve),W.side=es,W.needsUpdate=!0,ja(W,K,ve),W.side=Cn):ja(W,K,ve)}g=ae.get(R),g.init(),x.push(g),R.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights(v._useLegacyLights),R.traverse(function(W){const K=W.material;if(K)if(Array.isArray(K))for(let ve=0;ve<K.length;ve++){const we=K[ve];$(we,R,W)}else $(K,R,W)}),x.pop(),g=null};let ze=null;function nn(R){ze&&ze(R)}function pt(){sn.stop()}function di(){sn.start()}const sn=new yg;sn.setAnimationLoop(nn),typeof self<"u"&&sn.setContext(self),this.setAnimationLoop=function(R){ze=R,L.setAnimationLoop(R),R===null?sn.stop():sn.start()},L.addEventListener("sessionstart",pt),L.addEventListener("sessionend",di),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(H),H=L.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,H,E),g=ae.get(R,x.length),g.init(),x.push(g),ye.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ie.setFromProjectionMatrix(ye),k=this.localClippingEnabled,ce=be.init(this.clippingPlanes,k),_=ne.get(R,p.length),_.init(),p.push(_),Qd(R,H,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(Y,V),this.info.render.frame++,ce===!0&&be.beginShadows();const $=g.state.shadowsArray;if(he.render($,R,H),ce===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),me.render(_,R),g.setupLights(v._useLegacyLights),H.isArrayCamera){const W=H.cameras;for(let K=0,ve=W.length;K<ve;K++){const we=W[K];Jd(_,R,we,we.viewport)}}else Jd(_,R,H);E!==null&&(pe.updateMultisampleRenderTarget(E),pe.updateRenderTargetMipmap(E)),R.isScene===!0&&R.onAfterRender(v,R,H),Be.resetDefaultState(),T=-1,S=null,x.pop(),x.length>0?g=x[x.length-1]:g=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Qd(R,H,$,W){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)$=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ie.intersectsSprite(R)){W&&We.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ye);const we=w.update(R),Ue=R.material;Ue.visible&&_.push(R,we,Ue,$,We.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ie.intersectsObject(R))){const we=w.update(R),Ue=R.material;if(W&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),We.copy(R.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),We.copy(we.boundingSphere.center)),We.applyMatrix4(R.matrixWorld).applyMatrix4(ye)),Array.isArray(Ue)){const Fe=we.groups;for(let qe=0,De=Fe.length;qe<De;qe++){const Ge=Fe[qe],xt=Ue[Ge.materialIndex];xt&&xt.visible&&_.push(R,we,xt,$,We.z,Ge)}}else Ue.visible&&_.push(R,we,Ue,$,We.z,null)}}const ve=R.children;for(let we=0,Ue=ve.length;we<Ue;we++)Qd(ve[we],H,$,W)}function Jd(R,H,$,W){const K=R.opaque,ve=R.transmissive,we=R.transparent;g.setupLightsView($),ce===!0&&be.setGlobalState(v.clippingPlanes,$),ve.length>0&&Sv(K,ve,H,$),W&&te.viewport(A.copy(W)),K.length>0&&qa(K,H,$),ve.length>0&&qa(ve,H,$),we.length>0&&qa(we,H,$),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function Sv(R,H,$,W){const K=Z.isWebGL2;oe===null&&(oe=new bs(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?lo:Ss,minFilter:ur,samples:K?4:0})),v.getDrawingBufferSize(J),K?oe.setSize(J.x,J.y):oe.setSize(Zc(J.x),Zc(J.y));const ve=v.getRenderTarget();v.setRenderTarget(oe),v.getClearColor(z),C=v.getClearAlpha(),C<1&&v.setClearColor(16777215,.5),v.clear();const we=v.toneMapping;v.toneMapping=xs,qa(R,$,W),pe.updateMultisampleRenderTarget(oe),pe.updateRenderTargetMipmap(oe);let Ue=!1;for(let Fe=0,qe=H.length;Fe<qe;Fe++){const De=H[Fe],Ge=De.object,xt=De.geometry,Mt=De.material,Pn=De.group;if(Mt.side===Cn&&Ge.layers.test(W.layers)){const Di=Mt.side;Mt.side=yn,Mt.needsUpdate=!0,ef(Ge,$,W,xt,Mt,Pn),Mt.side=Di,Mt.needsUpdate=!0,Ue=!0}}Ue===!0&&(pe.updateMultisampleRenderTarget(oe),pe.updateRenderTargetMipmap(oe)),v.setRenderTarget(ve),v.setClearColor(z,C),v.toneMapping=we}function qa(R,H,$){const W=H.isScene===!0?H.overrideMaterial:null;for(let K=0,ve=R.length;K<ve;K++){const we=R[K],Ue=we.object,Fe=we.geometry,qe=W===null?we.material:W,De=we.group;Ue.layers.test($.layers)&&ef(Ue,H,$,Fe,qe,De)}}function ef(R,H,$,W,K,ve){R.onBeforeRender(v,H,$,W,K,ve),R.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(v,H,$,W,R,ve),K.transparent===!0&&K.side===Cn&&K.forceSinglePass===!1?(K.side=yn,K.needsUpdate=!0,v.renderBufferDirect($,H,W,K,R,ve),K.side=es,K.needsUpdate=!0,v.renderBufferDirect($,H,W,K,R,ve),K.side=Cn):v.renderBufferDirect($,H,W,K,R,ve),R.onAfterRender(v,H,$,W,K,ve)}function ja(R,H,$){H.isScene!==!0&&(H=yt);const W=Se.get(R),K=g.state.lights,ve=g.state.shadowsArray,we=K.state.version,Ue=q.getParameters(R,K.state,ve,H,$),Fe=q.getProgramCacheKey(Ue);let qe=W.programs;W.environment=R.isMeshStandardMaterial?H.environment:null,W.fog=H.fog,W.envMap=(R.isMeshStandardMaterial?et:Ae).get(R.envMap||W.environment),qe===void 0&&(R.addEventListener("dispose",fe),qe=new Map,W.programs=qe);let De=qe.get(Fe);if(De!==void 0){if(W.currentProgram===De&&W.lightsStateVersion===we)return tf(R,Ue),De}else Ue.uniforms=q.getUniforms(R),R.onBuild($,Ue,v),R.onBeforeCompile(Ue,v),De=q.acquireProgram(Ue,Fe),qe.set(Fe,De),W.uniforms=Ue.uniforms;const Ge=W.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ge.clippingPlanes=be.uniform),tf(R,Ue),W.needsLights=Tv(R),W.lightsStateVersion=we,W.needsLights&&(Ge.ambientLightColor.value=K.state.ambient,Ge.lightProbe.value=K.state.probe,Ge.directionalLights.value=K.state.directional,Ge.directionalLightShadows.value=K.state.directionalShadow,Ge.spotLights.value=K.state.spot,Ge.spotLightShadows.value=K.state.spotShadow,Ge.rectAreaLights.value=K.state.rectArea,Ge.ltc_1.value=K.state.rectAreaLTC1,Ge.ltc_2.value=K.state.rectAreaLTC2,Ge.pointLights.value=K.state.point,Ge.pointLightShadows.value=K.state.pointShadow,Ge.hemisphereLights.value=K.state.hemi,Ge.directionalShadowMap.value=K.state.directionalShadowMap,Ge.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ge.spotShadowMap.value=K.state.spotShadowMap,Ge.spotLightMatrix.value=K.state.spotLightMatrix,Ge.spotLightMap.value=K.state.spotLightMap,Ge.pointShadowMap.value=K.state.pointShadowMap,Ge.pointShadowMatrix.value=K.state.pointShadowMatrix);const xt=De.getUniforms(),Mt=Bc.seqWithValue(xt.seq,Ge);return W.currentProgram=De,W.uniformsList=Mt,De}function tf(R,H){const $=Se.get(R);$.outputColorSpace=H.outputColorSpace,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function Mv(R,H,$,W,K){H.isScene!==!0&&(H=yt),pe.resetTextureUnits();const ve=H.fog,we=W.isMeshStandardMaterial?H.environment:null,Ue=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Yt,Fe=(W.isMeshStandardMaterial?et:Ae).get(W.envMap||we),qe=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,De=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ge=!!$.morphAttributes.position,xt=!!$.morphAttributes.normal,Mt=!!$.morphAttributes.color;let Pn=xs;W.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Pn=v.toneMapping);const Di=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,At=Di!==void 0?Di.length:0,je=Se.get(W),Jl=g.state.lights;if(ce===!0&&(k===!0||R!==S)){const bn=R===S&&W.id===T;be.setState(W,R,bn)}let wt=!1;W.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Jl.state.version||je.outputColorSpace!==Ue||K.isInstancedMesh&&je.instancing===!1||!K.isInstancedMesh&&je.instancing===!0||K.isSkinnedMesh&&je.skinning===!1||!K.isSkinnedMesh&&je.skinning===!0||K.isInstancedMesh&&je.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&je.instancingColor===!1&&K.instanceColor!==null||je.envMap!==Fe||W.fog===!0&&je.fog!==ve||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==be.numPlanes||je.numIntersection!==be.numIntersection)||je.vertexAlphas!==qe||je.vertexTangents!==De||je.morphTargets!==Ge||je.morphNormals!==xt||je.morphColors!==Mt||je.toneMapping!==Pn||Z.isWebGL2===!0&&je.morphTargetsCount!==At)&&(wt=!0):(wt=!0,je.__version=W.version);let Ls=je.currentProgram;wt===!0&&(Ls=ja(W,H,K));let nf=!1,Bo=!1,eu=!1;const rn=Ls.getUniforms(),Os=je.uniforms;if(te.useProgram(Ls.program)&&(nf=!0,Bo=!0,eu=!0),W.id!==T&&(T=W.id,Bo=!0),nf||S!==R){rn.setValue(G,"projectionMatrix",R.projectionMatrix),rn.setValue(G,"viewMatrix",R.matrixWorldInverse);const bn=rn.map.cameraPosition;bn!==void 0&&bn.setValue(G,We.setFromMatrixPosition(R.matrixWorld)),Z.logarithmicDepthBuffer&&rn.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&rn.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,Bo=!0,eu=!0)}if(K.isSkinnedMesh){rn.setOptional(G,K,"bindMatrix"),rn.setOptional(G,K,"bindMatrixInverse");const bn=K.skeleton;bn&&(Z.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),rn.setValue(G,"boneTexture",bn.boneTexture,pe),rn.setValue(G,"boneTextureSize",bn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const tu=$.morphAttributes;if((tu.position!==void 0||tu.normal!==void 0||tu.color!==void 0&&Z.isWebGL2===!0)&&Le.update(K,$,Ls),(Bo||je.receiveShadow!==K.receiveShadow)&&(je.receiveShadow=K.receiveShadow,rn.setValue(G,"receiveShadow",K.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Os.envMap.value=Fe,Os.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Bo&&(rn.setValue(G,"toneMappingExposure",v.toneMappingExposure),je.needsLights&&bv(Os,eu),ve&&W.fog===!0&&se.refreshFogUniforms(Os,ve),se.refreshMaterialUniforms(Os,W,B,F,oe),Bc.upload(G,je.uniformsList,Os,pe)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Bc.upload(G,je.uniformsList,Os,pe),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&rn.setValue(G,"center",K.center),rn.setValue(G,"modelViewMatrix",K.modelViewMatrix),rn.setValue(G,"normalMatrix",K.normalMatrix),rn.setValue(G,"modelMatrix",K.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const bn=W.uniformsGroups;for(let nu=0,Ev=bn.length;nu<Ev;nu++)if(Z.isWebGL2){const sf=bn[nu];Oe.update(sf,Ls),Oe.bind(sf,Ls)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ls}function bv(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function Tv(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(R,H,$){Se.get(R.texture).__webglTexture=H,Se.get(R.depthTexture).__webglTexture=$;const W=Se.get(R);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=$===void 0,W.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,H){const $=Se.get(R);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,$=0){E=R,y=H,b=$;let W=!0,K=null,ve=!1,we=!1;if(R){const Fe=Se.get(R);Fe.__useDefaultFramebuffer!==void 0?(te.bindFramebuffer(G.FRAMEBUFFER,null),W=!1):Fe.__webglFramebuffer===void 0?pe.setupRenderTarget(R):Fe.__hasExternalTextures&&pe.rebindTextures(R,Se.get(R.texture).__webglTexture,Se.get(R.depthTexture).__webglTexture);const qe=R.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(we=!0);const De=Se.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(De[H])?K=De[H][$]:K=De[H],ve=!0):Z.isWebGL2&&R.samples>0&&pe.useMultisampledRTT(R)===!1?K=Se.get(R).__webglMultisampledFramebuffer:Array.isArray(De)?K=De[$]:K=De,A.copy(R.viewport),N.copy(R.scissor),U=R.scissorTest}else A.copy(j).multiplyScalar(B).floor(),N.copy(O).multiplyScalar(B).floor(),U=X;if(te.bindFramebuffer(G.FRAMEBUFFER,K)&&Z.drawBuffers&&W&&te.drawBuffers(R,K),te.viewport(A),te.scissor(N),te.setScissorTest(U),ve){const Fe=Se.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+H,Fe.__webglTexture,$)}else if(we){const Fe=Se.get(R.texture),qe=H||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Fe.__webglTexture,$||0,qe)}T=-1},this.readRenderTargetPixels=function(R,H,$,W,K,ve,we){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Se.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(Ue=Ue[we]),Ue){te.bindFramebuffer(G.FRAMEBUFFER,Ue);try{const Fe=R.texture,qe=Fe.format,De=Fe.type;if(qe!==Rn&&st.convert(qe)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=De===lo&&(Ce.has("EXT_color_buffer_half_float")||Z.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(De!==Ss&&st.convert(De)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===vi&&(Z.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-W&&$>=0&&$<=R.height-K&&G.readPixels(H,$,W,K,st.convert(qe),st.convert(De),ve)}finally{const Fe=E!==null?Se.get(E).__webglFramebuffer:null;te.bindFramebuffer(G.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(R,H,$=0){const W=Math.pow(2,-$),K=Math.floor(H.image.width*W),ve=Math.floor(H.image.height*W);pe.setTexture2D(H,0),G.copyTexSubImage2D(G.TEXTURE_2D,$,0,0,R.x,R.y,K,ve),te.unbindTexture()},this.copyTextureToTexture=function(R,H,$,W=0){const K=H.image.width,ve=H.image.height,we=st.convert($.format),Ue=st.convert($.type);pe.setTexture2D($,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,$.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,$.unpackAlignment),H.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,W,R.x,R.y,K,ve,we,Ue,H.image.data):H.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,W,R.x,R.y,H.mipmaps[0].width,H.mipmaps[0].height,we,H.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,W,R.x,R.y,we,Ue,H.image),W===0&&$.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),te.unbindTexture()},this.copyTextureToTexture3D=function(R,H,$,W,K=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=R.max.x-R.min.x+1,we=R.max.y-R.min.y+1,Ue=R.max.z-R.min.z+1,Fe=st.convert(W.format),qe=st.convert(W.type);let De;if(W.isData3DTexture)pe.setTexture3D(W,0),De=G.TEXTURE_3D;else if(W.isDataArrayTexture)pe.setTexture2DArray(W,0),De=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment);const Ge=G.getParameter(G.UNPACK_ROW_LENGTH),xt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Mt=G.getParameter(G.UNPACK_SKIP_PIXELS),Pn=G.getParameter(G.UNPACK_SKIP_ROWS),Di=G.getParameter(G.UNPACK_SKIP_IMAGES),At=$.isCompressedTexture?$.mipmaps[0]:$.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,At.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,At.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,R.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,R.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,R.min.z),$.isDataTexture||$.isData3DTexture?G.texSubImage3D(De,K,H.x,H.y,H.z,ve,we,Ue,Fe,qe,At.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(De,K,H.x,H.y,H.z,ve,we,Ue,Fe,At.data)):G.texSubImage3D(De,K,H.x,H.y,H.z,ve,we,Ue,Fe,qe,At),G.pixelStorei(G.UNPACK_ROW_LENGTH,Ge),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,xt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Mt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Pn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Di),K===0&&W.generateMipmaps&&G.generateMipmap(De),te.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?pe.setTextureCube(R,0):R.isData3DTexture?pe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?pe.setTexture2DArray(R,0):pe.setTexture2D(R,0),te.unbindTexture()},this.resetState=function(){y=0,b=0,E=null,te.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===zh?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===Pl?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===vt?sr:ag}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===sr?vt:Yt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Lb extends Ul{}Lb.prototype.isWebGL1Renderer=!0;class rr extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ob{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ch,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const on=new P;class jh{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new hn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new jh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Sp=new P,Mp=new lt,bp=new lt,Ub=new P,Tp=new Pe,kr=new P,Du=new Ti,Ep=new Pe,Pu=new Ia;class Fb extends qt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new oi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)kr.fromBufferAttribute(t,n),this.applyBoneTransform(n,kr),this.boundingBox.expandByPoint(kr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ti),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)kr.fromBufferAttribute(t,n),this.applyBoneTransform(n,kr),this.boundingSphere.expandByPoint(kr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Du.copy(this.boundingSphere),Du.applyMatrix4(i),e.ray.intersectsSphere(Du)!==!1&&(Ep.copy(i).invert(),Pu.copy(e.ray).applyMatrix4(Ep),!(this.boundingBox!==null&&Pu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Pu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Mp.fromBufferAttribute(i.attributes.skinIndex,e),bp.fromBufferAttribute(i.attributes.skinWeight,e),Sp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=bp.getComponent(r);if(o!==0){const a=Mp.getComponent(r);Tp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Ub.copy(Sp).applyMatrix4(Tp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Tg extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Eg extends jt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Pt,u=Pt,h,d){super(null,o,a,c,l,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ap=new Pe,kb=new Pe;class Yh{constructor(e=[],t=[]){this.uuid=si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:kb;Ap.multiplyMatrices(a,t[r]),Ap.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Yh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=cg(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Eg(t,e,e,Rn,vi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Tg),this.bones.push(o),this.boneInverses.push(new Pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class la extends hn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Br=new Pe,wp=new Pe,mc=[],Cp=new oi,Bb=new Pe,Wo=new qt,Xo=new Ti;class Yn extends qt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new la(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Bb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Br),Cp.copy(e.boundingBox).applyMatrix4(Br),this.boundingBox.union(Cp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Br),Xo.copy(e.boundingSphere).applyMatrix4(Br),this.boundingSphere.union(Xo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Wo.geometry=this.geometry,Wo.material=this.material,Wo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xo.copy(this.boundingSphere),Xo.applyMatrix4(n),e.ray.intersectsSphere(Xo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Br),wp.multiplyMatrices(n,Br),Wo.matrixWorld=wp,Wo.raycast(e,mc);for(let o=0,a=mc.length;o<a;o++){const c=mc[o];c.instanceId=r,c.object=this,t.push(c)}mc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new la(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ag extends ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rp=new P,Ip=new P,Dp=new Pe,Nu=new Ia,gc=new Ti;class $h extends mt{constructor(e=new jn,t=new Ag){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Rp.fromBufferAttribute(t,i-1),Ip.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Rp.distanceTo(Ip);e.setAttribute("lineDistance",new xn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gc.copy(n.boundingSphere),gc.applyMatrix4(i),gc.radius+=r,e.ray.intersectsSphere(gc)===!1)return;Dp.copy(i).invert(),Nu.copy(e.ray).applyMatrix4(Dp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new P,u=new P,h=new P,d=new P,f=this.isLineSegments?2:1,m=n.index,g=n.attributes.position;if(m!==null){const p=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let v=p,M=x-1;v<M;v+=f){const y=m.getX(v),b=m.getX(v+1);if(l.fromBufferAttribute(g,y),u.fromBufferAttribute(g,b),Nu.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let v=p,M=x-1;v<M;v+=f){if(l.fromBufferAttribute(g,v),u.fromBufferAttribute(g,v+1),Nu.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Pp=new P,Np=new P;class Vb extends $h{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Pp.fromBufferAttribute(t,i),Np.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Pp.distanceTo(Np);e.setAttribute("lineDistance",new xn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zb extends $h{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class wg extends ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Lp=new Pe,dh=new Ia,_c=new Ti,vc=new P;class Gb extends mt{constructor(e=new jn,t=new wg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_c.copy(n.boundingSphere),_c.applyMatrix4(i),_c.radius+=r,e.ray.intersectsSphere(_c)===!1)return;Lp.copy(i).invert(),dh.copy(e.ray).applyMatrix4(Lp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,_=f;m<_;m++){const g=l.getX(m);vc.fromBufferAttribute(h,g),Op(vc,g,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=d,_=f;m<_;m++)vc.fromBufferAttribute(h,m),Op(vc,m,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Op(s,e,t,n,i,r,o){const a=dh.distanceSqToPoint(s);if(a<t){const c=new P;dh.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class Hb{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new _e:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new P,i=[],r=[],o=[],a=new P,c=new Pe;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new P)}r[0]=new P,o[0]=new P;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(zt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(zt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Wb(s,e){const t=1-s;return t*t*t*e}function Xb(s,e){const t=1-s;return 3*t*t*s*e}function qb(s,e){return 3*(1-s)*s*s*e}function jb(s,e){return s*s*s*e}function Lu(s,e,t,n,i){return Wb(s,e)+Xb(s,t)+qb(s,n)+jb(s,i)}class Up extends Hb{constructor(e=new P,t=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new P){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Lu(e,i.x,r.x,o.x,a.x),Lu(e,i.y,r.y,o.y,a.y),Lu(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Kh extends jn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new P,d=new P,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const x=[],v=p/n;let M=0;p===0&&o===0?M=.5/t:p===n&&c===Math.PI&&(M=-.5/t);for(let y=0;y<=t;y++){const b=y/t;h.x=-e*Math.cos(i+b*r)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(i+b*r)*Math.sin(o+v*a),m.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),g.push(b+M,1-v),x.push(l++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const v=u[p][x+1],M=u[p][x],y=u[p+1][x],b=u[p+1][x+1];(p!==0||o>0)&&f.push(v,M,b),(p!==n-1||c<Math.PI)&&f.push(M,y,b)}this.setIndex(f),this.setAttribute("position",new xn(m,3)),this.setAttribute("normal",new xn(_,3)),this.setAttribute("uv",new xn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Yb extends yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Zh extends ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vh,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Is extends Zh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Xs extends ri{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Me(16777215),this.specular=new Me(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vh,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Zs(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Cg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Rg(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function fh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function Qh(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}function $b(s,e,t,n,i=30){const r=s.clone();r.name=e;const o=[];for(let c=0;c<r.tracks.length;++c){const l=r.tracks[c],u=l.getValueSize(),h=[],d=[];for(let f=0;f<l.times.length;++f){const m=l.times[f]*i;if(!(m<t||m>=n)){h.push(l.times[f]);for(let _=0;_<u;++_)d.push(l.values[f*u+_])}}h.length!==0&&(l.times=Zs(h,l.times.constructor),l.values=Zs(d,l.values.constructor),o.push(l))}r.tracks=o;let a=1/0;for(let c=0;c<r.tracks.length;++c)a>r.tracks[c].times[0]&&(a=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*a);return r.resetDuration(),r}function Kb(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let o=0;o<i;++o){const a=t.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=s.tracks.find(function(p){return p.name===a.name&&p.ValueTypeName===c});if(l===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0;const f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const m=a.times.length-1;let _;if(r<=a.times[0]){const p=u,x=h-u;_=a.values.slice(p,x)}else if(r>=a.times[m]){const p=m*h+u,x=p+h-u;_=a.values.slice(p,x)}else{const p=a.createInterpolant(),x=u,v=h-u;p.evaluate(r),_=p.resultBuffer.slice(x,v)}c==="quaternion"&&new Ht().fromArray(_).normalize().conjugate().toArray(_);const g=l.times.length;for(let p=0;p<g;++p){const x=p*f+d;if(c==="quaternion")Ht.multiplyQuaternionsFlat(l.values,x,_,0,l.values,x);else{const v=f-d*2;for(let M=0;M<v;++M)l.values[x+M]-=_[M]}}}return s.blendMode=rg,s}const Zn={convertArray:Zs,isTypedArray:Cg,getKeyframeOrder:Rg,sortedArray:fh,flattenJSON:Qh,subclip:$b,makeClipAdditive:Kb};class Na{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Zb extends Na{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yr,endingEnd:Yr}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case $r:r=e,a=2*t-n;break;case qc:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case $r:o=e,c=2*n-t;break;case qc:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,x=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,v=(-1-f)*g+(1.5+f)*_+.5*m,M=f*g-f*_;for(let y=0;y!==a;++y)r[y]=p*o[u+y]+x*o[l+y]+v*o[c+y]+M*o[h+y];return r}}class Ig extends Na{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}}class Qb extends Na{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ei{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zs(t,this.TimeBufferType),this.values=Zs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zs(e.times,Array),values:Zs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Qb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ig(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zb(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case aa:t=this.InterpolantFactoryMethodDiscrete;break;case ho:t=this.InterpolantFactoryMethodLinear;break;case cu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return aa;case this.InterpolantFactoryMethodLinear:return ho;case this.InterpolantFactoryMethodSmooth:return cu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Cg(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===cu,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const h=a*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){const _=t[h+m];if(_!==t[d+m]||_!==t[f+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ei.prototype.TimeBufferType=Float32Array;Ei.prototype.ValueBufferType=Float32Array;Ei.prototype.DefaultInterpolation=ho;class Io extends Ei{}Io.prototype.ValueTypeName="bool";Io.prototype.ValueBufferType=Array;Io.prototype.DefaultInterpolation=aa;Io.prototype.InterpolantFactoryMethodLinear=void 0;Io.prototype.InterpolantFactoryMethodSmooth=void 0;class Dg extends Ei{}Dg.prototype.ValueTypeName="color";class mo extends Ei{}mo.prototype.ValueTypeName="number";class Jb extends Na{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)Ht.slerpFlat(r,0,o,l-a,o,l,c);return r}}class hr extends Ei{InterpolantFactoryMethodLinear(e){return new Jb(this.times,this.values,this.getValueSize(),e)}}hr.prototype.ValueTypeName="quaternion";hr.prototype.DefaultInterpolation=ho;hr.prototype.InterpolantFactoryMethodSmooth=void 0;class Do extends Ei{}Do.prototype.ValueTypeName="string";Do.prototype.ValueBufferType=Array;Do.prototype.DefaultInterpolation=aa;Do.prototype.InterpolantFactoryMethodLinear=void 0;Do.prototype.InterpolantFactoryMethodSmooth=void 0;class go extends Ei{}go.prototype.ValueTypeName="vector";class ph{constructor(e,t=-1,n,i=Bh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=si(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(tT(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Ei.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=Rg(c);c=fh(c,1,u),l=fh(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new mo(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,m,_){if(f.length!==0){const g=[],p=[];Qh(f,g,p,m),g.length!==0&&_.push(new h(d,g,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(const _ in f){const g=[],p=[];for(let x=0;x!==d[m].morphTargets.length;++x){const v=d[m];g.push(v.time),p.push(v.morphTarget===_?1:0)}i.push(new mo(".morphTargetInfluence["+_+"]",g,p))}c=f.length*o}else{const f=".bones["+t[h].name+"]";n(go,f+".position",d,"pos",i),n(hr,f+".quaternion",d,"rot",i),n(go,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function eT(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return mo;case"vector":case"vector2":case"vector3":case"vector4":return go;case"color":return Dg;case"quaternion":return hr;case"bool":case"boolean":return Io;case"string":return Do}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function tT(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=eT(s.type);if(s.times===void 0){const t=[],n=[];Qh(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const _o={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class nT{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],m=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}}const iT=new nT;class Po{constructor(e){this.manager=e!==void 0?e:iT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Po.DEFAULT_MATERIAL_NAME="__DEFAULT";const ki={};class sT extends Error{constructor(e,t){super(e),this.response=t}}class Pg extends Po{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=_o.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ki[e]!==void 0){ki[e].push({onLoad:t,onProgress:n,onError:i});return}ki[e]=[],ki[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=ki[e],h=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,m=f!==0;let _=0;const g=new ReadableStream({start(p){x();function x(){h.read().then(({done:v,value:M})=>{if(v)p.close();else{_+=M.byteLength;const y=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let b=0,E=u.length;b<E;b++){const T=u[b];T.onProgress&&T.onProgress(y)}p.enqueue(M),x()}})}}});return new Response(g)}else throw new sT(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{_o.add(e,l);const u=ki[e];delete ki[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=ki[e];if(u===void 0)throw this.manager.itemError(e),l;delete ki[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class rT extends Po{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=_o.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=ca("img");function c(){u(),_o.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Ng extends Po{constructor(e){super(e)}load(e,t,n,i){const r=new jt,o=new rT(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Fl extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ou=new Pe,Fp=new P,kp=new P;class Jh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xh,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Fp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fp),kp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kp),t.updateMatrixWorld(),Ou.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ou),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ou)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class oT extends Jh{constructor(){super(new cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=fo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Lg extends Fl{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new oT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Bp=new Pe,qo=new P,Uu=new P;class aT extends Jh{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),qo.setFromMatrixPosition(e.matrixWorld),n.position.copy(qo),Uu.copy(n.position),Uu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Uu),n.updateMatrixWorld(),i.makeTranslation(-qo.x,-qo.y,-qo.z),Bp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bp)}}class cT extends Fl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new aT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class lT extends Jh{constructor(){super(new Co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ed extends Fl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new lT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class td extends Fl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class mh{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class uT extends Po{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=_o.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){_o.add(e,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){i&&i(c),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}let Og=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Vp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Vp(){return(typeof performance>"u"?Date:performance).now()}class hT{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Ht.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;Ht.multiplyQuaternionsFlat(e,o,e,t,e,n),Ht.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const nd="\\[\\]\\.:\\/",dT=new RegExp("["+nd+"]","g"),id="[^"+nd+"]",fT="[^"+nd.replace("\\.","")+"]",pT=/((?:WC+[\/:])*)/.source.replace("WC",id),mT=/(WCOD+)?/.source.replace("WCOD",fT),gT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",id),_T=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",id),vT=new RegExp("^"+pT+mT+gT+_T+"$"),yT=["material","materials","bones","map"];class xT{constructor(e,t,n){const i=n||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class nt{constructor(e,t,n){this.path=t,this.parsedPath=n||nt.parseTrackName(t),this.node=nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new nt.Composite(e,t,n):new nt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dT,"")}static parseTrackName(e){const t=vT.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);yT.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}nt.Composite=xT;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ST{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:Yr,endingEnd:Yr};for(let l=0;l!==o;++l){const u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=sg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case rg:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case Bh:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===o0;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===r0){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=$r,i.endingEnd=$r):(e?i.endingStart=this.zeroSlopeAtStart?$r:Yr:i.endingStart=qc,t?i.endingEnd=this.zeroSlopeAtEnd?$r:Yr:i.endingEnd=qc)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}}const MT=new Float32Array(1);class bT extends ss{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){const d=i[h],f=d.name;let m=u[f];if(m!==void 0)++m.referenceCount,o[h]=m;else{if(m=o[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;m=new hT(nt.create(n,f,_),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),o[h]=m}a[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Ig(new Float32Array(2),new Float32Array(2),1,MT),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?ph.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Bh),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new ST(this,o,t,n);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?ph.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Ug{constructor(e,t,n=0,i=1/0){this.ray=new Ia(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Hh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return gh(e,this,n,t),n.sort(zp),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)gh(e[i],this,n,t);return n.sort(zp),n}}function zp(s,e){return s.distance-e.distance}function gh(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)gh(i[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uh);function Gp(s,e){if(e===a0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ah||e===og){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===ah)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Fg extends Po{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new CT(t)}),this.register(function(t){return new UT(t)}),this.register(function(t){return new FT(t)}),this.register(function(t){return new kT(t)}),this.register(function(t){return new IT(t)}),this.register(function(t){return new DT(t)}),this.register(function(t){return new PT(t)}),this.register(function(t){return new NT(t)}),this.register(function(t){return new wT(t)}),this.register(function(t){return new LT(t)}),this.register(function(t){return new RT(t)}),this.register(function(t){return new OT(t)}),this.register(function(t){return new ET(t)}),this.register(function(t){return new BT(t)}),this.register(function(t){return new VT(t)})}load(e,t,n,i){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=mh.extractUrlBase(e),this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Pg(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===kg){try{o[Ke.KHR_BINARY_GLTF]=new zT(e)}catch(h){i&&i(h);return}r=JSON.parse(o[Ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new eE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Ke.KHR_MATERIALS_UNLIT:o[h]=new AT;break;case Ke.KHR_DRACO_MESH_COMPRESSION:o[h]=new GT(r,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:o[h]=new HT;break;case Ke.KHR_MESH_QUANTIZATION:o[h]=new WT;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function TT(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ET{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new Me(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Yt);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ed(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new cT(u),l.distance=h;break;case"spot":l=new Lg(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,gs(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class AT{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return Hn}extendParams(e,t,n){const i=[];e.color=new Me(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Yt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,vt))}return Promise.all(i)}}class wT{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class CT{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Is}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new _e(a,a)}return Promise.all(r)}}class RT{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Is}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class IT{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Is}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Me(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Yt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,vt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class DT{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Is}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class PT{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Is}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Me().setRGB(a[0],a[1],a[2],Yt),Promise.all(r)}}class NT{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Is}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class LT{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Is}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Me().setRGB(a[0],a[1],a[2],Yt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,vt)),Promise.all(r)}}class OT{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Is}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class UT{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class FT{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class kT{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class BT{constructor(e){this.name=Ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class VT{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Un.TRIANGLES&&l.mode!==Un.TRIANGLE_STRIP&&l.mode!==Un.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const m of h){const _=new Pe,g=new P,p=new Ht,x=new P(1,1,1),v=new Yn(m.geometry,m.material,d);for(let M=0;M<d;M++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,M),c.SCALE&&x.fromBufferAttribute(c.SCALE,M),v.setMatrixAt(M,_.compose(g,p,x));for(const M in c)M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&m.geometry.setAttribute(M,c[M]);mt.prototype.copy.call(v,m),this.parser.assignFinalMaterial(v),f.push(v)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const kg="glTF",jo=12,Hp={JSON:1313821514,BIN:5130562};class zT{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,jo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==kg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-jo,r=new DataView(e,jo);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Hp.JSON){const l=new Uint8Array(e,jo+o,a);this.content=n.decode(l)}else if(c===Hp.BIN){const l=jo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class GT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=_h[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=_h[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=to[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(d){for(const f in d.attributes){const m=d.attributes[f],_=c[f];_!==void 0&&(m.normalized=_)}h(d)},a,l)})})}}class HT{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class WT{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}}class Bg extends Na{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,m=e*l,_=m-l,g=-2*f+3*d,p=f-d,x=1-g,v=p-d+h;for(let M=0;M!==a;M++){const y=o[_+M+a],b=o[_+M+c]*u,E=o[m+M+a],T=o[m+M]*u;r[M]=x*y+v*b+g*E+p*T}return r}}const XT=new Ht;class qT extends Bg{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return XT.fromArray(r).normalize().toArray(r),r}}const Un={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},to={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Wp={9728:Pt,9729:pn,9984:oh,9985:Zm,9986:kc,9987:ur},Xp={33071:zn,33648:Xc,10497:vn},Fu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_h={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},fs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},jT={CUBICSPLINE:void 0,LINEAR:ho,STEP:aa},ku={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function YT(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Zh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:es})),s.DefaultMaterial}function Vs(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function gs(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function $T(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function KT(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ZT(s){let e;const t=s.extensions&&s.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Bu(t.attributes):e=s.indices+":"+Bu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Bu(s.targets[n]);return e}function Bu(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function vh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function QT(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const JT=new Pe;class eE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new TT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Ng(this.options.manager):this.textureLoader=new uT(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Pg(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Vs(r,a,i),gs(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(mh.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Fu[i.type],a=to[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new hn(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Fu[i.type],l=to[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let _,g;if(f&&f!==h){const p=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let v=t.cache.get(x);v||(_=new l(a,p*f,i.count*f/u),v=new Ob(_,f/u),t.cache.add(x,v)),g=new jh(v,c,d%f/u,m)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),g=new hn(_,c,m);if(i.sparse!==void 0){const p=Fu.SCALAR,x=to[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,y=new x(o[1],v,i.sparse.count*p),b=new l(o[2],M,i.sparse.count*c);a!==null&&(g=new hn(g.array.slice(),g.itemSize,g.normalized));for(let E=0,T=y.length;E<T;E++){const S=y[E];if(g.setX(S,b[E*c]),c>=2&&g.setY(S,b[E*c+1]),c>=3&&g.setZ(S,b[E*c+2]),c>=4&&g.setW(S,b[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Wp[d.magFilter]||pn,u.minFilter=Wp[d.minFilter]||ur,u.wrapS=Xp[d.wrapS]||vn,u.wrapT=Xp[d.wrapT]||vn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(_){const g=new jt(_);g.needsUpdate=!0,d(g)}),t.load(mh.resolveURL(h,r.path),m,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),h.userData.mimeType=o.mimeType||QT(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ke.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new wg,ri.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Ag,ri.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Zh}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[Ke.KHR_MATERIALS_UNLIT]){const h=i[Ke.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Me(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Yt),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,vt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Cn);const u=r.alphaMode||ku.OPAQUE;if(u===ku.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ku.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Hn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new _e(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Hn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Hn){const h=r.emissiveFactor;a.emissive=new Me().setRGB(h[0],h[1],h[2],Yt)}return r.emissiveTexture!==void 0&&o!==Hn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,vt)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),gs(h,r),t.associations.set(h,{materials:e}),r.extensions&&Vs(i,h,r),h})}createUniqueName(e){const t=nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return qp(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=ZT(l),h=i[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=qp(new jn,l,t),i[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?YT(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,m=u.length;f<m;f++){const _=u[f],g=o[f];let p;const x=l[f];if(g.mode===Un.TRIANGLES||g.mode===Un.TRIANGLE_STRIP||g.mode===Un.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new Fb(_,x):new qt(_,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Un.TRIANGLE_STRIP?p.geometry=Gp(p.geometry,og):g.mode===Un.TRIANGLE_FAN&&(p.geometry=Gp(p.geometry,ah));else if(g.mode===Un.LINES)p=new Vb(_,x);else if(g.mode===Un.LINE_STRIP)p=new $h(_,x);else if(g.mode===Un.LINE_LOOP)p=new zb(_,x);else if(g.mode===Un.POINTS)p=new Gb(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&KT(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),gs(p,r),g.extensions&&Vs(i,p,g),t.assignFinalMaterial(p),h.push(p)}for(let f=0,m=h.length;f<m;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Vs(i,h[0],r),h[0];const d=new Ks;r.extensions&&Vs(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=h.length;f<m;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new cn(tt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Co(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),gs(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const d=new Pe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Yh(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],m=i.samplers[f.sampler],_=f.target,g=_.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,x=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(m),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],m=h[2],_=h[3],g=h[4],p=[];for(let x=0,v=d.length;x<v;x++){const M=d[x],y=f[x],b=m[x],E=_[x],T=g[x];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const S=n._createAnimationTracks(M,y,b,E,T);if(S)for(let A=0;A<S.length;A++)p.push(S[A])}return new ph(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,JT)});for(let f=0,m=h.length;f<m;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Tg:l.length>1?u=new Ks:l.length===1?u=l[0]:u=new mt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),gs(u,r),r.extensions&&Vs(n,u,r),r.matrix!==void 0){const h=new Pe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Ks;n.name&&(r.name=i.createUniqueName(n.name)),gs(r,n),n.extensions&&Vs(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof ri||d instanceof jt)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];fs[r.path]===fs.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(fs[r.path]){case fs.weights:l=mo;break;case fs.rotation:l=hr;break;case fs.position:case fs.scale:l=go;break;default:switch(n.itemSize){case 1:l=mo;break;case 2:case 3:default:l=go;break}break}const u=i.interpolation!==void 0?jT[i.interpolation]:ho,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const m=new l(c[d]+"."+fs[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=vh(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof hr?qT:Bg;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function tE(s,e,t){const n=e.attributes,i=new oi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),a.normalized){const u=vh(to[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new P,c=new P;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const _=vh(to[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Ti;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function qp(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=_h[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Je.workingColorSpace!==Yt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),gs(s,e),tE(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?$T(s,e.targets,t):s})}var Zr={i8:"i8",ui8:"ui8",ui8c:"ui8c",i16:"i16",ui16:"ui16",i32:"i32",ui32:"ui32",f32:"f32",f64:"f64",eid:"eid"},jp={i8:"Int8",ui8:"Uint8",ui8c:"Uint8Clamped",i16:"Int16",ui16:"Uint16",i32:"Int32",ui32:"Uint32",eid:"Uint32",f32:"Float32",f64:"Float64"},Qs={i8:Int8Array,ui8:Uint8Array,ui8c:Uint8ClampedArray,i16:Int16Array,ui16:Uint16Array,i32:Int32Array,ui32:Uint32Array,f32:Float32Array,f64:Float64Array,eid:Uint32Array},Yp={uint8:2**8,uint16:2**16,uint32:2**32},nE=s=>e=>Math.ceil(e/s)*s,iE=nE(4),sE=Symbol("storeRef"),yh=Symbol("storeSize"),rE=Symbol("storeMaps"),or=Symbol("storeFlattened"),yc=Symbol("storeBase"),oE=Symbol("storeType"),Vg=Symbol("storeArrayElementCounts"),Vc=Symbol("storeSubarrays"),zg=Symbol("subarrayCursors"),aE=Symbol("subarray"),xh=Symbol("parentArray"),Gg=Symbol("tagStore"),$p=Symbol("indexType"),Kp=Symbol("indexBytes"),Hg=Symbol("isEidType"),Bi={},cE=(s,e)=>{if(ArrayBuffer.isView(s))s[e]=s.slice(0);else{const t=s[xh].slice(0);s[e]=s.map((n,i)=>{const{length:r}=s[i],o=r*i,a=o+r;return t.subarray(o,a)})}},lE=(s,e)=>{s[or]&&s[or].forEach(t=>{ArrayBuffer.isView(t)?t[e]=0:t[e].fill(0)})},uE=(s,e)=>{const t=e*Qs[s].BYTES_PER_ELEMENT,n=new ArrayBuffer(t),i=new Qs[s](n);return i[Hg]=s===Zr.eid,i},hE=(s,e,t)=>{const n=s[yh],i=Array(n).fill(0);i[oE]=e,i[Hg]=e===Zr.eid;const r=s[zg],o=t<=Yp.uint8?Zr.ui8:t<=Yp.uint16?Zr.ui16:Zr.ui32;if(!t)throw new Error("bitECS - Must define component array length");if(!Qs[e])throw new Error(`bitECS - Invalid component array property type ${e}`);if(!s[Vc][e]){const l=s[Vg][e],u=new Qs[e](iE(l*n));u[$p]=jp[o],u[Kp]=Qs[o].BYTES_PER_ELEMENT,s[Vc][e]=u}const a=r[e],c=a+n*t;r[e]=c,i[xh]=s[Vc][e].subarray(a,c);for(let l=0;l<n;l++){const u=t*l,h=u+t;i[l]=i[xh].subarray(u,h),i[l][$p]=jp[o],i[l][Kp]=Qs[o].BYTES_PER_ELEMENT,i[l][aE]=!0}return i},Zp=s=>Array.isArray(s)&&typeof s[0]=="string"&&typeof s[1]=="number",dE=(s,e)=>{const t=Symbol("store");if(!s||!Object.keys(s).length)return Bi[t]={[yh]:e,[Gg]:!0,[yc]:()=>Bi[t]},Bi[t];s=JSON.parse(JSON.stringify(s));const n={},i=o=>{const a=Object.keys(o);for(const c of a)Zp(o[c])?(n[o[c][0]]||(n[o[c][0]]=0),n[o[c][0]]+=o[c][1]):o[c]instanceof Object&&i(o[c])};i(s);const r={[yh]:e,[rE]:{},[Vc]:{},[sE]:t,[zg]:Object.keys(Qs).reduce((o,a)=>({...o,[a]:0}),{}),[or]:[],[Vg]:n};if(s instanceof Object&&Object.keys(s).length){const o=(a,c)=>{if(typeof a[c]=="string")a[c]=uE(a[c],e),a[c][yc]=()=>Bi[t],r[or].push(a[c]);else if(Zp(a[c])){const[l,u]=a[c];a[c]=hE(r,l,u),a[c][yc]=()=>Bi[t],r[or].push(a[c])}else a[c]instanceof Object&&(a[c]=Object.keys(a[c]).reduce(o,a[c]));return a};return Bi[t]=Object.assign(Object.keys(s).reduce(o,s),r),Bi[t][yc]=()=>Bi[t],Bi[t]}},Ko=()=>{const s=[],e=[];s.sort=function(o){const a=Array.prototype.sort.call(this,o);for(let c=0;c<s.length;c++)e[s[c]]=c;return a};const t=o=>s[e[o]]===o;return{add:o=>{t(o)||(e[o]=s.push(o)-1)},remove:o=>{if(!t(o))return;const a=e[o],c=s.pop();c!==o&&(s[a]=c,e[c]=a)},has:t,sparse:e,dense:s,reset:()=>{s.length=0,e.length=0}}},Ts=Symbol("entityMasks"),kl=Symbol("entityComponents"),dr=Symbol("entitySparseSet"),ia=Symbol("entityArray"),fE=1e5,Sh=0,Wg=fE,sd=()=>Wg,Zo=[],pE=.01,mE=pE,gE=()=>Sh,_E=new Map,Qp=s=>{const e=s[ud]?Zo.length?Zo.shift():Sh++:Zo.length>Math.round(Wg*mE)?Zo.shift():Sh++;if(e>s[ld])throw new Error("bitECS - max entities reached");return s[dr].add(e),_E.set(e,s),s[rd].forEach(t=>{od(s,t,e)&&ad(t,e)}),s[kl].set(e,new Set),e},vE=(s,e)=>{if(s[dr].has(e)){s[Bl].forEach(t=>{jg(s,t,e)}),s[ud]||Zo.push(e),s[dr].remove(e),s[kl].delete(e),s[Yg].delete(s[bh].get(e)),s[bh].delete(e);for(let t=0;t<s[Ts].length;t++)s[Ts][t][e]=0}},yE=Symbol("$modifier"),Bl=Symbol("queries"),rd=Symbol("notQueries"),xE=Symbol("queryAny"),SE=Symbol("queryAll"),ME=Symbol("queryNone"),Qc=Symbol("queryMap"),sa=Symbol("$dirtyQueries"),Xg=Symbol("queryComponents"),bE=(s,e)=>{const t=[],n=[],i=[];e[Xg].forEach(y=>{if(typeof y=="function"&&y[yE]){const[b,E]=y();s[Zi].has(b)||Mh(s,b),E==="not"&&n.push(b),E==="changed"&&(i.push(b),t.push(b))}else s[Zi].has(y)||Mh(s,y),t.push(y)});const r=y=>s[Zi].get(y),o=t.concat(n).map(r),a=Ko(),c=[],l=[],u=Ko(),h=Ko(),d=Ko(),f=o.map(y=>y.generationId).reduce((y,b)=>(y.includes(b)||y.push(b),y),[]),m=(y,b)=>(y[b.generationId]||(y[b.generationId]=0),y[b.generationId]|=b.bitflag,y),_=t.map(r).reduce(m,{}),g=n.map(r).reduce(m,{}),p=o.reduce(m,{}),x=t.filter(y=>!y[Gg]).map(y=>Object.getOwnPropertySymbols(y).includes(or)?y[or]:[y]).reduce((y,b)=>y.concat(b),[]),M=Object.assign(a,{archetypes:c,changed:l,components:t,notComponents:n,changedComponents:i,allComponents:o,masks:_,notMasks:g,hasMasks:p,generations:f,flatProps:x,toRemove:u,entered:h,exited:d,shadows:[]});s[Qc].set(e,M),s[Bl].add(M),o.forEach(y=>{y.queries.add(M)}),n.length&&s[rd].add(M);for(let y=0;y<gE();y++){if(!s[dr].has(y))continue;od(s,M,y)&&ad(M,y)}},TE=(s,e)=>{const t=Symbol(),n=s.flatProps[e];return cE(n,t),s.shadows[e]=n[t],n[t]},EE=(s,e)=>{e&&(s.changed=[]);const{flatProps:t,shadows:n}=s;for(let i=0;i<s.dense.length;i++){const r=s.dense[i];let o=!1;for(let a=0;a<t.length;a++){const c=t[a],l=n[a]||TE(s,a);if(ArrayBuffer.isView(c[r])){for(let u=0;u<c[r].length;u++)if(c[r][u]!==l[r][u]){o=!0;break}l[r].set(c[r])}else c[r]!==l[r]&&(o=!0,l[r]=c[r])}o&&s.changed.push(r)}return s.changed},qg=(...s)=>{let e,t,n,i;if(Array.isArray(s[0])&&(e=s[0]),e===void 0||e[Zi]!==void 0)return o=>o?o[ia]:e[ia];const r=function(o,a=!0){o[Qc].has(r)||bE(o,r);const c=o[Qc].get(r);return wE(o),c.changedComponents.length?EE(c,a):c.dense};return r[Xg]=e,r[xE]=t,r[SE]=n,r[ME]=i,r},od=(s,e,t)=>{const{masks:n,notMasks:i,generations:r}=e;for(let o=0;o<r.length;o++){const a=r[o],c=n[a],l=i[a],u=s[Ts][a][t];if(l&&u&l||c&&(u&c)!==c)return!1}return!0},ad=(s,e)=>{s.toRemove.remove(e),s.entered.add(e),s.add(e)},AE=s=>{for(let e=s.toRemove.dense.length-1;e>=0;e--){const t=s.toRemove.dense[e];s.toRemove.remove(t),s.remove(t)}},wE=s=>{s[sa].size&&(s[sa].forEach(AE),s[sa].clear())},jg=(s,e,t)=>{!e.has(t)||e.toRemove.has(t)||(e.toRemove.add(t),s[sa].add(e),e.exited.add(t))},Zi=Symbol("componentMap"),cd=(s,e)=>{const t=dE(s,e||sd());return s&&Object.keys(s).length,t},CE=s=>{s[ra]*=2,s[ra]>=2**31&&(s[ra]=1,s[Ts].push(new Uint32Array(s[ld])))},Mh=(s,e)=>{if(!e)throw new Error("bitECS - Cannot register null or undefined component");const t=new Set,n=new Set,i=new Set;s[Bl].forEach(r=>{r.allComponents.includes(e)&&t.add(r)}),s[Zi].set(e,{generationId:s[Ts].length-1,bitflag:s[ra],store:e,queries:t,notQueries:n,changedQueries:i}),CE(s)},RE=(s,e,t)=>{const n=s[Zi].get(e);if(!n)return!1;const{generationId:i,bitflag:r}=n;return(s[Ts][i][t]&r)===r},xc=(s,e,t,n=!1)=>{if(t===void 0)throw new Error("bitECS - entity is undefined.");if(!s[dr].has(t))throw new Error("bitECS - entity does not exist in the world.");if(s[Zi].has(e)||Mh(s,e),RE(s,e,t))return;const i=s[Zi].get(e),{generationId:r,bitflag:o,queries:a,notQueries:c}=i;s[Ts][r][t]|=o,a.forEach(l=>{l.toRemove.remove(t);const u=od(s,l,t);u&&(l.exited.remove(t),ad(l,t)),u||(l.entered.remove(t),jg(s,l,t))}),s[kl].get(t).add(e),n&&lE(e,t)},ld=Symbol("size"),ra=Symbol("bitflag"),IE=Symbol("archetypes"),Yg=Symbol("localEntities"),bh=Symbol("localEntityLookup"),ud=Symbol("manualEntityRecycling"),DE=(...s)=>{const e=typeof s[0]=="object"?s[0]:{},t=typeof s[0]=="number"?s[0]:typeof s[1]=="number"?s[1]:sd();return PE(e,t),e},PE=(s,e=sd())=>(s[ld]=e,s[ia]&&s[ia].forEach(t=>vE(s,t)),s[Ts]=[new Uint32Array(e)],s[kl]=new Map,s[IE]=[],s[dr]=Ko(),s[ia]=s[dr].dense,s[ra]=1,s[Zi]=new Map,s[Qc]=new Map,s[Bl]=new Set,s[rd]=new Set,s[sa]=new Set,s[Yg]=new Map,s[bh]=new Map,s[ud]=!1,s),NE=(...s)=>e=>{let t=e;for(let n=0;n<s.length;n++){const i=s[n];t=i(t)}return t},LE=Zr;const OE=s=>{const e=DE();return s===void 0?e.camera=new cn(120,1/(window.innerWidth/window.innerHeight),.01,1e3):e.camera=s,e.scene=new rr,e.renderer=new Ul({antialias:!1}),e.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(e.renderer.domElement),e.camera.aspect=window.innerWidth/window.innerHeight,e.camera.updateProjectionMatrix(),window.addEventListener("resize",()=>{e.camera.aspect=window.innerWidth/window.innerHeight,e.camera.updateProjectionMatrix(),e.renderer.setSize(window.innerWidth,window.innerHeight)}),e.objects=new Map,e.clock=new Og,e.time={last:0,delta:0,elapsed:0},e.pointer=new _e,e},{f32:Js}=LE,Jp={x:Js,y:Js,z:Js},UE={x:Js,y:Js,z:Js,w:Js},FE={position:Jp,rotation:UE,scale:Jp},vo=cd(FE),$g=cd(),Kg=cd(),em=(s,e)=>(s.eid=e,Object.defineProperty(s.position,"eid",{get:()=>e}),Object.defineProperty(s.position,"store",{get:()=>vo.position}),Object.defineProperty(s.position,"x",{get(){return this.store.x[this.eid]},set(t){this.store.x[this.eid]=t}}),Object.defineProperty(s.position,"y",{get(){return this.store.y[this.eid]},set(t){this.store.y[this.eid]=t}}),Object.defineProperty(s.position,"z",{get(){return this.store.z[this.eid]},set(t){this.store.z[this.eid]=t}}),Object.defineProperty(s.rotation,"eid",{get:()=>e}),Object.defineProperty(s.rotation,"store",{get:()=>vo.rotation}),Object.defineProperty(s.rotation,"_x",{get(){return this.store.x[this.eid]},set(t){this.store.x[this.eid]=t}}),Object.defineProperty(s.rotation,"_y",{get(){return this.store.y[this.eid]},set(t){this.store.y[this.eid]=t}}),Object.defineProperty(s.rotation,"_z",{get(){return this.store.z[this.eid]},set(t){this.store.z[this.eid]=t}}),s);let Zg={MoveDir:new _e,SPACE:0,LeftClick:0,RightClick:0,pointer:new _e,diffX:0,diffY:0,pointerX:.5,pointerY:.5,startX:.5,startY:.5,mouseMove:!1,accX:0,accY:0,accZ:0};const tm={type:"start"},kE={type:"end"};class BE extends ss{constructor(e){super();const t=new _e(0,1),n=new _e(0,-1),i=new _e(1,0),r=new _e(-1,0);this.domElement=e,this.domElement.style.touchAction="none";const o=this;this.current_input=Zg;let a=[];this.touches={ONE:Wc.MOVE,TWO:Wc.DOLLY_PAN};const c=[],l={},u={NONE:-1,MOVE:0};let h=u.NONE;function d(k){return a.includes(k)}this.keydown=function(k){a.includes(k.keyCode)||a.push(k.keyCode)},this.keyup=function(k){a.includes(k.keyCode)&&a.splice(a.indexOf(k.keyCode),1)},this.checkGameKeys=function(){this.current_input.MoveDir.set(0,0),d(65)&&this.current_input.MoveDir.add(r),d(68)&&this.current_input.MoveDir.add(i),d(87)&&this.current_input.MoveDir.add(t),d(83)&&this.current_input.MoveDir.add(n)};let f=!1,m=window.innerWidth/2,_=window.innerHeight/2,g=window.innerWidth/2,p=window.innerHeight/2,x=0,v=0,M=0,y=0,b;this.update=function(k){this.checkGameKeys(),this.current_input.diffX=x/window.innerWidth,this.current_input.diffY=v/window.innerWidth,this.current_input.startX=g/window.innerWidth*2-1,this.current_input.startY=-(p/window.innerWidth)*2+1,this.current_input.pointerX=m/window.innerWidth*2-1,this.current_input.pointerY=-(_/window.innerWidth)*2+1,this.current_input.mouseMove=f,b===void 0&&this.calibrateXY(),this.current_input.accX=M,this.current_input.accY=y,x=v=0,f=!1},this.calibrateXY=function(){b=M};const E=this.keydown.bind(this),T=this.keyup.bind(this);function S(k){let oe=l[k.pointerId];oe===void 0&&(oe=new _e,l[k.pointerId]=oe),oe.set(k.pageX,k.pageY)}function A(k){switch(S(k),c.length){case 1:if(o.enableRotate===!1)return;N(),h=u.MOVE;break;case 2:switch(o.touches.TWO){default:h=u.NONE}break;default:h=u.NONE}h!==u.NONE&&o.dispatchEvent(tm)}function N(){c.length===1&&(m=c[0].pageX,g=c[0].pageX,_=c[0].pageY,p=c[0].pageY)}function U(k){switch(S(k),h){case u.MOVE:if(o.enableRotate===!1)return;z(k);break;default:h=u.NONE}}function z(k){c.length===1&&(f=!0,k.pageX<m?x=m-k.pageX:k.pageX>m&&(x=k.pageX-m),x=k.pageX-m,k.pageY<_?v=_-k.pageY:k.pageY>_&&(v=k.pageY-_),v=k.pageY-_,m=k.pageX,_=k.pageY,console.log(x,v))}let C=kn.None;function D(k){switch(k.button){case 0:C=kn.LEFT,F(k);break;case 1:C=kn.MIDDLE;break;case 2:C=kn.RIGHT;break;default:C=-1}h!==u.NONE&&o.dispatchEvent(tm)}function F(k){m=k.pageX,_=k.pageY,g=k.pageX,p=k.pageY}function B(k){if(o.enabled!==!1)switch(C){case kn.LEFT:if(o.enableZoom===!1)return;Y(k);break;case kn.MIDDLE:if(o.enablePan===!1)return;handleMouseMovePan(k);break}}function Y(k){f=!0,k.pageX<m?x=m-k.pageX:k.pageX>m&&(x=k.pageX-m),x=k.pageX-m,k.pageY<_?v=_-k.pageY:k.pageY>_&&(v=k.pageY-_),v=k.pageY-_,m=k.pageX,_=k.pageY}function V(k){c.push(k)}function j(k){delete l[k.pointerId];for(let oe=0;oe<c.length;oe++)if(c[oe].pointerId==k.pointerId){c.splice(oe,1);return}}function O(k){o.enabled!==!1&&(c.length===0&&(o.domElement.setPointerCapture(k.pointerId),o.domElement.addEventListener("pointermove",X),o.domElement.addEventListener("pointerup",ie)),V(k),k.pointerType==="touch"?A(k):D(k))}function X(k){o.enabled!==!1&&(k.pointerType==="touch"?U(k):B(k))}function ie(k){j(k),c.length===0&&(o.domElement.releasePointerCapture(k.pointerId),o.domElement.removeEventListener("pointermove",X),o.domElement.removeEventListener("pointerup",ie)),o.dispatchEvent(kE),C=-1,f=!1,x=0,v=0}function ce(k){var oe=k.rotationRate.beta*k.interval/1e3/10,ye=k.rotationRate.alpha*k.interval/1e3/10;k.rotationRate.z,M=oe,y=ye}window.addEventListener("devicemotion",ce,!0),window.addEventListener("keydown",E,!1),window.addEventListener("keyup",T,!1),o.domElement.addEventListener("pointerdown",O,!1),o.domElement.addEventListener("pointercancel",ie,!1)}init(e){}execute(e,t){this.checkGameKeys()}}const Qg="14.7.77",nm=(s,e,t)=>({endTime:e,insertTime:t,type:"exponentialRampToValue",value:s}),im=(s,e,t)=>({endTime:e,insertTime:t,type:"linearRampToValue",value:s}),Th=(s,e)=>({startTime:e,type:"setValue",value:s}),Jg=(s,e,t)=>({duration:t,startTime:e,type:"setValueCurve",values:s}),e_=(s,e,{startTime:t,target:n,timeConstant:i})=>n+(e-n)*Math.exp((t-s)/i),Qr=s=>s.type==="exponentialRampToValue",Jc=s=>s.type==="linearRampToValue",_s=s=>Qr(s)||Jc(s),hd=s=>s.type==="setValue",Xi=s=>s.type==="setValueCurve",el=(s,e,t,n)=>{const i=s[e];return i===void 0?n:_s(i)||hd(i)?i.value:Xi(i)?i.values[i.values.length-1]:e_(t,el(s,e-1,i.startTime,n),i)},sm=(s,e,t,n,i)=>t===void 0?[n.insertTime,i]:_s(t)?[t.endTime,t.value]:hd(t)?[t.startTime,t.value]:Xi(t)?[t.startTime+t.duration,t.values[t.values.length-1]]:[t.startTime,el(s,e-1,t.startTime,i)],Eh=s=>s.type==="cancelAndHold",Ah=s=>s.type==="cancelScheduledValues",ps=s=>Eh(s)||Ah(s)?s.cancelTime:Qr(s)||Jc(s)?s.endTime:s.startTime,rm=(s,e,t,{endTime:n,value:i})=>t===i?i:0<t&&0<i||t<0&&i<0?t*(i/t)**((s-e)/(n-e)):0,om=(s,e,t,{endTime:n,value:i})=>t+(s-e)/(n-e)*(i-t),VE=(s,e)=>{const t=Math.floor(e),n=Math.ceil(e);return t===n?s[t]:(1-(e-t))*s[t]+(1-(n-e))*s[n]},zE=(s,{duration:e,startTime:t,values:n})=>{const i=(s-t)/e*(n.length-1);return VE(n,i)},Sc=s=>s.type==="setTarget";class GE{constructor(e){this._automationEvents=[],this._currenTime=0,this._defaultValue=e}[Symbol.iterator](){return this._automationEvents[Symbol.iterator]()}add(e){const t=ps(e);if(Eh(e)||Ah(e)){const n=this._automationEvents.findIndex(r=>Ah(e)&&Xi(r)?r.startTime+r.duration>=t:ps(r)>=t),i=this._automationEvents[n];if(n!==-1&&(this._automationEvents=this._automationEvents.slice(0,n)),Eh(e)){const r=this._automationEvents[this._automationEvents.length-1];if(i!==void 0&&_s(i)){if(r!==void 0&&Sc(r))throw new Error("The internal list is malformed.");const o=r===void 0?i.insertTime:Xi(r)?r.startTime+r.duration:ps(r),a=r===void 0?this._defaultValue:Xi(r)?r.values[r.values.length-1]:r.value,c=Qr(i)?rm(t,o,a,i):om(t,o,a,i),l=Qr(i)?nm(c,t,this._currenTime):im(c,t,this._currenTime);this._automationEvents.push(l)}if(r!==void 0&&Sc(r)&&this._automationEvents.push(Th(this.getValue(t),t)),r!==void 0&&Xi(r)&&r.startTime+r.duration>t){const o=t-r.startTime,a=(r.values.length-1)/r.duration,c=Math.max(2,1+Math.ceil(o*a)),l=o/(c-1)*a,u=r.values.slice(0,c);if(l<1)for(let h=1;h<c;h+=1){const d=l*h%1;u[h]=r.values[h-1]*(1-d)+r.values[h]*d}this._automationEvents[this._automationEvents.length-1]=Jg(u,r.startTime,o)}}}else{const n=this._automationEvents.findIndex(o=>ps(o)>t),i=n===-1?this._automationEvents[this._automationEvents.length-1]:this._automationEvents[n-1];if(i!==void 0&&Xi(i)&&ps(i)+i.duration>t)return!1;const r=Qr(e)?nm(e.value,e.endTime,this._currenTime):Jc(e)?im(e.value,t,this._currenTime):e;if(n===-1)this._automationEvents.push(r);else{if(Xi(e)&&t+e.duration>ps(this._automationEvents[n]))return!1;this._automationEvents.splice(n,0,r)}}return!0}flush(e){const t=this._automationEvents.findIndex(n=>ps(n)>e);if(t>1){const n=this._automationEvents.slice(t-1),i=n[0];Sc(i)&&n.unshift(Th(el(this._automationEvents,t-2,i.startTime,this._defaultValue),i.startTime)),this._automationEvents=n}}getValue(e){if(this._automationEvents.length===0)return this._defaultValue;const t=this._automationEvents.findIndex(o=>ps(o)>e),n=this._automationEvents[t],i=(t===-1?this._automationEvents.length:t)-1,r=this._automationEvents[i];if(r!==void 0&&Sc(r)&&(n===void 0||!_s(n)||n.insertTime>e))return e_(e,el(this._automationEvents,i-1,r.startTime,this._defaultValue),r);if(r!==void 0&&hd(r)&&(n===void 0||!_s(n)))return r.value;if(r!==void 0&&Xi(r)&&(n===void 0||!_s(n)||r.startTime+r.duration>e))return e<r.startTime+r.duration?zE(e,r):r.values[r.values.length-1];if(r!==void 0&&_s(r)&&(n===void 0||!_s(n)))return r.value;if(n!==void 0&&Qr(n)){const[o,a]=sm(this._automationEvents,i,r,n,this._defaultValue);return rm(e,o,a,n)}if(n!==void 0&&Jc(n)){const[o,a]=sm(this._automationEvents,i,r,n,this._defaultValue);return om(e,o,a,n)}return this._defaultValue}}const HE=s=>({cancelTime:s,type:"cancelAndHold"}),WE=s=>({cancelTime:s,type:"cancelScheduledValues"}),XE=(s,e)=>({endTime:e,type:"exponentialRampToValue",value:s}),qE=(s,e)=>({endTime:e,type:"linearRampToValue",value:s}),jE=(s,e,t)=>({startTime:e,target:s,timeConstant:t,type:"setTarget"}),YE=()=>new DOMException("","AbortError"),$E=s=>(e,t,[n,i,r],o)=>{s(e[i],[t,n,r],a=>a[0]===t&&a[1]===n,o)},KE=s=>(e,t,n)=>{const i=[];for(let r=0;r<n.numberOfInputs;r+=1)i.push(new Set);s.set(e,{activeInputs:i,outputs:new Set,passiveInputs:new WeakMap,renderer:t})},ZE=s=>(e,t)=>{s.set(e,{activeInputs:new Set,passiveInputs:new WeakMap,renderer:t})},yo=new WeakSet,t_=new WeakMap,dd=new WeakMap,n_=new WeakMap,fd=new WeakMap,Vl=new WeakMap,i_=new WeakMap,wh=new WeakMap,Ch=new WeakMap,Rh=new WeakMap,s_={construct(){return s_}},QE=s=>{try{const e=new Proxy(s,s_);new e}catch{return!1}return!0},am=/^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,cm=(s,e)=>{const t=[];let n=s.replace(/^[\s]+/,""),i=n.match(am);for(;i!==null;){const r=i[1].slice(1,-1),o=i[0].replace(/([\s]+)?;?$/,"").replace(r,new URL(r,e).toString());t.push(o),n=n.slice(i[0].length).replace(/^[\s]+/,""),i=n.match(am)}return[t.join(";"),n]},lm=s=>{if(s!==void 0&&!Array.isArray(s))throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.")},um=s=>{if(!QE(s))throw new TypeError("The given value for processorCtor should be a constructor.");if(s.prototype===null||typeof s.prototype!="object")throw new TypeError("The given value for processorCtor should have a prototype.")},JE=(s,e,t,n,i,r,o,a,c,l,u,h,d)=>{let f=0;return(m,_,g={credentials:"omit"})=>{const p=u.get(m);if(p!==void 0&&p.has(_))return Promise.resolve();const x=l.get(m);if(x!==void 0){const y=x.get(_);if(y!==void 0)return y}const v=r(m),M=v.audioWorklet===void 0?i(_).then(([y,b])=>{const[E,T]=cm(y,b),S=`${E};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${T}
})})(window,'_AWGS')`;return t(S)}).then(()=>{const y=d._AWGS.pop();if(y===void 0)throw new SyntaxError;n(v.currentTime,v.sampleRate,()=>y(class{},void 0,(b,E)=>{if(b.trim()==="")throw e();const T=Ch.get(v);if(T!==void 0){if(T.has(b))throw e();um(E),lm(E.parameterDescriptors),T.set(b,E)}else um(E),lm(E.parameterDescriptors),Ch.set(v,new Map([[b,E]]))},v.sampleRate,void 0,void 0))}):Promise.all([i(_),Promise.resolve(s(h,h))]).then(([[y,b],E])=>{const T=f+1;f=T;const[S,A]=cm(y,b),C=`${S};((AudioWorkletProcessor,registerProcessor)=>{${A}
})(${E?"AudioWorkletProcessor":"class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"},(n,p)=>registerProcessor(n,class extends p{${E?"":"__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${E?"":"i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${T}',class extends AudioWorkletProcessor{process(){return !1}})`,D=new Blob([C],{type:"application/javascript; charset=utf-8"}),F=URL.createObjectURL(D);return v.audioWorklet.addModule(F,g).then(()=>{if(a(v))return v;const B=o(v);return B.audioWorklet.addModule(F,g).then(()=>B)}).then(B=>{if(c===null)throw new SyntaxError;try{new c(B,`__sac${T}`)}catch{throw new SyntaxError}}).finally(()=>URL.revokeObjectURL(F))});return x===void 0?l.set(m,new Map([[_,M]])):x.set(_,M),M.then(()=>{const y=u.get(m);y===void 0?u.set(m,new Set([_])):y.add(_)}).finally(()=>{const y=l.get(m);y!==void 0&&y.delete(_)}),M}},ai=(s,e)=>{const t=s.get(e);if(t===void 0)throw new Error("A value with the given key could not be found.");return t},zl=(s,e)=>{const t=Array.from(s).filter(e);if(t.length>1)throw Error("More than one element was found.");if(t.length===0)throw Error("No element was found.");const[n]=t;return s.delete(n),n},r_=(s,e,t,n)=>{const i=ai(s,e),r=zl(i,o=>o[0]===t&&o[1]===n);return i.size===0&&s.delete(e),r},La=s=>ai(i_,s),xo=s=>{if(yo.has(s))throw new Error("The AudioNode is already stored.");yo.add(s),La(s).forEach(e=>e(!0))},o_=s=>"port"in s,Oa=s=>{if(!yo.has(s))throw new Error("The AudioNode is not stored.");yo.delete(s),La(s).forEach(e=>e(!1))},Ih=(s,e)=>{!o_(s)&&e.every(t=>t.size===0)&&Oa(s)},eA=(s,e,t,n,i,r,o,a,c,l,u,h,d)=>{const f=new WeakMap;return(m,_,g,p,x)=>{const{activeInputs:v,passiveInputs:M}=r(_),{outputs:y}=r(m),b=a(m),E=T=>{const S=c(_),A=c(m);if(T){const N=r_(M,m,g,p);s(v,m,N,!1),!x&&!h(m)&&t(A,S,g,p),d(_)&&xo(_)}else{const N=n(v,m,g,p);e(M,p,N,!1),!x&&!h(m)&&i(A,S,g,p);const U=o(_);if(U===0)u(_)&&Ih(_,v);else{const z=f.get(_);z!==void 0&&clearTimeout(z),f.set(_,setTimeout(()=>{u(_)&&Ih(_,v)},U*1e3))}}};return l(y,[_,g,p],T=>T[0]===_&&T[1]===g&&T[2]===p,!0)?(b.add(E),u(m)?s(v,m,[g,p,E],!0):e(M,p,[m,g,E],!0),!0):!1}},tA=s=>(e,t,[n,i,r],o)=>{const a=e.get(n);a===void 0?e.set(n,new Set([[i,t,r]])):s(a,[i,t,r],c=>c[0]===i&&c[1]===t,o)},nA=s=>(e,t)=>{const n=s(e,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});t.connect(n).connect(e.destination);const i=()=>{t.removeEventListener("ended",i),t.disconnect(n),n.disconnect()};t.addEventListener("ended",i)},iA=s=>(e,t)=>{s(e).add(t)},sA={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",fftSize:2048,maxDecibels:-30,minDecibels:-100,smoothingTimeConstant:.8},rA=(s,e,t,n,i,r)=>class extends s{constructor(a,c){const l=i(a),u={...sA,...c},h=n(l,u),d=r(l)?e():null;super(a,!1,h,d),this._nativeAnalyserNode=h}get fftSize(){return this._nativeAnalyserNode.fftSize}set fftSize(a){this._nativeAnalyserNode.fftSize=a}get frequencyBinCount(){return this._nativeAnalyserNode.frequencyBinCount}get maxDecibels(){return this._nativeAnalyserNode.maxDecibels}set maxDecibels(a){const c=this._nativeAnalyserNode.maxDecibels;if(this._nativeAnalyserNode.maxDecibels=a,!(a>this._nativeAnalyserNode.minDecibels))throw this._nativeAnalyserNode.maxDecibels=c,t()}get minDecibels(){return this._nativeAnalyserNode.minDecibels}set minDecibels(a){const c=this._nativeAnalyserNode.minDecibels;if(this._nativeAnalyserNode.minDecibels=a,!(this._nativeAnalyserNode.maxDecibels>a))throw this._nativeAnalyserNode.minDecibels=c,t()}get smoothingTimeConstant(){return this._nativeAnalyserNode.smoothingTimeConstant}set smoothingTimeConstant(a){this._nativeAnalyserNode.smoothingTimeConstant=a}getByteFrequencyData(a){this._nativeAnalyserNode.getByteFrequencyData(a)}getByteTimeDomainData(a){this._nativeAnalyserNode.getByteTimeDomainData(a)}getFloatFrequencyData(a){this._nativeAnalyserNode.getFloatFrequencyData(a)}getFloatTimeDomainData(a){this._nativeAnalyserNode.getFloatTimeDomainData(a)}},tn=(s,e)=>s.context===e,oA=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,o)=>{let a=e(r);if(!tn(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,fftSize:a.fftSize,maxDecibels:a.maxDecibels,minDecibels:a.minDecibels,smoothingTimeConstant:a.smoothingTimeConstant};a=s(o,l)}return n.set(o,a),await t(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},tl=s=>{try{s.copyToChannel(new Float32Array(1),0,-1)}catch{return!1}return!0},Ai=()=>new DOMException("","IndexSizeError"),pd=s=>{s.getChannelData=(e=>t=>{try{return e.call(s,t)}catch(n){throw n.code===12?Ai():n}})(s.getChannelData)},aA={numberOfChannels:1},cA=(s,e,t,n,i,r,o,a)=>{let c=null;return class a_{constructor(u){if(i===null)throw new Error("Missing the native OfflineAudioContext constructor.");const{length:h,numberOfChannels:d,sampleRate:f}={...aA,...u};c===null&&(c=new i(1,1,44100));const m=n!==null&&e(r,r)?new n({length:h,numberOfChannels:d,sampleRate:f}):c.createBuffer(d,h,f);if(m.numberOfChannels===0)throw t();return typeof m.copyFromChannel!="function"?(o(m),pd(m)):e(tl,()=>tl(m))||a(m),s.add(m),m}static[Symbol.hasInstance](u){return u!==null&&typeof u=="object"&&Object.getPrototypeOf(u)===a_.prototype||s.has(u)}}},mn=-34028234663852886e22,ln=-mn,Qi=s=>yo.has(s),lA={buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1},uA=(s,e,t,n,i,r,o,a)=>class extends s{constructor(l,u){const h=r(l),d={...lA,...u},f=i(h,d),m=o(h),_=m?e():null;super(l,!1,f,_),this._audioBufferSourceNodeRenderer=_,this._isBufferNullified=!1,this._isBufferSet=d.buffer!==null,this._nativeAudioBufferSourceNode=f,this._onended=null,this._playbackRate=t(this,m,f.playbackRate,ln,mn)}get buffer(){return this._isBufferNullified?null:this._nativeAudioBufferSourceNode.buffer}set buffer(l){if(this._nativeAudioBufferSourceNode.buffer=l,l!==null){if(this._isBufferSet)throw n();this._isBufferSet=!0}}get loop(){return this._nativeAudioBufferSourceNode.loop}set loop(l){this._nativeAudioBufferSourceNode.loop=l}get loopEnd(){return this._nativeAudioBufferSourceNode.loopEnd}set loopEnd(l){this._nativeAudioBufferSourceNode.loopEnd=l}get loopStart(){return this._nativeAudioBufferSourceNode.loopStart}set loopStart(l){this._nativeAudioBufferSourceNode.loopStart=l}get onended(){return this._onended}set onended(l){const u=typeof l=="function"?a(this,l):null;this._nativeAudioBufferSourceNode.onended=u;const h=this._nativeAudioBufferSourceNode.onended;this._onended=h!==null&&h===u?l:h}get playbackRate(){return this._playbackRate}start(l=0,u=0,h){if(this._nativeAudioBufferSourceNode.start(l,u,h),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.start=h===void 0?[l,u]:[l,u,h]),this.context.state!=="closed"){xo(this);const d=()=>{this._nativeAudioBufferSourceNode.removeEventListener("ended",d),Qi(this)&&Oa(this)};this._nativeAudioBufferSourceNode.addEventListener("ended",d)}}stop(l=0){this._nativeAudioBufferSourceNode.stop(l),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.stop=l)}},hA=(s,e,t,n,i)=>()=>{const r=new WeakMap;let o=null,a=null;const c=async(l,u)=>{let h=t(l);const d=tn(h,u);if(!d){const f={buffer:h.buffer,channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,loop:h.loop,loopEnd:h.loopEnd,loopStart:h.loopStart,playbackRate:h.playbackRate.value};h=e(u,f),o!==null&&h.start(...o),a!==null&&h.stop(a)}return r.set(u,h),d?await s(u,l.playbackRate,h.playbackRate):await n(u,l.playbackRate,h.playbackRate),await i(l,u,h),h};return{set start(l){o=l},set stop(l){a=l},render(l,u){const h=r.get(u);return h!==void 0?Promise.resolve(h):c(l,u)}}},dA=s=>"playbackRate"in s,fA=s=>"frequency"in s&&"gain"in s,pA=s=>"offset"in s,mA=s=>!("frequency"in s)&&"gain"in s,gA=s=>"detune"in s&&"frequency"in s,_A=s=>"pan"in s,un=s=>ai(t_,s),Ua=s=>ai(n_,s),Dh=(s,e)=>{const{activeInputs:t}=un(s);t.forEach(i=>i.forEach(([r])=>{e.includes(s)||Dh(r,[...e,s])}));const n=dA(s)?[s.playbackRate]:o_(s)?Array.from(s.parameters.values()):fA(s)?[s.Q,s.detune,s.frequency,s.gain]:pA(s)?[s.offset]:mA(s)?[s.gain]:gA(s)?[s.detune,s.frequency]:_A(s)?[s.pan]:[];for(const i of n){const r=Ua(i);r!==void 0&&r.activeInputs.forEach(([o])=>Dh(o,e))}Qi(s)&&Oa(s)},c_=s=>{Dh(s.destination,[])},vA=s=>s===void 0||typeof s=="number"||typeof s=="string"&&(s==="balanced"||s==="interactive"||s==="playback"),yA=(s,e,t,n,i,r,o,a,c)=>class extends s{constructor(u={}){if(c===null)throw new Error("Missing the native AudioContext constructor.");let h;try{h=new c(u)}catch(m){throw m.code===12&&m.message==="sampleRate is not in range"?t():m}if(h===null)throw n();if(!vA(u.latencyHint))throw new TypeError(`The provided value '${u.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);if(u.sampleRate!==void 0&&h.sampleRate!==u.sampleRate)throw t();super(h,2);const{latencyHint:d}=u,{sampleRate:f}=h;if(this._baseLatency=typeof h.baseLatency=="number"?h.baseLatency:d==="balanced"?512/f:d==="interactive"||d===void 0?256/f:d==="playback"?1024/f:Math.max(2,Math.min(128,Math.round(d*f/128)))*128/f,this._nativeAudioContext=h,c.name==="webkitAudioContext"?(this._nativeGainNode=h.createGain(),this._nativeOscillatorNode=h.createOscillator(),this._nativeGainNode.gain.value=1e-37,this._nativeOscillatorNode.connect(this._nativeGainNode).connect(h.destination),this._nativeOscillatorNode.start()):(this._nativeGainNode=null,this._nativeOscillatorNode=null),this._state=null,h.state==="running"){this._state="suspended";const m=()=>{this._state==="suspended"&&(this._state=null),h.removeEventListener("statechange",m)};h.addEventListener("statechange",m)}}get baseLatency(){return this._baseLatency}get state(){return this._state!==null?this._state:this._nativeAudioContext.state}close(){return this.state==="closed"?this._nativeAudioContext.close().then(()=>{throw e()}):(this._state==="suspended"&&(this._state=null),this._nativeAudioContext.close().then(()=>{this._nativeGainNode!==null&&this._nativeOscillatorNode!==null&&(this._nativeOscillatorNode.stop(),this._nativeGainNode.disconnect(),this._nativeOscillatorNode.disconnect()),c_(this)}))}createMediaElementSource(u){return new i(this,{mediaElement:u})}createMediaStreamDestination(){return new r(this)}createMediaStreamSource(u){return new o(this,{mediaStream:u})}createMediaStreamTrackSource(u){return new a(this,{mediaStreamTrack:u})}resume(){return this._state==="suspended"?new Promise((u,h)=>{const d=()=>{this._nativeAudioContext.removeEventListener("statechange",d),this._nativeAudioContext.state==="running"?u():this.resume().then(u,h)};this._nativeAudioContext.addEventListener("statechange",d)}):this._nativeAudioContext.resume().catch(u=>{throw u===void 0||u.code===15?e():u})}suspend(){return this._nativeAudioContext.suspend().catch(u=>{throw u===void 0?e():u})}},xA=(s,e,t,n,i,r,o,a)=>class extends s{constructor(l,u){const h=r(l),d=o(h),f=i(h,u,d),m=d?e(a):null;super(l,!1,f,m),this._isNodeOfNativeOfflineAudioContext=d,this._nativeAudioDestinationNode=f}get channelCount(){return this._nativeAudioDestinationNode.channelCount}set channelCount(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();if(l>this._nativeAudioDestinationNode.maxChannelCount)throw t();this._nativeAudioDestinationNode.channelCount=l}get channelCountMode(){return this._nativeAudioDestinationNode.channelCountMode}set channelCountMode(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();this._nativeAudioDestinationNode.channelCountMode=l}get maxChannelCount(){return this._nativeAudioDestinationNode.maxChannelCount}},SA=s=>{const e=new WeakMap,t=async(n,i)=>{const r=i.destination;return e.set(i,r),await s(n,i,r),r};return{render(n,i){const r=e.get(i);return r!==void 0?Promise.resolve(r):t(n,i)}}},MA=(s,e,t,n,i,r,o,a)=>(c,l)=>{const u=l.listener,h=()=>{const y=new Float32Array(1),b=e(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:9}),E=o(l);let T=!1,S=[0,0,-1,0,1,0],A=[0,0,0];const N=()=>{if(T)return;T=!0;const D=n(l,256,9,0);D.onaudioprocess=({inputBuffer:F})=>{const B=[r(F,y,0),r(F,y,1),r(F,y,2),r(F,y,3),r(F,y,4),r(F,y,5)];B.some((V,j)=>V!==S[j])&&(u.setOrientation(...B),S=B);const Y=[r(F,y,6),r(F,y,7),r(F,y,8)];Y.some((V,j)=>V!==A[j])&&(u.setPosition(...Y),A=Y)},b.connect(D)},U=D=>F=>{F!==S[D]&&(S[D]=F,u.setOrientation(...S))},z=D=>F=>{F!==A[D]&&(A[D]=F,u.setPosition(...A))},C=(D,F,B)=>{const Y=t(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:F});Y.connect(b,0,D),Y.start(),Object.defineProperty(Y.offset,"defaultValue",{get(){return F}});const V=s({context:c},E,Y.offset,ln,mn);return a(V,"value",j=>()=>j.call(V),j=>O=>{try{j.call(V,O)}catch(X){if(X.code!==9)throw X}N(),E&&B(O)}),V.cancelAndHoldAtTime=(j=>E?()=>{throw i()}:(...O)=>{const X=j.apply(V,O);return N(),X})(V.cancelAndHoldAtTime),V.cancelScheduledValues=(j=>E?()=>{throw i()}:(...O)=>{const X=j.apply(V,O);return N(),X})(V.cancelScheduledValues),V.exponentialRampToValueAtTime=(j=>E?()=>{throw i()}:(...O)=>{const X=j.apply(V,O);return N(),X})(V.exponentialRampToValueAtTime),V.linearRampToValueAtTime=(j=>E?()=>{throw i()}:(...O)=>{const X=j.apply(V,O);return N(),X})(V.linearRampToValueAtTime),V.setTargetAtTime=(j=>E?()=>{throw i()}:(...O)=>{const X=j.apply(V,O);return N(),X})(V.setTargetAtTime),V.setValueAtTime=(j=>E?()=>{throw i()}:(...O)=>{const X=j.apply(V,O);return N(),X})(V.setValueAtTime),V.setValueCurveAtTime=(j=>E?()=>{throw i()}:(...O)=>{const X=j.apply(V,O);return N(),X})(V.setValueCurveAtTime),V};return{forwardX:C(0,0,U(0)),forwardY:C(1,0,U(1)),forwardZ:C(2,-1,U(2)),positionX:C(6,0,z(0)),positionY:C(7,0,z(1)),positionZ:C(8,0,z(2)),upX:C(3,0,U(3)),upY:C(4,1,U(4)),upZ:C(5,0,U(5))}},{forwardX:d,forwardY:f,forwardZ:m,positionX:_,positionY:g,positionZ:p,upX:x,upY:v,upZ:M}=u.forwardX===void 0?h():u;return{get forwardX(){return d},get forwardY(){return f},get forwardZ(){return m},get positionX(){return _},get positionY(){return g},get positionZ(){return p},get upX(){return x},get upY(){return v},get upZ(){return M}}},nl=s=>"context"in s,Fa=s=>nl(s[0]),vr=(s,e,t,n)=>{for(const i of s)if(t(i)){if(n)return!1;throw Error("The set contains at least one similar element.")}return s.add(e),!0},hm=(s,e,[t,n],i)=>{vr(s,[e,t,n],r=>r[0]===e&&r[1]===t,i)},dm=(s,[e,t,n],i)=>{const r=s.get(e);r===void 0?s.set(e,new Set([[t,n]])):vr(r,[t,n],o=>o[0]===t,i)},No=s=>"inputs"in s,il=(s,e,t,n)=>{if(No(e)){const i=e.inputs[n];return s.connect(i,t,0),[i,t,0]}return s.connect(e,t,n),[e,t,n]},l_=(s,e,t)=>{for(const n of s)if(n[0]===e&&n[1]===t)return s.delete(n),n;return null},bA=(s,e,t)=>zl(s,n=>n[0]===e&&n[1]===t),u_=(s,e)=>{if(!La(s).delete(e))throw new Error("Missing the expected event listener.")},h_=(s,e,t)=>{const n=ai(s,e),i=zl(n,r=>r[0]===t);return n.size===0&&s.delete(e),i},sl=(s,e,t,n)=>{No(e)?s.disconnect(e.inputs[n],t,0):s.disconnect(e,t,n)},gt=s=>ai(dd,s),ua=s=>ai(fd,s),fr=s=>wh.has(s),zc=s=>!yo.has(s),fm=(s,e)=>new Promise(t=>{if(e!==null)t(!0);else{const n=s.createScriptProcessor(256,1,1),i=s.createGain(),r=s.createBuffer(1,2,44100),o=r.getChannelData(0);o[0]=1,o[1]=1;const a=s.createBufferSource();a.buffer=r,a.loop=!0,a.connect(n).connect(s.destination),a.connect(i),a.disconnect(i),n.onaudioprocess=c=>{const l=c.inputBuffer.getChannelData(0);Array.prototype.some.call(l,u=>u===1)?t(!0):t(!1),a.stop(),n.onaudioprocess=null,a.disconnect(n),n.disconnect(s.destination)},a.start()}}),Vu=(s,e)=>{const t=new Map;for(const n of s)for(const i of n){const r=t.get(i);t.set(i,r===void 0?1:r+1)}t.forEach((n,i)=>e(i,n))},rl=s=>"context"in s,TA=s=>{const e=new Map;s.connect=(t=>(n,i=0,r=0)=>{const o=rl(n)?t(n,i,r):t(n,i),a=e.get(n);return a===void 0?e.set(n,[{input:r,output:i}]):a.every(c=>c.input!==r||c.output!==i)&&a.push({input:r,output:i}),o})(s.connect.bind(s)),s.disconnect=(t=>(n,i,r)=>{if(t.apply(s),n===void 0)e.clear();else if(typeof n=="number")for(const[o,a]of e){const c=a.filter(l=>l.output!==n);c.length===0?e.delete(o):e.set(o,c)}else if(e.has(n))if(i===void 0)e.delete(n);else{const o=e.get(n);if(o!==void 0){const a=o.filter(c=>c.output!==i&&(c.input!==r||r===void 0));a.length===0?e.delete(n):e.set(n,a)}}for(const[o,a]of e)a.forEach(c=>{rl(o)?s.connect(o,c.output,c.input):s.connect(o,c.output)})})(s.disconnect)},EA=(s,e,t,n)=>{const{activeInputs:i,passiveInputs:r}=Ua(e),{outputs:o}=un(s),a=La(s),c=l=>{const u=gt(s),h=ua(e);if(l){const d=h_(r,s,t);hm(i,s,d,!1),!n&&!fr(s)&&u.connect(h,t)}else{const d=bA(i,s,t);dm(r,d,!1),!n&&!fr(s)&&u.disconnect(h,t)}};return vr(o,[e,t],l=>l[0]===e&&l[1]===t,!0)?(a.add(c),Qi(s)?hm(i,s,[t,c],!0):dm(r,[s,t,c],!0),!0):!1},AA=(s,e,t,n)=>{const{activeInputs:i,passiveInputs:r}=un(e),o=l_(i[n],s,t);return o===null?[r_(r,s,t,n)[2],!1]:[o[2],!0]},wA=(s,e,t)=>{const{activeInputs:n,passiveInputs:i}=Ua(e),r=l_(n,s,t);return r===null?[h_(i,s,t)[1],!1]:[r[2],!0]},md=(s,e,t,n,i)=>{const[r,o]=AA(s,t,n,i);if(r!==null&&(u_(s,r),o&&!e&&!fr(s)&&sl(gt(s),gt(t),n,i)),Qi(t)){const{activeInputs:a}=un(t);Ih(t,a)}},gd=(s,e,t,n)=>{const[i,r]=wA(s,t,n);i!==null&&(u_(s,i),r&&!e&&!fr(s)&&gt(s).disconnect(ua(t),n))},CA=(s,e)=>{const t=un(s),n=[];for(const i of t.outputs)Fa(i)?md(s,e,...i):gd(s,e,...i),n.push(i[0]);return t.outputs.clear(),n},RA=(s,e,t)=>{const n=un(s),i=[];for(const r of n.outputs)r[1]===t&&(Fa(r)?md(s,e,...r):gd(s,e,...r),i.push(r[0]),n.outputs.delete(r));return i},IA=(s,e,t,n,i)=>{const r=un(s);return Array.from(r.outputs).filter(o=>o[0]===t&&(n===void 0||o[1]===n)&&(i===void 0||o[2]===i)).map(o=>(Fa(o)?md(s,e,...o):gd(s,e,...o),r.outputs.delete(o),o[0]))},DA=(s,e,t,n,i,r,o,a,c,l,u,h,d,f,m,_)=>class extends l{constructor(p,x,v,M){super(v),this._context=p,this._nativeAudioNode=v;const y=u(p);h(y)&&t(fm,()=>fm(y,_))!==!0&&TA(v),dd.set(this,v),i_.set(this,new Set),p.state!=="closed"&&x&&xo(this),s(this,M,v)}get channelCount(){return this._nativeAudioNode.channelCount}set channelCount(p){this._nativeAudioNode.channelCount=p}get channelCountMode(){return this._nativeAudioNode.channelCountMode}set channelCountMode(p){this._nativeAudioNode.channelCountMode=p}get channelInterpretation(){return this._nativeAudioNode.channelInterpretation}set channelInterpretation(p){this._nativeAudioNode.channelInterpretation=p}get context(){return this._context}get numberOfInputs(){return this._nativeAudioNode.numberOfInputs}get numberOfOutputs(){return this._nativeAudioNode.numberOfOutputs}connect(p,x=0,v=0){if(x<0||x>=this._nativeAudioNode.numberOfOutputs)throw i();const M=u(this._context),y=m(M);if(d(p)||f(p))throw r();if(nl(p)){const T=gt(p);try{const A=il(this._nativeAudioNode,T,x,v),N=zc(this);(y||N)&&this._nativeAudioNode.disconnect(...A),this.context.state!=="closed"&&!N&&zc(p)&&xo(p)}catch(A){throw A.code===12?r():A}if(e(this,p,x,v,y)){const A=c([this],p);Vu(A,n(y))}return p}const b=ua(p);if(b.name==="playbackRate"&&b.maxValue===1024)throw o();try{this._nativeAudioNode.connect(b,x),(y||zc(this))&&this._nativeAudioNode.disconnect(b,x)}catch(T){throw T.code===12?r():T}if(EA(this,p,x,y)){const T=c([this],p);Vu(T,n(y))}}disconnect(p,x,v){let M;const y=u(this._context),b=m(y);if(p===void 0)M=CA(this,b);else if(typeof p=="number"){if(p<0||p>=this.numberOfOutputs)throw i();M=RA(this,b,p)}else{if(x!==void 0&&(x<0||x>=this.numberOfOutputs)||nl(p)&&v!==void 0&&(v<0||v>=p.numberOfInputs))throw i();if(M=IA(this,b,p,x,v),M.length===0)throw r()}for(const E of M){const T=c([this],E);Vu(T,a)}}},PA=(s,e,t,n,i,r,o,a,c,l,u,h,d)=>(f,m,_,g=null,p=null)=>{const x=_.value,v=new GE(x),M=m?n(v):null,y={get defaultValue(){return x},get maxValue(){return g===null?_.maxValue:g},get minValue(){return p===null?_.minValue:p},get value(){return _.value},set value(b){_.value=b,y.setValueAtTime(b,f.context.currentTime)},cancelAndHoldAtTime(b){if(typeof _.cancelAndHoldAtTime=="function")M===null&&v.flush(f.context.currentTime),v.add(i(b)),_.cancelAndHoldAtTime(b);else{const E=Array.from(v).pop();M===null&&v.flush(f.context.currentTime),v.add(i(b));const T=Array.from(v).pop();_.cancelScheduledValues(b),E!==T&&T!==void 0&&(T.type==="exponentialRampToValue"?_.exponentialRampToValueAtTime(T.value,T.endTime):T.type==="linearRampToValue"?_.linearRampToValueAtTime(T.value,T.endTime):T.type==="setValue"?_.setValueAtTime(T.value,T.startTime):T.type==="setValueCurve"&&_.setValueCurveAtTime(T.values,T.startTime,T.duration))}return y},cancelScheduledValues(b){return M===null&&v.flush(f.context.currentTime),v.add(r(b)),_.cancelScheduledValues(b),y},exponentialRampToValueAtTime(b,E){if(b===0)throw new RangeError;if(!Number.isFinite(E)||E<0)throw new RangeError;const T=f.context.currentTime;return M===null&&v.flush(T),Array.from(v).length===0&&(v.add(l(x,T)),_.setValueAtTime(x,T)),v.add(o(b,E)),_.exponentialRampToValueAtTime(b,E),y},linearRampToValueAtTime(b,E){const T=f.context.currentTime;return M===null&&v.flush(T),Array.from(v).length===0&&(v.add(l(x,T)),_.setValueAtTime(x,T)),v.add(a(b,E)),_.linearRampToValueAtTime(b,E),y},setTargetAtTime(b,E,T){return M===null&&v.flush(f.context.currentTime),v.add(c(b,E,T)),_.setTargetAtTime(b,E,T),y},setValueAtTime(b,E){return M===null&&v.flush(f.context.currentTime),v.add(l(b,E)),_.setValueAtTime(b,E),y},setValueCurveAtTime(b,E,T){const S=b instanceof Float32Array?b:new Float32Array(b);if(h!==null&&h.name==="webkitAudioContext"){const A=E+T,N=f.context.sampleRate,U=Math.ceil(E*N),z=Math.floor(A*N),C=z-U,D=new Float32Array(C);for(let B=0;B<C;B+=1){const Y=(S.length-1)/T*((U+B)/N-E),V=Math.floor(Y),j=Math.ceil(Y);D[B]=V===j?S[V]:(1-(Y-V))*S[V]+(1-(j-Y))*S[j]}M===null&&v.flush(f.context.currentTime),v.add(u(D,E,T)),_.setValueCurveAtTime(D,E,T);const F=z/N;F<A&&d(y,D[D.length-1],F),d(y,S[S.length-1],A)}else M===null&&v.flush(f.context.currentTime),v.add(u(S,E,T)),_.setValueCurveAtTime(S,E,T);return y}};return t.set(y,_),e.set(y,f),s(y,M),y},NA=s=>({replay(e){for(const t of s)if(t.type==="exponentialRampToValue"){const{endTime:n,value:i}=t;e.exponentialRampToValueAtTime(i,n)}else if(t.type==="linearRampToValue"){const{endTime:n,value:i}=t;e.linearRampToValueAtTime(i,n)}else if(t.type==="setTarget"){const{startTime:n,target:i,timeConstant:r}=t;e.setTargetAtTime(i,n,r)}else if(t.type==="setValue"){const{startTime:n,value:i}=t;e.setValueAtTime(i,n)}else if(t.type==="setValueCurve"){const{duration:n,startTime:i,values:r}=t;e.setValueCurveAtTime(r,i,n)}else throw new Error("Can't apply an unknown automation.")}});class d_{constructor(e){this._map=new Map(e)}get size(){return this._map.size}entries(){return this._map.entries()}forEach(e,t=null){return this._map.forEach((n,i)=>e.call(t,n,i,this))}get(e){return this._map.get(e)}has(e){return this._map.has(e)}keys(){return this._map.keys()}values(){return this._map.values()}}const LA={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:1,numberOfOutputs:1,parameterData:{},processorOptions:{}},OA=(s,e,t,n,i,r,o,a,c,l,u,h,d,f)=>class extends e{constructor(_,g,p){var x;const v=a(_),M=c(v),y=u({...LA,...p});d(y);const b=Ch.get(v),E=b?.get(g),T=M||v.state!=="closed"?v:(x=o(v))!==null&&x!==void 0?x:v,S=i(T,M?null:_.baseLatency,l,g,E,y),A=M?n(g,y,E):null;super(_,!0,S,A);const N=[];S.parameters.forEach((z,C)=>{const D=t(this,M,z);N.push([C,D])}),this._nativeAudioWorkletNode=S,this._onprocessorerror=null,this._parameters=new d_(N),M&&s(v,this);const{activeInputs:U}=r(this);h(S,U)}get onprocessorerror(){return this._onprocessorerror}set onprocessorerror(_){const g=typeof _=="function"?f(this,_):null;this._nativeAudioWorkletNode.onprocessorerror=g;const p=this._nativeAudioWorkletNode.onprocessorerror;this._onprocessorerror=p!==null&&p===g?_:p}get parameters(){return this._parameters===null?this._nativeAudioWorkletNode.parameters:this._parameters}get port(){return this._nativeAudioWorkletNode.port}};function ol(s,e,t,n,i){if(typeof s.copyFromChannel=="function")e[t].byteLength===0&&(e[t]=new Float32Array(128)),s.copyFromChannel(e[t],n,i);else{const r=s.getChannelData(n);if(e[t].byteLength===0)e[t]=r.slice(i,i+128);else{const o=new Float32Array(r.buffer,i*Float32Array.BYTES_PER_ELEMENT,128);e[t].set(o)}}}const f_=(s,e,t,n,i)=>{typeof s.copyToChannel=="function"?e[t].byteLength!==0&&s.copyToChannel(e[t],n,i):e[t].byteLength!==0&&s.getChannelData(n).set(e[t],i)},al=(s,e)=>{const t=[];for(let n=0;n<s;n+=1){const i=[],r=typeof e=="number"?e:e[n];for(let o=0;o<r;o+=1)i.push(new Float32Array(128));t.push(i)}return t},UA=(s,e)=>{const t=ai(Rh,s),n=gt(e);return ai(t,n)},FA=async(s,e,t,n,i,r,o)=>{const a=e===null?Math.ceil(s.context.length/128)*128:e.length,c=n.channelCount*n.numberOfInputs,l=i.reduce((g,p)=>g+p,0),u=l===0?null:t.createBuffer(l,a,t.sampleRate);if(r===void 0)throw new Error("Missing the processor constructor.");const h=un(s),d=await UA(t,s),f=al(n.numberOfInputs,n.channelCount),m=al(n.numberOfOutputs,i),_=Array.from(s.parameters.keys()).reduce((g,p)=>({...g,[p]:new Float32Array(128)}),{});for(let g=0;g<a;g+=128){if(n.numberOfInputs>0&&e!==null)for(let p=0;p<n.numberOfInputs;p+=1)for(let x=0;x<n.channelCount;x+=1)ol(e,f[p],x,x,g);r.parameterDescriptors!==void 0&&e!==null&&r.parameterDescriptors.forEach(({name:p},x)=>{ol(e,_,p,c+x,g)});for(let p=0;p<n.numberOfInputs;p+=1)for(let x=0;x<i[p];x+=1)m[p][x].byteLength===0&&(m[p][x]=new Float32Array(128));try{const p=f.map((v,M)=>h.activeInputs[M].size===0?[]:v),x=o(g/t.sampleRate,t.sampleRate,()=>d.process(p,m,_));if(u!==null)for(let v=0,M=0;v<n.numberOfOutputs;v+=1){for(let y=0;y<i[v];y+=1)f_(u,m[v],y,M+y,g);M+=i[v]}if(!x)break}catch(p){s.dispatchEvent(new ErrorEvent("processorerror",{colno:p.colno,filename:p.filename,lineno:p.lineno,message:p.message}));break}}return u},kA=(s,e,t,n,i,r,o,a,c,l,u,h,d,f,m,_)=>(g,p,x)=>{const v=new WeakMap;let M=null;const y=async(b,E)=>{let T=u(b),S=null;const A=tn(T,E),N=Array.isArray(p.outputChannelCount)?p.outputChannelCount:Array.from(p.outputChannelCount);if(h===null){const U=N.reduce((F,B)=>F+B,0),z=i(E,{channelCount:Math.max(1,U),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,U)}),C=[];for(let F=0;F<b.numberOfOutputs;F+=1)C.push(n(E,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:N[F]}));const D=o(E,{channelCount:p.channelCount,channelCountMode:p.channelCountMode,channelInterpretation:p.channelInterpretation,gain:1});D.connect=e.bind(null,C),D.disconnect=c.bind(null,C),S=[z,C,D]}else A||(T=new h(E,g));if(v.set(E,S===null?T:S[2]),S!==null){if(M===null){if(x===void 0)throw new Error("Missing the processor constructor.");if(d===null)throw new Error("Missing the native OfflineAudioContext constructor.");const B=b.channelCount*b.numberOfInputs,Y=x.parameterDescriptors===void 0?0:x.parameterDescriptors.length,V=B+Y;M=FA(b,V===0?null:await(async()=>{const O=new d(V,Math.ceil(b.context.length/128)*128,E.sampleRate),X=[],ie=[];for(let oe=0;oe<p.numberOfInputs;oe+=1)X.push(o(O,{channelCount:p.channelCount,channelCountMode:p.channelCountMode,channelInterpretation:p.channelInterpretation,gain:1})),ie.push(i(O,{channelCount:p.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:p.channelCount}));const ce=await Promise.all(Array.from(b.parameters.values()).map(async oe=>{const ye=r(O,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:oe.value});return await f(O,oe,ye.offset),ye})),k=n(O,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,B+Y)});for(let oe=0;oe<p.numberOfInputs;oe+=1){X[oe].connect(ie[oe]);for(let ye=0;ye<p.channelCount;ye+=1)ie[oe].connect(k,ye,oe*p.channelCount+ye)}for(const[oe,ye]of ce.entries())ye.connect(k,0,B+oe),ye.start(0);return k.connect(O.destination),await Promise.all(X.map(oe=>m(b,O,oe))),_(O)})(),E,p,N,x,l)}const U=await M,z=t(E,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),[C,D,F]=S;U!==null&&(z.buffer=U,z.start(0)),z.connect(C);for(let B=0,Y=0;B<b.numberOfOutputs;B+=1){const V=D[B];for(let j=0;j<N[B];j+=1)C.connect(V,Y+j,j);Y+=N[B]}return F}if(A)for(const[U,z]of b.parameters.entries())await s(E,z,T.parameters.get(U));else for(const[U,z]of b.parameters.entries())await f(E,z,T.parameters.get(U));return await m(b,E,T),T};return{render(b,E){a(E,b);const T=v.get(E);return T!==void 0?Promise.resolve(T):y(b,E)}}},BA=(s,e,t,n,i,r,o,a,c,l,u,h,d,f,m,_,g,p,x,v)=>class extends m{constructor(y,b){super(y,b),this._nativeContext=y,this._audioWorklet=s===void 0?void 0:{addModule:(E,T)=>s(this,E,T)}}get audioWorklet(){return this._audioWorklet}createAnalyser(){return new e(this)}createBiquadFilter(){return new i(this)}createBuffer(y,b,E){return new t({length:b,numberOfChannels:y,sampleRate:E})}createBufferSource(){return new n(this)}createChannelMerger(y=6){return new r(this,{numberOfInputs:y})}createChannelSplitter(y=6){return new o(this,{numberOfOutputs:y})}createConstantSource(){return new a(this)}createConvolver(){return new c(this)}createDelay(y=1){return new u(this,{maxDelayTime:y})}createDynamicsCompressor(){return new h(this)}createGain(){return new d(this)}createIIRFilter(y,b){return new f(this,{feedback:b,feedforward:y})}createOscillator(){return new _(this)}createPanner(){return new g(this)}createPeriodicWave(y,b,E={disableNormalization:!1}){return new p(this,{...E,imag:b,real:y})}createStereoPanner(){return new x(this)}createWaveShaper(){return new v(this)}decodeAudioData(y,b,E){return l(this._nativeContext,y).then(T=>(typeof b=="function"&&b(T),T),T=>{throw typeof E=="function"&&E(T),T})}},VA={Q:1,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:350,gain:0,type:"lowpass"},zA=(s,e,t,n,i,r,o,a)=>class extends s{constructor(l,u){const h=r(l),d={...VA,...u},f=i(h,d),m=o(h),_=m?t():null;super(l,!1,f,_),this._Q=e(this,m,f.Q,ln,mn),this._detune=e(this,m,f.detune,1200*Math.log2(ln),-1200*Math.log2(ln)),this._frequency=e(this,m,f.frequency,l.sampleRate/2,0),this._gain=e(this,m,f.gain,40*Math.log10(ln),mn),this._nativeBiquadFilterNode=f,a(this,1)}get detune(){return this._detune}get frequency(){return this._frequency}get gain(){return this._gain}get Q(){return this._Q}get type(){return this._nativeBiquadFilterNode.type}set type(l){this._nativeBiquadFilterNode.type=l}getFrequencyResponse(l,u,h){try{this._nativeBiquadFilterNode.getFrequencyResponse(l,u,h)}catch(d){throw d.code===11?n():d}if(l.length!==u.length||u.length!==h.length)throw n()}},GA=(s,e,t,n,i)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=t(a);const u=tn(l,c);if(!u){const h={Q:l.Q.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,detune:l.detune.value,frequency:l.frequency.value,gain:l.gain.value,type:l.type};l=e(c,h)}return r.set(c,l),u?(await s(c,a.Q,l.Q),await s(c,a.detune,l.detune),await s(c,a.frequency,l.frequency),await s(c,a.gain,l.gain)):(await n(c,a.Q,l.Q),await n(c,a.detune,l.detune),await n(c,a.frequency,l.frequency),await n(c,a.gain,l.gain)),await i(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},HA=(s,e)=>(t,n)=>{const i=e.get(t);if(i!==void 0)return i;const r=s.get(t);if(r!==void 0)return r;try{const o=n();return o instanceof Promise?(s.set(t,o),o.catch(()=>!1).then(a=>(s.delete(t),e.set(t,a),a))):(e.set(t,o),o)}catch{return e.set(t,!1),!1}},WA={channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6},XA=(s,e,t,n,i)=>class extends s{constructor(o,a){const c=n(o),l={...WA,...a},u=t(c,l),h=i(c)?e():null;super(o,!1,u,h)}},qA=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,o)=>{let a=e(r);if(!tn(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,numberOfInputs:a.numberOfInputs};a=s(o,l)}return n.set(o,a),await t(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},jA={channelCount:6,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:6},YA=(s,e,t,n,i,r)=>class extends s{constructor(a,c){const l=n(a),u=r({...jA,...c}),h=t(l,u),d=i(l)?e():null;super(a,!1,h,d)}},$A=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,o)=>{let a=e(r);if(!tn(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,numberOfOutputs:a.numberOfOutputs};a=s(o,l)}return n.set(o,a),await t(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},KA=s=>(e,t,n)=>s(t,e,n),ZA=s=>(e,t,n=0,i=0)=>{const r=e[n];if(r===void 0)throw s();return rl(t)?r.connect(t,0,i):r.connect(t,0)},QA=s=>(e,t)=>{const n=s(e,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),i=e.createBuffer(1,2,44100);return n.buffer=i,n.loop=!0,n.connect(t),n.start(),()=>{n.stop(),n.disconnect(t)}},JA={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",offset:1},ew=(s,e,t,n,i,r,o)=>class extends s{constructor(c,l){const u=i(c),h={...JA,...l},d=n(u,h),f=r(u),m=f?t():null;super(c,!1,d,m),this._constantSourceNodeRenderer=m,this._nativeConstantSourceNode=d,this._offset=e(this,f,d.offset,ln,mn),this._onended=null}get offset(){return this._offset}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?o(this,c):null;this._nativeConstantSourceNode.onended=l;const u=this._nativeConstantSourceNode.onended;this._onended=u!==null&&u===l?c:u}start(c=0){if(this._nativeConstantSourceNode.start(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.start=c),this.context.state!=="closed"){xo(this);const l=()=>{this._nativeConstantSourceNode.removeEventListener("ended",l),Qi(this)&&Oa(this)};this._nativeConstantSourceNode.addEventListener("ended",l)}}stop(c=0){this._nativeConstantSourceNode.stop(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.stop=c)}},tw=(s,e,t,n,i)=>()=>{const r=new WeakMap;let o=null,a=null;const c=async(l,u)=>{let h=t(l);const d=tn(h,u);if(!d){const f={channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,offset:h.offset.value};h=e(u,f),o!==null&&h.start(o),a!==null&&h.stop(a)}return r.set(u,h),d?await s(u,l.offset,h.offset):await n(u,l.offset,h.offset),await i(l,u,h),h};return{set start(l){o=l},set stop(l){a=l},render(l,u){const h=r.get(u);return h!==void 0?Promise.resolve(h):c(l,u)}}},nw=s=>e=>(s[0]=e,s[0]),iw={buffer:null,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",disableNormalization:!1},sw=(s,e,t,n,i,r)=>class extends s{constructor(a,c){const l=n(a),u={...iw,...c},h=t(l,u),f=i(l)?e():null;super(a,!1,h,f),this._isBufferNullified=!1,this._nativeConvolverNode=h,u.buffer!==null&&r(this,u.buffer.duration)}get buffer(){return this._isBufferNullified?null:this._nativeConvolverNode.buffer}set buffer(a){if(this._nativeConvolverNode.buffer=a,a===null&&this._nativeConvolverNode.buffer!==null){const c=this._nativeConvolverNode.context;this._nativeConvolverNode.buffer=c.createBuffer(1,1,c.sampleRate),this._isBufferNullified=!0,r(this,0)}else this._isBufferNullified=!1,r(this,this._nativeConvolverNode.buffer===null?0:this._nativeConvolverNode.buffer.duration)}get normalize(){return this._nativeConvolverNode.normalize}set normalize(a){this._nativeConvolverNode.normalize=a}},rw=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,o)=>{let a=e(r);if(!tn(a,o)){const l={buffer:a.buffer,channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,disableNormalization:!a.normalize};a=s(o,l)}return n.set(o,a),No(a)?await t(r,o,a.inputs[0]):await t(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},ow=(s,e)=>(t,n,i)=>{if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");try{return new e(t,n,i)}catch(r){throw r.name==="SyntaxError"?s():r}},aw=()=>new DOMException("","DataCloneError"),pm=s=>{const{port1:e,port2:t}=new MessageChannel;return new Promise(n=>{const i=()=>{t.onmessage=null,e.close(),t.close(),n()};t.onmessage=()=>i();try{e.postMessage(s,[s])}catch{}finally{i()}})},cw=(s,e,t,n,i,r,o,a,c,l,u)=>(h,d)=>{const f=o(h)?h:r(h);if(i.has(d)){const m=t();return Promise.reject(m)}try{i.add(d)}catch{}return e(c,()=>c(f))?f.decodeAudioData(d).then(m=>(pm(d).catch(()=>{}),e(a,()=>a(m))||u(m),s.add(m),m)):new Promise((m,_)=>{const g=async()=>{try{await pm(d)}catch{}},p=x=>{_(x),g()};try{f.decodeAudioData(d,x=>{typeof x.copyFromChannel!="function"&&(l(x),pd(x)),s.add(x),g().then(()=>m(x))},x=>{p(x===null?n():x)})}catch(x){p(x)}})},lw=(s,e,t,n,i,r,o,a)=>(c,l)=>{const u=e.get(c);if(u===void 0)throw new Error("Missing the expected cycle count.");const h=r(c.context),d=a(h);if(u===l){if(e.delete(c),!d&&o(c)){const f=n(c),{outputs:m}=t(c);for(const _ of m)if(Fa(_)){const g=n(_[0]);s(f,g,_[1],_[2])}else{const g=i(_[0]);f.connect(g,_[1])}}}else e.set(c,u-l)},uw={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",delayTime:0,maxDelayTime:1},hw=(s,e,t,n,i,r,o)=>class extends s{constructor(c,l){const u=i(c),h={...uw,...l},d=n(u,h),f=r(u),m=f?t(h.maxDelayTime):null;super(c,!1,d,m),this._delayTime=e(this,f,d.delayTime),o(this,h.maxDelayTime)}get delayTime(){return this._delayTime}},dw=(s,e,t,n,i)=>r=>{const o=new WeakMap,a=async(c,l)=>{let u=t(c);const h=tn(u,l);if(!h){const d={channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,delayTime:u.delayTime.value,maxDelayTime:r};u=e(l,d)}return o.set(l,u),h?await s(l,c.delayTime,u.delayTime):await n(l,c.delayTime,u.delayTime),await i(c,l,u),u};return{render(c,l){const u=o.get(l);return u!==void 0?Promise.resolve(u):a(c,l)}}},fw=s=>(e,t,n,i)=>s(e[i],r=>r[0]===t&&r[1]===n),pw=s=>(e,t)=>{s(e).delete(t)},mw=s=>"delayTime"in s,gw=(s,e,t)=>function n(i,r){const o=nl(r)?r:t(s,r);if(mw(o))return[];if(i[0]===o)return[i];if(i.includes(o))return[];const{outputs:a}=e(o);return Array.from(a).map(c=>n([...i,o],c[0])).reduce((c,l)=>c.concat(l),[])},Mc=(s,e,t)=>{const n=e[t];if(n===void 0)throw s();return n},_w=s=>(e,t=void 0,n=void 0,i=0)=>t===void 0?e.forEach(r=>r.disconnect()):typeof t=="number"?Mc(s,e,t).disconnect():rl(t)?n===void 0?e.forEach(r=>r.disconnect(t)):i===void 0?Mc(s,e,n).disconnect(t,0):Mc(s,e,n).disconnect(t,0,i):n===void 0?e.forEach(r=>r.disconnect(t)):Mc(s,e,n).disconnect(t,0),vw={attack:.003,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",knee:30,ratio:12,release:.25,threshold:-24},yw=(s,e,t,n,i,r,o,a)=>class extends s{constructor(l,u){const h=r(l),d={...vw,...u},f=n(h,d),m=o(h),_=m?t():null;super(l,!1,f,_),this._attack=e(this,m,f.attack),this._knee=e(this,m,f.knee),this._nativeDynamicsCompressorNode=f,this._ratio=e(this,m,f.ratio),this._release=e(this,m,f.release),this._threshold=e(this,m,f.threshold),a(this,.006)}get attack(){return this._attack}get channelCount(){return this._nativeDynamicsCompressorNode.channelCount}set channelCount(l){const u=this._nativeDynamicsCompressorNode.channelCount;if(this._nativeDynamicsCompressorNode.channelCount=l,l>2)throw this._nativeDynamicsCompressorNode.channelCount=u,i()}get channelCountMode(){return this._nativeDynamicsCompressorNode.channelCountMode}set channelCountMode(l){const u=this._nativeDynamicsCompressorNode.channelCountMode;if(this._nativeDynamicsCompressorNode.channelCountMode=l,l==="max")throw this._nativeDynamicsCompressorNode.channelCountMode=u,i()}get knee(){return this._knee}get ratio(){return this._ratio}get reduction(){return typeof this._nativeDynamicsCompressorNode.reduction.value=="number"?this._nativeDynamicsCompressorNode.reduction.value:this._nativeDynamicsCompressorNode.reduction}get release(){return this._release}get threshold(){return this._threshold}},xw=(s,e,t,n,i)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=t(a);const u=tn(l,c);if(!u){const h={attack:l.attack.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,knee:l.knee.value,ratio:l.ratio.value,release:l.release.value,threshold:l.threshold.value};l=e(c,h)}return r.set(c,l),u?(await s(c,a.attack,l.attack),await s(c,a.knee,l.knee),await s(c,a.ratio,l.ratio),await s(c,a.release,l.release),await s(c,a.threshold,l.threshold)):(await n(c,a.attack,l.attack),await n(c,a.knee,l.knee),await n(c,a.ratio,l.ratio),await n(c,a.release,l.release),await n(c,a.threshold,l.threshold)),await i(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},Sw=()=>new DOMException("","EncodingError"),Mw=s=>e=>new Promise((t,n)=>{if(s===null){n(new SyntaxError);return}const i=s.document.head;if(i===null)n(new SyntaxError);else{const r=s.document.createElement("script"),o=new Blob([e],{type:"application/javascript"}),a=URL.createObjectURL(o),c=s.onerror,l=()=>{s.onerror=c,URL.revokeObjectURL(a)};s.onerror=(u,h,d,f,m)=>{if(h===a||h===s.location.href&&d===1&&f===1)return l(),n(m),!1;if(c!==null)return c(u,h,d,f,m)},r.onerror=()=>{l(),n(new SyntaxError)},r.onload=()=>{l(),t()},r.src=a,r.type="module",i.appendChild(r)}}),bw=s=>class{constructor(t){this._nativeEventTarget=t,this._listeners=new WeakMap}addEventListener(t,n,i){if(n!==null){let r=this._listeners.get(n);r===void 0&&(r=s(this,n),typeof n=="function"&&this._listeners.set(n,r)),this._nativeEventTarget.addEventListener(t,r,i)}}dispatchEvent(t){return this._nativeEventTarget.dispatchEvent(t)}removeEventListener(t,n,i){const r=n===null?void 0:this._listeners.get(n);this._nativeEventTarget.removeEventListener(t,r===void 0?null:r,i)}},Tw=s=>(e,t,n)=>{Object.defineProperties(s,{currentFrame:{configurable:!0,get(){return Math.round(e*t)}},currentTime:{configurable:!0,get(){return e}}});try{return n()}finally{s!==null&&(delete s.currentFrame,delete s.currentTime)}},Ew=s=>async e=>{try{const t=await fetch(e);if(t.ok)return[await t.text(),t.url]}catch{}throw s()},Aw={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",gain:1},ww=(s,e,t,n,i,r)=>class extends s{constructor(a,c){const l=i(a),u={...Aw,...c},h=n(l,u),d=r(l),f=d?t():null;super(a,!1,h,f),this._gain=e(this,d,h.gain,ln,mn)}get gain(){return this._gain}},Cw=(s,e,t,n,i)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=t(a);const u=tn(l,c);if(!u){const h={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,gain:l.gain.value};l=e(c,h)}return r.set(c,l),u?await s(c,a.gain,l.gain):await n(c,a.gain,l.gain),await i(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},Rw=(s,e)=>t=>e(s,t),Iw=s=>e=>{const t=s(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioNode in the audio graph.");return t.renderer},Dw=s=>e=>{var t;return(t=s.get(e))!==null&&t!==void 0?t:0},Pw=s=>e=>{const t=s(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioParam in the audio graph.");return t.renderer},Nw=s=>e=>s.get(e),Wt=()=>new DOMException("","InvalidStateError"),Lw=s=>e=>{const t=s.get(e);if(t===void 0)throw Wt();return t},Ow=(s,e)=>t=>{let n=s.get(t);if(n!==void 0)return n;if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");return n=new e(1,1,44100),s.set(t,n),n},Uw=s=>e=>{const t=s.get(e);if(t===void 0)throw new Error("The context has no set of AudioWorkletNodes.");return t},Gl=()=>new DOMException("","InvalidAccessError"),Fw=s=>{s.getFrequencyResponse=(e=>(t,n,i)=>{if(t.length!==n.length||n.length!==i.length)throw Gl();return e.call(s,t,n,i)})(s.getFrequencyResponse)},kw={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers"},Bw=(s,e,t,n,i,r)=>class extends s{constructor(a,c){const l=n(a),u=i(l),h={...kw,...c},d=e(l,u?null:a.baseLatency,h),f=u?t(h.feedback,h.feedforward):null;super(a,!1,d,f),Fw(d),this._nativeIIRFilterNode=d,r(this,1)}getFrequencyResponse(a,c,l){return this._nativeIIRFilterNode.getFrequencyResponse(a,c,l)}},p_=(s,e,t,n,i,r,o,a,c,l,u)=>{const h=l.length;let d=a;for(let f=0;f<h;f+=1){let m=t[0]*l[f];for(let _=1;_<i;_+=1){const g=d-_&c-1;m+=t[_]*r[g],m-=s[_]*o[g]}for(let _=i;_<n;_+=1)m+=t[_]*r[d-_&c-1];for(let _=i;_<e;_+=1)m-=s[_]*o[d-_&c-1];r[d]=l[f],o[d]=m,d=d+1&c-1,u[f]=m}return d},Vw=(s,e,t,n)=>{const i=t instanceof Float64Array?t:new Float64Array(t),r=n instanceof Float64Array?n:new Float64Array(n),o=i.length,a=r.length,c=Math.min(o,a);if(i[0]!==1){for(let m=0;m<o;m+=1)r[m]/=i[0];for(let m=1;m<a;m+=1)i[m]/=i[0]}const l=32,u=new Float32Array(l),h=new Float32Array(l),d=e.createBuffer(s.numberOfChannels,s.length,s.sampleRate),f=s.numberOfChannels;for(let m=0;m<f;m+=1){const _=s.getChannelData(m),g=d.getChannelData(m);u.fill(0),h.fill(0),p_(i,o,r,a,c,u,h,0,l,_,g)}return d},zw=(s,e,t,n,i)=>(r,o)=>{const a=new WeakMap;let c=null;const l=async(u,h)=>{let d=null,f=e(u);const m=tn(f,h);if(h.createIIRFilter===void 0?d=s(h,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}):m||(f=h.createIIRFilter(o,r)),a.set(h,d===null?f:d),d!==null){if(c===null){if(t===null)throw new Error("Missing the native OfflineAudioContext constructor.");const g=new t(u.context.destination.channelCount,u.context.length,h.sampleRate);c=(async()=>{await n(u,g,g.destination);const p=await i(g);return Vw(p,h,r,o)})()}const _=await c;return d.buffer=_,d.start(0),d}return await n(u,h,f),f};return{render(u,h){const d=a.get(h);return d!==void 0?Promise.resolve(d):l(u,h)}}},Gw=(s,e,t,n,i,r)=>o=>(a,c)=>{const l=s.get(a);if(l===void 0){if(!o&&r(a)){const u=n(a),{outputs:h}=t(a);for(const d of h)if(Fa(d)){const f=n(d[0]);e(u,f,d[1],d[2])}else{const f=i(d[0]);u.disconnect(f,d[1])}}s.set(a,c)}else s.set(a,l+c)},Hw=(s,e)=>t=>{const n=s.get(t);return e(n)||e(t)},Ww=(s,e)=>t=>s.has(t)||e(t),Xw=(s,e)=>t=>s.has(t)||e(t),qw=(s,e)=>t=>{const n=s.get(t);return e(n)||e(t)},jw=s=>e=>s!==null&&e instanceof s,Yw=s=>e=>s!==null&&typeof s.AudioNode=="function"&&e instanceof s.AudioNode,$w=s=>e=>s!==null&&typeof s.AudioParam=="function"&&e instanceof s.AudioParam,Kw=(s,e)=>t=>s(t)||e(t),Zw=s=>e=>s!==null&&e instanceof s,Qw=s=>s!==null&&s.isSecureContext,Jw=(s,e,t,n)=>class extends s{constructor(r,o){const a=t(r),c=e(a,o);if(n(a))throw TypeError();super(r,!0,c,null),this._nativeMediaElementAudioSourceNode=c}get mediaElement(){return this._nativeMediaElementAudioSourceNode.mediaElement}},e1={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers"},t1=(s,e,t,n)=>class extends s{constructor(r,o){const a=t(r);if(n(a))throw new TypeError;const c={...e1,...o},l=e(a,c);super(r,!1,l,null),this._nativeMediaStreamAudioDestinationNode=l}get stream(){return this._nativeMediaStreamAudioDestinationNode.stream}},n1=(s,e,t,n)=>class extends s{constructor(r,o){const a=t(r),c=e(a,o);if(n(a))throw new TypeError;super(r,!0,c,null),this._nativeMediaStreamAudioSourceNode=c}get mediaStream(){return this._nativeMediaStreamAudioSourceNode.mediaStream}},i1=(s,e,t)=>class extends s{constructor(i,r){const o=t(i),a=e(o,r);super(i,!0,a,null)}},s1=(s,e,t,n,i,r)=>class extends t{constructor(a,c){super(a),this._nativeContext=a,Vl.set(this,a),n(a)&&i.set(a,new Set),this._destination=new s(this,c),this._listener=e(this,a),this._onstatechange=null}get currentTime(){return this._nativeContext.currentTime}get destination(){return this._destination}get listener(){return this._listener}get onstatechange(){return this._onstatechange}set onstatechange(a){const c=typeof a=="function"?r(this,a):null;this._nativeContext.onstatechange=c;const l=this._nativeContext.onstatechange;this._onstatechange=l!==null&&l===c?a:l}get sampleRate(){return this._nativeContext.sampleRate}get state(){return this._nativeContext.state}},ha=s=>{const e=new Uint32Array([1179011410,40,1163280727,544501094,16,131073,44100,176400,1048580,1635017060,4,0]);try{const t=s.decodeAudioData(e.buffer,()=>{});return t===void 0?!1:(t.catch(()=>{}),!0)}catch{}return!1},r1=(s,e)=>(t,n,i)=>{const r=new Set;return t.connect=(o=>(a,c=0,l=0)=>{const u=r.size===0;if(e(a))return o.call(t,a,c,l),s(r,[a,c,l],h=>h[0]===a&&h[1]===c&&h[2]===l,!0),u&&n(),a;o.call(t,a,c),s(r,[a,c],h=>h[0]===a&&h[1]===c,!0),u&&n()})(t.connect),t.disconnect=(o=>(a,c,l)=>{const u=r.size>0;if(a===void 0)o.apply(t),r.clear();else if(typeof a=="number"){o.call(t,a);for(const d of r)d[1]===a&&r.delete(d)}else{e(a)?o.call(t,a,c,l):o.call(t,a,c);for(const d of r)d[0]===a&&(c===void 0||d[1]===c)&&(l===void 0||d[2]===l)&&r.delete(d)}const h=r.size===0;u&&h&&i()})(t.disconnect),t},_t=(s,e,t)=>{const n=e[t];n!==void 0&&n!==s[t]&&(s[t]=n)},Ut=(s,e)=>{_t(s,e,"channelCount"),_t(s,e,"channelCountMode"),_t(s,e,"channelInterpretation")},mm=s=>typeof s.getFloatTimeDomainData=="function",o1=s=>{s.getFloatTimeDomainData=e=>{const t=new Uint8Array(e.length);s.getByteTimeDomainData(t);const n=Math.max(t.length,s.fftSize);for(let i=0;i<n;i+=1)e[i]=(t[i]-128)*.0078125;return e}},a1=(s,e)=>(t,n)=>{const i=t.createAnalyser();if(Ut(i,n),!(n.maxDecibels>n.minDecibels))throw e();return _t(i,n,"fftSize"),_t(i,n,"maxDecibels"),_t(i,n,"minDecibels"),_t(i,n,"smoothingTimeConstant"),s(mm,()=>mm(i))||o1(i),i},c1=s=>s===null?null:s.hasOwnProperty("AudioBuffer")?s.AudioBuffer:null,St=(s,e,t)=>{const n=e[t];n!==void 0&&n!==s[t].value&&(s[t].value=n)},l1=s=>{s.start=(e=>{let t=!1;return(n=0,i=0,r)=>{if(t)throw Wt();e.call(s,n,i,r),t=!0}})(s.start)},_d=s=>{s.start=(e=>(t=0,n=0,i)=>{if(typeof i=="number"&&i<0||n<0||t<0)throw new RangeError("The parameters can't be negative.");e.call(s,t,n,i)})(s.start)},vd=s=>{s.stop=(e=>(t=0)=>{if(t<0)throw new RangeError("The parameter can't be negative.");e.call(s,t)})(s.stop)},u1=(s,e,t,n,i,r,o,a,c,l,u)=>(h,d)=>{const f=h.createBufferSource();return Ut(f,d),St(f,d,"playbackRate"),_t(f,d,"buffer"),_t(f,d,"loop"),_t(f,d,"loopEnd"),_t(f,d,"loopStart"),e(t,()=>t(h))||l1(f),e(n,()=>n(h))||c(f),e(i,()=>i(h))||l(f,h),e(r,()=>r(h))||_d(f),e(o,()=>o(h))||u(f,h),e(a,()=>a(h))||vd(f),s(h,f),f},h1=s=>s===null?null:s.hasOwnProperty("AudioContext")?s.AudioContext:s.hasOwnProperty("webkitAudioContext")?s.webkitAudioContext:null,d1=(s,e)=>(t,n,i)=>{const r=t.destination;if(r.channelCount!==n)try{r.channelCount=n}catch{}i&&r.channelCountMode!=="explicit"&&(r.channelCountMode="explicit"),r.maxChannelCount===0&&Object.defineProperty(r,"maxChannelCount",{value:n});const o=s(t,{channelCount:n,channelCountMode:r.channelCountMode,channelInterpretation:r.channelInterpretation,gain:1});return e(o,"channelCount",a=>()=>a.call(o),a=>c=>{a.call(o,c);try{r.channelCount=c}catch(l){if(c>r.maxChannelCount)throw l}}),e(o,"channelCountMode",a=>()=>a.call(o),a=>c=>{a.call(o,c),r.channelCountMode=c}),e(o,"channelInterpretation",a=>()=>a.call(o),a=>c=>{a.call(o,c),r.channelInterpretation=c}),Object.defineProperty(o,"maxChannelCount",{get:()=>r.maxChannelCount}),o.connect(r),o},f1=s=>s===null?null:s.hasOwnProperty("AudioWorkletNode")?s.AudioWorkletNode:null,p1=s=>{const{port1:e}=new MessageChannel;try{e.postMessage(s)}finally{e.close()}},m1=(s,e,t,n,i)=>(r,o,a,c,l,u)=>{if(a!==null)try{const h=new a(r,c,u),d=new Map;let f=null;if(Object.defineProperties(h,{channelCount:{get:()=>u.channelCount,set:()=>{throw s()}},channelCountMode:{get:()=>"explicit",set:()=>{throw s()}},onprocessorerror:{get:()=>f,set:m=>{typeof f=="function"&&h.removeEventListener("processorerror",f),f=typeof m=="function"?m:null,typeof f=="function"&&h.addEventListener("processorerror",f)}}}),h.addEventListener=(m=>(..._)=>{if(_[0]==="processorerror"){const g=typeof _[1]=="function"?_[1]:typeof _[1]=="object"&&_[1]!==null&&typeof _[1].handleEvent=="function"?_[1].handleEvent:null;if(g!==null){const p=d.get(_[1]);p!==void 0?_[1]=p:(_[1]=x=>{x.type==="error"?(Object.defineProperties(x,{type:{value:"processorerror"}}),g(x)):g(new ErrorEvent(_[0],{...x}))},d.set(g,_[1]))}}return m.call(h,"error",_[1],_[2]),m.call(h,..._)})(h.addEventListener),h.removeEventListener=(m=>(..._)=>{if(_[0]==="processorerror"){const g=d.get(_[1]);g!==void 0&&(d.delete(_[1]),_[1]=g)}return m.call(h,"error",_[1],_[2]),m.call(h,_[0],_[1],_[2])})(h.removeEventListener),u.numberOfOutputs!==0){const m=t(r,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return h.connect(m).connect(r.destination),i(h,()=>m.disconnect(),()=>m.connect(r.destination))}return h}catch(h){throw h.code===11?n():h}if(l===void 0)throw n();return p1(u),e(r,o,l,u)},m_=(s,e)=>s===null?512:Math.max(512,Math.min(16384,Math.pow(2,Math.round(Math.log2(s*e))))),g1=s=>new Promise((e,t)=>{const{port1:n,port2:i}=new MessageChannel;n.onmessage=({data:r})=>{n.close(),i.close(),e(r)},n.onmessageerror=({data:r})=>{n.close(),i.close(),t(r)},i.postMessage(s)}),_1=async(s,e)=>{const t=await g1(e);return new s(t)},v1=(s,e,t,n)=>{let i=Rh.get(s);i===void 0&&(i=new WeakMap,Rh.set(s,i));const r=_1(t,n);return i.set(e,r),r},y1=(s,e,t,n,i,r,o,a,c,l,u,h,d)=>(f,m,_,g)=>{if(g.numberOfInputs===0&&g.numberOfOutputs===0)throw c();const p=Array.isArray(g.outputChannelCount)?g.outputChannelCount:Array.from(g.outputChannelCount);if(p.some(Z=>Z<1))throw c();if(p.length!==g.numberOfOutputs)throw e();if(g.channelCountMode!=="explicit")throw c();const x=g.channelCount*g.numberOfInputs,v=p.reduce((Z,te)=>Z+te,0),M=_.parameterDescriptors===void 0?0:_.parameterDescriptors.length;if(x+M>6||v>6)throw c();const y=new MessageChannel,b=[],E=[];for(let Z=0;Z<g.numberOfInputs;Z+=1)b.push(o(f,{channelCount:g.channelCount,channelCountMode:g.channelCountMode,channelInterpretation:g.channelInterpretation,gain:1})),E.push(i(f,{channelCount:g.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:g.channelCount}));const T=[];if(_.parameterDescriptors!==void 0)for(const{defaultValue:Z,maxValue:te,minValue:ke,name:Se}of _.parameterDescriptors){const pe=r(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:g.parameterData[Se]!==void 0?g.parameterData[Se]:Z===void 0?0:Z});Object.defineProperties(pe.offset,{defaultValue:{get:()=>Z===void 0?0:Z},maxValue:{get:()=>te===void 0?ln:te},minValue:{get:()=>ke===void 0?mn:ke}}),T.push(pe)}const S=n(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,x+M)}),A=m_(m,f.sampleRate),N=a(f,A,x+M,Math.max(1,v)),U=i(f,{channelCount:Math.max(1,v),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,v)}),z=[];for(let Z=0;Z<g.numberOfOutputs;Z+=1)z.push(n(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:p[Z]}));for(let Z=0;Z<g.numberOfInputs;Z+=1){b[Z].connect(E[Z]);for(let te=0;te<g.channelCount;te+=1)E[Z].connect(S,te,Z*g.channelCount+te)}const C=new d_(_.parameterDescriptors===void 0?[]:_.parameterDescriptors.map(({name:Z},te)=>{const ke=T[te];return ke.connect(S,0,x+te),ke.start(0),[Z,ke.offset]}));S.connect(N);let D=g.channelInterpretation,F=null;const B=g.numberOfOutputs===0?[N]:z,Y={get bufferSize(){return A},get channelCount(){return g.channelCount},set channelCount(Z){throw t()},get channelCountMode(){return g.channelCountMode},set channelCountMode(Z){throw t()},get channelInterpretation(){return D},set channelInterpretation(Z){for(const te of b)te.channelInterpretation=Z;D=Z},get context(){return N.context},get inputs(){return b},get numberOfInputs(){return g.numberOfInputs},get numberOfOutputs(){return g.numberOfOutputs},get onprocessorerror(){return F},set onprocessorerror(Z){typeof F=="function"&&Y.removeEventListener("processorerror",F),F=typeof Z=="function"?Z:null,typeof F=="function"&&Y.addEventListener("processorerror",F)},get parameters(){return C},get port(){return y.port2},addEventListener(...Z){return N.addEventListener(Z[0],Z[1],Z[2])},connect:s.bind(null,B),disconnect:l.bind(null,B),dispatchEvent(...Z){return N.dispatchEvent(Z[0])},removeEventListener(...Z){return N.removeEventListener(Z[0],Z[1],Z[2])}},V=new Map;y.port1.addEventListener=(Z=>(...te)=>{if(te[0]==="message"){const ke=typeof te[1]=="function"?te[1]:typeof te[1]=="object"&&te[1]!==null&&typeof te[1].handleEvent=="function"?te[1].handleEvent:null;if(ke!==null){const Se=V.get(te[1]);Se!==void 0?te[1]=Se:(te[1]=pe=>{u(f.currentTime,f.sampleRate,()=>ke(pe))},V.set(ke,te[1]))}}return Z.call(y.port1,te[0],te[1],te[2])})(y.port1.addEventListener),y.port1.removeEventListener=(Z=>(...te)=>{if(te[0]==="message"){const ke=V.get(te[1]);ke!==void 0&&(V.delete(te[1]),te[1]=ke)}return Z.call(y.port1,te[0],te[1],te[2])})(y.port1.removeEventListener);let j=null;Object.defineProperty(y.port1,"onmessage",{get:()=>j,set:Z=>{typeof j=="function"&&y.port1.removeEventListener("message",j),j=typeof Z=="function"?Z:null,typeof j=="function"&&(y.port1.addEventListener("message",j),y.port1.start())}}),_.prototype.port=y.port1;let O=null;v1(f,Y,_,g).then(Z=>O=Z);const ie=al(g.numberOfInputs,g.channelCount),ce=al(g.numberOfOutputs,p),k=_.parameterDescriptors===void 0?[]:_.parameterDescriptors.reduce((Z,{name:te})=>({...Z,[te]:new Float32Array(128)}),{});let oe=!0;const ye=()=>{g.numberOfOutputs>0&&N.disconnect(U);for(let Z=0,te=0;Z<g.numberOfOutputs;Z+=1){const ke=z[Z];for(let Se=0;Se<p[Z];Se+=1)U.disconnect(ke,te+Se,Se);te+=p[Z]}},J=new Map;N.onaudioprocess=({inputBuffer:Z,outputBuffer:te})=>{if(O!==null){const ke=h(Y);for(let Se=0;Se<A;Se+=128){for(let pe=0;pe<g.numberOfInputs;pe+=1)for(let Ae=0;Ae<g.channelCount;Ae+=1)ol(Z,ie[pe],Ae,Ae,Se);_.parameterDescriptors!==void 0&&_.parameterDescriptors.forEach(({name:pe},Ae)=>{ol(Z,k,pe,x+Ae,Se)});for(let pe=0;pe<g.numberOfInputs;pe+=1)for(let Ae=0;Ae<p[pe];Ae+=1)ce[pe][Ae].byteLength===0&&(ce[pe][Ae]=new Float32Array(128));try{const pe=ie.map((et,ft)=>{if(ke[ft].size>0)return J.set(ft,A/128),et;const w=J.get(ft);return w===void 0?[]:(et.every(q=>q.every(se=>se===0))&&(w===1?J.delete(ft):J.set(ft,w-1)),et)});oe=u(f.currentTime+Se/f.sampleRate,f.sampleRate,()=>O.process(pe,ce,k));for(let et=0,ft=0;et<g.numberOfOutputs;et+=1){for(let I=0;I<p[et];I+=1)f_(te,ce[et],I,ft+I,Se);ft+=p[et]}}catch(pe){oe=!1,Y.dispatchEvent(new ErrorEvent("processorerror",{colno:pe.colno,filename:pe.filename,lineno:pe.lineno,message:pe.message}))}if(!oe){for(let pe=0;pe<g.numberOfInputs;pe+=1){b[pe].disconnect(E[pe]);for(let Ae=0;Ae<g.channelCount;Ae+=1)E[Se].disconnect(S,Ae,pe*g.channelCount+Ae)}if(_.parameterDescriptors!==void 0){const pe=_.parameterDescriptors.length;for(let Ae=0;Ae<pe;Ae+=1){const et=T[Ae];et.disconnect(S,0,x+Ae),et.stop()}}S.disconnect(N),N.onaudioprocess=null,We?ye():G();break}}}};let We=!1;const yt=o(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0}),Ne=()=>N.connect(yt).connect(f.destination),G=()=>{N.disconnect(yt),yt.disconnect()},Ft=()=>{if(oe){G(),g.numberOfOutputs>0&&N.connect(U);for(let Z=0,te=0;Z<g.numberOfOutputs;Z+=1){const ke=z[Z];for(let Se=0;Se<p[Z];Se+=1)U.connect(ke,te+Se,Se);te+=p[Z]}}We=!0},Ce=()=>{oe&&(Ne(),ye()),We=!1};return Ne(),d(Y,Ft,Ce)},g_=(s,e)=>{const t=s.createBiquadFilter();return Ut(t,e),St(t,e,"Q"),St(t,e,"detune"),St(t,e,"frequency"),St(t,e,"gain"),_t(t,e,"type"),t},x1=(s,e)=>(t,n)=>{const i=t.createChannelMerger(n.numberOfInputs);return s!==null&&s.name==="webkitAudioContext"&&e(t,i),Ut(i,n),i},S1=s=>{const e=s.numberOfOutputs;Object.defineProperty(s,"channelCount",{get:()=>e,set:t=>{if(t!==e)throw Wt()}}),Object.defineProperty(s,"channelCountMode",{get:()=>"explicit",set:t=>{if(t!=="explicit")throw Wt()}}),Object.defineProperty(s,"channelInterpretation",{get:()=>"discrete",set:t=>{if(t!=="discrete")throw Wt()}})},ka=(s,e)=>{const t=s.createChannelSplitter(e.numberOfOutputs);return Ut(t,e),S1(t),t},M1=(s,e,t,n,i)=>(r,o)=>{if(r.createConstantSource===void 0)return t(r,o);const a=r.createConstantSource();return Ut(a,o),St(a,o,"offset"),e(n,()=>n(r))||_d(a),e(i,()=>i(r))||vd(a),s(r,a),a},Lo=(s,e)=>(s.connect=e.connect.bind(e),s.disconnect=e.disconnect.bind(e),s),b1=(s,e,t,n)=>(i,{offset:r,...o})=>{const a=i.createBuffer(1,2,44100),c=e(i,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),l=t(i,{...o,gain:r}),u=a.getChannelData(0);u[0]=1,u[1]=1,c.buffer=a,c.loop=!0;const h={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(m){l.channelCount=m},get channelCountMode(){return l.channelCountMode},set channelCountMode(m){l.channelCountMode=m},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(m){l.channelInterpretation=m},get context(){return l.context},get inputs(){return[]},get numberOfInputs(){return c.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get offset(){return l.gain},get onended(){return c.onended},set onended(m){c.onended=m},addEventListener(...m){return c.addEventListener(m[0],m[1],m[2])},dispatchEvent(...m){return c.dispatchEvent(m[0])},removeEventListener(...m){return c.removeEventListener(m[0],m[1],m[2])},start(m=0){c.start.call(c,m)},stop(m=0){c.stop.call(c,m)}},d=()=>c.connect(l),f=()=>c.disconnect(l);return s(i,c),n(Lo(h,l),d,f)},T1=(s,e)=>(t,n)=>{const i=t.createConvolver();if(Ut(i,n),n.disableNormalization===i.normalize&&(i.normalize=!n.disableNormalization),_t(i,n,"buffer"),n.channelCount>2||(e(i,"channelCount",r=>()=>r.call(i),r=>o=>{if(o>2)throw s();return r.call(i,o)}),n.channelCountMode==="max"))throw s();return e(i,"channelCountMode",r=>()=>r.call(i),r=>o=>{if(o==="max")throw s();return r.call(i,o)}),i},__=(s,e)=>{const t=s.createDelay(e.maxDelayTime);return Ut(t,e),St(t,e,"delayTime"),t},E1=s=>(e,t)=>{const n=e.createDynamicsCompressor();if(Ut(n,t),t.channelCount>2||t.channelCountMode==="max")throw s();return St(n,t,"attack"),St(n,t,"knee"),St(n,t,"ratio"),St(n,t,"release"),St(n,t,"threshold"),n},Mn=(s,e)=>{const t=s.createGain();return Ut(t,e),St(t,e,"gain"),t},A1=s=>(e,t,n)=>{if(e.createIIRFilter===void 0)return s(e,t,n);const i=e.createIIRFilter(n.feedforward,n.feedback);return Ut(i,n),i};function w1(s,e){const t=e[0]*e[0]+e[1]*e[1];return[(s[0]*e[0]+s[1]*e[1])/t,(s[1]*e[0]-s[0]*e[1])/t]}function C1(s,e){return[s[0]*e[0]-s[1]*e[1],s[0]*e[1]+s[1]*e[0]]}function gm(s,e){let t=[0,0];for(let n=s.length-1;n>=0;n-=1)t=C1(t,e),t[0]+=s[n];return t}const R1=(s,e,t,n)=>(i,r,{channelCount:o,channelCountMode:a,channelInterpretation:c,feedback:l,feedforward:u})=>{const h=m_(r,i.sampleRate),d=l instanceof Float64Array?l:new Float64Array(l),f=u instanceof Float64Array?u:new Float64Array(u),m=d.length,_=f.length,g=Math.min(m,_);if(m===0||m>20)throw n();if(d[0]===0)throw e();if(_===0||_>20)throw n();if(f[0]===0)throw e();if(d[0]!==1){for(let T=0;T<_;T+=1)f[T]/=d[0];for(let T=1;T<m;T+=1)d[T]/=d[0]}const p=t(i,h,o,o);p.channelCount=o,p.channelCountMode=a,p.channelInterpretation=c;const x=32,v=[],M=[],y=[];for(let T=0;T<o;T+=1){v.push(0);const S=new Float32Array(x),A=new Float32Array(x);S.fill(0),A.fill(0),M.push(S),y.push(A)}p.onaudioprocess=T=>{const S=T.inputBuffer,A=T.outputBuffer,N=S.numberOfChannels;for(let U=0;U<N;U+=1){const z=S.getChannelData(U),C=A.getChannelData(U);v[U]=p_(d,m,f,_,g,M[U],y[U],v[U],x,z,C)}};const b=i.sampleRate/2;return Lo({get bufferSize(){return h},get channelCount(){return p.channelCount},set channelCount(T){p.channelCount=T},get channelCountMode(){return p.channelCountMode},set channelCountMode(T){p.channelCountMode=T},get channelInterpretation(){return p.channelInterpretation},set channelInterpretation(T){p.channelInterpretation=T},get context(){return p.context},get inputs(){return[p]},get numberOfInputs(){return p.numberOfInputs},get numberOfOutputs(){return p.numberOfOutputs},addEventListener(...T){return p.addEventListener(T[0],T[1],T[2])},dispatchEvent(...T){return p.dispatchEvent(T[0])},getFrequencyResponse(T,S,A){if(T.length!==S.length||S.length!==A.length)throw s();const N=T.length;for(let U=0;U<N;U+=1){const z=-Math.PI*(T[U]/b),C=[Math.cos(z),Math.sin(z)],D=gm(f,C),F=gm(d,C),B=w1(D,F);S[U]=Math.sqrt(B[0]*B[0]+B[1]*B[1]),A[U]=Math.atan2(B[1],B[0])}},removeEventListener(...T){return p.removeEventListener(T[0],T[1],T[2])}},p)},I1=(s,e)=>s.createMediaElementSource(e.mediaElement),D1=(s,e)=>{const t=s.createMediaStreamDestination();return Ut(t,e),t.numberOfOutputs===1&&Object.defineProperty(t,"numberOfOutputs",{get:()=>0}),t},P1=(s,{mediaStream:e})=>{const t=e.getAudioTracks();t.sort((r,o)=>r.id<o.id?-1:r.id>o.id?1:0);const n=t.slice(0,1),i=s.createMediaStreamSource(new MediaStream(n));return Object.defineProperty(i,"mediaStream",{value:e}),i},N1=(s,e)=>(t,{mediaStreamTrack:n})=>{if(typeof t.createMediaStreamTrackSource=="function")return t.createMediaStreamTrackSource(n);const i=new MediaStream([n]),r=t.createMediaStreamSource(i);if(n.kind!=="audio")throw s();if(e(t))throw new TypeError;return r},L1=s=>s===null?null:s.hasOwnProperty("OfflineAudioContext")?s.OfflineAudioContext:s.hasOwnProperty("webkitOfflineAudioContext")?s.webkitOfflineAudioContext:null,O1=(s,e,t,n,i,r)=>(o,a)=>{const c=o.createOscillator();return Ut(c,a),St(c,a,"detune"),St(c,a,"frequency"),a.periodicWave!==void 0?c.setPeriodicWave(a.periodicWave):_t(c,a,"type"),e(t,()=>t(o))||_d(c),e(n,()=>n(o))||r(c,o),e(i,()=>i(o))||vd(c),s(o,c),c},U1=s=>(e,t)=>{const n=e.createPanner();return n.orientationX===void 0?s(e,t):(Ut(n,t),St(n,t,"orientationX"),St(n,t,"orientationY"),St(n,t,"orientationZ"),St(n,t,"positionX"),St(n,t,"positionY"),St(n,t,"positionZ"),_t(n,t,"coneInnerAngle"),_t(n,t,"coneOuterAngle"),_t(n,t,"coneOuterGain"),_t(n,t,"distanceModel"),_t(n,t,"maxDistance"),_t(n,t,"panningModel"),_t(n,t,"refDistance"),_t(n,t,"rolloffFactor"),n)},F1=(s,e,t,n,i,r,o,a,c,l)=>(u,{coneInnerAngle:h,coneOuterAngle:d,coneOuterGain:f,distanceModel:m,maxDistance:_,orientationX:g,orientationY:p,orientationZ:x,panningModel:v,positionX:M,positionY:y,positionZ:b,refDistance:E,rolloffFactor:T,...S})=>{const A=u.createPanner();if(S.channelCount>2||S.channelCountMode==="max")throw o();Ut(A,S);const N={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},U=t(u,{...N,channelInterpretation:"speakers",numberOfInputs:6}),z=n(u,{...S,gain:1}),C=n(u,{...N,gain:1}),D=n(u,{...N,gain:0}),F=n(u,{...N,gain:0}),B=n(u,{...N,gain:0}),Y=n(u,{...N,gain:0}),V=n(u,{...N,gain:0}),j=i(u,256,6,1),O=r(u,{...N,curve:new Float32Array([1,1]),oversample:"none"});let X=[g,p,x],ie=[M,y,b];const ce=new Float32Array(1);j.onaudioprocess=({inputBuffer:J})=>{const We=[c(J,ce,0),c(J,ce,1),c(J,ce,2)];We.some((Ne,G)=>Ne!==X[G])&&(A.setOrientation(...We),X=We);const yt=[c(J,ce,3),c(J,ce,4),c(J,ce,5)];yt.some((Ne,G)=>Ne!==ie[G])&&(A.setPosition(...yt),ie=yt)},Object.defineProperty(D.gain,"defaultValue",{get:()=>0}),Object.defineProperty(F.gain,"defaultValue",{get:()=>0}),Object.defineProperty(B.gain,"defaultValue",{get:()=>0}),Object.defineProperty(Y.gain,"defaultValue",{get:()=>0}),Object.defineProperty(V.gain,"defaultValue",{get:()=>0});const k={get bufferSize(){},get channelCount(){return A.channelCount},set channelCount(J){if(J>2)throw o();z.channelCount=J,A.channelCount=J},get channelCountMode(){return A.channelCountMode},set channelCountMode(J){if(J==="max")throw o();z.channelCountMode=J,A.channelCountMode=J},get channelInterpretation(){return A.channelInterpretation},set channelInterpretation(J){z.channelInterpretation=J,A.channelInterpretation=J},get coneInnerAngle(){return A.coneInnerAngle},set coneInnerAngle(J){A.coneInnerAngle=J},get coneOuterAngle(){return A.coneOuterAngle},set coneOuterAngle(J){A.coneOuterAngle=J},get coneOuterGain(){return A.coneOuterGain},set coneOuterGain(J){if(J<0||J>1)throw e();A.coneOuterGain=J},get context(){return A.context},get distanceModel(){return A.distanceModel},set distanceModel(J){A.distanceModel=J},get inputs(){return[z]},get maxDistance(){return A.maxDistance},set maxDistance(J){if(J<0)throw new RangeError;A.maxDistance=J},get numberOfInputs(){return A.numberOfInputs},get numberOfOutputs(){return A.numberOfOutputs},get orientationX(){return C.gain},get orientationY(){return D.gain},get orientationZ(){return F.gain},get panningModel(){return A.panningModel},set panningModel(J){A.panningModel=J},get positionX(){return B.gain},get positionY(){return Y.gain},get positionZ(){return V.gain},get refDistance(){return A.refDistance},set refDistance(J){if(J<0)throw new RangeError;A.refDistance=J},get rolloffFactor(){return A.rolloffFactor},set rolloffFactor(J){if(J<0)throw new RangeError;A.rolloffFactor=J},addEventListener(...J){return z.addEventListener(J[0],J[1],J[2])},dispatchEvent(...J){return z.dispatchEvent(J[0])},removeEventListener(...J){return z.removeEventListener(J[0],J[1],J[2])}};h!==k.coneInnerAngle&&(k.coneInnerAngle=h),d!==k.coneOuterAngle&&(k.coneOuterAngle=d),f!==k.coneOuterGain&&(k.coneOuterGain=f),m!==k.distanceModel&&(k.distanceModel=m),_!==k.maxDistance&&(k.maxDistance=_),g!==k.orientationX.value&&(k.orientationX.value=g),p!==k.orientationY.value&&(k.orientationY.value=p),x!==k.orientationZ.value&&(k.orientationZ.value=x),v!==k.panningModel&&(k.panningModel=v),M!==k.positionX.value&&(k.positionX.value=M),y!==k.positionY.value&&(k.positionY.value=y),b!==k.positionZ.value&&(k.positionZ.value=b),E!==k.refDistance&&(k.refDistance=E),T!==k.rolloffFactor&&(k.rolloffFactor=T),(X[0]!==1||X[1]!==0||X[2]!==0)&&A.setOrientation(...X),(ie[0]!==0||ie[1]!==0||ie[2]!==0)&&A.setPosition(...ie);const oe=()=>{z.connect(A),s(z,O,0,0),O.connect(C).connect(U,0,0),O.connect(D).connect(U,0,1),O.connect(F).connect(U,0,2),O.connect(B).connect(U,0,3),O.connect(Y).connect(U,0,4),O.connect(V).connect(U,0,5),U.connect(j).connect(u.destination)},ye=()=>{z.disconnect(A),a(z,O,0,0),O.disconnect(C),C.disconnect(U),O.disconnect(D),D.disconnect(U),O.disconnect(F),F.disconnect(U),O.disconnect(B),B.disconnect(U),O.disconnect(Y),Y.disconnect(U),O.disconnect(V),V.disconnect(U),U.disconnect(j),j.disconnect(u.destination)};return l(Lo(k,A),oe,ye)},k1=s=>(e,{disableNormalization:t,imag:n,real:i})=>{const r=n instanceof Float32Array?n:new Float32Array(n),o=i instanceof Float32Array?i:new Float32Array(i),a=e.createPeriodicWave(o,r,{disableNormalization:t});if(Array.from(n).length<2)throw s();return a},Ba=(s,e,t,n)=>s.createScriptProcessor(e,t,n),B1=(s,e)=>(t,n)=>{const i=n.channelCountMode;if(i==="clamped-max")throw e();if(t.createStereoPanner===void 0)return s(t,n);const r=t.createStereoPanner();return Ut(r,n),St(r,n,"pan"),Object.defineProperty(r,"channelCountMode",{get:()=>i,set:o=>{if(o!==i)throw e()}}),r},V1=(s,e,t,n,i,r)=>{const a=new Float32Array([1,1]),c=Math.PI/2,l={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},u={...l,oversample:"none"},h=(m,_,g,p)=>{const x=new Float32Array(16385),v=new Float32Array(16385);for(let S=0;S<16385;S+=1){const A=S/16384*c;x[S]=Math.cos(A),v[S]=Math.sin(A)}const M=t(m,{...l,gain:0}),y=n(m,{...u,curve:x}),b=n(m,{...u,curve:a}),E=t(m,{...l,gain:0}),T=n(m,{...u,curve:v});return{connectGraph(){_.connect(M),_.connect(b.inputs===void 0?b:b.inputs[0]),_.connect(E),b.connect(g),g.connect(y.inputs===void 0?y:y.inputs[0]),g.connect(T.inputs===void 0?T:T.inputs[0]),y.connect(M.gain),T.connect(E.gain),M.connect(p,0,0),E.connect(p,0,1)},disconnectGraph(){_.disconnect(M),_.disconnect(b.inputs===void 0?b:b.inputs[0]),_.disconnect(E),b.disconnect(g),g.disconnect(y.inputs===void 0?y:y.inputs[0]),g.disconnect(T.inputs===void 0?T:T.inputs[0]),y.disconnect(M.gain),T.disconnect(E.gain),M.disconnect(p,0,0),E.disconnect(p,0,1)}}},d=(m,_,g,p)=>{const x=new Float32Array(16385),v=new Float32Array(16385),M=new Float32Array(16385),y=new Float32Array(16385),b=Math.floor(16385/2);for(let B=0;B<16385;B+=1)if(B>b){const Y=(B-b)/(16384-b)*c;x[B]=Math.cos(Y),v[B]=Math.sin(Y),M[B]=0,y[B]=1}else{const Y=B/(16384-b)*c;x[B]=1,v[B]=0,M[B]=Math.cos(Y),y[B]=Math.sin(Y)}const E=e(m,{channelCount:2,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:2}),T=t(m,{...l,gain:0}),S=n(m,{...u,curve:x}),A=t(m,{...l,gain:0}),N=n(m,{...u,curve:v}),U=n(m,{...u,curve:a}),z=t(m,{...l,gain:0}),C=n(m,{...u,curve:M}),D=t(m,{...l,gain:0}),F=n(m,{...u,curve:y});return{connectGraph(){_.connect(E),_.connect(U.inputs===void 0?U:U.inputs[0]),E.connect(T,0),E.connect(A,0),E.connect(z,1),E.connect(D,1),U.connect(g),g.connect(S.inputs===void 0?S:S.inputs[0]),g.connect(N.inputs===void 0?N:N.inputs[0]),g.connect(C.inputs===void 0?C:C.inputs[0]),g.connect(F.inputs===void 0?F:F.inputs[0]),S.connect(T.gain),N.connect(A.gain),C.connect(z.gain),F.connect(D.gain),T.connect(p,0,0),z.connect(p,0,0),A.connect(p,0,1),D.connect(p,0,1)},disconnectGraph(){_.disconnect(E),_.disconnect(U.inputs===void 0?U:U.inputs[0]),E.disconnect(T,0),E.disconnect(A,0),E.disconnect(z,1),E.disconnect(D,1),U.disconnect(g),g.disconnect(S.inputs===void 0?S:S.inputs[0]),g.disconnect(N.inputs===void 0?N:N.inputs[0]),g.disconnect(C.inputs===void 0?C:C.inputs[0]),g.disconnect(F.inputs===void 0?F:F.inputs[0]),S.disconnect(T.gain),N.disconnect(A.gain),C.disconnect(z.gain),F.disconnect(D.gain),T.disconnect(p,0,0),z.disconnect(p,0,0),A.disconnect(p,0,1),D.disconnect(p,0,1)}}},f=(m,_,g,p,x)=>{if(_===1)return h(m,g,p,x);if(_===2)return d(m,g,p,x);throw i()};return(m,{channelCount:_,channelCountMode:g,pan:p,...x})=>{if(g==="max")throw i();const v=s(m,{...x,channelCount:1,channelCountMode:g,numberOfInputs:2}),M=t(m,{...x,channelCount:_,channelCountMode:g,gain:1}),y=t(m,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:p});let{connectGraph:b,disconnectGraph:E}=f(m,_,M,y,v);Object.defineProperty(y.gain,"defaultValue",{get:()=>0}),Object.defineProperty(y.gain,"maxValue",{get:()=>1}),Object.defineProperty(y.gain,"minValue",{get:()=>-1});const T={get bufferSize(){},get channelCount(){return M.channelCount},set channelCount(U){M.channelCount!==U&&(S&&E(),{connectGraph:b,disconnectGraph:E}=f(m,U,M,y,v),S&&b()),M.channelCount=U},get channelCountMode(){return M.channelCountMode},set channelCountMode(U){if(U==="clamped-max"||U==="max")throw i();M.channelCountMode=U},get channelInterpretation(){return M.channelInterpretation},set channelInterpretation(U){M.channelInterpretation=U},get context(){return M.context},get inputs(){return[M]},get numberOfInputs(){return M.numberOfInputs},get numberOfOutputs(){return M.numberOfOutputs},get pan(){return y.gain},addEventListener(...U){return M.addEventListener(U[0],U[1],U[2])},dispatchEvent(...U){return M.dispatchEvent(U[0])},removeEventListener(...U){return M.removeEventListener(U[0],U[1],U[2])}};let S=!1;const A=()=>{b(),S=!0},N=()=>{E(),S=!1};return r(Lo(T,v),A,N)}},z1=(s,e,t,n,i,r,o)=>(a,c)=>{const l=a.createWaveShaper();if(r!==null&&r.name==="webkitAudioContext"&&a.createGain().gain.automationRate===void 0)return t(a,c);Ut(l,c);const u=c.curve===null||c.curve instanceof Float32Array?c.curve:new Float32Array(c.curve);if(u!==null&&u.length<2)throw e();_t(l,{curve:u},"curve"),_t(l,c,"oversample");let h=null,d=!1;return o(l,"curve",_=>()=>_.call(l),_=>g=>(_.call(l,g),d&&(n(g)&&h===null?h=s(a,l):!n(g)&&h!==null&&(h(),h=null)),g)),i(l,()=>{d=!0,n(l.curve)&&(h=s(a,l))},()=>{d=!1,h!==null&&(h(),h=null)})},G1=(s,e,t,n,i)=>(r,{curve:o,oversample:a,...c})=>{const l=r.createWaveShaper(),u=r.createWaveShaper();Ut(l,c),Ut(u,c);const h=t(r,{...c,gain:1}),d=t(r,{...c,gain:-1}),f=t(r,{...c,gain:1}),m=t(r,{...c,gain:-1});let _=null,g=!1,p=null;const x={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(y){h.channelCount=y,d.channelCount=y,l.channelCount=y,f.channelCount=y,u.channelCount=y,m.channelCount=y},get channelCountMode(){return l.channelCountMode},set channelCountMode(y){h.channelCountMode=y,d.channelCountMode=y,l.channelCountMode=y,f.channelCountMode=y,u.channelCountMode=y,m.channelCountMode=y},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(y){h.channelInterpretation=y,d.channelInterpretation=y,l.channelInterpretation=y,f.channelInterpretation=y,u.channelInterpretation=y,m.channelInterpretation=y},get context(){return l.context},get curve(){return p},set curve(y){if(y!==null&&y.length<2)throw e();if(y===null)l.curve=y,u.curve=y;else{const b=y.length,E=new Float32Array(b+2-b%2),T=new Float32Array(b+2-b%2);E[0]=y[0],T[0]=-y[b-1];const S=Math.ceil((b+1)/2),A=(b+1)/2-1;for(let N=1;N<S;N+=1){const U=N/S*A,z=Math.floor(U),C=Math.ceil(U);E[N]=z===C?y[z]:(1-(U-z))*y[z]+(1-(C-U))*y[C],T[N]=z===C?-y[b-1-z]:-((1-(U-z))*y[b-1-z])-(1-(C-U))*y[b-1-C]}E[S]=b%2===1?y[S-1]:(y[S-2]+y[S-1])/2,l.curve=E,u.curve=T}p=y,g&&(n(p)&&_===null?_=s(r,h):_!==null&&(_(),_=null))},get inputs(){return[h]},get numberOfInputs(){return l.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get oversample(){return l.oversample},set oversample(y){l.oversample=y,u.oversample=y},addEventListener(...y){return h.addEventListener(y[0],y[1],y[2])},dispatchEvent(...y){return h.dispatchEvent(y[0])},removeEventListener(...y){return h.removeEventListener(y[0],y[1],y[2])}};o!==null&&(x.curve=o instanceof Float32Array?o:new Float32Array(o)),a!==x.oversample&&(x.oversample=a);const v=()=>{h.connect(l).connect(f),h.connect(d).connect(u).connect(m).connect(f),g=!0,n(p)&&(_=s(r,h))},M=()=>{h.disconnect(l),l.disconnect(f),h.disconnect(d),d.disconnect(u),u.disconnect(m),m.disconnect(f),g=!1,_!==null&&(_(),_=null)};return i(Lo(x,f),v,M)},dn=()=>new DOMException("","NotSupportedError"),H1={numberOfChannels:1},W1=(s,e,t,n,i)=>class extends s{constructor(o,a,c){let l;if(typeof o=="number"&&a!==void 0&&c!==void 0)l={length:a,numberOfChannels:o,sampleRate:c};else if(typeof o=="object")l=o;else throw new Error("The given parameters are not valid.");const{length:u,numberOfChannels:h,sampleRate:d}={...H1,...l},f=n(h,u,d);e(ha,()=>ha(f))||f.addEventListener("statechange",(()=>{let m=0;const _=g=>{this._state==="running"&&(m>0?(f.removeEventListener("statechange",_),g.stopImmediatePropagation(),this._waitForThePromiseToSettle(g)):m+=1)};return _})()),super(f,h),this._length=u,this._nativeOfflineAudioContext=f,this._state=null}get length(){return this._nativeOfflineAudioContext.length===void 0?this._length:this._nativeOfflineAudioContext.length}get state(){return this._state===null?this._nativeOfflineAudioContext.state:this._state}startRendering(){return this._state==="running"?Promise.reject(t()):(this._state="running",i(this.destination,this._nativeOfflineAudioContext).finally(()=>{this._state=null,c_(this)}))}_waitForThePromiseToSettle(o){this._state===null?this._nativeOfflineAudioContext.dispatchEvent(o):setTimeout(()=>this._waitForThePromiseToSettle(o))}},X1={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:440,periodicWave:void 0,type:"sine"},q1=(s,e,t,n,i,r,o)=>class extends s{constructor(c,l){const u=i(c),h={...X1,...l},d=t(u,h),f=r(u),m=f?n():null,_=c.sampleRate/2;super(c,!1,d,m),this._detune=e(this,f,d.detune,153600,-153600),this._frequency=e(this,f,d.frequency,_,-_),this._nativeOscillatorNode=d,this._onended=null,this._oscillatorNodeRenderer=m,this._oscillatorNodeRenderer!==null&&h.periodicWave!==void 0&&(this._oscillatorNodeRenderer.periodicWave=h.periodicWave)}get detune(){return this._detune}get frequency(){return this._frequency}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?o(this,c):null;this._nativeOscillatorNode.onended=l;const u=this._nativeOscillatorNode.onended;this._onended=u!==null&&u===l?c:u}get type(){return this._nativeOscillatorNode.type}set type(c){this._nativeOscillatorNode.type=c,this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=null)}setPeriodicWave(c){this._nativeOscillatorNode.setPeriodicWave(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=c)}start(c=0){if(this._nativeOscillatorNode.start(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.start=c),this.context.state!=="closed"){xo(this);const l=()=>{this._nativeOscillatorNode.removeEventListener("ended",l),Qi(this)&&Oa(this)};this._nativeOscillatorNode.addEventListener("ended",l)}}stop(c=0){this._nativeOscillatorNode.stop(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.stop=c)}},j1=(s,e,t,n,i)=>()=>{const r=new WeakMap;let o=null,a=null,c=null;const l=async(u,h)=>{let d=t(u);const f=tn(d,h);if(!f){const m={channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,detune:d.detune.value,frequency:d.frequency.value,periodicWave:o===null?void 0:o,type:d.type};d=e(h,m),a!==null&&d.start(a),c!==null&&d.stop(c)}return r.set(h,d),f?(await s(h,u.detune,d.detune),await s(h,u.frequency,d.frequency)):(await n(h,u.detune,d.detune),await n(h,u.frequency,d.frequency)),await i(u,h,d),d};return{set periodicWave(u){o=u},set start(u){a=u},set stop(u){c=u},render(u,h){const d=r.get(h);return d!==void 0?Promise.resolve(d):l(u,h)}}},Y1={channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",coneInnerAngle:360,coneOuterAngle:360,coneOuterGain:0,distanceModel:"inverse",maxDistance:1e4,orientationX:1,orientationY:0,orientationZ:0,panningModel:"equalpower",positionX:0,positionY:0,positionZ:0,refDistance:1,rolloffFactor:1},$1=(s,e,t,n,i,r,o)=>class extends s{constructor(c,l){const u=i(c),h={...Y1,...l},d=t(u,h),f=r(u),m=f?n():null;super(c,!1,d,m),this._nativePannerNode=d,this._orientationX=e(this,f,d.orientationX,ln,mn),this._orientationY=e(this,f,d.orientationY,ln,mn),this._orientationZ=e(this,f,d.orientationZ,ln,mn),this._positionX=e(this,f,d.positionX,ln,mn),this._positionY=e(this,f,d.positionY,ln,mn),this._positionZ=e(this,f,d.positionZ,ln,mn),o(this,1)}get coneInnerAngle(){return this._nativePannerNode.coneInnerAngle}set coneInnerAngle(c){this._nativePannerNode.coneInnerAngle=c}get coneOuterAngle(){return this._nativePannerNode.coneOuterAngle}set coneOuterAngle(c){this._nativePannerNode.coneOuterAngle=c}get coneOuterGain(){return this._nativePannerNode.coneOuterGain}set coneOuterGain(c){this._nativePannerNode.coneOuterGain=c}get distanceModel(){return this._nativePannerNode.distanceModel}set distanceModel(c){this._nativePannerNode.distanceModel=c}get maxDistance(){return this._nativePannerNode.maxDistance}set maxDistance(c){this._nativePannerNode.maxDistance=c}get orientationX(){return this._orientationX}get orientationY(){return this._orientationY}get orientationZ(){return this._orientationZ}get panningModel(){return this._nativePannerNode.panningModel}set panningModel(c){this._nativePannerNode.panningModel=c}get positionX(){return this._positionX}get positionY(){return this._positionY}get positionZ(){return this._positionZ}get refDistance(){return this._nativePannerNode.refDistance}set refDistance(c){this._nativePannerNode.refDistance=c}get rolloffFactor(){return this._nativePannerNode.rolloffFactor}set rolloffFactor(c){this._nativePannerNode.rolloffFactor=c}},K1=(s,e,t,n,i,r,o,a,c,l)=>()=>{const u=new WeakMap;let h=null;const d=async(f,m)=>{let _=null,g=r(f);const p={channelCount:g.channelCount,channelCountMode:g.channelCountMode,channelInterpretation:g.channelInterpretation},x={...p,coneInnerAngle:g.coneInnerAngle,coneOuterAngle:g.coneOuterAngle,coneOuterGain:g.coneOuterGain,distanceModel:g.distanceModel,maxDistance:g.maxDistance,panningModel:g.panningModel,refDistance:g.refDistance,rolloffFactor:g.rolloffFactor},v=tn(g,m);if("bufferSize"in g)_=n(m,{...p,gain:1});else if(!v){const M={...x,orientationX:g.orientationX.value,orientationY:g.orientationY.value,orientationZ:g.orientationZ.value,positionX:g.positionX.value,positionY:g.positionY.value,positionZ:g.positionZ.value};g=i(m,M)}if(u.set(m,_===null?g:_),_!==null){if(h===null){if(o===null)throw new Error("Missing the native OfflineAudioContext constructor.");const N=new o(6,f.context.length,m.sampleRate),U=e(N,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6});U.connect(N.destination),h=(async()=>{const z=await Promise.all([f.orientationX,f.orientationY,f.orientationZ,f.positionX,f.positionY,f.positionZ].map(async(C,D)=>{const F=t(N,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:D===0?1:0});return await a(N,C,F.offset),F}));for(let C=0;C<6;C+=1)z[C].connect(U,0,C),z[C].start(0);return l(N)})()}const M=await h,y=n(m,{...p,gain:1});await c(f,m,y);const b=[];for(let N=0;N<M.numberOfChannels;N+=1)b.push(M.getChannelData(N));let E=[b[0][0],b[1][0],b[2][0]],T=[b[3][0],b[4][0],b[5][0]],S=n(m,{...p,gain:1}),A=i(m,{...x,orientationX:E[0],orientationY:E[1],orientationZ:E[2],positionX:T[0],positionY:T[1],positionZ:T[2]});y.connect(S).connect(A.inputs[0]),A.connect(_);for(let N=128;N<M.length;N+=128){const U=[b[0][N],b[1][N],b[2][N]],z=[b[3][N],b[4][N],b[5][N]];if(U.some((C,D)=>C!==E[D])||z.some((C,D)=>C!==T[D])){E=U,T=z;const C=N/m.sampleRate;S.gain.setValueAtTime(0,C),S=n(m,{...p,gain:0}),A=i(m,{...x,orientationX:E[0],orientationY:E[1],orientationZ:E[2],positionX:T[0],positionY:T[1],positionZ:T[2]}),S.gain.setValueAtTime(1,C),y.connect(S).connect(A.inputs[0]),A.connect(_)}}return _}return v?(await s(m,f.orientationX,g.orientationX),await s(m,f.orientationY,g.orientationY),await s(m,f.orientationZ,g.orientationZ),await s(m,f.positionX,g.positionX),await s(m,f.positionY,g.positionY),await s(m,f.positionZ,g.positionZ)):(await a(m,f.orientationX,g.orientationX),await a(m,f.orientationY,g.orientationY),await a(m,f.orientationZ,g.orientationZ),await a(m,f.positionX,g.positionX),await a(m,f.positionY,g.positionY),await a(m,f.positionZ,g.positionZ)),No(g)?await c(f,m,g.inputs[0]):await c(f,m,g),g};return{render(f,m){const _=u.get(m);return _!==void 0?Promise.resolve(_):d(f,m)}}},Z1={disableNormalization:!1},Q1=(s,e,t,n)=>class v_{constructor(r,o){const a=e(r),c=n({...Z1,...o}),l=s(a,c);return t.add(l),l}static[Symbol.hasInstance](r){return r!==null&&typeof r=="object"&&Object.getPrototypeOf(r)===v_.prototype||t.has(r)}},J1=(s,e)=>(t,n,i)=>(s(n).replay(i),e(n,t,i)),eC=(s,e,t)=>async(n,i,r)=>{const o=s(n);await Promise.all(o.activeInputs.map((a,c)=>Array.from(a).map(async([l,u])=>{const d=await e(l).render(l,i),f=n.context.destination;!t(l)&&(n!==f||!t(n))&&d.connect(r,u,c)})).reduce((a,c)=>[...a,...c],[]))},tC=(s,e,t)=>async(n,i,r)=>{const o=e(n);await Promise.all(Array.from(o.activeInputs).map(async([a,c])=>{const u=await s(a).render(a,i);t(a)||u.connect(r,c)}))},nC=(s,e,t,n)=>i=>s(ha,()=>ha(i))?Promise.resolve(s(n,n)).then(r=>{if(!r){const o=t(i,512,0,1);i.oncomplete=()=>{o.onaudioprocess=null,o.disconnect()},o.onaudioprocess=()=>i.currentTime,o.connect(i.destination)}return i.startRendering()}):new Promise(r=>{const o=e(i,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});i.oncomplete=a=>{o.disconnect(),r(a.renderedBuffer)},o.connect(i.destination),i.startRendering()}),iC=s=>(e,t)=>{s.set(e,t)},sC=s=>(e,t)=>s.set(e,t),rC=(s,e,t,n,i,r,o,a)=>(c,l)=>t(c).render(c,l).then(()=>Promise.all(Array.from(n(l)).map(u=>t(u).render(u,l)))).then(()=>i(l)).then(u=>(typeof u.copyFromChannel!="function"?(o(u),pd(u)):e(r,()=>r(u))||a(u),s.add(u),u)),oC={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",pan:0},aC=(s,e,t,n,i,r)=>class extends s{constructor(a,c){const l=i(a),u={...oC,...c},h=t(l,u),d=r(l),f=d?n():null;super(a,!1,h,f),this._pan=e(this,d,h.pan)}get pan(){return this._pan}},cC=(s,e,t,n,i)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=t(a);const u=tn(l,c);if(!u){const h={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,pan:l.pan.value};l=e(c,h)}return r.set(c,l),u?await s(c,a.pan,l.pan):await n(c,a.pan,l.pan),No(l)?await i(a,c,l.inputs[0]):await i(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},lC=s=>()=>{if(s===null)return!1;try{new s({length:1,sampleRate:44100})}catch{return!1}return!0},uC=(s,e)=>async()=>{if(s===null)return!0;if(e===null)return!1;const t=new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'],{type:"application/javascript; charset=utf-8"}),n=new e(1,128,44100),i=URL.createObjectURL(t);let r=!1,o=!1;try{await n.audioWorklet.addModule(i);const a=new s(n,"a",{numberOfOutputs:0}),c=n.createOscillator();a.port.onmessage=()=>r=!0,a.onprocessorerror=()=>o=!0,c.connect(a),c.start(0),await n.startRendering(),await new Promise(l=>setTimeout(l))}catch{}finally{URL.revokeObjectURL(i)}return r&&!o},hC=(s,e)=>()=>{if(e===null)return Promise.resolve(!1);const t=new e(1,1,44100),n=s(t,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return new Promise(i=>{t.oncomplete=()=>{n.disconnect(),i(t.currentTime!==0)},t.startRendering()})},dC=()=>new DOMException("","UnknownError"),fC={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",curve:null,oversample:"none"},pC=(s,e,t,n,i,r,o)=>class extends s{constructor(c,l){const u=i(c),h={...fC,...l},d=t(u,h),m=r(u)?n():null;super(c,!0,d,m),this._isCurveNullified=!1,this._nativeWaveShaperNode=d,o(this,1)}get curve(){return this._isCurveNullified?null:this._nativeWaveShaperNode.curve}set curve(c){if(c===null)this._isCurveNullified=!0,this._nativeWaveShaperNode.curve=new Float32Array([0,0]);else{if(c.length<2)throw e();this._isCurveNullified=!1,this._nativeWaveShaperNode.curve=c}}get oversample(){return this._nativeWaveShaperNode.oversample}set oversample(c){this._nativeWaveShaperNode.oversample=c}},mC=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,o)=>{let a=e(r);if(!tn(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,curve:a.curve,oversample:a.oversample};a=s(o,l)}return n.set(o,a),No(a)?await t(r,o,a.inputs[0]):await t(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},gC=()=>typeof window>"u"?null:window,_C=(s,e)=>t=>{t.copyFromChannel=(n,i,r=0)=>{const o=s(r),a=s(i);if(a>=t.numberOfChannels)throw e();const c=t.length,l=t.getChannelData(a),u=n.length;for(let h=o<0?-o:0;h+o<c&&h<u;h+=1)n[h]=l[h+o]},t.copyToChannel=(n,i,r=0)=>{const o=s(r),a=s(i);if(a>=t.numberOfChannels)throw e();const c=t.length,l=t.getChannelData(a),u=n.length;for(let h=o<0?-o:0;h+o<c&&h<u;h+=1)l[h+o]=n[h]}},vC=s=>e=>{e.copyFromChannel=(t=>(n,i,r=0)=>{const o=s(r),a=s(i);if(o<e.length)return t.call(e,n,a,o)})(e.copyFromChannel),e.copyToChannel=(t=>(n,i,r=0)=>{const o=s(r),a=s(i);if(o<e.length)return t.call(e,n,a,o)})(e.copyToChannel)},yC=s=>(e,t)=>{const n=t.createBuffer(1,1,44100);e.buffer===null&&(e.buffer=n),s(e,"buffer",i=>()=>{const r=i.call(e);return r===n?null:r},i=>r=>i.call(e,r===null?n:r))},xC=(s,e)=>(t,n)=>{n.channelCount=1,n.channelCountMode="explicit",Object.defineProperty(n,"channelCount",{get:()=>1,set:()=>{throw s()}}),Object.defineProperty(n,"channelCountMode",{get:()=>"explicit",set:()=>{throw s()}});const i=t.createBufferSource();e(n,()=>{const a=n.numberOfInputs;for(let c=0;c<a;c+=1)i.connect(n,0,c)},()=>i.disconnect(n))},y_=(s,e,t)=>s.copyFromChannel===void 0?s.getChannelData(t)[0]:(s.copyFromChannel(e,t),e[0]),x_=s=>{if(s===null)return!1;const e=s.length;return e%2!==0?s[Math.floor(e/2)]!==0:s[e/2-1]+s[e/2]!==0},Va=(s,e,t,n)=>{let i=s;for(;!i.hasOwnProperty(e);)i=Object.getPrototypeOf(i);const{get:r,set:o}=Object.getOwnPropertyDescriptor(i,e);Object.defineProperty(s,e,{get:t(r),set:n(o)})},SC=s=>({...s,outputChannelCount:s.outputChannelCount!==void 0?s.outputChannelCount:s.numberOfInputs===1&&s.numberOfOutputs===1?[s.channelCount]:Array.from({length:s.numberOfOutputs},()=>1)}),MC=s=>({...s,channelCount:s.numberOfOutputs}),bC=s=>{const{imag:e,real:t}=s;return e===void 0?t===void 0?{...s,imag:[0,0],real:[0,0]}:{...s,imag:Array.from(t,()=>0),real:t}:t===void 0?{...s,imag:e,real:Array.from(e,()=>0)}:{...s,imag:e,real:t}},S_=(s,e,t)=>{try{s.setValueAtTime(e,t)}catch(n){if(n.code!==9)throw n;S_(s,e,t+1e-7)}},TC=s=>{const e=s.createBufferSource();e.start();try{e.start()}catch{return!0}return!1},EC=s=>{const e=s.createBufferSource(),t=s.createBuffer(1,1,44100);e.buffer=t;try{e.start(0,1)}catch{return!1}return!0},AC=s=>{const e=s.createBufferSource();e.start();try{e.stop()}catch{return!1}return!0},yd=s=>{const e=s.createOscillator();try{e.start(-1)}catch(t){return t instanceof RangeError}return!1},M_=s=>{const e=s.createBuffer(1,1,44100),t=s.createBufferSource();t.buffer=e,t.start(),t.stop();try{return t.stop(),!0}catch{return!1}},xd=s=>{const e=s.createOscillator();try{e.stop(-1)}catch(t){return t instanceof RangeError}return!1},wC=s=>{const{port1:e,port2:t}=new MessageChannel;try{e.postMessage(s)}finally{e.close(),t.close()}},CC=s=>{s.start=(e=>(t=0,n=0,i)=>{const r=s.buffer,o=r===null?n:Math.min(r.duration,n);r!==null&&o>r.duration-.5/s.context.sampleRate?e.call(s,t,0,0):e.call(s,t,o,i)})(s.start)},b_=(s,e)=>{const t=e.createGain();s.connect(t);const n=(i=>()=>{i.call(s,t),s.removeEventListener("ended",n)})(s.disconnect);s.addEventListener("ended",n),Lo(s,t),s.stop=(i=>{let r=!1;return(o=0)=>{if(r)try{i.call(s,o)}catch{t.gain.setValueAtTime(0,o)}else i.call(s,o),r=!0}})(s.stop)},Oo=(s,e)=>t=>{const n={value:s};return Object.defineProperties(t,{currentTarget:n,target:n}),typeof e=="function"?e.call(s,t):e.handleEvent.call(s,t)},RC=$E(vr),IC=tA(vr),DC=fw(zl),T_=new WeakMap,PC=Dw(T_),li=HA(new Map,new WeakMap),xi=gC(),E_=a1(li,Ai),Sd=Iw(un),$t=eC(un,Sd,fr),NC=oA(E_,gt,$t),dt=Lw(Vl),rs=L1(xi),ct=Zw(rs),A_=new WeakMap,w_=bw(Oo),za=h1(xi),Md=jw(za),bd=Yw(xi),C_=$w(xi),da=f1(xi),Et=DA(KE(t_),eA(RC,IC,il,DC,sl,un,PC,La,gt,vr,Qi,fr,zc),li,Gw(wh,sl,un,gt,ua,Qi),Ai,Gl,dn,lw(il,wh,un,gt,ua,dt,Qi,ct),gw(A_,un,ai),w_,dt,Md,bd,C_,ct,da),LC=rA(Et,NC,Ai,E_,dt,ct),Td=new WeakSet,_m=c1(xi),R_=nw(new Uint32Array(1)),Ed=_C(R_,Ai),Ad=vC(R_),OC=cA(Td,li,dn,_m,rs,lC(_m),Ed,Ad),Hl=nA(Mn),I_=tC(Sd,Ua,fr),wi=KA(I_),Uo=u1(Hl,li,TC,EC,AC,yd,M_,xd,CC,yC(Va),b_),Ci=J1(Pw(Ua),I_),UC=hA(wi,Uo,gt,Ci,$t),ui=PA(ZE(n_),A_,fd,NA,HE,WE,XE,qE,jE,Th,Jg,za,S_),FC=uA(Et,UC,ui,Wt,Uo,dt,ct,Oo),kC=xA(Et,SA,Ai,Wt,d1(Mn,Va),dt,ct,$t),BC=GA(wi,g_,gt,Ci,$t),yr=sC(T_),VC=zA(Et,ui,BC,Gl,g_,dt,ct,yr),Ds=r1(vr,bd),zC=xC(Wt,Ds),Ps=x1(za,zC),GC=qA(Ps,gt,$t),HC=XA(Et,GC,Ps,dt,ct),WC=$A(ka,gt,$t),XC=YA(Et,WC,ka,dt,ct,MC),qC=b1(Hl,Uo,Mn,Ds),Fo=M1(Hl,li,qC,yd,xd),jC=tw(wi,Fo,gt,Ci,$t),YC=ew(Et,ui,jC,Fo,dt,ct,Oo),D_=T1(dn,Va),$C=rw(D_,gt,$t),KC=sw(Et,$C,D_,dt,ct,yr),ZC=dw(wi,__,gt,Ci,$t),QC=hw(Et,ui,ZC,__,dt,ct,yr),P_=E1(dn),JC=xw(wi,P_,gt,Ci,$t),eR=yw(Et,ui,JC,P_,dn,dt,ct,yr),tR=Cw(wi,Mn,gt,Ci,$t),nR=ww(Et,ui,tR,Mn,dt,ct),iR=R1(Gl,Wt,Ba,dn),Wl=nC(li,Mn,Ba,hC(Mn,rs)),sR=zw(Uo,gt,rs,$t,Wl),rR=A1(iR),oR=Bw(Et,rR,sR,dt,ct,yr),aR=MA(ui,Ps,Fo,Ba,dn,y_,ct,Va),N_=new WeakMap,cR=s1(kC,aR,w_,ct,N_,Oo),L_=O1(Hl,li,yd,M_,xd,b_),lR=j1(wi,L_,gt,Ci,$t),uR=q1(Et,ui,L_,lR,dt,ct,Oo),O_=QA(Uo),hR=G1(O_,Wt,Mn,x_,Ds),Xl=z1(O_,Wt,hR,x_,Ds,za,Va),dR=F1(il,Wt,Ps,Mn,Ba,Xl,dn,sl,y_,Ds),U_=U1(dR),fR=K1(wi,Ps,Fo,Mn,U_,gt,rs,Ci,$t,Wl),pR=$1(Et,ui,U_,fR,dt,ct,yr),mR=k1(Ai),gR=Q1(mR,dt,new WeakSet,bC),_R=V1(Ps,ka,Mn,Xl,dn,Ds),F_=B1(_R,dn),vR=cC(wi,F_,gt,Ci,$t),yR=aC(Et,ui,F_,vR,dt,ct),xR=mC(Xl,gt,$t),SR=pC(Et,Wt,Xl,xR,dt,ct,yr),k_=Qw(xi),wd=Tw(xi),B_=new WeakMap,MR=Ow(B_,rs),bR=k_?JE(li,dn,Mw(xi),wd,Ew(YE),dt,MR,ct,da,new WeakMap,new WeakMap,uC(da,rs),xi):void 0,TR=Kw(Md,ct),ER=cw(Td,li,aw,Sw,new WeakSet,dt,TR,tl,ha,Ed,Ad),V_=BA(bR,LC,OC,FC,VC,HC,XC,YC,KC,ER,QC,eR,nR,oR,cR,uR,pR,gR,yR,SR),AR=Jw(Et,I1,dt,ct),wR=t1(Et,D1,dt,ct),CR=n1(Et,P1,dt,ct),RR=N1(Wt,ct),IR=i1(Et,RR,dt),DR=yA(V_,Wt,dn,dC,AR,wR,CR,IR,za),Cd=Uw(N_),PR=iA(Cd),z_=ZA(Ai),NR=pw(Cd),G_=_w(Ai),H_=new WeakMap,LR=Rw(H_,ai),OR=y1(z_,Ai,Wt,Ps,ka,Fo,Mn,Ba,dn,G_,wd,LR,Ds),UR=m1(Wt,OR,Mn,dn,Ds),FR=kA(wi,z_,Uo,Ps,ka,Fo,Mn,NR,G_,wd,gt,da,rs,Ci,$t,Wl),kR=Nw(B_),BR=iC(H_),vm=k_?OA(PR,Et,ui,FR,UR,un,kR,dt,ct,da,SC,BR,wC,Oo):void 0,VR=ow(dn,rs),zR=rC(Td,li,Sd,Cd,Wl,tl,Ed,Ad),GR=W1(V_,li,Wt,VR,zR),HR=Hw(Vl,Md),WR=Ww(dd,bd),XR=Xw(fd,C_),qR=qw(Vl,ct);function Ie(s,e){if(!s)throw new Error(e)}function Es(s,e,t=1/0){if(!(e<=s&&s<=t))throw new RangeError(`Value must be within [${e}, ${t}], got: ${s}`)}function W_(s){!s.isOffline&&s.state!=="running"&&Rd('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.')}let X_=console;function jR(...s){X_.log(...s)}function Rd(...s){X_.warn(...s)}function qn(s){return typeof s>"u"}function $e(s){return!qn(s)}function YR(s){return typeof s=="function"}function ts(s){return typeof s=="number"}function ar(s){return Object.prototype.toString.call(s)==="[object Object]"&&s.constructor===Object}function $R(s){return typeof s=="boolean"}function Dn(s){return Array.isArray(s)}function Si(s){return typeof s=="string"}function bc(s){return Si(s)&&/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(s)}function KR(s){return new DR(s)}function ZR(s,e,t){return new GR(s,e,t)}const cr=typeof self=="object"?self:null,QR=cr&&(cr.hasOwnProperty("AudioContext")||cr.hasOwnProperty("webkitAudioContext"));function JR(s,e,t){return Ie($e(vm),"This node only works in a secure context (https or localhost)"),new vm(s,e,t)}function hi(s,e,t,n){var i=arguments.length,r=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,n);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(i<3?o(r):i>3?o(e,t,r):o(e,t))||r);return i>3&&r&&Object.defineProperty(e,t,r),r}function Dt(s,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((n=n.apply(s,e||[])).next())})}class eI{constructor(e,t,n){this._callback=e,this._type=t,this._updateInterval=n,this._createClock()}_createWorker(){const e=new Blob([`
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
			`],{type:"text/javascript"}),t=URL.createObjectURL(e),n=new Worker(t);n.onmessage=this._callback.bind(this),this._worker=n}_createTimeout(){this._timeout=setTimeout(()=>{this._createTimeout(),this._callback()},this._updateInterval*1e3)}_createClock(){if(this._type==="worker")try{this._createWorker()}catch{this._type="timeout",this._createClock()}else this._type==="timeout"&&this._createTimeout()}_disposeClock(){this._timeout&&(clearTimeout(this._timeout),this._timeout=0),this._worker&&(this._worker.terminate(),this._worker.onmessage=null)}get updateInterval(){return this._updateInterval}set updateInterval(e){this._updateInterval=Math.max(e,128/44100),this._type==="worker"&&this._worker.postMessage(Math.max(e*1e3,1))}get type(){return this._type}set type(e){this._disposeClock(),this._type=e,this._createClock()}dispose(){this._disposeClock()}}function pr(s){return XR(s)}function Ms(s){return WR(s)}function Gc(s){return qR(s)}function Xr(s){return HR(s)}function q_(s){return s instanceof AudioBuffer}function tI(s,e){return s==="value"||pr(e)||Ms(e)||q_(e)}function lr(s,...e){if(!e.length)return s;const t=e.shift();if(ar(s)&&ar(t))for(const n in t)tI(n,t[n])?s[n]=t[n]:ar(t[n])?(s[n]||Object.assign(s,{[n]:{}}),lr(s[n],t[n])):Object.assign(s,{[n]:t[n]});return lr(s,...e)}function nI(s,e){return s.length===e.length&&s.every((t,n)=>e[n]===t)}function Q(s,e,t=[],n){const i={},r=Array.from(e);if(ar(r[0])&&n&&!Reflect.has(r[0],n)&&(Object.keys(r[0]).some(a=>Reflect.has(s,a))||(lr(i,{[n]:r[0]}),t.splice(t.indexOf(n),1),r.shift())),r.length===1&&ar(r[0]))lr(i,r[0]);else for(let o=0;o<t.length;o++)$e(r[o])&&(i[t[o]]=r[o]);return lr(s,i)}function iI(s){return s.constructor.getDefaults()}function no(s,e){return qn(s)?e:s}function fa(s,e){return e.forEach(t=>{Reflect.has(s,t)&&delete s[t]}),s}/**
 * Tone.js
 * @author Yotam Mann
 * @license http://opensource.org/licenses/MIT MIT License
 * @copyright 2014-2019 Yotam Mann
 */class os{constructor(){this.debug=!1,this._wasDisposed=!1}static getDefaults(){return{}}log(...e){(this.debug||cr&&this.toString()===cr.TONE_DEBUG_CLASS)&&jR(this,...e)}dispose(){return this._wasDisposed=!0,this}get disposed(){return this._wasDisposed}toString(){return this.name}}os.version=Qg;const Id=1e-6;function cl(s,e){return s>e+Id}function Ph(s,e){return cl(s,e)||ei(s,e)}function j_(s,e){return s+Id<e}function ei(s,e){return Math.abs(s-e)<Id}function sI(s,e,t){return Math.max(Math.min(s,t),e)}class Ri extends os{constructor(){super(),this.name="Timeline",this._timeline=[];const e=Q(Ri.getDefaults(),arguments,["memory"]);this.memory=e.memory,this.increasing=e.increasing}static getDefaults(){return{memory:1/0,increasing:!1}}get length(){return this._timeline.length}add(e){if(Ie(Reflect.has(e,"time"),"Timeline: events must have a time attribute"),e.time=e.time.valueOf(),this.increasing&&this.length){const t=this._timeline[this.length-1];Ie(Ph(e.time,t.time),"The time must be greater than or equal to the last scheduled time"),this._timeline.push(e)}else{const t=this._search(e.time);this._timeline.splice(t+1,0,e)}if(this.length>this.memory){const t=this.length-this.memory;this._timeline.splice(0,t)}return this}remove(e){const t=this._timeline.indexOf(e);return t!==-1&&this._timeline.splice(t,1),this}get(e,t="time"){const n=this._search(e,t);return n!==-1?this._timeline[n]:null}peek(){return this._timeline[0]}shift(){return this._timeline.shift()}getAfter(e,t="time"){const n=this._search(e,t);return n+1<this._timeline.length?this._timeline[n+1]:null}getBefore(e){const t=this._timeline.length;if(t>0&&this._timeline[t-1].time<e)return this._timeline[t-1];const n=this._search(e);return n-1>=0?this._timeline[n-1]:null}cancel(e){if(this._timeline.length>1){let t=this._search(e);if(t>=0)if(ei(this._timeline[t].time,e)){for(let n=t;n>=0&&ei(this._timeline[n].time,e);n--)t=n;this._timeline=this._timeline.slice(0,t)}else this._timeline=this._timeline.slice(0,t+1);else this._timeline=[]}else this._timeline.length===1&&Ph(this._timeline[0].time,e)&&(this._timeline=[]);return this}cancelBefore(e){const t=this._search(e);return t>=0&&(this._timeline=this._timeline.slice(t+1)),this}previousEvent(e){const t=this._timeline.indexOf(e);return t>0?this._timeline[t-1]:null}_search(e,t="time"){if(this._timeline.length===0)return-1;let n=0;const i=this._timeline.length;let r=i;if(i>0&&this._timeline[i-1][t]<=e)return i-1;for(;n<r;){let o=Math.floor(n+(r-n)/2);const a=this._timeline[o],c=this._timeline[o+1];if(ei(a[t],e)){for(let l=o;l<this._timeline.length;l++){const u=this._timeline[l];if(ei(u[t],e))o=l;else break}return o}else{if(j_(a[t],e)&&cl(c[t],e))return o;cl(a[t],e)?r=o:n=o+1}}return-1}_iterate(e,t=0,n=this._timeline.length-1){this._timeline.slice(t,n+1).forEach(e)}forEach(e){return this._iterate(e),this}forEachBefore(e,t){const n=this._search(e);return n!==-1&&this._iterate(t,0,n),this}forEachAfter(e,t){const n=this._search(e);return this._iterate(t,n+1),this}forEachBetween(e,t,n){let i=this._search(e),r=this._search(t);return i!==-1&&r!==-1?(this._timeline[i].time!==e&&(i+=1),this._timeline[r].time===t&&(r-=1),this._iterate(n,i,r)):i===-1&&this._iterate(n,0,r),this}forEachFrom(e,t){let n=this._search(e);for(;n>=0&&this._timeline[n].time>=e;)n--;return this._iterate(t,n+1),this}forEachAtTime(e,t){const n=this._search(e);if(n!==-1&&ei(this._timeline[n].time,e)){let i=n;for(let r=n;r>=0&&ei(this._timeline[r].time,e);r--)i=r;this._iterate(r=>{t(r)},i,n)}return this}dispose(){return super.dispose(),this._timeline=[],this}}const Y_=[];function ql(s){Y_.push(s)}function rI(s){Y_.forEach(e=>e(s))}const $_=[];function jl(s){$_.push(s)}function oI(s){$_.forEach(e=>e(s))}class Ga extends os{constructor(){super(...arguments),this.name="Emitter"}on(e,t){return e.split(/\W+/).forEach(i=>{qn(this._events)&&(this._events={}),this._events.hasOwnProperty(i)||(this._events[i]=[]),this._events[i].push(t)}),this}once(e,t){const n=(...i)=>{t(...i),this.off(e,n)};return this.on(e,n),this}off(e,t){return e.split(/\W+/).forEach(i=>{if(qn(this._events)&&(this._events={}),this._events.hasOwnProperty(e))if(qn(t))this._events[e]=[];else{const r=this._events[e];for(let o=r.length-1;o>=0;o--)r[o]===t&&r.splice(o,1)}}),this}emit(e,...t){if(this._events&&this._events.hasOwnProperty(e)){const n=this._events[e].slice(0);for(let i=0,r=n.length;i<r;i++)n[i].apply(this,t)}return this}static mixin(e){["on","once","off","emit"].forEach(t=>{const n=Object.getOwnPropertyDescriptor(Ga.prototype,t);Object.defineProperty(e.prototype,t,n)})}dispose(){return super.dispose(),this._events=void 0,this}}class K_ extends Ga{constructor(){super(...arguments),this.isOffline=!1}toJSON(){return{}}}class Ha extends K_{constructor(){super(),this.name="Context",this._constants=new Map,this._timeouts=new Ri,this._timeoutIds=0,this._initialized=!1,this.isOffline=!1,this._workletModules=new Map;const e=Q(Ha.getDefaults(),arguments,["context"]);e.context?this._context=e.context:this._context=KR({latencyHint:e.latencyHint}),this._ticker=new eI(this.emit.bind(this,"tick"),e.clockSource,e.updateInterval),this.on("tick",this._timeoutLoop.bind(this)),this._context.onstatechange=()=>{this.emit("statechange",this.state)},this._setLatencyHint(e.latencyHint),this.lookAhead=e.lookAhead}static getDefaults(){return{clockSource:"worker",latencyHint:"interactive",lookAhead:.1,updateInterval:.05}}initialize(){return this._initialized||(rI(this),this._initialized=!0),this}createAnalyser(){return this._context.createAnalyser()}createOscillator(){return this._context.createOscillator()}createBufferSource(){return this._context.createBufferSource()}createBiquadFilter(){return this._context.createBiquadFilter()}createBuffer(e,t,n){return this._context.createBuffer(e,t,n)}createChannelMerger(e){return this._context.createChannelMerger(e)}createChannelSplitter(e){return this._context.createChannelSplitter(e)}createConstantSource(){return this._context.createConstantSource()}createConvolver(){return this._context.createConvolver()}createDelay(e){return this._context.createDelay(e)}createDynamicsCompressor(){return this._context.createDynamicsCompressor()}createGain(){return this._context.createGain()}createIIRFilter(e,t){return this._context.createIIRFilter(e,t)}createPanner(){return this._context.createPanner()}createPeriodicWave(e,t,n){return this._context.createPeriodicWave(e,t,n)}createStereoPanner(){return this._context.createStereoPanner()}createWaveShaper(){return this._context.createWaveShaper()}createMediaStreamSource(e){return Ie(Xr(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamSource(e)}createMediaElementSource(e){return Ie(Xr(this._context),"Not available if OfflineAudioContext"),this._context.createMediaElementSource(e)}createMediaStreamDestination(){return Ie(Xr(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamDestination()}decodeAudioData(e){return this._context.decodeAudioData(e)}get currentTime(){return this._context.currentTime}get state(){return this._context.state}get sampleRate(){return this._context.sampleRate}get listener(){return this.initialize(),this._listener}set listener(e){Ie(!this._initialized,"The listener cannot be set after initialization."),this._listener=e}get transport(){return this.initialize(),this._transport}set transport(e){Ie(!this._initialized,"The transport cannot be set after initialization."),this._transport=e}get draw(){return this.initialize(),this._draw}set draw(e){Ie(!this._initialized,"Draw cannot be set after initialization."),this._draw=e}get destination(){return this.initialize(),this._destination}set destination(e){Ie(!this._initialized,"The destination cannot be set after initialization."),this._destination=e}createAudioWorkletNode(e,t){return JR(this.rawContext,e,t)}addAudioWorkletModule(e,t){return Dt(this,void 0,void 0,function*(){Ie($e(this.rawContext.audioWorklet),"AudioWorkletNode is only available in a secure context (https or localhost)"),this._workletModules.has(t)||this._workletModules.set(t,this.rawContext.audioWorklet.addModule(e)),yield this._workletModules.get(t)})}workletsAreReady(){return Dt(this,void 0,void 0,function*(){const e=[];this._workletModules.forEach(t=>e.push(t)),yield Promise.all(e)})}get updateInterval(){return this._ticker.updateInterval}set updateInterval(e){this._ticker.updateInterval=e}get clockSource(){return this._ticker.type}set clockSource(e){this._ticker.type=e}get latencyHint(){return this._latencyHint}_setLatencyHint(e){let t=0;if(this._latencyHint=e,Si(e))switch(e){case"interactive":t=.1;break;case"playback":t=.5;break;case"balanced":t=.25;break}this.lookAhead=t,this.updateInterval=t/2}get rawContext(){return this._context}now(){return this._context.currentTime+this.lookAhead}immediate(){return this._context.currentTime}resume(){return Xr(this._context)?this._context.resume():Promise.resolve()}close(){return Dt(this,void 0,void 0,function*(){Xr(this._context)&&(yield this._context.close()),this._initialized&&oI(this)})}getConstant(e){if(this._constants.has(e))return this._constants.get(e);{const t=this._context.createBuffer(1,128,this._context.sampleRate),n=t.getChannelData(0);for(let r=0;r<n.length;r++)n[r]=e;const i=this._context.createBufferSource();return i.channelCount=1,i.channelCountMode="explicit",i.buffer=t,i.loop=!0,i.start(0),this._constants.set(e,i),i}}dispose(){return super.dispose(),this._ticker.dispose(),this._timeouts.dispose(),Object.keys(this._constants).map(e=>this._constants[e].disconnect()),this}_timeoutLoop(){const e=this.now();let t=this._timeouts.peek();for(;this._timeouts.length&&t&&t.time<=e;)t.callback(),this._timeouts.shift(),t=this._timeouts.peek()}setTimeout(e,t){this._timeoutIds++;const n=this.now();return this._timeouts.add({callback:e,id:this._timeoutIds,time:n+t}),this._timeoutIds}clearTimeout(e){return this._timeouts.forEach(t=>{t.id===e&&this._timeouts.remove(t)}),this}clearInterval(e){return this.clearTimeout(e)}setInterval(e,t){const n=++this._timeoutIds,i=()=>{const r=this.now();this._timeouts.add({callback:()=>{e(),i()},id:n,time:r+t})};return i(),n}}class aI extends K_{constructor(){super(...arguments),this.lookAhead=0,this.latencyHint=0,this.isOffline=!1}createAnalyser(){return{}}createOscillator(){return{}}createBufferSource(){return{}}createBiquadFilter(){return{}}createBuffer(e,t,n){return{}}createChannelMerger(e){return{}}createChannelSplitter(e){return{}}createConstantSource(){return{}}createConvolver(){return{}}createDelay(e){return{}}createDynamicsCompressor(){return{}}createGain(){return{}}createIIRFilter(e,t){return{}}createPanner(){return{}}createPeriodicWave(e,t,n){return{}}createStereoPanner(){return{}}createWaveShaper(){return{}}createMediaStreamSource(e){return{}}createMediaElementSource(e){return{}}createMediaStreamDestination(){return{}}decodeAudioData(e){return Promise.resolve({})}createAudioWorkletNode(e,t){return{}}get rawContext(){return{}}addAudioWorkletModule(e,t){return Dt(this,void 0,void 0,function*(){return Promise.resolve()})}resume(){return Promise.resolve()}setTimeout(e,t){return 0}clearTimeout(e){return this}setInterval(e,t){return 0}clearInterval(e){return this}getConstant(e){return{}}get currentTime(){return 0}get state(){return{}}get sampleRate(){return 0}get listener(){return{}}get transport(){return{}}get draw(){return{}}set draw(e){}get destination(){return{}}set destination(e){}now(){return 0}immediate(){return 0}}function Ze(s,e){Dn(e)?e.forEach(t=>Ze(s,t)):Object.defineProperty(s,e,{enumerable:!0,writable:!1})}function Dd(s,e){Dn(e)?e.forEach(t=>Dd(s,t)):Object.defineProperty(s,e,{writable:!0})}const ot=()=>{};class it extends os{constructor(){super(),this.name="ToneAudioBuffer",this.onload=ot;const e=Q(it.getDefaults(),arguments,["url","onload","onerror"]);this.reverse=e.reverse,this.onload=e.onload,e.url&&q_(e.url)||e.url instanceof it?this.set(e.url):Si(e.url)&&this.load(e.url).catch(e.onerror)}static getDefaults(){return{onerror:ot,onload:ot,reverse:!1}}get sampleRate(){return this._buffer?this._buffer.sampleRate:ni().sampleRate}set(e){return e instanceof it?e.loaded?this._buffer=e.get():e.onload=()=>{this.set(e),this.onload(this)}:this._buffer=e,this._reversed&&this._reverse(),this}get(){return this._buffer}load(e){return Dt(this,void 0,void 0,function*(){const t=it.load(e).then(n=>{this.set(n),this.onload(this)});it.downloads.push(t);try{yield t}finally{const n=it.downloads.indexOf(t);it.downloads.splice(n,1)}return this})}dispose(){return super.dispose(),this._buffer=void 0,this}fromArray(e){const t=Dn(e)&&e[0].length>0,n=t?e.length:1,i=t?e[0].length:e.length,r=ni(),o=r.createBuffer(n,i,r.sampleRate),a=!t&&n===1?[e]:e;for(let c=0;c<n;c++)o.copyToChannel(a[c],c);return this._buffer=o,this}toMono(e){if(ts(e))this.fromArray(this.toArray(e));else{let t=new Float32Array(this.length);const n=this.numberOfChannels;for(let i=0;i<n;i++){const r=this.toArray(i);for(let o=0;o<r.length;o++)t[o]+=r[o]}t=t.map(i=>i/n),this.fromArray(t)}return this}toArray(e){if(ts(e))return this.getChannelData(e);if(this.numberOfChannels===1)return this.toArray(0);{const t=[];for(let n=0;n<this.numberOfChannels;n++)t[n]=this.getChannelData(n);return t}}getChannelData(e){return this._buffer?this._buffer.getChannelData(e):new Float32Array(0)}slice(e,t=this.duration){const n=Math.floor(e*this.sampleRate),i=Math.floor(t*this.sampleRate);Ie(n<i,"The start time must be less than the end time");const r=i-n,o=ni().createBuffer(this.numberOfChannels,r,this.sampleRate);for(let a=0;a<this.numberOfChannels;a++)o.copyToChannel(this.getChannelData(a).subarray(n,i),a);return new it(o)}_reverse(){if(this.loaded)for(let e=0;e<this.numberOfChannels;e++)this.getChannelData(e).reverse();return this}get loaded(){return this.length>0}get duration(){return this._buffer?this._buffer.duration:0}get length(){return this._buffer?this._buffer.length:0}get numberOfChannels(){return this._buffer?this._buffer.numberOfChannels:0}get reverse(){return this._reversed}set reverse(e){this._reversed!==e&&(this._reversed=e,this._reverse())}static fromArray(e){return new it().fromArray(e)}static fromUrl(e){return Dt(this,void 0,void 0,function*(){return yield new it().load(e)})}static load(e){return Dt(this,void 0,void 0,function*(){const t=e.match(/\[([^\]\[]+\|.+)\]$/);if(t){const a=t[1].split("|");let c=a[0];for(const l of a)if(it.supportsType(l)){c=l;break}e=e.replace(t[0],c)}const n=it.baseUrl===""||it.baseUrl.endsWith("/")?it.baseUrl:it.baseUrl+"/",i=yield fetch(n+e);if(!i.ok)throw new Error(`could not load url: ${e}`);const r=yield i.arrayBuffer();return yield ni().decodeAudioData(r)})}static supportsType(e){const t=e.split("."),n=t[t.length-1];return document.createElement("audio").canPlayType("audio/"+n)!==""}static loaded(){return Dt(this,void 0,void 0,function*(){for(yield Promise.resolve();it.downloads.length;)yield it.downloads[0]})}}it.baseUrl="";it.downloads=[];class Pd extends Ha{constructor(){super({clockSource:"offline",context:Gc(arguments[0])?arguments[0]:ZR(arguments[0],arguments[1]*arguments[2],arguments[2]),lookAhead:0,updateInterval:Gc(arguments[0])?128/arguments[0].sampleRate:128/arguments[2]}),this.name="OfflineContext",this._currentTime=0,this.isOffline=!0,this._duration=Gc(arguments[0])?arguments[0].length/arguments[0].sampleRate:arguments[1]}now(){return this._currentTime}get currentTime(){return this._currentTime}_renderClock(e){return Dt(this,void 0,void 0,function*(){let t=0;for(;this._duration-this._currentTime>=0;){this.emit("tick"),this._currentTime+=128/this.sampleRate,t++;const n=Math.floor(this.sampleRate/128);e&&t%n===0&&(yield new Promise(i=>setTimeout(i,1)))}})}render(e=!0){return Dt(this,void 0,void 0,function*(){yield this.workletsAreReady(),yield this._renderClock(e);const t=yield this._context.startRendering();return new it(t)})}close(){return Promise.resolve()}}const Z_=new aI;let io=Z_;function ni(){return io===Z_&&QR&&cI(new Ha),io}function cI(s){Xr(s)?io=new Ha(s):Gc(s)?io=new Pd(s):io=s}function lI(){return io.resume()}if(cr&&!cr.TONE_SILENCE_LOGGING){const e=` * Tone.js v${Qg} * `;console.log(`%c${e}`,"background: #000; color: #fff")}function uI(s){return Math.pow(10,s/20)}function hI(s){return 20*(Math.log(s)/Math.LN10)}function Q_(s){return Math.pow(2,s/12)}let Yl=440;function dI(){return Yl}function fI(s){Yl=s}function er(s){return Math.round(J_(s))}function J_(s){return 69+12*Math.log2(s/Yl)}function ev(s){return Yl*Math.pow(2,(s-69)/12)}class Nd extends os{constructor(e,t,n){super(),this.defaultUnits="s",this._val=t,this._units=n,this.context=e,this._expressions=this._getExpressions()}_getExpressions(){return{hz:{method:e=>this._frequencyToUnits(parseFloat(e)),regexp:/^(\d+(?:\.\d+)?)hz$/i},i:{method:e=>this._ticksToUnits(parseInt(e,10)),regexp:/^(\d+)i$/i},m:{method:e=>this._beatsToUnits(parseInt(e,10)*this._getTimeSignature()),regexp:/^(\d+)m$/i},n:{method:(e,t)=>{const n=parseInt(e,10),i=t==="."?1.5:1;return n===1?this._beatsToUnits(this._getTimeSignature())*i:this._beatsToUnits(4/n)*i},regexp:/^(\d+)n(\.?)$/i},number:{method:e=>this._expressions[this.defaultUnits].method.call(this,e),regexp:/^(\d+(?:\.\d+)?)$/},s:{method:e=>this._secondsToUnits(parseFloat(e)),regexp:/^(\d+(?:\.\d+)?)s$/},samples:{method:e=>parseInt(e,10)/this.context.sampleRate,regexp:/^(\d+)samples$/},t:{method:e=>{const t=parseInt(e,10);return this._beatsToUnits(8/(Math.floor(t)*3))},regexp:/^(\d+)t$/i},tr:{method:(e,t,n)=>{let i=0;return e&&e!=="0"&&(i+=this._beatsToUnits(this._getTimeSignature()*parseFloat(e))),t&&t!=="0"&&(i+=this._beatsToUnits(parseFloat(t))),n&&n!=="0"&&(i+=this._beatsToUnits(parseFloat(n)/4)),i},regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/}}}valueOf(){if(this._val instanceof Nd&&this.fromType(this._val),qn(this._val))return this._noArg();if(Si(this._val)&&qn(this._units)){for(const e in this._expressions)if(this._expressions[e].regexp.test(this._val.trim())){this._units=e;break}}else if(ar(this._val)){let e=0;for(const t in this._val)if($e(this._val[t])){const n=this._val[t],i=new this.constructor(this.context,t).valueOf()*n;e+=i}return e}if($e(this._units)){const e=this._expressions[this._units],t=this._val.toString().trim().match(e.regexp);return t?e.method.apply(this,t.slice(1)):e.method.call(this,this._val)}else return Si(this._val)?parseFloat(this._val):this._val}_frequencyToUnits(e){return 1/e}_beatsToUnits(e){return 60/this._getBpm()*e}_secondsToUnits(e){return e}_ticksToUnits(e){return e*this._beatsToUnits(1)/this._getPPQ()}_noArg(){return this._now()}_getBpm(){return this.context.transport.bpm.value}_getTimeSignature(){return this.context.transport.timeSignature}_getPPQ(){return this.context.transport.PPQ}fromType(e){switch(this._units=void 0,this.defaultUnits){case"s":this._val=e.toSeconds();break;case"i":this._val=e.toTicks();break;case"hz":this._val=e.toFrequency();break;case"midi":this._val=e.toMidi();break}return this}toFrequency(){return 1/this.toSeconds()}toSamples(){return this.toSeconds()*this.context.sampleRate}toMilliseconds(){return this.toSeconds()*1e3}}class ii extends Nd{constructor(){super(...arguments),this.name="TimeClass"}_getExpressions(){return Object.assign(super._getExpressions(),{now:{method:e=>this._now()+new this.constructor(this.context,e).valueOf(),regexp:/^\+(.+)/},quantize:{method:e=>{const t=new ii(this.context,e).valueOf();return this._secondsToUnits(this.context.transport.nextSubdivision(t))},regexp:/^@(.+)/}})}quantize(e,t=1){const n=new this.constructor(this.context,e).valueOf(),i=this.valueOf(),a=Math.round(i/n)*n-i;return i+a*t}toNotation(){const e=this.toSeconds(),t=["1m"];for(let r=1;r<9;r++){const o=Math.pow(2,r);t.push(o+"n."),t.push(o+"n"),t.push(o+"t")}t.push("0");let n=t[0],i=new ii(this.context,t[0]).toSeconds();return t.forEach(r=>{const o=new ii(this.context,r).toSeconds();Math.abs(o-e)<Math.abs(i-e)&&(n=r,i=o)}),n}toBarsBeatsSixteenths(){const e=this._beatsToUnits(1);let t=this.valueOf()/e;t=parseFloat(t.toFixed(4));const n=Math.floor(t/this._getTimeSignature());let i=t%1*4;t=Math.floor(t)%this._getTimeSignature();const r=i.toString();return r.length>3&&(i=parseFloat(parseFloat(r).toFixed(3))),[n,t,i].join(":")}toTicks(){const e=this._beatsToUnits(1),t=this.valueOf()/e;return Math.round(t*this._getPPQ())}toSeconds(){return this.valueOf()}toMidi(){return er(this.toFrequency())}_now(){return this.context.now()}}class In extends ii{constructor(){super(...arguments),this.name="Frequency",this.defaultUnits="hz"}static get A4(){return dI()}static set A4(e){fI(e)}_getExpressions(){return Object.assign({},super._getExpressions(),{midi:{regexp:/^(\d+(?:\.\d+)?midi)/,method(e){return this.defaultUnits==="midi"?e:In.mtof(e)}},note:{regexp:/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,method(e,t){const i=pI[e.toLowerCase()]+(parseInt(t,10)+1)*12;return this.defaultUnits==="midi"?i:In.mtof(i)}},tr:{regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,method(e,t,n){let i=1;return e&&e!=="0"&&(i*=this._beatsToUnits(this._getTimeSignature()*parseFloat(e))),t&&t!=="0"&&(i*=this._beatsToUnits(parseFloat(t))),n&&n!=="0"&&(i*=this._beatsToUnits(parseFloat(n)/4)),i}}})}transpose(e){return new In(this.context,this.valueOf()*Q_(e))}harmonize(e){return e.map(t=>this.transpose(t))}toMidi(){return er(this.valueOf())}toNote(){const e=this.toFrequency(),t=Math.log2(e/In.A4);let n=Math.round(12*t)+57;const i=Math.floor(n/12);return i<0&&(n+=-12*i),mI[n%12]+i.toString()}toSeconds(){return 1/super.toSeconds()}toTicks(){const e=this._beatsToUnits(1),t=this.valueOf()/e;return Math.floor(t*this._getPPQ())}_noArg(){return 0}_frequencyToUnits(e){return e}_ticksToUnits(e){return 1/(e*60/(this._getBpm()*this._getPPQ()))}_beatsToUnits(e){return 1/super._beatsToUnits(e)}_secondsToUnits(e){return 1/e}static mtof(e){return ev(e)}static ftom(e){return er(e)}}const pI={cbb:-2,cb:-1,c:0,"c#":1,cx:2,dbb:0,db:1,d:2,"d#":3,dx:4,ebb:2,eb:3,e:4,"e#":5,ex:6,fbb:3,fb:4,f:5,"f#":6,fx:7,gbb:5,gb:6,g:7,"g#":8,gx:9,abb:7,ab:8,a:9,"a#":10,ax:11,bbb:9,bb:10,b:11,"b#":12,bx:13},mI=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];class oa extends ii{constructor(){super(...arguments),this.name="TransportTime"}_now(){return this.context.transport.seconds}}class Sn extends os{constructor(){super();const e=Q(Sn.getDefaults(),arguments,["context"]);this.defaultContext?this.context=this.defaultContext:this.context=e.context}static getDefaults(){return{context:ni()}}now(){return this.context.currentTime+this.context.lookAhead}immediate(){return this.context.currentTime}get sampleTime(){return 1/this.context.sampleRate}get blockTime(){return 128/this.context.sampleRate}toSeconds(e){return new ii(this.context,e).toSeconds()}toFrequency(e){return new In(this.context,e).toFrequency()}toTicks(e){return new oa(this.context,e).toTicks()}_getPartialProperties(e){const t=this.get();return Object.keys(t).forEach(n=>{qn(e[n])&&delete t[n]}),t}get(){const e=iI(this);return Object.keys(e).forEach(t=>{if(Reflect.has(this,t)){const n=this[t];$e(n)&&$e(n.value)&&$e(n.setValueAtTime)?e[t]=n.value:n instanceof Sn?e[t]=n._getPartialProperties(e[t]):Dn(n)||ts(n)||Si(n)||$R(n)?e[t]=n:delete e[t]}}),e}set(e){return Object.keys(e).forEach(t=>{Reflect.has(this,t)&&$e(this[t])&&(this[t]&&$e(this[t].value)&&$e(this[t].setValueAtTime)?this[t].value!==e[t]&&(this[t].value=e[t]):this[t]instanceof Sn?this[t].set(e[t]):this[t]=e[t])}),this}}class Ld extends Ri{constructor(e="stopped"){super(),this.name="StateTimeline",this._initial=e,this.setStateAtTime(this._initial,0)}getValueAtTime(e){const t=this.get(e);return t!==null?t.state:this._initial}setStateAtTime(e,t,n){return Es(t,0),this.add(Object.assign({},n,{state:e,time:t})),this}getLastState(e,t){const n=this._search(t);for(let i=n;i>=0;i--){const r=this._timeline[i];if(r.state===e)return r}}getNextState(e,t){const n=this._search(t);if(n!==-1)for(let i=n;i<this._timeline.length;i++){const r=this._timeline[i];if(r.state===e)return r}}}class Ye extends Sn{constructor(){super(Q(Ye.getDefaults(),arguments,["param","units","convert"])),this.name="Param",this.overridden=!1,this._minOutput=1e-7;const e=Q(Ye.getDefaults(),arguments,["param","units","convert"]);for(Ie($e(e.param)&&(pr(e.param)||e.param instanceof Ye),"param must be an AudioParam");!pr(e.param);)e.param=e.param._param;this._swappable=$e(e.swappable)?e.swappable:!1,this._swappable?(this.input=this.context.createGain(),this._param=e.param,this.input.connect(this._param)):this._param=this.input=e.param,this._events=new Ri(1e3),this._initialValue=this._param.defaultValue,this.units=e.units,this.convert=e.convert,this._minValue=e.minValue,this._maxValue=e.maxValue,$e(e.value)&&e.value!==this._toType(this._initialValue)&&this.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(Sn.getDefaults(),{convert:!0,units:"number"})}get value(){const e=this.now();return this.getValueAtTime(e)}set value(e){this.cancelScheduledValues(this.now()),this.setValueAtTime(e,this.now())}get minValue(){return $e(this._minValue)?this._minValue:this.units==="time"||this.units==="frequency"||this.units==="normalRange"||this.units==="positive"||this.units==="transportTime"||this.units==="ticks"||this.units==="bpm"||this.units==="hertz"||this.units==="samples"?0:this.units==="audioRange"?-1:this.units==="decibels"?-1/0:this._param.minValue}get maxValue(){return $e(this._maxValue)?this._maxValue:this.units==="normalRange"||this.units==="audioRange"?1:this._param.maxValue}_is(e,t){return this.units===t}_assertRange(e){return $e(this.maxValue)&&$e(this.minValue)&&Es(e,this._fromType(this.minValue),this._fromType(this.maxValue)),e}_fromType(e){return this.convert&&!this.overridden?this._is(e,"time")?this.toSeconds(e):this._is(e,"decibels")?uI(e):this._is(e,"frequency")?this.toFrequency(e):e:this.overridden?0:e}_toType(e){return this.convert&&this.units==="decibels"?hI(e):e}setValueAtTime(e,t){const n=this.toSeconds(t),i=this._fromType(e);return Ie(isFinite(i)&&isFinite(n),`Invalid argument(s) to setValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._assertRange(i),this.log(this.units,"setValueAtTime",e,n),this._events.add({time:n,type:"setValueAtTime",value:i}),this._param.setValueAtTime(i,n),this}getValueAtTime(e){const t=Math.max(this.toSeconds(e),0),n=this._events.getAfter(t),i=this._events.get(t);let r=this._initialValue;if(i===null)r=this._initialValue;else if(i.type==="setTargetAtTime"&&(n===null||n.type==="setValueAtTime")){const o=this._events.getBefore(i.time);let a;o===null?a=this._initialValue:a=o.value,i.type==="setTargetAtTime"&&(r=this._exponentialApproach(i.time,a,i.value,i.constant,t))}else if(n===null)r=i.value;else if(n.type==="linearRampToValueAtTime"||n.type==="exponentialRampToValueAtTime"){let o=i.value;if(i.type==="setTargetAtTime"){const a=this._events.getBefore(i.time);a===null?o=this._initialValue:o=a.value}n.type==="linearRampToValueAtTime"?r=this._linearInterpolate(i.time,o,n.time,n.value,t):r=this._exponentialInterpolate(i.time,o,n.time,n.value,t)}else r=i.value;return this._toType(r)}setRampPoint(e){e=this.toSeconds(e);let t=this.getValueAtTime(e);return this.cancelAndHoldAtTime(e),this._fromType(t)===0&&(t=this._toType(this._minOutput)),this.setValueAtTime(t,e),this}linearRampToValueAtTime(e,t){const n=this._fromType(e),i=this.toSeconds(t);return Ie(isFinite(n)&&isFinite(i),`Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._assertRange(n),this._events.add({time:i,type:"linearRampToValueAtTime",value:n}),this.log(this.units,"linearRampToValueAtTime",e,i),this._param.linearRampToValueAtTime(n,i),this}exponentialRampToValueAtTime(e,t){let n=this._fromType(e);n=ei(n,0)?this._minOutput:n,this._assertRange(n);const i=this.toSeconds(t);return Ie(isFinite(n)&&isFinite(i),`Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._events.add({time:i,type:"exponentialRampToValueAtTime",value:n}),this.log(this.units,"exponentialRampToValueAtTime",e,i),this._param.exponentialRampToValueAtTime(n,i),this}exponentialRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialRampToValueAtTime(e,n+this.toSeconds(t)),this}linearRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.linearRampToValueAtTime(e,n+this.toSeconds(t)),this}targetRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialApproachValueAtTime(e,n,t),this}exponentialApproachValueAtTime(e,t,n){t=this.toSeconds(t),n=this.toSeconds(n);const i=Math.log(n+1)/Math.log(200);return this.setTargetAtTime(e,t,i),this.cancelAndHoldAtTime(t+n*.9),this.linearRampToValueAtTime(e,t+n),this}setTargetAtTime(e,t,n){const i=this._fromType(e);Ie(isFinite(n)&&n>0,"timeConstant must be a number greater than 0");const r=this.toSeconds(t);return this._assertRange(i),Ie(isFinite(i)&&isFinite(r),`Invalid argument(s) to setTargetAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._events.add({constant:n,time:r,type:"setTargetAtTime",value:i}),this.log(this.units,"setTargetAtTime",e,r,n),this._param.setTargetAtTime(i,r,n),this}setValueCurveAtTime(e,t,n,i=1){n=this.toSeconds(n),t=this.toSeconds(t);const r=this._fromType(e[0])*i;this.setValueAtTime(this._toType(r),t);const o=n/(e.length-1);for(let a=1;a<e.length;a++){const c=this._fromType(e[a])*i;this.linearRampToValueAtTime(this._toType(c),t+a*o)}return this}cancelScheduledValues(e){const t=this.toSeconds(e);return Ie(isFinite(t),`Invalid argument to cancelScheduledValues: ${JSON.stringify(e)}`),this._events.cancel(t),this._param.cancelScheduledValues(t),this.log(this.units,"cancelScheduledValues",t),this}cancelAndHoldAtTime(e){const t=this.toSeconds(e),n=this._fromType(this.getValueAtTime(t));Ie(isFinite(t),`Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(e)}`),this.log(this.units,"cancelAndHoldAtTime",t,"value="+n);const i=this._events.get(t),r=this._events.getAfter(t);return i&&ei(i.time,t)?r?(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time)):(this._param.cancelAndHoldAtTime(t),this._events.cancel(t+this.sampleTime)):r&&(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time),r.type==="linearRampToValueAtTime"?this.linearRampToValueAtTime(this._toType(n),t):r.type==="exponentialRampToValueAtTime"&&this.exponentialRampToValueAtTime(this._toType(n),t)),this._events.add({time:t,type:"setValueAtTime",value:n}),this._param.setValueAtTime(n,t),this}rampTo(e,t=.1,n){return this.units==="frequency"||this.units==="bpm"||this.units==="decibels"?this.exponentialRampTo(e,t,n):this.linearRampTo(e,t,n),this}apply(e){const t=this.context.currentTime;e.setValueAtTime(this.getValueAtTime(t),t);const n=this._events.get(t);if(n&&n.type==="setTargetAtTime"){const i=this._events.getAfter(n.time),r=i?i.time:t+2,o=(r-t)/10;for(let a=t;a<r;a+=o)e.linearRampToValueAtTime(this.getValueAtTime(a),a)}return this._events.forEachAfter(this.context.currentTime,i=>{i.type==="cancelScheduledValues"?e.cancelScheduledValues(i.time):i.type==="setTargetAtTime"?e.setTargetAtTime(i.value,i.time,i.constant):e[i.type](i.value,i.time)}),this}setParam(e){Ie(this._swappable,"The Param must be assigned as 'swappable' in the constructor");const t=this.input;return t.disconnect(this._param),this.apply(e),this._param=e,t.connect(this._param),this}dispose(){return super.dispose(),this._events.dispose(),this}get defaultValue(){return this._toType(this._param.defaultValue)}_exponentialApproach(e,t,n,i,r){return n+(t-n)*Math.exp(-(r-e)/i)}_linearInterpolate(e,t,n,i,r){return t+(i-t)*((r-e)/(n-e))}_exponentialInterpolate(e,t,n,i,r){return t*Math.pow(i/t,(r-e)/(n-e))}}class xe extends Sn{constructor(){super(...arguments),this.name="ToneAudioNode",this._internalChannels=[]}get numberOfInputs(){return $e(this.input)?pr(this.input)||this.input instanceof Ye?1:this.input.numberOfInputs:0}get numberOfOutputs(){return $e(this.output)?this.output.numberOfOutputs:0}_isAudioNode(e){return $e(e)&&(e instanceof xe||Ms(e))}_getInternalNodes(){const e=this._internalChannels.slice(0);return this._isAudioNode(this.input)&&e.push(this.input),this._isAudioNode(this.output)&&this.input!==this.output&&e.push(this.output),e}_setChannelProperties(e){this._getInternalNodes().forEach(n=>{n.channelCount=e.channelCount,n.channelCountMode=e.channelCountMode,n.channelInterpretation=e.channelInterpretation})}_getChannelProperties(){const e=this._getInternalNodes();Ie(e.length>0,"ToneAudioNode does not have any internal nodes");const t=e[0];return{channelCount:t.channelCount,channelCountMode:t.channelCountMode,channelInterpretation:t.channelInterpretation}}get channelCount(){return this._getChannelProperties().channelCount}set channelCount(e){const t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelCount:e}))}get channelCountMode(){return this._getChannelProperties().channelCountMode}set channelCountMode(e){const t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelCountMode:e}))}get channelInterpretation(){return this._getChannelProperties().channelInterpretation}set channelInterpretation(e){const t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelInterpretation:e}))}connect(e,t=0,n=0){return Mi(this,e,t,n),this}toDestination(){return this.connect(this.context.destination),this}toMaster(){return Rd("toMaster() has been renamed toDestination()"),this.toDestination()}disconnect(e,t=0,n=0){return gI(this,e,t,n),this}chain(...e){return As(this,...e),this}fan(...e){return e.forEach(t=>this.connect(t)),this}dispose(){return super.dispose(),$e(this.input)&&(this.input instanceof xe?this.input.dispose():Ms(this.input)&&this.input.disconnect()),$e(this.output)&&(this.output instanceof xe?this.output.dispose():Ms(this.output)&&this.output.disconnect()),this._internalChannels=[],this}}function As(...s){const e=s.shift();s.reduce((t,n)=>(t instanceof xe?t.connect(n):Ms(t)&&Mi(t,n),n),e)}function Mi(s,e,t=0,n=0){for(Ie($e(s),"Cannot connect from undefined node"),Ie($e(e),"Cannot connect to undefined node"),(e instanceof xe||Ms(e))&&Ie(e.numberOfInputs>0,"Cannot connect to node with no inputs"),Ie(s.numberOfOutputs>0,"Cannot connect from node with no outputs");e instanceof xe||e instanceof Ye;)$e(e.input)&&(e=e.input);for(;s instanceof xe;)$e(s.output)&&(s=s.output);pr(e)?s.connect(e,t):s.connect(e,t,n)}function gI(s,e,t=0,n=0){if($e(e))for(;e instanceof xe;)e=e.input;for(;!Ms(s);)$e(s.output)&&(s=s.output);pr(e)?s.disconnect(e,t):Ms(e)?s.disconnect(e,t,n):s.disconnect()}class at extends xe{constructor(){super(Q(at.getDefaults(),arguments,["gain","units"])),this.name="Gain",this._gainNode=this.context.createGain(),this.input=this._gainNode,this.output=this._gainNode;const e=Q(at.getDefaults(),arguments,["gain","units"]);this.gain=new Ye({context:this.context,convert:e.convert,param:this._gainNode.gain,units:e.units,value:e.gain,minValue:e.minValue,maxValue:e.maxValue}),Ze(this,"gain")}static getDefaults(){return Object.assign(xe.getDefaults(),{convert:!0,gain:1,units:"gain"})}dispose(){return super.dispose(),this._gainNode.disconnect(),this.gain.dispose(),this}}class So extends xe{constructor(e){super(e),this.onended=ot,this._startTime=-1,this._stopTime=-1,this._timeout=-1,this.output=new at({context:this.context,gain:0}),this._gainNode=this.output,this.getStateAtTime=function(t){const n=this.toSeconds(t);return this._startTime!==-1&&n>=this._startTime&&(this._stopTime===-1||n<=this._stopTime)?"started":"stopped"},this._fadeIn=e.fadeIn,this._fadeOut=e.fadeOut,this._curve=e.curve,this.onended=e.onended}static getDefaults(){return Object.assign(xe.getDefaults(),{curve:"linear",fadeIn:0,fadeOut:0,onended:ot})}_startGain(e,t=1){Ie(this._startTime===-1,"Source cannot be started more than once");const n=this.toSeconds(this._fadeIn);return this._startTime=e+n,this._startTime=Math.max(this._startTime,this.context.currentTime),n>0?(this._gainNode.gain.setValueAtTime(0,e),this._curve==="linear"?this._gainNode.gain.linearRampToValueAtTime(t,e+n):this._gainNode.gain.exponentialApproachValueAtTime(t,e,n)):this._gainNode.gain.setValueAtTime(t,e),this}stop(e){return this.log("stop",e),this._stopGain(this.toSeconds(e)),this}_stopGain(e){Ie(this._startTime!==-1,"'start' must be called before 'stop'"),this.cancelStop();const t=this.toSeconds(this._fadeOut);return this._stopTime=this.toSeconds(e)+t,this._stopTime=Math.max(this._stopTime,this.context.currentTime),t>0?this._curve==="linear"?this._gainNode.gain.linearRampTo(0,t,e):this._gainNode.gain.targetRampTo(0,t,e):(this._gainNode.gain.cancelAndHoldAtTime(e),this._gainNode.gain.setValueAtTime(0,e)),this.context.clearTimeout(this._timeout),this._timeout=this.context.setTimeout(()=>{const n=this._curve==="exponential"?t*2:0;this._stopSource(this.now()+n),this._onended()},this._stopTime-this.context.currentTime),this}_onended(){if(this.onended!==ot&&(this.onended(this),this.onended=ot,!this.context.isOffline)){const e=()=>this.dispose();typeof window.requestIdleCallback<"u"?window.requestIdleCallback(e):setTimeout(e,1e3)}}get state(){return this.getStateAtTime(this.now())}cancelStop(){return this.log("cancelStop"),Ie(this._startTime!==-1,"Source is not started"),this._gainNode.gain.cancelScheduledValues(this._startTime+this.sampleTime),this.context.clearTimeout(this._timeout),this._stopTime=-1,this}dispose(){return super.dispose(),this._gainNode.disconnect(),this}}class ll extends So{constructor(){super(Q(ll.getDefaults(),arguments,["offset"])),this.name="ToneConstantSource",this._source=this.context.createConstantSource();const e=Q(ll.getDefaults(),arguments,["offset"]);Mi(this._source,this._gainNode),this.offset=new Ye({context:this.context,convert:e.convert,param:this._source.offset,units:e.units,value:e.offset,minValue:e.minValue,maxValue:e.maxValue})}static getDefaults(){return Object.assign(So.getDefaults(),{convert:!0,offset:1,units:"number"})}start(e){const t=this.toSeconds(e);return this.log("start",t),this._startGain(t),this._source.start(t),this}_stopSource(e){this._source.stop(e)}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._source.disconnect(),this.offset.dispose(),this}}class ut extends xe{constructor(){super(Q(ut.getDefaults(),arguments,["value","units"])),this.name="Signal",this.override=!0;const e=Q(ut.getDefaults(),arguments,["value","units"]);this.output=this._constantSource=new ll({context:this.context,convert:e.convert,offset:e.value,units:e.units,minValue:e.minValue,maxValue:e.maxValue}),this._constantSource.start(0),this.input=this._param=this._constantSource.offset}static getDefaults(){return Object.assign(xe.getDefaults(),{convert:!0,units:"number",value:0})}connect(e,t=0,n=0){return Od(this,e,t,n),this}dispose(){return super.dispose(),this._param.dispose(),this._constantSource.dispose(),this}setValueAtTime(e,t){return this._param.setValueAtTime(e,t),this}getValueAtTime(e){return this._param.getValueAtTime(e)}setRampPoint(e){return this._param.setRampPoint(e),this}linearRampToValueAtTime(e,t){return this._param.linearRampToValueAtTime(e,t),this}exponentialRampToValueAtTime(e,t){return this._param.exponentialRampToValueAtTime(e,t),this}exponentialRampTo(e,t,n){return this._param.exponentialRampTo(e,t,n),this}linearRampTo(e,t,n){return this._param.linearRampTo(e,t,n),this}targetRampTo(e,t,n){return this._param.targetRampTo(e,t,n),this}exponentialApproachValueAtTime(e,t,n){return this._param.exponentialApproachValueAtTime(e,t,n),this}setTargetAtTime(e,t,n){return this._param.setTargetAtTime(e,t,n),this}setValueCurveAtTime(e,t,n,i){return this._param.setValueCurveAtTime(e,t,n,i),this}cancelScheduledValues(e){return this._param.cancelScheduledValues(e),this}cancelAndHoldAtTime(e){return this._param.cancelAndHoldAtTime(e),this}rampTo(e,t,n){return this._param.rampTo(e,t,n),this}get value(){return this._param.value}set value(e){this._param.value=e}get convert(){return this._param.convert}set convert(e){this._param.convert=e}get units(){return this._param.units}get overridden(){return this._param.overridden}set overridden(e){this._param.overridden=e}get maxValue(){return this._param.maxValue}get minValue(){return this._param.minValue}apply(e){return this._param.apply(e),this}}function Od(s,e,t,n){(e instanceof Ye||pr(e)||e instanceof ut&&e.override)&&(e.cancelScheduledValues(0),e.setValueAtTime(0,0),e instanceof ut&&(e.overridden=!0)),Mi(s,e,t,n)}class ul extends Ye{constructor(){super(Q(ul.getDefaults(),arguments,["value"])),this.name="TickParam",this._events=new Ri(1/0),this._multiplier=1;const e=Q(ul.getDefaults(),arguments,["value"]);this._multiplier=e.multiplier,this._events.cancel(0),this._events.add({ticks:0,time:0,type:"setValueAtTime",value:this._fromType(e.value)}),this.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(Ye.getDefaults(),{multiplier:1,units:"hertz",value:1})}setTargetAtTime(e,t,n){t=this.toSeconds(t),this.setRampPoint(t);const i=this._fromType(e),r=this._events.get(t),o=Math.round(Math.max(1/n,1));for(let a=0;a<=o;a++){const c=n*a+t,l=this._exponentialApproach(r.time,r.value,i,n,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}setValueAtTime(e,t){const n=this.toSeconds(t);super.setValueAtTime(e,t);const i=this._events.get(n),r=this._events.previousEvent(i),o=this._getTicksUntilEvent(r,n);return i.ticks=Math.max(o,0),this}linearRampToValueAtTime(e,t){const n=this.toSeconds(t);super.linearRampToValueAtTime(e,t);const i=this._events.get(n),r=this._events.previousEvent(i),o=this._getTicksUntilEvent(r,n);return i.ticks=Math.max(o,0),this}exponentialRampToValueAtTime(e,t){t=this.toSeconds(t);const n=this._fromType(e),i=this._events.get(t),r=Math.round(Math.max((t-i.time)*10,1)),o=(t-i.time)/r;for(let a=0;a<=r;a++){const c=o*a+i.time,l=this._exponentialInterpolate(i.time,i.value,t,n,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}_getTicksUntilEvent(e,t){if(e===null)e={ticks:0,time:0,type:"setValueAtTime",value:0};else if(qn(e.ticks)){const o=this._events.previousEvent(e);e.ticks=this._getTicksUntilEvent(o,e.time)}const n=this._fromType(this.getValueAtTime(e.time));let i=this._fromType(this.getValueAtTime(t));const r=this._events.get(t);return r&&r.time===t&&r.type==="setValueAtTime"&&(i=this._fromType(this.getValueAtTime(t-this.sampleTime))),.5*(t-e.time)*(n+i)+e.ticks}getTicksAtTime(e){const t=this.toSeconds(e),n=this._events.get(t);return Math.max(this._getTicksUntilEvent(n,t),0)}getDurationOfTicks(e,t){const n=this.toSeconds(t),i=this.getTicksAtTime(t);return this.getTimeOfTick(i+e)-n}getTimeOfTick(e){const t=this._events.get(e,"ticks"),n=this._events.getAfter(e,"ticks");if(t&&t.ticks===e)return t.time;if(t&&n&&n.type==="linearRampToValueAtTime"&&t.value!==n.value){const i=this._fromType(this.getValueAtTime(t.time)),o=(this._fromType(this.getValueAtTime(n.time))-i)/(n.time-t.time),a=Math.sqrt(Math.pow(i,2)-2*o*(t.ticks-e)),c=(-i+a)/o,l=(-i-a)/o;return(c>0?c:l)+t.time}else return t?t.value===0?1/0:t.time+(e-t.ticks)/t.value:e/this._initialValue}ticksToTime(e,t){return this.getDurationOfTicks(e,t)}timeToTicks(e,t){const n=this.toSeconds(t),i=this.toSeconds(e),r=this.getTicksAtTime(n);return this.getTicksAtTime(n+i)-r}_fromType(e){return this.units==="bpm"&&this.multiplier?1/(60/e/this.multiplier):super._fromType(e)}_toType(e){return this.units==="bpm"&&this.multiplier?e/this.multiplier*60:super._toType(e)}get multiplier(){return this._multiplier}set multiplier(e){const t=this.value;this._multiplier=e,this.cancelScheduledValues(0),this.setValueAtTime(t,0)}}class hl extends ut{constructor(){super(Q(hl.getDefaults(),arguments,["value"])),this.name="TickSignal";const e=Q(hl.getDefaults(),arguments,["value"]);this.input=this._param=new ul({context:this.context,convert:e.convert,multiplier:e.multiplier,param:this._constantSource.offset,units:e.units,value:e.value})}static getDefaults(){return Object.assign(ut.getDefaults(),{multiplier:1,units:"hertz",value:1})}ticksToTime(e,t){return this._param.ticksToTime(e,t)}timeToTicks(e,t){return this._param.timeToTicks(e,t)}getTimeOfTick(e){return this._param.getTimeOfTick(e)}getDurationOfTicks(e,t){return this._param.getDurationOfTicks(e,t)}getTicksAtTime(e){return this._param.getTicksAtTime(e)}get multiplier(){return this._param.multiplier}set multiplier(e){this._param.multiplier=e}dispose(){return super.dispose(),this._param.dispose(),this}}class dl extends Sn{constructor(){super(Q(dl.getDefaults(),arguments,["frequency"])),this.name="TickSource",this._state=new Ld,this._tickOffset=new Ri;const e=Q(dl.getDefaults(),arguments,["frequency"]);this.frequency=new hl({context:this.context,units:e.units,value:e.frequency}),Ze(this,"frequency"),this._state.setStateAtTime("stopped",0),this.setTicksAtTime(0,0)}static getDefaults(){return Object.assign({frequency:1,units:"hertz"},Sn.getDefaults())}get state(){return this.getStateAtTime(this.now())}start(e,t){const n=this.toSeconds(e);return this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),$e(t)&&this.setTicksAtTime(t,n)),this}stop(e){const t=this.toSeconds(e);if(this._state.getValueAtTime(t)==="stopped"){const n=this._state.get(t);n&&n.time>0&&(this._tickOffset.cancel(n.time),this._state.cancel(n.time))}return this._state.cancel(t),this._state.setStateAtTime("stopped",t),this.setTicksAtTime(0,t),this}pause(e){const t=this.toSeconds(e);return this._state.getValueAtTime(t)==="started"&&this._state.setStateAtTime("paused",t),this}cancel(e){return e=this.toSeconds(e),this._state.cancel(e),this._tickOffset.cancel(e),this}getTicksAtTime(e){const t=this.toSeconds(e),n=this._state.getLastState("stopped",t),i={state:"paused",time:t};this._state.add(i);let r=n,o=0;return this._state.forEachBetween(n.time,t+this.sampleTime,a=>{let c=r.time;const l=this._tickOffset.get(a.time);l&&l.time>=r.time&&(o=l.ticks,c=l.time),r.state==="started"&&a.state!=="started"&&(o+=this.frequency.getTicksAtTime(a.time)-this.frequency.getTicksAtTime(c)),r=a}),this._state.remove(i),o}get ticks(){return this.getTicksAtTime(this.now())}set ticks(e){this.setTicksAtTime(e,this.now())}get seconds(){return this.getSecondsAtTime(this.now())}set seconds(e){const t=this.now(),n=this.frequency.timeToTicks(e,t);this.setTicksAtTime(n,t)}getSecondsAtTime(e){e=this.toSeconds(e);const t=this._state.getLastState("stopped",e),n={state:"paused",time:e};this._state.add(n);let i=t,r=0;return this._state.forEachBetween(t.time,e+this.sampleTime,o=>{let a=i.time;const c=this._tickOffset.get(o.time);c&&c.time>=i.time&&(r=c.seconds,a=c.time),i.state==="started"&&o.state!=="started"&&(r+=o.time-a),i=o}),this._state.remove(n),r}setTicksAtTime(e,t){return t=this.toSeconds(t),this._tickOffset.cancel(t),this._tickOffset.add({seconds:this.frequency.getDurationOfTicks(e,t),ticks:e,time:t}),this}getStateAtTime(e){return e=this.toSeconds(e),this._state.getValueAtTime(e)}getTimeOfTick(e,t=this.now()){const n=this._tickOffset.get(t),i=this._state.get(t),r=Math.max(n.time,i.time),o=this.frequency.getTicksAtTime(r)+e-n.ticks;return this.frequency.getTimeOfTick(o)}forEachTickBetween(e,t,n){let i=this._state.get(e);this._state.forEachBetween(e,t,o=>{i&&i.state==="started"&&o.state!=="started"&&this.forEachTickBetween(Math.max(i.time,e),o.time-this.sampleTime,n),i=o});let r=null;if(i&&i.state==="started"){const o=Math.max(i.time,e),a=this.frequency.getTicksAtTime(o),c=this.frequency.getTicksAtTime(i.time),l=a-c;let u=Math.ceil(l)-l;u=ei(u,1)?0:u;let h=this.frequency.getTimeOfTick(a+u);for(;h<t;){try{n(h,Math.round(this.getTicksAtTime(h)))}catch(d){r=d;break}h+=this.frequency.getDurationOfTicks(1,h)}}if(r)throw r;return this}dispose(){return super.dispose(),this._state.dispose(),this._tickOffset.dispose(),this.frequency.dispose(),this}}class pa extends Sn{constructor(){super(Q(pa.getDefaults(),arguments,["callback","frequency"])),this.name="Clock",this.callback=ot,this._lastUpdate=0,this._state=new Ld("stopped"),this._boundLoop=this._loop.bind(this);const e=Q(pa.getDefaults(),arguments,["callback","frequency"]);this.callback=e.callback,this._tickSource=new dl({context:this.context,frequency:e.frequency,units:e.units}),this._lastUpdate=0,this.frequency=this._tickSource.frequency,Ze(this,"frequency"),this._state.setStateAtTime("stopped",0),this.context.on("tick",this._boundLoop)}static getDefaults(){return Object.assign(Sn.getDefaults(),{callback:ot,frequency:1,units:"hertz"})}get state(){return this._state.getValueAtTime(this.now())}start(e,t){W_(this.context);const n=this.toSeconds(e);return this.log("start",n),this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),this._tickSource.start(n,t),n<this._lastUpdate&&this.emit("start",n,t)),this}stop(e){const t=this.toSeconds(e);return this.log("stop",t),this._state.cancel(t),this._state.setStateAtTime("stopped",t),this._tickSource.stop(t),t<this._lastUpdate&&this.emit("stop",t),this}pause(e){const t=this.toSeconds(e);return this._state.getValueAtTime(t)==="started"&&(this._state.setStateAtTime("paused",t),this._tickSource.pause(t),t<this._lastUpdate&&this.emit("pause",t)),this}get ticks(){return Math.ceil(this.getTicksAtTime(this.now()))}set ticks(e){this._tickSource.ticks=e}get seconds(){return this._tickSource.seconds}set seconds(e){this._tickSource.seconds=e}getSecondsAtTime(e){return this._tickSource.getSecondsAtTime(e)}setTicksAtTime(e,t){return this._tickSource.setTicksAtTime(e,t),this}getTimeOfTick(e,t=this.now()){return this._tickSource.getTimeOfTick(e,t)}getTicksAtTime(e){return this._tickSource.getTicksAtTime(e)}nextTickTime(e,t){const n=this.toSeconds(t),i=this.getTicksAtTime(n);return this._tickSource.getTimeOfTick(i+e,n)}_loop(){const e=this._lastUpdate,t=this.now();this._lastUpdate=t,this.log("loop",e,t),e!==t&&(this._state.forEachBetween(e,t,n=>{switch(n.state){case"started":const i=this._tickSource.getTicksAtTime(n.time);this.emit("start",n.time,i);break;case"stopped":n.time!==0&&this.emit("stop",n.time);break;case"paused":this.emit("pause",n.time);break}}),this._tickSource.forEachTickBetween(e,t,(n,i)=>{this.callback(n,i)}))}getStateAtTime(e){const t=this.toSeconds(e);return this._state.getValueAtTime(t)}dispose(){return super.dispose(),this.context.off("tick",this._boundLoop),this._tickSource.dispose(),this._state.dispose(),this}}Ga.mixin(pa);class fl extends xe{constructor(){super(Q(fl.getDefaults(),arguments,["delayTime","maxDelay"])),this.name="Delay";const e=Q(fl.getDefaults(),arguments,["delayTime","maxDelay"]),t=this.toSeconds(e.maxDelay);this._maxDelay=Math.max(t,this.toSeconds(e.delayTime)),this._delayNode=this.input=this.output=this.context.createDelay(t),this.delayTime=new Ye({context:this.context,param:this._delayNode.delayTime,units:"time",value:e.delayTime,minValue:0,maxValue:this.maxDelay}),Ze(this,"delayTime")}static getDefaults(){return Object.assign(xe.getDefaults(),{delayTime:0,maxDelay:1})}get maxDelay(){return this._maxDelay}dispose(){return super.dispose(),this._delayNode.disconnect(),this.delayTime.dispose(),this}}class Ud extends os{constructor(){super(),this.name="ToneAudioBuffers",this._buffers=new Map,this._loadingCount=0;const e=Q(Ud.getDefaults(),arguments,["urls","onload","baseUrl"],"urls");this.baseUrl=e.baseUrl,Object.keys(e.urls).forEach(t=>{this._loadingCount++;const n=e.urls[t];this.add(t,n,this._bufferLoaded.bind(this,e.onload),e.onerror)})}static getDefaults(){return{baseUrl:"",onerror:ot,onload:ot,urls:{}}}has(e){return this._buffers.has(e.toString())}get(e){return Ie(this.has(e),`ToneAudioBuffers has no buffer named: ${e}`),this._buffers.get(e.toString())}_bufferLoaded(e){this._loadingCount--,this._loadingCount===0&&e&&e()}get loaded(){return Array.from(this._buffers).every(([e,t])=>t.loaded)}add(e,t,n=ot,i=ot){return Si(t)?this._buffers.set(e.toString(),new it(this.baseUrl+t,n,i)):this._buffers.set(e.toString(),new it(t,n,i)),this}dispose(){return super.dispose(),this._buffers.forEach(e=>e.dispose()),this._buffers.clear(),this}}class pl extends In{constructor(){super(...arguments),this.name="MidiClass",this.defaultUnits="midi"}_frequencyToUnits(e){return er(super._frequencyToUnits(e))}_ticksToUnits(e){return er(super._ticksToUnits(e))}_beatsToUnits(e){return er(super._beatsToUnits(e))}_secondsToUnits(e){return er(super._secondsToUnits(e))}toMidi(){return this.valueOf()}toFrequency(){return ev(this.toMidi())}transpose(e){return new pl(this.context,this.toMidi()+e)}}class ji extends oa{constructor(){super(...arguments),this.name="Ticks",this.defaultUnits="i"}_now(){return this.context.transport.ticks}_beatsToUnits(e){return this._getPPQ()*e}_secondsToUnits(e){return Math.floor(e/(60/this._getBpm())*this._getPPQ())}_ticksToUnits(e){return e}toTicks(){return this.valueOf()}toSeconds(){return this.valueOf()/this._getPPQ()*(60/this._getBpm())}}class _I extends Sn{constructor(){super(...arguments),this.name="Draw",this.expiration=.25,this.anticipation=.008,this._events=new Ri,this._boundDrawLoop=this._drawLoop.bind(this),this._animationFrame=-1}schedule(e,t){return this._events.add({callback:e,time:this.toSeconds(t)}),this._events.length===1&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop)),this}cancel(e){return this._events.cancel(this.toSeconds(e)),this}_drawLoop(){const e=this.context.currentTime;for(;this._events.length&&this._events.peek().time-this.anticipation<=e;){const t=this._events.shift();t&&e-t.time<=this.expiration&&t.callback()}this._events.length>0&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop))}dispose(){return super.dispose(),this._events.dispose(),cancelAnimationFrame(this._animationFrame),this}}ql(s=>{s.draw=new _I({context:s})});jl(s=>{s.draw.dispose()});class vI extends os{constructor(){super(...arguments),this.name="IntervalTimeline",this._root=null,this._length=0}add(e){Ie($e(e.time),"Events must have a time property"),Ie($e(e.duration),"Events must have a duration parameter"),e.time=e.time.valueOf();let t=new yI(e.time,e.time+e.duration,e);for(this._root===null?this._root=t:this._root.insert(t),this._length++;t!==null;)t.updateHeight(),t.updateMax(),this._rebalance(t),t=t.parent;return this}remove(e){if(this._root!==null){const t=[];this._root.search(e.time,t);for(const n of t)if(n.event===e){this._removeNode(n),this._length--;break}}return this}get length(){return this._length}cancel(e){return this.forEachFrom(e,t=>this.remove(t)),this}_setRoot(e){this._root=e,this._root!==null&&(this._root.parent=null)}_replaceNodeInParent(e,t){e.parent!==null?(e.isLeftChild()?e.parent.left=t:e.parent.right=t,this._rebalance(e.parent)):this._setRoot(t)}_removeNode(e){if(e.left===null&&e.right===null)this._replaceNodeInParent(e,null);else if(e.right===null)this._replaceNodeInParent(e,e.left);else if(e.left===null)this._replaceNodeInParent(e,e.right);else{const t=e.getBalance();let n,i=null;if(t>0)if(e.left.right===null)n=e.left,n.right=e.right,i=n;else{for(n=e.left.right;n.right!==null;)n=n.right;n.parent&&(n.parent.right=n.left,i=n.parent,n.left=e.left,n.right=e.right)}else if(e.right.left===null)n=e.right,n.left=e.left,i=n;else{for(n=e.right.left;n.left!==null;)n=n.left;n.parent&&(n.parent.left=n.right,i=n.parent,n.left=e.left,n.right=e.right)}e.parent!==null?e.isLeftChild()?e.parent.left=n:e.parent.right=n:this._setRoot(n),i&&this._rebalance(i)}e.dispose()}_rotateLeft(e){const t=e.parent,n=e.isLeftChild(),i=e.right;i&&(e.right=i.left,i.left=e),t!==null?n?t.left=i:t.right=i:this._setRoot(i)}_rotateRight(e){const t=e.parent,n=e.isLeftChild(),i=e.left;i&&(e.left=i.right,i.right=e),t!==null?n?t.left=i:t.right=i:this._setRoot(i)}_rebalance(e){const t=e.getBalance();t>1&&e.left?e.left.getBalance()<0?this._rotateLeft(e.left):this._rotateRight(e):t<-1&&e.right&&(e.right.getBalance()>0?this._rotateRight(e.right):this._rotateLeft(e))}get(e){if(this._root!==null){const t=[];if(this._root.search(e,t),t.length>0){let n=t[0];for(let i=1;i<t.length;i++)t[i].low>n.low&&(n=t[i]);return n.event}}return null}forEach(e){if(this._root!==null){const t=[];this._root.traverse(n=>t.push(n)),t.forEach(n=>{n.event&&e(n.event)})}return this}forEachAtTime(e,t){if(this._root!==null){const n=[];this._root.search(e,n),n.forEach(i=>{i.event&&t(i.event)})}return this}forEachFrom(e,t){if(this._root!==null){const n=[];this._root.searchAfter(e,n),n.forEach(i=>{i.event&&t(i.event)})}return this}dispose(){return super.dispose(),this._root!==null&&this._root.traverse(e=>e.dispose()),this._root=null,this}}class yI{constructor(e,t,n){this._left=null,this._right=null,this.parent=null,this.height=0,this.event=n,this.low=e,this.high=t,this.max=this.high}insert(e){e.low<=this.low?this.left===null?this.left=e:this.left.insert(e):this.right===null?this.right=e:this.right.insert(e)}search(e,t){e>this.max||(this.left!==null&&this.left.search(e,t),this.low<=e&&this.high>e&&t.push(this),!(this.low>e)&&this.right!==null&&this.right.search(e,t))}searchAfter(e,t){this.low>=e&&(t.push(this),this.left!==null&&this.left.searchAfter(e,t)),this.right!==null&&this.right.searchAfter(e,t)}traverse(e){e(this),this.left!==null&&this.left.traverse(e),this.right!==null&&this.right.traverse(e)}updateHeight(){this.left!==null&&this.right!==null?this.height=Math.max(this.left.height,this.right.height)+1:this.right!==null?this.height=this.right.height+1:this.left!==null?this.height=this.left.height+1:this.height=0}updateMax(){this.max=this.high,this.left!==null&&(this.max=Math.max(this.max,this.left.max)),this.right!==null&&(this.max=Math.max(this.max,this.right.max))}getBalance(){let e=0;return this.left!==null&&this.right!==null?e=this.left.height-this.right.height:this.left!==null?e=this.left.height+1:this.right!==null&&(e=-(this.right.height+1)),e}isLeftChild(){return this.parent!==null&&this.parent.left===this}get left(){return this._left}set left(e){this._left=e,e!==null&&(e.parent=this),this.updateHeight(),this.updateMax()}get right(){return this._right}set right(e){this._right=e,e!==null&&(e.parent=this),this.updateHeight(),this.updateMax()}dispose(){this.parent=null,this._left=null,this._right=null,this.event=null}}class mr extends xe{constructor(){super(Q(mr.getDefaults(),arguments,["volume"])),this.name="Volume";const e=Q(mr.getDefaults(),arguments,["volume"]);this.input=this.output=new at({context:this.context,gain:e.volume,units:"decibels"}),this.volume=this.output.gain,Ze(this,"volume"),this._unmutedVolume=e.volume,this.mute=e.mute}static getDefaults(){return Object.assign(xe.getDefaults(),{mute:!1,volume:0})}get mute(){return this.volume.value===-1/0}set mute(e){!this.mute&&e?(this._unmutedVolume=this.volume.value,this.volume.value=-1/0):this.mute&&!e&&(this.volume.value=this._unmutedVolume)}dispose(){return super.dispose(),this.input.dispose(),this.volume.dispose(),this}}class ml extends xe{constructor(){super(Q(ml.getDefaults(),arguments)),this.name="Destination",this.input=new mr({context:this.context}),this.output=new at({context:this.context}),this.volume=this.input.volume;const e=Q(ml.getDefaults(),arguments);As(this.input,this.output,this.context.rawContext.destination),this.mute=e.mute,this._internalChannels=[this.input,this.context.rawContext.destination,this.output]}static getDefaults(){return Object.assign(xe.getDefaults(),{mute:!1,volume:0})}get mute(){return this.input.mute}set mute(e){this.input.mute=e}chain(...e){return this.input.disconnect(),e.unshift(this.input),e.push(this.output),As(...e),this}get maxChannelCount(){return this.context.rawContext.destination.maxChannelCount}dispose(){return super.dispose(),this.volume.dispose(),this}}ql(s=>{s.destination=new ml({context:s})});jl(s=>{s.destination.dispose()});class xI extends os{constructor(e){super(),this.name="TimelineValue",this._timeline=new Ri({memory:10}),this._initialValue=e}set(e,t){return this._timeline.add({value:e,time:t}),this}get(e){const t=this._timeline.get(e);return t?t.value:this._initialValue}}class ws{constructor(e,t){this.id=ws._eventId++;const n=Object.assign(ws.getDefaults(),t);this.transport=e,this.callback=n.callback,this._once=n.once,this.time=n.time}static getDefaults(){return{callback:ot,once:!1,time:0}}invoke(e){this.callback&&(this.callback(e),this._once&&this.transport.clear(this.id))}dispose(){return this.callback=void 0,this}}ws._eventId=0;class Fd extends ws{constructor(e,t){super(e,t),this._currentId=-1,this._nextId=-1,this._nextTick=this.time,this._boundRestart=this._restart.bind(this);const n=Object.assign(Fd.getDefaults(),t);this.duration=new ji(e.context,n.duration).valueOf(),this._interval=new ji(e.context,n.interval).valueOf(),this._nextTick=n.time,this.transport.on("start",this._boundRestart),this.transport.on("loopStart",this._boundRestart),this.context=this.transport.context,this._restart()}static getDefaults(){return Object.assign({},ws.getDefaults(),{duration:1/0,interval:1,once:!1})}invoke(e){this._createEvents(e),super.invoke(e)}_createEvents(e){const t=this.transport.getTicksAtTime(e);t>=this.time&&t>=this._nextTick&&this._nextTick+this._interval<this.time+this.duration&&(this._nextTick+=this._interval,this._currentId=this._nextId,this._nextId=this.transport.scheduleOnce(this.invoke.bind(this),new ji(this.context,this._nextTick).toSeconds()))}_restart(e){this.transport.clear(this._currentId),this.transport.clear(this._nextId),this._nextTick=this.time;const t=this.transport.getTicksAtTime(e);t>this.time&&(this._nextTick=this.time+Math.ceil((t-this.time)/this._interval)*this._interval),this._currentId=this.transport.scheduleOnce(this.invoke.bind(this),new ji(this.context,this._nextTick).toSeconds()),this._nextTick+=this._interval,this._nextId=this.transport.scheduleOnce(this.invoke.bind(this),new ji(this.context,this._nextTick).toSeconds())}dispose(){return super.dispose(),this.transport.clear(this._currentId),this.transport.clear(this._nextId),this.transport.off("start",this._boundRestart),this.transport.off("loopStart",this._boundRestart),this}}class ma extends Sn{constructor(){super(Q(ma.getDefaults(),arguments)),this.name="Transport",this._loop=new xI(!1),this._loopStart=0,this._loopEnd=0,this._scheduledEvents={},this._timeline=new Ri,this._repeatedEvents=new vI,this._syncedSignals=[],this._swingAmount=0;const e=Q(ma.getDefaults(),arguments);this._ppq=e.ppq,this._clock=new pa({callback:this._processTick.bind(this),context:this.context,frequency:0,units:"bpm"}),this._bindClockEvents(),this.bpm=this._clock.frequency,this._clock.frequency.multiplier=e.ppq,this.bpm.setValueAtTime(e.bpm,0),Ze(this,"bpm"),this._timeSignature=e.timeSignature,this._swingTicks=e.ppq/2}static getDefaults(){return Object.assign(Sn.getDefaults(),{bpm:120,loopEnd:"4m",loopStart:0,ppq:192,swing:0,swingSubdivision:"8n",timeSignature:4})}_processTick(e,t){if(this._loop.get(e)&&t>=this._loopEnd&&(this.emit("loopEnd",e),this._clock.setTicksAtTime(this._loopStart,e),t=this._loopStart,this.emit("loopStart",e,this._clock.getSecondsAtTime(e)),this.emit("loop",e)),this._swingAmount>0&&t%this._ppq!==0&&t%(this._swingTicks*2)!==0){const n=t%(this._swingTicks*2)/(this._swingTicks*2),i=Math.sin(n*Math.PI)*this._swingAmount;e+=new ji(this.context,this._swingTicks*2/3).toSeconds()*i}this._timeline.forEachAtTime(t,n=>n.invoke(e))}schedule(e,t){const n=new ws(this,{callback:e,time:new oa(this.context,t).toTicks()});return this._addEvent(n,this._timeline)}scheduleRepeat(e,t,n,i=1/0){const r=new Fd(this,{callback:e,duration:new ii(this.context,i).toTicks(),interval:new ii(this.context,t).toTicks(),time:new oa(this.context,n).toTicks()});return this._addEvent(r,this._repeatedEvents)}scheduleOnce(e,t){const n=new ws(this,{callback:e,once:!0,time:new oa(this.context,t).toTicks()});return this._addEvent(n,this._timeline)}clear(e){if(this._scheduledEvents.hasOwnProperty(e)){const t=this._scheduledEvents[e.toString()];t.timeline.remove(t.event),t.event.dispose(),delete this._scheduledEvents[e.toString()]}return this}_addEvent(e,t){return this._scheduledEvents[e.id.toString()]={event:e,timeline:t},t.add(e),e.id}cancel(e=0){const t=this.toTicks(e);return this._timeline.forEachFrom(t,n=>this.clear(n.id)),this._repeatedEvents.forEachFrom(t,n=>this.clear(n.id)),this}_bindClockEvents(){this._clock.on("start",(e,t)=>{t=new ji(this.context,t).toSeconds(),this.emit("start",e,t)}),this._clock.on("stop",e=>{this.emit("stop",e)}),this._clock.on("pause",e=>{this.emit("pause",e)})}get state(){return this._clock.getStateAtTime(this.now())}start(e,t){let n;return $e(t)&&(n=this.toTicks(t)),this._clock.start(e,n),this}stop(e){return this._clock.stop(e),this}pause(e){return this._clock.pause(e),this}toggle(e){return e=this.toSeconds(e),this._clock.getStateAtTime(e)!=="started"?this.start(e):this.stop(e),this}get timeSignature(){return this._timeSignature}set timeSignature(e){Dn(e)&&(e=e[0]/e[1]*4),this._timeSignature=e}get loopStart(){return new ii(this.context,this._loopStart,"i").toSeconds()}set loopStart(e){this._loopStart=this.toTicks(e)}get loopEnd(){return new ii(this.context,this._loopEnd,"i").toSeconds()}set loopEnd(e){this._loopEnd=this.toTicks(e)}get loop(){return this._loop.get(this.now())}set loop(e){this._loop.set(e,this.now())}setLoopPoints(e,t){return this.loopStart=e,this.loopEnd=t,this}get swing(){return this._swingAmount}set swing(e){this._swingAmount=e}get swingSubdivision(){return new ji(this.context,this._swingTicks).toNotation()}set swingSubdivision(e){this._swingTicks=this.toTicks(e)}get position(){const e=this.now(),t=this._clock.getTicksAtTime(e);return new ji(this.context,t).toBarsBeatsSixteenths()}set position(e){const t=this.toTicks(e);this.ticks=t}get seconds(){return this._clock.seconds}set seconds(e){const t=this.now(),n=this._clock.frequency.timeToTicks(e,t);this.ticks=n}get progress(){if(this.loop){const e=this.now();return(this._clock.getTicksAtTime(e)-this._loopStart)/(this._loopEnd-this._loopStart)}else return 0}get ticks(){return this._clock.ticks}set ticks(e){if(this._clock.ticks!==e){const t=this.now();if(this.state==="started"){const n=this._clock.getTicksAtTime(t),i=this._clock.frequency.getDurationOfTicks(Math.ceil(n)-n,t),r=t+i;this.emit("stop",r),this._clock.setTicksAtTime(e,r),this.emit("start",r,this._clock.getSecondsAtTime(r))}else this._clock.setTicksAtTime(e,t)}}getTicksAtTime(e){return Math.round(this._clock.getTicksAtTime(e))}getSecondsAtTime(e){return this._clock.getSecondsAtTime(e)}get PPQ(){return this._clock.frequency.multiplier}set PPQ(e){this._clock.frequency.multiplier=e}nextSubdivision(e){if(e=this.toTicks(e),this.state!=="started")return 0;{const t=this.now(),n=this.getTicksAtTime(t),i=e-n%e;return this._clock.nextTickTime(i,t)}}syncSignal(e,t){if(!t){const i=this.now();if(e.getValueAtTime(i)!==0){const o=1/(60/this.bpm.getValueAtTime(i)/this.PPQ);t=e.getValueAtTime(i)/o}else t=0}const n=new at(t);return this.bpm.connect(n),n.connect(e._param),this._syncedSignals.push({initial:e.value,ratio:n,signal:e}),e.value=0,this}unsyncSignal(e){for(let t=this._syncedSignals.length-1;t>=0;t--){const n=this._syncedSignals[t];n.signal===e&&(n.ratio.dispose(),n.signal.value=n.initial,this._syncedSignals.splice(t,1))}return this}dispose(){return super.dispose(),this._clock.dispose(),Dd(this,"bpm"),this._timeline.dispose(),this._repeatedEvents.dispose(),this}}Ga.mixin(ma);ql(s=>{s.transport=new ma({context:s})});jl(s=>{s.transport.dispose()});class en extends xe{constructor(e){super(e),this.input=void 0,this._state=new Ld("stopped"),this._synced=!1,this._scheduled=[],this._syncedStart=ot,this._syncedStop=ot,this._state.memory=100,this._state.increasing=!0,this._volume=this.output=new mr({context:this.context,mute:e.mute,volume:e.volume}),this.volume=this._volume.volume,Ze(this,"volume"),this.onstop=e.onstop}static getDefaults(){return Object.assign(xe.getDefaults(),{mute:!1,onstop:ot,volume:0})}get state(){return this._synced?this.context.transport.state==="started"?this._state.getValueAtTime(this.context.transport.seconds):"stopped":this._state.getValueAtTime(this.now())}get mute(){return this._volume.mute}set mute(e){this._volume.mute=e}_clampToCurrentTime(e){return this._synced?e:Math.max(e,this.context.currentTime)}start(e,t,n){let i=qn(e)&&this._synced?this.context.transport.seconds:this.toSeconds(e);if(i=this._clampToCurrentTime(i),!this._synced&&this._state.getValueAtTime(i)==="started")Ie(cl(i,this._state.get(i).time),"Start time must be strictly greater than previous start time"),this._state.cancel(i),this._state.setStateAtTime("started",i),this.log("restart",i),this.restart(i,t,n);else if(this.log("start",i),this._state.setStateAtTime("started",i),this._synced){const r=this._state.get(i);r&&(r.offset=this.toSeconds(no(t,0)),r.duration=n?this.toSeconds(n):void 0);const o=this.context.transport.schedule(a=>{this._start(a,t,n)},i);this._scheduled.push(o),this.context.transport.state==="started"&&this.context.transport.getSecondsAtTime(this.immediate())>i&&this._syncedStart(this.now(),this.context.transport.seconds)}else W_(this.context),this._start(i,t,n);return this}stop(e){let t=qn(e)&&this._synced?this.context.transport.seconds:this.toSeconds(e);if(t=this._clampToCurrentTime(t),this._state.getValueAtTime(t)==="started"||$e(this._state.getNextState("started",t))){if(this.log("stop",t),!this._synced)this._stop(t);else{const n=this.context.transport.schedule(this._stop.bind(this),t);this._scheduled.push(n)}this._state.cancel(t),this._state.setStateAtTime("stopped",t)}return this}restart(e,t,n){return e=this.toSeconds(e),this._state.getValueAtTime(e)==="started"&&(this._state.cancel(e),this._restart(e,t,n)),this}sync(){return this._synced||(this._synced=!0,this._syncedStart=(e,t)=>{if(t>0){const n=this._state.get(t);if(n&&n.state==="started"&&n.time!==t){const i=t-this.toSeconds(n.time);let r;n.duration&&(r=this.toSeconds(n.duration)-i),this._start(e,this.toSeconds(n.offset)+i,r)}}},this._syncedStop=e=>{const t=this.context.transport.getSecondsAtTime(Math.max(e-this.sampleTime,0));this._state.getValueAtTime(t)==="started"&&this._stop(e)},this.context.transport.on("start",this._syncedStart),this.context.transport.on("loopStart",this._syncedStart),this.context.transport.on("stop",this._syncedStop),this.context.transport.on("pause",this._syncedStop),this.context.transport.on("loopEnd",this._syncedStop)),this}unsync(){return this._synced&&(this.context.transport.off("stop",this._syncedStop),this.context.transport.off("pause",this._syncedStop),this.context.transport.off("loopEnd",this._syncedStop),this.context.transport.off("start",this._syncedStart),this.context.transport.off("loopStart",this._syncedStart)),this._synced=!1,this._scheduled.forEach(e=>this.context.transport.clear(e)),this._scheduled=[],this._state.cancel(0),this._stop(0),this}dispose(){return super.dispose(),this.onstop=ot,this.unsync(),this._volume.dispose(),this._state.dispose(),this}}class Mo extends So{constructor(){super(Q(Mo.getDefaults(),arguments,["url","onload"])),this.name="ToneBufferSource",this._source=this.context.createBufferSource(),this._internalChannels=[this._source],this._sourceStarted=!1,this._sourceStopped=!1;const e=Q(Mo.getDefaults(),arguments,["url","onload"]);Mi(this._source,this._gainNode),this._source.onended=()=>this._stopSource(),this.playbackRate=new Ye({context:this.context,param:this._source.playbackRate,units:"positive",value:e.playbackRate}),this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this._buffer=new it(e.url,e.onload,e.onerror),this._internalChannels.push(this._source)}static getDefaults(){return Object.assign(So.getDefaults(),{url:new it,loop:!1,loopEnd:0,loopStart:0,onload:ot,onerror:ot,playbackRate:1})}get fadeIn(){return this._fadeIn}set fadeIn(e){this._fadeIn=e}get fadeOut(){return this._fadeOut}set fadeOut(e){this._fadeOut=e}get curve(){return this._curve}set curve(e){this._curve=e}start(e,t,n,i=1){Ie(this.buffer.loaded,"buffer is either not set or not loaded");const r=this.toSeconds(e);this._startGain(r,i),this.loop?t=no(t,this.loopStart):t=no(t,0);let o=Math.max(this.toSeconds(t),0);if(this.loop){const a=this.toSeconds(this.loopEnd)||this.buffer.duration,c=this.toSeconds(this.loopStart),l=a-c;Ph(o,a)&&(o=(o-c)%l+c),ei(o,this.buffer.duration)&&(o=0)}if(this._source.buffer=this.buffer.get(),this._source.loopEnd=this.toSeconds(this.loopEnd)||this.buffer.duration,j_(o,this.buffer.duration)&&(this._sourceStarted=!0,this._source.start(r,o)),$e(n)){let a=this.toSeconds(n);a=Math.max(a,0),this.stop(r+a)}return this}_stopSource(e){!this._sourceStopped&&this._sourceStarted&&(this._sourceStopped=!0,this._source.stop(this.toSeconds(e)),this._onended())}get loopStart(){return this._source.loopStart}set loopStart(e){this._source.loopStart=this.toSeconds(e)}get loopEnd(){return this._source.loopEnd}set loopEnd(e){this._source.loopEnd=this.toSeconds(e)}get buffer(){return this._buffer}set buffer(e){this._buffer.set(e)}get loop(){return this._source.loop}set loop(e){this._source.loop=e,this._sourceStarted&&this.cancelStop()}dispose(){return super.dispose(),this._source.onended=null,this._source.disconnect(),this._buffer.dispose(),this.playbackRate.dispose(),this}}class ga extends en{constructor(){super(Q(ga.getDefaults(),arguments,["type"])),this.name="Noise",this._source=null;const e=Q(ga.getDefaults(),arguments,["type"]);this._playbackRate=e.playbackRate,this.type=e.type,this._fadeIn=e.fadeIn,this._fadeOut=e.fadeOut}static getDefaults(){return Object.assign(en.getDefaults(),{fadeIn:0,fadeOut:0,playbackRate:1,type:"white"})}get type(){return this._type}set type(e){if(Ie(e in ym,"Noise: invalid type: "+e),this._type!==e&&(this._type=e,this.state==="started")){const t=this.now();this._stop(t),this._start(t)}}get playbackRate(){return this._playbackRate}set playbackRate(e){this._playbackRate=e,this._source&&(this._source.playbackRate.value=e)}_start(e){const t=ym[this._type];this._source=new Mo({url:t,context:this.context,fadeIn:this._fadeIn,fadeOut:this._fadeOut,loop:!0,onended:()=>this.onstop(this),playbackRate:this._playbackRate}).connect(this.output),this._source.start(this.toSeconds(e),Math.random()*(t.duration-.001))}_stop(e){this._source&&(this._source.stop(this.toSeconds(e)),this._source=null)}get fadeIn(){return this._fadeIn}set fadeIn(e){this._fadeIn=e,this._source&&(this._source.fadeIn=this._fadeIn)}get fadeOut(){return this._fadeOut}set fadeOut(e){this._fadeOut=e,this._source&&(this._source.fadeOut=this._fadeOut)}_restart(e){this._stop(e),this._start(e)}dispose(){return super.dispose(),this._source&&this._source.disconnect(),this}}const Vr=44100*5,zu=2,Vi={brown:null,pink:null,white:null},ym={get brown(){if(!Vi.brown){const s=[];for(let e=0;e<zu;e++){const t=new Float32Array(Vr);s[e]=t;let n=0;for(let i=0;i<Vr;i++){const r=Math.random()*2-1;t[i]=(n+.02*r)/1.02,n=t[i],t[i]*=3.5}}Vi.brown=new it().fromArray(s)}return Vi.brown},get pink(){if(!Vi.pink){const s=[];for(let e=0;e<zu;e++){const t=new Float32Array(Vr);s[e]=t;let n,i,r,o,a,c,l;n=i=r=o=a=c=l=0;for(let u=0;u<Vr;u++){const h=Math.random()*2-1;n=.99886*n+h*.0555179,i=.99332*i+h*.0750759,r=.969*r+h*.153852,o=.8665*o+h*.3104856,a=.55*a+h*.5329522,c=-.7616*c-h*.016898,t[u]=n+i+r+o+a+c+l+h*.5362,t[u]*=.11,l=h*.115926}}Vi.pink=new it().fromArray(s)}return Vi.pink},get white(){if(!Vi.white){const s=[];for(let e=0;e<zu;e++){const t=new Float32Array(Vr);s[e]=t;for(let n=0;n<Vr;n++)t[n]=Math.random()*2-1}Vi.white=new it().fromArray(s)}return Vi.white}};function xr(s,e){return Dt(this,void 0,void 0,function*(){const t=e/s.context.sampleRate,n=new Pd(1,t,s.context.sampleRate);return new s.constructor(Object.assign(s.get(),{frequency:2/t,detune:0,context:n})).toDestination().start(0),(yield n.render()).getChannelData(0)})}class gl extends So{constructor(){super(Q(gl.getDefaults(),arguments,["frequency","type"])),this.name="ToneOscillatorNode",this._oscillator=this.context.createOscillator(),this._internalChannels=[this._oscillator];const e=Q(gl.getDefaults(),arguments,["frequency","type"]);Mi(this._oscillator,this._gainNode),this.type=e.type,this.frequency=new Ye({context:this.context,param:this._oscillator.frequency,units:"frequency",value:e.frequency}),this.detune=new Ye({context:this.context,param:this._oscillator.detune,units:"cents",value:e.detune}),Ze(this,["frequency","detune"])}static getDefaults(){return Object.assign(So.getDefaults(),{detune:0,frequency:440,type:"sine"})}start(e){const t=this.toSeconds(e);return this.log("start",t),this._startGain(t),this._oscillator.start(t),this}_stopSource(e){this._oscillator.stop(e)}setPeriodicWave(e){return this._oscillator.setPeriodicWave(e),this}get type(){return this._oscillator.type}set type(e){this._oscillator.type=e}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._oscillator.disconnect(),this.frequency.dispose(),this.detune.dispose(),this}}class Tt extends en{constructor(){super(Q(Tt.getDefaults(),arguments,["frequency","type"])),this.name="Oscillator",this._oscillator=null;const e=Q(Tt.getDefaults(),arguments,["frequency","type"]);this.frequency=new ut({context:this.context,units:"frequency",value:e.frequency}),Ze(this,"frequency"),this.detune=new ut({context:this.context,units:"cents",value:e.detune}),Ze(this,"detune"),this._partials=e.partials,this._partialCount=e.partialCount,this._type=e.type,e.partialCount&&e.type!=="custom"&&(this._type=this.baseType+e.partialCount.toString()),this.phase=e.phase}static getDefaults(){return Object.assign(en.getDefaults(),{detune:0,frequency:440,partialCount:0,partials:[],phase:0,type:"sine"})}_start(e){const t=this.toSeconds(e),n=new gl({context:this.context,onended:()=>this.onstop(this)});this._oscillator=n,this._wave?this._oscillator.setPeriodicWave(this._wave):this._oscillator.type=this._type,this._oscillator.connect(this.output),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.start(t)}_stop(e){const t=this.toSeconds(e);this._oscillator&&this._oscillator.stop(t)}_restart(e){const t=this.toSeconds(e);return this.log("restart",t),this._oscillator&&this._oscillator.cancelStop(),this._state.cancel(t),this}syncFrequency(){return this.context.transport.syncSignal(this.frequency),this}unsyncFrequency(){return this.context.transport.unsyncSignal(this.frequency),this}_getCachedPeriodicWave(){if(this._type==="custom")return Tt._periodicWaveCache.find(t=>t.phase===this._phase&&nI(t.partials,this._partials));{const e=Tt._periodicWaveCache.find(t=>t.type===this._type&&t.phase===this._phase);return this._partialCount=e?e.partialCount:this._partialCount,e}}get type(){return this._type}set type(e){this._type=e;const t=["sine","square","sawtooth","triangle"].indexOf(e)!==-1;if(this._phase===0&&t)this._wave=void 0,this._partialCount=0,this._oscillator!==null&&(this._oscillator.type=e);else{const n=this._getCachedPeriodicWave();if($e(n)){const{partials:i,wave:r}=n;this._wave=r,this._partials=i,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave)}else{const[i,r]=this._getRealImaginary(e,this._phase),o=this.context.createPeriodicWave(i,r);this._wave=o,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave),Tt._periodicWaveCache.push({imag:r,partialCount:this._partialCount,partials:this._partials,phase:this._phase,real:i,type:this._type,wave:this._wave}),Tt._periodicWaveCache.length>100&&Tt._periodicWaveCache.shift()}}}get baseType(){return this._type.replace(this.partialCount.toString(),"")}set baseType(e){this.partialCount&&this._type!=="custom"&&e!=="custom"?this.type=e+this.partialCount:this.type=e}get partialCount(){return this._partialCount}set partialCount(e){Es(e,0);let t=this._type;const n=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);if(n&&(t=n[1]),this._type!=="custom")e===0?this.type=t:this.type=t+e.toString();else{const i=new Float32Array(e);this._partials.forEach((r,o)=>i[o]=r),this._partials=Array.from(i),this.type=this._type}}_getRealImaginary(e,t){let i=2048;const r=new Float32Array(i),o=new Float32Array(i);let a=1;if(e==="custom"){if(a=this._partials.length+1,this._partialCount=this._partials.length,i=a,this._partials.length===0)return[r,o]}else{const c=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(e);c?(a=parseInt(c[2],10)+1,this._partialCount=parseInt(c[2],10),e=c[1],a=Math.max(a,2),i=a):this._partialCount=0,this._partials=[]}for(let c=1;c<i;++c){const l=2/(c*Math.PI);let u;switch(e){case"sine":u=c<=a?1:0,this._partials[c-1]=u;break;case"square":u=c&1?2*l:0,this._partials[c-1]=u;break;case"sawtooth":u=l*(c&1?1:-1),this._partials[c-1]=u;break;case"triangle":c&1?u=2*(l*l)*(c-1>>1&1?-1:1):u=0,this._partials[c-1]=u;break;case"custom":u=this._partials[c-1];break;default:throw new TypeError("Oscillator: invalid type: "+e)}u!==0?(r[c]=-u*Math.sin(t*c),o[c]=u*Math.cos(t*c)):(r[c]=0,o[c]=0)}return[r,o]}_inverseFFT(e,t,n){let i=0;const r=e.length;for(let o=0;o<r;o++)i+=e[o]*Math.cos(o*n)+t[o]*Math.sin(o*n);return i}getInitialValue(){const[e,t]=this._getRealImaginary(this._type,0);let n=0;const i=Math.PI*2,r=32;for(let o=0;o<r;o++)n=Math.max(this._inverseFFT(e,t,o/r*i),n);return sI(-this._inverseFFT(e,t,this._phase)/n,-1,1)}get partials(){return this._partials.slice(0,this.partialCount)}set partials(e){this._partials=e,this._partialCount=this._partials.length,e.length&&(this.type="custom")}get phase(){return this._phase*(180/Math.PI)}set phase(e){this._phase=e*Math.PI/180,this.type=this._type}asArray(e=1024){return Dt(this,void 0,void 0,function*(){return xr(this,e)})}dispose(){return super.dispose(),this._oscillator!==null&&this._oscillator.dispose(),this._wave=void 0,this.frequency.dispose(),this.detune.dispose(),this}}Tt._periodicWaveCache=[];class gr extends xe{constructor(){super(Object.assign(Q(gr.getDefaults(),arguments,["context"])))}connect(e,t=0,n=0){return Od(this,e,t,n),this}}class Cs extends gr{constructor(){super(Object.assign(Q(Cs.getDefaults(),arguments,["mapping","length"]))),this.name="WaveShaper",this._shaper=this.context.createWaveShaper(),this.input=this._shaper,this.output=this._shaper;const e=Q(Cs.getDefaults(),arguments,["mapping","length"]);Dn(e.mapping)||e.mapping instanceof Float32Array?this.curve=Float32Array.from(e.mapping):YR(e.mapping)&&this.setMap(e.mapping,e.length)}static getDefaults(){return Object.assign(ut.getDefaults(),{length:1024})}setMap(e,t=1024){const n=new Float32Array(t);for(let i=0,r=t;i<r;i++){const o=i/(r-1)*2-1;n[i]=e(o,i)}return this.curve=n,this}get curve(){return this._shaper.curve}set curve(e){this._shaper.curve=e}get oversample(){return this._shaper.oversample}set oversample(e){const t=["none","2x","4x"].some(n=>n.includes(e));Ie(t,"oversampling must be either 'none', '2x', or '4x'"),this._shaper.oversample=e}dispose(){return super.dispose(),this._shaper.disconnect(),this}}class SI extends gr{constructor(){super(...arguments),this.name="AudioToGain",this._norm=new Cs({context:this.context,mapping:e=>(e+1)/2}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}}class Rs extends ut{constructor(){super(Object.assign(Q(Rs.getDefaults(),arguments,["value"]))),this.name="Multiply",this.override=!1;const e=Q(Rs.getDefaults(),arguments,["value"]);this._mult=this.input=this.output=new at({context:this.context,minValue:e.minValue,maxValue:e.maxValue}),this.factor=this._param=this._mult.gain,this.factor.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(ut.getDefaults(),{value:0})}dispose(){return super.dispose(),this._mult.dispose(),this}}class _a extends en{constructor(){super(Q(_a.getDefaults(),arguments,["frequency","type","modulationType"])),this.name="AMOscillator",this._modulationScale=new SI({context:this.context}),this._modulationNode=new at({context:this.context});const e=Q(_a.getDefaults(),arguments,["frequency","type","modulationType"]);this._carrier=new Tt({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase,type:e.type}),this.frequency=this._carrier.frequency,this.detune=this._carrier.detune,this._modulator=new Tt({context:this.context,phase:e.phase,type:e.modulationType}),this.harmonicity=new Rs({context:this.context,units:"positive",value:e.harmonicity}),this.frequency.chain(this.harmonicity,this._modulator.frequency),this._modulator.chain(this._modulationScale,this._modulationNode.gain),this._carrier.chain(this._modulationNode,this.output),Ze(this,["frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(Tt.getDefaults(),{harmonicity:1,modulationType:"square"})}_start(e){this._modulator.start(e),this._carrier.start(e)}_stop(e){this._modulator.stop(e),this._carrier.stop(e)}_restart(e){this._modulator.restart(e),this._carrier.restart(e)}get type(){return this._carrier.type}set type(e){this._carrier.type=e}get baseType(){return this._carrier.baseType}set baseType(e){this._carrier.baseType=e}get partialCount(){return this._carrier.partialCount}set partialCount(e){this._carrier.partialCount=e}get modulationType(){return this._modulator.type}set modulationType(e){this._modulator.type=e}get phase(){return this._carrier.phase}set phase(e){this._carrier.phase=e,this._modulator.phase=e}get partials(){return this._carrier.partials}set partials(e){this._carrier.partials=e}asArray(e=1024){return Dt(this,void 0,void 0,function*(){return xr(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this._modulationScale.dispose(),this}}class va extends en{constructor(){super(Q(va.getDefaults(),arguments,["frequency","type","modulationType"])),this.name="FMOscillator",this._modulationNode=new at({context:this.context,gain:0});const e=Q(va.getDefaults(),arguments,["frequency","type","modulationType"]);this._carrier=new Tt({context:this.context,detune:e.detune,frequency:0,onstop:()=>this.onstop(this),phase:e.phase,type:e.type}),this.detune=this._carrier.detune,this.frequency=new ut({context:this.context,units:"frequency",value:e.frequency}),this._modulator=new Tt({context:this.context,phase:e.phase,type:e.modulationType}),this.harmonicity=new Rs({context:this.context,units:"positive",value:e.harmonicity}),this.modulationIndex=new Rs({context:this.context,units:"positive",value:e.modulationIndex}),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output),this.detune.connect(this._modulator.detune),Ze(this,["modulationIndex","frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(Tt.getDefaults(),{harmonicity:1,modulationIndex:2,modulationType:"square"})}_start(e){this._modulator.start(e),this._carrier.start(e)}_stop(e){this._modulator.stop(e),this._carrier.stop(e)}_restart(e){return this._modulator.restart(e),this._carrier.restart(e),this}get type(){return this._carrier.type}set type(e){this._carrier.type=e}get baseType(){return this._carrier.baseType}set baseType(e){this._carrier.baseType=e}get partialCount(){return this._carrier.partialCount}set partialCount(e){this._carrier.partialCount=e}get modulationType(){return this._modulator.type}set modulationType(e){this._modulator.type=e}get phase(){return this._carrier.phase}set phase(e){this._carrier.phase=e,this._modulator.phase=e}get partials(){return this._carrier.partials}set partials(e){this._carrier.partials=e}asArray(e=1024){return Dt(this,void 0,void 0,function*(){return xr(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this.modulationIndex.dispose(),this}}class bo extends en{constructor(){super(Q(bo.getDefaults(),arguments,["frequency","width"])),this.name="PulseOscillator",this._widthGate=new at({context:this.context,gain:0}),this._thresh=new Cs({context:this.context,mapping:t=>t<=0?-1:1});const e=Q(bo.getDefaults(),arguments,["frequency","width"]);this.width=new ut({context:this.context,units:"audioRange",value:e.width}),this._triangle=new Tt({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase,type:"triangle"}),this.frequency=this._triangle.frequency,this.detune=this._triangle.detune,this._triangle.chain(this._thresh,this.output),this.width.chain(this._widthGate,this._thresh),Ze(this,["width","frequency","detune"])}static getDefaults(){return Object.assign(en.getDefaults(),{detune:0,frequency:440,phase:0,type:"pulse",width:.2})}_start(e){e=this.toSeconds(e),this._triangle.start(e),this._widthGate.gain.setValueAtTime(1,e)}_stop(e){e=this.toSeconds(e),this._triangle.stop(e),this._widthGate.gain.cancelScheduledValues(e),this._widthGate.gain.setValueAtTime(0,e)}_restart(e){this._triangle.restart(e),this._widthGate.gain.cancelScheduledValues(e),this._widthGate.gain.setValueAtTime(1,e)}get phase(){return this._triangle.phase}set phase(e){this._triangle.phase=e}get type(){return"pulse"}get baseType(){return"pulse"}get partials(){return[]}get partialCount(){return 0}set carrierType(e){this._triangle.type=e}asArray(e=1024){return Dt(this,void 0,void 0,function*(){return xr(this,e)})}dispose(){return super.dispose(),this._triangle.dispose(),this.width.dispose(),this._widthGate.dispose(),this._thresh.dispose(),this}}class ya extends en{constructor(){super(Q(ya.getDefaults(),arguments,["frequency","type","spread"])),this.name="FatOscillator",this._oscillators=[];const e=Q(ya.getDefaults(),arguments,["frequency","type","spread"]);this.frequency=new ut({context:this.context,units:"frequency",value:e.frequency}),this.detune=new ut({context:this.context,units:"cents",value:e.detune}),this._spread=e.spread,this._type=e.type,this._phase=e.phase,this._partials=e.partials,this._partialCount=e.partialCount,this.count=e.count,Ze(this,["frequency","detune"])}static getDefaults(){return Object.assign(Tt.getDefaults(),{count:3,spread:20,type:"sawtooth"})}_start(e){e=this.toSeconds(e),this._forEach(t=>t.start(e))}_stop(e){e=this.toSeconds(e),this._forEach(t=>t.stop(e))}_restart(e){this._forEach(t=>t.restart(e))}_forEach(e){for(let t=0;t<this._oscillators.length;t++)e(this._oscillators[t],t)}get type(){return this._type}set type(e){this._type=e,this._forEach(t=>t.type=e)}get spread(){return this._spread}set spread(e){if(this._spread=e,this._oscillators.length>1){const t=-e/2,n=e/(this._oscillators.length-1);this._forEach((i,r)=>i.detune.value=t+n*r)}}get count(){return this._oscillators.length}set count(e){if(Es(e,1),this._oscillators.length!==e){this._forEach(t=>t.dispose()),this._oscillators=[];for(let t=0;t<e;t++){const n=new Tt({context:this.context,volume:-6-e*1.1,type:this._type,phase:this._phase+t/e*360,partialCount:this._partialCount,onstop:t===0?()=>this.onstop(this):ot});this.type==="custom"&&(n.partials=this._partials),this.frequency.connect(n.frequency),this.detune.connect(n.detune),n.detune.overridden=!1,n.connect(this.output),this._oscillators[t]=n}this.spread=this._spread,this.state==="started"&&this._forEach(t=>t.start())}}get phase(){return this._phase}set phase(e){this._phase=e,this._forEach((t,n)=>t.phase=this._phase+n/this.count*360)}get baseType(){return this._oscillators[0].baseType}set baseType(e){this._forEach(t=>t.baseType=e),this._type=this._oscillators[0].type}get partials(){return this._oscillators[0].partials}set partials(e){this._partials=e,this._partialCount=this._partials.length,e.length&&(this._type="custom",this._forEach(t=>t.partials=e))}get partialCount(){return this._oscillators[0].partialCount}set partialCount(e){this._partialCount=e,this._forEach(t=>t.partialCount=e),this._type=this._oscillators[0].type}asArray(e=1024){return Dt(this,void 0,void 0,function*(){return xr(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this._forEach(e=>e.dispose()),this}}class xa extends en{constructor(){super(Q(xa.getDefaults(),arguments,["frequency","modulationFrequency"])),this.name="PWMOscillator",this.sourceType="pwm",this._scale=new Rs({context:this.context,value:2});const e=Q(xa.getDefaults(),arguments,["frequency","modulationFrequency"]);this._pulse=new bo({context:this.context,frequency:e.modulationFrequency}),this._pulse.carrierType="sine",this.modulationFrequency=this._pulse.frequency,this._modulator=new Tt({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase}),this.frequency=this._modulator.frequency,this.detune=this._modulator.detune,this._modulator.chain(this._scale,this._pulse.width),this._pulse.connect(this.output),Ze(this,["modulationFrequency","frequency","detune"])}static getDefaults(){return Object.assign(en.getDefaults(),{detune:0,frequency:440,modulationFrequency:.4,phase:0,type:"pwm"})}_start(e){e=this.toSeconds(e),this._modulator.start(e),this._pulse.start(e)}_stop(e){e=this.toSeconds(e),this._modulator.stop(e),this._pulse.stop(e)}_restart(e){this._modulator.restart(e),this._pulse.restart(e)}get type(){return"pwm"}get baseType(){return"pwm"}get partials(){return[]}get partialCount(){return 0}get phase(){return this._modulator.phase}set phase(e){this._modulator.phase=e}asArray(e=1024){return Dt(this,void 0,void 0,function*(){return xr(this,e)})}dispose(){return super.dispose(),this._pulse.dispose(),this._scale.dispose(),this._modulator.dispose(),this}}const xm={am:_a,fat:ya,fm:va,oscillator:Tt,pulse:bo,pwm:xa};class Sa extends en{constructor(){super(Q(Sa.getDefaults(),arguments,["frequency","type"])),this.name="OmniOscillator";const e=Q(Sa.getDefaults(),arguments,["frequency","type"]);this.frequency=new ut({context:this.context,units:"frequency",value:e.frequency}),this.detune=new ut({context:this.context,units:"cents",value:e.detune}),Ze(this,["frequency","detune"]),this.set(e)}static getDefaults(){return Object.assign(Tt.getDefaults(),va.getDefaults(),_a.getDefaults(),ya.getDefaults(),bo.getDefaults(),xa.getDefaults())}_start(e){this._oscillator.start(e)}_stop(e){this._oscillator.stop(e)}_restart(e){return this._oscillator.restart(e),this}get type(){let e="";return["am","fm","fat"].some(t=>this._sourceType===t)&&(e=this._sourceType),e+this._oscillator.type}set type(e){e.substr(0,2)==="fm"?(this._createNewOscillator("fm"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(2)):e.substr(0,2)==="am"?(this._createNewOscillator("am"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(2)):e.substr(0,3)==="fat"?(this._createNewOscillator("fat"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(3)):e==="pwm"?(this._createNewOscillator("pwm"),this._oscillator=this._oscillator):e==="pulse"?this._createNewOscillator("pulse"):(this._createNewOscillator("oscillator"),this._oscillator=this._oscillator,this._oscillator.type=e)}get partials(){return this._oscillator.partials}set partials(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partials=e)}get partialCount(){return this._oscillator.partialCount}set partialCount(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partialCount=e)}set(e){return Reflect.has(e,"type")&&e.type&&(this.type=e.type),super.set(e),this}_createNewOscillator(e){if(e!==this._sourceType){this._sourceType=e;const t=xm[e],n=this.now();if(this._oscillator){const i=this._oscillator;i.stop(n),this.context.setTimeout(()=>i.dispose(),this.blockTime)}this._oscillator=new t({context:this.context}),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.connect(this.output),this._oscillator.onstop=()=>this.onstop(this),this.state==="started"&&this._oscillator.start(n)}}get phase(){return this._oscillator.phase}set phase(e){this._oscillator.phase=e}get sourceType(){return this._sourceType}set sourceType(e){let t="sine";this._oscillator.type!=="pwm"&&this._oscillator.type!=="pulse"&&(t=this._oscillator.type),e==="fm"?this.type="fm"+t:e==="am"?this.type="am"+t:e==="fat"?this.type="fat"+t:e==="oscillator"?this.type=t:e==="pulse"?this.type="pulse":e==="pwm"&&(this.type="pwm")}_getOscType(e,t){return e instanceof xm[t]}get baseType(){return this._oscillator.baseType}set baseType(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&e!=="pulse"&&e!=="pwm"&&(this._oscillator.baseType=e)}get width(){if(this._getOscType(this._oscillator,"pulse"))return this._oscillator.width}get count(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.count}set count(e){this._getOscType(this._oscillator,"fat")&&ts(e)&&(this._oscillator.count=e)}get spread(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.spread}set spread(e){this._getOscType(this._oscillator,"fat")&&ts(e)&&(this._oscillator.spread=e)}get modulationType(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.modulationType}set modulationType(e){(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))&&Si(e)&&(this._oscillator.modulationType=e)}get modulationIndex(){if(this._getOscType(this._oscillator,"fm"))return this._oscillator.modulationIndex}get harmonicity(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.harmonicity}get modulationFrequency(){if(this._getOscType(this._oscillator,"pwm"))return this._oscillator.modulationFrequency}asArray(e=1024){return Dt(this,void 0,void 0,function*(){return xr(this,e)})}dispose(){return super.dispose(),this.detune.dispose(),this.frequency.dispose(),this._oscillator.dispose(),this}}class kd extends ut{constructor(){super(Object.assign(Q(kd.getDefaults(),arguments,["value"]))),this.override=!1,this.name="Add",this._sum=new at({context:this.context}),this.input=this._sum,this.output=this._sum,this.addend=this._param,As(this._constantSource,this._sum)}static getDefaults(){return Object.assign(ut.getDefaults(),{value:0})}dispose(){return super.dispose(),this._sum.dispose(),this}}class _l extends gr{constructor(){super(Object.assign(Q(_l.getDefaults(),arguments,["min","max"]))),this.name="Scale";const e=Q(_l.getDefaults(),arguments,["min","max"]);this._mult=this.input=new Rs({context:this.context,value:e.max-e.min}),this._add=this.output=new kd({context:this.context,value:e.min}),this._min=e.min,this._max=e.max,this.input.connect(this.output)}static getDefaults(){return Object.assign(gr.getDefaults(),{max:1,min:0})}get min(){return this._min}set min(e){this._min=e,this._setRange()}get max(){return this._max}set max(e){this._max=e,this._setRange()}_setRange(){this._add.value=this._min,this._mult.value=this._max-this._min}dispose(){return super.dispose(),this._add.dispose(),this._mult.dispose(),this}}function tv(s,e=1/0){const t=new WeakMap;return function(n,i){Reflect.defineProperty(n,i,{configurable:!0,enumerable:!0,get:function(){return t.get(this)},set:function(r){Es(r,s,e),t.set(this,r)}})}}function as(s,e=1/0){const t=new WeakMap;return function(n,i){Reflect.defineProperty(n,i,{configurable:!0,enumerable:!0,get:function(){return t.get(this)},set:function(r){Es(this.toSeconds(r),s,e),t.set(this,r)}})}}class Ma extends en{constructor(){super(Q(Ma.getDefaults(),arguments,["url","onload"])),this.name="Player",this._activeSources=new Set;const e=Q(Ma.getDefaults(),arguments,["url","onload"]);this._buffer=new it({onload:this._onload.bind(this,e.onload),onerror:e.onerror,reverse:e.reverse,url:e.url}),this.autostart=e.autostart,this._loop=e.loop,this._loopStart=e.loopStart,this._loopEnd=e.loopEnd,this._playbackRate=e.playbackRate,this.fadeIn=e.fadeIn,this.fadeOut=e.fadeOut}static getDefaults(){return Object.assign(en.getDefaults(),{autostart:!1,fadeIn:0,fadeOut:0,loop:!1,loopEnd:0,loopStart:0,onload:ot,onerror:ot,playbackRate:1,reverse:!1})}load(e){return Dt(this,void 0,void 0,function*(){return yield this._buffer.load(e),this._onload(),this})}_onload(e=ot){e(),this.autostart&&this.start()}_onSourceEnd(e){this.onstop(this),this._activeSources.delete(e),this._activeSources.size===0&&!this._synced&&this._state.getValueAtTime(this.now())==="started"&&(this._state.cancel(this.now()),this._state.setStateAtTime("stopped",this.now()))}start(e,t,n){return super.start(e,t,n),this}_start(e,t,n){this._loop?t=no(t,this._loopStart):t=no(t,0);const i=this.toSeconds(t),r=n;n=no(n,Math.max(this._buffer.duration-i,0));let o=this.toSeconds(n);o=o/this._playbackRate,e=this.toSeconds(e);const a=new Mo({url:this._buffer,context:this.context,fadeIn:this.fadeIn,fadeOut:this.fadeOut,loop:this._loop,loopEnd:this._loopEnd,loopStart:this._loopStart,onended:this._onSourceEnd.bind(this),playbackRate:this._playbackRate}).connect(this.output);!this._loop&&!this._synced&&(this._state.cancel(e+o),this._state.setStateAtTime("stopped",e+o,{implicitEnd:!0})),this._activeSources.add(a),this._loop&&qn(r)?a.start(e,i):a.start(e,i,o-this.toSeconds(this.fadeOut))}_stop(e){const t=this.toSeconds(e);this._activeSources.forEach(n=>n.stop(t))}restart(e,t,n){return super.restart(e,t,n),this}_restart(e,t,n){this._stop(e),this._start(e,t,n)}seek(e,t){const n=this.toSeconds(t);if(this._state.getValueAtTime(n)==="started"){const i=this.toSeconds(e);this._stop(n),this._start(n,i)}return this}setLoopPoints(e,t){return this.loopStart=e,this.loopEnd=t,this}get loopStart(){return this._loopStart}set loopStart(e){this._loopStart=e,this.buffer.loaded&&Es(this.toSeconds(e),0,this.buffer.duration),this._activeSources.forEach(t=>{t.loopStart=e})}get loopEnd(){return this._loopEnd}set loopEnd(e){this._loopEnd=e,this.buffer.loaded&&Es(this.toSeconds(e),0,this.buffer.duration),this._activeSources.forEach(t=>{t.loopEnd=e})}get buffer(){return this._buffer}set buffer(e){this._buffer.set(e)}get loop(){return this._loop}set loop(e){if(this._loop!==e&&(this._loop=e,this._activeSources.forEach(t=>{t.loop=e}),e)){const t=this._state.getNextState("stopped",this.now());t&&this._state.cancel(t.time)}}get playbackRate(){return this._playbackRate}set playbackRate(e){this._playbackRate=e;const t=this.now(),n=this._state.getNextState("stopped",t);n&&n.implicitEnd&&(this._state.cancel(n.time),this._activeSources.forEach(i=>i.cancelStop())),this._activeSources.forEach(i=>{i.playbackRate.setValueAtTime(e,t)})}get reverse(){return this._buffer.reverse}set reverse(e){this._buffer.reverse=e}get loaded(){return this._buffer.loaded}dispose(){return super.dispose(),this._activeSources.forEach(e=>e.dispose()),this._activeSources.clear(),this._buffer.dispose(),this}}hi([as(0)],Ma.prototype,"fadeIn",void 0);hi([as(0)],Ma.prototype,"fadeOut",void 0);class MI extends gr{constructor(){super(...arguments),this.name="GainToAudio",this._norm=new Cs({context:this.context,mapping:e=>Math.abs(e)*2-1}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}}class bi extends xe{constructor(){super(Q(bi.getDefaults(),arguments,["attack","decay","sustain","release"])),this.name="Envelope",this._sig=new ut({context:this.context,value:0}),this.output=this._sig,this.input=void 0;const e=Q(bi.getDefaults(),arguments,["attack","decay","sustain","release"]);this.attack=e.attack,this.decay=e.decay,this.sustain=e.sustain,this.release=e.release,this.attackCurve=e.attackCurve,this.releaseCurve=e.releaseCurve,this.decayCurve=e.decayCurve}static getDefaults(){return Object.assign(xe.getDefaults(),{attack:.01,attackCurve:"linear",decay:.1,decayCurve:"exponential",release:1,releaseCurve:"exponential",sustain:.5})}get value(){return this.getValueAtTime(this.now())}_getCurve(e,t){if(Si(e))return e;{let n;for(n in Tc)if(Tc[n][t]===e)return n;return e}}_setCurve(e,t,n){if(Si(n)&&Reflect.has(Tc,n)){const i=Tc[n];ar(i)?e!=="_decayCurve"&&(this[e]=i[t]):this[e]=i}else if(Dn(n)&&e!=="_decayCurve")this[e]=n;else throw new Error("Envelope: invalid curve: "+n)}get attackCurve(){return this._getCurve(this._attackCurve,"In")}set attackCurve(e){this._setCurve("_attackCurve","In",e)}get releaseCurve(){return this._getCurve(this._releaseCurve,"Out")}set releaseCurve(e){this._setCurve("_releaseCurve","Out",e)}get decayCurve(){return this._decayCurve}set decayCurve(e){Ie(["linear","exponential"].some(t=>t===e),`Invalid envelope curve: ${e}`),this._decayCurve=e}triggerAttack(e,t=1){this.log("triggerAttack",e,t),e=this.toSeconds(e);let i=this.toSeconds(this.attack);const r=this.toSeconds(this.decay),o=this.getValueAtTime(e);if(o>0){const a=1/i;i=(1-o)/a}if(i<this.sampleTime)this._sig.cancelScheduledValues(e),this._sig.setValueAtTime(t,e);else if(this._attackCurve==="linear")this._sig.linearRampTo(t,i,e);else if(this._attackCurve==="exponential")this._sig.targetRampTo(t,i,e);else{this._sig.cancelAndHoldAtTime(e);let a=this._attackCurve;for(let c=1;c<a.length;c++)if(a[c-1]<=o&&o<=a[c]){a=this._attackCurve.slice(c),a[0]=o;break}this._sig.setValueCurveAtTime(a,e,i,t)}if(r&&this.sustain<1){const a=t*this.sustain,c=e+i;this.log("decay",c),this._decayCurve==="linear"?this._sig.linearRampToValueAtTime(a,r+c):this._sig.exponentialApproachValueAtTime(a,c,r)}return this}triggerRelease(e){this.log("triggerRelease",e),e=this.toSeconds(e);const t=this.getValueAtTime(e);if(t>0){const n=this.toSeconds(this.release);n<this.sampleTime?this._sig.setValueAtTime(0,e):this._releaseCurve==="linear"?this._sig.linearRampTo(0,n,e):this._releaseCurve==="exponential"?this._sig.targetRampTo(0,n,e):(Ie(Dn(this._releaseCurve),"releaseCurve must be either 'linear', 'exponential' or an array"),this._sig.cancelAndHoldAtTime(e),this._sig.setValueCurveAtTime(this._releaseCurve,e,n,t))}return this}getValueAtTime(e){return this._sig.getValueAtTime(e)}triggerAttackRelease(e,t,n=1){return t=this.toSeconds(t),this.triggerAttack(t,n),this.triggerRelease(t+this.toSeconds(e)),this}cancel(e){return this._sig.cancelScheduledValues(this.toSeconds(e)),this}connect(e,t=0,n=0){return Od(this,e,t,n),this}asArray(e=1024){return Dt(this,void 0,void 0,function*(){const t=e/this.context.sampleRate,n=new Pd(1,t,this.context.sampleRate),i=this.toSeconds(this.attack)+this.toSeconds(this.decay),r=i+this.toSeconds(this.release),o=r*.1,a=r+o,c=new this.constructor(Object.assign(this.get(),{attack:t*this.toSeconds(this.attack)/a,decay:t*this.toSeconds(this.decay)/a,release:t*this.toSeconds(this.release)/a,context:n}));return c._sig.toDestination(),c.triggerAttackRelease(t*(i+o)/a,0),(yield n.render()).getChannelData(0)})}dispose(){return super.dispose(),this._sig.dispose(),this}}hi([as(0)],bi.prototype,"attack",void 0);hi([as(0)],bi.prototype,"decay",void 0);hi([tv(0,1)],bi.prototype,"sustain",void 0);hi([as(0)],bi.prototype,"release",void 0);const Tc=(()=>{let e,t;const n=[];for(e=0;e<128;e++)n[e]=Math.sin(e/(128-1)*(Math.PI/2));const i=[],r=6.4;for(e=0;e<128-1;e++){t=e/(128-1);const d=Math.sin(t*(Math.PI*2)*r-Math.PI/2)+1;i[e]=d/10+t*.83}i[128-1]=1;const o=[],a=5;for(e=0;e<128;e++)o[e]=Math.ceil(e/(128-1)*a)/a;const c=[];for(e=0;e<128;e++)t=e/(128-1),c[e]=.5*(1-Math.cos(Math.PI*t));const l=[];for(e=0;e<128;e++){t=e/(128-1);const d=Math.pow(t,3)*4+.2,f=Math.cos(d*Math.PI*2*t);l[e]=Math.abs(f*(1-t))}function u(d){const f=new Array(d.length);for(let m=0;m<d.length;m++)f[m]=1-d[m];return f}function h(d){return d.slice(0).reverse()}return{bounce:{In:u(l),Out:l},cosine:{In:n,Out:h(n)},exponential:"exponential",linear:"linear",ripple:{In:i,Out:u(i)},sine:{In:c,Out:u(c)},step:{In:o,Out:u(o)}}})();class ci extends xe{constructor(){super(Q(ci.getDefaults(),arguments)),this._scheduledEvents=[],this._synced=!1,this._original_triggerAttack=this.triggerAttack,this._original_triggerRelease=this.triggerRelease;const e=Q(ci.getDefaults(),arguments);this._volume=this.output=new mr({context:this.context,volume:e.volume}),this.volume=this._volume.volume,Ze(this,"volume")}static getDefaults(){return Object.assign(xe.getDefaults(),{volume:0})}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",0)),this}_syncState(){let e=!1;return this._synced||(this._synced=!0,e=!0),e}_syncMethod(e,t){const n=this["_original_"+e]=this[e];this[e]=(...i)=>{const r=i[t],o=this.context.transport.schedule(a=>{i[t]=a,n.apply(this,i)},r);this._scheduledEvents.push(o)}}unsync(){return this._scheduledEvents.forEach(e=>this.context.transport.clear(e)),this._scheduledEvents=[],this._synced&&(this._synced=!1,this.triggerAttack=this._original_triggerAttack,this.triggerRelease=this._original_triggerRelease),this}triggerAttackRelease(e,t,n,i){const r=this.toSeconds(n),o=this.toSeconds(t);return this.triggerAttack(e,r,i),this.triggerRelease(r+o),this}dispose(){return super.dispose(),this._volume.dispose(),this.unsync(),this._scheduledEvents=[],this}}class _r extends ci{constructor(){super(Q(_r.getDefaults(),arguments));const e=Q(_r.getDefaults(),arguments);this.portamento=e.portamento,this.onsilence=e.onsilence}static getDefaults(){return Object.assign(ci.getDefaults(),{detune:0,onsilence:ot,portamento:0})}triggerAttack(e,t,n=1){this.log("triggerAttack",e,t,n);const i=this.toSeconds(t);return this._triggerEnvelopeAttack(i,n),this.setNote(e,i),this}triggerRelease(e){this.log("triggerRelease",e);const t=this.toSeconds(e);return this._triggerEnvelopeRelease(t),this}setNote(e,t){const n=this.toSeconds(t),i=e instanceof In?e.toFrequency():e;if(this.portamento>0&&this.getLevelAtTime(n)>.05){const r=this.toSeconds(this.portamento);this.frequency.exponentialRampTo(i,r,n)}else this.frequency.setValueAtTime(i,n);return this}}hi([as(0)],_r.prototype,"portamento",void 0);class $l extends bi{constructor(){super(Q($l.getDefaults(),arguments,["attack","decay","sustain","release"])),this.name="AmplitudeEnvelope",this._gainNode=new at({context:this.context,gain:0}),this.output=this._gainNode,this.input=this._gainNode,this._sig.connect(this._gainNode.gain),this.output=this._gainNode,this.input=this._gainNode}dispose(){return super.dispose(),this._gainNode.dispose(),this}}class ns extends _r{constructor(){super(Q(ns.getDefaults(),arguments)),this.name="Synth";const e=Q(ns.getDefaults(),arguments);this.oscillator=new Sa(Object.assign({context:this.context,detune:e.detune,onstop:()=>this.onsilence(this)},e.oscillator)),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.envelope=new $l(Object.assign({context:this.context},e.envelope)),this.oscillator.chain(this.envelope,this.output),Ze(this,["oscillator","frequency","detune","envelope"])}static getDefaults(){return Object.assign(_r.getDefaults(),{envelope:Object.assign(fa(bi.getDefaults(),Object.keys(xe.getDefaults())),{attack:.005,decay:.1,release:1,sustain:.3}),oscillator:Object.assign(fa(Sa.getDefaults(),[...Object.keys(en.getDefaults()),"frequency","detune"]),{type:"triangle"})})}_triggerEnvelopeAttack(e,t){if(this.envelope.triggerAttack(e,t),this.oscillator.start(e),this.envelope.sustain===0){const n=this.toSeconds(this.envelope.attack),i=this.toSeconds(this.envelope.decay);this.oscillator.stop(e+n+i)}}_triggerEnvelopeRelease(e){this.envelope.triggerRelease(e),this.oscillator.stop(e+this.toSeconds(this.envelope.release))}getLevelAtTime(e){return e=this.toSeconds(e),this.envelope.getValueAtTime(e)}dispose(){return super.dispose(),this.oscillator.dispose(),this.envelope.dispose(),this}}class ba extends xe{constructor(){super(Q(ba.getDefaults(),arguments,["frequency","type"])),this.name="BiquadFilter";const e=Q(ba.getDefaults(),arguments,["frequency","type"]);this._filter=this.context.createBiquadFilter(),this.input=this.output=this._filter,this.Q=new Ye({context:this.context,units:"number",value:e.Q,param:this._filter.Q}),this.frequency=new Ye({context:this.context,units:"frequency",value:e.frequency,param:this._filter.frequency}),this.detune=new Ye({context:this.context,units:"cents",value:e.detune,param:this._filter.detune}),this.gain=new Ye({context:this.context,units:"decibels",convert:!1,value:e.gain,param:this._filter.gain}),this.type=e.type}static getDefaults(){return Object.assign(xe.getDefaults(),{Q:1,type:"lowpass",frequency:350,detune:0,gain:0})}get type(){return this._filter.type}set type(e){Ie(["lowpass","highpass","bandpass","lowshelf","highshelf","notch","allpass","peaking"].indexOf(e)!==-1,`Invalid filter type: ${e}`),this._filter.type=e}getFrequencyResponse(e=128){const t=new Float32Array(e);for(let o=0;o<e;o++){const c=Math.pow(o/e,2)*(2e4-20)+20;t[o]=c}const n=new Float32Array(e),i=new Float32Array(e),r=this.context.createBiquadFilter();return r.type=this.type,r.Q.value=this.Q.value,r.frequency.value=this.frequency.value,r.gain.value=this.gain.value,r.getFrequencyResponse(t,n,i),n}dispose(){return super.dispose(),this._filter.disconnect(),this.Q.dispose(),this.frequency.dispose(),this.gain.dispose(),this.detune.dispose(),this}}class vl extends xe{constructor(){super(Q(vl.getDefaults(),arguments,["frequency","type","rolloff"])),this.name="Filter",this.input=new at({context:this.context}),this.output=new at({context:this.context}),this._filters=[];const e=Q(vl.getDefaults(),arguments,["frequency","type","rolloff"]);this._filters=[],this.Q=new ut({context:this.context,units:"positive",value:e.Q}),this.frequency=new ut({context:this.context,units:"frequency",value:e.frequency}),this.detune=new ut({context:this.context,units:"cents",value:e.detune}),this.gain=new ut({context:this.context,units:"decibels",convert:!1,value:e.gain}),this._type=e.type,this.rolloff=e.rolloff,Ze(this,["detune","frequency","gain","Q"])}static getDefaults(){return Object.assign(xe.getDefaults(),{Q:1,detune:0,frequency:350,gain:0,rolloff:-12,type:"lowpass"})}get type(){return this._type}set type(e){Ie(["lowpass","highpass","bandpass","lowshelf","highshelf","notch","allpass","peaking"].indexOf(e)!==-1,`Invalid filter type: ${e}`),this._type=e,this._filters.forEach(n=>n.type=e)}get rolloff(){return this._rolloff}set rolloff(e){const t=ts(e)?e:parseInt(e,10),n=[-12,-24,-48,-96];let i=n.indexOf(t);Ie(i!==-1,`rolloff can only be ${n.join(", ")}`),i+=1,this._rolloff=t,this.input.disconnect(),this._filters.forEach(r=>r.disconnect()),this._filters=new Array(i);for(let r=0;r<i;r++){const o=new ba({context:this.context});o.type=this._type,this.frequency.connect(o.frequency),this.detune.connect(o.detune),this.Q.connect(o.Q),this.gain.connect(o.gain),this._filters[r]=o}this._internalChannels=this._filters,As(this.input,...this._internalChannels,this.output)}getFrequencyResponse(e=128){const t=new ba({frequency:this.frequency.value,gain:this.gain.value,Q:this.Q.value,type:this._type,detune:this.detune.value}),n=new Float32Array(e).map(()=>1);return this._filters.forEach(()=>{t.getFrequencyResponse(e).forEach((r,o)=>n[o]*=r)}),t.dispose(),n}dispose(){return super.dispose(),this._filters.forEach(e=>{e.dispose()}),Dd(this,["detune","frequency","gain","Q"]),this.frequency.dispose(),this.Q.dispose(),this.detune.dispose(),this.gain.dispose(),this}}class To extends ns{constructor(){super(Q(To.getDefaults(),arguments)),this.name="MembraneSynth",this.portamento=0;const e=Q(To.getDefaults(),arguments);this.pitchDecay=e.pitchDecay,this.octaves=e.octaves,Ze(this,["oscillator","envelope"])}static getDefaults(){return lr(_r.getDefaults(),ns.getDefaults(),{envelope:{attack:.001,attackCurve:"exponential",decay:.4,release:1.4,sustain:.01},octaves:10,oscillator:{type:"sine"},pitchDecay:.05})}setNote(e,t){const n=this.toSeconds(t),i=this.toFrequency(e instanceof In?e.toFrequency():e),r=i*this.octaves;return this.oscillator.frequency.setValueAtTime(r,n),this.oscillator.frequency.exponentialRampToValueAtTime(i,n+this.toSeconds(this.pitchDecay)),this}dispose(){return super.dispose(),this}}hi([tv(0)],To.prototype,"octaves",void 0);hi([as(0)],To.prototype,"pitchDecay",void 0);let bI=class Nh extends ci{constructor(){super(Q(Nh.getDefaults(),arguments)),this.name="NoiseSynth";const e=Q(Nh.getDefaults(),arguments);this.noise=new ga(Object.assign({context:this.context},e.noise)),this.envelope=new $l(Object.assign({context:this.context},e.envelope)),this.noise.chain(this.envelope,this.output)}static getDefaults(){return Object.assign(ci.getDefaults(),{envelope:Object.assign(fa(bi.getDefaults(),Object.keys(xe.getDefaults())),{decay:.1,sustain:0}),noise:Object.assign(fa(ga.getDefaults(),Object.keys(en.getDefaults())),{type:"white"})})}triggerAttack(e,t=1){return e=this.toSeconds(e),this.envelope.triggerAttack(e,t),this.noise.start(e),this.envelope.sustain===0&&this.noise.stop(e+this.toSeconds(this.envelope.attack)+this.toSeconds(this.envelope.decay)),this}triggerRelease(e){return e=this.toSeconds(e),this.envelope.triggerRelease(e),this.noise.stop(e+this.toSeconds(this.envelope.release)),this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",0),this._syncMethod("triggerRelease",0)),this}triggerAttackRelease(e,t,n=1){return t=this.toSeconds(t),e=this.toSeconds(e),this.triggerAttack(t,n),this.triggerRelease(t+e),this}dispose(){return super.dispose(),this.noise.dispose(),this.envelope.dispose(),this}};const Bd=new Set;function Vd(s){Bd.add(s)}function nv(s,e){const t=`registerProcessor("${s}", ${e})`;Bd.add(t)}function TI(){return Array.from(Bd).join(`
`)}class EI extends xe{constructor(e){super(e),this.name="ToneAudioWorklet",this.workletOptions={},this.onprocessorerror=ot;const t=URL.createObjectURL(new Blob([TI()],{type:"text/javascript"})),n=this._audioWorkletName();this._dummyGain=this.context.createGain(),this._dummyParam=this._dummyGain.gain,this.context.addAudioWorkletModule(t,n).then(()=>{this.disposed||(this._worklet=this.context.createAudioWorkletNode(n,this.workletOptions),this._worklet.onprocessorerror=this.onprocessorerror.bind(this),this.onReady(this._worklet))})}dispose(){return super.dispose(),this._dummyGain.disconnect(),this._worklet&&(this._worklet.port.postMessage("dispose"),this._worklet.disconnect()),this}}const AI=`
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
`;Vd(AI);const wI=`
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
`;Vd(wI);const CI=`
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
`;Vd(CI);const iv="feedback-comb-filter",RI=`
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
`;nv(iv,RI);class yl extends EI{constructor(){super(Q(yl.getDefaults(),arguments,["delayTime","resonance"])),this.name="FeedbackCombFilter";const e=Q(yl.getDefaults(),arguments,["delayTime","resonance"]);this.input=new at({context:this.context}),this.output=new at({context:this.context}),this.delayTime=new Ye({context:this.context,value:e.delayTime,units:"time",minValue:0,maxValue:1,param:this._dummyParam,swappable:!0}),this.resonance=new Ye({context:this.context,value:e.resonance,units:"normalRange",param:this._dummyParam,swappable:!0}),Ze(this,["resonance","delayTime"])}_audioWorkletName(){return iv}static getDefaults(){return Object.assign(xe.getDefaults(),{delayTime:.1,resonance:.5})}onReady(e){As(this.input,e,this.output);const t=e.parameters.get("delayTime");this.delayTime.setParam(t);const n=e.parameters.get("feedback");this.resonance.setParam(n)}dispose(){return super.dispose(),this.input.dispose(),this.output.dispose(),this.delayTime.dispose(),this.resonance.dispose(),this}}class Eo extends ci{constructor(){super(Q(Eo.getDefaults(),arguments,["voice","options"])),this.name="PolySynth",this._availableVoices=[],this._activeVoices=[],this._voices=[],this._gcTimeout=-1,this._averageActiveVoices=0;const e=Q(Eo.getDefaults(),arguments,["voice","options"]);Ie(!ts(e.voice),"DEPRECATED: The polyphony count is no longer the first argument.");const t=e.voice.getDefaults();this.options=Object.assign(t,e.options),this.voice=e.voice,this.maxPolyphony=e.maxPolyphony,this._dummyVoice=this._getNextAvailableVoice();const n=this._voices.indexOf(this._dummyVoice);this._voices.splice(n,1),this._gcTimeout=this.context.setInterval(this._collectGarbage.bind(this),1)}static getDefaults(){return Object.assign(ci.getDefaults(),{maxPolyphony:32,options:{},voice:ns})}get activeVoices(){return this._activeVoices.length}_makeVoiceAvailable(e){this._availableVoices.push(e);const t=this._activeVoices.findIndex(n=>n.voice===e);this._activeVoices.splice(t,1)}_getNextAvailableVoice(){if(this._availableVoices.length)return this._availableVoices.shift();if(this._voices.length<this.maxPolyphony){const e=new this.voice(Object.assign(this.options,{context:this.context,onsilence:this._makeVoiceAvailable.bind(this)}));return e.connect(this.output),this._voices.push(e),e}else Rd("Max polyphony exceeded. Note dropped.")}_collectGarbage(){if(this._averageActiveVoices=Math.max(this._averageActiveVoices*.95,this.activeVoices),this._availableVoices.length&&this._voices.length>Math.ceil(this._averageActiveVoices+1)){const e=this._availableVoices.shift(),t=this._voices.indexOf(e);this._voices.splice(t,1),this.context.isOffline||e.dispose()}}_triggerAttack(e,t,n){e.forEach(i=>{const r=new pl(this.context,i).toMidi(),o=this._getNextAvailableVoice();o&&(o.triggerAttack(i,t,n),this._activeVoices.push({midi:r,voice:o,released:!1}),this.log("triggerAttack",i,t))})}_triggerRelease(e,t){e.forEach(n=>{const i=new pl(this.context,n).toMidi(),r=this._activeVoices.find(({midi:o,released:a})=>o===i&&!a);r&&(r.voice.triggerRelease(t),r.released=!0,this.log("triggerRelease",n,t))})}_scheduleEvent(e,t,n,i){Ie(!this.disposed,"Synth was already disposed"),n<=this.now()?e==="attack"?this._triggerAttack(t,n,i):this._triggerRelease(t,n):this.context.setTimeout(()=>{this._scheduleEvent(e,t,n,i)},n-this.now())}triggerAttack(e,t,n){Array.isArray(e)||(e=[e]);const i=this.toSeconds(t);return this._scheduleEvent("attack",e,i,n),this}triggerRelease(e,t){Array.isArray(e)||(e=[e]);const n=this.toSeconds(t);return this._scheduleEvent("release",e,n),this}triggerAttackRelease(e,t,n,i){const r=this.toSeconds(n);if(this.triggerAttack(e,r,i),Dn(t)){Ie(Dn(e),"If the duration is an array, the notes must also be an array"),e=e;for(let o=0;o<e.length;o++){const a=t[Math.min(o,t.length-1)],c=this.toSeconds(a);Ie(c>0,"The duration must be greater than 0"),this.triggerRelease(e[o],r+c)}}else{const o=this.toSeconds(t);Ie(o>0,"The duration must be greater than 0"),this.triggerRelease(e,r+o)}return this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1)),this}set(e){const t=fa(e,["onsilence","context"]);return this.options=lr(this.options,t),this._voices.forEach(n=>n.set(t)),this._dummyVoice.set(t),this}get(){return this._dummyVoice.get()}releaseAll(e){const t=this.toSeconds(e);return this._activeVoices.forEach(({voice:n})=>{n.triggerRelease(t)}),this}dispose(){return super.dispose(),this._dummyVoice.dispose(),this._voices.forEach(e=>e.dispose()),this._activeVoices=[],this._availableVoices=[],this.context.clearInterval(this._gcTimeout),this}}class Ta extends ci{constructor(){super(Q(Ta.getDefaults(),arguments,["urls","onload","baseUrl"],"urls")),this.name="Sampler",this._activeSources=new Map;const e=Q(Ta.getDefaults(),arguments,["urls","onload","baseUrl"],"urls"),t={};Object.keys(e.urls).forEach(n=>{const i=parseInt(n,10);if(Ie(bc(n)||ts(i)&&isFinite(i),`url key is neither a note or midi pitch: ${n}`),bc(n)){const r=new In(this.context,n).toMidi();t[r]=e.urls[n]}else ts(i)&&isFinite(i)&&(t[i]=e.urls[i])}),this._buffers=new Ud({urls:t,onload:e.onload,baseUrl:e.baseUrl,onerror:e.onerror}),this.attack=e.attack,this.release=e.release,this.curve=e.curve,this._buffers.loaded&&Promise.resolve().then(e.onload)}static getDefaults(){return Object.assign(ci.getDefaults(),{attack:0,baseUrl:"",curve:"exponential",onload:ot,onerror:ot,release:.1,urls:{}})}_findClosest(e){let n=0;for(;n<96;){if(this._buffers.has(e+n))return-n;if(this._buffers.has(e-n))return n;n++}throw new Error(`No available buffers for note: ${e}`)}triggerAttack(e,t,n=1){return this.log("triggerAttack",e,t,n),Array.isArray(e)||(e=[e]),e.forEach(i=>{const r=J_(new In(this.context,i).toFrequency()),o=Math.round(r),a=r-o,c=this._findClosest(o),l=o-c,u=this._buffers.get(l),h=Q_(c+a),d=new Mo({url:u,context:this.context,curve:this.curve,fadeIn:this.attack,fadeOut:this.release,playbackRate:h}).connect(this.output);d.start(t,0,u.duration/h,n),Dn(this._activeSources.get(o))||this._activeSources.set(o,[]),this._activeSources.get(o).push(d),d.onended=()=>{if(this._activeSources&&this._activeSources.has(o)){const f=this._activeSources.get(o),m=f.indexOf(d);m!==-1&&f.splice(m,1)}}}),this}triggerRelease(e,t){return this.log("triggerRelease",e,t),Array.isArray(e)||(e=[e]),e.forEach(n=>{const i=new In(this.context,n).toMidi();if(this._activeSources.has(i)&&this._activeSources.get(i).length){const r=this._activeSources.get(i);t=this.toSeconds(t),r.forEach(o=>{o.stop(t)}),this._activeSources.set(i,[])}}),this}releaseAll(e){const t=this.toSeconds(e);return this._activeSources.forEach(n=>{for(;n.length;)n.shift().stop(t)}),this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1)),this}triggerAttackRelease(e,t,n,i=1){const r=this.toSeconds(n);return this.triggerAttack(e,r,i),Dn(t)?(Ie(Dn(e),"notes must be an array when duration is array"),e.forEach((o,a)=>{const c=t[Math.min(a,t.length-1)];this.triggerRelease(o,r+this.toSeconds(c))})):this.triggerRelease(e,r+this.toSeconds(t)),this}add(e,t,n){if(Ie(bc(e)||isFinite(e),`note must be a pitch or midi: ${e}`),bc(e)){const i=new In(this.context,e).toMidi();this._buffers.add(i,t,n)}else this._buffers.add(e,t,n);return this}get loaded(){return this._buffers.loaded}dispose(){return super.dispose(),this._buffers.dispose(),this._activeSources.forEach(e=>{e.forEach(t=>t.dispose())}),this._activeSources.clear(),this}}hi([as(0)],Ta.prototype,"attack",void 0);hi([as(0)],Ta.prototype,"release",void 0);class Ea extends xe{constructor(){super(Object.assign(Q(Ea.getDefaults(),arguments,["fade"]))),this.name="CrossFade",this._panner=this.context.createStereoPanner(),this._split=this.context.createChannelSplitter(2),this._g2a=new MI({context:this.context}),this.a=new at({context:this.context,gain:0}),this.b=new at({context:this.context,gain:0}),this.output=new at({context:this.context}),this._internalChannels=[this.a,this.b];const e=Q(Ea.getDefaults(),arguments,["fade"]);this.fade=new ut({context:this.context,units:"normalRange",value:e.fade}),Ze(this,"fade"),this.context.getConstant(1).connect(this._panner),this._panner.connect(this._split),this._panner.channelCount=1,this._panner.channelCountMode="explicit",Mi(this._split,this.a.gain,0),Mi(this._split,this.b.gain,1),this.fade.chain(this._g2a,this._panner.pan),this.a.connect(this.output),this.b.connect(this.output)}static getDefaults(){return Object.assign(xe.getDefaults(),{fade:.5})}dispose(){return super.dispose(),this.a.dispose(),this.b.dispose(),this.output.dispose(),this.fade.dispose(),this._g2a.dispose(),this._panner.disconnect(),this._split.disconnect(),this}}class Ao extends xe{constructor(e){super(e),this.name="Effect",this._dryWet=new Ea({context:this.context}),this.wet=this._dryWet.fade,this.effectSend=new at({context:this.context}),this.effectReturn=new at({context:this.context}),this.input=new at({context:this.context}),this.output=this._dryWet,this.input.fan(this._dryWet.a,this.effectSend),this.effectReturn.connect(this._dryWet.b),this.wet.setValueAtTime(e.wet,0),this._internalChannels=[this.effectReturn,this.effectSend],Ze(this,"wet")}static getDefaults(){return Object.assign(xe.getDefaults(),{wet:1})}connectEffect(e){return this._internalChannels.push(e),this.effectSend.chain(e,this.effectReturn),this}dispose(){return super.dispose(),this._dryWet.dispose(),this.effectSend.dispose(),this.effectReturn.dispose(),this.wet.dispose(),this}}class xl extends xe{constructor(){super(Object.assign(Q(xl.getDefaults(),arguments,["pan"]))),this.name="Panner",this._panner=this.context.createStereoPanner(),this.input=this._panner,this.output=this._panner;const e=Q(xl.getDefaults(),arguments,["pan"]);this.pan=new Ye({context:this.context,param:this._panner.pan,value:e.pan,minValue:-1,maxValue:1}),this._panner.channelCount=e.channelCount,this._panner.channelCountMode="explicit",Ze(this,"pan")}static getDefaults(){return Object.assign(xe.getDefaults(),{pan:0,channelCount:1})}dispose(){return super.dispose(),this._panner.disconnect(),this.pan.dispose(),this}}const II="bit-crusher",DI=`
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
`;nv(II,DI);class Aa extends Ao{constructor(){super(Q(Aa.getDefaults(),arguments,["order"])),this.name="Chebyshev";const e=Q(Aa.getDefaults(),arguments,["order"]);this._shaper=new Cs({context:this.context,length:4096}),this._order=e.order,this.connectEffect(this._shaper),this.order=e.order,this.oversample=e.oversample}static getDefaults(){return Object.assign(Ao.getDefaults(),{order:1,oversample:"none"})}_getCoefficient(e,t,n){return n.has(t)||(t===0?n.set(t,0):t===1?n.set(t,e):n.set(t,2*e*this._getCoefficient(e,t-1,n)-this._getCoefficient(e,t-2,n))),n.get(t)}get order(){return this._order}set order(e){this._order=e,this._shaper.setMap(t=>this._getCoefficient(t,e,new Map))}get oversample(){return this._shaper.oversample}set oversample(e){this._shaper.oversample=e}dispose(){return super.dispose(),this._shaper.dispose(),this}}class Sl extends xe{constructor(){super(Q(Sl.getDefaults(),arguments,["channels"])),this.name="Split";const e=Q(Sl.getDefaults(),arguments,["channels"]);this._splitter=this.input=this.output=this.context.createChannelSplitter(e.channels),this._internalChannels=[this._splitter]}static getDefaults(){return Object.assign(xe.getDefaults(),{channels:2})}dispose(){return super.dispose(),this._splitter.disconnect(),this}}class Ml extends xe{constructor(){super(Q(Ml.getDefaults(),arguments,["channels"])),this.name="Merge";const e=Q(Ml.getDefaults(),arguments,["channels"]);this._merger=this.output=this.input=this.context.createChannelMerger(e.channels)}static getDefaults(){return Object.assign(xe.getDefaults(),{channels:2})}dispose(){return super.dispose(),this._merger.disconnect(),this}}class Sm extends xe{constructor(e){super(e),this.name="StereoEffect",this.input=new at({context:this.context}),this.input.channelCount=2,this.input.channelCountMode="explicit",this._dryWet=this.output=new Ea({context:this.context,fade:e.wet}),this.wet=this._dryWet.fade,this._split=new Sl({context:this.context,channels:2}),this._merge=new Ml({context:this.context,channels:2}),this.input.connect(this._split),this.input.connect(this._dryWet.a),this._merge.connect(this._dryWet.b),Ze(this,["wet"])}connectEffectLeft(...e){this._split.connect(e[0],0,0),As(...e),Mi(e[e.length-1],this._merge,0,0)}connectEffectRight(...e){this._split.connect(e[0],1,0),As(...e),Mi(e[e.length-1],this._merge,0,1)}static getDefaults(){return Object.assign(xe.getDefaults(),{wet:1})}dispose(){return super.dispose(),this._dryWet.dispose(),this._split.dispose(),this._merge.dispose(),this}}class bl extends Ao{constructor(){super(Q(bl.getDefaults(),arguments,["distortion"])),this.name="Distortion";const e=Q(bl.getDefaults(),arguments,["distortion"]);this._shaper=new Cs({context:this.context,length:4096}),this._distortion=e.distortion,this.connectEffect(this._shaper),this.distortion=e.distortion,this.oversample=e.oversample}static getDefaults(){return Object.assign(Ao.getDefaults(),{distortion:.4,oversample:"none"})}get distortion(){return this._distortion}set distortion(e){this._distortion=e;const t=e*100,n=Math.PI/180;this._shaper.setMap(i=>Math.abs(i)<.001?0:(3+t)*i*20*n/(Math.PI+t*Math.abs(i)))}get oversample(){return this._shaper.oversample}set oversample(e){this._shaper.oversample=e}dispose(){return super.dispose(),this._shaper.dispose(),this}}class Mm extends Ao{constructor(e){super(e),this.name="FeedbackEffect",this._feedbackGain=new at({context:this.context,gain:e.feedback,units:"normalRange"}),this.feedback=this._feedbackGain.gain,Ze(this,"feedback"),this.effectReturn.chain(this._feedbackGain,this.effectSend)}static getDefaults(){return Object.assign(Ao.getDefaults(),{feedback:.125})}dispose(){return super.dispose(),this._feedbackGain.dispose(),this.feedback.dispose(),this}}class Tl extends Mm{constructor(){super(Q(Tl.getDefaults(),arguments,["delayTime","feedback"])),this.name="FeedbackDelay";const e=Q(Tl.getDefaults(),arguments,["delayTime","feedback"]);this._delayNode=new fl({context:this.context,delayTime:e.delayTime,maxDelay:e.maxDelay}),this.delayTime=this._delayNode.delayTime,this.connectEffect(this._delayNode),Ze(this,"delayTime")}static getDefaults(){return Object.assign(Mm.getDefaults(),{delayTime:.25,maxDelay:1})}dispose(){return super.dispose(),this._delayNode.dispose(),this.delayTime.dispose(),this}}const bm=[1687/25e3,1601/25e3,2053/25e3,2251/25e3],PI=[.773,.802,.753,.733],NI=[347,113,37];class wa extends Sm{constructor(){super(Q(wa.getDefaults(),arguments,["roomSize"])),this.name="JCReverb",this._allpassFilters=[],this._feedbackCombFilters=[];const e=Q(wa.getDefaults(),arguments,["roomSize"]);this.roomSize=new ut({context:this.context,value:e.roomSize,units:"normalRange"}),this._scaleRoomSize=new _l({context:this.context,min:-.733,max:.197}),this._allpassFilters=NI.map(t=>{const n=this.context.createBiquadFilter();return n.type="allpass",n.frequency.value=t,n}),this._feedbackCombFilters=bm.map((t,n)=>{const i=new yl({context:this.context,delayTime:t});return this._scaleRoomSize.connect(i.resonance),i.resonance.value=PI[n],n<bm.length/2?this.connectEffectLeft(...this._allpassFilters,i):this.connectEffectRight(...this._allpassFilters,i),i}),this.roomSize.connect(this._scaleRoomSize),Ze(this,["roomSize"])}static getDefaults(){return Object.assign(Sm.getDefaults(),{roomSize:.5})}dispose(){return super.dispose(),this._allpassFilters.forEach(e=>e.disconnect()),this._feedbackCombFilters.forEach(e=>e.dispose()),this.roomSize.dispose(),this._scaleRoomSize.dispose(),this}}class bt extends xe{constructor(){super(Q(bt.getDefaults(),arguments,["solo"])),this.name="Solo";const e=Q(bt.getDefaults(),arguments,["solo"]);this.input=this.output=new at({context:this.context}),bt._allSolos.has(this.context)||bt._allSolos.set(this.context,new Set),bt._allSolos.get(this.context).add(this),this.solo=e.solo}static getDefaults(){return Object.assign(xe.getDefaults(),{solo:!1})}get solo(){return this._isSoloed()}set solo(e){e?this._addSolo():this._removeSolo(),bt._allSolos.get(this.context).forEach(t=>t._updateSolo())}get muted(){return this.input.gain.value===0}_addSolo(){bt._soloed.has(this.context)||bt._soloed.set(this.context,new Set),bt._soloed.get(this.context).add(this)}_removeSolo(){bt._soloed.has(this.context)&&bt._soloed.get(this.context).delete(this)}_isSoloed(){return bt._soloed.has(this.context)&&bt._soloed.get(this.context).has(this)}_noSolos(){return!bt._soloed.has(this.context)||bt._soloed.has(this.context)&&bt._soloed.get(this.context).size===0}_updateSolo(){this._isSoloed()?this.input.gain.value=1:this._noSolos()?this.input.gain.value=1:this.input.gain.value=0}dispose(){return super.dispose(),bt._allSolos.get(this.context).delete(this),this._removeSolo(),this}}bt._allSolos=new Map;bt._soloed=new Map;class El extends xe{constructor(){super(Q(El.getDefaults(),arguments,["pan","volume"])),this.name="PanVol";const e=Q(El.getDefaults(),arguments,["pan","volume"]);this._panner=this.input=new xl({context:this.context,pan:e.pan,channelCount:e.channelCount}),this.pan=this._panner.pan,this._volume=this.output=new mr({context:this.context,volume:e.volume}),this.volume=this._volume.volume,this._panner.connect(this._volume),this.mute=e.mute,Ze(this,["pan","volume"])}static getDefaults(){return Object.assign(xe.getDefaults(),{mute:!1,pan:0,volume:0,channelCount:1})}get mute(){return this._volume.mute}set mute(e){this._volume.mute=e}dispose(){return super.dispose(),this._panner.dispose(),this.pan.dispose(),this._volume.dispose(),this.volume.dispose(),this}}class js extends xe{constructor(){super(Q(js.getDefaults(),arguments,["volume","pan"])),this.name="Channel";const e=Q(js.getDefaults(),arguments,["volume","pan"]);this._solo=this.input=new bt({solo:e.solo,context:this.context}),this._panVol=this.output=new El({context:this.context,pan:e.pan,volume:e.volume,mute:e.mute,channelCount:e.channelCount}),this.pan=this._panVol.pan,this.volume=this._panVol.volume,this._solo.connect(this._panVol),Ze(this,["pan","volume"])}static getDefaults(){return Object.assign(xe.getDefaults(),{pan:0,volume:0,mute:!1,solo:!1,channelCount:1})}get solo(){return this._solo.solo}set solo(e){this._solo.solo=e}get muted(){return this._solo.muted||this.mute}get mute(){return this._panVol.mute}set mute(e){this._panVol.mute=e}_getBus(e){return js.buses.has(e)||js.buses.set(e,new at({context:this.context})),js.buses.get(e)}send(e,t=0){const n=this._getBus(e),i=new at({context:this.context,units:"decibels",gain:t});return this.connect(i),i.connect(n),i}receive(e){return this._getBus(e).connect(this),this}dispose(){return super.dispose(),this._panVol.dispose(),this.pan.dispose(),this.volume.dispose(),this._solo.dispose(),this}}js.buses=new Map;class LI extends xe{constructor(){super(...arguments),this.name="Listener",this.positionX=new Ye({context:this.context,param:this.context.rawContext.listener.positionX}),this.positionY=new Ye({context:this.context,param:this.context.rawContext.listener.positionY}),this.positionZ=new Ye({context:this.context,param:this.context.rawContext.listener.positionZ}),this.forwardX=new Ye({context:this.context,param:this.context.rawContext.listener.forwardX}),this.forwardY=new Ye({context:this.context,param:this.context.rawContext.listener.forwardY}),this.forwardZ=new Ye({context:this.context,param:this.context.rawContext.listener.forwardZ}),this.upX=new Ye({context:this.context,param:this.context.rawContext.listener.upX}),this.upY=new Ye({context:this.context,param:this.context.rawContext.listener.upY}),this.upZ=new Ye({context:this.context,param:this.context.rawContext.listener.upZ})}static getDefaults(){return Object.assign(xe.getDefaults(),{positionX:0,positionY:0,positionZ:0,forwardX:0,forwardY:0,forwardZ:-1,upX:0,upY:1,upZ:0})}dispose(){return super.dispose(),this.positionX.dispose(),this.positionY.dispose(),this.positionZ.dispose(),this.forwardX.dispose(),this.forwardY.dispose(),this.forwardZ.dispose(),this.upX.dispose(),this.upY.dispose(),this.upZ.dispose(),this}}ql(s=>{s.listener=new LI({context:s})});jl(s=>{s.listener.dispose()});class Al extends xe{constructor(){super(Q(Al.getDefaults(),arguments,["threshold","ratio"])),this.name="Compressor",this._compressor=this.context.createDynamicsCompressor(),this.input=this._compressor,this.output=this._compressor;const e=Q(Al.getDefaults(),arguments,["threshold","ratio"]);this.threshold=new Ye({minValue:this._compressor.threshold.minValue,maxValue:this._compressor.threshold.maxValue,context:this.context,convert:!1,param:this._compressor.threshold,units:"decibels",value:e.threshold}),this.attack=new Ye({minValue:this._compressor.attack.minValue,maxValue:this._compressor.attack.maxValue,context:this.context,param:this._compressor.attack,units:"time",value:e.attack}),this.release=new Ye({minValue:this._compressor.release.minValue,maxValue:this._compressor.release.maxValue,context:this.context,param:this._compressor.release,units:"time",value:e.release}),this.knee=new Ye({minValue:this._compressor.knee.minValue,maxValue:this._compressor.knee.maxValue,context:this.context,convert:!1,param:this._compressor.knee,units:"decibels",value:e.knee}),this.ratio=new Ye({minValue:this._compressor.ratio.minValue,maxValue:this._compressor.ratio.maxValue,context:this.context,convert:!1,param:this._compressor.ratio,units:"positive",value:e.ratio}),Ze(this,["knee","release","attack","ratio","threshold"])}static getDefaults(){return Object.assign(xe.getDefaults(),{attack:.003,knee:30,ratio:12,release:.25,threshold:-24})}get reduction(){return this._compressor.reduction}dispose(){return super.dispose(),this._compressor.disconnect(),this.attack.dispose(),this.release.dispose(),this.threshold.dispose(),this.ratio.dispose(),this.knee.dispose(),this}}class wl extends xe{constructor(){super(Object.assign(Q(wl.getDefaults(),arguments,["threshold"]))),this.name="Limiter";const e=Q(wl.getDefaults(),arguments,["threshold"]);this._compressor=this.input=this.output=new Al({context:this.context,ratio:20,attack:.003,release:.01,threshold:e.threshold}),this.threshold=this._compressor.threshold,Ze(this,"threshold")}static getDefaults(){return Object.assign(xe.getDefaults(),{threshold:-12})}get reduction(){return this._compressor.reduction}dispose(){return super.dispose(),this._compressor.dispose(),this.threshold.dispose(),this}}ni().transport;ni().destination;ni().destination;ni().listener;ni().draw;ni();let Cl=!1;window.addEventListener("pointerup",async()=>{Cl||(await lI(),Cl=!0,console.log("audio is ready"))});const zd={C:[16.35,32.7,65.41,130.81,261.63,523.25,1046.5,2093,4186.01],Db:[17.32,34.65,69.3,138.59,277.18,554.37,1108.73,2217.46,4434.92],D:[18.35,36.71,73.42,146.83,293.66,587.33,1174.66,2349.32,4698.64],Eb:[19.45,38.89,77.78,155.56,311.13,622.25,1244.51,2489.02,4978.03],E:[20.6,41.2,82.41,164.81,329.63,659.26,1318.51,2637.02],F:[21.83,43.65,87.31,174.61,349.23,698.46,1396.91,2793.83],Gb:[23.12,46.25,92.5,185,369.99,739.99,1479.98,2959.96],G:[24.5,49,98,196,392,783.99,1567.98,3135.96],Ab:[25.96,51.91,103.83,207.65,415.3,830.61,1661.22,3322.44],A:[27.5,55,110,220,440,880,1760,3520],Bb:[29.14,58.27,116.54,233.08,466.16,932.33,1864.66,3729.31],B:[30.87,61.74,123.47,246.94,493.88,987.77,1975.53,3951.07]},OI="A",UI=2,FI="majorScale",zr={tonic:"A",octave:2};let Gd=zd.A[2];const kI=[0,2,4,7,9],BI=[0,3,5,6,7,10],VI=[0,3,5,7,10],sv=[0,2,4,5,7,9,11],zI=[0,2,3,5,7,9,11],GI=[0,2,3,5,7,8,10],Gr={majorPentatonic:kI,bluesScale:BI,minorPentatonic:VI,majorScale:sv,melodicMinorScale:zI,naturalMinorScale:GI};let _n=sv;function HI(s){let e=s.length,t;for(;e>0;)t=Math.floor(Math.random()*e),e--,[s[e],s[t]]=[s[t],s[e]];return s}function Hd(s,e){return(s%e+e)%e}const WI=new ns().toDestination(),wo=["sine","amsine","amsine2","amsquare","amtriangle","amsawtooth"],Rl=["white","brown","pink"];let XI=function(s){s.callbacks===void 0&&(s.callbacks=[]),s.eventOnModify=function(e,t){s[e]=t,s.callbacks!==void 0&&s.callbacks.length>0&&s.callbacks.forEach(n=>n(e))},s.addOnModifyEventListener=function(e){if(s.callbacks===void 0)throw"addModifyEventListener: Array Modify Event Not Initialized";s.callbacks.includes(e)||s.callbacks.push(e)}};const Ca=new wl(-10).toDestination(),qI=function(){const s=new wa().connect(Ca),e=new bl(1).connect(s),t=new Eo(ns,{oscillator:{type:"amtriangle",decayCurve:"linear",harmonicity:.5,modulationType:"sine"}}).connect(e);this.name="AttackReleaseSynth",this.parameters={volume:{value:-15,min:-50,max:-5},attack:{value:.05,min:.005,max:1},release:{value:.5,min:.01,max:2},harmonicity:{value:3,min:.01,max:5},waveform:{value:0,min:0,max:wo.length-1},distortion:{value:1,min:1,max:100},reverb:{value:0,min:0,max:1}},this.parameterNames=["volume","attack","release","harmonicity","waveform","distortion","reverb"],this.updateAllParameters=function(){t.maxPolyphony=10,t.volume.value=this.parameters.volume.value,e.distortion=Math.floor(this.parameters.distortion.value)/100,s.roomSize.value=.8,s.wet.value=this.parameters.reverb.value,t.set({oscillator:{harmonicity:Math.floor(this.parameters.harmonicity.value*10)/10,type:wo[Math.floor(this.parameters.waveform.value)]},envelope:{attack:this.parameters.attack.value,decay:0,sustain:1,release:this.parameters.release.value}})},this.updateAllParameters(),this.getParamValueFromNormRange=function(n,i){return this.parameters[n].default===void 0&&(this.parameters[n].default=this.parameters[n].value),tt.lerp(this.parameters[n].min,this.parameters[n].max,i)},this.modifyParameter=function(n,i){this.parameters[n].default===void 0&&(this.parameters[n].default=this.parameters[n].value),this.parameters[n].value=i,this.updateAllParameters()},this.getDefault01=function(n){return(this.parameters[n].value-this.parameters[n].min)/(this.parameters[n].max-this.parameters[n].min)},this.play=function(n,i){const r=Gd*Math.pow(2,Math.floor(n/_n.length)+_n[Hd(n,_n.length)]/12);t.maxPolyphony>0&&t._activeVoices.length===t.maxPolyphony&&t._availableVoices.length===0?(t._activeVoices[0].released=!0,t._activeVoices[0].voice.triggerAttackRelease(r,this.parameters.attack.value)):t.triggerAttackRelease(r,this.parameters.attack.value)},this.releaseAll=function(){t.releaseAll(0)}},jI=function(){const s=new wa().connect(Ca),e=new Aa(50).connect(s),t=new Eo(ns,{oscillator:{type:"amsawtooth",decayCurve:"linear",harmonicity:.5,modulationType:"sine"}}).connect(e);this.name="SustainSynth",this.parameters={volume:{value:-15,min:-50,max:-5},attack:{value:.05,min:.005,max:1.5},sustainTime:{value:.5,min:.01,max:2},harmonicity:{value:3,min:.01,max:5},waveform:{value:0,min:0,max:wo.length-1},distortion:{value:1,min:1,max:100},reverb:{value:.034,min:0,max:1}},this.parameterNames=["volume","attack","sustainTime","harmonicity","waveform","distortion","reverb"],this.updateAllParameters=function(){t.maxPolyphony=10,t.volume.value=this.parameters.volume.value,e.order=Math.floor(this.parameters.distortion.value),s.roomSize.value=.8,s.wet.value=this.parameters.reverb.value,t.set({oscillator:{harmonicity:Math.floor(this.parameters.harmonicity.value*10)/10,type:wo[Math.floor(this.parameters.waveform.value)]},envelope:{attack:this.parameters.attack.value,decay:this.parameters.sustainTime.value,sustain:1,release:.05}})},this.updateAllParameters(),this.getParamValueFromNormRange=function(n,i){return this.parameters[n].default===void 0&&(this.parameters[n].default=this.parameters[n].value),tt.lerp(this.parameters[n].min,this.parameters[n].max,i)},this.modifyParameter=function(n,i){this.parameters[n].default===void 0&&(this.parameters[n].default=this.parameters[n].value),this.parameters[n].value=i,this.updateAllParameters()},this.getDefault01=function(n){return(this.parameters[n].value-this.parameters[n].min)/(this.parameters[n].max-this.parameters[n].min)},this.play=function(n,i){const r=Gd*Math.pow(2,Math.floor(n/_n.length)+_n[Hd(n,_n.length)]/12);t.maxPolyphony>0&&t._activeVoices.length===t.maxPolyphony&&t._availableVoices.length===0?(t._activeVoices[0].released=!0,t._activeVoices[0].voice.triggerAttackRelease(r,this.parameters.sustainTime.value+this.parameters.attack.value)):t.triggerAttackRelease(r,this.parameters.sustainTime.value+this.parameters.attack.value)},this.releaseAll=function(){t.releaseAll(0)}},YI=function(){const s=new vl({frequency:11e3,type:"highpass"}).connect(Ca),e=new bI().connect(s);this.name="NoiseSynth",this.parameters={volume:{value:-15,min:-50,max:-5},attack:{value:.05,min:.005,max:3},decay:{value:.5,min:.01,max:4},noiseType:{value:0,min:0,max:Rl.length-1},cutOffFrequency:{value:11e3,min:100,max:2e4},playbackRate:{value:1,min:.05,max:3}},this.parameterNames=["volume","attack","decay","noiseType","cutOffFrequency","playbackRate"],this.updateAllParameters=function(){e.volume.value=this.parameters.volume.value,s.frequency.value=this.parameters.cutOffFrequency.value,e.noise.noiseType=Rl[Math.floor(this.parameters.noiseType.value)],e.noise.playbackRate=this.parameters.playbackRate.value,e.envelope.set({attack:this.parameters.attack.value,decay:this.parameters.decay.value,sustain:0,release:0})},this.updateAllParameters(),this.getParamValueFromNormRange=function(t,n){return this.parameters[t].default===void 0&&(this.parameters[t].default=this.parameters[t].value),tt.lerp(this.parameters[t].min,this.parameters[t].max,n)},this.modifyParameter=function(t,n){this.parameters[t].default===void 0&&(this.parameters[t].default=this.parameters[t].value),this.parameters[t].value=n,this.updateAllParameters()},this.getDefault01=function(t){return(this.parameters[t].value-this.parameters[t].min)/(this.parameters[t].max-this.parameters[t].min)},this.play=function(t,n){e.triggerAttackRelease(this.parameters.attack.value+this.parameters.decay.value)},this.releaseAll=function(){}},$I=function(){const s=new Tl().connect(Ca),e=new Aa(50).connect(s).connect(Ca),t=new Eo(To).connect(e);this.name="Membrane",this.parameters={volume:{value:-15,min:-50,max:-5},attack:{value:.001,min:.001,max:1.5},pitchDecay:{value:.05,min:.01,max:1.5},octaves:{value:10,min:1,max:20},distortion:{value:1,min:1,max:100},delayTime:{value:.1,min:0,max:1},feedback:{value:0,min:0,max:1}},this.parameterNames=["volume","attack","pitchDecay","octaves","distortion","delayTime","feedback"],this.updateAllParameters=function(){e.order=Math.floor(this.parameters.distortion.value),s.delayTime.value=this.parameters.delayTime.value,s.feedback.value=this.parameters.feedback.value,t.maxPolyphony=10,t.volume.value=this.parameters.volume.value,t.set({octaves:Math.floor(this.parameters.octaves.value),envelope:{attack:this.parameters.attack.value,decay:this.parameters.pitchDecay.value,sustain:0,release:0}})},this.updateAllParameters(),this.getParamValueFromNormRange=function(n,i){return this.parameters[n].default===void 0&&(this.parameters[n].default=this.parameters[n].value),tt.lerp(this.parameters[n].min,this.parameters[n].max,i)},this.modifyParameter=function(n,i){this.parameters[n].default===void 0&&(this.parameters[n].default=this.parameters[n].value),this.parameters[n].value=i,this.updateAllParameters()},this.getDefault01=function(n){return(this.parameters[n].value-this.parameters[n].min)/(this.parameters[n].max-this.parameters[n].min)},this.play=function(n,i){const r=zd.C[0]*Math.pow(2,Math.floor(n/_n.length)+_n[Hd(n,_n.length)]/12);t.maxPolyphony>0&&t._activeVoices.length===t.maxPolyphony&&t._availableVoices.length===0?(t._activeVoices[0].released=!0,t._activeVoices[0].voice.triggerAttackRelease(r,this.parameters.pitchDecay.value+this.parameters.attack.value)):t.triggerAttackRelease(r,this.parameters.attack.value+this.parameters.pitchDecay.value)},this.releaseAll=function(){t.releaseAll(0)}};class KI{#e=4;melody=[];availableMelody=[{notes:[]},{notes:[]},{notes:[]},{notes:[]}];instruments=[new qI,new jI,new $I,new YI];#t=0;#n=0;constructor(e){this.#e=e,this.melodyInstrumentID=new Array(e*40).fill(4),XI(this.melodyInstrumentID),this.activeEffectID=[],this.melodyPlaySequence=[],this.availableIds=[],this.availableEffectIds=[];for(let t=0;t<e*40;t++)this.availableEffectIds.push({effect:-1-Math.floor(t/40),id_on_beat:t%40});HI(this.availableEffectIds),this.melody=new Array(this.#e);for(let t=0;t<this.#e;t++)this.melody[t]={instances:[]}}getMelodyData(e){var t={name:e,scale:"",tonicOctave:zr,Synth1:{},Synth2:{},Synth3:{},Synth4:{},melody:[]};Object.keys(Gr).forEach(n=>{Gr[n]===_n&&(t.scale=n)});for(let n=0;n<4;n++){const i=this.instruments[n];t[`Synth${n+1}`].parameters={},Object.keys(i.parameters).forEach(r=>{t[`Synth${n+1}`].parameters[r]=i.parameters[r].value})}return this.melody.forEach((n,i)=>{n.instances.forEach((r,o)=>{t.melody.push({beat:i,id_on_beat:r.id_on_beat,instrument:r.instrument,pitch:r.pitch})})}),t}setActiveScale(e){_n=Gr[e]}getActiveScale(){return Object.keys(Gr).forEach(e=>{if(Gr[e]===_n)return e}),"bluesScale"}getDefaultScale(){return FI}getDefaultTonicAndOctave(){return{tonic:OI,octave:UI}}setTonicAndOctave(e,t){e!==void 0&&(zr.tonic=e),t!==void 0&&(zr.octave=t),Gd=zd[zr.tonic][zr.octave]}getCurrentTonicAndOctave(){return zr}setMelodyFromJsonData(e,t=!1){e.scale!==void 0&&(_n=Gr[e.scale]),e.tonicOctave!==void 0&&this.setTonicAndOctave(e.tonicOctave.tonic,e.tonicOctave.octave);for(let n=0;n<4;n++){const i=this.instruments[n];Object.keys(i.parameters).forEach(r=>{e[`Synth${n+1}`].parameters[r]!==void 0&&i.modifyParameter(r,e[`Synth${n+1}`].parameters[r])})}this.#t=0,e.melody.forEach(n=>{t?this.addInstrumentOnPosition(n.instrument,n.beat,n.id_on_beat,n.pitch):this.availableMelody[n.instrument].notes.push({beat:n.beat,id_on_beat:n.id_on_beat,pitch:n.pitch}),this.#t++})}resetMelody(){for(let e=0;e<4;e++){const t=this.instruments[e];Object.keys(t.parameters).forEach(n=>{t.parameters[n].default!==void 0&&(t.parameters[n].value=t.parameters[n].default)})}for(let e=0;e<this.#e;e++)this.melody[e].instances.length=0;this.melodyInstrumentID.fill(4);for(let e=0;e<this.melodyInstrumentID.length;e++)this.melodyInstrumentID.eventOnModify(e,4);this.activeEffectID.length=0,this.availableMelody=[{notes:[]},{notes:[]},{notes:[]},{notes:[]}],this.#t=1,this.#n=0}addInstrumentOnPosition(e,t,n,i){this.melodyInstrumentID.eventOnModify(t*40+n,e);let r;if(this.melody[t].instances.forEach((a,c)=>{a.id_on_beat===n&&(r=c,a.instrument=e)}),e===4){r!==void 0&&this.melody[t].instances.splice(r,1);return}else if(r!==void 0)return this.melody[t].instances[r];this.availableIds.includes(t*40+n)||this.availableIds.push(t*40+n);const o={id_on_beat:n,instrument:e,effect:-1-t,played_at:-1,pitch:i};return this.melody[t].instances.push(o),o}addInstrumentOnRandomAvailablePosition(e){if(this.availableMelody[e].notes.length===0)return;const t=this.availableMelody[e].notes.pop(),n={id_on_beat:t.id_on_beat,instrument:e,effect:-1-t.beat,played_at:-1,pitch:t.pitch};this.melody[t.beat].instances.push(n),this.#n++,this.melodyInstrumentID.eventOnModify(t.beat*40+t.id_on_beat,e),this.playInstrumentAt(n)}getProgress(){return this.#n/this.#t}addEffectOnRandomAvailablePosition(e,t){if(this.availableEffectIds.length===0)return;const n=this.availableEffectIds.pop(),i=-1-n.effect,r=n.id_on_beat%40;this.activeEffectID.push({beat:i,id_on_beat:r,effect:e,color:t})}addEffectOnPosition(e,t,n,i,r){let o;if(this.melody[t].instances.forEach((c,l)=>{c.id_on_beat===n&&(o=c,c.effect[e]=i)}),!o)return;let a=!1;return this.activeEffectID.forEach((c,l)=>{c.beat===t&&c.id_on_beat===n&&(a=!0,c.effect=e,c.color=r)}),a||this.activeEffectID.push({beat:t,id_on_beat:n,effect:e,color:r}),o}playInstrumentAt(e,t=1){let n=this.instruments[e.instrument];Cl&&(Math.floor(Math.random()*_n.length),t>.5?t=0:t=Math.floor((1-t/.5)*10),n.play(e.pitch-t,e.effect))}playEmptyInstrument(){Cl&&WI.triggerAttackRelease(30,.01)}flattenMelody(){let e=[];return this.melody.forEach(t=>{t.beat.forEach(n=>{e.push(n)})}),e}}const ZI=s=>{const e=s.clock.getDelta();return s.time.UIelapsed=s.clock.elapsedTime,s.time.UIdelta=e,s.paused||document.hidden||e>.5?(s.time.delta=0,s):(s.time.delta=e,s.time.elapsed=s.clock.elapsedTime,s)},QI=s=>(s.composer.render(s.scene,s.camera),s),JI=qg([vo,$g]),eD=s=>1/(1+s+.48*s*s+.235*s*s*s);function Gu(s,e,t,n=.25,i=.01,r=1/0,o=eD,a=.001){const c="velocity_"+e;if(s.__damp===void 0&&(s.__damp={}),s.__damp[c]===void 0&&(s.__damp[c]=0),Math.abs(s[e]-t)<=a)return s[e]=t,!1;n=Math.max(1e-4,n);const l=2/n,u=o(l*i);let h=s[e]-t;const d=t,f=r*n;h=Math.min(Math.max(h,-f),f),t=s[e]-h;const m=(s.__damp[c]+l*h)*i;s.__damp[c]=(s.__damp[c]-l*m)*u;let _=t+(h+m)*u;return d-s[e]>0==_>d&&(_=d,s.__damp[c]=(_-d)/i),s[e]=_,!0}const Ec=new P;let Tm,Em,Am;function Hu(s,e,t,n,i,r,o){return Ec.copy(e),Tm=Gu(s,"x",Ec.x,t,n,i,r,o),Em=Gu(s,"y",Ec.y,t,n,i,r,o),Am=Gu(s,"z",Ec.z,t,n,i,r,o),Tm||Em||Am}const Wu=new P,Xu=new P,tD=s=>{const e=JI(s);for(let t=0;t<e.length;t++){const n=e[t],i=s.objects.get(n);s.win||(s.Input.current_input.mouseMove&&(i.userData.tbnVelocity.x+=s.Input.current_input.diffX*4*3.14,i.userData.tbnVelocity.y-=s.Input.current_input.diffY*4*3.14),i.userData.tbnVelocity.x+=s.Input.current_input.accX,i.userData.tbnVelocity.y-=s.Input.current_input.accY),i.userData.tbnVelocity.x=Math.min(Math.max(i.userData.tbnVelocity.x,-1),1),i.userData.tbnVelocity.y=Math.min(Math.max(i.userData.tbnVelocity.y,-1),1),i.userData.tbnVelocity.clampLength(0,1);const r=s.Curve.pos.clone();let o=Math.max(.01,1-i.userData.tbnVelocity.dot(i.userData.tbnVelocity));o=Math.sqrt(o),s.GlobalParameters.speed=i.userData.speed*o,i.userData.offset.add(i.userData.tbnVelocity.clone().multiplyScalar(i.userData.speed*s.time.delta)).clampLength(0,.65),s.Input.current_input.mouseMove||Hu(i.userData.tbnVelocity,Xu.set(0,0,0),.25,s.time.delta),(s.win===!0||s.editMode===!0&&!s.Input.current_input.mouseMove)&&(Hu(i.userData.tbnVelocity,Xu.set(0,0,0),.25,s.time.delta),Hu(i.userData.offset,Xu.set(0,0,0),.25,s.time.delta));const a=i.userData.offset.clone();a.copy(s.Curve.biNormal.clone().multiplyScalar(a.x).add(s.Curve.normal.clone().multiplyScalar(a.y))),i.position.copy(r.add(a)),i.up.copy(s.Curve.normal),Wu.copy(s.Curve.biNormal.clone().multiplyScalar(i.userData.tbnVelocity.x).add(s.Curve.normal.clone().multiplyScalar(i.userData.tbnVelocity.y))),Wu.add(s.Curve.tangent.clone().multiplyScalar(2)),i.lookAt(r.clone().add(Wu))}return s},nD=qg([vo,Kg]),iD=s=>{const e=nD(s);if(s.howToPlay===!0)return s;for(let t=0;t<e.length;t++){const n=e[t],i=s.objects.get(n),r=s.Curve.normal.clone();i.position.copy(s.camera.position.clone().add(s.Curve.tangent.clone().multiplyScalar(.01))),i.position.add(r.clone().multiplyScalar(-.08)),i.up.copy(r.clone().multiplyScalar(-1)),i.lookAt(s.Curve.pos.clone().sub(s.Curve.tangent).sub(r.multiplyScalar(.2)))}return s};function Ac(s,e){s.enabled=!0,s.setEffectiveTimeScale(1),s.setEffectiveWeight(e)}function wm(s,e,t){return Math.min(Math.max(s,e),t)}const sD=s=>{const e=s.camera,t=wm(e.userData.tbnVelocity.x/1.2,-1,1),n=wm(e.userData.tbnVelocity.y/1,-.5,1),i=t<0?-t:0,r=t>0?t:0;Ac(s.hand_actions[1],i),Ac(s.hand_actions[2],r);const o=n>0?n:0,a=n<0?-n:0;return Ac(s.hand_actions[3],o),Ac(s.hand_actions[4],a),s.mixer.update(s.time.delta),s},qr=4,so=1024,Gt=4,wc=new Pe;new P(1,1,1);let Ys;function rD(s=1){const e=new Float32Array(so*Gt*s*qr),t=new Eg(e,so,Gt*s,Rn,vi);return t.wrapS=vn,t.wrapY=vn,t.magFilter=Pt,t.needsUpdate=!0,t}function oD(s,e,t=0,n=void 0,i){e.computeFrenetFramesLookingAtPreviuos===void 0&&(e.computeFrenetFramesLookingAtPreviuos=function(c,l,u,h){new P;const d=[],f=[],m=[],_=new P,g=new Pe;for(let x=0;x<=c;x++){const v=x/c;d[x]=this.getTangentAt(v,new P)}f[0]=u,m[0]=h;function p(x,v,M){return Math.max(v,Math.min(M,x))}for(let x=1;x<=c;x++){if(f[x]=f[x-1].clone(),m[x]=m[x-1].clone(),_.crossVectors(d[x-1],d[x]),_.length()>Number.EPSILON){_.normalize();const v=Math.acos(p(d[x-1].dot(d[x]),-1,1));f[x].applyMatrix4(g.makeRotationAxis(_,v))}m[x].crossVectors(d[x],f[x])}if(l===!0){let x=Math.acos(p(f[0].dot(f[c]),-1,1));x/=c,d[0].dot(_.crossVectors(f[0],f[c]))>0&&(x=-x);for(let v=1;v<=c;v++)f[v].applyMatrix4(g.makeRotationAxis(d[v],x*v)),m[v].crossVectors(d[v],f[v])}return{tangents:d,normals:f,binormals:m}});const r=Math.floor(so*(Gt/4));e.arcLengthDivisions=r/2,e.updateArcLengths();const o=e.getSpacedPoints(r);let a;n===void 0&&t===0?a=e.computeFrenetFrames(r,!1):(n===void 0&&(n=t-1),a=e.computeFrenetFramesLookingAtPreviuos(r,!1,i[n].normals[r-1],i[n].binormals[r-1])),a.points=o,i[t]=a;for(let c=0;c<r;c++){const l=Math.floor(c/so),u=c%so;let h=a.points[c];Cc(s,u,h.x,h.y,h.z,0+l+Gt*t),h=a.tangents[c],Cc(s,u,h.x,h.y,h.z,1+l+Gt*t),h=a.normals[c],Cc(s,u,h.x,h.y,h.z,2+l+Gt*t),h=a.binormals[c],Cc(s,u,h.x,h.y,h.z,3+l+Gt*t)}s.needsUpdate=!0}function Cc(s,e,t,n,i,r){const o=s.image,{data:a}=o,c=qr*so*r;a[e*qr+c+0]=t,a[e*qr+c+1]=n,a[e*qr+c+2]=i,a[e*qr+c+3]=1}function aD(s){return{spineTexture:{value:s},pathOffset:{type:"f",value:0},pathSegment:{type:"f",value:1},spineOffset:{type:"f",value:0},spineLength:{type:"f",value:.01},flow:{type:"i",value:1},time:{type:"f",value:0},colors:{value:[.8,.8,.8,.1,0,.3,1,1,1,.7,.2,.2,.2,.2,.6]}}}function Ji(s,e,t,n){s.setAttribute(e.toString(),new la(new Int32Array(t),n)),s.attributes[e.toString()].setUsage(Nl),s.attributes[e.toString()].needsUpdate=!0}class cD{constructor(e=1){const t=rD(e),n=aD(t);this.renderable=[],this.curveArray=new Array(e),this.curveLengthArray=new Array(e),this.splineTexure=t,this.uniforms=n,this.frenetFrames=new Array(e),Ys=this}updateCurve(e,t,n=void 0){if(e>=this.curveArray.length)throw Error("Index out of range for Flow");const i=t.getLength();this.uniforms.spineLength.value=i,this.curveLengthArray[e]=i,this.curveArray[e]=t,oD(this.splineTexure,t,e,n,this.frenetFrames)}addFlowRenderer(e){let t=new Ns(this,e);return this.renderable.push(t),t}addSIFlowRenderer(e,t,n){let i=new uD(e,t,n);return this.renderable.push(i),i}addIFlowRenderer(e,t,n,i){let r=new hD(e,t,n,i);return this.renderable.push(r),r}addIIFlowRenderer(e,t,n,i){let r=new rv(e,t,n,i);return this.renderable.push(r),r}}class lD{constructor(e,t){this.cellCount=e,this.instancedMatrices=t,this.uniforms={flowData:{value:new Array(e*2).fill(0)},iMatrix:{value:new Array(t.length*16).fill(0)}};for(let n=0;n<t.length;n++)t[n].toArray(this.uniforms.iMatrix.value,n*16);this.offsets=new Array(e).fill(0)}renderables=[];addObject(e,t,n=void 0){const i=new e(this.cellCount,t,this.instancedMatrices,{...this.uniforms,...n});return this.renderables.push(i),i}writeChanges(e,t=void 0){this.uniforms.flowData.value[e*2+0]=Ys.curveLengthArray[t],this.uniforms.flowData.value[e*2+1]=this.offsets[e]}moveIndividualAlongCurve(e,t,n=void 0){this.offsets[e]+=t,this.writeChanges(e,n)}setIndividualAlongCurve(e,t,n=void 0){this.offsets[e]=t,this.writeChanges(e,n)}updatePerPlacingIndex=(e,t,n)=>{this.renderables.forEach(i=>i.updatePerPlacingIndex(e,t,n))};moveGeometryForward=(e,t,n)=>{this.setIndividualAlongCurve(e,t+n,n)}}class Ns{uniforms={spineTexture:{value:null},pathOffset:{type:"f",value:0},pathSegment:{type:"f",value:1},spineOffset:{type:"f",value:0},spineLength:{type:"f",value:400},flow:{type:"i",value:1},time:{type:"f",value:0},colors:{value:[.05,.2,.6,.1,.6,.3,.3,.3,.45,.7,.1,.1,.05,.05,.05]}};curveLengthArray;attributeNames;modifyShader(e,t,n=1){e.__ok||(e.__ok=!0,e.onBeforeCompile=i=>{if(i.__modified)return;i.__modified=!0,Object.assign(i.uniforms,t);const r=`
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
		float textureLayers = ${Gt*n}.;
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
//rowOffset += instanceMatrix[1][3] * ${Gt}.;
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
	#endif`);i.vertexShader=r})}constructor(e,t){this.uniforms.spineTexture=Ys.uniforms.spineTexture,this.uniforms.spineLength=Ys.uniforms.spineLength,this.uniforms.pathOffset=Ys.uniforms.pathOffset,this.uniforms.time=Ys.uniforms.time,this.curveLengthArray=Ys.curveLengthArray;let n=i=>{i.traverse(function(r){(r instanceof qt||r instanceof Yn)&&(r.material=r.material.clone(),this.modifyShader(r.material,this.uniforms,this.curveLengthArray.length))}.bind(this))};Array.isArray(e)?e.forEach(i=>{n(i)}):n(e),t!==void 0&&Object.assign(this.uniforms,t),this.object3D=e}moveAlongCurve(e){this.uniforms.pathOffset.value+=e}setAlongCurve(e){this.uniforms.pathOffset.value=e}}class uD extends Ns{modifyShader(e,t,n=1){e.__ok||(e.__ok=!0,e.onBeforeCompile=i=>{if(i.__modified)return;i.__modified=!0,Object.assign(i.uniforms,t);const r=`
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
		float textureLayers = ${Gt*n}.;
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
//rowOffset += instanceMatrix[1][3] * ${Gt}.;
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
				#endif`);i.vertexShader=r})}constructor(e,t,n){const i=new Yn(t,n,e);i.instanceMatrix.setUsage(Nl),i.frustumCulled=!1,super(i,void 0),console.log(this.uniforms),this.offsets=new Array(e).fill(0)}writeChanges(e,t=void 0){wc.elements[3]=this.curveLengthArray[t],wc.elements[7]=t,wc.elements[11]=this.offsets[e],this.object3D.setMatrixAt(e,wc),this.object3D.instanceMatrix.needsUpdate=!0}moveIndividualAlongCurve(e,t,n=void 0){this.offsets[e]+=t,this.writeChanges(e,n)}setIndividualAlongCurve(e,t,n=void 0){this.offsets[e]=t,this.writeChanges(e,n)}setCurve(e,t){if(isNaN(t))throw Error("curve index being set is Not a Number (NaN)");this.writeChanges(e,t)}}class hD extends Ns{matrices=void 0;cell_count=0;instane_count=0;modifyShader(e,t,n=1){e.__ok||(e.__ok=!0,e.onBeforeCompile=i=>{if(i.__modified)return;i.__modified=!0,Object.assign(i.uniforms,t);const r=`
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

				float textureLayers = ${Gt*n}.;
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
	
	`);i.vertexShader=r})}constructor(e,t,n,i=void 0){const r=n.length;let o=c=>{const l=new Yn(c.geometry.clone(),c.material.clone(),0);return l.name=c.name,l.material.vertexColors=!0,l.frustumCulled=!1,l.userData.per_cell_count=0,Ji(l.geometry,"instanceID",e*r,1),Ji(l.geometry,"flowID",e*r,1),Ji(l.geometry,"effectID",e*r,1),l},a;Array.isArray(t)?(a=[],t.forEach(c=>{a.push(o(c))})):a=o(t),super(a,i),this.matrices=n,this.cell_count=e,this.instane_count=r;for(let c=0;c<e;c++)this.clearInstanceIdsAt(c);if(i===void 0||i.flowData===void 0||i.iMatrix===void 0){this.uniforms.flowData={value:new Array(e*2).fill(0)},this.uniforms.iMatrix={value:new Array(r*16).fill(0)};for(let c=0;c<n.length;c++)n[c].toArray(this.uniforms.iMatrix.value,c*16)}else this.uniforms.flowData=i.flowData,this.uniforms.iMatrix=i.iMatrix;this.offsets=new Array(e).fill(0)}writeChanges(e,t=void 0){this.uniforms.flowData.value[e*2+0]=this.curveLengthArray[t],this.uniforms.flowData.value[e*2+1]=this.offsets[e]}moveIndividualAlongCurve(e,t,n=void 0){this.offsets[e]+=t,this.writeChanges(e,n)}setIndividualAlongCurve(e,t,n=void 0){this.offsets[e]=t,this.writeChanges(e,n)}setCurve(e,t){if(isNaN(t))throw Error("curve index being set is Not a Number (NaN)");this.writeChanges(e,t)}clearInstanceIdsAt=e=>{let t=n=>{n.count=0};Array.isArray(this.object3D)?this.object3D.forEach(n=>{t(n)}):t(this.object3D)};updateInstancesAt=()=>{for(let e=0;e<this.uniforms.activeEffectID.value.length;e++){const t=this.uniforms.activeEffectID.value[e].beat,n=this.uniforms.activeEffectID.value[e].id_on_beat,i=this.uniforms.activeEffectID.value[e].effect,r=this.uniforms.activeEffectID.value[e].color,o=this.object3D[i];this.cell_count/this.uniforms.barLoops.value,o.geometry.attributes.flowID.array[o.count]=t,o.geometry.attributes.flowID.needsUpdate=!0,o.geometry.attributes.instanceID.array[o.count]=n,o.geometry.attributes.instanceID.needsUpdate=!0,o.geometry.attributes.effectID.array[o.count]=r,o.geometry.attributes.effectID.needsUpdate=!0,o.count++}};updatePlacement=(e,t,n)=>{this.setIndividualAlongCurve(e,t+n,n)};updatePerPlacingIndex=(e,t,n)=>{this.clearInstanceIdsAt(e),this.updateInstancesAt(e)}}class dD extends Ns{matrices=void 0;cell_count=0;instane_count=0;modifyShader(e,t,n=1){e.__ok||(e.__ok=!0,e.onBeforeCompile=i=>{if(i.__modified)return;i.__modified=!0,Object.assign(i.uniforms,t);const r=`
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

				float textureLayers = ${Gt*n}.;
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
	
	`);i.vertexShader=r})}constructor(e,t,n,i=void 0){const r=n.length;let o=c=>{const l=new Yn(c.geometry.clone(),c.material.clone(),0);return l.name=c.name,l.material.vertexColors=!0,l.frustumCulled=!1,l.userData.per_cell_count=0,Ji(l.geometry,"instanceID",e*r,1),Ji(l.geometry,"flowID",e*r,1),Ji(l.geometry,"melodyInstrumentID",e*r,1),l},a;if(Array.isArray(t)?(a=[],t.forEach(c=>{a.push(o(c))})):a=o(t),super(a,i),this.matrices=n,this.cell_count=e,this.instane_count=r,this.fillInstanceData(e,r),this.uniforms.melodyInstrumentID!==void 0&&this.uniforms.melodyInstrumentID.value.addOnModifyEventListener(c=>{this.updateInstanceAt(c)}),i===void 0||i.flowData===void 0||i.iMatrix===void 0){this.uniforms.flowData={value:new Array(e*2).fill(0)},this.uniforms.iMatrix={value:new Array(r*16).fill(0)};for(let c=0;c<n.length;c++)n[c].toArray(this.uniforms.iMatrix.value,c*16)}else this.uniforms.flowData=i.flowData,this.uniforms.iMatrix=i.iMatrix;this.offsets=new Array(e).fill(0)}writeChanges(e,t=void 0){this.uniforms.flowData.value[e*2+0]=this.curveLengthArray[t],this.uniforms.flowData.value[e*2+1]=this.offsets[e]}moveIndividualAlongCurve(e,t,n=void 0){this.offsets[e]+=t,this.writeChanges(e,n)}setIndividualAlongCurve(e,t,n=void 0){this.offsets[e]=t,this.writeChanges(e,n)}setCurve(e,t){if(isNaN(t))throw Error("curve index being set is Not a Number (NaN)");this.writeChanges(e,t)}fillInstanceData=(e,t)=>{const n=this.object3D;{n.count=0;for(let i=0;i<e;i++)for(let r=0;r<t;r++){n.geometry.attributes.flowID.array[n.count]=i,n.geometry.attributes.flowID.needsUpdate=!0,n.geometry.attributes.instanceID.array[n.count]=r,n.geometry.attributes.instanceID.needsUpdate=!0;let o=i*this.instane_count+r;this.uniforms.melodyInstrumentID!==void 0&&(o%=this.uniforms.melodyInstrumentID.value.length,n.geometry.attributes.melodyInstrumentID.array[n.count]=this.uniforms.melodyInstrumentID.value[o]),n.geometry.attributes.melodyInstrumentID.needsUpdate=!0,n.count++}}};updateInstanceAt=e=>{const t=this.object3D;this.uniforms.melodyInstrumentID!==void 0&&(t.geometry.attributes.melodyInstrumentID.array[e]=this.uniforms.melodyInstrumentID.value[e]),t.geometry.attributes.melodyInstrumentID.needsUpdate=!0};updatePlacement=(e,t,n)=>{this.setIndividualAlongCurve(e,t+n,n)};updatePerPlacingIndex=(e,t,n)=>{}}class fD extends Ns{matrices=void 0;cell_count=0;instane_count=0;modifyShader(e,t,n=1){e.__ok||(e.__ok=!0,e.onBeforeCompile=i=>{if(i.__modified)return;i.__modified=!0,Object.assign(i.uniforms,t);const r=`
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

				float textureLayers = ${Gt*n}.;
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
	
	`);i.vertexShader=r})}constructor(e,t,n,i=void 0){const r=n.length;let o=c=>{const l=new Yn(c.geometry.clone(),c.material.clone(),0);return l.name=c.name,l.material.vertexColors=!0,l.frustumCulled=!1,l.userData.per_cell_count=0,Ji(l.geometry,"instanceID",e*r,1),Ji(l.geometry,"flowID",e*r,1),Ji(l.geometry,"melodyInstrumentID",e*r,1),l},a;if(Array.isArray(t)?(a=[],t.forEach(c=>{a.push(o(c))})):a=o(t),super(a,i),this.matrices=n,this.cell_count=e,this.instane_count=r,i===void 0||i.flowData===void 0||i.iMatrix===void 0){this.uniforms.flowData={value:new Array(e*2).fill(0)},this.uniforms.iMatrix={value:new Array(r*16).fill(0)};for(let c=0;c<n.length;c++)n[c].toArray(this.uniforms.iMatrix.value,c*16)}else this.uniforms.flowData=i.flowData,this.uniforms.iMatrix=i.iMatrix;this.offsets=new Array(e).fill(0)}writeChanges(e,t=void 0){this.uniforms.flowData.value[e*2+0]=this.curveLengthArray[t],this.uniforms.flowData.value[e*2+1]=this.offsets[e]}moveIndividualAlongCurve(e,t,n=void 0){this.offsets[e]+=t,this.writeChanges(e,n)}setIndividualAlongCurve(e,t,n=void 0){this.offsets[e]=t,this.writeChanges(e,n)}setCurve(e,t){if(isNaN(t))throw Error("curve index being set is Not a Number (NaN)");this.writeChanges(e,t)}clearInstanceIdsAt=()=>{this.object3D.count=0};updateInstancesAt=()=>{{const e=this.object3D;for(let t=0;t<this.uniforms.melody.value.length;t++){const n=this.uniforms.melody.value[t];for(let i=0;i<n.instances.length;i++){const r=n.instances[i].id_on_beat;e.geometry.attributes.flowID.array[e.count]=t,e.geometry.attributes.flowID.needsUpdate=!0,e.geometry.attributes.instanceID.array[e.count]=r,e.geometry.attributes.instanceID.needsUpdate=!0;let o=t*this.instane_count+r;this.uniforms.melodyInstrumentID!==void 0&&(o%=this.uniforms.melodyInstrumentID.value.length,e.geometry.attributes.melodyInstrumentID.array[e.count]=this.uniforms.melodyInstrumentID.value[o]),e.geometry.attributes.melodyInstrumentID.needsUpdate=!0,e.count++}}}};updatePlacement=(e,t,n)=>{this.setIndividualAlongCurve(e,t+n,n)};updatePerPlacingIndex=(e,t,n)=>{this.clearInstanceIdsAt(),this.updateInstancesAt()}}class rv extends Ns{modifyShader(e,t,n=1){e.__ok||(e.__ok=!0,e.onBeforeCompile=i=>{if(i.__modified)return;i.__modified=!0,Object.assign(i.uniforms,t);const r=`

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
			float textureLayers = ${Gt*n}.;
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
	
	#endif`);i.vertexShader=r})}constructor(e,t,n,i,r=void 0){let o=c=>{const l=new Yn(c.geometry.clone(),c.material.clone(),i);return l.name=c.name,l.material.vertexColors=!0,l.frustumCulled=!1,l.count=0,l},a;Array.isArray(t)?(a=[],t.forEach(c=>{a.push(o(c))})):a=o(t),super(a,r),this.cell_count=e;for(let c=0;c<e;c++)this.clearInstanceIdsAt(c)}clearInstanceIdsAt=e=>{let t=(n,i)=>{n.userData.indexDictionary===void 0&&(n.userData.indexDictionary=new Array(this.cell_count)),n.userData.indexDictionary[i]===void 0&&(n.userData.indexDictionary[i]={id:[]}),n.count-=n.userData.indexDictionary[i].id.length,n.userData.indexDictionary[i].id=[]};Array.isArray(this.object3D)?this.object3D.forEach(n=>{t(n,e)}):t(this.object3D,e)};updateInstancesAt=(e,t)=>{let n=i=>{i.userData.indexDictionary===void 0&&(i.userData.indexDictionary=new Array(this.cell_count)),i.userData.indexDictionary[e]===void 0&&(i.userData.indexDictionary[e]={id:[]}),i.userData.indexDictionary[e].id.push(t.clone()),i.count++};Array.isArray(this.object3D)?this.object3D.forEach(i=>{n(i)}):n(this.object3D)};fillInstanceData=()=>{let e=t=>{let n=0;for(let i=0;i<t.userData.indexDictionary.length;i++){const r=t.userData.indexDictionary[i].id;for(let o=0;o<r.length;o++)t.setMatrixAt(n,r[o]),n++}t.instanceMatrix.needsUpdate=!0};Array.isArray(this.object3D)?this.object3D.forEach(t=>{e(t)}):e(this.object3D)};updatePerPlacingIndex=e=>{this.clearInstanceIdsAt(e),this.updateInstancesAt(e),this.fillInstanceData()}}class pD extends Ns{modifyShader(e,t,n=1){e.__ok||(e.__ok=!0,e.onBeforeCompile=i=>{if(i.__modified)return;i.__modified=!0,Object.assign(i.uniforms,t);const r=`

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
			float textureLayers = ${Gt*n}.;
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
	
	`);i.vertexShader=r})}constructor(e,t,n,i,r=void 0){let o=c=>{const l=new Yn(c.geometry.clone(),c.material.clone(),i);return l.name=c.name,l.material.vertexColors=!0,l.frustumCulled=!1,l.count=0,l},a;Array.isArray(t)?(a=[],t.forEach(c=>{a.push(o(c))})):a=o(t),super(a,r),this.cell_count=e;for(let c=0;c<e;c++)this.clearInstanceIdsAt(c)}clearInstanceIdsAt=e=>{let t=(n,i)=>{n.userData.indexDictionary===void 0&&(n.userData.indexDictionary=new Array(this.cell_count)),n.userData.indexDictionary[i]===void 0&&(n.userData.indexDictionary[i]={id:[]}),n.count-=n.userData.indexDictionary[i].id.length,n.userData.indexDictionary[i].id=[]};Array.isArray(this.object3D)?this.object3D.forEach(n=>{t(n,e)}):t(this.object3D,e)};updateInstancesAt=(e,t)=>{let n=i=>{i.userData.indexDictionary===void 0&&(i.userData.indexDictionary=new Array(this.cell_count)),i.userData.indexDictionary[e]===void 0&&(i.userData.indexDictionary[e]={id:[]}),i.userData.indexDictionary[e].id.push(t.clone()),i.count++};Array.isArray(this.object3D)?this.object3D.forEach(i=>{n(i)}):n(this.object3D)};fillInstanceData=()=>{let e=t=>{let n=0;for(let i=0;i<t.userData.indexDictionary.length;i++){const r=t.userData.indexDictionary[i].id;for(let o=0;o<r.length;o++)t.setMatrixAt(n,r[o]),n++}t.instanceMatrix.needsUpdate=!0};Array.isArray(this.object3D)?this.object3D.forEach(t=>{e(t)}):e(this.object3D)};updatePerPlacingIndex=e=>{this.clearInstanceIdsAt(e),this.updateInstancesAt(e),this.fillInstanceData()}}class mD extends Ns{modifyShader(e,t,n=1){e.__ok||(e.__ok=!0,e.onBeforeCompile=i=>{if(i.__modified)return;i.__modified=!0,Object.assign(i.uniforms,t);const r={bomb_colors:{value:[1,1,1,1,1,0,1,0,0]}};Object.assign(i.uniforms,r);const o=`
			
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
			float textureLayers = ${Gt*n}.;
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
	
	`);i.vertexShader=o})}constructor(e,t,n,i,r=void 0){let o=c=>{const l=new Yn(c.geometry.clone(),c.material.clone(),i);return l.name=c.name,l.material.vertexColors=!0,l.frustumCulled=!1,l.count=0,l},a;Array.isArray(t)?(a=[],t.forEach(c=>{a.push(o(c))})):a=o(t),super(a,r),this.cell_count=e;for(let c=0;c<e;c++)this.clearInstanceIdsAt(c)}clearInstanceIdsAt=e=>{let t=(n,i)=>{n.userData.indexDictionary===void 0&&(n.userData.indexDictionary=new Array(this.cell_count)),n.userData.indexDictionary[i]===void 0&&(n.userData.indexDictionary[i]={id:[]}),n.count-=n.userData.indexDictionary[i].id.length,n.userData.indexDictionary[i].id=[]};Array.isArray(this.object3D)?this.object3D.forEach(n=>{t(n,e)}):t(this.object3D,e)};updateInstancesAt=(e,t)=>{let n=i=>{i.userData.indexDictionary===void 0&&(i.userData.indexDictionary=new Array(this.cell_count)),i.userData.indexDictionary[e]===void 0&&(i.userData.indexDictionary[e]={id:[]}),i.userData.indexDictionary[e].id.push(t.clone()),i.count++};Array.isArray(this.object3D)?this.object3D.forEach(i=>{n(i)}):n(this.object3D)};fillInstanceData=()=>{let e=t=>{let n=0;for(let i=0;i<t.userData.indexDictionary.length;i++){const r=t.userData.indexDictionary[i].id;for(let o=0;o<r.length;o++)t.setMatrixAt(n,r[o]),n++}t.instanceMatrix.needsUpdate=!0};Array.isArray(this.object3D)?this.object3D.forEach(t=>{e(t)}):e(this.object3D)};updatePerPlacingIndex=e=>{this.clearInstanceIdsAt(e),this.updateInstancesAt(e),this.fillInstanceData()}}const qu=(s,e,t=1)=>{s.__ok||(s.__ok=!0,s.vertexColors=!1,s.onBeforeCompile=n=>{if(n.__modified)return;n.__modified=!0,Object.assign(n.uniforms,e);const i=`

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
			float textureLayers = ${Gt*t}.;
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
	
	#endif`);n.vertexShader=i})},zi=new Pe,Rc=new Ht,ju=new P(1,1,1);class gD{u;ccc;pos;normal;tangent;biNormal;geometryNeedsUpdate=!0;#e;#t;#n;#h;#l;#u;#s;#i;#o;#a;#r;curveLength;#c;constructor(e=3,t=7,n=8){this.pos=new P,this.normal=new P,this.tangent=new P,this.biNormal=new P,this.u=0,this.#o=this.#a=0,this.#e=new Array(e),this.curveLength=t,this.#r=0,this.#s=n,this.#i=0,this.#c=7;const i=this.#c;{let r=new P(0,0,0),o=new P(tt.randFloatSpread(i),tt.randFloatSpread(i),-t/2),a=new P(tt.randFloatSpread(i),tt.randFloatSpread(i),-t/2),c=new P(tt.randFloatSpread(i),tt.randFloatSpread(i),-t),l=new P(0,0,0);for(let u=0;u<e;u++){o.copy(l.clone()),a.set(tt.randFloatSpread(i),tt.randFloatSpread(i),-t/2),c.set(tt.randFloatSpread(i),tt.randFloatSpread(i),-t);const h=new Up(r.clone(),o.add(r).clone(),a.add(r).clone(),c.add(r).clone());l.subVectors(c,a),r.copy(c),this.#e[u]=h}}this.#t=new cD(this.#e.length),this.#e.forEach(function(r,o){this.#t.updateCurve(o,r)}.bind(this))}resetCurves(e){const t=this.#e.length,n=this.curveLength,i=this.#s;this.u=0,this.#o=this.#a=0,this.#r=0,this.#i=0,this.#c=7;const r=this.#c;{let o=new P(0,0,0),a=new P(tt.randFloatSpread(r),tt.randFloatSpread(r),-n/2),c=new P(tt.randFloatSpread(r),tt.randFloatSpread(r),-n/2),l=new P(tt.randFloatSpread(r),tt.randFloatSpread(r),-n),u=new P(0,0,0);for(let h=0;h<t;h++){a.copy(u.clone()),c.set(tt.randFloatSpread(r),tt.randFloatSpread(r),-n/2),l.set(tt.randFloatSpread(r),tt.randFloatSpread(r),-n);const d=new Up(o.clone(),a.add(o).clone(),c.add(o).clone(),l.add(o).clone());u.subVectors(l,c),o.copy(l),this.#e[h]=d}}this.#e.forEach(function(o,a){this.#t.updateCurve(a,o)}.bind(this));for(let o=0;o<i;o++){const{curveIndex:a,u:c}=this.getCurveIndexAndUAt(.5+o);e.geometry.level.moveGeometryForward(o,c,a)}this.geometryNeedsUpdate=!0,this.updateGeometry(e),e.geometry.interactives.forEach(o=>{for(let a=0;a<t;a++)o.clearInstanceIdsAt(a)})}updateCurve(e,t){let n=i=>{const r=this.curveLength,o=this.#c,a=i-1<0?this.#e.length-1:i-1;this.#o-=this.#e[i].getLength();const c=this.#e[a].v2,l=this.#e[a].v3;this.#e[i].v0=l.clone();const u=new P;u.subVectors(l,c).add(l),this.#e[i].v1=u,this.#e[i].v2=new P(tt.randFloatSpread(o),tt.randFloatSpread(o),-r/2).add(l),this.#e[i].v3=new P(tt.randFloatSpread(o),tt.randFloatSpread(o),-r).add(l),this.#e[i].updateArcLengths(),this.#t.updateCurve(i,this.#e[i],a)};if(e>.3&&this.#r!==t){n(this.#r,this.#e.length);const i=this.#r;return this.#r=t,i}else return-1}#d=new Ht;placeInteractive=(e,t)=>{e.geometry.interactives!==void 0&&(e.win===!0||e.editMode===!0||e.geometry.interactives.forEach(n=>{n.clearInstanceIdsAt(t);const i=this.#t.frenetFrames[t];for(let r=0;r<3;r++){let o=Math.random();const a=Math.floor(o*i.points.length);let c=Math.random()*.5-.25,l=Math.random()*.5-.25;c*=2,l*=2;let u=i.points[a].clone();const h=i.normals[a].clone(),d=i.binormals[a].clone();u.add(h.multiplyScalar(c)).add(d.multiplyScalar(l));let f=1;if(n.object3D.name.includes("ELECTRICITY")||n.object3D.name.includes("TO_SELF")?(zi.compose(u,Rc.identity(),ju.set(f,f,f)),zi.lookAt(u,u.clone().add(i.tangents[a]),h.clone().applyAxisAngle(i.tangents[a],Math.random()*3.14*2))):(Rc.random(),zi.compose(u,Rc,ju.set(f,f,f))),n.object3D.name.includes("TO1-Knob")&&(zi.elements[3]=Math.floor(Math.random()*4)),n.object3D.name.includes("TO_SELF")){let m=0;for(;m<4;){if(e.AudioSystem.availableMelody[m].notes.length!==0){zi.elements[3]=m;break}m++}if(m===4)return}zi.elements[7]=2,n.updateInstancesAt(t,zi)}n.fillInstanceData()}))};updateGeometry=e=>{if(this.#t&&e.geometry.level!==void 0){if(this.#t.uniforms.time.value+=e.time.delta,Math.floor(this.#a-1)>this.#i){const t=this.#i%this.#s,{curveIndex:n,u:i}=this.getCurveIndexAndUAt(this.#s+.5+this.#i-(this.#a-this.#o));e.geometry.level.moveGeometryForward(t,i,n),this.#i++}this.geometryNeedsUpdate===!0&&(this.geometryNeedsUpdate=!1,e.geometry.level.updatePerPlacingIndex())}return e};curveSystem=e=>{this.#o+=e.GlobalParameters.speed*e.time.delta,this.#a+=e.GlobalParameters.speed*e.time.delta;const{curveIndex:t,u:n}=this.getCurveIndexAndUAt(this.#o);this.u=n,this.ccc=t;const i=this.updateCurve(n,t);i>=0&&this.placeInteractive(e,i);const r=this.#t.frenetFrames[t];return this.pos=r.points[Math.floor(n*r.points.length)],this.tangent=r.tangents[Math.floor(n*r.tangents.length)],this.normal=r.normals[Math.floor(n*r.normals.length)],this.biNormal=r.binormals[Math.floor(n*r.binormals.length)],e};getCurrentNormalizedCell(e=0){return(this.#i+e)%this.#s}getCurrentCell(e=0){return this.#i+e}getTBNAt(e,t){const n=Math.floor(e),i=e-n,r=this.#t.frenetFrames[n],o=Math.floor(i*r.points.length);t.set(r.tangents[o].x,r.normals[o].x,r.binormals[o].x,r.points[o].x,r.tangents[o].y,r.normals[o].y,r.binormals[o].y,r.points[o].y,r.tangents[o].z,r.normals[o].z,r.binormals[o].z,r.points[o].z,0,0,0,1)}getCurveIndexAndUAt(e){let t=0,n=0;const i=this.#e;for(let r=0;r<i.length;r++){const o=tt.euclideanModulo(r+this.#r,i.length);if(t+=i[o].getLength(),t>e)return{curveIndex:o,u:(e-n)/i[o].getLength()};n=t}return{curveIndex:0,u:0}}}const _i=new P,Yu=new P,$u=new P,Ku=new P,Zu=new Ht;let Cm=0;function _D(s,e,t,n){_i.subVectors(t,e),$u.subVectors(s,e);const i=_i.dot(_i),r=$u.dot(_i),o=$u.multiplyScalar(i).sub(_i.multiplyScalar(r)).length()-n*i,a=Math.abs(r-i*.5)-i*.5,c=o*o,l=a*a*i,u=Math.max(o,a)<0?-Math.min(c,l):(o>0?c:0)+(a>0?l:0);return Math.sign(u)*Math.sqrt(Math.abs(u))/i}const vD=s=>{let e=(t,n)=>{switch(t){default:break;case"TO_SELF":s.AudioSystem.addInstrumentOnRandomAvailablePosition(n),s.progressMustUpdate=!0,s.Curve.geometryNeedsUpdate=!0;break;case"ELECTRICITY":s.hand.userData.removeFinger=!0;break;case"BOMB":s.hand.userData.removeFinger=!0;break;case"TO1-Knob-C":s.AudioSystem.addEffectOnRandomAvailablePosition(0,n),s.Curve.geometryNeedsUpdate=!0;break;case"TO1-Knob-T":s.AudioSystem.addEffectOnRandomAvailablePosition(1,n),s.Curve.geometryNeedsUpdate=!0;break;case"TO1-Knob-Ic":s.AudioSystem.addEffectOnRandomAvailablePosition(2,n),s.Curve.geometryNeedsUpdate=!0;break}};return s.geometry.interactives.forEach(t=>{const n=t.object3D.name;t.object3D.userData.indexDictionary[s.Curve.ccc].id.forEach(i=>{let r=100;n==="ELECTRICITY"?(Zu.setFromRotationMatrix(i),_i.setFromMatrixPosition(i),Yu.set(0,1,0).applyQuaternion(Zu),Ku.set(0,-1,0).applyQuaternion(Zu),Yu.add(_i),Ku.add(_i),r=_D(s.hand.position,Yu,Ku,.1),r<0?r=0:r=100):(_i.setFromMatrixPosition(i),r=_i.distanceTo(s.hand.position)),r<.25&&i.elements[7]!==-1&&(e(n,i.elements[3]),i.elements[7]=-1,n==="ELECTRICITY"&&(Cm===s.Curve.ccc||(Cm=s.Curve.ccc)))})}),s},yD={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Wa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const xD=new Co(-1,1,1,-1,0,1),Wd=new jn;Wd.setAttribute("position",new xn([-1,3,0,-1,-1,0,3,-1,0],3));Wd.setAttribute("uv",new xn([0,2,0,0,2,0],2));class ov{constructor(e){this._mesh=new qt(Wd,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,xD)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class av extends Wa{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof yi?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Wh.clone(e.uniforms),this.material=new yi({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ov(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Rm extends Wa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class SD extends Wa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class MD{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new _e);this._width=n.width,this._height=n.height,t=new bs(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:lo}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new av(yD),this.copyPass.material.blending=Ki,this.clock=new Og}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Rm!==void 0&&(o instanceof Rm?n=!0:o instanceof SD&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new _e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class bD extends Wa{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Me}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const TD={uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		`+Ve.tonemapping_pars_fragment+Ve.colorspace_pars_fragment+`

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

		}`};class ED extends Wa{constructor(){super();const e=TD;this.uniforms=Wh.clone(e.uniforms),this.material=new Yb({uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ov(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Je.getTransfer(this._outputColorSpace)===ht&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===qm?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===jm?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ym?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===$m&&(this.material.defines.ACES_FILMIC_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const AD={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};new P;const Qu=new Pe,Ic=new P(0,0,1),Im=new P(0,0,0),tr=new P,wD=(s,e,t)=>{Im.set(0,0,0);let n=s.geometry.level.instancedMatrices[t].clone();Ic.set(0,1,0);let i=Ic.applyMatrix4(n);tr.setFromMatrixPosition(n),tr.add(i.multiplyScalar(-.08)),n.setPosition(tr);const r=s.geometry.level.offsets[e];s.Curve.getTBNAt(r,Qu),Ic.set(0,0,1),i=Ic.applyMatrix4(n);const o=Im.applyMatrix4(n);return o.applyMatrix4(Qu),i.applyMatrix4(Qu),i.sub(o),i.normalize(),{origin:o,direction:i}},CD=(s,e,t,n)=>{tr.subVectors(s,t);const i=e.dot(e),r=2*tr.dot(e),o=tr.dot(tr)-n*n,a=r*r-4*i*o;return a<0?-1:(-r-Math.sqrt(a))/(2*i)},RD=s=>{let e=(i,r)=>{const o=i.id_on_beat;i.instrument,i.effect;const a=wD(s,r%s.GlobalParameters.barSize,o),c=CD(a.origin,a.direction,s.camera.position,.2);c!==-1&&c<1&&(s.AudioSystem.playInstrumentAt(i,c),i.played_at=r)};const t=s.Curve.getCurrentCell(1),n=t%s.GlobalParameters.barSize;return s.AudioSystem.melody[n].instances.forEach(i=>{i.played_at!==t&&e(i,t)}),s};new P;new Pe;new P;const Dc=[],ID=new P,DD=new Me,PD=new Me;let zs=-1;const ND=s=>{if(s.paused===!1&&zs<0&&s.hand.userData.removeFinger===!0&&s.fingersAlive>0){s.hand.userData.removeFinger=!1,s.AudioSystem.playEmptyInstrument(),s.hand.children[0].material.color.set(1,0,0),zs=0,s.hand.userData.fingers_bones[s.fingersAlive-1].scale.set(0,0,0);const t=s.hand.userData.fingers[s.fingersAlive-1];t.bindMode="detached",Dc.push(t),t.visible=!0,t.userData.fallDirection=ID.set(Math.random()*2-1,Math.random()*2-1,-Math.random()*.5).normalize().clone().multiplyScalar(20),s.fingersAlive--}return zs>=0&&(s.hand.children[0].material.color.lerpColors(DD.set(1,0,0),PD.copy(s.hand.children[0].material.userData.default_color),Math.sin(zs*20)*.5+.5),zs+=s.time.delta,zs>s.GlobalParameters.safeTime&&(zs=-1,s.hand.userData.removeFinger=!1,s.hand.children[0].material.color.copy(s.hand.children[0].material.userData.default_color))),Dc.length>0&&Dc.forEach((e,t)=>{e.rotateX(.1),e.rotateZ(.1),e.position.add(e.userData.fallDirection.clone().multiplyScalar(s.time.delta)),e.scale.subScalar(s.time.delta/2),e.scale.x<.01&&(e.visible=!1,s.scene.remove(e),Dc.splice(t,1))}),s},LD=s=>(s.fingersAlive===0&&s.paused===!1&&(s.paused=!0,s.showEndScreen(!0)),s),OD=s=>{if(s.progressMustUpdate===!0){let e=document.getElementById("progressbar_position");e.style.width=Math.floor(s.AudioSystem.getProgress()*100)+"%",s.progressMustUpdate=!1,s.AudioSystem.getProgress()>=1&&(s.win=!0,s.geometry.interactives.forEach(t=>{for(let n=0;n<s.Curve.curveLength;n++)t.clearInstanceIdsAt(n)}))}return s};function UD(s,e,t){const n=[...s];var i=t>n.length?t%n.length:t;return n.concat(n.splice(0,e>0?n.length-i:i))}class FD{timer=0;global_timer=0;visual_step=.1;done=!1;initialized=!1;constructor(e){this.duration=e}initialize(e){if(this.initialized!==!0){this.timer=this.global_timer=0,this.done=!1,e.GlobalParameters.rotationSpeed.value=.1,this.colors_array=[];for(let t=0;t<e.AudioSystem.melodyInstrumentID.length;t++)this.colors_array.push(t/40/2%4);this.ignored_positions_array=[];for(let t=0;t<e.AudioSystem.melodyInstrumentID.length;t++)e.AudioSystem.melodyInstrumentID[t]===4?e.AudioSystem.melodyInstrumentID.eventOnModify(t,this.colors_array[t]):this.ignored_positions_array.push(t);this.initialized=!0}}cleanup(e){e.GlobalParameters.triAmplitude.value=1,e.GlobalParameters.rotationSpeed.value=0}play(e){if(this.timer>this.visual_step){const t=UD(this.colors_array,1,40);for(let n=0;n<e.AudioSystem.melodyInstrumentID.length;n++)this.colors_array[n]=t[n],this.ignored_positions_array.indexOf(n)===-1&&e.AudioSystem.melodyInstrumentID.eventOnModify(n,this.colors_array[n]);this.timer=0}this.timer+=e.time.delta,this.global_timer+=e.time.delta,this.global_timer>this.duration&&(this.done=!0,this.initialized=!1,this.global_timer=0),this.global_timer>5&&(e.GlobalParameters.triAmplitude.value=(this.global_timer-5)/2.5*((this.global_timer-5)/2.5),e.GlobalParameters.rotationSpeed.value=Math.sqrt(this.global_timer-5)/2)}}let Pc=new FD(15.5);const kD=s=>(s.win===!0&&!s.paused&&(Pc.initialized||Pc.initialize(s),Pc.play(s),Pc.done&&(s.win=!1,s.paused=!0,s.showWinScreen(!0))),s);class BD{world;#e;#t;#n=new rr;#h=!1;constructor(e){this.world=OE(),this.world.songEditingUnlocked=!1,this.world.editMode=!1,this.world.paused=!0,this.world.progressMustUpdate=!1,this.world.win=!1,this.world.howToPlay=!1,this.world.GlobalParameters={speed:2.5,curveCount:3,curveLength:8,barSize:8,loops:1,safeTime:2,rotationSpeed:{value:0},triAmplitude:{value:1}},this.world.Input=new BE(this.world.renderer.domElement),this.world.Curve=new gD(this.world.GlobalParameters.curveCount,this.world.GlobalParameters.curveLength,this.world.GlobalParameters.barSize*this.world.GlobalParameters.loops),this.world.AudioSystem=new KI(this.world.GlobalParameters.barSize),e!==void 0&&(this.#s(e),this.world.scene.add(this.#n)),this.#l(),this.#u(),this.#e=NE(ZI,this.world.Curve.curveSystem,this.world.Curve.updateGeometry,tD,iD,sD,vD,ND,LD,OD,kD,RD,QI)}#l(){const e=Qp(this.world);em(this.world.camera,e),xc(this.world,vo,e),xc(this.world,$g,e),this.world.objects.set(this.world.camera.eid,this.world.camera),this.world.camera.userData.speed=this.world.GlobalParameters.speed,this.world.camera.userData.tbnVelocity=new P(0,0,-1),this.world.camera.userData.offset=new P(0,0,0);const t=new qt(new Kh(1e-4,32,32),new Hn({color:65280}));this.world.scene.add(new td(16777215,.05)),this.world.scene.add(t);let n=new Lg(16777215,3);n.position.set(0,0,.5),n.angle=3.14/4,n.decay=2,n.distance=30,n.penumbra=0,n.target=this.world.camera,n.castShadow=!1,this.world.camera.add(n),this.world.scene.add(this.world.camera),this.world.composer=new MD(this.world.renderer);const i=new bD(this.world.scene,this.world.camera);this.world.composer.addPass(i);const r=new av(AD);r.uniforms.time={value:0},this.world.composer.addPass(r);const o=new ED;o.material.defines.ACES_FILMIC_TONE_MAPPING=!0,this.world.composer.addPass(o)}update(){this.world.Input.update(),this.world.composer.passes[1].uniforms.time.value=this.world.time.elapsedTime,this.#e(this.world)}#u(){}#s(e){new Fg().setPath("/models/");let t,n=[],i,r,o,a;e.traverse(function(D){D.name.includes("TO_SELF")?t=D:D.name.includes("TO1")||(D.name.includes("VISUAL_QUAD")?i=D:D.name.includes("HAND")?r=D:D.name.includes("ELECTRICITY")?o=D:D.name.includes("BOMB")&&(a=D)),D.name.includes("knobs")&&(D.updateMatrixWorld(),n.push(D.matrixWorld))});const c=this.world.GlobalParameters.loops*this.world.GlobalParameters.barSize;this.world.geometry={},this.world.geometry.level=[],this.world.geometry.level=new lD(c,n);const l=this.world.geometry.level.addObject(dD,t,{melodyInstrumentID:{value:this.world.AudioSystem.melodyInstrumentID},rotationSpeed:this.world.GlobalParameters.rotationSpeed,triAmplitude:this.world.GlobalParameters.triAmplitude});this.#n.add(l.object3D),t.material.emissiveIntensity=.5,t.material.emissiveMap=t.material.map,t.material.emissive=t.material.color;const u=this.world.geometry.level.addObject(fD,i,{melodyInstrumentID:{value:this.world.AudioSystem.melodyInstrumentID},melody:{value:this.world.AudioSystem.melody},rotationSpeed:this.world.GlobalParameters.rotationSpeed});u.object3D.position.set(0,-.2,-.08),u.object3D.scale.set(1.25,1.25,1.25),this.#n.add(u.object3D);for(let D=0;D<c;D++){const{curveIndex:F,u:B}=this.world.Curve.getCurveIndexAndUAt(.5+D);this.world.geometry.level.moveGeometryForward(D,B,F)}this.world.geometry.interactives=[];const h=new rv(this.world.GlobalParameters.curveCount,t,t.material,400,qu);this.world.geometry.interactives.push(h),this.#n.add(h.object3D);const d=new pD(this.world.GlobalParameters.curveCount,o,o.material,400,qu);this.world.geometry.interactives.push(d),this.#n.add(d.object3D);const f=new mD(this.world.GlobalParameters.curveCount,a,a.material,400,qu);this.world.geometry.interactives.push(f),this.#n.add(f.object3D);const m=r.animations[0],_=[];m.tracks.forEach((D,F)=>{D.name.includes("scale")&&_.push(F)});for(let D=_.length;D>0;D--)m.tracks.splice(_[D-1],1);const g=m.tracks[0].times.length/m.duration;let p=Zn.subclip(m,"IDLE",0,1,g),x=Zn.subclip(m,"LEFT",2,3,g);const v=Zn.subclip(m,"RIGHT",4,5,g),M=Zn.subclip(m,"UP",6,7,g),y=Zn.subclip(m,"DOWN",8,9,g),b=Zn.subclip(m,"MOVING",10,34,g);Zn.makeClipAdditive(p,0,b,g),Zn.makeClipAdditive(x,0,b,g),Zn.makeClipAdditive(v,0,b,g),Zn.makeClipAdditive(M,0,b,g),Zn.makeClipAdditive(y,0,b,g),r.position.set(0,-0,-.2),r.rotation.set(0,0,0),r.scale.set(.01,.01,.01),r.userData.fingers_bones=[r.getObjectByName("middle_01_l"),r.getObjectByName("thumb_02_l"),r.getObjectByName("index_01_l"),r.getObjectByName("ring_01_l"),r.getObjectByName("pinky_01_l")],r.userData.fingers=[r.getObjectByName("heroBodymiddle"),r.getObjectByName("heroBodythumb"),r.getObjectByName("heroBodyindex"),r.getObjectByName("heroBodyring"),r.getObjectByName("heroBodypinky")],r.userData.storedFingerData=[],r.userData.fingers.forEach(D=>{r.userData.storedFingerData.push({position:D.position.clone(),rotation:D.rotation.clone(),scale:D.scale.clone()})}),this.world.fingersAlive=r.userData.fingers.length,r.userData.fingers.forEach(D=>{D.visible=!1}),r.userData.removeFinger=!1,this.world.mixer=new bT(r),this.world.hand=r;const E=Qp(this.world);em(r,E),xc(this.world,vo,E),xc(this.world,Kg,E),this.world.objects.set(r.eid,r);const T=this.world.mixer.clipAction(p),S=this.world.mixer.clipAction(x),A=this.world.mixer.clipAction(v),N=this.world.mixer.clipAction(y),U=this.world.mixer.clipAction(M),z=this.world.mixer.clipAction(b);z.loop=sg;function C(D,F){D.enabled=!0,D.setEffectiveTimeScale(1),D.setEffectiveWeight(F)}this.world.hand_actions=[T,S,A,N,U,z],this.world.hand_actions.forEach(D=>{C(D,0),D.play()}),C(z,1),this.#n.add(r)}resetGameState(){this.world.win=!1,this.world.GlobalParameters.rotationSpeed.value=0,this.world.GlobalParameters.triAmplitude.value=1,this.world.hand.userData.fingers.forEach((e,t)=>{e.position.copy(this.world.hand.userData.storedFingerData[t].position),e.rotation.copy(this.world.hand.userData.storedFingerData[t].rotation),e.scale.copy(this.world.hand.userData.storedFingerData[t].scale),e.visible=!1}),this.world.hand.userData.fingers_bones.forEach(e=>{e.scale.set(1,1,1)}),this.world.hand.userData.removeFinger=!1,this.world.fingersAlive=5,this.world.AudioSystem.resetMelody(),this.world.Curve.resetCurves(this.world),this.world.progressMustUpdate=!0,this.world.camera.position.set(0,0,0)}}const Dm={type:"start"},VD={type:"end"};class cv extends ss{constructor(e){super(),new _e(0,1),new _e(0,-1),new _e(1,0),new _e(-1,0),this.domElement=e,this.domElement.style.touchAction="none";const t=this;this.current_input=Zg,this.touches={ONE:Wc.MOVE,TWO:Wc.DOLLY_PAN};const n=[],i={},r={NONE:-1,MOVE:0};let o=r.NONE,a=!1,c=window.innerWidth/2,l=window.innerHeight/2,u=window.innerWidth/2,h=window.innerHeight/2,d=0,f=0;this.update=function(C){this.current_input.diffX=d/t.domElement.clientWidth,this.current_input.diffY=f/t.domElement.clientHeight,this.current_input.startX=u/t.domElement.clientWidth*2-1,this.current_input.startY=-(h/t.domElement.clientHeight)*2+1,this.current_input.pointerX=c/t.domElement.clientWidth*2-1,this.current_input.pointerY=-(l/t.domElement.clientHeight)*2+1,this.current_input.mouseMove=a,d=f=0};function m(C,D,F){const B=C.getBoundingClientRect(),Y=D-B.left,V=F-B.top;return{x:Y,y:V}}function _(C){let D=i[C.pointerId];D===void 0&&(D=new _e,i[C.pointerId]=D),D.set(C.pageX,C.pageY)}function g(C){switch(_(C),n.length){case 1:if(t.enableRotate===!1)return;p(),o=r.MOVE;break;case 2:switch(t.touches.TWO){default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&t.dispatchEvent(Dm)}function p(){if(n.length===1){const{x:C,y:D}=m(t.domElement,n[0].pageX,n[0].pageY);c=C,u=C,l=D,h=D}}function x(C){switch(_(C),o){case r.MOVE:if(t.enableRotate===!1)return;v(C);break;default:o=r.NONE}}function v(C){if(n.length===1){a=!0;const{x:D,y:F}=m(t.domElement,C.pageX,C.pageY);D<c?d=c-D:D>c&&(d=D-c),d=D-c,F<l?f=l-F:F>l&&(f=F-l),f=F-l,c=D,l=F}}let M=kn.None;function y(C){switch(C.button){case 0:M=kn.LEFT,b(C);break;case 1:M=kn.MIDDLE;break;case 2:M=kn.RIGHT;break;default:M=-1}o!==r.NONE&&t.dispatchEvent(Dm)}function b(C){const{x:D,y:F}=m(t.domElement,C.pageX,C.pageY);c=D,l=F,u=D,h=F}function E(C){if(t.enabled!==!1)switch(M){case kn.LEFT:if(t.enableZoom===!1)return;T(C);break;case kn.MIDDLE:if(t.enablePan===!1)return;handleMouseMovePan(C);break}}function T(C){a=!0;const{x:D,y:F}=m(t.domElement,C.pageX,C.pageY);D<c?d=c-D:D>c&&(d=D-c),d=D-c,F<l?f=l-F:F>l&&(f=F-l),f=F-l,c=D,l=F}function S(C){n.push(C)}function A(C){delete i[C.pointerId];for(let D=0;D<n.length;D++)if(n[D].pointerId==C.pointerId){n.splice(D,1);return}}function N(C){t.enabled!==!1&&(n.length===0&&(C.target.setPointerCapture(C.pointerId),t.domElement.addEventListener("pointermove",U),t.domElement.addEventListener("pointerup",z)),S(C),C.pointerType==="touch"?g(C):y(C))}function U(C){t.enabled!==!1&&(C.pointerType==="touch"?x(C):E(C))}function z(C){A(C),n.length===0&&(C.target.releasePointerCapture(C.pointerId),t.domElement.removeEventListener("pointermove",U),t.domElement.removeEventListener("pointerup",z)),t.dispatchEvent(VD),M=-1,a=!1,d=0,f=0}t.domElement.addEventListener("pointerdown",N,!1),t.domElement.addEventListener("pointercancel",z,!1)}init(e){}execute(e,t){this.checkGameKeys()}}let lv=!1;const wn=document.getElementById("musicSheet"),Wn=document.getElementById("musicSheetContainer"),ti=document.getElementById("slider"),Ra=document.getElementById("slider_position"),Pm=document.getElementById("sheetMenu"),Nm=document.getElementById("sheet_tooltips"),Lm=document.getElementById("scale-div"),uv=document.getElementById("synth-name"),$s=document.getElementById("e-list"),zD=document.getElementById("sheet_songList"),Ju=[28,38,29,39,20,30,21,31,22,32,23,33,24,34,25,35,26,36,27,37],eh=[18,17,16,13,12,11,10,8,7,6,5,3,4,2,9,14,15,1,0,19],Fn=[.05,.2,.6,.1,.6,.3,.5,.5,.65,.7,.1,.1,.05,.05,.05],pi=new rr;pi.background=new Me(3355443);const Bt=10;[wn.width,wn.height]=[window.innerWidth,window.innerHeight];let Yi,gn,Rt;wn.width*=.95,wn.height*=.95,gn=wn.width/wn.height,gn>1&&(gn=8/10),wn.width=wn.height*gn,Yi=new Co(gn*Bt/-2,gn*Bt/2,Bt/2,Bt/-2,1,1e3),Yi.position.y=-.1,Yi.position.z=5,Yi.position.y=-2.5,Yi.lookAt(0,0,0);Ra.style.width=`${gn/.804*100}%`;const ro=1-gn/.804;document.getElementById("sheetMenu").style.width=`${wn.width}px`;ko(!1);let Kl=new Ul({canvas:wn,antialias:!0,alpha:!0});Kl.shadowMap.enabled=!0;Kl.shadowMap.type=Hm;let Ln;const Jt={},Om=new Ug,Qt=new _e,An=new _e;new _e;const GD=new _e;new _e;const is=[],Lh=[];let Yo=[],Nt,Um,It;const Fm={instrument:0,pitch:10};let On=[],km=0;const Bm=new cv(Wn);Wn.addEventListener("pointerdown",Oh,!1);ti.addEventListener("pointerdown",HD,!1);function Xd(s,e,t){const n=s.getBoundingClientRect(),i=e.clientX-n.left,r=e.clientY-n.top;t.set(i,r)}function Oh(s){Wn.addEventListener("pointerup",hv),Xd(Wn,s,Qt),GD.copy(Qt),Qt.x=Qt.x/Wn.clientWidth*2-1,Qt.y=-Qt.y/Wn.clientHeight*2+1}function hv(s){Wn.releasePointerCapture(s.pointerId),Rt!==void 0&&It!==void 0&&It!==4&&(Nt.AudioSystem.instruments[It].modifyParameter(Rt.userData.parameter.name,Rt.userData.parameter.value),Fm.instrument=It,Nt.AudioSystem.playInstrumentAt(Fm)),Rt=void 0,Wn.removeEventListener("pointerup",hv)}function HD(s){ti.addEventListener("pointerup",dv),ti.addEventListener("pointermove",fv),Xd(ti,s,An);const e=Ra.getBoundingClientRect();let t=(e.right-e.left)/2;t=t/ti.clientWidth,console.log(t),An.x=An.x/ti.clientWidth;let n=An.x-t;An.x=Math.max(0,Math.min(ro,An.x)),n=Math.max(0,Math.min(ro,n));for(let i=0;i<is.length;i++){const r=is[i];r.position.x=r.userData.cachedXPos-n*Bt/1.23}Ra.style.transform=`translateX(${n*100/(1-ro)}%)`,console.log(An)}function dv(s){ti.releasePointerCapture(s.pointerId),ti.removeEventListener("pointermove",fv),ti.removeEventListener("pointerup",dv)}function fv(s){Xd(wn,s,An);const e=Ra.getBoundingClientRect();let t=(e.right-e.left)/2;t=t/ti.clientWidth,console.log(t),An.x=An.x/ti.clientWidth;let n=An.x-t;An.x=Math.max(0,Math.min(ro,An.x)),n=Math.max(0,Math.min(ro,n));for(let i=0;i<is.length;i++){const r=is[i];r.position.x=r.userData.cachedXPos-n*Bt/1.23}Ra.style.transform=`translateX(${n*100/(1-ro)}%)`}function pv(s,e,...t){s.utils_modified||(s.utils_modified=!0,s.onBeforeCompile=n=>{if(n._utils_modified)return;n._utils_modified=!0,Object.assign(n.uniforms,e);const i=`
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
	
	`);n.vertexShader=i})}function Il(s,e,t,n){s.setAttribute(e.toString(),new la(new Int32Array(t),n)),s.attributes[e.toString()].setUsage(Nl),s.attributes[e.toString()].needsUpdate=!0}let Vm=(s,e,t)=>{const n=new Yn(s.geometry.clone(),s.material.clone(),e.length);n.name=s.name,n.material.vertexColors=!0,n.frustumCulled=!1,Il(n.geometry,"instanceID",40,1),Il(n.geometry,"melodyInstrumentID",40,1);for(let i=0;i<e.length;i++)n.geometry.attributes.instanceID.array[i]=i+t*40,n.setMatrixAt(i,e[i]),n.geometry.attributes.melodyInstrumentID.array[i]=Jt.melodyInstrumentID.value[i];return n.geometry.attributes.instanceID.needsUpdate=!0,n.geometry.attributes.melodyInstrumentID.needsUpdate=!0,Jt.picked={value:-1},pv(n.material,Jt),n},WD=(s,e)=>{const t=new Yn(s.geometry.clone(),s.material.clone(),e.length);t.name=s.name,t.material.vertexColors=!0,Il(t.geometry,"instanceID",e.length,1),Il(t.geometry,"melodyInstrumentID",e.length,1);for(let n=0;n<e.length;n++)t.geometry.attributes.instanceID.array[n]=n-40,t.setMatrixAt(n,e[n]),t.geometry.attributes.melodyInstrumentID.array[n]=(n+4)%4;return t.instanceMatrix.needsUpdate=!0,t.geometry.attributes.instanceID.needsUpdate=!0,t.geometry.attributes.melodyInstrumentID.needsUpdate=!0,pv(t.material,Jt),t};function XD(s,e){Nt=e,Jt.melodyInstrumentID={value:e.AudioSystem.melodyInstrumentID},Jt.time={value:0};let t=[],n,i=[],r,o=[],a;new Hn({color:65280}),s.traverse(function(T){T.name.includes("TO_SELF")?Ln=T:T.name.includes("TO1")&&Yo.push(T),T.name.includes("Node")&&(n=T),T.parent!==null&&T.parent.name.includes("sheet_positions")&&T.name.includes("TO_")&&(T.name.includes("TO_position1")&&(r=T),T.updateMatrixWorld(),i.push(T.matrixWorld.clone())),T.name.includes("knob_")&&(T.updateMatrixWorld(),o.push(T.matrixWorld)),T.name.includes("mixer")&&(T.updateMatrixWorld(),a=T,a.userData.skipInteraction=!0),T.name.includes("bezier")&&(T.updateMatrixWorld(),On.push(T))}),n.children.forEach(T=>{T.updateMatrixWorld(),T.matrixWorld.elements[14]=+T.name.slice(-(T.name.length-3)),t.push(T.matrixWorld),T.material=new Xs({color:16777215})}),t.sort((T,S)=>{if(T.elements[14]>S.elements[14])return 1;if(T.elements[14]<S.elements[14])return-1;if(T.elements[14]===S.elements[14])return 0}),t.forEach(T=>{T.elements[14]=0}),Ln.material=Ln.material.clone(),Ln.material.emissivemap=void 0,Ln.material.emissiveColor={r:0,g:0,b:0},Ln.material.emissiveIntensity=0,Ln.material.vertexColors=!0,Ln.geometry.computeBoundingBox();var c=new Pa(Bt*2,Bt*2,2,2);const l=Yo[0].material.map.clone();l.wrapS=vn,l.wrapT=vn,l.repeat=new _e(3.5,3.5);const u=4;var h=new Hn({color:new Me(Fn[u*3+0],Fn[u*3+1],Fn[u*3+2]).multiply(new Me(.5,.5,.5)),map:l}),d=new qt(c,h);d.userData.skipInteraction=!0,d.position.z=-1,pi.add(d),pi.add(new td(16777215,.5));const f=new ed(16777215,2);f.castShadow=!0,f.name="DIRLIGHT",f.shadow.mapSize.width=512,f.shadow.mapSize.height=512,f.shadow.camera.near=0,f.shadow.camera.far=1e3,f.shadow.camera.position.copy(Yi.position),f.position.set(50,50,50),pi.add(f);const m=Vm(Ln,t,0);m.position.set(-Bt*gn/2+.75,Bt/2+.35),m.setRotationFromAxisAngle(new P(0,0,1),-3.14/2),m.userData.beat=0,m.userData.cachedXPos=m.position.x,is.push(m),pi.add(m);for(let T=1;T<e.GlobalParameters.barSize;T++){const S=Vm(Ln,t,T);S.position.set(-Bt*gn/2+.75+T,Bt/2+.35,0),S.setRotationFromAxisAngle(new P(0,0,1),-3.14/2),S.userData.beat=T,S.geometry.attributes.melodyInstrumentID.needsUpdate=!0,S.userData.cachedXPos=S.position.x,is.push(S),pi.add(S);for(let A=0;A<40;A++)S.geometry.attributes.melodyInstrumentID.array[A]=Jt.melodyInstrumentID.value[T*40+A]}-Bt*gn/2+.75+e.GlobalParameters.barSize-1;let _=2.5;new Array(4).fill(0).map((T,S)=>{const A=new Pe;return A.compose(new P(-Bt*gn/2+.25*_+S*.27*_,-Bt/2+1.5,0),new Ht().setFromAxisAngle(new P(0,0,1),S*3.14),new P(_,_,_)),A});const g=new mt;r.material=Ln.material.clone();const p=WD(r,i);p.receiveShadow=!0,p.name=Ln.name,p.userData.beat=-1,g.add(p),a.castShadow=!1,g.add(a);const x=On[0];On[0]=On[1],On[1]=x;for(let T=0;T<On.length;T++)On[T].visible=!1,On[T].userData.skipInteraction=!0,On[T].castShadow=!0,g.add(On[T]);const v=3;for(let T=0;T<o.length;T++){const S=new P().setFromMatrixPosition(o[o.length-T-1]),A=Math.floor(Math.random()*(Yo.length-1))+1,N=Yo[A].clone();N.material=Yo[A].material.clone(),N.rotateX(3.14/2),N.position.copy(S),N.material.color=new Me(Fn[(T*3+v)%(Fn.length-3)],Fn[(T*3+1+v)%(Fn.length-3)],Fn[(T*3+2+v)%(Fn.length-3)]),N.userData.knob=T+1,N.userData.color=T+v,N.castShadow=!0,N.recieveShadow=!1;const U=.8;N.scale.set(U,U,U),N.updateMatrixWorld(),Lh.push(N),g.add(N)}g.castShadow=!0,g.receiveShadow=!0;const M=Bt*gn/1.85;g.scale.set(M,M,M);let y=new oi;g.traverse(T=>{if(T.geometry){const S=new oi;T.geometry.computeBoundingBox(),S.copy(T.geometry.boundingBox).applyMatrix4(T.matrixWorld)}}),y.setFromObject(g);const b=new P,E=new P;new P,y.getSize(b),y.getCenter(E),g.position.y=-Bt/2-E.y+b.y/2+M/8,g.position.x+=-Bt*gn/2-E.x+b.x/2,pi.add(g),a.receiveShadow=!0,Kl.render(pi,Yi)}function qD(){if(!lv||zD.style.display!=="none")return;if(Bm.update(),Qt.x,Rt!==void 0&&It!==void 0&&It!==4){const e=Nt.AudioSystem.instruments[It],t=e.parameterNames[-Um-1];Rt.userData.cachedRotation===void 0&&(Rt.userData.cachedRotation=e.getDefault01(t)),Rt.userData.cachedRotation+=-Bm.current_input.diffY*10,Rt.userData.cachedRotation=Math.min(Math.max(Rt.userData.cachedRotation,0),1),Rt.userData.parameter===void 0?Rt.userData.parameter={name:t,value:e.getParamValueFromNormRange(t,Rt.userData.cachedRotation)}:(Rt.userData.parameter.name=t,Rt.userData.parameter.value=e.getParamValueFromNormRange(t,Rt.userData.cachedRotation)),jD(It,t,Rt.userData.parameter.value),Rt.rotation.set(0,0,-Rt.userData.cachedRotation*3.14*2)}It===void 0&&(km+=.015,Lh.forEach((e,t)=>{const n=Math.sin(km*1+t)*6.28;e.rotation.set(0,0,n)})),Om.setFromCamera(Qt,Yi),Jt.time.value>0?Jt.time.value-=.1:Jt.time.value=0;const s=Om.intersectObjects(pi.children);if(Kl.render(pi,Yi),s.length!==0){let e;for(let a=0;a<s.length;a++)if(!(s[a].object.userData.skipInteraction||s[a].object.visible===!1)){e=s[a];break}if(e===void 0)return;if(e.object.userData.beat===-1){const a=e.object.geometry.attributes.melodyInstrumentID.array[e.instanceId]%5;It!==void 0&&(On[It].visible=!1),On[a].visible=!0,It=a;const c=Nt.AudioSystem.instruments[It];Lh.forEach((l,u)=>{const h=u<c.parameterNames.length;l.visible=h,h&&(l.userData.cachedRotation=c.getDefault01(c.parameterNames[u]),l.rotation.set(0,0,-l.userData.cachedRotation*3.14*2))}),console.log("SETCACHEDROTATION"),Jt.time.value=1,Jt.picked.value=e.instanceId+e.object.userData.beat*40,Qt.x=Qt.y=-2,mv(It);return}if(e.object.userData.knob!==void 0){Um=-e.object.userData.knob;const a=e.object.userData.color=Math.floor(Math.random()*4);e.object.material.color=new Me(Fn[a*3],Fn[a*3+1],Fn[a*3+2]),Rt=e.object,Qt.x=Qt.y=-2;return}const t=e.object.userData.beat,n=e.instanceId;if(Jt.time.value=1,Jt.picked.value=e.instanceId+t*40,It===void 0){Nt.AudioSystem.playEmptyInstrument(),Qt.x=Qt.y=-2;return}let i=0;Ju.includes(n)?i=Ju.length-1-Ju.indexOf(n):eh.includes(n)?i=eh.length-1-eh.indexOf(n):console.log("there is no instance with given id");let r=e.object.geometry.attributes.melodyInstrumentID.array[n];r=r===It?4:It,e.object.geometry.attributes.melodyInstrumentID.array[n]=r,Jt.melodyInstrumentID.value[t*40+n]=r;const o=Nt.AudioSystem.addInstrumentOnPosition(r,t,n,i);r!==4&&Nt.AudioSystem.playInstrumentAt(o),Nt.Curve.geometryNeedsUpdate=!0,e.object.geometry.attributes.melodyInstrumentID.needsUpdate=!0,Qt.x=Qt.y=-2}}function ko(s){lv=s,s?(wn.style.display="block",Wn.style.display="block",Pm.style.display="block",Nm.style.display="block",Lm.style.display="flex"):(Wn.style.display="none",wn.style.display="none",Pm.style.display="none",Nm.style.display="none",Lm.style.display="none")}function mv(s){const e=Nt.AudioSystem.instruments[s];for(let t=0;t<$s.children.length;t++)$s.children[t].children[0].textContent="            ",$s.children[t].children[1].textContent="   ";Object.keys(e.parameters).forEach((t,n)=>{let i;t==="waveform"?i=wo[Math.floor(e.parameters[t].value)]:t==="noiseType"?i=Rl[Math.floor(e.parameters[t].value)]:i=e.parameters[t].max>5?e.parameters[t].value.toFixed(0):e.parameters[t].value.toFixed(2),$s.children[n].children[0].textContent=t,$s.children[n].children[1].textContent=i}),uv.textContent=e.name}function jD(s,e,t){const n=Nt.AudioSystem.instruments[s];Object.keys(n.parameters).forEach((i,r)=>{i===e&&(i==="waveform"?t=wo[Math.floor(t)]:i==="noiseType"?t=Rl[Math.floor(t)]:t=t>5?t.toFixed(0):t.toPrecision(2),$s.children[r].children[0].textContent=i,$s.children[r].children[1].textContent=t)}),uv.textContent=n.name}function YD(s){const e=Nt.AudioSystem.getMelodyData(s);e.speed=Nt.GlobalParameters.speed;let t=JSON.stringify(e);$D(t,"my_melody.txt","text/plain")}function $D(s,e,t){var n=document.createElement("a"),i=new Blob([s],{type:t});n.href=URL.createObjectURL(i),n.download=e,n.click()}function gv(s,e=!1){fetch(s).then(t=>t.json()).then(t=>{const n=t;Nt.AudioSystem.setMelodyFromJsonData(n,e),n.speed!==void 0&&(Nt.GlobalParameters.speed=n.speed,Nt.camera.userData.speed=n.speed,document.getElementById("speedSelect").value=n.speed),n.melody.forEach(i=>{is[i.beat].geometry.attributes.melodyInstrumentID.array[i.id_on_beat]=i.instrument}),is.forEach(i=>{i.geometry.attributes.melodyInstrumentID.needsUpdate=!0}),Nt.Curve.geometryNeedsUpdate=!0,n.scale!==void 0&&(document.getElementById("scaleSelect").value=n.scale),n.tonicOctave!==void 0&&(document.getElementById("tonicSelect").value=n.tonicOctave.tonic,document.getElementById("octaveSelect").value=n.tonicOctave.octave),It!==void 0&&It!==4&&mv(It)})}function Zl(s,e=!1){document.getElementById("scaleSelect").value=Nt.AudioSystem.getDefaultScale();const{tonic:t,octave:n}=Nt.AudioSystem.getDefaultTonicAndOctave();document.getElementById("tonicSelect").value=t,document.getElementById("octaveSelect").value=n,document.getElementById("speedSelect").value=2.5,is.forEach((i,r)=>{for(let o=0;o<40;o++)i.geometry.attributes.melodyInstrumentID.array[o]=Jt.melodyInstrumentID.value[r*40+o];i.geometry.attributes.melodyInstrumentID.needsUpdate=!0})}function qd(s){let e=document.getElementById("sheet_songList");s?(Wn.removeEventListener("pointerdown",Oh,!1),e.style.display="block",document.querySelectorAll("span").forEach(t=>{t.offsetWidth>250&&(console.log(t.offsetWidth),console.log(t.textContent),console.log(t.getAnimations()[0]),t.animate({transform:["translateX(0px)","translateX(-"+(t.offsetWidth-250)+"px)"]},{duration:2e3,iterations:1/0,direction:"alternate"}))})):(Wn.addEventListener("pointerdown",Oh,!1),e.style.display="none")}let _v=!1;const fn=document.getElementById("howToPlayScreen"),Xn=document.getElementById("howToPlayContainer"),th=[.05,.2,.6,.1,.6,.3,.5,.5,.65,.7,.1,.1,.05,.05,.05],ms=new rr,Vt=2;[fn.width,fn.height]=[window.innerWidth,window.innerHeight];let oo,Bn,Nc;fn.width*=.95,fn.height*=.95,Bn=fn.width/fn.height,Bn>1&&(Bn=8/10),fn.width=fn.height*Bn,Xn.style.width=`${fn.width}px`,Xn.style.height=`${fn.height}px`,oo=new Co(Bn*Vt/-2,Bn*Vt/2,Vt/2,Vt/-2,1,1e3),oo.position.z=5,oo.lookAt(0,0,0);document.getElementById("sheetMenu").style.width=`${fn.width}px`;let jd=new Ul({canvas:fn,antialias:!0,alpha:!0});jd.setClearColor(0,0);let Gi,qi,Qn,vs;const Vn={};new Ug;const Hr=new _e;new _e;new _e;const KD=new _e;new _e;let Ee,Lc;const fi={instrument:0,pitch:10};new cv(Xn);Xn.addEventListener("pointerdown",QD,!1);function ZD(s,e,t){const n=s.getBoundingClientRect(),i=e.clientX-n.left,r=e.clientY-n.top;t.set(i,r)}function QD(s){Xn.addEventListener("pointerup",vv),ZD(Xn,s,Hr),KD.copy(Hr),Hr.x=Hr.x/Xn.clientWidth*2-1,Hr.y=-Hr.y/Xn.clientHeight*2+1}function vv(s){Xn.releasePointerCapture(s.pointerId),Nc!==void 0&&Lc!==void 0&&Lc!==4&&(Ee.AudioSystem.instruments[Lc].modifyParameter(Nc.userData.parameter.name,Nc.userData.parameter.value),fi.instrument=Lc,Ee.AudioSystem.playInstrumentAt(fi)),Nc=void 0,Xn.removeEventListener("pointerup",vv)}function JD(s,e,...t){s.utils_modified||(s.utils_modified=!0,s.onBeforeCompile=n=>{if(n._utils_modified)return;n._utils_modified=!0,Object.assign(n.uniforms,e);const i=`
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
					    transformed+=transformed*sin(time*6.*3.14)*0.1;
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
	
	`);n.vertexShader=i})}let eP=(s,e)=>{const t=new Yn(s.geometry.clone(),s.material.clone(),e.length);t.name=s.name,t.material.vertexColors=!0,zm(t.geometry,"instanceID",e.length,1),zm(t.geometry,"melodyInstrumentID",e.length,1);for(let n=0;n<e.length;n++)t.geometry.attributes.instanceID.array[n]=n,t.setMatrixAt(n,e[n]),t.geometry.attributes.melodyInstrumentID.array[n]=(n+4)%4;return t.instanceMatrix.needsUpdate=!0,t.geometry.attributes.instanceID.needsUpdate=!0,t.geometry.attributes.melodyInstrumentID.needsUpdate=!0,JD(t.material,Vn),t};function tP(s,e){s.__ok||(s.__ok=!0,s.vertexColors=!0,s.onBeforeCompile=t=>{if(t.__htp_modified)return;t.__htp_modified=!0,Object.assign(t.uniforms,e);const n={bomb_colors:{value:[1,1,1,1,1,0,1,0,0]}};Object.assign(t.uniforms,n);const i=`
			
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
		${t.vertexShader}
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
				vec3 pos = position.xyz;
				
				vec3 n_pos = pos;
				
				n_pos.xyz+=objectNormal.xyz*sin(time*10.+pos.z*3.+float(_tube_id)*3.14*0.5)*0.05*float(_tube_id);
				vec4 worldPos = modelMatrix  * vec4(n_pos, 1.);
				
				
				vec3 transformed = worldPos.xyz;

				vec3 transformedNormal =  objectNormal;
				
				transformedNormal = normalMatrix * transformedNormal;
					
			`).replace("#include <project_vertex>",`vec4 mvPosition = viewMatrix * vec4( transformed, 1.0 );
				gl_Position = projectionMatrix * mvPosition;`).replace("#include <color_vertex>",`
				vColor.xyz = bomb_colors[_tube_id]*0.5;
				#if defined( USE_MAP )
                    
                    r_n=0.;
                    r_n_1=0.;
                    
                    vMapUv.xy*=1.;
                    
                    vMapUv.y += time/10.+float(_tube_id)*0.5;
                    //	if (_tube_id ==uint(0)) vMapUv.xy = vec2(1,1);

				#endif
	
	`);t.vertexShader=i})}function nP(s,e,t=1){s.__ok||(s.__ok=!0,s.vertexColors=!0,s.onBeforeCompile=n=>{if(n.__htp_modified)return;n.__htp_modified=!0,Object.assign(n.uniforms,e);const i=`

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
				vec3 pos = position.xyz;
				
				vec4 worldPos = modelMatrix * vec4(pos, 1.);
				
				
				vec3 transformed = worldPos.xyz;

				vec3 transformedNormal =  objectNormal;
				
				transformedNormal = normalMatrix * transformedNormal;
					
			`).replace("#include <project_vertex>",`vec4 mvPosition = viewMatrix * vec4( transformed, 1.0 );
				gl_Position = projectionMatrix * mvPosition;`).replace("#include <color_vertex>",`
								
					vColor.xyz = vec3(2.,1.,0.9);
				
					vColor.xyz = vec3(100.);
				
				#if defined( USE_MAP )
				
				float r_n=0.;
				float r_n_1=0.;
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
	
	`);n.vertexShader=i;const r=n.fragmentShader.replace("#include <opaque_fragment>",`
            	#ifdef OPAQUE
	diffuseColor.a = 1.0;
	#endif
	#ifdef USE_TRANSMISSION
	diffuseColor.a *= material.transmissionAlpha;
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.r);`);n.fragmentShader=r})}function zm(s,e,t,n){s.setAttribute(e.toString(),new la(new Int32Array(t),n)),s.attributes[e.toString()].setUsage(Nl),s.attributes[e.toString()].needsUpdate=!0}function iP(s,e){Ee=e,Vn.melodyInstrumentID={value:e.AudioSystem.melodyInstrumentID},Vn.time={value:1},Vn.picked={value:-1},new Hn({color:65280}),s.traverse(function(u){u.name.includes("TO_SELF")?Gi=u:u.name.includes("ELECTRICITY")?qi=u:u.name.includes("BOMB")&&(vs=u)}),Gi.material=Gi.material.clone(),Gi.material.emissivemap=void 0,Gi.material.emissiveColor={r:0,g:0,b:0},Gi.material.emissiveIntensity=0,Gi.material.vertexColors=!0,Gi.geometry.computeBoundingBox();let t=.36;const n=new Array(4).fill(0).map((u,h)=>{const d=new Pe;return d.compose(new P(-Vt*Bn/2+Vt*Bn*.25+h/6*Vt*Bn,0,0),new Ht().setFromAxisAngle(new P(0,0,1),h*3.14),new P(t,t,t)),d}),i=eP(Gi,n);i.rotateX(0),i.position.y=-Vt/3.5,ms.add(i);var r=new Pa(Vt*2,Vt*2,2,2);const o=4;var a=new Hn({color:new Me(th[o*3+0],th[o*3+1],th[o*3+2]).multiply(new Me(.5,.5,.5))}),c=new qt(r,a);c.userData.skipInteraction=!0,c.position.z=-1,ms.add(new td(16777215,.5));const l=new ed(16777215,2);l.castShadow=!0,l.name="DIRLIGHT",l.shadow.mapSize.width=512,l.shadow.mapSize.height=512,l.shadow.camera.near=0,l.shadow.camera.far=1e3,l.shadow.camera.position.copy(oo.position),l.position.set(50,50,50),ms.add(l),vs.material,tP(vs.material,Vn),vs.scale.set(.35,.35,.35),vs.position.set(0,Vt/2-.65,0),ms.add(vs),qi.material,nP(qi.material,Vn),qi.scale.set(.35,.35,.35),qi.position.set(0,Vt/2-.65,0),ms.add(qi),Qn=new mt,Qn.add(Ee.hand),Qn.name="HAND_CONTAINER",Qn.position.set(-Vt*Bn/2,Vt/2-.65,2),Qn.rotateX(-3.14),Qn.rotateY(-3.14/2),ms.add(Qn),Yd(!1),jd.render(ms,oo)}let Hc=0,Gs=-1;const Oc=[],sP=new P,rP=new Me,oP=new Me;let Uc=!1,Xt=1,nh=!1;const aP=s=>{if(Gs<0&&s.hand.userData.removeFinger===!0&&s.fingersAlive>0){s.hand.userData.removeFinger=!1,s.AudioSystem.playEmptyInstrument(),s.hand.children[0].material.color.set(1,0,0),Gs=0,s.hand.userData.fingers_bones[s.fingersAlive-1].scale.set(0,0,0);const t=s.hand.userData.fingers[s.fingersAlive-1];t.bindMode="detached",Oc.push(t),t.visible=!0,t.userData.fallDirection=sP.set(Math.random()*2-1,Math.random()*2-1,-Math.random()*.5).normalize().clone().multiplyScalar(20),s.fingersAlive--}return Gs>=0&&(s.hand.children[0].material.color.lerpColors(rP.set(1,0,0),oP.copy(s.hand.children[0].material.userData.default_color),Math.sin(Gs*20)*.5+.5),Gs+=s.time.UIdelta,Gs>1&&(Gs=-1,s.hand.userData.removeFinger=!1,s.hand.children[0].material.color.copy(s.hand.children[0].material.userData.default_color))),Oc.length>0&&Oc.forEach((e,t)=>{e.rotateX(.1),e.rotateZ(.1),e.position.add(e.userData.fallDirection.clone().multiplyScalar(s.time.UIdelta)),e.scale.subScalar(s.time.UIdelta/2),e.scale.x<.01&&(e.visible=!1,s.scene.remove(e),Oc.splice(t,1))}),s};function Fc(s,e){s.enabled=!0,s.setEffectiveTimeScale(1),s.setEffectiveWeight(e)}function cP(){if(!_v)return;Hc+=Ee.time.UIdelta/2,qi.rotateY(.02),Vn.time.value+=Ee.time.UIdelta/2,Fc(Ee.hand_actions[1],0),Fc(Ee.hand_actions[2],.1),Fc(Ee.hand_actions[3],0),Fc(Ee.hand_actions[4],0);const s=Hc%2;s<1?(Xt=-1,Vn.picked.value=-1,Qn.position.y=Vt/2-.65,s>.4&&Uc&&(Ee.hand.userData.removeFinger=!0,Uc=!1),s<.1&&!Uc&&(nh?(qi.visible=!1,vs.visible=!0):(qi.visible=!0,vs.visible=!1),nh=!nh,Uc=!0),s<.1&&Ee.fingersAlive===0&&(Ee.hand.userData.fingers.forEach((e,t)=>{e.position.copy(Ee.hand.userData.storedFingerData[t].position),e.rotation.copy(Ee.hand.userData.storedFingerData[t].rotation),e.scale.copy(Ee.hand.userData.storedFingerData[t].scale),e.visible=!1}),Ee.hand.userData.fingers_bones.forEach(e=>{e.scale.set(1,1,1)}),Ee.hand.userData.removeFinger=!1,Ee.fingersAlive=5)):(Ee.fingersAlive===0&&(Hc=0),Qn.position.y=-Vt/3.5,s>1.7&&Xt===2?(Xt=3,Vn.picked.value=Xt,fi.instrument=Xt,Ee.AudioSystem.playInstrumentAt(fi)):s>1.5&&Xt===1?(Xt=2,Vn.picked.value=Xt,fi.instrument=Xt,Ee.AudioSystem.playInstrumentAt(fi)):s>1.3&&Xt===0?(Xt=1,Vn.picked.value=Xt,fi.instrument=Xt,Ee.AudioSystem.playInstrumentAt(fi)):s>1.1&&Xt===-1&&(Xt=0,Vn.picked.value=Xt,fi.instrument=Xt,Ee.AudioSystem.playInstrumentAt(fi))),Ee.fingersAlive!==0&&(Qn.position.x=-Vt*Bn/2+s%1*(Vt*Bn-.23)-.2,Ee.mixer.update(Ee.time.UIdelta)),aP(Ee),jd.render(ms,oo)}function Yd(s){_v=s,Ee.hand.children[0].material.color.set(Ee.hand.children[0].material.userData.default_color),s?(Xn.style.display="block",fn.style.display="block",Ee.hand.userData.fingers.forEach((e,t)=>{e.position.copy(Ee.hand.userData.storedFingerData[t].position),e.rotation.copy(Ee.hand.userData.storedFingerData[t].rotation),e.scale.copy(Ee.hand.userData.storedFingerData[t].scale),e.visible=!1}),Ee.hand.userData.fingers_bones.forEach(e=>{e.scale.set(1,1,1)}),Ee.hand.userData.removeFinger=!1,Ee.fingersAlive=5,Ee.howToPlay=!0,Ee.hand.position.set(0,-0,-.2),Ee.hand.rotation.set(0,0,0),Hc=0,Qn.add(Ee.hand)):(Xn.style.display="none",fn.style.display="none",Ee.scene.add(Ee.hand),Ee.hand.userData.fingers.forEach((e,t)=>{e.position.copy(Ee.hand.userData.storedFingerData[t].position),e.rotation.copy(Ee.hand.userData.storedFingerData[t].rotation),e.scale.copy(Ee.hand.userData.storedFingerData[t].scale),e.visible=!1}),Ee.hand.userData.fingers_bones.forEach(e=>{e.scale.set(1,1,1)}),Ee.hand.userData.removeFinger=!1,Ee.howToPlay=!1,Ee.fingersAlive=5)}const lP="sleepwell";let He,Wi,jr,Qo,Xa=!1;await uP().catch(s=>console.error(s));hP();XD(jr,He.world);iP(Qo,He.world);He.update();document.styleSheets[0].insertRule("canvas { outline:none; border:none; }",0);async function uP(){Wi=new rr,jr=new rr,Qo=new rr;const s=new Fg().setPath("/models/"),e=new Ng().setPath("/textures/"),t=await e.loadAsync("rgbw.png");t.flipY=!1,t.colorSpace=vt;const i=(await s.loadAsync("TO_self.gltf")).scene.children[0];i.name="TO_SELF",i.material=new Xs({color:16777215}),i.material.roughness=0,i.material.map=t,Wi.add(i),jr.add(i.clone()),Qo.add(i.clone());const r=await s.loadAsync("knob_mat.gltf");Wi.add(r.scene.children[0]);const o=await e.loadAsync("w_k.png");o.flipY=!1,o.colorSpace=vt;const a=await s.loadAsync("knobs_self.gltf");a.scene.traverse(M=>{M.isMesh&&(M.material=new Xs({color:16777215}),M.material.roughness=0,M.material.map=o)}),Wi.add(a.scene),jr.add(a.scene.clone());const c=await s.loadAsync("musicSheetTris1.gltf"),l=await s.loadAsync("sheet_positions.gltf"),h=(await s.loadAsync("beam.gltf")).scene.children[0];h.name="VISUAL_QUAD",h.material=new Xs({color:16777215}),h.roughness=0,h.material.side=Cn,h.material.transparent=!0,h.material.opacity=.5,h.material.blending=Jo,h.material.depthWrite=!1;const d=await e.loadAsync("fractal1.png");d.wrapS=vn,d.wrapT=vn,d.repeat=new _e(1,1),h.material.map=d,Wi.add(h),jr.add(c.scene),jr.add(l.scene);const f=await s.loadAsync("hand_w_fingers.gltf");for(f.scene.children[0].name="HAND";f.scene.children.length>1;)f.scene.children[0].attach(f.scene.children[1]);f.scene.children[0].animations=f.animations,f.scene.children[0].frustumCulled=!1,f.scene.children[0].children[0].material=new Xs({color:16777215,emissive:3355443}),f.scene.children[0].children[0].material.userData.default_color=new Me(.5,.5,.5),f.scene.children[0].children[0].material.color.copy(f.scene.children[0].children[0].material.userData.default_color),f.scene.children[0].children[0].material.roughness=0;const m=f.scene.children[0];Wi.add(m);const g=(await s.loadAsync("electricity.gltf")).scene.children[0];g.name="ELECTRICITY",g.material=new Xs({color:16777215}),g.roughness=0,g.material.side=Cn,g.material.transparent=!0,g.material.opacity=1,g.material.blending=Jo,g.material.depthWrite=!1;const p=await e.loadAsync("electric.png");p.wrapS=vn,p.wrapT=vn,p.repeat=new _e(1,1),g.material.map=p,Wi.add(g),Qo.add(g.clone());const v=(await s.loadAsync("bomb.gltf")).scene.children[0];v.name="BOMB",v.material=new Xs({color:16777215}),v.roughness=0,v.material.side=Cn,v.material.transparent=!0,v.material.opacity=1,v.material.blending=Jo,v.material.depthWrite=!1,Wi.add(v),Qo.add(v.clone())}function hP(){He=new BD(Wi)}function $d(){Xa=!0,He.world.paused=!1}function Ii(s){let e=document.getElementById("startScreen");s?e.style.display="block":e.style.display="none"}function yv(s){let e=document.getElementById("aboutscreen");s?e.style.display="block":e.style.display="none"}function Kd(s){let e=document.getElementById("codeEntering");s?e.style.display="block":e.style.display="none"}function Ql(s){let e=document.getElementById("pauseScreen");s?e.style.display="block":e.style.display="none"}function Zd(s){let e=document.getElementById("songList");s?(e.style.display="block",document.querySelectorAll("span").forEach(t=>{t.offsetWidth>250&&t.animate({transform:["translateX(0px)","translateX(-"+(t.offsetWidth-250)+"px)"]},{duration:2e3,iterations:1/0,direction:"alternate"})})):e.style.display="none"}function Sr(s){let e=document.getElementById("playScreen");s?e.style.display="flex":e.style.display="none",He.world.songEditingUnlocked&&He.world.editMode===!0?document.getElementById("editSongButton").style.display="block":document.getElementById("editSongButton").style.display="none"}document.getElementById("chooseSong").addEventListener("click",function(){Ii(!1),Zd(!0)});document.getElementById("submitButton").addEventListener("click",function(){document.getElementById("input_text").value===lP&&(He.world.songEditingUnlocked=!0,Kd(!1),ko(!0))});function dP(s){Zd(!1),gv(s.target.dataset.url),Yd(!0)}document.getElementById("howToPlayContainer").addEventListener("click",function(){fP()});function fP(s){Yd(!1),Sr(!0),He.world.Curve.placeInteractive(He.world,1),He.world.Curve.placeInteractive(He.world,2),$d(),He.world.Input.calibrateXY()}function pP(s){qd(!1),He.world.AudioSystem.resetMelody(),Zl(),gv(s.target.dataset.url,!0),this.geometryNeedsUpdate=!0,this.updateGeometry(He.world)}document.querySelectorAll("div.melody").forEach(s=>{s.addEventListener("click",dP)});document.querySelectorAll("div.sheet_melody").forEach(s=>{s.addEventListener("click",pP)});document.getElementById("continueBtn").addEventListener("click",function(){Ql(!1),Sr(!0),$d()});document.getElementById("makeSong").addEventListener("click",function(){Ii(!1),He.world.songEditingUnlocked?ko(!0):Kd(!0)});document.getElementById("editSongButton").addEventListener("click",function(){Sr(!1),He.world.paused=!0,He.world.AudioSystem.instruments.forEach(s=>{s.releaseAll()}),ko(!0)});document.getElementById("resetAndExitToMenu").addEventListener("click",function(){Xa=!1,Ql(!1),Ii(!0),He.world.editMode=!1,He.resetGameState(),Zl()});document.getElementById("pausebtn").addEventListener("click",function(){Sr(!1),Ql(!0),He.world.paused=!0});document.getElementById("whatisthis").addEventListener("click",function(){Ii(!1),yv(!0)});document.getElementById("playFromSheetBtn").addEventListener("click",function(){ko(!1),He.world.editMode=!0,Sr(!0),$d()});document.getElementById("closeSheetBtn").addEventListener("click",function(){ko(!1),Xa?Ql(!0):Ii(!0)});document.getElementById("rtmm").addEventListener("click",function(){Zd(!1),Ii(!0)});document.getElementById("rtmmm").addEventListener("click",function(){yv(!1),Ii(!0)});document.getElementById("sheet_goback").addEventListener("click",function(){qd(!1)});document.getElementById("rtm").addEventListener("click",function(){Kd(!1),Ii(!0)});document.getElementById("gotomenu").addEventListener("click",function(){Xa=!1,He.world.showEndScreen(!1),Ii(!0),He.world.editMode=!1,He.resetGameState(),Zl()});document.getElementById("gotomenu_w").addEventListener("click",function(){Xa=!1,He.resetGameState(),Zl(),He.world.showWinScreen(!1),Ii(!0)});document.getElementById("savemelody").addEventListener("click",function(){YD()});document.getElementById("readFromJson").addEventListener("click",function(){qd(!0)});document.getElementById("scaleSelect").onchange=s=>{He.world.AudioSystem.setActiveScale(s.target.value)};document.getElementById("tonicSelect").onchange=s=>{He.world.AudioSystem.setTonicAndOctave(s.target.value,void 0)};document.getElementById("octaveSelect").onchange=s=>{console.log(s.target.value),He.world.AudioSystem.setTonicAndOctave(void 0,s.target.value)};document.getElementById("speedSelect").onchange=s=>{console.log(s.target.value),console.log(He.world.GlobalParameters.speed),He.world.GlobalParameters.speed=s.target.value,console.log(He.world.GlobalParameters.speed),He.world.camera.userData.speed=He.world.GlobalParameters.speed};He.world.showEndScreen=function(s){Sr(!1);let e=document.getElementById("endScreen");s?e.style.display="block":e.style.display="none"};He.world.showWinScreen=function(s){Sr(!1);let e=document.getElementById("winScreen");s?e.style.display="block":e.style.display="none"};He.world.updateProgressBar=function(s){};xv();function xv(){requestAnimationFrame(xv),qD(),cP(),He.update()}document.addEventListener("wheel",function(e){e.ctrlKey&&e.preventDefault()},{passive:!1});
