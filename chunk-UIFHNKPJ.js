import{a as p,b as o,c,k as u,l as $}from"./chunk-X2X7HICG.js";import{Z as r,aa as a,fa as d,i as h,t as s}from"./chunk-BEZRA2BD.js";var b=(()=>{let i=class i{constructor(e,t){this.http=e,this.headersService=t,this._refresh$=new h,this.endpoint=u.ApiEndpoint}get refresh$(){return this._refresh$}getCategorias(){return this.http.get(`${this.endpoint}/productcategories`,this.headersService.createHeadersGeneric())}getCategoria(e){return this.http.get(`${this.endpoint}/productcategories/${e}`,this.headersService.createHeadersGeneric())}postCategoria(e){return this.http.post(`${this.endpoint}/productcategories`,e,this.headersService.createHeadersAdmin()).pipe(r(()=>{this.refresh$.next()}))}updateCategoria(e,t){return this.http.put(`${this.endpoint}/productcategories/${e}`,t,this.headersService.createHeadersAdmin()).pipe(r(()=>{this.refresh$.next()}))}deleteCategoria(e){return this.http.delete(`${this.endpoint}/productcategories/${e}`,this.headersService.createHeadersAdmin()).pipe(r(()=>{this.refresh$.next()}))}getMarcas(){return this.http.get(`${this.endpoint}/brand`,this.headersService.createHeadersGeneric())}getMarca(e){return this.http.get(`${this.endpoint}/brand/${e}`,this.headersService.createHeadersGeneric()).pipe(s(t=>t.data))}postBrand(e){return this.http.post(`${this.endpoint}/brand`,e,this.headersService.createHeadersAdmin()).pipe(r(()=>{this.refresh$.next()}))}updateBrand(e,t){return this.http.put(`${this.endpoint}/brand/${e}`,t,this.headersService.createHeadersAdmin()).pipe(r(()=>{this.refresh$.next()}))}deleteBrand(e){return this.http.delete(`${this.endpoint}/brand/${e}`,this.headersService.createHeadersAdmin()).pipe(r(()=>{this.refresh$.next()}))}getProductos(){return this.http.get(`${this.endpoint}/product`,this.headersService.createHeadersGeneric())}getProductosPublicados(){return this.http.get(`${this.endpoint}/productospublicados`,this.headersService.createHeadersGeneric())}getProductosUltimasNovedades(){return this.http.get(`${this.endpoint}/novedades`,this.headersService.createHeadersGeneric())}getProductsByCategory(e){return this.http.get(`${this.endpoint}/productsByCategory/${e}`,this.headersService.createHeadersGeneric())}getProductsByBrand(e){return this.http.get(`${this.endpoint}/productsByBrand/${e}`,this.headersService.createHeadersGeneric())}getRelatedProducts(e){return this.http.post(`${this.endpoint}/relatedProducts`,e,this.headersService.createHeadersGeneric())}getProductsByFilter(e){return this.http.post(`${this.endpoint}/filtrarProductos`,e,this.headersService.createHeadersGeneric()).pipe(s(t=>t.result))}getProductosBySearch(e){let t=new o().set("busqueda",e),g=new p({Accept:"application/json","Content-Type":"application/json; charset=utf-8"});return this.http.get(`${this.endpoint}/buscarProductos`,{headers:g,params:t}).pipe(s(m=>m.result))}getProductosByIds(e){return this.http.get(`${this.endpoint}/obtenerProductosId/${e}`,this.headersService.createHeadersGeneric()).pipe(s(t=>t.data))}getProducto(e){return this.http.get(`${this.endpoint}/product/${e}`,this.headersService.createHeadersGeneric()).pipe(s(t=>t.data))}postProducto(e){return this.http.post(`${this.endpoint}/product`,e,this.headersService.createHeadersAdmin()).pipe(r(()=>{this.refresh$.next()}))}updateProducto(e,t){return this.http.put(`${this.endpoint}/product/${e}`,t,this.headersService.createHeadersAdmin()).pipe(r(()=>{this.refresh$.next()}))}deleteProducto(e){return this.http.delete(`${this.endpoint}/product/${e}`,this.headersService.createHeadersAdmin()).pipe(r(()=>{this.refresh$.next()}))}};i.\u0275fac=function(t){return new(t||i)(d(c),d($))},i.\u0275prov=a({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();export{b as a};
