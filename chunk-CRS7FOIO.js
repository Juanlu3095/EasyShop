import{a as $}from"./chunk-BPEAVGKW.js";import{a as H,b as R}from"./chunk-Y4ZCGVAW.js";import{c as j,d as z}from"./chunk-3TBXM6QS.js";import{a as J,g as P,h as G}from"./chunk-7ITRIRQH.js";import{a as T}from"./chunk-PE3AIABI.js";import{b as N,d as e,f as w,g as y,h as I,j as r,k,l as O,m as q,n as D,t as B,u as L}from"./chunk-33HZCSPU.js";import{o as V,q as A}from"./chunk-UKCT2NNU.js";import"./chunk-AESYL7IM.js";import"./chunk-I7KWM6MY.js";import{i as E}from"./chunk-XXO6A46Z.js";import{Ab as o,Bb as t,Cb as n,Gb as S,Jb as C,Lb as f,Vb as i,Wb as F,Ya as d,Za as p,cc as M,la as g,ob as _,qb as x,ua as b,va as h,vb as v}from"./chunk-BEZRA2BD.js";function K(c,l){if(c&1){let s=S();o(0,"section",0)(1,"h1"),i(2),t(),o(3,"a",1),i(4,"\u2190 Volver a la p\xE1gina anterior"),t()(),n(5,"br")(6,"br"),o(7,"section",2)(8,"form",3)(9,"mat-checkbox",4),i(10,"Activar/Desactivar transferencia bancaria directa"),t(),n(11,"br"),o(12,"mat-form-field",5)(13,"mat-label"),i(14,"Nombre"),t(),n(15,"input",6),t(),o(16,"mat-form-field",5)(17,"mat-label"),i(18,"Descripci\xF3n"),t(),n(19,"textarea",7),t(),o(20,"mat-form-field",5)(21,"mat-label"),i(22,"Descripci\xF3n para el cliente"),t(),n(23,"textarea",8),t(),n(24,"br"),o(25,"h3"),i(26,"Configuraci\xF3n de la cuenta"),t(),o(27,"div",9)(28,"div",10)(29,"mat-form-field",5)(30,"mat-label"),i(31,"Nombre de la cuenta"),t(),n(32,"input",11),t(),o(33,"mat-form-field",5)(34,"mat-label"),i(35,"N\xFAmero de la cuenta"),t(),n(36,"input",12),t(),o(37,"mat-form-field",5)(38,"mat-label"),i(39,"Nombre del banco"),t(),n(40,"input",13),t()(),o(41,"div",10)(42,"mat-form-field",5)(43,"mat-label"),i(44,"C\xF3digo de clasificaci\xF3n"),t(),n(45,"input",14),t(),o(46,"mat-form-field",5)(47,"mat-label"),i(48,"IBAN"),t(),n(49,"input",15),t(),o(50,"mat-form-field",5)(51,"mat-label"),i(52,"BIC/Swift"),t(),n(53,"input",16),t()()()(),n(54,"br"),o(55,"button",17),C("click",function(){b(s);let m=f();return h(m.updateMetodopago())}),i(56,"Guardar cambios"),t()()}if(c&2){let s=f();d(2),F(s.metodopago.nombre),d(6),x("formGroup",s.transferenciaForm)}}function Q(c,l){c&1&&(o(0,"p"),i(1,"El m\xE9todo de pago no existe."),t())}var le=(()=>{let l=class l{constructor(a,m,u){this.metodospagoService=a,this.title=m,this._snackBar=u,this.slug="transferencia",this.transferenciaForm=new I({nombre:new r("",e.compose([e.required,e.minLength(1)])),descripcion:new r("",e.compose([e.required,e.minLength(1)])),descripcion_cliente:new r("",e.compose([e.required,e.minLength(1)])),activo:new r(!1,e.required),nombre_cuenta:new r("",e.compose([e.required,e.minLength(1)])),numero_cuenta:new r(0,e.compose([e.required,e.min(1)])),nombre_banco:new r("",e.compose([e.required,e.minLength(1)])),codigo_clasificacion:new r("",e.compose([e.required,e.minLength(1)])),iban:new r("",e.compose([e.required,e.minLength(1)])),bic_swift:new r("",e.compose([e.required,e.minLength(1)]))})}ngOnInit(){this.getMetodopago()}getMetodopago(){if(this.slug)this.metodospagoService.getMetodoPago(this.slug).subscribe({next:a=>{this.metodopago=a.data,console.log(a),this.setTitle(),this.transferenciaForm.patchValue({activo:this.metodopago.activo===1,nombre:this.metodopago.nombre,descripcion:this.metodopago.descripcion,descripcion_cliente:this.metodopago.descripcion_cliente,nombre_cuenta:JSON.parse(this.metodopago.configuracion.toString()).nombre,numero_cuenta:JSON.parse(this.metodopago.configuracion.toString()).numero,nombre_banco:JSON.parse(this.metodopago.configuracion.toString()).nombre_banco,codigo_clasificacion:JSON.parse(this.metodopago.configuracion.toString()).clasificacion,iban:JSON.parse(this.metodopago.configuracion.toString()).iban,bic_swift:JSON.parse(this.metodopago.configuracion.toString()).bic_swift})},error:a=>{this._snackBar.open("Ha ocurrido un error.","Aceptar",{duration:3e3})}});else return}updateMetodopago(){if(this.transferenciaForm.valid){let a={nombre:this.transferenciaForm.value.nombre,activo:this.transferenciaForm.value.activo?1:2,descripcion:this.transferenciaForm.value.descripcion,descripcion_cliente:this.transferenciaForm.value.descripcion_cliente,configuracion:JSON.stringify({nombre:this.transferenciaForm.value.nombre_cuenta,numero:this.transferenciaForm.value.numero_cuenta,nombre_banco:this.transferenciaForm.value.nombre_banco,clasificacion:this.transferenciaForm.value.codigo_clasificacion,iban:this.transferenciaForm.value.iban,bic_swift:this.transferenciaForm.value.bic_swift})};this.metodospagoService.updateMetodopago(this.slug,a).subscribe({next:m=>{this._snackBar.open("M\xE9todo de pago actualizado.","Aceptar",{duration:3e3})},error:m=>{this._snackBar.open("Ha ocurrido un error.","Aceptar",{duration:3e3})}})}}setTitle(){this.title.setTitle(this.metodopago?`${this.metodopago.nombre} < Easyshop`:"Editar m\xE9todo de pago < Easyshop")}};l.\u0275fac=function(m){return new(m||l)(p($),p(E),p(T))},l.\u0275cmp=g({type:l,selectors:[["app-dashboardmetodopago"]],standalone:!0,features:[M],decls:3,vars:1,consts:[[1,"encabezado-productonuevo"],["href","dashboard/metodospago"],[1,"form-metodopago"],[3,"formGroup"],["formControlName","activo",1,"checkbox"],[1,"input-field"],["matInput","","type","text","formControlName","nombre"],["matInput","","type","textarea","formControlName","descripcion"],["matInput","","type","textarea","formControlName","descripcion_cliente"],[1,"configuracion"],[1,"conf-item"],["matInput","","type","text","formControlName","nombre_cuenta"],["matInput","","type","number","formControlName","numero_cuenta"],["matInput","","type","text","formControlName","nombre_banco"],["matInput","","type","text","formControlName","codigo_clasificacion"],["matInput","","type","text","formControlName","iban"],["matInput","","type","text","formControlName","bic_swift"],["mat-stroked-button","",1,"guardar",3,"click"]],template:function(m,u){m&1&&(o(0,"main"),_(1,K,57,2)(2,Q,2,0),t()),m&2&&(d(),v(1,u.metodopago?1:2))},dependencies:[A,V,G,P,J,z,j,R,H,L,k,N,O,w,y,q,D,B],styles:[".form-metodopago[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.configuracion[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.conf-item[_ngcontent-%COMP%]{display:flex;gap:1rem;width:100%}.input-field[_ngcontent-%COMP%]{width:100%}.guardar[_ngcontent-%COMP%]{background-color:var(--darkblue);color:#fff!important}"]});let c=l;return c})();export{le as DashboardmetodotransferenciaComponent};
