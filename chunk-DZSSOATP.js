import{a as pt,b as mt,d as ut,e as gt,g as ft,h as _t}from"./chunk-7VRA7NH3.js";import{a as Ct,b as xt}from"./chunk-5V7AZGGS.js";import{b as ht}from"./chunk-JI4B56LL.js";import"./chunk-7ITRIRQH.js";import{a as lt,b as dt}from"./chunk-OTY4NYX2.js";import{a as nt}from"./chunk-YWZC5PKM.js";import{b as st}from"./chunk-S3J4NSG4.js";import"./chunk-PE3AIABI.js";import{a as Mt}from"./chunk-RD4WVGQA.js";import{b as H}from"./chunk-TDTAES6E.js";import"./chunk-AKCFMZTD.js";import{b as U,f as W,g as q,h as J,j as C,k as K,l as X,m as Y,n as Z,o as tt,p as et,q as ot,t as it,u as rt}from"./chunk-33HZCSPU.js";import{b as R,e as G}from"./chunk-I4WXUBEO.js";import{o as at,q as ct}from"./chunk-UKCT2NNU.js";import"./chunk-AESYL7IM.js";import{a as Q}from"./chunk-4OTIWHWN.js";import"./chunk-I7KWM6MY.js";import{i as B}from"./chunk-B7NLDW3E.js";import{Ab as o,Bb as i,Cb as p,Gb as w,Jb as h,Jc as A,Lb as m,Mc as $,Ob as v,Pb as y,Rb as k,Sb as T,Tb as L,Va as N,Vb as n,Wb as u,Xb as O,Ya as s,Za as _,cc as D,dc as z,gc as V,hc as j,la as F,ob as x,qb as S,ua as g,va as f,vb as M,yb as P,zb as b}from"./chunk-BEZRA2BD.js";var bt=["formFiltro"],I=(e,a)=>a.Id,vt=()=>[5,10,20,50];function St(e,a){if(e&1&&(o(0,"h1"),n(1),V(2,"titlecase"),i()),e&2){let r=m();s(),u(j(2,1,r.categoria))}}function wt(e,a){if(e&1&&(o(0,"h1"),n(1),i()),e&2){let r=m();s(),u(r.marca.Nombre)}}function yt(e,a){e&1&&(o(0,"h1"),n(1,"Todos los productos"),i())}function Ot(e,a){if(e&1&&(o(0,"option",9),n(1),i()),e&2){let r=a.$implicit;v("value",r.Id),s(),u(r.Nombre)}}function It(e,a){if(e&1&&(o(0,"option",9),n(1),i()),e&2){let r=a.$implicit;v("value",r.Id),s(),u(r.Nombre)}}function Et(e,a){if(e&1&&(o(0,"span",22),n(1),i(),o(2,"span",23)(3,"del"),n(4),i(),n(5,"\u20AC"),i()),e&2){let r=m().$implicit;s(),O("",r.Precio_rebajado_euros,"\u20AC "),s(3),u(r.Precio_euros)}}function Ft(e,a){if(e&1&&(o(0,"span",22),n(1),i()),e&2){let r=m().$implicit;s(),O("",r.Precio_euros,"\u20AC")}}function Nt(e,a){if(e&1){let r=w();o(0,"mat-card",17),p(1,"img",18),o(2,"mat-card-header")(3,"mat-card-title")(4,"a",19),n(5),i()(),o(6,"mat-card-subtitle"),x(7,Et,6,2)(8,Ft,2,1),i()(),o(9,"button",20),h("click",function(){let l=g(r).$implicit,c=m(2);return f(c.addtocart(l))}),p(10,"mat-icon",21),o(11,"span"),n(12,"A\xF1adir"),i()()()}if(e&2){let r=a.$implicit,t=m(2);s(),v("src",t.endpointFile+r.Imagen[0].Ruta_archivo,N),y("alt"," ",r.Imagen[0].Alt,""),s(3),y("routerLink","/producto/",r.Id,""),s(),u(r.Nombre),s(2),M(7,r.Precio_rebajado_euros!==null?7:8)}}function kt(e,a){if(e&1&&P(0,Nt,13,7,"mat-card",17,I),e&2){let r=m();b(r.paginatedData)}}function Tt(e,a){e&1&&(o(0,"h3"),n(1,"No hay productos a mostrar."),i())}var oe=(()=>{let a=class a{constructor(t,l,c,d){this.activatedroute=t,this.title=l,this.productService=c,this.carrito=d,this.productos=[],this.endpointFile=Q.DriveEndpoint,this.filtroForm=new J({categoria:new C(NaN),marca:new C(NaN),preciomin:new C(NaN),preciomax:new C(NaN)}),this.paginatedData=[],this.pageSize=10,this.currentPage=0}ngOnInit(){if(this.categoria=this.activatedroute.snapshot.firstChild?.params.categoria,this.marcaId=this.activatedroute.snapshot.firstChild?.params.marca,this.getCategorias(),this.getMarcas(),this.categoria){let t=this.toCamelCaseWithoutSpaces(this.categoria);this.title.setTitle(`${t} | EasyShop`),this.getProductosPorCategoria()}else this.marcaId?(this.getMarca(),this.getProductosPorMarca()):(this.title.setTitle("Todos los productos | EasyShop"),this.getProductos())}toCamelCaseWithoutSpaces(t){return t.toLowerCase().replace(/\s+(\w)|^\w/g,l=>l.toUpperCase()).replace(/\s+/g,"")}paginateData(){let t=this.currentPage*this.pageSize,l=t+this.pageSize;this.paginatedData=this.productos.slice(t,l)}onPageChange(t){this.pageSize=t.pageSize,this.currentPage=t.pageIndex,this.paginateData()}cambiarFiltros(){let t=this.formfiltro.nativeElement.style.display==="none";this.formfiltro.nativeElement.style.display=t?"block":"none"}filtrar(){this.filtroForm.valid&&this.productService.getProductsByFilter(this.filtroForm.value).subscribe({next:t=>{this.categoria="Resultados del filtrado:",this.productos=t,this.paginateData()},error:t=>{console.error(t)}})}getMarca(){this.marcaId&&this.productService.getMarca(this.marcaId).subscribe({next:t=>{this.marca=t,this.title.setTitle(`${this.marca.Nombre} | EasyShop`)},error:t=>{console.error(t)}})}getProductosPorMarca(){this.marcaId&&this.productService.getProductsByBrand(this.marcaId).subscribe({next:t=>{this.productos=t.data,this.paginateData()},error:t=>{console.error(t)}})}getProductosPorCategoria(){this.categoria&&this.productService.getProductsByCategory(this.categoria).subscribe({next:t=>{this.productos=t.data,this.paginateData()},error:t=>{console.error(t)}})}getProductos(){this.productService.getProductosPublicados().subscribe({next:t=>{this.productos=t.data,this.paginateData()},error:t=>{console.error(t)}})}getCategorias(){this.productService.getCategorias().subscribe({next:t=>{this.categorias=t.data},error:t=>{console.error(t)}})}getMarcas(){this.productService.getMarcas().subscribe({next:t=>{this.marcas=t},error:t=>{console.error(t)}})}addtocart(t){this.carrito.addNewProducto(t,1)}};a.\u0275fac=function(l){return new(l||a)(_(R),_(B),_(nt),_(st))},a.\u0275cmp=F({type:a,selectors:[["app-listaproductos"]],viewQuery:function(l,c){if(l&1&&k(bt,5),l&2){let d;T(d=L())&&(c.formfiltro=d.first)}},standalone:!0,features:[D],decls:46,vars:7,consts:[["formFiltro",""],[1,"lista-productos"],[1,"lista-productos-container"],[1,"lista-productos-column","filtros"],[1,"lista-encabezado"],["mat-stroked-button","",1,"btnfiltros",3,"click"],[1,"filtroProductos",3,"formGroup"],["name","categoria","id","categoria","placeholder","Categoria","formControlName","categoria","matNativeControl","",1,"form-control","categoria"],["value","","selected",""],[3,"value"],["name","marca","id","marca","placeholder","Marca","formControlName","marca","matNativeControl","",1,"form-control","marca"],["type","number","id","preciomin","placeholder","","formControlName","preciomin",1,"form-control","preciomin"],["type","number","id","preciomax","placeholder","","formControlName","preciomax",1,"form-control","preciomax"],["mat-flat-button","","type","submit",1,"submit",3,"click"],[1,"lista-productos-column","listado"],["aria-label","Select page",3,"page","length","pageSize","pageSizeOptions"],[1,"productos-list"],["appearance","outlined",1,"producto-card"],["mat-card-image","",3,"src","alt"],[3,"routerLink"],[1,"btn-addtocart",3,"click"],["aria-label","Icon addtocart","aria-hidden","false","fontIcon","add_shopping_cart",1,"addtocart-icon"],[1,"precio"],[1,"precio_rebajado"]],template:function(l,c){if(l&1){let d=w();p(0,"app-header"),o(1,"main")(2,"section",1),x(3,St,3,3,"h1")(4,wt,2,1)(5,yt,2,0),o(6,"div",2)(7,"div",3)(8,"div",4)(9,"h2"),n(10,"Filtros"),i(),o(11,"button",5),h("click",function(){return g(d),f(c.cambiarFiltros())}),n(12,"Ver/Mostrar filtros"),i()(),p(13,"mat-divider")(14,"br")(15,"br"),o(16,"form",6,0)(18,"h3"),n(19,"Categor\xEDa:"),i(),o(20,"select",7)(21,"option",8),n(22,"Todas las categor\xEDas"),i(),P(23,Ot,2,2,"option",9,I),i(),o(25,"h3"),n(26,"Marca:"),i(),o(27,"select",10)(28,"option",8),n(29,"Todas las marcas"),i(),P(30,It,2,2,"option",9,I),i(),o(32,"h3"),n(33,"Precio m\xEDnimo (\u20AC):"),i(),p(34,"input",11),o(35,"h3"),n(36,"Precio m\xE1ximo (\u20AC):"),i(),p(37,"input",12),o(38,"button",13),h("click",function(){return g(d),f(c.filtrar())}),n(39,"Filtrar"),i()()(),o(40,"div",14)(41,"mat-paginator",15),h("page",function(Pt){return g(d),f(c.onPageChange(Pt))}),i(),o(42,"div",16),x(43,kt,2,0)(44,Tt,2,0),i()()()()(),p(45,"app-footer")}l&2&&(s(3),M(3,c.categoria?3:c.marca?4:5),s(13),S("formGroup",c.filtroForm),s(7),b(c.categorias),s(7),b(c.marcas),s(11),S("length",c.productos.length)("pageSize",c.pageSize)("pageSizeOptions",z(6,vt)),s(2),M(43,c.productos&&c.productos.length>0?43:44))},dependencies:[lt,dt,$,A,Mt,_t,pt,gt,ft,ut,mt,H,ct,at,ht,xt,Ct,G,it,K,et,ot,U,X,tt,W,q,rt,Y,Z],styles:[".lista-productos[_ngcontent-%COMP%]{margin:5rem}.lista-productos[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;font-weight:700}.lista-productos-container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;gap:5rem}.filtros[_ngcontent-%COMP%]{width:15%}.btnfiltros[_ngcontent-%COMP%]{display:none}.form-control[_ngcontent-%COMP%]{margin-bottom:1rem}.filtroProductos[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{background:#fff url(https://www.freeiconspng.com/uploads/arrow-up-icon-23.png) no-repeat;background-size:15px;background-position:right 10px center}.submit[_ngcontent-%COMP%]{margin-top:1rem;background-color:var(--darkblue)!important;color:var(--white)!important}.listado[_ngcontent-%COMP%]{width:85%}.productos-list[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;gap:1rem;margin-top:3rem}.producto-card[_ngcontent-%COMP%]{text-align:center;width:18%}.producto-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:var(--black)}.producto-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{justify-content:center}.producto-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{font-weight:400;color:var(--darkblue)}.precio[_ngcontent-%COMP%]{font-size:var(--lengthMd2);color:var(--darkblue)}.precio_rebajado[_ngcontent-%COMP%]{color:var(--orangered)}.btn-addtocart[_ngcontent-%COMP%]{text-align:center;display:flex;align-items:center;justify-content:center;gap:.5rem;background-color:var(--darkblue);color:var(--white);border-radius:.5rem;padding:.5rem 0;margin:1rem 3rem;border:none}@media only screen and (min-width: 1024px) and (max-width: 1350px){.btnfiltros[_ngcontent-%COMP%]{display:none}.filtros[_ngcontent-%COMP%]{width:20%}.listado[_ngcontent-%COMP%]{width:75%}.producto-card[_ngcontent-%COMP%]{width:23%}.btn-addtocart[_ngcontent-%COMP%]{padding:.5rem 0;margin:1rem 2rem}}@media only screen and (min-width: 768px) and (max-width: 1023px){.lista-encabezado[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.btnfiltros[_ngcontent-%COMP%]{display:block}.filtros[_ngcontent-%COMP%]{width:100%}.filtroProductos[_ngcontent-%COMP%]{display:none}.listado[_ngcontent-%COMP%]{width:100%}.lista-productos-container[_ngcontent-%COMP%]{flex-direction:column;gap:0rem}.producto-card[_ngcontent-%COMP%]{width:23%}.btn-addtocart[_ngcontent-%COMP%]{padding:.5rem 0;margin:1rem}}@media only screen and (max-width: 767px){.lista-productos[_ngcontent-%COMP%]{margin:2rem}.lista-encabezado[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.btnfiltros[_ngcontent-%COMP%]{display:block}.filtros[_ngcontent-%COMP%]{width:100%}.filtroProductos[_ngcontent-%COMP%]{display:none}.listado[_ngcontent-%COMP%]{width:100%}.productos-list[_ngcontent-%COMP%]{justify-content:center}.lista-productos-container[_ngcontent-%COMP%]{flex-direction:column;gap:0rem}.producto-card[_ngcontent-%COMP%]{width:45%}.btn-addtocart[_ngcontent-%COMP%]{padding:.5rem 0;margin:1rem}}"]});let e=a;return e})();export{oe as ListaproductosComponent};
