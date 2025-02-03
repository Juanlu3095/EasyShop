import{a as A}from"./chunk-42JTQIQS.js";import"./chunk-BJKW2MZI.js";import"./chunk-5V7AZGGS.js";import"./chunk-JI4B56LL.js";import"./chunk-Y4ZCGVAW.js";import"./chunk-3TBXM6QS.js";import"./chunk-7ITRIRQH.js";import{a as w}from"./chunk-UIFHNKPJ.js";import{a as j}from"./chunk-PE3AIABI.js";import{a as q}from"./chunk-2OGK3DXK.js";import"./chunk-SMOEXM7I.js";import"./chunk-33HZCSPU.js";import{d as B,e as M}from"./chunk-V6CHNUWL.js";import{o as O,q as T}from"./chunk-UKCT2NNU.js";import"./chunk-AESYL7IM.js";import"./chunk-YRYHB4P2.js";import"./chunk-I7KWM6MY.js";import{i as k}from"./chunk-X2X7HICG.js";import{Ab as a,Bb as c,Cb as E,Gb as P,Jb as y,Lb as D,Rb as p,Sb as h,Tb as b,Vb as l,Xb as x,Ya as m,Za as s,cc as I,jc as g,la as f,ob as _,qb as C,ua as v,va as S}from"./chunk-BEZRA2BD.js";var Q=["contentEliminar"],R=["contentEliminarSeleccion"];function z(r,n){if(r&1&&(a(0,"div"),l(1),c()),r&2){let F=D();m(),x(' \xBFEst\xE1s seguro de querer eliminar el producto "',F.nombreProducto,'"? ')}}function V(r,n){r&1&&(a(0,"div"),l(1," \xBFEst\xE1s seguro de querer los productos seleccionados? "),E(2,"br"),a(3,"span",7),l(4,"\xA1OJO! Si has pulsado el bot\xF3n para seleccionar todo, se eliminar\xE1n todos los productos, incluidos aquellos que no aparezcan en la vista actual."),c()())}var Y=(()=>{let n=class n{constructor(e,i,t,o,u){this.title=e,this.productService=i,this.dialogService=t,this.router=o,this._snackBar=u,this.columns=["Nombre","Inventario","Precio_euros","Precio_rebajado_euros","Ultima_modificacion"],this.displayedColumns=["select",...this.columns,"acciones"],this.selectedIds=[],this.botones=[{id:1,nombre:"Editar",class:"",accion:d=>this.editarCategoria(d)},{id:2,nombre:"Eliminar",class:"danger",accion:d=>this.openDialogEliminarProducto(d)}]}ngOnInit(){this.title.setTitle("Productos < EasyShop"),this.getProductos(),this.suscripcion=this.productService.refresh$.subscribe(()=>{this.getProductos()})}ngOnDestroy(){this.suscripcion.unsubscribe()}getProductos(){this.productService.getProductos().subscribe({next:e=>{this.productos=e.data},error:e=>{console.error(e)}})}editarCategoria(e){this.router.navigate(["dashboard/productos",e])}openDialogEliminarProducto(e){let i="Eliminar producto",t="aceptar";this.productService.getProducto(e).subscribe({next:o=>{this.nombreProducto=o.Nombre},error:o=>{console.error(o)}}),this.dialogService.openDialog(this.modalEliminar,i,t).then(o=>{if(o)this.productService.deleteProducto(e).subscribe({next:u=>{this._snackBar.open("Producto eliminado.","Aceptar",{duration:3e3})},error:u=>{this._snackBar.open("Ha ocurrido un error.","Aceptar",{duration:3e3})}});else return})}onSelectionChange(e){this.selectedIds=e}eliminarSeleccionDialog(){this.dialogService.openDialog(this.modalEliminarSeleccion,"Eliminar productos seleccionados","aceptar").then(t=>{if(t)this.productService.deleteProducto(this.selectedIds).subscribe({next:o=>{this._snackBar.open("Productos eliminados.","Aceptar",{duration:3e3})},error:o=>{this._snackBar.open("Ha ocurrido un error.","Aceptar",{duration:3e3})}});else return})}};n.\u0275fac=function(i){return new(i||n)(s(k),s(w),s(q),s(B),s(j))},n.\u0275cmp=f({type:n,selectors:[["app-dashboardproducts"]],viewQuery:function(i,t){if(i&1&&(p(Q,5),p(R,5)),i&2){let o;h(o=b())&&(t.modalEliminar=o.first),h(o=b())&&(t.modalEliminarSeleccion=o.first)}},standalone:!0,features:[I],decls:13,vars:5,consts:[["contentEliminar",""],["contentEliminarSeleccion",""],[1,"encabezado-productos"],["mat-stroked-button","","routerLink","/dashboard/nuevoproducto"],[1,"container-productos"],[1,"lista-productos"],[3,"selectionChange","columns","displayedColumns","data","buttons","eliminarSeleccionados"],[1,"caution"]],template:function(i,t){if(i&1){let o=P();a(0,"main")(1,"section",2)(2,"h1"),l(3,"Productos"),c(),a(4,"button",3),l(5,"A\xF1adir producto"),c()(),a(6,"div",4)(7,"section",5)(8,"app-tablacompleta",6),y("selectionChange",function(d){return v(o),S(t.onSelectionChange(d))}),c()()()(),_(9,z,2,1,"ng-template",null,0,g)(11,V,5,0,"ng-template",null,1,g)}i&2&&(m(8),C("columns",t.columns)("displayedColumns",t.displayedColumns)("data",t.productos)("buttons",t.botones)("eliminarSeleccionados",t.eliminarSeleccionDialog.bind(t)))},dependencies:[A,T,O,M],styles:[".encabezado-productos[_ngcontent-%COMP%]{display:flex;gap:1rem;margin-bottom:1rem}.encabezado-productos[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-color:var(--darkblue)}.caution[_ngcontent-%COMP%]{color:red}"]});let r=n;return r})();export{Y as DashboardproductsComponent};
