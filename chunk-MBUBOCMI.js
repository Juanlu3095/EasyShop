import{c as h,k as p,l as d}from"./chunk-5XYOWQFX.js";import{Z as s,aa as a,fa as o,i as n}from"./chunk-BEZRA2BD.js";var v=(()=>{let t=class t{constructor(e,i){this.http=e,this.headersService=i,this._refresh$=new n,this.endpoint=p.ApiEndpoint}get refresh$(){return this._refresh$}getMetodosPago(){return this.http.get(`${this.endpoint}/metodopago`,this.headersService.createHeadersAdmin())}getMetodosPagoDisponibles(){return this.http.get(`${this.endpoint}/pagosdisponibles`,this.headersService.createHeadersGeneric())}getMetodoPago(e){return this.http.get(`${this.endpoint}/metodopago/${e}`,this.headersService.createHeadersAdmin())}getTransferencia(){return this.http.get(`${this.endpoint}/transferencia`,this.headersService.createHeadersGeneric())}updateActivado(e,i){let c={activo:i};return this.http.patch(`${this.endpoint}/switchactivo/${e}`,c,this.headersService.createHeadersAdmin()).pipe(s(()=>{this.refresh$.next()}))}updateMetodopago(e,i){return this.http.put(`${this.endpoint}/metodopago/${e}`,i,this.headersService.createHeadersAdmin()).pipe(s(()=>{this.refresh$.next()}))}};t.\u0275fac=function(i){return new(i||t)(o(h),o(d))},t.\u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{v as a};
