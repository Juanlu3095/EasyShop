import{a as L,b as N,d as V,e as B,g as G,h as J}from"./chunk-7VRA7NH3.js";import{a as K,b as Q}from"./chunk-5V7AZGGS.js";import"./chunk-JI4B56LL.js";import"./chunk-7ITRIRQH.js";import{a as U,b as H}from"./chunk-SF6XMI4F.js";import{a as A}from"./chunk-UIFHNKPJ.js";import{b as $}from"./chunk-S3J4NSG4.js";import"./chunk-PE3AIABI.js";import{b as D}from"./chunk-OB62TPC4.js";import"./chunk-AKCFMZTD.js";import"./chunk-33HZCSPU.js";import{b as k,e as F}from"./chunk-V6CHNUWL.js";import"./chunk-UKCT2NNU.js";import"./chunk-AESYL7IM.js";import"./chunk-I7KWM6MY.js";import{i as T,j,k as R}from"./chunk-X2X7HICG.js";import{Ab as a,Bb as o,Cb as u,Gb as O,Jb as f,Lb as l,Ob as q,Pb as y,Va as M,Vb as s,Wb as w,Xb as m,Ya as r,Za as p,cc as z,dc as E,la as x,ob as _,qb as h,ua as P,va as v,vb as C,yb as S,zb as I}from"./chunk-BEZRA2BD.js";var W=(e,n)=>n.Id,X=()=>[5,10,20,50];function Y(e,n){if(e&1&&(a(0,"span",8),s(1),o(),a(2,"span",9)(3,"del"),s(4),o(),s(5,"\u20AC"),o()),e&2){let i=l().$implicit;r(),m("",i.Precio_rebajado_euros,"\u20AC "),r(3),w(i.Precio_euros)}}function Z(e,n){if(e&1&&(a(0,"span",8),s(1),o()),e&2){let i=l().$implicit;r(),m("",i.Precio_euros,"\u20AC")}}function tt(e,n){if(e&1){let i=O();a(0,"mat-card",3),u(1,"img",4),a(2,"mat-card-header")(3,"mat-card-title")(4,"a",5),s(5),o()(),a(6,"mat-card-subtitle"),_(7,Y,6,2)(8,Z,2,1),o()(),a(9,"button",6),f("click",function(){let d=P(i).$implicit,c=l(2);return v(c.addtocart(d))}),u(10,"mat-icon",7),a(11,"span"),s(12,"A\xF1adir"),o()()()}if(e&2){let i=n.$implicit,t=l(2);r(),q("alt",i.Imagen[0].Alt),h("src",t.getSantizeUrl(t.endPointFile+i.Imagen[0].Ruta_archivo),M),r(3),y("routerLink","/producto/",i.Id,""),r(),m(" ",i.Nombre,""),r(2),C(7,i.Precio_rebajado_euros!==null?7:8)}}function et(e,n){if(e&1&&S(0,tt,13,6,"mat-card",3,W),e&2){let i=l();I(i.productos)}}function nt(e,n){e&1&&(a(0,"h3"),s(1,"No hay productos a mostrar."),o())}var Ct=(()=>{let n=class n{constructor(t,d,c,b,g){this.activatedroute=t,this.title=d,this.productService=c,this.sanitizer=b,this.carrito=g,this.productos=[],this.endPointFile=R.DriveEndpoint,this.paginatedData=[],this.pageSize=10,this.currentPage=0}ngOnInit(){this.busqueda=this.activatedroute.snapshot.params.busqueda,this.title.setTitle(`Resultados de la b\xFAsqueda para \xAB${this.busqueda}\xBB | EasyShop`),this.busqueda?this.productService.getProductosBySearch(this.busqueda).subscribe({next:t=>{this.productos=t,this.paginateData()},error:t=>{console.error(t)}}):console.error("Ha ocurrido un error")}addtocart(t){this.carrito.addNewProducto(t,1)}getSantizeUrl(t){return this.sanitizer.bypassSecurityTrustUrl(t)}paginateData(){let t=this.currentPage*this.pageSize,d=t+this.pageSize;this.paginatedData=this.productos.slice(t,d)}onPageChange(t){this.pageSize=t.pageSize,this.currentPage=t.pageIndex,this.paginateData()}};n.\u0275fac=function(d){return new(d||n)(p(k),p(T),p(A),p(j),p($))},n.\u0275cmp=x({type:n,selectors:[["app-resultadosbusqueda"]],standalone:!0,features:[z],decls:10,vars:6,consts:[[1,"resultados-busqueda"],["aria-label","Select page",3,"page","length","pageSize","pageSizeOptions"],[1,"productos-busqueda"],["appearance","outlined",1,"producto-card"],["mat-card-image","",3,"src","alt"],[3,"routerLink"],[1,"btn-addtocart",3,"click"],["aria-label","Icon addtocart","aria-hidden","false","fontIcon","add_shopping_cart",1,"addtocart-icon"],[1,"precio"],[1,"precio_rebajado"]],template:function(d,c){d&1&&(u(0,"app-header"),a(1,"main")(2,"section",0)(3,"h1"),s(4),o(),a(5,"mat-paginator",1),f("page",function(g){return c.onPageChange(g)}),o(),a(6,"div",2),_(7,et,2,0)(8,nt,2,0),o()()(),u(9,"app-footer")),d&2&&(r(4),m("Resultados de la b\xFAsqueda para: ",c.busqueda,""),r(),h("length",c.productos.length)("pageSize",c.pageSize)("pageSizeOptions",E(5,X)),r(2),C(7,c.productos&&c.productos.length>0?7:8))},dependencies:[U,H,J,L,B,G,V,N,D,Q,K,F],styles:[".resultados-busqueda[_ngcontent-%COMP%]{margin:5rem}.resultados-busqueda[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;font-weight:700}.productos-busqueda[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;gap:2.5rem;margin-top:3rem}.producto-card[_ngcontent-%COMP%]{text-align:center;width:18%}.producto-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{justify-content:center}.producto-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:var(--black)}.producto-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{font-weight:400;color:var(--darkblue)}.precio[_ngcontent-%COMP%]{font-size:var(--lengthMd2);color:var(--darkblue)}.precio_rebajado[_ngcontent-%COMP%]{color:var(--orangered)}.btn-addtocart[_ngcontent-%COMP%]{text-align:center;display:flex;align-items:center;justify-content:center;gap:.5rem;background-color:var(--darkblue);color:var(--white);border-radius:.5rem;padding:.5rem 0;margin:1rem 3rem;border:none}@media only screen and (min-width: 1024px) and (max-width: 1350px){.producto-card[_ngcontent-%COMP%]{width:28%}.btn-addtocart[_ngcontent-%COMP%]{padding:.5rem 0;margin:1rem 2rem}}@media only screen and (min-width: 768px) and (max-width: 1023px){.producto-card[_ngcontent-%COMP%]{width:28%}.btn-addtocart[_ngcontent-%COMP%]{padding:.5rem 0;margin:1rem 2rem}}@media only screen and (max-width: 767px){.resultados-busqueda[_ngcontent-%COMP%]{margin:2rem}.producto-card[_ngcontent-%COMP%]{width:100%}.btn-addtocart[_ngcontent-%COMP%]{padding:.5rem 0;margin:1rem 3rem}}"]});let e=n;return e})();export{Ct as ResultadosbusquedaComponent};
