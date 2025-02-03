import{a as w}from"./chunk-YUTX5S43.js";import{a as Me}from"./chunk-34JUEJJQ.js";import{a as ue,b as fe,c as U}from"./chunk-YK5JBHKT.js";import{b as X}from"./chunk-JI4B56LL.js";import{c as F,d as E}from"./chunk-3TBXM6QS.js";import{a as b,g as D,h as I}from"./chunk-7ITRIRQH.js";import{a as $}from"./chunk-PE3AIABI.js";import{a as xe}from"./chunk-4AJ3ZCJG.js";import{b as he,c as ve,d as K,e as J,f as Q,g as W,h as S}from"./chunk-SMOEXM7I.js";import{b as P,d as h,f as A,g as G,h as V,j as u,k as L,m as q,n as B,s as j,t as z,u as H}from"./chunk-33HZCSPU.js";import{o as C,q as R}from"./chunk-UKCT2NNU.js";import"./chunk-AESYL7IM.js";import"./chunk-I7KWM6MY.js";import{i as ge,k as O}from"./chunk-XXO6A46Z.js";import{Ab as n,Bb as e,Cb as d,Dc as se,Gb as Z,Jb as g,Kc as de,Lb as x,Mc as ce,Rc as pe,Va as te,Vb as a,Xb as M,Ya as l,Za as c,bc as oe,cc as _,ga as ee,gc as re,ic as me,la as v,ob as T,pc as le,qb as p,rb as ie,ua as y,va as k,vb as N,yb as ne,zb as ae}from"./chunk-BEZRA2BD.js";var Ie=(()=>{let o=class o{constructor(t,i){this.imageService=t,this._snackBar=i,this.images=[],this.crearImagenForm=new V({nombre:new u("",h.required),alt:new u("",h.required),descripcion:new u("",h.required),leyenda:new u("",h.required)}),this.fileformData=new FormData}crearImagen(){let t=new FormData;if(this.crearImagenForm.valid){t.append("nombre",this.crearImagenForm.value.nombre??""),t.append("alt",this.crearImagenForm.value.alt??""),t.append("descripcion",this.crearImagenForm.value.descripcion??""),t.append("leyenda",this.crearImagenForm.value.leyenda??"");let i=this.fileformData.get("archivo");if(i)t.append("archivo",i);else{console.error("No se ha seleccionado ning\xFAn archivo.");return}this.imageService.postImage(t).subscribe({next:r=>{console.log(r),this._snackBar.open("Imagen creada.","Aceptar",{duration:3e3})},error:r=>{console.error(r),this._snackBar.open("El archivo no se ha podido procesar.","Aceptar",{duration:3e3})}})}}getFile(t){let r=t.target.files;if(r.length>0&&r!=null){let f=r[0];this.fileformData.set("archivo",f)}}};o.\u0275fac=function(i){return new(i||o)(c(w),c($))},o.\u0275cmp=v({type:o,selectors:[["app-dashnuevamedia"]],standalone:!0,features:[_],decls:29,vars:4,consts:[["mat-dialog-title",""],[1,"mat-typography"],[1,"example-form",3,"formGroup"],[1,"example-full-width"],["type","text","matInput","","placeholder","Escribe un nombre para la imagen","value","","formControlName","nombre","required","","ngDefaultControl",""],["type","text","matInput","","placeholder","Texto alternativo de la imagen","formControlName","alt","ngDefaultControl","","required",""],["type","text","matInput","","placeholder","Leyenda de la imagen","formControlName","leyenda","ngDefaultControl","","required",""],["matInput","","placeholder","Descripci\xF3n de la imagen","formControlName","descripcion","ngDefaultControl","","required",""],["appearance","outline",1,"file-input","form-field"],["type","file","name","archivo","required","",3,"change"],["hidden","","matInput",""],["align","end"],["mat-button","","mat-dialog-close",""],["mat-button","","cdkFocusInitial","",3,"click","mat-dialog-close"]],template:function(i,r){i&1&&(n(0,"h2",0),a(1,"A\xF1adir medio"),e(),n(2,"mat-dialog-content",1)(3,"form",2)(4,"mat-form-field",3)(5,"mat-label"),a(6,"Nombre"),e(),d(7,"input",4),e(),n(8,"mat-form-field",3)(9,"mat-label"),a(10,"Texto alternativo"),e(),d(11,"input",5),e(),n(12,"mat-form-field",3)(13,"mat-label"),a(14,"Leyenda"),e(),d(15,"input",6),e(),n(16,"mat-form-field",3)(17,"mat-label"),a(18,"Descripci\xF3n"),e(),d(19,"textarea",7),e(),n(20,"mat-form-field",8),d(21,"mat-label"),n(22,"input",9),g("change",function(Y){return r.getFile(Y)}),e(),d(23,"input",10),e()()(),n(24,"mat-dialog-actions",11)(25,"button",12),a(26,"Cancelar"),e(),n(27,"button",13),g("click",function(){return r.crearImagen()}),a(28,"Guardar"),e()()),i&2&&(l(3),p("formGroup",r.crearImagenForm),l(17),ie("width",100,"%"),l(7),p("mat-dialog-close",!0))},dependencies:[S,K,J,W,Q,R,C,I,D,b,E,F,X,z,L,P,A,G,j,H,q,B],styles:[".example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}"]});let m=o;return m})();function Te(m,o){if(m&1&&(n(0,"div",2)(1,"section",7),d(2,"img",8),e(),n(3,"section")(4,"div",9)(5,"p")(6,"strong"),a(7,"Fecha de subida:"),e(),a(8),re(9,"date"),e(),n(10,"p")(11,"strong"),a(12,"Tama\xF1o del archivo:"),e(),a(13),e(),n(14,"p")(15,"strong"),a(16,"Dimensiones:"),e(),a(17),e(),n(18,"p")(19,"strong"),a(20,"Nombre del archivo:"),e(),a(21),e(),n(22,"p")(23,"strong"),a(24,"Tipo de archivo:"),e(),a(25),e()(),d(26,"hr"),n(27,"form",10)(28,"mat-form-field",11)(29,"mat-label"),a(30,"Nombre"),e(),d(31,"input",12),e(),n(32,"mat-form-field",11)(33,"mat-label"),a(34,"Texto alternativo"),e(),d(35,"input",13),e(),n(36,"mat-form-field",11)(37,"mat-label"),a(38,"Leyenda"),e(),d(39,"input",14),e(),n(40,"mat-form-field",11)(41,"mat-label"),a(42,"Descripci\xF3n"),e(),d(43,"textarea",15),e()()()()),m&2){let s=x();l(2),p("src",s.storageEndpoint+s.imagen.Archivo,te)("alt",s.imagen.Alt),l(6),M(" ",me(9,8,s.imagen.Fecha,"longDate"),""),l(5),M(" ",s.imagen.Tamano," KB"),l(4),M(" ",s.imagen.Dimensiones,""),l(4),M(" ",s.imagen.Nombre_archivo,""),l(4),M(" ",s.imagen.Tipo,""),l(2),p("formGroup",s.editarImagenForm)}}function Ne(m,o){m&1&&(n(0,"p"),a(1,"La imagen a la que trata de acceder no existe."),e())}se(Me,"es");var Fe=(()=>{let o=class o{constructor(t,i,r){this.data=t,this.imageService=i,this._snackBar=r,this.storageEndpoint=O.DriveEndpoint,this.editarImagenForm=new V({nombre:new u("",h.required),alt:new u(""),leyenda:new u(""),descripcion:new u("")})}ngOnInit(){this.getImagen(this.data.id)}getImagen(t){this.imageService.getImage(t).subscribe({next:i=>{this.imagen=i.data,this.editarImagenForm.patchValue({nombre:this.imagen.Nombre,alt:this.imagen.Alt,leyenda:this.imagen.Leyenda,descripcion:this.imagen.Descripcion})},error:i=>{console.error(i)}})}editarImagen(){this.editarImagenForm.valid&&this.imageService.updateImage(this.data.id,this.editarImagenForm.value).subscribe({next:t=>{this._snackBar.open("Imagen editada.","Aceptar",{duration:3e3})},error:t=>{console.error(t)}})}eliminarImagen(){confirm("Una vez elimines esta imagen no podr\xE1s recuperarla, \xBFest\xE1s seguro de que quieres eliminar este archivo?")?this.imageService.deleteImage(this.data.id).subscribe({next:i=>{this._snackBar.open("Imagen eliminada.","Aceptar",{duration:3e3})},error:i=>{console.error(i)}}):console.log("adios")}};o.\u0275fac=function(i){return new(i||o)(c(he),c(w),c($))},o.\u0275cmp=v({type:o,selectors:[["app-dasheditarmedia"]],standalone:!0,features:[oe([{provide:le,useValue:"es"}]),_],decls:12,vars:3,consts:[["mat-dialog-title",""],[1,"mat-typography"],[1,"container"],["align","end"],["mat-button","","mat-dialog-close",""],["mat-button","","cdkFocusInitial","",3,"click","mat-dialog-close"],["mat-button","",1,"danger",3,"click","mat-dialog-close"],[1,"imagen"],["mat-card-image","",3,"src","alt"],[1,"datos-imagen"],[1,"example-form",3,"formGroup"],[1,"example-full-width"],["matInput","","placeholder","Nombre de la imagen","formControlName","nombre","ngDefaultControl","","required",""],["matInput","","placeholder","Texto alternativo para SEO","formControlName","alt","ngDefaultControl",""],["matInput","","placeholder","Leyenda de la imagen","formControlName","leyenda","ngDefaultControl",""],["matInput","","placeholder","Descripci\xF3n de la imagen","formControlName","descripcion","ngDefaultControl",""]],template:function(i,r){i&1&&(n(0,"h2",0),a(1,"Detalles del medio"),e(),n(2,"mat-dialog-content",1),T(3,Te,44,11,"div",2)(4,Ne,2,0),e(),n(5,"mat-dialog-actions",3)(6,"button",4),a(7,"Cancelar"),e(),n(8,"button",5),g("click",function(){return r.editarImagen()}),a(9,"Guardar"),e(),n(10,"button",6),g("click",function(){return r.eliminarImagen()}),a(11,"Eliminar imagen"),e()()),i&2&&(l(3),N(3,r.imagen?3:4),l(5),p("mat-dialog-close",!0),l(2),p("mat-dialog-close",!0))},dependencies:[S,K,J,W,Q,R,C,I,D,b,U,E,F,X,z,L,P,A,G,j,H,q,B,ce,de],styles:[".container[_ngcontent-%COMP%]{display:flex}@media screen and (max-width: 767px){.container[_ngcontent-%COMP%]{flex-direction:column}}@media screen and (min-width: 768px){.container[_ngcontent-%COMP%]{flex-direction:row}}@media screen and (max-width: 767px){.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{width:100%}}@media screen and (min-width: 768px){.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{width:50%}}.imagen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:300px;max-height:300px;vertical-align:middle}.datos-imagen[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;line-height:normal}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}.danger[_ngcontent-%COMP%]{background-color:red;color:var(--white)}"]});let m=o;return m})();var Oe=(m,o)=>o.Id;function Pe(m,o){if(m&1){let s=Z();n(0,"mat-grid-tile")(1,"a",7),g("click",function(){let i=y(s).$implicit,r=x(2);return k(r.openDialogEditarMedio(i.Id))}),d(2,"img",8),e()()}if(m&2){let s=o.$implicit,t=x(2);l(2),p("ngSrc",t.storageEndpoint+s.Archivo)("alt",s.Alt)}}function Ae(m,o){if(m&1&&(n(0,"mat-grid-list",6),ne(1,Pe,3,2,"mat-grid-tile",null,Oe),e()),m&2){let s=x();p("cols",s.cols)("rowHeight",s.rowHeight),l(),ae(s.imagenesFiltradas)}}function Ge(m,o){m&1&&(n(0,"p"),a(1,"No hay im\xE1genes a mostrar."),e())}var _t=(()=>{let o=class o{constructor(t,i,r){this.title=t,this.imageService=i,this.responsiveService=r,this.imagenesFiltradas=[],this.suscripcion=[],this.storageEndpoint=O.DriveEndpoint,this.dialog=ee(ve)}ngOnInit(){this.disenoResponsivo(),this.title.setTitle("Galer\xEDa de medios < EasyShop"),this.getImagenes(),this.imagenes&&(this.imagenesFiltradas=[...this.imagenes]),this.suscripcion.push(this.imageService.refresh$.subscribe(()=>{this.getImagenes()}))}ngOnDestroy(){this.suscripcion.forEach(t=>{t.unsubscribe()})}openDialogNuevoMedio(){this.dialog.open(Ie)}openDialogEditarMedio(t){this.dialog.open(Fe,{data:{id:t}})}disenoResponsivo(){this.suscripcion.push(this.responsiveService.obtenerDispositivo().subscribe({next:t=>{switch(t){case"Desktop":this.cols=5,this.rowHeight="1.25:1";break;case"Port\xE1til":this.cols=4,this.rowHeight="1.5:1";break;case"Tablet":this.cols=3,this.rowHeight="1.5:1";break;case"M\xF3vil":this.cols=2,this.rowHeight="1.5:1";break;default:console.log("Dispositivo desconocido.");break}},error:t=>{console.error(t)}}))}getImagenes(){this.suscripcion.push(this.imageService.getImages().subscribe({next:t=>{console.log(t.data),this.imagenes=t.data,this.imagenesFiltradas=this.imagenes},error:t=>{console.error(t)}}))}aplicarFiltro(t){let i=t.target.value;i?this.imagenesFiltradas=this.imagenes.filter(r=>r.Nombre.toLowerCase().includes(i)):this.imagenesFiltradas=this.imagenes}};o.\u0275fac=function(i){return new(i||o)(c(ge),c(w),c(xe))},o.\u0275cmp=v({type:o,selectors:[["app-dashboardmedia"]],standalone:!0,features:[_],decls:15,vars:1,consts:[["input",""],[1,"media"],[1,"encabezado-media"],["mat-stroked-button","",3,"click"],[1,"listado-medios"],["matInput","","placeholder","",3,"keyup"],[1,"imagenes",3,"cols","rowHeight"],[3,"click"],["mat-card-image","","loading","lazy","fill","",3,"ngSrc","alt"]],template:function(i,r){if(i&1){let f=Z();n(0,"main")(1,"section",1)(2,"div",2)(3,"h1"),a(4,"Galer\xEDa de medios"),e(),n(5,"button",3),g("click",function(){return y(f),k(r.openDialogNuevoMedio())}),a(6,"A\xF1adir media"),e()(),n(7,"div",4)(8,"mat-form-field")(9,"mat-label"),a(10,"Filtro"),e(),n(11,"input",5,0),g("keyup",function(Ee){return y(f),k(r.aplicarFiltro(Ee))}),e()(),T(13,Ae,3,2,"mat-grid-list",6)(14,Ge,2,0),e()()()}i&2&&(l(13),N(13,r.imagenesFiltradas.length>0?13:14))},dependencies:[pe,C,I,D,b,E,F,U,fe,ue,S],styles:[".encabezado-media[_ngcontent-%COMP%]{display:flex;gap:1rem;margin-bottom:1rem}.encabezado-media[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-color:var(--darkblue)}.imagenes[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:300px;max-height:230px;object-fit:cover;margin:1rem}.imagenes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer}"]});let m=o;return m})();export{_t as DashboardmediaComponent};
