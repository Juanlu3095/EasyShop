import{c as L}from"./chunk-YK5JBHKT.js";import{a as T,c as j,f as V,h as G}from"./chunk-7VRA7NH3.js";import{a as Q,b as X,c as Y}from"./chunk-JOMKE55Q.js";import{a as z}from"./chunk-Y4ZCGVAW.js";import{c as U,d as K}from"./chunk-3TBXM6QS.js";import{a as R,g as H,h as W}from"./chunk-7ITRIRQH.js";import{a as N,b as B}from"./chunk-SF6XMI4F.js";import"./chunk-UIFHNKPJ.js";import"./chunk-S3J4NSG4.js";import{a as I}from"./chunk-PE3AIABI.js";import{a as J}from"./chunk-2OGK3DXK.js";import"./chunk-SMOEXM7I.js";import{a as w,b as _}from"./chunk-XJSQGGDF.js";import"./chunk-OB62TPC4.js";import"./chunk-AKCFMZTD.js";import{b as F,d as i,f as y,g as x,h as b,j as m,m as E,n as P,s as k,t as A,u as O}from"./chunk-33HZCSPU.js";import{d as S}from"./chunk-V6CHNUWL.js";import{o as D,q}from"./chunk-UKCT2NNU.js";import"./chunk-AESYL7IM.js";import"./chunk-I7KWM6MY.js";import{i as M}from"./chunk-X2X7HICG.js";import{Ab as t,Bb as e,Cb as s,Jb as g,Vb as o,Ya as n,Za as c,cc as C,la as v,qb as u,rb as d}from"./chunk-BEZRA2BD.js";var _e=(()=>{let p=class p{constructor(r,l,a,h,Z,$){this.title=r,this._snackBar=l,this.auth=a,this.cookieService=h,this.router=Z,this.dialogService=$,this.loginForm=new b({email:new m("",i.compose([i.email,i.required])),password:new m("",i.compose([i.required])),consentimiento:new m(!1,i.requiredTrue)}),this.registroForm=new b({name:new m("",i.compose([i.required,this.noWhitespaceValidator])),email:new m("",i.compose([i.email,i.required])),password:new m("",i.compose([i.required])),password_confirmation:new m("",i.compose([i.required])),consentimiento:new m(!1,i.requiredTrue)}),this.botonDisabled=!1}ngOnInit(){this.title.setTitle("Acceso | EasyShop")}login(){this.dialogService.openSpinner(),this.botonDisabled=!0,this.loginForm.valid?this.auth.loginUser(this.loginForm.value).subscribe({next:r=>{r.token?(this.cookieService.set("TOKEN_C",r.token,1),this.router.navigate(["/mi-cuenta"]),this.dialogService.closeAll()):this.botonDisabled=!1},error:r=>{this.dialogService.closeAll(),this._snackBar.open("Ha ocurrido un error.","Aceptar",{duration:3e3}),this.botonDisabled=!1}}):(this._snackBar.open("El email y/o contrase\xF1a no son v\xE1lidos.","Aceptar",{duration:3e3}),this.botonDisabled=!1)}registro(){this.dialogService.openSpinner(),this.botonDisabled=!0;let r=this.registroForm.value.password??"",l=this.registroForm.value.password_confirmation??"";this.registroForm.valid&&r===l?this.auth.registroUser(this.registroForm.value).subscribe({next:a=>{this.dialogService.closeAll(),this._snackBar.open("Se ha creado el usuario. Por favor, revise su email.","Aceptar",{duration:5e3}),this.botonDisabled=!1},error:a=>{this.dialogService.closeAll(),this._snackBar.open("No se ha podido procesar su solicitud.","Aceptar",{duration:3e3}),this.botonDisabled=!1}}):this.registroForm.valid&&r!==l?(this.dialogService.closeAll(),this._snackBar.open("Ambos campos de contrase\xF1a deben coincidir.","Aceptar",{duration:3e3}),this.botonDisabled=!1):(this.dialogService.closeAll(),this._snackBar.open("Se ha producido un error.","Aceptar",{duration:3e3}),this.botonDisabled=!1)}noWhitespaceValidator(r){return!((r.value||"").trim().length===0)?null:{whitespace:!0}}};p.\u0275fac=function(l){return new(l||p)(c(M),c(I),c(w),c(_),c(S),c(J))},p.\u0275cmp=v({type:p,selectors:[["app-accesocliente"]],standalone:!0,features:[C],decls:60,vars:16,consts:[[1,"acceso-cliente"],[1,"text-center"],[1,"tabs"],["mat-stretch-tabs","false","mat-align-tabs","center","dynamicHeight","true"],["label","Acceder"],[1,"login-card"],["ngNativeValidate","",3,"submit","formGroup"],[1,"email-input","form-field"],["type","email","matInput","","formControlName","email","required",""],[1,"password-input","form-field"],["type","password","matInput","","formControlName","password","required",""],["formControlName","consentimiento",1,"checkbox"],["type","submit","mat-flat-button","",1,"acceder",3,"disabled"],["label","Registrarse"],[1,"name-input","form-field"],["type","text","matInput","","formControlName","name","required",""],["type","password","matInput","","formControlName","password_confirmation","required",""],["type","submit","mat-flat-button","",1,"registro",3,"disabled"],[1,"links"],["href","http://localhost:8000/forgot-password"],["href",""],[1,"politica"]],template:function(l,a){l&1&&(s(0,"app-header"),t(1,"main")(2,"section",0)(3,"h1",1),o(4,"Mi cuenta"),e(),t(5,"div",2)(6,"mat-tab-group",3)(7,"mat-tab",4)(8,"mat-card",5)(9,"form",6),g("submit",function(){return a.login()}),t(10,"mat-card-content")(11,"mat-form-field",7)(12,"mat-label"),o(13,"Correo electr\xF3nico: "),e(),s(14,"input",8),e(),t(15,"mat-form-field",9)(16,"mat-label"),o(17,"Contrase\xF1a: "),e(),s(18,"input",10),e()(),t(19,"mat-card-footer")(20,"mat-checkbox",11),o(21,"Acepto la pol\xEDtica de privacidad."),e(),t(22,"button",12),o(23,"Acceder"),e()()()()(),t(24,"mat-tab",13)(25,"mat-card",5)(26,"form",6),g("submit",function(){return a.registro()}),t(27,"mat-card-content")(28,"mat-form-field",14)(29,"mat-label"),o(30,"Nombre: "),e(),s(31,"input",15),e(),t(32,"mat-form-field",7)(33,"mat-label"),o(34,"Correo electr\xF3nico: "),e(),s(35,"input",8),e(),t(36,"mat-form-field",9)(37,"mat-label"),o(38,"Contrase\xF1a: "),e(),s(39,"input",10),e(),t(40,"mat-form-field",9)(41,"mat-label"),o(42,"Repetir Contrase\xF1a: "),e(),s(43,"input",16),e()(),t(44,"mat-card-footer")(45,"mat-checkbox",11),o(46,"Acepto la pol\xEDtica de privacidad."),e(),t(47,"button",17),o(48,"Registrarse"),e()()()()()()(),t(49,"div",18)(50,"p")(51,"a",19),o(52,"\xBFHas olvidado tu contrase\xF1a?"),e()(),t(53,"p")(54,"a",20),o(55,"\u2190 Volver a EasyShop"),e()()(),t(56,"div",21)(57,"a",20),o(58,"Pol\xEDtica de privacidad"),e()()()(),s(59,"app-footer")),l&2&&(n(9),u("formGroup",a.loginForm),n(2),d("width",100,"%"),n(4),d("width",100,"%"),n(7),u("disabled",!a.loginForm.valid),n(4),u("formGroup",a.registroForm),n(2),d("width",100,"%"),n(4),d("width",100,"%"),n(4),d("width",100,"%"),n(4),d("width",100,"%"),n(7),u("disabled",!a.registroForm.valid||a.botonDisabled))},dependencies:[N,B,Y,Q,X,W,H,R,K,U,G,T,j,V,L,z,q,D,O,F,y,x,k,E,P,A],styles:[".acceso-cliente[_ngcontent-%COMP%]{margin:0 auto}.login-card[_ngcontent-%COMP%]{padding:1rem}.login-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{justify-content:center}.login-card[_ngcontent-%COMP%]   mat-card-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}button.acceder[_ngcontent-%COMP%], button.registro[_ngcontent-%COMP%]{width:30%;margin:1em 1rem 1rem 2rem;text-align:center;color:var(--white);background-color:var(--darkblue)}.links[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:left;gap:2rem;margin:2rem}.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:var(--black)}.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--darkblue)}.politica[_ngcontent-%COMP%]{text-align:center;margin:3rem 0}.politica[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--darkblue)}@media only screen and (min-width: 1367px){.acceso-cliente[_ngcontent-%COMP%]{width:30%;padding:5rem 0}}@media only screen and (max-width: 767px){.acceso-cliente[_ngcontent-%COMP%]{width:100%;padding:2rem 1rem}}@media only screen and (min-width: 768px) and (max-width: 1366px){.acceso-cliente[_ngcontent-%COMP%]{width:50%;padding:3rem 0}}"]});let f=p;return f})();export{_e as AccesoclienteComponent};
