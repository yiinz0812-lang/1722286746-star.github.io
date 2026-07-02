(()=>{var sh=0,ko=1,ah=2;var kr=1,oh=2,Gn=3,Vn=0,Tt=1,Ot=2,si=0,Hr=1,Ho=2,Wo=3,Xo=4,lh=5;var kn=100,ch=101,hh=102,uh=103,dh=104,ph=200,mh=201,fh=202,gh=203,_h=204,vh=205,xh=206,yh=207,Mh=208,Sh=209,bh=210,Th=211,Eh=212,wh=213,Ah=214,jo=0,qo=1,Yo=2,Ea=3,Zo=4,Jo=5,Ko=6,$o=7,Ch=0,Rh=1,Ih=2,qt=0,Qo=1,el=2,tl=3,il=4,nl=5,rl=6,sl=7;var al=300,Hn=301,Qi=302,wa=303,Aa=304,Wr=306,Ls=1e3,Pi=1001,Ds=1002,Nt=1003,Ph=1004;var Xr=1005;var xt=1006,Ca=1007;var en=1008;var Pt=1009,ol=1010,ll=1011,Wn=1012,Ra=1013,Mi=1014,Yt=1015,ai=1016,Ia=1017,Pa=1018,Xn=1020,cl=35902,hl=35899,Lh=1021,Dh=1022,Zt=1023,Fi=1026,tn=1027,ul=1028,La=1029,jn=1030,dl=1031;var pl=1033,Da=33776,Ua=33777,Na=33778,Fa=33779,ml=35840,fl=35841,gl=35842,_l=35843,vl=36196,xl=37492,yl=37496,Ml=37488,Sl=37489,bl=37490,Tl=37491,El=37808,wl=37809,Al=37810,Cl=37811,Rl=37812,Il=37813,Pl=37814,Ll=37815,Dl=37816,Ul=37817,Nl=37818,Fl=37819,Ol=37820,Bl=37821,zl=36492,Gl=36494,Vl=36495,kl=36283,Hl=36284,Wl=36285,Xl=36286;var lr=2300,Us=2301,Is=2302,Ro=2303,Io=2400,Po=2401,Lo=2402;var Uh=0,Nh=1,nn="",gt="srgb",Yi="srgb-linear",cr="linear",je="srgb";var qi=7680;var Fh=512,Oh=513,Bh=514,Oa=515,zh=516,Gh=517,Ba=518,Vh=519,Do=35044;var jl="300 es",vi=2e3,wn=2001;function Lu(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function An(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function kh(){let r=An("canvas");return r.style.display="block",r}var Cc={},Cn=null;function ql(...r){let e="THREE."+r.shift();Cn?Cn("log",e,...r):console.log(e,...r)}function Hh(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ye(...r){let e="THREE."+(r=Hh(r)).shift();if(Cn)Cn("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function be(...r){let e="THREE."+(r=Hh(r)).shift();if(Cn)Cn("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function hr(...r){let e=r.join(" ");e in Cc||(Cc[e]=!0,ye(...r))}function Wh(r,e,t){return new Promise(function(i,n){setTimeout(function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}},t)})}var Xh={[jo]:1,[Yo]:6,[Zo]:7,[Ea]:5,[qo]:0,[Ko]:2,[$o]:4,[Jo]:3},xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i!==void 0&&i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,e);e.target=null}}},mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rc=1234567,Tn=Math.PI/180,Rn=180/Math.PI;function rn(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(mt[255&r]+mt[r>>8&255]+mt[r>>16&255]+mt[r>>24&255]+"-"+mt[255&e]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[63&t|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[255&i]+mt[i>>8&255]+mt[i>>16&255]+mt[i>>24&255]).toLowerCase()}function Ue(r,e,t){return Math.max(e,Math.min(t,r))}function Uo(r,e){return(r%e+e)%e}function sr(r,e,t){return(1-t)*r+t*e}function bn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function St(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var Lt={DEG2RAD:Tn,RAD2DEG:Rn,generateUUID:rn,clamp:Ue,euclideanModulo:Uo,mapLinear:function(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:sr,damp:function(r,e,t,i){return sr(r,e,1-Math.exp(-t*i))},pingpong:function(r,e=1){return e-Math.abs(Uo(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(Rc=r);let e=Rc+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*Tn},radToDeg:function(r){return r*Rn},isPowerOfTwo:function(r){return!(r&r-1)&&r!==0},ceilPowerOfTwo:function(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))},floorPowerOfTwo:function(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))},setQuaternionFromProperEuler:function(r,e,t,i,n){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),p=a((e-i)/2),d=s((i-e)/2),f=a((i-e)/2);switch(n){case"XYX":r.set(o*h,c*u,c*p,o*l);break;case"YZY":r.set(c*p,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*p,o*h,o*l);break;case"XZX":r.set(o*h,c*f,c*d,o*l);break;case"YXY":r.set(c*d,o*h,c*f,o*l);break;case"ZYZ":r.set(c*f,c*d,o*h,o*l);break;default:ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}},normalize:St,denormalize:bn},ne=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ue(this.x,e.x,t.x),this.y=Ue(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ue(this.x,e,t),this.y=Ue(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ue(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ue(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ft=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let c=i[n+0],l=i[n+1],h=i[n+2],u=i[n+3],p=s[a+0],d=s[a+1],f=s[a+2],m=s[a+3];if(u!==m||c!==p||l!==d||h!==f){let v=c*p+l*d+h*f+u*m;v<0&&(p=-p,d=-d,f=-f,m=-m,v=-v);let g=1-o;if(v<.9995){let _=Math.acos(v),y=Math.sin(_);g=Math.sin(g*_)/y,c=c*g+p*(o=Math.sin(o*_)/y),l=l*g+d*o,h=h*g+f*o,u=u*g+m*o}else{c=c*g+p*o,l=l*g+d*o,h=h*g+f*o,u=u*g+m*o;let _=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=_,l*=_,h*=_,u*=_}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,a){let o=i[n],c=i[n+1],l=i[n+2],h=i[n+3],u=s[a],p=s[a+1],d=s[a+2],f=s[a+3];return e[t]=o*f+h*u+c*d-l*p,e[t+1]=c*f+h*p+l*u-o*d,e[t+2]=l*f+h*d+o*p-c*u,e[t+3]=h*f-o*u-c*p-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(n/2),u=o(s/2),p=c(i/2),d=c(n/2),f=c(s/2);switch(a){case"XYZ":this._x=p*h*u+l*d*f,this._y=l*d*u-p*h*f,this._z=l*h*f+p*d*u,this._w=l*h*u-p*d*f;break;case"YXZ":this._x=p*h*u+l*d*f,this._y=l*d*u-p*h*f,this._z=l*h*f-p*d*u,this._w=l*h*u+p*d*f;break;case"ZXY":this._x=p*h*u-l*d*f,this._y=l*d*u+p*h*f,this._z=l*h*f+p*d*u,this._w=l*h*u-p*d*f;break;case"ZYX":this._x=p*h*u-l*d*f,this._y=l*d*u+p*h*f,this._z=l*h*f-p*d*u,this._w=l*h*u+p*d*f;break;case"YZX":this._x=p*h*u+l*d*f,this._y=l*d*u+p*h*f,this._z=l*h*f-p*d*u,this._w=l*h*u-p*d*f;break;case"XZY":this._x=p*h*u-l*d*f,this._y=l*d*u-p*h*f,this._z=l*h*f+p*d*u,this._w=l*h*u+p*d*f;break;default:ye("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],p=i+o+u;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(a-n)*d}else if(i>o&&i>u){let d=2*Math.sqrt(1+i-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(n+a)/d,this._z=(s+l)/d}else if(o>u){let d=2*Math.sqrt(1+o-i-u);this._w=(s-l)/d,this._x=(n+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-i-o);this._w=(a-n)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ue(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+n*l-s*c,this._y=n*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-n*o,this._w=a*h-i*o-n*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+n*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+n*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class r{constructor(e=0,t=0,i=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ic.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ic.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*n-o*i),h=2*(o*t-s*n),u=2*(s*i-a*t);return this.x=t+c*l+a*u-o*h,this.y=i+c*h+o*l-s*u,this.z=n+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ue(this.x,e.x,t.x),this.y=Ue(this.y,e.y,t.y),this.z=Ue(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ue(this.x,e,t),this.y=Ue(this.y,e,t),this.z=Ue(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ue(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=n*c-s*o,this.y=s*a-i*c,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return eo.copy(this).projectOnVector(e),this.sub(eo)}reflect(e){return this.sub(eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ue(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},eo=new A,Ic=new Ft,Ie=class r{constructor(e,t,i,n,s,a,o,c,l){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,c,l)}set(e,t,i,n,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],p=i[2],d=i[5],f=i[8],m=n[0],v=n[3],g=n[6],_=n[1],y=n[4],T=n[7],S=n[2],w=n[5],P=n[8];return s[0]=a*m+o*_+c*S,s[3]=a*v+o*y+c*w,s[6]=a*g+o*T+c*P,s[1]=l*m+h*_+u*S,s[4]=l*v+h*y+u*w,s[7]=l*g+h*T+u*P,s[2]=p*m+d*_+f*S,s[5]=p*v+d*y+f*w,s[8]=p*g+d*T+f*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*s*h+i*o*c+n*s*l-n*a*c}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,p=o*c-h*s,d=l*s-a*c,f=t*u+i*p+n*d;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/f;return e[0]=u*m,e[1]=(n*l-h*i)*m,e[2]=(o*i-n*a)*m,e[3]=p*m,e[4]=(h*t-n*c)*m,e[5]=(n*s-o*t)*m,e[6]=d*m,e[7]=(i*c-l*t)*m,e[8]=(a*t-i*s)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-n*l,n*c,-n*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(to.makeScale(e,t)),this}rotate(e){return this.premultiply(to.makeRotation(-e)),this}translate(e,t){return this.premultiply(to.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},to=new Ie,Pc=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lc=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Du(){let r={enabled:!0,workingColorSpace:Yi,spaces:{},convert:function(n,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===je&&(n.r=_i(n.r),n.g=_i(n.g),n.b=_i(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===je&&(n.r=En(n.r),n.g=En(n.g),n.b=En(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===""?cr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return hr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return hr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Yi]:{primaries:e,whitePoint:i,transfer:cr,toXYZ:Pc,fromXYZ:Lc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gt},outputColorSpaceConfig:{drawingBufferColorSpace:gt}},[gt]:{primaries:e,whitePoint:i,transfer:je,toXYZ:Pc,fromXYZ:Lc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gt}}}),r}var He=Du();function _i(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function En(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var un,Ns=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{un===void 0&&(un=An("canvas")),un.width=e.width,un.height=e.height;let n=un.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=un}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=An("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=255*_i(s[a]/255);return i.putImageData(n,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*_i(t[i]/255)):t[i]=_i(t[i]);return{data:t,width:e.width,height:e.height}}return ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Uu=0,In=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=rn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(io(n[a].image)):s.push(io(n[a]))}else s=io(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function io(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ns.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ye("Texture: Unable to serialize Texture."),{})}var Nu=0,no=new A,bt=class r extends xi{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=1001,n=1001,s=1006,a=1008,o=1023,c=1009,l=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=rn(),this.name="",this.source=new In(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(no).x}get height(){return this.source.getSize(no).y}get depth(){return this.source.getSize(no).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i:ye(`Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==al)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ls:e.x=e.x-Math.floor(e.x);break;case Pi:e.x=e.x<0?0:1;break;case Ds:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Ls:e.y=e.y-Math.floor(e.y);break;case Pi:e.y=e.y<0?0:1;break;case Ds:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};bt.DEFAULT_IMAGE=null,bt.DEFAULT_MAPPING=al,bt.DEFAULT_ANISOTROPY=1;var Ke=class r{constructor(e=0,t=0,i=0,n=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,c=e.elements,l=c[0],h=c[4],u=c[8],p=c[1],d=c[5],f=c[9],m=c[2],v=c[6],g=c[10];if(Math.abs(h-p)<.01&&Math.abs(u-m)<.01&&Math.abs(f-v)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+m)<.1&&Math.abs(f+v)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,T=(d+1)/2,S=(g+1)/2,w=(h+p)/4,P=(u+m)/4,U=(f+v)/4;return y>T&&y>S?y<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(y),n=w/i,s=P/i):T>S?T<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(T),i=w/n,s=U/n):S<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(S),i=P/s,n=U/s),this.set(i,n,s,t),this}let _=Math.sqrt((v-f)*(v-f)+(u-m)*(u-m)+(p-h)*(p-h));return Math.abs(_)<.001&&(_=1),this.x=(v-f)/_,this.y=(u-m)/_,this.z=(p-h)/_,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ue(this.x,e.x,t.x),this.y=Ue(this.y,e.y,t.y),this.z=Ue(this.z,e.z,t.z),this.w=Ue(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ue(this.x,e,t),this.y=Ue(this.y,e,t),this.z=Ue(this.z,e,t),this.w=Ue(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ue(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fs=class extends xi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t),this.textures=[];let n={width:e,height:t,depth:i.depth},s=new bt(n),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new In(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ct=class extends Fs{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ur=class extends bt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Os=class extends bt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Le=class r{constructor(e,t,i,n,s,a,o,c,l,h,u,p,d,f,m,v){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,c,l,h,u,p,d,f,m,v)}set(e,t,i,n,s,a,o,c,l,h,u,p,d,f,m,v){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=n,g[1]=s,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=p,g[3]=d,g[7]=f,g[11]=m,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,n=1/dn.setFromMatrixColumn(e,0).length(),s=1/dn.setFromMatrixColumn(e,1).length(),a=1/dn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(n),l=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let p=a*h,d=a*u,f=o*h,m=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+f*l,t[5]=p-m*l,t[9]=-o*c,t[2]=m-p*l,t[6]=f+d*l,t[10]=a*c}else if(e.order==="YXZ"){let p=c*h,d=c*u,f=l*h,m=l*u;t[0]=p+m*o,t[4]=f*o-d,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-f,t[6]=m+p*o,t[10]=a*c}else if(e.order==="ZXY"){let p=c*h,d=c*u,f=l*h,m=l*u;t[0]=p-m*o,t[4]=-a*u,t[8]=f+d*o,t[1]=d+f*o,t[5]=a*h,t[9]=m-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let p=a*h,d=a*u,f=o*h,m=o*u;t[0]=c*h,t[4]=f*l-d,t[8]=p*l+m,t[1]=c*u,t[5]=m*l+p,t[9]=d*l-f,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let p=a*c,d=a*l,f=o*c,m=o*l;t[0]=c*h,t[4]=m-p*u,t[8]=f*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*u+f,t[10]=p-m*u}else if(e.order==="XZY"){let p=a*c,d=a*l,f=o*c,m=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=p*u+m,t[5]=a*h,t[9]=d*u-f,t[2]=f*u-d,t[6]=o*h,t[10]=m*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fu,e,Ou)}lookAt(e,t,i){let n=this.elements;return Et.subVectors(e,t),Et.lengthSq()===0&&(Et.z=1),Et.normalize(),bi.crossVectors(i,Et),bi.lengthSq()===0&&(Math.abs(i.z)===1?Et.x+=1e-4:Et.z+=1e-4,Et.normalize(),bi.crossVectors(i,Et)),bi.normalize(),es.crossVectors(Et,bi),n[0]=bi.x,n[4]=es.x,n[8]=Et.x,n[1]=bi.y,n[5]=es.y,n[9]=Et.y,n[2]=bi.z,n[6]=es.z,n[10]=Et.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],p=i[9],d=i[13],f=i[2],m=i[6],v=i[10],g=i[14],_=i[3],y=i[7],T=i[11],S=i[15],w=n[0],P=n[4],U=n[8],R=n[12],G=n[1],W=n[5],B=n[9],V=n[13],z=n[2],O=n[6],k=n[10],j=n[14],re=n[3],ge=n[7],ue=n[11],pe=n[15];return s[0]=a*w+o*G+c*z+l*re,s[4]=a*P+o*W+c*O+l*ge,s[8]=a*U+o*B+c*k+l*ue,s[12]=a*R+o*V+c*j+l*pe,s[1]=h*w+u*G+p*z+d*re,s[5]=h*P+u*W+p*O+d*ge,s[9]=h*U+u*B+p*k+d*ue,s[13]=h*R+u*V+p*j+d*pe,s[2]=f*w+m*G+v*z+g*re,s[6]=f*P+m*W+v*O+g*ge,s[10]=f*U+m*B+v*k+g*ue,s[14]=f*R+m*V+v*j+g*pe,s[3]=_*w+y*G+T*z+S*re,s[7]=_*P+y*W+T*O+S*ge,s[11]=_*U+y*B+T*k+S*ue,s[15]=_*R+y*V+T*j+S*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],p=e[10],d=e[14],f=e[3],m=e[7],v=e[11],g=e[15],_=c*d-l*p,y=o*d-l*u,T=o*p-c*u,S=a*d-l*h,w=a*p-c*h,P=a*u-o*h;return t*(m*_-v*y+g*T)-i*(f*_-v*S+g*w)+n*(f*y-m*S+g*P)-s*(f*T-m*w+v*P)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],p=e[10],d=e[11],f=e[12],m=e[13],v=e[14],g=e[15],_=t*o-i*a,y=t*c-n*a,T=t*l-s*a,S=i*c-n*o,w=i*l-s*o,P=n*l-s*c,U=h*m-u*f,R=h*v-p*f,G=h*g-d*f,W=u*v-p*m,B=u*g-d*m,V=p*g-d*v,z=_*V-y*B+T*W+S*G-w*R+P*U;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/z;return e[0]=(o*V-c*B+l*W)*O,e[1]=(n*B-i*V-s*W)*O,e[2]=(m*P-v*w+g*S)*O,e[3]=(p*w-u*P-d*S)*O,e[4]=(c*G-a*V-l*R)*O,e[5]=(t*V-n*G+s*R)*O,e[6]=(v*T-f*P-g*y)*O,e[7]=(h*P-p*T+d*y)*O,e[8]=(a*B-o*G+l*U)*O,e[9]=(i*G-t*B-s*U)*O,e[10]=(f*w-m*T+g*_)*O,e[11]=(u*T-h*w-d*_)*O,e[12]=(o*R-a*W-c*U)*O,e[13]=(t*W-i*R+n*U)*O,e[14]=(m*y-f*S-v*_)*O,e[15]=(h*S-u*y+p*_)*O,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-n*c,l*c+n*o,0,l*o+n*c,h*o+i,h*c-n*a,0,l*c-n*o,h*c+n*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,p=s*l,d=s*h,f=s*u,m=a*h,v=a*u,g=o*u,_=c*l,y=c*h,T=c*u,S=i.x,w=i.y,P=i.z;return n[0]=(1-(m+g))*S,n[1]=(d+T)*S,n[2]=(f-y)*S,n[3]=0,n[4]=(d-T)*w,n[5]=(1-(p+g))*w,n[6]=(v+_)*w,n[7]=0,n[8]=(f+y)*P,n[9]=(v-_)*P,n[10]=(1-(p+m))*P,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=dn.set(n[0],n[1],n[2]).length(),o=dn.set(n[4],n[5],n[6]).length(),c=dn.set(n[8],n[9],n[10]).length();s<0&&(a=-a),Vt.copy(this);let l=1/a,h=1/o,u=1/c;return Vt.elements[0]*=l,Vt.elements[1]*=l,Vt.elements[2]*=l,Vt.elements[4]*=h,Vt.elements[5]*=h,Vt.elements[6]*=h,Vt.elements[8]*=u,Vt.elements[9]*=u,Vt.elements[10]*=u,t.setFromRotationMatrix(Vt),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,n,s,a,o=2e3,c=!1){let l=this.elements,h=2*s/(t-e),u=2*s/(i-n),p=(t+e)/(t-e),d=(i+n)/(i-n),f,m;if(c)f=s/(a-s),m=a*s/(a-s);else if(o===vi)f=-(a+s)/(a-s),m=-2*a*s/(a-s);else{if(o!==wn)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);f=-a/(a-s),m=-a*s/(a-s)}return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=2e3,c=!1){let l=this.elements,h=2/(t-e),u=2/(i-n),p=-(t+e)/(t-e),d=-(i+n)/(i-n),f,m;if(c)f=1/(a-s),m=a/(a-s);else if(o===vi)f=-2/(a-s),m=-(a+s)/(a-s);else{if(o!==wn)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=-1/(a-s),m=-s/(a-s)}return l[0]=h,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},dn=new A,Vt=new Le,Fu=new A(0,0,0),Ou=new A(1,1,1),bi=new A,es=new A,Et=new A,Dc=new Le,Uc=new Ft,Wt=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],a=n[4],o=n[8],c=n[1],l=n[5],h=n[9],u=n[2],p=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ue(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Dc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uc.setFromEuler(this),this.setFromQuaternion(Uc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wt.DEFAULT_ORDER="XYZ";var dr=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Bu=0,Nc=new A,pn=new Ft,ui=new Le,ts=new A,Qn=new A,zu=new A,Gu=new Ft,Fc=new A(1,0,0),Oc=new A(0,1,0),Bc=new A(0,0,1),zc={type:"added"},Vu={type:"removed"},mn={type:"childadded",child:null},ro={type:"childremoved",child:null},_t=class r extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new A,t=new Wt,i=new Ft,n=new A(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Le},normalMatrix:{value:new Ie}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pn.setFromAxisAngle(e,t),this.quaternion.multiply(pn),this}rotateOnWorldAxis(e,t){return pn.setFromAxisAngle(e,t),this.quaternion.premultiply(pn),this}rotateX(e){return this.rotateOnAxis(Fc,e)}rotateY(e){return this.rotateOnAxis(Oc,e)}rotateZ(e){return this.rotateOnAxis(Bc,e)}translateOnAxis(e,t){return Nc.copy(e).applyQuaternion(this.quaternion),this.position.add(Nc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fc,e)}translateY(e){return this.translateOnAxis(Oc,e)}translateZ(e){return this.translateOnAxis(Bc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ts.copy(e):ts.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Qn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Qn,ts,this.up):ui.lookAt(ts,Qn,this.up),this.quaternion.setFromRotationMatrix(ui),n&&(ui.extractRotation(n.matrixWorld),pn.setFromRotationMatrix(ui),this.quaternion.premultiply(pn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(be("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zc),mn.child=e,this.dispatchEvent(mn),mn.child=null):be("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vu),ro.child=e,this.dispatchEvent(ro),ro.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zc),mn.child=e,this.dispatchEvent(mn),mn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qn,e,zu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qn,Gu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,n=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*n,s[13]+=i-s[1]*t-s[5]*i-s[9]*n,s[14]+=n-s[2]*t-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),this.static!==!1&&(n.static=this.static),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];n.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),p=a(e.skeletons),d=a(e.animations),f=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),p.length>0&&(i.skeletons=p),d.length>0&&(i.animations=d),f.length>0&&(i.nodes=f)}return i.object=n,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};_t.DEFAULT_UP=new A(0,1,0),_t.DEFAULT_MATRIX_AUTO_UPDATE=!0,_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ii=class extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}},ku={type:"move"},Pn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let m of e.hand.values()){let v=t.getJointPose(m,i),g=this._getHandJoint(l,m);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),d=.02,f=.005;l.inputState.pinching&&p>d+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=d-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ku)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ii;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},is={h:0,s:0,l:0};function so(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var Ee=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,He.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=He.workingColorSpace){return this.r=e,this.g=t,this.b=i,He.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=He.workingColorSpace){if(e=Uo(e,1),t=Ue(t,0,1),i=Ue(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=so(a,s,e+1/3),this.g=so(a,s,e),this.b=so(a,s,e-1/3)}return He.colorSpaceToWorking(this,n),this}setStyle(e,t=gt){function i(s){s!==void 0&&parseFloat(s)<1&&ye("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ye("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){let i=jh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=En(e.r),this.g=En(e.g),this.b=En(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return He.workingToColorSpace(ft.copy(this),e),65536*Math.round(Ue(255*ft.r,0,255))+256*Math.round(Ue(255*ft.g,0,255))+Math.round(Ue(255*ft.b,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.workingToColorSpace(ft.copy(this),t);let i=ft.r,n=ft.g,s=ft.b,a=Math.max(i,n,s),o=Math.min(i,n,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(n-s)/u+(n<s?6:0);break;case n:c=(s-i)/u+2;break;case s:c=(i-n)/u+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=He.workingColorSpace){return He.workingToColorSpace(ft.copy(this),t),e.r=ft.r,e.g=ft.g,e.b=ft.b,e}getStyle(e=gt){He.workingToColorSpace(ft.copy(this),e);let t=ft.r,i=ft.g,n=ft.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(e,t,i){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL(is);let i=sr(Ti.h,is.h,t),n=sr(Ti.s,is.s,t),s=sr(Ti.l,is.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ft=new Ee;Ee.NAMES=jh;var pr=class r{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ee(e),this.near=t,this.far=i}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},mr=class extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wt,this.environmentIntensity=1,this.environmentRotation=new Wt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},kt=new A,di=new A,ao=new A,pi=new A,fn=new A,gn=new A,Gc=new A,oo=new A,lo=new A,co=new A,ho=new Ke,uo=new Ke,po=new Ke,gi=class r{constructor(e=new A,t=new A,i=new A){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),kt.subVectors(e,t),n.cross(kt);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){kt.subVectors(n,t),di.subVectors(i,t),ao.subVectors(e,t);let a=kt.dot(kt),o=kt.dot(di),c=kt.dot(ao),l=di.dot(di),h=di.dot(ao),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let p=1/u,d=(l*c-o*h)*p,f=(a*h-o*c)*p;return s.set(1-d-f,f,d)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,pi)!==null&&pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,i,n,s,a,o,c){return this.getBarycoord(e,t,i,n,pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,pi.x),c.addScaledVector(a,pi.y),c.addScaledVector(o,pi.z),c)}static getInterpolatedAttribute(e,t,i,n,s,a){return ho.setScalar(0),uo.setScalar(0),po.setScalar(0),ho.fromBufferAttribute(e,t),uo.fromBufferAttribute(e,i),po.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(ho,s.x),a.addScaledVector(uo,s.y),a.addScaledVector(po,s.z),a}static isFrontFacing(e,t,i,n){return kt.subVectors(i,t),di.subVectors(e,t),kt.cross(di).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kt.subVectors(this.c,this.b),di.subVectors(this.a,this.b),.5*kt.cross(di).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,a,o;fn.subVectors(n,i),gn.subVectors(s,i),oo.subVectors(e,i);let c=fn.dot(oo),l=gn.dot(oo);if(c<=0&&l<=0)return t.copy(i);lo.subVectors(e,n);let h=fn.dot(lo),u=gn.dot(lo);if(h>=0&&u<=h)return t.copy(n);let p=c*u-h*l;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(fn,a);co.subVectors(e,s);let d=fn.dot(co),f=gn.dot(co);if(f>=0&&d<=f)return t.copy(s);let m=d*l-c*f;if(m<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(i).addScaledVector(gn,o);let v=h*f-d*u;if(v<=0&&u-h>=0&&d-f>=0)return Gc.subVectors(s,n),o=(u-h)/(u-h+(d-f)),t.copy(n).addScaledVector(Gc,o);let g=1/(v+m+p);return a=m*g,o=p*g,t.copy(i).addScaledVector(fn,a).addScaledVector(gn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Xt=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ht.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ht.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ht.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ht):Ht.fromBufferAttribute(s,a),Ht.applyMatrix4(e.matrixWorld),this.expandByPoint(Ht);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ns.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ns.copy(i.boundingBox)),ns.applyMatrix4(e.matrixWorld),this.union(ns)}let n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ht),Ht.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(er),rs.subVectors(this.max,er),_n.subVectors(e.a,er),vn.subVectors(e.b,er),xn.subVectors(e.c,er),Ei.subVectors(vn,_n),wi.subVectors(xn,vn),Hi.subVectors(_n,xn);let t=[0,-Ei.z,Ei.y,0,-wi.z,wi.y,0,-Hi.z,Hi.y,Ei.z,0,-Ei.x,wi.z,0,-wi.x,Hi.z,0,-Hi.x,-Ei.y,Ei.x,0,-wi.y,wi.x,0,-Hi.y,Hi.x,0];return!!mo(t,_n,vn,xn,rs)&&(t=[1,0,0,0,1,0,0,0,1],!!mo(t,_n,vn,xn,rs)&&(ss.crossVectors(Ei,wi),t=[ss.x,ss.y,ss.z],mo(t,_n,vn,xn,rs)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ht).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Ht).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},mi=[new A,new A,new A,new A,new A,new A,new A,new A],Ht=new A,ns=new Xt,_n=new A,vn=new A,xn=new A,Ei=new A,wi=new A,Hi=new A,er=new A,rs=new A,ss=new A,Wi=new A;function mo(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Wi.fromArray(r,s);let o=n.x*Math.abs(Wi.x)+n.y*Math.abs(Wi.y)+n.z*Math.abs(Wi.z),c=e.dot(Wi),l=t.dot(Wi),h=i.dot(Wi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var $p=Hu();function Hu(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(i[c]=0,i[256|c]=32768,n[c]=24,n[256|c]=24):l<-14?(i[c]=1024>>-l-14,i[256|c]=1024>>-l-14|32768,n[c]=-l-1,n[256|c]=-l-1):l<=15?(i[c]=l+15<<10,i[256|c]=l+15<<10|32768,n[c]=13,n[256|c]=13):l<128?(i[c]=31744,i[256|c]=64512,n[c]=24,n[256|c]=24):(i[c]=31744,i[256|c]=64512,n[c]=13,n[256|c]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(8388608&l);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}var st=new A,as=new ne,Wu=0,vt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Do,this.updateRanges=[],this.gpuType=Yt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)as.fromBufferAttribute(this,t),as.applyMatrix3(e),this.setXY(t,as.x,as.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=bn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=St(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),n=St(n,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Do&&(e.usage=this.usage),e}};var fr=class extends vt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var gr=class extends vt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Me=class extends vt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Xu=new Xt,tr=new A,fo=new A,jt=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Xu.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tr.subVectors(e,this.center);let t=tr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector(tr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tr.copy(e.center).add(fo)),this.expandByPoint(tr.copy(e.center).sub(fo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ju=0,Ut=new Le,go=new _t,yn=new A,wt=new Xt,ir=new Xt,ht=new A,Ye=class r extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new((function(t){for(let i=t.length-1;i>=0;--i)if(t[i]>=65535)return!0;return!1})(e)?gr:fr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ie().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,i){return Ut.makeTranslation(e,t,i),this.applyMatrix4(Ut),this}scale(e,t,i){return Ut.makeScale(e,t,i),this.applyMatrix4(Ut),this}lookAt(e){return go.lookAt(e),go.updateMatrix(),this.applyMatrix4(go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yn).negate(),this.translate(yn.x,yn.y,yn.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,s=e.length;n<s;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Me(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];wt.setFromBufferAttribute(s),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,wt.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,wt.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(wt.min),this.boundingBox.expandByPoint(wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new A,1/0);if(e){let i=this.boundingSphere.center;if(wt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];ir.setFromBufferAttribute(o),this.morphTargetsRelative?(ht.addVectors(wt.min,ir.min),wt.expandByPoint(ht),ht.addVectors(wt.max,ir.max),wt.expandByPoint(ht)):(wt.expandByPoint(ir.min),wt.expandByPoint(ir.max))}wt.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)ht.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(ht));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ht.fromBufferAttribute(o,l),c&&(yn.fromBufferAttribute(e,l),ht.add(yn)),n=Math.max(n,i.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vt(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<i.count;U++)o[U]=new A,c[U]=new A;let l=new A,h=new A,u=new A,p=new ne,d=new ne,f=new ne,m=new A,v=new A;function g(U,R,G){l.fromBufferAttribute(i,U),h.fromBufferAttribute(i,R),u.fromBufferAttribute(i,G),p.fromBufferAttribute(s,U),d.fromBufferAttribute(s,R),f.fromBufferAttribute(s,G),h.sub(l),u.sub(l),d.sub(p),f.sub(p);let W=1/(d.x*f.y-f.x*d.y);isFinite(W)&&(m.copy(h).multiplyScalar(f.y).addScaledVector(u,-d.y).multiplyScalar(W),v.copy(u).multiplyScalar(d.x).addScaledVector(h,-f.x).multiplyScalar(W),o[U].add(m),o[R].add(m),o[G].add(m),c[U].add(v),c[R].add(v),c[G].add(v))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let U=0,R=_.length;U<R;++U){let G=_[U],W=G.start;for(let B=W,V=W+G.count;B<V;B+=3)g(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let y=new A,T=new A,S=new A,w=new A;function P(U){S.fromBufferAttribute(n,U),w.copy(S);let R=o[U];y.copy(R),y.sub(S.multiplyScalar(S.dot(R))).normalize(),T.crossVectors(w,R);let G=T.dot(c[U])<0?-1:1;a.setXYZW(U,y.x,y.y,y.z,G)}for(let U=0,R=_.length;U<R;++U){let G=_[U],W=G.start;for(let B=W,V=W+G.count;B<V;B+=3)P(e.getX(B+0)),P(e.getX(B+1)),P(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vt(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let p=0,d=i.count;p<d;p++)i.setXYZ(p,0,0,0);let n=new A,s=new A,a=new A,o=new A,c=new A,l=new A,h=new A,u=new A;if(e)for(let p=0,d=e.count;p<d;p+=3){let f=e.getX(p+0),m=e.getX(p+1),v=e.getX(p+2);n.fromBufferAttribute(t,f),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,v),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,f),c.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),o.add(h),c.add(h),l.add(h),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(m,c.x,c.y,c.z),i.setXYZ(v,l.x,l.y,l.z)}else for(let p=0,d=t.count;p<d;p+=3)n.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,p=new l.constructor(c.length*h),d=0,f=0;for(let m=0,v=c.length;m<v;m++){d=o.isInterleavedBufferAttribute?c[m]*o.data.stride+o.offset:c[m]*h;for(let g=0;g<h;g++)p[f++]=l[d++]}return new vt(p,h,u)}if(this.index===null)return ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,n=this.attributes;for(let o in n){let c=e(n[o],i);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let p=e(l[h],i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let n={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,p=l.length;u<p;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(n[c]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let l in n){let h=n[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let p=0,d=u.length;p<d;p++)h.push(u[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Qp=new A;var qu=0,ri=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=rn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){ye(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:ye(`Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function n(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var em=new A,tm=new A,im=new A,nm=new ne,rm=new ne,sm=new Le,am=new A,om=new A,lm=new A,cm=new ne,hm=new ne,um=new ne;var dm=new A,pm=new A;var fi=new A,_o=new A,os=new A,Ai=new A,vo=new A,ls=new A,xo=new A,Zi=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){_o.copy(e).add(t).multiplyScalar(.5),os.copy(t).sub(e).normalize(),Ai.copy(this.origin).sub(_o);let s=.5*e.distanceTo(t),a=-this.direction.dot(os),o=Ai.dot(this.direction),c=-Ai.dot(os),l=Ai.lengthSq(),h=Math.abs(1-a*a),u,p,d,f;if(h>0)if(u=a*c-o,p=a*o-c,f=s*h,u>=0)if(p>=-f)if(p<=f){let m=1/h;u*=m,p*=m,d=u*(u+a*p+2*o)+p*(a*u+p+2*c)+l}else p=s,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*c)+l;else p=-s,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*c)+l;else p<=-f?(u=Math.max(0,-(-a*s+o)),p=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+p*(p+2*c)+l):p<=f?(u=0,p=Math.min(Math.max(-s,-c),s),d=p*(p+2*c)+l):(u=Math.max(0,-(a*s+o)),p=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+p*(p+2*c)+l);else p=a>0?-s:s,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(_o).addScaledVector(os,p),d}intersectSphere(e,t){fi.subVectors(e.center,this.origin);let i=fi.dot(this.direction),n=fi.dot(fi)-i*i,s=e.radius*e.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,n=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,n=(e.min.x-p.x)*l),h>=0?(s=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),i>a||s>n?null:((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-p.z)*u,c=(e.max.z-p.z)*u):(o=(e.max.z-p.z)*u,c=(e.min.z-p.z)*u),i>c||o>n?null:((o>i||i!=i)&&(i=o),(c<n||n!=n)&&(n=c),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,i,n,s){vo.subVectors(t,e),ls.subVectors(i,e),xo.crossVectors(vo,ls);let a,o=this.direction.dot(xo);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Ai.subVectors(this.origin,e);let c=a*this.direction.dot(ls.crossVectors(Ai,ls));if(c<0)return null;let l=a*this.direction.dot(vo.cross(Ai));if(l<0||c+l>o)return null;let h=-a*Ai.dot(xo);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ji=class extends ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Vc=new Le,Xi=new Zi,cs=new jt,kc=new A,hs=new A,us=new A,ds=new A,yo=new A,ps=new A,Hc=new A,ms=new A,pt=class extends _t{constructor(e=new Ye,t=new Ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(s&&o){ps.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(yo.fromBufferAttribute(u,e),a?ps.addScaledVector(yo,h):ps.addScaledVector(yo.sub(t),h))}t.add(ps)}return t}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),cs.copy(i.boundingSphere),cs.applyMatrix4(s),Xi.copy(e.ray).recast(e.near),cs.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(cs,kc)===null||Xi.origin.distanceToSquared(kc)>(e.far-e.near)**2))return;Vc.copy(s).invert(),Xi.copy(e.ray).applyMatrix4(Vc),i.boundingBox!==null&&Xi.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,Xi)}}_computeIntersections(e,t,i){let n,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,p=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,m=p.length;f<m;f++){let v=p[f],g=a[v.materialIndex];for(let _=Math.max(v.start,d.start),y=Math.min(o.count,Math.min(v.start+v.count,d.start+d.count));_<y;_+=3)n=fs(this,g,e,i,l,h,u,o.getX(_),o.getX(_+1),o.getX(_+2)),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=v.materialIndex,t.push(n))}else for(let f=Math.max(0,d.start),m=Math.min(o.count,d.start+d.count);f<m;f+=3)n=fs(this,a,e,i,l,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),n&&(n.faceIndex=Math.floor(f/3),t.push(n));else if(c!==void 0)if(Array.isArray(a))for(let f=0,m=p.length;f<m;f++){let v=p[f],g=a[v.materialIndex];for(let _=Math.max(v.start,d.start),y=Math.min(c.count,Math.min(v.start+v.count,d.start+d.count));_<y;_+=3)n=fs(this,g,e,i,l,h,u,_,_+1,_+2),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=v.materialIndex,t.push(n))}else for(let f=Math.max(0,d.start),m=Math.min(c.count,d.start+d.count);f<m;f+=3)n=fs(this,a,e,i,l,h,u,f,f+1,f+2),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}};function fs(r,e,t,i,n,s,a,o,c,l){r.getVertexPosition(o,hs),r.getVertexPosition(c,us),r.getVertexPosition(l,ds);let h=(function(u,p,d,f,m,v,g,_){let y;if(y=p.side===1?f.intersectTriangle(g,v,m,!0,_):f.intersectTriangle(m,v,g,p.side===0,_),y===null)return null;ms.copy(_),ms.applyMatrix4(u.matrixWorld);let T=d.ray.origin.distanceTo(ms);return T<d.near||T>d.far?null:{distance:T,point:ms.clone(),object:u}})(r,e,t,i,hs,us,ds,Hc);if(h){let u=new A;gi.getBarycoord(Hc,hs,us,ds,u),n&&(h.uv=gi.getInterpolatedAttribute(n,o,c,l,u,new ne)),s&&(h.uv1=gi.getInterpolatedAttribute(s,o,c,l,u,new ne)),a&&(h.normal=gi.getInterpolatedAttribute(a,o,c,l,u,new A),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let p={a:o,b:c,c:l,normal:new A,materialIndex:0};gi.getNormal(hs,us,ds,p.normal),h.face=p,h.barycoord=u}return h}var mm=new A,fm=new Ke,gm=new Ke,_m=new A,vm=new Le,xm=new A,ym=new jt,Mm=new Le,Sm=new Zi;var Bs=class extends bt{constructor(e=null,t=1,i=1,n,s,a,o,c,l=1003,h=1003,u,p){super(null,a,o,c,l,h,n,s,u,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},bm=new Le,Tm=new Le;var Em=new Le,wm=new Le;var Am=new Xt,Cm=new Le,Rm=new pt,Im=new jt;var Mo=new A,Yu=new A,Zu=new Ie,ti=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=Mo.subVectors(i,t).cross(Yu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Mo),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Zu.getNormalMatrix(e),n=this.coplanarPoint(Mo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ji=new jt,Ju=new ne(.5,.5),gs=new A,Li=class{constructor(e=new ti,t=new ti,i=new ti,n=new ti,s=new ti,a=new ti){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3,i=!1){let n=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],p=s[6],d=s[7],f=s[8],m=s[9],v=s[10],g=s[11],_=s[12],y=s[13],T=s[14],S=s[15];if(n[0].setComponents(l-a,d-h,g-f,S-_).normalize(),n[1].setComponents(l+a,d+h,g+f,S+_).normalize(),n[2].setComponents(l+o,d+u,g+m,S+y).normalize(),n[3].setComponents(l-o,d-u,g-m,S-y).normalize(),i)n[4].setComponents(c,p,v,T).normalize(),n[5].setComponents(l-c,d-p,g-v,S-T).normalize();else if(n[4].setComponents(l-c,d-p,g-v,S-T).normalize(),t===vi)n[5].setComponents(l+c,d+p,g+v,S+T).normalize();else{if(t!==wn)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(c,p,v,T).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){ji.center.set(0,0,0);let t=Ju.distanceTo(e.center);return ji.radius=.7071067811865476+t,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(gs.x=n.normal.x>0?e.max.x:e.min.x,gs.y=n.normal.y>0?e.max.y:e.min.y,gs.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(gs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},$t=new Le,Qt=new Li,zs=class r{constructor(){this.coordinateSystem=vi}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if($t.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Qt.setFromProjectionMatrix($t,n.coordinateSystem,n.reversedDepth),Qt.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if($t.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Qt.setFromProjectionMatrix($t,n.coordinateSystem,n.reversedDepth),Qt.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if($t.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Qt.setFromProjectionMatrix($t,n.coordinateSystem,n.reversedDepth),Qt.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if($t.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Qt.setFromProjectionMatrix($t,n.coordinateSystem,n.reversedDepth),Qt.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if($t.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Qt.setFromProjectionMatrix($t,n.coordinateSystem,n.reversedDepth),Qt.containsPoint(e))return!0}return!1}clone(){return new r}};var No=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,n){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=n}reset(){this.list.length=0,this.index=0}},Pm=new Le,Lm=new Ee(1,1,1),Dm=new Li,Um=new zs,Nm=new Xt,Fm=new jt,Om=new A,Bm=new A,zm=new A,Gm=new No,Vm=new pt;var _r=class extends ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Gs=new A,Vs=new A,Wc=new Le,nr=new Zi,_s=new jt,So=new A,Xc=new A,vr=class extends _t{constructor(e=new Ye,t=new _r){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)Gs.fromBufferAttribute(t,n-1),Vs.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Gs.distanceTo(Vs);e.setAttribute("lineDistance",new Me(i,1))}else ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_s.copy(i.boundingSphere),_s.applyMatrix4(n),_s.radius+=s,e.ray.intersectsSphere(_s)===!1)return;Wc.copy(n).invert(),nr.copy(e.ray).applyMatrix4(Wc);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let p=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let f=p,m=d-1;f<m;f+=l){let v=h.getX(f),g=h.getX(f+1),_=vs(this,e,nr,c,v,g,f);_&&t.push(_)}if(this.isLineLoop){let f=h.getX(d-1),m=h.getX(p),v=vs(this,e,nr,c,f,m,d-1);v&&t.push(v)}}else{let p=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let f=p,m=d-1;f<m;f+=l){let v=vs(this,e,nr,c,f,f+1,f);v&&t.push(v)}if(this.isLineLoop){let f=vs(this,e,nr,c,d-1,p,d-1);f&&t.push(f)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}};function vs(r,e,t,i,n,s,a){let o=r.geometry.attributes.position;if(Gs.fromBufferAttribute(o,n),Vs.fromBufferAttribute(o,s),t.distanceSqToSegment(Gs,Vs,So,Xc)>i)return;So.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(So);return c<e.near||c>e.far?void 0:{distance:c,point:Xc.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}var km=new A,Hm=new A;var Ln=class extends ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},jc=new Le,Fo=new Zi,xs=new jt,ys=new A,xr=class extends _t{constructor(e=new Ye,t=new Ln){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xs.copy(i.boundingSphere),xs.applyMatrix4(n),xs.radius+=s,e.ray.intersectsSphere(xs)===!1)return;jc.copy(n).invert(),Fo.copy(e.ray).applyMatrix4(jc);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,h=i.attributes.position;if(l!==null)for(let u=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);u<p;u++){let d=l.getX(u);ys.fromBufferAttribute(h,d),qc(ys,d,c,n,e,t,this)}else for(let u=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);u<p;u++)ys.fromBufferAttribute(h,u),qc(ys,u,c,n,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}};function qc(r,e,t,i,n,s,a){let o=Fo.distanceSqToPoint(r);if(o<t){let c=new A;Fo.closestPointToPoint(r,c),c.applyMatrix4(i);let l=n.ray.origin.distanceTo(c);if(l<n.near||l>n.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var yr=class extends bt{constructor(e=[],t=301,i,n,s,a,o,c,l,h){super(e,t,i,n,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Di=class extends bt{constructor(e,t,i=1014,n,s,a,o=1003,c=1003,l,h=1026,u=1){if(h!==Fi&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},n,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new In(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ks=class extends Di{constructor(e,t=1014,i=301,n,s,a=1003,o=1003,c,l=1026){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,n,s,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Mr=class extends bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ki=class r extends Ye{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],p=0,d=0;function f(m,v,g,_,y,T,S,w,P,U,R){let G=T/P,W=S/U,B=T/2,V=S/2,z=w/2,O=P+1,k=U+1,j=0,re=0,ge=new A;for(let ue=0;ue<k;ue++){let pe=ue*W-V;for(let he=0;he<O;he++){let K=he*G-B;ge[m]=K*_,ge[v]=pe*y,ge[g]=z,l.push(ge.x,ge.y,ge.z),ge[m]=0,ge[v]=0,ge[g]=w>0?1:-1,h.push(ge.x,ge.y,ge.z),u.push(he/P),u.push(1-ue/U),j+=1}}for(let ue=0;ue<U;ue++)for(let pe=0;pe<P;pe++){let he=p+pe+O*ue,K=p+pe+O*(ue+1),se=p+(pe+1)+O*(ue+1),ae=p+(pe+1)+O*ue;c.push(he,K,ae),c.push(K,se,ae),re+=6}o.addGroup(d,re,R),d+=re,p+=j}f("z","y","x",-1,-1,i,t,e,a,s,0),f("z","y","x",1,-1,i,t,-e,a,s,1),f("x","z","y",1,1,e,i,t,n,a,2),f("x","z","y",1,-1,e,i,-t,n,a,3),f("x","y","z",1,-1,e,t,i,n,s,4),f("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(c),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Hs=class r extends Ye{constructor(e=1,t=1,i=4,n=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),s=Math.max(1,Math.floor(s));let a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,p=t,d=2*u+p,f=2*i+s,m=n+1,v=new A,g=new A;for(let _=0;_<=f;_++){let y=0,T=0,S=0,w=0;if(_<=i){let R=_/i,G=R*Math.PI/2;T=-h-e*Math.cos(G),S=e*Math.sin(G),w=-e*Math.cos(G),y=R*u}else if(_<=i+s){let R=(_-i)/s;T=R*t-h,S=e,w=0,y=u+R*p}else{let R=(_-i-s)/i,G=R*Math.PI/2;T=h+e*Math.sin(G),S=e*Math.cos(G),w=e*Math.sin(G),y=u+p+R*u}let P=Math.max(0,Math.min(1,y/d)),U=0;_===0?U=.5/n:_===f&&(U=-.5/n);for(let R=0;R<=n;R++){let G=R/n,W=G*Math.PI*2,B=Math.sin(W),V=Math.cos(W);g.x=-S*V,g.y=T,g.z=S*B,o.push(g.x,g.y,g.z),v.set(-S*V,w,S*B),v.normalize(),c.push(v.x,v.y,v.z),l.push(G+U,P)}if(_>0){let R=(_-1)*m;for(let G=0;G<n;G++){let W=R+G,B=R+G+1,V=_*m+G,z=_*m+G+1;a.push(W,B,V),a.push(B,z,V)}}}this.setIndex(a),this.setAttribute("position",new Me(o,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ws=class r extends Ye{constructor(e=1,t=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new A,h=new ne;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,p=3;u<=t;u++,p+=3){let d=i+u/t*n;l.x=e*Math.cos(d),l.y=e*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[p]/e+1)/2,h.y=(a[p+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Me(a,3)),this.setAttribute("normal",new Me(o,3)),this.setAttribute("uv",new Me(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Sr=class r extends Ye{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;n=Math.floor(n),s=Math.floor(s);let h=[],u=[],p=[],d=[],f=0,m=[],v=i/2,g=0;function _(y){let T=f,S=new ne,w=new A,P=0,U=y===!0?e:t,R=y===!0?1:-1;for(let W=1;W<=n;W++)u.push(0,v*R,0),p.push(0,R,0),d.push(.5,.5),f++;let G=f;for(let W=0;W<=n;W++){let B=W/n*c+o,V=Math.cos(B),z=Math.sin(B);w.x=U*z,w.y=v*R,w.z=U*V,u.push(w.x,w.y,w.z),p.push(0,R,0),S.x=.5*V+.5,S.y=.5*z*R+.5,d.push(S.x,S.y),f++}for(let W=0;W<n;W++){let B=T+W,V=G+W;y===!0?h.push(V,V+1,B):h.push(V+1,V,B),P+=3}l.addGroup(g,P,y===!0?1:2),g+=P}(function(){let y=new A,T=new A,S=0,w=(t-e)/i;for(let P=0;P<=s;P++){let U=[],R=P/s,G=R*(t-e)+e;for(let W=0;W<=n;W++){let B=W/n,V=B*c+o,z=Math.sin(V),O=Math.cos(V);T.x=G*z,T.y=-R*i+v,T.z=G*O,u.push(T.x,T.y,T.z),y.set(z,w,O).normalize(),p.push(y.x,y.y,y.z),d.push(B,1-R),U.push(f++)}m.push(U)}for(let P=0;P<n;P++)for(let U=0;U<s;U++){let R=m[U][P],G=m[U+1][P],W=m[U+1][P+1],B=m[U][P+1];(e>0||U!==0)&&(h.push(R,G,B),S+=3),(t>0||U!==s-1)&&(h.push(G,W,B),S+=3)}l.addGroup(g,S,0),g+=S})(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(p,3)),this.setAttribute("uv",new Me(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Xs=class r extends Sr{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ui=class r extends Ye{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let s=[],a=[];function o(d,f,m,v){let g=v+1,_=[];for(let y=0;y<=g;y++){_[y]=[];let T=d.clone().lerp(m,y/g),S=f.clone().lerp(m,y/g),w=g-y;for(let P=0;P<=w;P++)_[y][P]=P===0&&y===g?T:T.clone().lerp(S,P/w)}for(let y=0;y<g;y++)for(let T=0;T<2*(g-y)-1;T++){let S=Math.floor(T/2);T%2==0?(c(_[y][S+1]),c(_[y+1][S]),c(_[y][S])):(c(_[y][S+1]),c(_[y+1][S+1]),c(_[y+1][S]))}}function c(d){s.push(d.x,d.y,d.z)}function l(d,f){let m=3*d;f.x=e[m+0],f.y=e[m+1],f.z=e[m+2]}function h(d,f,m,v){v<0&&d.x===1&&(a[f]=d.x-1),m.x===0&&m.z===0&&(a[f]=v/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}function p(d){return Math.atan2(-d.y,Math.sqrt(d.x*d.x+d.z*d.z))}(function(d){let f=new A,m=new A,v=new A;for(let g=0;g<t.length;g+=3)l(t[g+0],f),l(t[g+1],m),l(t[g+2],v),o(f,m,v,d)})(n),(function(d){let f=new A;for(let m=0;m<s.length;m+=3)f.x=s[m+0],f.y=s[m+1],f.z=s[m+2],f.normalize().multiplyScalar(d),s[m+0]=f.x,s[m+1]=f.y,s[m+2]=f.z})(i),(function(){let d=new A;for(let f=0;f<s.length;f+=3){d.x=s[f+0],d.y=s[f+1],d.z=s[f+2];let m=u(d)/2/Math.PI+.5,v=p(d)/Math.PI+.5;a.push(m,1-v)}(function(){let f=new A,m=new A,v=new A,g=new A,_=new ne,y=new ne,T=new ne;for(let S=0,w=0;S<s.length;S+=9,w+=6){f.set(s[S+0],s[S+1],s[S+2]),m.set(s[S+3],s[S+4],s[S+5]),v.set(s[S+6],s[S+7],s[S+8]),_.set(a[w+0],a[w+1]),y.set(a[w+2],a[w+3]),T.set(a[w+4],a[w+5]),g.copy(f).add(m).add(v).divideScalar(3);let P=u(g);h(_,w+0,f,P),h(y,w+2,m,P),h(T,w+4,v,P)}})(),(function(){for(let f=0;f<a.length;f+=6){let m=a[f+0],v=a[f+2],g=a[f+4],_=Math.max(m,v,g),y=Math.min(m,v,g);_>.9&&y<.1&&(m<.2&&(a[f+0]+=1),v<.2&&(a[f+2]+=1),g<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new Me(s,3)),this.setAttribute("normal",new Me(s.slice(),3)),this.setAttribute("uv",new Me(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.detail)}},js=class r extends Ui{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Ms=new A,Ss=new A,bo=new A,bs=new gi,qs=class extends Ye{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),s=Math.cos(Tn*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),p={},d=[];for(let f=0;f<c;f+=3){a?(l[0]=a.getX(f),l[1]=a.getX(f+1),l[2]=a.getX(f+2)):(l[0]=f,l[1]=f+1,l[2]=f+2);let{a:m,b:v,c:g}=bs;if(m.fromBufferAttribute(o,l[0]),v.fromBufferAttribute(o,l[1]),g.fromBufferAttribute(o,l[2]),bs.getNormal(bo),u[0]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,u[1]=`${Math.round(v.x*n)},${Math.round(v.y*n)},${Math.round(v.z*n)}`,u[2]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let _=0;_<3;_++){let y=(_+1)%3,T=u[_],S=u[y],w=bs[h[_]],P=bs[h[y]],U=`${T}_${S}`,R=`${S}_${T}`;R in p&&p[R]?(bo.dot(p[R].normal)<=s&&(d.push(w.x,w.y,w.z),d.push(P.x,P.y,P.z)),p[R]=null):U in p||(p[U]={index0:l[_],index1:l[y],normal:bo.clone()})}}for(let f in p)if(p[f]){let{index0:m,index1:v}=p[f];Ms.fromBufferAttribute(o,m),Ss.fromBufferAttribute(o,v),d.push(Ms.x,Ms.y,Ms.z),d.push(Ss.x,Ss.y,Ss.z)}this.setAttribute("position",new Me(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Rt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ye("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),n=0,s=i.length,a;a=t||e*i[s-1];let o,c=0,l=s-1;for(;c<=l;)if(n=Math.floor(c+(l-c)/2),o=i[n]-a,o<0)c=n+1;else{if(!(o>0)){l=n;break}l=n-1}if(n=l,i[n]===a)return n/(s-1);let h=i[n];return(n+(a-h)/(i[n+1]-h))/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),c=t||(a.isVector2?new ne:new A);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new A,n=[],s=[],a=[],o=new A,c=new Le;for(let d=0;d<=e;d++){let f=d/e;n[d]=this.getTangentAt(f,new A)}s[0]=new A,a[0]=new A;let l=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),p=Math.abs(n[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),p<=l&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(n[d-1],n[d]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Ue(n[d-1].dot(n[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(o,f))}a[d].crossVectors(n[d],s[d])}if(t===!0){let d=Math.acos(Ue(s[0].dot(s[e]),-1,1));d/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let f=1;f<=e;f++)s[f].applyMatrix4(c.makeRotationAxis(n[f],d*f)),a[f].crossVectors(n[f],s[f])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Dn=class extends Rt{constructor(e=0,t=0,i=1,n=1,s=0,a=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ne){let i=t,n=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(s=a?0:n),this.aClockwise!==!0||a||(s===n?s=-n:s-=n);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=c-this.aX,d=l-this.aY;c=p*h-d*u+this.aX,l=p*u+d*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ys=class extends Dn{constructor(e,t,i,n,s,a){super(e,t,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Yl(){let r=0,e=0,t=0,i=0;function n(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,i=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){n(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let p=(a-s)/l-(o-s)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;p*=h,d*=h,n(a,o,p,d)},calc:function(s){let a=s*s;return r+e*s+t*a+i*(a*s)}}}var Ts=new A,To=new Yl,Eo=new Yl,wo=new Yl,Un=class extends Rt{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new A){let i=t,n=this.points,s=n.length,a=(s-(this.closed?0:1))*e,o,c,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:h===0&&l===s-1&&(l=s-2,h=1),this.closed||l>0?o=n[(l-1)%s]:(Ts.subVectors(n[0],n[1]).add(n[0]),o=Ts);let u=n[l%s],p=n[(l+1)%s];if(this.closed||l+2<s?c=n[(l+2)%s]:(Ts.subVectors(n[s-1],n[s-2]).add(n[s-1]),c=Ts),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(p),d),v=Math.pow(p.distanceToSquared(c),d);m<1e-4&&(m=1),f<1e-4&&(f=m),v<1e-4&&(v=m),To.initNonuniformCatmullRom(o.x,u.x,p.x,c.x,f,m,v),Eo.initNonuniformCatmullRom(o.y,u.y,p.y,c.y,f,m,v),wo.initNonuniformCatmullRom(o.z,u.z,p.z,c.z,f,m,v)}else this.curveType==="catmullrom"&&(To.initCatmullRom(o.x,u.x,p.x,c.x,this.tension),Eo.initCatmullRom(o.y,u.y,p.y,c.y,this.tension),wo.initCatmullRom(o.z,u.z,p.z,c.z,this.tension));return i.set(To.calc(h),Eo.calc(h),wo.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new A().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Yc(r,e,t,i,n){let s=.5*(i-e),a=.5*(n-t),o=r*r;return(2*t-2*i+s+a)*(r*o)+(-3*t+3*i-2*s-a)*o+s*r+t}function ar(r,e,t,i){return(function(n,s){let a=1-n;return a*a*s})(r,e)+(function(n,s){return 2*(1-n)*n*s})(r,t)+(function(n,s){return n*n*s})(r,i)}function or(r,e,t,i,n){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,i)+(function(s,a){return s*s*s*a})(r,n)}var br=class extends Rt{constructor(e=new ne,t=new ne,i=new ne,n=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new ne){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(or(e,n.x,s.x,a.x,o.x),or(e,n.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Zs=class extends Rt{constructor(e=new A,t=new A,i=new A,n=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new A){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(or(e,n.x,s.x,a.x,o.x),or(e,n.y,s.y,a.y,o.y),or(e,n.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Tr=class extends Rt{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Js=class extends Rt{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Er=class extends Rt{constructor(e=new ne,t=new ne,i=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ne){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(ar(e,n.x,s.x,a.x),ar(e,n.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wr=class extends Rt{constructor(e=new A,t=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new A){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(ar(e,n.x,s.x,a.x),ar(e,n.y,s.y,a.y),ar(e,n.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ar=class extends Rt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let i=t,n=this.points,s=(n.length-1)*e,a=Math.floor(s),o=s-a,c=n[a===0?a:a-1],l=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(Yc(o,c.x,l.x,h.x,u.x),Yc(o,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new ne().fromArray(n))}return this}},Ks=Object.freeze({__proto__:null,ArcCurve:Ys,CatmullRomCurve3:Un,CubicBezierCurve:br,CubicBezierCurve3:Zs,EllipseCurve:Dn,LineCurve:Tr,LineCurve3:Js,QuadraticBezierCurve:Er,QuadraticBezierCurve3:wr,SplineCurve:Ar}),$s=class extends Rt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ks[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new Ks[n.type]().fromJSON(n))}return this}},Cr=class extends $s{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Tr(this.currentPoint.clone(),new ne(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let s=new Er(this.currentPoint.clone(),new ne(e,t),new ne(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,a){let o=new br(this.currentPoint.clone(),new ne(e,t),new ne(i,n),new ne(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ar(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,n,s,a),this}absarc(e,t,i,n,s,a){return this.absellipse(e,t,i,i,n,s,a),this}ellipse(e,t,i,n,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,n,s,a,o,c),this}absellipse(e,t,i,n,s,a,o,c){let l=new Dn(e,t,i,n,s,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Rr=class extends Cr{constructor(e){super(e),this.uuid=rn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new Cr().fromJSON(n))}return this}};function Ku(r,e,t=2){let i=e&&e.length,n=i?e[0]*t:r.length,s=Zc(r,0,n,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(i&&(s=(function(h,u,p,d){let f=[];for(let m=0,v=u.length;m<v;m++){let g=Zc(h,u[m]*d,m<v-1?u[m+1]*d:h.length,d,!1);g===g.next&&(g.steiner=!0),f.push(sd(g))}f.sort(id);for(let m=0;m<f.length;m++)p=nd(f[m],p);return p})(r,e,s,t)),r.length>80*t){o=r[0],c=r[1];let h=o,u=c;for(let p=t;p<n;p+=t){let d=r[p],f=r[p+1];d<o&&(o=d),f<c&&(c=f),d>h&&(h=d),f>u&&(u=f)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return Ir(s,a,t,o,c,l,0),a}function Zc(r,e,t,i,n){let s;if(n===(function(a,o,c,l){let h=0;for(let u=o,p=c-l;u<c;u+=l)h+=(a[p]-a[u])*(a[u+1]+a[p+1]),p=u;return h})(r,e,t,i)>0)for(let a=e;a<t;a+=i)s=Jc(a/i|0,r[a],r[a+1],s);else for(let a=t-i;a>=e;a-=i)s=Jc(a/i|0,r[a],r[a+1],s);return s&&Nn(s,s.next)&&(Lr(s),s=s.next),s}function $i(r,e){if(!r)return r;e||(e=r);let t,i=r;do if(t=!1,i.steiner||!Nn(i,i.next)&&tt(i.prev,i,i.next)!==0)i=i.next;else{if(Lr(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function Ir(r,e,t,i,n,s,a){if(!r)return;!a&&s&&(function(c,l,h,u){let p=c;do p.z===0&&(p.z=Oo(p.x,p.y,l,h,u)),p.prevZ=p.prev,p.nextZ=p.next,p=p.next;while(p!==c);p.prevZ.nextZ=null,p.prevZ=null,(function(d){let f,m=1;do{let v,g=d;d=null;let _=null;for(f=0;g;){f++;let y=g,T=0;for(let w=0;w<m&&(T++,y=y.nextZ,y);w++);let S=m;for(;T>0||S>0&&y;)T!==0&&(S===0||!y||g.z<=y.z)?(v=g,g=g.nextZ,T--):(v=y,y=y.nextZ,S--),_?_.nextZ=v:d=v,v.prevZ=_,_=v;g=y}_.nextZ=null,m*=2}while(f>1)})(p)})(r,i,n,s);let o=r;for(;r.prev!==r.next;){let c=r.prev,l=r.next;if(s?Qu(r,i,n,s):$u(r))e.push(c.i,r.i,l.i),Lr(r),r=l.next,o=l.next;else if((r=l)===o){a?a===1?Ir(r=ed($i(r),e),e,t,i,n,s,2):a===2&&td(r,e,t,i,n,s):Ir($i(r),e,t,i,n,s,1);break}}}function $u(r){let e=r.prev,t=r,i=r.next;if(tt(e,t,i)>=0)return!1;let n=e.x,s=t.x,a=i.x,o=e.y,c=t.y,l=i.y,h=Math.min(n,s,a),u=Math.min(o,c,l),p=Math.max(n,s,a),d=Math.max(o,c,l),f=i.next;for(;f!==e;){if(f.x>=h&&f.x<=p&&f.y>=u&&f.y<=d&&rr(n,o,s,c,a,l,f.x,f.y)&&tt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Qu(r,e,t,i){let n=r.prev,s=r,a=r.next;if(tt(n,s,a)>=0)return!1;let o=n.x,c=s.x,l=a.x,h=n.y,u=s.y,p=a.y,d=Math.min(o,c,l),f=Math.min(h,u,p),m=Math.max(o,c,l),v=Math.max(h,u,p),g=Oo(d,f,e,t,i),_=Oo(m,v,e,t,i),y=r.prevZ,T=r.nextZ;for(;y&&y.z>=g&&T&&T.z<=_;){if(y.x>=d&&y.x<=m&&y.y>=f&&y.y<=v&&y!==n&&y!==a&&rr(o,h,c,u,l,p,y.x,y.y)&&tt(y.prev,y,y.next)>=0||(y=y.prevZ,T.x>=d&&T.x<=m&&T.y>=f&&T.y<=v&&T!==n&&T!==a&&rr(o,h,c,u,l,p,T.x,T.y)&&tt(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;y&&y.z>=g;){if(y.x>=d&&y.x<=m&&y.y>=f&&y.y<=v&&y!==n&&y!==a&&rr(o,h,c,u,l,p,y.x,y.y)&&tt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;T&&T.z<=_;){if(T.x>=d&&T.x<=m&&T.y>=f&&T.y<=v&&T!==n&&T!==a&&rr(o,h,c,u,l,p,T.x,T.y)&&tt(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function ed(r,e){let t=r;do{let i=t.prev,n=t.next.next;!Nn(i,n)&&Yh(i,t,t.next,n)&&Pr(i,n)&&Pr(n,i)&&(e.push(i.i,t.i,n.i),Lr(t),Lr(t.next),t=r=n),t=t.next}while(t!==r);return $i(t)}function td(r,e,t,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ad(a,o)){let c=Zh(a,o);return a=$i(a,a.next),c=$i(c,c.next),Ir(a,e,t,i,n,s,0),void Ir(c,e,t,i,n,s,0)}o=o.next}a=a.next}while(a!==r)}function id(r,e){let t=r.x-e.x;return t===0&&(t=r.y-e.y,t===0)&&(t=(r.next.y-r.y)/(r.next.x-r.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function nd(r,e){let t=(function(n,s){let a=s,o=n.x,c=n.y,l,h=-1/0;if(Nn(n,a))return a;do{if(Nn(n,a.next))return a.next;if(c<=a.y&&c>=a.next.y&&a.next.y!==a.y){let m=a.x+(c-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(m<=o&&m>h&&(h=m,l=a.x<a.next.x?a:a.next,m===o))return l}a=a.next}while(a!==s);if(!l)return null;let u=l,p=l.x,d=l.y,f=1/0;a=l;do{if(o>=a.x&&a.x>=p&&o!==a.x&&qh(c<d?o:h,c,p,d,c<d?h:o,c,a.x,a.y)){let m=Math.abs(c-a.y)/(o-a.x);Pr(a,n)&&(m<f||m===f&&(a.x>l.x||a.x===l.x&&rd(l,a)))&&(l=a,f=m)}a=a.next}while(a!==u);return l})(r,e);if(!t)return e;let i=Zh(t,r);return $i(i,i.next),$i(t,t.next)}function rd(r,e){return tt(r.prev,r,e.prev)<0&&tt(e.next,r,r.next)<0}function Oo(r,e,t,i,n){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*n|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function sd(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function qh(r,e,t,i,n,s,a,o){return(n-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(n-a)*(i-o)}function rr(r,e,t,i,n,s,a,o){return!(r===a&&e===o)&&qh(r,e,t,i,n,s,a,o)}function ad(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&Yh(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1})(r,e)&&(Pr(r,e)&&Pr(e,r)&&(function(t,i){let n=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==t);return s})(r,e)&&(tt(r.prev,r,e.prev)||tt(r,e.prev,e))||Nn(r,e)&&tt(r.prev,r,r.next)>0&&tt(e.prev,e,e.next)>0)}function tt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Nn(r,e){return r.x===e.x&&r.y===e.y}function Yh(r,e,t,i){let n=ws(tt(r,e,t)),s=ws(tt(r,e,i)),a=ws(tt(t,i,r)),o=ws(tt(t,i,e));return n!==s&&a!==o||!(n!==0||!Es(r,t,e))||!(s!==0||!Es(r,i,e))||!(a!==0||!Es(t,r,i))||!(o!==0||!Es(t,e,i))}function Es(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function ws(r){return r>0?1:r<0?-1:0}function Pr(r,e){return tt(r.prev,r,r.next)<0?tt(r,e,r.next)>=0&&tt(r,r.prev,e)>=0:tt(r,e,r.prev)<0||tt(r,r.next,e)<0}function Zh(r,e){let t=Bo(r.i,r.x,r.y),i=Bo(e.i,e.x,e.y),n=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Jc(r,e,t,i){let n=Bo(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Lr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Bo(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var zo=class{static triangulate(e,t,i=2){return Ku(e,t,i)}},ni=class r{static area(e){let t=e.length,i=0;for(let n=t-1,s=0;s<t;n=s++)i+=e[n].x*e[s].y-e[s].x*e[n].y;return .5*i}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let i=[],n=[],s=[];Kc(e),$c(i,e);let a=e.length;t.forEach(Kc);for(let c=0;c<t.length;c++)n.push(a),a+=t[c].length,$c(i,t[c]);let o=zo.triangulate(i,n);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};function Kc(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function $c(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Qs=class r extends Ye{constructor(e=new Rr([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],s=[];for(let o=0,c=e.length;o<c;o++)a(e[o]);function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,p=t.bevelEnabled===void 0||t.bevelEnabled,d=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:d-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:od,y,T,S,w,P,U=!1;if(g){y=g.getSpacedPoints(h),U=!0,p=!1;let I=!!g.isCatmullRomCurve3&&g.closed;T=g.computeFrenetFrames(h,I),S=new A,w=new A,P=new A}p||(v=0,d=0,f=0,m=0);let R=o.extractPoints(l),G=R.shape,W=R.holes;if(!ni.isClockWise(G)){G=G.reverse();for(let I=0,x=W.length;I<x;I++){let C=W[I];ni.isClockWise(C)&&(W[I]=C.reverse())}}function B(I){let x=10000000000000001e-36,C=I[0];for(let L=1;L<=I.length;L++){let N=L%I.length,Y=I[N],Z=Y.x-C.x,X=Y.y-C.y,ee=Z*Z+X*X,$=Math.max(Math.abs(Y.x),Math.abs(Y.y),Math.abs(C.x),Math.abs(C.y));ee<=x*$*$?(I.splice(N,1),L--):C=Y}}B(G),W.forEach(B);let V=W.length,z=G;for(let I=0;I<V;I++){let x=W[I];G=G.concat(x)}function O(I,x,C){return x||be("ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(x,C)}let k=G.length;function j(I,x,C){let L,N,Y,Z=I.x-x.x,X=I.y-x.y,ee=C.x-I.x,$=C.y-I.y,ie=Z*Z+X*X,te=Z*$-X*ee;if(Math.abs(te)>Number.EPSILON){let le=Math.sqrt(ie),Te=Math.sqrt(ee*ee+$*$),Fe=x.x-X/le,Xe=x.y+Z/le,Ve=((C.x-$/Te-Fe)*$-(C.y+ee/Te-Xe)*ee)/(Z*$-X*ee);L=Fe+Z*Ve-I.x,N=Xe+X*Ve-I.y;let fe=L*L+N*N;if(fe<=2)return new ne(L,N);Y=Math.sqrt(fe/2)}else{let le=!1;Z>Number.EPSILON?ee>Number.EPSILON&&(le=!0):Z<-Number.EPSILON?ee<-Number.EPSILON&&(le=!0):Math.sign(X)===Math.sign($)&&(le=!0),le?(L=-X,N=Z,Y=Math.sqrt(ie)):(L=Z,N=X,Y=Math.sqrt(ie/2))}return new ne(L/Y,N/Y)}let re=[];for(let I=0,x=z.length,C=x-1,L=I+1;I<x;I++,C++,L++)C===x&&(C=0),L===x&&(L=0),re[I]=j(z[I],z[C],z[L]);let ge=[],ue,pe,he=re.concat();for(let I=0,x=V;I<x;I++){let C=W[I];ue=[];for(let L=0,N=C.length,Y=N-1,Z=L+1;L<N;L++,Y++,Z++)Y===N&&(Y=0),Z===N&&(Z=0),ue[L]=j(C[L],C[Y],C[Z]);ge.push(ue),he=he.concat(ue)}if(v===0)pe=ni.triangulateShape(z,W);else{let I=[],x=[];for(let C=0;C<v;C++){let L=C/v,N=d*Math.cos(L*Math.PI/2),Y=f*Math.sin(L*Math.PI/2)+m;for(let Z=0,X=z.length;Z<X;Z++){let ee=O(z[Z],re[Z],Y);xe(ee.x,ee.y,-N),L===0&&I.push(ee)}for(let Z=0,X=V;Z<X;Z++){let ee=W[Z];ue=ge[Z];let $=[];for(let ie=0,te=ee.length;ie<te;ie++){let le=O(ee[ie],ue[ie],Y);xe(le.x,le.y,-N),L===0&&$.push(le)}L===0&&x.push($)}}pe=ni.triangulateShape(I,x)}let K=pe.length,se=f+m;for(let I=0;I<k;I++){let x=p?O(G[I],he[I],se):G[I];U?(w.copy(T.normals[0]).multiplyScalar(x.x),S.copy(T.binormals[0]).multiplyScalar(x.y),P.copy(y[0]).add(w).add(S),xe(P.x,P.y,P.z)):xe(x.x,x.y,0)}for(let I=1;I<=h;I++)for(let x=0;x<k;x++){let C=p?O(G[x],he[x],se):G[x];U?(w.copy(T.normals[I]).multiplyScalar(C.x),S.copy(T.binormals[I]).multiplyScalar(C.y),P.copy(y[I]).add(w).add(S),xe(P.x,P.y,P.z)):xe(C.x,C.y,u/h*I)}for(let I=v-1;I>=0;I--){let x=I/v,C=d*Math.cos(x*Math.PI/2),L=f*Math.sin(x*Math.PI/2)+m;for(let N=0,Y=z.length;N<Y;N++){let Z=O(z[N],re[N],L);xe(Z.x,Z.y,u+C)}for(let N=0,Y=W.length;N<Y;N++){let Z=W[N];ue=ge[N];for(let X=0,ee=Z.length;X<ee;X++){let $=O(Z[X],ue[X],L);U?xe($.x,$.y+y[h-1].y,y[h-1].x+C):xe($.x,$.y,u+C)}}}function ae(I,x){let C=I.length;for(;--C>=0;){let L=C,N=C-1;N<0&&(N=I.length-1);for(let Y=0,Z=h+2*v;Y<Z;Y++){let X=k*Y,ee=k*(Y+1);b(x+L+X,x+N+X,x+N+ee,x+L+ee)}}}function xe(I,x,C){c.push(I),c.push(x),c.push(C)}function Re(I,x,C){M(I),M(x),M(C);let L=n.length/3,N=_.generateTopUV(i,n,L-3,L-2,L-1);F(N[0]),F(N[1]),F(N[2])}function b(I,x,C,L){M(I),M(x),M(L),M(x),M(C),M(L);let N=n.length/3,Y=_.generateSideWallUV(i,n,N-6,N-3,N-2,N-1);F(Y[0]),F(Y[1]),F(Y[3]),F(Y[1]),F(Y[2]),F(Y[3])}function M(I){n.push(c[3*I+0]),n.push(c[3*I+1]),n.push(c[3*I+2])}function F(I){s.push(I.x),s.push(I.y)}(function(){let I=n.length/3;if(p){let x=0,C=k*x;for(let L=0;L<K;L++){let N=pe[L];Re(N[2]+C,N[1]+C,N[0]+C)}x=h+2*v,C=k*x;for(let L=0;L<K;L++){let N=pe[L];Re(N[0]+C,N[1]+C,N[2]+C)}}else{for(let x=0;x<K;x++){let C=pe[x];Re(C[2],C[1],C[0])}for(let x=0;x<K;x++){let C=pe[x];Re(C[0]+k*h,C[1]+k*h,C[2]+k*h)}}i.addGroup(I,n.length/3-I,0)})(),(function(){let I=n.length/3,x=0;ae(z,x),x+=z.length;for(let C=0,L=W.length;C<L;C++){let N=W[C];ae(N,x),x+=N.length}i.addGroup(I,n.length/3-I,1)})()}this.setAttribute("position",new Me(n,3)),this.setAttribute("uv",new Me(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new Ks[n.type]().fromJSON(n)),new r(i,e.options)}},od={generateTopUV:function(r,e,t,i,n){let s=e[3*t],a=e[3*t+1],o=e[3*i],c=e[3*i+1],l=e[3*n],h=e[3*n+1];return[new ne(s,a),new ne(o,c),new ne(l,h)]},generateSideWallUV:function(r,e,t,i,n,s){let a=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*i],h=e[3*i+1],u=e[3*i+2],p=e[3*n],d=e[3*n+1],f=e[3*n+2],m=e[3*s],v=e[3*s+1],g=e[3*s+2];return Math.abs(o-h)<Math.abs(a-l)?[new ne(a,1-c),new ne(l,1-u),new ne(p,1-f),new ne(m,1-g)]:[new ne(o,1-c),new ne(h,1-u),new ne(d,1-f),new ne(v,1-g)]}},Fn=class r extends Ui{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},ea=class r extends Ye{constructor(e=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=Ue(n,0,2*Math.PI);let s=[],a=[],o=[],c=[],l=[],h=1/t,u=new A,p=new ne,d=new A,f=new A,m=new A,v=0,g=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:v=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,d.x=1*g,d.y=-v,d.z=0*g,m.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(m.x,m.y,m.z);break;default:v=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,d.x=1*g,d.y=-v,d.z=0*g,f.copy(d),d.x+=m.x,d.y+=m.y,d.z+=m.z,d.normalize(),c.push(d.x,d.y,d.z),m.copy(f)}for(let _=0;_<=t;_++){let y=i+_*h*n,T=Math.sin(y),S=Math.cos(y);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*T,u.y=e[w].y,u.z=e[w].x*S,a.push(u.x,u.y,u.z),p.x=_/t,p.y=w/(e.length-1),o.push(p.x,p.y);let P=c[3*w+0]*T,U=c[3*w+1],R=c[3*w+0]*S;l.push(P,U,R)}}for(let _=0;_<t;_++)for(let y=0;y<e.length-1;y++){let T=y+_*e.length,S=T,w=T+e.length,P=T+e.length+1,U=T+1;s.push(S,w,U),s.push(P,U,w)}this.setIndex(s),this.setAttribute("position",new Me(a,3)),this.setAttribute("uv",new Me(o,2)),this.setAttribute("normal",new Me(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},On=class r extends Ui{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},yi=class r extends Ye{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(n),l=o+1,h=c+1,u=e/o,p=t/c,d=[],f=[],m=[],v=[];for(let g=0;g<h;g++){let _=g*p-a;for(let y=0;y<l;y++){let T=y*u-s;f.push(T,-_,0),m.push(0,0,1),v.push(y/o),v.push(1-g/c)}}for(let g=0;g<c;g++)for(let _=0;_<o;_++){let y=_+l*g,T=_+l*(g+1),S=_+1+l*(g+1),w=_+1+l*g;d.push(y,T,w),d.push(T,S,w)}this.setIndex(d),this.setAttribute("position",new Me(f,3)),this.setAttribute("normal",new Me(m,3)),this.setAttribute("uv",new Me(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},ta=class r extends Ye{constructor(e=.5,t=1,i=32,n=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],c=[],l=[],h=[],u=e,p=(t-e)/(n=Math.max(1,n)),d=new A,f=new ne;for(let m=0;m<=n;m++){for(let v=0;v<=i;v++){let g=s+v/i*a;d.x=u*Math.cos(g),d.y=u*Math.sin(g),c.push(d.x,d.y,d.z),l.push(0,0,1),f.x=(d.x/t+1)/2,f.y=(d.y/t+1)/2,h.push(f.x,f.y)}u+=p}for(let m=0;m<n;m++){let v=m*(i+1);for(let g=0;g<i;g++){let _=g+v,y=_,T=_+i+1,S=_+i+2,w=_+1;o.push(y,T,w),o.push(T,S,w)}}this.setIndex(o),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},ia=class r extends Ye{constructor(e=new Rr([new ne(0,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],s=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let u=n.length/3,p=h.extractPoints(t),d=p.shape,f=p.holes;ni.isClockWise(d)===!1&&(d=d.reverse());for(let v=0,g=f.length;v<g;v++){let _=f[v];ni.isClockWise(_)===!0&&(f[v]=_.reverse())}let m=ni.triangulateShape(d,f);for(let v=0,g=f.length;v<g;v++){let _=f[v];d=d.concat(_)}for(let v=0,g=d.length;v<g;v++){let _=d[v];n.push(_.x,_.y,0),s.push(0,0,1),a.push(_.x,_.y)}for(let v=0,g=m.length;v<g;v++){let _=m[v],y=_[0]+u,T=_[1]+u,S=_[2]+u;i.push(y,T,S),c+=3}}this.setIndex(i),this.setAttribute("position",new Me(n,3)),this.setAttribute("normal",new Me(s,3)),this.setAttribute("uv",new Me(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,s=t.length;n<s;n++){let a=t[n];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let n=0,s=e.shapes.length;n<s;n++){let a=t[e.shapes[n]];i.push(a)}return new r(i,e.curveSegments)}},na=class r extends Ye{constructor(e=1,t=32,i=16,n=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new A,p=new A,d=[],f=[],m=[],v=[];for(let g=0;g<=i;g++){let _=[],y=g/i,T=0;g===0&&a===0?T=.5/t:g===i&&c===Math.PI&&(T=-.5/t);for(let S=0;S<=t;S++){let w=S/t;u.x=-e*Math.cos(n+w*s)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(n+w*s)*Math.sin(a+y*o),f.push(u.x,u.y,u.z),p.copy(u).normalize(),m.push(p.x,p.y,p.z),v.push(w+T,1-y),_.push(l++)}h.push(_)}for(let g=0;g<i;g++)for(let _=0;_<t;_++){let y=h[g][_+1],T=h[g][_],S=h[g+1][_],w=h[g+1][_+1];(g!==0||a>0)&&d.push(y,T,w),(g!==i-1||c<Math.PI)&&d.push(T,S,w)}this.setIndex(d),this.setAttribute("position",new Me(f,3)),this.setAttribute("normal",new Me(m,3)),this.setAttribute("uv",new Me(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},ra=class r extends Ui{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},sa=class r extends Ye{constructor(e=1,t=.4,i=12,n=48,s=2*Math.PI,a=0,o=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let c=[],l=[],h=[],u=[],p=new A,d=new A,f=new A;for(let m=0;m<=i;m++){let v=a+m/i*o;for(let g=0;g<=n;g++){let _=g/n*s;d.x=(e+t*Math.cos(v))*Math.cos(_),d.y=(e+t*Math.cos(v))*Math.sin(_),d.z=t*Math.sin(v),l.push(d.x,d.y,d.z),p.x=e*Math.cos(_),p.y=e*Math.sin(_),f.subVectors(d,p).normalize(),h.push(f.x,f.y,f.z),u.push(g/n),u.push(m/i)}}for(let m=1;m<=i;m++)for(let v=1;v<=n;v++){let g=(n+1)*m+v-1,_=(n+1)*(m-1)+v-1,y=(n+1)*(m-1)+v,T=(n+1)*m+v;c.push(g,_,T),c.push(_,y,T)}this.setIndex(c),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},aa=class r extends Ye{constructor(e=1,t=.4,i=64,n=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:s,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],c=[],l=[],h=[],u=new A,p=new A,d=new A,f=new A,m=new A,v=new A,g=new A;for(let y=0;y<=i;++y){let T=y/i*s*Math.PI*2;_(T,s,a,e,d),_(T+.01,s,a,e,f),v.subVectors(f,d),g.addVectors(f,d),m.crossVectors(v,g),g.crossVectors(m,v),m.normalize(),g.normalize();for(let S=0;S<=n;++S){let w=S/n*Math.PI*2,P=-t*Math.cos(w),U=t*Math.sin(w);u.x=d.x+(P*g.x+U*m.x),u.y=d.y+(P*g.y+U*m.y),u.z=d.z+(P*g.z+U*m.z),c.push(u.x,u.y,u.z),p.subVectors(u,d).normalize(),l.push(p.x,p.y,p.z),h.push(y/i),h.push(S/n)}}for(let y=1;y<=i;y++)for(let T=1;T<=n;T++){let S=(n+1)*(y-1)+(T-1),w=(n+1)*y+(T-1),P=(n+1)*y+T,U=(n+1)*(y-1)+T;o.push(S,w,U),o.push(w,P,U)}function _(y,T,S,w,P){let U=Math.cos(y),R=Math.sin(y),G=S/T*y,W=Math.cos(G);P.x=w*(2+W)*.5*U,P.y=w*(2+W)*R*.5,P.z=w*Math.sin(G)*.5}this.setIndex(o),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},oa=class r extends Ye{constructor(e=new wr(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new A,c=new A,l=new ne,h=new A,u=[],p=[],d=[],f=[];function m(v){h=e.getPointAt(v/t,h);let g=a.normals[v],_=a.binormals[v];for(let y=0;y<=n;y++){let T=y/n*Math.PI*2,S=Math.sin(T),w=-Math.cos(T);c.x=w*g.x+S*_.x,c.y=w*g.y+S*_.y,c.z=w*g.z+S*_.z,c.normalize(),p.push(c.x,c.y,c.z),o.x=h.x+i*c.x,o.y=h.y+i*c.y,o.z=h.z+i*c.z,u.push(o.x,o.y,o.z)}}(function(){for(let v=0;v<t;v++)m(v);m(s===!1?t:0),(function(){for(let v=0;v<=t;v++)for(let g=0;g<=n;g++)l.x=v/t,l.y=g/n,d.push(l.x,l.y)})(),(function(){for(let v=1;v<=t;v++)for(let g=1;g<=n;g++){let _=(n+1)*(v-1)+(g-1),y=(n+1)*v+(g-1),T=(n+1)*v+g,S=(n+1)*(v-1)+g;f.push(_,y,S),f.push(y,T,S)}})()})(),this.setIndex(f),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(p,3)),this.setAttribute("uv",new Me(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new Ks[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},la=class extends Ye{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new A,s=new A;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],p=u.start;for(let d=p,f=p+u.count;d<f;d+=3)for(let m=0;m<3;m++){let v=o.getX(d+m),g=o.getX(d+(m+1)%3);n.fromBufferAttribute(a,v),s.fromBufferAttribute(a,g),Qc(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,u=3*o+(l+1)%3;n.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Qc(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Me(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Qc(r,e,t){let i=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}var Wm=Object.freeze({__proto__:null,BoxGeometry:Ki,CapsuleGeometry:Hs,CircleGeometry:Ws,ConeGeometry:Xs,CylinderGeometry:Sr,DodecahedronGeometry:js,EdgesGeometry:qs,ExtrudeGeometry:Qs,IcosahedronGeometry:Fn,LatheGeometry:ea,OctahedronGeometry:On,PlaneGeometry:yi,PolyhedronGeometry:Ui,RingGeometry:ta,ShapeGeometry:ia,SphereGeometry:na,TetrahedronGeometry:ra,TorusGeometry:sa,TorusKnotGeometry:aa,TubeGeometry:oa,WireframeGeometry:la});function sn(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function yt(r){let e={};for(let t=0;t<r.length;t++){let i=sn(r[t]);for(let n in i)e[n]=i[n]}return e}function Zl(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}var Jh={clone:sn,merge:yt},It=class extends ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sn(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let n=0;n<t.length;n++)i.push(t[n].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ca=class extends It{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ha=class extends ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Dr=class extends ha{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ua=class extends ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},da=class extends ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var Ur=class extends _r{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function As(r,e){return r&&r.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r):r}var Ni=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(n=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},pa=class extends Ni{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Io,endingEnd:Io}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,a=e+1,o=n[s],c=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Po:s=e,o=2*t-i;break;case Lo:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Po:a=e,c=2*i-t;break;case Lo:a=1,c=i+n[1]-n[0];break;default:a=e-1,c=t}let l=.5*(i-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,d=this._weightNext,f=(i-t)/(n-t),m=f*f,v=m*f,g=-p*v+2*p*m-p*f,_=(1+p)*v+(-1.5-2*p)*m+(-.5+p)*f+1,y=(-1-d)*v+(1.5+d)*m+.5*f,T=d*v-d*m;for(let S=0;S!==o;++S)s[S]=g*a[h+S]+_*a[l+S]+y*a[c+S]+T*a[u+S];return s}},ma=class extends Ni{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(n-t),u=1-h;for(let p=0;p!==o;++p)s[p]=a[l+p]*u+a[c+p]*h;return s}},fa=class extends Ni{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},ga=class extends Ni{interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.settings||this.DefaultSettings_,u=h.inTangents,p=h.outTangents;if(!u||!p){let m=(i-t)/(n-t),v=1-m;for(let g=0;g!==o;++g)s[g]=a[l+g]*v+a[c+g]*m;return s}let d=2*o,f=e-1;for(let m=0;m!==o;++m){let v=a[l+m],g=a[c+m],_=f*d+2*m,y=p[_],T=p[_+1],S=e*d+2*m,w=u[S],P=u[S+1],U,R,G,W,B,V=(i-t)/(n-t);for(let z=0;z<8;z++){U=V*V,R=U*V,G=1-V,W=G*G,B=W*G;let O=B*t+3*W*V*y+3*G*U*w+R*n-i;if(Math.abs(O)<1e-10)break;let k=3*W*(y-t)+6*G*V*(w-y)+3*U*(n-w);if(Math.abs(k)<1e-10)break;V-=O/k,V=Math.max(0,Math.min(1,V))}s[m]=B*v+3*W*V*T+3*G*U*P+R*g}return s}},At=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=As(t,this.TimeBufferType),this.values=As(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:As(e.times,Array),values:As(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ma(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ga(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case lr:t=this.InterpolantFactoryMethodDiscrete;break;case Us:t=this.InterpolantFactoryMethodLinear;break;case Is:t=this.InterpolantFactoryMethodSmooth;break;case Ro:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return ye("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lr;case this.InterpolantFactoryMethodLinear:return Us;case this.InterpolantFactoryMethodSmooth:return Is;case this.InterpolantFactoryMethodBezier:return Ro}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(be("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(be("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){be("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){be("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(n!==void 0&&Lu(n))for(let o=0,c=n.length;o!==c;++o){let l=n[o];if(isNaN(l)){be("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Is,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(n)c=!0;else{let h=o*i,u=h-i,p=h+i;for(let d=0;d!==i;++d){let f=t[h+d];if(f!==t[u+d]||f!==t[p+d]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*i,u=a*i;for(let p=0;p!==i;++p)t[u+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};At.prototype.ValueTypeName="",At.prototype.TimeBufferType=Float32Array,At.prototype.ValueBufferType=Float32Array,At.prototype.DefaultInterpolation=Us;var Ri=class extends At{constructor(e,t,i){super(e,t,i)}};Ri.prototype.ValueTypeName="bool",Ri.prototype.ValueBufferType=Array,Ri.prototype.DefaultInterpolation=lr,Ri.prototype.InterpolantFactoryMethodLinear=void 0,Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var _a=class extends At{constructor(e,t,i,n){super(e,t,i,n)}};_a.prototype.ValueTypeName="color";var va=class extends At{constructor(e,t,i,n){super(e,t,i,n)}};va.prototype.ValueTypeName="number";var xa=class extends Ni{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(n-t),l=e*o;for(let h=l+o;l!==h;l+=4)Ft.slerpFlat(s,0,a,l-o,a,l,c);return s}},Nr=class extends At{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new xa(this.times,this.values,this.getValueSize(),e)}};Nr.prototype.ValueTypeName="quaternion",Nr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends At{constructor(e,t,i){super(e,t,i)}};Ii.prototype.ValueTypeName="string",Ii.prototype.ValueBufferType=Array,Ii.prototype.DefaultInterpolation=lr,Ii.prototype.InterpolantFactoryMethodLinear=void 0,Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends At{constructor(e,t,i,n){super(e,t,i,n)}};ya.prototype.ValueTypeName="vector";var Ps={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(eh(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!eh(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function eh(r){try{let e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ma=class{constructor(e,t,i){let n=this,s,a=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){c++,a===!1&&n.onStart!==void 0&&n.onStart(h,o,c),a=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,c),o===c&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=l.length;u<p;u+=2){let d=l[u],f=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Kh=new Ma,Bn=class{constructor(e){this.manager=e!==void 0?e:Kh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Bn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mn=new WeakMap,Sa=class extends Bn{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Ps.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=Mn.get(a);u===void 0&&(u=[],Mn.set(a,u)),u.push({onLoad:t,onError:n})}return a}let o=An("img");function c(){h(),t&&t(this);let u=Mn.get(this)||[];for(let p=0;p<u.length;p++){let d=u[p];d.onLoad&&d.onLoad(this)}Mn.delete(this),s.manager.itemEnd(e)}function l(u){h(),n&&n(u),Ps.remove(`image:${e}`);let p=Mn.get(this)||[];for(let d=0;d<p.length;d++){let f=p[d];f.onError&&f.onError(u)}Mn.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ps.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var Fr=class extends Bn{constructor(e){super(e)}load(e,t,i,n){let s=new bt,a=new Sa(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}},Or=class extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Br=class extends Or{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ao=new Le,th=new A,ih=new A,Go=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.mapType=Pt,this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Li,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;th.setFromMatrixPosition(e.matrixWorld),t.position.copy(th),ih.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ih),t.updateMatrixWorld(),Ao.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ao,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===wn||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ao)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Cs=new A,Rs=new Ft,ei=new A,zn=class extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Cs,Rs,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cs,Rs,ei.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Cs,Rs,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cs,Rs,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ci=new A,nh=new ne,rh=new ne,dt=class extends zn{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Rn*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Tn*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Rn*Math.atan(Math.tan(.5*Tn*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,t){return this.getViewBounds(e,nh,rh),t.subVectors(rh,nh)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Tn*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*n/c,t-=a.offsetY*i/l,n*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Vo=class extends Go{constructor(){super(new dt(90,1,.5,500)),this.isPointLightShadow=!0}},zr=class extends Or{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Vo}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Gr=class extends zn{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,a=i+e,o=n+t,c=n-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Xm=new Le,jm=new Le,qm=new Le;var Sn=-90,ba=class extends _t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new dt(Sn,1,e,t);n.layers=this.layers,this.add(n);let s=new dt(Sn,1,e,t);s.layers=this.layers,this.add(s);let a=new dt(Sn,1,e,t);a.layers=this.layers,this.add(a);let o=new dt(Sn,1,e,t);o.layers=this.layers,this.add(o);let c=new dt(Sn,1,e,t);c.layers=this.layers,this.add(c);let l=new dt(Sn,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==wn)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;v=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(i,0,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,p,d),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},Ta=class extends dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ym=new A,Zm=new Ft,Jm=new A,Km=new A,$m=new A;var Qm=new A,ef=new Ft,tf=new A,nf=new A;var Jl="\\[\\]\\.:\\/",ld=new RegExp("["+Jl+"]","g"),Co="[^"+Jl+"]",cd="[^"+Jl.replace("\\.","")+"]",hd=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Co)+/(WCOD+)?/.source.replace("WCOD",cd)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Co)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Co)+"$"),ud=["material","materials","bones","map"],Je=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ld,"")}static parseTrackName(e){let t=hd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);ud.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void ye("PropertyBinding: No target node found for track: "+this.path+".");if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material)return void be("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void be("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void be("PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(l!==void 0){if(e[l]===void 0)return void be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let a=e[n];if(a===void 0)return void be("PropertyBinding: Trying to update property for track: "+t.nodeName+"."+n+" but it wasn't found.",e);let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Je.Composite=class{constructor(r,e,t){let i=t||Je.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,i)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},Je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Je.prototype.GetterByBindingType=[Je.prototype._getValue_direct,Je.prototype._getValue_array,Je.prototype._getValue_arrayElement,Je.prototype._getValue_toArray],Je.prototype.SetterByBindingTypeAndVersioning=[[Je.prototype._setValue_direct,Je.prototype._setValue_direct_setNeedsUpdate,Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_array,Je.prototype._setValue_array_setNeedsUpdate,Je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_arrayElement,Je.prototype._setValue_arrayElement_setNeedsUpdate,Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_fromArray,Je.prototype._setValue_fromArray_setNeedsUpdate,Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rf=new Float32Array(1);var sf=new Le;var Vr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ye("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var af=new ne;var of=new A,lf=new A,cf=new A,hf=new A,uf=new A,df=new A,pf=new A;var mf=new A;var ff=new A,gf=new Le,_f=new Le;var vf=new A,xf=new Ee,yf=new Ee;var Mf=new A,Sf=new A,bf=new A;var Tf=new A,Ef=new zn;var wf=new Xt;var Af=new A;function Kl(r,e,t,i){let n=(function(s){switch(s){case Pt:case ol:return{byteLength:1,components:1};case Wn:case ll:case ai:return{byteLength:2,components:1};case Ia:case Pa:return{byteLength:2,components:4};case Mi:case Ra:case Yt:return{byteLength:4,components:1};case cl:case hl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(i);switch(t){case 1021:return r*e;case ul:case La:return r*e/n.components*n.byteLength;case 1030:case 1031:return r*e*2/n.components*n.byteLength;case 1022:return r*e*3/n.components*n.byteLength;case Zt:case 1033:return r*e*4/n.components*n.byteLength;case 33776:case 33777:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(r,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(r,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:case 37808:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(r/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(r/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}})),typeof window<"u"&&(window.__THREE__?ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");function yu(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function pd(r){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(r.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let n=e.get(t);if(n===void 0)e.set(t,(function(s,a){let o=s.array,c=s.usage,l=o.byteLength,h=r.createBuffer(),u;if(r.bindBuffer(a,h),r.bufferData(a,o,c),s.onUploadCallback(),o instanceof Float32Array)u=r.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=r.HALF_FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=r.SHORT;else if(o instanceof Uint32Array)u=r.UNSIGNED_INT;else if(o instanceof Int32Array)u=r.INT;else if(o instanceof Int8Array)u=r.BYTE;else if(o instanceof Uint8Array)u=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=r.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:l}})(t,i));else if(n.version<t.version){if(n.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let c=a.array,l=a.updateRanges;if(r.bindBuffer(o,s),l.length===0)r.bufferSubData(o,0,c);else{l.sort((u,p)=>u.start-p.start);let h=0;for(let u=1;u<l.length;u++){let p=l[h],d=l[u];d.start<=p.start+p.count+1?p.count=Math.max(p.count,d.start+d.count-p.start):(++h,l[h]=d)}l.length=h+1;for(let u=0,p=l.length;u<p;u++){let d=l[u];r.bufferSubData(o,d.start*c.BYTES_PER_ELEMENT,c,d.start,d.count)}a.clearUpdateRanges()}a.onUploadCallback()})(n.buffer,t,i),n.version=t.version}}}}var Ne={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshmatcap_frag:`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,points_vert:`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,points_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`},ce={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},li={basic:{uniforms:yt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:yt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ee(0)},envMapIntensity:{value:1}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:yt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:yt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:yt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:yt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:yt([ce.points,ce.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:yt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:yt([ce.common,ce.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:yt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:yt([ce.sprite,ce.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distance:{uniforms:yt([ce.common,ce.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distance_vert,fragmentShader:Ne.distance_frag},shadow:{uniforms:yt([ce.lights,ce.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};li.physical={uniforms:yt([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};var za={r:0,b:0,g:0},an=new Wt,md=new Le;function fd(r,e,t,i,n,s){let a=new Ee(0),o,c,l=n===!0?0:1,h=null,u=0,p=null;function d(m){let v=m.isScene===!0?m.background:null;if(v&&v.isTexture){let g=m.backgroundBlurriness>0;v=e.get(v,g)}return v}function f(m,v){m.getRGB(za,Zl(r)),t.buffers.color.setClear(za.r,za.g,za.b,v,s)}return{getClearColor:function(){return a},setClearColor:function(m,v=1){a.set(m),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,f(a,l)},render:function(m){let v=!1,g=d(m);g===null?f(a,l):g&&g.isColor&&(f(g,1),v=!0);let _=r.xr.getEnvironmentBlendMode();_==="additive"?t.buffers.color.setClear(0,0,0,1,s):_==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(m,v){let g=d(v);g&&(g.isCubeTexture||g.mapping===Wr)?(c===void 0&&(c=new pt(new Ki(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:sn(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,y,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),an.copy(v.backgroundRotation),an.x*=-1,an.y*=-1,an.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(an.y*=-1,an.z*=-1),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(md.makeRotationFromEuler(an)),c.material.toneMapped=He.getTransfer(g.colorSpace)!==je,h===g&&u===g.version&&p===r.toneMapping||(c.material.needsUpdate=!0,h=g,u=g.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(o===void 0&&(o=new pt(new yi(2,2),new It({name:"BackgroundMaterial",uniforms:sn(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=g,o.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,o.material.toneMapped=He.getTransfer(g.colorSpace)!==je,g.matrixAutoUpdate===!0&&g.updateMatrix(),o.material.uniforms.uvTransform.value.copy(g.matrix),h===g&&u===g.version&&p===r.toneMapping||(o.material.needsUpdate=!0,h=g,u=g.version,p=r.toneMapping),o.layers.enableAll(),m.unshift(o,o.geometry,o.material,0,0,null))},dispose:function(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}}}function gd(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=l(null),s=n,a=!1;function o(g){return r.bindVertexArray(g)}function c(g){return r.deleteVertexArray(g)}function l(g){let _=[],y=[],T=[];for(let S=0;S<t;S++)_[S]=0,y[S]=0,T[S]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:y,attributeDivisors:T,object:g,attributes:{},index:null}}function h(){let g=s.newAttributes;for(let _=0,y=g.length;_<y;_++)g[_]=0}function u(g){p(g,0)}function p(g,_){let y=s.newAttributes,T=s.enabledAttributes,S=s.attributeDivisors;y[g]=1,T[g]===0&&(r.enableVertexAttribArray(g),T[g]=1),S[g]!==_&&(r.vertexAttribDivisor(g,_),S[g]=_)}function d(){let g=s.newAttributes,_=s.enabledAttributes;for(let y=0,T=_.length;y<T;y++)_[y]!==g[y]&&(r.disableVertexAttribArray(y),_[y]=0)}function f(g,_,y,T,S,w,P){P===!0?r.vertexAttribIPointer(g,_,y,S,w):r.vertexAttribPointer(g,_,y,T,S,w)}function m(){v(),a=!0,s!==n&&(s=n,o(s.object))}function v(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:function(g,_,y,T,S){let w=!1,P=(function(U,R,G,W){let B=W.wireframe===!0,V=i[R.id];V===void 0&&(V={},i[R.id]=V);let z=U.isInstancedMesh===!0?U.id:0,O=V[z];O===void 0&&(O={},V[z]=O);let k=O[G.id];k===void 0&&(k={},O[G.id]=k);let j=k[B];return j===void 0&&(j=l(r.createVertexArray()),k[B]=j),j})(g,T,y,_);s!==P&&(s=P,o(s.object)),w=(function(U,R,G,W){let B=s.attributes,V=R.attributes,z=0,O=G.getAttributes();for(let k in O)if(O[k].location>=0){let j=B[k],re=V[k];if(re===void 0&&(k==="instanceMatrix"&&U.instanceMatrix&&(re=U.instanceMatrix),k==="instanceColor"&&U.instanceColor&&(re=U.instanceColor)),j===void 0||j.attribute!==re||re&&j.data!==re.data)return!0;z++}return s.attributesNum!==z||s.index!==W})(g,T,y,S),w&&(function(U,R,G,W){let B={},V=R.attributes,z=0,O=G.getAttributes();for(let k in O)if(O[k].location>=0){let j=V[k];j===void 0&&(k==="instanceMatrix"&&U.instanceMatrix&&(j=U.instanceMatrix),k==="instanceColor"&&U.instanceColor&&(j=U.instanceColor));let re={};re.attribute=j,j&&j.data&&(re.data=j.data),B[k]=re,z++}s.attributes=B,s.attributesNum=z,s.index=W})(g,T,y,S),S!==null&&e.update(S,r.ELEMENT_ARRAY_BUFFER),(w||a)&&(a=!1,(function(U,R,G,W){h();let B=W.attributes,V=G.getAttributes(),z=R.defaultAttributeValues;for(let O in V){let k=V[O];if(k.location>=0){let j=B[O];if(j===void 0&&(O==="instanceMatrix"&&U.instanceMatrix&&(j=U.instanceMatrix),O==="instanceColor"&&U.instanceColor&&(j=U.instanceColor)),j!==void 0){let re=j.normalized,ge=j.itemSize,ue=e.get(j);if(ue===void 0)continue;let pe=ue.buffer,he=ue.type,K=ue.bytesPerElement,se=he===r.INT||he===r.UNSIGNED_INT||j.gpuType===Ra;if(j.isInterleavedBufferAttribute){let ae=j.data,xe=ae.stride,Re=j.offset;if(ae.isInstancedInterleavedBuffer){for(let b=0;b<k.locationSize;b++)p(k.location+b,ae.meshPerAttribute);U.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let b=0;b<k.locationSize;b++)u(k.location+b);r.bindBuffer(r.ARRAY_BUFFER,pe);for(let b=0;b<k.locationSize;b++)f(k.location+b,ge/k.locationSize,he,re,xe*K,(Re+ge/k.locationSize*b)*K,se)}else{if(j.isInstancedBufferAttribute){for(let ae=0;ae<k.locationSize;ae++)p(k.location+ae,j.meshPerAttribute);U.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ae=0;ae<k.locationSize;ae++)u(k.location+ae);r.bindBuffer(r.ARRAY_BUFFER,pe);for(let ae=0;ae<k.locationSize;ae++)f(k.location+ae,ge/k.locationSize,he,re,ge*K,ge/k.locationSize*ae*K,se)}}else if(z!==void 0){let re=z[O];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(k.location,re);break;case 3:r.vertexAttrib3fv(k.location,re);break;case 4:r.vertexAttrib4fv(k.location,re);break;default:r.vertexAttrib1fv(k.location,re)}}}}d()})(g,_,y,T),S!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(S).buffer))},reset:m,resetDefaultState:v,dispose:function(){m();for(let g in i){let _=i[g];for(let y in _){let T=_[y];for(let S in T){let w=T[S];for(let P in w)c(w[P].object),delete w[P];delete T[S]}}delete i[g]}},releaseStatesOfGeometry:function(g){if(i[g.id]===void 0)return;let _=i[g.id];for(let y in _){let T=_[y];for(let S in T){let w=T[S];for(let P in w)c(w[P].object),delete w[P];delete T[S]}}delete i[g.id]},releaseStatesOfObject:function(g){for(let _ in i){let y=i[_],T=g.isInstancedMesh===!0?g.id:0,S=y[T];if(S!==void 0){for(let w in S){let P=S[w];for(let U in P)c(P[U].object),delete P[U];delete S[w]}delete y[T],Object.keys(y).length===0&&delete i[_]}}},releaseStatesOfProgram:function(g){for(let _ in i){let y=i[_];for(let T in y){let S=y[T];if(S[g.id]===void 0)continue;let w=S[g.id];for(let P in w)c(w[P].object),delete w[P];delete S[g.id]}}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:d}}function _d(r,e,t){let i;function n(s,a,o){o!==0&&(r.drawArraysInstanced(i,s,a,o),t.update(a,i,o))}this.setMode=function(s){i=s},this.render=function(s,a){r.drawArrays(i,s,a),t.update(a,i,1)},this.renderInstances=n,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,s,0,a,0,o);let c=0;for(let l=0;l<o;l++)c+=a[l];t.update(c,i,1)},this.renderMultiDrawInstances=function(s,a,o,c){if(o===0)return;let l=e.get("WEBGL_multi_draw");if(l===null)for(let h=0;h<s.length;h++)n(s[h],a[h],c[h]);else{l.multiDrawArraysInstancedWEBGL(i,s,0,a,0,c,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*c[u];t.update(h,i,1)}}}function vd(r,e,t,i){let n;function s(c){if(c==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";c="mediump"}return c==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);return o!==a&&(ye("WebGLRenderer:",a,"not supported, using",o,"instead."),a=o),{isWebGL2:!0,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let c=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:s,textureFormatReadable:function(c){return c===Zt||i.convert(c)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(c){let l=c===ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(c!==Pt&&i.convert(c)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&c!==Yt&&!l)},precision:a,logarithmicDepthBuffer:t.logarithmicDepthBuffer===!0,reversedDepthBuffer:t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),maxTextures:r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextures:r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),maxSamples:r.getParameter(r.MAX_SAMPLES),samples:r.getParameter(r.SAMPLES)}}function xd(r){let e=this,t=null,i=0,n=!1,s=!1,a=new ti,o=new Ie,c={value:null,needsUpdate:!1};function l(h,u,p,d){let f=h!==null?h.length:0,m=null;if(f!==0){if(m=c.value,d!==!0||m===null){let v=p+4*f,g=u.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<v)&&(m=new Float32Array(v));for(let _=0,y=p;_!==f;++_,y+=4)a.copy(h[_]).applyMatrix4(g,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,m}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let p=h.length!==0||u||i!==0||n;return n=u,i=h.length,p},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=l(h,u,0)},this.setState=function(h,u,p){let d=h.clippingPlanes,f=h.clipIntersection,m=h.clipShadows,v=r.get(h);if(!n||d===null||d.length===0||s&&!m)s?l(null):(function(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let g=s?0:i,_=4*g,y=v.clippingState||null;c.value=y,y=l(d,u,_,p);for(let T=0;T!==_;++T)y[T]=t[T];v.clippingState=y,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=g}}}var $h=[.125,.215,.35,.446,.526,.582],jr=20,qr=new Gr,Qh=new Ee,$l=null,Ql=0,ec=0,tc=!1,yd=new A,Va=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,s={}){let{size:a=256,position:o=yd}=s;$l=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,n,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($l,Ql,ec),this._renderer.xr.enabled=tc,e.scissorTest=!1,qn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hn||e.mapping===Qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$l=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xt,minFilter:xt,generateMipmaps:!1,type:ai,format:Zt,colorSpace:Yi,depthBuffer:!1},n=eu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eu(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=(function(a){let o=[],c=[],l=[],h=a,u=a-4+1+$h.length;for(let p=0;p<u;p++){let d=Math.pow(2,h);o.push(d);let f=1/d;p>a-4?f=$h[p-a+4-1]:p===0&&(f=0),c.push(f);let m=1/(d-2),v=-m,g=1+m,_=[v,v,g,v,g,g,v,v,g,g,v,g],y=6,T=6,S=3,w=2,P=1,U=new Float32Array(S*T*y),R=new Float32Array(w*T*y),G=new Float32Array(P*T*y);for(let B=0;B<y;B++){let V=B%3*2/3-1,z=B>2?0:-1,O=[V,z,0,V+2/3,z,0,V+2/3,z+1,0,V,z,0,V+2/3,z+1,0,V,z+1,0];U.set(O,S*T*B),R.set(_,w*T*B);let k=[B,B,B,B,B,B];G.set(k,P*T*B)}let W=new Ye;W.setAttribute("position",new vt(U,S)),W.setAttribute("uv",new vt(R,w)),W.setAttribute("faceIndex",new vt(G,P)),l.push(new pt(W,null)),h>4&&h--}return{lodMeshes:l,sizeLods:o,sigmas:c}})(s)),this._blurMaterial=(function(a,o,c){let l=new Float32Array(jr),h=new A(0,1,0);return new It({name:"SphericalGaussianBlur",defines:{n:jr,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:ka(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})})(s,e,t),this._ggxMaterial=(function(a,o,c){return new It({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:256,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ka(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:si,depthTest:!1,depthWrite:!1})})(s,e,t)}return n}_compileMaterial(e){let t=new pt(new Ye,e);this._renderer.compile(t,qr)}_sceneToCubeUV(e,t,i,n,s){let a=new dt(90,1,t,i),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,u=l.toneMapping;l.getClearColor(Qh),l.toneMapping=qt,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(n),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pt(new Ki,new Ji({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1})));let p=this._backgroundBox,d=p.material,f=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,f=!0):(d.color.copy(Qh),f=!0);for(let v=0;v<6;v++){let g=v%3;g===0?(a.up.set(0,o[v],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+c[v],s.y,s.z)):g===1?(a.up.set(0,0,o[v]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+c[v],s.z)):(a.up.set(0,o[v],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+c[v]));let _=this._cubeSize;qn(n,g*_,v>2?_:0,_,_),l.setRenderTarget(n),f&&l.render(p,a),l.render(e,a)}l.toneMapping=u,l.autoClear=h,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===Hn||e.mapping===Qi;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=iu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tu());let s=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s,s.uniforms.envMap.value=e;let o=this._cubeSize;qn(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,qr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let n=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let c=a.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h)*(0+1.25*l),{_lodMax:p}=this,d=this._sizeLods[i],f=3*d*(i>p-4?i-p+4:0),m=4*(this._cubeSize-d);c.envMap.value=e.texture,c.roughness.value=u,c.mipInt.value=p-t,qn(s,f,m,3*d,2*d),n.setRenderTarget(s),n.render(o,qr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=p-i,qn(e,f,m,3*d,2*d),n.setRenderTarget(e),n.render(o,qr)}_blur(e,t,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&be("blur direction must be either latitudinal or longitudinal!");let h=this._lodMeshes[n];h.material=l;let u=l.uniforms,p=this._sizeLods[i]-1,d=isFinite(s)?Math.PI/(2*p):2*Math.PI/39,f=s/d,m=isFinite(s)?1+Math.floor(3*f):jr;m>jr&&ye(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);let v=[],g=0;for(let T=0;T<jr;++T){let S=T/f,w=Math.exp(-S*S/2);v.push(w),T===0?g+=w:T<m&&(g+=2*w)}for(let T=0;T<v.length;T++)v[T]=v[T]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=v,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=d,u.mipInt.value=_-i;let y=this._sizeLods[n];qn(t,3*y*(n>_-4?n-_+4:0),4*(this._cubeSize-y),3*y,2*y),c.setRenderTarget(t),c.render(h,qr)}};function eu(r,e,t){let i=new Ct(r,e,t);return i.texture.mapping=Wr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qn(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function tu(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ka(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function iu(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function ka(){return`

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
	`}var Ha=class extends Ct{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new yr(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Ki(5,5,5),s=new It({name:"CubemapFromEquirect",uniforms:sn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tt,blending:si});s.uniforms.tEquirect.value=t;let a=new pt(n,s),o=t.minFilter;return t.minFilter===en&&(t.minFilter=xt),new ba(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}};function Md(r){let e=new WeakMap,t=new WeakMap,i=null;function n(o,c){return c===wa?o.mapping=Hn:c===Aa&&(o.mapping=Qi),o}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(o){let c=o.target;c.removeEventListener("dispose",a);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}return{get:function(o,c=!1){return o==null?null:c?(function(l){if(l&&l.isTexture){let h=l.mapping,u=h===wa||h===Aa,p=h===Hn||h===Qi;if(u||p){let d=t.get(l),f=d!==void 0?d.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==f)return i===null&&(i=new Va(r)),d=u?i.fromEquirectangular(l,d):i.fromCubemap(l,d),d.texture.pmremVersion=l.pmremVersion,t.set(l,d),d.texture;if(d!==void 0)return d.texture;{let m=l.image;return u&&m&&m.height>0||p&&m&&(function(v){let g=0,_=6;for(let y=0;y<_;y++)v[y]!==void 0&&g++;return g===_})(m)?(i===null&&(i=new Va(r)),d=u?i.fromEquirectangular(l):i.fromCubemap(l),d.texture.pmremVersion=l.pmremVersion,t.set(l,d),l.addEventListener("dispose",a),d.texture):null}}}return l})(o):(function(l){if(l&&l.isTexture){let h=l.mapping;if(h===wa||h===Aa){if(e.has(l))return n(e.get(l).texture,l.mapping);{let u=l.image;if(u&&u.height>0){let p=new Ha(u.height);return p.fromEquirectangularTexture(r,l),e.set(l,p),l.addEventListener("dispose",s),n(p.texture,l.mapping)}return null}}}return l})(o)},dispose:function(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}}}function Sd(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=r.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&hr("WebGLRenderer: "+i+" extension not supported."),n}}}function bd(r,e,t,i){let n={},s=new WeakMap;function a(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let u in l.attributes)e.remove(l.attributes[u]);l.removeEventListener("dispose",a),delete n[l.id];let h=s.get(l);h&&(e.remove(h),s.delete(l)),i.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,u=c.attributes.position,p=0;if(u===void 0)return;if(h!==null){let m=h.array;p=h.version;for(let v=0,g=m.length;v<g;v+=3){let _=m[v+0],y=m[v+1],T=m[v+2];l.push(_,y,y,T,T,_)}}else{let m=u.array;p=u.version;for(let v=0,g=m.length/3-1;v<g;v+=3){let _=v+0,y=v+1,T=v+2;l.push(_,y,y,T,T,_)}}let d=new(u.count>=65535?gr:fr)(l,1);d.version=p;let f=s.get(c);f&&e.remove(f),s.set(c,d)}return{get:function(c,l){return n[l.id]===!0||(l.addEventListener("dispose",a),n[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let h in l)e.update(l[h],r.ARRAY_BUFFER)},getWireframeAttribute:function(c){let l=s.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return s.get(c)}}}function Td(r,e,t){let i,n,s;function a(o,c,l){l!==0&&(r.drawElementsInstanced(i,c,n,o*s,l),t.update(c,i,l))}this.setMode=function(o){i=o},this.setIndex=function(o){n=o.type,s=o.bytesPerElement},this.render=function(o,c){r.drawElements(i,c,n,o*s),t.update(c,i,1)},this.renderInstances=a,this.renderMultiDraw=function(o,c,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,c,0,n,o,0,l);let h=0;for(let u=0;u<l;u++)h+=c[u];t.update(h,i,1)},this.renderMultiDrawInstances=function(o,c,l,h){if(l===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let p=0;p<o.length;p++)a(o[p]/s,c[p],h[p]);else{u.multiDrawElementsInstancedWEBGL(i,c,0,n,o,0,h,0,l);let p=0;for(let d=0;d<l;d++)p+=c[d]*h[d];t.update(p,i,1)}}}function Ed(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case r.TRIANGLES:e.triangles+=n*(t/3);break;case r.LINES:e.lines+=n*(t/2);break;case r.LINE_STRIP:e.lines+=n*(t-1);break;case r.LINE_LOOP:e.lines+=n*t;break;case r.POINTS:e.points+=n*t;break;default:be("WebGLInfo: Unknown draw mode:",i)}}}}function wd(r,e,t){let i=new WeakMap,n=new Ke;return{update:function(s,a,o){let c=s.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=l!==void 0?l.length:0,u=i.get(a);if(u===void 0||u.count!==h){let U=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",U)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,d=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],_=0;p===!0&&(_=1),d===!0&&(_=2),f===!0&&(_=3);let y=a.attributes.position.count*_,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let S=new Float32Array(y*T*4*h),w=new ur(S,y,T,h);w.type=Yt,w.needsUpdate=!0;let P=4*_;for(let R=0;R<h;R++){let G=m[R],W=v[R],B=g[R],V=y*T*4*R;for(let z=0;z<G.count;z++){let O=z*P;p===!0&&(n.fromBufferAttribute(G,z),S[V+O+0]=n.x,S[V+O+1]=n.y,S[V+O+2]=n.z,S[V+O+3]=0),d===!0&&(n.fromBufferAttribute(W,z),S[V+O+4]=n.x,S[V+O+5]=n.y,S[V+O+6]=n.z,S[V+O+7]=0),f===!0&&(n.fromBufferAttribute(B,z),S[V+O+8]=n.x,S[V+O+9]=n.y,S[V+O+10]=n.z,S[V+O+11]=B.itemSize===4?n.w:1)}}u={count:h,texture:w,size:new ne(y,T)},i.set(a,u),a.addEventListener("dispose",U)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let p=0;for(let f=0;f<c.length;f++)p+=c[f];let d=a.morphTargetsRelative?1:1-p;o.getUniforms().setValue(r,"morphTargetBaseInfluence",d),o.getUniforms().setValue(r,"morphTargetInfluences",c)}o.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}}}function Ad(r,e,t,i,n){let s=new WeakMap;function a(o){let c=o.target;c.removeEventListener("dispose",a),i.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:function(o){let c=n.render.frame,l=o.geometry,h=e.get(o,l);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),s.get(o)!==c&&(t.update(o.instanceMatrix,r.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,r.ARRAY_BUFFER),s.set(o,c))),o.isSkinnedMesh){let u=o.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return h},dispose:function(){s=new WeakMap}}}var Cd={[Qo]:"LINEAR_TONE_MAPPING",[el]:"REINHARD_TONE_MAPPING",[tl]:"CINEON_TONE_MAPPING",[il]:"ACES_FILMIC_TONE_MAPPING",[rl]:"AGX_TONE_MAPPING",[sl]:"NEUTRAL_TONE_MAPPING",[nl]:"CUSTOM_TONE_MAPPING"};function Rd(r,e,t,i,n){let s=new Ct(e,t,{type:r,depthBuffer:i,stencilBuffer:n}),a=new Ct(e,t,{type:ai,depthBuffer:!1,stencilBuffer:!1}),o=new Ye;o.setAttribute("position",new Me([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Me([0,2,0,0,2,0],2));let c=new ca({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new pt(o,c),h=new Gr(-1,1,1,-1,0,1),u,p=null,d=null,f=!1,m=null,v=[],g=!1;this.setSize=function(_,y){s.setSize(_,y),a.setSize(_,y);for(let T=0;T<v.length;T++){let S=v[T];S.setSize&&S.setSize(_,y)}},this.setEffects=function(_){v=_,g=v.length>0&&v[0].isRenderPass===!0;let y=s.width,T=s.height;for(let S=0;S<v.length;S++){let w=v[S];w.setSize&&w.setSize(y,T)}},this.begin=function(_,y){if(f||_.toneMapping===qt&&v.length===0)return!1;if(m=y,y!==null){let T=y.width,S=y.height;s.width===T&&s.height===S||this.setSize(T,S)}return g===!1&&_.setRenderTarget(s),u=_.toneMapping,_.toneMapping=qt,!0},this.hasRenderPass=function(){return g},this.end=function(_,y){_.toneMapping=u,f=!0;let T=s,S=a;for(let w=0;w<v.length;w++){let P=v[w];if(P.enabled!==!1&&(P.render(_,S,T,y),P.needsSwap!==!1)){let U=T;T=S,S=U}}if(p!==_.outputColorSpace||d!==_.toneMapping){p=_.outputColorSpace,d=_.toneMapping,c.defines={},He.getTransfer(p)===je&&(c.defines.SRGB_TRANSFER="");let w=Cd[d];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,_.setRenderTarget(m),_.render(l,h),m=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}var Mu=new bt,rc=new Di(1,1),Su=new ur,bu=new Os,Tu=new yr,nu=[],ru=[],su=new Float32Array(16),au=new Float32Array(9),ou=new Float32Array(4);function Zn(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=nu[n];if(s===void 0&&(s=new Float32Array(n),nu[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function ot(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function lt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Xa(r,e){let t=ru[e];t===void 0&&(t=new Int32Array(e),ru[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function Id(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Pd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;r.uniform2fv(this.addr,e),lt(t,e)}}function Ld(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;r.uniform3fv(this.addr,e),lt(t,e)}}function Dd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;r.uniform4fv(this.addr,e),lt(t,e)}}function Ud(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ot(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,i))return;ou.set(i),r.uniformMatrix2fv(this.addr,!1,ou),lt(t,i)}}function Nd(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ot(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,i))return;au.set(i),r.uniformMatrix3fv(this.addr,!1,au),lt(t,i)}}function Fd(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ot(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,i))return;su.set(i),r.uniformMatrix4fv(this.addr,!1,su),lt(t,i)}}function Od(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Bd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;r.uniform2iv(this.addr,e),lt(t,e)}}function zd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;r.uniform3iv(this.addr,e),lt(t,e)}}function Gd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;r.uniform4iv(this.addr,e),lt(t,e)}}function Vd(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function kd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;r.uniform2uiv(this.addr,e),lt(t,e)}}function Hd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;r.uniform3uiv(this.addr,e),lt(t,e)}}function Wd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;r.uniform4uiv(this.addr,e),lt(t,e)}}function Xd(r,e,t){let i=this.cache,n=t.allocateTextureUnit(),s;i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),this.type===r.SAMPLER_2D_SHADOW?(rc.compareFunction=t.isReversedDepthBuffer()?Ba:Oa,s=rc):s=Mu,t.setTexture2D(e||s,n)}function jd(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||bu,n)}function qd(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Tu,n)}function Yd(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Su,n)}function Zd(r,e){r.uniform1fv(this.addr,e)}function Jd(r,e){let t=Zn(e,this.size,2);r.uniform2fv(this.addr,t)}function Kd(r,e){let t=Zn(e,this.size,3);r.uniform3fv(this.addr,t)}function $d(r,e){let t=Zn(e,this.size,4);r.uniform4fv(this.addr,t)}function Qd(r,e){let t=Zn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function ep(r,e){let t=Zn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function tp(r,e){let t=Zn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function ip(r,e){r.uniform1iv(this.addr,e)}function np(r,e){r.uniform2iv(this.addr,e)}function rp(r,e){r.uniform3iv(this.addr,e)}function sp(r,e){r.uniform4iv(this.addr,e)}function ap(r,e){r.uniform1uiv(this.addr,e)}function op(r,e){r.uniform2uiv(this.addr,e)}function lp(r,e){r.uniform3uiv(this.addr,e)}function cp(r,e){r.uniform4uiv(this.addr,e)}function hp(r,e,t){let i=this.cache,n=e.length,s=Xa(t,n),a;ot(i,s)||(r.uniform1iv(this.addr,s),lt(i,s)),a=this.type===r.SAMPLER_2D_SHADOW?rc:Mu;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||a,s[o])}function up(r,e,t){let i=this.cache,n=e.length,s=Xa(t,n);ot(i,s)||(r.uniform1iv(this.addr,s),lt(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||bu,s[a])}function dp(r,e,t){let i=this.cache,n=e.length,s=Xa(t,n);ot(i,s)||(r.uniform1iv(this.addr,s),lt(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Tu,s[a])}function pp(r,e,t){let i=this.cache,n=e.length,s=Xa(t,n);ot(i,s)||(r.uniform1iv(this.addr,s),lt(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Su,s[a])}var sc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(n){switch(n){case 5126:return Id;case 35664:return Pd;case 35665:return Ld;case 35666:return Dd;case 35674:return Ud;case 35675:return Nd;case 35676:return Fd;case 5124:case 35670:return Od;case 35667:case 35671:return Bd;case 35668:case 35672:return zd;case 35669:case 35673:return Gd;case 5125:return Vd;case 36294:return kd;case 36295:return Hd;case 36296:return Wd;case 35678:case 36198:case 36298:case 36306:case 35682:return Xd;case 35679:case 36299:case 36307:return jd;case 35680:case 36300:case 36308:case 36293:return qd;case 36289:case 36303:case 36311:case 36292:return Yd}})(t.type)}},ac=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(n){switch(n){case 5126:return Zd;case 35664:return Jd;case 35665:return Kd;case 35666:return $d;case 35674:return Qd;case 35675:return ep;case 35676:return tp;case 5124:case 35670:return ip;case 35667:case 35671:return np;case 35668:case 35672:return rp;case 35669:case 35673:return sp;case 5125:return ap;case 36294:return op;case 36295:return lp;case 36296:return cp;case 35678:case 36198:case 36298:case 36306:case 35682:return hp;case 35679:case 36299:case 36307:return up;case 35680:case 36300:case 36308:case 36293:return dp;case 36289:case 36303:case 36311:case 36292:return pp}})(t.type)}},oc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(e,t[o.id],i)}}},ic=/(\w+)(\])?(\[|\.)?/g;function lu(r,e){r.seq.push(e),r.map[e.id]=e}function mp(r,e,t){let i=r.name,n=i.length;for(ic.lastIndex=0;;){let s=ic.exec(i),a=ic.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o|=0),l===void 0||l==="["&&a+2===n){lu(t,l===void 0?new sc(o,r,e):new ac(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new oc(o),lu(t,h)),t=h}}}var Yn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a);mp(o,e.getUniformLocation(t,o.name),this)}let n=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(a):s.push(a);n.length>0&&(this.seq=n.concat(s))}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function cu(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var fp=0,hu=new Ie;function uu(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),n=(r.getShaderInfoLog(e)||"").trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+(function(o,c){let l=o.split(`
`),h=[],u=Math.max(c-6,0),p=Math.min(c+6,l.length);for(let d=u;d<p;d++){let f=d+1;h.push(`${f===c?">":" "} ${f}: ${l[d]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return n}function gp(r,e){let t=(function(i){He._getMatrix(hu,He.workingColorSpace,i);let n=`mat3( ${hu.elements.map(s=>s.toFixed(4))} )`;switch(He.getTransfer(i)){case cr:return[n,"LinearTransferOETF"];case je:return[n,"sRGBTransferOETF"];default:return ye("WebGLProgram: Unsupported color space: ",i),[n,"LinearTransferOETF"]}})(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var _p={[Qo]:"Linear",[el]:"Reinhard",[tl]:"Cineon",[il]:"ACESFilmic",[rl]:"AgX",[sl]:"Neutral",[nl]:"Custom"};function vp(r,e){let t=_p[e];return t===void 0?(ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ga=new A;function xp(){return He.getLuminanceCoefficients(Ga),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Ga.x.toFixed(4)}, ${Ga.y.toFixed(4)}, ${Ga.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yr(r){return r!==""}function du(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var yp=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(r){return r.replace(yp,Sp)}var Mp=new Map;function Sp(r,e){let t=Ne[e];if(t===void 0){let i=Mp.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ne[i],ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return lc(t)}var bp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mu(r){return r.replace(bp,Tp)}function Tp(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function fu(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Ep={[kr]:"SHADOWMAP_TYPE_PCF",[Gn]:"SHADOWMAP_TYPE_VSM"},wp={[Hn]:"ENVMAP_TYPE_CUBE",[Qi]:"ENVMAP_TYPE_CUBE",[Wr]:"ENVMAP_TYPE_CUBE_UV"},Ap={[Qi]:"ENVMAP_MODE_REFRACTION"},Cp={[Ch]:"ENVMAP_BLENDING_MULTIPLY",[Rh]:"ENVMAP_BLENDING_MIX",[Ih]:"ENVMAP_BLENDING_ADD"};function Rp(r,e,t,i){let n=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=(function(W){return Ep[W.shadowMapType]||"SHADOWMAP_TYPE_BASIC"})(t),l=(function(W){return W.envMap===!1?"ENVMAP_TYPE_CUBE":wp[W.envMapMode]||"ENVMAP_TYPE_CUBE"})(t),h=(function(W){return W.envMap===!1?"ENVMAP_MODE_REFLECTION":Ap[W.envMapMode]||"ENVMAP_MODE_REFLECTION"})(t),u=(function(W){return W.envMap===!1?"ENVMAP_BLENDING_NONE":Cp[W.combine]||"ENVMAP_BLENDING_NONE"})(t),p=(function(W){let B=W.envMapCubeUVHeight;if(B===null)return null;let V=Math.log2(B)-2,z=1/B;return{texelWidth:1/(3*Math.max(Math.pow(2,V),112)),texelHeight:z,maxMip:V}})(t),d=(function(W){return[W.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",W.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)})(t),f=(function(W){let B=[];for(let V in W){let z=W[V];z!==!1&&B.push("#define "+V+" "+z)}return B.join(`
`)})(s),m=n.createProgram(),v,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Yr).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Yr).join(`
`),g.length>0&&(g+=`
`)):(v=[fu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),g=[fu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qt?"#define TONE_MAPPING":"",t.toneMapping!==qt?Ne.tonemapping_pars_fragment:"",t.toneMapping!==qt?vp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,gp("linearToOutputTexel",t.outputColorSpace),xp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yr).join(`
`)),a=lc(a),a=du(a,t),a=pu(a,t),o=lc(o),o=du(o,t),o=pu(o,t),a=mu(a),o=mu(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",t.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=_+v+a,T=_+g+o,S=cu(n,n.VERTEX_SHADER,y),w=cu(n,n.FRAGMENT_SHADER,T);function P(W){if(r.debug.checkShaderErrors){let B=n.getProgramInfoLog(m)||"",V=n.getShaderInfoLog(S)||"",z=n.getShaderInfoLog(w)||"",O=B.trim(),k=V.trim(),j=z.trim(),re=!0,ge=!0;if(n.getProgramParameter(m,n.LINK_STATUS)===!1)if(re=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,m,S,w);else{let ue=uu(n,S,"vertex"),pe=uu(n,w,"fragment");be("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,n.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+O+`
`+ue+`
`+pe)}else O!==""?ye("WebGLProgram: Program Info Log:",O):k!==""&&j!==""||(ge=!1);ge&&(W.diagnostics={runnable:re,programLog:O,vertexShader:{log:k,prefix:v},fragmentShader:{log:j,prefix:g}})}n.deleteShader(S),n.deleteShader(w),U=new Yn(n,m),R=(function(B,V){let z={},O=B.getProgramParameter(V,B.ACTIVE_ATTRIBUTES);for(let k=0;k<O;k++){let j=B.getActiveAttrib(V,k),re=j.name,ge=1;j.type===B.FLOAT_MAT2&&(ge=2),j.type===B.FLOAT_MAT3&&(ge=3),j.type===B.FLOAT_MAT4&&(ge=4),z[re]={type:j.type,location:B.getAttribLocation(V,re),locationSize:ge}}return z})(n,m)}let U,R;n.attachShader(m,S),n.attachShader(m,w),t.index0AttributeName!==void 0?n.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m),this.getUniforms=function(){return U===void 0&&P(this),U},this.getAttributes=function(){return R===void 0&&P(this),R};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=n.getProgramParameter(m,37297)),G},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fp++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=w,this}var Ip=0,cc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new hc(e),t.set(e,i)),i}},hc=class{constructor(e){this.id=Ip++,this.code=e,this.usedTimes=0}};function Pp(r,e,t,i,n,s){let a=new dr,o=new cc,c=new Set,l=[],h=new Map,u=i.logarithmicDepthBuffer,p=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(m){return c.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,v,g,_,y){let T=_.fog,S=y.geometry,w=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?_.environment:null,P=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,U=e.get(m.envMap||w,P),R=U&&U.mapping===Wr?U.image.height:null,G=d[m.type];m.precision!==null&&(p=i.getMaxPrecision(m.precision),p!==m.precision&&ye("WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let W=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,B=W!==void 0?W.length:0,V,z,O,k,j=0;if(S.morphAttributes.position!==void 0&&(j=1),S.morphAttributes.normal!==void 0&&(j=2),S.morphAttributes.color!==void 0&&(j=3),G){let it=li[G];V=it.vertexShader,z=it.fragmentShader}else V=m.vertexShader,z=m.fragmentShader,o.update(m),O=o.getVertexShaderID(m),k=o.getFragmentShaderID(m);let re=r.getRenderTarget(),ge=r.state.buffers.depth.getReversed(),ue=y.isInstancedMesh===!0,pe=y.isBatchedMesh===!0,he=!!m.map,K=!!m.matcap,se=!!U,ae=!!m.aoMap,xe=!!m.lightMap,Re=!!m.bumpMap,b=!!m.normalMap,M=!!m.displacementMap,F=!!m.emissiveMap,I=!!m.metalnessMap,x=!!m.roughnessMap,C=m.anisotropy>0,L=m.clearcoat>0,N=m.dispersion>0,Y=m.iridescence>0,Z=m.sheen>0,X=m.transmission>0,ee=C&&!!m.anisotropyMap,$=L&&!!m.clearcoatMap,ie=L&&!!m.clearcoatNormalMap,te=L&&!!m.clearcoatRoughnessMap,le=Y&&!!m.iridescenceMap,Te=Y&&!!m.iridescenceThicknessMap,Fe=Z&&!!m.sheenColorMap,Xe=Z&&!!m.sheenRoughnessMap,Ve=!!m.specularMap,fe=!!m.specularColorMap,Pe=!!m.specularIntensityMap,qe=X&&!!m.transmissionMap,ct=X&&!!m.thicknessMap,me=!!m.gradientMap,De=!!m.alphaMap,Oe=m.alphaTest>0,ln=!!m.alphaHash,Bi=!!m.extensions,Mt=qt;m.toneMapped&&(re!==null&&re.isXRRenderTarget!==!0||(Mt=r.toneMapping));let Ze={shaderID:G,shaderType:m.type,shaderName:m.name,vertexShader:V,fragmentShader:z,defines:m.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:pe,batchingColor:pe&&y._colorsTexture!==null,instancing:ue,instancingColor:ue&&y.instanceColor!==null,instancingMorph:ue&&y.morphTexture!==null,outputColorSpace:re===null?r.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Yi,alphaToCoverage:!!m.alphaToCoverage,map:he,matcap:K,envMap:se,envMapMode:se&&U.mapping,envMapCubeUVHeight:R,aoMap:ae,lightMap:xe,bumpMap:Re,normalMap:b,displacementMap:M,emissiveMap:F,normalMapObjectSpace:b&&m.normalMapType===Nh,normalMapTangentSpace:b&&m.normalMapType===Uh,metalnessMap:I,roughnessMap:x,anisotropy:C,anisotropyMap:ee,clearcoat:L,clearcoatMap:$,clearcoatNormalMap:ie,clearcoatRoughnessMap:te,dispersion:N,iridescence:Y,iridescenceMap:le,iridescenceThicknessMap:Te,sheen:Z,sheenColorMap:Fe,sheenRoughnessMap:Xe,specularMap:Ve,specularColorMap:fe,specularIntensityMap:Pe,transmission:X,transmissionMap:qe,thicknessMap:ct,gradientMap:me,opaque:m.transparent===!1&&m.blending===Hr&&m.alphaToCoverage===!1,alphaMap:De,alphaTest:Oe,alphaHash:ln,combine:m.combine,mapUv:he&&f(m.map.channel),aoMapUv:ae&&f(m.aoMap.channel),lightMapUv:xe&&f(m.lightMap.channel),bumpMapUv:Re&&f(m.bumpMap.channel),normalMapUv:b&&f(m.normalMap.channel),displacementMapUv:M&&f(m.displacementMap.channel),emissiveMapUv:F&&f(m.emissiveMap.channel),metalnessMapUv:I&&f(m.metalnessMap.channel),roughnessMapUv:x&&f(m.roughnessMap.channel),anisotropyMapUv:ee&&f(m.anisotropyMap.channel),clearcoatMapUv:$&&f(m.clearcoatMap.channel),clearcoatNormalMapUv:ie&&f(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&f(m.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&f(m.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&f(m.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&f(m.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&f(m.sheenRoughnessMap.channel),specularMapUv:Ve&&f(m.specularMap.channel),specularColorMapUv:fe&&f(m.specularColorMap.channel),specularIntensityMapUv:Pe&&f(m.specularIntensityMap.channel),transmissionMapUv:qe&&f(m.transmissionMap.channel),thicknessMapUv:ct&&f(m.thicknessMap.channel),alphaMapUv:De&&f(m.alphaMap.channel),vertexTangents:!!S.attributes.tangent&&(b||C),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!S.attributes.color&&S.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!S.attributes.uv&&(he||De),fog:!!T,useFog:m.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||S.attributes.normal===void 0&&b===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ge,skinning:y.isSkinnedMesh===!0,morphTargets:S.morphAttributes.position!==void 0,morphNormals:S.morphAttributes.normal!==void 0,morphColors:S.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:j,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&g.length>0,shadowMapType:r.shadowMap.type,toneMapping:Mt,decodeVideoTexture:he&&m.map.isVideoTexture===!0&&He.getTransfer(m.map.colorSpace)===je,decodeVideoTextureEmissive:F&&m.emissiveMap.isVideoTexture===!0&&He.getTransfer(m.emissiveMap.colorSpace)===je,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Ot,flipSided:m.side===Tt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Bi&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bi&&m.extensions.multiDraw===!0||pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze},getProgramCacheKey:function(m){let v=[];if(m.shaderID?v.push(m.shaderID):(v.push(m.customVertexShaderID),v.push(m.customFragmentShaderID)),m.defines!==void 0)for(let g in m.defines)v.push(g),v.push(m.defines[g]);return m.isRawShaderMaterial===!1&&((function(g,_){g.push(_.precision),g.push(_.outputColorSpace),g.push(_.envMapMode),g.push(_.envMapCubeUVHeight),g.push(_.mapUv),g.push(_.alphaMapUv),g.push(_.lightMapUv),g.push(_.aoMapUv),g.push(_.bumpMapUv),g.push(_.normalMapUv),g.push(_.displacementMapUv),g.push(_.emissiveMapUv),g.push(_.metalnessMapUv),g.push(_.roughnessMapUv),g.push(_.anisotropyMapUv),g.push(_.clearcoatMapUv),g.push(_.clearcoatNormalMapUv),g.push(_.clearcoatRoughnessMapUv),g.push(_.iridescenceMapUv),g.push(_.iridescenceThicknessMapUv),g.push(_.sheenColorMapUv),g.push(_.sheenRoughnessMapUv),g.push(_.specularMapUv),g.push(_.specularColorMapUv),g.push(_.specularIntensityMapUv),g.push(_.transmissionMapUv),g.push(_.thicknessMapUv),g.push(_.combine),g.push(_.fogExp2),g.push(_.sizeAttenuation),g.push(_.morphTargetsCount),g.push(_.morphAttributeCount),g.push(_.numDirLights),g.push(_.numPointLights),g.push(_.numSpotLights),g.push(_.numSpotLightMaps),g.push(_.numHemiLights),g.push(_.numRectAreaLights),g.push(_.numDirLightShadows),g.push(_.numPointLightShadows),g.push(_.numSpotLightShadows),g.push(_.numSpotLightShadowsWithMaps),g.push(_.numLightProbes),g.push(_.shadowMapType),g.push(_.toneMapping),g.push(_.numClippingPlanes),g.push(_.numClipIntersection),g.push(_.depthPacking)})(v,m),(function(g,_){a.disableAll(),_.instancing&&a.enable(0),_.instancingColor&&a.enable(1),_.instancingMorph&&a.enable(2),_.matcap&&a.enable(3),_.envMap&&a.enable(4),_.normalMapObjectSpace&&a.enable(5),_.normalMapTangentSpace&&a.enable(6),_.clearcoat&&a.enable(7),_.iridescence&&a.enable(8),_.alphaTest&&a.enable(9),_.vertexColors&&a.enable(10),_.vertexAlphas&&a.enable(11),_.vertexUv1s&&a.enable(12),_.vertexUv2s&&a.enable(13),_.vertexUv3s&&a.enable(14),_.vertexTangents&&a.enable(15),_.anisotropy&&a.enable(16),_.alphaHash&&a.enable(17),_.batching&&a.enable(18),_.dispersion&&a.enable(19),_.batchingColor&&a.enable(20),_.gradientMap&&a.enable(21),g.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),g.push(a.mask)})(v,m),v.push(r.outputColorSpace)),v.push(m.customProgramCacheKey),v.join()},getUniforms:function(m){let v=d[m.type],g;if(v){let _=li[v];g=Jh.clone(_.uniforms)}else g=m.uniforms;return g},acquireProgram:function(m,v){let g=h.get(v);return g!==void 0?++g.usedTimes:(g=new Rp(r,v,m,n),l.push(g),h.set(v,g)),g},releaseProgram:function(m){if(--m.usedTimes===0){let v=l.indexOf(m);l[v]=l[l.length-1],l.pop(),h.delete(m.cacheKey),m.destroy()}},releaseShaderCache:function(m){o.remove(m)},programs:l,dispose:function(){o.dispose()}}}function Lp(){let r=new WeakMap;return{has:function(e){return r.has(e)},get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,i){r.get(e)[t]=i},dispose:function(){r=new WeakMap}}}function Dp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function gu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function _u(){let r=[],e=0,t=[],i=[],n=[];function s(o){let c=0;return o.isInstancedMesh&&(c+=2),o.isSkinnedMesh&&(c+=1),c}function a(o,c,l,h,u,p){let d=r[e];return d===void 0?(d={id:o.id,object:o,geometry:c,material:l,materialVariant:s(o),groupOrder:h,renderOrder:o.renderOrder,z:u,group:p},r[e]=d):(d.id=o.id,d.object=o,d.geometry=c,d.material=l,d.materialVariant=s(o),d.groupOrder=h,d.renderOrder=o.renderOrder,d.z=u,d.group=p),e++,d}return{opaque:t,transmissive:i,transparent:n,init:function(){e=0,t.length=0,i.length=0,n.length=0},push:function(o,c,l,h,u,p){let d=a(o,c,l,h,u,p);l.transmission>0?i.push(d):l.transparent===!0?n.push(d):t.push(d)},unshift:function(o,c,l,h,u,p){let d=a(o,c,l,h,u,p);l.transmission>0?i.unshift(d):l.transparent===!0?n.unshift(d):t.unshift(d)},finish:function(){for(let o=e,c=r.length;o<c;o++){let l=r[o];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(o,c){t.length>1&&t.sort(o||Dp),i.length>1&&i.sort(c||gu),n.length>1&&n.sort(c||gu)}}}function Up(){let r=new WeakMap;return{get:function(e,t){let i=r.get(e),n;return i===void 0?(n=new _u,r.set(e,[n])):t>=i.length?(n=new _u,i.push(n)):n=i[t],n},dispose:function(){r=new WeakMap}}}function Np(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Ee};break;case"SpotLight":t={position:new A,direction:new A,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new A,halfWidth:new A,halfHeight:new A}}return r[e.id]=t,t}}}var Fp=0;function Op(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Bp(r){let e=new Np,t=(function(){let o={};return{get:function(c){if(o[c.id]!==void 0)return o[c.id];let l;switch(c.type){case"DirectionalLight":case"SpotLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3}}return o[c.id]=l,l}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new A);let n=new A,s=new Le,a=new Le;return{setup:function(o){let c=0,l=0,h=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let u=0,p=0,d=0,f=0,m=0,v=0,g=0,_=0,y=0,T=0,S=0;o.sort(Op);for(let P=0,U=o.length;P<U;P++){let R=o[P],G=R.color,W=R.intensity,B=R.distance,V=null;if(R.shadow&&R.shadow.map&&(V=R.shadow.map.texture.format===jn?R.shadow.map.texture:R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)c+=G.r*W,l+=G.g*W,h+=G.b*W;else if(R.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(R.sh.coefficients[z],W);S++}else if(R.isDirectionalLight){let z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let O=R.shadow,k=t.get(R);k.shadowIntensity=O.intensity,k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize=O.mapSize,i.directionalShadow[u]=k,i.directionalShadowMap[u]=V,i.directionalShadowMatrix[u]=R.shadow.matrix,v++}i.directional[u]=z,u++}else if(R.isSpotLight){let z=e.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(G).multiplyScalar(W),z.distance=B,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,i.spot[d]=z;let O=R.shadow;if(R.map&&(i.spotLightMap[y]=R.map,y++,O.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[d]=O.matrix,R.castShadow){let k=t.get(R);k.shadowIntensity=O.intensity,k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize=O.mapSize,i.spotShadow[d]=k,i.spotShadowMap[d]=V,_++}d++}else if(R.isRectAreaLight){let z=e.get(R);z.color.copy(G).multiplyScalar(W),z.halfWidth.set(.5*R.width,0,0),z.halfHeight.set(0,.5*R.height,0),i.rectArea[f]=z,f++}else if(R.isPointLight){let z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){let O=R.shadow,k=t.get(R);k.shadowIntensity=O.intensity,k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize=O.mapSize,k.shadowCameraNear=O.camera.near,k.shadowCameraFar=O.camera.far,i.pointShadow[p]=k,i.pointShadowMap[p]=V,i.pointShadowMatrix[p]=R.shadow.matrix,g++}i.point[p]=z,p++}else if(R.isHemisphereLight){let z=e.get(R);z.skyColor.copy(R.color).multiplyScalar(W),z.groundColor.copy(R.groundColor).multiplyScalar(W),i.hemi[m]=z,m++}}f>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=l,i.ambient[2]=h;let w=i.hash;w.directionalLength===u&&w.pointLength===p&&w.spotLength===d&&w.rectAreaLength===f&&w.hemiLength===m&&w.numDirectionalShadows===v&&w.numPointShadows===g&&w.numSpotShadows===_&&w.numSpotMaps===y&&w.numLightProbes===S||(i.directional.length=u,i.spot.length=d,i.rectArea.length=f,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=_+y-T,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=S,w.directionalLength=u,w.pointLength=p,w.spotLength=d,w.rectAreaLength=f,w.hemiLength=m,w.numDirectionalShadows=v,w.numPointShadows=g,w.numSpotShadows=_,w.numSpotMaps=y,w.numLightProbes=S,i.version=Fp++)},setupView:function(o,c){let l=0,h=0,u=0,p=0,d=0,f=c.matrixWorldInverse;for(let m=0,v=o.length;m<v;m++){let g=o[m];if(g.isDirectionalLight){let _=i.directional[l];_.direction.setFromMatrixPosition(g.matrixWorld),n.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(f),l++}else if(g.isSpotLight){let _=i.spot[u];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(f),_.direction.setFromMatrixPosition(g.matrixWorld),n.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(f),u++}else if(g.isRectAreaLight){let _=i.rectArea[p];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(f),a.identity(),s.copy(g.matrixWorld),s.premultiply(f),a.extractRotation(s),_.halfWidth.set(.5*g.width,0,0),_.halfHeight.set(0,.5*g.height,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),p++}else if(g.isPointLight){let _=i.point[h];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(f),h++}else if(g.isHemisphereLight){let _=i.hemi[d];_.direction.setFromMatrixPosition(g.matrixWorld),_.direction.transformDirection(f),d++}}},state:i}}function vu(r){let e=new Bp(r),t=[],i=[],n={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){n.camera=s,t.length=0,i.length=0},state:n,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){i.push(s)}}}function zp(r){let e=new WeakMap;return{get:function(t,i=0){let n=e.get(t),s;return n===void 0?(s=new vu(r),e.set(t,[s])):i>=n.length?(s=new vu(r),n.push(s)):s=n[i],s},dispose:function(){e=new WeakMap}}}var Gp=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],Vp=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],xu=new Le,Zr=new A,nc=new A;function kp(r,e,t){let i=new Li,n=new ne,s=new ne,a=new Ke,o=new ua,c=new da,l={},h=t.maxTextureSize,u={[Vn]:Tt,[Tt]:Vn,[Ot]:Ot},p=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let f=new Ye;f.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new pt(f,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kr;let g=this.type;function _(w,P){let U=e.update(m);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ct(n.x,n.y,{format:jn,type:ai})),p.uniforms.shadow_pass.value=w.map.depthTexture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(P,null,U,p,m,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(P,null,U,d,m,null)}function y(w,P,U,R){let G=null,W=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(W!==void 0)G=W;else if(G=U.isPointLight===!0?c:o,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let B=G.uuid,V=P.uuid,z=l[B];z===void 0&&(z={},l[B]=z);let O=z[V];O===void 0&&(O=G.clone(),z[V]=O,P.addEventListener("dispose",S)),G=O}return G.visible=P.visible,G.wireframe=P.wireframe,G.side=R===Gn?P.shadowSide!==null?P.shadowSide:P.side:P.shadowSide!==null?P.shadowSide:u[P.side],G.alphaMap=P.alphaMap,G.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,G.map=P.map,G.clipShadows=P.clipShadows,G.clippingPlanes=P.clippingPlanes,G.clipIntersection=P.clipIntersection,G.displacementMap=P.displacementMap,G.displacementScale=P.displacementScale,G.displacementBias=P.displacementBias,G.wireframeLinewidth=P.wireframeLinewidth,G.linewidth=P.linewidth,U.isPointLight===!0&&G.isMeshDistanceMaterial===!0&&(r.properties.get(G).light=U),G}function T(w,P,U,R,G){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&G===Gn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);let B=e.update(w),V=w.material;if(Array.isArray(V)){let z=B.groups;for(let O=0,k=z.length;O<k;O++){let j=z[O],re=V[j.materialIndex];if(re&&re.visible){let ge=y(w,re,R,G);w.onBeforeShadow(r,w,P,U,B,ge,j),r.renderBufferDirect(U,null,B,ge,w,j),w.onAfterShadow(r,w,P,U,B,ge,j)}}}else if(V.visible){let z=y(w,V,R,G);w.onBeforeShadow(r,w,P,U,B,z,null),r.renderBufferDirect(U,null,B,z,w,null),w.onAfterShadow(r,w,P,U,B,z,null)}}let W=w.children;for(let B=0,V=W.length;B<V;B++)T(W[B],P,U,R,G)}function S(w){w.target.removeEventListener("dispose",S);for(let P in l){let U=l[P],R=w.target.uuid;R in U&&(U[R].dispose(),delete U[R])}}this.render=function(w,P,U){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||w.length===0)return;this.type===oh&&(ye("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=kr);let R=r.getRenderTarget(),G=r.getActiveCubeFace(),W=r.getActiveMipmapLevel(),B=r.state;B.setBlending(si),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let V=g!==this.type;V&&P.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(O=>O.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,O=w.length;z<O;z++){let k=w[z],j=k.shadow;if(j===void 0){ye("WebGLShadowMap:",k,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;n.copy(j.mapSize);let re=j.getFrameExtents();n.multiply(re),s.copy(j.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/re.x),n.x=s.x*re.x,j.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/re.y),n.y=s.y*re.y,j.mapSize.y=s.y));let ge=r.state.buffers.depth.getReversed();if(j.camera._reversedDepth=ge,j.map===null||V===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Gn){if(k.isPointLight){ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Ct(n.x,n.y,{format:jn,type:ai,minFilter:xt,magFilter:xt,generateMipmaps:!1}),j.map.texture.name=k.name+".shadowMap",j.map.depthTexture=new Di(n.x,n.y,Yt),j.map.depthTexture.name=k.name+".shadowMapDepth",j.map.depthTexture.format=Fi,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Nt,j.map.depthTexture.magFilter=Nt}else k.isPointLight?(j.map=new Ha(n.x),j.map.depthTexture=new ks(n.x,Mi)):(j.map=new Ct(n.x,n.y),j.map.depthTexture=new Di(n.x,n.y,Mi)),j.map.depthTexture.name=k.name+".shadowMap",j.map.depthTexture.format=Fi,this.type===kr?(j.map.depthTexture.compareFunction=ge?Ba:Oa,j.map.depthTexture.minFilter=xt,j.map.depthTexture.magFilter=xt):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Nt,j.map.depthTexture.magFilter=Nt);j.camera.updateProjectionMatrix()}let ue=j.map.isWebGLCubeRenderTarget?6:1;for(let pe=0;pe<ue;pe++){if(j.map.isWebGLCubeRenderTarget)r.setRenderTarget(j.map,pe),r.clear();else{pe===0&&(r.setRenderTarget(j.map),r.clear());let he=j.getViewport(pe);a.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),B.viewport(a)}if(k.isPointLight){let he=j.camera,K=j.matrix,se=k.distance||he.far;se!==he.far&&(he.far=se,he.updateProjectionMatrix()),Zr.setFromMatrixPosition(k.matrixWorld),he.position.copy(Zr),nc.copy(he.position),nc.add(Gp[pe]),he.up.copy(Vp[pe]),he.lookAt(nc),he.updateMatrixWorld(),K.makeTranslation(-Zr.x,-Zr.y,-Zr.z),xu.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),j._frustum.setFromProjectionMatrix(xu,he.coordinateSystem,he.reversedDepth)}else j.updateMatrices(k);i=j.getFrustum(),T(P,U,j.camera,k,this.type)}j.isPointLightShadow!==!0&&this.type===Gn&&_(j,U),j.needsUpdate=!1}g=this.type,v.needsUpdate=!1,r.setRenderTarget(R,G,W)}}function Hp(r,e){let t=new function(){let x=!1,C=new Ke,L=null,N=new Ke(0,0,0,0);return{setMask:function(Y){L===Y||x||(r.colorMask(Y,Y,Y,Y),L=Y)},setLocked:function(Y){x=Y},setClear:function(Y,Z,X,ee,$){$===!0&&(Y*=ee,Z*=ee,X*=ee),C.set(Y,Z,X,ee),N.equals(C)===!1&&(r.clearColor(Y,Z,X,ee),N.copy(C))},reset:function(){x=!1,L=null,N.set(-1,0,0,0)}}},i=new function(){let x=!1,C=!1,L=null,N=null,Y=null;return{setReversed:function(Z){if(C!==Z){let X=e.get("EXT_clip_control");Z?X.clipControlEXT(X.LOWER_LEFT_EXT,X.ZERO_TO_ONE_EXT):X.clipControlEXT(X.LOWER_LEFT_EXT,X.NEGATIVE_ONE_TO_ONE_EXT),C=Z;let ee=Y;Y=null,this.setClear(ee)}},getReversed:function(){return C},setTest:function(Z){Z?se(r.DEPTH_TEST):ae(r.DEPTH_TEST)},setMask:function(Z){L===Z||x||(r.depthMask(Z),L=Z)},setFunc:function(Z){if(C&&(Z=Xh[Z]),N!==Z){switch(Z){case jo:r.depthFunc(r.NEVER);break;case qo:r.depthFunc(r.ALWAYS);break;case Yo:r.depthFunc(r.LESS);break;case Ea:r.depthFunc(r.LEQUAL);break;case Zo:r.depthFunc(r.EQUAL);break;case Jo:r.depthFunc(r.GEQUAL);break;case Ko:r.depthFunc(r.GREATER);break;case $o:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}N=Z}},setLocked:function(Z){x=Z},setClear:function(Z){Y!==Z&&(Y=Z,C&&(Z=1-Z),r.clearDepth(Z))},reset:function(){x=!1,L=null,N=null,Y=null,C=!1}}},n=new function(){let x=!1,C=null,L=null,N=null,Y=null,Z=null,X=null,ee=null,$=null;return{setTest:function(ie){x||(ie?se(r.STENCIL_TEST):ae(r.STENCIL_TEST))},setMask:function(ie){C===ie||x||(r.stencilMask(ie),C=ie)},setFunc:function(ie,te,le){L===ie&&N===te&&Y===le||(r.stencilFunc(ie,te,le),L=ie,N=te,Y=le)},setOp:function(ie,te,le){Z===ie&&X===te&&ee===le||(r.stencilOp(ie,te,le),Z=ie,X=te,ee=le)},setLocked:function(ie){x=ie},setClear:function(ie){$!==ie&&(r.clearStencil(ie),$=ie)},reset:function(){x=!1,C=null,L=null,N=null,Y=null,Z=null,X=null,ee=null,$=null}}},s=new WeakMap,a=new WeakMap,o={},c={},l=new WeakMap,h=[],u=null,p=!1,d=null,f=null,m=null,v=null,g=null,_=null,y=null,T=new Ee(0,0,0),S=0,w=!1,P=null,U=null,R=null,G=null,W=null,B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,z=0,O=r.getParameter(r.VERSION);O.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(O)[1]),V=z>=1):O.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),V=z>=2);let k=null,j={},re=r.getParameter(r.SCISSOR_BOX),ge=r.getParameter(r.VIEWPORT),ue=new Ke().fromArray(re),pe=new Ke().fromArray(ge);function he(x,C,L,N){let Y=new Uint8Array(4),Z=r.createTexture();r.bindTexture(x,Z),r.texParameteri(x,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(x,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let X=0;X<L;X++)x===r.TEXTURE_3D||x===r.TEXTURE_2D_ARRAY?r.texImage3D(C,0,r.RGBA,1,1,N,0,r.RGBA,r.UNSIGNED_BYTE,Y):r.texImage2D(C+X,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Y);return Z}let K={};function se(x){o[x]!==!0&&(r.enable(x),o[x]=!0)}function ae(x){o[x]!==!1&&(r.disable(x),o[x]=!1)}K[r.TEXTURE_2D]=he(r.TEXTURE_2D,r.TEXTURE_2D,1),K[r.TEXTURE_CUBE_MAP]=he(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[r.TEXTURE_2D_ARRAY]=he(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),K[r.TEXTURE_3D]=he(r.TEXTURE_3D,r.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),n.setClear(0),se(r.DEPTH_TEST),i.setFunc(Ea),M(!1),F(ko),se(r.CULL_FACE),b(si);let xe={[kn]:r.FUNC_ADD,[ch]:r.FUNC_SUBTRACT,[hh]:r.FUNC_REVERSE_SUBTRACT};xe[uh]=r.MIN,xe[dh]=r.MAX;let Re={[ph]:r.ZERO,[mh]:r.ONE,[fh]:r.SRC_COLOR,[_h]:r.SRC_ALPHA,[bh]:r.SRC_ALPHA_SATURATE,[Mh]:r.DST_COLOR,[xh]:r.DST_ALPHA,[gh]:r.ONE_MINUS_SRC_COLOR,[vh]:r.ONE_MINUS_SRC_ALPHA,[Sh]:r.ONE_MINUS_DST_COLOR,[yh]:r.ONE_MINUS_DST_ALPHA,[Th]:r.CONSTANT_COLOR,[Eh]:r.ONE_MINUS_CONSTANT_COLOR,[wh]:r.CONSTANT_ALPHA,[Ah]:r.ONE_MINUS_CONSTANT_ALPHA};function b(x,C,L,N,Y,Z,X,ee,$,ie){if(x!==si){if(p===!1&&(se(r.BLEND),p=!0),x===lh)Y=Y||C,Z=Z||L,X=X||N,C===f&&Y===g||(r.blendEquationSeparate(xe[C],xe[Y]),f=C,g=Y),L===m&&N===v&&Z===_&&X===y||(r.blendFuncSeparate(Re[L],Re[N],Re[Z],Re[X]),m=L,v=N,_=Z,y=X),ee.equals(T)!==!1&&$===S||(r.blendColor(ee.r,ee.g,ee.b,$),T.copy(ee),S=$),d=x,w=!1;else if(x!==d||ie!==w){if(f===kn&&g===kn||(r.blendEquation(r.FUNC_ADD),f=kn,g=kn),ie)switch(x){case Hr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ho:r.blendFunc(r.ONE,r.ONE);break;case Wo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Xo:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:be("WebGLState: Invalid blending: ",x)}else switch(x){case Hr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ho:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Wo:be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xo:be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:be("WebGLState: Invalid blending: ",x)}m=null,v=null,_=null,y=null,T.set(0,0,0),S=0,d=x,w=ie}}else p===!0&&(ae(r.BLEND),p=!1)}function M(x){P!==x&&(x?r.frontFace(r.CW):r.frontFace(r.CCW),P=x)}function F(x){x!==sh?(se(r.CULL_FACE),x!==U&&(x===ko?r.cullFace(r.BACK):x===ah?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ae(r.CULL_FACE),U=x}function I(x,C,L){x?(se(r.POLYGON_OFFSET_FILL),G===C&&W===L||(G=C,W=L,i.getReversed()&&(C=-C),r.polygonOffset(C,L))):ae(r.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:n},enable:se,disable:ae,bindFramebuffer:function(x,C){return c[x]!==C&&(r.bindFramebuffer(x,C),c[x]=C,x===r.DRAW_FRAMEBUFFER&&(c[r.FRAMEBUFFER]=C),x===r.FRAMEBUFFER&&(c[r.DRAW_FRAMEBUFFER]=C),!0)},drawBuffers:function(x,C){let L=h,N=!1;if(x){L=l.get(C),L===void 0&&(L=[],l.set(C,L));let Y=x.textures;if(L.length!==Y.length||L[0]!==r.COLOR_ATTACHMENT0){for(let Z=0,X=Y.length;Z<X;Z++)L[Z]=r.COLOR_ATTACHMENT0+Z;L.length=Y.length,N=!0}}else L[0]!==r.BACK&&(L[0]=r.BACK,N=!0);N&&r.drawBuffers(L)},useProgram:function(x){return u!==x&&(r.useProgram(x),u=x,!0)},setBlending:b,setMaterial:function(x,C){x.side===Ot?ae(r.CULL_FACE):se(r.CULL_FACE);let L=x.side===Tt;C&&(L=!L),M(L),x.blending===Hr&&x.transparent===!1?b(si):b(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),i.setFunc(x.depthFunc),i.setTest(x.depthTest),i.setMask(x.depthWrite),t.setMask(x.colorWrite);let N=x.stencilWrite;n.setTest(N),N&&(n.setMask(x.stencilWriteMask),n.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),n.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),I(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?se(r.SAMPLE_ALPHA_TO_COVERAGE):ae(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:M,setCullFace:F,setLineWidth:function(x){x!==R&&(V&&r.lineWidth(x),R=x)},setPolygonOffset:I,setScissorTest:function(x){x?se(r.SCISSOR_TEST):ae(r.SCISSOR_TEST)},activeTexture:function(x){x===void 0&&(x=r.TEXTURE0+B-1),k!==x&&(r.activeTexture(x),k=x)},bindTexture:function(x,C,L){L===void 0&&(L=k===null?r.TEXTURE0+B-1:k);let N=j[L];N===void 0&&(N={type:void 0,texture:void 0},j[L]=N),N.type===x&&N.texture===C||(k!==L&&(r.activeTexture(L),k=L),r.bindTexture(x,C||K[x]),N.type=x,N.texture=C)},unbindTexture:function(){let x=j[k];x!==void 0&&x.type!==void 0&&(r.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D(...arguments)}catch(x){be("WebGLState:",x)}},compressedTexImage3D:function(){try{r.compressedTexImage3D(...arguments)}catch(x){be("WebGLState:",x)}},texImage2D:function(){try{r.texImage2D(...arguments)}catch(x){be("WebGLState:",x)}},texImage3D:function(){try{r.texImage3D(...arguments)}catch(x){be("WebGLState:",x)}},updateUBOMapping:function(x,C){let L=a.get(C);L===void 0&&(L=new WeakMap,a.set(C,L));let N=L.get(x);N===void 0&&(N=r.getUniformBlockIndex(C,x.name),L.set(x,N))},uniformBlockBinding:function(x,C){let L=a.get(C).get(x);s.get(C)!==L&&(r.uniformBlockBinding(C,L,x.__bindingPointIndex),s.set(C,L))},texStorage2D:function(){try{r.texStorage2D(...arguments)}catch(x){be("WebGLState:",x)}},texStorage3D:function(){try{r.texStorage3D(...arguments)}catch(x){be("WebGLState:",x)}},texSubImage2D:function(){try{r.texSubImage2D(...arguments)}catch(x){be("WebGLState:",x)}},texSubImage3D:function(){try{r.texSubImage3D(...arguments)}catch(x){be("WebGLState:",x)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D(...arguments)}catch(x){be("WebGLState:",x)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D(...arguments)}catch(x){be("WebGLState:",x)}},scissor:function(x){ue.equals(x)===!1&&(r.scissor(x.x,x.y,x.z,x.w),ue.copy(x))},viewport:function(x){pe.equals(x)===!1&&(r.viewport(x.x,x.y,x.z,x.w),pe.copy(x))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),i.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),o={},k=null,j={},c={},l=new WeakMap,h=[],u=null,p=!1,d=null,f=null,m=null,v=null,g=null,_=null,y=null,T=new Ee(0,0,0),S=0,w=!1,P=null,U=null,R=null,G=null,W=null,ue.set(0,0,r.canvas.width,r.canvas.height),pe.set(0,0,r.canvas.width,r.canvas.height),t.reset(),i.reset(),n.reset()}}}function Wp(r,e,t,i,n,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),l=new ne,h=new WeakMap,u,p=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(b,M){return d?new OffscreenCanvas(b,M):An("canvas")}function m(b,M,F){let I=1,x=Re(b);if((x.width>F||x.height>F)&&(I=F/Math.max(x.width,x.height)),I<1){if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let C=Math.floor(I*x.width),L=Math.floor(I*x.height);u===void 0&&(u=f(C,L));let N=M?f(C,L):u;return N.width=C,N.height=L,N.getContext("2d").drawImage(b,0,0,C,L),ye("WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+C+"x"+L+")."),N}return"data"in b&&ye("WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),b}return b}function v(b){return b.generateMipmaps}function g(b){r.generateMipmap(b)}function _(b){return b.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?r.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(b,M,F,I,x=!1){if(b!==null){if(r[b]!==void 0)return r[b];ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let C=M;if(M===r.RED&&(F===r.FLOAT&&(C=r.R32F),F===r.HALF_FLOAT&&(C=r.R16F),F===r.UNSIGNED_BYTE&&(C=r.R8)),M===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(C=r.R8UI),F===r.UNSIGNED_SHORT&&(C=r.R16UI),F===r.UNSIGNED_INT&&(C=r.R32UI),F===r.BYTE&&(C=r.R8I),F===r.SHORT&&(C=r.R16I),F===r.INT&&(C=r.R32I)),M===r.RG&&(F===r.FLOAT&&(C=r.RG32F),F===r.HALF_FLOAT&&(C=r.RG16F),F===r.UNSIGNED_BYTE&&(C=r.RG8)),M===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&(C=r.RG8UI),F===r.UNSIGNED_SHORT&&(C=r.RG16UI),F===r.UNSIGNED_INT&&(C=r.RG32UI),F===r.BYTE&&(C=r.RG8I),F===r.SHORT&&(C=r.RG16I),F===r.INT&&(C=r.RG32I)),M===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&(C=r.RGB8UI),F===r.UNSIGNED_SHORT&&(C=r.RGB16UI),F===r.UNSIGNED_INT&&(C=r.RGB32UI),F===r.BYTE&&(C=r.RGB8I),F===r.SHORT&&(C=r.RGB16I),F===r.INT&&(C=r.RGB32I)),M===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&(C=r.RGBA8UI),F===r.UNSIGNED_SHORT&&(C=r.RGBA16UI),F===r.UNSIGNED_INT&&(C=r.RGBA32UI),F===r.BYTE&&(C=r.RGBA8I),F===r.SHORT&&(C=r.RGBA16I),F===r.INT&&(C=r.RGBA32I)),M===r.RGB&&(F===r.UNSIGNED_INT_5_9_9_9_REV&&(C=r.RGB9_E5),F===r.UNSIGNED_INT_10F_11F_11F_REV&&(C=r.R11F_G11F_B10F)),M===r.RGBA){let L=x?cr:He.getTransfer(I);F===r.FLOAT&&(C=r.RGBA32F),F===r.HALF_FLOAT&&(C=r.RGBA16F),F===r.UNSIGNED_BYTE&&(C=L===je?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(C=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(C=r.RGB5_A1)}return C!==r.R16F&&C!==r.R32F&&C!==r.RG16F&&C!==r.RG32F&&C!==r.RGBA16F&&C!==r.RGBA32F||e.get("EXT_color_buffer_float"),C}function T(b,M){let F;return b?M===null||M===Mi||M===Xn?F=r.DEPTH24_STENCIL8:M===Yt?F=r.DEPTH32F_STENCIL8:M===Wn&&(F=r.DEPTH24_STENCIL8,ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Mi||M===Xn?F=r.DEPTH_COMPONENT24:M===Yt?F=r.DEPTH_COMPONENT32F:M===Wn&&(F=r.DEPTH_COMPONENT16),F}function S(b,M){return v(b)===!0||b.isFramebufferTexture&&b.minFilter!==Nt&&b.minFilter!==xt?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function w(b){let M=b.target;M.removeEventListener("dispose",w),(function(F){let I=i.get(F);if(I.__webglInit===void 0)return;let x=F.source,C=p.get(x);if(C){let L=C[I.__cacheKey];L.usedTimes--,L.usedTimes===0&&U(F),Object.keys(C).length===0&&p.delete(x)}i.remove(F)})(M),M.isVideoTexture&&h.delete(M)}function P(b){let M=b.target;M.removeEventListener("dispose",P),(function(F){let I=i.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),i.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let C=0;C<6;C++){if(Array.isArray(I.__webglFramebuffer[C]))for(let L=0;L<I.__webglFramebuffer[C].length;L++)r.deleteFramebuffer(I.__webglFramebuffer[C][L]);else r.deleteFramebuffer(I.__webglFramebuffer[C]);I.__webglDepthbuffer&&r.deleteRenderbuffer(I.__webglDepthbuffer[C])}else{if(Array.isArray(I.__webglFramebuffer))for(let C=0;C<I.__webglFramebuffer.length;C++)r.deleteFramebuffer(I.__webglFramebuffer[C]);else r.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&r.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&r.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let C=0;C<I.__webglColorRenderbuffer.length;C++)I.__webglColorRenderbuffer[C]&&r.deleteRenderbuffer(I.__webglColorRenderbuffer[C]);I.__webglDepthRenderbuffer&&r.deleteRenderbuffer(I.__webglDepthRenderbuffer)}let x=F.textures;for(let C=0,L=x.length;C<L;C++){let N=i.get(x[C]);N.__webglTexture&&(r.deleteTexture(N.__webglTexture),a.memory.textures--),i.remove(x[C])}i.remove(F)})(M)}function U(b){let M=i.get(b);r.deleteTexture(M.__webglTexture);let F=b.source;delete p.get(F)[M.__cacheKey],a.memory.textures--}let R=0;function G(b,M){let F=i.get(b);if(b.isVideoTexture&&(function(I){let x=a.render.frame;h.get(I)!==x&&(h.set(I,x),I.update())})(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&F.__version!==b.version){let I=b.image;if(I===null)ye("WebGLRenderer: Texture marked for update but no image data found.");else{if(I.complete!==!1)return void j(F,b,M);ye("WebGLRenderer: Texture marked for update but image is incomplete")}}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+M)}let W={[Ls]:r.REPEAT,[Pi]:r.CLAMP_TO_EDGE,[Ds]:r.MIRRORED_REPEAT},B={[Nt]:r.NEAREST,[Ph]:r.NEAREST_MIPMAP_NEAREST,[Xr]:r.NEAREST_MIPMAP_LINEAR,[xt]:r.LINEAR,[Ca]:r.LINEAR_MIPMAP_NEAREST,[en]:r.LINEAR_MIPMAP_LINEAR},V={[Fh]:r.NEVER,[Vh]:r.ALWAYS,[Oh]:r.LESS,[Oa]:r.LEQUAL,[Bh]:r.EQUAL,[Ba]:r.GEQUAL,[zh]:r.GREATER,[Gh]:r.NOTEQUAL};function z(b,M){if(M.type!==Yt||e.has("OES_texture_float_linear")!==!1||M.magFilter!==xt&&M.magFilter!==Ca&&M.magFilter!==Xr&&M.magFilter!==en&&M.minFilter!==xt&&M.minFilter!==Ca&&M.minFilter!==Xr&&M.minFilter!==en||ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(b,r.TEXTURE_WRAP_S,W[M.wrapS]),r.texParameteri(b,r.TEXTURE_WRAP_T,W[M.wrapT]),b!==r.TEXTURE_3D&&b!==r.TEXTURE_2D_ARRAY||r.texParameteri(b,r.TEXTURE_WRAP_R,W[M.wrapR]),r.texParameteri(b,r.TEXTURE_MAG_FILTER,B[M.magFilter]),r.texParameteri(b,r.TEXTURE_MIN_FILTER,B[M.minFilter]),M.compareFunction&&(r.texParameteri(b,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(b,r.TEXTURE_COMPARE_FUNC,V[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Nt||M.minFilter!==Xr&&M.minFilter!==en||M.type===Yt&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");r.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function O(b,M){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",w));let I=M.source,x=p.get(I);x===void 0&&(x={},p.set(I,x));let C=(function(L){let N=[];return N.push(L.wrapS),N.push(L.wrapT),N.push(L.wrapR||0),N.push(L.magFilter),N.push(L.minFilter),N.push(L.anisotropy),N.push(L.internalFormat),N.push(L.format),N.push(L.type),N.push(L.generateMipmaps),N.push(L.premultiplyAlpha),N.push(L.flipY),N.push(L.unpackAlignment),N.push(L.colorSpace),N.join()})(M);if(C!==b.__cacheKey){x[C]===void 0&&(x[C]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,F=!0),x[C].usedTimes++;let L=x[b.__cacheKey];L!==void 0&&(x[b.__cacheKey].usedTimes--,L.usedTimes===0&&U(M)),b.__cacheKey=C,b.__webglTexture=x[C].texture}return F}function k(b,M,F){return Math.floor(Math.floor(b/F)/M)}function j(b,M,F){let I=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(I=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(I=r.TEXTURE_3D);let x=O(b,M),C=M.source;t.bindTexture(I,b.__webglTexture,r.TEXTURE0+F);let L=i.get(C);if(C.version!==L.__version||x===!0){t.activeTexture(r.TEXTURE0+F);let N=He.getPrimaries(He.workingColorSpace),Y=M.colorSpace===nn?null:He.getPrimaries(M.colorSpace),Z=M.colorSpace===nn||N===Y?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let X=m(M.image,!1,n.maxTextureSize);X=xe(M,X);let ee=s.convert(M.format,M.colorSpace),$=s.convert(M.type),ie,te=y(M.internalFormat,ee,$,M.colorSpace,M.isVideoTexture);z(I,M);let le=M.mipmaps,Te=M.isVideoTexture!==!0,Fe=L.__version===void 0||x===!0,Xe=C.dataReady,Ve=S(M,X);if(M.isDepthTexture)te=T(M.format===tn,M.type),Fe&&(Te?t.texStorage2D(r.TEXTURE_2D,1,te,X.width,X.height):t.texImage2D(r.TEXTURE_2D,0,te,X.width,X.height,0,ee,$,null));else if(M.isDataTexture)if(le.length>0){Te&&Fe&&t.texStorage2D(r.TEXTURE_2D,Ve,te,le[0].width,le[0].height);for(let fe=0,Pe=le.length;fe<Pe;fe++)ie=le[fe],Te?Xe&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,ie.width,ie.height,ee,$,ie.data):t.texImage2D(r.TEXTURE_2D,fe,te,ie.width,ie.height,0,ee,$,ie.data);M.generateMipmaps=!1}else Te?(Fe&&t.texStorage2D(r.TEXTURE_2D,Ve,te,X.width,X.height),Xe&&(function(fe,Pe,qe,ct){let me=fe.updateRanges;if(me.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,Pe.width,Pe.height,qe,ct,Pe.data);else{me.sort((Mt,Ze)=>Mt.start-Ze.start);let De=0;for(let Mt=1;Mt<me.length;Mt++){let Ze=me[De],it=me[Mt],ci=Ze.start+Ze.count,D=k(it.start,Pe.width,4),zi=k(Ze.start,Pe.width,4);it.start<=ci+1&&D===zi&&k(it.start+it.count-1,Pe.width,4)===D?Ze.count=Math.max(Ze.count,it.start+it.count-Ze.start):(++De,me[De]=it)}me.length=De+1;let Oe=r.getParameter(r.UNPACK_ROW_LENGTH),ln=r.getParameter(r.UNPACK_SKIP_PIXELS),Bi=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,Pe.width);for(let Mt=0,Ze=me.length;Mt<Ze;Mt++){let it=me[Mt],ci=Math.floor(it.start/4),D=Math.ceil(it.count/4),zi=ci%Pe.width,Jn=Math.floor(ci/Pe.width),nt=D;r.pixelStorei(r.UNPACK_SKIP_PIXELS,zi),r.pixelStorei(r.UNPACK_SKIP_ROWS,Jn),t.texSubImage2D(r.TEXTURE_2D,0,zi,Jn,nt,1,qe,ct,Pe.data)}fe.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Oe),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ln),r.pixelStorei(r.UNPACK_SKIP_ROWS,Bi)}})(M,X,ee,$)):t.texImage2D(r.TEXTURE_2D,0,te,X.width,X.height,0,ee,$,X.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Te&&Fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ve,te,le[0].width,le[0].height,X.depth);for(let fe=0,Pe=le.length;fe<Pe;fe++)if(ie=le[fe],M.format!==Zt)if(ee!==null)if(Te){if(Xe)if(M.layerUpdates.size>0){let qe=Kl(ie.width,ie.height,M.format,M.type);for(let ct of M.layerUpdates){let me=ie.data.subarray(ct*qe/ie.data.BYTES_PER_ELEMENT,(ct+1)*qe/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,ct,ie.width,ie.height,1,ee,me)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,ie.width,ie.height,X.depth,ee,ie.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,fe,te,ie.width,ie.height,X.depth,0,ie.data,0,0);else ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?Xe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,ie.width,ie.height,X.depth,ee,$,ie.data):t.texImage3D(r.TEXTURE_2D_ARRAY,fe,te,ie.width,ie.height,X.depth,0,ee,$,ie.data)}else{Te&&Fe&&t.texStorage2D(r.TEXTURE_2D,Ve,te,le[0].width,le[0].height);for(let fe=0,Pe=le.length;fe<Pe;fe++)ie=le[fe],M.format!==Zt?ee!==null?Te?Xe&&t.compressedTexSubImage2D(r.TEXTURE_2D,fe,0,0,ie.width,ie.height,ee,ie.data):t.compressedTexImage2D(r.TEXTURE_2D,fe,te,ie.width,ie.height,0,ie.data):ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?Xe&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,ie.width,ie.height,ee,$,ie.data):t.texImage2D(r.TEXTURE_2D,fe,te,ie.width,ie.height,0,ee,$,ie.data)}else if(M.isDataArrayTexture)if(Te){if(Fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ve,te,X.width,X.height,X.depth),Xe)if(M.layerUpdates.size>0){let fe=Kl(X.width,X.height,M.format,M.type);for(let Pe of M.layerUpdates){let qe=X.data.subarray(Pe*fe/X.data.BYTES_PER_ELEMENT,(Pe+1)*fe/X.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Pe,X.width,X.height,1,ee,$,qe)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,ee,$,X.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,te,X.width,X.height,X.depth,0,ee,$,X.data);else if(M.isData3DTexture)Te?(Fe&&t.texStorage3D(r.TEXTURE_3D,Ve,te,X.width,X.height,X.depth),Xe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,ee,$,X.data)):t.texImage3D(r.TEXTURE_3D,0,te,X.width,X.height,X.depth,0,ee,$,X.data);else if(M.isFramebufferTexture){if(Fe)if(Te)t.texStorage2D(r.TEXTURE_2D,Ve,te,X.width,X.height);else{let fe=X.width,Pe=X.height;for(let qe=0;qe<Ve;qe++)t.texImage2D(r.TEXTURE_2D,qe,te,fe,Pe,0,ee,$,null),fe>>=1,Pe>>=1}}else if(le.length>0){if(Te&&Fe){let fe=Re(le[0]);t.texStorage2D(r.TEXTURE_2D,Ve,te,fe.width,fe.height)}for(let fe=0,Pe=le.length;fe<Pe;fe++)ie=le[fe],Te?Xe&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,ee,$,ie):t.texImage2D(r.TEXTURE_2D,fe,te,ee,$,ie);M.generateMipmaps=!1}else if(Te){if(Fe){let fe=Re(X);t.texStorage2D(r.TEXTURE_2D,Ve,te,fe.width,fe.height)}Xe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ee,$,X)}else t.texImage2D(r.TEXTURE_2D,0,te,ee,$,X);v(M)&&g(I),L.__version=C.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function re(b,M,F,I,x,C){let L=s.convert(F.format,F.colorSpace),N=s.convert(F.type),Y=y(F.internalFormat,L,N,F.colorSpace),Z=i.get(M),X=i.get(F);if(X.__renderTarget=M,!Z.__hasExternalTextures){let ee=Math.max(1,M.width>>C),$=Math.max(1,M.height>>C);x===r.TEXTURE_3D||x===r.TEXTURE_2D_ARRAY?t.texImage3D(x,C,Y,ee,$,M.depth,0,L,N,null):t.texImage2D(x,C,Y,ee,$,0,L,N,null)}t.bindFramebuffer(r.FRAMEBUFFER,b),ae(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,I,x,X.__webglTexture,0,se(M)):(x===r.TEXTURE_2D||x>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&x<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,I,x,X.__webglTexture,C),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ge(b,M,F){if(r.bindRenderbuffer(r.RENDERBUFFER,b),M.depthBuffer){let I=M.depthTexture,x=I&&I.isDepthTexture?I.type:null,C=T(M.stencilBuffer,x),L=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ae(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se(M),C,M.width,M.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,se(M),C,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,C,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,L,r.RENDERBUFFER,b)}else{let I=M.textures;for(let x=0;x<I.length;x++){let C=I[x],L=s.convert(C.format,C.colorSpace),N=s.convert(C.type),Y=y(C.internalFormat,L,N,C.colorSpace);ae(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se(M),Y,M.width,M.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,se(M),Y,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Y,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ue(b,M,F){let I=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,b),!M.depthTexture||!M.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let x=i.get(M.depthTexture);if(x.__renderTarget=M,x.__webglTexture&&M.depthTexture.image.width===M.width&&M.depthTexture.image.height===M.height||(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),I){if(x.__webglInit===void 0&&(x.__webglInit=!0,M.depthTexture.addEventListener("dispose",w)),x.__webglTexture===void 0){x.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,x.__webglTexture),z(r.TEXTURE_CUBE_MAP,M.depthTexture);let Z=s.convert(M.depthTexture.format),X=s.convert(M.depthTexture.type),ee;M.depthTexture.format===Fi?ee=r.DEPTH_COMPONENT24:M.depthTexture.format===tn&&(ee=r.DEPTH24_STENCIL8);for(let $=0;$<6;$++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ee,M.width,M.height,0,Z,X,null)}}else G(M.depthTexture,0);let C=x.__webglTexture,L=se(M),N=I?r.TEXTURE_CUBE_MAP_POSITIVE_X+F:r.TEXTURE_2D,Y=M.depthTexture.format===tn?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===Fi)ae(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,N,C,0,L):r.framebufferTexture2D(r.FRAMEBUFFER,Y,N,C,0);else{if(M.depthTexture.format!==tn)throw new Error("Unknown depthTexture format");ae(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,N,C,0,L):r.framebufferTexture2D(r.FRAMEBUFFER,Y,N,C,0)}}function pe(b){let M=i.get(b),F=b.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==b.depthTexture){let I=b.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),I){let x=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,I.removeEventListener("dispose",x)};I.addEventListener("dispose",x),M.__depthDisposeCallback=x}M.__boundDepthTexture=I}if(b.depthTexture&&!M.__autoAllocateDepthBuffer)if(F)for(let I=0;I<6;I++)ue(M.__webglFramebuffer[I],b,I);else{let I=b.texture.mipmaps;I&&I.length>0?ue(M.__webglFramebuffer[0],b,0):ue(M.__webglFramebuffer,b,0)}else if(F){M.__webglDepthbuffer=[];for(let I=0;I<6;I++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[I]),M.__webglDepthbuffer[I]===void 0)M.__webglDepthbuffer[I]=r.createRenderbuffer(),ge(M.__webglDepthbuffer[I],b,!1);else{let x=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,C=M.__webglDepthbuffer[I];r.bindRenderbuffer(r.RENDERBUFFER,C),r.framebufferRenderbuffer(r.FRAMEBUFFER,x,r.RENDERBUFFER,C)}}else{let I=b.texture.mipmaps;if(I&&I.length>0?t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),ge(M.__webglDepthbuffer,b,!1);else{let x=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,C=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,C),r.framebufferRenderbuffer(r.FRAMEBUFFER,x,r.RENDERBUFFER,C)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}let he=[],K=[];function se(b){return Math.min(n.maxSamples,b.samples)}function ae(b){let M=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function xe(b,M){let F=b.colorSpace,I=b.format,x=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==Yi&&F!==nn&&(He.getTransfer(F)===je?I===Zt&&x===Pt||ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):be("WebGLTextures: Unsupported texture color space:",F)),M}function Re(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=function(){let b=R;return b>=n.maxTextures&&ye("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+n.maxTextures),R+=1,b},this.resetTextureUnits=function(){R=0},this.setTexture2D=G,this.setTexture2DArray=function(b,M){let F=i.get(b);b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version?j(F,b,M):(b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null),t.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+M))},this.setTexture3D=function(b,M){let F=i.get(b);b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version?j(F,b,M):t.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+M)},this.setTextureCube=function(b,M){let F=i.get(b);b.isCubeDepthTexture!==!0&&b.version>0&&F.__version!==b.version?(function(I,x,C){if(x.image.length!==6)return;let L=O(I,x),N=x.source;t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+C);let Y=i.get(N);if(N.version!==Y.__version||L===!0){t.activeTexture(r.TEXTURE0+C);let Z=He.getPrimaries(He.workingColorSpace),X=x.colorSpace===nn?null:He.getPrimaries(x.colorSpace),ee=x.colorSpace===nn||Z===X?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let $=x.isCompressedTexture||x.image[0].isCompressedTexture,ie=x.image[0]&&x.image[0].isDataTexture,te=[];for(let me=0;me<6;me++)te[me]=$||ie?ie?x.image[me].image:x.image[me]:m(x.image[me],!0,n.maxCubemapSize),te[me]=xe(x,te[me]);let le=te[0],Te=s.convert(x.format,x.colorSpace),Fe=s.convert(x.type),Xe=y(x.internalFormat,Te,Fe,x.colorSpace),Ve=x.isVideoTexture!==!0,fe=Y.__version===void 0||L===!0,Pe=N.dataReady,qe,ct=S(x,le);if(z(r.TEXTURE_CUBE_MAP,x),$){Ve&&fe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ct,Xe,le.width,le.height);for(let me=0;me<6;me++){qe=te[me].mipmaps;for(let De=0;De<qe.length;De++){let Oe=qe[De];x.format!==Zt?Te!==null?Ve?Pe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,0,0,Oe.width,Oe.height,Te,Oe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,Xe,Oe.width,Oe.height,0,Oe.data):ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?Pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,0,0,Oe.width,Oe.height,Te,Fe,Oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,Xe,Oe.width,Oe.height,0,Te,Fe,Oe.data)}}}else{if(qe=x.mipmaps,Ve&&fe){qe.length>0&&ct++;let me=Re(te[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ct,Xe,me.width,me.height)}for(let me=0;me<6;me++)if(ie){Ve?Pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,te[me].width,te[me].height,Te,Fe,te[me].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Xe,te[me].width,te[me].height,0,Te,Fe,te[me].data);for(let De=0;De<qe.length;De++){let Oe=qe[De].image[me].image;Ve?Pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,0,0,Oe.width,Oe.height,Te,Fe,Oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,Xe,Oe.width,Oe.height,0,Te,Fe,Oe.data)}}else{Ve?Pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Te,Fe,te[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Xe,Te,Fe,te[me]);for(let De=0;De<qe.length;De++){let Oe=qe[De];Ve?Pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,0,0,Te,Fe,Oe.image[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,Xe,Te,Fe,Oe.image[me])}}}v(x)&&g(r.TEXTURE_CUBE_MAP),Y.__version=N.version,x.onUpdate&&x.onUpdate(x)}I.__version=x.version})(F,b,M):t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+M)},this.rebindTextures=function(b,M,F){let I=i.get(b);M!==void 0&&re(I.__webglFramebuffer,b,b.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&pe(b)},this.setupRenderTarget=function(b){let M=b.texture,F=i.get(b),I=i.get(M);b.addEventListener("dispose",P);let x=b.textures,C=b.isWebGLCubeRenderTarget===!0,L=x.length>1;if(L||(I.__webglTexture===void 0&&(I.__webglTexture=r.createTexture()),I.__version=M.version,a.memory.textures++),C){F.__webglFramebuffer=[];for(let N=0;N<6;N++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[N]=[];for(let Y=0;Y<M.mipmaps.length;Y++)F.__webglFramebuffer[N][Y]=r.createFramebuffer()}else F.__webglFramebuffer[N]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let N=0;N<M.mipmaps.length;N++)F.__webglFramebuffer[N]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(L)for(let N=0,Y=x.length;N<Y;N++){let Z=i.get(x[N]);Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture(),a.memory.textures++)}if(b.samples>0&&ae(b)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let N=0;N<x.length;N++){let Y=x[N];F.__webglColorRenderbuffer[N]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[N]);let Z=s.convert(Y.format,Y.colorSpace),X=s.convert(Y.type),ee=y(Y.internalFormat,Z,X,Y.colorSpace,b.isXRRenderTarget===!0),$=se(b);r.renderbufferStorageMultisample(r.RENDERBUFFER,$,ee,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+N,r.RENDERBUFFER,F.__webglColorRenderbuffer[N])}r.bindRenderbuffer(r.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),ge(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(C){t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture),z(r.TEXTURE_CUBE_MAP,M);for(let N=0;N<6;N++)if(M.mipmaps&&M.mipmaps.length>0)for(let Y=0;Y<M.mipmaps.length;Y++)re(F.__webglFramebuffer[N][Y],b,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+N,Y);else re(F.__webglFramebuffer[N],b,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+N,0);v(M)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(L){for(let N=0,Y=x.length;N<Y;N++){let Z=x[N],X=i.get(Z),ee=r.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ee=b.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ee,X.__webglTexture),z(ee,Z),re(F.__webglFramebuffer,b,Z,r.COLOR_ATTACHMENT0+N,ee,0),v(Z)&&g(ee)}t.unbindTexture()}else{let N=r.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(N=b.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(N,I.__webglTexture),z(N,M),M.mipmaps&&M.mipmaps.length>0)for(let Y=0;Y<M.mipmaps.length;Y++)re(F.__webglFramebuffer[Y],b,M,r.COLOR_ATTACHMENT0,N,Y);else re(F.__webglFramebuffer,b,M,r.COLOR_ATTACHMENT0,N,0);v(M)&&g(N),t.unbindTexture()}b.depthBuffer&&pe(b)},this.updateRenderTargetMipmap=function(b){let M=b.textures;for(let F=0,I=M.length;F<I;F++){let x=M[F];if(v(x)){let C=_(b),L=i.get(x).__webglTexture;t.bindTexture(C,L),g(C),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(b){if(b.samples>0){if(ae(b)===!1){let M=b.textures,F=b.width,I=b.height,x=r.COLOR_BUFFER_BIT,C=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,L=i.get(b),N=M.length>1;if(N)for(let Z=0;Z<M.length;Z++)t.bindFramebuffer(r.FRAMEBUFFER,L.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Z,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,L.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Z,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,L.__webglMultisampledFramebuffer);let Y=b.texture.mipmaps;Y&&Y.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,L.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,L.__webglFramebuffer);for(let Z=0;Z<M.length;Z++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(x|=r.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(x|=r.STENCIL_BUFFER_BIT)),N){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,L.__webglColorRenderbuffer[Z]);let X=i.get(M[Z]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,X,0)}r.blitFramebuffer(0,0,F,I,0,0,F,I,x,r.NEAREST),c===!0&&(he.length=0,K.length=0,he.push(r.COLOR_ATTACHMENT0+Z),b.depthBuffer&&b.resolveDepthBuffer===!1&&(he.push(C),K.push(C),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,K)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),N)for(let Z=0;Z<M.length;Z++){t.bindFramebuffer(r.FRAMEBUFFER,L.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Z,r.RENDERBUFFER,L.__webglColorRenderbuffer[Z]);let X=i.get(M[Z]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,L.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Z,r.TEXTURE_2D,X,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,L.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){let M=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}},this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=re,this.useMultisampledRTT=ae,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Xp(r,e){return{convert:function(t,i=nn){let n,s=He.getTransfer(i);if(t===Pt)return r.UNSIGNED_BYTE;if(t===Ia)return r.UNSIGNED_SHORT_4_4_4_4;if(t===Pa)return r.UNSIGNED_SHORT_5_5_5_1;if(t===cl)return r.UNSIGNED_INT_5_9_9_9_REV;if(t===hl)return r.UNSIGNED_INT_10F_11F_11F_REV;if(t===ol)return r.BYTE;if(t===ll)return r.SHORT;if(t===Wn)return r.UNSIGNED_SHORT;if(t===Ra)return r.INT;if(t===Mi)return r.UNSIGNED_INT;if(t===Yt)return r.FLOAT;if(t===ai)return r.HALF_FLOAT;if(t===Lh)return r.ALPHA;if(t===Dh)return r.RGB;if(t===Zt)return r.RGBA;if(t===Fi)return r.DEPTH_COMPONENT;if(t===tn)return r.DEPTH_STENCIL;if(t===ul)return r.RED;if(t===La)return r.RED_INTEGER;if(t===jn)return r.RG;if(t===dl)return r.RG_INTEGER;if(t===pl)return r.RGBA_INTEGER;if(t===Da||t===Ua||t===Na||t===Fa)if(s===je){if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n===null)return null;if(t===Da)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===Ua)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Na)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Fa)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(n=e.get("WEBGL_compressed_texture_s3tc"),n===null)return null;if(t===Da)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Ua)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Na)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Fa)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===ml||t===fl||t===gl||t===_l){if(n=e.get("WEBGL_compressed_texture_pvrtc"),n===null)return null;if(t===ml)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===fl)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===gl)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===_l)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===vl||t===xl||t===yl||t===Ml||t===Sl||t===bl||t===Tl){if(n=e.get("WEBGL_compressed_texture_etc"),n===null)return null;if(t===vl||t===xl)return s===je?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(t===yl)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(t===Ml)return n.COMPRESSED_R11_EAC;if(t===Sl)return n.COMPRESSED_SIGNED_R11_EAC;if(t===bl)return n.COMPRESSED_RG11_EAC;if(t===Tl)return n.COMPRESSED_SIGNED_RG11_EAC}if(t===El||t===wl||t===Al||t===Cl||t===Rl||t===Il||t===Pl||t===Ll||t===Dl||t===Ul||t===Nl||t===Fl||t===Ol||t===Bl){if(n=e.get("WEBGL_compressed_texture_astc"),n===null)return null;if(t===El)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===wl)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Al)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Cl)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Rl)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Il)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Pl)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Ll)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Dl)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Ul)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Nl)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Fl)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Ol)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Bl)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===zl||t===Gl||t===Vl){if(n=e.get("EXT_texture_compression_bptc"),n===null)return null;if(t===zl)return s===je?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Gl)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Vl)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===kl||t===Hl||t===Wl||t===Xl){if(n=e.get("EXT_texture_compression_rgtc"),n===null)return null;if(t===kl)return n.COMPRESSED_RED_RGTC1_EXT;if(t===Hl)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Wl)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Xl)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Xn?r.UNSIGNED_INT_24_8:r[t]!==void 0?r[t]:null}}}var uc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Mr(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new It({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pt(new yi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},dc=class extends xi{constructor(e,t){super();let i=this,n=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,p=null,d=null,f=null,m=typeof XRWebGLBinding<"u",v=new uc,g={},_=t.getContextAttributes(),y=null,T=null,S=[],w=[],P=new ne,U=null,R=new dt;R.viewport=new Ke;let G=new dt;G.viewport=new Ke;let W=[R,G],B=new Ta,V=null,z=null;function O(K){let se=w.indexOf(K.inputSource);if(se===-1)return;let ae=S[se];ae!==void 0&&(ae.update(K.inputSource,K.frame,l||a),ae.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){n.removeEventListener("select",O),n.removeEventListener("selectstart",O),n.removeEventListener("selectend",O),n.removeEventListener("squeeze",O),n.removeEventListener("squeezestart",O),n.removeEventListener("squeezeend",O),n.removeEventListener("end",k),n.removeEventListener("inputsourceschange",j);for(let K=0;K<S.length;K++){let se=w[K];se!==null&&(w[K]=null,S[K].disconnect(se))}V=null,z=null,v.reset();for(let K in g)delete g[K];e.setRenderTarget(y),d=null,p=null,u=null,n=null,T=null,he.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}function j(K){for(let se=0;se<K.removed.length;se++){let ae=K.removed[se],xe=w.indexOf(ae);xe>=0&&(w[xe]=null,S[xe].disconnect(ae))}for(let se=0;se<K.added.length;se++){let ae=K.added[se],xe=w.indexOf(ae);if(xe===-1){for(let b=0;b<S.length;b++){if(b>=w.length){w.push(ae),xe=b;break}if(w[b]===null){w[b]=ae,xe=b;break}}if(xe===-1)break}let Re=S[xe];Re&&Re.connect(ae)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let se=S[K];return se===void 0&&(se=new Pn,S[K]=se),se.getTargetRaySpace()},this.getControllerGrip=function(K){let se=S[K];return se===void 0&&(se=new Pn,S[K]=se),se.getGripSpace()},this.getHand=function(K){let se=S[K];return se===void 0&&(se=new Pn,S[K]=se),se.getHandSpace()},this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(n,t)),u},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(K){if(n=K,n!==null){if(y=e.getRenderTarget(),n.addEventListener("select",O),n.addEventListener("selectstart",O),n.addEventListener("selectend",O),n.addEventListener("squeeze",O),n.addEventListener("squeezestart",O),n.addEventListener("squeezeend",O),n.addEventListener("end",k),n.addEventListener("inputsourceschange",j),_.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(P),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,ae=null,xe=null;_.depth&&(xe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=_.stencil?tn:Fi,ae=_.stencil?Xn:Mi);let Re={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};u=this.getBinding(),p=u.createProjectionLayer(Re),n.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),T=new Ct(p.textureWidth,p.textureHeight,{format:Zt,type:Pt,depthTexture:new Di(p.textureWidth,p.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let se={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(n,t,se),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new Ct(d.framebufferWidth,d.framebufferHeight,{format:Zt,type:Pt,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await n.requestReferenceSpace(o),he.setContext(n),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};let re=new A,ge=new A;function ue(K,se){se===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(se.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(n===null)return;let se=K.near,ae=K.far;v.texture!==null&&(v.depthNear>0&&(se=v.depthNear),v.depthFar>0&&(ae=v.depthFar)),B.near=G.near=R.near=se,B.far=G.far=R.far=ae,V===B.near&&z===B.far||(n.updateRenderState({depthNear:B.near,depthFar:B.far}),V=B.near,z=B.far),B.layers.mask=6|K.layers.mask,R.layers.mask=-5&B.layers.mask,G.layers.mask=-3&B.layers.mask;let xe=K.parent,Re=B.cameras;ue(B,xe);for(let b=0;b<Re.length;b++)ue(Re[b],xe);Re.length===2?(function(b,M,F){re.setFromMatrixPosition(M.matrixWorld),ge.setFromMatrixPosition(F.matrixWorld);let I=re.distanceTo(ge),x=M.projectionMatrix.elements,C=F.projectionMatrix.elements,L=x[14]/(x[10]-1),N=x[14]/(x[10]+1),Y=(x[9]+1)/x[5],Z=(x[9]-1)/x[5],X=(x[8]-1)/x[0],ee=(C[8]+1)/C[0],$=L*X,ie=L*ee,te=I/(-X+ee),le=te*-X;if(M.matrixWorld.decompose(b.position,b.quaternion,b.scale),b.translateX(le),b.translateZ(te),b.matrixWorld.compose(b.position,b.quaternion,b.scale),b.matrixWorldInverse.copy(b.matrixWorld).invert(),x[10]===-1)b.projectionMatrix.copy(M.projectionMatrix),b.projectionMatrixInverse.copy(M.projectionMatrixInverse);else{let Te=L+te,Fe=N+te,Xe=$-le,Ve=ie+(I-le),fe=Y*N/Fe*Te,Pe=Z*N/Fe*Te;b.projectionMatrix.makePerspective(Xe,Ve,fe,Pe,Te,Fe),b.projectionMatrixInverse.copy(b.projectionMatrix).invert()}})(B,R,G):B.projectionMatrix.copy(R.projectionMatrix),(function(b,M,F){F===null?b.matrix.copy(M.matrixWorld):(b.matrix.copy(F.matrixWorld),b.matrix.invert(),b.matrix.multiply(M.matrixWorld)),b.matrix.decompose(b.position,b.quaternion,b.scale),b.updateMatrixWorld(!0),b.projectionMatrix.copy(M.projectionMatrix),b.projectionMatrixInverse.copy(M.projectionMatrixInverse),b.isPerspectiveCamera&&(b.fov=2*Rn*Math.atan(1/b.projectionMatrix.elements[5]),b.zoom=1)})(K,B,xe)},this.getCamera=function(){return B},this.getFoveation=function(){if(p!==null||d!==null)return c},this.setFoveation=function(K){c=K,p!==null&&(p.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(B)},this.getCameraTexture=function(K){return g[K]};let pe=null,he=new yu;he.setAnimationLoop(function(K,se){if(h=se.getViewerPose(l||a),f=se,h!==null){let ae=h.views;d!==null&&(e.setRenderTargetFramebuffer(T,d.framebuffer),e.setRenderTarget(T));let xe=!1;ae.length!==B.cameras.length&&(B.cameras.length=0,xe=!0);for(let b=0;b<ae.length;b++){let M=ae[b],F=null;if(d!==null)F=d.getViewport(M);else{let x=u.getViewSubImage(p,M);F=x.viewport,b===0&&(e.setRenderTargetTextures(T,x.colorTexture,x.depthStencilTexture),e.setRenderTarget(T))}let I=W[b];I===void 0&&(I=new dt,I.layers.enable(b),I.viewport=new Ke,W[b]=I),I.matrix.fromArray(M.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(M.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(F.x,F.y,F.width,F.height),b===0&&(B.matrix.copy(I.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),xe===!0&&B.cameras.push(I)}let Re=n.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&m){u=i.getBinding();let b=u.getDepthInformation(ae[0]);b&&b.isValid&&b.texture&&v.init(b,n.renderState)}if(Re&&Re.includes("camera-access")&&m){e.state.unbindTexture(),u=i.getBinding();for(let b=0;b<ae.length;b++){let M=ae[b].camera;if(M){let F=g[M];F||(F=new Mr,g[M]=F);let I=u.getCameraImage(M);F.sourceTexture=I}}}}for(let ae=0;ae<S.length;ae++){let xe=w[ae],Re=S[ae];xe!==null&&Re!==void 0&&Re.update(xe,se,l||a)}pe&&pe(K,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),f=null}),this.setAnimationLoop=function(K){pe=K},this.dispose=function(){}}},on=new Wt,jp=new Le;function qp(r,e){function t(n,s){n.matrixAutoUpdate===!0&&n.updateMatrix(),s.value.copy(n.matrix)}function i(n,s){n.opacity.value=s.opacity,s.color&&n.diffuse.value.copy(s.color),s.emissive&&n.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(n.map.value=s.map,t(s.map,n.mapTransform)),s.alphaMap&&(n.alphaMap.value=s.alphaMap,t(s.alphaMap,n.alphaMapTransform)),s.bumpMap&&(n.bumpMap.value=s.bumpMap,t(s.bumpMap,n.bumpMapTransform),n.bumpScale.value=s.bumpScale,s.side===Tt&&(n.bumpScale.value*=-1)),s.normalMap&&(n.normalMap.value=s.normalMap,t(s.normalMap,n.normalMapTransform),n.normalScale.value.copy(s.normalScale),s.side===Tt&&n.normalScale.value.negate()),s.displacementMap&&(n.displacementMap.value=s.displacementMap,t(s.displacementMap,n.displacementMapTransform),n.displacementScale.value=s.displacementScale,n.displacementBias.value=s.displacementBias),s.emissiveMap&&(n.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,n.emissiveMapTransform)),s.specularMap&&(n.specularMap.value=s.specularMap,t(s.specularMap,n.specularMapTransform)),s.alphaTest>0&&(n.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,c=a.envMapRotation;o&&(n.envMap.value=o,on.copy(c),on.x*=-1,on.y*=-1,on.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(on.y*=-1,on.z*=-1),n.envMapRotation.value.setFromMatrix4(jp.makeRotationFromEuler(on)),n.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=s.reflectivity,n.ior.value=s.ior,n.refractionRatio.value=s.refractionRatio),s.lightMap&&(n.lightMap.value=s.lightMap,n.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,n.lightMapTransform)),s.aoMap&&(n.aoMap.value=s.aoMap,n.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,s){s.color.getRGB(n.fogColor.value,Zl(r)),s.isFog?(n.fogNear.value=s.near,n.fogFar.value=s.far):s.isFogExp2&&(n.fogDensity.value=s.density)},refreshMaterialUniforms:function(n,s,a,o,c){s.isMeshBasicMaterial?i(n,s):s.isMeshLambertMaterial?(i(n,s),s.envMap&&(n.envMapIntensity.value=s.envMapIntensity)):s.isMeshToonMaterial?(i(n,s),(function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)})(n,s)):s.isMeshPhongMaterial?(i(n,s),(function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)})(n,s),s.envMap&&(n.envMapIntensity.value=s.envMapIntensity)):s.isMeshStandardMaterial?(i(n,s),(function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)})(n,s),s.isMeshPhysicalMaterial&&(function(l,h,u){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Tt&&l.clearcoatNormalScale.value.negate())),h.dispersion>0&&(l.dispersion.value=h.dispersion),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=u.texture,l.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))})(n,s,c)):s.isMeshMatcapMaterial?(i(n,s),(function(l,h){h.matcap&&(l.matcap.value=h.matcap)})(n,s)):s.isMeshDepthMaterial?i(n,s):s.isMeshDistanceMaterial?(i(n,s),(function(l,h){let u=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(u.matrixWorld),l.nearDistance.value=u.shadow.camera.near,l.farDistance.value=u.shadow.camera.far})(n,s)):s.isMeshNormalMaterial?i(n,s):s.isLineBasicMaterial?((function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))})(n,s),s.isLineDashedMaterial&&(function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale})(n,s)):s.isPointsMaterial?(function(l,h,u,p){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*u,l.scale.value=.5*p,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(n,s,a,o):s.isSpriteMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(n,s):s.isShadowMaterial?(n.color.value.copy(s.color),n.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Yp(r,e,t,i){let n={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(u,p,d,f){let m=u.value,v=p+"_"+d;if(f[v]===void 0)return f[v]=typeof m=="number"||typeof m=="boolean"?m:m.clone(),!0;{let g=f[v];if(typeof m=="number"||typeof m=="boolean"){if(g!==m)return f[v]=m,!0}else if(g.equals(m)===!1)return g.copy(m),!0}return!1}function l(u){let p={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(p.boundary=4,p.storage=4):u.isVector2?(p.boundary=8,p.storage=8):u.isVector3||u.isColor?(p.boundary=16,p.storage=12):u.isVector4?(p.boundary=16,p.storage=16):u.isMatrix3?(p.boundary=48,p.storage=48):u.isMatrix4?(p.boundary=64,p.storage=64):u.isTexture?ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ye("WebGLRenderer: Unsupported uniform value type.",u),p}function h(u){let p=u.target;p.removeEventListener("dispose",h);let d=a.indexOf(p.__bindingPointIndex);a.splice(d,1),r.deleteBuffer(n[p.id]),delete n[p.id],delete s[p.id]}return{bind:function(u,p){let d=p.program;i.uniformBlockBinding(u,d)},update:function(u,p){let d=n[u.id];d===void 0&&((function(v){let g=v.uniforms,_=0,y=16;for(let S=0,w=g.length;S<w;S++){let P=Array.isArray(g[S])?g[S]:[g[S]];for(let U=0,R=P.length;U<R;U++){let G=P[U],W=Array.isArray(G.value)?G.value:[G.value];for(let B=0,V=W.length;B<V;B++){let z=l(W[B]),O=_%y,k=O%z.boundary,j=O+k;_+=k,j!==0&&y-j<z.storage&&(_+=y-j),G.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=_,_+=z.storage}}}let T=_%y;T>0&&(_+=y-T),v.__size=_,v.__cache={}})(u),d=(function(v){let g=(function(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();v.__bindingPointIndex=g;let _=r.createBuffer(),y=v.__size,T=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,y,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,g,_),_})(u),n[u.id]=d,u.addEventListener("dispose",h));let f=p.program;i.updateUBOMapping(u,f);let m=e.render.frame;s[u.id]!==m&&((function(v){let g=n[v.id],_=v.uniforms,y=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,g);for(let T=0,S=_.length;T<S;T++){let w=Array.isArray(_[T])?_[T]:[_[T]];for(let P=0,U=w.length;P<U;P++){let R=w[P];if(c(R,T,P,y)===!0){let G=R.__offset,W=Array.isArray(R.value)?R.value:[R.value],B=0;for(let V=0;V<W.length;V++){let z=W[V],O=l(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,G+B,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,B),B+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,G,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(u),s[u.id]=m)},dispose:function(){for(let u in n)r.deleteBuffer(n[u]);a=[],n={},s={}}}}var Zp=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),oi=null,Wa=class{constructor(e={}){let{canvas:t=kh(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1,outputBufferType:d=Pt}=e,f;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let m=d,v=new Set([pl,dl,La]),g=new Set([Pt,Mi,Wn,Xn,Ia,Pa]),_=new Uint32Array(4),y=new Int32Array(4),T=null,S=null,w=[],P=[],U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,G=!1;this._outputColorSpace=gt;let W=0,B=0,V=null,z=-1,O=null,k=new Ke,j=new Ke,re=null,ge=new Ee(0),ue=0,pe=t.width,he=t.height,K=1,se=null,ae=null,xe=new Ke(0,0,pe,he),Re=new Ke(0,0,pe,he),b=!1,M=new Li,F=!1,I=!1,x=new Le,C=new A,L=new Ke,N={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Y=!1;function Z(){return V===null?K:1}let X,ee,$,ie,te,le,Te,Fe,Xe,Ve,fe,Pe,qe,ct,me,De,Oe,ln,Bi,Mt,Ze,it,ci,D=i;function zi(E,H){return t.getContext(E,H)}try{let E={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"183"}`),t.addEventListener("webglcontextlost",ja,!1),t.addEventListener("webglcontextrestored",pc,!1),t.addEventListener("webglcontextcreationerror",mc,!1),D===null){let H="webgl2";if(D=zi(H,E),D===null)throw zi(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw be("WebGLRenderer: "+E.message),E}function Jn(){X=new Sd(D),X.init(),Ze=new Xp(D,X),ee=new vd(D,X,e,Ze),$=new Hp(D,X),ee.reversedDepthBuffer&&p&&$.buffers.depth.setReversed(!0),ie=new Ed(D),te=new Lp,le=new Wp(D,X,$,te,ee,Ze,ie),Te=new Md(R),Fe=new pd(D),it=new gd(D,Fe),Xe=new bd(D,Fe,ie,it),Ve=new Ad(D,Xe,Fe,it,ie),ln=new wd(D,ee,le),me=new xd(te),fe=new Pp(R,Te,X,ee,it,me),Pe=new qp(R,te),qe=new Up,ct=new zp(X),Oe=new fd(R,Te,$,Ve,f,c),De=new kp(R,Ve,ee),ci=new Yp(D,ie,ee,$),Bi=new _d(D,X,ie),Mt=new Td(D,X,ie),ie.programs=fe.programs,R.capabilities=ee,R.extensions=X,R.properties=te,R.renderLists=qe,R.shadowMap=De,R.state=$,R.info=ie}Jn(),m!==Pt&&(U=new Rd(m,t.width,t.height,n,s));let nt=new dc(R,D);function ja(E){E.preventDefault(),ql("WebGLRenderer: Context Lost."),G=!0}function pc(){ql("WebGLRenderer: Context Restored."),G=!1;let E=ie.autoReset,H=De.enabled,q=De.autoUpdate,Q=De.needsUpdate,J=De.type;Jn(),ie.autoReset=E,De.enabled=H,De.autoUpdate=q,De.needsUpdate=Q,De.type=J}function mc(E){be("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function fc(E){let H=E.target;H.removeEventListener("dispose",fc),(function(q){(function(Q){let J=te.get(Q).programs;J!==void 0&&(J.forEach(function(oe){fe.releaseProgram(oe)}),Q.isShaderMaterial&&fe.releaseShaderCache(Q))})(q),te.remove(q)})(H)}function gc(E,H,q){E.transparent===!0&&E.side===Ot&&E.forceSinglePass===!1?(E.side=Tt,E.needsUpdate=!0,$r(E,H,q),E.side=Vn,E.needsUpdate=!0,$r(E,H,q),E.side=Ot):$r(E,H,q)}this.xr=nt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let E=X.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=X.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(pe,he,!1))},this.getSize=function(E){return E.set(pe,he)},this.setSize=function(E,H,q=!0){nt.isPresenting?ye("WebGLRenderer: Can't change size while VR device is presenting."):(pe=E,he=H,t.width=Math.floor(E*K),t.height=Math.floor(H*K),q===!0&&(t.style.width=E+"px",t.style.height=H+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,E,H))},this.getDrawingBufferSize=function(E){return E.set(pe*K,he*K).floor()},this.setDrawingBufferSize=function(E,H,q){pe=E,he=H,K=q,t.width=Math.floor(E*q),t.height=Math.floor(H*q),this.setViewport(0,0,E,H)},this.setEffects=function(E){if(m!==Pt){if(E){for(let H=0;H<E.length;H++)if(E[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(E||[])}else console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.")},this.getCurrentViewport=function(E){return E.copy(k)},this.getViewport=function(E){return E.copy(xe)},this.setViewport=function(E,H,q,Q){E.isVector4?xe.set(E.x,E.y,E.z,E.w):xe.set(E,H,q,Q),$.viewport(k.copy(xe).multiplyScalar(K).round())},this.getScissor=function(E){return E.copy(Re)},this.setScissor=function(E,H,q,Q){E.isVector4?Re.set(E.x,E.y,E.z,E.w):Re.set(E,H,q,Q),$.scissor(j.copy(Re).multiplyScalar(K).round())},this.getScissorTest=function(){return b},this.setScissorTest=function(E){$.setScissorTest(b=E)},this.setOpaqueSort=function(E){se=E},this.setTransparentSort=function(E){ae=E},this.getClearColor=function(E){return E.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(E=!0,H=!0,q=!0){let Q=0;if(E){let J=!1;if(V!==null){let oe=V.texture.format;J=v.has(oe)}if(J){let oe=V.texture.type,de=g.has(oe),_e=Oe.getClearColor(),ve=Oe.getClearAlpha(),we=_e.r,Ge=_e.g,ke=_e.b;de?(_[0]=we,_[1]=Ge,_[2]=ke,_[3]=ve,D.clearBufferuiv(D.COLOR,0,_)):(y[0]=we,y[1]=Ge,y[2]=ke,y[3]=ve,D.clearBufferiv(D.COLOR,0,y))}else Q|=D.COLOR_BUFFER_BIT}H&&(Q|=D.DEPTH_BUFFER_BIT),q&&(Q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&D.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ja,!1),t.removeEventListener("webglcontextrestored",pc,!1),t.removeEventListener("webglcontextcreationerror",mc,!1),Oe.dispose(),qe.dispose(),ct.dispose(),te.dispose(),Te.dispose(),Ve.dispose(),it.dispose(),ci.dispose(),fe.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",_c),nt.removeEventListener("sessionend",vc),Gi.stop()},this.renderBufferDirect=function(E,H,q,Q,J,oe){H===null&&(H=N);let de=J.isMesh&&J.matrixWorld.determinant()<0,_e=(function(ze,Qe,ut,Ae,Ce){Qe.isScene!==!0&&(Qe=N),le.resetTextureUnits();let Bt=Qe.fog,Za=Ae.isMeshStandardMaterial||Ae.isMeshLambertMaterial||Ae.isMeshPhongMaterial?Qe.environment:null,Qr=V===null?R.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Yi,Kn=Ae.isMeshStandardMaterial||Ae.isMeshLambertMaterial&&!Ae.envMap||Ae.isMeshPhongMaterial&&!Ae.envMap,Jt=Te.get(Ae.envMap||Za,Kn),cn=Ae.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,hi=!!ut.attributes.tangent&&(!!Ae.normalMap||Ae.anisotropy>0),Ja=!!ut.morphAttributes.position,hn=!!ut.morphAttributes.normal,Ru=!!ut.morphAttributes.color,Tc=qt;Ae.toneMapped&&(V!==null&&V.isXRRenderTarget!==!0||(Tc=R.toneMapping));let Ec=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,Iu=Ec!==void 0?Ec.length:0,Be=te.get(Ae),Vi=S.state.lights;if(F===!0&&(I===!0||ze!==O)){let Dt=ze===O&&Ae.id===z;me.setState(Ae,ze,Dt)}let zt=!1;Ae.version===Be.__version?Be.needsLights&&Be.lightsStateVersion!==Vi.state.version||Be.outputColorSpace!==Qr||Ce.isBatchedMesh&&Be.batching===!1?zt=!0:Ce.isBatchedMesh||Be.batching!==!0?Ce.isBatchedMesh&&Be.batchingColor===!0&&Ce.colorTexture===null||Ce.isBatchedMesh&&Be.batchingColor===!1&&Ce.colorTexture!==null||Ce.isInstancedMesh&&Be.instancing===!1?zt=!0:Ce.isInstancedMesh||Be.instancing!==!0?Ce.isSkinnedMesh&&Be.skinning===!1?zt=!0:Ce.isSkinnedMesh||Be.skinning!==!0?Ce.isInstancedMesh&&Be.instancingColor===!0&&Ce.instanceColor===null||Ce.isInstancedMesh&&Be.instancingColor===!1&&Ce.instanceColor!==null||Ce.isInstancedMesh&&Be.instancingMorph===!0&&Ce.morphTexture===null||Ce.isInstancedMesh&&Be.instancingMorph===!1&&Ce.morphTexture!==null||Be.envMap!==Jt||Ae.fog===!0&&Be.fog!==Bt?zt=!0:Be.numClippingPlanes===void 0||Be.numClippingPlanes===me.numPlanes&&Be.numIntersection===me.numIntersection?(Be.vertexAlphas!==cn||Be.vertexTangents!==hi||Be.morphTargets!==Ja||Be.morphNormals!==hn||Be.morphColors!==Ru||Be.toneMapping!==Tc||Be.morphTargetsCount!==Iu)&&(zt=!0):zt=!0:zt=!0:zt=!0:zt=!0:(zt=!0,Be.__version=Ae.version);let ki=Be.currentProgram;zt===!0&&(ki=$r(Ae,Qe,Ce));let wc=!1,$n=!1,Ka=!1,et=ki.getUniforms(),Si=Be.uniforms;if($.useProgram(ki.program)&&(wc=!0,$n=!0,Ka=!0),Ae.id!==z&&(z=Ae.id,$n=!0),wc||O!==ze){$.buffers.depth.getReversed()&&ze.reversedDepth!==!0&&(ze._reversedDepth=!0,ze.updateProjectionMatrix()),et.setValue(D,"projectionMatrix",ze.projectionMatrix),et.setValue(D,"viewMatrix",ze.matrixWorldInverse);let Dt=et.map.cameraPosition;Dt!==void 0&&Dt.setValue(D,C.setFromMatrixPosition(ze.matrixWorld)),ee.logarithmicDepthBuffer&&et.setValue(D,"logDepthBufFC",2/(Math.log(ze.far+1)/Math.LN2)),(Ae.isMeshPhongMaterial||Ae.isMeshToonMaterial||Ae.isMeshLambertMaterial||Ae.isMeshBasicMaterial||Ae.isMeshStandardMaterial||Ae.isShaderMaterial)&&et.setValue(D,"isOrthographic",ze.isOrthographicCamera===!0),O!==ze&&(O=ze,$n=!0,Ka=!0)}if(Be.needsLights&&(Vi.state.directionalShadowMap.length>0&&et.setValue(D,"directionalShadowMap",Vi.state.directionalShadowMap,le),Vi.state.spotShadowMap.length>0&&et.setValue(D,"spotShadowMap",Vi.state.spotShadowMap,le),Vi.state.pointShadowMap.length>0&&et.setValue(D,"pointShadowMap",Vi.state.pointShadowMap,le)),Ce.isSkinnedMesh){et.setOptional(D,Ce,"bindMatrix"),et.setOptional(D,Ce,"bindMatrixInverse");let Dt=Ce.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),et.setValue(D,"boneTexture",Dt.boneTexture,le))}Ce.isBatchedMesh&&(et.setOptional(D,Ce,"batchingTexture"),et.setValue(D,"batchingTexture",Ce._matricesTexture,le),et.setOptional(D,Ce,"batchingIdTexture"),et.setValue(D,"batchingIdTexture",Ce._indirectTexture,le),et.setOptional(D,Ce,"batchingColorTexture"),Ce._colorsTexture!==null&&et.setValue(D,"batchingColorTexture",Ce._colorsTexture,le));let $a=ut.morphAttributes;$a.position===void 0&&$a.normal===void 0&&$a.color===void 0||ln.update(Ce,ut,ki),($n||Be.receiveShadow!==Ce.receiveShadow)&&(Be.receiveShadow=Ce.receiveShadow,et.setValue(D,"receiveShadow",Ce.receiveShadow)),(Ae.isMeshStandardMaterial||Ae.isMeshLambertMaterial||Ae.isMeshPhongMaterial)&&Ae.envMap===null&&Qe.environment!==null&&(Si.envMapIntensity.value=Qe.environmentIntensity),Si.dfgLUT!==void 0&&(Si.dfgLUT.value=(oi===null&&(oi=new Bs(Zp,16,16,jn,ai),oi.name="DFG_LUT",oi.minFilter=xt,oi.magFilter=xt,oi.wrapS=Pi,oi.wrapT=Pi,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi)),$n&&(et.setValue(D,"toneMappingExposure",R.toneMappingExposure),Be.needsLights&&(Gt=Ka,(Kt=Si).ambientLightColor.needsUpdate=Gt,Kt.lightProbe.needsUpdate=Gt,Kt.directionalLights.needsUpdate=Gt,Kt.directionalLightShadows.needsUpdate=Gt,Kt.pointLights.needsUpdate=Gt,Kt.pointLightShadows.needsUpdate=Gt,Kt.spotLights.needsUpdate=Gt,Kt.spotLightShadows.needsUpdate=Gt,Kt.rectAreaLights.needsUpdate=Gt,Kt.hemisphereLights.needsUpdate=Gt),Bt&&Ae.fog===!0&&Pe.refreshFogUniforms(Si,Bt),Pe.refreshMaterialUniforms(Si,Ae,K,he,S.state.transmissionRenderTarget[ze.id]),Yn.upload(D,Sc(Be),Si,le));var Kt,Gt;if(Ae.isShaderMaterial&&Ae.uniformsNeedUpdate===!0&&(Yn.upload(D,Sc(Be),Si,le),Ae.uniformsNeedUpdate=!1),Ae.isSpriteMaterial&&et.setValue(D,"center",Ce.center),et.setValue(D,"modelViewMatrix",Ce.modelViewMatrix),et.setValue(D,"normalMatrix",Ce.normalMatrix),et.setValue(D,"modelMatrix",Ce.matrixWorld),Ae.isShaderMaterial||Ae.isRawShaderMaterial){let Dt=Ae.uniformsGroups;for(let Qa=0,Pu=Dt.length;Qa<Pu;Qa++){let Ac=Dt[Qa];ci.update(Ac,ki),ci.bind(Ac,ki)}}return ki})(E,H,q,Q,J);$.setMaterial(Q,de);let ve=q.index,we=1;if(Q.wireframe===!0){if(ve=Xe.getWireframeAttribute(q),ve===void 0)return;we=2}let Ge=q.drawRange,ke=q.attributes.position,Se=Ge.start*we,We=(Ge.start+Ge.count)*we;oe!==null&&(Se=Math.max(Se,oe.start*we),We=Math.min(We,(oe.start+oe.count)*we)),ve!==null?(Se=Math.max(Se,0),We=Math.min(We,ve.count)):ke!=null&&(Se=Math.max(Se,0),We=Math.min(We,ke.count));let at=We-Se;if(at<0||at===1/0)return;let rt;it.setup(J,Q,_e,q,ve);let $e=Bi;if(ve!==null&&(rt=Fe.get(ve),$e=Mt,$e.setIndex(rt)),J.isMesh)Q.wireframe===!0?($.setLineWidth(Q.wireframeLinewidth*Z()),$e.setMode(D.LINES)):$e.setMode(D.TRIANGLES);else if(J.isLine){let ze=Q.linewidth;ze===void 0&&(ze=1),$.setLineWidth(ze*Z()),J.isLineSegments?$e.setMode(D.LINES):J.isLineLoop?$e.setMode(D.LINE_LOOP):$e.setMode(D.LINE_STRIP)}else J.isPoints?$e.setMode(D.POINTS):J.isSprite&&$e.setMode(D.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)hr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$e.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(X.get("WEBGL_multi_draw"))$e.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let ze=J._multiDrawStarts,Qe=J._multiDrawCounts,ut=J._multiDrawCount,Ae=ve?Fe.get(ve).bytesPerElement:1,Ce=te.get(Q).currentProgram.getUniforms();for(let Bt=0;Bt<ut;Bt++)Ce.setValue(D,"_gl_DrawID",Bt),$e.render(ze[Bt]/Ae,Qe[Bt])}else if(J.isInstancedMesh)$e.renderInstances(Se,at,J.count);else if(q.isInstancedBufferGeometry){let ze=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Qe=Math.min(q.instanceCount,ze);$e.renderInstances(Se,at,Qe)}else $e.render(Se,at)},this.compile=function(E,H,q=null){q===null&&(q=E),S=ct.get(q),S.init(H),P.push(S),q.traverseVisible(function(J){J.isLight&&J.layers.test(H.layers)&&(S.pushLight(J),J.castShadow&&S.pushShadow(J))}),E!==q&&E.traverseVisible(function(J){J.isLight&&J.layers.test(H.layers)&&(S.pushLight(J),J.castShadow&&S.pushShadow(J))}),S.setupLights();let Q=new Set;return E.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let oe=J.material;if(oe)if(Array.isArray(oe))for(let de=0;de<oe.length;de++){let _e=oe[de];gc(_e,q,J),Q.add(_e)}else gc(oe,q,J),Q.add(oe)}),S=P.pop(),Q},this.compileAsync=function(E,H,q=null){let Q=this.compile(E,H,q);return new Promise(J=>{function oe(){Q.forEach(function(de){te.get(de).currentProgram.isReady()&&Q.delete(de)}),Q.size!==0?setTimeout(oe,10):J(E)}X.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let qa=null;function _c(){Gi.stop()}function vc(){Gi.start()}let Gi=new yu;function Ya(E,H,q,Q){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)S.pushLight(E),E.castShadow&&S.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||M.intersectsSprite(E)){Q&&L.setFromMatrixPosition(E.matrixWorld).applyMatrix4(x);let oe=Ve.update(E),de=E.material;de.visible&&T.push(E,oe,de,q,L.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||M.intersectsObject(E))){let oe=Ve.update(E),de=E.material;if(Q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),L.copy(E.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),L.copy(oe.boundingSphere.center)),L.applyMatrix4(E.matrixWorld).applyMatrix4(x)),Array.isArray(de)){let _e=oe.groups;for(let ve=0,we=_e.length;ve<we;ve++){let Ge=_e[ve],ke=de[Ge.materialIndex];ke&&ke.visible&&T.push(E,oe,ke,q,L.z,Ge)}}else de.visible&&T.push(E,oe,de,q,L.z,null)}}let J=E.children;for(let oe=0,de=J.length;oe<de;oe++)Ya(J[oe],H,q,Q)}function xc(E,H,q,Q){let{opaque:J,transmissive:oe,transparent:de}=E;S.setupLightsView(q),F===!0&&me.setGlobalState(R.clippingPlanes,q),Q&&$.viewport(k.copy(Q)),J.length>0&&Kr(J,H,q),oe.length>0&&Kr(oe,H,q),de.length>0&&Kr(de,H,q),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function yc(E,H,q,Q){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[Q.id]===void 0){let ke=X.has("EXT_color_buffer_half_float")||X.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[Q.id]=new Ct(1,1,{generateMipmaps:!0,type:ke?ai:Pt,minFilter:en,samples:Math.max(4,ee.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace})}let J=S.state.transmissionRenderTarget[Q.id],oe=Q.viewport||k;J.setSize(oe.z*R.transmissionResolutionScale,oe.w*R.transmissionResolutionScale);let de=R.getRenderTarget(),_e=R.getActiveCubeFace(),ve=R.getActiveMipmapLevel();R.setRenderTarget(J),R.getClearColor(ge),ue=R.getClearAlpha(),ue<1&&R.setClearColor(16777215,.5),R.clear(),Y&&Oe.render(q);let we=R.toneMapping;R.toneMapping=qt;let Ge=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),S.setupLightsView(Q),F===!0&&me.setGlobalState(R.clippingPlanes,Q),Kr(E,q,Q),le.updateMultisampleRenderTarget(J),le.updateRenderTargetMipmap(J),X.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Se=0,We=H.length;Se<We;Se++){let at=H[Se],{object:rt,geometry:$e,material:ze,group:Qe}=at;if(ze.side===Ot&&rt.layers.test(Q.layers)){let ut=ze.side;ze.side=Tt,ze.needsUpdate=!0,Mc(rt,q,Q,$e,ze,Qe),ze.side=ut,ze.needsUpdate=!0,ke=!0}}ke===!0&&(le.updateMultisampleRenderTarget(J),le.updateRenderTargetMipmap(J))}R.setRenderTarget(de,_e,ve),R.setClearColor(ge,ue),Ge!==void 0&&(Q.viewport=Ge),R.toneMapping=we}function Kr(E,H,q){let Q=H.isScene===!0?H.overrideMaterial:null;for(let J=0,oe=E.length;J<oe;J++){let de=E[J],{object:_e,geometry:ve,group:we}=de,Ge=de.material;Ge.allowOverride===!0&&Q!==null&&(Ge=Q),_e.layers.test(q.layers)&&Mc(_e,H,q,ve,Ge,we)}}function Mc(E,H,q,Q,J,oe){E.onBeforeRender(R,H,q,Q,J,oe),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),J.onBeforeRender(R,H,q,Q,E,oe),J.transparent===!0&&J.side===Ot&&J.forceSinglePass===!1?(J.side=Tt,J.needsUpdate=!0,R.renderBufferDirect(q,H,Q,J,E,oe),J.side=Vn,J.needsUpdate=!0,R.renderBufferDirect(q,H,Q,J,E,oe),J.side=Ot):R.renderBufferDirect(q,H,Q,J,E,oe),E.onAfterRender(R,H,q,Q,J,oe)}function $r(E,H,q){H.isScene!==!0&&(H=N);let Q=te.get(E),J=S.state.lights,oe=S.state.shadowsArray,de=J.state.version,_e=fe.getParameters(E,J.state,oe,H,q),ve=fe.getProgramCacheKey(_e),we=Q.programs;Q.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?H.environment:null,Q.fog=H.fog;let Ge=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;Q.envMap=Te.get(E.envMap||Q.environment,Ge),Q.envMapRotation=Q.environment!==null&&E.envMap===null?H.environmentRotation:E.envMapRotation,we===void 0&&(E.addEventListener("dispose",fc),we=new Map,Q.programs=we);let ke=we.get(ve);if(ke!==void 0){if(Q.currentProgram===ke&&Q.lightsStateVersion===de)return bc(E,_e),ke}else _e.uniforms=fe.getUniforms(E),E.onBeforeCompile(_e,R),ke=fe.acquireProgram(_e,ve),we.set(ve,ke),Q.uniforms=_e.uniforms;let Se=Q.uniforms;return(E.isShaderMaterial||E.isRawShaderMaterial)&&E.clipping!==!0||(Se.clippingPlanes=me.uniform),bc(E,_e),Q.needsLights=(function(We){return We.isMeshLambertMaterial||We.isMeshToonMaterial||We.isMeshPhongMaterial||We.isMeshStandardMaterial||We.isShadowMaterial||We.isShaderMaterial&&We.lights===!0})(E),Q.lightsStateVersion=de,Q.needsLights&&(Se.ambientLightColor.value=J.state.ambient,Se.lightProbe.value=J.state.probe,Se.directionalLights.value=J.state.directional,Se.directionalLightShadows.value=J.state.directionalShadow,Se.spotLights.value=J.state.spot,Se.spotLightShadows.value=J.state.spotShadow,Se.rectAreaLights.value=J.state.rectArea,Se.ltc_1.value=J.state.rectAreaLTC1,Se.ltc_2.value=J.state.rectAreaLTC2,Se.pointLights.value=J.state.point,Se.pointLightShadows.value=J.state.pointShadow,Se.hemisphereLights.value=J.state.hemi,Se.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Se.spotLightMatrix.value=J.state.spotLightMatrix,Se.spotLightMap.value=J.state.spotLightMap,Se.pointShadowMatrix.value=J.state.pointShadowMatrix),Q.currentProgram=ke,Q.uniformsList=null,ke}function Sc(E){if(E.uniformsList===null){let H=E.currentProgram.getUniforms();E.uniformsList=Yn.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function bc(E,H){let q=te.get(E);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.batchingColor=H.batchingColor,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}Gi.setAnimationLoop(function(E){qa&&qa(E)}),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(E){qa=E,nt.setAnimationLoop(E),E===null?Gi.stop():Gi.start()},nt.addEventListener("sessionstart",_c),nt.addEventListener("sessionend",vc),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0)return void be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(G===!0)return;let q=nt.enabled===!0&&nt.isPresenting===!0,Q=U!==null&&(V===null||q)&&U.begin(R,V);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),nt.enabled!==!0||nt.isPresenting!==!0||U!==null&&U.isCompositing()!==!1||(nt.cameraAutoUpdate===!0&&nt.updateCamera(H),H=nt.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,H,V),S=ct.get(E,P.length),S.init(H),P.push(S),x.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),M.setFromProjectionMatrix(x,vi,H.reversedDepth),I=this.localClippingEnabled,F=me.init(this.clippingPlanes,I),T=qe.get(E,w.length),T.init(),w.push(T),nt.enabled===!0&&nt.isPresenting===!0){let oe=R.xr.getDepthSensingMesh();oe!==null&&Ya(oe,H,-1/0,R.sortObjects)}Ya(E,H,0,R.sortObjects),T.finish(),R.sortObjects===!0&&T.sort(se,ae),Y=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Y&&Oe.addToRenderList(T,E),this.info.render.frame++,F===!0&&me.beginShadows();let J=S.state.shadowsArray;if(De.render(J,E,H),F===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Q&&U.hasRenderPass())===!1){let oe=T.opaque,de=T.transmissive;if(S.setupLights(),H.isArrayCamera){let _e=H.cameras;if(de.length>0)for(let ve=0,we=_e.length;ve<we;ve++)yc(oe,de,E,_e[ve]);Y&&Oe.render(E);for(let ve=0,we=_e.length;ve<we;ve++){let Ge=_e[ve];xc(T,E,Ge,Ge.viewport)}}else de.length>0&&yc(oe,de,E,H),Y&&Oe.render(E),xc(T,E,H)}V!==null&&B===0&&(le.updateMultisampleRenderTarget(V),le.updateRenderTargetMipmap(V)),Q&&U.end(R),E.isScene===!0&&E.onAfterRender(R,E,H),it.resetDefaultState(),z=-1,O=null,P.pop(),P.length>0?(S=P[P.length-1],F===!0&&me.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,w.pop(),T=w.length>0?w[w.length-1]:null},this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(E,H,q){let Q=te.get(E);Q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),te.get(E.texture).__webglTexture=H,te.get(E.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:q,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,H){let q=te.get(E);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0};let wu=D.createFramebuffer();this.setRenderTarget=function(E,H=0,q=0){V=E,W=H,B=q;let Q=null,J=!1,oe=!1;if(E){let de=te.get(E);if(de.__useDefaultFramebuffer!==void 0)return $.bindFramebuffer(D.FRAMEBUFFER,de.__webglFramebuffer),k.copy(E.viewport),j.copy(E.scissor),re=E.scissorTest,$.viewport(k),$.scissor(j),$.setScissorTest(re),void(z=-1);if(de.__webglFramebuffer===void 0)le.setupRenderTarget(E);else if(de.__hasExternalTextures)le.rebindTextures(E,te.get(E.texture).__webglTexture,te.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let we=E.depthTexture;if(de.__boundDepthTexture!==we){if(we!==null&&te.has(we)&&(E.width!==we.image.width||E.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(E)}}let _e=E.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(oe=!0);let ve=te.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Q=Array.isArray(ve[H])?ve[H][q]:ve[H],J=!0):Q=E.samples>0&&le.useMultisampledRTT(E)===!1?te.get(E).__webglMultisampledFramebuffer:Array.isArray(ve)?ve[q]:ve,k.copy(E.viewport),j.copy(E.scissor),re=E.scissorTest}else k.copy(xe).multiplyScalar(K).floor(),j.copy(Re).multiplyScalar(K).floor(),re=b;if(q!==0&&(Q=wu),$.bindFramebuffer(D.FRAMEBUFFER,Q)&&$.drawBuffers(E,Q),$.viewport(k),$.scissor(j),$.setScissorTest(re),J){let de=te.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+H,de.__webglTexture,q)}else if(oe){let de=H;for(let _e=0;_e<E.textures.length;_e++){let ve=te.get(E.textures[_e]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+_e,ve.__webglTexture,q,de)}}else if(E!==null&&q!==0){let de=te.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,de.__webglTexture,q)}z=-1},this.readRenderTargetPixels=function(E,H,q,Q,J,oe,de,_e=0){if(!E||!E.isWebGLRenderTarget)return void be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&de!==void 0&&(ve=ve[de]),ve){$.bindFramebuffer(D.FRAMEBUFFER,ve);try{let we=E.textures[_e],Ge=we.format,ke=we.type;if(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_e),!ee.textureFormatReadable(Ge))return void be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(ke))return void be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");H>=0&&H<=E.width-Q&&q>=0&&q<=E.height-J&&D.readPixels(H,q,Q,J,Ze.convert(Ge),Ze.convert(ke),oe)}finally{let we=V!==null?te.get(V).__webglFramebuffer:null;$.bindFramebuffer(D.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(E,H,q,Q,J,oe,de,_e=0){if(!E||!E.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&de!==void 0&&(ve=ve[de]),ve){if(H>=0&&H<=E.width-Q&&q>=0&&q<=E.height-J){$.bindFramebuffer(D.FRAMEBUFFER,ve);let we=E.textures[_e],Ge=we.format,ke=we.type;if(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_e),!ee.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Se=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Se),D.bufferData(D.PIXEL_PACK_BUFFER,oe.byteLength,D.STREAM_READ),D.readPixels(H,q,Q,J,Ze.convert(Ge),Ze.convert(ke),0);let We=V!==null?te.get(V).__webglFramebuffer:null;$.bindFramebuffer(D.FRAMEBUFFER,We);let at=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Wh(D,at,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Se),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,oe),D.deleteBuffer(Se),D.deleteSync(at),oe}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,H=null,q=0){let Q=Math.pow(2,-q),J=Math.floor(E.image.width*Q),oe=Math.floor(E.image.height*Q),de=H!==null?H.x:0,_e=H!==null?H.y:0;le.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,de,_e,J,oe),$.unbindTexture()};let Au=D.createFramebuffer(),Cu=D.createFramebuffer();this.copyTextureToTexture=function(E,H,q=null,Q=null,J=0,oe=0){let de,_e,ve,we,Ge,ke,Se,We,at,rt=E.isCompressedTexture?E.mipmaps[oe]:E.image;if(q!==null)de=q.max.x-q.min.x,_e=q.max.y-q.min.y,ve=q.isBox3?q.max.z-q.min.z:1,we=q.min.x,Ge=q.min.y,ke=q.isBox3?q.min.z:0;else{let Jt=Math.pow(2,-J);de=Math.floor(rt.width*Jt),_e=Math.floor(rt.height*Jt),ve=E.isDataArrayTexture?rt.depth:E.isData3DTexture?Math.floor(rt.depth*Jt):1,we=0,Ge=0,ke=0}Q!==null?(Se=Q.x,We=Q.y,at=Q.z):(Se=0,We=0,at=0);let $e=Ze.convert(H.format),ze=Ze.convert(H.type),Qe;H.isData3DTexture?(le.setTexture3D(H,0),Qe=D.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(le.setTexture2DArray(H,0),Qe=D.TEXTURE_2D_ARRAY):(le.setTexture2D(H,0),Qe=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,H.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,H.unpackAlignment);let ut=D.getParameter(D.UNPACK_ROW_LENGTH),Ae=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ce=D.getParameter(D.UNPACK_SKIP_PIXELS),Bt=D.getParameter(D.UNPACK_SKIP_ROWS),Za=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,rt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,rt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,we),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ge),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ke);let Qr=E.isDataArrayTexture||E.isData3DTexture,Kn=H.isDataArrayTexture||H.isData3DTexture;if(E.isDepthTexture){let Jt=te.get(E),cn=te.get(H),hi=te.get(Jt.__renderTarget),Ja=te.get(cn.__renderTarget);$.bindFramebuffer(D.READ_FRAMEBUFFER,hi.__webglFramebuffer),$.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ja.__webglFramebuffer);for(let hn=0;hn<ve;hn++)Qr&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,te.get(E).__webglTexture,J,ke+hn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,te.get(H).__webglTexture,oe,at+hn)),D.blitFramebuffer(we,Ge,de,_e,Se,We,de,_e,D.DEPTH_BUFFER_BIT,D.NEAREST);$.bindFramebuffer(D.READ_FRAMEBUFFER,null),$.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(J!==0||E.isRenderTargetTexture||te.has(E)){let Jt=te.get(E),cn=te.get(H);$.bindFramebuffer(D.READ_FRAMEBUFFER,Au),$.bindFramebuffer(D.DRAW_FRAMEBUFFER,Cu);for(let hi=0;hi<ve;hi++)Qr?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Jt.__webglTexture,J,ke+hi):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Jt.__webglTexture,J),Kn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,cn.__webglTexture,oe,at+hi):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,cn.__webglTexture,oe),J!==0?D.blitFramebuffer(we,Ge,de,_e,Se,We,de,_e,D.COLOR_BUFFER_BIT,D.NEAREST):Kn?D.copyTexSubImage3D(Qe,oe,Se,We,at+hi,we,Ge,de,_e):D.copyTexSubImage2D(Qe,oe,Se,We,we,Ge,de,_e);$.bindFramebuffer(D.READ_FRAMEBUFFER,null),$.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Kn?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Qe,oe,Se,We,at,de,_e,ve,$e,ze,rt.data):H.isCompressedArrayTexture?D.compressedTexSubImage3D(Qe,oe,Se,We,at,de,_e,ve,$e,rt.data):D.texSubImage3D(Qe,oe,Se,We,at,de,_e,ve,$e,ze,rt):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,oe,Se,We,de,_e,$e,ze,rt.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,oe,Se,We,rt.width,rt.height,$e,rt.data):D.texSubImage2D(D.TEXTURE_2D,oe,Se,We,de,_e,$e,ze,rt);D.pixelStorei(D.UNPACK_ROW_LENGTH,ut),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ae),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ce),D.pixelStorei(D.UNPACK_SKIP_ROWS,Bt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Za),oe===0&&H.generateMipmaps&&D.generateMipmap(Qe),$.unbindTexture()},this.initRenderTarget=function(E){te.get(E).__webglFramebuffer===void 0&&le.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?le.setTextureCube(E,0):E.isData3DTexture?le.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?le.setTexture2DArray(E,0):le.setTexture2D(E,0),$.unbindTexture()},this.resetState=function(){W=0,B=0,V=null,$.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}};var Jr=document.querySelector("#webglCanvas"),Eu=document.querySelector("#spatialScroll"),Kp=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Oi=window.innerWidth<768;if(Jr&&Eu&&!Kp)try{let B=function(){let O=Eu.getBoundingClientRect(),k=Math.max(1,O.height-window.innerHeight);P=Lt.clamp(-O.top/k,0,1);let j=Math.min(window.innerHeight,O.bottom)-Math.max(0,O.top);R=Lt.clamp(j/Math.min(window.innerHeight,O.height),0,1),Jr.classList.toggle("spatial-active",R>.08)},V=function(){G=requestAnimationFrame(V);let O=W.getElapsedTime();U=Lt.lerp(U,P,Oi?.1:.055);let j=12-U*51,re=Math.sin(U*Math.PI*4)*1.25+w.x*(Oi?0:.75),ge=Math.cos(U*Math.PI*2)*.22+w.y*(Oi?0:.42);t.position.x=Lt.lerp(t.position.x,re,.055),t.position.y=Lt.lerp(t.position.y,ge,.055),t.position.z=Lt.lerp(t.position.z,j,.065),u.position.z=O*.22%8,u.rotation.z=Math.sin(O*.08)*.025,v.children.forEach((ue,pe)=>{ue.rotation.x+=.0015+pe*25e-5,ue.rotation.y+=.002+pe*2e-4}),y.forEach((ue,pe)=>{let he=t.position.z-ue.position.z,K=1-Lt.smoothstep(Math.abs(he-7),1.5,10),ae=he<2.3?0:(.08+K*.34)*R;ue.material.opacity=Lt.lerp(ue.material.opacity,ae,.075),ue.rotation.x=Lt.lerp(ue.rotation.x,K>.35?-.05:-1.18,.06),ue.position.x=Lt.lerp(ue.position.x,K>.35?pe%2?-1.5:1.5:ue.userData.baseX,.055);let xe=.88+K*.2;ue.scale.setScalar(Lt.lerp(ue.scale.x,xe,.06))}),r.render(e,t)},z=function(){t.aspect=window.innerWidth/window.innerHeight,t.fov=window.innerWidth<768?64:50,t.updateProjectionMatrix(),r.setPixelRatio(Math.min(window.devicePixelRatio||1,window.innerWidth<768?1.15:1.6)),r.setSize(window.innerWidth,window.innerHeight,!1),B()},r=new Wa({canvas:Jr,alpha:!0,antialias:!Oi,powerPreference:"high-performance"});r.setPixelRatio(Math.min(window.devicePixelRatio||1,Oi?1.15:1.6)),r.setSize(window.innerWidth,window.innerHeight,!1),r.outputColorSpace=gt,r.setClearColor(527122,0);let e=new mr;e.fog=new pr(527122,11,48);let t=new dt(Oi?64:50,window.innerWidth/window.innerHeight,.1,120);t.position.set(0,0,12),e.add(new Br(16777215,9414845,1.7));let i=new zr(11460863,16,36,2);i.position.set(5,6,9),e.add(i);let n=Oi?360:760,s=new Float32Array(n*3),a=new Float32Array(n*3),o=new Ee(11460863),c=new Ee(16777215);for(let O=0;O<n;O+=1){s[O*3]=(Math.random()-.5)*28,s[O*3+1]=(Math.random()-.5)*22,s[O*3+2]=14-Math.random()*82;let k=O%4===0?c:o;a[O*3]=k.r,a[O*3+1]=k.g,a[O*3+2]=k.b}let l=new Ye;l.setAttribute("position",new vt(s,3)),l.setAttribute("color",new vt(a,3));let h=new Ln({size:Oi?.055:.07,transparent:!0,opacity:.6,vertexColors:!0,sizeAttenuation:!0,depthWrite:!1}),u=new xr(l,h);e.add(u);let p=new Un([new A(0,-3.4,11),new A(-3.4,-2.9,-4),new A(3.2,-3.2,-17),new A(-3.8,-2.7,-30),new A(2.8,-3.1,-45),new A(-1.2,-2.8,-61)],!1,"catmullrom",.5),d=new Ye().setFromPoints(p.getPoints(220)),f=new Ur({color:8375799,transparent:!0,opacity:.42,dashSize:.5,gapSize:.32}),m=new vr(d,f);m.computeLineDistances(),e.add(m);let v=new ii,g=new Dr({color:13233151,transparent:!0,opacity:.24,roughness:.12,metalness:0,transmission:.72,thickness:.7,clearcoat:1,clearcoatRoughness:.12,depthWrite:!1});[{position:[-4.6,3.1,-7],scale:1.15},{position:[4.8,-2.3,-23],scale:.78},{position:[-4.3,2.2,-39],scale:.94},{position:[3.6,2.8,-54],scale:.66}].forEach((O,k)=>{let j=k%2?new On(O.scale,1):new Fn(O.scale,1),re=new pt(j,g.clone());re.position.set(...O.position),re.rotation.set(k*.7,k*.4,k*.3),v.add(re)}),e.add(v);let _=new ii,y=[],T=["assets/images/hainan-sunset.webp","assets/images/ui-food-home.webp","assets/images/theatre-stage.webp","assets/images/hero-wave.webp"],S=new Fr;T.forEach((O,k)=>{let j=new Ji({transparent:!0,opacity:0,side:Ot,depthWrite:!1}),re=new pt(new yi(4.3,3),j);re.position.set(k%2===0?-2.7:2.7,-.2+k%2*.8,-8-k*13),re.rotation.x=-1.18,re.rotation.z=(k%2?1:-1)*.07,re.userData.baseX=re.position.x,re.userData.index=k,_.add(re),y.push(re),S.load(O,ge=>{ge.colorSpace=gt,j.map=ge,j.needsUpdate=!0;let ue=ge.image,pe=ue.width/ue.height,he=4.6,K=3.3,se=pe>=he/K?he:K*pe,ae=pe>=he/K?he/pe:K;re.geometry.dispose(),re.geometry=new yi(se,ae)})}),e.add(_);let w=new ne,P=0,U=0,R=0,G=0,W=new Vr;window.addEventListener("scroll",B,{passive:!0}),window.addEventListener("resize",z),window.addEventListener("pointermove",O=>{w.x=O.clientX/window.innerWidth*2-1,w.y=-(O.clientY/window.innerHeight*2-1)},{passive:!0}),document.addEventListener("visibilitychange",()=>{document.hidden?cancelAnimationFrame(G):V()}),Jr.addEventListener("webglcontextlost",O=>O.preventDefault()),B(),V()}catch{Jr.classList.add("webgl-unavailable")}})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
