import{a as M}from"./chunk-ICZYXRCI.js";import{c as Z}from"./chunk-YK5JBHKT.js";import{a as te,b as De,c as Se}from"./chunk-BJKW2MZI.js";import{a as ee,b as Me}from"./chunk-5V7AZGGS.js";import{b as G}from"./chunk-JI4B56LL.js";import{a as Ce,b as _e}from"./chunk-Y4ZCGVAW.js";import{c as B,d as N}from"./chunk-3TBXM6QS.js";import{a as V,g as P,h as q}from"./chunk-7ITRIRQH.js";import{a as E}from"./chunk-PE3AIABI.js";import{b as R,c as be,d as w,e as y,f as k,g as F,h as b}from"./chunk-SMOEXM7I.js";import{b as H,d as j,f as $,g as J,h as z,j as O,k as Q,m as K,n as U,s as W,t as X,u as Y}from"./chunk-33HZCSPU.js";import{o as _,q as v}from"./chunk-UKCT2NNU.js";import"./chunk-AESYL7IM.js";import{a as xe,b as ve,c as Ee,d as we,e as ye,f as ke,g as Fe,h as Te,i as Ie,j as Ae,k as je,l as Oe,m as Ve}from"./chunk-YRYHB4P2.js";import{ia as he}from"./chunk-I7KWM6MY.js";import{i as fe}from"./chunk-XXO6A46Z.js";import{Ab as r,Bb as a,Cb as g,Db as I,Eb as A,Gb as L,Jb as d,Lb as h,Rb as ae,Sb as re,Tb as ne,Ub as ue,Vb as n,Xb as T,Ya as c,Za as s,cc as C,dc as ge,ga as de,la as f,ob as x,qb as u,ua as D,va as S,vb as pe}from"./chunk-BEZRA2BD.js";var Be=(()=>{let o=class o{constructor(e,i){this.ofertaService=e,this._snackBar=i,this.crearCategoriaForm=new z({nombre:new O("",j.required),slug:new O("",j.required)})}crearCategoria(){this.crearCategoriaForm.valid&&this.ofertaService.postJobcategory(this.crearCategoriaForm.value).subscribe({next:e=>{this._snackBar.open("Categor\xEDa creada.","Aceptar",{duration:3e3})},error:e=>{console.error("Ha ocurrido un error:",e)}})}};o.\u0275fac=function(i){return new(i||o)(s(M),s(E))},o.\u0275cmp=f({type:o,selectors:[["app-dashnuevajobcategory"]],standalone:!0,features:[C],decls:17,vars:2,consts:[["mat-dialog-title",""],[1,"mat-typography"],[1,"example-form",3,"formGroup"],[1,"example-full-width"],["matInput","","placeholder","Ejemplo: Inform\xE1tica","value","","formControlName","nombre","ngDefaultControl","","required",""],["matInput","","placeholder","Ejemplo: informatica","formControlName","slug","ngDefaultControl","","required",""],["align","end"],["mat-button","","mat-dialog-close",""],["mat-button","","cdkFocusInitial","",3,"click","mat-dialog-close"]],template:function(i,l){i&1&&(r(0,"h2",0),n(1,"A\xF1adir nueva categor\xEDa de empleo"),a(),r(2,"mat-dialog-content",1)(3,"form",2)(4,"mat-form-field",3)(5,"mat-label"),n(6,"Nombre"),a(),g(7,"input",4),a(),r(8,"mat-form-field",3)(9,"mat-label"),n(10,"Slug"),a(),g(11,"input",5),a()()(),r(12,"mat-dialog-actions",6)(13,"button",7),n(14,"Cancelar"),a(),r(15,"button",8),d("click",function(){return l.crearCategoria()}),n(16,"Guardar"),a()()),i&2&&(c(3),u("formGroup",l.crearCategoriaForm),c(12),u("mat-dialog-close",!0))},dependencies:[b,w,y,F,k,v,_,q,P,V,Z,N,B,G,X,Q,H,$,J,W,Y,K,U],styles:[".example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}"]});let t=o;return t})();function $e(t,o){if(t&1&&(r(0,"form",2)(1,"mat-form-field",6)(2,"mat-label"),n(3,"Nombre"),a(),g(4,"input",7),a(),r(5,"mat-form-field",6)(6,"mat-label"),n(7,"Slug"),a(),g(8,"input",8),a()()),t&2){let m=h();u("formGroup",m.editarCategoriaForm)}}function Je(t,o){t&1&&(r(0,"p"),n(1,"La categor\xEDa a la que trata de acceder no existe."),a())}var Ne=(()=>{let o=class o{constructor(e,i,l){this.data=e,this.ofertaService=i,this._snackBar=l,this.editarCategoriaForm=new z({nombre:new O("",j.required),slug:new O("",j.required)})}ngOnInit(){console.log("\xC9stos son los datos recibidos:",this.data.id),this.ofertaService.getJobCategory(this.data.id).subscribe({next:e=>{this.categoria=e,this.editarCategoriaForm.patchValue({nombre:this.categoria.nombre,slug:this.categoria.slug})},error:e=>{console.error(e)}})}editarCategoria(){this.editarCategoriaForm.valid&&(console.log("Estos son los datos del formulario:",this.editarCategoriaForm.value),this.ofertaService.updateJobcategory(this.data.id,this.editarCategoriaForm.value).subscribe({next:e=>{this._snackBar.open("Categor\xEDa editada.","Aceptar",{duration:3e3})},error:e=>{console.error("Ha ocurrido un error:",e)}}))}};o.\u0275fac=function(i){return new(i||o)(s(R),s(M),s(E))},o.\u0275cmp=f({type:o,selectors:[["app-dasheditarjobcategory"]],standalone:!0,features:[C],decls:10,vars:2,consts:[["mat-dialog-title",""],[1,"mat-typography"],[1,"example-form",3,"formGroup"],["align","end"],["mat-button","","mat-dialog-close",""],["mat-button","","cdkFocusInitial","",3,"click","mat-dialog-close"],[1,"example-full-width"],["matInput","","placeholder","Ejemplo: Inform\xE1tica","formControlName","nombre","ngDefaultControl","","required",""],["matInput","","placeholder","Ejemplo: informatica","formControlName","slug","ngDefaultControl","","required",""]],template:function(i,l){i&1&&(r(0,"h2",0),n(1,"Editar categor\xEDa de empleo"),a(),r(2,"mat-dialog-content",1),x(3,$e,9,1,"form",2)(4,Je,2,0),a(),r(5,"mat-dialog-actions",3)(6,"button",4),n(7,"Cancelar"),a(),r(8,"button",5),d("click",function(){return l.editarCategoria()}),n(9,"Guardar"),a()()),i&2&&(c(3),pe(3,l.categoria?3:4),c(5),u("mat-dialog-close",!0))},dependencies:[b,w,y,F,k,v,_,q,P,V,Z,N,B,G,X,Q,H,$,J,W,Y,K,U],styles:[".example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}"]});let t=o;return t})();var Re=(()=>{let o=class o{constructor(e,i,l){this.data=e,this.empleoService=i,this._snackBar=l}ngOnInit(){this.nombreCategoria=this.data.nombre,this.idCategoria=this.data.id}eliminarCategoria(){this.empleoService.deleteJobcategories(this.data.id).subscribe({next:e=>{this._snackBar.open("Categor\xEDa eliminada.","Aceptar",{duration:3e3})},error:e=>{console.error("Ha ocurrido un error:",e)}})}};o.\u0275fac=function(i){return new(i||o)(s(R),s(M),s(E))},o.\u0275cmp=f({type:o,selectors:[["app-dasheliminarjobcategory"]],standalone:!0,features:[C],decls:9,vars:1,consts:[["mat-dialog-title",""],["align","end"],["mat-button","","mat-dialog-close",""],["mat-button","","mat-dialog-close","","cdkFocusInitial","",1,"aceptar",3,"click"]],template:function(i,l){i&1&&(r(0,"h2",0),n(1,"Eliminar categor\xEDa de empleo"),a(),r(2,"mat-dialog-content"),n(3),a(),r(4,"mat-dialog-actions",1)(5,"button",2),n(6,"No"),a(),r(7,"button",3),d("click",function(){return l.eliminarCategoria()}),n(8,"S\xED"),a()()),i&2&&(c(3),T(' \xBFEst\xE1s seguro de que quieres eliminar la categor\xEDa "',l.nombreCategoria,`"?
`))},dependencies:[b,w,y,F,k,v,_],styles:[".aceptar[_ngcontent-%COMP%]{background-color:red;color:var(--white)}"],changeDetection:0});let t=o;return t})();var Ge=(()=>{let o=class o{constructor(e,i,l){this.data=e,this.empleoService=i,this._snackBar=l}ngOnInit(){this.idsCategorias=this.data.ids}eliminarSeleccionados(){this.empleoService.deleteJobcategories(this.idsCategorias).subscribe({next:e=>{this._snackBar.open("Categor\xEDas eliminadas.","Aceptar",{duration:3e3})},error:e=>{console.error(e)}})}};o.\u0275fac=function(i){return new(i||o)(s(R),s(M),s(E))},o.\u0275cmp=f({type:o,selectors:[["app-dasheliminarseleccionjobcategory"]],standalone:!0,features:[C],decls:12,vars:0,consts:[["mat-dialog-title",""],[1,"caution"],["align","end"],["mat-button","","mat-dialog-close",""],["mat-button","","mat-dialog-close","","cdkFocusInitial","",1,"aceptar",3,"click"]],template:function(i,l){i&1&&(r(0,"h2",0),n(1,"Eliminar categor\xEDas de empleo seleccionadas"),a(),r(2,"mat-dialog-content"),n(3," \xBFEst\xE1s seguro de que quieres eliminar las categor\xEDas de empleo seleccionadas? "),g(4,"br"),r(5,"span",1),n(6,"\xA1OJO! Si has pulsado el bot\xF3n para seleccionar todo, se eliminar\xE1n todas las categor\xEDas, incluidas aquellas que no aparezcan en la vista actual."),a()(),r(7,"mat-dialog-actions",2)(8,"button",3),n(9,"No"),a(),r(10,"button",4),d("click",function(){return l.eliminarSeleccionados()}),n(11,"S\xED"),a()())},dependencies:[b,w,y,F,k,v,_],styles:[".caution[_ngcontent-%COMP%]{color:red}.aceptar[_ngcontent-%COMP%]{background-color:red;color:var(--white)}"],changeDetection:0});let t=o;return t})();var ze=()=>[5,10,25,100];function Qe(t,o){if(t&1){let m=L();r(0,"th",20)(1,"mat-checkbox",21),d("change",function(i){D(m);let l=h();return S(i?l.toggleAllRows():null)}),a()()}if(t&2){let m=h();c(),u("checked",m.selection.hasValue()&&m.isAllSelected())("indeterminate",m.selection.hasValue()&&!m.isAllSelected())("aria-label",m.checkboxLabel())}}function Ke(t,o){if(t&1){let m=L();r(0,"td",22)(1,"mat-checkbox",23),d("click",function(i){return D(m),S(i.stopPropagation())})("change",function(i){let l=D(m).$implicit,p=h();return S(i?p.selection.toggle(l):null)}),a()()}if(t&2){let m=o.$implicit,e=h();c(),u("checked",e.selection.isSelected(m))("aria-label",e.checkboxLabel(m))}}function Ue(t,o){t&1&&(r(0,"th",24),n(1," ID "),a())}function We(t,o){if(t&1&&(r(0,"td",22),n(1),a()),t&2){let m=o.$implicit;c(),T(" ",m.id," ")}}function Xe(t,o){t&1&&(r(0,"th",24),n(1," Categor\xEDa "),a())}function Ye(t,o){if(t&1&&(r(0,"td",22),n(1),a()),t&2){let m=o.$implicit;c(),T(" ",m.nombre," ")}}function Ze(t,o){t&1&&(r(0,"th",24),n(1," Slug "),a())}function et(t,o){if(t&1&&(r(0,"td",22),n(1),a()),t&2){let m=o.$implicit;c(),T(" ",m.slug," ")}}function tt(t,o){t&1&&(r(0,"th",20),n(1," Acciones "),a())}function it(t,o){if(t&1){let m=L();r(0,"td",22)(1,"button",2),d("click",function(){let i=D(m).$implicit,l=h();return S(l.openDialogEditarCategoria(i.id))}),n(2,"Editar"),a(),r(3,"button",25),d("click",function(){let i=D(m).$implicit,l=h();return S(l.openDialogEliminarCategoria(i.id,i.nombre))}),n(4,"Eliminar"),a()()}}function ot(t,o){t&1&&g(0,"tr",26)}function at(t,o){t&1&&g(0,"tr",27)}function rt(t,o){if(t&1&&(r(0,"tr",28)(1,"td",29),n(2),a()()),t&2){h();let m=ue(14);c(2),T('No hay datos que coincidan con el filtro: "',m.value,'"')}}var Zt=(()=>{let o=class o{constructor(e,i){this.title=e,this.ofertaService=i,this.selection=new he(!0,[]),this.displayedColumns=["select","id","categoria","slug","acciones"],this.dialog=de(be)}openDialogNuevaCategoria(){this.dialog.open(Be)}openDialogEditarCategoria(e){this.dialog.open(Ne,{data:{id:e}})}openDialogEliminarCategoria(e,i){this.dialog.open(Re,{data:{id:e,nombre:i}})}openDialogEliminarSeleccionCategoria(){let e=this.selection.selected.map(i=>i.id);this.dialog.open(Ge,{data:{ids:e}})}ngOnInit(){this.title.setTitle("Categor\xEDas Empleo < EasyShop"),this.paginator._intl.itemsPerPageLabel="Registros por p\xE1gina:",this.paginator._intl.previousPageLabel="Anterior",this.paginator._intl.nextPageLabel="Siguiente",this.getJobcategories(),this.suscripcion=this.ofertaService.refresh$.subscribe(()=>{this.getJobcategories()})}ngOnDestroy(){this.suscripcion.unsubscribe()}getJobcategories(){this.ofertaService.getAllJobcategories().subscribe({next:e=>{this.categorias=e,this.dataSource=new Ve(this.categorias),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort},error:e=>{console.error(e)}})}aplicarFiltro(e){let i=e.target.value;this.dataSource.filter=i.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}isAllSelected(){if(!this.dataSource)return!1;let e=this.selection.selected.length,i=this.dataSource.data.length;return e===i}toggleAllRows(){if(this.dataSource){if(this.isAllSelected()){this.selection.clear();return}this.selection.select(...this.dataSource.data)}}checkboxLabel(e){return this.dataSource?e?`${this.selection.isSelected(e)?"deselect":"select"} row ${e.id+1}`:`${this.isAllSelected()?"deselect":"select"} all`:""}};o.\u0275fac=function(i){return new(i||o)(s(fe),s(M))},o.\u0275cmp=f({type:o,selectors:[["app-dashboardcategoriasempleo"]],viewQuery:function(i,l){if(i&1&&(ae(ee,7),ae(te,5)),i&2){let p;re(p=ne())&&(l.paginator=p.first),re(p=ne())&&(l.sort=p.first)}},standalone:!0,features:[C],decls:41,vars:5,consts:[["input",""],[1,"encabezado-categoriasEmpleo"],["mat-stroked-button","",3,"click"],[1,"empleoTable"],["matInput","","placeholder","Ej. Inform\xE1tica",3,"keyup"],["mat-stroked-button","",1,"dangerAll",3,"click"],[1,"mat-elevation-z8","table-responsive"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","categoria"],["matColumnDef","slug"],["matColumnDef","acciones"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Select page of categorias",3,"pageSizeOptions"],["mat-header-cell",""],[3,"change","checked","indeterminate","aria-label"],["mat-cell",""],[3,"click","change","checked","aria-label"],["mat-header-cell","","mat-sort-header",""],["mat-stroked-button","",1,"danger",3,"click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(i,l){if(i&1){let p=L();r(0,"main")(1,"section")(2,"div",1)(3,"h1"),n(4,"Categor\xEDas para empleos"),a(),r(5,"button",2),d("click",function(){return D(p),S(l.openDialogNuevaCategoria())}),n(6,"A\xF1adir nueva categor\xEDa"),a()(),r(7,"p"),n(8,"Aqu\xED puedes gestionar las categor\xEDas para tus oferta de empleo."),a(),r(9,"div",3)(10,"mat-form-field")(11,"mat-label"),n(12,"Filtro"),a(),r(13,"input",4,0),d("keyup",function(Le){return D(p),S(l.aplicarFiltro(Le))}),a()(),r(15,"button",5),d("click",function(){return D(p),S(l.openDialogEliminarSeleccionCategoria())}),n(16,"Eliminar ofertas selecionadas"),a(),r(17,"div",6)(18,"table",7),I(19,8),x(20,Qe,2,3,"th",9)(21,Ke,2,2,"td",10),A(),I(22,11),x(23,Ue,2,0,"th",12)(24,We,2,1,"td",10),A(),I(25,13),x(26,Xe,2,0,"th",12)(27,Ye,2,1,"td",10),A(),I(28,14),x(29,Ze,2,0,"th",12)(30,et,2,1,"td",10),A(),I(31,15),x(32,tt,2,0,"th",9)(33,it,5,0,"td",10),A(),x(34,ot,1,0,"tr",16)(35,at,1,0,"tr",17)(36,rt,3,1,"tr",18),a(),g(37,"mat-paginator",19),a(),g(38,"br"),r(39,"p"),n(40,"*El slug es una peque\xF1a parte del enlace que representa a la categor\xEDa. Debe ser \xFAnico."),a()()()()}i&2&&(c(18),u("dataSource",l.dataSource),c(16),u("matHeaderRowDef",l.displayedColumns),c(),u("matRowDefColumns",l.displayedColumns),c(2),u("pageSizeOptions",ge(4,ze)))},dependencies:[_,q,P,V,N,B,Oe,xe,Ee,Fe,we,ve,Te,ye,ke,Ie,Ae,je,Me,ee,Se,te,De,_e,Ce,G,b],styles:[".encabezado-categoriasEmpleo[_ngcontent-%COMP%]{display:flex;gap:1rem;margin-bottom:1rem}.encabezado-categoriasEmpleo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-color:var(--darkblue)}.dangerAll[_ngcontent-%COMP%]{margin:0 2rem;background-color:red;color:var(--white)}.productos[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:2rem}td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:1rem}button.danger[_ngcontent-%COMP%]{background-color:red;color:var(--white)}"]});let t=o;return t})();export{Zt as DashboardcategoriasempleoComponent};
