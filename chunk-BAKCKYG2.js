import{a as tt,b as et,d as nt,e as ot,g as it,h as at}from"./chunk-7VRA7NH3.js";import{a as Y,b as Z}from"./chunk-QC7OOFXN.js";import{a as K}from"./chunk-MAKOVUIL.js";import{b as X}from"./chunk-S3J4NSG4.js";import"./chunk-PE3AIABI.js";import{a as rt,b as ct,c as dt,d as lt,e as mt}from"./chunk-JOWPCXKS.js";import{b as A}from"./chunk-2ZE3UTWT.js";import"./chunk-AKCFMZTD.js";import{b as N,d as f,f as V,g as z,h as D,j as q,k as $,l as G,m as H,n as L,r as B,s as U,u as J}from"./chunk-33HZCSPU.js";import{b as k,d as T,e as R}from"./chunk-LVI2TU4A.js";import{o as Q,q as W}from"./chunk-UKCT2NNU.js";import"./chunk-AESYL7IM.js";import"./chunk-I7KWM6MY.js";import{i as F,k as j}from"./chunk-IQAKLUFA.js";import{Ab as o,Bb as n,Cb as l,Gb as v,Jb as b,Lb as m,Ob as u,Pb as E,Va as P,Vb as i,Wb as _,Xb as g,Ya as a,Za as s,cc as I,la as O,ob as x,qb as w,ua as h,va as M,vb as C,yb as S,zb as y}from"./chunk-BEZRA2BD.js";var ut=(e,r)=>r.Id;function _t(e,r){if(e&1&&(o(0,"span",16),i(1),n(),o(2,"span",17)(3,"del"),i(4),n(),i(5,"\u20AC"),n()),e&2){let t=m(2);a(),g("",t.producto.Precio_rebajado_euros,"\u20AC "),a(3),_(t.producto.Precio_euros)}}function gt(e,r){if(e&1&&(o(0,"span",16),i(1),n()),e&2){let t=m(2);a(),g("",t.producto.Precio_euros,"\u20AC")}}function xt(e,r){if(e&1){let t=v();o(0,"div",1)(1,"div",5)(2,"mat-card",6),l(3,"img",7),n()(),o(4,"div",5)(5,"h1",8),i(6),n(),x(7,_t,6,2)(8,gt,2,1),l(9,"br")(10,"br"),o(11,"form",9)(12,"label",10),i(13,"Cantidad:"),n(),l(14,"input",11)(15,"br"),o(16,"button",12),b("click",function(){h(t);let d=m();return M(d.addtocart(d.producto))}),i(17,"Agregar al carrito"),n(),l(18,"br")(19,"br"),n(),o(20,"button",13),i(21,"Finalizar compra"),n(),l(22,"br")(23,"br"),o(24,"mat-accordion")(25,"mat-expansion-panel")(26,"mat-expansion-panel-header")(27,"mat-panel-title"),i(28,"Informaci\xF3n del producto"),n()(),o(29,"p",14),i(30),n()(),l(31,"br"),o(32,"mat-expansion-panel")(33,"mat-expansion-panel-header")(34,"mat-panel-title"),i(35,"Detalles t\xE9cnicos"),n()(),o(36,"p",15),i(37),n()()()()()}if(e&2){let t=m();a(3),u("src",t.endPointFile+t.producto.Imagen[0].Ruta_archivo,P),u("alt",t.producto.Imagen[0].Alt),a(3),g(" ",t.producto.Nombre,""),a(),C(7,t.producto.Precio_rebajado_euros!==null?7:8),a(4),w("formGroup",t.addtocartForm),a(3),u("value",t.quantity||1),a(16),_(t.producto.Descripcion),a(7),_(t.producto.Descripcion_corta)}}function Ct(e,r){e&1&&(o(0,"span"),i(1,"El producto al que trata de acceder no existe."),n())}function ft(e,r){if(e&1&&(o(0,"span",16),i(1),n(),o(2,"span",17)(3,"del"),i(4),n(),i(5,"\u20AC"),n()),e&2){let t=m().$implicit;a(),g("",t.Precio_rebajado_euros,"\u20AC "),a(3),_(t.Precio_euros)}}function ht(e,r){if(e&1&&(o(0,"span",16),i(1),n()),e&2){let t=m().$implicit;a(),g("",t.Precio_euros,"\u20AC")}}function Mt(e,r){if(e&1){let t=v();o(0,"mat-card",18),l(1,"img",7),o(2,"mat-card-header")(3,"mat-card-title")(4,"a",19),i(5),n()(),o(6,"mat-card-subtitle"),x(7,ft,6,2)(8,ht,2,1),n()(),o(9,"button",20),b("click",function(){let d=h(t).$implicit,p=m(2);return M(p.addtocart(d))}),l(10,"mat-icon",21),o(11,"span"),i(12,"A\xF1adir"),n()()()}if(e&2){let t=r.$implicit,c=m(2);a(),u("src",c.endPointFile+t.Imagen[0].Ruta_archivo,P),u("alt",t.Imagen[0].Alt),a(3),E("routerLink","/producto/",t.Id,""),a(),_(t.Nombre),a(2),C(7,t.Precio_rebajado_euros!==null?7:8)}}function Pt(e,r){if(e&1&&S(0,Mt,13,6,"mat-card",18,ut),e&2){let t=m();y(t.productosRelacionados)}}function vt(e,r){e&1&&(o(0,"span"),i(1,"No hay productos que podamos recomendarte."),n())}var $t=(()=>{let r=class r{constructor(c,d,p,pt,st){this.title=c,this.productService=d,this.activatedRoute=p,this.route=pt,this.carrito=st,this.productosRelacionados=[],this.endPointFile=j.DriveEndpoint,this.addtocartForm=new D({cantidad:new q(1,f.compose([f.required,f.min(1)]))})}ngOnInit(){this.idProducto=this.activatedRoute.snapshot.params.idProducto,this.getProducto()}addtocart(c){this.addtocartForm.valid&&this.carrito.addNewProducto(c,this.addtocartForm.value.cantidad||1)}getProducto(){this.productService.getProducto(this.idProducto).subscribe({next:c=>{this.producto=c,this.title.setTitle(`${this.producto.Nombre} | EasyShop`),this.getProductosRelacionados()},error:c=>{c.status==404?this.route.navigate(["/notfound"]):console.error("Ha ocurrido un error")}})}getProductosRelacionados(){let c={categoria_id:this.producto.Categoria_id,producto_id:this.producto.Id};this.productService.getRelatedProducts(c).subscribe({next:d=>{this.productosRelacionados=d.data},error:d=>{console.error(d)}})}};r.\u0275fac=function(d){return new(d||r)(s(F),s(K),s(k),s(T),s(X))},r.\u0275cmp=O({type:r,selectors:[["app-fichaproducto"]],standalone:!0,features:[I],decls:13,vars:2,consts:[[1,"fichaproducto"],[1,"fichaproducto-container"],[1,"productos-relacionados"],[1,"relacionados-container"],[1,"relacionados-list"],[1,"fichaproducto-col"],[1,"producto-img"],["mat-card-image","",3,"src","alt"],[1,"titulo-producto"],[3,"formGroup"],["for","cantidad",1,"form-label"],["type","number","id","cantidad","min","1","formControlName","cantidad","required","",1,"form-control",3,"value"],["mat-stroked-button","",1,"submit","addtocart",3,"click"],["mat-flat-button","","routerLink","/finalizar-compra",1,"btn-checkout"],[1,"descripcion"],[1,"descripcion_corta"],[1,"precio"],[1,"precio_rebajado"],["appearance","outlined",1,"relacionados-card"],[3,"routerLink"],[1,"btn-addtocart",3,"click"],["aria-label","Icon addtocart","aria-hidden","false","fontIcon","add_shopping_cart",1,"addtocart-icon"]],template:function(d,p){d&1&&(l(0,"app-header"),o(1,"main")(2,"section",0),x(3,xt,38,8,"div",1)(4,Ct,2,0),n(),o(5,"section",2)(6,"div",3)(7,"h2"),i(8,"Productos relacionados"),n(),o(9,"div",4),x(10,Pt,2,0)(11,vt,2,0),n()()()(),l(12,"app-footer")),d&2&&(a(3),C(3,p.producto?3:4),a(7),C(10,p.productosRelacionados.length>0?10:11))},dependencies:[Y,Z,at,tt,ot,it,nt,et,A,W,Q,mt,lt,rt,ct,dt,R,J,$,N,G,V,z,U,B,H,L],styles:[".fichaproducto[_ngcontent-%COMP%]{background-color:var(--lightgray);padding:5rem 10rem}@media only screen and (max-width: 767px){.fichaproducto[_ngcontent-%COMP%]{padding:1rem}}@media only screen and (min-width: 768px) and (max-width: 1023px){.fichaproducto[_ngcontent-%COMP%]{padding:1rem}}.fichaproducto-container[_ngcontent-%COMP%], .relacionados-container[_ngcontent-%COMP%]{background-color:#fff;display:flex;flex-direction:row;gap:2rem;padding:2rem;width:100%}@media only screen and (max-width: 767px){.fichaproducto-container[_ngcontent-%COMP%], .relacionados-container[_ngcontent-%COMP%]{flex-direction:column}}.fichaproducto-col[_ngcontent-%COMP%]{width:50%}@media only screen and (max-width: 767px){.fichaproducto-col[_ngcontent-%COMP%]{width:100%}}.titulo-producto[_ngcontent-%COMP%]{font-weight:700}.precio[_ngcontent-%COMP%]{font-size:var(--lengthMd2);color:var(--darkblue)}.precio_rebajado[_ngcontent-%COMP%]{color:var(--orangered)}.addtocart[_ngcontent-%COMP%]{margin-right:1.5rem}.fichaproducto-col[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{width:6rem}.btn-checkout[_ngcontent-%COMP%]{background-color:var(--darkblue)!important;color:var(--white)!important;width:15rem}.productos-relacionados[_ngcontent-%COMP%]{background-color:var(--lightgray);padding:0 10rem 5rem}@media only screen and (max-width: 767px){.productos-relacionados[_ngcontent-%COMP%]{padding:1rem}}@media only screen and (min-width: 768px) and (max-width: 1023px){.productos-relacionados[_ngcontent-%COMP%]{padding:1rem}}.relacionados-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}@media only screen and (max-width: 767px){.relacionados-container[_ngcontent-%COMP%]{flex-direction:column}}.relacionados-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{width:100%;text-align:center;font-size:var(--lengthMd3);font-weight:700}.relacionados-list[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;gap:2rem}.relacionados-card[_ngcontent-%COMP%]{width:30%}@media only screen and (max-width: 767px){.relacionados-card[_ngcontent-%COMP%]{width:100%}}.relacionados-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{display:flex;justify-content:center}.relacionados-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%], .categoria-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:var(--lengthMd2);margin:0}.relacionados-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:var(--black)}.relacionados-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{font-size:var(--lengthMd1);font-weight:400;color:var(--darkblue);text-align:center}.btn-addtocart[_ngcontent-%COMP%]{text-align:center;display:flex;align-items:center;justify-content:center;gap:.5rem;background-color:var(--darkblue);color:var(--white);border-radius:.5rem;padding:.5rem 0;margin:1rem 3rem;border:none}@media only screen and (min-width: 768px) and (max-width: 1023px){.btn-addtocart[_ngcontent-%COMP%]{margin:1rem 2rem}}.btn-addtocart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:var(--lengthMd1)}.btn-addtocart[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1.5rem}.descripcion[_ngcontent-%COMP%], .descripcion_corta[_ngcontent-%COMP%]{white-space:pre-line}"]});let e=r;return e})();export{$t as FichaproductoComponent};
