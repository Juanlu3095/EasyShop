import{a,c as d,k as c,l as m}from"./chunk-XXO6A46Z.js";import{Z as s,aa as o,fa as n,i as h,t as p}from"./chunk-BEZRA2BD.js";var g=(()=>{let e=class e{constructor(t,r){this.http=t,this.httpheaders=r,this._refresh$=new h,this.endpoint=c.ApiEndpoint}get refresh$(){return this._refresh$}getNewsletters(){return this.http.get(`${this.endpoint}/newsletters`,this.httpheaders.createHeadersAdmin())}getNewsletter(t){return this.http.get(`${this.endpoint}/newsletters/${t}`,this.httpheaders.createHeadersAdmin()).pipe(p(r=>r.data))}postNewsletter(t){return this.http.post(`${this.endpoint}/newsletters`,t,this.httpheaders.createHeadersGeneric()).pipe(s(()=>{this.refresh$.next()}))}updateNewsletter(t,r){return this.http.put(`${this.endpoint}/newsletters/${t}`,r,this.httpheaders.createHeadersAdmin()).pipe(s(()=>{this.refresh$.next()}))}deleteNewsletter(t){return this.http.delete(`${this.endpoint}/newsletters/${t}`,this.httpheaders.createHeadersAdmin()).pipe(s(()=>{this.refresh$.next()}))}exportNewsletters(){return this.http.get(`${this.endpoint}/exportarnews`,{responseType:"blob",headers:new a({"X-A-T":"getProtectedData"})})}};e.\u0275fac=function(r){return new(r||e)(n(d),n(m))},e.\u0275prov=o({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();export{g as a};
