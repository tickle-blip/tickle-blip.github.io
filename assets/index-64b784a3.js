(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rh="157",On={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},vc={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},G_=0,wd=1,H_=2,cm=1,lm=2,Pi=3,Gi=0,mn=1,bn=2,ki=0,Fr=1,Lo=2,Ad=3,Cd=4,W_=5,Cr=100,X_=101,q_=102,Rd=103,Id=104,j_=200,Y_=201,$_=202,K_=203,um=204,hm=205,Z_=206,Q_=207,J_=208,ev=209,tv=210,nv=0,iv=1,sv=2,Au=3,rv=4,ov=5,av=6,cv=7,oh=0,lv=1,uv=2,os=0,dm=1,fm=2,pm=3,mm=4,hv=5,gm=300,Hr=301,Wr=302,Cu=303,Ru=304,sl=306,pn=1e3,Un=1001,yc=1002,Rt=1003,Iu=1004,fc=1005,hn=1006,_m=1007,$s=1008,as=1009,dv=1010,fv=1011,ah=1012,vm=1013,rs=1014,oi=1015,Xr=1016,ym=1017,xm=1018,zs=1020,pv=1021,Tn=1023,mv=1024,gv=1025,Gs=1026,qr=1027,_v=1028,Sm=1029,vv=1030,Mm=1031,bm=1033,Rl=33776,Il=33777,Dl=33778,Pl=33779,Dd=35840,Pd=35841,Nd=35842,Ld=35843,yv=36196,Od=37492,Ud=37496,Fd=37808,kd=37809,Bd=37810,Vd=37811,zd=37812,Gd=37813,Hd=37814,Wd=37815,Xd=37816,qd=37817,jd=37818,Yd=37819,$d=37820,Kd=37821,Nl=36492,Zd=36494,Qd=36495,xv=36283,Jd=36284,ef=36285,tf=36286,Sv=2200,Tm=2201,Mv=2202,Go=2300,jr=2301,Ll=2302,Pr=2400,Nr=2401,xc=2402,ch=2500,Em=2501,bv=0,wm=1,Du=2,Am=3e3,Hs=3001,Tv=3200,Ev=3201,lh=0,wv=1,Fn="",gt="srgb",zt="srgb-linear",uh="display-p3",rl="display-p3-linear",Sc="linear",ut="srgb",Mc="rec709",bc="p3",Ol=7680,Av=519,Cv=512,Rv=513,Iv=514,Dv=515,Pv=516,Nv=517,Lv=518,Ov=519,Pu=35044,hh=35048,nf="300 es",Nu=1035,Fi=2e3,Tc=2001;class qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sf=1234567;const Oo=Math.PI/180,Yr=180/Math.PI;function qn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[s&255]+Ht[s>>8&255]+Ht[s>>16&255]+Ht[s>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function Ut(s,e,t){return Math.max(e,Math.min(t,s))}function dh(s,e){return(s%e+e)%e}function Uv(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Fv(s,e,t){return s!==e?(t-s)/(e-s):0}function Uo(s,e,t){return(1-t)*s+t*e}function kv(s,e,t,n){return Uo(s,e,1-Math.exp(-t*n))}function Bv(s,e=1){return e-Math.abs(dh(s,e*2)-e)}function Vv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function zv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Gv(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Hv(s,e){return s+Math.random()*(e-s)}function Wv(s){return s*(.5-Math.random())}function Xv(s){s!==void 0&&(sf=s);let e=sf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qv(s){return s*Oo}function jv(s){return s*Yr}function Lu(s){return(s&s-1)===0&&s!==0}function Cm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ec(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Yv(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*u,c*h,c*d,a*l);break;case"YZY":s.set(c*d,a*u,c*h,a*l);break;case"ZXZ":s.set(c*h,c*d,a*u,a*l);break;case"XZX":s.set(a*u,c*m,c*f,a*l);break;case"YXY":s.set(c*f,a*u,c*m,a*l);break;case"ZYZ":s.set(c*m,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function si(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function st(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const et={DEG2RAD:Oo,RAD2DEG:Yr,generateUUID:qn,clamp:Ut,euclideanModulo:dh,mapLinear:Uv,inverseLerp:Fv,lerp:Uo,damp:kv,pingpong:Bv,smoothstep:Vv,smootherstep:zv,randInt:Gv,randFloat:Hv,randFloatSpread:Wv,seededRandom:Xv,degToRad:qv,radToDeg:jv,isPowerOfTwo:Lu,ceilPowerOfTwo:Cm,floorPowerOfTwo:Ec,setQuaternionFromProperEuler:Yv,normalize:st,denormalize:si};class ye{constructor(e=0,t=0){ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,i,r,o,a,c,l){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],_=i[0],g=i[3],p=i[6],x=i[1],v=i[4],M=i[7],y=i[2],b=i[5],w=i[8];return r[0]=o*_+a*x+c*y,r[3]=o*g+a*v+c*b,r[6]=o*p+a*M+c*w,r[1]=l*_+u*x+h*y,r[4]=l*g+u*v+h*b,r[7]=l*p+u*M+h*w,r[2]=d*_+f*x+m*y,r[5]=d*g+f*v+m*b,r[8]=d*p+f*M+m*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,m=t*h+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=h*_,e[1]=(i*l-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ul.makeScale(e,t)),this}rotate(e){return this.premultiply(Ul.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ul.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ul=new We;function Rm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ho(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $v(){const s=Ho("canvas");return s.style.display="block",s}const rf={};function Fo(s){s in rf||(rf[s]=!0,console.warn(s))}const of=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),af=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Aa={[zt]:{transfer:Sc,primaries:Mc,toReference:s=>s,fromReference:s=>s},[gt]:{transfer:ut,primaries:Mc,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[rl]:{transfer:Sc,primaries:bc,toReference:s=>s.applyMatrix3(af),fromReference:s=>s.applyMatrix3(of)},[uh]:{transfer:ut,primaries:bc,toReference:s=>s.convertSRGBToLinear().applyMatrix3(af),fromReference:s=>s.applyMatrix3(of).convertLinearToSRGB()}},Kv=new Set([zt,rl]),Ke={enabled:!0,_workingColorSpace:zt,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Kv.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Aa[e].toReference,i=Aa[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Aa[s].primaries},getTransfer:function(s){return s===Fn?Sc:Aa[s].transfer}};function kr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let cr;class Im{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{cr===void 0&&(cr=Ho("canvas")),cr.width=e.width,cr.height=e.height;const n=cr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=cr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ho("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=kr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(kr(t[n]/255)*255):t[n]=kr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zv=0,Dm=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=qn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(kl(i[o].image)):r.push(kl(i[o]))}else r=kl(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function kl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Im.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qv=0;class Bt extends qi{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=Un,i=Un,r=hn,o=$s,a=Tn,c=as,l=Bt.DEFAULT_ANISOTROPY,u=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=qn(),this.name="",this.source=new Dm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Fo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Hs?gt:Fn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pn:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case yc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pn:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case yc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===gt?Hs:Am}set encoding(e){Fo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Hs?gt:Fn}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=gm;Bt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,i=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,M=(f+1)/2,y=(p+1)/2,b=(u+d)/4,w=(h+_)/4,T=(m+g)/4;return v>M&&v>y?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=b/n,r=w/n):M>y?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=b/i,r=T/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=w/r,i=T/r),this.set(n,i,r,t),this}let x=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(h-_)/x,this.z=(d-u)/x,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jv extends qi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Fo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Hs?gt:Fn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Bt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Dm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ls extends Jv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Pm extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class e0 extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==m){let g=1-a;const p=c*d+l*f+u*m+h*_,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const y=Math.sqrt(v),b=Math.atan2(y,p*x);g=Math.sin(g*b)/y,a=Math.sin(a*b)/y}const M=a*x;if(c=c*g+d*M,l=l*g+f*M,u=u*g+m*M,h=h*g+_*M,g===1-a){const y=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=y,l*=y,u*=y,h*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+u*h+c*f-l*d,e[t+1]=c*m+u*d+l*h-a*f,e[t+2]=l*m+u*f+a*d-c*h,e[t+3]=u*m-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),d=c(n/2),f=c(i/2),m=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"YZX":this._x=d*u*h+l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h-d*f*m;break;case"XZY":this._x=d*u*h-l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,u=c*n+a*t-r*i,h=c*i+r*n-o*t,d=-r*t-o*n-a*i;return this.x=l*c+d*-r+u*-a-h*-o,this.y=u*c+d*-o+h*-r-l*-a,this.z=h*c+d*-a+l*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bl.copy(this).projectOnVector(e),this.sub(Bl)}reflect(e){return this.sub(Bl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bl=new P,cf=new Vt;class Yn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),lr.copy(e.boundingBox),lr.applyMatrix4(e.matrixWorld),this.union(lr);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)Mi.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Mi)}else i.boundingBox===null&&i.computeBoundingBox(),lr.copy(i.boundingBox),lr.applyMatrix4(e.matrixWorld),this.union(lr)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(So),Ca.subVectors(this.max,So),ur.subVectors(e.a,So),hr.subVectors(e.b,So),dr.subVectors(e.c,So),Ki.subVectors(hr,ur),Zi.subVectors(dr,hr),Ms.subVectors(ur,dr);let t=[0,-Ki.z,Ki.y,0,-Zi.z,Zi.y,0,-Ms.z,Ms.y,Ki.z,0,-Ki.x,Zi.z,0,-Zi.x,Ms.z,0,-Ms.x,-Ki.y,Ki.x,0,-Zi.y,Zi.x,0,-Ms.y,Ms.x,0];return!Vl(t,ur,hr,dr,Ca)||(t=[1,0,0,0,1,0,0,0,1],!Vl(t,ur,hr,dr,Ca))?!1:(Ra.crossVectors(Ki,Zi),t=[Ra.x,Ra.y,Ra.z],Vl(t,ur,hr,dr,Ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Si=[new P,new P,new P,new P,new P,new P,new P,new P],Mi=new P,lr=new Yn,ur=new P,hr=new P,dr=new P,Ki=new P,Zi=new P,Ms=new P,So=new P,Ca=new P,Ra=new P,bs=new P;function Vl(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){bs.fromArray(s,r);const a=i.x*Math.abs(bs.x)+i.y*Math.abs(bs.y)+i.z*Math.abs(bs.z),c=e.dot(bs),l=t.dot(bs),u=n.dot(bs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const t0=new Yn,Mo=new P,zl=new P;class pi{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):t0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mo.subVectors(e,this.center);const t=Mo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Mo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mo.copy(e.center).add(zl)),this.expandByPoint(Mo.copy(e.center).sub(zl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new P,Gl=new P,Ia=new P,Qi=new P,Hl=new P,Da=new P,Wl=new P;class la{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Gl.copy(e).add(t).multiplyScalar(.5),Ia.copy(t).sub(e).normalize(),Qi.copy(this.origin).sub(Gl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ia),a=Qi.dot(this.direction),c=-Qi.dot(Ia),l=Qi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,m;if(u>0)if(h=o*c-a,d=o*a-c,m=r*u,h>=0)if(d>=-m)if(d<=m){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-m?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=m?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Gl).addScaledVector(Ia,d),f}intersectSphere(e,t){bi.subVectors(e.center,this.origin);const n=bi.dot(this.direction),i=bi.dot(bi)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,n,i,r){Hl.subVectors(t,e),Da.subVectors(n,e),Wl.crossVectors(Hl,Da);let o=this.direction.dot(Wl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qi.subVectors(this.origin,e);const c=a*this.direction.dot(Da.crossVectors(Qi,Da));if(c<0)return null;const l=a*this.direction.dot(Hl.cross(Qi));if(l<0||c+l>o)return null;const u=-a*Qi.dot(Wl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(e,t,n,i,r,o,a,c,l,u,h,d,f,m,_,g){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,u,h,d,f,m,_,g)}set(e,t,n,i,r,o,a,c,l,u,h,d,f,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/fr.setFromMatrixColumn(e,0).length(),r=1/fr.setFromMatrixColumn(e,1).length(),o=1/fr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,m=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+m*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,m=l*u,_=l*h;t[0]=d+_*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,m=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,m=a*u,_=a*h;t[0]=c*u,t[4]=m*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=m*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+m,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(n0,e,i0)}lookAt(e,t,n){const i=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ji.crossVectors(n,yn),Ji.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ji.crossVectors(n,yn)),Ji.normalize(),Pa.crossVectors(yn,Ji),i[0]=Ji.x,i[4]=Pa.x,i[8]=yn.x,i[1]=Ji.y,i[5]=Pa.y,i[9]=yn.y,i[2]=Ji.z,i[6]=Pa.z,i[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],x=n[3],v=n[7],M=n[11],y=n[15],b=i[0],w=i[4],T=i[8],S=i[12],E=i[1],L=i[5],F=i[9],V=i[13],C=i[2],U=i[6],k=i[10],O=i[14],j=i[3],B=i[7],X=i[11],R=i[15];return r[0]=o*b+a*E+c*C+l*j,r[4]=o*w+a*L+c*U+l*B,r[8]=o*T+a*F+c*k+l*X,r[12]=o*S+a*V+c*O+l*R,r[1]=u*b+h*E+d*C+f*j,r[5]=u*w+h*L+d*U+f*B,r[9]=u*T+h*F+d*k+f*X,r[13]=u*S+h*V+d*O+f*R,r[2]=m*b+_*E+g*C+p*j,r[6]=m*w+_*L+g*U+p*B,r[10]=m*T+_*F+g*k+p*X,r[14]=m*S+_*V+g*O+p*R,r[3]=x*b+v*E+M*C+y*j,r[7]=x*w+v*L+M*U+y*B,r[11]=x*T+v*F+M*k+y*X,r[15]=x*S+v*V+M*O+y*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+r*c*h-i*l*h-r*a*d+n*l*d+i*a*f-n*c*f)+_*(+t*c*f-t*l*d+r*o*d-i*o*f+i*l*u-r*c*u)+g*(+t*l*h-t*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+p*(-i*a*u-t*c*h+t*a*d+i*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],x=h*g*l-_*d*l+_*c*f-a*g*f-h*c*p+a*d*p,v=m*d*l-u*g*l-m*c*f+o*g*f+u*c*p-o*d*p,M=u*_*l-m*h*l+m*a*f-o*_*f-u*a*p+o*h*p,y=m*h*c-u*_*c-m*a*d+o*_*d+u*a*g-o*h*g,b=t*x+n*v+i*M+r*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=x*w,e[1]=(_*d*r-h*g*r-_*i*f+n*g*f+h*i*p-n*d*p)*w,e[2]=(a*g*r-_*c*r+_*i*l-n*g*l-a*i*p+n*c*p)*w,e[3]=(h*c*r-a*d*r-h*i*l+n*d*l+a*i*f-n*c*f)*w,e[4]=v*w,e[5]=(u*g*r-m*d*r+m*i*f-t*g*f-u*i*p+t*d*p)*w,e[6]=(m*c*r-o*g*r-m*i*l+t*g*l+o*i*p-t*c*p)*w,e[7]=(o*d*r-u*c*r+u*i*l-t*d*l-o*i*f+t*c*f)*w,e[8]=M*w,e[9]=(m*h*r-u*_*r-m*n*f+t*_*f+u*n*p-t*h*p)*w,e[10]=(o*_*r-m*a*r+m*n*l-t*_*l-o*n*p+t*a*p)*w,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*f-t*a*f)*w,e[12]=y*w,e[13]=(u*_*i-m*h*i+m*n*d-t*_*d-u*n*g+t*h*g)*w,e[14]=(m*a*i-o*_*i-m*n*c+t*_*c+o*n*g-t*a*g)*w,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*d+t*a*d)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,m=r*h,_=o*u,g=o*h,p=a*h,x=c*l,v=c*u,M=c*h,y=n.x,b=n.y,w=n.z;return i[0]=(1-(_+p))*y,i[1]=(f+M)*y,i[2]=(m-v)*y,i[3]=0,i[4]=(f-M)*b,i[5]=(1-(d+p))*b,i[6]=(g+x)*b,i[7]=0,i[8]=(m+v)*w,i[9]=(g-x)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=fr.set(i[0],i[1],i[2]).length();const o=fr.set(i[4],i[5],i[6]).length(),a=fr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Bn.copy(this);const l=1/r,u=1/o,h=1/a;return Bn.elements[0]*=l,Bn.elements[1]*=l,Bn.elements[2]*=l,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=h,Bn.elements[9]*=h,Bn.elements[10]*=h,t.setFromRotationMatrix(Bn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Fi){const c=this.elements,l=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,m;if(a===Fi)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Tc)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Fi){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(o-r),d=(t+e)*l,f=(n+i)*u;let m,_;if(a===Fi)m=(o+r)*h,_=-2*h;else if(a===Tc)m=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fr=new P,Bn=new Ue,n0=new P(0,0,0),i0=new P(1,1,1),Ji=new P,Pa=new P,yn=new P,lf=new Ue,uf=new Vt;class ol{constructor(e=0,t=0,n=0,i=ol.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uf.setFromEuler(this),this.setFromQuaternion(uf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ol.DEFAULT_ORDER="XYZ";class fh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let s0=0;const hf=new P,pr=new Vt,Ti=new Ue,Na=new P,bo=new P,r0=new P,o0=new Vt,df=new P(1,0,0),ff=new P(0,1,0),pf=new P(0,0,1),a0={type:"added"},c0={type:"removed"};class _t extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new P,t=new ol,n=new Vt,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new We}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new fh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(df,e)}rotateY(e){return this.rotateOnAxis(ff,e)}rotateZ(e){return this.rotateOnAxis(pf,e)}translateOnAxis(e,t){return hf.copy(e).applyQuaternion(this.quaternion),this.position.add(hf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(df,e)}translateY(e){return this.translateOnAxis(ff,e)}translateZ(e){return this.translateOnAxis(pf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Na.copy(e):Na.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(bo,Na,this.up):Ti.lookAt(Na,bo,this.up),this.quaternion.setFromRotationMatrix(Ti),i&&(Ti.extractRotation(i.matrixWorld),pr.setFromRotationMatrix(Ti),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(a0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(c0)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,r0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,o0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}_t.DEFAULT_UP=new P(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new P,Ei=new P,Xl=new P,wi=new P,mr=new P,gr=new P,mf=new P,ql=new P,jl=new P,Yl=new P;let La=!1;class zn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Vn.subVectors(e,t),i.cross(Vn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Vn.subVectors(i,t),Ei.subVectors(n,t),Xl.subVectors(e,t);const o=Vn.dot(Vn),a=Vn.dot(Ei),c=Vn.dot(Xl),l=Ei.dot(Ei),u=Ei.dot(Xl),h=o*l-a*a;if(h===0)return r.set(-2,-1,-1);const d=1/h,f=(l*c-a*u)*d,m=(o*u-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,wi),wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getUV(e,t,n,i,r,o,a,c){return La===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),La=!0),this.getInterpolation(e,t,n,i,r,o,a,c)}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,wi),c.setScalar(0),c.addScaledVector(r,wi.x),c.addScaledVector(o,wi.y),c.addScaledVector(a,wi.z),c}static isFrontFacing(e,t,n,i){return Vn.subVectors(n,t),Ei.subVectors(e,t),Vn.cross(Ei).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Vn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return La===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),La=!0),zn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return zn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;mr.subVectors(i,n),gr.subVectors(r,n),ql.subVectors(e,n);const c=mr.dot(ql),l=gr.dot(ql);if(c<=0&&l<=0)return t.copy(n);jl.subVectors(e,i);const u=mr.dot(jl),h=gr.dot(jl);if(u>=0&&h<=u)return t.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(mr,o);Yl.subVectors(e,r);const f=mr.dot(Yl),m=gr.dot(Yl);if(m>=0&&f<=m)return t.copy(r);const _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(gr,a);const g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return mf.subVectors(r,i),a=(h-u)/(h-u+(f-m)),t.copy(i).addScaledVector(mf,a);const p=1/(g+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(mr,o).addScaledVector(gr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let l0=0;class jn extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=Fr,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=um,this.blendDst=hm,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Au,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Av,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ol,this.stencilZFail=Ol,this.stencilZPass=Ol,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fr&&(n.blending=this.blending),this.side!==Gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Nm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},Oa={h:0,s:0,l:0};function $l(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=dh(e,1),t=Ut(t,0,1),n=Ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=$l(o,r,e+1/3),this.g=$l(o,r,e),this.b=$l(o,r,e-1/3)}return Ke.toWorkingColorSpace(this,i),this}setStyle(e,t=gt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){const n=Nm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}copyLinearToSRGB(e){return this.r=Fl(e.r),this.g=Fl(e.g),this.b=Fl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return Ke.fromWorkingColorSpace(Wt.copy(this),e),Math.round(Ut(Wt.r*255,0,255))*65536+Math.round(Ut(Wt.g*255,0,255))*256+Math.round(Ut(Wt.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Wt.copy(this),t);const n=Wt.r,i=Wt.g,r=Wt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=gt){Ke.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,i=Wt.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(es),this.setHSL(es.h+e,es.s+t,es.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(es),e.getHSL(Oa);const n=Uo(es.h,Oa.h,t),i=Uo(es.s,Oa.s,t),r=Uo(es.l,Oa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new Te;Te.NAMES=Nm;class ai extends jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new P,Ua=new ye;class ln{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Pu,this.updateRange={offset:0,count:-1},this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ua.fromBufferAttribute(this,t),Ua.applyMatrix3(e),this.setXY(t,Ua.x,Ua.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Lm extends ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Om extends ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Kt extends ln{constructor(e,t,n){super(new Float32Array(e),t,n)}}let u0=0;const Rn=new Ue,Kl=new _t,_r=new P,xn=new Yn,To=new Yn,Lt=new P;class An extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rm(e)?Om:Lm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,n){return Rn.makeTranslation(e,t,n),this.applyMatrix4(Rn),this}scale(e,t,n){return Rn.makeScale(e,t,n),this.applyMatrix4(Rn),this}lookAt(e){return Kl.lookAt(e),Kl.updateMatrix(),this.applyMatrix4(Kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Kt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];To.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(xn.min,To.min),xn.expandByPoint(Lt),Lt.addVectors(xn.max,To.max),xn.expandByPoint(Lt)):(xn.expandByPoint(To.min),xn.expandByPoint(To.max))}xn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Lt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Lt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Lt.fromBufferAttribute(a,l),c&&(_r.fromBufferAttribute(e,l),Lt.add(_r)),i=Math.max(i,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let E=0;E<a;E++)l[E]=new P,u[E]=new P;const h=new P,d=new P,f=new P,m=new ye,_=new ye,g=new ye,p=new P,x=new P;function v(E,L,F){h.fromArray(i,E*3),d.fromArray(i,L*3),f.fromArray(i,F*3),m.fromArray(o,E*2),_.fromArray(o,L*2),g.fromArray(o,F*2),d.sub(h),f.sub(h),_.sub(m),g.sub(m);const V=1/(_.x*g.y-g.x*_.y);isFinite(V)&&(p.copy(d).multiplyScalar(g.y).addScaledVector(f,-_.y).multiplyScalar(V),x.copy(f).multiplyScalar(_.x).addScaledVector(d,-g.x).multiplyScalar(V),l[E].add(p),l[L].add(p),l[F].add(p),u[E].add(x),u[L].add(x),u[F].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let E=0,L=M.length;E<L;++E){const F=M[E],V=F.start,C=F.count;for(let U=V,k=V+C;U<k;U+=3)v(n[U+0],n[U+1],n[U+2])}const y=new P,b=new P,w=new P,T=new P;function S(E){w.fromArray(r,E*3),T.copy(w);const L=l[E];y.copy(L),y.sub(w.multiplyScalar(w.dot(L))).normalize(),b.crossVectors(T,L);const V=b.dot(u[E])<0?-1:1;c[E*4]=y.x,c[E*4+1]=y.y,c[E*4+2]=y.z,c[E*4+3]=V}for(let E=0,L=M.length;E<L;++E){const F=M[E],V=F.start,C=F.count;for(let U=V,k=V+C;U<k;U+=3)S(n[U+0]),S(n[U+1]),S(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new P,r=new P,o=new P,a=new P,c=new P,l=new P,u=new P,h=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)d[m++]=l[f++]}return new ln(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new An,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gf=new Ue,Ts=new la,Fa=new pi,_f=new P,vr=new P,yr=new P,xr=new P,Zl=new P,ka=new P,Ba=new ye,Va=new ye,za=new ye,vf=new P,yf=new P,xf=new P,Ga=new P,Ha=new P;class $t extends _t{constructor(e=new An,t=new ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){ka.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Zl.fromBufferAttribute(h,e),o?ka.addScaledVector(Zl,u):ka.addScaledVector(Zl.sub(t),u))}t.add(ka)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(r),Ts.copy(e.ray).recast(e.near),!(Fa.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(Fa,_f)===null||Ts.origin.distanceToSquared(_f)>(e.far-e.near)**2))&&(gf.copy(r).invert(),Ts.copy(e.ray).applyMatrix4(gf),!(n.boundingBox!==null&&Ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ts)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),v=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let M=x,y=v;M<y;M+=3){const b=a.getX(M),w=a.getX(M+1),T=a.getX(M+2);i=Wa(this,p,e,n,l,u,h,b,w,T),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const x=a.getX(g),v=a.getX(g+1),M=a.getX(g+2);i=Wa(this,o,e,n,l,u,h,x,v,M),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),v=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let M=x,y=v;M<y;M+=3){const b=M,w=M+1,T=M+2;i=Wa(this,p,e,n,l,u,h,b,w,T),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const x=g,v=g+1,M=g+2;i=Wa(this,o,e,n,l,u,h,x,v,M),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function h0(s,e,t,n,i,r,o,a){let c;if(e.side===mn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Gi,a),c===null)return null;Ha.copy(a),Ha.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Ha);return l<t.near||l>t.far?null:{distance:l,point:Ha.clone(),object:s}}function Wa(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,vr),s.getVertexPosition(c,yr),s.getVertexPosition(l,xr);const u=h0(s,e,t,n,vr,yr,xr,Ga);if(u){i&&(Ba.fromBufferAttribute(i,a),Va.fromBufferAttribute(i,c),za.fromBufferAttribute(i,l),u.uv=zn.getInterpolation(Ga,vr,yr,xr,Ba,Va,za,new ye)),r&&(Ba.fromBufferAttribute(r,a),Va.fromBufferAttribute(r,c),za.fromBufferAttribute(r,l),u.uv1=zn.getInterpolation(Ga,vr,yr,xr,Ba,Va,za,new ye),u.uv2=u.uv1),o&&(vf.fromBufferAttribute(o,a),yf.fromBufferAttribute(o,c),xf.fromBufferAttribute(o,l),u.normal=zn.getInterpolation(Ga,vr,yr,xr,vf,yf,xf,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new P,materialIndex:0};zn.getNormal(vr,yr,xr,h.normal),u.face=h}return u}class ua extends An{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(h,2));function m(_,g,p,x,v,M,y,b,w,T,S){const E=M/w,L=y/T,F=M/2,V=y/2,C=b/2,U=w+1,k=T+1;let O=0,j=0;const B=new P;for(let X=0;X<k;X++){const R=X*L-V;for(let H=0;H<U;H++){const re=H*E-F;B[_]=re*x,B[g]=R*v,B[p]=C,l.push(B.x,B.y,B.z),B[_]=0,B[g]=0,B[p]=b>0?1:-1,u.push(B.x,B.y,B.z),h.push(H/w),h.push(1-X/T),O+=1}}for(let X=0;X<T;X++)for(let R=0;R<w;R++){const H=d+R+U*X,re=d+R+U*(X+1),ce=d+(R+1)+U*(X+1),J=d+(R+1)+U*X;c.push(H,re,J),c.push(re,ce,J),j+=6}a.addGroup(f,j,S),f+=j,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $r(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function sn(s){const e={};for(let t=0;t<s.length;t++){const n=$r(s[t]);for(const i in n)e[i]=n[i]}return e}function d0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Um(s){return s.getRenderTarget()===null?s.outputColorSpace:Ke.workingColorSpace}const ph={clone:$r,merge:sn};var f0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=f0,this.fragmentShader=p0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$r(e.uniforms),this.uniformsGroups=d0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Fm extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class rn extends Fm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(Oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Oo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Sr=-90,Mr=1;class m0 extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new rn(Sr,Mr,e,t);i.layers=this.layers,this.add(i);const r=new rn(Sr,Mr,e,t);r.layers=this.layers,this.add(r);const o=new rn(Sr,Mr,e,t);o.layers=this.layers,this.add(o);const a=new rn(Sr,Mr,e,t);a.layers=this.layers,this.add(a);const c=new rn(Sr,Mr,e,t);c.layers=this.layers,this.add(c);const l=new rn(Sr,Mr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Fi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Tc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class km extends Bt{constructor(e,t,n,i,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Hr,super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class g0 extends ls{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Fo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Hs?gt:Fn),this.texture=new km(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ua(5,5,5),r=new li({name:"CubemapFromEquirect",uniforms:$r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:ki});r.uniforms.tEquirect.value=t;const o=new $t(i,r),a=t.minFilter;return t.minFilter===$s&&(t.minFilter=hn),new m0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Ql=new P,_0=new P,v0=new We;class Rs{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ql.subVectors(n,t).cross(_0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ql),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||v0.getNormalMatrix(e),i=this.coplanarPoint(Ql).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Es=new pi,Xa=new P;class mh{constructor(e=new Rs,t=new Rs,n=new Rs,i=new Rs,r=new Rs,o=new Rs){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fi){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],d=i[7],f=i[8],m=i[9],_=i[10],g=i[11],p=i[12],x=i[13],v=i[14],M=i[15];if(n[0].setComponents(c-r,d-l,g-f,M-p).normalize(),n[1].setComponents(c+r,d+l,g+f,M+p).normalize(),n[2].setComponents(c+o,d+u,g+m,M+x).normalize(),n[3].setComponents(c-o,d-u,g-m,M-x).normalize(),n[4].setComponents(c-a,d-h,g-_,M-v).normalize(),t===Fi)n[5].setComponents(c+a,d+h,g+_,M+v).normalize();else if(t===Tc)n[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){return Es.center.set(0,0,0),Es.radius=.7071067811865476,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Xa.x=i.normal.x>0?e.max.x:e.min.x,Xa.y=i.normal.y>0?e.max.y:e.min.y,Xa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bm(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function y0(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,d=l.usage,f=s.createBuffer();s.bindBuffer(u,f),s.bufferData(u,h,d),l.onUploadCallback();let m;if(h instanceof Float32Array)m=s.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)m=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=s.SHORT;else if(h instanceof Uint32Array)m=s.UNSIGNED_INT;else if(h instanceof Int32Array)m=s.INT;else if(h instanceof Int8Array)m=s.BYTE;else if(h instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,h){const d=u.array,f=u.updateRange;s.bindBuffer(h,l),f.count===-1?s.bufferSubData(h,0,d):(t?s.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,u)):h.version<l.version&&(r(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}class al extends An{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,d=t/c,f=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const x=p*d-o;for(let v=0;v<l;v++){const M=v*h-r;m.push(M,-x,0),_.push(0,0,1),g.push(v/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){const v=x+l*p,M=x+l*(p+1),y=x+1+l*(p+1),b=x+1+l*p;f.push(v,M,b),f.push(M,y,b)}this.setIndex(f),this.setAttribute("position",new Kt(m,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.width,e.height,e.widthSegments,e.heightSegments)}}var x0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S0=`#ifdef USE_ALPHAHASH
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
#endif`,M0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,b0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,E0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,A0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,I0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,D0=`#ifdef USE_IRIDESCENCE
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
#endif`,P0=`#ifdef USE_BUMPMAP
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
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,k0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,z0=`#define PI 3.141592653589793
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
} // validated`,G0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,H0=`vec3 transformedNormal = objectNormal;
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
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,j0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y0="gl_FragColor = linearToOutputTexel( gl_FragColor );",$0=`
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
}`,K0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Q0=`#ifdef USE_ENVMAP
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
#endif`,J0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ey=`#ifdef USE_ENVMAP
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
#endif`,ty=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ny=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ry=`#ifdef USE_GRADIENTMAP
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
}`,oy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ay=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ly=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uy=`uniform bool receiveShadow;
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
#endif`,hy=`#ifdef USE_ENVMAP
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
#endif`,dy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,py=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,my=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gy=`PhysicalMaterial material;
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
#endif`,_y=`struct PhysicalMaterial {
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
}`,vy=`
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
#endif`,yy=`#if defined( RE_IndirectDiffuse )
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
#endif`,xy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,My=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,by=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ty=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ey=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ay=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cy=`#if defined( USE_POINTS_UV )
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
#endif`,Ry=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Iy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Py=`#ifdef USE_MORPHNORMALS
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
#endif`,Ny=`#ifdef USE_MORPHTARGETS
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
#endif`,Ly=`#ifdef USE_MORPHTARGETS
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
#endif`,Oy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Uy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,By=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vy=`#ifdef USE_NORMALMAP
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
#endif`,zy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$y=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ky=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ex=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nx=`float getShadowMask() {
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
}`,ix=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sx=`#ifdef USE_SKINNING
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
#endif`,rx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ox=`#ifdef USE_SKINNING
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
#endif`,ax=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ux=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hx=`#ifdef USE_TRANSMISSION
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
#endif`,dx=`#ifdef USE_TRANSMISSION
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
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _x=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vx=`uniform sampler2D t2D;
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
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bx=`#include <common>
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
}`,Tx=`#if DEPTH_PACKING == 3200
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
}`,Ex=`#define DISTANCE
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
}`,wx=`#define DISTANCE
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
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rx=`uniform float scale;
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
}`,Ix=`uniform vec3 diffuse;
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
}`,Dx=`#include <common>
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
}`,Px=`uniform vec3 diffuse;
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
}`,Nx=`#define LAMBERT
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
}`,Lx=`#define LAMBERT
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
}`,Ox=`#define MATCAP
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
}`,Ux=`#define MATCAP
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
}`,Fx=`#define NORMAL
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
}`,kx=`#define NORMAL
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
}`,Bx=`#define PHONG
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
}`,Vx=`#define PHONG
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
}`,zx=`#define STANDARD
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
}`,Gx=`#define STANDARD
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
}`,Hx=`#define TOON
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
}`,Wx=`#define TOON
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
}`,Xx=`uniform float size;
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
}`,qx=`uniform vec3 diffuse;
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
}`,jx=`#include <common>
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
}`,Yx=`uniform vec3 color;
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
}`,$x=`uniform float rotation;
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
}`,Kx=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:x0,alphahash_pars_fragment:S0,alphamap_fragment:M0,alphamap_pars_fragment:b0,alphatest_fragment:T0,alphatest_pars_fragment:E0,aomap_fragment:w0,aomap_pars_fragment:A0,begin_vertex:C0,beginnormal_vertex:R0,bsdfs:I0,iridescence_fragment:D0,bumpmap_pars_fragment:P0,clipping_planes_fragment:N0,clipping_planes_pars_fragment:L0,clipping_planes_pars_vertex:O0,clipping_planes_vertex:U0,color_fragment:F0,color_pars_fragment:k0,color_pars_vertex:B0,color_vertex:V0,common:z0,cube_uv_reflection_fragment:G0,defaultnormal_vertex:H0,displacementmap_pars_vertex:W0,displacementmap_vertex:X0,emissivemap_fragment:q0,emissivemap_pars_fragment:j0,colorspace_fragment:Y0,colorspace_pars_fragment:$0,envmap_fragment:K0,envmap_common_pars_fragment:Z0,envmap_pars_fragment:Q0,envmap_pars_vertex:J0,envmap_physical_pars_fragment:hy,envmap_vertex:ey,fog_vertex:ty,fog_pars_vertex:ny,fog_fragment:iy,fog_pars_fragment:sy,gradientmap_pars_fragment:ry,lightmap_fragment:oy,lightmap_pars_fragment:ay,lights_lambert_fragment:cy,lights_lambert_pars_fragment:ly,lights_pars_begin:uy,lights_toon_fragment:dy,lights_toon_pars_fragment:fy,lights_phong_fragment:py,lights_phong_pars_fragment:my,lights_physical_fragment:gy,lights_physical_pars_fragment:_y,lights_fragment_begin:vy,lights_fragment_maps:yy,lights_fragment_end:xy,logdepthbuf_fragment:Sy,logdepthbuf_pars_fragment:My,logdepthbuf_pars_vertex:by,logdepthbuf_vertex:Ty,map_fragment:Ey,map_pars_fragment:wy,map_particle_fragment:Ay,map_particle_pars_fragment:Cy,metalnessmap_fragment:Ry,metalnessmap_pars_fragment:Iy,morphcolor_vertex:Dy,morphnormal_vertex:Py,morphtarget_pars_vertex:Ny,morphtarget_vertex:Ly,normal_fragment_begin:Oy,normal_fragment_maps:Uy,normal_pars_fragment:Fy,normal_pars_vertex:ky,normal_vertex:By,normalmap_pars_fragment:Vy,clearcoat_normal_fragment_begin:zy,clearcoat_normal_fragment_maps:Gy,clearcoat_pars_fragment:Hy,iridescence_pars_fragment:Wy,opaque_fragment:Xy,packing:qy,premultiplied_alpha_fragment:jy,project_vertex:Yy,dithering_fragment:$y,dithering_pars_fragment:Ky,roughnessmap_fragment:Zy,roughnessmap_pars_fragment:Qy,shadowmap_pars_fragment:Jy,shadowmap_pars_vertex:ex,shadowmap_vertex:tx,shadowmask_pars_fragment:nx,skinbase_vertex:ix,skinning_pars_vertex:sx,skinning_vertex:rx,skinnormal_vertex:ox,specularmap_fragment:ax,specularmap_pars_fragment:cx,tonemapping_fragment:lx,tonemapping_pars_fragment:ux,transmission_fragment:hx,transmission_pars_fragment:dx,uv_pars_fragment:fx,uv_pars_vertex:px,uv_vertex:mx,worldpos_vertex:gx,background_vert:_x,background_frag:vx,backgroundCube_vert:yx,backgroundCube_frag:xx,cube_vert:Sx,cube_frag:Mx,depth_vert:bx,depth_frag:Tx,distanceRGBA_vert:Ex,distanceRGBA_frag:wx,equirect_vert:Ax,equirect_frag:Cx,linedashed_vert:Rx,linedashed_frag:Ix,meshbasic_vert:Dx,meshbasic_frag:Px,meshlambert_vert:Nx,meshlambert_frag:Lx,meshmatcap_vert:Ox,meshmatcap_frag:Ux,meshnormal_vert:Fx,meshnormal_frag:kx,meshphong_vert:Bx,meshphong_frag:Vx,meshphysical_vert:zx,meshphysical_frag:Gx,meshtoon_vert:Hx,meshtoon_frag:Wx,points_vert:Xx,points_frag:qx,shadow_vert:jx,shadow_frag:Yx,sprite_vert:$x,sprite_frag:Kx},he={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ii={basic:{uniforms:sn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:sn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Te(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:sn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:sn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:sn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Te(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:sn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:sn([he.points,he.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:sn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:sn([he.common,he.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:sn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:sn([he.sprite,he.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:sn([he.common,he.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:sn([he.lights,he.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};ii.physical={uniforms:sn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const qa={r:0,b:0,g:0};function Zx(s,e,t,n,i,r,o){const a=new Te(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function m(g,p){let x=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,c):v&&v.isColor&&(_(v,1),x=!0);const M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===sl)?(u===void 0&&(u=new $t(new ua(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:$r(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(y,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=Ke.getTransfer(v.colorSpace)!==ut,(h!==v||d!==v.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new $t(new al(2,2),new li({name:"BackgroundMaterial",uniforms:$r(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(v.colorSpace)!==ut,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function _(g,p){g.getRGB(qa,Um(s)),n.buffers.color.setClear(qa.r,qa.g,qa.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),c=p,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,_(a,c)},render:m}}function Qx(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=g(null);let l=c,u=!1;function h(C,U,k,O,j){let B=!1;if(o){const X=_(O,k,U);l!==X&&(l=X,f(l.object)),B=p(C,O,k,j),B&&x(C,O,k,j)}else{const X=U.wireframe===!0;(l.geometry!==O.id||l.program!==k.id||l.wireframe!==X)&&(l.geometry=O.id,l.program=k.id,l.wireframe=X,B=!0)}j!==null&&t.update(j,s.ELEMENT_ARRAY_BUFFER),(B||u)&&(u=!1,T(C,U,k,O),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(C){return n.isWebGL2?s.bindVertexArray(C):r.bindVertexArrayOES(C)}function m(C){return n.isWebGL2?s.deleteVertexArray(C):r.deleteVertexArrayOES(C)}function _(C,U,k){const O=k.wireframe===!0;let j=a[C.id];j===void 0&&(j={},a[C.id]=j);let B=j[U.id];B===void 0&&(B={},j[U.id]=B);let X=B[O];return X===void 0&&(X=g(d()),B[O]=X),X}function g(C){const U=[],k=[],O=[];for(let j=0;j<i;j++)U[j]=0,k[j]=0,O[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:O,object:C,attributes:{},index:null}}function p(C,U,k,O){const j=l.attributes,B=U.attributes;let X=0;const R=k.getAttributes();for(const H in R)if(R[H].location>=0){const ce=j[H];let J=B[H];if(J===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(J=C.instanceColor)),ce===void 0||ce.attribute!==J||J&&ce.data!==J.data)return!0;X++}return l.attributesNum!==X||l.index!==O}function x(C,U,k,O){const j={},B=U.attributes;let X=0;const R=k.getAttributes();for(const H in R)if(R[H].location>=0){let ce=B[H];ce===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(ce=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(ce=C.instanceColor));const J={};J.attribute=ce,ce&&ce.data&&(J.data=ce.data),j[H]=J,X++}l.attributes=j,l.attributesNum=X,l.index=O}function v(){const C=l.newAttributes;for(let U=0,k=C.length;U<k;U++)C[U]=0}function M(C){y(C,0)}function y(C,U){const k=l.newAttributes,O=l.enabledAttributes,j=l.attributeDivisors;k[C]=1,O[C]===0&&(s.enableVertexAttribArray(C),O[C]=1),j[C]!==U&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,U),j[C]=U)}function b(){const C=l.newAttributes,U=l.enabledAttributes;for(let k=0,O=U.length;k<O;k++)U[k]!==C[k]&&(s.disableVertexAttribArray(k),U[k]=0)}function w(C,U,k,O,j,B,X){X===!0?s.vertexAttribIPointer(C,U,k,j,B):s.vertexAttribPointer(C,U,k,O,j,B)}function T(C,U,k,O){if(n.isWebGL2===!1&&(C.isInstancedMesh||O.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const j=O.attributes,B=k.getAttributes(),X=U.defaultAttributeValues;for(const R in B){const H=B[R];if(H.location>=0){let re=j[R];if(re===void 0&&(R==="instanceMatrix"&&C.instanceMatrix&&(re=C.instanceMatrix),R==="instanceColor"&&C.instanceColor&&(re=C.instanceColor)),re!==void 0){const ce=re.normalized,J=re.itemSize,de=t.get(re);if(de===void 0)continue;const xe=de.buffer,Q=de.type,He=de.bytesPerElement,vt=n.isWebGL2===!0&&(Q===s.INT||Q===s.UNSIGNED_INT||re.gpuType===vm);if(re.isInterleavedBufferAttribute){const De=re.data,z=De.stride,Nt=re.offset;if(De.isInstancedInterleavedBuffer){for(let Ae=0;Ae<H.locationSize;Ae++)y(H.location+Ae,De.meshPerAttribute);C.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let Ae=0;Ae<H.locationSize;Ae++)M(H.location+Ae);s.bindBuffer(s.ARRAY_BUFFER,xe);for(let Ae=0;Ae<H.locationSize;Ae++)w(H.location+Ae,J/H.locationSize,Q,ce,z*He,(Nt+J/H.locationSize*Ae)*He,vt)}else{if(re.isInstancedBufferAttribute){for(let De=0;De<H.locationSize;De++)y(H.location+De,re.meshPerAttribute);C.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let De=0;De<H.locationSize;De++)M(H.location+De);s.bindBuffer(s.ARRAY_BUFFER,xe);for(let De=0;De<H.locationSize;De++)w(H.location+De,J/H.locationSize,Q,ce,J*He,J/H.locationSize*De*He,vt)}}else if(X!==void 0){const ce=X[R];if(ce!==void 0)switch(ce.length){case 2:s.vertexAttrib2fv(H.location,ce);break;case 3:s.vertexAttrib3fv(H.location,ce);break;case 4:s.vertexAttrib4fv(H.location,ce);break;default:s.vertexAttrib1fv(H.location,ce)}}}}b()}function S(){F();for(const C in a){const U=a[C];for(const k in U){const O=U[k];for(const j in O)m(O[j].object),delete O[j];delete U[k]}delete a[C]}}function E(C){if(a[C.id]===void 0)return;const U=a[C.id];for(const k in U){const O=U[k];for(const j in O)m(O[j].object),delete O[j];delete U[k]}delete a[C.id]}function L(C){for(const U in a){const k=a[U];if(k[C.id]===void 0)continue;const O=k[C.id];for(const j in O)m(O[j].object),delete O[j];delete k[C.id]}}function F(){V(),u=!0,l!==c&&(l=c,f(l.object))}function V(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:F,resetDefaultState:V,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:M,disableUnusedAttributes:b}}function Jx(s,e,t,n){const i=n.isWebGL2;let r;function o(l){r=l}function a(l,u){s.drawArrays(r,l,u),t.update(u,r,1)}function c(l,u,h){if(h===0)return;let d,f;if(i)d=s,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,l,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=c}function eS(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,M=o||e.has("OES_texture_float"),y=v&&M,b=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:y,maxSamples:b}}function tS(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Rs,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=s.get(h);if(!i||m===null||m.length===0||r&&!g)r?u(null):l();else{const x=r?0:n,v=x*4;let M=p.clippingState||null;c.value=M,M=u(m,d,v,f);for(let y=0;y!==v;++y)M[y]=t[y];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,M=f;v!==_;++v,M+=4)o.copy(h[v]).applyMatrix4(x,a),o.normal.toArray(g,M),g[M+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function nS(s){let e=new WeakMap;function t(o,a){return a===Cu?o.mapping=Hr:a===Ru&&(o.mapping=Wr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Cu||a===Ru)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new g0(c.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ha extends Fm{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Lr=4,Sf=[.125,.215,.35,.446,.526,.582],Ps=20,Jl=new ha,Mf=new Te;let eu=null;const Is=(1+Math.sqrt(5))/2,br=1/Is,bf=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Is,br),new P(0,Is,-br),new P(br,0,Is),new P(-br,0,Is),new P(Is,br,0),new P(-Is,br,0)];class Tf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){eu=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Af(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(eu),e.scissorTest=!1,ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hr||e.mapping===Wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),eu=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Xr,format:Tn,colorSpace:zt,depthBuffer:!1},i=Ef(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ef(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iS(r)),this._blurMaterial=sS(r,e,t)}return i}_compileMaterial(e){const t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,Jl)}_sceneToCubeUV(e,t,n,i){const a=new rn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Mf),u.toneMapping=os,u.autoClear=!1;const f=new ai({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),m=new $t(new ua,f);let _=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,_=!0):(f.color.copy(Mf),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):x===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const v=this._cubeSize;ja(i,x*v,p>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Hr||e.mapping===Wr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Af()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wf());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new $t(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;ja(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Jl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=bf[(i-1)%bf.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new $t(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ps-1),_=r/m,g=isFinite(r)?1+Math.floor(u*_):Ps;g>Ps&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ps}`);const p=[];let x=0;for(let w=0;w<Ps;++w){const T=w/_,S=Math.exp(-T*T/2);p.push(S),w===0?x+=S:w<g&&(x+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/x;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=m,d.mipInt.value=v-n;const M=this._sizeLods[i],y=3*M*(i>v-Lr?i-v+Lr:0),b=4*(this._cubeSize-M);ja(t,y,b,3*M,2*M),c.setRenderTarget(t),c.render(h,Jl)}}function iS(s){const e=[],t=[],n=[];let i=s;const r=s-Lr+1+Sf.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Lr?c=Sf[o-s+Lr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,_=3,g=2,p=1,x=new Float32Array(_*m*f),v=new Float32Array(g*m*f),M=new Float32Array(p*m*f);for(let b=0;b<f;b++){const w=b%3*2/3-1,T=b>2?0:-1,S=[w,T,0,w+2/3,T,0,w+2/3,T+1,0,w,T,0,w+2/3,T+1,0,w,T+1,0];x.set(S,_*m*b),v.set(d,g*m*b);const E=[b,b,b,b,b,b];M.set(E,p*m*b)}const y=new An;y.setAttribute("position",new ln(x,_)),y.setAttribute("uv",new ln(v,g)),y.setAttribute("faceIndex",new ln(M,p)),e.push(y),i>Lr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ef(s,e,t){const n=new ls(s,e,t);return n.texture.mapping=sl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ja(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function sS(s,e,t){const n=new Float32Array(Ps),i=new P(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:gh(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function wf(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gh(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Af(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function gh(){return`

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
	`}function rS(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Cu||c===Ru,u=c===Hr||c===Wr;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Tf(s)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Tf(s));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function oS(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function aS(s,e,t,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const _=d.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)e.remove(_[g])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const m in d)e.update(d[m],s.ARRAY_BUFFER);const f=h.morphAttributes;for(const m in f){const _=f[m];for(let g=0,p=_.length;g<p;g++)e.update(_[g],s.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,m=h.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let v=0,M=x.length;v<M;v+=3){const y=x[v+0],b=x[v+1],w=x[v+2];d.push(y,b,b,w,w,y)}}else if(m!==void 0){const x=m.array;_=m.version;for(let v=0,M=x.length/3-1;v<M;v+=3){const y=v+0,b=v+1,w=v+2;d.push(y,b,b,w,w,y)}}else return;const g=new(Rm(d)?Om:Lm)(d,1);g.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,g)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function cS(s,e,t,n){const i=n.isWebGL2;let r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,f){s.drawElements(r,f,a,d*c),t.update(f,r,1)}function h(d,f,m){if(m===0)return;let _,g;if(i)_=s,g="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[g](r,f,a,d*c,m),t.update(f,r,m)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function lS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function uS(s,e){return s[0]-e[0]}function hS(s,e){return Math.abs(e[1])-Math.abs(s[1])}function dS(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new ct,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=f!==void 0?f.length:0;let _=r.get(u);if(_===void 0||_.count!==m){let C=function(){F.dispose(),r.delete(u),u.removeEventListener("dispose",C)};_!==void 0&&_.texture.dispose();const x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let T=0;x===!0&&(T=1),v===!0&&(T=2),M===!0&&(T=3);let S=u.attributes.position.count*T,E=1;S>e.maxTextureSize&&(E=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const L=new Float32Array(S*E*4*m),F=new Pm(L,S,E,m);F.type=oi,F.needsUpdate=!0;const V=T*4;for(let U=0;U<m;U++){const k=y[U],O=b[U],j=w[U],B=S*E*4*U;for(let X=0;X<k.count;X++){const R=X*V;x===!0&&(o.fromBufferAttribute(k,X),L[B+R+0]=o.x,L[B+R+1]=o.y,L[B+R+2]=o.z,L[B+R+3]=0),v===!0&&(o.fromBufferAttribute(O,X),L[B+R+4]=o.x,L[B+R+5]=o.y,L[B+R+6]=o.z,L[B+R+7]=0),M===!0&&(o.fromBufferAttribute(j,X),L[B+R+8]=o.x,L[B+R+9]=o.y,L[B+R+10]=o.z,L[B+R+11]=j.itemSize===4?o.w:1)}}_={count:m,texture:F,size:new ye(S,E)},r.set(u,_),u.addEventListener("dispose",C)}let g=0;for(let x=0;x<d.length;x++)g+=d[x];const p=u.morphTargetsRelative?1:1-g;h.getUniforms().setValue(s,"morphTargetBaseInfluence",p),h.getUniforms().setValue(s,"morphTargetInfluences",d),h.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const f=d===void 0?0:d.length;let m=n[u.id];if(m===void 0||m.length!==f){m=[];for(let v=0;v<f;v++)m[v]=[v,0];n[u.id]=m}for(let v=0;v<f;v++){const M=m[v];M[0]=v,M[1]=d[v]}m.sort(hS);for(let v=0;v<8;v++)v<f&&m[v][1]?(a[v][0]=m[v][0],a[v][1]=m[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(uS);const _=u.morphAttributes.position,g=u.morphAttributes.normal;let p=0;for(let v=0;v<8;v++){const M=a[v],y=M[0],b=M[1];y!==Number.MAX_SAFE_INTEGER&&b?(_&&u.getAttribute("morphTarget"+v)!==_[y]&&u.setAttribute("morphTarget"+v,_[y]),g&&u.getAttribute("morphNormal"+v)!==g[y]&&u.setAttribute("morphNormal"+v,g[y]),i[v]=b,p+=b):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),g&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const x=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(s,"morphTargetBaseInfluence",x),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function fS(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const Vm=new Bt,zm=new Pm,Gm=new e0,Hm=new km,Cf=[],Rf=[],If=new Float32Array(16),Df=new Float32Array(9),Pf=new Float32Array(4);function lo(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Cf[i];if(r===void 0&&(r=new Float32Array(i),Cf[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function It(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Dt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function cl(s,e){let t=Rf[e];t===void 0&&(t=new Int32Array(e),Rf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function pS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function mS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2fv(this.addr,e),Dt(t,e)}}function gS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;s.uniform3fv(this.addr,e),Dt(t,e)}}function _S(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4fv(this.addr,e),Dt(t,e)}}function vS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;Pf.set(n),s.uniformMatrix2fv(this.addr,!1,Pf),Dt(t,n)}}function yS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;Df.set(n),s.uniformMatrix3fv(this.addr,!1,Df),Dt(t,n)}}function xS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;If.set(n),s.uniformMatrix4fv(this.addr,!1,If),Dt(t,n)}}function SS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function MS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2iv(this.addr,e),Dt(t,e)}}function bS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3iv(this.addr,e),Dt(t,e)}}function TS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4iv(this.addr,e),Dt(t,e)}}function ES(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function wS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2uiv(this.addr,e),Dt(t,e)}}function AS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3uiv(this.addr,e),Dt(t,e)}}function CS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4uiv(this.addr,e),Dt(t,e)}}function RS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Vm,i)}function IS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Gm,i)}function DS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Hm,i)}function PS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||zm,i)}function NS(s){switch(s){case 5126:return pS;case 35664:return mS;case 35665:return gS;case 35666:return _S;case 35674:return vS;case 35675:return yS;case 35676:return xS;case 5124:case 35670:return SS;case 35667:case 35671:return MS;case 35668:case 35672:return bS;case 35669:case 35673:return TS;case 5125:return ES;case 36294:return wS;case 36295:return AS;case 36296:return CS;case 35678:case 36198:case 36298:case 36306:case 35682:return RS;case 35679:case 36299:case 36307:return IS;case 35680:case 36300:case 36308:case 36293:return DS;case 36289:case 36303:case 36311:case 36292:return PS}}function LS(s,e){s.uniform1fv(this.addr,e)}function OS(s,e){const t=lo(e,this.size,2);s.uniform2fv(this.addr,t)}function US(s,e){const t=lo(e,this.size,3);s.uniform3fv(this.addr,t)}function FS(s,e){const t=lo(e,this.size,4);s.uniform4fv(this.addr,t)}function kS(s,e){const t=lo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function BS(s,e){const t=lo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function VS(s,e){const t=lo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function zS(s,e){s.uniform1iv(this.addr,e)}function GS(s,e){s.uniform2iv(this.addr,e)}function HS(s,e){s.uniform3iv(this.addr,e)}function WS(s,e){s.uniform4iv(this.addr,e)}function XS(s,e){s.uniform1uiv(this.addr,e)}function qS(s,e){s.uniform2uiv(this.addr,e)}function jS(s,e){s.uniform3uiv(this.addr,e)}function YS(s,e){s.uniform4uiv(this.addr,e)}function $S(s,e,t){const n=this.cache,i=e.length,r=cl(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Vm,r[o])}function KS(s,e,t){const n=this.cache,i=e.length,r=cl(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Gm,r[o])}function ZS(s,e,t){const n=this.cache,i=e.length,r=cl(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Hm,r[o])}function QS(s,e,t){const n=this.cache,i=e.length,r=cl(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||zm,r[o])}function JS(s){switch(s){case 5126:return LS;case 35664:return OS;case 35665:return US;case 35666:return FS;case 35674:return kS;case 35675:return BS;case 35676:return VS;case 5124:case 35670:return zS;case 35667:case 35671:return GS;case 35668:case 35672:return HS;case 35669:case 35673:return WS;case 5125:return XS;case 36294:return qS;case 36295:return jS;case 36296:return YS;case 35678:case 36198:case 36298:case 36306:case 35682:return $S;case 35679:case 36299:case 36307:return KS;case 35680:case 36300:case 36308:case 36293:return ZS;case 36289:case 36303:case 36311:case 36292:return QS}}class eM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=NS(t.type)}}class tM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=JS(t.type)}}class nM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const tu=/(\w+)(\])?(\[|\.)?/g;function Nf(s,e){s.seq.push(e),s.map[e.id]=e}function iM(s,e,t){const n=s.name,i=n.length;for(tu.lastIndex=0;;){const r=tu.exec(n),o=tu.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Nf(t,l===void 0?new eM(a,s,e):new tM(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new nM(a),Nf(t,h)),t=h}}}class pc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);iM(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Lf(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let sM=0;function rM(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function oM(s){const e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(s);let n;switch(e===t?n="":e===bc&&t===Mc?n="LinearDisplayP3ToLinearSRGB":e===Mc&&t===bc&&(n="LinearSRGBToLinearDisplayP3"),s){case zt:case rl:return[n,"LinearTransferOETF"];case gt:case uh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Of(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+rM(s.getShaderSource(e),o)}else return i}function aM(s,e){const t=oM(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function cM(s,e){let t;switch(e){case dm:t="Linear";break;case fm:t="Reinhard";break;case pm:t="OptimizedCineon";break;case mm:t="ACESFilmic";break;case hv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function lM(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Do).join(`
`)}function uM(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hM(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Do(s){return s!==""}function Uf(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ff(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ou(s){return s.replace(dM,pM)}const fM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function pM(s,e){let t=Be[e];if(t===void 0){const n=fM.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ou(t)}const mM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kf(s){return s.replace(mM,gM)}function gM(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Bf(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _M(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===cm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===lm?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function vM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Hr:case Wr:e="ENVMAP_TYPE_CUBE";break;case sl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Wr:e="ENVMAP_MODE_REFRACTION";break}return e}function xM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case oh:e="ENVMAP_BLENDING_MULTIPLY";break;case lv:e="ENVMAP_BLENDING_MIX";break;case uv:e="ENVMAP_BLENDING_ADD";break}return e}function SM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function MM(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=_M(t),l=vM(t),u=yM(t),h=xM(t),d=SM(t),f=t.isWebGL2?"":lM(t),m=uM(r),_=i.createProgram();let g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Do).join(`
`),g.length>0&&(g+=`
`),p=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Do).join(`
`),p.length>0&&(p+=`
`)):(g=[Bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),p=[f,Bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==os?"#define TONE_MAPPING":"",t.toneMapping!==os?Be.tonemapping_pars_fragment:"",t.toneMapping!==os?cM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,aM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Do).join(`
`)),o=Ou(o),o=Uf(o,t),o=Ff(o,t),a=Ou(a),a=Uf(a,t),a=Ff(a,t),o=kf(o),a=kf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===nf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=x+g+o,M=x+p+a,y=Lf(i,i.VERTEX_SHADER,v),b=Lf(i,i.FRAGMENT_SHADER,M);if(i.attachShader(_,y),i.attachShader(_,b),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),s.debug.checkShaderErrors){const S=i.getProgramInfoLog(_).trim(),E=i.getShaderInfoLog(y).trim(),L=i.getShaderInfoLog(b).trim();let F=!0,V=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,y,b);else{const C=Of(i,y,"vertex"),U=Of(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+C+`
`+U)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(E===""||L==="")&&(V=!1);V&&(this.diagnostics={runnable:F,programLog:S,vertexShader:{log:E,prefix:g},fragmentShader:{log:L,prefix:p}})}i.deleteShader(y),i.deleteShader(b);let w;this.getUniforms=function(){return w===void 0&&(w=new pc(i,_)),w};let T;return this.getAttributes=function(){return T===void 0&&(T=hM(i,_)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=b,this}let bM=0;class TM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new EM(e),t.set(e,n)),n}}class EM{constructor(e){this.id=bM++,this.code=e,this.usedTimes=0}}function wM(s,e,t,n,i,r,o){const a=new fh,c=new TM,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function g(S,E,L,F,V){const C=F.fog,U=V.geometry,k=S.isMeshStandardMaterial?F.environment:null,O=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),j=O&&O.mapping===sl?O.image.height:null,B=m[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const X=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,R=X!==void 0?X.length:0;let H=0;U.morphAttributes.position!==void 0&&(H=1),U.morphAttributes.normal!==void 0&&(H=2),U.morphAttributes.color!==void 0&&(H=3);let re,ce,J,de;if(B){const ft=ii[B];re=ft.vertexShader,ce=ft.fragmentShader}else re=S.vertexShader,ce=S.fragmentShader,c.update(S),J=c.getVertexShaderID(S),de=c.getFragmentShaderID(S);const xe=s.getRenderTarget(),Q=V.isInstancedMesh===!0,He=!!S.map,vt=!!S.matcap,De=!!O,z=!!S.aoMap,Nt=!!S.lightMap,Ae=!!S.bumpMap,K=!!S.normalMap,te=!!S.displacementMap,Fe=!!S.emissiveMap,ve=!!S.metalnessMap,pe=!!S.roughnessMap,Ee=S.anisotropy>0,Je=S.clearcoat>0,dt=S.iridescence>0,D=S.sheen>0,A=S.transmission>0,q=Ee&&!!S.anisotropyMap,ie=Je&&!!S.clearcoatMap,ne=Je&&!!S.clearcoatNormalMap,oe=Je&&!!S.clearcoatRoughnessMap,Me=dt&&!!S.iridescenceMap,ue=dt&&!!S.iridescenceThicknessMap,me=D&&!!S.sheenColorMap,Pe=D&&!!S.sheenRoughnessMap,$e=!!S.specularMap,se=!!S.specularColorMap,it=!!S.specularIntensityMap,ke=A&&!!S.transmissionMap,Ne=A&&!!S.thicknessMap,Ce=!!S.gradientMap,N=!!S.alphaMap,le=S.alphaTest>0,ae=!!S.alphaHash,ge=!!S.extensions,fe=!!U.attributes.uv1,ee=!!U.attributes.uv2,be=!!U.attributes.uv3;let Ve=os;return S.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Ve=s.toneMapping),{isWebGL2:u,shaderID:B,shaderType:S.type,shaderName:S.name,vertexShader:re,fragmentShader:ce,defines:S.defines,customVertexShaderID:J,customFragmentShaderID:de,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,instancing:Q,instancingColor:Q&&V.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:zt,map:He,matcap:vt,envMap:De,envMapMode:De&&O.mapping,envMapCubeUVHeight:j,aoMap:z,lightMap:Nt,bumpMap:Ae,normalMap:K,displacementMap:d&&te,emissiveMap:Fe,normalMapObjectSpace:K&&S.normalMapType===wv,normalMapTangentSpace:K&&S.normalMapType===lh,metalnessMap:ve,roughnessMap:pe,anisotropy:Ee,anisotropyMap:q,clearcoat:Je,clearcoatMap:ie,clearcoatNormalMap:ne,clearcoatRoughnessMap:oe,iridescence:dt,iridescenceMap:Me,iridescenceThicknessMap:ue,sheen:D,sheenColorMap:me,sheenRoughnessMap:Pe,specularMap:$e,specularColorMap:se,specularIntensityMap:it,transmission:A,transmissionMap:ke,thicknessMap:Ne,gradientMap:Ce,opaque:S.transparent===!1&&S.blending===Fr,alphaMap:N,alphaTest:le,alphaHash:ae,combine:S.combine,mapUv:He&&_(S.map.channel),aoMapUv:z&&_(S.aoMap.channel),lightMapUv:Nt&&_(S.lightMap.channel),bumpMapUv:Ae&&_(S.bumpMap.channel),normalMapUv:K&&_(S.normalMap.channel),displacementMapUv:te&&_(S.displacementMap.channel),emissiveMapUv:Fe&&_(S.emissiveMap.channel),metalnessMapUv:ve&&_(S.metalnessMap.channel),roughnessMapUv:pe&&_(S.roughnessMap.channel),anisotropyMapUv:q&&_(S.anisotropyMap.channel),clearcoatMapUv:ie&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:me&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&_(S.sheenRoughnessMap.channel),specularMapUv:$e&&_(S.specularMap.channel),specularColorMapUv:se&&_(S.specularColorMap.channel),specularIntensityMapUv:it&&_(S.specularIntensityMap.channel),transmissionMapUv:ke&&_(S.transmissionMap.channel),thicknessMapUv:Ne&&_(S.thicknessMap.channel),alphaMapUv:N&&_(S.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(K||Ee),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:fe,vertexUv2s:ee,vertexUv3s:be,pointsUvs:V.isPoints===!0&&!!U.attributes.uv&&(He||N),fog:!!C,useFog:S.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:V.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:R,morphTextureStride:H,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ve,useLegacyLights:s._useLegacyLights,decodeVideoTexture:He&&S.map.isVideoTexture===!0&&Ke.getTransfer(S.map.colorSpace)===ut,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===bn,flipSided:S.side===mn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ge&&S.extensions.derivatives===!0,extensionFragDepth:ge&&S.extensions.fragDepth===!0,extensionDrawBuffers:ge&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)E.push(L),E.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(x(E,S),v(E,S),E.push(s.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function x(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function v(S,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function M(S){const E=m[S.type];let L;if(E){const F=ii[E];L=ph.clone(F.uniforms)}else L=S.uniforms;return L}function y(S,E){let L;for(let F=0,V=l.length;F<V;F++){const C=l[F];if(C.cacheKey===E){L=C,++L.usedTimes;break}}return L===void 0&&(L=new MM(s,E,S,r),l.push(L)),L}function b(S){if(--S.usedTimes===0){const E=l.indexOf(S);l[E]=l[l.length-1],l.pop(),S.destroy()}}function w(S){c.remove(S)}function T(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:M,acquireProgram:y,releaseProgram:b,releaseShaderCache:w,programs:l,dispose:T}}function AM(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function CM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Vf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function zf(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,m,_,g){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},s[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=g),e++,p}function a(h,d,f,m,_,g){const p=o(h,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(h,d,f,m,_,g){const p=o(h,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||CM),n.length>1&&n.sort(d||Vf),i.length>1&&i.sort(d||Vf)}function u(){for(let h=e,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function RM(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new zf,s.set(n,[o])):i>=r.length?(o=new zf,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function IM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Te};break;case"SpotLight":t={position:new P,direction:new P,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function DM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let PM=0;function NM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function LM(s,e){const t=new IM,n=DM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new P);const r=new P,o=new Ue,a=new Ue;function c(u,h){let d=0,f=0,m=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let _=0,g=0,p=0,x=0,v=0,M=0,y=0,b=0,w=0,T=0,S=0;u.sort(NM);const E=h===!0?Math.PI:1;for(let F=0,V=u.length;F<V;F++){const C=u[F],U=C.color,k=C.intensity,O=C.distance,j=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=U.r*k*E,f+=U.g*k*E,m+=U.b*k*E;else if(C.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(C.sh.coefficients[B],k);S++}else if(C.isDirectionalLight){const B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity*E),C.castShadow){const X=C.shadow,R=n.get(C);R.shadowBias=X.bias,R.shadowNormalBias=X.normalBias,R.shadowRadius=X.radius,R.shadowMapSize=X.mapSize,i.directionalShadow[_]=R,i.directionalShadowMap[_]=j,i.directionalShadowMatrix[_]=C.shadow.matrix,M++}i.directional[_]=B,_++}else if(C.isSpotLight){const B=t.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(U).multiplyScalar(k*E),B.distance=O,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,i.spot[p]=B;const X=C.shadow;if(C.map&&(i.spotLightMap[w]=C.map,w++,X.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[p]=X.matrix,C.castShadow){const R=n.get(C);R.shadowBias=X.bias,R.shadowNormalBias=X.normalBias,R.shadowRadius=X.radius,R.shadowMapSize=X.mapSize,i.spotShadow[p]=R,i.spotShadowMap[p]=j,b++}p++}else if(C.isRectAreaLight){const B=t.get(C);B.color.copy(U).multiplyScalar(k),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),i.rectArea[x]=B,x++}else if(C.isPointLight){const B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity*E),B.distance=C.distance,B.decay=C.decay,C.castShadow){const X=C.shadow,R=n.get(C);R.shadowBias=X.bias,R.shadowNormalBias=X.normalBias,R.shadowRadius=X.radius,R.shadowMapSize=X.mapSize,R.shadowCameraNear=X.camera.near,R.shadowCameraFar=X.camera.far,i.pointShadow[g]=R,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=C.shadow.matrix,y++}i.point[g]=B,g++}else if(C.isHemisphereLight){const B=t.get(C);B.skyColor.copy(C.color).multiplyScalar(k*E),B.groundColor.copy(C.groundColor).multiplyScalar(k*E),i.hemi[v]=B,v++}}x>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=m;const L=i.hash;(L.directionalLength!==_||L.pointLength!==g||L.spotLength!==p||L.rectAreaLength!==x||L.hemiLength!==v||L.numDirectionalShadows!==M||L.numPointShadows!==y||L.numSpotShadows!==b||L.numSpotMaps!==w||L.numLightProbes!==S)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=x,i.point.length=g,i.hemi.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=b+w-T,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=S,L.directionalLength=_,L.pointLength=g,L.spotLength=p,L.rectAreaLength=x,L.hemiLength=v,L.numDirectionalShadows=M,L.numPointShadows=y,L.numSpotShadows=b,L.numSpotMaps=w,L.numLightProbes=S,i.version=PM++)}function l(u,h){let d=0,f=0,m=0,_=0,g=0;const p=h.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const M=u[x];if(M.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),d++}else if(M.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),m++}else if(M.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const y=i.hemi[g];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(p),g++}}}return{setup:c,setupView:l,state:i}}function Gf(s,e){const t=new LM(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function OM(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new Gf(s,e),t.set(r,[c])):o>=a.length?(c=new Gf(s,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class UM extends jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class FM extends jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BM=`uniform sampler2D shadow_pass;
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
}`;function VM(s,e,t){let n=new mh;const i=new ye,r=new ye,o=new ct,a=new UM({depthPacking:Ev}),c=new FM,l={},u=t.maxTextureSize,h={[Gi]:mn,[mn]:Gi,[bn]:bn},d=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:kM,fragmentShader:BM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new An;m.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $t(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cm;let p=this.type;this.render=function(y,b,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;const T=s.getRenderTarget(),S=s.getActiveCubeFace(),E=s.getActiveMipmapLevel(),L=s.state;L.setBlending(ki),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const F=p!==Pi&&this.type===Pi,V=p===Pi&&this.type!==Pi;for(let C=0,U=y.length;C<U;C++){const k=y[C],O=k.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const j=O.getFrameExtents();if(i.multiply(j),r.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/j.x),i.x=r.x*j.x,O.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/j.y),i.y=r.y*j.y,O.mapSize.y=r.y)),O.map===null||F===!0||V===!0){const X=this.type!==Pi?{minFilter:Rt,magFilter:Rt}:{};O.map!==null&&O.map.dispose(),O.map=new ls(i.x,i.y,X),O.map.texture.name=k.name+".shadowMap",O.camera.updateProjectionMatrix()}s.setRenderTarget(O.map),s.clear();const B=O.getViewportCount();for(let X=0;X<B;X++){const R=O.getViewport(X);o.set(r.x*R.x,r.y*R.y,r.x*R.z,r.y*R.w),L.viewport(o),O.updateMatrices(k,X),n=O.getFrustum(),M(b,w,O.camera,k,this.type)}O.isPointLightShadow!==!0&&this.type===Pi&&x(O,w),O.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(T,S,E)};function x(y,b){const w=e.update(_);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new ls(i.x,i.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(b,null,w,d,_,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(b,null,w,f,_,null)}function v(y,b,w,T){let S=null;const E=w.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(E!==void 0)S=E;else if(S=w.isPointLight===!0?c:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const L=S.uuid,F=b.uuid;let V=l[L];V===void 0&&(V={},l[L]=V);let C=V[F];C===void 0&&(C=S.clone(),V[F]=C),S=C}if(S.visible=b.visible,S.wireframe=b.wireframe,T===Pi?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:h[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,w.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const L=s.properties.get(S);L.light=w}return S}function M(y,b,w,T,S){if(y.visible===!1)return;if(y.layers.test(b.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&S===Pi)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,y.matrixWorld);const F=e.update(y),V=y.material;if(Array.isArray(V)){const C=F.groups;for(let U=0,k=C.length;U<k;U++){const O=C[U],j=V[O.materialIndex];if(j&&j.visible){const B=v(y,j,T,S);s.renderBufferDirect(w,null,F,B,y,O)}}}else if(V.visible){const C=v(y,V,T,S);s.renderBufferDirect(w,null,F,C,y,null)}}const L=y.children;for(let F=0,V=L.length;F<V;F++)M(L[F],b,w,T,S)}}function zM(s,e,t){const n=t.isWebGL2;function i(){let N=!1;const le=new ct;let ae=null;const ge=new ct(0,0,0,0);return{setMask:function(fe){ae!==fe&&!N&&(s.colorMask(fe,fe,fe,fe),ae=fe)},setLocked:function(fe){N=fe},setClear:function(fe,ee,be,Ve,Jt){Jt===!0&&(fe*=Ve,ee*=Ve,be*=Ve),le.set(fe,ee,be,Ve),ge.equals(le)===!1&&(s.clearColor(fe,ee,be,Ve),ge.copy(le))},reset:function(){N=!1,ae=null,ge.set(-1,0,0,0)}}}function r(){let N=!1,le=null,ae=null,ge=null;return{setTest:function(fe){fe?xe(s.DEPTH_TEST):Q(s.DEPTH_TEST)},setMask:function(fe){le!==fe&&!N&&(s.depthMask(fe),le=fe)},setFunc:function(fe){if(ae!==fe){switch(fe){case nv:s.depthFunc(s.NEVER);break;case iv:s.depthFunc(s.ALWAYS);break;case sv:s.depthFunc(s.LESS);break;case Au:s.depthFunc(s.LEQUAL);break;case rv:s.depthFunc(s.EQUAL);break;case ov:s.depthFunc(s.GEQUAL);break;case av:s.depthFunc(s.GREATER);break;case cv:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ae=fe}},setLocked:function(fe){N=fe},setClear:function(fe){ge!==fe&&(s.clearDepth(fe),ge=fe)},reset:function(){N=!1,le=null,ae=null,ge=null}}}function o(){let N=!1,le=null,ae=null,ge=null,fe=null,ee=null,be=null,Ve=null,Jt=null;return{setTest:function(ft){N||(ft?xe(s.STENCIL_TEST):Q(s.STENCIL_TEST))},setMask:function(ft){le!==ft&&!N&&(s.stencilMask(ft),le=ft)},setFunc:function(ft,ti,en){(ae!==ft||ge!==ti||fe!==en)&&(s.stencilFunc(ft,ti,en),ae=ft,ge=ti,fe=en)},setOp:function(ft,ti,en){(ee!==ft||be!==ti||Ve!==en)&&(s.stencilOp(ft,ti,en),ee=ft,be=ti,Ve=en)},setLocked:function(ft){N=ft},setClear:function(ft){Jt!==ft&&(s.clearStencil(ft),Jt=ft)},reset:function(){N=!1,le=null,ae=null,ge=null,fe=null,ee=null,be=null,Ve=null,Jt=null}}}const a=new i,c=new r,l=new o,u=new WeakMap,h=new WeakMap;let d={},f={},m=new WeakMap,_=[],g=null,p=!1,x=null,v=null,M=null,y=null,b=null,w=null,T=null,S=!1,E=null,L=null,F=null,V=null,C=null;const U=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,O=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(j)[1]),k=O>=1):j.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),k=O>=2);let B=null,X={};const R=s.getParameter(s.SCISSOR_BOX),H=s.getParameter(s.VIEWPORT),re=new ct().fromArray(R),ce=new ct().fromArray(H);function J(N,le,ae,ge){const fe=new Uint8Array(4),ee=s.createTexture();s.bindTexture(N,ee),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let be=0;be<ae;be++)n&&(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)?s.texImage3D(le,0,s.RGBA,1,1,ge,0,s.RGBA,s.UNSIGNED_BYTE,fe):s.texImage2D(le+be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,fe);return ee}const de={};de[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),de[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(de[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),de[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),xe(s.DEPTH_TEST),c.setFunc(Au),te(!1),Fe(wd),xe(s.CULL_FACE),Ae(ki);function xe(N){d[N]!==!0&&(s.enable(N),d[N]=!0)}function Q(N){d[N]!==!1&&(s.disable(N),d[N]=!1)}function He(N,le){return f[N]!==le?(s.bindFramebuffer(N,le),f[N]=le,n&&(N===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=le),N===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=le)),!0):!1}function vt(N,le){let ae=_,ge=!1;if(N)if(ae=m.get(le),ae===void 0&&(ae=[],m.set(le,ae)),N.isWebGLMultipleRenderTargets){const fe=N.texture;if(ae.length!==fe.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let ee=0,be=fe.length;ee<be;ee++)ae[ee]=s.COLOR_ATTACHMENT0+ee;ae.length=fe.length,ge=!0}}else ae[0]!==s.COLOR_ATTACHMENT0&&(ae[0]=s.COLOR_ATTACHMENT0,ge=!0);else ae[0]!==s.BACK&&(ae[0]=s.BACK,ge=!0);ge&&(t.isWebGL2?s.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function De(N){return g!==N?(s.useProgram(N),g=N,!0):!1}const z={[Cr]:s.FUNC_ADD,[X_]:s.FUNC_SUBTRACT,[q_]:s.FUNC_REVERSE_SUBTRACT};if(n)z[Rd]=s.MIN,z[Id]=s.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(z[Rd]=N.MIN_EXT,z[Id]=N.MAX_EXT)}const Nt={[j_]:s.ZERO,[Y_]:s.ONE,[$_]:s.SRC_COLOR,[um]:s.SRC_ALPHA,[tv]:s.SRC_ALPHA_SATURATE,[J_]:s.DST_COLOR,[Z_]:s.DST_ALPHA,[K_]:s.ONE_MINUS_SRC_COLOR,[hm]:s.ONE_MINUS_SRC_ALPHA,[ev]:s.ONE_MINUS_DST_COLOR,[Q_]:s.ONE_MINUS_DST_ALPHA};function Ae(N,le,ae,ge,fe,ee,be,Ve){if(N===ki){p===!0&&(Q(s.BLEND),p=!1);return}if(p===!1&&(xe(s.BLEND),p=!0),N!==W_){if(N!==x||Ve!==S){if((v!==Cr||b!==Cr)&&(s.blendEquation(s.FUNC_ADD),v=Cr,b=Cr),Ve)switch(N){case Fr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lo:s.blendFunc(s.ONE,s.ONE);break;case Ad:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Cd:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Fr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ad:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Cd:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,y=null,w=null,T=null,x=N,S=Ve}return}fe=fe||le,ee=ee||ae,be=be||ge,(le!==v||fe!==b)&&(s.blendEquationSeparate(z[le],z[fe]),v=le,b=fe),(ae!==M||ge!==y||ee!==w||be!==T)&&(s.blendFuncSeparate(Nt[ae],Nt[ge],Nt[ee],Nt[be]),M=ae,y=ge,w=ee,T=be),x=N,S=!1}function K(N,le){N.side===bn?Q(s.CULL_FACE):xe(s.CULL_FACE);let ae=N.side===mn;le&&(ae=!ae),te(ae),N.blending===Fr&&N.transparent===!1?Ae(ki):Ae(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),c.setFunc(N.depthFunc),c.setTest(N.depthTest),c.setMask(N.depthWrite),a.setMask(N.colorWrite);const ge=N.stencilWrite;l.setTest(ge),ge&&(l.setMask(N.stencilWriteMask),l.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),l.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),pe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):Q(s.SAMPLE_ALPHA_TO_COVERAGE)}function te(N){E!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),E=N)}function Fe(N){N!==G_?(xe(s.CULL_FACE),N!==L&&(N===wd?s.cullFace(s.BACK):N===H_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Q(s.CULL_FACE),L=N}function ve(N){N!==F&&(k&&s.lineWidth(N),F=N)}function pe(N,le,ae){N?(xe(s.POLYGON_OFFSET_FILL),(V!==le||C!==ae)&&(s.polygonOffset(le,ae),V=le,C=ae)):Q(s.POLYGON_OFFSET_FILL)}function Ee(N){N?xe(s.SCISSOR_TEST):Q(s.SCISSOR_TEST)}function Je(N){N===void 0&&(N=s.TEXTURE0+U-1),B!==N&&(s.activeTexture(N),B=N)}function dt(N,le,ae){ae===void 0&&(B===null?ae=s.TEXTURE0+U-1:ae=B);let ge=X[ae];ge===void 0&&(ge={type:void 0,texture:void 0},X[ae]=ge),(ge.type!==N||ge.texture!==le)&&(B!==ae&&(s.activeTexture(ae),B=ae),s.bindTexture(N,le||de[N]),ge.type=N,ge.texture=le)}function D(){const N=X[B];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function A(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $e(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(N){re.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),re.copy(N))}function it(N){ce.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),ce.copy(N))}function ke(N,le){let ae=h.get(le);ae===void 0&&(ae=new WeakMap,h.set(le,ae));let ge=ae.get(N);ge===void 0&&(ge=s.getUniformBlockIndex(le,N.name),ae.set(N,ge))}function Ne(N,le){const ge=h.get(le).get(N);u.get(le)!==ge&&(s.uniformBlockBinding(le,ge,N.__bindingPointIndex),u.set(le,ge))}function Ce(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},B=null,X={},f={},m=new WeakMap,_=[],g=null,p=!1,x=null,v=null,M=null,y=null,b=null,w=null,T=null,S=!1,E=null,L=null,F=null,V=null,C=null,re.set(0,0,s.canvas.width,s.canvas.height),ce.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:xe,disable:Q,bindFramebuffer:He,drawBuffers:vt,useProgram:De,setBlending:Ae,setMaterial:K,setFlipSided:te,setCullFace:Fe,setLineWidth:ve,setPolygonOffset:pe,setScissorTest:Ee,activeTexture:Je,bindTexture:dt,unbindTexture:D,compressedTexImage2D:A,compressedTexImage3D:q,texImage2D:Pe,texImage3D:$e,updateUBOMapping:ke,uniformBlockBinding:Ne,texStorage2D:ue,texStorage3D:me,texSubImage2D:ie,texSubImage3D:ne,compressedTexSubImage2D:oe,compressedTexSubImage3D:Me,scissor:se,viewport:it,reset:Ce}}function GM(s,e,t,n,i,r,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let _;const g=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,A){return p?new OffscreenCanvas(D,A):Ho("canvas")}function v(D,A,q,ie){let ne=1;if((D.width>ie||D.height>ie)&&(ne=ie/Math.max(D.width,D.height)),ne<1||A===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){const oe=A?Ec:Math.floor,Me=oe(ne*D.width),ue=oe(ne*D.height);_===void 0&&(_=x(Me,ue));const me=q?x(Me,ue):_;return me.width=Me,me.height=ue,me.getContext("2d").drawImage(D,0,0,Me,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+Me+"x"+ue+")."),me}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function M(D){return Lu(D.width)&&Lu(D.height)}function y(D){return a?!1:D.wrapS!==Un||D.wrapT!==Un||D.minFilter!==Rt&&D.minFilter!==hn}function b(D,A){return D.generateMipmaps&&A&&D.minFilter!==Rt&&D.minFilter!==hn}function w(D){s.generateMipmap(D)}function T(D,A,q,ie,ne=!1){if(a===!1)return A;if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let oe=A;if(A===s.RED&&(q===s.FLOAT&&(oe=s.R32F),q===s.HALF_FLOAT&&(oe=s.R16F),q===s.UNSIGNED_BYTE&&(oe=s.R8)),A===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(oe=s.R8UI),q===s.UNSIGNED_SHORT&&(oe=s.R16UI),q===s.UNSIGNED_INT&&(oe=s.R32UI),q===s.BYTE&&(oe=s.R8I),q===s.SHORT&&(oe=s.R16I),q===s.INT&&(oe=s.R32I)),A===s.RG&&(q===s.FLOAT&&(oe=s.RG32F),q===s.HALF_FLOAT&&(oe=s.RG16F),q===s.UNSIGNED_BYTE&&(oe=s.RG8)),A===s.RGBA){const Me=ne?Sc:Ke.getTransfer(ie);q===s.FLOAT&&(oe=s.RGBA32F),q===s.HALF_FLOAT&&(oe=s.RGBA16F),q===s.UNSIGNED_BYTE&&(oe=Me===ut?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(oe=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(oe=s.RGB5_A1)}return(oe===s.R16F||oe===s.R32F||oe===s.RG16F||oe===s.RG32F||oe===s.RGBA16F||oe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function S(D,A,q){return b(D,q)===!0||D.isFramebufferTexture&&D.minFilter!==Rt&&D.minFilter!==hn?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function E(D){return D===Rt||D===Iu||D===fc?s.NEAREST:s.LINEAR}function L(D){const A=D.target;A.removeEventListener("dispose",L),V(A),A.isVideoTexture&&m.delete(A)}function F(D){const A=D.target;A.removeEventListener("dispose",F),U(A)}function V(D){const A=n.get(D);if(A.__webglInit===void 0)return;const q=D.source,ie=g.get(q);if(ie){const ne=ie[A.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&C(D),Object.keys(ie).length===0&&g.delete(q)}n.remove(D)}function C(D){const A=n.get(D);s.deleteTexture(A.__webglTexture);const q=D.source,ie=g.get(q);delete ie[A.__cacheKey],o.memory.textures--}function U(D){const A=D.texture,q=n.get(D),ie=n.get(A);if(ie.__webglTexture!==void 0&&(s.deleteTexture(ie.__webglTexture),o.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(q.__webglFramebuffer[ne]))for(let oe=0;oe<q.__webglFramebuffer[ne].length;oe++)s.deleteFramebuffer(q.__webglFramebuffer[ne][oe]);else s.deleteFramebuffer(q.__webglFramebuffer[ne]);q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer[ne])}else{if(Array.isArray(q.__webglFramebuffer))for(let ne=0;ne<q.__webglFramebuffer.length;ne++)s.deleteFramebuffer(q.__webglFramebuffer[ne]);else s.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&s.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let ne=0;ne<q.__webglColorRenderbuffer.length;ne++)q.__webglColorRenderbuffer[ne]&&s.deleteRenderbuffer(q.__webglColorRenderbuffer[ne]);q.__webglDepthRenderbuffer&&s.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let ne=0,oe=A.length;ne<oe;ne++){const Me=n.get(A[ne]);Me.__webglTexture&&(s.deleteTexture(Me.__webglTexture),o.memory.textures--),n.remove(A[ne])}n.remove(A),n.remove(D)}let k=0;function O(){k=0}function j(){const D=k;return D>=c&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+c),k+=1,D}function B(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function X(D,A){const q=n.get(D);if(D.isVideoTexture&&Je(D),D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){const ie=D.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(q,D,A);return}}t.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+A)}function R(D,A){const q=n.get(D);if(D.version>0&&q.__version!==D.version){He(q,D,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+A)}function H(D,A){const q=n.get(D);if(D.version>0&&q.__version!==D.version){He(q,D,A);return}t.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+A)}function re(D,A){const q=n.get(D);if(D.version>0&&q.__version!==D.version){vt(q,D,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+A)}const ce={[pn]:s.REPEAT,[Un]:s.CLAMP_TO_EDGE,[yc]:s.MIRRORED_REPEAT},J={[Rt]:s.NEAREST,[Iu]:s.NEAREST_MIPMAP_NEAREST,[fc]:s.NEAREST_MIPMAP_LINEAR,[hn]:s.LINEAR,[_m]:s.LINEAR_MIPMAP_NEAREST,[$s]:s.LINEAR_MIPMAP_LINEAR},de={[Cv]:s.NEVER,[Ov]:s.ALWAYS,[Rv]:s.LESS,[Dv]:s.LEQUAL,[Iv]:s.EQUAL,[Lv]:s.GEQUAL,[Pv]:s.GREATER,[Nv]:s.NOTEQUAL};function xe(D,A,q){if(q?(s.texParameteri(D,s.TEXTURE_WRAP_S,ce[A.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,ce[A.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,ce[A.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,J[A.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,J[A.minFilter])):(s.texParameteri(D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(A.wrapS!==Un||A.wrapT!==Un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(D,s.TEXTURE_MAG_FILTER,E(A.magFilter)),s.texParameteri(D,s.TEXTURE_MIN_FILTER,E(A.minFilter)),A.minFilter!==Rt&&A.minFilter!==hn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,de[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Rt||A.minFilter!==fc&&A.minFilter!==$s||A.type===oi&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===Xr&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(s.texParameterf(D,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function Q(D,A){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",L));const ie=A.source;let ne=g.get(ie);ne===void 0&&(ne={},g.set(ie,ne));const oe=B(A);if(oe!==D.__cacheKey){ne[oe]===void 0&&(ne[oe]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ne[oe].usedTimes++;const Me=ne[D.__cacheKey];Me!==void 0&&(ne[D.__cacheKey].usedTimes--,Me.usedTimes===0&&C(A)),D.__cacheKey=oe,D.__webglTexture=ne[oe].texture}return q}function He(D,A,q){let ie=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ie=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ie=s.TEXTURE_3D);const ne=Q(D,A),oe=A.source;t.bindTexture(ie,D.__webglTexture,s.TEXTURE0+q);const Me=n.get(oe);if(oe.version!==Me.__version||ne===!0){t.activeTexture(s.TEXTURE0+q);const ue=Ke.getPrimaries(Ke.workingColorSpace),me=A.colorSpace===Fn?null:Ke.getPrimaries(A.colorSpace),Pe=A.colorSpace===Fn||ue===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const $e=y(A)&&M(A.image)===!1;let se=v(A.image,$e,!1,u);se=dt(A,se);const it=M(se)||a,ke=r.convert(A.format,A.colorSpace);let Ne=r.convert(A.type),Ce=T(A.internalFormat,ke,Ne,A.colorSpace,A.isVideoTexture);xe(ie,A,it);let N;const le=A.mipmaps,ae=a&&A.isVideoTexture!==!0,ge=Me.__version===void 0||ne===!0,fe=S(A,se,it);if(A.isDepthTexture)Ce=s.DEPTH_COMPONENT,a?A.type===oi?Ce=s.DEPTH_COMPONENT32F:A.type===rs?Ce=s.DEPTH_COMPONENT24:A.type===zs?Ce=s.DEPTH24_STENCIL8:Ce=s.DEPTH_COMPONENT16:A.type===oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Gs&&Ce===s.DEPTH_COMPONENT&&A.type!==ah&&A.type!==rs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=rs,Ne=r.convert(A.type)),A.format===qr&&Ce===s.DEPTH_COMPONENT&&(Ce=s.DEPTH_STENCIL,A.type!==zs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=zs,Ne=r.convert(A.type))),ge&&(ae?t.texStorage2D(s.TEXTURE_2D,1,Ce,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,Ce,se.width,se.height,0,ke,Ne,null));else if(A.isDataTexture)if(le.length>0&&it){ae&&ge&&t.texStorage2D(s.TEXTURE_2D,fe,Ce,le[0].width,le[0].height);for(let ee=0,be=le.length;ee<be;ee++)N=le[ee],ae?t.texSubImage2D(s.TEXTURE_2D,ee,0,0,N.width,N.height,ke,Ne,N.data):t.texImage2D(s.TEXTURE_2D,ee,Ce,N.width,N.height,0,ke,Ne,N.data);A.generateMipmaps=!1}else ae?(ge&&t.texStorage2D(s.TEXTURE_2D,fe,Ce,se.width,se.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,se.width,se.height,ke,Ne,se.data)):t.texImage2D(s.TEXTURE_2D,0,Ce,se.width,se.height,0,ke,Ne,se.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ae&&ge&&t.texStorage3D(s.TEXTURE_2D_ARRAY,fe,Ce,le[0].width,le[0].height,se.depth);for(let ee=0,be=le.length;ee<be;ee++)N=le[ee],A.format!==Tn?ke!==null?ae?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,N.width,N.height,se.depth,ke,N.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,Ce,N.width,N.height,se.depth,0,N.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,N.width,N.height,se.depth,ke,Ne,N.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,Ce,N.width,N.height,se.depth,0,ke,Ne,N.data)}else{ae&&ge&&t.texStorage2D(s.TEXTURE_2D,fe,Ce,le[0].width,le[0].height);for(let ee=0,be=le.length;ee<be;ee++)N=le[ee],A.format!==Tn?ke!==null?ae?t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,N.width,N.height,ke,N.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,Ce,N.width,N.height,0,N.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?t.texSubImage2D(s.TEXTURE_2D,ee,0,0,N.width,N.height,ke,Ne,N.data):t.texImage2D(s.TEXTURE_2D,ee,Ce,N.width,N.height,0,ke,Ne,N.data)}else if(A.isDataArrayTexture)ae?(ge&&t.texStorage3D(s.TEXTURE_2D_ARRAY,fe,Ce,se.width,se.height,se.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ke,Ne,se.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ce,se.width,se.height,se.depth,0,ke,Ne,se.data);else if(A.isData3DTexture)ae?(ge&&t.texStorage3D(s.TEXTURE_3D,fe,Ce,se.width,se.height,se.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ke,Ne,se.data)):t.texImage3D(s.TEXTURE_3D,0,Ce,se.width,se.height,se.depth,0,ke,Ne,se.data);else if(A.isFramebufferTexture){if(ge)if(ae)t.texStorage2D(s.TEXTURE_2D,fe,Ce,se.width,se.height);else{let ee=se.width,be=se.height;for(let Ve=0;Ve<fe;Ve++)t.texImage2D(s.TEXTURE_2D,Ve,Ce,ee,be,0,ke,Ne,null),ee>>=1,be>>=1}}else if(le.length>0&&it){ae&&ge&&t.texStorage2D(s.TEXTURE_2D,fe,Ce,le[0].width,le[0].height);for(let ee=0,be=le.length;ee<be;ee++)N=le[ee],ae?t.texSubImage2D(s.TEXTURE_2D,ee,0,0,ke,Ne,N):t.texImage2D(s.TEXTURE_2D,ee,Ce,ke,Ne,N);A.generateMipmaps=!1}else ae?(ge&&t.texStorage2D(s.TEXTURE_2D,fe,Ce,se.width,se.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ke,Ne,se)):t.texImage2D(s.TEXTURE_2D,0,Ce,ke,Ne,se);b(A,it)&&w(ie),Me.__version=oe.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function vt(D,A,q){if(A.image.length!==6)return;const ie=Q(D,A),ne=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+q);const oe=n.get(ne);if(ne.version!==oe.__version||ie===!0){t.activeTexture(s.TEXTURE0+q);const Me=Ke.getPrimaries(Ke.workingColorSpace),ue=A.colorSpace===Fn?null:Ke.getPrimaries(A.colorSpace),me=A.colorSpace===Fn||Me===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Pe=A.isCompressedTexture||A.image[0].isCompressedTexture,$e=A.image[0]&&A.image[0].isDataTexture,se=[];for(let ee=0;ee<6;ee++)!Pe&&!$e?se[ee]=v(A.image[ee],!1,!0,l):se[ee]=$e?A.image[ee].image:A.image[ee],se[ee]=dt(A,se[ee]);const it=se[0],ke=M(it)||a,Ne=r.convert(A.format,A.colorSpace),Ce=r.convert(A.type),N=T(A.internalFormat,Ne,Ce,A.colorSpace),le=a&&A.isVideoTexture!==!0,ae=oe.__version===void 0||ie===!0;let ge=S(A,it,ke);xe(s.TEXTURE_CUBE_MAP,A,ke);let fe;if(Pe){le&&ae&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,N,it.width,it.height);for(let ee=0;ee<6;ee++){fe=se[ee].mipmaps;for(let be=0;be<fe.length;be++){const Ve=fe[be];A.format!==Tn?Ne!==null?le?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,0,0,Ve.width,Ve.height,Ne,Ve.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,N,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):le?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,0,0,Ve.width,Ve.height,Ne,Ce,Ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,N,Ve.width,Ve.height,0,Ne,Ce,Ve.data)}}}else{fe=A.mipmaps,le&&ae&&(fe.length>0&&ge++,t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,N,se[0].width,se[0].height));for(let ee=0;ee<6;ee++)if($e){le?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,se[ee].width,se[ee].height,Ne,Ce,se[ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,N,se[ee].width,se[ee].height,0,Ne,Ce,se[ee].data);for(let be=0;be<fe.length;be++){const Jt=fe[be].image[ee].image;le?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,0,0,Jt.width,Jt.height,Ne,Ce,Jt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,N,Jt.width,Jt.height,0,Ne,Ce,Jt.data)}}else{le?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ne,Ce,se[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,N,Ne,Ce,se[ee]);for(let be=0;be<fe.length;be++){const Ve=fe[be];le?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,0,0,Ne,Ce,Ve.image[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,N,Ne,Ce,Ve.image[ee])}}}b(A,ke)&&w(s.TEXTURE_CUBE_MAP),oe.__version=ne.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function De(D,A,q,ie,ne,oe){const Me=r.convert(q.format,q.colorSpace),ue=r.convert(q.type),me=T(q.internalFormat,Me,ue,q.colorSpace);if(!n.get(A).__hasExternalTextures){const $e=Math.max(1,A.width>>oe),se=Math.max(1,A.height>>oe);ne===s.TEXTURE_3D||ne===s.TEXTURE_2D_ARRAY?t.texImage3D(ne,oe,me,$e,se,A.depth,0,Me,ue,null):t.texImage2D(ne,oe,me,$e,se,0,Me,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),Ee(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,ne,n.get(q).__webglTexture,0,pe(A)):(ne===s.TEXTURE_2D||ne>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ie,ne,n.get(q).__webglTexture,oe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function z(D,A,q){if(s.bindRenderbuffer(s.RENDERBUFFER,D),A.depthBuffer&&!A.stencilBuffer){let ie=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(q||Ee(A)){const ne=A.depthTexture;ne&&ne.isDepthTexture&&(ne.type===oi?ie=s.DEPTH_COMPONENT32F:ne.type===rs&&(ie=s.DEPTH_COMPONENT24));const oe=pe(A);Ee(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,ie,A.width,A.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,ie,A.width,A.height)}else s.renderbufferStorage(s.RENDERBUFFER,ie,A.width,A.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,D)}else if(A.depthBuffer&&A.stencilBuffer){const ie=pe(A);q&&Ee(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,s.DEPTH24_STENCIL8,A.width,A.height):Ee(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ie,s.DEPTH24_STENCIL8,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,D)}else{const ie=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ne=0;ne<ie.length;ne++){const oe=ie[ne],Me=r.convert(oe.format,oe.colorSpace),ue=r.convert(oe.type),me=T(oe.internalFormat,Me,ue,oe.colorSpace),Pe=pe(A);q&&Ee(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,me,A.width,A.height):Ee(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe,me,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,me,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Nt(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),X(A.depthTexture,0);const ie=n.get(A.depthTexture).__webglTexture,ne=pe(A);if(A.depthTexture.format===Gs)Ee(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0);else if(A.depthTexture.format===qr)Ee(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ae(D){const A=n.get(D),q=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Nt(A.__webglFramebuffer,D)}else if(q){A.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[ie]),A.__webglDepthbuffer[ie]=s.createRenderbuffer(),z(A.__webglDepthbuffer[ie],D,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),z(A.__webglDepthbuffer,D,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function K(D,A,q){const ie=n.get(D);A!==void 0&&De(ie.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&Ae(D)}function te(D){const A=D.texture,q=n.get(D),ie=n.get(A);D.addEventListener("dispose",F),D.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=A.version,o.memory.textures++);const ne=D.isWebGLCubeRenderTarget===!0,oe=D.isWebGLMultipleRenderTargets===!0,Me=M(D)||a;if(ne){q.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(a&&A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer[ue]=[];for(let me=0;me<A.mipmaps.length;me++)q.__webglFramebuffer[ue][me]=s.createFramebuffer()}else q.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer=[];for(let ue=0;ue<A.mipmaps.length;ue++)q.__webglFramebuffer[ue]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(oe)if(i.drawBuffers){const ue=D.texture;for(let me=0,Pe=ue.length;me<Pe;me++){const $e=n.get(ue[me]);$e.__webglTexture===void 0&&($e.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&D.samples>0&&Ee(D)===!1){const ue=oe?A:[A];q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let me=0;me<ue.length;me++){const Pe=ue[me];q.__webglColorRenderbuffer[me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[me]);const $e=r.convert(Pe.format,Pe.colorSpace),se=r.convert(Pe.type),it=T(Pe.internalFormat,$e,se,Pe.colorSpace,D.isXRRenderTarget===!0),ke=pe(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,ke,it,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,q.__webglColorRenderbuffer[me])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),z(q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ne){t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture),xe(s.TEXTURE_CUBE_MAP,A,Me);for(let ue=0;ue<6;ue++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let me=0;me<A.mipmaps.length;me++)De(q.__webglFramebuffer[ue][me],D,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,me);else De(q.__webglFramebuffer[ue],D,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);b(A,Me)&&w(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){const ue=D.texture;for(let me=0,Pe=ue.length;me<Pe;me++){const $e=ue[me],se=n.get($e);t.bindTexture(s.TEXTURE_2D,se.__webglTexture),xe(s.TEXTURE_2D,$e,Me),De(q.__webglFramebuffer,D,$e,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,0),b($e,Me)&&w(s.TEXTURE_2D)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(a?ue=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,ie.__webglTexture),xe(ue,A,Me),a&&A.mipmaps&&A.mipmaps.length>0)for(let me=0;me<A.mipmaps.length;me++)De(q.__webglFramebuffer[me],D,A,s.COLOR_ATTACHMENT0,ue,me);else De(q.__webglFramebuffer,D,A,s.COLOR_ATTACHMENT0,ue,0);b(A,Me)&&w(ue),t.unbindTexture()}D.depthBuffer&&Ae(D)}function Fe(D){const A=M(D)||a,q=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let ie=0,ne=q.length;ie<ne;ie++){const oe=q[ie];if(b(oe,A)){const Me=D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ue=n.get(oe).__webglTexture;t.bindTexture(Me,ue),w(Me),t.unbindTexture()}}}function ve(D){if(a&&D.samples>0&&Ee(D)===!1){const A=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],q=D.width,ie=D.height;let ne=s.COLOR_BUFFER_BIT;const oe=[],Me=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=n.get(D),me=D.isWebGLMultipleRenderTargets===!0;if(me)for(let Pe=0;Pe<A.length;Pe++)t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Pe=0;Pe<A.length;Pe++){oe.push(s.COLOR_ATTACHMENT0+Pe),D.depthBuffer&&oe.push(Me);const $e=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if($e===!1&&(D.depthBuffer&&(ne|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&(ne|=s.STENCIL_BUFFER_BIT)),me&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ue.__webglColorRenderbuffer[Pe]),$e===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Me]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Me])),me){const se=n.get(A[Pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,se,0)}s.blitFramebuffer(0,0,q,ie,0,0,q,ie,ne,s.NEAREST),f&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),me)for(let Pe=0;Pe<A.length;Pe++){t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,ue.__webglColorRenderbuffer[Pe]);const $e=n.get(A[Pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,$e,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function pe(D){return Math.min(h,D.samples)}function Ee(D){const A=n.get(D);return a&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Je(D){const A=o.render.frame;m.get(D)!==A&&(m.set(D,A),D.update())}function dt(D,A){const q=D.colorSpace,ie=D.format,ne=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===Nu||q!==zt&&q!==Fn&&(Ke.getTransfer(q)===ut?a===!1?e.has("EXT_sRGB")===!0&&ie===Tn?(D.format=Nu,D.minFilter=hn,D.generateMipmaps=!1):A=Im.sRGBToLinear(A):(ie!==Tn||ne!==as)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),A}this.allocateTextureUnit=j,this.resetTextureUnits=O,this.setTexture2D=X,this.setTexture2DArray=R,this.setTexture3D=H,this.setTextureCube=re,this.rebindTextures=K,this.setupRenderTarget=te,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Ee}function HM(s,e,t){const n=t.isWebGL2;function i(r,o=Fn){let a;const c=Ke.getTransfer(o);if(r===as)return s.UNSIGNED_BYTE;if(r===ym)return s.UNSIGNED_SHORT_4_4_4_4;if(r===xm)return s.UNSIGNED_SHORT_5_5_5_1;if(r===dv)return s.BYTE;if(r===fv)return s.SHORT;if(r===ah)return s.UNSIGNED_SHORT;if(r===vm)return s.INT;if(r===rs)return s.UNSIGNED_INT;if(r===oi)return s.FLOAT;if(r===Xr)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===pv)return s.ALPHA;if(r===Tn)return s.RGBA;if(r===mv)return s.LUMINANCE;if(r===gv)return s.LUMINANCE_ALPHA;if(r===Gs)return s.DEPTH_COMPONENT;if(r===qr)return s.DEPTH_STENCIL;if(r===Nu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===_v)return s.RED;if(r===Sm)return s.RED_INTEGER;if(r===vv)return s.RG;if(r===Mm)return s.RG_INTEGER;if(r===bm)return s.RGBA_INTEGER;if(r===Rl||r===Il||r===Dl||r===Pl)if(c===ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Rl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Il)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Dl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Rl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Il)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Dl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Dd||r===Pd||r===Nd||r===Ld)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Dd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Pd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Nd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ld)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===yv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Od||r===Ud)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Od)return c===ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ud)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Fd||r===kd||r===Bd||r===Vd||r===zd||r===Gd||r===Hd||r===Wd||r===Xd||r===qd||r===jd||r===Yd||r===$d||r===Kd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Fd)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===kd)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Bd)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vd)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zd)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Gd)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Hd)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Wd)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Xd)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qd)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===jd)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yd)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$d)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kd)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nl||r===Zd||r===Qd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Nl)return c===ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Zd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Qd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===xv||r===Jd||r===ef||r===tf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Nl)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Jd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ef)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===tf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zs?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class WM extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Os extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XM={type:"move"};class nu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(XM)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Os;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class qM extends Bt{constructor(e,t,n,i,r,o,a,c,l,u){if(u=u!==void 0?u:Gs,u!==Gs&&u!==qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Gs&&(n=rs),n===void 0&&u===qr&&(n=zs),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Rt,this.minFilter=c!==void 0?c:Rt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class jM extends qi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,m=null;const _=t.getContextAttributes();let g=null,p=null;const x=[],v=[],M=new rn;M.layers.enable(1),M.viewport=new ct;const y=new rn;y.layers.enable(2),y.viewport=new ct;const b=[M,y],w=new WM;w.layers.enable(1),w.layers.enable(2);let T=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let H=x[R];return H===void 0&&(H=new nu,x[R]=H),H.getTargetRaySpace()},this.getControllerGrip=function(R){let H=x[R];return H===void 0&&(H=new nu,x[R]=H),H.getGripSpace()},this.getHand=function(R){let H=x[R];return H===void 0&&(H=new nu,x[R]=H),H.getHandSpace()};function E(R){const H=v.indexOf(R.inputSource);if(H===-1)return;const re=x[H];re!==void 0&&(re.update(R.inputSource,R.frame,l||o),re.dispatchEvent({type:R.type,data:R.inputSource}))}function L(){i.removeEventListener("select",E),i.removeEventListener("selectstart",E),i.removeEventListener("selectend",E),i.removeEventListener("squeeze",E),i.removeEventListener("squeezestart",E),i.removeEventListener("squeezeend",E),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",F);for(let R=0;R<x.length;R++){const H=v[R];H!==null&&(v[R]=null,x[R].disconnect(H))}T=null,S=null,e.setRenderTarget(g),f=null,d=null,h=null,i=null,p=null,X.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){r=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){a=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(R){l=R},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(R){if(i=R,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",E),i.addEventListener("selectstart",E),i.addEventListener("selectend",E),i.addEventListener("squeeze",E),i.addEventListener("squeezestart",E),i.addEventListener("squeezeend",E),i.addEventListener("end",L),i.addEventListener("inputsourceschange",F),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const H={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,H),i.updateRenderState({baseLayer:f}),p=new ls(f.framebufferWidth,f.framebufferHeight,{format:Tn,type:as,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let H=null,re=null,ce=null;_.depth&&(ce=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,H=_.stencil?qr:Gs,re=_.stencil?zs:rs);const J={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(J),i.updateRenderState({layers:[d]}),p=new ls(d.textureWidth,d.textureHeight,{format:Tn,type:as,depthTexture:new qM(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const de=e.properties.get(p);de.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),X.setContext(i),X.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function F(R){for(let H=0;H<R.removed.length;H++){const re=R.removed[H],ce=v.indexOf(re);ce>=0&&(v[ce]=null,x[ce].disconnect(re))}for(let H=0;H<R.added.length;H++){const re=R.added[H];let ce=v.indexOf(re);if(ce===-1){for(let de=0;de<x.length;de++)if(de>=v.length){v.push(re),ce=de;break}else if(v[de]===null){v[de]=re,ce=de;break}if(ce===-1)break}const J=x[ce];J&&J.connect(re)}}const V=new P,C=new P;function U(R,H,re){V.setFromMatrixPosition(H.matrixWorld),C.setFromMatrixPosition(re.matrixWorld);const ce=V.distanceTo(C),J=H.projectionMatrix.elements,de=re.projectionMatrix.elements,xe=J[14]/(J[10]-1),Q=J[14]/(J[10]+1),He=(J[9]+1)/J[5],vt=(J[9]-1)/J[5],De=(J[8]-1)/J[0],z=(de[8]+1)/de[0],Nt=xe*De,Ae=xe*z,K=ce/(-De+z),te=K*-De;H.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(te),R.translateZ(K),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert();const Fe=xe+K,ve=Q+K,pe=Nt-te,Ee=Ae+(ce-te),Je=He*Q/ve*Fe,dt=vt*Q/ve*Fe;R.projectionMatrix.makePerspective(pe,Ee,Je,dt,Fe,ve),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}function k(R,H){H===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(H.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(i===null)return;w.near=y.near=M.near=R.near,w.far=y.far=M.far=R.far,(T!==w.near||S!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),T=w.near,S=w.far);const H=R.parent,re=w.cameras;k(w,H);for(let ce=0;ce<re.length;ce++)k(re[ce],H);re.length===2?U(w,M,y):w.projectionMatrix.copy(M.projectionMatrix),O(R,w,H)};function O(R,H,re){re===null?R.matrix.copy(H.matrixWorld):(R.matrix.copy(re.matrixWorld),R.matrix.invert(),R.matrix.multiply(H.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(H.projectionMatrix),R.projectionMatrixInverse.copy(H.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=Yr*2*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(R){c=R,d!==null&&(d.fixedFoveation=R),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=R)};let j=null;function B(R,H){if(u=H.getViewerPose(l||o),m=H,u!==null){const re=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ce=!1;re.length!==w.cameras.length&&(w.cameras.length=0,ce=!0);for(let J=0;J<re.length;J++){const de=re[J];let xe=null;if(f!==null)xe=f.getViewport(de);else{const He=h.getViewSubImage(d,de);xe=He.viewport,J===0&&(e.setRenderTargetTextures(p,He.colorTexture,d.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(p))}let Q=b[J];Q===void 0&&(Q=new rn,Q.layers.enable(J),Q.viewport=new ct,b[J]=Q),Q.matrix.fromArray(de.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(de.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(xe.x,xe.y,xe.width,xe.height),J===0&&(w.matrix.copy(Q.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ce===!0&&w.cameras.push(Q)}}for(let re=0;re<x.length;re++){const ce=v[re],J=x[re];ce!==null&&J!==void 0&&J.update(ce,H,l||o)}j&&j(R,H),H.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:H}),m=null}const X=new Bm;X.setAnimationLoop(B),this.setAnimationLoop=function(R){j=R},this.dispose=function(){}}}function YM(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Um(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,v,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,M)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,x,v):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===mn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===mn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,x,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=v*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===mn&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function $M(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,v){const M=v.program;n.uniformBlockBinding(x,M)}function l(x,v){let M=i[x.id];M===void 0&&(m(x),M=u(x),i[x.id]=M,x.addEventListener("dispose",g));const y=v.program;n.updateUBOMapping(x,y);const b=e.render.frame;r[x.id]!==b&&(d(x),r[x.id]=b)}function u(x){const v=h();x.__bindingPointIndex=v;const M=s.createBuffer(),y=x.__size,b=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,y,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,M),M}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=i[x.id],M=x.uniforms,y=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let b=0,w=M.length;b<w;b++){const T=M[b];if(f(T,b,y)===!0){const S=T.__offset,E=Array.isArray(T.value)?T.value:[T.value];let L=0;for(let F=0;F<E.length;F++){const V=E[F],C=_(V);typeof V=="number"?(T.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,S+L,T.__data)):V.isMatrix3?(T.__data[0]=V.elements[0],T.__data[1]=V.elements[1],T.__data[2]=V.elements[2],T.__data[3]=V.elements[0],T.__data[4]=V.elements[3],T.__data[5]=V.elements[4],T.__data[6]=V.elements[5],T.__data[7]=V.elements[0],T.__data[8]=V.elements[6],T.__data[9]=V.elements[7],T.__data[10]=V.elements[8],T.__data[11]=V.elements[0]):(V.toArray(T.__data,L),L+=C.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,S,T.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,v,M){const y=x.value;if(M[v]===void 0){if(typeof y=="number")M[v]=y;else{const b=Array.isArray(y)?y:[y],w=[];for(let T=0;T<b.length;T++)w.push(b[T].clone());M[v]=w}return!0}else if(typeof y=="number"){if(M[v]!==y)return M[v]=y,!0}else{const b=Array.isArray(M[v])?M[v]:[M[v]],w=Array.isArray(y)?y:[y];for(let T=0;T<b.length;T++){const S=b[T];if(S.equals(w[T])===!1)return S.copy(w[T]),!0}}return!1}function m(x){const v=x.uniforms;let M=0;const y=16;let b=0;for(let w=0,T=v.length;w<T;w++){const S=v[w],E={boundary:0,storage:0},L=Array.isArray(S.value)?S.value:[S.value];for(let F=0,V=L.length;F<V;F++){const C=L[F],U=_(C);E.boundary+=U.boundary,E.storage+=U.storage}if(S.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=M,w>0){b=M%y;const F=y-b;b!==0&&F-E.boundary<0&&(M+=y-b,S.__offset=M)}M+=E.storage}return b=M%y,b>0&&(M+=y-b),x.__size=M,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class _h{constructor(e={}){const{canvas:t=$v(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),m=new Int32Array(4);let _=null,g=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gt,this._useLegacyLights=!1,this.toneMapping=os,this.toneMappingExposure=1;const v=this;let M=!1,y=0,b=0,w=null,T=-1,S=null;const E=new ct,L=new ct;let F=null;const V=new Te(0);let C=0,U=t.width,k=t.height,O=1,j=null,B=null;const X=new ct(0,0,U,k),R=new ct(0,0,U,k);let H=!1;const re=new mh;let ce=!1,J=!1,de=null;const xe=new Ue,Q=new ye,He=new P,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return w===null?O:1}let z=n;function Nt(I,G){for(let Y=0;Y<I.length;Y++){const W=I[Y],$=t.getContext(W,G);if($!==null)return $}return null}try{const I={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rh}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",ge,!1),z===null){const G=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&G.shift(),z=Nt(G,I),z===null)throw Nt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Ae,K,te,Fe,ve,pe,Ee,Je,dt,D,A,q,ie,ne,oe,Me,ue,me,Pe,$e,se,it,ke,Ne;function Ce(){Ae=new oS(z),K=new eS(z,Ae,e),Ae.init(K),it=new HM(z,Ae,K),te=new zM(z,Ae,K),Fe=new lS(z),ve=new AM,pe=new GM(z,Ae,te,ve,K,it,Fe),Ee=new nS(v),Je=new rS(v),dt=new y0(z,K),ke=new Qx(z,Ae,dt,K),D=new aS(z,dt,Fe,ke),A=new fS(z,D,dt,Fe),Pe=new dS(z,K,pe),Me=new tS(ve),q=new wM(v,Ee,Je,Ae,K,ke,Me),ie=new YM(v,ve),ne=new RM,oe=new OM(Ae,K),me=new Zx(v,Ee,Je,te,A,d,c),ue=new VM(v,A,K),Ne=new $M(z,Fe,K,te),$e=new Jx(z,Ae,Fe,K),se=new cS(z,Ae,Fe,K),Fe.programs=q.programs,v.capabilities=K,v.extensions=Ae,v.properties=ve,v.renderLists=ne,v.shadowMap=ue,v.state=te,v.info=Fe}Ce();const N=new jM(v,z);this.xr=N,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const I=Ae.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Ae.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(I){I!==void 0&&(O=I,this.setSize(U,k,!1))},this.getSize=function(I){return I.set(U,k)},this.setSize=function(I,G,Y=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=I,k=G,t.width=Math.floor(I*O),t.height=Math.floor(G*O),Y===!0&&(t.style.width=I+"px",t.style.height=G+"px"),this.setViewport(0,0,I,G)},this.getDrawingBufferSize=function(I){return I.set(U*O,k*O).floor()},this.setDrawingBufferSize=function(I,G,Y){U=I,k=G,O=Y,t.width=Math.floor(I*Y),t.height=Math.floor(G*Y),this.setViewport(0,0,I,G)},this.getCurrentViewport=function(I){return I.copy(E)},this.getViewport=function(I){return I.copy(X)},this.setViewport=function(I,G,Y,W){I.isVector4?X.set(I.x,I.y,I.z,I.w):X.set(I,G,Y,W),te.viewport(E.copy(X).multiplyScalar(O).floor())},this.getScissor=function(I){return I.copy(R)},this.setScissor=function(I,G,Y,W){I.isVector4?R.set(I.x,I.y,I.z,I.w):R.set(I,G,Y,W),te.scissor(L.copy(R).multiplyScalar(O).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(I){te.setScissorTest(H=I)},this.setOpaqueSort=function(I){j=I},this.setTransparentSort=function(I){B=I},this.getClearColor=function(I){return I.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(I=!0,G=!0,Y=!0){let W=0;if(I){let $=!1;if(w!==null){const _e=w.texture.format;$=_e===bm||_e===Mm||_e===Sm}if($){const _e=w.texture.type,we=_e===as||_e===rs||_e===ah||_e===zs||_e===ym||_e===xm,Le=me.getClearColor(),Oe=me.getClearAlpha(),Xe=Le.r,Ie=Le.g,ze=Le.b;we?(f[0]=Xe,f[1]=Ie,f[2]=ze,f[3]=Oe,z.clearBufferuiv(z.COLOR,0,f)):(m[0]=Xe,m[1]=Ie,m[2]=ze,m[3]=Oe,z.clearBufferiv(z.COLOR,0,m))}else W|=z.COLOR_BUFFER_BIT}G&&(W|=z.DEPTH_BUFFER_BIT),Y&&(W|=z.STENCIL_BUFFER_BIT),z.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),ne.dispose(),oe.dispose(),ve.dispose(),Ee.dispose(),Je.dispose(),A.dispose(),ke.dispose(),Ne.dispose(),q.dispose(),N.dispose(),N.removeEventListener("sessionstart",ft),N.removeEventListener("sessionend",ti),de&&(de.dispose(),de=null),en.stop()};function le(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const I=Fe.autoReset,G=ue.enabled,Y=ue.autoUpdate,W=ue.needsUpdate,$=ue.type;Ce(),Fe.autoReset=I,ue.enabled=G,ue.autoUpdate=Y,ue.needsUpdate=W,ue.type=$}function ge(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function fe(I){const G=I.target;G.removeEventListener("dispose",fe),ee(G)}function ee(I){be(I),ve.remove(I)}function be(I){const G=ve.get(I).programs;G!==void 0&&(G.forEach(function(Y){q.releaseProgram(Y)}),I.isShaderMaterial&&q.releaseShaderCache(I))}this.renderBufferDirect=function(I,G,Y,W,$,_e){G===null&&(G=vt);const we=$.isMesh&&$.matrixWorld.determinant()<0,Le=k_(I,G,Y,W,$);te.setMaterial(W,we);let Oe=Y.index,Xe=1;if(W.wireframe===!0){if(Oe=D.getWireframeAttribute(Y),Oe===void 0)return;Xe=2}const Ie=Y.drawRange,ze=Y.attributes.position;let yt=Ie.start*Xe,St=(Ie.start+Ie.count)*Xe;_e!==null&&(yt=Math.max(yt,_e.start*Xe),St=Math.min(St,(_e.start+_e.count)*Xe)),Oe!==null?(yt=Math.max(yt,0),St=Math.min(St,Oe.count)):ze!=null&&(yt=Math.max(yt,0),St=Math.min(St,ze.count));const Cn=St-yt;if(Cn<0||Cn===1/0)return;ke.setup($,W,Le,Y,Oe);let xi,Et=$e;if(Oe!==null&&(xi=dt.get(Oe),Et=se,Et.setIndex(xi)),$.isMesh)W.wireframe===!0?(te.setLineWidth(W.wireframeLinewidth*De()),Et.setMode(z.LINES)):Et.setMode(z.TRIANGLES);else if($.isLine){let qe=W.linewidth;qe===void 0&&(qe=1),te.setLineWidth(qe*De()),$.isLineSegments?Et.setMode(z.LINES):$.isLineLoop?Et.setMode(z.LINE_LOOP):Et.setMode(z.LINE_STRIP)}else $.isPoints?Et.setMode(z.POINTS):$.isSprite&&Et.setMode(z.TRIANGLES);if($.isInstancedMesh)Et.renderInstances(yt,Cn,$.count);else if(Y.isInstancedBufferGeometry){const qe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,El=Math.min(Y.instanceCount,qe);Et.renderInstances(yt,Cn,El)}else Et.render(yt,Cn)},this.compile=function(I,G){function Y(W,$,_e){W.transparent===!0&&W.side===bn&&W.forceSinglePass===!1?(W.side=mn,W.needsUpdate=!0,wa(W,$,_e),W.side=Gi,W.needsUpdate=!0,wa(W,$,_e),W.side=bn):wa(W,$,_e)}g=oe.get(I),g.init(),x.push(g),I.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights(v._useLegacyLights),I.traverse(function(W){const $=W.material;if($)if(Array.isArray($))for(let _e=0;_e<$.length;_e++){const we=$[_e];Y(we,I,W)}else Y($,I,W)}),x.pop(),g=null};let Ve=null;function Jt(I){Ve&&Ve(I)}function ft(){en.stop()}function ti(){en.start()}const en=new Bm;en.setAnimationLoop(Jt),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(I){Ve=I,N.setAnimationLoop(I),I===null?en.stop():en.start()},N.addEventListener("sessionstart",ft),N.addEventListener("sessionend",ti),this.render=function(I,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(G),G=N.getCamera()),I.isScene===!0&&I.onBeforeRender(v,I,G,w),g=oe.get(I,x.length),g.init(),x.push(g),xe.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),re.setFromProjectionMatrix(xe),J=this.localClippingEnabled,ce=Me.init(this.clippingPlanes,J),_=ne.get(I,p.length),_.init(),p.push(_),xd(I,G,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(j,B),this.info.render.frame++,ce===!0&&Me.beginShadows();const Y=g.state.shadowsArray;if(ue.render(Y,I,G),ce===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),me.render(_,I),g.setupLights(v._useLegacyLights),G.isArrayCamera){const W=G.cameras;for(let $=0,_e=W.length;$<_e;$++){const we=W[$];Sd(_,I,we,we.viewport)}}else Sd(_,I,G);w!==null&&(pe.updateMultisampleRenderTarget(w),pe.updateRenderTargetMipmap(w)),I.isScene===!0&&I.onAfterRender(v,I,G),ke.resetDefaultState(),T=-1,S=null,x.pop(),x.length>0?g=x[x.length-1]:g=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function xd(I,G,Y,W){if(I.visible===!1)return;if(I.layers.test(G.layers)){if(I.isGroup)Y=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(G);else if(I.isLight)g.pushLight(I),I.castShadow&&g.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||re.intersectsSprite(I)){W&&He.setFromMatrixPosition(I.matrixWorld).applyMatrix4(xe);const we=A.update(I),Le=I.material;Le.visible&&_.push(I,we,Le,Y,He.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||re.intersectsObject(I))){const we=A.update(I),Le=I.material;if(W&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),He.copy(I.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),He.copy(we.boundingSphere.center)),He.applyMatrix4(I.matrixWorld).applyMatrix4(xe)),Array.isArray(Le)){const Oe=we.groups;for(let Xe=0,Ie=Oe.length;Xe<Ie;Xe++){const ze=Oe[Xe],yt=Le[ze.materialIndex];yt&&yt.visible&&_.push(I,we,yt,Y,He.z,ze)}}else Le.visible&&_.push(I,we,Le,Y,He.z,null)}}const _e=I.children;for(let we=0,Le=_e.length;we<Le;we++)xd(_e[we],G,Y,W)}function Sd(I,G,Y,W){const $=I.opaque,_e=I.transmissive,we=I.transparent;g.setupLightsView(Y),ce===!0&&Me.setGlobalState(v.clippingPlanes,Y),_e.length>0&&F_($,_e,G,Y),W&&te.viewport(E.copy(W)),$.length>0&&Ea($,G,Y),_e.length>0&&Ea(_e,G,Y),we.length>0&&Ea(we,G,Y),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function F_(I,G,Y,W){const $=K.isWebGL2;de===null&&(de=new ls(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")?Xr:as,minFilter:$s,samples:$?4:0})),v.getDrawingBufferSize(Q),$?de.setSize(Q.x,Q.y):de.setSize(Ec(Q.x),Ec(Q.y));const _e=v.getRenderTarget();v.setRenderTarget(de),v.getClearColor(V),C=v.getClearAlpha(),C<1&&v.setClearColor(16777215,.5),v.clear();const we=v.toneMapping;v.toneMapping=os,Ea(I,Y,W),pe.updateMultisampleRenderTarget(de),pe.updateRenderTargetMipmap(de);let Le=!1;for(let Oe=0,Xe=G.length;Oe<Xe;Oe++){const Ie=G[Oe],ze=Ie.object,yt=Ie.geometry,St=Ie.material,Cn=Ie.group;if(St.side===bn&&ze.layers.test(W.layers)){const xi=St.side;St.side=mn,St.needsUpdate=!0,Md(ze,Y,W,yt,St,Cn),St.side=xi,St.needsUpdate=!0,Le=!0}}Le===!0&&(pe.updateMultisampleRenderTarget(de),pe.updateRenderTargetMipmap(de)),v.setRenderTarget(_e),v.setClearColor(V,C),v.toneMapping=we}function Ea(I,G,Y){const W=G.isScene===!0?G.overrideMaterial:null;for(let $=0,_e=I.length;$<_e;$++){const we=I[$],Le=we.object,Oe=we.geometry,Xe=W===null?we.material:W,Ie=we.group;Le.layers.test(Y.layers)&&Md(Le,G,Y,Oe,Xe,Ie)}}function Md(I,G,Y,W,$,_e){I.onBeforeRender(v,G,Y,W,$,_e),I.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),$.onBeforeRender(v,G,Y,W,I,_e),$.transparent===!0&&$.side===bn&&$.forceSinglePass===!1?($.side=mn,$.needsUpdate=!0,v.renderBufferDirect(Y,G,W,$,I,_e),$.side=Gi,$.needsUpdate=!0,v.renderBufferDirect(Y,G,W,$,I,_e),$.side=bn):v.renderBufferDirect(Y,G,W,$,I,_e),I.onAfterRender(v,G,Y,W,$,_e)}function wa(I,G,Y){G.isScene!==!0&&(G=vt);const W=ve.get(I),$=g.state.lights,_e=g.state.shadowsArray,we=$.state.version,Le=q.getParameters(I,$.state,_e,G,Y),Oe=q.getProgramCacheKey(Le);let Xe=W.programs;W.environment=I.isMeshStandardMaterial?G.environment:null,W.fog=G.fog,W.envMap=(I.isMeshStandardMaterial?Je:Ee).get(I.envMap||W.environment),Xe===void 0&&(I.addEventListener("dispose",fe),Xe=new Map,W.programs=Xe);let Ie=Xe.get(Oe);if(Ie!==void 0){if(W.currentProgram===Ie&&W.lightsStateVersion===we)return bd(I,Le),Ie}else Le.uniforms=q.getUniforms(I),I.onBuild(Y,Le,v),I.onBeforeCompile(Le,v),Ie=q.acquireProgram(Le,Oe),Xe.set(Oe,Ie),W.uniforms=Le.uniforms;const ze=W.uniforms;(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(ze.clippingPlanes=Me.uniform),bd(I,Le),W.needsLights=V_(I),W.lightsStateVersion=we,W.needsLights&&(ze.ambientLightColor.value=$.state.ambient,ze.lightProbe.value=$.state.probe,ze.directionalLights.value=$.state.directional,ze.directionalLightShadows.value=$.state.directionalShadow,ze.spotLights.value=$.state.spot,ze.spotLightShadows.value=$.state.spotShadow,ze.rectAreaLights.value=$.state.rectArea,ze.ltc_1.value=$.state.rectAreaLTC1,ze.ltc_2.value=$.state.rectAreaLTC2,ze.pointLights.value=$.state.point,ze.pointLightShadows.value=$.state.pointShadow,ze.hemisphereLights.value=$.state.hemi,ze.directionalShadowMap.value=$.state.directionalShadowMap,ze.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ze.spotShadowMap.value=$.state.spotShadowMap,ze.spotLightMatrix.value=$.state.spotLightMatrix,ze.spotLightMap.value=$.state.spotLightMap,ze.pointShadowMap.value=$.state.pointShadowMap,ze.pointShadowMatrix.value=$.state.pointShadowMatrix);const yt=Ie.getUniforms(),St=pc.seqWithValue(yt.seq,ze);return W.currentProgram=Ie,W.uniformsList=St,Ie}function bd(I,G){const Y=ve.get(I);Y.outputColorSpace=G.outputColorSpace,Y.instancing=G.instancing,Y.instancingColor=G.instancingColor,Y.skinning=G.skinning,Y.morphTargets=G.morphTargets,Y.morphNormals=G.morphNormals,Y.morphColors=G.morphColors,Y.morphTargetsCount=G.morphTargetsCount,Y.numClippingPlanes=G.numClippingPlanes,Y.numIntersection=G.numClipIntersection,Y.vertexAlphas=G.vertexAlphas,Y.vertexTangents=G.vertexTangents,Y.toneMapping=G.toneMapping}function k_(I,G,Y,W,$){G.isScene!==!0&&(G=vt),pe.resetTextureUnits();const _e=G.fog,we=W.isMeshStandardMaterial?G.environment:null,Le=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:zt,Oe=(W.isMeshStandardMaterial?Je:Ee).get(W.envMap||we),Xe=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ie=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),ze=!!Y.morphAttributes.position,yt=!!Y.morphAttributes.normal,St=!!Y.morphAttributes.color;let Cn=os;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Cn=v.toneMapping);const xi=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Et=xi!==void 0?xi.length:0,qe=ve.get(W),El=g.state.lights;if(ce===!0&&(J===!0||I!==S)){const vn=I===S&&W.id===T;Me.setState(W,I,vn)}let wt=!1;W.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==El.state.version||qe.outputColorSpace!==Le||$.isInstancedMesh&&qe.instancing===!1||!$.isInstancedMesh&&qe.instancing===!0||$.isSkinnedMesh&&qe.skinning===!1||!$.isSkinnedMesh&&qe.skinning===!0||$.isInstancedMesh&&qe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&qe.instancingColor===!1&&$.instanceColor!==null||qe.envMap!==Oe||W.fog===!0&&qe.fog!==_e||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Me.numPlanes||qe.numIntersection!==Me.numIntersection)||qe.vertexAlphas!==Xe||qe.vertexTangents!==Ie||qe.morphTargets!==ze||qe.morphNormals!==yt||qe.morphColors!==St||qe.toneMapping!==Cn||K.isWebGL2===!0&&qe.morphTargetsCount!==Et)&&(wt=!0):(wt=!0,qe.__version=W.version);let xs=qe.currentProgram;wt===!0&&(xs=wa(W,G,$));let Td=!1,xo=!1,wl=!1;const tn=xs.getUniforms(),Ss=qe.uniforms;if(te.useProgram(xs.program)&&(Td=!0,xo=!0,wl=!0),W.id!==T&&(T=W.id,xo=!0),Td||S!==I){tn.setValue(z,"projectionMatrix",I.projectionMatrix),tn.setValue(z,"viewMatrix",I.matrixWorldInverse);const vn=tn.map.cameraPosition;vn!==void 0&&vn.setValue(z,He.setFromMatrixPosition(I.matrixWorld)),K.logarithmicDepthBuffer&&tn.setValue(z,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&tn.setValue(z,"isOrthographic",I.isOrthographicCamera===!0),S!==I&&(S=I,xo=!0,wl=!0)}if($.isSkinnedMesh){tn.setOptional(z,$,"bindMatrix"),tn.setOptional(z,$,"bindMatrixInverse");const vn=$.skeleton;vn&&(K.floatVertexTextures?(vn.boneTexture===null&&vn.computeBoneTexture(),tn.setValue(z,"boneTexture",vn.boneTexture,pe),tn.setValue(z,"boneTextureSize",vn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Al=Y.morphAttributes;if((Al.position!==void 0||Al.normal!==void 0||Al.color!==void 0&&K.isWebGL2===!0)&&Pe.update($,Y,xs),(xo||qe.receiveShadow!==$.receiveShadow)&&(qe.receiveShadow=$.receiveShadow,tn.setValue(z,"receiveShadow",$.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ss.envMap.value=Oe,Ss.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),xo&&(tn.setValue(z,"toneMappingExposure",v.toneMappingExposure),qe.needsLights&&B_(Ss,wl),_e&&W.fog===!0&&ie.refreshFogUniforms(Ss,_e),ie.refreshMaterialUniforms(Ss,W,O,k,de),pc.upload(z,qe.uniformsList,Ss,pe)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(pc.upload(z,qe.uniformsList,Ss,pe),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&tn.setValue(z,"center",$.center),tn.setValue(z,"modelViewMatrix",$.modelViewMatrix),tn.setValue(z,"normalMatrix",$.normalMatrix),tn.setValue(z,"modelMatrix",$.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const vn=W.uniformsGroups;for(let Cl=0,z_=vn.length;Cl<z_;Cl++)if(K.isWebGL2){const Ed=vn[Cl];Ne.update(Ed,xs),Ne.bind(Ed,xs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xs}function B_(I,G){I.ambientLightColor.needsUpdate=G,I.lightProbe.needsUpdate=G,I.directionalLights.needsUpdate=G,I.directionalLightShadows.needsUpdate=G,I.pointLights.needsUpdate=G,I.pointLightShadows.needsUpdate=G,I.spotLights.needsUpdate=G,I.spotLightShadows.needsUpdate=G,I.rectAreaLights.needsUpdate=G,I.hemisphereLights.needsUpdate=G}function V_(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(I,G,Y){ve.get(I.texture).__webglTexture=G,ve.get(I.depthTexture).__webglTexture=Y;const W=ve.get(I);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=Y===void 0,W.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,G){const Y=ve.get(I);Y.__webglFramebuffer=G,Y.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(I,G=0,Y=0){w=I,y=G,b=Y;let W=!0,$=null,_e=!1,we=!1;if(I){const Oe=ve.get(I);Oe.__useDefaultFramebuffer!==void 0?(te.bindFramebuffer(z.FRAMEBUFFER,null),W=!1):Oe.__webglFramebuffer===void 0?pe.setupRenderTarget(I):Oe.__hasExternalTextures&&pe.rebindTextures(I,ve.get(I.texture).__webglTexture,ve.get(I.depthTexture).__webglTexture);const Xe=I.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(we=!0);const Ie=ve.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Ie[G])?$=Ie[G][Y]:$=Ie[G],_e=!0):K.isWebGL2&&I.samples>0&&pe.useMultisampledRTT(I)===!1?$=ve.get(I).__webglMultisampledFramebuffer:Array.isArray(Ie)?$=Ie[Y]:$=Ie,E.copy(I.viewport),L.copy(I.scissor),F=I.scissorTest}else E.copy(X).multiplyScalar(O).floor(),L.copy(R).multiplyScalar(O).floor(),F=H;if(te.bindFramebuffer(z.FRAMEBUFFER,$)&&K.drawBuffers&&W&&te.drawBuffers(I,$),te.viewport(E),te.scissor(L),te.setScissorTest(F),_e){const Oe=ve.get(I.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+G,Oe.__webglTexture,Y)}else if(we){const Oe=ve.get(I.texture),Xe=G||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Oe.__webglTexture,Y||0,Xe)}T=-1},this.readRenderTargetPixels=function(I,G,Y,W,$,_e,we){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=ve.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le){te.bindFramebuffer(z.FRAMEBUFFER,Le);try{const Oe=I.texture,Xe=Oe.format,Ie=Oe.type;if(Xe!==Tn&&it.convert(Xe)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Ie===Xr&&(Ae.has("EXT_color_buffer_half_float")||K.isWebGL2&&Ae.has("EXT_color_buffer_float"));if(Ie!==as&&it.convert(Ie)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===oi&&(K.isWebGL2||Ae.has("OES_texture_float")||Ae.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=I.width-W&&Y>=0&&Y<=I.height-$&&z.readPixels(G,Y,W,$,it.convert(Xe),it.convert(Ie),_e)}finally{const Oe=w!==null?ve.get(w).__webglFramebuffer:null;te.bindFramebuffer(z.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(I,G,Y=0){const W=Math.pow(2,-Y),$=Math.floor(G.image.width*W),_e=Math.floor(G.image.height*W);pe.setTexture2D(G,0),z.copyTexSubImage2D(z.TEXTURE_2D,Y,0,0,I.x,I.y,$,_e),te.unbindTexture()},this.copyTextureToTexture=function(I,G,Y,W=0){const $=G.image.width,_e=G.image.height,we=it.convert(Y.format),Le=it.convert(Y.type);pe.setTexture2D(Y,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Y.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Y.unpackAlignment),G.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,W,I.x,I.y,$,_e,we,Le,G.image.data):G.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,W,I.x,I.y,G.mipmaps[0].width,G.mipmaps[0].height,we,G.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,W,I.x,I.y,we,Le,G.image),W===0&&Y.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),te.unbindTexture()},this.copyTextureToTexture3D=function(I,G,Y,W,$=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=I.max.x-I.min.x+1,we=I.max.y-I.min.y+1,Le=I.max.z-I.min.z+1,Oe=it.convert(W.format),Xe=it.convert(W.type);let Ie;if(W.isData3DTexture)pe.setTexture3D(W,0),Ie=z.TEXTURE_3D;else if(W.isDataArrayTexture)pe.setTexture2DArray(W,0),Ie=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);const ze=z.getParameter(z.UNPACK_ROW_LENGTH),yt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),St=z.getParameter(z.UNPACK_SKIP_PIXELS),Cn=z.getParameter(z.UNPACK_SKIP_ROWS),xi=z.getParameter(z.UNPACK_SKIP_IMAGES),Et=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,Et.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Et.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,I.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,I.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,I.min.z),Y.isDataTexture||Y.isData3DTexture?z.texSubImage3D(Ie,$,G.x,G.y,G.z,_e,we,Le,Oe,Xe,Et.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Ie,$,G.x,G.y,G.z,_e,we,Le,Oe,Et.data)):z.texSubImage3D(Ie,$,G.x,G.y,G.z,_e,we,Le,Oe,Xe,Et),z.pixelStorei(z.UNPACK_ROW_LENGTH,ze),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,yt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,St),z.pixelStorei(z.UNPACK_SKIP_ROWS,Cn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,xi),$===0&&W.generateMipmaps&&z.generateMipmap(Ie),te.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?pe.setTextureCube(I,0):I.isData3DTexture?pe.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?pe.setTexture2DArray(I,0):pe.setTexture2D(I,0),te.unbindTexture()},this.resetState=function(){y=0,b=0,w=null,te.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===uh?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===rl?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===gt?Hs:Am}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Hs?gt:zt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class KM extends _h{}KM.prototype.isWebGL1Renderer=!0;class Wo extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class ZM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Pu,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new P;class vh{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=si(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new ln(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new vh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Hf=new P,Wf=new ct,Xf=new ct,QM=new P,qf=new Ue,Tr=new P,iu=new pi,jf=new Ue,su=new la;class JM extends $t{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Yn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Tr.fromBufferAttribute(t,n),this.applyBoneTransform(n,Tr),this.boundingBox.expandByPoint(Tr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Tr.fromBufferAttribute(t,n),this.applyBoneTransform(n,Tr),this.boundingSphere.expandByPoint(Tr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),iu.copy(this.boundingSphere),iu.applyMatrix4(i),e.ray.intersectsSphere(iu)!==!1&&(jf.copy(i).invert(),su.copy(e.ray).applyMatrix4(jf),!(this.boundingBox!==null&&su.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,su)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ct,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Wf.fromBufferAttribute(i.attributes.skinIndex,e),Xf.fromBufferAttribute(i.attributes.skinWeight,e),Hf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Xf.getComponent(r);if(o!==0){const a=Wf.getComponent(r);qf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(QM.copy(Hf).applyMatrix4(qf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Wm extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Xm extends Bt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Rt,u=Rt,h,d){super(null,o,a,c,l,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yf=new Ue,eb=new Ue;class yh{constructor(e=[],t=[]){this.uuid=qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:eb;Yf.multiplyMatrices(a,t[r]),Yf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new yh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Cm(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Xm(t,e,e,Tn,oi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Wm),this.bones.push(o),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class wc extends ln{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Er=new Ue,$f=new Ue,Ya=[],Kf=new Yn,tb=new Ue,Eo=new $t,wo=new pi;class Zn extends $t{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wc(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,tb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Er),Kf.copy(e.boundingBox).applyMatrix4(Er),this.boundingBox.union(Kf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Er),wo.copy(e.boundingSphere).applyMatrix4(Er),this.boundingSphere.union(wo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Eo.geometry=this.geometry,Eo.material=this.material,Eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wo.copy(this.boundingSphere),wo.applyMatrix4(n),e.ray.intersectsSphere(wo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Er),$f.multiplyMatrices(n,Er),Eo.matrixWorld=$f,Eo.raycast(e,Ya);for(let o=0,a=Ya.length;o<a;o++){const c=Ya[o];c.instanceId=r,c.object=this,t.push(c)}Ya.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new wc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class xh extends jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zf=new P,Qf=new P,Jf=new Ue,ru=new la,$a=new pi;class Sh extends _t{constructor(e=new An,t=new xh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Zf.fromBufferAttribute(t,i-1),Qf.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Zf.distanceTo(Qf);e.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(i),$a.radius+=r,e.ray.intersectsSphere($a)===!1)return;Jf.copy(i).invert(),ru.copy(e.ray).applyMatrix4(Jf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new P,u=new P,h=new P,d=new P,f=this.isLineSegments?2:1,m=n.index,g=n.attributes.position;if(m!==null){const p=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let v=p,M=x-1;v<M;v+=f){const y=m.getX(v),b=m.getX(v+1);if(l.fromBufferAttribute(g,y),u.fromBufferAttribute(g,b),ru.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let v=p,M=x-1;v<M;v+=f){if(l.fromBufferAttribute(g,v),u.fromBufferAttribute(g,v+1),ru.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const ep=new P,tp=new P;class qm extends Sh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ep.fromBufferAttribute(t,i),tp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ep.distanceTo(tp);e.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nb extends Sh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class jm extends jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const np=new Ue,Uu=new la,Ka=new pi,Za=new P;class ib extends _t{constructor(e=new An,t=new jm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(i),Ka.radius+=r,e.ray.intersectsSphere(Ka)===!1)return;np.copy(i).invert(),Uu.copy(e.ray).applyMatrix4(np);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,_=f;m<_;m++){const g=l.getX(m);Za.fromBufferAttribute(h,g),ip(Za,g,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=d,_=f;m<_;m++)Za.fromBufferAttribute(h,m),ip(Za,m,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ip(s,e,t,n,i,r,o){const a=Uu.distanceSqToPoint(s);if(a<t){const c=new P;Uu.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class sb{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new ye:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new P,i=[],r=[],o=[],a=new P,c=new Ue;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new P)}r[0]=new P,o[0]=new P;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Ut(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Ut(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function rb(s,e){const t=1-s;return t*t*t*e}function ob(s,e){const t=1-s;return 3*t*t*s*e}function ab(s,e){return 3*(1-s)*s*s*e}function cb(s,e){return s*s*s*e}function ou(s,e,t,n,i){return rb(s,e)+ob(s,t)+ab(s,n)+cb(s,i)}class sp extends sb{constructor(e=new P,t=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new P){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ou(e,i.x,r.x,o.x,a.x),ou(e,i.y,r.y,o.y,a.y),ou(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Mh extends An{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new P,d=new P,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const x=[],v=p/n;let M=0;p===0&&o===0?M=.5/t:p===n&&c===Math.PI&&(M=-.5/t);for(let y=0;y<=t;y++){const b=y/t;h.x=-e*Math.cos(i+b*r)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(i+b*r)*Math.sin(o+v*a),m.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),g.push(b+M,1-v),x.push(l++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const v=u[p][x+1],M=u[p][x],y=u[p+1][x],b=u[p+1][x+1];(p!==0||o>0)&&f.push(v,M,b),(p!==n-1||c<Math.PI)&&f.push(M,y,b)}this.setIndex(f),this.setAttribute("position",new Kt(m,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lb extends li{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bh extends jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lh,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ms extends bh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ds extends jn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Te(16777215),this.specular=new Te(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lh,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Us(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Ym(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function $m(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Fu(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function Th(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}function ub(s,e,t,n,i=30){const r=s.clone();r.name=e;const o=[];for(let c=0;c<r.tracks.length;++c){const l=r.tracks[c],u=l.getValueSize(),h=[],d=[];for(let f=0;f<l.times.length;++f){const m=l.times[f]*i;if(!(m<t||m>=n)){h.push(l.times[f]);for(let _=0;_<u;++_)d.push(l.values[f*u+_])}}h.length!==0&&(l.times=Us(h,l.times.constructor),l.values=Us(d,l.values.constructor),o.push(l))}r.tracks=o;let a=1/0;for(let c=0;c<r.tracks.length;++c)a>r.tracks[c].times[0]&&(a=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*a);return r.resetDuration(),r}function hb(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let o=0;o<i;++o){const a=t.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=s.tracks.find(function(p){return p.name===a.name&&p.ValueTypeName===c});if(l===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0;const f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const m=a.times.length-1;let _;if(r<=a.times[0]){const p=u,x=h-u;_=a.values.slice(p,x)}else if(r>=a.times[m]){const p=m*h+u,x=p+h-u;_=a.values.slice(p,x)}else{const p=a.createInterpolant(),x=u,v=h-u;p.evaluate(r),_=p.resultBuffer.slice(x,v)}c==="quaternion"&&new Vt().fromArray(_).normalize().conjugate().toArray(_);const g=l.times.length;for(let p=0;p<g;++p){const x=p*f+d;if(c==="quaternion")Vt.multiplyQuaternionsFlat(l.values,x,_,0,l.values,x);else{const v=f-d*2;for(let M=0;M<v;++M)l.values[x+M]-=_[M]}}}return s.blendMode=Em,s}const ws={convertArray:Us,isTypedArray:Ym,getKeyframeOrder:$m,sortedArray:Fu,flattenJSON:Th,subclip:ub,makeClipAdditive:hb};class da{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class db extends da{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pr,endingEnd:Pr}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Nr:r=e,a=2*t-n;break;case xc:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Nr:o=e,c=2*n-t;break;case xc:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,x=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,v=(-1-f)*g+(1.5+f)*_+.5*m,M=f*g-f*_;for(let y=0;y!==a;++y)r[y]=p*o[u+y]+x*o[l+y]+v*o[c+y]+M*o[h+y];return r}}class Km extends da{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}}class fb extends da{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class mi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Us(t,this.TimeBufferType),this.values=Us(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Us(e.times,Array),values:Us(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new fb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Km(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new db(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Go:t=this.InterpolantFactoryMethodDiscrete;break;case jr:t=this.InterpolantFactoryMethodLinear;break;case Ll:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Go;case this.InterpolantFactoryMethodLinear:return jr;case this.InterpolantFactoryMethodSmooth:return Ll}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Ym(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ll,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const h=a*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){const _=t[h+m];if(_!==t[d+m]||_!==t[f+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=jr;class uo extends mi{}uo.prototype.ValueTypeName="bool";uo.prototype.ValueBufferType=Array;uo.prototype.DefaultInterpolation=Go;uo.prototype.InterpolantFactoryMethodLinear=void 0;uo.prototype.InterpolantFactoryMethodSmooth=void 0;class Zm extends mi{}Zm.prototype.ValueTypeName="color";class Kr extends mi{}Kr.prototype.ValueTypeName="number";class pb extends da{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)Vt.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Ks extends mi{InterpolantFactoryMethodLinear(e){return new pb(this.times,this.values,this.getValueSize(),e)}}Ks.prototype.ValueTypeName="quaternion";Ks.prototype.DefaultInterpolation=jr;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;class ho extends mi{}ho.prototype.ValueTypeName="string";ho.prototype.ValueBufferType=Array;ho.prototype.DefaultInterpolation=Go;ho.prototype.InterpolantFactoryMethodLinear=void 0;ho.prototype.InterpolantFactoryMethodSmooth=void 0;class Zr extends mi{}Zr.prototype.ValueTypeName="vector";class ku{constructor(e,t=-1,n,i=ch){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=qn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(gb(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(mi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=$m(c);c=Fu(c,1,u),l=Fu(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Kr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,m,_){if(f.length!==0){const g=[],p=[];Th(f,g,p,m),g.length!==0&&_.push(new h(d,g,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(const _ in f){const g=[],p=[];for(let x=0;x!==d[m].morphTargets.length;++x){const v=d[m];g.push(v.time),p.push(v.morphTarget===_?1:0)}i.push(new Kr(".morphTargetInfluence["+_+"]",g,p))}c=f.length*o}else{const f=".bones["+t[h].name+"]";n(Zr,f+".position",d,"pos",i),n(Ks,f+".quaternion",d,"rot",i),n(Zr,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function mb(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Kr;case"vector":case"vector2":case"vector3":case"vector4":return Zr;case"color":return Zm;case"quaternion":return Ks;case"bool":case"boolean":return uo;case"string":return ho}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function gb(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=mb(s.type);if(s.times===void 0){const t=[],n=[];Th(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Qr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class _b{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],m=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}}const vb=new _b;class fo{constructor(e){this.manager=e!==void 0?e:vb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}fo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ai={};class yb extends Error{constructor(e,t){super(e),this.response=t}}class Qm extends fo{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Qr.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ai[e]!==void 0){Ai[e].push({onLoad:t,onProgress:n,onError:i});return}Ai[e]=[],Ai[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Ai[e],h=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,m=f!==0;let _=0;const g=new ReadableStream({start(p){x();function x(){h.read().then(({done:v,value:M})=>{if(v)p.close();else{_+=M.byteLength;const y=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let b=0,w=u.length;b<w;b++){const T=u[b];T.onProgress&&T.onProgress(y)}p.enqueue(M),x()}})}}});return new Response(g)}else throw new yb(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Qr.add(e,l);const u=Ai[e];delete Ai[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=Ai[e];if(u===void 0)throw this.manager.itemError(e),l;delete Ai[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class xb extends fo{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Qr.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Ho("img");function c(){u(),Qr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Jm extends fo{constructor(e){super(e)}load(e,t,n,i){const r=new Bt,o=new xb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ll extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const au=new Ue,rp=new P,op=new P;class Eh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mh,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;rp.setFromMatrixPosition(e.matrixWorld),t.position.copy(rp),op.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(op),t.updateMatrixWorld(),au.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(au),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(au)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Sb extends Eh{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Yr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class eg extends ll{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Sb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ap=new Ue,Ao=new P,cu=new P;class Mb extends Eh{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ye(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ao.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ao),cu.copy(n.position),cu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(cu),n.updateMatrixWorld(),i.makeTranslation(-Ao.x,-Ao.y,-Ao.z),ap.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ap)}}class bb extends ll{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Mb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Tb extends Eh{constructor(){super(new ha(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tg extends ll{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new Tb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ng extends ll{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Bu{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Eb extends fo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Qr.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){Qr.add(e,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){i&&i(c),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}let ig=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=cp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function cp(){return(typeof performance>"u"?Date:performance).now()}class wb{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Vt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;Vt.multiplyQuaternionsFlat(e,o,e,t,e,n),Vt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const wh="\\[\\]\\.:\\/",Ab=new RegExp("["+wh+"]","g"),Ah="[^"+wh+"]",Cb="[^"+wh.replace("\\.","")+"]",Rb=/((?:WC+[\/:])*)/.source.replace("WC",Ah),Ib=/(WCOD+)?/.source.replace("WCOD",Cb),Db=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ah),Pb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ah),Nb=new RegExp("^"+Rb+Ib+Db+Pb+"$"),Lb=["material","materials","bones","map"];class Ob{constructor(e,t,n){const i=n||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class tt{constructor(e,t,n){this.path=t,this.parsedPath=n||tt.parseTrackName(t),this.node=tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new tt.Composite(e,t,n):new tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ab,"")}static parseTrackName(e){const t=Nb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Lb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tt.Composite=Ob;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ub{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:Pr,endingEnd:Pr};for(let l=0;l!==o;++l){const u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Tm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Em:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case ch:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===Mv;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Sv){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Nr,i.endingEnd=Nr):(e?i.endingStart=this.zeroSlopeAtStart?Nr:Pr:i.endingStart=xc,t?i.endingEnd=this.zeroSlopeAtEnd?Nr:Pr:i.endingEnd=xc)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}}const Fb=new Float32Array(1);class kb extends qi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){const d=i[h],f=d.name;let m=u[f];if(m!==void 0)++m.referenceCount,o[h]=m;else{if(m=o[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;m=new wb(tt.create(n,f,_),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),o[h]=m}a[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Km(new Float32Array(2),new Float32Array(2),1,Fb),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?ku.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=ch),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new Ub(this,o,t,n);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?ku.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Bb{constructor(e,t,n=0,i=1/0){this.ray=new la(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new fh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Vu(e,this,n,t),n.sort(lp),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Vu(e[i],this,n,t);return n.sort(lp),n}}function lp(s,e){return s.distance-e.distance}function Vu(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)Vu(i[r],e,t,!0)}}class Vb extends qm{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new An;i.setAttribute("position",new Kt(t,3)),i.setAttribute("color",new Kt(n,3));const r=new xh({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new Te,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rh);function up(s,e){if(e===bv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Du||e===wm){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Du)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class sg extends fo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Xb(t)}),this.register(function(t){return new Jb(t)}),this.register(function(t){return new eT(t)}),this.register(function(t){return new tT(t)}),this.register(function(t){return new jb(t)}),this.register(function(t){return new Yb(t)}),this.register(function(t){return new $b(t)}),this.register(function(t){return new Kb(t)}),this.register(function(t){return new Wb(t)}),this.register(function(t){return new Zb(t)}),this.register(function(t){return new qb(t)}),this.register(function(t){return new Qb(t)}),this.register(function(t){return new Gb(t)}),this.register(function(t){return new nT(t)}),this.register(function(t){return new iT(t)})}load(e,t,n,i){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Bu.extractUrlBase(e),this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Qm(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===rg){try{o[Ye.KHR_BINARY_GLTF]=new sT(e)}catch(h){i&&i(h);return}r=JSON.parse(o[Ye.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new _T(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Ye.KHR_MATERIALS_UNLIT:o[h]=new Hb;break;case Ye.KHR_DRACO_MESH_COMPRESSION:o[h]=new rT(r,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:o[h]=new oT;break;case Ye.KHR_MESH_QUANTIZATION:o[h]=new aT;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function zb(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Gb{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new Te(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],zt);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new tg(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new bb(u),l.distance=h;break;case"spot":l=new eg(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,is(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class Hb{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return ai}extendParams(e,t,n){const i=[];e.color=new Te(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],zt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,gt))}return Promise.all(i)}}class Wb{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Xb{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ms}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ye(a,a)}return Promise.all(r)}}class qb{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ms}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class jb{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ms}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],zt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,gt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Yb{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ms}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class $b{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ms}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(a[0],a[1],a[2],zt),Promise.all(r)}}class Kb{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ms}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Zb{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ms}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(a[0],a[1],a[2],zt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,gt)),Promise.all(r)}}class Qb{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ms}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Jb{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class eT{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class tT{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class nT{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class iT{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Nn.TRIANGLES&&l.mode!==Nn.TRIANGLE_STRIP&&l.mode!==Nn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const m of h){const _=new Ue,g=new P,p=new Vt,x=new P(1,1,1),v=new Zn(m.geometry,m.material,d);for(let M=0;M<d;M++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,M),c.SCALE&&x.fromBufferAttribute(c.SCALE,M),v.setMatrixAt(M,_.compose(g,p,x));for(const M in c)M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&m.geometry.setAttribute(M,c[M]);_t.prototype.copy.call(v,m),this.parser.assignFinalMaterial(v),f.push(v)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const rg="glTF",Co=12,hp={JSON:1313821514,BIN:5130562};class sT{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Co),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==rg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Co,r=new DataView(e,Co);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===hp.JSON){const l=new Uint8Array(e,Co+o,a);this.content=n.decode(l)}else if(c===hp.BIN){const l=Co+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class rT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=zu[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=zu[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Br[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(d){for(const f in d.attributes){const m=d.attributes[f],_=c[f];_!==void 0&&(m.normalized=_)}h(d)},a,l)})})}}class oT{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class aT{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}}class og extends da{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,m=e*l,_=m-l,g=-2*f+3*d,p=f-d,x=1-g,v=p-d+h;for(let M=0;M!==a;M++){const y=o[_+M+a],b=o[_+M+c]*u,w=o[m+M+a],T=o[m+M]*u;r[M]=x*y+v*b+g*w+p*T}return r}}const cT=new Vt;class lT extends og{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return cT.fromArray(r).normalize().toArray(r),r}}const Nn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Br={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},dp={9728:Rt,9729:hn,9984:Iu,9985:_m,9986:fc,9987:$s},fp={33071:Un,33648:yc,10497:pn},lu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},zu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ts={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},uT={CUBICSPLINE:void 0,LINEAR:jr,STEP:Go},uu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function hT(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new bh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gi})),s.DefaultMaterial}function As(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function is(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function dT(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function fT(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function pT(s){let e;const t=s.extensions&&s.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+hu(t.attributes):e=s.indices+":"+hu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+hu(s.targets[n]);return e}function hu(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Gu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function mT(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const gT=new Ue;class _T{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new zb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Jm(this.options.manager):this.textureLoader=new Eb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Qm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return As(r,a,i),is(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Bu.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=lu[i.type],a=Br[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new ln(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=lu[i.type],l=Br[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let _,g;if(f&&f!==h){const p=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let v=t.cache.get(x);v||(_=new l(a,p*f,i.count*f/u),v=new ZM(_,f/u),t.cache.add(x,v)),g=new vh(v,c,d%f/u,m)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),g=new ln(_,c,m);if(i.sparse!==void 0){const p=lu.SCALAR,x=Br[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,y=new x(o[1],v,i.sparse.count*p),b=new l(o[2],M,i.sparse.count*c);a!==null&&(g=new ln(g.array.slice(),g.itemSize,g.normalized));for(let w=0,T=y.length;w<T;w++){const S=y[w];if(g.setX(S,b[w*c]),c>=2&&g.setY(S,b[w*c+1]),c>=3&&g.setZ(S,b[w*c+2]),c>=4&&g.setW(S,b[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=dp[d.magFilter]||hn,u.minFilter=dp[d.minFilter]||$s,u.wrapS=fp[d.wrapS]||pn,u.wrapT=fp[d.wrapT]||pn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(_){const g=new Bt(_);g.needsUpdate=!0,d(g)}),t.load(Bu.resolveURL(h,r.path),m,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),h.userData.mimeType=o.mimeType||mT(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ye.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new jm,jn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new xh,jn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return bh}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[Ye.KHR_MATERIALS_UNLIT]){const h=i[Ye.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Te(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],zt),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,gt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=bn);const u=r.alphaMode||uu.OPAQUE;if(u===uu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===uu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==ai&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ye(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==ai&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==ai){const h=r.emissiveFactor;a.emissive=new Te().setRGB(h[0],h[1],h[2],zt)}return r.emissiveTexture!==void 0&&o!==ai&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,gt)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),is(h,r),t.associations.set(h,{materials:e}),r.extensions&&As(i,h,r),h})}createUniqueName(e){const t=tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return pp(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=pT(l),h=i[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=pp(new An,l,t),i[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?hT(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,m=u.length;f<m;f++){const _=u[f],g=o[f];let p;const x=l[f];if(g.mode===Nn.TRIANGLES||g.mode===Nn.TRIANGLE_STRIP||g.mode===Nn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new JM(_,x):new $t(_,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Nn.TRIANGLE_STRIP?p.geometry=up(p.geometry,wm):g.mode===Nn.TRIANGLE_FAN&&(p.geometry=up(p.geometry,Du));else if(g.mode===Nn.LINES)p=new qm(_,x);else if(g.mode===Nn.LINE_STRIP)p=new Sh(_,x);else if(g.mode===Nn.LINE_LOOP)p=new nb(_,x);else if(g.mode===Nn.POINTS)p=new ib(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&fT(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),is(p,r),g.extensions&&As(i,p,g),t.assignFinalMaterial(p),h.push(p)}for(let f=0,m=h.length;f<m;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&As(i,h[0],r),h[0];const d=new Os;r.extensions&&As(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=h.length;f<m;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new rn(et.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ha(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),is(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const d=new Ue;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new yh(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],m=i.samplers[f.sampler],_=f.target,g=_.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,x=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(m),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],m=h[2],_=h[3],g=h[4],p=[];for(let x=0,v=d.length;x<v;x++){const M=d[x],y=f[x],b=m[x],w=_[x],T=g[x];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const S=n._createAnimationTracks(M,y,b,w,T);if(S)for(let E=0;E<S.length;E++)p.push(S[E])}return new ku(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,gT)});for(let f=0,m=h.length;f<m;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Wm:l.length>1?u=new Os:l.length===1?u=l[0]:u=new _t,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),is(u,r),r.extensions&&As(n,u,r),r.matrix!==void 0){const h=new Ue;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Os;n.name&&(r.name=i.createUniqueName(n.name)),is(r,n),n.extensions&&As(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof jn||d instanceof Bt)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];ts[r.path]===ts.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(ts[r.path]){case ts.weights:l=Kr;break;case ts.rotation:l=Ks;break;case ts.position:case ts.scale:l=Zr;break;default:switch(n.itemSize){case 1:l=Kr;break;case 2:case 3:default:l=Zr;break}break}const u=i.interpolation!==void 0?uT[i.interpolation]:jr,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const m=new l(c[d]+"."+ts[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Gu(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ks?lT:og;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function vT(s,e,t){const n=e.attributes,i=new Yn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),a.normalized){const u=Gu(Br[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new P,c=new P;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const _=Gu(Br[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new pi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function pp(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=zu[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Ke.workingColorSpace!==zt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),is(s,e),vT(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?dT(s,e.targets,t):s})}var Or={i8:"i8",ui8:"ui8",ui8c:"ui8c",i16:"i16",ui16:"ui16",i32:"i32",ui32:"ui32",f32:"f32",f64:"f64",eid:"eid"},mp={i8:"Int8",ui8:"Uint8",ui8c:"Uint8Clamped",i16:"Int16",ui16:"Uint16",i32:"Int32",ui32:"Uint32",eid:"Uint32",f32:"Float32",f64:"Float64"},Fs={i8:Int8Array,ui8:Uint8Array,ui8c:Uint8ClampedArray,i16:Int16Array,ui16:Uint16Array,i32:Int32Array,ui32:Uint32Array,f32:Float32Array,f64:Float64Array,eid:Uint32Array},gp={uint8:2**8,uint16:2**16,uint32:2**32},yT=s=>e=>Math.ceil(e/s)*s,xT=yT(4),ST=Symbol("storeRef"),Hu=Symbol("storeSize"),MT=Symbol("storeMaps"),Ws=Symbol("storeFlattened"),Qa=Symbol("storeBase"),bT=Symbol("storeType"),ag=Symbol("storeArrayElementCounts"),mc=Symbol("storeSubarrays"),cg=Symbol("subarrayCursors"),TT=Symbol("subarray"),Wu=Symbol("parentArray"),lg=Symbol("tagStore"),_p=Symbol("indexType"),vp=Symbol("indexBytes"),ug=Symbol("isEidType"),Ci={},ET=(s,e)=>{if(ArrayBuffer.isView(s))s[e]=s.slice(0);else{const t=s[Wu].slice(0);s[e]=s.map((n,i)=>{const{length:r}=s[i],o=r*i,a=o+r;return t.subarray(o,a)})}},wT=(s,e)=>{s[Ws]&&s[Ws].forEach(t=>{ArrayBuffer.isView(t)?t[e]=0:t[e].fill(0)})},AT=(s,e)=>{const t=e*Fs[s].BYTES_PER_ELEMENT,n=new ArrayBuffer(t),i=new Fs[s](n);return i[ug]=s===Or.eid,i},CT=(s,e,t)=>{const n=s[Hu],i=Array(n).fill(0);i[bT]=e,i[ug]=e===Or.eid;const r=s[cg],o=t<=gp.uint8?Or.ui8:t<=gp.uint16?Or.ui16:Or.ui32;if(!t)throw new Error("bitECS - Must define component array length");if(!Fs[e])throw new Error(`bitECS - Invalid component array property type ${e}`);if(!s[mc][e]){const l=s[ag][e],u=new Fs[e](xT(l*n));u[_p]=mp[o],u[vp]=Fs[o].BYTES_PER_ELEMENT,s[mc][e]=u}const a=r[e],c=a+n*t;r[e]=c,i[Wu]=s[mc][e].subarray(a,c);for(let l=0;l<n;l++){const u=t*l,h=u+t;i[l]=i[Wu].subarray(u,h),i[l][_p]=mp[o],i[l][vp]=Fs[o].BYTES_PER_ELEMENT,i[l][TT]=!0}return i},yp=s=>Array.isArray(s)&&typeof s[0]=="string"&&typeof s[1]=="number",RT=(s,e)=>{const t=Symbol("store");if(!s||!Object.keys(s).length)return Ci[t]={[Hu]:e,[lg]:!0,[Qa]:()=>Ci[t]},Ci[t];s=JSON.parse(JSON.stringify(s));const n={},i=o=>{const a=Object.keys(o);for(const c of a)yp(o[c])?(n[o[c][0]]||(n[o[c][0]]=0),n[o[c][0]]+=o[c][1]):o[c]instanceof Object&&i(o[c])};i(s);const r={[Hu]:e,[MT]:{},[mc]:{},[ST]:t,[cg]:Object.keys(Fs).reduce((o,a)=>({...o,[a]:0}),{}),[Ws]:[],[ag]:n};if(s instanceof Object&&Object.keys(s).length){const o=(a,c)=>{if(typeof a[c]=="string")a[c]=AT(a[c],e),a[c][Qa]=()=>Ci[t],r[Ws].push(a[c]);else if(yp(a[c])){const[l,u]=a[c];a[c]=CT(r,l,u),a[c][Qa]=()=>Ci[t],r[Ws].push(a[c])}else a[c]instanceof Object&&(a[c]=Object.keys(a[c]).reduce(o,a[c]));return a};return Ci[t]=Object.assign(Object.keys(s).reduce(o,s),r),Ci[t][Qa]=()=>Ci[t],Ci[t]}},Po=()=>{const s=[],e=[];s.sort=function(o){const a=Array.prototype.sort.call(this,o);for(let c=0;c<s.length;c++)e[s[c]]=c;return a};const t=o=>s[e[o]]===o;return{add:o=>{t(o)||(e[o]=s.push(o)-1)},remove:o=>{if(!t(o))return;const a=e[o],c=s.pop();c!==o&&(s[a]=c,e[c]=a)},has:t,sparse:e,dense:s,reset:()=>{s.length=0,e.length=0}}},us=Symbol("entityMasks"),ul=Symbol("entityComponents"),Zs=Symbol("entitySparseSet"),ko=Symbol("entityArray"),IT=1e5,Xu=0,hg=IT,Ch=()=>hg,No=[],DT=.01,PT=DT,NT=()=>Xu,LT=new Map,xp=s=>{const e=s[Lh]?No.length?No.shift():Xu++:No.length>Math.round(hg*PT)?No.shift():Xu++;if(e>s[Nh])throw new Error("bitECS - max entities reached");return s[Zs].add(e),LT.set(e,s),s[Rh].forEach(t=>{Ih(s,t,e)&&Dh(t,e)}),s[ul].set(e,new Set),e},OT=(s,e)=>{if(s[Zs].has(e)){s[hl].forEach(t=>{pg(s,t,e)}),s[Lh]||No.push(e),s[Zs].remove(e),s[ul].delete(e),s[mg].delete(s[ju].get(e)),s[ju].delete(e);for(let t=0;t<s[us].length;t++)s[us][t][e]=0}},UT=Symbol("$modifier"),hl=Symbol("queries"),Rh=Symbol("notQueries"),FT=Symbol("queryAny"),kT=Symbol("queryAll"),BT=Symbol("queryNone"),Ac=Symbol("queryMap"),Bo=Symbol("$dirtyQueries"),dg=Symbol("queryComponents"),VT=(s,e)=>{const t=[],n=[],i=[];e[dg].forEach(y=>{if(typeof y=="function"&&y[UT]){const[b,w]=y();s[Bi].has(b)||qu(s,b),w==="not"&&n.push(b),w==="changed"&&(i.push(b),t.push(b))}else s[Bi].has(y)||qu(s,y),t.push(y)});const r=y=>s[Bi].get(y),o=t.concat(n).map(r),a=Po(),c=[],l=[],u=Po(),h=Po(),d=Po(),f=o.map(y=>y.generationId).reduce((y,b)=>(y.includes(b)||y.push(b),y),[]),m=(y,b)=>(y[b.generationId]||(y[b.generationId]=0),y[b.generationId]|=b.bitflag,y),_=t.map(r).reduce(m,{}),g=n.map(r).reduce(m,{}),p=o.reduce(m,{}),x=t.filter(y=>!y[lg]).map(y=>Object.getOwnPropertySymbols(y).includes(Ws)?y[Ws]:[y]).reduce((y,b)=>y.concat(b),[]),M=Object.assign(a,{archetypes:c,changed:l,components:t,notComponents:n,changedComponents:i,allComponents:o,masks:_,notMasks:g,hasMasks:p,generations:f,flatProps:x,toRemove:u,entered:h,exited:d,shadows:[]});s[Ac].set(e,M),s[hl].add(M),o.forEach(y=>{y.queries.add(M)}),n.length&&s[Rh].add(M);for(let y=0;y<NT();y++){if(!s[Zs].has(y))continue;Ih(s,M,y)&&Dh(M,y)}},zT=(s,e)=>{const t=Symbol(),n=s.flatProps[e];return ET(n,t),s.shadows[e]=n[t],n[t]},GT=(s,e)=>{e&&(s.changed=[]);const{flatProps:t,shadows:n}=s;for(let i=0;i<s.dense.length;i++){const r=s.dense[i];let o=!1;for(let a=0;a<t.length;a++){const c=t[a],l=n[a]||zT(s,a);if(ArrayBuffer.isView(c[r])){for(let u=0;u<c[r].length;u++)if(c[r][u]!==l[r][u]){o=!0;break}l[r].set(c[r])}else c[r]!==l[r]&&(o=!0,l[r]=c[r])}o&&s.changed.push(r)}return s.changed},fg=(...s)=>{let e,t,n,i;if(Array.isArray(s[0])&&(e=s[0]),e===void 0||e[Bi]!==void 0)return o=>o?o[ko]:e[ko];const r=function(o,a=!0){o[Ac].has(r)||VT(o,r);const c=o[Ac].get(r);return WT(o),c.changedComponents.length?GT(c,a):c.dense};return r[dg]=e,r[FT]=t,r[kT]=n,r[BT]=i,r},Ih=(s,e,t)=>{const{masks:n,notMasks:i,generations:r}=e;for(let o=0;o<r.length;o++){const a=r[o],c=n[a],l=i[a],u=s[us][a][t];if(l&&u&l||c&&(u&c)!==c)return!1}return!0},Dh=(s,e)=>{s.toRemove.remove(e),s.entered.add(e),s.add(e)},HT=s=>{for(let e=s.toRemove.dense.length-1;e>=0;e--){const t=s.toRemove.dense[e];s.toRemove.remove(t),s.remove(t)}},WT=s=>{s[Bo].size&&(s[Bo].forEach(HT),s[Bo].clear())},pg=(s,e,t)=>{!e.has(t)||e.toRemove.has(t)||(e.toRemove.add(t),s[Bo].add(e),e.exited.add(t))},Bi=Symbol("componentMap"),Ph=(s,e)=>{const t=RT(s,e||Ch());return s&&Object.keys(s).length,t},XT=s=>{s[Vo]*=2,s[Vo]>=2**31&&(s[Vo]=1,s[us].push(new Uint32Array(s[Nh])))},qu=(s,e)=>{if(!e)throw new Error("bitECS - Cannot register null or undefined component");const t=new Set,n=new Set,i=new Set;s[hl].forEach(r=>{r.allComponents.includes(e)&&t.add(r)}),s[Bi].set(e,{generationId:s[us].length-1,bitflag:s[Vo],store:e,queries:t,notQueries:n,changedQueries:i}),XT(s)},qT=(s,e,t)=>{const n=s[Bi].get(e);if(!n)return!1;const{generationId:i,bitflag:r}=n;return(s[us][i][t]&r)===r},Ja=(s,e,t,n=!1)=>{if(t===void 0)throw new Error("bitECS - entity is undefined.");if(!s[Zs].has(t))throw new Error("bitECS - entity does not exist in the world.");if(s[Bi].has(e)||qu(s,e),qT(s,e,t))return;const i=s[Bi].get(e),{generationId:r,bitflag:o,queries:a,notQueries:c}=i;s[us][r][t]|=o,a.forEach(l=>{l.toRemove.remove(t);const u=Ih(s,l,t);u&&(l.exited.remove(t),Dh(l,t)),u||(l.entered.remove(t),pg(s,l,t))}),s[ul].get(t).add(e),n&&wT(e,t)},Nh=Symbol("size"),Vo=Symbol("bitflag"),jT=Symbol("archetypes"),mg=Symbol("localEntities"),ju=Symbol("localEntityLookup"),Lh=Symbol("manualEntityRecycling"),YT=(...s)=>{const e=typeof s[0]=="object"?s[0]:{},t=typeof s[0]=="number"?s[0]:typeof s[1]=="number"?s[1]:Ch();return $T(e,t),e},$T=(s,e=Ch())=>(s[Nh]=e,s[ko]&&s[ko].forEach(t=>OT(s,t)),s[us]=[new Uint32Array(e)],s[ul]=new Map,s[jT]=[],s[Zs]=Po(),s[ko]=s[Zs].dense,s[Vo]=1,s[Bi]=new Map,s[Ac]=new Map,s[hl]=new Set,s[Rh]=new Set,s[Bo]=new Set,s[mg]=new Map,s[ju]=new Map,s[Lh]=!1,s),KT=(...s)=>e=>{let t=e;for(let n=0;n<s.length;n++){const i=s[n];t=i(t)}return t},ZT=Or;const QT=s=>{const e=YT();return s===void 0?e.camera=new rn(120,1/(window.innerWidth/window.innerHeight),.01,1e3):e.camera=s,e.scene=new Wo,e.renderer=new _h({antialias:!1}),e.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(e.renderer.domElement),e.camera.aspect=window.innerWidth/window.innerHeight,e.camera.updateProjectionMatrix(),window.addEventListener("resize",()=>{e.camera.aspect=window.innerWidth/window.innerHeight,e.camera.updateProjectionMatrix(),e.renderer.setSize(window.innerWidth,window.innerHeight),console.log(e.renderer.getRenderTarget())}),e.objects=new Map,e.clock=new ig,e.time={last:0,delta:0,elapsed:0},e.pointer=new ye,e},{f32:ks}=ZT,Sp={x:ks,y:ks,z:ks},JT={x:ks,y:ks,z:ks,w:ks},eE={position:Sp,rotation:JT,scale:Sp},Jr=Ph(eE),gg=Ph(),_g=Ph(),Mp=(s,e)=>(s.eid=e,Object.defineProperty(s.position,"eid",{get:()=>e}),Object.defineProperty(s.position,"store",{get:()=>Jr.position}),Object.defineProperty(s.position,"x",{get(){return this.store.x[this.eid]},set(t){this.store.x[this.eid]=t}}),Object.defineProperty(s.position,"y",{get(){return this.store.y[this.eid]},set(t){this.store.y[this.eid]=t}}),Object.defineProperty(s.position,"z",{get(){return this.store.z[this.eid]},set(t){this.store.z[this.eid]=t}}),Object.defineProperty(s.rotation,"eid",{get:()=>e}),Object.defineProperty(s.rotation,"store",{get:()=>Jr.rotation}),Object.defineProperty(s.rotation,"_x",{get(){return this.store.x[this.eid]},set(t){this.store.x[this.eid]=t}}),Object.defineProperty(s.rotation,"_y",{get(){return this.store.y[this.eid]},set(t){this.store.y[this.eid]=t}}),Object.defineProperty(s.rotation,"_z",{get(){return this.store.z[this.eid]},set(t){this.store.z[this.eid]=t}}),s);let vg={MoveDir:new ye,SPACE:0,LeftClick:0,RightClick:0,pointer:new ye,diffX:0,diffY:0,pointerX:.5,pointerY:.5,startX:.5,startY:.5,mouseMove:!1};const bp={type:"start"},tE={type:"end"};class nE extends qi{constructor(e){super();const t=new ye(0,1),n=new ye(0,-1),i=new ye(1,0),r=new ye(-1,0);this.domElement=e,this.domElement.style.touchAction="none";const o=this;this.current_input=vg;let a=[];this.touches={ONE:vc.MOVE,TWO:vc.DOLLY_PAN};const c=[],l={},u={NONE:-1,MOVE:0};let h=u.NONE;function d(R){return a.includes(R)}this.keydown=function(R){a.includes(R.keyCode)||a.push(R.keyCode)},this.keyup=function(R){a.includes(R.keyCode)&&a.splice(a.indexOf(R.keyCode),1)},this.checkGameKeys=function(){this.current_input.MoveDir.set(0,0),d(65)&&this.current_input.MoveDir.add(r),d(68)&&this.current_input.MoveDir.add(i),d(87)&&this.current_input.MoveDir.add(t),d(83)&&this.current_input.MoveDir.add(n)};let f=!1,m=window.innerWidth/2,_=window.innerHeight/2,g=window.innerWidth/2,p=window.innerHeight/2,x=0,v=0;this.update=function(R){this.checkGameKeys(),this.current_input.diffX=x/window.innerWidth,this.current_input.diffY=v/window.innerWidth,this.current_input.startX=g/window.innerWidth*2-1,this.current_input.startY=-(p/window.innerWidth)*2+1,this.current_input.pointerX=m/window.innerWidth*2-1,this.current_input.pointerY=-(_/window.innerWidth)*2+1,this.current_input.mouseMove=f,x=v=0};const M=this.keydown.bind(this),y=this.keyup.bind(this);function b(R){let H=l[R.pointerId];H===void 0&&(H=new ye,l[R.pointerId]=H),console.log(R.pageX,R.pageY),H.set(R.pageX,R.pageY)}function w(R){switch(b(R),c.length){case 1:if(o.enableRotate===!1)return;T(),h=u.MOVE;break;case 2:switch(o.touches.TWO){default:h=u.NONE}break;default:h=u.NONE}h!==u.NONE&&o.dispatchEvent(bp)}function T(){c.length===1&&(m=c[0].pageX,g=c[0].pageX,_=c[0].pageY,p=c[0].pageY)}function S(R){switch(b(R),console.log("touch move",c),h){case u.MOVE:if(o.enableRotate===!1)return;E(R);break;default:h=u.NONE}}function E(R){c.length===1&&(f=!0,R.pageX<m?x=m-R.pageX:R.pageX>m&&(x=R.pageX-m),x=R.pageX-m,R.pageY<_?v=_-R.pageY:R.pageY>_&&(v=R.pageY-_),v=R.pageY-_,m=R.pageX,_=R.pageY)}let L=On.None;function F(R){switch(R.button){case 0:L=On.LEFT,V(R);break;case 1:L=On.MIDDLE;break;case 2:L=On.RIGHT;break;default:L=-1}h!==u.NONE&&o.dispatchEvent(bp)}function V(R){m=R.pageX,_=R.pageY,g=R.pageX,p=R.pageY}function C(R){if(o.enabled!==!1)switch(L){case On.LEFT:if(o.enableZoom===!1)return;U(R);break;case On.MIDDLE:if(o.enablePan===!1)return;handleMouseMovePan(R);break}}function U(R){f=!0,R.pageX<m?x=m-R.pageX:R.pageX>m&&(x=R.pageX-m),x=R.pageX-m,R.pageY<_?v=_-R.pageY:R.pageY>_&&(v=R.pageY-_),v=R.pageY-_,m=R.pageX,_=R.pageY}function k(R){c.push(R)}function O(R){delete l[R.pointerId];for(let H=0;H<c.length;H++)if(c[H].pointerId==R.pointerId){c.splice(H,1);return}}function j(R){o.enabled!==!1&&(c.length===0&&(o.domElement.setPointerCapture(R.pointerId),o.domElement.addEventListener("pointermove",B),o.domElement.addEventListener("pointerup",X)),k(R),R.pointerType==="touch"?w(R):F(R))}function B(R){o.enabled!==!1&&(R.pointerType==="touch"?S(R):C(R))}function X(R){O(R),c.length===0&&(o.domElement.releasePointerCapture(R.pointerId),o.domElement.removeEventListener("pointermove",B),o.domElement.removeEventListener("pointerup",X)),o.dispatchEvent(tE),L=-1,f=!1,x=0,v=0}window.addEventListener("keydown",M,!1),window.addEventListener("keyup",y,!1),o.domElement.addEventListener("pointerdown",j,!1),o.domElement.addEventListener("pointercancel",X,!1)}init(e){}execute(e,t){this.checkGameKeys()}}const yg="14.7.77",Tp=(s,e,t)=>({endTime:e,insertTime:t,type:"exponentialRampToValue",value:s}),Ep=(s,e,t)=>({endTime:e,insertTime:t,type:"linearRampToValue",value:s}),Yu=(s,e)=>({startTime:e,type:"setValue",value:s}),xg=(s,e,t)=>({duration:t,startTime:e,type:"setValueCurve",values:s}),Sg=(s,e,{startTime:t,target:n,timeConstant:i})=>n+(e-n)*Math.exp((t-s)/i),Ur=s=>s.type==="exponentialRampToValue",Cc=s=>s.type==="linearRampToValue",ss=s=>Ur(s)||Cc(s),Oh=s=>s.type==="setValue",Li=s=>s.type==="setValueCurve",Rc=(s,e,t,n)=>{const i=s[e];return i===void 0?n:ss(i)||Oh(i)?i.value:Li(i)?i.values[i.values.length-1]:Sg(t,Rc(s,e-1,i.startTime,n),i)},wp=(s,e,t,n,i)=>t===void 0?[n.insertTime,i]:ss(t)?[t.endTime,t.value]:Oh(t)?[t.startTime,t.value]:Li(t)?[t.startTime+t.duration,t.values[t.values.length-1]]:[t.startTime,Rc(s,e-1,t.startTime,i)],$u=s=>s.type==="cancelAndHold",Ku=s=>s.type==="cancelScheduledValues",ns=s=>$u(s)||Ku(s)?s.cancelTime:Ur(s)||Cc(s)?s.endTime:s.startTime,Ap=(s,e,t,{endTime:n,value:i})=>t===i?i:0<t&&0<i||t<0&&i<0?t*(i/t)**((s-e)/(n-e)):0,Cp=(s,e,t,{endTime:n,value:i})=>t+(s-e)/(n-e)*(i-t),iE=(s,e)=>{const t=Math.floor(e),n=Math.ceil(e);return t===n?s[t]:(1-(e-t))*s[t]+(1-(n-e))*s[n]},sE=(s,{duration:e,startTime:t,values:n})=>{const i=(s-t)/e*(n.length-1);return iE(n,i)},ec=s=>s.type==="setTarget";class rE{constructor(e){this._automationEvents=[],this._currenTime=0,this._defaultValue=e}[Symbol.iterator](){return this._automationEvents[Symbol.iterator]()}add(e){const t=ns(e);if($u(e)||Ku(e)){const n=this._automationEvents.findIndex(r=>Ku(e)&&Li(r)?r.startTime+r.duration>=t:ns(r)>=t),i=this._automationEvents[n];if(n!==-1&&(this._automationEvents=this._automationEvents.slice(0,n)),$u(e)){const r=this._automationEvents[this._automationEvents.length-1];if(i!==void 0&&ss(i)){if(r!==void 0&&ec(r))throw new Error("The internal list is malformed.");const o=r===void 0?i.insertTime:Li(r)?r.startTime+r.duration:ns(r),a=r===void 0?this._defaultValue:Li(r)?r.values[r.values.length-1]:r.value,c=Ur(i)?Ap(t,o,a,i):Cp(t,o,a,i),l=Ur(i)?Tp(c,t,this._currenTime):Ep(c,t,this._currenTime);this._automationEvents.push(l)}if(r!==void 0&&ec(r)&&this._automationEvents.push(Yu(this.getValue(t),t)),r!==void 0&&Li(r)&&r.startTime+r.duration>t){const o=t-r.startTime,a=(r.values.length-1)/r.duration,c=Math.max(2,1+Math.ceil(o*a)),l=o/(c-1)*a,u=r.values.slice(0,c);if(l<1)for(let h=1;h<c;h+=1){const d=l*h%1;u[h]=r.values[h-1]*(1-d)+r.values[h]*d}this._automationEvents[this._automationEvents.length-1]=xg(u,r.startTime,o)}}}else{const n=this._automationEvents.findIndex(o=>ns(o)>t),i=n===-1?this._automationEvents[this._automationEvents.length-1]:this._automationEvents[n-1];if(i!==void 0&&Li(i)&&ns(i)+i.duration>t)return!1;const r=Ur(e)?Tp(e.value,e.endTime,this._currenTime):Cc(e)?Ep(e.value,t,this._currenTime):e;if(n===-1)this._automationEvents.push(r);else{if(Li(e)&&t+e.duration>ns(this._automationEvents[n]))return!1;this._automationEvents.splice(n,0,r)}}return!0}flush(e){const t=this._automationEvents.findIndex(n=>ns(n)>e);if(t>1){const n=this._automationEvents.slice(t-1),i=n[0];ec(i)&&n.unshift(Yu(Rc(this._automationEvents,t-2,i.startTime,this._defaultValue),i.startTime)),this._automationEvents=n}}getValue(e){if(this._automationEvents.length===0)return this._defaultValue;const t=this._automationEvents.findIndex(o=>ns(o)>e),n=this._automationEvents[t],i=(t===-1?this._automationEvents.length:t)-1,r=this._automationEvents[i];if(r!==void 0&&ec(r)&&(n===void 0||!ss(n)||n.insertTime>e))return Sg(e,Rc(this._automationEvents,i-1,r.startTime,this._defaultValue),r);if(r!==void 0&&Oh(r)&&(n===void 0||!ss(n)))return r.value;if(r!==void 0&&Li(r)&&(n===void 0||!ss(n)||r.startTime+r.duration>e))return e<r.startTime+r.duration?sE(e,r):r.values[r.values.length-1];if(r!==void 0&&ss(r)&&(n===void 0||!ss(n)))return r.value;if(n!==void 0&&Ur(n)){const[o,a]=wp(this._automationEvents,i,r,n,this._defaultValue);return Ap(e,o,a,n)}if(n!==void 0&&Cc(n)){const[o,a]=wp(this._automationEvents,i,r,n,this._defaultValue);return Cp(e,o,a,n)}return this._defaultValue}}const oE=s=>({cancelTime:s,type:"cancelAndHold"}),aE=s=>({cancelTime:s,type:"cancelScheduledValues"}),cE=(s,e)=>({endTime:e,type:"exponentialRampToValue",value:s}),lE=(s,e)=>({endTime:e,type:"linearRampToValue",value:s}),uE=(s,e,t)=>({startTime:e,target:s,timeConstant:t,type:"setTarget"}),hE=()=>new DOMException("","AbortError"),dE=s=>(e,t,[n,i,r],o)=>{s(e[i],[t,n,r],a=>a[0]===t&&a[1]===n,o)},fE=s=>(e,t,n)=>{const i=[];for(let r=0;r<n.numberOfInputs;r+=1)i.push(new Set);s.set(e,{activeInputs:i,outputs:new Set,passiveInputs:new WeakMap,renderer:t})},pE=s=>(e,t)=>{s.set(e,{activeInputs:new Set,passiveInputs:new WeakMap,renderer:t})},eo=new WeakSet,Mg=new WeakMap,Uh=new WeakMap,bg=new WeakMap,Fh=new WeakMap,dl=new WeakMap,Tg=new WeakMap,Zu=new WeakMap,Qu=new WeakMap,Ju=new WeakMap,Eg={construct(){return Eg}},mE=s=>{try{const e=new Proxy(s,Eg);new e}catch{return!1}return!0},Rp=/^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,Ip=(s,e)=>{const t=[];let n=s.replace(/^[\s]+/,""),i=n.match(Rp);for(;i!==null;){const r=i[1].slice(1,-1),o=i[0].replace(/([\s]+)?;?$/,"").replace(r,new URL(r,e).toString());t.push(o),n=n.slice(i[0].length).replace(/^[\s]+/,""),i=n.match(Rp)}return[t.join(";"),n]},Dp=s=>{if(s!==void 0&&!Array.isArray(s))throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.")},Pp=s=>{if(!mE(s))throw new TypeError("The given value for processorCtor should be a constructor.");if(s.prototype===null||typeof s.prototype!="object")throw new TypeError("The given value for processorCtor should have a prototype.")},gE=(s,e,t,n,i,r,o,a,c,l,u,h,d)=>{let f=0;return(m,_,g={credentials:"omit"})=>{const p=u.get(m);if(p!==void 0&&p.has(_))return Promise.resolve();const x=l.get(m);if(x!==void 0){const y=x.get(_);if(y!==void 0)return y}const v=r(m),M=v.audioWorklet===void 0?i(_).then(([y,b])=>{const[w,T]=Ip(y,b),S=`${w};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${T}
})})(window,'_AWGS')`;return t(S)}).then(()=>{const y=d._AWGS.pop();if(y===void 0)throw new SyntaxError;n(v.currentTime,v.sampleRate,()=>y(class{},void 0,(b,w)=>{if(b.trim()==="")throw e();const T=Qu.get(v);if(T!==void 0){if(T.has(b))throw e();Pp(w),Dp(w.parameterDescriptors),T.set(b,w)}else Pp(w),Dp(w.parameterDescriptors),Qu.set(v,new Map([[b,w]]))},v.sampleRate,void 0,void 0))}):Promise.all([i(_),Promise.resolve(s(h,h))]).then(([[y,b],w])=>{const T=f+1;f=T;const[S,E]=Ip(y,b),C=`${S};((AudioWorkletProcessor,registerProcessor)=>{${E}
})(${w?"AudioWorkletProcessor":"class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"},(n,p)=>registerProcessor(n,class extends p{${w?"":"__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${w?"":"i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${T}',class extends AudioWorkletProcessor{process(){return !1}})`,U=new Blob([C],{type:"application/javascript; charset=utf-8"}),k=URL.createObjectURL(U);return v.audioWorklet.addModule(k,g).then(()=>{if(a(v))return v;const O=o(v);return O.audioWorklet.addModule(k,g).then(()=>O)}).then(O=>{if(c===null)throw new SyntaxError;try{new c(O,`__sac${T}`)}catch{throw new SyntaxError}}).finally(()=>URL.revokeObjectURL(k))});return x===void 0?l.set(m,new Map([[_,M]])):x.set(_,M),M.then(()=>{const y=u.get(m);y===void 0?u.set(m,new Set([_])):y.add(_)}).finally(()=>{const y=l.get(m);y!==void 0&&y.delete(_)}),M}},$n=(s,e)=>{const t=s.get(e);if(t===void 0)throw new Error("A value with the given key could not be found.");return t},fl=(s,e)=>{const t=Array.from(s).filter(e);if(t.length>1)throw Error("More than one element was found.");if(t.length===0)throw Error("No element was found.");const[n]=t;return s.delete(n),n},wg=(s,e,t,n)=>{const i=$n(s,e),r=fl(i,o=>o[0]===t&&o[1]===n);return i.size===0&&s.delete(e),r},fa=s=>$n(Tg,s),to=s=>{if(eo.has(s))throw new Error("The AudioNode is already stored.");eo.add(s),fa(s).forEach(e=>e(!0))},Ag=s=>"port"in s,pa=s=>{if(!eo.has(s))throw new Error("The AudioNode is not stored.");eo.delete(s),fa(s).forEach(e=>e(!1))},eh=(s,e)=>{!Ag(s)&&e.every(t=>t.size===0)&&pa(s)},_E=(s,e,t,n,i,r,o,a,c,l,u,h,d)=>{const f=new WeakMap;return(m,_,g,p,x)=>{const{activeInputs:v,passiveInputs:M}=r(_),{outputs:y}=r(m),b=a(m),w=T=>{const S=c(_),E=c(m);if(T){const L=wg(M,m,g,p);s(v,m,L,!1),!x&&!h(m)&&t(E,S,g,p),d(_)&&to(_)}else{const L=n(v,m,g,p);e(M,p,L,!1),!x&&!h(m)&&i(E,S,g,p);const F=o(_);if(F===0)u(_)&&eh(_,v);else{const V=f.get(_);V!==void 0&&clearTimeout(V),f.set(_,setTimeout(()=>{u(_)&&eh(_,v)},F*1e3))}}};return l(y,[_,g,p],T=>T[0]===_&&T[1]===g&&T[2]===p,!0)?(b.add(w),u(m)?s(v,m,[g,p,w],!0):e(M,p,[m,g,w],!0),!0):!1}},vE=s=>(e,t,[n,i,r],o)=>{const a=e.get(n);a===void 0?e.set(n,new Set([[i,t,r]])):s(a,[i,t,r],c=>c[0]===i&&c[1]===t,o)},yE=s=>(e,t)=>{const n=s(e,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});t.connect(n).connect(e.destination);const i=()=>{t.removeEventListener("ended",i),t.disconnect(n),n.disconnect()};t.addEventListener("ended",i)},xE=s=>(e,t)=>{s(e).add(t)},SE={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",fftSize:2048,maxDecibels:-30,minDecibels:-100,smoothingTimeConstant:.8},ME=(s,e,t,n,i,r)=>class extends s{constructor(a,c){const l=i(a),u={...SE,...c},h=n(l,u),d=r(l)?e():null;super(a,!1,h,d),this._nativeAnalyserNode=h}get fftSize(){return this._nativeAnalyserNode.fftSize}set fftSize(a){this._nativeAnalyserNode.fftSize=a}get frequencyBinCount(){return this._nativeAnalyserNode.frequencyBinCount}get maxDecibels(){return this._nativeAnalyserNode.maxDecibels}set maxDecibels(a){const c=this._nativeAnalyserNode.maxDecibels;if(this._nativeAnalyserNode.maxDecibels=a,!(a>this._nativeAnalyserNode.minDecibels))throw this._nativeAnalyserNode.maxDecibels=c,t()}get minDecibels(){return this._nativeAnalyserNode.minDecibels}set minDecibels(a){const c=this._nativeAnalyserNode.minDecibels;if(this._nativeAnalyserNode.minDecibels=a,!(this._nativeAnalyserNode.maxDecibels>a))throw this._nativeAnalyserNode.minDecibels=c,t()}get smoothingTimeConstant(){return this._nativeAnalyserNode.smoothingTimeConstant}set smoothingTimeConstant(a){this._nativeAnalyserNode.smoothingTimeConstant=a}getByteFrequencyData(a){this._nativeAnalyserNode.getByteFrequencyData(a)}getByteTimeDomainData(a){this._nativeAnalyserNode.getByteTimeDomainData(a)}getFloatFrequencyData(a){this._nativeAnalyserNode.getFloatFrequencyData(a)}getFloatTimeDomainData(a){this._nativeAnalyserNode.getFloatTimeDomainData(a)}},Qt=(s,e)=>s.context===e,bE=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,o)=>{let a=e(r);if(!Qt(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,fftSize:a.fftSize,maxDecibels:a.maxDecibels,minDecibels:a.minDecibels,smoothingTimeConstant:a.smoothingTimeConstant};a=s(o,l)}return n.set(o,a),await t(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},Ic=s=>{try{s.copyToChannel(new Float32Array(1),0,-1)}catch{return!1}return!0},gi=()=>new DOMException("","IndexSizeError"),kh=s=>{s.getChannelData=(e=>t=>{try{return e.call(s,t)}catch(n){throw n.code===12?gi():n}})(s.getChannelData)},TE={numberOfChannels:1},EE=(s,e,t,n,i,r,o,a)=>{let c=null;return class Cg{constructor(u){if(i===null)throw new Error("Missing the native OfflineAudioContext constructor.");const{length:h,numberOfChannels:d,sampleRate:f}={...TE,...u};c===null&&(c=new i(1,1,44100));const m=n!==null&&e(r,r)?new n({length:h,numberOfChannels:d,sampleRate:f}):c.createBuffer(d,h,f);if(m.numberOfChannels===0)throw t();return typeof m.copyFromChannel!="function"?(o(m),kh(m)):e(Ic,()=>Ic(m))||a(m),s.add(m),m}static[Symbol.hasInstance](u){return u!==null&&typeof u=="object"&&Object.getPrototypeOf(u)===Cg.prototype||s.has(u)}}},dn=-34028234663852886e22,on=-dn,Vi=s=>eo.has(s),wE={buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1},AE=(s,e,t,n,i,r,o,a)=>class extends s{constructor(l,u){const h=r(l),d={...wE,...u},f=i(h,d),m=o(h),_=m?e():null;super(l,!1,f,_),this._audioBufferSourceNodeRenderer=_,this._isBufferNullified=!1,this._isBufferSet=d.buffer!==null,this._nativeAudioBufferSourceNode=f,this._onended=null,this._playbackRate=t(this,m,f.playbackRate,on,dn)}get buffer(){return this._isBufferNullified?null:this._nativeAudioBufferSourceNode.buffer}set buffer(l){if(this._nativeAudioBufferSourceNode.buffer=l,l!==null){if(this._isBufferSet)throw n();this._isBufferSet=!0}}get loop(){return this._nativeAudioBufferSourceNode.loop}set loop(l){this._nativeAudioBufferSourceNode.loop=l}get loopEnd(){return this._nativeAudioBufferSourceNode.loopEnd}set loopEnd(l){this._nativeAudioBufferSourceNode.loopEnd=l}get loopStart(){return this._nativeAudioBufferSourceNode.loopStart}set loopStart(l){this._nativeAudioBufferSourceNode.loopStart=l}get onended(){return this._onended}set onended(l){const u=typeof l=="function"?a(this,l):null;this._nativeAudioBufferSourceNode.onended=u;const h=this._nativeAudioBufferSourceNode.onended;this._onended=h!==null&&h===u?l:h}get playbackRate(){return this._playbackRate}start(l=0,u=0,h){if(this._nativeAudioBufferSourceNode.start(l,u,h),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.start=h===void 0?[l,u]:[l,u,h]),this.context.state!=="closed"){to(this);const d=()=>{this._nativeAudioBufferSourceNode.removeEventListener("ended",d),Vi(this)&&pa(this)};this._nativeAudioBufferSourceNode.addEventListener("ended",d)}}stop(l=0){this._nativeAudioBufferSourceNode.stop(l),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.stop=l)}},CE=(s,e,t,n,i)=>()=>{const r=new WeakMap;let o=null,a=null;const c=async(l,u)=>{let h=t(l);const d=Qt(h,u);if(!d){const f={buffer:h.buffer,channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,loop:h.loop,loopEnd:h.loopEnd,loopStart:h.loopStart,playbackRate:h.playbackRate.value};h=e(u,f),o!==null&&h.start(...o),a!==null&&h.stop(a)}return r.set(u,h),d?await s(u,l.playbackRate,h.playbackRate):await n(u,l.playbackRate,h.playbackRate),await i(l,u,h),h};return{set start(l){o=l},set stop(l){a=l},render(l,u){const h=r.get(u);return h!==void 0?Promise.resolve(h):c(l,u)}}},RE=s=>"playbackRate"in s,IE=s=>"frequency"in s&&"gain"in s,DE=s=>"offset"in s,PE=s=>!("frequency"in s)&&"gain"in s,NE=s=>"detune"in s&&"frequency"in s,LE=s=>"pan"in s,cn=s=>$n(Mg,s),ma=s=>$n(bg,s),th=(s,e)=>{const{activeInputs:t}=cn(s);t.forEach(i=>i.forEach(([r])=>{e.includes(s)||th(r,[...e,s])}));const n=RE(s)?[s.playbackRate]:Ag(s)?Array.from(s.parameters.values()):IE(s)?[s.Q,s.detune,s.frequency,s.gain]:DE(s)?[s.offset]:PE(s)?[s.gain]:NE(s)?[s.detune,s.frequency]:LE(s)?[s.pan]:[];for(const i of n){const r=ma(i);r!==void 0&&r.activeInputs.forEach(([o])=>th(o,e))}Vi(s)&&pa(s)},Rg=s=>{th(s.destination,[])},OE=s=>s===void 0||typeof s=="number"||typeof s=="string"&&(s==="balanced"||s==="interactive"||s==="playback"),UE=(s,e,t,n,i,r,o,a,c)=>class extends s{constructor(u={}){if(c===null)throw new Error("Missing the native AudioContext constructor.");let h;try{h=new c(u)}catch(m){throw m.code===12&&m.message==="sampleRate is not in range"?t():m}if(h===null)throw n();if(!OE(u.latencyHint))throw new TypeError(`The provided value '${u.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);if(u.sampleRate!==void 0&&h.sampleRate!==u.sampleRate)throw t();super(h,2);const{latencyHint:d}=u,{sampleRate:f}=h;if(this._baseLatency=typeof h.baseLatency=="number"?h.baseLatency:d==="balanced"?512/f:d==="interactive"||d===void 0?256/f:d==="playback"?1024/f:Math.max(2,Math.min(128,Math.round(d*f/128)))*128/f,this._nativeAudioContext=h,c.name==="webkitAudioContext"?(this._nativeGainNode=h.createGain(),this._nativeOscillatorNode=h.createOscillator(),this._nativeGainNode.gain.value=1e-37,this._nativeOscillatorNode.connect(this._nativeGainNode).connect(h.destination),this._nativeOscillatorNode.start()):(this._nativeGainNode=null,this._nativeOscillatorNode=null),this._state=null,h.state==="running"){this._state="suspended";const m=()=>{this._state==="suspended"&&(this._state=null),h.removeEventListener("statechange",m)};h.addEventListener("statechange",m)}}get baseLatency(){return this._baseLatency}get state(){return this._state!==null?this._state:this._nativeAudioContext.state}close(){return this.state==="closed"?this._nativeAudioContext.close().then(()=>{throw e()}):(this._state==="suspended"&&(this._state=null),this._nativeAudioContext.close().then(()=>{this._nativeGainNode!==null&&this._nativeOscillatorNode!==null&&(this._nativeOscillatorNode.stop(),this._nativeGainNode.disconnect(),this._nativeOscillatorNode.disconnect()),Rg(this)}))}createMediaElementSource(u){return new i(this,{mediaElement:u})}createMediaStreamDestination(){return new r(this)}createMediaStreamSource(u){return new o(this,{mediaStream:u})}createMediaStreamTrackSource(u){return new a(this,{mediaStreamTrack:u})}resume(){return this._state==="suspended"?new Promise((u,h)=>{const d=()=>{this._nativeAudioContext.removeEventListener("statechange",d),this._nativeAudioContext.state==="running"?u():this.resume().then(u,h)};this._nativeAudioContext.addEventListener("statechange",d)}):this._nativeAudioContext.resume().catch(u=>{throw u===void 0||u.code===15?e():u})}suspend(){return this._nativeAudioContext.suspend().catch(u=>{throw u===void 0?e():u})}},FE=(s,e,t,n,i,r,o,a)=>class extends s{constructor(l,u){const h=r(l),d=o(h),f=i(h,u,d),m=d?e(a):null;super(l,!1,f,m),this._isNodeOfNativeOfflineAudioContext=d,this._nativeAudioDestinationNode=f}get channelCount(){return this._nativeAudioDestinationNode.channelCount}set channelCount(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();if(l>this._nativeAudioDestinationNode.maxChannelCount)throw t();this._nativeAudioDestinationNode.channelCount=l}get channelCountMode(){return this._nativeAudioDestinationNode.channelCountMode}set channelCountMode(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();this._nativeAudioDestinationNode.channelCountMode=l}get maxChannelCount(){return this._nativeAudioDestinationNode.maxChannelCount}},kE=s=>{const e=new WeakMap,t=async(n,i)=>{const r=i.destination;return e.set(i,r),await s(n,i,r),r};return{render(n,i){const r=e.get(i);return r!==void 0?Promise.resolve(r):t(n,i)}}},BE=(s,e,t,n,i,r,o,a)=>(c,l)=>{const u=l.listener,h=()=>{const y=new Float32Array(1),b=e(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:9}),w=o(l);let T=!1,S=[0,0,-1,0,1,0],E=[0,0,0];const L=()=>{if(T)return;T=!0;const U=n(l,256,9,0);U.onaudioprocess=({inputBuffer:k})=>{const O=[r(k,y,0),r(k,y,1),r(k,y,2),r(k,y,3),r(k,y,4),r(k,y,5)];O.some((B,X)=>B!==S[X])&&(u.setOrientation(...O),S=O);const j=[r(k,y,6),r(k,y,7),r(k,y,8)];j.some((B,X)=>B!==E[X])&&(u.setPosition(...j),E=j)},b.connect(U)},F=U=>k=>{k!==S[U]&&(S[U]=k,u.setOrientation(...S))},V=U=>k=>{k!==E[U]&&(E[U]=k,u.setPosition(...E))},C=(U,k,O)=>{const j=t(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:k});j.connect(b,0,U),j.start(),Object.defineProperty(j.offset,"defaultValue",{get(){return k}});const B=s({context:c},w,j.offset,on,dn);return a(B,"value",X=>()=>X.call(B),X=>R=>{try{X.call(B,R)}catch(H){if(H.code!==9)throw H}L(),w&&O(R)}),B.cancelAndHoldAtTime=(X=>w?()=>{throw i()}:(...R)=>{const H=X.apply(B,R);return L(),H})(B.cancelAndHoldAtTime),B.cancelScheduledValues=(X=>w?()=>{throw i()}:(...R)=>{const H=X.apply(B,R);return L(),H})(B.cancelScheduledValues),B.exponentialRampToValueAtTime=(X=>w?()=>{throw i()}:(...R)=>{const H=X.apply(B,R);return L(),H})(B.exponentialRampToValueAtTime),B.linearRampToValueAtTime=(X=>w?()=>{throw i()}:(...R)=>{const H=X.apply(B,R);return L(),H})(B.linearRampToValueAtTime),B.setTargetAtTime=(X=>w?()=>{throw i()}:(...R)=>{const H=X.apply(B,R);return L(),H})(B.setTargetAtTime),B.setValueAtTime=(X=>w?()=>{throw i()}:(...R)=>{const H=X.apply(B,R);return L(),H})(B.setValueAtTime),B.setValueCurveAtTime=(X=>w?()=>{throw i()}:(...R)=>{const H=X.apply(B,R);return L(),H})(B.setValueCurveAtTime),B};return{forwardX:C(0,0,F(0)),forwardY:C(1,0,F(1)),forwardZ:C(2,-1,F(2)),positionX:C(6,0,V(0)),positionY:C(7,0,V(1)),positionZ:C(8,0,V(2)),upX:C(3,0,F(3)),upY:C(4,1,F(4)),upZ:C(5,0,F(5))}},{forwardX:d,forwardY:f,forwardZ:m,positionX:_,positionY:g,positionZ:p,upX:x,upY:v,upZ:M}=u.forwardX===void 0?h():u;return{get forwardX(){return d},get forwardY(){return f},get forwardZ(){return m},get positionX(){return _},get positionY(){return g},get positionZ(){return p},get upX(){return x},get upY(){return v},get upZ(){return M}}},Dc=s=>"context"in s,ga=s=>Dc(s[0]),sr=(s,e,t,n)=>{for(const i of s)if(t(i)){if(n)return!1;throw Error("The set contains at least one similar element.")}return s.add(e),!0},Np=(s,e,[t,n],i)=>{sr(s,[e,t,n],r=>r[0]===e&&r[1]===t,i)},Lp=(s,[e,t,n],i)=>{const r=s.get(e);r===void 0?s.set(e,new Set([[t,n]])):sr(r,[t,n],o=>o[0]===t,i)},po=s=>"inputs"in s,Pc=(s,e,t,n)=>{if(po(e)){const i=e.inputs[n];return s.connect(i,t,0),[i,t,0]}return s.connect(e,t,n),[e,t,n]},Ig=(s,e,t)=>{for(const n of s)if(n[0]===e&&n[1]===t)return s.delete(n),n;return null},VE=(s,e,t)=>fl(s,n=>n[0]===e&&n[1]===t),Dg=(s,e)=>{if(!fa(s).delete(e))throw new Error("Missing the expected event listener.")},Pg=(s,e,t)=>{const n=$n(s,e),i=fl(n,r=>r[0]===t);return n.size===0&&s.delete(e),i},Nc=(s,e,t,n)=>{po(e)?s.disconnect(e.inputs[n],t,0):s.disconnect(e,t,n)},pt=s=>$n(Uh,s),Xo=s=>$n(Fh,s),Qs=s=>Zu.has(s),gc=s=>!eo.has(s),Op=(s,e)=>new Promise(t=>{if(e!==null)t(!0);else{const n=s.createScriptProcessor(256,1,1),i=s.createGain(),r=s.createBuffer(1,2,44100),o=r.getChannelData(0);o[0]=1,o[1]=1;const a=s.createBufferSource();a.buffer=r,a.loop=!0,a.connect(n).connect(s.destination),a.connect(i),a.disconnect(i),n.onaudioprocess=c=>{const l=c.inputBuffer.getChannelData(0);Array.prototype.some.call(l,u=>u===1)?t(!0):t(!1),a.stop(),n.onaudioprocess=null,a.disconnect(n),n.disconnect(s.destination)},a.start()}}),du=(s,e)=>{const t=new Map;for(const n of s)for(const i of n){const r=t.get(i);t.set(i,r===void 0?1:r+1)}t.forEach((n,i)=>e(i,n))},Lc=s=>"context"in s,zE=s=>{const e=new Map;s.connect=(t=>(n,i=0,r=0)=>{const o=Lc(n)?t(n,i,r):t(n,i),a=e.get(n);return a===void 0?e.set(n,[{input:r,output:i}]):a.every(c=>c.input!==r||c.output!==i)&&a.push({input:r,output:i}),o})(s.connect.bind(s)),s.disconnect=(t=>(n,i,r)=>{if(t.apply(s),n===void 0)e.clear();else if(typeof n=="number")for(const[o,a]of e){const c=a.filter(l=>l.output!==n);c.length===0?e.delete(o):e.set(o,c)}else if(e.has(n))if(i===void 0)e.delete(n);else{const o=e.get(n);if(o!==void 0){const a=o.filter(c=>c.output!==i&&(c.input!==r||r===void 0));a.length===0?e.delete(n):e.set(n,a)}}for(const[o,a]of e)a.forEach(c=>{Lc(o)?s.connect(o,c.output,c.input):s.connect(o,c.output)})})(s.disconnect)},GE=(s,e,t,n)=>{const{activeInputs:i,passiveInputs:r}=ma(e),{outputs:o}=cn(s),a=fa(s),c=l=>{const u=pt(s),h=Xo(e);if(l){const d=Pg(r,s,t);Np(i,s,d,!1),!n&&!Qs(s)&&u.connect(h,t)}else{const d=VE(i,s,t);Lp(r,d,!1),!n&&!Qs(s)&&u.disconnect(h,t)}};return sr(o,[e,t],l=>l[0]===e&&l[1]===t,!0)?(a.add(c),Vi(s)?Np(i,s,[t,c],!0):Lp(r,[s,t,c],!0),!0):!1},HE=(s,e,t,n)=>{const{activeInputs:i,passiveInputs:r}=cn(e),o=Ig(i[n],s,t);return o===null?[wg(r,s,t,n)[2],!1]:[o[2],!0]},WE=(s,e,t)=>{const{activeInputs:n,passiveInputs:i}=ma(e),r=Ig(n,s,t);return r===null?[Pg(i,s,t)[1],!1]:[r[2],!0]},Bh=(s,e,t,n,i)=>{const[r,o]=HE(s,t,n,i);if(r!==null&&(Dg(s,r),o&&!e&&!Qs(s)&&Nc(pt(s),pt(t),n,i)),Vi(t)){const{activeInputs:a}=cn(t);eh(t,a)}},Vh=(s,e,t,n)=>{const[i,r]=WE(s,t,n);i!==null&&(Dg(s,i),r&&!e&&!Qs(s)&&pt(s).disconnect(Xo(t),n))},XE=(s,e)=>{const t=cn(s),n=[];for(const i of t.outputs)ga(i)?Bh(s,e,...i):Vh(s,e,...i),n.push(i[0]);return t.outputs.clear(),n},qE=(s,e,t)=>{const n=cn(s),i=[];for(const r of n.outputs)r[1]===t&&(ga(r)?Bh(s,e,...r):Vh(s,e,...r),i.push(r[0]),n.outputs.delete(r));return i},jE=(s,e,t,n,i)=>{const r=cn(s);return Array.from(r.outputs).filter(o=>o[0]===t&&(n===void 0||o[1]===n)&&(i===void 0||o[2]===i)).map(o=>(ga(o)?Bh(s,e,...o):Vh(s,e,...o),r.outputs.delete(o),o[0]))},YE=(s,e,t,n,i,r,o,a,c,l,u,h,d,f,m,_)=>class extends l{constructor(p,x,v,M){super(v),this._context=p,this._nativeAudioNode=v;const y=u(p);h(y)&&t(Op,()=>Op(y,_))!==!0&&zE(v),Uh.set(this,v),Tg.set(this,new Set),p.state!=="closed"&&x&&to(this),s(this,M,v)}get channelCount(){return this._nativeAudioNode.channelCount}set channelCount(p){this._nativeAudioNode.channelCount=p}get channelCountMode(){return this._nativeAudioNode.channelCountMode}set channelCountMode(p){this._nativeAudioNode.channelCountMode=p}get channelInterpretation(){return this._nativeAudioNode.channelInterpretation}set channelInterpretation(p){this._nativeAudioNode.channelInterpretation=p}get context(){return this._context}get numberOfInputs(){return this._nativeAudioNode.numberOfInputs}get numberOfOutputs(){return this._nativeAudioNode.numberOfOutputs}connect(p,x=0,v=0){if(x<0||x>=this._nativeAudioNode.numberOfOutputs)throw i();const M=u(this._context),y=m(M);if(d(p)||f(p))throw r();if(Dc(p)){const T=pt(p);try{const E=Pc(this._nativeAudioNode,T,x,v),L=gc(this);(y||L)&&this._nativeAudioNode.disconnect(...E),this.context.state!=="closed"&&!L&&gc(p)&&to(p)}catch(E){throw E.code===12?r():E}if(e(this,p,x,v,y)){const E=c([this],p);du(E,n(y))}return p}const b=Xo(p);if(b.name==="playbackRate"&&b.maxValue===1024)throw o();try{this._nativeAudioNode.connect(b,x),(y||gc(this))&&this._nativeAudioNode.disconnect(b,x)}catch(T){throw T.code===12?r():T}if(GE(this,p,x,y)){const T=c([this],p);du(T,n(y))}}disconnect(p,x,v){let M;const y=u(this._context),b=m(y);if(p===void 0)M=XE(this,b);else if(typeof p=="number"){if(p<0||p>=this.numberOfOutputs)throw i();M=qE(this,b,p)}else{if(x!==void 0&&(x<0||x>=this.numberOfOutputs)||Dc(p)&&v!==void 0&&(v<0||v>=p.numberOfInputs))throw i();if(M=jE(this,b,p,x,v),M.length===0)throw r()}for(const w of M){const T=c([this],w);du(T,a)}}},$E=(s,e,t,n,i,r,o,a,c,l,u,h,d)=>(f,m,_,g=null,p=null)=>{const x=_.value,v=new rE(x),M=m?n(v):null,y={get defaultValue(){return x},get maxValue(){return g===null?_.maxValue:g},get minValue(){return p===null?_.minValue:p},get value(){return _.value},set value(b){_.value=b,y.setValueAtTime(b,f.context.currentTime)},cancelAndHoldAtTime(b){if(typeof _.cancelAndHoldAtTime=="function")M===null&&v.flush(f.context.currentTime),v.add(i(b)),_.cancelAndHoldAtTime(b);else{const w=Array.from(v).pop();M===null&&v.flush(f.context.currentTime),v.add(i(b));const T=Array.from(v).pop();_.cancelScheduledValues(b),w!==T&&T!==void 0&&(T.type==="exponentialRampToValue"?_.exponentialRampToValueAtTime(T.value,T.endTime):T.type==="linearRampToValue"?_.linearRampToValueAtTime(T.value,T.endTime):T.type==="setValue"?_.setValueAtTime(T.value,T.startTime):T.type==="setValueCurve"&&_.setValueCurveAtTime(T.values,T.startTime,T.duration))}return y},cancelScheduledValues(b){return M===null&&v.flush(f.context.currentTime),v.add(r(b)),_.cancelScheduledValues(b),y},exponentialRampToValueAtTime(b,w){if(b===0)throw new RangeError;if(!Number.isFinite(w)||w<0)throw new RangeError;const T=f.context.currentTime;return M===null&&v.flush(T),Array.from(v).length===0&&(v.add(l(x,T)),_.setValueAtTime(x,T)),v.add(o(b,w)),_.exponentialRampToValueAtTime(b,w),y},linearRampToValueAtTime(b,w){const T=f.context.currentTime;return M===null&&v.flush(T),Array.from(v).length===0&&(v.add(l(x,T)),_.setValueAtTime(x,T)),v.add(a(b,w)),_.linearRampToValueAtTime(b,w),y},setTargetAtTime(b,w,T){return M===null&&v.flush(f.context.currentTime),v.add(c(b,w,T)),_.setTargetAtTime(b,w,T),y},setValueAtTime(b,w){return M===null&&v.flush(f.context.currentTime),v.add(l(b,w)),_.setValueAtTime(b,w),y},setValueCurveAtTime(b,w,T){const S=b instanceof Float32Array?b:new Float32Array(b);if(h!==null&&h.name==="webkitAudioContext"){const E=w+T,L=f.context.sampleRate,F=Math.ceil(w*L),V=Math.floor(E*L),C=V-F,U=new Float32Array(C);for(let O=0;O<C;O+=1){const j=(S.length-1)/T*((F+O)/L-w),B=Math.floor(j),X=Math.ceil(j);U[O]=B===X?S[B]:(1-(j-B))*S[B]+(1-(X-j))*S[X]}M===null&&v.flush(f.context.currentTime),v.add(u(U,w,T)),_.setValueCurveAtTime(U,w,T);const k=V/L;k<E&&d(y,U[U.length-1],k),d(y,S[S.length-1],E)}else M===null&&v.flush(f.context.currentTime),v.add(u(S,w,T)),_.setValueCurveAtTime(S,w,T);return y}};return t.set(y,_),e.set(y,f),s(y,M),y},KE=s=>({replay(e){for(const t of s)if(t.type==="exponentialRampToValue"){const{endTime:n,value:i}=t;e.exponentialRampToValueAtTime(i,n)}else if(t.type==="linearRampToValue"){const{endTime:n,value:i}=t;e.linearRampToValueAtTime(i,n)}else if(t.type==="setTarget"){const{startTime:n,target:i,timeConstant:r}=t;e.setTargetAtTime(i,n,r)}else if(t.type==="setValue"){const{startTime:n,value:i}=t;e.setValueAtTime(i,n)}else if(t.type==="setValueCurve"){const{duration:n,startTime:i,values:r}=t;e.setValueCurveAtTime(r,i,n)}else throw new Error("Can't apply an unknown automation.")}});class Ng{constructor(e){this._map=new Map(e)}get size(){return this._map.size}entries(){return this._map.entries()}forEach(e,t=null){return this._map.forEach((n,i)=>e.call(t,n,i,this))}get(e){return this._map.get(e)}has(e){return this._map.has(e)}keys(){return this._map.keys()}values(){return this._map.values()}}const ZE={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:1,numberOfOutputs:1,parameterData:{},processorOptions:{}},QE=(s,e,t,n,i,r,o,a,c,l,u,h,d,f)=>class extends e{constructor(_,g,p){var x;const v=a(_),M=c(v),y=u({...ZE,...p});d(y);const b=Qu.get(v),w=b?.get(g),T=M||v.state!=="closed"?v:(x=o(v))!==null&&x!==void 0?x:v,S=i(T,M?null:_.baseLatency,l,g,w,y),E=M?n(g,y,w):null;super(_,!0,S,E);const L=[];S.parameters.forEach((V,C)=>{const U=t(this,M,V);L.push([C,U])}),this._nativeAudioWorkletNode=S,this._onprocessorerror=null,this._parameters=new Ng(L),M&&s(v,this);const{activeInputs:F}=r(this);h(S,F)}get onprocessorerror(){return this._onprocessorerror}set onprocessorerror(_){const g=typeof _=="function"?f(this,_):null;this._nativeAudioWorkletNode.onprocessorerror=g;const p=this._nativeAudioWorkletNode.onprocessorerror;this._onprocessorerror=p!==null&&p===g?_:p}get parameters(){return this._parameters===null?this._nativeAudioWorkletNode.parameters:this._parameters}get port(){return this._nativeAudioWorkletNode.port}};function Oc(s,e,t,n,i){if(typeof s.copyFromChannel=="function")e[t].byteLength===0&&(e[t]=new Float32Array(128)),s.copyFromChannel(e[t],n,i);else{const r=s.getChannelData(n);if(e[t].byteLength===0)e[t]=r.slice(i,i+128);else{const o=new Float32Array(r.buffer,i*Float32Array.BYTES_PER_ELEMENT,128);e[t].set(o)}}}const Lg=(s,e,t,n,i)=>{typeof s.copyToChannel=="function"?e[t].byteLength!==0&&s.copyToChannel(e[t],n,i):e[t].byteLength!==0&&s.getChannelData(n).set(e[t],i)},Uc=(s,e)=>{const t=[];for(let n=0;n<s;n+=1){const i=[],r=typeof e=="number"?e:e[n];for(let o=0;o<r;o+=1)i.push(new Float32Array(128));t.push(i)}return t},JE=(s,e)=>{const t=$n(Ju,s),n=pt(e);return $n(t,n)},ew=async(s,e,t,n,i,r,o)=>{const a=e===null?Math.ceil(s.context.length/128)*128:e.length,c=n.channelCount*n.numberOfInputs,l=i.reduce((g,p)=>g+p,0),u=l===0?null:t.createBuffer(l,a,t.sampleRate);if(r===void 0)throw new Error("Missing the processor constructor.");const h=cn(s),d=await JE(t,s),f=Uc(n.numberOfInputs,n.channelCount),m=Uc(n.numberOfOutputs,i),_=Array.from(s.parameters.keys()).reduce((g,p)=>({...g,[p]:new Float32Array(128)}),{});for(let g=0;g<a;g+=128){if(n.numberOfInputs>0&&e!==null)for(let p=0;p<n.numberOfInputs;p+=1)for(let x=0;x<n.channelCount;x+=1)Oc(e,f[p],x,x,g);r.parameterDescriptors!==void 0&&e!==null&&r.parameterDescriptors.forEach(({name:p},x)=>{Oc(e,_,p,c+x,g)});for(let p=0;p<n.numberOfInputs;p+=1)for(let x=0;x<i[p];x+=1)m[p][x].byteLength===0&&(m[p][x]=new Float32Array(128));try{const p=f.map((v,M)=>h.activeInputs[M].size===0?[]:v),x=o(g/t.sampleRate,t.sampleRate,()=>d.process(p,m,_));if(u!==null)for(let v=0,M=0;v<n.numberOfOutputs;v+=1){for(let y=0;y<i[v];y+=1)Lg(u,m[v],y,M+y,g);M+=i[v]}if(!x)break}catch(p){s.dispatchEvent(new ErrorEvent("processorerror",{colno:p.colno,filename:p.filename,lineno:p.lineno,message:p.message}));break}}return u},tw=(s,e,t,n,i,r,o,a,c,l,u,h,d,f,m,_)=>(g,p,x)=>{const v=new WeakMap;let M=null;const y=async(b,w)=>{let T=u(b),S=null;const E=Qt(T,w),L=Array.isArray(p.outputChannelCount)?p.outputChannelCount:Array.from(p.outputChannelCount);if(h===null){const F=L.reduce((k,O)=>k+O,0),V=i(w,{channelCount:Math.max(1,F),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,F)}),C=[];for(let k=0;k<b.numberOfOutputs;k+=1)C.push(n(w,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:L[k]}));const U=o(w,{channelCount:p.channelCount,channelCountMode:p.channelCountMode,channelInterpretation:p.channelInterpretation,gain:1});U.connect=e.bind(null,C),U.disconnect=c.bind(null,C),S=[V,C,U]}else E||(T=new h(w,g));if(v.set(w,S===null?T:S[2]),S!==null){if(M===null){if(x===void 0)throw new Error("Missing the processor constructor.");if(d===null)throw new Error("Missing the native OfflineAudioContext constructor.");const O=b.channelCount*b.numberOfInputs,j=x.parameterDescriptors===void 0?0:x.parameterDescriptors.length,B=O+j;M=ew(b,B===0?null:await(async()=>{const R=new d(B,Math.ceil(b.context.length/128)*128,w.sampleRate),H=[],re=[];for(let de=0;de<p.numberOfInputs;de+=1)H.push(o(R,{channelCount:p.channelCount,channelCountMode:p.channelCountMode,channelInterpretation:p.channelInterpretation,gain:1})),re.push(i(R,{channelCount:p.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:p.channelCount}));const ce=await Promise.all(Array.from(b.parameters.values()).map(async de=>{const xe=r(R,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:de.value});return await f(R,de,xe.offset),xe})),J=n(R,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,O+j)});for(let de=0;de<p.numberOfInputs;de+=1){H[de].connect(re[de]);for(let xe=0;xe<p.channelCount;xe+=1)re[de].connect(J,xe,de*p.channelCount+xe)}for(const[de,xe]of ce.entries())xe.connect(J,0,O+de),xe.start(0);return J.connect(R.destination),await Promise.all(H.map(de=>m(b,R,de))),_(R)})(),w,p,L,x,l)}const F=await M,V=t(w,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),[C,U,k]=S;F!==null&&(V.buffer=F,V.start(0)),V.connect(C);for(let O=0,j=0;O<b.numberOfOutputs;O+=1){const B=U[O];for(let X=0;X<L[O];X+=1)C.connect(B,j+X,X);j+=L[O]}return k}if(E)for(const[F,V]of b.parameters.entries())await s(w,V,T.parameters.get(F));else for(const[F,V]of b.parameters.entries())await f(w,V,T.parameters.get(F));return await m(b,w,T),T};return{render(b,w){a(w,b);const T=v.get(w);return T!==void 0?Promise.resolve(T):y(b,w)}}},nw=(s,e,t,n,i,r,o,a,c,l,u,h,d,f,m,_,g,p,x,v)=>class extends m{constructor(y,b){super(y,b),this._nativeContext=y,this._audioWorklet=s===void 0?void 0:{addModule:(w,T)=>s(this,w,T)}}get audioWorklet(){return this._audioWorklet}createAnalyser(){return new e(this)}createBiquadFilter(){return new i(this)}createBuffer(y,b,w){return new t({length:b,numberOfChannels:y,sampleRate:w})}createBufferSource(){return new n(this)}createChannelMerger(y=6){return new r(this,{numberOfInputs:y})}createChannelSplitter(y=6){return new o(this,{numberOfOutputs:y})}createConstantSource(){return new a(this)}createConvolver(){return new c(this)}createDelay(y=1){return new u(this,{maxDelayTime:y})}createDynamicsCompressor(){return new h(this)}createGain(){return new d(this)}createIIRFilter(y,b){return new f(this,{feedback:b,feedforward:y})}createOscillator(){return new _(this)}createPanner(){return new g(this)}createPeriodicWave(y,b,w={disableNormalization:!1}){return new p(this,{...w,imag:b,real:y})}createStereoPanner(){return new x(this)}createWaveShaper(){return new v(this)}decodeAudioData(y,b,w){return l(this._nativeContext,y).then(T=>(typeof b=="function"&&b(T),T),T=>{throw typeof w=="function"&&w(T),T})}},iw={Q:1,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:350,gain:0,type:"lowpass"},sw=(s,e,t,n,i,r,o,a)=>class extends s{constructor(l,u){const h=r(l),d={...iw,...u},f=i(h,d),m=o(h),_=m?t():null;super(l,!1,f,_),this._Q=e(this,m,f.Q,on,dn),this._detune=e(this,m,f.detune,1200*Math.log2(on),-1200*Math.log2(on)),this._frequency=e(this,m,f.frequency,l.sampleRate/2,0),this._gain=e(this,m,f.gain,40*Math.log10(on),dn),this._nativeBiquadFilterNode=f,a(this,1)}get detune(){return this._detune}get frequency(){return this._frequency}get gain(){return this._gain}get Q(){return this._Q}get type(){return this._nativeBiquadFilterNode.type}set type(l){this._nativeBiquadFilterNode.type=l}getFrequencyResponse(l,u,h){try{this._nativeBiquadFilterNode.getFrequencyResponse(l,u,h)}catch(d){throw d.code===11?n():d}if(l.length!==u.length||u.length!==h.length)throw n()}},rw=(s,e,t,n,i)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=t(a);const u=Qt(l,c);if(!u){const h={Q:l.Q.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,detune:l.detune.value,frequency:l.frequency.value,gain:l.gain.value,type:l.type};l=e(c,h)}return r.set(c,l),u?(await s(c,a.Q,l.Q),await s(c,a.detune,l.detune),await s(c,a.frequency,l.frequency),await s(c,a.gain,l.gain)):(await n(c,a.Q,l.Q),await n(c,a.detune,l.detune),await n(c,a.frequency,l.frequency),await n(c,a.gain,l.gain)),await i(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},ow=(s,e)=>(t,n)=>{const i=e.get(t);if(i!==void 0)return i;const r=s.get(t);if(r!==void 0)return r;try{const o=n();return o instanceof Promise?(s.set(t,o),o.catch(()=>!1).then(a=>(s.delete(t),e.set(t,a),a))):(e.set(t,o),o)}catch{return e.set(t,!1),!1}},aw={channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6},cw=(s,e,t,n,i)=>class extends s{constructor(o,a){const c=n(o),l={...aw,...a},u=t(c,l),h=i(c)?e():null;super(o,!1,u,h)}},lw=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,o)=>{let a=e(r);if(!Qt(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,numberOfInputs:a.numberOfInputs};a=s(o,l)}return n.set(o,a),await t(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},uw={channelCount:6,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:6},hw=(s,e,t,n,i,r)=>class extends s{constructor(a,c){const l=n(a),u=r({...uw,...c}),h=t(l,u),d=i(l)?e():null;super(a,!1,h,d)}},dw=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,o)=>{let a=e(r);if(!Qt(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,numberOfOutputs:a.numberOfOutputs};a=s(o,l)}return n.set(o,a),await t(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},fw=s=>(e,t,n)=>s(t,e,n),pw=s=>(e,t,n=0,i=0)=>{const r=e[n];if(r===void 0)throw s();return Lc(t)?r.connect(t,0,i):r.connect(t,0)},mw=s=>(e,t)=>{const n=s(e,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),i=e.createBuffer(1,2,44100);return n.buffer=i,n.loop=!0,n.connect(t),n.start(),()=>{n.stop(),n.disconnect(t)}},gw={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",offset:1},_w=(s,e,t,n,i,r,o)=>class extends s{constructor(c,l){const u=i(c),h={...gw,...l},d=n(u,h),f=r(u),m=f?t():null;super(c,!1,d,m),this._constantSourceNodeRenderer=m,this._nativeConstantSourceNode=d,this._offset=e(this,f,d.offset,on,dn),this._onended=null}get offset(){return this._offset}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?o(this,c):null;this._nativeConstantSourceNode.onended=l;const u=this._nativeConstantSourceNode.onended;this._onended=u!==null&&u===l?c:u}start(c=0){if(this._nativeConstantSourceNode.start(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.start=c),this.context.state!=="closed"){to(this);const l=()=>{this._nativeConstantSourceNode.removeEventListener("ended",l),Vi(this)&&pa(this)};this._nativeConstantSourceNode.addEventListener("ended",l)}}stop(c=0){this._nativeConstantSourceNode.stop(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.stop=c)}},vw=(s,e,t,n,i)=>()=>{const r=new WeakMap;let o=null,a=null;const c=async(l,u)=>{let h=t(l);const d=Qt(h,u);if(!d){const f={channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,offset:h.offset.value};h=e(u,f),o!==null&&h.start(o),a!==null&&h.stop(a)}return r.set(u,h),d?await s(u,l.offset,h.offset):await n(u,l.offset,h.offset),await i(l,u,h),h};return{set start(l){o=l},set stop(l){a=l},render(l,u){const h=r.get(u);return h!==void 0?Promise.resolve(h):c(l,u)}}},yw=s=>e=>(s[0]=e,s[0]),xw={buffer:null,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",disableNormalization:!1},Sw=(s,e,t,n,i,r)=>class extends s{constructor(a,c){const l=n(a),u={...xw,...c},h=t(l,u),f=i(l)?e():null;super(a,!1,h,f),this._isBufferNullified=!1,this._nativeConvolverNode=h,u.buffer!==null&&r(this,u.buffer.duration)}get buffer(){return this._isBufferNullified?null:this._nativeConvolverNode.buffer}set buffer(a){if(this._nativeConvolverNode.buffer=a,a===null&&this._nativeConvolverNode.buffer!==null){const c=this._nativeConvolverNode.context;this._nativeConvolverNode.buffer=c.createBuffer(1,1,c.sampleRate),this._isBufferNullified=!0,r(this,0)}else this._isBufferNullified=!1,r(this,this._nativeConvolverNode.buffer===null?0:this._nativeConvolverNode.buffer.duration)}get normalize(){return this._nativeConvolverNode.normalize}set normalize(a){this._nativeConvolverNode.normalize=a}},Mw=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,o)=>{let a=e(r);if(!Qt(a,o)){const l={buffer:a.buffer,channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,disableNormalization:!a.normalize};a=s(o,l)}return n.set(o,a),po(a)?await t(r,o,a.inputs[0]):await t(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},bw=(s,e)=>(t,n,i)=>{if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");try{return new e(t,n,i)}catch(r){throw r.name==="SyntaxError"?s():r}},Tw=()=>new DOMException("","DataCloneError"),Up=s=>{const{port1:e,port2:t}=new MessageChannel;return new Promise(n=>{const i=()=>{t.onmessage=null,e.close(),t.close(),n()};t.onmessage=()=>i();try{e.postMessage(s,[s])}catch{}finally{i()}})},Ew=(s,e,t,n,i,r,o,a,c,l,u)=>(h,d)=>{const f=o(h)?h:r(h);if(i.has(d)){const m=t();return Promise.reject(m)}try{i.add(d)}catch{}return e(c,()=>c(f))?f.decodeAudioData(d).then(m=>(Up(d).catch(()=>{}),e(a,()=>a(m))||u(m),s.add(m),m)):new Promise((m,_)=>{const g=async()=>{try{await Up(d)}catch{}},p=x=>{_(x),g()};try{f.decodeAudioData(d,x=>{typeof x.copyFromChannel!="function"&&(l(x),kh(x)),s.add(x),g().then(()=>m(x))},x=>{p(x===null?n():x)})}catch(x){p(x)}})},ww=(s,e,t,n,i,r,o,a)=>(c,l)=>{const u=e.get(c);if(u===void 0)throw new Error("Missing the expected cycle count.");const h=r(c.context),d=a(h);if(u===l){if(e.delete(c),!d&&o(c)){const f=n(c),{outputs:m}=t(c);for(const _ of m)if(ga(_)){const g=n(_[0]);s(f,g,_[1],_[2])}else{const g=i(_[0]);f.connect(g,_[1])}}}else e.set(c,u-l)},Aw={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",delayTime:0,maxDelayTime:1},Cw=(s,e,t,n,i,r,o)=>class extends s{constructor(c,l){const u=i(c),h={...Aw,...l},d=n(u,h),f=r(u),m=f?t(h.maxDelayTime):null;super(c,!1,d,m),this._delayTime=e(this,f,d.delayTime),o(this,h.maxDelayTime)}get delayTime(){return this._delayTime}},Rw=(s,e,t,n,i)=>r=>{const o=new WeakMap,a=async(c,l)=>{let u=t(c);const h=Qt(u,l);if(!h){const d={channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,delayTime:u.delayTime.value,maxDelayTime:r};u=e(l,d)}return o.set(l,u),h?await s(l,c.delayTime,u.delayTime):await n(l,c.delayTime,u.delayTime),await i(c,l,u),u};return{render(c,l){const u=o.get(l);return u!==void 0?Promise.resolve(u):a(c,l)}}},Iw=s=>(e,t,n,i)=>s(e[i],r=>r[0]===t&&r[1]===n),Dw=s=>(e,t)=>{s(e).delete(t)},Pw=s=>"delayTime"in s,Nw=(s,e,t)=>function n(i,r){const o=Dc(r)?r:t(s,r);if(Pw(o))return[];if(i[0]===o)return[i];if(i.includes(o))return[];const{outputs:a}=e(o);return Array.from(a).map(c=>n([...i,o],c[0])).reduce((c,l)=>c.concat(l),[])},tc=(s,e,t)=>{const n=e[t];if(n===void 0)throw s();return n},Lw=s=>(e,t=void 0,n=void 0,i=0)=>t===void 0?e.forEach(r=>r.disconnect()):typeof t=="number"?tc(s,e,t).disconnect():Lc(t)?n===void 0?e.forEach(r=>r.disconnect(t)):i===void 0?tc(s,e,n).disconnect(t,0):tc(s,e,n).disconnect(t,0,i):n===void 0?e.forEach(r=>r.disconnect(t)):tc(s,e,n).disconnect(t,0),Ow={attack:.003,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",knee:30,ratio:12,release:.25,threshold:-24},Uw=(s,e,t,n,i,r,o,a)=>class extends s{constructor(l,u){const h=r(l),d={...Ow,...u},f=n(h,d),m=o(h),_=m?t():null;super(l,!1,f,_),this._attack=e(this,m,f.attack),this._knee=e(this,m,f.knee),this._nativeDynamicsCompressorNode=f,this._ratio=e(this,m,f.ratio),this._release=e(this,m,f.release),this._threshold=e(this,m,f.threshold),a(this,.006)}get attack(){return this._attack}get channelCount(){return this._nativeDynamicsCompressorNode.channelCount}set channelCount(l){const u=this._nativeDynamicsCompressorNode.channelCount;if(this._nativeDynamicsCompressorNode.channelCount=l,l>2)throw this._nativeDynamicsCompressorNode.channelCount=u,i()}get channelCountMode(){return this._nativeDynamicsCompressorNode.channelCountMode}set channelCountMode(l){const u=this._nativeDynamicsCompressorNode.channelCountMode;if(this._nativeDynamicsCompressorNode.channelCountMode=l,l==="max")throw this._nativeDynamicsCompressorNode.channelCountMode=u,i()}get knee(){return this._knee}get ratio(){return this._ratio}get reduction(){return typeof this._nativeDynamicsCompressorNode.reduction.value=="number"?this._nativeDynamicsCompressorNode.reduction.value:this._nativeDynamicsCompressorNode.reduction}get release(){return this._release}get threshold(){return this._threshold}},Fw=(s,e,t,n,i)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=t(a);const u=Qt(l,c);if(!u){const h={attack:l.attack.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,knee:l.knee.value,ratio:l.ratio.value,release:l.release.value,threshold:l.threshold.value};l=e(c,h)}return r.set(c,l),u?(await s(c,a.attack,l.attack),await s(c,a.knee,l.knee),await s(c,a.ratio,l.ratio),await s(c,a.release,l.release),await s(c,a.threshold,l.threshold)):(await n(c,a.attack,l.attack),await n(c,a.knee,l.knee),await n(c,a.ratio,l.ratio),await n(c,a.release,l.release),await n(c,a.threshold,l.threshold)),await i(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},kw=()=>new DOMException("","EncodingError"),Bw=s=>e=>new Promise((t,n)=>{if(s===null){n(new SyntaxError);return}const i=s.document.head;if(i===null)n(new SyntaxError);else{const r=s.document.createElement("script"),o=new Blob([e],{type:"application/javascript"}),a=URL.createObjectURL(o),c=s.onerror,l=()=>{s.onerror=c,URL.revokeObjectURL(a)};s.onerror=(u,h,d,f,m)=>{if(h===a||h===s.location.href&&d===1&&f===1)return l(),n(m),!1;if(c!==null)return c(u,h,d,f,m)},r.onerror=()=>{l(),n(new SyntaxError)},r.onload=()=>{l(),t()},r.src=a,r.type="module",i.appendChild(r)}}),Vw=s=>class{constructor(t){this._nativeEventTarget=t,this._listeners=new WeakMap}addEventListener(t,n,i){if(n!==null){let r=this._listeners.get(n);r===void 0&&(r=s(this,n),typeof n=="function"&&this._listeners.set(n,r)),this._nativeEventTarget.addEventListener(t,r,i)}}dispatchEvent(t){return this._nativeEventTarget.dispatchEvent(t)}removeEventListener(t,n,i){const r=n===null?void 0:this._listeners.get(n);this._nativeEventTarget.removeEventListener(t,r===void 0?null:r,i)}},zw=s=>(e,t,n)=>{Object.defineProperties(s,{currentFrame:{configurable:!0,get(){return Math.round(e*t)}},currentTime:{configurable:!0,get(){return e}}});try{return n()}finally{s!==null&&(delete s.currentFrame,delete s.currentTime)}},Gw=s=>async e=>{try{const t=await fetch(e);if(t.ok)return[await t.text(),t.url]}catch{}throw s()},Hw={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",gain:1},Ww=(s,e,t,n,i,r)=>class extends s{constructor(a,c){const l=i(a),u={...Hw,...c},h=n(l,u),d=r(l),f=d?t():null;super(a,!1,h,f),this._gain=e(this,d,h.gain,on,dn)}get gain(){return this._gain}},Xw=(s,e,t,n,i)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=t(a);const u=Qt(l,c);if(!u){const h={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,gain:l.gain.value};l=e(c,h)}return r.set(c,l),u?await s(c,a.gain,l.gain):await n(c,a.gain,l.gain),await i(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},qw=(s,e)=>t=>e(s,t),jw=s=>e=>{const t=s(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioNode in the audio graph.");return t.renderer},Yw=s=>e=>{var t;return(t=s.get(e))!==null&&t!==void 0?t:0},$w=s=>e=>{const t=s(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioParam in the audio graph.");return t.renderer},Kw=s=>e=>s.get(e),kt=()=>new DOMException("","InvalidStateError"),Zw=s=>e=>{const t=s.get(e);if(t===void 0)throw kt();return t},Qw=(s,e)=>t=>{let n=s.get(t);if(n!==void 0)return n;if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");return n=new e(1,1,44100),s.set(t,n),n},Jw=s=>e=>{const t=s.get(e);if(t===void 0)throw new Error("The context has no set of AudioWorkletNodes.");return t},pl=()=>new DOMException("","InvalidAccessError"),eA=s=>{s.getFrequencyResponse=(e=>(t,n,i)=>{if(t.length!==n.length||n.length!==i.length)throw pl();return e.call(s,t,n,i)})(s.getFrequencyResponse)},tA={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers"},nA=(s,e,t,n,i,r)=>class extends s{constructor(a,c){const l=n(a),u=i(l),h={...tA,...c},d=e(l,u?null:a.baseLatency,h),f=u?t(h.feedback,h.feedforward):null;super(a,!1,d,f),eA(d),this._nativeIIRFilterNode=d,r(this,1)}getFrequencyResponse(a,c,l){return this._nativeIIRFilterNode.getFrequencyResponse(a,c,l)}},Og=(s,e,t,n,i,r,o,a,c,l,u)=>{const h=l.length;let d=a;for(let f=0;f<h;f+=1){let m=t[0]*l[f];for(let _=1;_<i;_+=1){const g=d-_&c-1;m+=t[_]*r[g],m-=s[_]*o[g]}for(let _=i;_<n;_+=1)m+=t[_]*r[d-_&c-1];for(let _=i;_<e;_+=1)m-=s[_]*o[d-_&c-1];r[d]=l[f],o[d]=m,d=d+1&c-1,u[f]=m}return d},iA=(s,e,t,n)=>{const i=t instanceof Float64Array?t:new Float64Array(t),r=n instanceof Float64Array?n:new Float64Array(n),o=i.length,a=r.length,c=Math.min(o,a);if(i[0]!==1){for(let m=0;m<o;m+=1)r[m]/=i[0];for(let m=1;m<a;m+=1)i[m]/=i[0]}const l=32,u=new Float32Array(l),h=new Float32Array(l),d=e.createBuffer(s.numberOfChannels,s.length,s.sampleRate),f=s.numberOfChannels;for(let m=0;m<f;m+=1){const _=s.getChannelData(m),g=d.getChannelData(m);u.fill(0),h.fill(0),Og(i,o,r,a,c,u,h,0,l,_,g)}return d},sA=(s,e,t,n,i)=>(r,o)=>{const a=new WeakMap;let c=null;const l=async(u,h)=>{let d=null,f=e(u);const m=Qt(f,h);if(h.createIIRFilter===void 0?d=s(h,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}):m||(f=h.createIIRFilter(o,r)),a.set(h,d===null?f:d),d!==null){if(c===null){if(t===null)throw new Error("Missing the native OfflineAudioContext constructor.");const g=new t(u.context.destination.channelCount,u.context.length,h.sampleRate);c=(async()=>{await n(u,g,g.destination);const p=await i(g);return iA(p,h,r,o)})()}const _=await c;return d.buffer=_,d.start(0),d}return await n(u,h,f),f};return{render(u,h){const d=a.get(h);return d!==void 0?Promise.resolve(d):l(u,h)}}},rA=(s,e,t,n,i,r)=>o=>(a,c)=>{const l=s.get(a);if(l===void 0){if(!o&&r(a)){const u=n(a),{outputs:h}=t(a);for(const d of h)if(ga(d)){const f=n(d[0]);e(u,f,d[1],d[2])}else{const f=i(d[0]);u.disconnect(f,d[1])}}s.set(a,c)}else s.set(a,l+c)},oA=(s,e)=>t=>{const n=s.get(t);return e(n)||e(t)},aA=(s,e)=>t=>s.has(t)||e(t),cA=(s,e)=>t=>s.has(t)||e(t),lA=(s,e)=>t=>{const n=s.get(t);return e(n)||e(t)},uA=s=>e=>s!==null&&e instanceof s,hA=s=>e=>s!==null&&typeof s.AudioNode=="function"&&e instanceof s.AudioNode,dA=s=>e=>s!==null&&typeof s.AudioParam=="function"&&e instanceof s.AudioParam,fA=(s,e)=>t=>s(t)||e(t),pA=s=>e=>s!==null&&e instanceof s,mA=s=>s!==null&&s.isSecureContext,gA=(s,e,t,n)=>class extends s{constructor(r,o){const a=t(r),c=e(a,o);if(n(a))throw TypeError();super(r,!0,c,null),this._nativeMediaElementAudioSourceNode=c}get mediaElement(){return this._nativeMediaElementAudioSourceNode.mediaElement}},_A={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers"},vA=(s,e,t,n)=>class extends s{constructor(r,o){const a=t(r);if(n(a))throw new TypeError;const c={..._A,...o},l=e(a,c);super(r,!1,l,null),this._nativeMediaStreamAudioDestinationNode=l}get stream(){return this._nativeMediaStreamAudioDestinationNode.stream}},yA=(s,e,t,n)=>class extends s{constructor(r,o){const a=t(r),c=e(a,o);if(n(a))throw new TypeError;super(r,!0,c,null),this._nativeMediaStreamAudioSourceNode=c}get mediaStream(){return this._nativeMediaStreamAudioSourceNode.mediaStream}},xA=(s,e,t)=>class extends s{constructor(i,r){const o=t(i),a=e(o,r);super(i,!0,a,null)}},SA=(s,e,t,n,i,r)=>class extends t{constructor(a,c){super(a),this._nativeContext=a,dl.set(this,a),n(a)&&i.set(a,new Set),this._destination=new s(this,c),this._listener=e(this,a),this._onstatechange=null}get currentTime(){return this._nativeContext.currentTime}get destination(){return this._destination}get listener(){return this._listener}get onstatechange(){return this._onstatechange}set onstatechange(a){const c=typeof a=="function"?r(this,a):null;this._nativeContext.onstatechange=c;const l=this._nativeContext.onstatechange;this._onstatechange=l!==null&&l===c?a:l}get sampleRate(){return this._nativeContext.sampleRate}get state(){return this._nativeContext.state}},qo=s=>{const e=new Uint32Array([1179011410,40,1163280727,544501094,16,131073,44100,176400,1048580,1635017060,4,0]);try{const t=s.decodeAudioData(e.buffer,()=>{});return t===void 0?!1:(t.catch(()=>{}),!0)}catch{}return!1},MA=(s,e)=>(t,n,i)=>{const r=new Set;return t.connect=(o=>(a,c=0,l=0)=>{const u=r.size===0;if(e(a))return o.call(t,a,c,l),s(r,[a,c,l],h=>h[0]===a&&h[1]===c&&h[2]===l,!0),u&&n(),a;o.call(t,a,c),s(r,[a,c],h=>h[0]===a&&h[1]===c,!0),u&&n()})(t.connect),t.disconnect=(o=>(a,c,l)=>{const u=r.size>0;if(a===void 0)o.apply(t),r.clear();else if(typeof a=="number"){o.call(t,a);for(const d of r)d[1]===a&&r.delete(d)}else{e(a)?o.call(t,a,c,l):o.call(t,a,c);for(const d of r)d[0]===a&&(c===void 0||d[1]===c)&&(l===void 0||d[2]===l)&&r.delete(d)}const h=r.size===0;u&&h&&i()})(t.disconnect),t},mt=(s,e,t)=>{const n=e[t];n!==void 0&&n!==s[t]&&(s[t]=n)},Pt=(s,e)=>{mt(s,e,"channelCount"),mt(s,e,"channelCountMode"),mt(s,e,"channelInterpretation")},Fp=s=>typeof s.getFloatTimeDomainData=="function",bA=s=>{s.getFloatTimeDomainData=e=>{const t=new Uint8Array(e.length);s.getByteTimeDomainData(t);const n=Math.max(t.length,s.fftSize);for(let i=0;i<n;i+=1)e[i]=(t[i]-128)*.0078125;return e}},TA=(s,e)=>(t,n)=>{const i=t.createAnalyser();if(Pt(i,n),!(n.maxDecibels>n.minDecibels))throw e();return mt(i,n,"fftSize"),mt(i,n,"maxDecibels"),mt(i,n,"minDecibels"),mt(i,n,"smoothingTimeConstant"),s(Fp,()=>Fp(i))||bA(i),i},EA=s=>s===null?null:s.hasOwnProperty("AudioBuffer")?s.AudioBuffer:null,xt=(s,e,t)=>{const n=e[t];n!==void 0&&n!==s[t].value&&(s[t].value=n)},wA=s=>{s.start=(e=>{let t=!1;return(n=0,i=0,r)=>{if(t)throw kt();e.call(s,n,i,r),t=!0}})(s.start)},zh=s=>{s.start=(e=>(t=0,n=0,i)=>{if(typeof i=="number"&&i<0||n<0||t<0)throw new RangeError("The parameters can't be negative.");e.call(s,t,n,i)})(s.start)},Gh=s=>{s.stop=(e=>(t=0)=>{if(t<0)throw new RangeError("The parameter can't be negative.");e.call(s,t)})(s.stop)},AA=(s,e,t,n,i,r,o,a,c,l,u)=>(h,d)=>{const f=h.createBufferSource();return Pt(f,d),xt(f,d,"playbackRate"),mt(f,d,"buffer"),mt(f,d,"loop"),mt(f,d,"loopEnd"),mt(f,d,"loopStart"),e(t,()=>t(h))||wA(f),e(n,()=>n(h))||c(f),e(i,()=>i(h))||l(f,h),e(r,()=>r(h))||zh(f),e(o,()=>o(h))||u(f,h),e(a,()=>a(h))||Gh(f),s(h,f),f},CA=s=>s===null?null:s.hasOwnProperty("AudioContext")?s.AudioContext:s.hasOwnProperty("webkitAudioContext")?s.webkitAudioContext:null,RA=(s,e)=>(t,n,i)=>{const r=t.destination;if(r.channelCount!==n)try{r.channelCount=n}catch{}i&&r.channelCountMode!=="explicit"&&(r.channelCountMode="explicit"),r.maxChannelCount===0&&Object.defineProperty(r,"maxChannelCount",{value:n});const o=s(t,{channelCount:n,channelCountMode:r.channelCountMode,channelInterpretation:r.channelInterpretation,gain:1});return e(o,"channelCount",a=>()=>a.call(o),a=>c=>{a.call(o,c);try{r.channelCount=c}catch(l){if(c>r.maxChannelCount)throw l}}),e(o,"channelCountMode",a=>()=>a.call(o),a=>c=>{a.call(o,c),r.channelCountMode=c}),e(o,"channelInterpretation",a=>()=>a.call(o),a=>c=>{a.call(o,c),r.channelInterpretation=c}),Object.defineProperty(o,"maxChannelCount",{get:()=>r.maxChannelCount}),o.connect(r),o},IA=s=>s===null?null:s.hasOwnProperty("AudioWorkletNode")?s.AudioWorkletNode:null,DA=s=>{const{port1:e}=new MessageChannel;try{e.postMessage(s)}finally{e.close()}},PA=(s,e,t,n,i)=>(r,o,a,c,l,u)=>{if(a!==null)try{const h=new a(r,c,u),d=new Map;let f=null;if(Object.defineProperties(h,{channelCount:{get:()=>u.channelCount,set:()=>{throw s()}},channelCountMode:{get:()=>"explicit",set:()=>{throw s()}},onprocessorerror:{get:()=>f,set:m=>{typeof f=="function"&&h.removeEventListener("processorerror",f),f=typeof m=="function"?m:null,typeof f=="function"&&h.addEventListener("processorerror",f)}}}),h.addEventListener=(m=>(..._)=>{if(_[0]==="processorerror"){const g=typeof _[1]=="function"?_[1]:typeof _[1]=="object"&&_[1]!==null&&typeof _[1].handleEvent=="function"?_[1].handleEvent:null;if(g!==null){const p=d.get(_[1]);p!==void 0?_[1]=p:(_[1]=x=>{x.type==="error"?(Object.defineProperties(x,{type:{value:"processorerror"}}),g(x)):g(new ErrorEvent(_[0],{...x}))},d.set(g,_[1]))}}return m.call(h,"error",_[1],_[2]),m.call(h,..._)})(h.addEventListener),h.removeEventListener=(m=>(..._)=>{if(_[0]==="processorerror"){const g=d.get(_[1]);g!==void 0&&(d.delete(_[1]),_[1]=g)}return m.call(h,"error",_[1],_[2]),m.call(h,_[0],_[1],_[2])})(h.removeEventListener),u.numberOfOutputs!==0){const m=t(r,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return h.connect(m).connect(r.destination),i(h,()=>m.disconnect(),()=>m.connect(r.destination))}return h}catch(h){throw h.code===11?n():h}if(l===void 0)throw n();return DA(u),e(r,o,l,u)},Ug=(s,e)=>s===null?512:Math.max(512,Math.min(16384,Math.pow(2,Math.round(Math.log2(s*e))))),NA=s=>new Promise((e,t)=>{const{port1:n,port2:i}=new MessageChannel;n.onmessage=({data:r})=>{n.close(),i.close(),e(r)},n.onmessageerror=({data:r})=>{n.close(),i.close(),t(r)},i.postMessage(s)}),LA=async(s,e)=>{const t=await NA(e);return new s(t)},OA=(s,e,t,n)=>{let i=Ju.get(s);i===void 0&&(i=new WeakMap,Ju.set(s,i));const r=LA(t,n);return i.set(e,r),r},UA=(s,e,t,n,i,r,o,a,c,l,u,h,d)=>(f,m,_,g)=>{if(g.numberOfInputs===0&&g.numberOfOutputs===0)throw c();const p=Array.isArray(g.outputChannelCount)?g.outputChannelCount:Array.from(g.outputChannelCount);if(p.some(K=>K<1))throw c();if(p.length!==g.numberOfOutputs)throw e();if(g.channelCountMode!=="explicit")throw c();const x=g.channelCount*g.numberOfInputs,v=p.reduce((K,te)=>K+te,0),M=_.parameterDescriptors===void 0?0:_.parameterDescriptors.length;if(x+M>6||v>6)throw c();const y=new MessageChannel,b=[],w=[];for(let K=0;K<g.numberOfInputs;K+=1)b.push(o(f,{channelCount:g.channelCount,channelCountMode:g.channelCountMode,channelInterpretation:g.channelInterpretation,gain:1})),w.push(i(f,{channelCount:g.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:g.channelCount}));const T=[];if(_.parameterDescriptors!==void 0)for(const{defaultValue:K,maxValue:te,minValue:Fe,name:ve}of _.parameterDescriptors){const pe=r(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:g.parameterData[ve]!==void 0?g.parameterData[ve]:K===void 0?0:K});Object.defineProperties(pe.offset,{defaultValue:{get:()=>K===void 0?0:K},maxValue:{get:()=>te===void 0?on:te},minValue:{get:()=>Fe===void 0?dn:Fe}}),T.push(pe)}const S=n(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,x+M)}),E=Ug(m,f.sampleRate),L=a(f,E,x+M,Math.max(1,v)),F=i(f,{channelCount:Math.max(1,v),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,v)}),V=[];for(let K=0;K<g.numberOfOutputs;K+=1)V.push(n(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:p[K]}));for(let K=0;K<g.numberOfInputs;K+=1){b[K].connect(w[K]);for(let te=0;te<g.channelCount;te+=1)w[K].connect(S,te,K*g.channelCount+te)}const C=new Ng(_.parameterDescriptors===void 0?[]:_.parameterDescriptors.map(({name:K},te)=>{const Fe=T[te];return Fe.connect(S,0,x+te),Fe.start(0),[K,Fe.offset]}));S.connect(L);let U=g.channelInterpretation,k=null;const O=g.numberOfOutputs===0?[L]:V,j={get bufferSize(){return E},get channelCount(){return g.channelCount},set channelCount(K){throw t()},get channelCountMode(){return g.channelCountMode},set channelCountMode(K){throw t()},get channelInterpretation(){return U},set channelInterpretation(K){for(const te of b)te.channelInterpretation=K;U=K},get context(){return L.context},get inputs(){return b},get numberOfInputs(){return g.numberOfInputs},get numberOfOutputs(){return g.numberOfOutputs},get onprocessorerror(){return k},set onprocessorerror(K){typeof k=="function"&&j.removeEventListener("processorerror",k),k=typeof K=="function"?K:null,typeof k=="function"&&j.addEventListener("processorerror",k)},get parameters(){return C},get port(){return y.port2},addEventListener(...K){return L.addEventListener(K[0],K[1],K[2])},connect:s.bind(null,O),disconnect:l.bind(null,O),dispatchEvent(...K){return L.dispatchEvent(K[0])},removeEventListener(...K){return L.removeEventListener(K[0],K[1],K[2])}},B=new Map;y.port1.addEventListener=(K=>(...te)=>{if(te[0]==="message"){const Fe=typeof te[1]=="function"?te[1]:typeof te[1]=="object"&&te[1]!==null&&typeof te[1].handleEvent=="function"?te[1].handleEvent:null;if(Fe!==null){const ve=B.get(te[1]);ve!==void 0?te[1]=ve:(te[1]=pe=>{u(f.currentTime,f.sampleRate,()=>Fe(pe))},B.set(Fe,te[1]))}}return K.call(y.port1,te[0],te[1],te[2])})(y.port1.addEventListener),y.port1.removeEventListener=(K=>(...te)=>{if(te[0]==="message"){const Fe=B.get(te[1]);Fe!==void 0&&(B.delete(te[1]),te[1]=Fe)}return K.call(y.port1,te[0],te[1],te[2])})(y.port1.removeEventListener);let X=null;Object.defineProperty(y.port1,"onmessage",{get:()=>X,set:K=>{typeof X=="function"&&y.port1.removeEventListener("message",X),X=typeof K=="function"?K:null,typeof X=="function"&&(y.port1.addEventListener("message",X),y.port1.start())}}),_.prototype.port=y.port1;let R=null;OA(f,j,_,g).then(K=>R=K);const re=Uc(g.numberOfInputs,g.channelCount),ce=Uc(g.numberOfOutputs,p),J=_.parameterDescriptors===void 0?[]:_.parameterDescriptors.reduce((K,{name:te})=>({...K,[te]:new Float32Array(128)}),{});let de=!0;const xe=()=>{g.numberOfOutputs>0&&L.disconnect(F);for(let K=0,te=0;K<g.numberOfOutputs;K+=1){const Fe=V[K];for(let ve=0;ve<p[K];ve+=1)F.disconnect(Fe,te+ve,ve);te+=p[K]}},Q=new Map;L.onaudioprocess=({inputBuffer:K,outputBuffer:te})=>{if(R!==null){const Fe=h(j);for(let ve=0;ve<E;ve+=128){for(let pe=0;pe<g.numberOfInputs;pe+=1)for(let Ee=0;Ee<g.channelCount;Ee+=1)Oc(K,re[pe],Ee,Ee,ve);_.parameterDescriptors!==void 0&&_.parameterDescriptors.forEach(({name:pe},Ee)=>{Oc(K,J,pe,x+Ee,ve)});for(let pe=0;pe<g.numberOfInputs;pe+=1)for(let Ee=0;Ee<p[pe];Ee+=1)ce[pe][Ee].byteLength===0&&(ce[pe][Ee]=new Float32Array(128));try{const pe=re.map((Je,dt)=>{if(Fe[dt].size>0)return Q.set(dt,E/128),Je;const A=Q.get(dt);return A===void 0?[]:(Je.every(q=>q.every(ie=>ie===0))&&(A===1?Q.delete(dt):Q.set(dt,A-1)),Je)});de=u(f.currentTime+ve/f.sampleRate,f.sampleRate,()=>R.process(pe,ce,J));for(let Je=0,dt=0;Je<g.numberOfOutputs;Je+=1){for(let D=0;D<p[Je];D+=1)Lg(te,ce[Je],D,dt+D,ve);dt+=p[Je]}}catch(pe){de=!1,j.dispatchEvent(new ErrorEvent("processorerror",{colno:pe.colno,filename:pe.filename,lineno:pe.lineno,message:pe.message}))}if(!de){for(let pe=0;pe<g.numberOfInputs;pe+=1){b[pe].disconnect(w[pe]);for(let Ee=0;Ee<g.channelCount;Ee+=1)w[ve].disconnect(S,Ee,pe*g.channelCount+Ee)}if(_.parameterDescriptors!==void 0){const pe=_.parameterDescriptors.length;for(let Ee=0;Ee<pe;Ee+=1){const Je=T[Ee];Je.disconnect(S,0,x+Ee),Je.stop()}}S.disconnect(L),L.onaudioprocess=null,He?xe():z();break}}}};let He=!1;const vt=o(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0}),De=()=>L.connect(vt).connect(f.destination),z=()=>{L.disconnect(vt),vt.disconnect()},Nt=()=>{if(de){z(),g.numberOfOutputs>0&&L.connect(F);for(let K=0,te=0;K<g.numberOfOutputs;K+=1){const Fe=V[K];for(let ve=0;ve<p[K];ve+=1)F.connect(Fe,te+ve,ve);te+=p[K]}}He=!0},Ae=()=>{de&&(De(),xe()),He=!1};return De(),d(j,Nt,Ae)},Fg=(s,e)=>{const t=s.createBiquadFilter();return Pt(t,e),xt(t,e,"Q"),xt(t,e,"detune"),xt(t,e,"frequency"),xt(t,e,"gain"),mt(t,e,"type"),t},FA=(s,e)=>(t,n)=>{const i=t.createChannelMerger(n.numberOfInputs);return s!==null&&s.name==="webkitAudioContext"&&e(t,i),Pt(i,n),i},kA=s=>{const e=s.numberOfOutputs;Object.defineProperty(s,"channelCount",{get:()=>e,set:t=>{if(t!==e)throw kt()}}),Object.defineProperty(s,"channelCountMode",{get:()=>"explicit",set:t=>{if(t!=="explicit")throw kt()}}),Object.defineProperty(s,"channelInterpretation",{get:()=>"discrete",set:t=>{if(t!=="discrete")throw kt()}})},_a=(s,e)=>{const t=s.createChannelSplitter(e.numberOfOutputs);return Pt(t,e),kA(t),t},BA=(s,e,t,n,i)=>(r,o)=>{if(r.createConstantSource===void 0)return t(r,o);const a=r.createConstantSource();return Pt(a,o),xt(a,o,"offset"),e(n,()=>n(r))||zh(a),e(i,()=>i(r))||Gh(a),s(r,a),a},mo=(s,e)=>(s.connect=e.connect.bind(e),s.disconnect=e.disconnect.bind(e),s),VA=(s,e,t,n)=>(i,{offset:r,...o})=>{const a=i.createBuffer(1,2,44100),c=e(i,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),l=t(i,{...o,gain:r}),u=a.getChannelData(0);u[0]=1,u[1]=1,c.buffer=a,c.loop=!0;const h={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(m){l.channelCount=m},get channelCountMode(){return l.channelCountMode},set channelCountMode(m){l.channelCountMode=m},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(m){l.channelInterpretation=m},get context(){return l.context},get inputs(){return[]},get numberOfInputs(){return c.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get offset(){return l.gain},get onended(){return c.onended},set onended(m){c.onended=m},addEventListener(...m){return c.addEventListener(m[0],m[1],m[2])},dispatchEvent(...m){return c.dispatchEvent(m[0])},removeEventListener(...m){return c.removeEventListener(m[0],m[1],m[2])},start(m=0){c.start.call(c,m)},stop(m=0){c.stop.call(c,m)}},d=()=>c.connect(l),f=()=>c.disconnect(l);return s(i,c),n(mo(h,l),d,f)},zA=(s,e)=>(t,n)=>{const i=t.createConvolver();if(Pt(i,n),n.disableNormalization===i.normalize&&(i.normalize=!n.disableNormalization),mt(i,n,"buffer"),n.channelCount>2||(e(i,"channelCount",r=>()=>r.call(i),r=>o=>{if(o>2)throw s();return r.call(i,o)}),n.channelCountMode==="max"))throw s();return e(i,"channelCountMode",r=>()=>r.call(i),r=>o=>{if(o==="max")throw s();return r.call(i,o)}),i},kg=(s,e)=>{const t=s.createDelay(e.maxDelayTime);return Pt(t,e),xt(t,e,"delayTime"),t},GA=s=>(e,t)=>{const n=e.createDynamicsCompressor();if(Pt(n,t),t.channelCount>2||t.channelCountMode==="max")throw s();return xt(n,t,"attack"),xt(n,t,"knee"),xt(n,t,"ratio"),xt(n,t,"release"),xt(n,t,"threshold"),n},_n=(s,e)=>{const t=s.createGain();return Pt(t,e),xt(t,e,"gain"),t},HA=s=>(e,t,n)=>{if(e.createIIRFilter===void 0)return s(e,t,n);const i=e.createIIRFilter(n.feedforward,n.feedback);return Pt(i,n),i};function WA(s,e){const t=e[0]*e[0]+e[1]*e[1];return[(s[0]*e[0]+s[1]*e[1])/t,(s[1]*e[0]-s[0]*e[1])/t]}function XA(s,e){return[s[0]*e[0]-s[1]*e[1],s[0]*e[1]+s[1]*e[0]]}function kp(s,e){let t=[0,0];for(let n=s.length-1;n>=0;n-=1)t=XA(t,e),t[0]+=s[n];return t}const qA=(s,e,t,n)=>(i,r,{channelCount:o,channelCountMode:a,channelInterpretation:c,feedback:l,feedforward:u})=>{const h=Ug(r,i.sampleRate),d=l instanceof Float64Array?l:new Float64Array(l),f=u instanceof Float64Array?u:new Float64Array(u),m=d.length,_=f.length,g=Math.min(m,_);if(m===0||m>20)throw n();if(d[0]===0)throw e();if(_===0||_>20)throw n();if(f[0]===0)throw e();if(d[0]!==1){for(let T=0;T<_;T+=1)f[T]/=d[0];for(let T=1;T<m;T+=1)d[T]/=d[0]}const p=t(i,h,o,o);p.channelCount=o,p.channelCountMode=a,p.channelInterpretation=c;const x=32,v=[],M=[],y=[];for(let T=0;T<o;T+=1){v.push(0);const S=new Float32Array(x),E=new Float32Array(x);S.fill(0),E.fill(0),M.push(S),y.push(E)}p.onaudioprocess=T=>{const S=T.inputBuffer,E=T.outputBuffer,L=S.numberOfChannels;for(let F=0;F<L;F+=1){const V=S.getChannelData(F),C=E.getChannelData(F);v[F]=Og(d,m,f,_,g,M[F],y[F],v[F],x,V,C)}};const b=i.sampleRate/2;return mo({get bufferSize(){return h},get channelCount(){return p.channelCount},set channelCount(T){p.channelCount=T},get channelCountMode(){return p.channelCountMode},set channelCountMode(T){p.channelCountMode=T},get channelInterpretation(){return p.channelInterpretation},set channelInterpretation(T){p.channelInterpretation=T},get context(){return p.context},get inputs(){return[p]},get numberOfInputs(){return p.numberOfInputs},get numberOfOutputs(){return p.numberOfOutputs},addEventListener(...T){return p.addEventListener(T[0],T[1],T[2])},dispatchEvent(...T){return p.dispatchEvent(T[0])},getFrequencyResponse(T,S,E){if(T.length!==S.length||S.length!==E.length)throw s();const L=T.length;for(let F=0;F<L;F+=1){const V=-Math.PI*(T[F]/b),C=[Math.cos(V),Math.sin(V)],U=kp(f,C),k=kp(d,C),O=WA(U,k);S[F]=Math.sqrt(O[0]*O[0]+O[1]*O[1]),E[F]=Math.atan2(O[1],O[0])}},removeEventListener(...T){return p.removeEventListener(T[0],T[1],T[2])}},p)},jA=(s,e)=>s.createMediaElementSource(e.mediaElement),YA=(s,e)=>{const t=s.createMediaStreamDestination();return Pt(t,e),t.numberOfOutputs===1&&Object.defineProperty(t,"numberOfOutputs",{get:()=>0}),t},$A=(s,{mediaStream:e})=>{const t=e.getAudioTracks();t.sort((r,o)=>r.id<o.id?-1:r.id>o.id?1:0);const n=t.slice(0,1),i=s.createMediaStreamSource(new MediaStream(n));return Object.defineProperty(i,"mediaStream",{value:e}),i},KA=(s,e)=>(t,{mediaStreamTrack:n})=>{if(typeof t.createMediaStreamTrackSource=="function")return t.createMediaStreamTrackSource(n);const i=new MediaStream([n]),r=t.createMediaStreamSource(i);if(n.kind!=="audio")throw s();if(e(t))throw new TypeError;return r},ZA=s=>s===null?null:s.hasOwnProperty("OfflineAudioContext")?s.OfflineAudioContext:s.hasOwnProperty("webkitOfflineAudioContext")?s.webkitOfflineAudioContext:null,QA=(s,e,t,n,i,r)=>(o,a)=>{const c=o.createOscillator();return Pt(c,a),xt(c,a,"detune"),xt(c,a,"frequency"),a.periodicWave!==void 0?c.setPeriodicWave(a.periodicWave):mt(c,a,"type"),e(t,()=>t(o))||zh(c),e(n,()=>n(o))||r(c,o),e(i,()=>i(o))||Gh(c),s(o,c),c},JA=s=>(e,t)=>{const n=e.createPanner();return n.orientationX===void 0?s(e,t):(Pt(n,t),xt(n,t,"orientationX"),xt(n,t,"orientationY"),xt(n,t,"orientationZ"),xt(n,t,"positionX"),xt(n,t,"positionY"),xt(n,t,"positionZ"),mt(n,t,"coneInnerAngle"),mt(n,t,"coneOuterAngle"),mt(n,t,"coneOuterGain"),mt(n,t,"distanceModel"),mt(n,t,"maxDistance"),mt(n,t,"panningModel"),mt(n,t,"refDistance"),mt(n,t,"rolloffFactor"),n)},e1=(s,e,t,n,i,r,o,a,c,l)=>(u,{coneInnerAngle:h,coneOuterAngle:d,coneOuterGain:f,distanceModel:m,maxDistance:_,orientationX:g,orientationY:p,orientationZ:x,panningModel:v,positionX:M,positionY:y,positionZ:b,refDistance:w,rolloffFactor:T,...S})=>{const E=u.createPanner();if(S.channelCount>2||S.channelCountMode==="max")throw o();Pt(E,S);const L={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},F=t(u,{...L,channelInterpretation:"speakers",numberOfInputs:6}),V=n(u,{...S,gain:1}),C=n(u,{...L,gain:1}),U=n(u,{...L,gain:0}),k=n(u,{...L,gain:0}),O=n(u,{...L,gain:0}),j=n(u,{...L,gain:0}),B=n(u,{...L,gain:0}),X=i(u,256,6,1),R=r(u,{...L,curve:new Float32Array([1,1]),oversample:"none"});let H=[g,p,x],re=[M,y,b];const ce=new Float32Array(1);X.onaudioprocess=({inputBuffer:Q})=>{const He=[c(Q,ce,0),c(Q,ce,1),c(Q,ce,2)];He.some((De,z)=>De!==H[z])&&(E.setOrientation(...He),H=He);const vt=[c(Q,ce,3),c(Q,ce,4),c(Q,ce,5)];vt.some((De,z)=>De!==re[z])&&(E.setPosition(...vt),re=vt)},Object.defineProperty(U.gain,"defaultValue",{get:()=>0}),Object.defineProperty(k.gain,"defaultValue",{get:()=>0}),Object.defineProperty(O.gain,"defaultValue",{get:()=>0}),Object.defineProperty(j.gain,"defaultValue",{get:()=>0}),Object.defineProperty(B.gain,"defaultValue",{get:()=>0});const J={get bufferSize(){},get channelCount(){return E.channelCount},set channelCount(Q){if(Q>2)throw o();V.channelCount=Q,E.channelCount=Q},get channelCountMode(){return E.channelCountMode},set channelCountMode(Q){if(Q==="max")throw o();V.channelCountMode=Q,E.channelCountMode=Q},get channelInterpretation(){return E.channelInterpretation},set channelInterpretation(Q){V.channelInterpretation=Q,E.channelInterpretation=Q},get coneInnerAngle(){return E.coneInnerAngle},set coneInnerAngle(Q){E.coneInnerAngle=Q},get coneOuterAngle(){return E.coneOuterAngle},set coneOuterAngle(Q){E.coneOuterAngle=Q},get coneOuterGain(){return E.coneOuterGain},set coneOuterGain(Q){if(Q<0||Q>1)throw e();E.coneOuterGain=Q},get context(){return E.context},get distanceModel(){return E.distanceModel},set distanceModel(Q){E.distanceModel=Q},get inputs(){return[V]},get maxDistance(){return E.maxDistance},set maxDistance(Q){if(Q<0)throw new RangeError;E.maxDistance=Q},get numberOfInputs(){return E.numberOfInputs},get numberOfOutputs(){return E.numberOfOutputs},get orientationX(){return C.gain},get orientationY(){return U.gain},get orientationZ(){return k.gain},get panningModel(){return E.panningModel},set panningModel(Q){E.panningModel=Q},get positionX(){return O.gain},get positionY(){return j.gain},get positionZ(){return B.gain},get refDistance(){return E.refDistance},set refDistance(Q){if(Q<0)throw new RangeError;E.refDistance=Q},get rolloffFactor(){return E.rolloffFactor},set rolloffFactor(Q){if(Q<0)throw new RangeError;E.rolloffFactor=Q},addEventListener(...Q){return V.addEventListener(Q[0],Q[1],Q[2])},dispatchEvent(...Q){return V.dispatchEvent(Q[0])},removeEventListener(...Q){return V.removeEventListener(Q[0],Q[1],Q[2])}};h!==J.coneInnerAngle&&(J.coneInnerAngle=h),d!==J.coneOuterAngle&&(J.coneOuterAngle=d),f!==J.coneOuterGain&&(J.coneOuterGain=f),m!==J.distanceModel&&(J.distanceModel=m),_!==J.maxDistance&&(J.maxDistance=_),g!==J.orientationX.value&&(J.orientationX.value=g),p!==J.orientationY.value&&(J.orientationY.value=p),x!==J.orientationZ.value&&(J.orientationZ.value=x),v!==J.panningModel&&(J.panningModel=v),M!==J.positionX.value&&(J.positionX.value=M),y!==J.positionY.value&&(J.positionY.value=y),b!==J.positionZ.value&&(J.positionZ.value=b),w!==J.refDistance&&(J.refDistance=w),T!==J.rolloffFactor&&(J.rolloffFactor=T),(H[0]!==1||H[1]!==0||H[2]!==0)&&E.setOrientation(...H),(re[0]!==0||re[1]!==0||re[2]!==0)&&E.setPosition(...re);const de=()=>{V.connect(E),s(V,R,0,0),R.connect(C).connect(F,0,0),R.connect(U).connect(F,0,1),R.connect(k).connect(F,0,2),R.connect(O).connect(F,0,3),R.connect(j).connect(F,0,4),R.connect(B).connect(F,0,5),F.connect(X).connect(u.destination)},xe=()=>{V.disconnect(E),a(V,R,0,0),R.disconnect(C),C.disconnect(F),R.disconnect(U),U.disconnect(F),R.disconnect(k),k.disconnect(F),R.disconnect(O),O.disconnect(F),R.disconnect(j),j.disconnect(F),R.disconnect(B),B.disconnect(F),F.disconnect(X),X.disconnect(u.destination)};return l(mo(J,E),de,xe)},t1=s=>(e,{disableNormalization:t,imag:n,real:i})=>{const r=n instanceof Float32Array?n:new Float32Array(n),o=i instanceof Float32Array?i:new Float32Array(i),a=e.createPeriodicWave(o,r,{disableNormalization:t});if(Array.from(n).length<2)throw s();return a},va=(s,e,t,n)=>s.createScriptProcessor(e,t,n),n1=(s,e)=>(t,n)=>{const i=n.channelCountMode;if(i==="clamped-max")throw e();if(t.createStereoPanner===void 0)return s(t,n);const r=t.createStereoPanner();return Pt(r,n),xt(r,n,"pan"),Object.defineProperty(r,"channelCountMode",{get:()=>i,set:o=>{if(o!==i)throw e()}}),r},i1=(s,e,t,n,i,r)=>{const a=new Float32Array([1,1]),c=Math.PI/2,l={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},u={...l,oversample:"none"},h=(m,_,g,p)=>{const x=new Float32Array(16385),v=new Float32Array(16385);for(let S=0;S<16385;S+=1){const E=S/16384*c;x[S]=Math.cos(E),v[S]=Math.sin(E)}const M=t(m,{...l,gain:0}),y=n(m,{...u,curve:x}),b=n(m,{...u,curve:a}),w=t(m,{...l,gain:0}),T=n(m,{...u,curve:v});return{connectGraph(){_.connect(M),_.connect(b.inputs===void 0?b:b.inputs[0]),_.connect(w),b.connect(g),g.connect(y.inputs===void 0?y:y.inputs[0]),g.connect(T.inputs===void 0?T:T.inputs[0]),y.connect(M.gain),T.connect(w.gain),M.connect(p,0,0),w.connect(p,0,1)},disconnectGraph(){_.disconnect(M),_.disconnect(b.inputs===void 0?b:b.inputs[0]),_.disconnect(w),b.disconnect(g),g.disconnect(y.inputs===void 0?y:y.inputs[0]),g.disconnect(T.inputs===void 0?T:T.inputs[0]),y.disconnect(M.gain),T.disconnect(w.gain),M.disconnect(p,0,0),w.disconnect(p,0,1)}}},d=(m,_,g,p)=>{const x=new Float32Array(16385),v=new Float32Array(16385),M=new Float32Array(16385),y=new Float32Array(16385),b=Math.floor(16385/2);for(let O=0;O<16385;O+=1)if(O>b){const j=(O-b)/(16384-b)*c;x[O]=Math.cos(j),v[O]=Math.sin(j),M[O]=0,y[O]=1}else{const j=O/(16384-b)*c;x[O]=1,v[O]=0,M[O]=Math.cos(j),y[O]=Math.sin(j)}const w=e(m,{channelCount:2,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:2}),T=t(m,{...l,gain:0}),S=n(m,{...u,curve:x}),E=t(m,{...l,gain:0}),L=n(m,{...u,curve:v}),F=n(m,{...u,curve:a}),V=t(m,{...l,gain:0}),C=n(m,{...u,curve:M}),U=t(m,{...l,gain:0}),k=n(m,{...u,curve:y});return{connectGraph(){_.connect(w),_.connect(F.inputs===void 0?F:F.inputs[0]),w.connect(T,0),w.connect(E,0),w.connect(V,1),w.connect(U,1),F.connect(g),g.connect(S.inputs===void 0?S:S.inputs[0]),g.connect(L.inputs===void 0?L:L.inputs[0]),g.connect(C.inputs===void 0?C:C.inputs[0]),g.connect(k.inputs===void 0?k:k.inputs[0]),S.connect(T.gain),L.connect(E.gain),C.connect(V.gain),k.connect(U.gain),T.connect(p,0,0),V.connect(p,0,0),E.connect(p,0,1),U.connect(p,0,1)},disconnectGraph(){_.disconnect(w),_.disconnect(F.inputs===void 0?F:F.inputs[0]),w.disconnect(T,0),w.disconnect(E,0),w.disconnect(V,1),w.disconnect(U,1),F.disconnect(g),g.disconnect(S.inputs===void 0?S:S.inputs[0]),g.disconnect(L.inputs===void 0?L:L.inputs[0]),g.disconnect(C.inputs===void 0?C:C.inputs[0]),g.disconnect(k.inputs===void 0?k:k.inputs[0]),S.disconnect(T.gain),L.disconnect(E.gain),C.disconnect(V.gain),k.disconnect(U.gain),T.disconnect(p,0,0),V.disconnect(p,0,0),E.disconnect(p,0,1),U.disconnect(p,0,1)}}},f=(m,_,g,p,x)=>{if(_===1)return h(m,g,p,x);if(_===2)return d(m,g,p,x);throw i()};return(m,{channelCount:_,channelCountMode:g,pan:p,...x})=>{if(g==="max")throw i();const v=s(m,{...x,channelCount:1,channelCountMode:g,numberOfInputs:2}),M=t(m,{...x,channelCount:_,channelCountMode:g,gain:1}),y=t(m,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:p});let{connectGraph:b,disconnectGraph:w}=f(m,_,M,y,v);Object.defineProperty(y.gain,"defaultValue",{get:()=>0}),Object.defineProperty(y.gain,"maxValue",{get:()=>1}),Object.defineProperty(y.gain,"minValue",{get:()=>-1});const T={get bufferSize(){},get channelCount(){return M.channelCount},set channelCount(F){M.channelCount!==F&&(S&&w(),{connectGraph:b,disconnectGraph:w}=f(m,F,M,y,v),S&&b()),M.channelCount=F},get channelCountMode(){return M.channelCountMode},set channelCountMode(F){if(F==="clamped-max"||F==="max")throw i();M.channelCountMode=F},get channelInterpretation(){return M.channelInterpretation},set channelInterpretation(F){M.channelInterpretation=F},get context(){return M.context},get inputs(){return[M]},get numberOfInputs(){return M.numberOfInputs},get numberOfOutputs(){return M.numberOfOutputs},get pan(){return y.gain},addEventListener(...F){return M.addEventListener(F[0],F[1],F[2])},dispatchEvent(...F){return M.dispatchEvent(F[0])},removeEventListener(...F){return M.removeEventListener(F[0],F[1],F[2])}};let S=!1;const E=()=>{b(),S=!0},L=()=>{w(),S=!1};return r(mo(T,v),E,L)}},s1=(s,e,t,n,i,r,o)=>(a,c)=>{const l=a.createWaveShaper();if(r!==null&&r.name==="webkitAudioContext"&&a.createGain().gain.automationRate===void 0)return t(a,c);Pt(l,c);const u=c.curve===null||c.curve instanceof Float32Array?c.curve:new Float32Array(c.curve);if(u!==null&&u.length<2)throw e();mt(l,{curve:u},"curve"),mt(l,c,"oversample");let h=null,d=!1;return o(l,"curve",_=>()=>_.call(l),_=>g=>(_.call(l,g),d&&(n(g)&&h===null?h=s(a,l):!n(g)&&h!==null&&(h(),h=null)),g)),i(l,()=>{d=!0,n(l.curve)&&(h=s(a,l))},()=>{d=!1,h!==null&&(h(),h=null)})},r1=(s,e,t,n,i)=>(r,{curve:o,oversample:a,...c})=>{const l=r.createWaveShaper(),u=r.createWaveShaper();Pt(l,c),Pt(u,c);const h=t(r,{...c,gain:1}),d=t(r,{...c,gain:-1}),f=t(r,{...c,gain:1}),m=t(r,{...c,gain:-1});let _=null,g=!1,p=null;const x={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(y){h.channelCount=y,d.channelCount=y,l.channelCount=y,f.channelCount=y,u.channelCount=y,m.channelCount=y},get channelCountMode(){return l.channelCountMode},set channelCountMode(y){h.channelCountMode=y,d.channelCountMode=y,l.channelCountMode=y,f.channelCountMode=y,u.channelCountMode=y,m.channelCountMode=y},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(y){h.channelInterpretation=y,d.channelInterpretation=y,l.channelInterpretation=y,f.channelInterpretation=y,u.channelInterpretation=y,m.channelInterpretation=y},get context(){return l.context},get curve(){return p},set curve(y){if(y!==null&&y.length<2)throw e();if(y===null)l.curve=y,u.curve=y;else{const b=y.length,w=new Float32Array(b+2-b%2),T=new Float32Array(b+2-b%2);w[0]=y[0],T[0]=-y[b-1];const S=Math.ceil((b+1)/2),E=(b+1)/2-1;for(let L=1;L<S;L+=1){const F=L/S*E,V=Math.floor(F),C=Math.ceil(F);w[L]=V===C?y[V]:(1-(F-V))*y[V]+(1-(C-F))*y[C],T[L]=V===C?-y[b-1-V]:-((1-(F-V))*y[b-1-V])-(1-(C-F))*y[b-1-C]}w[S]=b%2===1?y[S-1]:(y[S-2]+y[S-1])/2,l.curve=w,u.curve=T}p=y,g&&(n(p)&&_===null?_=s(r,h):_!==null&&(_(),_=null))},get inputs(){return[h]},get numberOfInputs(){return l.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get oversample(){return l.oversample},set oversample(y){l.oversample=y,u.oversample=y},addEventListener(...y){return h.addEventListener(y[0],y[1],y[2])},dispatchEvent(...y){return h.dispatchEvent(y[0])},removeEventListener(...y){return h.removeEventListener(y[0],y[1],y[2])}};o!==null&&(x.curve=o instanceof Float32Array?o:new Float32Array(o)),a!==x.oversample&&(x.oversample=a);const v=()=>{h.connect(l).connect(f),h.connect(d).connect(u).connect(m).connect(f),g=!0,n(p)&&(_=s(r,h))},M=()=>{h.disconnect(l),l.disconnect(f),h.disconnect(d),d.disconnect(u),u.disconnect(m),m.disconnect(f),g=!1,_!==null&&(_(),_=null)};return i(mo(x,f),v,M)},un=()=>new DOMException("","NotSupportedError"),o1={numberOfChannels:1},a1=(s,e,t,n,i)=>class extends s{constructor(o,a,c){let l;if(typeof o=="number"&&a!==void 0&&c!==void 0)l={length:a,numberOfChannels:o,sampleRate:c};else if(typeof o=="object")l=o;else throw new Error("The given parameters are not valid.");const{length:u,numberOfChannels:h,sampleRate:d}={...o1,...l},f=n(h,u,d);e(qo,()=>qo(f))||f.addEventListener("statechange",(()=>{let m=0;const _=g=>{this._state==="running"&&(m>0?(f.removeEventListener("statechange",_),g.stopImmediatePropagation(),this._waitForThePromiseToSettle(g)):m+=1)};return _})()),super(f,h),this._length=u,this._nativeOfflineAudioContext=f,this._state=null}get length(){return this._nativeOfflineAudioContext.length===void 0?this._length:this._nativeOfflineAudioContext.length}get state(){return this._state===null?this._nativeOfflineAudioContext.state:this._state}startRendering(){return this._state==="running"?Promise.reject(t()):(this._state="running",i(this.destination,this._nativeOfflineAudioContext).finally(()=>{this._state=null,Rg(this)}))}_waitForThePromiseToSettle(o){this._state===null?this._nativeOfflineAudioContext.dispatchEvent(o):setTimeout(()=>this._waitForThePromiseToSettle(o))}},c1={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:440,periodicWave:void 0,type:"sine"},l1=(s,e,t,n,i,r,o)=>class extends s{constructor(c,l){const u=i(c),h={...c1,...l},d=t(u,h),f=r(u),m=f?n():null,_=c.sampleRate/2;super(c,!1,d,m),this._detune=e(this,f,d.detune,153600,-153600),this._frequency=e(this,f,d.frequency,_,-_),this._nativeOscillatorNode=d,this._onended=null,this._oscillatorNodeRenderer=m,this._oscillatorNodeRenderer!==null&&h.periodicWave!==void 0&&(this._oscillatorNodeRenderer.periodicWave=h.periodicWave)}get detune(){return this._detune}get frequency(){return this._frequency}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?o(this,c):null;this._nativeOscillatorNode.onended=l;const u=this._nativeOscillatorNode.onended;this._onended=u!==null&&u===l?c:u}get type(){return this._nativeOscillatorNode.type}set type(c){this._nativeOscillatorNode.type=c,this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=null)}setPeriodicWave(c){this._nativeOscillatorNode.setPeriodicWave(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=c)}start(c=0){if(this._nativeOscillatorNode.start(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.start=c),this.context.state!=="closed"){to(this);const l=()=>{this._nativeOscillatorNode.removeEventListener("ended",l),Vi(this)&&pa(this)};this._nativeOscillatorNode.addEventListener("ended",l)}}stop(c=0){this._nativeOscillatorNode.stop(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.stop=c)}},u1=(s,e,t,n,i)=>()=>{const r=new WeakMap;let o=null,a=null,c=null;const l=async(u,h)=>{let d=t(u);const f=Qt(d,h);if(!f){const m={channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,detune:d.detune.value,frequency:d.frequency.value,periodicWave:o===null?void 0:o,type:d.type};d=e(h,m),a!==null&&d.start(a),c!==null&&d.stop(c)}return r.set(h,d),f?(await s(h,u.detune,d.detune),await s(h,u.frequency,d.frequency)):(await n(h,u.detune,d.detune),await n(h,u.frequency,d.frequency)),await i(u,h,d),d};return{set periodicWave(u){o=u},set start(u){a=u},set stop(u){c=u},render(u,h){const d=r.get(h);return d!==void 0?Promise.resolve(d):l(u,h)}}},h1={channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",coneInnerAngle:360,coneOuterAngle:360,coneOuterGain:0,distanceModel:"inverse",maxDistance:1e4,orientationX:1,orientationY:0,orientationZ:0,panningModel:"equalpower",positionX:0,positionY:0,positionZ:0,refDistance:1,rolloffFactor:1},d1=(s,e,t,n,i,r,o)=>class extends s{constructor(c,l){const u=i(c),h={...h1,...l},d=t(u,h),f=r(u),m=f?n():null;super(c,!1,d,m),this._nativePannerNode=d,this._orientationX=e(this,f,d.orientationX,on,dn),this._orientationY=e(this,f,d.orientationY,on,dn),this._orientationZ=e(this,f,d.orientationZ,on,dn),this._positionX=e(this,f,d.positionX,on,dn),this._positionY=e(this,f,d.positionY,on,dn),this._positionZ=e(this,f,d.positionZ,on,dn),o(this,1)}get coneInnerAngle(){return this._nativePannerNode.coneInnerAngle}set coneInnerAngle(c){this._nativePannerNode.coneInnerAngle=c}get coneOuterAngle(){return this._nativePannerNode.coneOuterAngle}set coneOuterAngle(c){this._nativePannerNode.coneOuterAngle=c}get coneOuterGain(){return this._nativePannerNode.coneOuterGain}set coneOuterGain(c){this._nativePannerNode.coneOuterGain=c}get distanceModel(){return this._nativePannerNode.distanceModel}set distanceModel(c){this._nativePannerNode.distanceModel=c}get maxDistance(){return this._nativePannerNode.maxDistance}set maxDistance(c){this._nativePannerNode.maxDistance=c}get orientationX(){return this._orientationX}get orientationY(){return this._orientationY}get orientationZ(){return this._orientationZ}get panningModel(){return this._nativePannerNode.panningModel}set panningModel(c){this._nativePannerNode.panningModel=c}get positionX(){return this._positionX}get positionY(){return this._positionY}get positionZ(){return this._positionZ}get refDistance(){return this._nativePannerNode.refDistance}set refDistance(c){this._nativePannerNode.refDistance=c}get rolloffFactor(){return this._nativePannerNode.rolloffFactor}set rolloffFactor(c){this._nativePannerNode.rolloffFactor=c}},f1=(s,e,t,n,i,r,o,a,c,l)=>()=>{const u=new WeakMap;let h=null;const d=async(f,m)=>{let _=null,g=r(f);const p={channelCount:g.channelCount,channelCountMode:g.channelCountMode,channelInterpretation:g.channelInterpretation},x={...p,coneInnerAngle:g.coneInnerAngle,coneOuterAngle:g.coneOuterAngle,coneOuterGain:g.coneOuterGain,distanceModel:g.distanceModel,maxDistance:g.maxDistance,panningModel:g.panningModel,refDistance:g.refDistance,rolloffFactor:g.rolloffFactor},v=Qt(g,m);if("bufferSize"in g)_=n(m,{...p,gain:1});else if(!v){const M={...x,orientationX:g.orientationX.value,orientationY:g.orientationY.value,orientationZ:g.orientationZ.value,positionX:g.positionX.value,positionY:g.positionY.value,positionZ:g.positionZ.value};g=i(m,M)}if(u.set(m,_===null?g:_),_!==null){if(h===null){if(o===null)throw new Error("Missing the native OfflineAudioContext constructor.");const L=new o(6,f.context.length,m.sampleRate),F=e(L,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6});F.connect(L.destination),h=(async()=>{const V=await Promise.all([f.orientationX,f.orientationY,f.orientationZ,f.positionX,f.positionY,f.positionZ].map(async(C,U)=>{const k=t(L,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:U===0?1:0});return await a(L,C,k.offset),k}));for(let C=0;C<6;C+=1)V[C].connect(F,0,C),V[C].start(0);return l(L)})()}const M=await h,y=n(m,{...p,gain:1});await c(f,m,y);const b=[];for(let L=0;L<M.numberOfChannels;L+=1)b.push(M.getChannelData(L));let w=[b[0][0],b[1][0],b[2][0]],T=[b[3][0],b[4][0],b[5][0]],S=n(m,{...p,gain:1}),E=i(m,{...x,orientationX:w[0],orientationY:w[1],orientationZ:w[2],positionX:T[0],positionY:T[1],positionZ:T[2]});y.connect(S).connect(E.inputs[0]),E.connect(_);for(let L=128;L<M.length;L+=128){const F=[b[0][L],b[1][L],b[2][L]],V=[b[3][L],b[4][L],b[5][L]];if(F.some((C,U)=>C!==w[U])||V.some((C,U)=>C!==T[U])){w=F,T=V;const C=L/m.sampleRate;S.gain.setValueAtTime(0,C),S=n(m,{...p,gain:0}),E=i(m,{...x,orientationX:w[0],orientationY:w[1],orientationZ:w[2],positionX:T[0],positionY:T[1],positionZ:T[2]}),S.gain.setValueAtTime(1,C),y.connect(S).connect(E.inputs[0]),E.connect(_)}}return _}return v?(await s(m,f.orientationX,g.orientationX),await s(m,f.orientationY,g.orientationY),await s(m,f.orientationZ,g.orientationZ),await s(m,f.positionX,g.positionX),await s(m,f.positionY,g.positionY),await s(m,f.positionZ,g.positionZ)):(await a(m,f.orientationX,g.orientationX),await a(m,f.orientationY,g.orientationY),await a(m,f.orientationZ,g.orientationZ),await a(m,f.positionX,g.positionX),await a(m,f.positionY,g.positionY),await a(m,f.positionZ,g.positionZ)),po(g)?await c(f,m,g.inputs[0]):await c(f,m,g),g};return{render(f,m){const _=u.get(m);return _!==void 0?Promise.resolve(_):d(f,m)}}},p1={disableNormalization:!1},m1=(s,e,t,n)=>class Bg{constructor(r,o){const a=e(r),c=n({...p1,...o}),l=s(a,c);return t.add(l),l}static[Symbol.hasInstance](r){return r!==null&&typeof r=="object"&&Object.getPrototypeOf(r)===Bg.prototype||t.has(r)}},g1=(s,e)=>(t,n,i)=>(s(n).replay(i),e(n,t,i)),_1=(s,e,t)=>async(n,i,r)=>{const o=s(n);await Promise.all(o.activeInputs.map((a,c)=>Array.from(a).map(async([l,u])=>{const d=await e(l).render(l,i),f=n.context.destination;!t(l)&&(n!==f||!t(n))&&d.connect(r,u,c)})).reduce((a,c)=>[...a,...c],[]))},v1=(s,e,t)=>async(n,i,r)=>{const o=e(n);await Promise.all(Array.from(o.activeInputs).map(async([a,c])=>{const u=await s(a).render(a,i);t(a)||u.connect(r,c)}))},y1=(s,e,t,n)=>i=>s(qo,()=>qo(i))?Promise.resolve(s(n,n)).then(r=>{if(!r){const o=t(i,512,0,1);i.oncomplete=()=>{o.onaudioprocess=null,o.disconnect()},o.onaudioprocess=()=>i.currentTime,o.connect(i.destination)}return i.startRendering()}):new Promise(r=>{const o=e(i,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});i.oncomplete=a=>{o.disconnect(),r(a.renderedBuffer)},o.connect(i.destination),i.startRendering()}),x1=s=>(e,t)=>{s.set(e,t)},S1=s=>(e,t)=>s.set(e,t),M1=(s,e,t,n,i,r,o,a)=>(c,l)=>t(c).render(c,l).then(()=>Promise.all(Array.from(n(l)).map(u=>t(u).render(u,l)))).then(()=>i(l)).then(u=>(typeof u.copyFromChannel!="function"?(o(u),kh(u)):e(r,()=>r(u))||a(u),s.add(u),u)),b1={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",pan:0},T1=(s,e,t,n,i,r)=>class extends s{constructor(a,c){const l=i(a),u={...b1,...c},h=t(l,u),d=r(l),f=d?n():null;super(a,!1,h,f),this._pan=e(this,d,h.pan)}get pan(){return this._pan}},E1=(s,e,t,n,i)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=t(a);const u=Qt(l,c);if(!u){const h={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,pan:l.pan.value};l=e(c,h)}return r.set(c,l),u?await s(c,a.pan,l.pan):await n(c,a.pan,l.pan),po(l)?await i(a,c,l.inputs[0]):await i(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},w1=s=>()=>{if(s===null)return!1;try{new s({length:1,sampleRate:44100})}catch{return!1}return!0},A1=(s,e)=>async()=>{if(s===null)return!0;if(e===null)return!1;const t=new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'],{type:"application/javascript; charset=utf-8"}),n=new e(1,128,44100),i=URL.createObjectURL(t);let r=!1,o=!1;try{await n.audioWorklet.addModule(i);const a=new s(n,"a",{numberOfOutputs:0}),c=n.createOscillator();a.port.onmessage=()=>r=!0,a.onprocessorerror=()=>o=!0,c.connect(a),c.start(0),await n.startRendering(),await new Promise(l=>setTimeout(l))}catch{}finally{URL.revokeObjectURL(i)}return r&&!o},C1=(s,e)=>()=>{if(e===null)return Promise.resolve(!1);const t=new e(1,1,44100),n=s(t,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return new Promise(i=>{t.oncomplete=()=>{n.disconnect(),i(t.currentTime!==0)},t.startRendering()})},R1=()=>new DOMException("","UnknownError"),I1={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",curve:null,oversample:"none"},D1=(s,e,t,n,i,r,o)=>class extends s{constructor(c,l){const u=i(c),h={...I1,...l},d=t(u,h),m=r(u)?n():null;super(c,!0,d,m),this._isCurveNullified=!1,this._nativeWaveShaperNode=d,o(this,1)}get curve(){return this._isCurveNullified?null:this._nativeWaveShaperNode.curve}set curve(c){if(c===null)this._isCurveNullified=!0,this._nativeWaveShaperNode.curve=new Float32Array([0,0]);else{if(c.length<2)throw e();this._isCurveNullified=!1,this._nativeWaveShaperNode.curve=c}}get oversample(){return this._nativeWaveShaperNode.oversample}set oversample(c){this._nativeWaveShaperNode.oversample=c}},P1=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,o)=>{let a=e(r);if(!Qt(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,curve:a.curve,oversample:a.oversample};a=s(o,l)}return n.set(o,a),po(a)?await t(r,o,a.inputs[0]):await t(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},N1=()=>typeof window>"u"?null:window,L1=(s,e)=>t=>{t.copyFromChannel=(n,i,r=0)=>{const o=s(r),a=s(i);if(a>=t.numberOfChannels)throw e();const c=t.length,l=t.getChannelData(a),u=n.length;for(let h=o<0?-o:0;h+o<c&&h<u;h+=1)n[h]=l[h+o]},t.copyToChannel=(n,i,r=0)=>{const o=s(r),a=s(i);if(a>=t.numberOfChannels)throw e();const c=t.length,l=t.getChannelData(a),u=n.length;for(let h=o<0?-o:0;h+o<c&&h<u;h+=1)l[h+o]=n[h]}},O1=s=>e=>{e.copyFromChannel=(t=>(n,i,r=0)=>{const o=s(r),a=s(i);if(o<e.length)return t.call(e,n,a,o)})(e.copyFromChannel),e.copyToChannel=(t=>(n,i,r=0)=>{const o=s(r),a=s(i);if(o<e.length)return t.call(e,n,a,o)})(e.copyToChannel)},U1=s=>(e,t)=>{const n=t.createBuffer(1,1,44100);e.buffer===null&&(e.buffer=n),s(e,"buffer",i=>()=>{const r=i.call(e);return r===n?null:r},i=>r=>i.call(e,r===null?n:r))},F1=(s,e)=>(t,n)=>{n.channelCount=1,n.channelCountMode="explicit",Object.defineProperty(n,"channelCount",{get:()=>1,set:()=>{throw s()}}),Object.defineProperty(n,"channelCountMode",{get:()=>"explicit",set:()=>{throw s()}});const i=t.createBufferSource();e(n,()=>{const a=n.numberOfInputs;for(let c=0;c<a;c+=1)i.connect(n,0,c)},()=>i.disconnect(n))},Vg=(s,e,t)=>s.copyFromChannel===void 0?s.getChannelData(t)[0]:(s.copyFromChannel(e,t),e[0]),zg=s=>{if(s===null)return!1;const e=s.length;return e%2!==0?s[Math.floor(e/2)]!==0:s[e/2-1]+s[e/2]!==0},ya=(s,e,t,n)=>{let i=s;for(;!i.hasOwnProperty(e);)i=Object.getPrototypeOf(i);const{get:r,set:o}=Object.getOwnPropertyDescriptor(i,e);Object.defineProperty(s,e,{get:t(r),set:n(o)})},k1=s=>({...s,outputChannelCount:s.outputChannelCount!==void 0?s.outputChannelCount:s.numberOfInputs===1&&s.numberOfOutputs===1?[s.channelCount]:Array.from({length:s.numberOfOutputs},()=>1)}),B1=s=>({...s,channelCount:s.numberOfOutputs}),V1=s=>{const{imag:e,real:t}=s;return e===void 0?t===void 0?{...s,imag:[0,0],real:[0,0]}:{...s,imag:Array.from(t,()=>0),real:t}:t===void 0?{...s,imag:e,real:Array.from(e,()=>0)}:{...s,imag:e,real:t}},Gg=(s,e,t)=>{try{s.setValueAtTime(e,t)}catch(n){if(n.code!==9)throw n;Gg(s,e,t+1e-7)}},z1=s=>{const e=s.createBufferSource();e.start();try{e.start()}catch{return!0}return!1},G1=s=>{const e=s.createBufferSource(),t=s.createBuffer(1,1,44100);e.buffer=t;try{e.start(0,1)}catch{return!1}return!0},H1=s=>{const e=s.createBufferSource();e.start();try{e.stop()}catch{return!1}return!0},Hh=s=>{const e=s.createOscillator();try{e.start(-1)}catch(t){return t instanceof RangeError}return!1},Hg=s=>{const e=s.createBuffer(1,1,44100),t=s.createBufferSource();t.buffer=e,t.start(),t.stop();try{return t.stop(),!0}catch{return!1}},Wh=s=>{const e=s.createOscillator();try{e.stop(-1)}catch(t){return t instanceof RangeError}return!1},W1=s=>{const{port1:e,port2:t}=new MessageChannel;try{e.postMessage(s)}finally{e.close(),t.close()}},X1=s=>{s.start=(e=>(t=0,n=0,i)=>{const r=s.buffer,o=r===null?n:Math.min(r.duration,n);r!==null&&o>r.duration-.5/s.context.sampleRate?e.call(s,t,0,0):e.call(s,t,o,i)})(s.start)},Wg=(s,e)=>{const t=e.createGain();s.connect(t);const n=(i=>()=>{i.call(s,t),s.removeEventListener("ended",n)})(s.disconnect);s.addEventListener("ended",n),mo(s,t),s.stop=(i=>{let r=!1;return(o=0)=>{if(r)try{i.call(s,o)}catch{t.gain.setValueAtTime(0,o)}else i.call(s,o),r=!0}})(s.stop)},go=(s,e)=>t=>{const n={value:s};return Object.defineProperties(t,{currentTarget:n,target:n}),typeof e=="function"?e.call(s,t):e.handleEvent.call(s,t)},q1=dE(sr),j1=vE(sr),Y1=Iw(fl),Xg=new WeakMap,$1=Yw(Xg),Qn=ow(new Map,new WeakMap),ui=N1(),qg=TA(Qn,gi),Xh=jw(cn),Gt=_1(cn,Xh,Qs),K1=bE(qg,pt,Gt),ht=Zw(dl),ji=ZA(ui),at=pA(ji),jg=new WeakMap,Yg=Vw(go),xa=CA(ui),qh=uA(xa),jh=hA(ui),$g=dA(ui),jo=IA(ui),Tt=YE(fE(Mg),_E(q1,j1,Pc,Y1,Nc,cn,$1,fa,pt,sr,Vi,Qs,gc),Qn,rA(Zu,Nc,cn,pt,Xo,Vi),gi,pl,un,ww(Pc,Zu,cn,pt,Xo,ht,Vi,at),Nw(jg,cn,$n),Yg,ht,qh,jh,$g,at,jo),Z1=ME(Tt,K1,gi,qg,ht,at),Yh=new WeakSet,Bp=EA(ui),Kg=yw(new Uint32Array(1)),$h=L1(Kg,gi),Kh=O1(Kg),Q1=EE(Yh,Qn,un,Bp,ji,w1(Bp),$h,Kh),ml=yE(_n),Zg=v1(Xh,ma,Qs),_i=fw(Zg),_o=AA(ml,Qn,z1,G1,H1,Hh,Hg,Wh,X1,U1(ya),Wg),vi=g1($w(ma),Zg),J1=CE(_i,_o,pt,vi,Gt),Jn=$E(pE(bg),jg,Fh,KE,oE,aE,cE,lE,uE,Yu,xg,xa,Gg),eC=AE(Tt,J1,Jn,kt,_o,ht,at,go),tC=FE(Tt,kE,gi,kt,RA(_n,ya),ht,at,Gt),nC=rw(_i,Fg,pt,vi,Gt),rr=S1(Xg),iC=sw(Tt,Jn,nC,pl,Fg,ht,at,rr),gs=MA(sr,jh),sC=F1(kt,gs),_s=FA(xa,sC),rC=lw(_s,pt,Gt),oC=cw(Tt,rC,_s,ht,at),aC=dw(_a,pt,Gt),cC=hw(Tt,aC,_a,ht,at,B1),lC=VA(ml,_o,_n,gs),vo=BA(ml,Qn,lC,Hh,Wh),uC=vw(_i,vo,pt,vi,Gt),hC=_w(Tt,Jn,uC,vo,ht,at,go),Qg=zA(un,ya),dC=Mw(Qg,pt,Gt),fC=Sw(Tt,dC,Qg,ht,at,rr),pC=Rw(_i,kg,pt,vi,Gt),mC=Cw(Tt,Jn,pC,kg,ht,at,rr),Jg=GA(un),gC=Fw(_i,Jg,pt,vi,Gt),_C=Uw(Tt,Jn,gC,Jg,un,ht,at,rr),vC=Xw(_i,_n,pt,vi,Gt),yC=Ww(Tt,Jn,vC,_n,ht,at),xC=qA(pl,kt,va,un),gl=y1(Qn,_n,va,C1(_n,ji)),SC=sA(_o,pt,ji,Gt,gl),MC=HA(xC),bC=nA(Tt,MC,SC,ht,at,rr),TC=BE(Jn,_s,vo,va,un,Vg,at,ya),e_=new WeakMap,EC=SA(tC,TC,Yg,at,e_,go),t_=QA(ml,Qn,Hh,Hg,Wh,Wg),wC=u1(_i,t_,pt,vi,Gt),AC=l1(Tt,Jn,t_,wC,ht,at,go),n_=mw(_o),CC=r1(n_,kt,_n,zg,gs),_l=s1(n_,kt,CC,zg,gs,xa,ya),RC=e1(Pc,kt,_s,_n,va,_l,un,Nc,Vg,gs),i_=JA(RC),IC=f1(_i,_s,vo,_n,i_,pt,ji,vi,Gt,gl),DC=d1(Tt,Jn,i_,IC,ht,at,rr),PC=t1(gi),NC=m1(PC,ht,new WeakSet,V1),LC=i1(_s,_a,_n,_l,un,gs),s_=n1(LC,un),OC=E1(_i,s_,pt,vi,Gt),UC=T1(Tt,Jn,s_,OC,ht,at),FC=P1(_l,pt,Gt),kC=D1(Tt,kt,_l,FC,ht,at,rr),r_=mA(ui),Zh=zw(ui),o_=new WeakMap,BC=Qw(o_,ji),VC=r_?gE(Qn,un,Bw(ui),Zh,Gw(hE),ht,BC,at,jo,new WeakMap,new WeakMap,A1(jo,ji),ui):void 0,zC=fA(qh,at),GC=Ew(Yh,Qn,Tw,kw,new WeakSet,ht,zC,Ic,qo,$h,Kh),a_=nw(VC,Z1,Q1,eC,iC,oC,cC,hC,fC,GC,mC,_C,yC,bC,EC,AC,DC,NC,UC,kC),HC=gA(Tt,jA,ht,at),WC=vA(Tt,YA,ht,at),XC=yA(Tt,$A,ht,at),qC=KA(kt,at),jC=xA(Tt,qC,ht),YC=UE(a_,kt,un,R1,HC,WC,XC,jC,xa),Qh=Jw(e_),$C=xE(Qh),c_=pw(gi),KC=Dw(Qh),l_=Lw(gi),u_=new WeakMap,ZC=qw(u_,$n),QC=UA(c_,gi,kt,_s,_a,vo,_n,va,un,l_,Zh,ZC,gs),JC=PA(kt,QC,_n,un,gs),eR=tw(_i,c_,_o,_s,_a,vo,_n,KC,l_,Zh,pt,jo,ji,vi,Gt,gl),tR=Kw(o_),nR=x1(u_),Vp=r_?QE($C,Tt,Jn,eR,JC,cn,tR,ht,at,jo,k1,nR,W1,go):void 0,iR=bw(un,ji),sR=M1(Yh,Qn,Xh,Qh,gl,Ic,$h,Kh),rR=a1(a_,Qn,kt,iR,sR),oR=oA(dl,qh),aR=aA(Uh,jh),cR=cA(Fh,$g),lR=lA(dl,at);function Re(s,e){if(!s)throw new Error(e)}function hs(s,e,t=1/0){if(!(e<=s&&s<=t))throw new RangeError(`Value must be within [${e}, ${t}], got: ${s}`)}function h_(s){!s.isOffline&&s.state!=="running"&&Jh('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.')}let d_=console;function uR(...s){d_.log(...s)}function Jh(...s){d_.warn(...s)}function kn(s){return typeof s>"u"}function je(s){return!kn(s)}function hR(s){return typeof s=="function"}function Hi(s){return typeof s=="number"}function Xs(s){return Object.prototype.toString.call(s)==="[object Object]"&&s.constructor===Object}function dR(s){return typeof s=="boolean"}function wn(s){return Array.isArray(s)}function hi(s){return typeof s=="string"}function nc(s){return hi(s)&&/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(s)}function fR(s){return new YC(s)}function pR(s,e,t){return new rR(s,e,t)}const qs=typeof self=="object"?self:null,mR=qs&&(qs.hasOwnProperty("AudioContext")||qs.hasOwnProperty("webkitAudioContext"));function gR(s,e,t){return Re(je(Vp),"This node only works in a secure context (https or localhost)"),new Vp(s,e,t)}function ei(s,e,t,n){var i=arguments.length,r=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,n);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(i<3?o(r):i>3?o(e,t,r):o(e,t))||r);return i>3&&r&&Object.defineProperty(e,t,r),r}function Ct(s,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((n=n.apply(s,e||[])).next())})}class _R{constructor(e,t,n){this._callback=e,this._type=t,this._updateInterval=n,this._createClock()}_createWorker(){const e=new Blob([`
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
			`],{type:"text/javascript"}),t=URL.createObjectURL(e),n=new Worker(t);n.onmessage=this._callback.bind(this),this._worker=n}_createTimeout(){this._timeout=setTimeout(()=>{this._createTimeout(),this._callback()},this._updateInterval*1e3)}_createClock(){if(this._type==="worker")try{this._createWorker()}catch{this._type="timeout",this._createClock()}else this._type==="timeout"&&this._createTimeout()}_disposeClock(){this._timeout&&(clearTimeout(this._timeout),this._timeout=0),this._worker&&(this._worker.terminate(),this._worker.onmessage=null)}get updateInterval(){return this._updateInterval}set updateInterval(e){this._updateInterval=Math.max(e,128/44100),this._type==="worker"&&this._worker.postMessage(Math.max(e*1e3,1))}get type(){return this._type}set type(e){this._disposeClock(),this._type=e,this._createClock()}dispose(){this._disposeClock()}}function Js(s){return cR(s)}function cs(s){return aR(s)}function _c(s){return lR(s)}function Rr(s){return oR(s)}function f_(s){return s instanceof AudioBuffer}function vR(s,e){return s==="value"||Js(e)||cs(e)||f_(e)}function js(s,...e){if(!e.length)return s;const t=e.shift();if(Xs(s)&&Xs(t))for(const n in t)vR(n,t[n])?s[n]=t[n]:Xs(t[n])?(s[n]||Object.assign(s,{[n]:{}}),js(s[n],t[n])):Object.assign(s,{[n]:t[n]});return js(s,...e)}function yR(s,e){return s.length===e.length&&s.every((t,n)=>e[n]===t)}function Z(s,e,t=[],n){const i={},r=Array.from(e);if(Xs(r[0])&&n&&!Reflect.has(r[0],n)&&(Object.keys(r[0]).some(a=>Reflect.has(s,a))||(js(i,{[n]:r[0]}),t.splice(t.indexOf(n),1),r.shift())),r.length===1&&Xs(r[0]))js(i,r[0]);else for(let o=0;o<t.length;o++)je(r[o])&&(i[t[o]]=r[o]);return js(s,i)}function xR(s){return s.constructor.getDefaults()}function Vr(s,e){return kn(s)?e:s}function Yo(s,e){return e.forEach(t=>{Reflect.has(s,t)&&delete s[t]}),s}/**
 * Tone.js
 * @author Yotam Mann
 * @license http://opensource.org/licenses/MIT MIT License
 * @copyright 2014-2019 Yotam Mann
 */class Yi{constructor(){this.debug=!1,this._wasDisposed=!1}static getDefaults(){return{}}log(...e){(this.debug||qs&&this.toString()===qs.TONE_DEBUG_CLASS)&&uR(this,...e)}dispose(){return this._wasDisposed=!0,this}get disposed(){return this._wasDisposed}toString(){return this.name}}Yi.version=yg;const ed=1e-6;function Fc(s,e){return s>e+ed}function nh(s,e){return Fc(s,e)||Gn(s,e)}function p_(s,e){return s+ed<e}function Gn(s,e){return Math.abs(s-e)<ed}function SR(s,e,t){return Math.max(Math.min(s,t),e)}class yi extends Yi{constructor(){super(),this.name="Timeline",this._timeline=[];const e=Z(yi.getDefaults(),arguments,["memory"]);this.memory=e.memory,this.increasing=e.increasing}static getDefaults(){return{memory:1/0,increasing:!1}}get length(){return this._timeline.length}add(e){if(Re(Reflect.has(e,"time"),"Timeline: events must have a time attribute"),e.time=e.time.valueOf(),this.increasing&&this.length){const t=this._timeline[this.length-1];Re(nh(e.time,t.time),"The time must be greater than or equal to the last scheduled time"),this._timeline.push(e)}else{const t=this._search(e.time);this._timeline.splice(t+1,0,e)}if(this.length>this.memory){const t=this.length-this.memory;this._timeline.splice(0,t)}return this}remove(e){const t=this._timeline.indexOf(e);return t!==-1&&this._timeline.splice(t,1),this}get(e,t="time"){const n=this._search(e,t);return n!==-1?this._timeline[n]:null}peek(){return this._timeline[0]}shift(){return this._timeline.shift()}getAfter(e,t="time"){const n=this._search(e,t);return n+1<this._timeline.length?this._timeline[n+1]:null}getBefore(e){const t=this._timeline.length;if(t>0&&this._timeline[t-1].time<e)return this._timeline[t-1];const n=this._search(e);return n-1>=0?this._timeline[n-1]:null}cancel(e){if(this._timeline.length>1){let t=this._search(e);if(t>=0)if(Gn(this._timeline[t].time,e)){for(let n=t;n>=0&&Gn(this._timeline[n].time,e);n--)t=n;this._timeline=this._timeline.slice(0,t)}else this._timeline=this._timeline.slice(0,t+1);else this._timeline=[]}else this._timeline.length===1&&nh(this._timeline[0].time,e)&&(this._timeline=[]);return this}cancelBefore(e){const t=this._search(e);return t>=0&&(this._timeline=this._timeline.slice(t+1)),this}previousEvent(e){const t=this._timeline.indexOf(e);return t>0?this._timeline[t-1]:null}_search(e,t="time"){if(this._timeline.length===0)return-1;let n=0;const i=this._timeline.length;let r=i;if(i>0&&this._timeline[i-1][t]<=e)return i-1;for(;n<r;){let o=Math.floor(n+(r-n)/2);const a=this._timeline[o],c=this._timeline[o+1];if(Gn(a[t],e)){for(let l=o;l<this._timeline.length;l++){const u=this._timeline[l];if(Gn(u[t],e))o=l;else break}return o}else{if(p_(a[t],e)&&Fc(c[t],e))return o;Fc(a[t],e)?r=o:n=o+1}}return-1}_iterate(e,t=0,n=this._timeline.length-1){this._timeline.slice(t,n+1).forEach(e)}forEach(e){return this._iterate(e),this}forEachBefore(e,t){const n=this._search(e);return n!==-1&&this._iterate(t,0,n),this}forEachAfter(e,t){const n=this._search(e);return this._iterate(t,n+1),this}forEachBetween(e,t,n){let i=this._search(e),r=this._search(t);return i!==-1&&r!==-1?(this._timeline[i].time!==e&&(i+=1),this._timeline[r].time===t&&(r-=1),this._iterate(n,i,r)):i===-1&&this._iterate(n,0,r),this}forEachFrom(e,t){let n=this._search(e);for(;n>=0&&this._timeline[n].time>=e;)n--;return this._iterate(t,n+1),this}forEachAtTime(e,t){const n=this._search(e);if(n!==-1&&Gn(this._timeline[n].time,e)){let i=n;for(let r=n;r>=0&&Gn(this._timeline[r].time,e);r--)i=r;this._iterate(r=>{t(r)},i,n)}return this}dispose(){return super.dispose(),this._timeline=[],this}}const m_=[];function vl(s){m_.push(s)}function MR(s){m_.forEach(e=>e(s))}const g_=[];function yl(s){g_.push(s)}function bR(s){g_.forEach(e=>e(s))}class Sa extends Yi{constructor(){super(...arguments),this.name="Emitter"}on(e,t){return e.split(/\W+/).forEach(i=>{kn(this._events)&&(this._events={}),this._events.hasOwnProperty(i)||(this._events[i]=[]),this._events[i].push(t)}),this}once(e,t){const n=(...i)=>{t(...i),this.off(e,n)};return this.on(e,n),this}off(e,t){return e.split(/\W+/).forEach(i=>{if(kn(this._events)&&(this._events={}),this._events.hasOwnProperty(e))if(kn(t))this._events[e]=[];else{const r=this._events[e];for(let o=r.length-1;o>=0;o--)r[o]===t&&r.splice(o,1)}}),this}emit(e,...t){if(this._events&&this._events.hasOwnProperty(e)){const n=this._events[e].slice(0);for(let i=0,r=n.length;i<r;i++)n[i].apply(this,t)}return this}static mixin(e){["on","once","off","emit"].forEach(t=>{const n=Object.getOwnPropertyDescriptor(Sa.prototype,t);Object.defineProperty(e.prototype,t,n)})}dispose(){return super.dispose(),this._events=void 0,this}}class __ extends Sa{constructor(){super(...arguments),this.isOffline=!1}toJSON(){return{}}}class Ma extends __{constructor(){super(),this.name="Context",this._constants=new Map,this._timeouts=new yi,this._timeoutIds=0,this._initialized=!1,this.isOffline=!1,this._workletModules=new Map;const e=Z(Ma.getDefaults(),arguments,["context"]);e.context?this._context=e.context:this._context=fR({latencyHint:e.latencyHint}),this._ticker=new _R(this.emit.bind(this,"tick"),e.clockSource,e.updateInterval),this.on("tick",this._timeoutLoop.bind(this)),this._context.onstatechange=()=>{this.emit("statechange",this.state)},this._setLatencyHint(e.latencyHint),this.lookAhead=e.lookAhead}static getDefaults(){return{clockSource:"worker",latencyHint:"interactive",lookAhead:.1,updateInterval:.05}}initialize(){return this._initialized||(MR(this),this._initialized=!0),this}createAnalyser(){return this._context.createAnalyser()}createOscillator(){return this._context.createOscillator()}createBufferSource(){return this._context.createBufferSource()}createBiquadFilter(){return this._context.createBiquadFilter()}createBuffer(e,t,n){return this._context.createBuffer(e,t,n)}createChannelMerger(e){return this._context.createChannelMerger(e)}createChannelSplitter(e){return this._context.createChannelSplitter(e)}createConstantSource(){return this._context.createConstantSource()}createConvolver(){return this._context.createConvolver()}createDelay(e){return this._context.createDelay(e)}createDynamicsCompressor(){return this._context.createDynamicsCompressor()}createGain(){return this._context.createGain()}createIIRFilter(e,t){return this._context.createIIRFilter(e,t)}createPanner(){return this._context.createPanner()}createPeriodicWave(e,t,n){return this._context.createPeriodicWave(e,t,n)}createStereoPanner(){return this._context.createStereoPanner()}createWaveShaper(){return this._context.createWaveShaper()}createMediaStreamSource(e){return Re(Rr(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamSource(e)}createMediaElementSource(e){return Re(Rr(this._context),"Not available if OfflineAudioContext"),this._context.createMediaElementSource(e)}createMediaStreamDestination(){return Re(Rr(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamDestination()}decodeAudioData(e){return this._context.decodeAudioData(e)}get currentTime(){return this._context.currentTime}get state(){return this._context.state}get sampleRate(){return this._context.sampleRate}get listener(){return this.initialize(),this._listener}set listener(e){Re(!this._initialized,"The listener cannot be set after initialization."),this._listener=e}get transport(){return this.initialize(),this._transport}set transport(e){Re(!this._initialized,"The transport cannot be set after initialization."),this._transport=e}get draw(){return this.initialize(),this._draw}set draw(e){Re(!this._initialized,"Draw cannot be set after initialization."),this._draw=e}get destination(){return this.initialize(),this._destination}set destination(e){Re(!this._initialized,"The destination cannot be set after initialization."),this._destination=e}createAudioWorkletNode(e,t){return gR(this.rawContext,e,t)}addAudioWorkletModule(e,t){return Ct(this,void 0,void 0,function*(){Re(je(this.rawContext.audioWorklet),"AudioWorkletNode is only available in a secure context (https or localhost)"),this._workletModules.has(t)||this._workletModules.set(t,this.rawContext.audioWorklet.addModule(e)),yield this._workletModules.get(t)})}workletsAreReady(){return Ct(this,void 0,void 0,function*(){const e=[];this._workletModules.forEach(t=>e.push(t)),yield Promise.all(e)})}get updateInterval(){return this._ticker.updateInterval}set updateInterval(e){this._ticker.updateInterval=e}get clockSource(){return this._ticker.type}set clockSource(e){this._ticker.type=e}get latencyHint(){return this._latencyHint}_setLatencyHint(e){let t=0;if(this._latencyHint=e,hi(e))switch(e){case"interactive":t=.1;break;case"playback":t=.5;break;case"balanced":t=.25;break}this.lookAhead=t,this.updateInterval=t/2}get rawContext(){return this._context}now(){return this._context.currentTime+this.lookAhead}immediate(){return this._context.currentTime}resume(){return Rr(this._context)?this._context.resume():Promise.resolve()}close(){return Ct(this,void 0,void 0,function*(){Rr(this._context)&&(yield this._context.close()),this._initialized&&bR(this)})}getConstant(e){if(this._constants.has(e))return this._constants.get(e);{const t=this._context.createBuffer(1,128,this._context.sampleRate),n=t.getChannelData(0);for(let r=0;r<n.length;r++)n[r]=e;const i=this._context.createBufferSource();return i.channelCount=1,i.channelCountMode="explicit",i.buffer=t,i.loop=!0,i.start(0),this._constants.set(e,i),i}}dispose(){return super.dispose(),this._ticker.dispose(),this._timeouts.dispose(),Object.keys(this._constants).map(e=>this._constants[e].disconnect()),this}_timeoutLoop(){const e=this.now();let t=this._timeouts.peek();for(;this._timeouts.length&&t&&t.time<=e;)t.callback(),this._timeouts.shift(),t=this._timeouts.peek()}setTimeout(e,t){this._timeoutIds++;const n=this.now();return this._timeouts.add({callback:e,id:this._timeoutIds,time:n+t}),this._timeoutIds}clearTimeout(e){return this._timeouts.forEach(t=>{t.id===e&&this._timeouts.remove(t)}),this}clearInterval(e){return this.clearTimeout(e)}setInterval(e,t){const n=++this._timeoutIds,i=()=>{const r=this.now();this._timeouts.add({callback:()=>{e(),i()},id:n,time:r+t})};return i(),n}}class TR extends __{constructor(){super(...arguments),this.lookAhead=0,this.latencyHint=0,this.isOffline=!1}createAnalyser(){return{}}createOscillator(){return{}}createBufferSource(){return{}}createBiquadFilter(){return{}}createBuffer(e,t,n){return{}}createChannelMerger(e){return{}}createChannelSplitter(e){return{}}createConstantSource(){return{}}createConvolver(){return{}}createDelay(e){return{}}createDynamicsCompressor(){return{}}createGain(){return{}}createIIRFilter(e,t){return{}}createPanner(){return{}}createPeriodicWave(e,t,n){return{}}createStereoPanner(){return{}}createWaveShaper(){return{}}createMediaStreamSource(e){return{}}createMediaElementSource(e){return{}}createMediaStreamDestination(){return{}}decodeAudioData(e){return Promise.resolve({})}createAudioWorkletNode(e,t){return{}}get rawContext(){return{}}addAudioWorkletModule(e,t){return Ct(this,void 0,void 0,function*(){return Promise.resolve()})}resume(){return Promise.resolve()}setTimeout(e,t){return 0}clearTimeout(e){return this}setInterval(e,t){return 0}clearInterval(e){return this}getConstant(e){return{}}get currentTime(){return 0}get state(){return{}}get sampleRate(){return 0}get listener(){return{}}get transport(){return{}}get draw(){return{}}set draw(e){}get destination(){return{}}set destination(e){}now(){return 0}immediate(){return 0}}function Qe(s,e){wn(e)?e.forEach(t=>Qe(s,t)):Object.defineProperty(s,e,{enumerable:!0,writable:!1})}function td(s,e){wn(e)?e.forEach(t=>td(s,t)):Object.defineProperty(s,e,{writable:!0})}const rt=()=>{};class nt extends Yi{constructor(){super(),this.name="ToneAudioBuffer",this.onload=rt;const e=Z(nt.getDefaults(),arguments,["url","onload","onerror"]);this.reverse=e.reverse,this.onload=e.onload,e.url&&f_(e.url)||e.url instanceof nt?this.set(e.url):hi(e.url)&&this.load(e.url).catch(e.onerror)}static getDefaults(){return{onerror:rt,onload:rt,reverse:!1}}get sampleRate(){return this._buffer?this._buffer.sampleRate:Wn().sampleRate}set(e){return e instanceof nt?e.loaded?this._buffer=e.get():e.onload=()=>{this.set(e),this.onload(this)}:this._buffer=e,this._reversed&&this._reverse(),this}get(){return this._buffer}load(e){return Ct(this,void 0,void 0,function*(){const t=nt.load(e).then(n=>{this.set(n),this.onload(this)});nt.downloads.push(t);try{yield t}finally{const n=nt.downloads.indexOf(t);nt.downloads.splice(n,1)}return this})}dispose(){return super.dispose(),this._buffer=void 0,this}fromArray(e){const t=wn(e)&&e[0].length>0,n=t?e.length:1,i=t?e[0].length:e.length,r=Wn(),o=r.createBuffer(n,i,r.sampleRate),a=!t&&n===1?[e]:e;for(let c=0;c<n;c++)o.copyToChannel(a[c],c);return this._buffer=o,this}toMono(e){if(Hi(e))this.fromArray(this.toArray(e));else{let t=new Float32Array(this.length);const n=this.numberOfChannels;for(let i=0;i<n;i++){const r=this.toArray(i);for(let o=0;o<r.length;o++)t[o]+=r[o]}t=t.map(i=>i/n),this.fromArray(t)}return this}toArray(e){if(Hi(e))return this.getChannelData(e);if(this.numberOfChannels===1)return this.toArray(0);{const t=[];for(let n=0;n<this.numberOfChannels;n++)t[n]=this.getChannelData(n);return t}}getChannelData(e){return this._buffer?this._buffer.getChannelData(e):new Float32Array(0)}slice(e,t=this.duration){const n=Math.floor(e*this.sampleRate),i=Math.floor(t*this.sampleRate);Re(n<i,"The start time must be less than the end time");const r=i-n,o=Wn().createBuffer(this.numberOfChannels,r,this.sampleRate);for(let a=0;a<this.numberOfChannels;a++)o.copyToChannel(this.getChannelData(a).subarray(n,i),a);return new nt(o)}_reverse(){if(this.loaded)for(let e=0;e<this.numberOfChannels;e++)this.getChannelData(e).reverse();return this}get loaded(){return this.length>0}get duration(){return this._buffer?this._buffer.duration:0}get length(){return this._buffer?this._buffer.length:0}get numberOfChannels(){return this._buffer?this._buffer.numberOfChannels:0}get reverse(){return this._reversed}set reverse(e){this._reversed!==e&&(this._reversed=e,this._reverse())}static fromArray(e){return new nt().fromArray(e)}static fromUrl(e){return Ct(this,void 0,void 0,function*(){return yield new nt().load(e)})}static load(e){return Ct(this,void 0,void 0,function*(){const t=e.match(/\[([^\]\[]+\|.+)\]$/);if(t){const a=t[1].split("|");let c=a[0];for(const l of a)if(nt.supportsType(l)){c=l;break}e=e.replace(t[0],c)}const n=nt.baseUrl===""||nt.baseUrl.endsWith("/")?nt.baseUrl:nt.baseUrl+"/",i=yield fetch(n+e);if(!i.ok)throw new Error(`could not load url: ${e}`);const r=yield i.arrayBuffer();return yield Wn().decodeAudioData(r)})}static supportsType(e){const t=e.split("."),n=t[t.length-1];return document.createElement("audio").canPlayType("audio/"+n)!==""}static loaded(){return Ct(this,void 0,void 0,function*(){for(yield Promise.resolve();nt.downloads.length;)yield nt.downloads[0]})}}nt.baseUrl="";nt.downloads=[];class nd extends Ma{constructor(){super({clockSource:"offline",context:_c(arguments[0])?arguments[0]:pR(arguments[0],arguments[1]*arguments[2],arguments[2]),lookAhead:0,updateInterval:_c(arguments[0])?128/arguments[0].sampleRate:128/arguments[2]}),this.name="OfflineContext",this._currentTime=0,this.isOffline=!0,this._duration=_c(arguments[0])?arguments[0].length/arguments[0].sampleRate:arguments[1]}now(){return this._currentTime}get currentTime(){return this._currentTime}_renderClock(e){return Ct(this,void 0,void 0,function*(){let t=0;for(;this._duration-this._currentTime>=0;){this.emit("tick"),this._currentTime+=128/this.sampleRate,t++;const n=Math.floor(this.sampleRate/128);e&&t%n===0&&(yield new Promise(i=>setTimeout(i,1)))}})}render(e=!0){return Ct(this,void 0,void 0,function*(){yield this.workletsAreReady(),yield this._renderClock(e);const t=yield this._context.startRendering();return new nt(t)})}close(){return Promise.resolve()}}const v_=new TR;let zr=v_;function Wn(){return zr===v_&&mR&&ER(new Ma),zr}function ER(s){Rr(s)?zr=new Ma(s):_c(s)?zr=new nd(s):zr=s}function wR(){return zr.resume()}if(qs&&!qs.TONE_SILENCE_LOGGING){const e=` * Tone.js v${yg} * `;console.log(`%c${e}`,"background: #000; color: #fff")}function AR(s){return Math.pow(10,s/20)}function CR(s){return 20*(Math.log(s)/Math.LN10)}function y_(s){return Math.pow(2,s/12)}let xl=440;function RR(){return xl}function IR(s){xl=s}function Bs(s){return Math.round(x_(s))}function x_(s){return 69+12*Math.log2(s/xl)}function S_(s){return xl*Math.pow(2,(s-69)/12)}class id extends Yi{constructor(e,t,n){super(),this.defaultUnits="s",this._val=t,this._units=n,this.context=e,this._expressions=this._getExpressions()}_getExpressions(){return{hz:{method:e=>this._frequencyToUnits(parseFloat(e)),regexp:/^(\d+(?:\.\d+)?)hz$/i},i:{method:e=>this._ticksToUnits(parseInt(e,10)),regexp:/^(\d+)i$/i},m:{method:e=>this._beatsToUnits(parseInt(e,10)*this._getTimeSignature()),regexp:/^(\d+)m$/i},n:{method:(e,t)=>{const n=parseInt(e,10),i=t==="."?1.5:1;return n===1?this._beatsToUnits(this._getTimeSignature())*i:this._beatsToUnits(4/n)*i},regexp:/^(\d+)n(\.?)$/i},number:{method:e=>this._expressions[this.defaultUnits].method.call(this,e),regexp:/^(\d+(?:\.\d+)?)$/},s:{method:e=>this._secondsToUnits(parseFloat(e)),regexp:/^(\d+(?:\.\d+)?)s$/},samples:{method:e=>parseInt(e,10)/this.context.sampleRate,regexp:/^(\d+)samples$/},t:{method:e=>{const t=parseInt(e,10);return this._beatsToUnits(8/(Math.floor(t)*3))},regexp:/^(\d+)t$/i},tr:{method:(e,t,n)=>{let i=0;return e&&e!=="0"&&(i+=this._beatsToUnits(this._getTimeSignature()*parseFloat(e))),t&&t!=="0"&&(i+=this._beatsToUnits(parseFloat(t))),n&&n!=="0"&&(i+=this._beatsToUnits(parseFloat(n)/4)),i},regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/}}}valueOf(){if(this._val instanceof id&&this.fromType(this._val),kn(this._val))return this._noArg();if(hi(this._val)&&kn(this._units)){for(const e in this._expressions)if(this._expressions[e].regexp.test(this._val.trim())){this._units=e;break}}else if(Xs(this._val)){let e=0;for(const t in this._val)if(je(this._val[t])){const n=this._val[t],i=new this.constructor(this.context,t).valueOf()*n;e+=i}return e}if(je(this._units)){const e=this._expressions[this._units],t=this._val.toString().trim().match(e.regexp);return t?e.method.apply(this,t.slice(1)):e.method.call(this,this._val)}else return hi(this._val)?parseFloat(this._val):this._val}_frequencyToUnits(e){return 1/e}_beatsToUnits(e){return 60/this._getBpm()*e}_secondsToUnits(e){return e}_ticksToUnits(e){return e*this._beatsToUnits(1)/this._getPPQ()}_noArg(){return this._now()}_getBpm(){return this.context.transport.bpm.value}_getTimeSignature(){return this.context.transport.timeSignature}_getPPQ(){return this.context.transport.PPQ}fromType(e){switch(this._units=void 0,this.defaultUnits){case"s":this._val=e.toSeconds();break;case"i":this._val=e.toTicks();break;case"hz":this._val=e.toFrequency();break;case"midi":this._val=e.toMidi();break}return this}toFrequency(){return 1/this.toSeconds()}toSamples(){return this.toSeconds()*this.context.sampleRate}toMilliseconds(){return this.toSeconds()*1e3}}class Xn extends id{constructor(){super(...arguments),this.name="TimeClass"}_getExpressions(){return Object.assign(super._getExpressions(),{now:{method:e=>this._now()+new this.constructor(this.context,e).valueOf(),regexp:/^\+(.+)/},quantize:{method:e=>{const t=new Xn(this.context,e).valueOf();return this._secondsToUnits(this.context.transport.nextSubdivision(t))},regexp:/^@(.+)/}})}quantize(e,t=1){const n=new this.constructor(this.context,e).valueOf(),i=this.valueOf(),a=Math.round(i/n)*n-i;return i+a*t}toNotation(){const e=this.toSeconds(),t=["1m"];for(let r=1;r<9;r++){const o=Math.pow(2,r);t.push(o+"n."),t.push(o+"n"),t.push(o+"t")}t.push("0");let n=t[0],i=new Xn(this.context,t[0]).toSeconds();return t.forEach(r=>{const o=new Xn(this.context,r).toSeconds();Math.abs(o-e)<Math.abs(i-e)&&(n=r,i=o)}),n}toBarsBeatsSixteenths(){const e=this._beatsToUnits(1);let t=this.valueOf()/e;t=parseFloat(t.toFixed(4));const n=Math.floor(t/this._getTimeSignature());let i=t%1*4;t=Math.floor(t)%this._getTimeSignature();const r=i.toString();return r.length>3&&(i=parseFloat(parseFloat(r).toFixed(3))),[n,t,i].join(":")}toTicks(){const e=this._beatsToUnits(1),t=this.valueOf()/e;return Math.round(t*this._getPPQ())}toSeconds(){return this.valueOf()}toMidi(){return Bs(this.toFrequency())}_now(){return this.context.now()}}class En extends Xn{constructor(){super(...arguments),this.name="Frequency",this.defaultUnits="hz"}static get A4(){return RR()}static set A4(e){IR(e)}_getExpressions(){return Object.assign({},super._getExpressions(),{midi:{regexp:/^(\d+(?:\.\d+)?midi)/,method(e){return this.defaultUnits==="midi"?e:En.mtof(e)}},note:{regexp:/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,method(e,t){const i=DR[e.toLowerCase()]+(parseInt(t,10)+1)*12;return this.defaultUnits==="midi"?i:En.mtof(i)}},tr:{regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,method(e,t,n){let i=1;return e&&e!=="0"&&(i*=this._beatsToUnits(this._getTimeSignature()*parseFloat(e))),t&&t!=="0"&&(i*=this._beatsToUnits(parseFloat(t))),n&&n!=="0"&&(i*=this._beatsToUnits(parseFloat(n)/4)),i}}})}transpose(e){return new En(this.context,this.valueOf()*y_(e))}harmonize(e){return e.map(t=>this.transpose(t))}toMidi(){return Bs(this.valueOf())}toNote(){const e=this.toFrequency(),t=Math.log2(e/En.A4);let n=Math.round(12*t)+57;const i=Math.floor(n/12);return i<0&&(n+=-12*i),PR[n%12]+i.toString()}toSeconds(){return 1/super.toSeconds()}toTicks(){const e=this._beatsToUnits(1),t=this.valueOf()/e;return Math.floor(t*this._getPPQ())}_noArg(){return 0}_frequencyToUnits(e){return e}_ticksToUnits(e){return 1/(e*60/(this._getBpm()*this._getPPQ()))}_beatsToUnits(e){return 1/super._beatsToUnits(e)}_secondsToUnits(e){return 1/e}static mtof(e){return S_(e)}static ftom(e){return Bs(e)}}const DR={cbb:-2,cb:-1,c:0,"c#":1,cx:2,dbb:0,db:1,d:2,"d#":3,dx:4,ebb:2,eb:3,e:4,"e#":5,ex:6,fbb:3,fb:4,f:5,"f#":6,fx:7,gbb:5,gb:6,g:7,"g#":8,gx:9,abb:7,ab:8,a:9,"a#":10,ax:11,bbb:9,bb:10,b:11,"b#":12,bx:13},PR=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];class zo extends Xn{constructor(){super(...arguments),this.name="TransportTime"}_now(){return this.context.transport.seconds}}class gn extends Yi{constructor(){super();const e=Z(gn.getDefaults(),arguments,["context"]);this.defaultContext?this.context=this.defaultContext:this.context=e.context}static getDefaults(){return{context:Wn()}}now(){return this.context.currentTime+this.context.lookAhead}immediate(){return this.context.currentTime}get sampleTime(){return 1/this.context.sampleRate}get blockTime(){return 128/this.context.sampleRate}toSeconds(e){return new Xn(this.context,e).toSeconds()}toFrequency(e){return new En(this.context,e).toFrequency()}toTicks(e){return new zo(this.context,e).toTicks()}_getPartialProperties(e){const t=this.get();return Object.keys(t).forEach(n=>{kn(e[n])&&delete t[n]}),t}get(){const e=xR(this);return Object.keys(e).forEach(t=>{if(Reflect.has(this,t)){const n=this[t];je(n)&&je(n.value)&&je(n.setValueAtTime)?e[t]=n.value:n instanceof gn?e[t]=n._getPartialProperties(e[t]):wn(n)||Hi(n)||hi(n)||dR(n)?e[t]=n:delete e[t]}}),e}set(e){return Object.keys(e).forEach(t=>{Reflect.has(this,t)&&je(this[t])&&(this[t]&&je(this[t].value)&&je(this[t].setValueAtTime)?this[t].value!==e[t]&&(this[t].value=e[t]):this[t]instanceof gn?this[t].set(e[t]):this[t]=e[t])}),this}}class sd extends yi{constructor(e="stopped"){super(),this.name="StateTimeline",this._initial=e,this.setStateAtTime(this._initial,0)}getValueAtTime(e){const t=this.get(e);return t!==null?t.state:this._initial}setStateAtTime(e,t,n){return hs(t,0),this.add(Object.assign({},n,{state:e,time:t})),this}getLastState(e,t){const n=this._search(t);for(let i=n;i>=0;i--){const r=this._timeline[i];if(r.state===e)return r}}getNextState(e,t){const n=this._search(t);if(n!==-1)for(let i=n;i<this._timeline.length;i++){const r=this._timeline[i];if(r.state===e)return r}}}class Ze extends gn{constructor(){super(Z(Ze.getDefaults(),arguments,["param","units","convert"])),this.name="Param",this.overridden=!1,this._minOutput=1e-7;const e=Z(Ze.getDefaults(),arguments,["param","units","convert"]);for(Re(je(e.param)&&(Js(e.param)||e.param instanceof Ze),"param must be an AudioParam");!Js(e.param);)e.param=e.param._param;this._swappable=je(e.swappable)?e.swappable:!1,this._swappable?(this.input=this.context.createGain(),this._param=e.param,this.input.connect(this._param)):this._param=this.input=e.param,this._events=new yi(1e3),this._initialValue=this._param.defaultValue,this.units=e.units,this.convert=e.convert,this._minValue=e.minValue,this._maxValue=e.maxValue,je(e.value)&&e.value!==this._toType(this._initialValue)&&this.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(gn.getDefaults(),{convert:!0,units:"number"})}get value(){const e=this.now();return this.getValueAtTime(e)}set value(e){this.cancelScheduledValues(this.now()),this.setValueAtTime(e,this.now())}get minValue(){return je(this._minValue)?this._minValue:this.units==="time"||this.units==="frequency"||this.units==="normalRange"||this.units==="positive"||this.units==="transportTime"||this.units==="ticks"||this.units==="bpm"||this.units==="hertz"||this.units==="samples"?0:this.units==="audioRange"?-1:this.units==="decibels"?-1/0:this._param.minValue}get maxValue(){return je(this._maxValue)?this._maxValue:this.units==="normalRange"||this.units==="audioRange"?1:this._param.maxValue}_is(e,t){return this.units===t}_assertRange(e){return je(this.maxValue)&&je(this.minValue)&&hs(e,this._fromType(this.minValue),this._fromType(this.maxValue)),e}_fromType(e){return this.convert&&!this.overridden?this._is(e,"time")?this.toSeconds(e):this._is(e,"decibels")?AR(e):this._is(e,"frequency")?this.toFrequency(e):e:this.overridden?0:e}_toType(e){return this.convert&&this.units==="decibels"?CR(e):e}setValueAtTime(e,t){const n=this.toSeconds(t),i=this._fromType(e);return Re(isFinite(i)&&isFinite(n),`Invalid argument(s) to setValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._assertRange(i),this.log(this.units,"setValueAtTime",e,n),this._events.add({time:n,type:"setValueAtTime",value:i}),this._param.setValueAtTime(i,n),this}getValueAtTime(e){const t=Math.max(this.toSeconds(e),0),n=this._events.getAfter(t),i=this._events.get(t);let r=this._initialValue;if(i===null)r=this._initialValue;else if(i.type==="setTargetAtTime"&&(n===null||n.type==="setValueAtTime")){const o=this._events.getBefore(i.time);let a;o===null?a=this._initialValue:a=o.value,i.type==="setTargetAtTime"&&(r=this._exponentialApproach(i.time,a,i.value,i.constant,t))}else if(n===null)r=i.value;else if(n.type==="linearRampToValueAtTime"||n.type==="exponentialRampToValueAtTime"){let o=i.value;if(i.type==="setTargetAtTime"){const a=this._events.getBefore(i.time);a===null?o=this._initialValue:o=a.value}n.type==="linearRampToValueAtTime"?r=this._linearInterpolate(i.time,o,n.time,n.value,t):r=this._exponentialInterpolate(i.time,o,n.time,n.value,t)}else r=i.value;return this._toType(r)}setRampPoint(e){e=this.toSeconds(e);let t=this.getValueAtTime(e);return this.cancelAndHoldAtTime(e),this._fromType(t)===0&&(t=this._toType(this._minOutput)),this.setValueAtTime(t,e),this}linearRampToValueAtTime(e,t){const n=this._fromType(e),i=this.toSeconds(t);return Re(isFinite(n)&&isFinite(i),`Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._assertRange(n),this._events.add({time:i,type:"linearRampToValueAtTime",value:n}),this.log(this.units,"linearRampToValueAtTime",e,i),this._param.linearRampToValueAtTime(n,i),this}exponentialRampToValueAtTime(e,t){let n=this._fromType(e);n=Gn(n,0)?this._minOutput:n,this._assertRange(n);const i=this.toSeconds(t);return Re(isFinite(n)&&isFinite(i),`Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._events.add({time:i,type:"exponentialRampToValueAtTime",value:n}),this.log(this.units,"exponentialRampToValueAtTime",e,i),this._param.exponentialRampToValueAtTime(n,i),this}exponentialRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialRampToValueAtTime(e,n+this.toSeconds(t)),this}linearRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.linearRampToValueAtTime(e,n+this.toSeconds(t)),this}targetRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialApproachValueAtTime(e,n,t),this}exponentialApproachValueAtTime(e,t,n){t=this.toSeconds(t),n=this.toSeconds(n);const i=Math.log(n+1)/Math.log(200);return this.setTargetAtTime(e,t,i),this.cancelAndHoldAtTime(t+n*.9),this.linearRampToValueAtTime(e,t+n),this}setTargetAtTime(e,t,n){const i=this._fromType(e);Re(isFinite(n)&&n>0,"timeConstant must be a number greater than 0");const r=this.toSeconds(t);return this._assertRange(i),Re(isFinite(i)&&isFinite(r),`Invalid argument(s) to setTargetAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._events.add({constant:n,time:r,type:"setTargetAtTime",value:i}),this.log(this.units,"setTargetAtTime",e,r,n),this._param.setTargetAtTime(i,r,n),this}setValueCurveAtTime(e,t,n,i=1){n=this.toSeconds(n),t=this.toSeconds(t);const r=this._fromType(e[0])*i;this.setValueAtTime(this._toType(r),t);const o=n/(e.length-1);for(let a=1;a<e.length;a++){const c=this._fromType(e[a])*i;this.linearRampToValueAtTime(this._toType(c),t+a*o)}return this}cancelScheduledValues(e){const t=this.toSeconds(e);return Re(isFinite(t),`Invalid argument to cancelScheduledValues: ${JSON.stringify(e)}`),this._events.cancel(t),this._param.cancelScheduledValues(t),this.log(this.units,"cancelScheduledValues",t),this}cancelAndHoldAtTime(e){const t=this.toSeconds(e),n=this._fromType(this.getValueAtTime(t));Re(isFinite(t),`Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(e)}`),this.log(this.units,"cancelAndHoldAtTime",t,"value="+n);const i=this._events.get(t),r=this._events.getAfter(t);return i&&Gn(i.time,t)?r?(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time)):(this._param.cancelAndHoldAtTime(t),this._events.cancel(t+this.sampleTime)):r&&(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time),r.type==="linearRampToValueAtTime"?this.linearRampToValueAtTime(this._toType(n),t):r.type==="exponentialRampToValueAtTime"&&this.exponentialRampToValueAtTime(this._toType(n),t)),this._events.add({time:t,type:"setValueAtTime",value:n}),this._param.setValueAtTime(n,t),this}rampTo(e,t=.1,n){return this.units==="frequency"||this.units==="bpm"||this.units==="decibels"?this.exponentialRampTo(e,t,n):this.linearRampTo(e,t,n),this}apply(e){const t=this.context.currentTime;e.setValueAtTime(this.getValueAtTime(t),t);const n=this._events.get(t);if(n&&n.type==="setTargetAtTime"){const i=this._events.getAfter(n.time),r=i?i.time:t+2,o=(r-t)/10;for(let a=t;a<r;a+=o)e.linearRampToValueAtTime(this.getValueAtTime(a),a)}return this._events.forEachAfter(this.context.currentTime,i=>{i.type==="cancelScheduledValues"?e.cancelScheduledValues(i.time):i.type==="setTargetAtTime"?e.setTargetAtTime(i.value,i.time,i.constant):e[i.type](i.value,i.time)}),this}setParam(e){Re(this._swappable,"The Param must be assigned as 'swappable' in the constructor");const t=this.input;return t.disconnect(this._param),this.apply(e),this._param=e,t.connect(this._param),this}dispose(){return super.dispose(),this._events.dispose(),this}get defaultValue(){return this._toType(this._param.defaultValue)}_exponentialApproach(e,t,n,i,r){return n+(t-n)*Math.exp(-(r-e)/i)}_linearInterpolate(e,t,n,i,r){return t+(i-t)*((r-e)/(n-e))}_exponentialInterpolate(e,t,n,i,r){return t*Math.pow(i/t,(r-e)/(n-e))}}class Se extends gn{constructor(){super(...arguments),this.name="ToneAudioNode",this._internalChannels=[]}get numberOfInputs(){return je(this.input)?Js(this.input)||this.input instanceof Ze?1:this.input.numberOfInputs:0}get numberOfOutputs(){return je(this.output)?this.output.numberOfOutputs:0}_isAudioNode(e){return je(e)&&(e instanceof Se||cs(e))}_getInternalNodes(){const e=this._internalChannels.slice(0);return this._isAudioNode(this.input)&&e.push(this.input),this._isAudioNode(this.output)&&this.input!==this.output&&e.push(this.output),e}_setChannelProperties(e){this._getInternalNodes().forEach(n=>{n.channelCount=e.channelCount,n.channelCountMode=e.channelCountMode,n.channelInterpretation=e.channelInterpretation})}_getChannelProperties(){const e=this._getInternalNodes();Re(e.length>0,"ToneAudioNode does not have any internal nodes");const t=e[0];return{channelCount:t.channelCount,channelCountMode:t.channelCountMode,channelInterpretation:t.channelInterpretation}}get channelCount(){return this._getChannelProperties().channelCount}set channelCount(e){const t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelCount:e}))}get channelCountMode(){return this._getChannelProperties().channelCountMode}set channelCountMode(e){const t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelCountMode:e}))}get channelInterpretation(){return this._getChannelProperties().channelInterpretation}set channelInterpretation(e){const t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelInterpretation:e}))}connect(e,t=0,n=0){return di(this,e,t,n),this}toDestination(){return this.connect(this.context.destination),this}toMaster(){return Jh("toMaster() has been renamed toDestination()"),this.toDestination()}disconnect(e,t=0,n=0){return NR(this,e,t,n),this}chain(...e){return ds(this,...e),this}fan(...e){return e.forEach(t=>this.connect(t)),this}dispose(){return super.dispose(),je(this.input)&&(this.input instanceof Se?this.input.dispose():cs(this.input)&&this.input.disconnect()),je(this.output)&&(this.output instanceof Se?this.output.dispose():cs(this.output)&&this.output.disconnect()),this._internalChannels=[],this}}function ds(...s){const e=s.shift();s.reduce((t,n)=>(t instanceof Se?t.connect(n):cs(t)&&di(t,n),n),e)}function di(s,e,t=0,n=0){for(Re(je(s),"Cannot connect from undefined node"),Re(je(e),"Cannot connect to undefined node"),(e instanceof Se||cs(e))&&Re(e.numberOfInputs>0,"Cannot connect to node with no inputs"),Re(s.numberOfOutputs>0,"Cannot connect from node with no outputs");e instanceof Se||e instanceof Ze;)je(e.input)&&(e=e.input);for(;s instanceof Se;)je(s.output)&&(s=s.output);Js(e)?s.connect(e,t):s.connect(e,t,n)}function NR(s,e,t=0,n=0){if(je(e))for(;e instanceof Se;)e=e.input;for(;!cs(s);)je(s.output)&&(s=s.output);Js(e)?s.disconnect(e,t):cs(e)?s.disconnect(e,t,n):s.disconnect()}class ot extends Se{constructor(){super(Z(ot.getDefaults(),arguments,["gain","units"])),this.name="Gain",this._gainNode=this.context.createGain(),this.input=this._gainNode,this.output=this._gainNode;const e=Z(ot.getDefaults(),arguments,["gain","units"]);this.gain=new Ze({context:this.context,convert:e.convert,param:this._gainNode.gain,units:e.units,value:e.gain,minValue:e.minValue,maxValue:e.maxValue}),Qe(this,"gain")}static getDefaults(){return Object.assign(Se.getDefaults(),{convert:!0,gain:1,units:"gain"})}dispose(){return super.dispose(),this._gainNode.disconnect(),this.gain.dispose(),this}}class no extends Se{constructor(e){super(e),this.onended=rt,this._startTime=-1,this._stopTime=-1,this._timeout=-1,this.output=new ot({context:this.context,gain:0}),this._gainNode=this.output,this.getStateAtTime=function(t){const n=this.toSeconds(t);return this._startTime!==-1&&n>=this._startTime&&(this._stopTime===-1||n<=this._stopTime)?"started":"stopped"},this._fadeIn=e.fadeIn,this._fadeOut=e.fadeOut,this._curve=e.curve,this.onended=e.onended}static getDefaults(){return Object.assign(Se.getDefaults(),{curve:"linear",fadeIn:0,fadeOut:0,onended:rt})}_startGain(e,t=1){Re(this._startTime===-1,"Source cannot be started more than once");const n=this.toSeconds(this._fadeIn);return this._startTime=e+n,this._startTime=Math.max(this._startTime,this.context.currentTime),n>0?(this._gainNode.gain.setValueAtTime(0,e),this._curve==="linear"?this._gainNode.gain.linearRampToValueAtTime(t,e+n):this._gainNode.gain.exponentialApproachValueAtTime(t,e,n)):this._gainNode.gain.setValueAtTime(t,e),this}stop(e){return this.log("stop",e),this._stopGain(this.toSeconds(e)),this}_stopGain(e){Re(this._startTime!==-1,"'start' must be called before 'stop'"),this.cancelStop();const t=this.toSeconds(this._fadeOut);return this._stopTime=this.toSeconds(e)+t,this._stopTime=Math.max(this._stopTime,this.context.currentTime),t>0?this._curve==="linear"?this._gainNode.gain.linearRampTo(0,t,e):this._gainNode.gain.targetRampTo(0,t,e):(this._gainNode.gain.cancelAndHoldAtTime(e),this._gainNode.gain.setValueAtTime(0,e)),this.context.clearTimeout(this._timeout),this._timeout=this.context.setTimeout(()=>{const n=this._curve==="exponential"?t*2:0;this._stopSource(this.now()+n),this._onended()},this._stopTime-this.context.currentTime),this}_onended(){if(this.onended!==rt&&(this.onended(this),this.onended=rt,!this.context.isOffline)){const e=()=>this.dispose();typeof window.requestIdleCallback<"u"?window.requestIdleCallback(e):setTimeout(e,1e3)}}get state(){return this.getStateAtTime(this.now())}cancelStop(){return this.log("cancelStop"),Re(this._startTime!==-1,"Source is not started"),this._gainNode.gain.cancelScheduledValues(this._startTime+this.sampleTime),this.context.clearTimeout(this._timeout),this._stopTime=-1,this}dispose(){return super.dispose(),this._gainNode.disconnect(),this}}class kc extends no{constructor(){super(Z(kc.getDefaults(),arguments,["offset"])),this.name="ToneConstantSource",this._source=this.context.createConstantSource();const e=Z(kc.getDefaults(),arguments,["offset"]);di(this._source,this._gainNode),this.offset=new Ze({context:this.context,convert:e.convert,param:this._source.offset,units:e.units,value:e.offset,minValue:e.minValue,maxValue:e.maxValue})}static getDefaults(){return Object.assign(no.getDefaults(),{convert:!0,offset:1,units:"number"})}start(e){const t=this.toSeconds(e);return this.log("start",t),this._startGain(t),this._source.start(t),this}_stopSource(e){this._source.stop(e)}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._source.disconnect(),this.offset.dispose(),this}}class lt extends Se{constructor(){super(Z(lt.getDefaults(),arguments,["value","units"])),this.name="Signal",this.override=!0;const e=Z(lt.getDefaults(),arguments,["value","units"]);this.output=this._constantSource=new kc({context:this.context,convert:e.convert,offset:e.value,units:e.units,minValue:e.minValue,maxValue:e.maxValue}),this._constantSource.start(0),this.input=this._param=this._constantSource.offset}static getDefaults(){return Object.assign(Se.getDefaults(),{convert:!0,units:"number",value:0})}connect(e,t=0,n=0){return rd(this,e,t,n),this}dispose(){return super.dispose(),this._param.dispose(),this._constantSource.dispose(),this}setValueAtTime(e,t){return this._param.setValueAtTime(e,t),this}getValueAtTime(e){return this._param.getValueAtTime(e)}setRampPoint(e){return this._param.setRampPoint(e),this}linearRampToValueAtTime(e,t){return this._param.linearRampToValueAtTime(e,t),this}exponentialRampToValueAtTime(e,t){return this._param.exponentialRampToValueAtTime(e,t),this}exponentialRampTo(e,t,n){return this._param.exponentialRampTo(e,t,n),this}linearRampTo(e,t,n){return this._param.linearRampTo(e,t,n),this}targetRampTo(e,t,n){return this._param.targetRampTo(e,t,n),this}exponentialApproachValueAtTime(e,t,n){return this._param.exponentialApproachValueAtTime(e,t,n),this}setTargetAtTime(e,t,n){return this._param.setTargetAtTime(e,t,n),this}setValueCurveAtTime(e,t,n,i){return this._param.setValueCurveAtTime(e,t,n,i),this}cancelScheduledValues(e){return this._param.cancelScheduledValues(e),this}cancelAndHoldAtTime(e){return this._param.cancelAndHoldAtTime(e),this}rampTo(e,t,n){return this._param.rampTo(e,t,n),this}get value(){return this._param.value}set value(e){this._param.value=e}get convert(){return this._param.convert}set convert(e){this._param.convert=e}get units(){return this._param.units}get overridden(){return this._param.overridden}set overridden(e){this._param.overridden=e}get maxValue(){return this._param.maxValue}get minValue(){return this._param.minValue}apply(e){return this._param.apply(e),this}}function rd(s,e,t,n){(e instanceof Ze||Js(e)||e instanceof lt&&e.override)&&(e.cancelScheduledValues(0),e.setValueAtTime(0,0),e instanceof lt&&(e.overridden=!0)),di(s,e,t,n)}class Bc extends Ze{constructor(){super(Z(Bc.getDefaults(),arguments,["value"])),this.name="TickParam",this._events=new yi(1/0),this._multiplier=1;const e=Z(Bc.getDefaults(),arguments,["value"]);this._multiplier=e.multiplier,this._events.cancel(0),this._events.add({ticks:0,time:0,type:"setValueAtTime",value:this._fromType(e.value)}),this.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(Ze.getDefaults(),{multiplier:1,units:"hertz",value:1})}setTargetAtTime(e,t,n){t=this.toSeconds(t),this.setRampPoint(t);const i=this._fromType(e),r=this._events.get(t),o=Math.round(Math.max(1/n,1));for(let a=0;a<=o;a++){const c=n*a+t,l=this._exponentialApproach(r.time,r.value,i,n,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}setValueAtTime(e,t){const n=this.toSeconds(t);super.setValueAtTime(e,t);const i=this._events.get(n),r=this._events.previousEvent(i),o=this._getTicksUntilEvent(r,n);return i.ticks=Math.max(o,0),this}linearRampToValueAtTime(e,t){const n=this.toSeconds(t);super.linearRampToValueAtTime(e,t);const i=this._events.get(n),r=this._events.previousEvent(i),o=this._getTicksUntilEvent(r,n);return i.ticks=Math.max(o,0),this}exponentialRampToValueAtTime(e,t){t=this.toSeconds(t);const n=this._fromType(e),i=this._events.get(t),r=Math.round(Math.max((t-i.time)*10,1)),o=(t-i.time)/r;for(let a=0;a<=r;a++){const c=o*a+i.time,l=this._exponentialInterpolate(i.time,i.value,t,n,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}_getTicksUntilEvent(e,t){if(e===null)e={ticks:0,time:0,type:"setValueAtTime",value:0};else if(kn(e.ticks)){const o=this._events.previousEvent(e);e.ticks=this._getTicksUntilEvent(o,e.time)}const n=this._fromType(this.getValueAtTime(e.time));let i=this._fromType(this.getValueAtTime(t));const r=this._events.get(t);return r&&r.time===t&&r.type==="setValueAtTime"&&(i=this._fromType(this.getValueAtTime(t-this.sampleTime))),.5*(t-e.time)*(n+i)+e.ticks}getTicksAtTime(e){const t=this.toSeconds(e),n=this._events.get(t);return Math.max(this._getTicksUntilEvent(n,t),0)}getDurationOfTicks(e,t){const n=this.toSeconds(t),i=this.getTicksAtTime(t);return this.getTimeOfTick(i+e)-n}getTimeOfTick(e){const t=this._events.get(e,"ticks"),n=this._events.getAfter(e,"ticks");if(t&&t.ticks===e)return t.time;if(t&&n&&n.type==="linearRampToValueAtTime"&&t.value!==n.value){const i=this._fromType(this.getValueAtTime(t.time)),o=(this._fromType(this.getValueAtTime(n.time))-i)/(n.time-t.time),a=Math.sqrt(Math.pow(i,2)-2*o*(t.ticks-e)),c=(-i+a)/o,l=(-i-a)/o;return(c>0?c:l)+t.time}else return t?t.value===0?1/0:t.time+(e-t.ticks)/t.value:e/this._initialValue}ticksToTime(e,t){return this.getDurationOfTicks(e,t)}timeToTicks(e,t){const n=this.toSeconds(t),i=this.toSeconds(e),r=this.getTicksAtTime(n);return this.getTicksAtTime(n+i)-r}_fromType(e){return this.units==="bpm"&&this.multiplier?1/(60/e/this.multiplier):super._fromType(e)}_toType(e){return this.units==="bpm"&&this.multiplier?e/this.multiplier*60:super._toType(e)}get multiplier(){return this._multiplier}set multiplier(e){const t=this.value;this._multiplier=e,this.cancelScheduledValues(0),this.setValueAtTime(t,0)}}class Vc extends lt{constructor(){super(Z(Vc.getDefaults(),arguments,["value"])),this.name="TickSignal";const e=Z(Vc.getDefaults(),arguments,["value"]);this.input=this._param=new Bc({context:this.context,convert:e.convert,multiplier:e.multiplier,param:this._constantSource.offset,units:e.units,value:e.value})}static getDefaults(){return Object.assign(lt.getDefaults(),{multiplier:1,units:"hertz",value:1})}ticksToTime(e,t){return this._param.ticksToTime(e,t)}timeToTicks(e,t){return this._param.timeToTicks(e,t)}getTimeOfTick(e){return this._param.getTimeOfTick(e)}getDurationOfTicks(e,t){return this._param.getDurationOfTicks(e,t)}getTicksAtTime(e){return this._param.getTicksAtTime(e)}get multiplier(){return this._param.multiplier}set multiplier(e){this._param.multiplier=e}dispose(){return super.dispose(),this._param.dispose(),this}}class zc extends gn{constructor(){super(Z(zc.getDefaults(),arguments,["frequency"])),this.name="TickSource",this._state=new sd,this._tickOffset=new yi;const e=Z(zc.getDefaults(),arguments,["frequency"]);this.frequency=new Vc({context:this.context,units:e.units,value:e.frequency}),Qe(this,"frequency"),this._state.setStateAtTime("stopped",0),this.setTicksAtTime(0,0)}static getDefaults(){return Object.assign({frequency:1,units:"hertz"},gn.getDefaults())}get state(){return this.getStateAtTime(this.now())}start(e,t){const n=this.toSeconds(e);return this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),je(t)&&this.setTicksAtTime(t,n)),this}stop(e){const t=this.toSeconds(e);if(this._state.getValueAtTime(t)==="stopped"){const n=this._state.get(t);n&&n.time>0&&(this._tickOffset.cancel(n.time),this._state.cancel(n.time))}return this._state.cancel(t),this._state.setStateAtTime("stopped",t),this.setTicksAtTime(0,t),this}pause(e){const t=this.toSeconds(e);return this._state.getValueAtTime(t)==="started"&&this._state.setStateAtTime("paused",t),this}cancel(e){return e=this.toSeconds(e),this._state.cancel(e),this._tickOffset.cancel(e),this}getTicksAtTime(e){const t=this.toSeconds(e),n=this._state.getLastState("stopped",t),i={state:"paused",time:t};this._state.add(i);let r=n,o=0;return this._state.forEachBetween(n.time,t+this.sampleTime,a=>{let c=r.time;const l=this._tickOffset.get(a.time);l&&l.time>=r.time&&(o=l.ticks,c=l.time),r.state==="started"&&a.state!=="started"&&(o+=this.frequency.getTicksAtTime(a.time)-this.frequency.getTicksAtTime(c)),r=a}),this._state.remove(i),o}get ticks(){return this.getTicksAtTime(this.now())}set ticks(e){this.setTicksAtTime(e,this.now())}get seconds(){return this.getSecondsAtTime(this.now())}set seconds(e){const t=this.now(),n=this.frequency.timeToTicks(e,t);this.setTicksAtTime(n,t)}getSecondsAtTime(e){e=this.toSeconds(e);const t=this._state.getLastState("stopped",e),n={state:"paused",time:e};this._state.add(n);let i=t,r=0;return this._state.forEachBetween(t.time,e+this.sampleTime,o=>{let a=i.time;const c=this._tickOffset.get(o.time);c&&c.time>=i.time&&(r=c.seconds,a=c.time),i.state==="started"&&o.state!=="started"&&(r+=o.time-a),i=o}),this._state.remove(n),r}setTicksAtTime(e,t){return t=this.toSeconds(t),this._tickOffset.cancel(t),this._tickOffset.add({seconds:this.frequency.getDurationOfTicks(e,t),ticks:e,time:t}),this}getStateAtTime(e){return e=this.toSeconds(e),this._state.getValueAtTime(e)}getTimeOfTick(e,t=this.now()){const n=this._tickOffset.get(t),i=this._state.get(t),r=Math.max(n.time,i.time),o=this.frequency.getTicksAtTime(r)+e-n.ticks;return this.frequency.getTimeOfTick(o)}forEachTickBetween(e,t,n){let i=this._state.get(e);this._state.forEachBetween(e,t,o=>{i&&i.state==="started"&&o.state!=="started"&&this.forEachTickBetween(Math.max(i.time,e),o.time-this.sampleTime,n),i=o});let r=null;if(i&&i.state==="started"){const o=Math.max(i.time,e),a=this.frequency.getTicksAtTime(o),c=this.frequency.getTicksAtTime(i.time),l=a-c;let u=Math.ceil(l)-l;u=Gn(u,1)?0:u;let h=this.frequency.getTimeOfTick(a+u);for(;h<t;){try{n(h,Math.round(this.getTicksAtTime(h)))}catch(d){r=d;break}h+=this.frequency.getDurationOfTicks(1,h)}}if(r)throw r;return this}dispose(){return super.dispose(),this._state.dispose(),this._tickOffset.dispose(),this.frequency.dispose(),this}}class $o extends gn{constructor(){super(Z($o.getDefaults(),arguments,["callback","frequency"])),this.name="Clock",this.callback=rt,this._lastUpdate=0,this._state=new sd("stopped"),this._boundLoop=this._loop.bind(this);const e=Z($o.getDefaults(),arguments,["callback","frequency"]);this.callback=e.callback,this._tickSource=new zc({context:this.context,frequency:e.frequency,units:e.units}),this._lastUpdate=0,this.frequency=this._tickSource.frequency,Qe(this,"frequency"),this._state.setStateAtTime("stopped",0),this.context.on("tick",this._boundLoop)}static getDefaults(){return Object.assign(gn.getDefaults(),{callback:rt,frequency:1,units:"hertz"})}get state(){return this._state.getValueAtTime(this.now())}start(e,t){h_(this.context);const n=this.toSeconds(e);return this.log("start",n),this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),this._tickSource.start(n,t),n<this._lastUpdate&&this.emit("start",n,t)),this}stop(e){const t=this.toSeconds(e);return this.log("stop",t),this._state.cancel(t),this._state.setStateAtTime("stopped",t),this._tickSource.stop(t),t<this._lastUpdate&&this.emit("stop",t),this}pause(e){const t=this.toSeconds(e);return this._state.getValueAtTime(t)==="started"&&(this._state.setStateAtTime("paused",t),this._tickSource.pause(t),t<this._lastUpdate&&this.emit("pause",t)),this}get ticks(){return Math.ceil(this.getTicksAtTime(this.now()))}set ticks(e){this._tickSource.ticks=e}get seconds(){return this._tickSource.seconds}set seconds(e){this._tickSource.seconds=e}getSecondsAtTime(e){return this._tickSource.getSecondsAtTime(e)}setTicksAtTime(e,t){return this._tickSource.setTicksAtTime(e,t),this}getTimeOfTick(e,t=this.now()){return this._tickSource.getTimeOfTick(e,t)}getTicksAtTime(e){return this._tickSource.getTicksAtTime(e)}nextTickTime(e,t){const n=this.toSeconds(t),i=this.getTicksAtTime(n);return this._tickSource.getTimeOfTick(i+e,n)}_loop(){const e=this._lastUpdate,t=this.now();this._lastUpdate=t,this.log("loop",e,t),e!==t&&(this._state.forEachBetween(e,t,n=>{switch(n.state){case"started":const i=this._tickSource.getTicksAtTime(n.time);this.emit("start",n.time,i);break;case"stopped":n.time!==0&&this.emit("stop",n.time);break;case"paused":this.emit("pause",n.time);break}}),this._tickSource.forEachTickBetween(e,t,(n,i)=>{this.callback(n,i)}))}getStateAtTime(e){const t=this.toSeconds(e);return this._state.getValueAtTime(t)}dispose(){return super.dispose(),this.context.off("tick",this._boundLoop),this._tickSource.dispose(),this._state.dispose(),this}}Sa.mixin($o);class Gc extends Se{constructor(){super(Z(Gc.getDefaults(),arguments,["delayTime","maxDelay"])),this.name="Delay";const e=Z(Gc.getDefaults(),arguments,["delayTime","maxDelay"]),t=this.toSeconds(e.maxDelay);this._maxDelay=Math.max(t,this.toSeconds(e.delayTime)),this._delayNode=this.input=this.output=this.context.createDelay(t),this.delayTime=new Ze({context:this.context,param:this._delayNode.delayTime,units:"time",value:e.delayTime,minValue:0,maxValue:this.maxDelay}),Qe(this,"delayTime")}static getDefaults(){return Object.assign(Se.getDefaults(),{delayTime:0,maxDelay:1})}get maxDelay(){return this._maxDelay}dispose(){return super.dispose(),this._delayNode.disconnect(),this.delayTime.dispose(),this}}class od extends Yi{constructor(){super(),this.name="ToneAudioBuffers",this._buffers=new Map,this._loadingCount=0;const e=Z(od.getDefaults(),arguments,["urls","onload","baseUrl"],"urls");this.baseUrl=e.baseUrl,Object.keys(e.urls).forEach(t=>{this._loadingCount++;const n=e.urls[t];this.add(t,n,this._bufferLoaded.bind(this,e.onload),e.onerror)})}static getDefaults(){return{baseUrl:"",onerror:rt,onload:rt,urls:{}}}has(e){return this._buffers.has(e.toString())}get(e){return Re(this.has(e),`ToneAudioBuffers has no buffer named: ${e}`),this._buffers.get(e.toString())}_bufferLoaded(e){this._loadingCount--,this._loadingCount===0&&e&&e()}get loaded(){return Array.from(this._buffers).every(([e,t])=>t.loaded)}add(e,t,n=rt,i=rt){return hi(t)?this._buffers.set(e.toString(),new nt(this.baseUrl+t,n,i)):this._buffers.set(e.toString(),new nt(t,n,i)),this}dispose(){return super.dispose(),this._buffers.forEach(e=>e.dispose()),this._buffers.clear(),this}}class Hc extends En{constructor(){super(...arguments),this.name="MidiClass",this.defaultUnits="midi"}_frequencyToUnits(e){return Bs(super._frequencyToUnits(e))}_ticksToUnits(e){return Bs(super._ticksToUnits(e))}_beatsToUnits(e){return Bs(super._beatsToUnits(e))}_secondsToUnits(e){return Bs(super._secondsToUnits(e))}toMidi(){return this.valueOf()}toFrequency(){return S_(this.toMidi())}transpose(e){return new Hc(this.context,this.toMidi()+e)}}class Oi extends zo{constructor(){super(...arguments),this.name="Ticks",this.defaultUnits="i"}_now(){return this.context.transport.ticks}_beatsToUnits(e){return this._getPPQ()*e}_secondsToUnits(e){return Math.floor(e/(60/this._getBpm())*this._getPPQ())}_ticksToUnits(e){return e}toTicks(){return this.valueOf()}toSeconds(){return this.valueOf()/this._getPPQ()*(60/this._getBpm())}}class LR extends gn{constructor(){super(...arguments),this.name="Draw",this.expiration=.25,this.anticipation=.008,this._events=new yi,this._boundDrawLoop=this._drawLoop.bind(this),this._animationFrame=-1}schedule(e,t){return this._events.add({callback:e,time:this.toSeconds(t)}),this._events.length===1&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop)),this}cancel(e){return this._events.cancel(this.toSeconds(e)),this}_drawLoop(){const e=this.context.currentTime;for(;this._events.length&&this._events.peek().time-this.anticipation<=e;){const t=this._events.shift();t&&e-t.time<=this.expiration&&t.callback()}this._events.length>0&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop))}dispose(){return super.dispose(),this._events.dispose(),cancelAnimationFrame(this._animationFrame),this}}vl(s=>{s.draw=new LR({context:s})});yl(s=>{s.draw.dispose()});class OR extends Yi{constructor(){super(...arguments),this.name="IntervalTimeline",this._root=null,this._length=0}add(e){Re(je(e.time),"Events must have a time property"),Re(je(e.duration),"Events must have a duration parameter"),e.time=e.time.valueOf();let t=new UR(e.time,e.time+e.duration,e);for(this._root===null?this._root=t:this._root.insert(t),this._length++;t!==null;)t.updateHeight(),t.updateMax(),this._rebalance(t),t=t.parent;return this}remove(e){if(this._root!==null){const t=[];this._root.search(e.time,t);for(const n of t)if(n.event===e){this._removeNode(n),this._length--;break}}return this}get length(){return this._length}cancel(e){return this.forEachFrom(e,t=>this.remove(t)),this}_setRoot(e){this._root=e,this._root!==null&&(this._root.parent=null)}_replaceNodeInParent(e,t){e.parent!==null?(e.isLeftChild()?e.parent.left=t:e.parent.right=t,this._rebalance(e.parent)):this._setRoot(t)}_removeNode(e){if(e.left===null&&e.right===null)this._replaceNodeInParent(e,null);else if(e.right===null)this._replaceNodeInParent(e,e.left);else if(e.left===null)this._replaceNodeInParent(e,e.right);else{const t=e.getBalance();let n,i=null;if(t>0)if(e.left.right===null)n=e.left,n.right=e.right,i=n;else{for(n=e.left.right;n.right!==null;)n=n.right;n.parent&&(n.parent.right=n.left,i=n.parent,n.left=e.left,n.right=e.right)}else if(e.right.left===null)n=e.right,n.left=e.left,i=n;else{for(n=e.right.left;n.left!==null;)n=n.left;n.parent&&(n.parent.left=n.right,i=n.parent,n.left=e.left,n.right=e.right)}e.parent!==null?e.isLeftChild()?e.parent.left=n:e.parent.right=n:this._setRoot(n),i&&this._rebalance(i)}e.dispose()}_rotateLeft(e){const t=e.parent,n=e.isLeftChild(),i=e.right;i&&(e.right=i.left,i.left=e),t!==null?n?t.left=i:t.right=i:this._setRoot(i)}_rotateRight(e){const t=e.parent,n=e.isLeftChild(),i=e.left;i&&(e.left=i.right,i.right=e),t!==null?n?t.left=i:t.right=i:this._setRoot(i)}_rebalance(e){const t=e.getBalance();t>1&&e.left?e.left.getBalance()<0?this._rotateLeft(e.left):this._rotateRight(e):t<-1&&e.right&&(e.right.getBalance()>0?this._rotateRight(e.right):this._rotateLeft(e))}get(e){if(this._root!==null){const t=[];if(this._root.search(e,t),t.length>0){let n=t[0];for(let i=1;i<t.length;i++)t[i].low>n.low&&(n=t[i]);return n.event}}return null}forEach(e){if(this._root!==null){const t=[];this._root.traverse(n=>t.push(n)),t.forEach(n=>{n.event&&e(n.event)})}return this}forEachAtTime(e,t){if(this._root!==null){const n=[];this._root.search(e,n),n.forEach(i=>{i.event&&t(i.event)})}return this}forEachFrom(e,t){if(this._root!==null){const n=[];this._root.searchAfter(e,n),n.forEach(i=>{i.event&&t(i.event)})}return this}dispose(){return super.dispose(),this._root!==null&&this._root.traverse(e=>e.dispose()),this._root=null,this}}class UR{constructor(e,t,n){this._left=null,this._right=null,this.parent=null,this.height=0,this.event=n,this.low=e,this.high=t,this.max=this.high}insert(e){e.low<=this.low?this.left===null?this.left=e:this.left.insert(e):this.right===null?this.right=e:this.right.insert(e)}search(e,t){e>this.max||(this.left!==null&&this.left.search(e,t),this.low<=e&&this.high>e&&t.push(this),!(this.low>e)&&this.right!==null&&this.right.search(e,t))}searchAfter(e,t){this.low>=e&&(t.push(this),this.left!==null&&this.left.searchAfter(e,t)),this.right!==null&&this.right.searchAfter(e,t)}traverse(e){e(this),this.left!==null&&this.left.traverse(e),this.right!==null&&this.right.traverse(e)}updateHeight(){this.left!==null&&this.right!==null?this.height=Math.max(this.left.height,this.right.height)+1:this.right!==null?this.height=this.right.height+1:this.left!==null?this.height=this.left.height+1:this.height=0}updateMax(){this.max=this.high,this.left!==null&&(this.max=Math.max(this.max,this.left.max)),this.right!==null&&(this.max=Math.max(this.max,this.right.max))}getBalance(){let e=0;return this.left!==null&&this.right!==null?e=this.left.height-this.right.height:this.left!==null?e=this.left.height+1:this.right!==null&&(e=-(this.right.height+1)),e}isLeftChild(){return this.parent!==null&&this.parent.left===this}get left(){return this._left}set left(e){this._left=e,e!==null&&(e.parent=this),this.updateHeight(),this.updateMax()}get right(){return this._right}set right(e){this._right=e,e!==null&&(e.parent=this),this.updateHeight(),this.updateMax()}dispose(){this.parent=null,this._left=null,this._right=null,this.event=null}}class er extends Se{constructor(){super(Z(er.getDefaults(),arguments,["volume"])),this.name="Volume";const e=Z(er.getDefaults(),arguments,["volume"]);this.input=this.output=new ot({context:this.context,gain:e.volume,units:"decibels"}),this.volume=this.output.gain,Qe(this,"volume"),this._unmutedVolume=e.volume,this.mute=e.mute}static getDefaults(){return Object.assign(Se.getDefaults(),{mute:!1,volume:0})}get mute(){return this.volume.value===-1/0}set mute(e){!this.mute&&e?(this._unmutedVolume=this.volume.value,this.volume.value=-1/0):this.mute&&!e&&(this.volume.value=this._unmutedVolume)}dispose(){return super.dispose(),this.input.dispose(),this.volume.dispose(),this}}class Wc extends Se{constructor(){super(Z(Wc.getDefaults(),arguments)),this.name="Destination",this.input=new er({context:this.context}),this.output=new ot({context:this.context}),this.volume=this.input.volume;const e=Z(Wc.getDefaults(),arguments);ds(this.input,this.output,this.context.rawContext.destination),this.mute=e.mute,this._internalChannels=[this.input,this.context.rawContext.destination,this.output]}static getDefaults(){return Object.assign(Se.getDefaults(),{mute:!1,volume:0})}get mute(){return this.input.mute}set mute(e){this.input.mute=e}chain(...e){return this.input.disconnect(),e.unshift(this.input),e.push(this.output),ds(...e),this}get maxChannelCount(){return this.context.rawContext.destination.maxChannelCount}dispose(){return super.dispose(),this.volume.dispose(),this}}vl(s=>{s.destination=new Wc({context:s})});yl(s=>{s.destination.dispose()});class FR extends Yi{constructor(e){super(),this.name="TimelineValue",this._timeline=new yi({memory:10}),this._initialValue=e}set(e,t){return this._timeline.add({value:e,time:t}),this}get(e){const t=this._timeline.get(e);return t?t.value:this._initialValue}}class fs{constructor(e,t){this.id=fs._eventId++;const n=Object.assign(fs.getDefaults(),t);this.transport=e,this.callback=n.callback,this._once=n.once,this.time=n.time}static getDefaults(){return{callback:rt,once:!1,time:0}}invoke(e){this.callback&&(this.callback(e),this._once&&this.transport.clear(this.id))}dispose(){return this.callback=void 0,this}}fs._eventId=0;class ad extends fs{constructor(e,t){super(e,t),this._currentId=-1,this._nextId=-1,this._nextTick=this.time,this._boundRestart=this._restart.bind(this);const n=Object.assign(ad.getDefaults(),t);this.duration=new Oi(e.context,n.duration).valueOf(),this._interval=new Oi(e.context,n.interval).valueOf(),this._nextTick=n.time,this.transport.on("start",this._boundRestart),this.transport.on("loopStart",this._boundRestart),this.context=this.transport.context,this._restart()}static getDefaults(){return Object.assign({},fs.getDefaults(),{duration:1/0,interval:1,once:!1})}invoke(e){this._createEvents(e),super.invoke(e)}_createEvents(e){const t=this.transport.getTicksAtTime(e);t>=this.time&&t>=this._nextTick&&this._nextTick+this._interval<this.time+this.duration&&(this._nextTick+=this._interval,this._currentId=this._nextId,this._nextId=this.transport.scheduleOnce(this.invoke.bind(this),new Oi(this.context,this._nextTick).toSeconds()))}_restart(e){this.transport.clear(this._currentId),this.transport.clear(this._nextId),this._nextTick=this.time;const t=this.transport.getTicksAtTime(e);t>this.time&&(this._nextTick=this.time+Math.ceil((t-this.time)/this._interval)*this._interval),this._currentId=this.transport.scheduleOnce(this.invoke.bind(this),new Oi(this.context,this._nextTick).toSeconds()),this._nextTick+=this._interval,this._nextId=this.transport.scheduleOnce(this.invoke.bind(this),new Oi(this.context,this._nextTick).toSeconds())}dispose(){return super.dispose(),this.transport.clear(this._currentId),this.transport.clear(this._nextId),this.transport.off("start",this._boundRestart),this.transport.off("loopStart",this._boundRestart),this}}class Ko extends gn{constructor(){super(Z(Ko.getDefaults(),arguments)),this.name="Transport",this._loop=new FR(!1),this._loopStart=0,this._loopEnd=0,this._scheduledEvents={},this._timeline=new yi,this._repeatedEvents=new OR,this._syncedSignals=[],this._swingAmount=0;const e=Z(Ko.getDefaults(),arguments);this._ppq=e.ppq,this._clock=new $o({callback:this._processTick.bind(this),context:this.context,frequency:0,units:"bpm"}),this._bindClockEvents(),this.bpm=this._clock.frequency,this._clock.frequency.multiplier=e.ppq,this.bpm.setValueAtTime(e.bpm,0),Qe(this,"bpm"),this._timeSignature=e.timeSignature,this._swingTicks=e.ppq/2}static getDefaults(){return Object.assign(gn.getDefaults(),{bpm:120,loopEnd:"4m",loopStart:0,ppq:192,swing:0,swingSubdivision:"8n",timeSignature:4})}_processTick(e,t){if(this._loop.get(e)&&t>=this._loopEnd&&(this.emit("loopEnd",e),this._clock.setTicksAtTime(this._loopStart,e),t=this._loopStart,this.emit("loopStart",e,this._clock.getSecondsAtTime(e)),this.emit("loop",e)),this._swingAmount>0&&t%this._ppq!==0&&t%(this._swingTicks*2)!==0){const n=t%(this._swingTicks*2)/(this._swingTicks*2),i=Math.sin(n*Math.PI)*this._swingAmount;e+=new Oi(this.context,this._swingTicks*2/3).toSeconds()*i}this._timeline.forEachAtTime(t,n=>n.invoke(e))}schedule(e,t){const n=new fs(this,{callback:e,time:new zo(this.context,t).toTicks()});return this._addEvent(n,this._timeline)}scheduleRepeat(e,t,n,i=1/0){const r=new ad(this,{callback:e,duration:new Xn(this.context,i).toTicks(),interval:new Xn(this.context,t).toTicks(),time:new zo(this.context,n).toTicks()});return this._addEvent(r,this._repeatedEvents)}scheduleOnce(e,t){const n=new fs(this,{callback:e,once:!0,time:new zo(this.context,t).toTicks()});return this._addEvent(n,this._timeline)}clear(e){if(this._scheduledEvents.hasOwnProperty(e)){const t=this._scheduledEvents[e.toString()];t.timeline.remove(t.event),t.event.dispose(),delete this._scheduledEvents[e.toString()]}return this}_addEvent(e,t){return this._scheduledEvents[e.id.toString()]={event:e,timeline:t},t.add(e),e.id}cancel(e=0){const t=this.toTicks(e);return this._timeline.forEachFrom(t,n=>this.clear(n.id)),this._repeatedEvents.forEachFrom(t,n=>this.clear(n.id)),this}_bindClockEvents(){this._clock.on("start",(e,t)=>{t=new Oi(this.context,t).toSeconds(),this.emit("start",e,t)}),this._clock.on("stop",e=>{this.emit("stop",e)}),this._clock.on("pause",e=>{this.emit("pause",e)})}get state(){return this._clock.getStateAtTime(this.now())}start(e,t){let n;return je(t)&&(n=this.toTicks(t)),this._clock.start(e,n),this}stop(e){return this._clock.stop(e),this}pause(e){return this._clock.pause(e),this}toggle(e){return e=this.toSeconds(e),this._clock.getStateAtTime(e)!=="started"?this.start(e):this.stop(e),this}get timeSignature(){return this._timeSignature}set timeSignature(e){wn(e)&&(e=e[0]/e[1]*4),this._timeSignature=e}get loopStart(){return new Xn(this.context,this._loopStart,"i").toSeconds()}set loopStart(e){this._loopStart=this.toTicks(e)}get loopEnd(){return new Xn(this.context,this._loopEnd,"i").toSeconds()}set loopEnd(e){this._loopEnd=this.toTicks(e)}get loop(){return this._loop.get(this.now())}set loop(e){this._loop.set(e,this.now())}setLoopPoints(e,t){return this.loopStart=e,this.loopEnd=t,this}get swing(){return this._swingAmount}set swing(e){this._swingAmount=e}get swingSubdivision(){return new Oi(this.context,this._swingTicks).toNotation()}set swingSubdivision(e){this._swingTicks=this.toTicks(e)}get position(){const e=this.now(),t=this._clock.getTicksAtTime(e);return new Oi(this.context,t).toBarsBeatsSixteenths()}set position(e){const t=this.toTicks(e);this.ticks=t}get seconds(){return this._clock.seconds}set seconds(e){const t=this.now(),n=this._clock.frequency.timeToTicks(e,t);this.ticks=n}get progress(){if(this.loop){const e=this.now();return(this._clock.getTicksAtTime(e)-this._loopStart)/(this._loopEnd-this._loopStart)}else return 0}get ticks(){return this._clock.ticks}set ticks(e){if(this._clock.ticks!==e){const t=this.now();if(this.state==="started"){const n=this._clock.getTicksAtTime(t),i=this._clock.frequency.getDurationOfTicks(Math.ceil(n)-n,t),r=t+i;this.emit("stop",r),this._clock.setTicksAtTime(e,r),this.emit("start",r,this._clock.getSecondsAtTime(r))}else this._clock.setTicksAtTime(e,t)}}getTicksAtTime(e){return Math.round(this._clock.getTicksAtTime(e))}getSecondsAtTime(e){return this._clock.getSecondsAtTime(e)}get PPQ(){return this._clock.frequency.multiplier}set PPQ(e){this._clock.frequency.multiplier=e}nextSubdivision(e){if(e=this.toTicks(e),this.state!=="started")return 0;{const t=this.now(),n=this.getTicksAtTime(t),i=e-n%e;return this._clock.nextTickTime(i,t)}}syncSignal(e,t){if(!t){const i=this.now();if(e.getValueAtTime(i)!==0){const o=1/(60/this.bpm.getValueAtTime(i)/this.PPQ);t=e.getValueAtTime(i)/o}else t=0}const n=new ot(t);return this.bpm.connect(n),n.connect(e._param),this._syncedSignals.push({initial:e.value,ratio:n,signal:e}),e.value=0,this}unsyncSignal(e){for(let t=this._syncedSignals.length-1;t>=0;t--){const n=this._syncedSignals[t];n.signal===e&&(n.ratio.dispose(),n.signal.value=n.initial,this._syncedSignals.splice(t,1))}return this}dispose(){return super.dispose(),this._clock.dispose(),td(this,"bpm"),this._timeline.dispose(),this._repeatedEvents.dispose(),this}}Sa.mixin(Ko);vl(s=>{s.transport=new Ko({context:s})});yl(s=>{s.transport.dispose()});class Zt extends Se{constructor(e){super(e),this.input=void 0,this._state=new sd("stopped"),this._synced=!1,this._scheduled=[],this._syncedStart=rt,this._syncedStop=rt,this._state.memory=100,this._state.increasing=!0,this._volume=this.output=new er({context:this.context,mute:e.mute,volume:e.volume}),this.volume=this._volume.volume,Qe(this,"volume"),this.onstop=e.onstop}static getDefaults(){return Object.assign(Se.getDefaults(),{mute:!1,onstop:rt,volume:0})}get state(){return this._synced?this.context.transport.state==="started"?this._state.getValueAtTime(this.context.transport.seconds):"stopped":this._state.getValueAtTime(this.now())}get mute(){return this._volume.mute}set mute(e){this._volume.mute=e}_clampToCurrentTime(e){return this._synced?e:Math.max(e,this.context.currentTime)}start(e,t,n){let i=kn(e)&&this._synced?this.context.transport.seconds:this.toSeconds(e);if(i=this._clampToCurrentTime(i),!this._synced&&this._state.getValueAtTime(i)==="started")Re(Fc(i,this._state.get(i).time),"Start time must be strictly greater than previous start time"),this._state.cancel(i),this._state.setStateAtTime("started",i),this.log("restart",i),this.restart(i,t,n);else if(this.log("start",i),this._state.setStateAtTime("started",i),this._synced){const r=this._state.get(i);r&&(r.offset=this.toSeconds(Vr(t,0)),r.duration=n?this.toSeconds(n):void 0);const o=this.context.transport.schedule(a=>{this._start(a,t,n)},i);this._scheduled.push(o),this.context.transport.state==="started"&&this.context.transport.getSecondsAtTime(this.immediate())>i&&this._syncedStart(this.now(),this.context.transport.seconds)}else h_(this.context),this._start(i,t,n);return this}stop(e){let t=kn(e)&&this._synced?this.context.transport.seconds:this.toSeconds(e);if(t=this._clampToCurrentTime(t),this._state.getValueAtTime(t)==="started"||je(this._state.getNextState("started",t))){if(this.log("stop",t),!this._synced)this._stop(t);else{const n=this.context.transport.schedule(this._stop.bind(this),t);this._scheduled.push(n)}this._state.cancel(t),this._state.setStateAtTime("stopped",t)}return this}restart(e,t,n){return e=this.toSeconds(e),this._state.getValueAtTime(e)==="started"&&(this._state.cancel(e),this._restart(e,t,n)),this}sync(){return this._synced||(this._synced=!0,this._syncedStart=(e,t)=>{if(t>0){const n=this._state.get(t);if(n&&n.state==="started"&&n.time!==t){const i=t-this.toSeconds(n.time);let r;n.duration&&(r=this.toSeconds(n.duration)-i),this._start(e,this.toSeconds(n.offset)+i,r)}}},this._syncedStop=e=>{const t=this.context.transport.getSecondsAtTime(Math.max(e-this.sampleTime,0));this._state.getValueAtTime(t)==="started"&&this._stop(e)},this.context.transport.on("start",this._syncedStart),this.context.transport.on("loopStart",this._syncedStart),this.context.transport.on("stop",this._syncedStop),this.context.transport.on("pause",this._syncedStop),this.context.transport.on("loopEnd",this._syncedStop)),this}unsync(){return this._synced&&(this.context.transport.off("stop",this._syncedStop),this.context.transport.off("pause",this._syncedStop),this.context.transport.off("loopEnd",this._syncedStop),this.context.transport.off("start",this._syncedStart),this.context.transport.off("loopStart",this._syncedStart)),this._synced=!1,this._scheduled.forEach(e=>this.context.transport.clear(e)),this._scheduled=[],this._state.cancel(0),this._stop(0),this}dispose(){return super.dispose(),this.onstop=rt,this.unsync(),this._volume.dispose(),this._state.dispose(),this}}class io extends no{constructor(){super(Z(io.getDefaults(),arguments,["url","onload"])),this.name="ToneBufferSource",this._source=this.context.createBufferSource(),this._internalChannels=[this._source],this._sourceStarted=!1,this._sourceStopped=!1;const e=Z(io.getDefaults(),arguments,["url","onload"]);di(this._source,this._gainNode),this._source.onended=()=>this._stopSource(),this.playbackRate=new Ze({context:this.context,param:this._source.playbackRate,units:"positive",value:e.playbackRate}),this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this._buffer=new nt(e.url,e.onload,e.onerror),this._internalChannels.push(this._source)}static getDefaults(){return Object.assign(no.getDefaults(),{url:new nt,loop:!1,loopEnd:0,loopStart:0,onload:rt,onerror:rt,playbackRate:1})}get fadeIn(){return this._fadeIn}set fadeIn(e){this._fadeIn=e}get fadeOut(){return this._fadeOut}set fadeOut(e){this._fadeOut=e}get curve(){return this._curve}set curve(e){this._curve=e}start(e,t,n,i=1){Re(this.buffer.loaded,"buffer is either not set or not loaded");const r=this.toSeconds(e);this._startGain(r,i),this.loop?t=Vr(t,this.loopStart):t=Vr(t,0);let o=Math.max(this.toSeconds(t),0);if(this.loop){const a=this.toSeconds(this.loopEnd)||this.buffer.duration,c=this.toSeconds(this.loopStart),l=a-c;nh(o,a)&&(o=(o-c)%l+c),Gn(o,this.buffer.duration)&&(o=0)}if(this._source.buffer=this.buffer.get(),this._source.loopEnd=this.toSeconds(this.loopEnd)||this.buffer.duration,p_(o,this.buffer.duration)&&(this._sourceStarted=!0,this._source.start(r,o)),je(n)){let a=this.toSeconds(n);a=Math.max(a,0),this.stop(r+a)}return this}_stopSource(e){!this._sourceStopped&&this._sourceStarted&&(this._sourceStopped=!0,this._source.stop(this.toSeconds(e)),this._onended())}get loopStart(){return this._source.loopStart}set loopStart(e){this._source.loopStart=this.toSeconds(e)}get loopEnd(){return this._source.loopEnd}set loopEnd(e){this._source.loopEnd=this.toSeconds(e)}get buffer(){return this._buffer}set buffer(e){this._buffer.set(e)}get loop(){return this._source.loop}set loop(e){this._source.loop=e,this._sourceStarted&&this.cancelStop()}dispose(){return super.dispose(),this._source.onended=null,this._source.disconnect(),this._buffer.dispose(),this.playbackRate.dispose(),this}}class Zo extends Zt{constructor(){super(Z(Zo.getDefaults(),arguments,["type"])),this.name="Noise",this._source=null;const e=Z(Zo.getDefaults(),arguments,["type"]);this._playbackRate=e.playbackRate,this.type=e.type,this._fadeIn=e.fadeIn,this._fadeOut=e.fadeOut}static getDefaults(){return Object.assign(Zt.getDefaults(),{fadeIn:0,fadeOut:0,playbackRate:1,type:"white"})}get type(){return this._type}set type(e){if(Re(e in zp,"Noise: invalid type: "+e),this._type!==e&&(this._type=e,this.state==="started")){const t=this.now();this._stop(t),this._start(t)}}get playbackRate(){return this._playbackRate}set playbackRate(e){this._playbackRate=e,this._source&&(this._source.playbackRate.value=e)}_start(e){const t=zp[this._type];this._source=new io({url:t,context:this.context,fadeIn:this._fadeIn,fadeOut:this._fadeOut,loop:!0,onended:()=>this.onstop(this),playbackRate:this._playbackRate}).connect(this.output),this._source.start(this.toSeconds(e),Math.random()*(t.duration-.001))}_stop(e){this._source&&(this._source.stop(this.toSeconds(e)),this._source=null)}get fadeIn(){return this._fadeIn}set fadeIn(e){this._fadeIn=e,this._source&&(this._source.fadeIn=this._fadeIn)}get fadeOut(){return this._fadeOut}set fadeOut(e){this._fadeOut=e,this._source&&(this._source.fadeOut=this._fadeOut)}_restart(e){this._stop(e),this._start(e)}dispose(){return super.dispose(),this._source&&this._source.disconnect(),this}}const wr=44100*5,fu=2,Ri={brown:null,pink:null,white:null},zp={get brown(){if(!Ri.brown){const s=[];for(let e=0;e<fu;e++){const t=new Float32Array(wr);s[e]=t;let n=0;for(let i=0;i<wr;i++){const r=Math.random()*2-1;t[i]=(n+.02*r)/1.02,n=t[i],t[i]*=3.5}}Ri.brown=new nt().fromArray(s)}return Ri.brown},get pink(){if(!Ri.pink){const s=[];for(let e=0;e<fu;e++){const t=new Float32Array(wr);s[e]=t;let n,i,r,o,a,c,l;n=i=r=o=a=c=l=0;for(let u=0;u<wr;u++){const h=Math.random()*2-1;n=.99886*n+h*.0555179,i=.99332*i+h*.0750759,r=.969*r+h*.153852,o=.8665*o+h*.3104856,a=.55*a+h*.5329522,c=-.7616*c-h*.016898,t[u]=n+i+r+o+a+c+l+h*.5362,t[u]*=.11,l=h*.115926}}Ri.pink=new nt().fromArray(s)}return Ri.pink},get white(){if(!Ri.white){const s=[];for(let e=0;e<fu;e++){const t=new Float32Array(wr);s[e]=t;for(let n=0;n<wr;n++)t[n]=Math.random()*2-1}Ri.white=new nt().fromArray(s)}return Ri.white}};function or(s,e){return Ct(this,void 0,void 0,function*(){const t=e/s.context.sampleRate,n=new nd(1,t,s.context.sampleRate);return new s.constructor(Object.assign(s.get(),{frequency:2/t,detune:0,context:n})).toDestination().start(0),(yield n.render()).getChannelData(0)})}class Xc extends no{constructor(){super(Z(Xc.getDefaults(),arguments,["frequency","type"])),this.name="ToneOscillatorNode",this._oscillator=this.context.createOscillator(),this._internalChannels=[this._oscillator];const e=Z(Xc.getDefaults(),arguments,["frequency","type"]);di(this._oscillator,this._gainNode),this.type=e.type,this.frequency=new Ze({context:this.context,param:this._oscillator.frequency,units:"frequency",value:e.frequency}),this.detune=new Ze({context:this.context,param:this._oscillator.detune,units:"cents",value:e.detune}),Qe(this,["frequency","detune"])}static getDefaults(){return Object.assign(no.getDefaults(),{detune:0,frequency:440,type:"sine"})}start(e){const t=this.toSeconds(e);return this.log("start",t),this._startGain(t),this._oscillator.start(t),this}_stopSource(e){this._oscillator.stop(e)}setPeriodicWave(e){return this._oscillator.setPeriodicWave(e),this}get type(){return this._oscillator.type}set type(e){this._oscillator.type=e}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._oscillator.disconnect(),this.frequency.dispose(),this.detune.dispose(),this}}class bt extends Zt{constructor(){super(Z(bt.getDefaults(),arguments,["frequency","type"])),this.name="Oscillator",this._oscillator=null;const e=Z(bt.getDefaults(),arguments,["frequency","type"]);this.frequency=new lt({context:this.context,units:"frequency",value:e.frequency}),Qe(this,"frequency"),this.detune=new lt({context:this.context,units:"cents",value:e.detune}),Qe(this,"detune"),this._partials=e.partials,this._partialCount=e.partialCount,this._type=e.type,e.partialCount&&e.type!=="custom"&&(this._type=this.baseType+e.partialCount.toString()),this.phase=e.phase}static getDefaults(){return Object.assign(Zt.getDefaults(),{detune:0,frequency:440,partialCount:0,partials:[],phase:0,type:"sine"})}_start(e){const t=this.toSeconds(e),n=new Xc({context:this.context,onended:()=>this.onstop(this)});this._oscillator=n,this._wave?this._oscillator.setPeriodicWave(this._wave):this._oscillator.type=this._type,this._oscillator.connect(this.output),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.start(t)}_stop(e){const t=this.toSeconds(e);this._oscillator&&this._oscillator.stop(t)}_restart(e){const t=this.toSeconds(e);return this.log("restart",t),this._oscillator&&this._oscillator.cancelStop(),this._state.cancel(t),this}syncFrequency(){return this.context.transport.syncSignal(this.frequency),this}unsyncFrequency(){return this.context.transport.unsyncSignal(this.frequency),this}_getCachedPeriodicWave(){if(this._type==="custom")return bt._periodicWaveCache.find(t=>t.phase===this._phase&&yR(t.partials,this._partials));{const e=bt._periodicWaveCache.find(t=>t.type===this._type&&t.phase===this._phase);return this._partialCount=e?e.partialCount:this._partialCount,e}}get type(){return this._type}set type(e){this._type=e;const t=["sine","square","sawtooth","triangle"].indexOf(e)!==-1;if(this._phase===0&&t)this._wave=void 0,this._partialCount=0,this._oscillator!==null&&(this._oscillator.type=e);else{const n=this._getCachedPeriodicWave();if(je(n)){const{partials:i,wave:r}=n;this._wave=r,this._partials=i,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave)}else{const[i,r]=this._getRealImaginary(e,this._phase),o=this.context.createPeriodicWave(i,r);this._wave=o,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave),bt._periodicWaveCache.push({imag:r,partialCount:this._partialCount,partials:this._partials,phase:this._phase,real:i,type:this._type,wave:this._wave}),bt._periodicWaveCache.length>100&&bt._periodicWaveCache.shift()}}}get baseType(){return this._type.replace(this.partialCount.toString(),"")}set baseType(e){this.partialCount&&this._type!=="custom"&&e!=="custom"?this.type=e+this.partialCount:this.type=e}get partialCount(){return this._partialCount}set partialCount(e){hs(e,0);let t=this._type;const n=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);if(n&&(t=n[1]),this._type!=="custom")e===0?this.type=t:this.type=t+e.toString();else{const i=new Float32Array(e);this._partials.forEach((r,o)=>i[o]=r),this._partials=Array.from(i),this.type=this._type}}_getRealImaginary(e,t){let i=2048;const r=new Float32Array(i),o=new Float32Array(i);let a=1;if(e==="custom"){if(a=this._partials.length+1,this._partialCount=this._partials.length,i=a,this._partials.length===0)return[r,o]}else{const c=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(e);c?(a=parseInt(c[2],10)+1,this._partialCount=parseInt(c[2],10),e=c[1],a=Math.max(a,2),i=a):this._partialCount=0,this._partials=[]}for(let c=1;c<i;++c){const l=2/(c*Math.PI);let u;switch(e){case"sine":u=c<=a?1:0,this._partials[c-1]=u;break;case"square":u=c&1?2*l:0,this._partials[c-1]=u;break;case"sawtooth":u=l*(c&1?1:-1),this._partials[c-1]=u;break;case"triangle":c&1?u=2*(l*l)*(c-1>>1&1?-1:1):u=0,this._partials[c-1]=u;break;case"custom":u=this._partials[c-1];break;default:throw new TypeError("Oscillator: invalid type: "+e)}u!==0?(r[c]=-u*Math.sin(t*c),o[c]=u*Math.cos(t*c)):(r[c]=0,o[c]=0)}return[r,o]}_inverseFFT(e,t,n){let i=0;const r=e.length;for(let o=0;o<r;o++)i+=e[o]*Math.cos(o*n)+t[o]*Math.sin(o*n);return i}getInitialValue(){const[e,t]=this._getRealImaginary(this._type,0);let n=0;const i=Math.PI*2,r=32;for(let o=0;o<r;o++)n=Math.max(this._inverseFFT(e,t,o/r*i),n);return SR(-this._inverseFFT(e,t,this._phase)/n,-1,1)}get partials(){return this._partials.slice(0,this.partialCount)}set partials(e){this._partials=e,this._partialCount=this._partials.length,e.length&&(this.type="custom")}get phase(){return this._phase*(180/Math.PI)}set phase(e){this._phase=e*Math.PI/180,this.type=this._type}asArray(e=1024){return Ct(this,void 0,void 0,function*(){return or(this,e)})}dispose(){return super.dispose(),this._oscillator!==null&&this._oscillator.dispose(),this._wave=void 0,this.frequency.dispose(),this.detune.dispose(),this}}bt._periodicWaveCache=[];class tr extends Se{constructor(){super(Object.assign(Z(tr.getDefaults(),arguments,["context"])))}connect(e,t=0,n=0){return rd(this,e,t,n),this}}class nr extends tr{constructor(){super(Object.assign(Z(nr.getDefaults(),arguments,["mapping","length"]))),this.name="WaveShaper",this._shaper=this.context.createWaveShaper(),this.input=this._shaper,this.output=this._shaper;const e=Z(nr.getDefaults(),arguments,["mapping","length"]);wn(e.mapping)||e.mapping instanceof Float32Array?this.curve=Float32Array.from(e.mapping):hR(e.mapping)&&this.setMap(e.mapping,e.length)}static getDefaults(){return Object.assign(lt.getDefaults(),{length:1024})}setMap(e,t=1024){const n=new Float32Array(t);for(let i=0,r=t;i<r;i++){const o=i/(r-1)*2-1;n[i]=e(o,i)}return this.curve=n,this}get curve(){return this._shaper.curve}set curve(e){this._shaper.curve=e}get oversample(){return this._shaper.oversample}set oversample(e){const t=["none","2x","4x"].some(n=>n.includes(e));Re(t,"oversampling must be either 'none', '2x', or '4x'"),this._shaper.oversample=e}dispose(){return super.dispose(),this._shaper.disconnect(),this}}class kR extends tr{constructor(){super(...arguments),this.name="AudioToGain",this._norm=new nr({context:this.context,mapping:e=>(e+1)/2}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}}class ps extends lt{constructor(){super(Object.assign(Z(ps.getDefaults(),arguments,["value"]))),this.name="Multiply",this.override=!1;const e=Z(ps.getDefaults(),arguments,["value"]);this._mult=this.input=this.output=new ot({context:this.context,minValue:e.minValue,maxValue:e.maxValue}),this.factor=this._param=this._mult.gain,this.factor.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(lt.getDefaults(),{value:0})}dispose(){return super.dispose(),this._mult.dispose(),this}}class Qo extends Zt{constructor(){super(Z(Qo.getDefaults(),arguments,["frequency","type","modulationType"])),this.name="AMOscillator",this._modulationScale=new kR({context:this.context}),this._modulationNode=new ot({context:this.context});const e=Z(Qo.getDefaults(),arguments,["frequency","type","modulationType"]);this._carrier=new bt({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase,type:e.type}),this.frequency=this._carrier.frequency,this.detune=this._carrier.detune,this._modulator=new bt({context:this.context,phase:e.phase,type:e.modulationType}),this.harmonicity=new ps({context:this.context,units:"positive",value:e.harmonicity}),this.frequency.chain(this.harmonicity,this._modulator.frequency),this._modulator.chain(this._modulationScale,this._modulationNode.gain),this._carrier.chain(this._modulationNode,this.output),Qe(this,["frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(bt.getDefaults(),{harmonicity:1,modulationType:"square"})}_start(e){this._modulator.start(e),this._carrier.start(e)}_stop(e){this._modulator.stop(e),this._carrier.stop(e)}_restart(e){this._modulator.restart(e),this._carrier.restart(e)}get type(){return this._carrier.type}set type(e){this._carrier.type=e}get baseType(){return this._carrier.baseType}set baseType(e){this._carrier.baseType=e}get partialCount(){return this._carrier.partialCount}set partialCount(e){this._carrier.partialCount=e}get modulationType(){return this._modulator.type}set modulationType(e){this._modulator.type=e}get phase(){return this._carrier.phase}set phase(e){this._carrier.phase=e,this._modulator.phase=e}get partials(){return this._carrier.partials}set partials(e){this._carrier.partials=e}asArray(e=1024){return Ct(this,void 0,void 0,function*(){return or(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this._modulationScale.dispose(),this}}class Jo extends Zt{constructor(){super(Z(Jo.getDefaults(),arguments,["frequency","type","modulationType"])),this.name="FMOscillator",this._modulationNode=new ot({context:this.context,gain:0});const e=Z(Jo.getDefaults(),arguments,["frequency","type","modulationType"]);this._carrier=new bt({context:this.context,detune:e.detune,frequency:0,onstop:()=>this.onstop(this),phase:e.phase,type:e.type}),this.detune=this._carrier.detune,this.frequency=new lt({context:this.context,units:"frequency",value:e.frequency}),this._modulator=new bt({context:this.context,phase:e.phase,type:e.modulationType}),this.harmonicity=new ps({context:this.context,units:"positive",value:e.harmonicity}),this.modulationIndex=new ps({context:this.context,units:"positive",value:e.modulationIndex}),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output),this.detune.connect(this._modulator.detune),Qe(this,["modulationIndex","frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(bt.getDefaults(),{harmonicity:1,modulationIndex:2,modulationType:"square"})}_start(e){this._modulator.start(e),this._carrier.start(e)}_stop(e){this._modulator.stop(e),this._carrier.stop(e)}_restart(e){return this._modulator.restart(e),this._carrier.restart(e),this}get type(){return this._carrier.type}set type(e){this._carrier.type=e}get baseType(){return this._carrier.baseType}set baseType(e){this._carrier.baseType=e}get partialCount(){return this._carrier.partialCount}set partialCount(e){this._carrier.partialCount=e}get modulationType(){return this._modulator.type}set modulationType(e){this._modulator.type=e}get phase(){return this._carrier.phase}set phase(e){this._carrier.phase=e,this._modulator.phase=e}get partials(){return this._carrier.partials}set partials(e){this._carrier.partials=e}asArray(e=1024){return Ct(this,void 0,void 0,function*(){return or(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this.modulationIndex.dispose(),this}}class so extends Zt{constructor(){super(Z(so.getDefaults(),arguments,["frequency","width"])),this.name="PulseOscillator",this._widthGate=new ot({context:this.context,gain:0}),this._thresh=new nr({context:this.context,mapping:t=>t<=0?-1:1});const e=Z(so.getDefaults(),arguments,["frequency","width"]);this.width=new lt({context:this.context,units:"audioRange",value:e.width}),this._triangle=new bt({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase,type:"triangle"}),this.frequency=this._triangle.frequency,this.detune=this._triangle.detune,this._triangle.chain(this._thresh,this.output),this.width.chain(this._widthGate,this._thresh),Qe(this,["width","frequency","detune"])}static getDefaults(){return Object.assign(Zt.getDefaults(),{detune:0,frequency:440,phase:0,type:"pulse",width:.2})}_start(e){e=this.toSeconds(e),this._triangle.start(e),this._widthGate.gain.setValueAtTime(1,e)}_stop(e){e=this.toSeconds(e),this._triangle.stop(e),this._widthGate.gain.cancelScheduledValues(e),this._widthGate.gain.setValueAtTime(0,e)}_restart(e){this._triangle.restart(e),this._widthGate.gain.cancelScheduledValues(e),this._widthGate.gain.setValueAtTime(1,e)}get phase(){return this._triangle.phase}set phase(e){this._triangle.phase=e}get type(){return"pulse"}get baseType(){return"pulse"}get partials(){return[]}get partialCount(){return 0}set carrierType(e){this._triangle.type=e}asArray(e=1024){return Ct(this,void 0,void 0,function*(){return or(this,e)})}dispose(){return super.dispose(),this._triangle.dispose(),this.width.dispose(),this._widthGate.dispose(),this._thresh.dispose(),this}}class ea extends Zt{constructor(){super(Z(ea.getDefaults(),arguments,["frequency","type","spread"])),this.name="FatOscillator",this._oscillators=[];const e=Z(ea.getDefaults(),arguments,["frequency","type","spread"]);this.frequency=new lt({context:this.context,units:"frequency",value:e.frequency}),this.detune=new lt({context:this.context,units:"cents",value:e.detune}),this._spread=e.spread,this._type=e.type,this._phase=e.phase,this._partials=e.partials,this._partialCount=e.partialCount,this.count=e.count,Qe(this,["frequency","detune"])}static getDefaults(){return Object.assign(bt.getDefaults(),{count:3,spread:20,type:"sawtooth"})}_start(e){e=this.toSeconds(e),this._forEach(t=>t.start(e))}_stop(e){e=this.toSeconds(e),this._forEach(t=>t.stop(e))}_restart(e){this._forEach(t=>t.restart(e))}_forEach(e){for(let t=0;t<this._oscillators.length;t++)e(this._oscillators[t],t)}get type(){return this._type}set type(e){this._type=e,this._forEach(t=>t.type=e)}get spread(){return this._spread}set spread(e){if(this._spread=e,this._oscillators.length>1){const t=-e/2,n=e/(this._oscillators.length-1);this._forEach((i,r)=>i.detune.value=t+n*r)}}get count(){return this._oscillators.length}set count(e){if(hs(e,1),this._oscillators.length!==e){this._forEach(t=>t.dispose()),this._oscillators=[];for(let t=0;t<e;t++){const n=new bt({context:this.context,volume:-6-e*1.1,type:this._type,phase:this._phase+t/e*360,partialCount:this._partialCount,onstop:t===0?()=>this.onstop(this):rt});this.type==="custom"&&(n.partials=this._partials),this.frequency.connect(n.frequency),this.detune.connect(n.detune),n.detune.overridden=!1,n.connect(this.output),this._oscillators[t]=n}this.spread=this._spread,this.state==="started"&&this._forEach(t=>t.start())}}get phase(){return this._phase}set phase(e){this._phase=e,this._forEach((t,n)=>t.phase=this._phase+n/this.count*360)}get baseType(){return this._oscillators[0].baseType}set baseType(e){this._forEach(t=>t.baseType=e),this._type=this._oscillators[0].type}get partials(){return this._oscillators[0].partials}set partials(e){this._partials=e,this._partialCount=this._partials.length,e.length&&(this._type="custom",this._forEach(t=>t.partials=e))}get partialCount(){return this._oscillators[0].partialCount}set partialCount(e){this._partialCount=e,this._forEach(t=>t.partialCount=e),this._type=this._oscillators[0].type}asArray(e=1024){return Ct(this,void 0,void 0,function*(){return or(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this._forEach(e=>e.dispose()),this}}class ta extends Zt{constructor(){super(Z(ta.getDefaults(),arguments,["frequency","modulationFrequency"])),this.name="PWMOscillator",this.sourceType="pwm",this._scale=new ps({context:this.context,value:2});const e=Z(ta.getDefaults(),arguments,["frequency","modulationFrequency"]);this._pulse=new so({context:this.context,frequency:e.modulationFrequency}),this._pulse.carrierType="sine",this.modulationFrequency=this._pulse.frequency,this._modulator=new bt({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase}),this.frequency=this._modulator.frequency,this.detune=this._modulator.detune,this._modulator.chain(this._scale,this._pulse.width),this._pulse.connect(this.output),Qe(this,["modulationFrequency","frequency","detune"])}static getDefaults(){return Object.assign(Zt.getDefaults(),{detune:0,frequency:440,modulationFrequency:.4,phase:0,type:"pwm"})}_start(e){e=this.toSeconds(e),this._modulator.start(e),this._pulse.start(e)}_stop(e){e=this.toSeconds(e),this._modulator.stop(e),this._pulse.stop(e)}_restart(e){this._modulator.restart(e),this._pulse.restart(e)}get type(){return"pwm"}get baseType(){return"pwm"}get partials(){return[]}get partialCount(){return 0}get phase(){return this._modulator.phase}set phase(e){this._modulator.phase=e}asArray(e=1024){return Ct(this,void 0,void 0,function*(){return or(this,e)})}dispose(){return super.dispose(),this._pulse.dispose(),this._scale.dispose(),this._modulator.dispose(),this}}const Gp={am:Qo,fat:ea,fm:Jo,oscillator:bt,pulse:so,pwm:ta};class na extends Zt{constructor(){super(Z(na.getDefaults(),arguments,["frequency","type"])),this.name="OmniOscillator";const e=Z(na.getDefaults(),arguments,["frequency","type"]);this.frequency=new lt({context:this.context,units:"frequency",value:e.frequency}),this.detune=new lt({context:this.context,units:"cents",value:e.detune}),Qe(this,["frequency","detune"]),this.set(e)}static getDefaults(){return Object.assign(bt.getDefaults(),Jo.getDefaults(),Qo.getDefaults(),ea.getDefaults(),so.getDefaults(),ta.getDefaults())}_start(e){this._oscillator.start(e)}_stop(e){this._oscillator.stop(e)}_restart(e){return this._oscillator.restart(e),this}get type(){let e="";return["am","fm","fat"].some(t=>this._sourceType===t)&&(e=this._sourceType),e+this._oscillator.type}set type(e){e.substr(0,2)==="fm"?(this._createNewOscillator("fm"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(2)):e.substr(0,2)==="am"?(this._createNewOscillator("am"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(2)):e.substr(0,3)==="fat"?(this._createNewOscillator("fat"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(3)):e==="pwm"?(this._createNewOscillator("pwm"),this._oscillator=this._oscillator):e==="pulse"?this._createNewOscillator("pulse"):(this._createNewOscillator("oscillator"),this._oscillator=this._oscillator,this._oscillator.type=e)}get partials(){return this._oscillator.partials}set partials(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partials=e)}get partialCount(){return this._oscillator.partialCount}set partialCount(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partialCount=e)}set(e){return Reflect.has(e,"type")&&e.type&&(this.type=e.type),super.set(e),this}_createNewOscillator(e){if(e!==this._sourceType){this._sourceType=e;const t=Gp[e],n=this.now();if(this._oscillator){const i=this._oscillator;i.stop(n),this.context.setTimeout(()=>i.dispose(),this.blockTime)}this._oscillator=new t({context:this.context}),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.connect(this.output),this._oscillator.onstop=()=>this.onstop(this),this.state==="started"&&this._oscillator.start(n)}}get phase(){return this._oscillator.phase}set phase(e){this._oscillator.phase=e}get sourceType(){return this._sourceType}set sourceType(e){let t="sine";this._oscillator.type!=="pwm"&&this._oscillator.type!=="pulse"&&(t=this._oscillator.type),e==="fm"?this.type="fm"+t:e==="am"?this.type="am"+t:e==="fat"?this.type="fat"+t:e==="oscillator"?this.type=t:e==="pulse"?this.type="pulse":e==="pwm"&&(this.type="pwm")}_getOscType(e,t){return e instanceof Gp[t]}get baseType(){return this._oscillator.baseType}set baseType(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&e!=="pulse"&&e!=="pwm"&&(this._oscillator.baseType=e)}get width(){if(this._getOscType(this._oscillator,"pulse"))return this._oscillator.width}get count(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.count}set count(e){this._getOscType(this._oscillator,"fat")&&Hi(e)&&(this._oscillator.count=e)}get spread(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.spread}set spread(e){this._getOscType(this._oscillator,"fat")&&Hi(e)&&(this._oscillator.spread=e)}get modulationType(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.modulationType}set modulationType(e){(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))&&hi(e)&&(this._oscillator.modulationType=e)}get modulationIndex(){if(this._getOscType(this._oscillator,"fm"))return this._oscillator.modulationIndex}get harmonicity(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.harmonicity}get modulationFrequency(){if(this._getOscType(this._oscillator,"pwm"))return this._oscillator.modulationFrequency}asArray(e=1024){return Ct(this,void 0,void 0,function*(){return or(this,e)})}dispose(){return super.dispose(),this.detune.dispose(),this.frequency.dispose(),this._oscillator.dispose(),this}}class cd extends lt{constructor(){super(Object.assign(Z(cd.getDefaults(),arguments,["value"]))),this.override=!1,this.name="Add",this._sum=new ot({context:this.context}),this.input=this._sum,this.output=this._sum,this.addend=this._param,ds(this._constantSource,this._sum)}static getDefaults(){return Object.assign(lt.getDefaults(),{value:0})}dispose(){return super.dispose(),this._sum.dispose(),this}}class qc extends tr{constructor(){super(Object.assign(Z(qc.getDefaults(),arguments,["min","max"]))),this.name="Scale";const e=Z(qc.getDefaults(),arguments,["min","max"]);this._mult=this.input=new ps({context:this.context,value:e.max-e.min}),this._add=this.output=new cd({context:this.context,value:e.min}),this._min=e.min,this._max=e.max,this.input.connect(this.output)}static getDefaults(){return Object.assign(tr.getDefaults(),{max:1,min:0})}get min(){return this._min}set min(e){this._min=e,this._setRange()}get max(){return this._max}set max(e){this._max=e,this._setRange()}_setRange(){this._add.value=this._min,this._mult.value=this._max-this._min}dispose(){return super.dispose(),this._add.dispose(),this._mult.dispose(),this}}function M_(s,e=1/0){const t=new WeakMap;return function(n,i){Reflect.defineProperty(n,i,{configurable:!0,enumerable:!0,get:function(){return t.get(this)},set:function(r){hs(r,s,e),t.set(this,r)}})}}function $i(s,e=1/0){const t=new WeakMap;return function(n,i){Reflect.defineProperty(n,i,{configurable:!0,enumerable:!0,get:function(){return t.get(this)},set:function(r){hs(this.toSeconds(r),s,e),t.set(this,r)}})}}class ia extends Zt{constructor(){super(Z(ia.getDefaults(),arguments,["url","onload"])),this.name="Player",this._activeSources=new Set;const e=Z(ia.getDefaults(),arguments,["url","onload"]);this._buffer=new nt({onload:this._onload.bind(this,e.onload),onerror:e.onerror,reverse:e.reverse,url:e.url}),this.autostart=e.autostart,this._loop=e.loop,this._loopStart=e.loopStart,this._loopEnd=e.loopEnd,this._playbackRate=e.playbackRate,this.fadeIn=e.fadeIn,this.fadeOut=e.fadeOut}static getDefaults(){return Object.assign(Zt.getDefaults(),{autostart:!1,fadeIn:0,fadeOut:0,loop:!1,loopEnd:0,loopStart:0,onload:rt,onerror:rt,playbackRate:1,reverse:!1})}load(e){return Ct(this,void 0,void 0,function*(){return yield this._buffer.load(e),this._onload(),this})}_onload(e=rt){e(),this.autostart&&this.start()}_onSourceEnd(e){this.onstop(this),this._activeSources.delete(e),this._activeSources.size===0&&!this._synced&&this._state.getValueAtTime(this.now())==="started"&&(this._state.cancel(this.now()),this._state.setStateAtTime("stopped",this.now()))}start(e,t,n){return super.start(e,t,n),this}_start(e,t,n){this._loop?t=Vr(t,this._loopStart):t=Vr(t,0);const i=this.toSeconds(t),r=n;n=Vr(n,Math.max(this._buffer.duration-i,0));let o=this.toSeconds(n);o=o/this._playbackRate,e=this.toSeconds(e);const a=new io({url:this._buffer,context:this.context,fadeIn:this.fadeIn,fadeOut:this.fadeOut,loop:this._loop,loopEnd:this._loopEnd,loopStart:this._loopStart,onended:this._onSourceEnd.bind(this),playbackRate:this._playbackRate}).connect(this.output);!this._loop&&!this._synced&&(this._state.cancel(e+o),this._state.setStateAtTime("stopped",e+o,{implicitEnd:!0})),this._activeSources.add(a),this._loop&&kn(r)?a.start(e,i):a.start(e,i,o-this.toSeconds(this.fadeOut))}_stop(e){const t=this.toSeconds(e);this._activeSources.forEach(n=>n.stop(t))}restart(e,t,n){return super.restart(e,t,n),this}_restart(e,t,n){this._stop(e),this._start(e,t,n)}seek(e,t){const n=this.toSeconds(t);if(this._state.getValueAtTime(n)==="started"){const i=this.toSeconds(e);this._stop(n),this._start(n,i)}return this}setLoopPoints(e,t){return this.loopStart=e,this.loopEnd=t,this}get loopStart(){return this._loopStart}set loopStart(e){this._loopStart=e,this.buffer.loaded&&hs(this.toSeconds(e),0,this.buffer.duration),this._activeSources.forEach(t=>{t.loopStart=e})}get loopEnd(){return this._loopEnd}set loopEnd(e){this._loopEnd=e,this.buffer.loaded&&hs(this.toSeconds(e),0,this.buffer.duration),this._activeSources.forEach(t=>{t.loopEnd=e})}get buffer(){return this._buffer}set buffer(e){this._buffer.set(e)}get loop(){return this._loop}set loop(e){if(this._loop!==e&&(this._loop=e,this._activeSources.forEach(t=>{t.loop=e}),e)){const t=this._state.getNextState("stopped",this.now());t&&this._state.cancel(t.time)}}get playbackRate(){return this._playbackRate}set playbackRate(e){this._playbackRate=e;const t=this.now(),n=this._state.getNextState("stopped",t);n&&n.implicitEnd&&(this._state.cancel(n.time),this._activeSources.forEach(i=>i.cancelStop())),this._activeSources.forEach(i=>{i.playbackRate.setValueAtTime(e,t)})}get reverse(){return this._buffer.reverse}set reverse(e){this._buffer.reverse=e}get loaded(){return this._buffer.loaded}dispose(){return super.dispose(),this._activeSources.forEach(e=>e.dispose()),this._activeSources.clear(),this._buffer.dispose(),this}}ei([$i(0)],ia.prototype,"fadeIn",void 0);ei([$i(0)],ia.prototype,"fadeOut",void 0);class BR extends tr{constructor(){super(...arguments),this.name="GainToAudio",this._norm=new nr({context:this.context,mapping:e=>Math.abs(e)*2-1}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}}class fi extends Se{constructor(){super(Z(fi.getDefaults(),arguments,["attack","decay","sustain","release"])),this.name="Envelope",this._sig=new lt({context:this.context,value:0}),this.output=this._sig,this.input=void 0;const e=Z(fi.getDefaults(),arguments,["attack","decay","sustain","release"]);this.attack=e.attack,this.decay=e.decay,this.sustain=e.sustain,this.release=e.release,this.attackCurve=e.attackCurve,this.releaseCurve=e.releaseCurve,this.decayCurve=e.decayCurve}static getDefaults(){return Object.assign(Se.getDefaults(),{attack:.01,attackCurve:"linear",decay:.1,decayCurve:"exponential",release:1,releaseCurve:"exponential",sustain:.5})}get value(){return this.getValueAtTime(this.now())}_getCurve(e,t){if(hi(e))return e;{let n;for(n in ic)if(ic[n][t]===e)return n;return e}}_setCurve(e,t,n){if(hi(n)&&Reflect.has(ic,n)){const i=ic[n];Xs(i)?e!=="_decayCurve"&&(this[e]=i[t]):this[e]=i}else if(wn(n)&&e!=="_decayCurve")this[e]=n;else throw new Error("Envelope: invalid curve: "+n)}get attackCurve(){return this._getCurve(this._attackCurve,"In")}set attackCurve(e){this._setCurve("_attackCurve","In",e)}get releaseCurve(){return this._getCurve(this._releaseCurve,"Out")}set releaseCurve(e){this._setCurve("_releaseCurve","Out",e)}get decayCurve(){return this._decayCurve}set decayCurve(e){Re(["linear","exponential"].some(t=>t===e),`Invalid envelope curve: ${e}`),this._decayCurve=e}triggerAttack(e,t=1){this.log("triggerAttack",e,t),e=this.toSeconds(e);let i=this.toSeconds(this.attack);const r=this.toSeconds(this.decay),o=this.getValueAtTime(e);if(o>0){const a=1/i;i=(1-o)/a}if(i<this.sampleTime)this._sig.cancelScheduledValues(e),this._sig.setValueAtTime(t,e);else if(this._attackCurve==="linear")this._sig.linearRampTo(t,i,e);else if(this._attackCurve==="exponential")this._sig.targetRampTo(t,i,e);else{this._sig.cancelAndHoldAtTime(e);let a=this._attackCurve;for(let c=1;c<a.length;c++)if(a[c-1]<=o&&o<=a[c]){a=this._attackCurve.slice(c),a[0]=o;break}this._sig.setValueCurveAtTime(a,e,i,t)}if(r&&this.sustain<1){const a=t*this.sustain,c=e+i;this.log("decay",c),this._decayCurve==="linear"?this._sig.linearRampToValueAtTime(a,r+c):this._sig.exponentialApproachValueAtTime(a,c,r)}return this}triggerRelease(e){this.log("triggerRelease",e),e=this.toSeconds(e);const t=this.getValueAtTime(e);if(t>0){const n=this.toSeconds(this.release);n<this.sampleTime?this._sig.setValueAtTime(0,e):this._releaseCurve==="linear"?this._sig.linearRampTo(0,n,e):this._releaseCurve==="exponential"?this._sig.targetRampTo(0,n,e):(Re(wn(this._releaseCurve),"releaseCurve must be either 'linear', 'exponential' or an array"),this._sig.cancelAndHoldAtTime(e),this._sig.setValueCurveAtTime(this._releaseCurve,e,n,t))}return this}getValueAtTime(e){return this._sig.getValueAtTime(e)}triggerAttackRelease(e,t,n=1){return t=this.toSeconds(t),this.triggerAttack(t,n),this.triggerRelease(t+this.toSeconds(e)),this}cancel(e){return this._sig.cancelScheduledValues(this.toSeconds(e)),this}connect(e,t=0,n=0){return rd(this,e,t,n),this}asArray(e=1024){return Ct(this,void 0,void 0,function*(){const t=e/this.context.sampleRate,n=new nd(1,t,this.context.sampleRate),i=this.toSeconds(this.attack)+this.toSeconds(this.decay),r=i+this.toSeconds(this.release),o=r*.1,a=r+o,c=new this.constructor(Object.assign(this.get(),{attack:t*this.toSeconds(this.attack)/a,decay:t*this.toSeconds(this.decay)/a,release:t*this.toSeconds(this.release)/a,context:n}));return c._sig.toDestination(),c.triggerAttackRelease(t*(i+o)/a,0),(yield n.render()).getChannelData(0)})}dispose(){return super.dispose(),this._sig.dispose(),this}}ei([$i(0)],fi.prototype,"attack",void 0);ei([$i(0)],fi.prototype,"decay",void 0);ei([M_(0,1)],fi.prototype,"sustain",void 0);ei([$i(0)],fi.prototype,"release",void 0);const ic=(()=>{let e,t;const n=[];for(e=0;e<128;e++)n[e]=Math.sin(e/(128-1)*(Math.PI/2));const i=[],r=6.4;for(e=0;e<128-1;e++){t=e/(128-1);const d=Math.sin(t*(Math.PI*2)*r-Math.PI/2)+1;i[e]=d/10+t*.83}i[128-1]=1;const o=[],a=5;for(e=0;e<128;e++)o[e]=Math.ceil(e/(128-1)*a)/a;const c=[];for(e=0;e<128;e++)t=e/(128-1),c[e]=.5*(1-Math.cos(Math.PI*t));const l=[];for(e=0;e<128;e++){t=e/(128-1);const d=Math.pow(t,3)*4+.2,f=Math.cos(d*Math.PI*2*t);l[e]=Math.abs(f*(1-t))}function u(d){const f=new Array(d.length);for(let m=0;m<d.length;m++)f[m]=1-d[m];return f}function h(d){return d.slice(0).reverse()}return{bounce:{In:u(l),Out:l},cosine:{In:n,Out:h(n)},exponential:"exponential",linear:"linear",ripple:{In:i,Out:u(i)},sine:{In:c,Out:u(c)},step:{In:o,Out:u(o)}}})();class Kn extends Se{constructor(){super(Z(Kn.getDefaults(),arguments)),this._scheduledEvents=[],this._synced=!1,this._original_triggerAttack=this.triggerAttack,this._original_triggerRelease=this.triggerRelease;const e=Z(Kn.getDefaults(),arguments);this._volume=this.output=new er({context:this.context,volume:e.volume}),this.volume=this._volume.volume,Qe(this,"volume")}static getDefaults(){return Object.assign(Se.getDefaults(),{volume:0})}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",0)),this}_syncState(){let e=!1;return this._synced||(this._synced=!0,e=!0),e}_syncMethod(e,t){const n=this["_original_"+e]=this[e];this[e]=(...i)=>{const r=i[t],o=this.context.transport.schedule(a=>{i[t]=a,n.apply(this,i)},r);this._scheduledEvents.push(o)}}unsync(){return this._scheduledEvents.forEach(e=>this.context.transport.clear(e)),this._scheduledEvents=[],this._synced&&(this._synced=!1,this.triggerAttack=this._original_triggerAttack,this.triggerRelease=this._original_triggerRelease),this}triggerAttackRelease(e,t,n,i){const r=this.toSeconds(n),o=this.toSeconds(t);return this.triggerAttack(e,r,i),this.triggerRelease(r+o),this}dispose(){return super.dispose(),this._volume.dispose(),this.unsync(),this._scheduledEvents=[],this}}class ir extends Kn{constructor(){super(Z(ir.getDefaults(),arguments));const e=Z(ir.getDefaults(),arguments);this.portamento=e.portamento,this.onsilence=e.onsilence}static getDefaults(){return Object.assign(Kn.getDefaults(),{detune:0,onsilence:rt,portamento:0})}triggerAttack(e,t,n=1){this.log("triggerAttack",e,t,n);const i=this.toSeconds(t);return this._triggerEnvelopeAttack(i,n),this.setNote(e,i),this}triggerRelease(e){this.log("triggerRelease",e);const t=this.toSeconds(e);return this._triggerEnvelopeRelease(t),this}setNote(e,t){const n=this.toSeconds(t),i=e instanceof En?e.toFrequency():e;if(this.portamento>0&&this.getLevelAtTime(n)>.05){const r=this.toSeconds(this.portamento);this.frequency.exponentialRampTo(i,r,n)}else this.frequency.setValueAtTime(i,n);return this}}ei([$i(0)],ir.prototype,"portamento",void 0);class Sl extends fi{constructor(){super(Z(Sl.getDefaults(),arguments,["attack","decay","sustain","release"])),this.name="AmplitudeEnvelope",this._gainNode=new ot({context:this.context,gain:0}),this.output=this._gainNode,this.input=this._gainNode,this._sig.connect(this._gainNode.gain),this.output=this._gainNode,this.input=this._gainNode}dispose(){return super.dispose(),this._gainNode.dispose(),this}}class Wi extends ir{constructor(){super(Z(Wi.getDefaults(),arguments)),this.name="Synth";const e=Z(Wi.getDefaults(),arguments);this.oscillator=new na(Object.assign({context:this.context,detune:e.detune,onstop:()=>this.onsilence(this)},e.oscillator)),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.envelope=new Sl(Object.assign({context:this.context},e.envelope)),this.oscillator.chain(this.envelope,this.output),Qe(this,["oscillator","frequency","detune","envelope"])}static getDefaults(){return Object.assign(ir.getDefaults(),{envelope:Object.assign(Yo(fi.getDefaults(),Object.keys(Se.getDefaults())),{attack:.005,decay:.1,release:1,sustain:.3}),oscillator:Object.assign(Yo(na.getDefaults(),[...Object.keys(Zt.getDefaults()),"frequency","detune"]),{type:"triangle"})})}_triggerEnvelopeAttack(e,t){if(this.envelope.triggerAttack(e,t),this.oscillator.start(e),this.envelope.sustain===0){const n=this.toSeconds(this.envelope.attack),i=this.toSeconds(this.envelope.decay);this.oscillator.stop(e+n+i)}}_triggerEnvelopeRelease(e){this.envelope.triggerRelease(e),this.oscillator.stop(e+this.toSeconds(this.envelope.release))}getLevelAtTime(e){return e=this.toSeconds(e),this.envelope.getValueAtTime(e)}dispose(){return super.dispose(),this.oscillator.dispose(),this.envelope.dispose(),this}}class sa extends Se{constructor(){super(Z(sa.getDefaults(),arguments,["frequency","type"])),this.name="BiquadFilter";const e=Z(sa.getDefaults(),arguments,["frequency","type"]);this._filter=this.context.createBiquadFilter(),this.input=this.output=this._filter,this.Q=new Ze({context:this.context,units:"number",value:e.Q,param:this._filter.Q}),this.frequency=new Ze({context:this.context,units:"frequency",value:e.frequency,param:this._filter.frequency}),this.detune=new Ze({context:this.context,units:"cents",value:e.detune,param:this._filter.detune}),this.gain=new Ze({context:this.context,units:"decibels",convert:!1,value:e.gain,param:this._filter.gain}),this.type=e.type}static getDefaults(){return Object.assign(Se.getDefaults(),{Q:1,type:"lowpass",frequency:350,detune:0,gain:0})}get type(){return this._filter.type}set type(e){Re(["lowpass","highpass","bandpass","lowshelf","highshelf","notch","allpass","peaking"].indexOf(e)!==-1,`Invalid filter type: ${e}`),this._filter.type=e}getFrequencyResponse(e=128){const t=new Float32Array(e);for(let o=0;o<e;o++){const c=Math.pow(o/e,2)*(2e4-20)+20;t[o]=c}const n=new Float32Array(e),i=new Float32Array(e),r=this.context.createBiquadFilter();return r.type=this.type,r.Q.value=this.Q.value,r.frequency.value=this.frequency.value,r.gain.value=this.gain.value,r.getFrequencyResponse(t,n,i),n}dispose(){return super.dispose(),this._filter.disconnect(),this.Q.dispose(),this.frequency.dispose(),this.gain.dispose(),this.detune.dispose(),this}}class jc extends Se{constructor(){super(Z(jc.getDefaults(),arguments,["frequency","type","rolloff"])),this.name="Filter",this.input=new ot({context:this.context}),this.output=new ot({context:this.context}),this._filters=[];const e=Z(jc.getDefaults(),arguments,["frequency","type","rolloff"]);this._filters=[],this.Q=new lt({context:this.context,units:"positive",value:e.Q}),this.frequency=new lt({context:this.context,units:"frequency",value:e.frequency}),this.detune=new lt({context:this.context,units:"cents",value:e.detune}),this.gain=new lt({context:this.context,units:"decibels",convert:!1,value:e.gain}),this._type=e.type,this.rolloff=e.rolloff,Qe(this,["detune","frequency","gain","Q"])}static getDefaults(){return Object.assign(Se.getDefaults(),{Q:1,detune:0,frequency:350,gain:0,rolloff:-12,type:"lowpass"})}get type(){return this._type}set type(e){Re(["lowpass","highpass","bandpass","lowshelf","highshelf","notch","allpass","peaking"].indexOf(e)!==-1,`Invalid filter type: ${e}`),this._type=e,this._filters.forEach(n=>n.type=e)}get rolloff(){return this._rolloff}set rolloff(e){const t=Hi(e)?e:parseInt(e,10),n=[-12,-24,-48,-96];let i=n.indexOf(t);Re(i!==-1,`rolloff can only be ${n.join(", ")}`),i+=1,this._rolloff=t,this.input.disconnect(),this._filters.forEach(r=>r.disconnect()),this._filters=new Array(i);for(let r=0;r<i;r++){const o=new sa({context:this.context});o.type=this._type,this.frequency.connect(o.frequency),this.detune.connect(o.detune),this.Q.connect(o.Q),this.gain.connect(o.gain),this._filters[r]=o}this._internalChannels=this._filters,ds(this.input,...this._internalChannels,this.output)}getFrequencyResponse(e=128){const t=new sa({frequency:this.frequency.value,gain:this.gain.value,Q:this.Q.value,type:this._type,detune:this.detune.value}),n=new Float32Array(e).map(()=>1);return this._filters.forEach(()=>{t.getFrequencyResponse(e).forEach((r,o)=>n[o]*=r)}),t.dispose(),n}dispose(){return super.dispose(),this._filters.forEach(e=>{e.dispose()}),td(this,["detune","frequency","gain","Q"]),this.frequency.dispose(),this.Q.dispose(),this.detune.dispose(),this.gain.dispose(),this}}class ro extends Wi{constructor(){super(Z(ro.getDefaults(),arguments)),this.name="MembraneSynth",this.portamento=0;const e=Z(ro.getDefaults(),arguments);this.pitchDecay=e.pitchDecay,this.octaves=e.octaves,Qe(this,["oscillator","envelope"])}static getDefaults(){return js(ir.getDefaults(),Wi.getDefaults(),{envelope:{attack:.001,attackCurve:"exponential",decay:.4,release:1.4,sustain:.01},octaves:10,oscillator:{type:"sine"},pitchDecay:.05})}setNote(e,t){const n=this.toSeconds(t),i=this.toFrequency(e instanceof En?e.toFrequency():e),r=i*this.octaves;return this.oscillator.frequency.setValueAtTime(r,n),this.oscillator.frequency.exponentialRampToValueAtTime(i,n+this.toSeconds(this.pitchDecay)),this}dispose(){return super.dispose(),this}}ei([M_(0)],ro.prototype,"octaves",void 0);ei([$i(0)],ro.prototype,"pitchDecay",void 0);let VR=class ih extends Kn{constructor(){super(Z(ih.getDefaults(),arguments)),this.name="NoiseSynth";const e=Z(ih.getDefaults(),arguments);this.noise=new Zo(Object.assign({context:this.context},e.noise)),this.envelope=new Sl(Object.assign({context:this.context},e.envelope)),this.noise.chain(this.envelope,this.output)}static getDefaults(){return Object.assign(Kn.getDefaults(),{envelope:Object.assign(Yo(fi.getDefaults(),Object.keys(Se.getDefaults())),{decay:.1,sustain:0}),noise:Object.assign(Yo(Zo.getDefaults(),Object.keys(Zt.getDefaults())),{type:"white"})})}triggerAttack(e,t=1){return e=this.toSeconds(e),this.envelope.triggerAttack(e,t),this.noise.start(e),this.envelope.sustain===0&&this.noise.stop(e+this.toSeconds(this.envelope.attack)+this.toSeconds(this.envelope.decay)),this}triggerRelease(e){return e=this.toSeconds(e),this.envelope.triggerRelease(e),this.noise.stop(e+this.toSeconds(this.envelope.release)),this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",0),this._syncMethod("triggerRelease",0)),this}triggerAttackRelease(e,t,n=1){return t=this.toSeconds(t),e=this.toSeconds(e),this.triggerAttack(t,n),this.triggerRelease(t+e),this}dispose(){return super.dispose(),this.noise.dispose(),this.envelope.dispose(),this}};const ld=new Set;function ud(s){ld.add(s)}function b_(s,e){const t=`registerProcessor("${s}", ${e})`;ld.add(t)}function zR(){return Array.from(ld).join(`
`)}class GR extends Se{constructor(e){super(e),this.name="ToneAudioWorklet",this.workletOptions={},this.onprocessorerror=rt;const t=URL.createObjectURL(new Blob([zR()],{type:"text/javascript"})),n=this._audioWorkletName();this._dummyGain=this.context.createGain(),this._dummyParam=this._dummyGain.gain,this.context.addAudioWorkletModule(t,n).then(()=>{this.disposed||(this._worklet=this.context.createAudioWorkletNode(n,this.workletOptions),this._worklet.onprocessorerror=this.onprocessorerror.bind(this),this.onReady(this._worklet))})}dispose(){return super.dispose(),this._dummyGain.disconnect(),this._worklet&&(this._worklet.port.postMessage("dispose"),this._worklet.disconnect()),this}}const HR=`
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
`;ud(HR);const WR=`
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
`;ud(WR);const XR=`
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
`;ud(XR);const T_="feedback-comb-filter",qR=`
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
`;b_(T_,qR);class Yc extends GR{constructor(){super(Z(Yc.getDefaults(),arguments,["delayTime","resonance"])),this.name="FeedbackCombFilter";const e=Z(Yc.getDefaults(),arguments,["delayTime","resonance"]);this.input=new ot({context:this.context}),this.output=new ot({context:this.context}),this.delayTime=new Ze({context:this.context,value:e.delayTime,units:"time",minValue:0,maxValue:1,param:this._dummyParam,swappable:!0}),this.resonance=new Ze({context:this.context,value:e.resonance,units:"normalRange",param:this._dummyParam,swappable:!0}),Qe(this,["resonance","delayTime"])}_audioWorkletName(){return T_}static getDefaults(){return Object.assign(Se.getDefaults(),{delayTime:.1,resonance:.5})}onReady(e){ds(this.input,e,this.output);const t=e.parameters.get("delayTime");this.delayTime.setParam(t);const n=e.parameters.get("feedback");this.resonance.setParam(n)}dispose(){return super.dispose(),this.input.dispose(),this.output.dispose(),this.delayTime.dispose(),this.resonance.dispose(),this}}class oo extends Kn{constructor(){super(Z(oo.getDefaults(),arguments,["voice","options"])),this.name="PolySynth",this._availableVoices=[],this._activeVoices=[],this._voices=[],this._gcTimeout=-1,this._averageActiveVoices=0;const e=Z(oo.getDefaults(),arguments,["voice","options"]);Re(!Hi(e.voice),"DEPRECATED: The polyphony count is no longer the first argument.");const t=e.voice.getDefaults();this.options=Object.assign(t,e.options),this.voice=e.voice,this.maxPolyphony=e.maxPolyphony,this._dummyVoice=this._getNextAvailableVoice();const n=this._voices.indexOf(this._dummyVoice);this._voices.splice(n,1),this._gcTimeout=this.context.setInterval(this._collectGarbage.bind(this),1)}static getDefaults(){return Object.assign(Kn.getDefaults(),{maxPolyphony:32,options:{},voice:Wi})}get activeVoices(){return this._activeVoices.length}_makeVoiceAvailable(e){this._availableVoices.push(e);const t=this._activeVoices.findIndex(n=>n.voice===e);this._activeVoices.splice(t,1)}_getNextAvailableVoice(){if(this._availableVoices.length)return this._availableVoices.shift();if(this._voices.length<this.maxPolyphony){const e=new this.voice(Object.assign(this.options,{context:this.context,onsilence:this._makeVoiceAvailable.bind(this)}));return e.connect(this.output),this._voices.push(e),e}else Jh("Max polyphony exceeded. Note dropped.")}_collectGarbage(){if(this._averageActiveVoices=Math.max(this._averageActiveVoices*.95,this.activeVoices),this._availableVoices.length&&this._voices.length>Math.ceil(this._averageActiveVoices+1)){const e=this._availableVoices.shift(),t=this._voices.indexOf(e);this._voices.splice(t,1),this.context.isOffline||e.dispose()}}_triggerAttack(e,t,n){e.forEach(i=>{const r=new Hc(this.context,i).toMidi(),o=this._getNextAvailableVoice();o&&(o.triggerAttack(i,t,n),this._activeVoices.push({midi:r,voice:o,released:!1}),this.log("triggerAttack",i,t))})}_triggerRelease(e,t){e.forEach(n=>{const i=new Hc(this.context,n).toMidi(),r=this._activeVoices.find(({midi:o,released:a})=>o===i&&!a);r&&(r.voice.triggerRelease(t),r.released=!0,this.log("triggerRelease",n,t))})}_scheduleEvent(e,t,n,i){Re(!this.disposed,"Synth was already disposed"),n<=this.now()?e==="attack"?this._triggerAttack(t,n,i):this._triggerRelease(t,n):this.context.setTimeout(()=>{this._scheduleEvent(e,t,n,i)},n-this.now())}triggerAttack(e,t,n){Array.isArray(e)||(e=[e]);const i=this.toSeconds(t);return this._scheduleEvent("attack",e,i,n),this}triggerRelease(e,t){Array.isArray(e)||(e=[e]);const n=this.toSeconds(t);return this._scheduleEvent("release",e,n),this}triggerAttackRelease(e,t,n,i){const r=this.toSeconds(n);if(this.triggerAttack(e,r,i),wn(t)){Re(wn(e),"If the duration is an array, the notes must also be an array"),e=e;for(let o=0;o<e.length;o++){const a=t[Math.min(o,t.length-1)],c=this.toSeconds(a);Re(c>0,"The duration must be greater than 0"),this.triggerRelease(e[o],r+c)}}else{const o=this.toSeconds(t);Re(o>0,"The duration must be greater than 0"),this.triggerRelease(e,r+o)}return this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1)),this}set(e){const t=Yo(e,["onsilence","context"]);return this.options=js(this.options,t),this._voices.forEach(n=>n.set(t)),this._dummyVoice.set(t),this}get(){return this._dummyVoice.get()}releaseAll(e){const t=this.toSeconds(e);return this._activeVoices.forEach(({voice:n})=>{n.triggerRelease(t)}),this}dispose(){return super.dispose(),this._dummyVoice.dispose(),this._voices.forEach(e=>e.dispose()),this._activeVoices=[],this._availableVoices=[],this.context.clearInterval(this._gcTimeout),this}}class ra extends Kn{constructor(){super(Z(ra.getDefaults(),arguments,["urls","onload","baseUrl"],"urls")),this.name="Sampler",this._activeSources=new Map;const e=Z(ra.getDefaults(),arguments,["urls","onload","baseUrl"],"urls"),t={};Object.keys(e.urls).forEach(n=>{const i=parseInt(n,10);if(Re(nc(n)||Hi(i)&&isFinite(i),`url key is neither a note or midi pitch: ${n}`),nc(n)){const r=new En(this.context,n).toMidi();t[r]=e.urls[n]}else Hi(i)&&isFinite(i)&&(t[i]=e.urls[i])}),this._buffers=new od({urls:t,onload:e.onload,baseUrl:e.baseUrl,onerror:e.onerror}),this.attack=e.attack,this.release=e.release,this.curve=e.curve,this._buffers.loaded&&Promise.resolve().then(e.onload)}static getDefaults(){return Object.assign(Kn.getDefaults(),{attack:0,baseUrl:"",curve:"exponential",onload:rt,onerror:rt,release:.1,urls:{}})}_findClosest(e){let n=0;for(;n<96;){if(this._buffers.has(e+n))return-n;if(this._buffers.has(e-n))return n;n++}throw new Error(`No available buffers for note: ${e}`)}triggerAttack(e,t,n=1){return this.log("triggerAttack",e,t,n),Array.isArray(e)||(e=[e]),e.forEach(i=>{const r=x_(new En(this.context,i).toFrequency()),o=Math.round(r),a=r-o,c=this._findClosest(o),l=o-c,u=this._buffers.get(l),h=y_(c+a),d=new io({url:u,context:this.context,curve:this.curve,fadeIn:this.attack,fadeOut:this.release,playbackRate:h}).connect(this.output);d.start(t,0,u.duration/h,n),wn(this._activeSources.get(o))||this._activeSources.set(o,[]),this._activeSources.get(o).push(d),d.onended=()=>{if(this._activeSources&&this._activeSources.has(o)){const f=this._activeSources.get(o),m=f.indexOf(d);m!==-1&&f.splice(m,1)}}}),this}triggerRelease(e,t){return this.log("triggerRelease",e,t),Array.isArray(e)||(e=[e]),e.forEach(n=>{const i=new En(this.context,n).toMidi();if(this._activeSources.has(i)&&this._activeSources.get(i).length){const r=this._activeSources.get(i);t=this.toSeconds(t),r.forEach(o=>{o.stop(t)}),this._activeSources.set(i,[])}}),this}releaseAll(e){const t=this.toSeconds(e);return this._activeSources.forEach(n=>{for(;n.length;)n.shift().stop(t)}),this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1)),this}triggerAttackRelease(e,t,n,i=1){const r=this.toSeconds(n);return this.triggerAttack(e,r,i),wn(t)?(Re(wn(e),"notes must be an array when duration is array"),e.forEach((o,a)=>{const c=t[Math.min(a,t.length-1)];this.triggerRelease(o,r+this.toSeconds(c))})):this.triggerRelease(e,r+this.toSeconds(t)),this}add(e,t,n){if(Re(nc(e)||isFinite(e),`note must be a pitch or midi: ${e}`),nc(e)){const i=new En(this.context,e).toMidi();this._buffers.add(i,t,n)}else this._buffers.add(e,t,n);return this}get loaded(){return this._buffers.loaded}dispose(){return super.dispose(),this._buffers.dispose(),this._activeSources.forEach(e=>{e.forEach(t=>t.dispose())}),this._activeSources.clear(),this}}ei([$i(0)],ra.prototype,"attack",void 0);ei([$i(0)],ra.prototype,"release",void 0);class oa extends Se{constructor(){super(Object.assign(Z(oa.getDefaults(),arguments,["fade"]))),this.name="CrossFade",this._panner=this.context.createStereoPanner(),this._split=this.context.createChannelSplitter(2),this._g2a=new BR({context:this.context}),this.a=new ot({context:this.context,gain:0}),this.b=new ot({context:this.context,gain:0}),this.output=new ot({context:this.context}),this._internalChannels=[this.a,this.b];const e=Z(oa.getDefaults(),arguments,["fade"]);this.fade=new lt({context:this.context,units:"normalRange",value:e.fade}),Qe(this,"fade"),this.context.getConstant(1).connect(this._panner),this._panner.connect(this._split),this._panner.channelCount=1,this._panner.channelCountMode="explicit",di(this._split,this.a.gain,0),di(this._split,this.b.gain,1),this.fade.chain(this._g2a,this._panner.pan),this.a.connect(this.output),this.b.connect(this.output)}static getDefaults(){return Object.assign(Se.getDefaults(),{fade:.5})}dispose(){return super.dispose(),this.a.dispose(),this.b.dispose(),this.output.dispose(),this.fade.dispose(),this._g2a.dispose(),this._panner.disconnect(),this._split.disconnect(),this}}class $c extends Se{constructor(e){super(e),this.name="Effect",this._dryWet=new oa({context:this.context}),this.wet=this._dryWet.fade,this.effectSend=new ot({context:this.context}),this.effectReturn=new ot({context:this.context}),this.input=new ot({context:this.context}),this.output=this._dryWet,this.input.fan(this._dryWet.a,this.effectSend),this.effectReturn.connect(this._dryWet.b),this.wet.setValueAtTime(e.wet,0),this._internalChannels=[this.effectReturn,this.effectSend],Qe(this,"wet")}static getDefaults(){return Object.assign(Se.getDefaults(),{wet:1})}connectEffect(e){return this._internalChannels.push(e),this.effectSend.chain(e,this.effectReturn),this}dispose(){return super.dispose(),this._dryWet.dispose(),this.effectSend.dispose(),this.effectReturn.dispose(),this.wet.dispose(),this}}class Kc extends Se{constructor(){super(Object.assign(Z(Kc.getDefaults(),arguments,["pan"]))),this.name="Panner",this._panner=this.context.createStereoPanner(),this.input=this._panner,this.output=this._panner;const e=Z(Kc.getDefaults(),arguments,["pan"]);this.pan=new Ze({context:this.context,param:this._panner.pan,value:e.pan,minValue:-1,maxValue:1}),this._panner.channelCount=e.channelCount,this._panner.channelCountMode="explicit",Qe(this,"pan")}static getDefaults(){return Object.assign(Se.getDefaults(),{pan:0,channelCount:1})}dispose(){return super.dispose(),this._panner.disconnect(),this.pan.dispose(),this}}const jR="bit-crusher",YR=`
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
`;b_(jR,YR);class ao extends $c{constructor(){super(Z(ao.getDefaults(),arguments,["order"])),this.name="Chebyshev";const e=Z(ao.getDefaults(),arguments,["order"]);this._shaper=new nr({context:this.context,length:4096}),this._order=e.order,this.connectEffect(this._shaper),this.order=e.order,this.oversample=e.oversample}static getDefaults(){return Object.assign($c.getDefaults(),{order:1,oversample:"none"})}_getCoefficient(e,t,n){return n.has(t)||(t===0?n.set(t,0):t===1?n.set(t,e):n.set(t,2*e*this._getCoefficient(e,t-1,n)-this._getCoefficient(e,t-2,n))),n.get(t)}get order(){return this._order}set order(e){this._order=e,this._shaper.setMap(t=>this._getCoefficient(t,e,new Map))}get oversample(){return this._shaper.oversample}set oversample(e){this._shaper.oversample=e}dispose(){return super.dispose(),this._shaper.dispose(),this}}class Zc extends Se{constructor(){super(Z(Zc.getDefaults(),arguments,["channels"])),this.name="Split";const e=Z(Zc.getDefaults(),arguments,["channels"]);this._splitter=this.input=this.output=this.context.createChannelSplitter(e.channels),this._internalChannels=[this._splitter]}static getDefaults(){return Object.assign(Se.getDefaults(),{channels:2})}dispose(){return super.dispose(),this._splitter.disconnect(),this}}class Qc extends Se{constructor(){super(Z(Qc.getDefaults(),arguments,["channels"])),this.name="Merge";const e=Z(Qc.getDefaults(),arguments,["channels"]);this._merger=this.output=this.input=this.context.createChannelMerger(e.channels)}static getDefaults(){return Object.assign(Se.getDefaults(),{channels:2})}dispose(){return super.dispose(),this._merger.disconnect(),this}}class Hp extends Se{constructor(e){super(e),this.name="StereoEffect",this.input=new ot({context:this.context}),this.input.channelCount=2,this.input.channelCountMode="explicit",this._dryWet=this.output=new oa({context:this.context,fade:e.wet}),this.wet=this._dryWet.fade,this._split=new Zc({context:this.context,channels:2}),this._merge=new Qc({context:this.context,channels:2}),this.input.connect(this._split),this.input.connect(this._dryWet.a),this._merge.connect(this._dryWet.b),Qe(this,["wet"])}connectEffectLeft(...e){this._split.connect(e[0],0,0),ds(...e),di(e[e.length-1],this._merge,0,0)}connectEffectRight(...e){this._split.connect(e[0],1,0),ds(...e),di(e[e.length-1],this._merge,0,1)}static getDefaults(){return Object.assign(Se.getDefaults(),{wet:1})}dispose(){return super.dispose(),this._dryWet.dispose(),this._split.dispose(),this._merge.dispose(),this}}class Wp extends $c{constructor(e){super(e),this.name="FeedbackEffect",this._feedbackGain=new ot({context:this.context,gain:e.feedback,units:"normalRange"}),this.feedback=this._feedbackGain.gain,Qe(this,"feedback"),this.effectReturn.chain(this._feedbackGain,this.effectSend)}static getDefaults(){return Object.assign($c.getDefaults(),{feedback:.125})}dispose(){return super.dispose(),this._feedbackGain.dispose(),this.feedback.dispose(),this}}class Jc extends Wp{constructor(){super(Z(Jc.getDefaults(),arguments,["delayTime","feedback"])),this.name="FeedbackDelay";const e=Z(Jc.getDefaults(),arguments,["delayTime","feedback"]);this._delayNode=new Gc({context:this.context,delayTime:e.delayTime,maxDelay:e.maxDelay}),this.delayTime=this._delayNode.delayTime,this.connectEffect(this._delayNode),Qe(this,"delayTime")}static getDefaults(){return Object.assign(Wp.getDefaults(),{delayTime:.25,maxDelay:1})}dispose(){return super.dispose(),this._delayNode.dispose(),this.delayTime.dispose(),this}}const Xp=[1687/25e3,1601/25e3,2053/25e3,2251/25e3],$R=[.773,.802,.753,.733],KR=[347,113,37];class aa extends Hp{constructor(){super(Z(aa.getDefaults(),arguments,["roomSize"])),this.name="JCReverb",this._allpassFilters=[],this._feedbackCombFilters=[];const e=Z(aa.getDefaults(),arguments,["roomSize"]);this.roomSize=new lt({context:this.context,value:e.roomSize,units:"normalRange"}),this._scaleRoomSize=new qc({context:this.context,min:-.733,max:.197}),this._allpassFilters=KR.map(t=>{const n=this.context.createBiquadFilter();return n.type="allpass",n.frequency.value=t,n}),this._feedbackCombFilters=Xp.map((t,n)=>{const i=new Yc({context:this.context,delayTime:t});return this._scaleRoomSize.connect(i.resonance),i.resonance.value=$R[n],n<Xp.length/2?this.connectEffectLeft(...this._allpassFilters,i):this.connectEffectRight(...this._allpassFilters,i),i}),this.roomSize.connect(this._scaleRoomSize),Qe(this,["roomSize"])}static getDefaults(){return Object.assign(Hp.getDefaults(),{roomSize:.5})}dispose(){return super.dispose(),this._allpassFilters.forEach(e=>e.disconnect()),this._feedbackCombFilters.forEach(e=>e.dispose()),this.roomSize.dispose(),this._scaleRoomSize.dispose(),this}}class Mt extends Se{constructor(){super(Z(Mt.getDefaults(),arguments,["solo"])),this.name="Solo";const e=Z(Mt.getDefaults(),arguments,["solo"]);this.input=this.output=new ot({context:this.context}),Mt._allSolos.has(this.context)||Mt._allSolos.set(this.context,new Set),Mt._allSolos.get(this.context).add(this),this.solo=e.solo}static getDefaults(){return Object.assign(Se.getDefaults(),{solo:!1})}get solo(){return this._isSoloed()}set solo(e){e?this._addSolo():this._removeSolo(),Mt._allSolos.get(this.context).forEach(t=>t._updateSolo())}get muted(){return this.input.gain.value===0}_addSolo(){Mt._soloed.has(this.context)||Mt._soloed.set(this.context,new Set),Mt._soloed.get(this.context).add(this)}_removeSolo(){Mt._soloed.has(this.context)&&Mt._soloed.get(this.context).delete(this)}_isSoloed(){return Mt._soloed.has(this.context)&&Mt._soloed.get(this.context).has(this)}_noSolos(){return!Mt._soloed.has(this.context)||Mt._soloed.has(this.context)&&Mt._soloed.get(this.context).size===0}_updateSolo(){this._isSoloed()?this.input.gain.value=1:this._noSolos()?this.input.gain.value=1:this.input.gain.value=0}dispose(){return super.dispose(),Mt._allSolos.get(this.context).delete(this),this._removeSolo(),this}}Mt._allSolos=new Map;Mt._soloed=new Map;class el extends Se{constructor(){super(Z(el.getDefaults(),arguments,["pan","volume"])),this.name="PanVol";const e=Z(el.getDefaults(),arguments,["pan","volume"]);this._panner=this.input=new Kc({context:this.context,pan:e.pan,channelCount:e.channelCount}),this.pan=this._panner.pan,this._volume=this.output=new er({context:this.context,volume:e.volume}),this.volume=this._volume.volume,this._panner.connect(this._volume),this.mute=e.mute,Qe(this,["pan","volume"])}static getDefaults(){return Object.assign(Se.getDefaults(),{mute:!1,pan:0,volume:0,channelCount:1})}get mute(){return this._volume.mute}set mute(e){this._volume.mute=e}dispose(){return super.dispose(),this._panner.dispose(),this.pan.dispose(),this._volume.dispose(),this.volume.dispose(),this}}class Ns extends Se{constructor(){super(Z(Ns.getDefaults(),arguments,["volume","pan"])),this.name="Channel";const e=Z(Ns.getDefaults(),arguments,["volume","pan"]);this._solo=this.input=new Mt({solo:e.solo,context:this.context}),this._panVol=this.output=new el({context:this.context,pan:e.pan,volume:e.volume,mute:e.mute,channelCount:e.channelCount}),this.pan=this._panVol.pan,this.volume=this._panVol.volume,this._solo.connect(this._panVol),Qe(this,["pan","volume"])}static getDefaults(){return Object.assign(Se.getDefaults(),{pan:0,volume:0,mute:!1,solo:!1,channelCount:1})}get solo(){return this._solo.solo}set solo(e){this._solo.solo=e}get muted(){return this._solo.muted||this.mute}get mute(){return this._panVol.mute}set mute(e){this._panVol.mute=e}_getBus(e){return Ns.buses.has(e)||Ns.buses.set(e,new ot({context:this.context})),Ns.buses.get(e)}send(e,t=0){const n=this._getBus(e),i=new ot({context:this.context,units:"decibels",gain:t});return this.connect(i),i.connect(n),i}receive(e){return this._getBus(e).connect(this),this}dispose(){return super.dispose(),this._panVol.dispose(),this.pan.dispose(),this.volume.dispose(),this._solo.dispose(),this}}Ns.buses=new Map;class ZR extends Se{constructor(){super(...arguments),this.name="Listener",this.positionX=new Ze({context:this.context,param:this.context.rawContext.listener.positionX}),this.positionY=new Ze({context:this.context,param:this.context.rawContext.listener.positionY}),this.positionZ=new Ze({context:this.context,param:this.context.rawContext.listener.positionZ}),this.forwardX=new Ze({context:this.context,param:this.context.rawContext.listener.forwardX}),this.forwardY=new Ze({context:this.context,param:this.context.rawContext.listener.forwardY}),this.forwardZ=new Ze({context:this.context,param:this.context.rawContext.listener.forwardZ}),this.upX=new Ze({context:this.context,param:this.context.rawContext.listener.upX}),this.upY=new Ze({context:this.context,param:this.context.rawContext.listener.upY}),this.upZ=new Ze({context:this.context,param:this.context.rawContext.listener.upZ})}static getDefaults(){return Object.assign(Se.getDefaults(),{positionX:0,positionY:0,positionZ:0,forwardX:0,forwardY:0,forwardZ:-1,upX:0,upY:1,upZ:0})}dispose(){return super.dispose(),this.positionX.dispose(),this.positionY.dispose(),this.positionZ.dispose(),this.forwardX.dispose(),this.forwardY.dispose(),this.forwardZ.dispose(),this.upX.dispose(),this.upY.dispose(),this.upZ.dispose(),this}}vl(s=>{s.listener=new ZR({context:s})});yl(s=>{s.listener.dispose()});Wn().transport;Wn().destination;Wn().destination;Wn().listener;Wn().draw;Wn();let tl=!1;window.addEventListener("pointerup",async()=>{tl||(await wR(),tl=!0,console.log("audio is ready"))});const hd={C:[16.35,32.7,65.41,130.81,261.63,523.25,1046.5,2093,4186.01],Db:[17.32,34.65,69.3,138.59,277.18,554.37,1108.73,2217.46,4434.92],D:[18.35,36.71,73.42,146.83,293.66,587.33,1174.66,2349.32,4698.64],Eb:[19.45,38.89,77.78,155.56,311.13,622.25,1244.51,2489.02,4978.03],E:[20.6,41.2,82.41,164.81,329.63,659.26,1318.51,2637.02],F:[21.83,43.65,87.31,174.61,349.23,698.46,1396.91,2793.83],Gb:[23.12,46.25,92.5,185,369.99,739.99,1479.98,2959.96],G:[24.5,49,98,196,392,783.99,1567.98,3135.96],Ab:[25.96,51.91,103.83,207.65,415.3,830.61,1661.22,3322.44],A:[27.5,55,110,220,440,880,1760,3520],Bb:[29.14,58.27,116.54,233.08,466.16,932.33,1864.66,3729.31],B:[30.87,61.74,123.47,246.94,493.88,987.77,1975.53,3951.07]};let dd=hd.A[2];const Ro={tonic:"A",octave:2},QR=[0,2,4,7,9],E_=[0,3,5,6,7,10],JR=[0,3,5,7,10],eI=[0,2,4,5,7,9,11],tI=[0,2,3,5,7,9,11],nI=[0,2,3,5,7,8,10],Ar={majorPentatonic:QR,bluesScale:E_,minorPentatonic:JR,majorScale:eI,melodicMinorScale:tI,naturalMinorScale:nI};let an=E_;function iI(s){let e=s.length,t;for(;e>0;)t=Math.floor(Math.random()*e),e--,[s[e],s[t]]=[s[t],s[e]];return s}function fd(s,e){return(s%e+e)%e}const sI=new Wi().toDestination(),co=["amsine","amsine2","amsquare","amtriangle","amsawtooth"],nl=["white","brown","pink"];let rI=function(s){s.callbacks===void 0&&(s.callbacks=[]),s.eventOnModify=function(e,t){s[e]=t,s.callbacks!==void 0&&s.callbacks.length>0&&s.callbacks.forEach(n=>n(e))},s.addOnModifyEventListener=function(e){if(s.callbacks===void 0)throw"addModifyEventListener: Array Modify Event Not Initialized";s.callbacks.includes(e)||s.callbacks.push(e)}};const oI=function(){const s=new aa().toDestination(),e=new ao(50).connect(s),t=new oo(Wi,{oscillator:{type:"amtriangle",harmonicity:.5,modulationType:"sine"}}).connect(e);this.name="BasicSynth",this.parameters={volume:{value:-15,min:-50,max:-5},attack:{value:.05,min:.005,max:3},decay:{value:.5,min:.01,max:4},harmonicity:{value:3,min:.01,max:5},waveform:{value:0,min:0,max:co.length-1},distortion:{value:1,min:1,max:100},reverb:{value:0,min:0,max:1}},this.parameterNames=["volume","attack","decay","harmonicity","waveform","distortion","reverb"],this.modifyParameter01=function(n,i){this.parameters[n].default===void 0&&(this.parameters[n].default=this.parameters[n].value),this.parameters[n].value=et.lerp(this.parameters[n].min,this.parameters[n].max,i)},this.modifyParameter=function(n,i){this.parameters[n].default===void 0&&(this.parameters[n].default=this.parameters[n].value),this.parameters[n].value=i},this.getDefault01=function(n){return(this.parameters[n].value-this.parameters[n].min)/(this.parameters[n].max-this.parameters[n].min)},this.play=function(n,i){const r=dd*Math.pow(2,Math.floor(n/an.length)+an[fd(n,an.length)]/12);t._voices.length>0,t.volume.value=this.parameters.volume.value,e.order=Math.floor(this.parameters.distortion.value),s.roomSize.value=this.parameters.reverb.value,t.set({oscillator:{harmonicity:this.parameters.harmonicity.value,type:co[Math.floor(this.parameters.waveform.value)]},envelope:{attack:this.parameters.attack.value,decay:this.parameters.decay.value,sustain:0,release:0}}),console.log(this.parameters),t.triggerAttackRelease(r,this.parameters.decay.value+this.parameters.attack.value)}},aI=function(){const s=new aa().toDestination(),e=new ao(50).connect(s),t=new oo(Wi,{oscillator:{type:"amsawtooth",harmonicity:.5,modulationType:"triangle"}}).connect(e);this.name="BasicSynth",this.parameters={volume:{value:-15,min:-50,max:-5},attack:{value:.05,min:.005,max:3},decay:{value:.5,min:.01,max:4},harmonicity:{value:3,min:.01,max:5},waveform:{value:0,min:0,max:co.length-1},distortion:{value:1,min:1,max:100},reverb:{value:0,min:0,max:1}},this.parameterNames=["volume","attack","decay","harmonicity","waveform","distortion","reverb"],this.modifyParameter01=function(n,i){this.parameters[n].default===void 0&&(this.parameters[n].default=this.parameters[n].value),this.parameters[n].value=et.lerp(this.parameters[n].min,this.parameters[n].max,i)},this.modifyParameter=function(n,i){this.parameters[n].default===void 0&&(this.parameters[n].default=this.parameters[n].value),this.parameters[n].value=i},this.getDefault01=function(n){return(this.parameters[n].value-this.parameters[n].min)/(this.parameters[n].max-this.parameters[n].min)},this.play=function(n,i){const r=dd*Math.pow(2,Math.floor(n/an.length)+an[fd(n,an.length)]/12);t._voices.length>0,t.volume.value=this.parameters.volume.value,e.order=Math.floor(this.parameters.distortion.value),s.roomSize.value=this.parameters.reverb.value,t.set({oscillator:{harmonicity:this.parameters.harmonicity.value,type:co[Math.floor(this.parameters.waveform.value)]},envelope:{attack:this.parameters.attack.value,decay:this.parameters.decay.value,sustain:0,release:0}}),t.triggerAttackRelease(r,this.parameters.decay.value+this.parameters.attack.value)}},cI=function(){const s=new jc({frequency:11e3,type:"highpass"}).toDestination(),e=new VR().connect(s);console.log(e),this.name="NoiseSynth",this.parameters={volume:{value:-15,min:-50,max:-5},attack:{value:.05,min:.005,max:3},decay:{value:.5,min:.01,max:4},noiseType:{value:0,min:0,max:nl.length-1},cutOffFrequency:{value:11e3,min:100,max:2e4},playbackRate:{value:1,min:.05,max:3}},this.parameterNames=["volume","attack","decay","noiseType","cutOffFrequency","playbackRate"],this.modifyParameter01=function(t,n){this.parameters[t].default===void 0&&(this.parameters[t].default=this.parameters[t].value),this.parameters[t].value=et.lerp(this.parameters[t].min,this.parameters[t].max,n)},this.modifyParameter=function(t,n){this.parameters[t].default===void 0&&(this.parameters[t].default=this.parameters[t].value),this.parameters[t].value=n},this.getDefault01=function(t){return(this.parameters[t].value-this.parameters[t].min)/(this.parameters[t].max-this.parameters[t].min)},this.play=function(t,n){e.volume.value=this.parameters.volume.value,s.frequency.value=this.parameters.cutOffFrequency.value,e.noise.noiseType=nl[Math.floor(this.parameters.noiseType.value)],e.noise.playbackRate=this.parameters.playbackRate.value,e.envelope.set({attack:this.parameters.attack.value,decay:this.parameters.decay.value,sustain:0,release:0}),e.triggerAttackRelease(this.parameters.attack.value+this.parameters.decay.value)}},lI=function(){const s=new Jc().toDestination(),e=new ao(50).connect(s).toDestination(),t=new oo(ro).connect(e);this.name="Membrane",this.parameters={volume:{value:-15,min:-50,max:-5},attack:{value:.001,min:.001,max:1.5},pitchDecay:{value:.05,min:.01,max:1.5},octaves:{value:10,min:1,max:20},distortion:{value:1,min:1,max:100},delayTime:{value:.1,min:0,max:1},feedback:{value:0,min:0,max:1}},this.parameterNames=["volume","attack","pitchDecay","octaves","distortion","delayTime","feedback"],this.modifyParameter01=function(n,i){this.parameters[n].default===void 0&&(this.parameters[n].default=this.parameters[n].value),this.parameters[n].value=et.lerp(this.parameters[n].min,this.parameters[n].max,i)},this.modifyParameter=function(n,i){this.parameters[n].default===void 0&&(this.parameters[n].default=this.parameters[n].value),this.parameters[n].value=i},this.getDefault01=function(n){return(this.parameters[n].value-this.parameters[n].min)/(this.parameters[n].max-this.parameters[n].min)},this.play=function(n,i){const r=hd.C[0]*Math.pow(2,Math.floor(n/an.length)+an[fd(n,an.length)]/12);e.order=Math.floor(this.parameters.distortion.value),s.delayTime.value=this.parameters.delayTime.value,s.feedback.value=this.parameters.feedback.value,t.volume.value=this.parameters.volume.value,t.set({octaves:Math.floor(this.parameters.octaves.value),envelope:{attack:this.parameters.attack.value,decay:this.parameters.pitchDecay.value,sustain:0,release:0}}),t.triggerAttackRelease(r,this.parameters.attack.value+this.parameters.pitchDecay.value)}};class uI{#e=4;melody=[];availableMelody=[{notes:[]},{notes:[]},{notes:[]},{notes:[]}];instruments=[new oI,new aI,new lI,new cI];#t=0;#n=0;constructor(e){this.#e=e,this.melodyInstrumentID=new Array(e*40).fill(4),rI(this.melodyInstrumentID),this.activeEffectID=[],this.melodyPlaySequence=[],this.availableIds=[],this.availableEffectIds=[];for(let t=0;t<e*40;t++)this.availableEffectIds.push({effect:-1-Math.floor(t/40),id_on_beat:t%40});iI(this.availableEffectIds),this.melody=new Array(this.#e);for(let t=0;t<this.#e;t++)this.melody[t]={instances:[]}}getMelodyData(e){var t={name:e,scale:"",Synth1:{},Synth2:{},Synth3:{},Synth4:{},melody:[]};Object.keys(Ar).forEach(n=>{Ar[n]===an&&(t.scale=n)}),console.log(t.scale);for(let n=0;n<4;n++){const i=this.instruments[n];t[`Synth${n+1}`].parameters={},Object.keys(i.parameters).forEach(r=>{t[`Synth${n+1}`].parameters[r]=i.parameters[r].value})}return this.melody.forEach((n,i)=>{n.instances.forEach((r,o)=>{t.melody.push({beat:i,id_on_beat:r.id_on_beat,instrument:r.instrument,pitch:r.pitch})})}),t}setActiveScale(e){an=Ar[e]}getActiveScale(){return Object.keys(Ar).forEach(e=>{if(Ar[e]===an)return e}),"bluesScale"}setTonicAndOctave(e,t){e!==void 0&&(Ro.tonic=e),t!==void 0&&(Ro.octave=t),dd=hd[Ro.tonic][Ro.octave]}getCurrentTonicAndOctave(){return Ro}setMelodyFromJsonData(e,t=!1){e.scale!==void 0&&(an=Ar[e.scale]),console.log(an);for(let n=0;n<4;n++){const i=this.instruments[n];Object.keys(i.parameters).forEach(r=>{e[`Synth${n+1}`].parameters[r]!==void 0&&(console.log(r),console.log(e[`Synth${n+1}`].parameters[r]),i.modifyParameter(r,e[`Synth${n+1}`].parameters[r]))})}this.#t=0,e.melody.forEach(n=>{t?this.addInstrumentOnPosition(n.instrument,n.beat,n.id_on_beat,n.pitch):this.availableMelody[n.instrument].notes.push({beat:n.beat,id_on_beat:n.id_on_beat,pitch:n.pitch}),this.#t++})}resetMelody(){for(let e=0;e<4;e++){const t=this.instruments[e];Object.keys(t.parameters).forEach(n=>{console.log(t.parameterNames[n]),console.log(t.parameters[n].default),console.log(t.parameters[n].value),t.parameters[n].default!==void 0&&(t.parameters[n].value=t.parameters[n].default)})}for(let e=0;e<this.#e;e++)this.melody[e].instances.length=0;console.log(this.melody),this.melodyInstrumentID.fill(4);for(let e=0;e<this.melodyInstrumentID.length;e++)this.melodyInstrumentID.eventOnModify(e,4);this.activeEffectID.length=0,console.log(this.activeEffectID),this.availableMelody=[{notes:[]},{notes:[]},{notes:[]},{notes:[]}],this.#t=1,this.#n=0}addInstrumentOnPosition(e,t,n,i){this.melodyInstrumentID.eventOnModify(t*40+n,e);let r;if(this.melody[t].instances.forEach((a,c)=>{a.id_on_beat===n&&(r=c,a.instrument=e)}),e===4){r!==void 0&&this.melody[t].instances.splice(r,1);return}else if(r!==void 0)return this.melody[t].instances[r];this.availableIds.includes(t*40+n)||this.availableIds.push(t*40+n);const o={id_on_beat:n,instrument:e,effect:-1-t,played_at:-1,pitch:i};return this.melody[t].instances.push(o),o}addInstrumentOnRandomAvailablePosition(e){if(this.availableMelody[e].notes.length===0){console.log("no available ids");return}const t=this.availableMelody[e].notes.pop(),n={id_on_beat:t.id_on_beat,instrument:e,effect:-1-t.beat,played_at:-1,pitch:t.pitch};this.melody[t.beat].instances.push(n),this.#n++,this.melodyInstrumentID.eventOnModify(t.beat*40+t.id_on_beat,e)}getProgress(){return this.#n/this.#t}addEffectOnRandomAvailablePosition(e,t){if(this.availableEffectIds.length===0){console.log("no available ids");return}const n=this.availableEffectIds.pop(),i=-1-n.effect,r=n.id_on_beat%40;this.activeEffectID.push({beat:i,id_on_beat:r,effect:e,color:t})}addEffectOnPosition(e,t,n,i,r){let o;if(this.melody[t].instances.forEach((c,l)=>{c.id_on_beat===n&&(o=c,c.effect[e]=i)}),!o)return;let a=!1;return this.activeEffectID.forEach((c,l)=>{c.beat===t&&c.id_on_beat===n&&(a=!0,c.effect=e,c.color=r)}),a||this.activeEffectID.push({beat:t,id_on_beat:n,effect:e,color:r}),o}playInstrumentAt(e,t=1){let n=this.instruments[e.instrument];tl&&(Math.floor(Math.random()*an.length),t>.5?t=0:t=Math.floor((1-t/.5)*10),n.play(e.pitch-t,e.effect))}playEmptyInstrument(){tl&&sI.triggerAttackRelease(30,.01)}flattenMelody(){let e=[];return this.melody.forEach(t=>{t.beat.forEach(n=>{e.push(n)})}),e}}const hI=s=>{const e=s.clock.getDelta();return s.paused||document.hidden||e>.5?(s.time.delta=0,s):(s.time.delta=e,s.time.elapsed=s.clock.elapsedTime,s)},dI=s=>(s.composer.render(s.scene,s.camera),s),fI=fg([Jr,gg]),pI=s=>1/(1+s+.48*s*s+.235*s*s*s);function pu(s,e,t,n=.25,i=.01,r=1/0,o=pI,a=.001){const c="velocity_"+e;if(s.__damp===void 0&&(s.__damp={}),s.__damp[c]===void 0&&(s.__damp[c]=0),Math.abs(s[e]-t)<=a)return s[e]=t,!1;n=Math.max(1e-4,n);const l=2/n,u=o(l*i);let h=s[e]-t;const d=t,f=r*n;h=Math.min(Math.max(h,-f),f),t=s[e]-h;const m=(s.__damp[c]+l*h)*i;s.__damp[c]=(s.__damp[c]-l*m)*u;let _=t+(h+m)*u;return d-s[e]>0==_>d&&(_=d,s.__damp[c]=(_-d)/i),s[e]=_,!0}const sc=new P;let qp,jp,Yp;function mu(s,e,t,n,i,r,o){return sc.copy(e),qp=pu(s,"x",sc.x,t,n,i,r,o),jp=pu(s,"y",sc.y,t,n,i,r,o),Yp=pu(s,"z",sc.z,t,n,i,r,o),qp||jp||Yp}const Ii=new P,gu=new P,mI=s=>{const e=fI(s);for(let t=0;t<e.length;t++){const n=e[t],i=s.objects.get(n);s.win||(s.Input.current_input.mouseMove&&(i.userData.dirV.x+=s.Input.current_input.diffX*2*3.14,i.userData.dirV.y-=s.Input.current_input.diffY*2*3.14),i.userData.dirV.x+=s.Input.current_input.MoveDir.x/8/3.14,i.userData.dirV.y+=s.Input.current_input.MoveDir.y/8/3.14);const r=s.Curve.pos.clone();Ii.copy(i.userData.dirV);let o=Math.max(.5,1-Ii.length());Ii.copy(s.Curve.biNormal.clone().multiplyScalar(Ii.x).add(s.Curve.normal.clone().multiplyScalar(Ii.y))),Ii.multiplyScalar(1-o),s.GlobalParameters.speed=i.userData.speed*o,i.userData.offset.add(Ii.clone().multiplyScalar(3.5*s.time.delta)).clampLength(0,.5),s.Input.current_input.mouseMove||mu(i.userData.dirV,gu.set(0,0,0),.25,s.time.delta),(s.win===!0||s.editMode===!0&&!s.Input.current_input.mouseMove)&&(mu(i.userData.dirV,gu.set(0,0,0),.25,s.time.delta),mu(i.userData.offset,gu.set(0,0,0),.25,s.time.delta)),i.position.copy(r.add(i.userData.offset)),Ii.add(s.Curve.tangent.clone().multiplyScalar(o)),i.up.copy(s.Curve.normal),i.lookAt(r.clone().add(Ii))}return s},gI=fg([Jr,_g]),_I=s=>{const e=gI(s);for(let t=0;t<e.length;t++){const n=e[t],i=s.objects.get(n),r=s.Curve.normal.clone();i.position.copy(s.camera.position.clone().add(s.Curve.tangent.clone().multiplyScalar(.01))),i.position.add(r.clone().multiplyScalar(-.08)),i.up.copy(r.clone().multiplyScalar(-1)),i.lookAt(s.Curve.pos.clone().sub(s.Curve.tangent).sub(r.multiplyScalar(.2)))}return s};function rc(s,e){s.enabled=!0,s.setEffectiveTimeScale(1),s.setEffectiveWeight(e)}function $p(s,e,t){return Math.min(Math.max(s,e),t)}const vI=s=>{const e=s.camera,t=$p(e.userData.dirV.x,-1,1),n=$p(e.userData.dirV.y,-1,1),i=t<0?-t:0,r=t>0?t:0;rc(s.hand_actions[1],i),rc(s.hand_actions[2],r);const o=n>0?n:0,a=n<0?-n:0;return rc(s.hand_actions[3],o),rc(s.hand_actions[4],a),s.mixer.update(s.time.delta),s},Ir=4,Gr=1024,Ft=4,oc=new Ue;new P(1,1,1);let Ls;function yI(s=1){const e=new Float32Array(Gr*Ft*s*Ir),t=new Xm(e,Gr,Ft*s,Tn,oi);return t.wrapS=pn,t.wrapY=pn,t.magFilter=Rt,t.needsUpdate=!0,t}function xI(s,e,t=0,n=void 0,i){e.computeFrenetFramesLookingAtPreviuos===void 0&&(e.computeFrenetFramesLookingAtPreviuos=function(c,l,u,h){new P;const d=[],f=[],m=[],_=new P,g=new Ue;for(let x=0;x<=c;x++){const v=x/c;d[x]=this.getTangentAt(v,new P)}f[0]=u,m[0]=h;function p(x,v,M){return Math.max(v,Math.min(M,x))}for(let x=1;x<=c;x++){if(f[x]=f[x-1].clone(),m[x]=m[x-1].clone(),_.crossVectors(d[x-1],d[x]),_.length()>Number.EPSILON){_.normalize();const v=Math.acos(p(d[x-1].dot(d[x]),-1,1));f[x].applyMatrix4(g.makeRotationAxis(_,v))}m[x].crossVectors(d[x],f[x])}if(l===!0){let x=Math.acos(p(f[0].dot(f[c]),-1,1));x/=c,d[0].dot(_.crossVectors(f[0],f[c]))>0&&(x=-x);for(let v=1;v<=c;v++)f[v].applyMatrix4(g.makeRotationAxis(d[v],x*v)),m[v].crossVectors(d[v],f[v])}return{tangents:d,normals:f,binormals:m}});const r=Math.floor(Gr*(Ft/4));e.arcLengthDivisions=r/2,e.updateArcLengths();const o=e.getSpacedPoints(r);let a;n===void 0&&t===0?a=e.computeFrenetFrames(r,!1):(n===void 0&&(n=t-1),a=e.computeFrenetFramesLookingAtPreviuos(r,!1,i[n].normals[r-1],i[n].binormals[r-1])),a.points=o,i[t]=a;for(let c=0;c<r;c++){const l=Math.floor(c/Gr),u=c%Gr;let h=a.points[c];ac(s,u,h.x,h.y,h.z,0+l+Ft*t),h=a.tangents[c],ac(s,u,h.x,h.y,h.z,1+l+Ft*t),h=a.normals[c],ac(s,u,h.x,h.y,h.z,2+l+Ft*t),h=a.binormals[c],ac(s,u,h.x,h.y,h.z,3+l+Ft*t)}s.needsUpdate=!0}function ac(s,e,t,n,i,r){const o=s.image,{data:a}=o,c=Ir*Gr*r;a[e*Ir+c+0]=t,a[e*Ir+c+1]=n,a[e*Ir+c+2]=i,a[e*Ir+c+3]=1}function SI(s){return{spineTexture:{value:s},pathOffset:{type:"f",value:0},pathSegment:{type:"f",value:1},spineOffset:{type:"f",value:0},spineLength:{type:"f",value:.01},flow:{type:"i",value:1},time:{type:"f",value:0},colors:{value:[.8,.8,.8,.1,0,.3,1,1,1,.7,.2,.2,.2,.2,.6]}}}function zi(s,e,t,n){s.setAttribute(e.toString(),new wc(new Int32Array(t),n)),s.attributes[e.toString()].setUsage(hh),s.attributes[e.toString()].needsUpdate=!0}class MI{constructor(e=1){const t=yI(e),n=SI(t);this.renderable=[],this.curveArray=new Array(e),this.curveLengthArray=new Array(e),this.splineTexure=t,this.uniforms=n,this.frenetFrames=new Array(e),Ls=this}updateCurve(e,t,n=void 0){if(e>=this.curveArray.length)throw Error("Index out of range for Flow");const i=t.getLength();this.uniforms.spineLength.value=i,this.curveLengthArray[e]=i,this.curveArray[e]=t,xI(this.splineTexure,t,e,n,this.frenetFrames)}addFlowRenderer(e){let t=new vs(this,e);return this.renderable.push(t),t}addSIFlowRenderer(e,t,n){let i=new TI(e,t,n);return this.renderable.push(i),i}addIFlowRenderer(e,t,n,i){let r=new w_(e,t,n,i);return this.renderable.push(r),r}addIIFlowRenderer(e,t,n,i){let r=new sh(e,t,n,i);return this.renderable.push(r),r}}class bI{constructor(e,t){this.cellCount=e,this.instancedMatrices=t,this.uniforms={flowData:{value:new Array(e*2).fill(0)},iMatrix:{value:new Array(t.length*16).fill(0)}};for(let n=0;n<t.length;n++)t[n].toArray(this.uniforms.iMatrix.value,n*16);this.offsets=new Array(e).fill(0)}renderables=[];addObject(e,t,n=void 0){const i=new e(this.cellCount,t,this.instancedMatrices,{...this.uniforms,...n});return this.renderables.push(i),i}writeChanges(e,t=void 0){this.uniforms.flowData.value[e*2+0]=Ls.curveLengthArray[t],this.uniforms.flowData.value[e*2+1]=this.offsets[e]}moveIndividualAlongCurve(e,t,n=void 0){this.offsets[e]+=t,this.writeChanges(e,n)}setIndividualAlongCurve(e,t,n=void 0){this.offsets[e]=t,this.writeChanges(e,n)}updatePerPlacingIndex=(e,t,n)=>{this.renderables.forEach(i=>i.updatePerPlacingIndex(e,t,n))};moveGeometryForward=(e,t,n)=>{this.setIndividualAlongCurve(e,t+n,n)}}class vs{uniforms={spineTexture:{value:null},pathOffset:{type:"f",value:0},pathSegment:{type:"f",value:1},spineOffset:{type:"f",value:0},spineLength:{type:"f",value:400},flow:{type:"i",value:1},time:{type:"f",value:0},colors:{value:[.05,.2,.6,.1,.6,.3,.3,.3,.45,.7,.1,.1,.05,.05,.05]}};curveLengthArray;attributeNames;modifyShader(e,t,n=1){e.__ok||(e.__ok=!0,e.onBeforeCompile=i=>{if(i.__modified)return;i.__modified=!0,Object.assign(i.uniforms,t);const r=`
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
		float textureLayers = ${Ft*n}.;
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
//rowOffset += instanceMatrix[1][3] * ${Ft}.;
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
	#endif`);i.vertexShader=r})}constructor(e,t){this.uniforms.spineTexture=Ls.uniforms.spineTexture,this.uniforms.spineLength=Ls.uniforms.spineLength,this.uniforms.pathOffset=Ls.uniforms.pathOffset,this.uniforms.time=Ls.uniforms.time,this.curveLengthArray=Ls.curveLengthArray;let n=i=>{i.traverse(function(r){(r instanceof $t||r instanceof Zn)&&(r.material=r.material.clone(),this.modifyShader(r.material,this.uniforms,this.curveLengthArray.length))}.bind(this))};Array.isArray(e)?e.forEach(i=>{n(i)}):n(e),t!==void 0&&Object.assign(this.uniforms,t),this.object3D=e}moveAlongCurve(e){this.uniforms.pathOffset.value+=e}setAlongCurve(e){this.uniforms.pathOffset.value=e}}class TI extends vs{modifyShader(e,t,n=1){e.__ok||(e.__ok=!0,e.onBeforeCompile=i=>{if(i.__modified)return;i.__modified=!0,Object.assign(i.uniforms,t);const r=`
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
		float textureLayers = ${Ft*n}.;
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
//rowOffset += instanceMatrix[1][3] * ${Ft}.;
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
				#endif`);i.vertexShader=r})}constructor(e,t,n){const i=new Zn(t,n,e);i.instanceMatrix.setUsage(hh),i.frustumCulled=!1,super(i,void 0),console.log(this.uniforms),this.offsets=new Array(e).fill(0)}writeChanges(e,t=void 0){oc.elements[3]=this.curveLengthArray[t],oc.elements[7]=t,oc.elements[11]=this.offsets[e],this.object3D.setMatrixAt(e,oc),this.object3D.instanceMatrix.needsUpdate=!0}moveIndividualAlongCurve(e,t,n=void 0){this.offsets[e]+=t,this.writeChanges(e,n)}setIndividualAlongCurve(e,t,n=void 0){this.offsets[e]=t,this.writeChanges(e,n)}setCurve(e,t){if(isNaN(t))throw Error("curve index being set is Not a Number (NaN)");this.writeChanges(e,t)}}class w_ extends vs{matrices=void 0;cell_count=0;instane_count=0;modifyShader(e,t,n=1){e.__ok||(e.__ok=!0,e.onBeforeCompile=i=>{if(i.__modified)return;i.__modified=!0,Object.assign(i.uniforms,t);const r=`
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

				float textureLayers = ${Ft*n}.;
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
	
	`);i.vertexShader=r})}constructor(e,t,n,i=void 0){const r=n.length;let o=c=>{const l=new Zn(c.geometry.clone(),c.material.clone(),0);return l.name=c.name,l.material.vertexColors=!0,l.frustumCulled=!1,l.userData.per_cell_count=0,zi(l.geometry,"instanceID",e*r,1),zi(l.geometry,"flowID",e*r,1),zi(l.geometry,"effectID",e*r,1),l},a;Array.isArray(t)?(a=[],t.forEach(c=>{a.push(o(c))})):a=o(t),super(a,i),this.matrices=n,this.cell_count=e,this.instane_count=r;for(let c=0;c<e;c++)this.clearInstanceIdsAt(c);if(i===void 0||i.flowData===void 0||i.iMatrix===void 0){this.uniforms.flowData={value:new Array(e*2).fill(0)},this.uniforms.iMatrix={value:new Array(r*16).fill(0)};for(let c=0;c<n.length;c++)n[c].toArray(this.uniforms.iMatrix.value,c*16)}else this.uniforms.flowData=i.flowData,this.uniforms.iMatrix=i.iMatrix;this.offsets=new Array(e).fill(0)}writeChanges(e,t=void 0){this.uniforms.flowData.value[e*2+0]=this.curveLengthArray[t],this.uniforms.flowData.value[e*2+1]=this.offsets[e]}moveIndividualAlongCurve(e,t,n=void 0){this.offsets[e]+=t,this.writeChanges(e,n)}setIndividualAlongCurve(e,t,n=void 0){this.offsets[e]=t,this.writeChanges(e,n)}setCurve(e,t){if(isNaN(t))throw Error("curve index being set is Not a Number (NaN)");this.writeChanges(e,t)}clearInstanceIdsAt=e=>{let t=n=>{n.count=0};Array.isArray(this.object3D)?this.object3D.forEach(n=>{t(n)}):t(this.object3D)};updateInstancesAt=()=>{for(let e=0;e<this.uniforms.activeEffectID.value.length;e++){const t=this.uniforms.activeEffectID.value[e].beat,n=this.uniforms.activeEffectID.value[e].id_on_beat,i=this.uniforms.activeEffectID.value[e].effect,r=this.uniforms.activeEffectID.value[e].color,o=this.object3D[i];this.cell_count/this.uniforms.barLoops.value,o.geometry.attributes.flowID.array[o.count]=t,o.geometry.attributes.flowID.needsUpdate=!0,o.geometry.attributes.instanceID.array[o.count]=n,o.geometry.attributes.instanceID.needsUpdate=!0,o.geometry.attributes.effectID.array[o.count]=r,o.geometry.attributes.effectID.needsUpdate=!0,o.count++}};updatePlacement=(e,t,n)=>{this.setIndividualAlongCurve(e,t+n,n)};updatePerPlacingIndex=(e,t,n)=>{this.clearInstanceIdsAt(e),this.updateInstancesAt(e)}}class EI extends vs{matrices=void 0;cell_count=0;instane_count=0;modifyShader(e,t,n=1){e.__ok||(e.__ok=!0,e.onBeforeCompile=i=>{if(i.__modified)return;i.__modified=!0,Object.assign(i.uniforms,t);const r=`
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

				float textureLayers = ${Ft*n}.;
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
	
	`);i.vertexShader=r})}constructor(e,t,n,i=void 0){const r=n.length;let o=c=>{const l=new Zn(c.geometry.clone(),c.material.clone(),0);return l.name=c.name,l.material.vertexColors=!0,l.frustumCulled=!1,l.userData.per_cell_count=0,zi(l.geometry,"instanceID",e*r,1),zi(l.geometry,"flowID",e*r,1),zi(l.geometry,"melodyInstrumentID",e*r,1),l},a;if(Array.isArray(t)?(a=[],t.forEach(c=>{a.push(o(c))})):a=o(t),super(a,i),this.matrices=n,this.cell_count=e,this.instane_count=r,this.fillInstanceData(e,r),this.uniforms.melodyInstrumentID!==void 0&&this.uniforms.melodyInstrumentID.value.addOnModifyEventListener(c=>{this.updateInstanceAt(c)}),i===void 0||i.flowData===void 0||i.iMatrix===void 0){this.uniforms.flowData={value:new Array(e*2).fill(0)},this.uniforms.iMatrix={value:new Array(r*16).fill(0)};for(let c=0;c<n.length;c++)n[c].toArray(this.uniforms.iMatrix.value,c*16)}else this.uniforms.flowData=i.flowData,this.uniforms.iMatrix=i.iMatrix;this.offsets=new Array(e).fill(0)}writeChanges(e,t=void 0){this.uniforms.flowData.value[e*2+0]=this.curveLengthArray[t],this.uniforms.flowData.value[e*2+1]=this.offsets[e]}moveIndividualAlongCurve(e,t,n=void 0){this.offsets[e]+=t,this.writeChanges(e,n)}setIndividualAlongCurve(e,t,n=void 0){this.offsets[e]=t,this.writeChanges(e,n)}setCurve(e,t){if(isNaN(t))throw Error("curve index being set is Not a Number (NaN)");this.writeChanges(e,t)}fillInstanceData=(e,t)=>{const n=this.object3D;{n.count=0;for(let i=0;i<e;i++)for(let r=0;r<t;r++){n.geometry.attributes.flowID.array[n.count]=i,n.geometry.attributes.flowID.needsUpdate=!0,n.geometry.attributes.instanceID.array[n.count]=r,n.geometry.attributes.instanceID.needsUpdate=!0;let o=i*this.instane_count+r;this.uniforms.melodyInstrumentID!==void 0&&(o%=this.uniforms.melodyInstrumentID.value.length,n.geometry.attributes.melodyInstrumentID.array[n.count]=this.uniforms.melodyInstrumentID.value[o]),n.geometry.attributes.melodyInstrumentID.needsUpdate=!0,n.count++}}};updateInstanceAt=e=>{const t=this.object3D;this.uniforms.melodyInstrumentID!==void 0&&(t.geometry.attributes.melodyInstrumentID.array[e]=this.uniforms.melodyInstrumentID.value[e]),t.geometry.attributes.melodyInstrumentID.needsUpdate=!0};updatePlacement=(e,t,n)=>{this.setIndividualAlongCurve(e,t+n,n)};updatePerPlacingIndex=(e,t,n)=>{}}class wI extends vs{matrices=void 0;cell_count=0;instane_count=0;modifyShader(e,t,n=1){e.__ok||(e.__ok=!0,e.onBeforeCompile=i=>{if(i.__modified)return;i.__modified=!0,Object.assign(i.uniforms,t);const r=`
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

				float textureLayers = ${Ft*n}.;
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
	
	`);i.vertexShader=r})}constructor(e,t,n,i=void 0){const r=n.length;let o=c=>{const l=new Zn(c.geometry.clone(),c.material.clone(),0);return l.name=c.name,l.material.vertexColors=!0,l.frustumCulled=!1,l.userData.per_cell_count=0,zi(l.geometry,"instanceID",e*r,1),zi(l.geometry,"flowID",e*r,1),zi(l.geometry,"melodyInstrumentID",e*r,1),l},a;if(Array.isArray(t)?(a=[],t.forEach(c=>{a.push(o(c))})):a=o(t),super(a,i),this.matrices=n,this.cell_count=e,this.instane_count=r,i===void 0||i.flowData===void 0||i.iMatrix===void 0){this.uniforms.flowData={value:new Array(e*2).fill(0)},this.uniforms.iMatrix={value:new Array(r*16).fill(0)};for(let c=0;c<n.length;c++)n[c].toArray(this.uniforms.iMatrix.value,c*16)}else this.uniforms.flowData=i.flowData,this.uniforms.iMatrix=i.iMatrix;this.offsets=new Array(e).fill(0)}writeChanges(e,t=void 0){this.uniforms.flowData.value[e*2+0]=this.curveLengthArray[t],this.uniforms.flowData.value[e*2+1]=this.offsets[e]}moveIndividualAlongCurve(e,t,n=void 0){this.offsets[e]+=t,this.writeChanges(e,n)}setIndividualAlongCurve(e,t,n=void 0){this.offsets[e]=t,this.writeChanges(e,n)}setCurve(e,t){if(isNaN(t))throw Error("curve index being set is Not a Number (NaN)");this.writeChanges(e,t)}clearInstanceIdsAt=()=>{this.object3D.count=0};updateInstancesAt=()=>{{const e=this.object3D;for(let t=0;t<this.uniforms.melody.value.length;t++){const n=this.uniforms.melody.value[t];for(let i=0;i<n.instances.length;i++){const r=n.instances[i].id_on_beat;e.geometry.attributes.flowID.array[e.count]=t,e.geometry.attributes.flowID.needsUpdate=!0,e.geometry.attributes.instanceID.array[e.count]=r,e.geometry.attributes.instanceID.needsUpdate=!0;let o=t*this.instane_count+r;this.uniforms.melodyInstrumentID!==void 0&&(o%=this.uniforms.melodyInstrumentID.value.length,e.geometry.attributes.melodyInstrumentID.array[e.count]=this.uniforms.melodyInstrumentID.value[o]),e.geometry.attributes.melodyInstrumentID.needsUpdate=!0,e.count++}}}};updatePlacement=(e,t,n)=>{this.setIndividualAlongCurve(e,t+n,n)};updatePerPlacingIndex=(e,t,n)=>{this.clearInstanceIdsAt(),this.updateInstancesAt()}}class sh extends vs{modifyShader(e,t,n=1){e.__ok||(e.__ok=!0,e.onBeforeCompile=i=>{if(i.__modified)return;i.__modified=!0,Object.assign(i.uniforms,t);const r=`

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
			float textureLayers = ${Ft*n}.;
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
	
	#endif`);i.vertexShader=r})}constructor(e,t,n,i,r=void 0){let o=c=>{const l=new Zn(c.geometry.clone(),c.material.clone(),i);return l.name=c.name,l.material.vertexColors=!0,l.frustumCulled=!1,l.count=0,l},a;Array.isArray(t)?(a=[],t.forEach(c=>{a.push(o(c))})):a=o(t),super(a,r),this.cell_count=e;for(let c=0;c<e;c++)this.clearInstanceIdsAt(c)}clearInstanceIdsAt=e=>{let t=(n,i)=>{n.userData.indexDictionary===void 0&&(n.userData.indexDictionary=new Array(this.cell_count)),n.userData.indexDictionary[i]===void 0&&(n.userData.indexDictionary[i]={id:[]}),n.count-=n.userData.indexDictionary[i].id.length,n.userData.indexDictionary[i].id=[]};Array.isArray(this.object3D)?this.object3D.forEach(n=>{t(n,e)}):t(this.object3D,e)};updateInstancesAt=(e,t)=>{let n=i=>{i.userData.indexDictionary===void 0&&(i.userData.indexDictionary=new Array(this.cell_count)),i.userData.indexDictionary[e]===void 0&&(i.userData.indexDictionary[e]={id:[]}),i.userData.indexDictionary[e].id.push(t.clone()),i.count++};Array.isArray(this.object3D)?this.object3D.forEach(i=>{n(i)}):n(this.object3D)};fillInstanceData=()=>{let e=t=>{let n=0;for(let i=0;i<t.userData.indexDictionary.length;i++){const r=t.userData.indexDictionary[i].id;for(let o=0;o<r.length;o++)t.setMatrixAt(n,r[o]),n++}t.instanceMatrix.needsUpdate=!0};Array.isArray(this.object3D)?this.object3D.forEach(t=>{e(t)}):e(this.object3D)};updatePerPlacingIndex=e=>{this.clearInstanceIdsAt(e),this.updateInstancesAt(e),this.fillInstanceData()}}class AI extends vs{modifyShader(e,t,n=1){e.__ok||(e.__ok=!0,e.onBeforeCompile=i=>{if(i.__modified)return;i.__modified=!0,Object.assign(i.uniforms,t);const r=`

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
			float textureLayers = ${Ft*n}.;
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
	
	`);i.vertexShader=r})}constructor(e,t,n,i,r=void 0){let o=c=>{const l=new Zn(c.geometry.clone(),c.material.clone(),i);return l.name=c.name,l.material.vertexColors=!0,l.frustumCulled=!1,l.count=0,l},a;Array.isArray(t)?(a=[],t.forEach(c=>{a.push(o(c))})):a=o(t),super(a,r),this.cell_count=e;for(let c=0;c<e;c++)this.clearInstanceIdsAt(c)}clearInstanceIdsAt=e=>{let t=(n,i)=>{n.userData.indexDictionary===void 0&&(n.userData.indexDictionary=new Array(this.cell_count)),n.userData.indexDictionary[i]===void 0&&(n.userData.indexDictionary[i]={id:[]}),n.count-=n.userData.indexDictionary[i].id.length,n.userData.indexDictionary[i].id=[]};Array.isArray(this.object3D)?this.object3D.forEach(n=>{t(n,e)}):t(this.object3D,e)};updateInstancesAt=(e,t)=>{let n=i=>{i.userData.indexDictionary===void 0&&(i.userData.indexDictionary=new Array(this.cell_count)),i.userData.indexDictionary[e]===void 0&&(i.userData.indexDictionary[e]={id:[]}),i.userData.indexDictionary[e].id.push(t.clone()),i.count++};Array.isArray(this.object3D)?this.object3D.forEach(i=>{n(i)}):n(this.object3D)};fillInstanceData=()=>{let e=t=>{let n=0;for(let i=0;i<t.userData.indexDictionary.length;i++){const r=t.userData.indexDictionary[i].id;for(let o=0;o<r.length;o++)t.setMatrixAt(n,r[o]),n++}t.instanceMatrix.needsUpdate=!0};Array.isArray(this.object3D)?this.object3D.forEach(t=>{e(t)}):e(this.object3D)};updatePerPlacingIndex=e=>{this.clearInstanceIdsAt(e),this.updateInstancesAt(e),this.fillInstanceData()}}class CI extends vs{modifyShader(e,t,n=1){e.__ok||(e.__ok=!0,e.onBeforeCompile=i=>{if(i.__modified)return;i.__modified=!0,Object.assign(i.uniforms,t);const r={bomb_colors:{value:[1,1,1,1,1,0,1,0,0]}};Object.assign(i.uniforms,r);const o=`
			
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
			float textureLayers = ${Ft*n}.;
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
	
	`);i.vertexShader=o})}constructor(e,t,n,i,r=void 0){let o=c=>{const l=new Zn(c.geometry.clone(),c.material.clone(),i);return l.name=c.name,l.material.vertexColors=!0,l.frustumCulled=!1,l.count=0,l},a;Array.isArray(t)?(a=[],t.forEach(c=>{a.push(o(c))})):a=o(t),super(a,r),this.cell_count=e;for(let c=0;c<e;c++)this.clearInstanceIdsAt(c)}clearInstanceIdsAt=e=>{let t=(n,i)=>{n.userData.indexDictionary===void 0&&(n.userData.indexDictionary=new Array(this.cell_count)),n.userData.indexDictionary[i]===void 0&&(n.userData.indexDictionary[i]={id:[]}),n.count-=n.userData.indexDictionary[i].id.length,n.userData.indexDictionary[i].id=[]};Array.isArray(this.object3D)?this.object3D.forEach(n=>{t(n,e)}):t(this.object3D,e)};updateInstancesAt=(e,t)=>{let n=i=>{i.userData.indexDictionary===void 0&&(i.userData.indexDictionary=new Array(this.cell_count)),i.userData.indexDictionary[e]===void 0&&(i.userData.indexDictionary[e]={id:[]}),i.userData.indexDictionary[e].id.push(t.clone()),i.count++};Array.isArray(this.object3D)?this.object3D.forEach(i=>{n(i)}):n(this.object3D)};fillInstanceData=()=>{let e=t=>{let n=0;for(let i=0;i<t.userData.indexDictionary.length;i++){const r=t.userData.indexDictionary[i].id;for(let o=0;o<r.length;o++)t.setMatrixAt(n,r[o]),n++}t.instanceMatrix.needsUpdate=!0};Array.isArray(this.object3D)?this.object3D.forEach(t=>{e(t)}):e(this.object3D)};updatePerPlacingIndex=e=>{this.clearInstanceIdsAt(e),this.updateInstancesAt(e),this.fillInstanceData()}}const _u=(s,e,t=1)=>{s.__ok||(s.__ok=!0,s.vertexColors=!1,s.onBeforeCompile=n=>{if(n.__modified)return;n.__modified=!0,Object.assign(n.uniforms,e);const i=`

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
			float textureLayers = ${Ft*t}.;
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
	
	#endif`);n.vertexShader=i})},Di=new Ue,cc=new Vt,vu=new P(1,1,1);class RI{u;ccc;pos;normal;tangent;biNormal;geometryNeedsUpdate=!0;#e;#t;#n;#h;#l;#u;#s;#i;#o;#a;#r;curveLength;#c;constructor(e=3,t=7,n=8){this.pos=new P,this.normal=new P,this.tangent=new P,this.biNormal=new P,this.u=0,this.#o=this.#a=0,this.#e=new Array(e),this.curveLength=t,this.#r=0,this.#s=n,this.#i=0,this.#c=7;const i=this.#c;{let r=new P(0,0,0),o=new P(et.randFloatSpread(i),et.randFloatSpread(i),-t/2),a=new P(et.randFloatSpread(i),et.randFloatSpread(i),-t/2),c=new P(et.randFloatSpread(i),et.randFloatSpread(i),-t),l=new P(0,0,0);for(let u=0;u<e;u++){o.copy(l.clone()),a.set(et.randFloatSpread(i),et.randFloatSpread(i),-t/2),c.set(et.randFloatSpread(i),et.randFloatSpread(i),-t);const h=new sp(r.clone(),o.add(r).clone(),a.add(r).clone(),c.add(r).clone());l.subVectors(c,a),r.copy(c),this.#e[u]=h}}this.#t=new MI(this.#e.length),this.#e.forEach(function(r,o){this.#t.updateCurve(o,r)}.bind(this))}resetCurves(e){const t=this.#e.length,n=this.curveLength,i=this.#s;this.u=0,this.#o=this.#a=0,this.#r=0,this.#i=0,this.#c=7;const r=this.#c;{let o=new P(0,0,0),a=new P(et.randFloatSpread(r),et.randFloatSpread(r),-n/2),c=new P(et.randFloatSpread(r),et.randFloatSpread(r),-n/2),l=new P(et.randFloatSpread(r),et.randFloatSpread(r),-n),u=new P(0,0,0);for(let h=0;h<t;h++){a.copy(u.clone()),c.set(et.randFloatSpread(r),et.randFloatSpread(r),-n/2),l.set(et.randFloatSpread(r),et.randFloatSpread(r),-n);const d=new sp(o.clone(),a.add(o).clone(),c.add(o).clone(),l.add(o).clone());u.subVectors(l,c),o.copy(l),this.#e[h]=d}}this.#e.forEach(function(o,a){this.#t.updateCurve(a,o)}.bind(this));for(let o=0;o<i;o++){const{curveIndex:a,u:c}=this.getCurveIndexAndUAt(.5+o);e.geometry.level.moveGeometryForward(o,c,a)}this.geometryNeedsUpdate=!0,this.updateGeometry(e),e.geometry.interactives.forEach(o=>{for(let a=0;a<t;a++)o.clearInstanceIdsAt(a)})}updateCurve(e,t){let n=i=>{const r=this.curveLength,o=this.#c,a=i-1<0?this.#e.length-1:i-1;this.#o-=this.#e[i].getLength();const c=this.#e[a].v2,l=this.#e[a].v3;this.#e[i].v0=l.clone();const u=new P;u.subVectors(l,c).add(l),this.#e[i].v1=u,this.#e[i].v2=new P(et.randFloatSpread(o),et.randFloatSpread(o),-r/2).add(l),this.#e[i].v3=new P(et.randFloatSpread(o),et.randFloatSpread(o),-r).add(l),this.#e[i].updateArcLengths(),this.#t.updateCurve(i,this.#e[i],a)};if(e>.3&&this.#r!==t){n(this.#r,this.#e.length);const i=this.#r;return this.#r=t,i}else return-1}#d=new Vt;placeInteractive=(e,t)=>{e.geometry.interactives!==void 0&&(e.win===!0||e.editMode===!0||e.geometry.interactives.forEach(n=>{n.clearInstanceIdsAt(t);const i=this.#t.frenetFrames[t];for(let r=0;r<3;r++){let o=Math.random();const a=Math.floor(o*i.points.length);let c=Math.random()*.5-.25,l=Math.random()*.5-.25;c*=2,l*=2;let u=i.points[a].clone();const h=i.normals[a].clone(),d=i.binormals[a].clone();u.add(h.multiplyScalar(c)).add(d.multiplyScalar(l));let f=1;if(n.object3D.name.includes("ELECTRICITY")||n.object3D.name.includes("TO_SELF")?(Di.compose(u,cc.identity(),vu.set(f,f,f)),Di.lookAt(u,u.clone().add(i.tangents[a]),h.clone().applyAxisAngle(i.tangents[a],Math.random()*3.14*2))):(cc.random(),Di.compose(u,cc,vu.set(f,f,f))),n.object3D.name.includes("TO1-Knob")&&(Di.elements[3]=Math.floor(Math.random()*4)),n.object3D.name.includes("TO_SELF")){let m=0;for(;m<4;){if(e.AudioSystem.availableMelody[m].notes.length!==0){Di.elements[3]=m;break}m++}if(m===4)return}Di.elements[7]=2,n.updateInstancesAt(t,Di)}n.fillInstanceData()}))};updateGeometry=e=>{if(this.#t&&e.geometry.level!==void 0){if(this.#t.uniforms.time.value+=e.time.delta,Math.floor(this.#a-1)>this.#i){const t=this.#i%this.#s,{curveIndex:n,u:i}=this.getCurveIndexAndUAt(this.#s+.5+this.#i-(this.#a-this.#o));e.geometry.level.moveGeometryForward(t,i,n),this.#i++}this.geometryNeedsUpdate===!0&&(this.geometryNeedsUpdate=!1,e.geometry.level.updatePerPlacingIndex())}return e};curveSystem=e=>{this.#o+=e.GlobalParameters.speed*e.time.delta,this.#a+=e.GlobalParameters.speed*e.time.delta;const{curveIndex:t,u:n}=this.getCurveIndexAndUAt(this.#o);this.u=n,this.ccc=t;const i=this.updateCurve(n,t);i>=0&&(console.log("placingInteractive "+i),this.placeInteractive(e,i));const r=this.#t.frenetFrames[t];return this.pos=r.points[Math.floor(n*r.points.length)],this.tangent=r.tangents[Math.floor(n*r.tangents.length)],this.normal=r.normals[Math.floor(n*r.normals.length)],this.biNormal=r.binormals[Math.floor(n*r.binormals.length)],e};getCurrentNormalizedCell(e=0){return(this.#i+e)%this.#s}getCurrentCell(e=0){return this.#i+e}getTBNAt(e,t){const n=Math.floor(e),i=e-n,r=this.#t.frenetFrames[n],o=Math.floor(i*r.points.length);t.set(r.tangents[o].x,r.normals[o].x,r.binormals[o].x,r.points[o].x,r.tangents[o].y,r.normals[o].y,r.binormals[o].y,r.points[o].y,r.tangents[o].z,r.normals[o].z,r.binormals[o].z,r.points[o].z,0,0,0,1)}getCurveIndexAndUAt(e){let t=0,n=0;const i=this.#e;for(let r=0;r<i.length;r++){const o=et.euclideanModulo(r+this.#r,i.length);if(t+=i[o].getLength(),t>e)return{curveIndex:o,u:(e-n)/i[o].getLength()};n=t}return{curveIndex:0,u:0}}}const ri=new P,yu=new P,xu=new P,Su=new P,Mu=new Vt;let Kp=0;function II(s,e,t,n){ri.subVectors(t,e),xu.subVectors(s,e);const i=ri.dot(ri),r=xu.dot(ri),o=xu.multiplyScalar(i).sub(ri.multiplyScalar(r)).length()-n*i,a=Math.abs(r-i*.5)-i*.5,c=o*o,l=a*a*i,u=Math.max(o,a)<0?-Math.min(c,l):(o>0?c:0)+(a>0?l:0);return Math.sign(u)*Math.sqrt(Math.abs(u))/i}const DI=s=>{let e=(t,n)=>{switch(t){default:break;case"TO_SELF":console.log("TO_SELF"),s.AudioSystem.addInstrumentOnRandomAvailablePosition(n),s.progressMustUpdate=!0,s.Curve.geometryNeedsUpdate=!0;break;case"ELECTRICITY":s.hand.userData.removeFinger=!0;break;case"BOMB":s.hand.userData.removeFinger=!0;break;case"TO1-Knob-C":s.AudioSystem.addEffectOnRandomAvailablePosition(0,n),s.Curve.geometryNeedsUpdate=!0;break;case"TO1-Knob-T":s.AudioSystem.addEffectOnRandomAvailablePosition(1,n),s.Curve.geometryNeedsUpdate=!0;break;case"TO1-Knob-Ic":s.AudioSystem.addEffectOnRandomAvailablePosition(2,n),s.Curve.geometryNeedsUpdate=!0;break}};return s.geometry.interactives.forEach(t=>{const n=t.object3D.name;t.object3D.userData.indexDictionary[s.Curve.ccc].id.forEach(i=>{let r=100;n==="ELECTRICITY"?(Mu.setFromRotationMatrix(i),ri.setFromMatrixPosition(i),yu.set(0,1,0).applyQuaternion(Mu),Su.set(0,-1,0).applyQuaternion(Mu),yu.add(ri),Su.add(ri),r=II(s.hand.position,yu,Su,.1),r<0?r=0:r=100):(ri.setFromMatrixPosition(i),r=ri.distanceTo(s.hand.position)),r<.25&&i.elements[7]!==-1&&(e(n,i.elements[3]),i.elements[7]=-1,n==="ELECTRICITY"&&(Kp===s.Curve.ccc||(Kp=s.Curve.ccc)))})}),s},PI={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ba{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const NI=new ha(-1,1,1,-1,0,1),pd=new An;pd.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3));pd.setAttribute("uv",new Kt([0,2,0,0,2,0],2));class A_{constructor(e){this._mesh=new $t(pd,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,NI)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class C_ extends ba{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof li?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ph.clone(e.uniforms),this.material=new li({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new A_(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Zp extends ba{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class LI extends ba{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class OI{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ye);this._width=n.width,this._height=n.height,t=new ls(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xr}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new C_(PI),this.copyPass.material.blending=ki,this.clock=new ig}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Zp!==void 0&&(o instanceof Zp?n=!0:o instanceof LI&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ye);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class UI extends ba{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Te}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const FI={uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class kI extends ba{constructor(){super();const e=FI;this.uniforms=ph.clone(e.uniforms),this.material=new lb({uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new A_(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ke.getTransfer(this._outputColorSpace)===ut&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===dm?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===fm?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===pm?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===mm&&(this.material.defines.ACES_FILMIC_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const BI={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};new P;const bu=new Ue,lc=new P(0,0,1),Qp=new P(0,0,0),Vs=new P,VI=(s,e,t)=>{Qp.set(0,0,0);let n=s.geometry.level.instancedMatrices[t].clone();lc.set(0,1,0);let i=lc.applyMatrix4(n);Vs.setFromMatrixPosition(n),Vs.add(i.multiplyScalar(-.08)),n.setPosition(Vs);const r=s.geometry.level.offsets[e];s.Curve.getTBNAt(r,bu),lc.set(0,0,1),i=lc.applyMatrix4(n);const o=Qp.applyMatrix4(n);return o.applyMatrix4(bu),i.applyMatrix4(bu),i.sub(o),i.normalize(),{origin:o,direction:i}},zI=(s,e,t,n)=>{Vs.subVectors(s,t);const i=e.dot(e),r=2*Vs.dot(e),o=Vs.dot(Vs)-n*n,a=r*r-4*i*o;return a<0?-1:(-r-Math.sqrt(a))/(2*i)},GI=s=>{let e=(i,r)=>{const o=i.id_on_beat;i.instrument,i.effect;const a=VI(s,r%s.GlobalParameters.barSize,o),c=zI(a.origin,a.direction,s.camera.position,.2);c!==-1&&c<1&&(s.AudioSystem.playInstrumentAt(i,c),i.played_at=r)};const t=s.Curve.getCurrentCell(1),n=t%s.GlobalParameters.barSize;return s.AudioSystem.melody[n].instances.forEach(i=>{i.played_at!==t&&e(i,t)}),s};new P;new Ue;new P;const uc=[],HI=new P,WI=new Te,XI=new Te;let Cs=-1;const qI=s=>{if(Cs<0&&s.hand.userData.removeFinger===!0&&s.fingersAlive>0){s.hand.userData.removeFinger=!1,s.AudioSystem.playEmptyInstrument(),s.hand.children[0].material.color.set(1,0,0),Cs=0,s.hand.userData.fingers_bones[s.fingersAlive-1].scale.set(0,0,0);const t=s.hand.userData.fingers[s.fingersAlive-1];t.bindMode="detached",uc.push(t),console.log(t.rotation),console.log(t.position),t.visible=!0,t.userData.fallDirection=HI.set(Math.random()*2-1,Math.random()*2-1,-Math.random()*.5).normalize().clone().multiplyScalar(20),s.fingersAlive--}return Cs>=0&&(s.hand.children[0].material.color.lerpColors(WI.set(1,0,0),XI.set(1,1,1),Math.sin(Cs*20)*.5+.5),Cs+=s.time.delta,Cs>s.GlobalParameters.safeTime&&(Cs=-1,s.hand.userData.removeFinger=!1,s.hand.children[0].material.color.set(1,1,1))),uc.length>0&&uc.forEach((e,t)=>{e.rotateX(.1),e.rotateZ(.1),e.position.add(e.userData.fallDirection.clone().multiplyScalar(s.time.delta)),e.scale.subScalar(s.time.delta/2),e.scale.x<.01&&(e.visible=!1,s.scene.remove(e),uc.splice(t,1))}),s},jI=s=>(s.fingersAlive===0&&(console.log("U DED"),s.paused=!0,s.showEndScreen(!0)),s),YI=s=>{if(s.progressMustUpdate===!0){let e=document.getElementById("progressbar_position");e.style.width=Math.floor(s.AudioSystem.getProgress()*100)+"%",s.progressMustUpdate=!1,s.AudioSystem.getProgress()>=1&&(s.win=!0,s.geometry.interactives.forEach(t=>{for(let n=0;n<s.Curve.curveLength;n++)t.clearInstanceIdsAt(n)})),console.log("progressSystem",s.AudioSystem.getProgress()*100)}return s};function $I(s,e,t){const n=[...s];var i=t>n.length?t%n.length:t;return n.concat(n.splice(0,e>0?n.length-i:i))}class KI{timer=0;global_timer=0;visual_step=.1;done=!1;initialized=!1;constructor(e){this.duration=e}initialize(e){if(this.initialized!==!0){this.timer=this.global_timer=0,this.done=!1,e.GlobalParameters.rotationSpeed.value=.1;for(let t=0;t<e.AudioSystem.melodyInstrumentID.length;t++)e.AudioSystem.melodyInstrumentID.eventOnModify(t,t/40/2%4);this.initialized=!0}}cleanup(e){e.GlobalParameters.triAmplitude.value=1,e.GlobalParameters.rotationSpeed.value=0}play(e){if(this.timer>this.visual_step){const t=$I(e.AudioSystem.melodyInstrumentID,1,40);for(let n=0;n<e.AudioSystem.melodyInstrumentID.length;n++)e.AudioSystem.melodyInstrumentID.eventOnModify(n,t[n]);this.timer=0}this.timer+=e.time.delta,this.global_timer+=e.time.delta,this.global_timer>this.duration&&(this.done=!0,this.initialized=!1,this.global_timer=0),this.global_timer>5&&(e.GlobalParameters.triAmplitude.value=(this.global_timer-5)/2.5*((this.global_timer-5)/2.5),e.GlobalParameters.rotationSpeed.value=Math.sqrt(this.global_timer-5)/2)}}let hc=new KI(15.5);const ZI=s=>(s.win===!0&&!s.paused&&(hc.initialized||hc.initialize(s),hc.play(s),hc.done&&(s.win=!1,s.paused=!0,s.showWinScreen(!0))),s);class QI{world;#e;#t;#n=new Wo;#h=!1;constructor(e){this.world=QT(),this.world.songEditingUnlocked=!1,this.world.editMode=!1,this.world.paused=!0,this.world.progressMustUpdate=!1,this.world.win=!1,this.world.GlobalParameters={speed:2.5,curveCount:3,curveLength:8,barSize:8,loops:1,safeTime:2,rotationSpeed:{value:0},triAmplitude:{value:1}},this.world.Input=new nE(this.world.renderer.domElement),this.world.Curve=new RI(this.world.GlobalParameters.curveCount,this.world.GlobalParameters.curveLength,this.world.GlobalParameters.barSize*this.world.GlobalParameters.loops),this.world.AudioSystem=new uI(this.world.GlobalParameters.barSize),e!==void 0&&(this.#s(e),this.world.scene.add(this.#n)),this.#l(),this.#u(),this.#e=KT(hI,this.world.Curve.curveSystem,this.world.Curve.updateGeometry,mI,_I,vI,DI,qI,jI,YI,ZI,GI,dI)}#l(){const e=xp(this.world);Mp(this.world.camera,e),Ja(this.world,Jr,e),Ja(this.world,gg,e),this.world.objects.set(this.world.camera.eid,this.world.camera),this.world.camera.userData.speed=this.world.GlobalParameters.speed,this.world.camera.userData.dirV=new P(0,0,-1),this.world.camera.userData.offset=new P(0,0,0);const t=new $t(new Mh(1e-4,32,32),new ai({color:65280}));this.world.scene.add(new Vb(5)),this.world.scene.add(new ng(16777215,.05)),this.world.scene.add(t);let n=new eg(16777215,3);n.position.set(0,0,.5),n.angle=3.14/4,n.decay=2,n.distance=30,n.penumbra=0,n.target=this.world.camera,n.castShadow=!1,this.world.camera.add(n),this.world.scene.add(this.world.camera),this.world.composer=new OI(this.world.renderer);const i=new UI(this.world.scene,this.world.camera);this.world.composer.addPass(i);const r=new C_(BI);r.uniforms.time={value:0},this.world.composer.addPass(r);const o=new kI;o.material.defines.ACES_FILMIC_TONE_MAPPING=!0,this.world.composer.addPass(o)}update(){this.world.Input.update(),this.world.composer.passes[1].uniforms.time.value=this.world.time.elapsedTime,this.#e(this.world)}#u(){}#s(e){new sg().setPath("/models/");let t,n=[],i=[],r,o,a,c;e.traverse(function(O){O.name.includes("TO_SELF")?t=O:O.name.includes("TO1")?n.push(O):O.name.includes("VISUAL_QUAD")?r=O:O.name.includes("HAND")?o=O:O.name.includes("ELECTRICITY")?a=O:O.name.includes("BOMB")&&(c=O),O.name.includes("knobs")&&(O.updateMatrixWorld(),i.push(O.matrixWorld))});const l=this.world.GlobalParameters.loops*this.world.GlobalParameters.barSize;this.world.geometry={},this.world.geometry.level=[],this.world.geometry.level=new bI(l,i),this.world.geometry.level.addObject(w_,n,{activeEffectID:{value:this.world.AudioSystem.activeEffectID},barLoops:{value:this.world.GlobalParameters.loops},rotationSpeed:this.world.GlobalParameters.rotationSpeed,triAmplitude:this.world.GlobalParameters.triAmplitude}).object3D.forEach(O=>{this.#n.add(O)});const h=this.world.geometry.level.addObject(EI,t,{melodyInstrumentID:{value:this.world.AudioSystem.melodyInstrumentID},rotationSpeed:this.world.GlobalParameters.rotationSpeed,triAmplitude:this.world.GlobalParameters.triAmplitude});this.#n.add(h.object3D),t.material.emissiveIntensity=.5,t.material.emissiveMap=t.material.map,t.material.emissive=t.material.color;const d=this.world.geometry.level.addObject(wI,r,{melodyInstrumentID:{value:this.world.AudioSystem.melodyInstrumentID},melody:{value:this.world.AudioSystem.melody},rotationSpeed:this.world.GlobalParameters.rotationSpeed});d.object3D.position.set(0,-.2,-.08),d.object3D.scale.set(1.25,1.25,1.25),this.#n.add(d.object3D);for(let O=0;O<l;O++){const{curveIndex:j,u:B}=this.world.Curve.getCurveIndexAndUAt(.5+O);this.world.geometry.level.moveGeometryForward(O,B,j)}this.world.geometry.interactives=[],n.forEach(O=>{const j=new sh(this.world.GlobalParameters.curveCount,O,O.material,100);this.world.geometry.interactives.push(j),this.#n.add(j.object3D)});const f=new sh(this.world.GlobalParameters.curveCount,t,t.material,400,_u);this.world.geometry.interactives.push(f),this.#n.add(f.object3D);const m=new AI(this.world.GlobalParameters.curveCount,a,a.material,400,_u);this.world.geometry.interactives.push(m),this.#n.add(m.object3D);const _=new CI(this.world.GlobalParameters.curveCount,c,c.material,400,_u);this.world.geometry.interactives.push(_),this.#n.add(_.object3D);const g=o.animations[0],p=[];g.tracks.forEach((O,j)=>{O.name.includes("scale")&&p.push(j)});for(let O=p.length;O>0;O--)g.tracks.splice(p[O-1],1);const x=g.tracks[0].times.length/g.duration;ws.makeClipAdditive(g);const v=ws.subclip(g,"IDLE",0,1,x),M=ws.subclip(g,"LEFT",2,3,x),y=ws.subclip(g,"RIGHT",4,5,x),b=ws.subclip(g,"UP",6,7,x),w=ws.subclip(g,"DOWN",8,9,x),T=ws.subclip(g,"MOVING",10,34,x);o.position.set(0,-0,-.2),o.rotation.set(0,0,0),o.scale.set(.01,.01,.01),o.userData.fingers_bones=[o.getObjectByName("middle_01_l"),o.getObjectByName("thumb_02_l"),o.getObjectByName("index_01_l"),o.getObjectByName("ring_01_l"),o.getObjectByName("pinky_01_l")],o.userData.fingers=[o.getObjectByName("heroBodymiddle"),o.getObjectByName("heroBodythumb"),o.getObjectByName("heroBodyindex"),o.getObjectByName("heroBodyring"),o.getObjectByName("heroBodypinky")],o.userData.storedFingerData=[],o.userData.fingers.forEach(O=>{o.userData.storedFingerData.push({position:O.position.clone(),rotation:O.rotation.clone(),scale:O.scale.clone()})}),this.world.fingersAlive=o.userData.fingers.length,o.userData.fingers.forEach(O=>{O.visible=!1}),o.userData.removeFinger=!1,this.world.mixer=new kb(o),this.world.hand=o;const S=xp(this.world);Mp(o,S),Ja(this.world,Jr,S),Ja(this.world,_g,S),this.world.objects.set(o.eid,o);const E=this.world.mixer.clipAction(v),L=this.world.mixer.clipAction(M),F=this.world.mixer.clipAction(y),V=this.world.mixer.clipAction(w),C=this.world.mixer.clipAction(b),U=this.world.mixer.clipAction(T);U.loop=Tm;function k(O,j){O.enabled=!0,O.setEffectiveTimeScale(1),O.setEffectiveWeight(j)}this.world.hand_actions=[E,L,F,V,C,U],this.world.hand_actions.forEach(O=>{k(O,0),O.play()}),k(U,1),this.#n.add(o)}resetGameState(){this.world.win=!1,this.world.GlobalParameters.rotationSpeed.value=0,this.world.GlobalParameters.triAmplitude.value=1,this.world.hand.userData.fingers.forEach((e,t)=>{e.position.copy(this.world.hand.userData.storedFingerData[t].position),e.rotation.copy(this.world.hand.userData.storedFingerData[t].rotation),e.scale.copy(this.world.hand.userData.storedFingerData[t].scale),e.visible=!1}),this.world.hand.userData.fingers_bones.forEach(e=>{e.scale.set(1,1,1)}),this.world.hand.userData.removeFinger=!1,this.world.fingersAlive=5,this.world.AudioSystem.resetMelody(),this.world.Curve.resetCurves(this.world),this.world.progressMustUpdate=!0,this.world.camera.position.set(0,0,0)}}const Jp={type:"start"},JI={type:"end"};class eD extends qi{constructor(e){super(),new ye(0,1),new ye(0,-1),new ye(1,0),new ye(-1,0),this.domElement=e,this.domElement.style.touchAction="none";const t=this;this.current_input=vg,this.touches={ONE:vc.MOVE,TWO:vc.DOLLY_PAN};const n=[],i={},r={NONE:-1,MOVE:0};let o=r.NONE,a=!1,c=window.innerWidth/2,l=window.innerHeight/2,u=window.innerWidth/2,h=window.innerHeight/2,d=0,f=0;this.update=function(C){this.current_input.diffX=d/t.domElement.clientWidth,this.current_input.diffY=f/t.domElement.clientHeight,this.current_input.startX=u/t.domElement.clientWidth*2-1,this.current_input.startY=-(h/t.domElement.clientHeight)*2+1,this.current_input.pointerX=c/t.domElement.clientWidth*2-1,this.current_input.pointerY=-(l/t.domElement.clientHeight)*2+1,this.current_input.mouseMove=a,d=f=0};function m(C,U,k){const O=C.getBoundingClientRect(),j=U-O.left,B=k-O.top;return{x:j,y:B}}function _(C){let U=i[C.pointerId];U===void 0&&(U=new ye,i[C.pointerId]=U),console.log(C.pageX,C.pageY),U.set(C.pageX,C.pageY)}function g(C){switch(_(C),n.length){case 1:if(t.enableRotate===!1)return;p(),o=r.MOVE;break;case 2:switch(t.touches.TWO){default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&t.dispatchEvent(Jp)}function p(){if(n.length===1){const{x:C,y:U}=m(t.domElement,n[0].pageX,n[0].pageY);c=C,u=C,l=U,h=U}}function x(C){switch(_(C),console.log("touch move",n),o){case r.MOVE:if(t.enableRotate===!1)return;v(C);break;default:o=r.NONE}}function v(C){if(n.length===1){a=!0;const{x:U,y:k}=m(t.domElement,C.pageX,C.pageY);U<c?d=c-U:U>c&&(d=U-c),d=U-c,k<l?f=l-k:k>l&&(f=k-l),f=k-l,c=U,l=k}}let M=On.None;function y(C){switch(C.button){case 0:M=On.LEFT,b(C);break;case 1:M=On.MIDDLE;break;case 2:M=On.RIGHT;break;default:M=-1}o!==r.NONE&&t.dispatchEvent(Jp)}function b(C){const{x:U,y:k}=m(t.domElement,C.pageX,C.pageY);c=U,l=k,u=U,h=k}function w(C){if(t.enabled!==!1)switch(M){case On.LEFT:if(t.enableZoom===!1)return;T(C);break;case On.MIDDLE:if(t.enablePan===!1)return;handleMouseMovePan(C);break}}function T(C){a=!0;const{x:U,y:k}=m(t.domElement,C.pageX,C.pageY);U<c?d=c-U:U>c&&(d=U-c),d=U-c,k<l?f=l-k:k>l&&(f=k-l),f=k-l,c=U,l=k}function S(C){n.push(C)}function E(C){delete i[C.pointerId];for(let U=0;U<n.length;U++)if(n[U].pointerId==C.pointerId){n.splice(U,1);return}}function L(C){t.enabled!==!1&&(n.length===0&&(C.target.setPointerCapture(C.pointerId),t.domElement.addEventListener("pointermove",F),t.domElement.addEventListener("pointerup",V)),S(C),C.pointerType==="touch"?g(C):y(C))}function F(C){t.enabled!==!1&&(C.pointerType==="touch"?x(C):w(C))}function V(C){E(C),n.length===0&&(C.target.releasePointerCapture(C.pointerId),t.domElement.removeEventListener("pointermove",F),t.domElement.removeEventListener("pointerup",V)),t.dispatchEvent(JI),M=-1,a=!1,d=0,f=0}t.domElement.addEventListener("pointerdown",L,!1),t.domElement.addEventListener("pointercancel",V,!1)}init(e){}execute(e,t){this.checkGameKeys()}}let R_=!1;const Mn=document.getElementById("musicSheet"),ci=document.getElementById("musicSheetContainer"),Hn=document.getElementById("slider"),ca=document.getElementById("slider_position"),em=document.getElementById("sheetMenu"),tm=document.getElementById("sheet_tooltips"),nm=document.getElementById("scale-div"),tD=document.getElementById("synth-name"),Io=document.getElementById("e-list"),Tu=[28,38,29,39,20,30,21,31,22,32,23,33,24,34,25,35,26,36,27,37],Eu=[18,17,16,13,12,11,10,8,7,6,5,3,4,2,9,14,15,1,0,19],Ln=[.05,.2,.6,.1,.6,.3,.5,.5,.65,.7,.1,.1,.05,.05,.05],ni=new Wo;ni.background=new Te(3355443);const Ot=10;[Mn.width,Mn.height]=[window.innerWidth,window.innerHeight];let Ui,fn,Dn;Mn.width*=.95,Mn.height*=.95,fn=Mn.width/Mn.height,fn>1&&(fn=8/10),Mn.width=Mn.height*fn,Ui=new ha(fn*Ot/-2,fn*Ot/2,Ot/2,Ot/-2,1,1e3),Ui.position.y=-.1,Ui.position.z=5,Ui.position.y=-2.5,Ui.lookAt(0,0,0);ca.style.width=`${fn/.804*100}%`;const Ys=1-fn/.804;console.log(Ys);document.getElementById("sheetMenu").style.width=`${Mn.width}px`;yo(!1);let Ml=new _h({canvas:Mn,antialias:!0,alpha:!0});Ml.shadowMap.enabled=!0;Ml.shadowMap.type=lm;let In;const jt={},im=new Bb,qt=new ye,Sn=new ye;new ye;const nD=new ye;new ye;const Xi=[],I_=[];let dc=[],Yt,wu,Xt;const sm={instrument:0,pitch:10};let Pn=[];const rm=new eD(ci);ci.addEventListener("pointerdown",iD,!1);Hn.addEventListener("pointerdown",sD,!1);function md(s,e,t){const n=s.getBoundingClientRect(),i=e.clientX-n.left,r=e.clientY-n.top;t.set(i,r)}function iD(s){ci.addEventListener("pointerup",D_),md(ci,s,qt),nD.copy(qt),qt.x=qt.x/ci.clientWidth*2-1,qt.y=-qt.y/ci.clientHeight*2+1}function D_(s){if(ci.releasePointerCapture(s.pointerId),Dn!==void 0&&Xt!==void 0&&Xt!==4){const e=Yt.AudioSystem.instruments[Xt];sm.instrument=Xt,console.log("playing note ",e),Yt.AudioSystem.playInstrumentAt(sm)}Dn=void 0,ci.removeEventListener("pointerup",D_)}function sD(s){Hn.addEventListener("pointerup",P_),Hn.addEventListener("pointermove",N_),md(Hn,s,Sn);const e=ca.getBoundingClientRect();let t=(e.right-e.left)/2;t=t/Hn.clientWidth,console.log(t),Sn.x=Sn.x/Hn.clientWidth;let n=Sn.x-t;Sn.x=Math.max(0,Math.min(Ys,Sn.x)),n=Math.max(0,Math.min(Ys,n));for(let i=0;i<Xi.length;i++){const r=Xi[i];r.position.x=r.userData.cachedXPos-n*Ot/1.23}ca.style.transform=`translateX(${n*100/(1-Ys)}%)`,console.log(Sn)}function P_(s){Hn.releasePointerCapture(s.pointerId),Hn.removeEventListener("pointermove",N_),Hn.removeEventListener("pointerup",P_)}function N_(s){md(Mn,s,Sn);const e=ca.getBoundingClientRect();let t=(e.right-e.left)/2;t=t/Hn.clientWidth,console.log(t),Sn.x=Sn.x/Hn.clientWidth;let n=Sn.x-t;Sn.x=Math.max(0,Math.min(Ys,Sn.x)),n=Math.max(0,Math.min(Ys,n));for(let i=0;i<Xi.length;i++){const r=Xi[i];r.position.x=r.userData.cachedXPos-n*Ot/1.23}ca.style.transform=`translateX(${n*100/(1-Ys)}%)`}function L_(s,e,...t){s.utils_modified||(s.utils_modified=!0,s.onBeforeCompile=n=>{if(n._utils_modified)return;n._utils_modified=!0,Object.assign(n.uniforms,e);const i=`
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
	
	`);n.vertexShader=i})}function il(s,e,t,n){s.setAttribute(e.toString(),new wc(new Int32Array(t),n)),s.attributes[e.toString()].setUsage(hh),s.attributes[e.toString()].needsUpdate=!0}let om=(s,e,t)=>{const n=new Zn(s.geometry.clone(),s.material.clone(),e.length);n.name=s.name,n.material.vertexColors=!0,n.frustumCulled=!1,il(n.geometry,"instanceID",40,1),il(n.geometry,"melodyInstrumentID",40,1);for(let i=0;i<e.length;i++)n.geometry.attributes.instanceID.array[i]=i+t*40,n.setMatrixAt(i,e[i]),n.geometry.attributes.melodyInstrumentID.array[i]=jt.melodyInstrumentID.value[i];return n.geometry.attributes.instanceID.needsUpdate=!0,n.geometry.attributes.melodyInstrumentID.needsUpdate=!0,jt.picked={value:-1},L_(n.material,jt),n},rD=(s,e)=>{const t=new Zn(s.geometry.clone(),s.material.clone(),e.length);t.name=s.name,t.material.vertexColors=!0,il(t.geometry,"instanceID",e.length,1),il(t.geometry,"melodyInstrumentID",e.length,1);for(let n=0;n<e.length;n++)t.geometry.attributes.instanceID.array[n]=n-40,t.setMatrixAt(n,e[n]),t.geometry.attributes.melodyInstrumentID.array[n]=(n+4)%4;return t.instanceMatrix.needsUpdate=!0,t.geometry.attributes.instanceID.needsUpdate=!0,t.geometry.attributes.melodyInstrumentID.needsUpdate=!0,L_(t.material,jt),t};function oD(s,e){Yt=e,jt.melodyInstrumentID={value:e.AudioSystem.melodyInstrumentID},jt.time={value:0};let t=[],n,i=[],r,o=[],a;new ai({color:65280}),s.traverse(function(T){T.name.includes("TO_SELF")?In=T:T.name.includes("TO1")&&dc.push(T),T.name.includes("Node")&&(n=T),T.parent!==null&&T.parent.name.includes("sheet_positions")&&T.name.includes("TO_")&&(T.name.includes("TO_position1")&&(r=T),T.updateMatrixWorld(),i.push(T.matrixWorld.clone())),T.name.includes("knob_")&&(T.updateMatrixWorld(),o.push(T.matrixWorld)),T.name.includes("mixer")&&(T.updateMatrixWorld(),a=T,a.userData.skipInteraction=!0),T.name.includes("bezier")&&(T.updateMatrixWorld(),Pn.push(T))}),n.children.forEach(T=>{T.updateMatrixWorld(),T.matrixWorld.elements[14]=+T.name.slice(-(T.name.length-3)),t.push(T.matrixWorld),T.material=new Ds({color:16777215})}),t.sort((T,S)=>{if(T.elements[14]>S.elements[14])return 1;if(T.elements[14]<S.elements[14])return-1;if(T.elements[14]===S.elements[14])return 0}),t.forEach(T=>{T.elements[14]=0}),In.material=In.material.clone(),In.material.emissivemap=void 0,In.material.emissiveColor={r:0,g:0,b:0},In.material.emissiveIntensity=0,In.material.vertexColors=!0,In.geometry.computeBoundingBox();var c=new al(Ot*2,Ot*2,2,2);const l=dc[0].material.map.clone();l.wrapS=pn,l.wrapT=pn,l.repeat=new ye(3.5,3.5);const u=4;var h=new ai({color:new Te(Ln[u*3+0],Ln[u*3+1],Ln[u*3+2]).multiply(new Te(.5,.5,.5)),map:l}),d=new $t(c,h);d.userData.skipInteraction=!0,d.position.z=-1,ni.add(d),ni.add(new ng(16777215,.5));const f=new tg(16777215,2);f.castShadow=!0,f.name="DIRLIGHT",f.shadow.mapSize.width=512,f.shadow.mapSize.height=512,f.shadow.camera.near=0,f.shadow.camera.far=1e3,f.shadow.camera.position.copy(Ui.position),f.position.set(50,50,50),ni.add(f);const m=om(In,t,0);m.position.set(-Ot*fn/2+.75,Ot/2+.35),m.setRotationFromAxisAngle(new P(0,0,1),-3.14/2),m.userData.beat=0,m.userData.cachedXPos=m.position.x,Xi.push(m),ni.add(m);for(let T=1;T<e.GlobalParameters.barSize;T++){const S=om(In,t,T);S.position.set(-Ot*fn/2+.75+T,Ot/2+.35,0),S.setRotationFromAxisAngle(new P(0,0,1),-3.14/2),S.userData.beat=T,S.geometry.attributes.melodyInstrumentID.needsUpdate=!0,S.userData.cachedXPos=S.position.x,Xi.push(S),ni.add(S);for(let E=0;E<40;E++)S.geometry.attributes.melodyInstrumentID.array[E]=jt.melodyInstrumentID.value[T*40+E]}-Ot*fn/2+.75+e.GlobalParameters.barSize-1;let _=2.5;new Array(4).fill(0).map((T,S)=>{const E=new Ue;return E.compose(new P(-Ot*fn/2+.25*_+S*.27*_,-Ot/2+1.5,0),new Vt().setFromAxisAngle(new P(0,0,1),S*3.14),new P(_,_,_)),E});const g=new _t;r.material=In.material.clone();const p=rD(r,i);p.receiveShadow=!0,p.name=In.name,p.userData.beat=-1,g.add(p),a.castShadow=!1,g.add(a);const x=Pn[0];Pn[0]=Pn[1],Pn[1]=x;for(let T=0;T<Pn.length;T++)Pn[T].visible=!1,Pn[T].userData.skipInteraction=!0,Pn[T].castShadow=!0,g.add(Pn[T]);const v=3;for(let T=0;T<o.length;T++){const S=new P().setFromMatrixPosition(o[o.length-T-1]),E=dc[2].clone();E.material=dc[2].material.clone(),E.rotateX(3.14/2),E.position.copy(S),E.material.color=new Te(Ln[(T*3+v)%(Ln.length-3)],Ln[(T*3+1+v)%(Ln.length-3)],Ln[(T*3+2+v)%(Ln.length-3)]),E.userData.knob=T+1,E.userData.color=T+v,E.castShadow=!0,E.recieveShadow=!1;const L=.8;E.scale.set(L,L,L),E.updateMatrixWorld(),I_.push(E),g.add(E)}g.castShadow=!0,g.receiveShadow=!0;const M=Ot*fn/1.85;g.scale.set(M,M,M);let y=new Yn;g.traverse(T=>{if(T.geometry){const S=new Yn;T.geometry.computeBoundingBox(),S.copy(T.geometry.boundingBox).applyMatrix4(T.matrixWorld)}}),y.setFromObject(g);const b=new P,w=new P;new P,y.getSize(b),y.getCenter(w),g.position.y=-Ot/2-w.y+b.y/2+M/8,g.position.x+=-Ot*fn/2-w.x+b.x/2,ni.add(g),a.receiveShadow=!0,Ml.render(ni,Ui)}function aD(){if(!R_)return;if(rm.update(),qt.x,Dn!==void 0&&Xt!==void 0&&Xt!==4){const e=Yt.AudioSystem.instruments[Xt];Dn.userData.cachedRotation=Dn.userData.cachedRotation||e.getDefault01(e.parameterNames[-wu-1]),Dn.userData.cachedRotation+=-rm.current_input.diffY*10,Dn.userData.cachedRotation=Math.min(Math.max(Dn.userData.cachedRotation,0),1),e.modifyParameter01(e.parameterNames[-wu-1],Dn.userData.cachedRotation),console.log(e.parameters.decay),am(Xt),Dn.rotation.set(0,0,-Dn.userData.cachedRotation*3.14*2)}im.setFromCamera(qt,Ui),jt.time.value>0?jt.time.value-=.1:jt.time.value=0;const s=im.intersectObjects(ni.children);if(Ml.render(ni,Ui),s.length!==0){let e;for(let a=0;a<s.length;a++)if(!s[a].object.userData.skipInteraction){e=s[a];break}if(e===void 0)return;if(e.object.userData.beat===-1){const a=e.object.geometry.attributes.melodyInstrumentID.array[e.instanceId]%5;Xt!==void 0&&(Pn[Xt].visible=!1),Pn[a].visible=!0,Xt=a;const c=Yt.AudioSystem.instruments[Xt];I_.forEach((l,u)=>{const h=u<c.parameterNames.length;l.visible=h,h&&(l.userData.cachedRotation=c.getDefault01(c.parameterNames[u]),l.rotation.set(0,0,-l.userData.cachedRotation*3.14*2))}),console.log("SETCACHEDROTATION"),jt.time.value=1,jt.picked.value=e.instanceId+e.object.userData.beat*40,qt.x=qt.y=-2,am(Xt);return}if(e.object.userData.knob!==void 0){wu=-e.object.userData.knob;const a=e.object.userData.color=Math.floor(Math.random()*4);e.object.material.color=new Te(Ln[a*3],Ln[a*3+1],Ln[a*3+2]),Dn=e.object,qt.x=qt.y=-2;return}const t=e.object.userData.beat,n=e.instanceId;if(jt.time.value=1,jt.picked.value=e.instanceId+t*40,Xt===void 0){Yt.AudioSystem.playEmptyInstrument(),qt.x=qt.y=-2;return}let i=0;Tu.includes(n)?i=Tu.length-1-Tu.indexOf(n):Eu.includes(n)?i=Eu.length-1-Eu.indexOf(n):console.log("there is no instance with given id");let r=e.object.geometry.attributes.melodyInstrumentID.array[n];r=r===Xt?4:Xt,e.object.geometry.attributes.melodyInstrumentID.array[n]=r,jt.melodyInstrumentID.value[t*40+n]=r;const o=Yt.AudioSystem.addInstrumentOnPosition(r,t,n,i);r!==4&&Yt.AudioSystem.playInstrumentAt(o),Yt.Curve.geometryNeedsUpdate=!0,e.object.geometry.attributes.melodyInstrumentID.needsUpdate=!0,qt.x=qt.y=-2}}function yo(s){R_=s,s?(Mn.style.display="block",ci.style.display="block",em.style.display="block",tm.style.display="block",nm.style.display="flex"):(ci.style.display="none",Mn.style.display="none",em.style.display="none",tm.style.display="none",nm.style.display="none")}function am(s){const e=Yt.AudioSystem.instruments[s];let t="";t+=e.name,t+=`
`;for(let n=0;n<Io.children.length;n++)Io.children[n].children[0].textContent="            ",Io.children[n].children[1].textContent="   ";Object.keys(e.parameters).forEach((n,i)=>{t+=`
`;let r;if(n==="waveform")t+=`${n}: ${co[Math.floor(e.parameters[n].value)]}`,r=co[Math.floor(e.parameters[n].value)];else if(n==="noiseType")t+=`${n}: ${nl[Math.floor(e.parameters[n].value)]}`,r=nl[Math.floor(e.parameters[n].value)];else{const o=e.parameters[n].value>5?e.parameters[n].value.toFixed(0):e.parameters[n].value.toPrecision(2);t+=`${n}: ${o}`,r=o}Io.children[i].children[0].textContent=n,Io.children[i].children[1].textContent=r}),tD.textContent=e.name}function cD(s){const e=Yt.AudioSystem.getMelodyData(s);e.speed=Yt.GlobalParameters.speed;let t=JSON.stringify(e);lD(t,"my_melody.txt","text/plain")}function lD(s,e,t){var n=document.createElement("a"),i=new Blob([s],{type:t});n.href=URL.createObjectURL(i),n.download=e,n.click()}function O_(s,e=!1){fetch(s).then(t=>t.json()).then(t=>{const n=t;Yt.AudioSystem.setMelodyFromJsonData(n,e),n.speed!==void 0&&(Yt.GlobalParameters.speed=n.speed,Yt.camera.userData.speed=n.speed),n.melody.forEach(i=>{Xi[i.beat].geometry.attributes.melodyInstrumentID.array[i.id_on_beat]=i.instrument}),Xi.forEach(i=>{i.geometry.attributes.melodyInstrumentID.needsUpdate=!0}),Yt.Curve.geometryNeedsUpdate=!0})}function bl(s,e=!1){Xi.forEach((t,n)=>{for(let i=0;i<40;i++)t.geometry.attributes.melodyInstrumentID.array[i]=jt.melodyInstrumentID.value[n*40+i];t.geometry.attributes.melodyInstrumentID.needsUpdate=!0})}const uD="sleepwell";let Ge,Ni,Dr,Ta=!1;await hD().catch(s=>console.error(s));dD();oD(Dr,Ge.world);Ge.update();document.styleSheets[0].insertRule("canvas { outline:none; border:none; }",0);async function hD(){Ni=new Wo,Dr=new Wo;const s=new sg().setPath("/models/"),e=new Jm().setPath("/textures/"),t=await e.loadAsync("rgbw.png");t.flipY=!1,t.colorSpace=gt;const i=(await s.loadAsync("TO_self.gltf")).scene.children[0];i.name="TO_SELF",i.material=new Ds({color:16777215}),i.material.roughness=0,i.material.map=t,Ni.add(i),Dr.add(i.clone());const r=await s.loadAsync("knob_mat.gltf");Ni.add(r.scene.children[0]);const o=await e.loadAsync("w_k.png");o.flipY=!1,o.colorSpace=gt;const a=await s.loadAsync("knobs_self.gltf");a.scene.traverse(v=>{v.isMesh&&(v.material=new Ds({color:16777215}),v.material.roughness=0,v.material.map=o)}),Ni.add(a.scene),Dr.add(a.scene.clone());const c=await s.loadAsync("musicSheetTris1.gltf"),l=await s.loadAsync("sheet_positions.gltf");console.log(c);const h=(await s.loadAsync("beam.gltf")).scene.children[0];h.name="VISUAL_QUAD",h.material=new Ds({color:16777215}),h.roughness=0,h.material.side=bn,h.material.transparent=!0,h.material.opacity=.5,h.material.blending=Lo,h.material.depthWrite=!1;const d=await e.loadAsync("fractal1.png");d.wrapS=pn,d.wrapT=pn,d.repeat=new ye(1,1),h.material.map=d,Ni.add(h),Dr.add(c.scene),Dr.add(l.scene);const f=await s.loadAsync("hand_w_fingers.gltf");for(f.scene.children[0].name="HAND";f.scene.children.length>1;)f.scene.children[0].attach(f.scene.children[1]);f.scene.children[0].animations=f.animations,f.scene.children[0].children[0].material=new Ds({color:16777215,emissive:3355443}),f.scene.children[0].children[0].material.roughness=0,Ni.add(f.scene.children[0]);const _=(await s.loadAsync("electricity.gltf")).scene.children[0];_.name="ELECTRICITY",_.material=new Ds({color:16777215}),_.roughness=0,_.material.side=bn,_.material.transparent=!0,_.material.opacity=.5,_.material.blending=Lo,_.material.depthWrite=!1;const g=await e.loadAsync("electric.png");g.wrapS=pn,g.wrapT=pn,g.repeat=new ye(1,1),_.material.map=g,Ni.add(_);const x=(await s.loadAsync("bomb.gltf")).scene.children[0];x.name="BOMB",x.material=new Ds({color:16777215}),x.roughness=0,x.material.side=bn,x.material.transparent=!0,x.material.opacity=1,x.material.blending=Lo,x.material.depthWrite=!1,Ni.add(x)}function dD(){Ge=new QI(Ni)}function gd(){Ta=!0,Ge.world.paused=!1}function ys(s){let e=document.getElementById("startScreen");s?e.style.display="block":e.style.display="none"}function _d(s){let e=document.getElementById("codeEntering");s?e.style.display="block":e.style.display="none"}function Tl(s){let e=document.getElementById("pauseScreen");s?e.style.display="block":e.style.display="none"}function vd(s){let e=document.getElementById("songList");s?(e.style.display="block",document.querySelectorAll("span").forEach(t=>{t.offsetWidth>250&&(console.log(t.offsetWidth),console.log(t.textContent),console.log(t.getAnimations()[0]),t.animate({transform:["translateX(0px)","translateX(-"+(t.offsetWidth-250)+"px)"]},{duration:2e3,iterations:1/0,direction:"alternate"}))})):e.style.display="none"}function yd(s){let e=document.getElementById("sheet_songList");s?(e.style.display="block",document.querySelectorAll("span").forEach(t=>{t.offsetWidth>250&&(console.log(t.offsetWidth),console.log(t.textContent),console.log(t.getAnimations()[0]),t.animate({transform:["translateX(0px)","translateX(-"+(t.offsetWidth-250)+"px)"]},{duration:2e3,iterations:1/0,direction:"alternate"}))})):e.style.display="none"}function ar(s){let e=document.getElementById("playScreen");s?e.style.display="flex":e.style.display="none",Ge.world.songEditingUnlocked&&Ge.world.editMode===!0?document.getElementById("editSongButton").style.display="block":document.getElementById("editSongButton").style.display="none"}document.getElementById("chooseSong").addEventListener("click",function(){ys(!1),vd(!0)});document.getElementById("submitButton").addEventListener("click",function(){document.getElementById("input_text").value===uD&&(Ge.world.songEditingUnlocked=!0,_d(!1),yo(!0))});function fD(s){console.log(s.target),console.log(s.target.dataset.url),vd(!1),ar(!0),O_(s.target.dataset.url),Ge.world.Curve.placeInteractive(Ge.world,1),Ge.world.Curve.placeInteractive(Ge.world,2),gd()}function pD(s){yd(!1),Ge.world.AudioSystem.resetMelody(),bl(),O_(s.target.dataset.url,!0),this.geometryNeedsUpdate=!0,this.updateGeometry(Ge.world)}document.querySelectorAll("div.melody").forEach(s=>{s.addEventListener("click",fD)});document.querySelectorAll("div.sheet_melody").forEach(s=>{s.addEventListener("click",pD)});document.getElementById("continueBtn").addEventListener("click",function(){Tl(!1),ar(!0),gd()});document.getElementById("makeSong").addEventListener("click",function(){ys(!1),Ge.world.songEditingUnlocked?yo(!0):_d(!0)});document.getElementById("editSongButton").addEventListener("click",function(){ar(!1),Ge.world.paused=!0,yo(!0)});document.getElementById("resetAndExitToMenu").addEventListener("click",function(){Ta=!1,Tl(!1),ys(!0),Ge.world.editMode=!1,Ge.resetGameState(),bl()});document.getElementById("pausebtn").addEventListener("click",function(){ar(!1),Tl(!0),Ge.world.paused=!0});document.getElementById("playFromSheetBtn").addEventListener("click",function(){yo(!1),Ge.world.editMode=!0,ar(!0),gd()});document.getElementById("closeSheetBtn").addEventListener("click",function(){yo(!1),Ta?Tl(!0):ys(!0)});document.getElementById("rtmm").addEventListener("click",function(){vd(!1),ys(!0)});document.getElementById("sheet_goback").addEventListener("click",function(){yd(!1)});document.getElementById("rtm").addEventListener("click",function(){_d(!1),ys(!0)});document.getElementById("gotomenu").addEventListener("click",function(){Ta=!1,Ge.world.showEndScreen(!1),ys(!0),Ge.world.editMode=!1,Ge.resetGameState(),bl()});document.getElementById("gotomenu_w").addEventListener("click",function(){Ta=!1,Ge.resetGameState(),bl(),Ge.world.showWinScreen(!1),ys(!0)});document.getElementById("savemelody").addEventListener("click",function(){cD()});document.getElementById("readFromJson").addEventListener("click",function(){yd(!0),document.getElementById("scaleSelect").value=Ge.world.AudioSystem.getActiveScale();const s=Ge.world.AudioSystem.getCurrentTonicAndOctave();document.getElementById("tonicSelect").value=s.tonic,document.getElementById("octaveSelect").value=s.octave,document.getElementById("speedSelect").value=Ge.world.GlobalParameters.speed});document.getElementById("scaleSelect").onchange=s=>{Ge.world.AudioSystem.setActiveScale(s.target.value)};document.getElementById("tonicSelect").onchange=s=>{Ge.world.AudioSystem.setTonicAndOctave(s.target.value,void 0)};document.getElementById("octaveSelect").onchange=s=>{console.log(s.target.value),Ge.world.AudioSystem.setTonicAndOctave(void 0,s.target.value)};document.getElementById("speedSelect").onchange=s=>{console.log(s.target.value),console.log(Ge.world.GlobalParameters.speed),Ge.world.GlobalParameters.speed=s.target.value,console.log(Ge.world.GlobalParameters.speed),Ge.world.camera.userData.speed=Ge.world.GlobalParameters.speed};Ge.world.showEndScreen=function(s){ar(!1);let e=document.getElementById("endScreen");s?e.style.display="block":e.style.display="none"};Ge.world.showWinScreen=function(s){ar(!1);let e=document.getElementById("winScreen");s?e.style.display="block":e.style.display="none"};Ge.world.updateProgressBar=function(s){};U_();function U_(){requestAnimationFrame(U_),aD(),Ge.update()}document.addEventListener("wheel",function(e){e.ctrlKey&&e.preventDefault()},{passive:!1});
