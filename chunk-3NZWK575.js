import{a as g}from"./chunk-LXDLCDYJ.js";import{c as te}from"./chunk-YK5JBHKT.js";import{a as se}from"./chunk-TKJMUKLG.js";import"./chunk-BJKW2MZI.js";import"./chunk-5V7AZGGS.js";import{b as oe}from"./chunk-JI4B56LL.js";import"./chunk-Y4ZCGVAW.js";import{c as ie,d as ne}from"./chunk-3TBXM6QS.js";import{a as Y,g as Z,h as ee}from"./chunk-7ITRIRQH.js";import{a as E}from"./chunk-PE3AIABI.js";import{b as x,c as ae,d as I,e as F,f as A,g as y,h as j}from"./chunk-SMOEXM7I.js";import{b as R,d as h,f as z,g as H,h as J,j as D,k as $,m as K,n as Q,s as U,t as W,u as X}from"./chunk-33HZCSPU.js";import{d as L}from"./chunk-LVI2TU4A.js";import{o as v,q as _}from"./chunk-UKCT2NNU.js";import"./chunk-AESYL7IM.js";import"./chunk-YRYHB4P2.js";import"./chunk-I7KWM6MY.js";import{i as P}from"./chunk-IQAKLUFA.js";import{Ab as o,Bb as n,Cb as c,Gb as q,Jb as u,Lb as C,Mc as G,Vb as s,Ya as m,Yb as V,Za as l,cc as f,ga as O,la as p,ob as b,qb as T,ua as w,va as k,vb as S}from"./chunk-BEZRA2BD.js";function fe(a,i){if(a&1&&(o(0,"form",2)(1,"mat-form-field",6)(2,"mat-label"),s(3,"Nombre"),n(),c(4,"input",7),n(),o(5,"mat-form-field",6)(6,"mat-label"),s(7,"Apellidos"),n(),c(8,"input",8),n(),o(9,"mat-form-field",6)(10,"mat-label"),s(11,"Correo electr\xF3nico"),n(),c(12,"input",9),n(),o(13,"mat-form-field",6)(14,"mat-label"),s(15,"Asunto"),n(),c(16,"input",10),n(),o(17,"mat-form-field",6)(18,"mat-label"),s(19,"Mensaje"),n(),c(20,"textarea",11),n()()),a&2){let d=C();T("formGroup",d.editarMensajeForm)}}function he(a,i){a&1&&(o(0,"p"),s(1,"El mensaje al que trata de acceder no existe."),n())}var ce=(()=>{let i=class i{constructor(e,t,r){this.data=e,this.mensajeService=t,this._snackBar=r,this.editarMensajeForm=new J({nombre:new D("",h.required),apellidos:new D("",h.required),email:new D("",h.compose([h.email,h.required])),asunto:new D("",h.required),mensaje:new D("",h.required)})}ngOnInit(){console.log("\xC9stos son los datos recibidos:",this.data.id),this.getMensaje(this.data.id)}getMensaje(e){this.mensajeService.getMensaje(e).subscribe({next:t=>{this.mensaje=t,this.editarMensajeForm.patchValue({nombre:this.mensaje.Nombre,apellidos:this.mensaje.Apellidos,email:this.mensaje.Email,asunto:this.mensaje.Asunto,mensaje:this.mensaje.Mensaje})},error:t=>{console.error(t)}})}editarMensaje(){this.editarMensajeForm.valid&&this.mensajeService.updateMensaje(this.data.id,this.editarMensajeForm.value).subscribe({next:e=>{this._snackBar.open("Mensaje editado.","Aceptar",{duration:3e3})},error:e=>{console.error(e)}})}};i.\u0275fac=function(t){return new(t||i)(l(x),l(g),l(E))},i.\u0275cmp=p({type:i,selectors:[["app-dasheditarmensaje"]],standalone:!0,features:[f],decls:10,vars:2,consts:[["mat-dialog-title",""],[1,"mat-typography"],[1,"example-form",3,"formGroup"],["align","end"],["mat-button","","mat-dialog-close",""],["mat-button","","cdkFocusInitial","",3,"click","mat-dialog-close"],[1,"example-full-width"],["matInput","","placeholder","Ejemplo: Pepe","formControlName","nombre","ngDefaultControl","","required",""],["matInput","","placeholder","Ejemplo: Guti\xE9rrez","formControlName","apellidos","ngDefaultControl","","required",""],["matInput","","placeholder","Ejemplo: pepe@gmail.com","formControlName","email","ngDefaultControl","","required",""],["matInput","","placeholder","Ejemplo: Pregunta sobre producto #157","formControlName","asunto","ngDefaultControl","","required",""],["matInput","","placeholder","Tu consulta","formControlName","mensaje","ngDefaultControl","","required",""]],template:function(t,r){t&1&&(o(0,"h2",0),s(1,"Editar mensaje"),n(),o(2,"mat-dialog-content",1),b(3,fe,21,1,"form",2)(4,he,2,0),n(),o(5,"mat-dialog-actions",3)(6,"button",4),s(7,"Cancelar"),n(),o(8,"button",5),u("click",function(){return r.editarMensaje()}),s(9,"Guardar"),n()()),t&2&&(m(3),S(3,r.mensaje?3:4),m(5),T("mat-dialog-close",!0))},dependencies:[j,I,F,y,A,_,v,ee,Z,Y,te,ne,ie,oe,W,$,R,z,H,U,X,K,Q],styles:[".example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}"]});let a=i;return a})();function je(a,i){if(a&1){let d=q();o(0,"mat-dialog-content"),s(1),n(),o(2,"mat-dialog-actions",1)(3,"button",2),s(4,"No"),n(),o(5,"button",3),u("click",function(){w(d);let t=C();return k(t.eliminarMensaje())}),s(6,"S\xED"),n()()}if(a&2){let d=C();m(),V(" \xBFEst\xE1s seguro de que quieres eliminar el mensaje de ",d.mensaje.Nombre," ",d.mensaje.Apellidos,"? ")}}function ge(a,i){a&1&&(o(0,"mat-dialog-content")(1,"p"),s(2,"Cargando mensaje..."),n()())}var de=(()=>{let i=class i{constructor(e,t,r){this.data=e,this.mensajeService=t,this._snackBar=r}ngOnInit(){this.data.id&&this.getMensaje(this.data.id)}getMensaje(e){this.mensajeService.getMensaje(e).subscribe({next:t=>{this.mensaje=t},error:t=>{console.error(t)}})}eliminarMensaje(){this.mensajeService.deleteMensaje(this.data.id).subscribe({next:e=>{this._snackBar.open("Mensaje eliminado.","Aceptar",{duration:3e3})},error:e=>{console.error("Ha ocurrido un error:",e)}})}};i.\u0275fac=function(t){return new(t||i)(l(x),l(g),l(E))},i.\u0275cmp=p({type:i,selectors:[["app-dasheliminarmensaje"]],standalone:!0,features:[f],decls:4,vars:1,consts:[["mat-dialog-title",""],["align","end"],["mat-button","","mat-dialog-close",""],["mat-button","","mat-dialog-close","","cdkFocusInitial","",1,"aceptar",3,"click"]],template:function(t,r){t&1&&(o(0,"h2",0),s(1,"Eliminar mensaje"),n(),b(2,je,7,2)(3,ge,3,0)),t&2&&(m(2),S(2,r.mensaje?2:3))},dependencies:[j,I,F,y,A,_,v],styles:[".aceptar[_ngcontent-%COMP%]{background-color:red;color:var(--white)}"]});let a=i;return a})();function Me(a,i){if(a&1){let d=q();o(0,"mat-dialog-content"),s(1," \xBFEst\xE1s seguro de que quieres eliminar los mensajes seleccionados? "),c(2,"br"),o(3,"span",1),s(4,"\xA1OJO! Si has pulsado el bot\xF3n para seleccionar todo, se eliminar\xE1n todos los mensajes, incluidos aquellos que no aparezcan en la vista actual."),n()(),o(5,"mat-dialog-actions",2)(6,"button",3),s(7,"No"),n(),o(8,"button",4),u("click",function(){w(d);let t=C();return k(t.eliminarSeleccionados())}),s(9,"S\xED"),n()()}}function Ce(a,i){a&1&&(o(0,"mat-dialog-content"),s(1," No hay registros seleccionados. "),c(2,"br"),n(),o(3,"mat-dialog-actions",2)(4,"button",3),s(5,"Aceptar"),n()())}var pe=(()=>{let i=class i{constructor(e,t,r){this.data=e,this.mensajeService=t,this._snackBar=r}ngOnInit(){this.idsMensajes=this.data.ids,console.log(this.data)}eliminarSeleccionados(){this.mensajeService.deleteMensaje(this.idsMensajes).subscribe({next:e=>{console.log(e),this._snackBar.open("Mensajes eliminados.","Aceptar",{duration:3e3})},error:e=>{console.error(e)}})}};i.\u0275fac=function(t){return new(t||i)(l(x),l(g),l(E))},i.\u0275cmp=p({type:i,selectors:[["app-dasheliminarseleccionmensajes"]],standalone:!0,features:[f],decls:4,vars:1,consts:[["mat-dialog-title",""],[1,"caution"],["align","end"],["mat-button","","mat-dialog-close",""],["mat-button","","mat-dialog-close","","cdkFocusInitial","",1,"aceptar",3,"click"]],template:function(t,r){t&1&&(o(0,"h2",0),s(1,"Eliminar mensajes seleccionados"),n(),b(2,Me,10,0)(3,Ce,6,0)),t&2&&(m(2),S(2,r.idsMensajes.length>0?2:3))},dependencies:[j,I,F,y,A,_,v],styles:[".caution[_ngcontent-%COMP%]{color:red}.aceptar[_ngcontent-%COMP%]{background-color:red;color:var(--white)}"]});let a=i;return a})();var We=(()=>{let i=class i{constructor(e,t,r){this.title=e,this.mensajeService=t,this.router=r,this.columns=["Nombre","Apellidos","Asunto","Fecha"],this.displayedColumns=["select",...this.columns,"acciones"],this.selectedIds=[],this.botones=[{id:1,nombre:"Ver",class:"",accion:M=>this.verMensaje(M)},{id:2,nombre:"Editar",class:"",accion:M=>this.openDialogEditarMensaje(M)},{id:3,nombre:"Eliminar",class:"danger",accion:M=>this.openDialogEliminarMensaje(M)}],this.dialog=O(ae)}ngOnInit(){this.title.setTitle("Mensajes < EasyShop"),this.getMessages(),this.suscripcion=this.mensajeService.refresh$.subscribe(()=>{this.getMessages()})}ngOnDestroy(){this.suscripcion.unsubscribe()}getMessages(){this.mensajeService.getAllMensajes().subscribe({next:e=>{console.log(e),this.data=e},error:e=>{console.error(e)}})}verMensaje(e){this.router.navigate(["dashboard/mensajes",e])}openDialogEditarMensaje(e){this.dialog.open(ce,{data:{id:e}})}openDialogEliminarMensaje(e){this.dialog.open(de,{data:{id:e}})}onSelectionChange(e){this.selectedIds=e}openDialogEliminarSeleccionMensajes(){this.dialog.open(pe,{data:{ids:this.selectedIds}})}};i.\u0275fac=function(t){return new(t||i)(l(P),l(g),l(L))},i.\u0275cmp=p({type:i,selectors:[["app-dashboardmensajes"]],standalone:!0,features:[f],decls:5,vars:5,consts:[[3,"selectionChange","columns","displayedColumns","data","buttons","eliminarSeleccionados"]],template:function(t,r){t&1&&(o(0,"main")(1,"section")(2,"h1"),s(3,"Mensajes"),n(),o(4,"app-tablacompleta",0),u("selectionChange",function(ue){return r.onSelectionChange(ue)}),n()()()),t&2&&(m(4),T("columns",r.columns)("displayedColumns",r.displayedColumns)("data",r.data)("buttons",r.botones)("eliminarSeleccionados",r.openDialogEliminarSeleccionMensajes.bind(r)))},dependencies:[se,G,j]});let a=i;return a})();export{We as DashboardmensajesComponent};
