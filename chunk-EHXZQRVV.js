import{a as O}from"./chunk-I7Y6FMWM.js";import{a as j}from"./chunk-TKJMUKLG.js";import{d as v}from"./chunk-3TBXM6QS.js";import{h as S}from"./chunk-7ITRIRQH.js";import{a as y,b as D,d as C,e as A,f as E,g as F,h as T}from"./chunk-SMOEXM7I.js";import{t as I}from"./chunk-33HZCSPU.js";import{o as M,q as b}from"./chunk-UKCT2NNU.js";import{Ab as n,Bb as o,Cb as u,Vb as m,Xb as f,Ya as l,Za as r,cc as h,ga as d,ib as p,la as g,qb as c}from"./chunk-BEZRA2BD.js";var J=(()=>{let i=class i{constructor(a,e){this.imagenService=a,this.data=e,this.dialogRef=d(y),this.imagenSeleccionada=p(this.data.imagenSeleccionada),this.columnImages=["Archivo"],this.columns=["Nombre","Estado"],this.displayedColumns=[...this.columnImages,...this.columns,"acciones"],this.botones=[{id:1,nombre:"Seleccionar",class:"",accion:t=>this.seleccionarImagen(t)}]}ngOnInit(){this.getImages()}getImages(){this.imagenService.getImages().subscribe({next:a=>{this.datos=a.data},error:a=>{console.error(a)}})}seleccionarImagen(a){let e=this.datos.find(({Id:t})=>t===a);e&&this.imagenSeleccionada.set({id:e.Id,nombre:e.Nombre,ruta:e.Archivo})}cerrarDialogo(){this.dialogRef.close(this.imagenSeleccionada())}};i.\u0275fac=function(e){return new(e||i)(r(O),r(D))},i.\u0275cmp=g({type:i,selectors:[["app-dashseleccionarimagenproductcategory"]],standalone:!0,features:[h],decls:11,vars:8,consts:[["mat-dialog-title",""],[1,"info-imagen"],[1,"mat-typography"],[3,"columnImage","columns","displayedColumns","data","btnDangerAll","buttons"],["align","end"],["mat-button","","mat-dialog-close",""],["mat-button","","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(e,t){e&1&&(n(0,"h2",0),m(1,"Seleccionar imagen"),o(),n(2,"span",1),m(3),o(),n(4,"mat-dialog-content",2),u(5,"app-tablacompleta",3),o(),n(6,"mat-dialog-actions",4)(7,"button",5),m(8,"Cancelar"),o(),n(9,"button",6),m(10,"Seleccionar imagen"),o()()),e&2&&(l(3),f("Imagen seleccionada: ",t.imagenSeleccionada().nombre,""),l(2),c("columnImage",t.columnImages)("columns",t.columns)("displayedColumns",t.displayedColumns)("data",t.datos)("btnDangerAll",!0)("buttons",t.botones),l(4),c("mat-dialog-close",t.imagenSeleccionada()))},dependencies:[S,v,I,b,M,T,C,A,F,E,j],styles:[".dangerAll[_ngcontent-%COMP%]{display:none!important}.info-imagen[_ngcontent-%COMP%]{margin:0 0 1rem 2rem}"]});let s=i;return s})();export{J as a};
