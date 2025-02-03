import{a as ce}from"./chunk-PWRN7R3E.js";import{a as de}from"./chunk-JXWWU5P2.js";import"./chunk-BJKW2MZI.js";import"./chunk-5V7AZGGS.js";import"./chunk-JI4B56LL.js";import{a as ae,b as se,c as le}from"./chunk-JOMKE55Q.js";import"./chunk-Y4ZCGVAW.js";import{c as oe,d as ne}from"./chunk-3TBXM6QS.js";import{a as ee,g as te,h as ie}from"./chunk-7ITRIRQH.js";import{a as Y,b as Z}from"./chunk-FN7QNYN7.js";import"./chunk-LK6KPKR6.js";import"./chunk-S3J4NSG4.js";import{a as X}from"./chunk-PE3AIABI.js";import{a as re}from"./chunk-2OGK3DXK.js";import"./chunk-SMOEXM7I.js";import{a as V,b as q}from"./chunk-CLDV64HZ.js";import"./chunk-QUY6D7V3.js";import"./chunk-AKCFMZTD.js";import{b as U,d as u,f as R,g as j,h as G,j as b,k as Q,m as z,n as $,s as H,t as K,u as L}from"./chunk-33HZCSPU.js";import{d as B}from"./chunk-Q4OLKBFG.js";import{o as J,q as W}from"./chunk-UKCT2NNU.js";import"./chunk-AESYL7IM.js";import"./chunk-YRYHB4P2.js";import"./chunk-I7KWM6MY.js";import{i as O}from"./chunk-5XYOWQFX.js";import{Ab as a,Bb as t,Cb as c,Gb as N,Jb as v,Lb as h,Rb as M,Sb as S,Tb as w,Vb as i,Wb as E,Xb as y,Ya as m,Za as p,Zb as T,cc as A,jc as P,la as F,ob as C,qb as x,ua as _,va as g,vb as I,yb as k,zb as D}from"./chunk-BEZRA2BD.js";var fe=["verPedido"],he=["editarUsuario"],be=(r,s)=>s.Id;function _e(r,s){if(r&1){let n=N();a(0,"mat-tab-group")(1,"mat-tab",4)(2,"div",5),c(3,"app-tablacompleta",6),t()(),a(4,"mat-tab",7)(5,"div",8)(6,"div",9)(7,"h3")(8,"b"),i(9,"Nombre"),t(),i(10,":"),t(),a(11,"p"),i(12),t(),a(13,"h3")(14,"b"),i(15,"Email"),t(),i(16,":"),t(),a(17,"p"),i(18),t()(),c(19,"br"),a(20,"div",10)(21,"button",11),v("click",function(){_(n);let o=h();return g(o.actualizarUsuario())}),i(22,"Modificar datos"),t(),a(23,"button",12),v("click",function(){_(n);let o=h();return g(o.cerrarsesion())}),i(24,"Cerrar sesi\xF3n"),t()()()()()}if(r&2){let n=h();m(3),x("data",n.pedidos)("columns",n.columns)("displayedColumns",n.displayedColumns)("btnDangerAll",!0)("buttons",n.botones),m(9),E(n.usuario.Nombre),m(6),E(n.usuario.Email)}}function ge(r,s){r&1&&(a(0,"p"),i(1,"No se ha podido obtener los datos del usuario."),t())}function Ce(r,s){if(r&1&&(a(0,"p"),i(1),t()),r&2){let n=s.$implicit;m(),T("",n.Producto," x ",n.Cantidad," = ",n.Total,"\u20AC")}}function xe(r,s){if(r&1&&(a(0,"div",13)(1,"p")(2,"b"),i(3,"Productos"),t(),i(4,":"),t(),k(5,Ce,2,3,"p",null,be),c(7,"hr"),a(8,"b"),i(9,"Descuento"),t(),i(10),c(11,"hr"),a(12,"b"),i(13,"Total"),t(),i(14),t()),r&2){let n,e=h();m(5),D(e.pedidosItem),m(5),y(": - ",(n=e.pedido.Descuento)!==null&&n!==void 0?n:0,"\u20AC "),m(4),y(": ",e.pedido.Total," ")}}function ve(r,s){if(r&1&&(a(0,"div",8)(1,"form",14)(2,"mat-form-field",15)(3,"mat-label"),i(4,"Nombre"),t(),c(5,"input",16),t(),a(6,"mat-form-field",15)(7,"mat-label"),i(8,"Email"),t(),c(9,"input",17),t(),a(10,"mat-form-field",15)(11,"mat-label"),i(12,"Contrase\xF1a"),t(),c(13,"input",18),t(),a(14,"mat-form-field",15)(15,"mat-label"),i(16,"Repite contrase\xF1a"),t(),c(17,"input",19),t()()()),r&2){let n=h();m(),x("formGroup",n.usuarioForm)}}var Qe=(()=>{let s=class s{constructor(e,o,d,l,f,me,ue){this.title=e,this.auth=o,this.pedidoService=d,this.cookieService=l,this.dialogService=f,this._snackBar=me,this.router=ue,this.columns=["Id","Estado","Total","Fecha"],this.displayedColumns=[...this.columns,"acciones"],this.botones=[{id:1,nombre:"Ver",class:"",accion:pe=>this.verPedido(pe)}],this.usuarioForm=new G({name:new b("",u.required),email:new b("",u.compose([u.required,u.email])),password:new b("",u.compose([u.required])),password_confirmation:new b("",u.compose([u.required,,this.password_confirmed]))})}ngOnInit(){this.title.setTitle("Mi cuenta | EasyShop"),this.obtenerUserData(),this.obtenerPedidos(),this.suscripcion=this.auth.refresh$.subscribe(()=>{this.obtenerUserData()})}ngOnDestroy(){this.suscripcion.unsubscribe()}cerrarsesion(){this.dialogService.openSpinner(),this.auth.logoutCliente().subscribe({next:e=>{this.cookieService.delete("TOKEN_C","/"),this.dialogService.closeAll(),this.router.navigate(["/acceso"])},error:e=>{this.dialogService.closeAll(),this._snackBar.open("Ha ocurrido un error.","Aceptar",{duration:3e3})}})}actualizarUsuario(){let e="Editar usuario",o="guardar";this.usuarioForm.patchValue({name:this.usuario.Nombre,email:this.usuario.Email}),this.dialogService.openDialog(this.editarUsuario,e,o).then(d=>{if(d&&this.usuarioForm.valid)this.auth.updateCliente(this.usuarioForm.value).subscribe({next:l=>{console.log(l),this._snackBar.open("Datos actualizados.","Aceptar",{duration:3e3})},error:l=>{console.error(l),this._snackBar.open("No se ha podido actualizar sus datos.","Aceptar",{duration:3e3})}});else return})}password_confirmed(e){let o=e.parent,d=o?.get("password")?.value,l=o?.get("password_confirmation")?.value;return d===l?null:{bad_password:!0}}verPedido(e){this.dialogService.openSpinner();let o=`Pedido #${e}`,d="guardar",l="no-button";this.pedidoService.getPedidoItemsClient(e).subscribe({next:f=>{this.dialogService.closeAll(),this.pedidosItem=f},error:f=>{this.dialogService.closeAll(),this._snackBar.open("No se ha podido obtener los productos.","Aceptar",{duration:3e3})}}),this.pedidoService.getPedidoClient(e).subscribe({next:f=>{this.pedido=f,this.dialogService.openDialog(this.modalPedido,o,d,l)},error:f=>{this._snackBar.open("No se ha podido obtener el pedido.","Aceptar",{duration:3e3})}})}obtenerUserData(){this.auth.obtenerUser().subscribe({next:e=>{e.data&&(this.usuario=e.data)},error:e=>{this._snackBar.open("No se ha podido obtener los datos del usuario.","Aceptar",{duration:3e3})}})}obtenerPedidos(){this.pedidoService.getPedidosByUser().subscribe({next:e=>{console.log(e),this.pedidos=e},error:e=>{this._snackBar.open("No se ha podido obtener los pedidos.","Aceptar",{duration:3e3})}})}};s.\u0275fac=function(o){return new(o||s)(p(O),p(V),p(ce),p(q),p(re),p(X),p(B))},s.\u0275cmp=F({type:s,selectors:[["app-micuenta"]],viewQuery:function(o,d){if(o&1&&(M(fe,5),M(he,5)),o&2){let l;S(l=w())&&(d.modalPedido=l.first),S(l=w())&&(d.editarUsuario=l.first)}},standalone:!0,features:[A],decls:12,vars:1,consts:[["verPedido",""],["editarUsuario",""],[1,"cuenta-cliente"],[1,"text-center"],["label","Pedidos"],[1,"tabla-pedidos"],[3,"data","columns","displayedColumns","btnDangerAll","buttons"],["label","Configuraci\xF3n"],[1,"configuracion"],[1,"user-data"],[1,"acciones"],["mat-flat-button","",1,"modificar",3,"click"],["mat-flat-button","",1,"caution",3,"click"],[1,"pedido"],[1,"usuario-form",3,"formGroup"],[1,"example-full-width"],["matInput","","type","text","formControlName","name","ngDefaultControl","","required",""],["matInput","","type","email","formControlName","email","ngDefaultControl","","required",""],["matInput","","type","password","formControlName","password","ngDefaultControl","","required",""],["matInput","","type","password","formControlName","password_confirmation","ngDefaultControl","","required",""]],template:function(o,d){o&1&&(c(0,"app-header"),a(1,"main")(2,"section",2)(3,"h1",3),i(4,"Mi cuenta"),t(),C(5,_e,25,7,"mat-tab-group")(6,ge,2,0),t()(),c(7,"app-footer"),C(8,xe,15,2,"ng-template",null,0,P)(10,ve,18,1,"ng-template",null,1,P)),o&2&&(m(5),I(5,d.usuario?5:6))},dependencies:[Y,Z,de,le,ae,se,ie,te,ee,ne,oe,W,J,L,Q,U,R,j,H,z,$,K],styles:[".cuenta-cliente[_ngcontent-%COMP%]{margin:0 auto}.tabla-pedidos[_ngcontent-%COMP%], .configuracion[_ngcontent-%COMP%]{padding:2rem 0}.usuario-form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.user-data[_ngcontent-%COMP%]{padding:1rem 1rem 0;margin-bottom:1rem;border:1px solid lightgray;background-color:#fff}.acciones[_ngcontent-%COMP%]{display:flex;gap:1rem}.acciones[_ngcontent-%COMP%]   button.modificar[_ngcontent-%COMP%]{background-color:var(--darkblue);color:#fff}.acciones[_ngcontent-%COMP%]   button.caution[_ngcontent-%COMP%]{background-color:red;color:#fff}@media only screen and (min-width: 1367px){.cuenta-cliente[_ngcontent-%COMP%]{width:70%;padding:5rem 3rem}}@media only screen and (max-width: 767px){.cuenta-cliente[_ngcontent-%COMP%]{width:100%;padding:2rem 1rem}}@media only screen and (min-width: 768px) and (max-width: 1366px){.cuenta-cliente[_ngcontent-%COMP%]{width:70%;padding:3rem 0}}"]});let r=s;return r})();export{Qe as MicuentaComponent};
