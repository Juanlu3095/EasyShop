import{a as ne}from"./chunk-EHXZQRVV.js";import"./chunk-I7Y6FMWM.js";import{a as re}from"./chunk-TKJMUKLG.js";import"./chunk-BJKW2MZI.js";import"./chunk-5V7AZGGS.js";import"./chunk-JI4B56LL.js";import"./chunk-Y4ZCGVAW.js";import{c as Z,d as ee}from"./chunk-3TBXM6QS.js";import{a as W,g as X,h as Y}from"./chunk-7ITRIRQH.js";import{a as J}from"./chunk-MAKOVUIL.js";import{a as U}from"./chunk-PE3AIABI.js";import{a as ae}from"./chunk-2OGK3DXK.js";import{c as te,h as ie}from"./chunk-SMOEXM7I.js";import{b as P,d as _,f as T,g as q,h as R,j as y,k as j,m as G,n as Q,s as z,t as H,u as L}from"./chunk-33HZCSPU.js";import{d as N}from"./chunk-LVI2TU4A.js";import{o as $,q as K}from"./chunk-UKCT2NNU.js";import"./chunk-AESYL7IM.js";import"./chunk-YRYHB4P2.js";import"./chunk-I7KWM6MY.js";import{i as A}from"./chunk-IQAKLUFA.js";import{Ab as n,Bb as o,Cb as f,Gb as O,Jb as b,Lb as v,Rb as C,Sb as E,Tb as x,Vb as c,Xb as w,Ya as l,Za as d,cc as V,ga as F,ib as I,jc as D,la as k,ob as S,qb as g,ua as p,va as h,vb as B}from"./chunk-BEZRA2BD.js";var oe=["contentEliminar"],ce=["contentEliminarSeleccion"];function se(r,s){if(r&1&&(n(0,"span"),c(1),o()),r&2){let M=v();l(),w(" Imagen: ",M.imagenElegida.nombre,"")}}function le(r,s){if(r&1&&(n(0,"div"),c(1),o()),r&2){let M=v();l(),w(' \xBFEst\xE1s seguro de querer eliminar la marca "',M.nombreMarca,'"? ')}}function me(r,s){r&1&&(n(0,"div"),c(1," \xBFEst\xE1s seguro de querer las marcas seleccionadas? "),f(2,"br"),n(3,"span",12),c(4,"\xA1OJO! Si has pulsado el bot\xF3n para seleccionar todo, se eliminar\xE1n todos las marcas, incluidas aquellas que no aparezcan en la vista actual."),o()())}var Oe=(()=>{let s=class s{constructor(t,a,e,i,m){this.title=t,this.dialogService=a,this.productoService=e,this._snackBar=i,this.router=m,this.columns=["Nombre"],this.displayedColumns=["select",...this.columns,"acciones"],this.selectedIds=[],this.crearMarcaForm=new R({nombre:new y("",_.required),imagen_id:new y(0,_.compose([_.minLength(1)]))??null}),this.botones=[{id:1,nombre:"Editar",class:"",accion:u=>this.editarMarca(u)},{id:2,nombre:"Eliminar",class:"danger",accion:(u,de)=>this.eliminarDialog(u)}],this.dialog=F(te),this.imagenSeleccionada=I("")}ngOnInit(){this.title.setTitle("Marcas < EasyShop"),this.getMarcas(),this.suscripcion=this.productoService.refresh$.subscribe(()=>{this.getMarcas()})}ngOnDestroy(){this.suscripcion.unsubscribe()}getMarcas(){this.productoService.getMarcas().subscribe({next:t=>{this.marcas=t},error:t=>{console.error(t)}})}crearMarca(){this.crearMarcaForm.valid&&this.productoService.postBrand(this.crearMarcaForm.value).subscribe({next:t=>{this._snackBar.open("Marca creada.","Aceptar",{duration:3e3})},error:t=>{this._snackBar.open(t.error.result,"Aceptar",{duration:3e3})}})}editarMarca(t){this.router.navigate(["dashboard/marcas",t])}eliminarDialog(t){let a="Eliminar marca",e="aceptar";this.productoService.getMarca(t).subscribe({next:i=>{this.nombreMarca=i.Nombre},error:i=>{console.error(i)}}),this.dialogService.openDialog(this.modalEliminar,a,e).then(i=>{if(i)this.productoService.deleteBrand(t).subscribe({next:m=>{this._snackBar.open("Marca eliminada.","Aceptar",{duration:3e3})},error:m=>{this._snackBar.open("Ha ocurrido un error.","Aceptar",{duration:3e3})}});else return})}eliminarSeleccionDialog(){this.dialogService.openDialog(this.modalEliminarSeleccion,"Eliminar marcas seleccionadas","aceptar").then(e=>{if(e)this.productoService.deleteBrand(this.selectedIds).subscribe({next:i=>{this._snackBar.open("Marcas eliminadas.","Aceptar",{duration:3e3})},error:i=>{this._snackBar.open("Ha ocurrido un error.","Aceptar",{duration:3e3})}});else return})}onSelectionChange(t){this.selectedIds=t}openDialogSeleccionarImagen(){this.dialog.open(ne,{data:{imagenSeleccionada:{id:null,nombre:""}}}).afterClosed().subscribe(a=>{a!==void 0&&(this.imagenSeleccionada.set(a),this.imagenElegida=a,this.crearMarcaForm.patchValue({imagen_id:this.imagenElegida.id}))})}};s.\u0275fac=function(a){return new(a||s)(d(A),d(ae),d(J),d(U),d(N))},s.\u0275cmp=k({type:s,selectors:[["app-dashboardmarcas"]],viewQuery:function(a,e){if(a&1&&(C(oe,5),C(ce,5)),a&2){let i;E(i=x())&&(e.modalEliminar=i.first),E(i=x())&&(e.modalEliminarSeleccion=i.first)}},standalone:!0,features:[V],decls:26,vars:9,consts:[["contentEliminar",""],["contentEliminarSeleccion",""],[1,"encabezado-marcas"],[1,"container-marcas"],[1,"lista-marcas"],[3,"selectionChange","columns","displayedColumns","data","buttons","btnDangerAll","eliminarSeleccionados"],[1,"form-marcas"],[1,"example-form",3,"formGroup"],[1,"example-full-width"],["matInput","","placeholder","Nombre de la marca","formControlName","nombre","ngDefaultControl","","required",""],["mat-flat-button","",1,"select-image",3,"click"],["mat-stroked-button","","type","submit",3,"click","disabled"],[1,"caution"]],template:function(a,e){if(a&1){let i=O();n(0,"main")(1,"div",2)(2,"h1"),c(3,"Marcas"),o()(),n(4,"div",3)(5,"section",4)(6,"app-tablacompleta",5),b("selectionChange",function(u){return p(i),h(e.onSelectionChange(u))}),o()(),n(7,"aside",6)(8,"h2"),c(9,"A\xF1adir nueva marca"),o(),n(10,"form",7)(11,"mat-form-field",8)(12,"mat-label"),c(13,"Nombre"),o(),f(14,"input",9),o(),n(15,"button",10),b("click",function(){return p(i),h(e.openDialogSeleccionarImagen())}),c(16,"Seleccionar imagen"),o(),S(17,se,2,1,"span"),f(18,"br")(19,"br"),n(20,"button",11),b("click",function(){return p(i),h(e.crearMarca())}),c(21,"Guardar"),o()()()()(),S(22,le,2,1,"ng-template",null,0,D)(24,me,5,0,"ng-template",null,1,D)}a&2&&(l(6),g("columns",e.columns)("displayedColumns",e.displayedColumns)("data",e.marcas)("buttons",e.botones)("btnDangerAll",!1)("eliminarSeleccionados",e.eliminarSeleccionDialog.bind(e)),l(4),g("formGroup",e.crearMarcaForm),l(7),B(17,e.imagenSeleccionada()?17:-1),l(3),g("disabled",!e.crearMarcaForm.valid))},dependencies:[re,K,$,Y,X,W,ee,Z,ie,L,j,P,T,q,z,G,Q,H],styles:[".container-marcas[_ngcontent-%COMP%]{display:flex;gap:2rem}@media (max-width: 1023px){.container-marcas[_ngcontent-%COMP%]{flex-direction:column}}@media (min-width: 1024px){.container-marcas[_ngcontent-%COMP%]{flex-direction:row}}@media (min-width: 1024px){.lista-marcas[_ngcontent-%COMP%]{width:60%}}@media (min-width: 1024px){.form-marcas[_ngcontent-%COMP%]{width:40%}}.example-form[_ngcontent-%COMP%]{min-width:150px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}.select-image[_ngcontent-%COMP%]{background-color:var(--darkblue);color:var(--white)}.caution[_ngcontent-%COMP%]{color:red}"]});let r=s;return r})();export{Oe as DashboardmarcasComponent};
