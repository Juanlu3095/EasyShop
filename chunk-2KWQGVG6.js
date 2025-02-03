import{a as at}from"./chunk-NACPSX2R.js";import"./chunk-XXN7YHGW.js";import"./chunk-42JTQIQS.js";import"./chunk-BJKW2MZI.js";import"./chunk-5V7AZGGS.js";import{a as rt,b as nt}from"./chunk-JI4B56LL.js";import"./chunk-Y4ZCGVAW.js";import{a as Z,c as tt,d as et}from"./chunk-3TBXM6QS.js";import{a as W,g as X,h as Y}from"./chunk-7ITRIRQH.js";import{a as L}from"./chunk-UIFHNKPJ.js";import{a as Q}from"./chunk-PE3AIABI.js";import{c as it,h as ot}from"./chunk-SMOEXM7I.js";import{b as T,d as l,f as z,g as q,h as V,j as c,k as j,l as R,m as B,n as G,s as U,t as $,u as K}from"./chunk-33HZCSPU.js";import{b as F}from"./chunk-V6CHNUWL.js";import{o as H,q as J}from"./chunk-UKCT2NNU.js";import"./chunk-AESYL7IM.js";import"./chunk-YRYHB4P2.js";import{Z as A}from"./chunk-I7KWM6MY.js";import{i as k,k as O}from"./chunk-X2X7HICG.js";import{Ab as e,Bb as t,Cb as m,Gb as D,Jb as M,Lb as s,Ob as y,Va as P,Vb as i,Wb as S,Ya as p,Za as u,cc as N,ga as E,ib as I,la as w,ob as g,qb as _,ua as x,va as b,vb as h,yb as C,zb as v}from"./chunk-BEZRA2BD.js";var dt=(o,a)=>a.Id;function mt(o,a){if(o&1&&m(0,"img",24),o&2){let r=s(2);y("src",r.archivoEndpoint+r.imagenElegida.ruta,P)}}function lt(o,a){if(o&1&&(e(0,"mat-option",28),i(1),t()),o&2){let r=a.$implicit;_("value",r.Id),p(),S(r.Nombre)}}function pt(o,a){if(o&1&&C(0,lt,2,2,"mat-option",28,dt),o&2){let r=s(2);v(r.categorias)}}function st(o,a){if(o&1&&(e(0,"mat-option",28),i(1),t()),o&2){let r=a.$implicit;_("value",r.Id),p(),S(r.Nombre)}}function ut(o,a){if(o&1&&C(0,st,2,2,"mat-option",28,dt),o&2){let r=s(2);v(r.marcas)}}function gt(o,a){if(o&1){let r=D();e(0,"form",3)(1,"div",4)(2,"section",5)(3,"div",6)(4,"mat-form-field",7)(5,"mat-label"),i(6,"Nombre del producto"),t(),m(7,"input",8),t()(),e(8,"div",6)(9,"mat-form-field",7)(10,"mat-label"),i(11,"Descripci\xF3n del producto"),t(),m(12,"textarea",9,0),t()(),e(14,"div",6)(15,"h2"),i(16,"Datos del producto"),t(),e(17,"div",10)(18,"mat-form-field",7)(19,"mat-label"),i(20,"Precio (\u20AC)"),t(),m(21,"input",11),t(),e(22,"mat-form-field",7)(23,"mat-label"),i(24,"Precio rebajado (\u20AC) (si procede)"),t(),m(25,"input",12),t()(),e(26,"div",10)(27,"mat-form-field",7)(28,"mat-label"),i(29,"SKU"),t(),m(30,"input",13),t(),e(31,"mat-form-field",7)(32,"mat-label"),i(33,"ISBN/EAN"),t(),m(34,"input",14),t()(),e(35,"mat-form-field",7)(36,"mat-label"),i(37,"Inventario"),t(),m(38,"input",15),t()(),e(39,"div",6)(40,"mat-form-field",7)(41,"mat-label"),i(42,"Descripci\xF3n corta del producto"),t(),m(43,"textarea",16,0),t()()(),e(45,"aside",17)(46,"div",6)(47,"div")(48,"mat-form-field",7)(49,"mat-label"),i(50,"Estado del producto"),t(),e(51,"mat-select",18)(52,"mat-option",19),i(53,"Publicada"),t(),e(54,"mat-option",20),i(55,"Borrador"),t()()()(),e(56,"div",21)(57,"button",22),M("click",function(){x(r);let d=s();return b(d.editarProducto())}),i(58,"Guardar"),t()()(),e(59,"div",6)(60,"h2"),i(61,"Imagen del producto"),t(),e(62,"div",23),g(63,mt,1,1,"img",24),m(64,"br"),e(65,"button",25),M("click",function(){x(r);let d=s();return b(d.openDialogSeleccionarImagen())}),i(66,"Seleccionar imagen"),t()()(),e(67,"div",6)(68,"h2"),i(69,"Categor\xEDa y marca"),t(),e(70,"mat-form-field",7)(71,"mat-label"),i(72,"Categor\xEDa"),t(),e(73,"mat-select",26),g(74,pt,2,0),t()(),e(75,"mat-form-field",7)(76,"mat-label"),i(77,"Marca"),t(),e(78,"mat-select",27),g(79,ut,2,0),t()()()()()()}if(o&2){let r=s();_("formGroup",r.editarproductoForm),p(63),h(63,r.producto.Imagen[0]||r.imagenSeleccionada()?63:-1),p(11),h(74,r.categorias?74:-1),p(5),h(79,r.marcas?79:-1)}}var qt=(()=>{let a=class a{constructor(n,d,f,ct){this.title=n,this.productService=d,this._snackBar=f,this.activatedRoute=ct,this.archivoEndpoint=O.DriveEndpoint,this.editarproductoForm=new V({nombre:new c("",l.required),descripcion:new c("",l.required),precio:new c(0,l.required),precio_rebajado:new c(null),sku:new c(""),isbn_ean:new c(""),inventario:new c(null),descripcion_corta:new c("",l.required),estado:new c("",l.required),imagen_id:new c(0,l.compose([l.minLength(1)])),categoria_id:new c(null,l.required),marca_id:new c(null)}),this.dialog=E(it),this.imagenSeleccionada=I("")}ngOnInit(){this.title.setTitle("Editar producto < EasyShop"),this.getCategorias(),this.getMarcas(),this.idProducto=Number(this.activatedRoute.snapshot.paramMap.get("idproducto"))??null,this.getProduct(),this.suscripcion=this.productService.refresh$.subscribe(()=>{this.getProduct()})}ngOnDestroy(){this.suscripcion.unsubscribe()}openDialogSeleccionarImagen(){this.dialog.open(at,{data:{imagenSeleccionada:{id:null,nombre:"",ruta:""}}}).afterClosed().subscribe(d=>{d!==void 0&&(this.imagenSeleccionada.set(d),d!=""&&(this.imagenElegida=d),this.editarproductoForm.patchValue({imagen_id:this.imagenElegida.id}))})}editarProducto(){this.editarproductoForm.valid?this.productService.updateProducto(this.idProducto,this.editarproductoForm.value).subscribe({next:n=>{this._snackBar.open("Producto modificado.","Aceptar",{duration:3e3})},error:n=>{this._snackBar.open("Ha ocurrido un error.","Aceptar",{duration:3e3})}}):console.error("Form no v\xE1lido")}getProduct(){this.productService.getProducto(this.idProducto).subscribe({next:n=>{this.producto=n,n.Imagen.length>0?(this.editarproductoForm.patchValue({nombre:this.producto.Nombre,descripcion:this.producto.Descripcion,precio:this.producto.Precio_euros,precio_rebajado:this.producto.Precio_rebajado_euros||null,sku:this.producto.SKU,isbn_ean:this.producto.ISBN_EAN,inventario:this.producto.Inventario||null,descripcion_corta:this.producto.Descripcion_corta,estado:this.producto.Estado_producto,imagen_id:this.producto.Imagen[0].Id??null,categoria_id:this.producto.Categoria_id||null,marca_id:this.producto.Marca_id||null}),this.imagenElegida={id:this.producto.Imagen[0].Id,nombre:this.producto.Imagen[0].Nombre_imagen,ruta:this.producto.Imagen[0].Ruta_archivo}):this.editarproductoForm.patchValue({nombre:this.producto.Nombre,descripcion:this.producto.Descripcion,precio:this.producto.Precio_euros,precio_rebajado:this.producto.Precio_rebajado_euros||null,sku:this.producto.SKU,isbn_ean:this.producto.ISBN_EAN,inventario:this.producto.Inventario||null,descripcion_corta:this.producto.Descripcion_corta,estado:this.producto.Estado_producto,categoria_id:this.producto.Categoria_id||null,marca_id:this.producto.Marca_id||null})},error:n=>{console.error(n)}})}getMarcas(){this.productService.getMarcas().subscribe({next:n=>{this.marcas=n},error:n=>{console.error(n)}})}getCategorias(){this.productService.getCategorias().subscribe({next:n=>{this.categorias=n.data},error:n=>{console.error(n)}})}};a.\u0275fac=function(d){return new(d||a)(u(k),u(L),u(Q),u(F))},a.\u0275cmp=w({type:a,selectors:[["app-dashboardproductseditar"]],standalone:!0,features:[N],decls:9,vars:1,consts:[["autosize","cdkTextareaAutosize"],[1,"encabezado-productonuevo"],["href","dashboard/productos"],[3,"formGroup"],[1,"product-data"],[1,"product-data-izq"],[1,"input-border"],[1,"example-full-width"],["matInput","","type","text","formControlName","nombre"],["matInput","","formControlName","descripcion","cdkTextareaAutosize","","cdkAutosizeMinRows","10","cdkAutosizeMaxRows","10"],[1,"input-group-flex"],["matInput","","type","number","formControlName","precio"],["matInput","","type","number","formControlName","precio_rebajado"],["matInput","","type","text","formControlName","sku"],["matInput","","type","text","formControlName","isbn_ean"],["matInput","","type","number","formControlName","inventario"],["matInput","","formControlName","descripcion_corta","cdkTextareaAutosize","","cdkAutosizeMinRows","5","cdkAutosizeMaxRows","10"],[1,"product-data-dcha"],["required","","formControlName","estado","ngDefaultControl",""],["value","publicada"],["value","borrador"],[1,"guardar"],["mat-flat-button","","type","submit",3,"click"],[1,"image-container"],[1,"imagenSeleccionada",3,"src"],["mat-flat-button","",1,"select-image",3,"click"],["required","","formControlName","categoria_id","ngDefaultControl",""],["required","","formControlName","marca_id","ngDefaultControl",""],[3,"value"]],template:function(d,f){d&1&&(e(0,"main")(1,"section",1)(2,"h1"),i(3,"Editar producto"),t(),e(4,"a",2),i(5,"\u2190 Volver a la p\xE1gina anterior"),t()(),m(6,"br")(7,"br"),g(8,gt,80,4,"form",3),t()),d&2&&(p(8),h(8,f.producto?8:-1))},dependencies:[J,H,Y,X,W,et,tt,Z,ot,nt,rt,A,K,j,T,R,z,q,U,B,G,$],styles:[".product-data[_ngcontent-%COMP%]{display:flex;width:100%;gap:2rem}@media only screen and (max-width: 767px){.product-data[_ngcontent-%COMP%]{flex-direction:column}}.product-data-izq[_ngcontent-%COMP%]{width:70%}@media only screen and (min-width: 767px) and (max-width: 1023px){.product-data-izq[_ngcontent-%COMP%]{width:60%}}@media only screen and (max-width: 767px){.product-data-izq[_ngcontent-%COMP%]{width:100%}}.product-data-dcha[_ngcontent-%COMP%]{width:30%}@media only screen and (min-width: 767px) and (max-width: 1023px){.product-data-dcha[_ngcontent-%COMP%]{width:40%}}@media only screen and (max-width: 767px){.product-data-dcha[_ngcontent-%COMP%]{width:100%}}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}.card-precios[_ngcontent-%COMP%]{display:flex;gap:2rem}.input-border[_ngcontent-%COMP%]{padding:1rem 1rem 0;margin-bottom:1rem;border:1px solid lightgray;background-color:#fff}.input-border-flex[_ngcontent-%COMP%]{padding:1rem 1rem 0;margin-bottom:1rem;display:flex;gap:1rem;background-color:#fff;border:1px solid lightgray}.input-group-flex[_ngcontent-%COMP%]{display:flex;gap:1rem}.guardar[_ngcontent-%COMP%]{text-align:right;padding-bottom:1rem}.guardar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .image-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--darkblue);color:var(--white)}.image-container[_ngcontent-%COMP%]{padding-bottom:1rem;text-align:center}.imagenSeleccionada[_ngcontent-%COMP%]{padding:1rem;max-width:250px}"]});let o=a;return o})();export{qt as DashboardproductseditarComponent};
