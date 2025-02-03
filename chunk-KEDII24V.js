import{a as ne}from"./chunk-XASMNLVX.js";import{a as ae}from"./chunk-JXWWU5P2.js";import"./chunk-BJKW2MZI.js";import"./chunk-5V7AZGGS.js";import{a as re,b as oe}from"./chunk-JI4B56LL.js";import"./chunk-Y4ZCGVAW.js";import{c as ee,d as te}from"./chunk-3TBXM6QS.js";import{a as X,g as Y,h as Z}from"./chunk-7ITRIRQH.js";import{a as W}from"./chunk-PE3AIABI.js";import{a as ie}from"./chunk-2OGK3DXK.js";import"./chunk-SMOEXM7I.js";import{b as O,d as c,f as V,g as Q,h as P,j as _,k as G,m as j,n as z,s as H,t as $,u as J}from"./chunk-33HZCSPU.js";import{o as L,q as K}from"./chunk-UKCT2NNU.js";import"./chunk-AESYL7IM.js";import"./chunk-YRYHB4P2.js";import{Z as B}from"./chunk-I7KWM6MY.js";import{i as A}from"./chunk-5XYOWQFX.js";import{Ab as a,Bb as i,Cb as u,Gb as I,Jb as q,Lb as h,Rb as g,Sb as v,Tb as E,Vb as l,Wb as R,Xb as N,Ya as p,Za as C,cc as T,jc as S,la as k,ob as x,qb as f,ua as U,va as y,vb as F,yb as D,zb as M}from"./chunk-BEZRA2BD.js";var me=["contentEliminar"],ue=["contentEliminarSeleccion"],ce=["contentCrear"],de=["contentEditar"],se=(r,s)=>s.id;function pe(r,s){if(r&1&&(a(0,"mat-option",15),l(1),i()),r&2){let m=s.$implicit;f("value",m.id),p(),R(m.nombre)}}function fe(r,s){if(r&1&&D(0,pe,2,2,"mat-option",15,se),r&2){let m=h(2);M(m.roles)}}function he(r,s){if(r&1&&(a(0,"div",7)(1,"form",8)(2,"mat-form-field",9)(3,"mat-label"),l(4,"Nombre"),i(),u(5,"input",10),i(),a(6,"mat-form-field",9)(7,"mat-label"),l(8,"Email"),i(),u(9,"input",11),i(),a(10,"mat-form-field",9)(11,"mat-label"),l(12,"Rol"),i(),a(13,"mat-select",12),x(14,fe,2,0),i()(),a(15,"mat-form-field",9)(16,"mat-label"),l(17,"Contrase\xF1a"),i(),u(18,"input",13),i(),a(19,"mat-form-field",9)(20,"mat-label"),l(21,"Repite contrase\xF1a"),i(),u(22,"input",14),i()()()),r&2){let m=h();p(),f("formGroup",m.UsuarioForm),p(13),F(14,m.roles?14:-1)}}function _e(r,s){if(r&1&&(a(0,"mat-option",15),l(1),i()),r&2){let m=s.$implicit;f("value",m.id),p(),R(m.nombre)}}function be(r,s){if(r&1&&D(0,_e,2,2,"mat-option",15,se),r&2){let m=h(2);M(m.roles)}}function Ce(r,s){if(r&1&&(a(0,"div",7)(1,"form",8)(2,"mat-form-field",9)(3,"mat-label"),l(4,"Nombre"),i(),u(5,"input",10),i(),a(6,"mat-form-field",9)(7,"mat-label"),l(8,"Email"),i(),u(9,"input",11),i(),a(10,"mat-form-field",9)(11,"mat-label"),l(12,"Rol"),i(),a(13,"mat-select",12),x(14,be,2,0),i()(),a(15,"mat-form-field",9)(16,"mat-label"),l(17,"Contrase\xF1a"),i(),u(18,"input",13),i(),a(19,"mat-form-field",9)(20,"mat-label"),l(21,"Repite contrase\xF1a"),i(),u(22,"input",14),i()()()),r&2){let m=h();p(),f("formGroup",m.UsuarioForm),p(13),F(14,m.roles?14:-1)}}function ge(r,s){if(r&1&&(a(0,"div"),l(1),i()),r&2){let m=h();p(),N(' \xBFEst\xE1s seguro de querer eliminar al usuario "',m.nombreUsuario,'"? ')}}function ve(r,s){r&1&&(a(0,"div"),l(1," \xBFEst\xE1s seguro de querer los usuarios? "),u(2,"br"),a(3,"span",16),l(4,"\xA1OJO! Si has pulsado el bot\xF3n para seleccionar todo, se eliminar\xE1n todos las suscripciones, incluidas aquellas que no aparezcan en la vista actual."),i()())}var Oe=(()=>{let s=class s{constructor(o,n,e,t){this.title=o,this.usuarioService=n,this.dialogService=e,this._snackBar=t,this.columns=["Nombre","Email","Rol","\xDAltimo_acceso"],this.displayedColumns=["select",...this.columns,"acciones"],this.selectedIds=[],this.UsuarioForm=new P({name:new _("",c.required),email:new _("",c.compose([c.required,c.email])),password:new _("",c.compose([c.required])),password_confirmation:new _("",c.compose([c.required,,this.password_confirmed])),role_id:new _(0,c.required)}),this.botones=[{id:1,nombre:"Editar",class:"",accion:d=>this.editarUsuario(d)},{id:2,nombre:"Eliminar",class:"danger",accion:d=>this.eliminarUsuario(d)}]}ngOnInit(){this.title.setTitle("Usuarios < EasyShop"),this.getUsuarios(),this.suscripcion=this.usuarioService.refresh$.subscribe(()=>{this.getUsuarios()})}ngOnDestroy(){this.suscripcion.unsubscribe()}password_confirmed(o){let n=o.parent,e=n?.get("password")?.value,t=n?.get("password_confirmation")?.value;return e===t?null:{bad_password:!0}}getUsuarios(){this.usuarioService.getAllUsuarios().subscribe({next:o=>{this.usuarios=o},error:o=>{console.error(o)}})}crearUsuario(){let o="Crear usuario",n="confirmar";this.UsuarioForm.reset(),this.usuarioService.getAllRoles().subscribe({next:e=>{this.roles=e},error:e=>{console.error(e)}}),this.dialogService.openDialog(this.modalCrearUsuario,o,n).then(e=>{if(e&&this.UsuarioForm.valid)this.usuarioService.postUsuario(this.UsuarioForm.value).subscribe({next:t=>{this._snackBar.open("Usuario creado correctamente.","Aceptar",{duration:3e3})},error:t=>{this._snackBar.open("Ha ocurrido un error.","Aceptar",{duration:3e3})}});else return})}editarUsuario(o){let n="Editar usuario",e="confirmar";this.usuarioService.getUsuario(o).subscribe({next:t=>{this.usuario=t,this.UsuarioForm.patchValue({name:this.usuario.Nombre,email:this.usuario.Email,role_id:this.usuario.Role_id,password:"",password_confirmation:""});let d=this.UsuarioForm.value.password,w=this.UsuarioForm.value.password_confirmation;this.usuarioService.getAllRoles().subscribe({next:b=>{this.roles=b},error:b=>{console.error(b)}}),this.dialogService.openDialog(this.modalEditarUsuario,n,e).then(b=>{if(b&&this.UsuarioForm.valid&&d===w)this.usuarioService.updateUsuario(o,this.UsuarioForm.value).subscribe({next:le=>{this._snackBar.open("Usuario modificado correctamente.","Aceptar",{duration:3e3})},error:le=>{this._snackBar.open("Ha ocurrido un error.","Aceptar",{duration:3e3})}});else return})},error:t=>{console.error(t)}})}eliminarUsuario(o){let n="Eliminar usuario",e="aceptar";this.usuarioService.getUsuario(o).subscribe({next:t=>{this.nombreUsuario=t.Nombre},error:t=>{console.error(t)}}),this.dialogService.openDialog(this.modalEliminar,n,e).then(t=>{if(t)this.usuarioService.deleteUsuario(o).subscribe({next:d=>{this._snackBar.open("Usuario eliminado.","Aceptar",{duration:3e3})},error:d=>{this._snackBar.open("Ha ocurrido un error.","Aceptar",{duration:3e3})}});else return})}onSelectionChange(o){this.selectedIds=o}eliminarSeleccionUsuarios(){this.dialogService.openDialog(this.modalEliminarSeleccion,"Eliminar usuarios seleccionados","aceptar").then(e=>{if(e)this.usuarioService.deleteUsuario(this.selectedIds).subscribe({next:t=>{this._snackBar.open("Usuarios eliminados.","Aceptar",{duration:3e3})},error:t=>{this._snackBar.open("Ha ocurrido un error.","Aceptar",{duration:3e3})}});else return})}};s.\u0275fac=function(n){return new(n||s)(C(A),C(ne),C(ie),C(W))},s.\u0275cmp=k({type:s,selectors:[["app-dashboardusuarios"]],viewQuery:function(n,e){if(n&1&&(g(me,5),g(ue,5),g(ce,5),g(de,5)),n&2){let t;v(t=E())&&(e.modalEliminar=t.first),v(t=E())&&(e.modalEliminarSeleccion=t.first),v(t=E())&&(e.modalCrearUsuario=t.first),v(t=E())&&(e.modalEditarUsuario=t.first)}},standalone:!0,features:[T],decls:16,vars:5,consts:[["contentCrear",""],["contentEditar",""],["contentEliminar",""],["contentEliminarSeleccion",""],[1,"encabezado-usuarios"],["mat-stroked-button","",3,"click"],[3,"selectionChange","columns","displayedColumns","data","buttons","eliminarSeleccionados"],[1,"form-usuario"],[1,"example-form",3,"formGroup"],[1,"example-full-width"],["matInput","","type","text","formControlName","name","ngDefaultControl","","required",""],["matInput","","type","email","formControlName","email","ngDefaultControl","","required",""],["formControlName","role_id","ngDefaultControl","","required",""],["matInput","","type","password","formControlName","password","ngDefaultControl","","required",""],["matInput","","type","password","formControlName","password_confirmation","ngDefaultControl","","required",""],[3,"value"],[1,"caution"]],template:function(n,e){if(n&1){let t=I();a(0,"main")(1,"section")(2,"div",4)(3,"h1"),l(4,"Usuarios"),i(),a(5,"button",5),q("click",function(){return U(t),y(e.crearUsuario())}),l(6,"A\xF1adir usuario"),i()(),a(7,"app-tablacompleta",6),q("selectionChange",function(w){return U(t),y(e.onSelectionChange(w))}),i()()(),x(8,he,23,2,"ng-template",null,0,S)(10,Ce,23,2,"ng-template",null,1,S)(12,ge,2,1,"ng-template",null,2,S)(14,ve,5,0,"ng-template",null,3,S)}n&2&&(p(7),f("columns",e.columns)("displayedColumns",e.displayedColumns)("data",e.usuarios)("buttons",e.botones)("eliminarSeleccionados",e.eliminarSeleccionUsuarios.bind(e)))},dependencies:[ae,K,L,J,G,O,V,Q,H,j,z,$,Z,Y,X,te,ee,oe,re,B],styles:[".encabezado-usuarios[_ngcontent-%COMP%]{display:flex;gap:1rem;margin-bottom:1rem}.encabezado-usuarios[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-color:var(--darkblue)}.caution[_ngcontent-%COMP%]{color:red}.confirmar[_ngcontent-%COMP%]{color:var(--darkblue)}.example-form[_ngcontent-%COMP%]{min-width:150px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}"]});let r=s;return r})();export{Oe as DashboardusuariosComponent};
