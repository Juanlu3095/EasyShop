import{c as k,k as C,l as b}from"./chunk-IQAKLUFA.js";import{Ac as I,Ia as g,Oc as x,Z as l,aa as d,fa as p,i as f}from"./chunk-BEZRA2BD.js";var E=(()=>{let i=class i{constructor(e,t){this.http=e,this.httpheaders=t,this._refresh$=new f,this.endpoint=C.ApiEndpoint}get refresh$(){return this._refresh$}loginUser(e){return this.http.post(`${this.endpoint}/userlogin`,e,this.httpheaders.createHeadersGeneric())}registroUser(e){return this.http.post(`${this.endpoint}/registro`,e,this.httpheaders.createHeadersGeneric())}loginAdmin(e){return this.http.post(`${this.endpoint}/adminlogin`,e,this.httpheaders.createHeadersGeneric())}obtenerUser(){return this.http.get(`${this.endpoint}/dataclient`,this.httpheaders.createHeadersClient())}comprobarAdmin(){return this.http.post(`${this.endpoint}/comprobarusuario`,"",this.httpheaders.createHeadersAdmin())}logoutAdmin(){return this.http.post(`${this.endpoint}/cerrarsesion`,{},this.httpheaders.createHeadersAdmin())}updateCliente(e){return this.http.post(`${this.endpoint}/actualizarcliente`,e,this.httpheaders.createHeadersClient()).pipe(l(()=>{this.refresh$.next()}))}logoutCliente(){return this.http.post(`${this.endpoint}/cerrarsesioncliente`,{},this.httpheaders.createHeadersClient())}};i.\u0275fac=function(t){return new(t||i)(p(k),p(b))},i.\u0275prov=d({token:i,factory:i.\u0275fac,providedIn:"root"});let a=i;return a})();var T=(()=>{let i=class i{constructor(e,t){this.document=e,this.platformId=t,this.documentIsAccessible=x(this.platformId)}static getCookieRegExp(e){let t=e.replace(/([\[\]{}()|=;+?,.*^$])/gi,"\\$1");return new RegExp("(?:^"+t+"|;\\s*"+t+")=(.*?)(?:;|$)","g")}static safeDecodeURIComponent(e){try{return decodeURIComponent(e)}catch{return e}}check(e){return this.documentIsAccessible?(e=encodeURIComponent(e),i.getCookieRegExp(e).test(this.document.cookie)):!1}get(e){if(this.documentIsAccessible&&this.check(e)){e=encodeURIComponent(e);let o=i.getCookieRegExp(e).exec(this.document.cookie);return o[1]?i.safeDecodeURIComponent(o[1]):""}else return""}getAll(){if(!this.documentIsAccessible)return{};let e={},t=this.document;return t.cookie&&t.cookie!==""&&t.cookie.split(";").forEach(o=>{let[n,r]=o.split("=");e[i.safeDecodeURIComponent(n.replace(/^ /,""))]=i.safeDecodeURIComponent(r)}),e}set(e,t,o,n,r,h,u,A){if(!this.documentIsAccessible)return;if(typeof o=="number"||o instanceof Date||n||r||h||u){let m={expires:o,path:n,domain:r,secure:h,sameSite:u||"Lax",partitioned:A};this.set(e,t,m);return}let c=encodeURIComponent(e)+"="+encodeURIComponent(t)+";",s=o||{};if(s.expires)if(typeof s.expires=="number"){let m=new Date(new Date().getTime()+s.expires*1e3*60*60*24);c+="expires="+m.toUTCString()+";"}else c+="expires="+s.expires.toUTCString()+";";s.path&&(c+="path="+s.path+";"),s.domain&&(c+="domain="+s.domain+";"),s.secure===!1&&s.sameSite==="None"&&(s.secure=!0,console.warn(`[ngx-cookie-service] Cookie ${e} was forced with secure flag because sameSite=None.More details : https://github.com/stevermeister/ngx-cookie-service/issues/86#issuecomment-597720130`)),s.secure&&(c+="secure;"),s.sameSite||(s.sameSite="Lax"),c+="sameSite="+s.sameSite+";",s.partitioned&&(c+="Partitioned;"),this.document.cookie=c}delete(e,t,o,n,r="Lax"){if(!this.documentIsAccessible)return;let h=new Date("Thu, 01 Jan 1970 00:00:01 GMT");this.set(e,"",{expires:h,path:t,domain:o,secure:n,sameSite:r})}deleteAll(e,t,o,n="Lax"){if(!this.documentIsAccessible)return;let r=this.getAll();for(let h in r)r.hasOwnProperty(h)&&this.delete(h,e,t,o,n)}};i.\u0275fac=function(t){return new(t||i)(p(I),p(g))},i.\u0275prov=d({token:i,factory:i.\u0275fac,providedIn:"root"});let a=i;return a})();export{E as a,T as b};
