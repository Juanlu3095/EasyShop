import{c as d,k as p,l as a}from"./chunk-5XYOWQFX.js";import{Z as r,aa as h,fa as s,i as n}from"./chunk-BEZRA2BD.js";var u=(()=>{let t=class t{constructor(e,i){this.http=e,this.headersService=i,this._refresh$=new n,this.endpoint=p.ApiEndpoint}get refresh$(){return this._refresh$}getMetodosenvio(){return this.http.get(`${this.endpoint}/metodosenvio`,this.headersService.createHeadersGeneric())}getMetodoenvio(e){return this.http.get(`${this.endpoint}/metodosenvio/${e}`,this.headersService.createHeadersAdmin())}postMetodoenvio(e){return this.http.post(`${this.endpoint}/metodosenvio`,e,this.headersService.createHeadersAdmin()).pipe(r(()=>{this.refresh$.next()}))}updateMetodoenvio(e,i){return this.http.put(`${this.endpoint}/metodosenvio/${e}`,i,this.headersService.createHeadersAdmin()).pipe(r(()=>{this.refresh$.next()}))}deleteMetodoenvio(e){return this.http.delete(`${this.endpoint}/metodosenvio/${e}`,this.headersService.createHeadersAdmin()).pipe(r(()=>{this.refresh$.next()}))}};t.\u0275fac=function(i){return new(i||t)(s(d),s(a))},t.\u0275prov=h({token:t,factory:t.\u0275fac,providedIn:"root"});let o=t;return o})();export{u as a};
