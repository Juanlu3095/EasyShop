import{a as re}from"./chunk-6M64DPCS.js";import"./chunk-7BHXW4WB.js";import{a as oe}from"./chunk-UEOUM4DB.js";import"./chunk-BJKW2MZI.js";import"./chunk-5V7AZGGS.js";import"./chunk-JI4B56LL.js";import"./chunk-Y4ZCGVAW.js";import{c as W,d as X}from"./chunk-3TBXM6QS.js";import{a as K,g as Q,h as U}from"./chunk-7ITRIRQH.js";import{a as S}from"./chunk-YWZC5PKM.js";import{a as x}from"./chunk-PE3AIABI.js";import{b as Y,c as Z,d as ee,e as te,f as ie,g as ae,h as y}from"./chunk-SMOEXM7I.js";import{b as j,d as g,f as q,g as V,h as G,j as D,k as R,m as L,n as z,s as H,t as $,u as J}from"./chunk-33HZCSPU.js";import{d as O}from"./chunk-I4WXUBEO.js";import{o as M,q as E}from"./chunk-UKCT2NNU.js";import"./chunk-AESYL7IM.js";import"./chunk-YRYHB4P2.js";import"./chunk-4OTIWHWN.js";import"./chunk-I7KWM6MY.js";import{i as N}from"./chunk-B7NLDW3E.js";import{Ab as o,Bb as i,Cb as d,Gb as T,Jb as u,Lb as p,Mc as B,Vb as c,Xb as v,Ya as l,Za as s,cc as _,ga as I,ib as P,la as f,ob as h,qb as C,ua as w,va as A,vb as b}from"./chunk-BEZRA2BD.js";function de(r,a){if(r&1){let m=T();o(0,"mat-dialog-content"),c(1),i(),o(2,"mat-dialog-actions",1)(3,"button",2),c(4,"No"),i(),o(5,"button",3),u("click",function(){w(m);let t=p();return A(t.eliminarCategoria())}),c(6,"S\xED"),i()()}if(r&2){let m=p();l(),v(' \xBFEst\xE1s seguro de que quieres eliminar la categor\xEDa "',m.categoria.Nombre,'"? ')}}function ue(r,a){r&1&&(o(0,"mat-dialog-content")(1,"p"),c(2,"Cargando categor\xEDa..."),i()())}var ne=(()=>{let a=class a{constructor(e,t,n){this.productService=e,this.data=t,this._snackBar=n}ngOnInit(){this.getCategoria()}getCategoria(){this.productService.getCategoria(this.data.id).subscribe({next:e=>{this.categoria=e.data},error:e=>{console.error(e)}})}eliminarCategoria(){this.productService.deleteCategoria(this.data.id).subscribe({next:e=>{this._snackBar.open("Categor\xEDa eliminada.","Aceptar",{duration:3e3})},error:e=>{this._snackBar.open("Ha ocurrido un error.","Aceptar",{duration:3e3})}})}};a.\u0275fac=function(t){return new(t||a)(s(S),s(Y),s(x))},a.\u0275cmp=f({type:a,selectors:[["app-dasheliminarproductcategory"]],standalone:!0,features:[_],decls:4,vars:1,consts:[["mat-dialog-title",""],["align","end"],["mat-button","","mat-dialog-close",""],["mat-button","","mat-dialog-close","","cdkFocusInitial","",1,"aceptar",3,"click"]],template:function(t,n){t&1&&(o(0,"h2",0),c(1,"Eliminar categor\xEDa de producto"),i(),h(2,de,7,1)(3,ue,3,0)),t&2&&(l(2),b(2,n.categoria?2:3))},dependencies:[y,ee,te,ae,ie,E,M],styles:[".aceptar[_ngcontent-%COMP%]{background-color:red;color:var(--white)}"]});let r=a;return r})();function pe(r,a){if(r&1&&(o(0,"span"),c(1),i()),r&2){let m=p();l(),v(" Imagen: ",m.imagenElegida.nombre,"")}}var Ne=(()=>{let a=class a{constructor(e,t,n,F){this.title=e,this.productService=t,this._snackBar=n,this.router=F,this.columns=["Nombre","Slug"],this.displayedColumns=[...this.columns,"acciones"],this.botones=[{id:1,nombre:"Editar",class:"",accion:k=>this.abrirEditarCategoria(k)},{id:2,nombre:"Eliminar",class:"danger",accion:k=>this.openDialogEliminarCategoria(k)}],this.crearCategoriaForm=new G({nombre:new D("",g.required),slug:new D("",g.required),imagen_id:new D(0,g.compose([g.minLength(1)]))??null}),this.dialog=I(Z),this.imagenSeleccionada=P("")}ngOnInit(){this.title.setTitle("Categor\xEDas de producto < EasyShop"),this.getProductcategories(),this.suscripcion=this.productService.refresh$.subscribe(()=>{this.getProductcategories()})}ngOnDestroy(){this.suscripcion.unsubscribe()}getProductcategories(){this.productService.getCategorias().subscribe({next:e=>{this.data=e.data},error:e=>{console.error(e)}})}crearProductcategory(){this.crearCategoriaForm.valid&&this.productService.postCategoria(this.crearCategoriaForm.value).subscribe({next:e=>{this._snackBar.open("Categor\xEDa creada.","Aceptar",{duration:3e3})},error:e=>{this._snackBar.open(e.error.result,"Aceptar",{duration:3e3})}})}openDialogSeleccionarImagen(){this.dialog.open(re,{data:{imagenSeleccionada:{id:null,nombre:""}}}).afterClosed().subscribe(t=>{t!==void 0&&(this.imagenSeleccionada.set(t),this.imagenElegida=t,this.crearCategoriaForm.patchValue({imagen_id:this.imagenElegida.id}))})}abrirEditarCategoria(e){this.router.navigate(["dashboard/categoriasproducto",e])}openDialogEliminarCategoria(e){this.dialog.open(ne,{data:{id:e}})}};a.\u0275fac=function(t){return new(t||a)(s(N),s(S),s(x),s(O))},a.\u0275cmp=f({type:a,selectors:[["app-dashboardcategoriasproducto"]],standalone:!0,features:[_],decls:29,vars:8,consts:[[1,"encabezado-media"],[1,"container-categorias"],[1,"lista-categorias"],[3,"columns","displayedColumns","data","buttons","btnDangerAll"],[1,"form-categorias"],[1,"example-form",3,"formGroup"],[1,"example-full-width"],["matInput","","placeholder","Nombre de la categor\xEDa","formControlName","nombre","ngDefaultControl","","required",""],["matInput","","placeholder","Slug de la categor\xEDa","formControlName","slug","ngDefaultControl","","required",""],["mat-flat-button","",1,"select-image",3,"click"],["mat-stroked-button","","type","submit",3,"click","disabled"]],template:function(t,n){t&1&&(o(0,"main")(1,"div",0)(2,"h1"),c(3,"Categor\xEDas de producto"),i()(),o(4,"div",1)(5,"section",2),d(6,"app-tablacompleta",3)(7,"br"),o(8,"p"),c(9,"*El slug es una peque\xF1a parte del enlace que representa a la categor\xEDa. Debe ser \xFAnico."),i()(),o(10,"aside",4)(11,"h2"),c(12,"A\xF1adir nueva categor\xEDa"),i(),o(13,"form",5)(14,"mat-form-field",6)(15,"mat-label"),c(16,"Nombre"),i(),d(17,"input",7),i(),o(18,"mat-form-field",6)(19,"mat-label"),c(20,"Slug"),i(),d(21,"input",8),i(),o(22,"button",9),u("click",function(){return n.openDialogSeleccionarImagen()}),c(23,"Seleccionar imagen"),i(),h(24,pe,2,1,"span"),d(25,"br")(26,"br"),o(27,"button",10),u("click",function(){return n.crearProductcategory()}),c(28,"Guardar"),i()()()()()),t&2&&(l(6),C("columns",n.columns)("displayedColumns",n.displayedColumns)("data",n.data)("buttons",n.botones)("btnDangerAll",!0),l(7),C("formGroup",n.crearCategoriaForm),l(11),b(24,n.imagenSeleccionada()?24:-1),l(3),C("disabled",!n.crearCategoriaForm.valid))},dependencies:[oe,B,E,M,U,Q,K,X,W,y,J,R,j,q,V,H,L,z,$],styles:[".container-categorias[_ngcontent-%COMP%]{display:flex;gap:2rem}.lista-categorias[_ngcontent-%COMP%]{width:60%}.select-image[_ngcontent-%COMP%]{background-color:var(--darkblue);color:var(--white)}.form-categorias[_ngcontent-%COMP%]{width:40%}.example-form[_ngcontent-%COMP%]{min-width:150px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}"]});let r=a;return r})();export{Ne as DashboardcategoriasproductoComponent};
