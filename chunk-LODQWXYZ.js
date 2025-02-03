import{a as te}from"./chunk-RG2PZLBY.js";import{a as ee}from"./chunk-2XCYNILC.js";import{a as Z}from"./chunk-IH7NJN6V.js";import{a as X,b as Y}from"./chunk-JI4B56LL.js";import{a as K,c as Q,d as W}from"./chunk-3TBXM6QS.js";import{a as U,g as H,h as J}from"./chunk-7ITRIRQH.js";import{a as $}from"./chunk-PE3AIABI.js";import{b as k,d as t,f as P,g as D,h as A,j as a,k as T,l as z,m as B,n as L,s as O,t as V,u as j}from"./chunk-33HZCSPU.js";import{d as y}from"./chunk-LVI2TU4A.js";import{o as R,q as G}from"./chunk-UKCT2NNU.js";import"./chunk-AESYL7IM.js";import{Z as F}from"./chunk-I7KWM6MY.js";import{i as q}from"./chunk-IQAKLUFA.js";import{Ab as i,Bb as e,Cb as d,Gb as _,Jb as M,Ob as N,Vb as o,Wb as v,Ya as s,Yb as w,Za as u,cc as I,la as E,qb as f,ua as S,va as C,yb as b,zb as g}from"./chunk-BEZRA2BD.js";var oe=(m,n)=>n.Id,ne=(m,n)=>n.slug,re=(m,n)=>n.id;function ae(m,n){if(m&1&&(i(0,"mat-option",20),o(1),e()),m&2){let l=n.$implicit;f("value",l.Id),s(),w(" #",l.Id," - ",l.Email,"")}}function me(m,n){if(m&1&&(i(0,"mat-option",20),o(1),e()),m&2){let l=n.$implicit;N("value",l.slug),s(),v(l.nombre)}}function de(m,n){if(m&1&&(i(0,"mat-option",20),o(1),e()),m&2){let l=n.$implicit;f("value",l.id),s(),v(l.valor)}}var qe=(()=>{let n=class n{constructor(r,c,p,h,x,ie){this.pedidoService=r,this.userService=c,this.metodopagoService=p,this._snackBar=h,this.title=x,this.router=ie,this.crearpedidoForm=new A({nombre:new a("",t.required),apellidos:new a("",t.required),cuenta_cliente:new a(null,t.min(1)),pais:new a("",t.compose([t.minLength(1),t.required])),direccion:new a("",t.compose([t.required,t.minLength(1)])),codigo_postal:new a(null,t.compose([t.minLength(5),t.required])),poblacion:new a("",t.compose([t.minLength(1),t.required])),provincia:new a("",t.compose([t.minLength(1),t.required])),telefono:new a(null,t.compose([t.required,t.min(1)])),email:new a("",t.compose([t.email,t.required])),notas:new a("",t.minLength(1)),metodo_pago:new a(null,t.compose([t.required,t.min(1)])),estado:new a(null,t.compose([t.required,t.min(1)])),nombre_descuento:new a(null,t.minLength(1)),tipo_descuento:new a(null,t.minLength(1)),descuento:new a(null,t.min(1))})}ngOnInit(){this.title.setTitle("Nuevo pedido < EasyShop"),this.getUsers(),this.getMetodopagos(),this.getEstadosPedido()}crearPedido(){this.crearpedidoForm.valid&&this.pedidoService.postPedidoAdmin(this.crearpedidoForm.value).subscribe({next:r=>{this._snackBar.open("Pedido creado.","Aceptar",{duration:3e3}),this.router.navigate(["dashboard/pedidos/",r.data])},error:r=>{this._snackBar.open("Ha ocurrido un error.","Aceptar",{duration:3e3})}})}getUsers(){this.userService.getAllUsuarios().subscribe({next:r=>{this.usuarios=r},error:r=>{this._snackBar.open("No se ha podido obtener los usuarios.","Reintentar",{duration:3e3}).onAction().subscribe(()=>{this.getUsers()})}})}getMetodopagos(){this.metodopagoService.getMetodosPagoDisponibles().subscribe({next:r=>{console.log(r),this.metodospago=r.data},error:r=>{this._snackBar.open("No se ha podido obtener los metodos de pago.","Reintentar",{duration:3e3}).onAction().subscribe(()=>{this.getMetodopagos()})}})}getEstadosPedido(){this.pedidoService.getEstados().subscribe({next:r=>{console.log(r),this.estadospedido=r.data},error:r=>{this._snackBar.open("No se ha podido obtener los estados.","Reintentar",{duration:3e3}).onAction().subscribe(()=>{this.getEstadosPedido()})}})}};n.\u0275fac=function(c){return new(c||n)(u(Z),u(te),u(ee),u($),u(q),u(y))},n.\u0275cmp=E({type:n,selectors:[["app-dashboardpedidosnuevo"]],standalone:!0,features:[I],decls:95,vars:1,consts:[["autosize","cdkTextareaAutosize"],[1,"encabezado-pedido"],["href","dashboard/pedidos"],[3,"formGroup"],[1,"pedido-data"],[1,"pedido-data-item-izqa"],[1,"input-border"],[1,"example-full-width"],["matInput","","required","","type","text","formControlName","nombre"],["matInput","","required","","type","text","formControlName","apellidos"],["matInput","","required","","type","text","formControlName","pais"],["matInput","","required","","type","text","formControlName","direccion"],["matInput","","required","","type","number","formControlName","codigo_postal"],["matInput","","required","","type","text","formControlName","poblacion"],["matInput","","required","","type","text","formControlName","provincia"],["matInput","","required","","type","number","formControlName","telefono"],["matInput","","required","","type","email","formControlName","email"],["matInput","","formControlName","notas","cdkTextareaAutosize","","cdkAutosizeMinRows","5","cdkAutosizeMaxRows","10"],[1,"pedido-data-item-dcha"],["formControlName","cuenta_cliente","ngDefaultControl",""],[3,"value"],["required","","formControlName","metodo_pago","ngDefaultControl",""],["required","","formControlName","estado","ngDefaultControl",""],["matInput","","type","text","formControlName","nombre_descuento"],["formControlName","tipo_descuento","ngDefaultControl",""],["value","Fijo"],["value","Porcentual"],["matInput","","type","number","formControlName","descuento"],["mat-flat-button","",3,"click"]],template:function(c,p){if(c&1){let h=_();i(0,"main")(1,"section",1)(2,"h1"),o(3,"Nuevo pedido"),e(),i(4,"a",2),o(5,"\u2190 Volver a la p\xE1gina anterior"),e()(),d(6,"br")(7,"br"),i(8,"form",3)(9,"div",4)(10,"section",5)(11,"div",6)(12,"h2"),o(13,"Datos del cliente"),e(),i(14,"mat-form-field",7)(15,"mat-label"),o(16,"Nombre"),e(),d(17,"input",8),e(),i(18,"mat-form-field",7)(19,"mat-label"),o(20,"Apellidos"),e(),d(21,"input",9),e(),i(22,"mat-form-field",7)(23,"mat-label"),o(24,"Pa\xEDs"),e(),d(25,"input",10),e(),i(26,"mat-form-field",7)(27,"mat-label"),o(28,"Direcci\xF3n"),e(),d(29,"input",11),e(),i(30,"mat-form-field",7)(31,"mat-label"),o(32,"C\xF3digo postal"),e(),d(33,"input",12),e(),i(34,"mat-form-field",7)(35,"mat-label"),o(36,"Poblaci\xF3n"),e(),d(37,"input",13),e(),i(38,"mat-form-field",7)(39,"mat-label"),o(40,"Provincia"),e(),d(41,"input",14),e(),i(42,"mat-form-field",7)(43,"mat-label"),o(44,"Tel\xE9fono"),e(),d(45,"input",15),e(),i(46,"mat-form-field",7)(47,"mat-label"),o(48,"Email"),e(),d(49,"input",16),e(),i(50,"mat-form-field",7)(51,"mat-label"),o(52,"Notas"),e(),d(53,"textarea",17,0),e()()(),i(55,"aside",18)(56,"div",6)(57,"h2"),o(58,"Datos del pedido"),e(),i(59,"mat-form-field",7)(60,"mat-label"),o(61,"Cuenta del cliente"),e(),i(62,"mat-select",19),b(63,ae,2,3,"mat-option",20,oe),e()(),i(65,"mat-form-field",7)(66,"mat-label"),o(67,"M\xE9todo de pago"),e(),i(68,"mat-select",21),b(69,me,2,2,"mat-option",20,ne),e()(),i(71,"mat-form-field",7)(72,"mat-label"),o(73,"Estado"),e(),i(74,"mat-select",22),b(75,de,2,2,"mat-option",20,re),e()(),i(77,"mat-form-field",7)(78,"mat-label"),o(79,"Nombre descuento"),e(),d(80,"input",23),e(),i(81,"mat-form-field",7)(82,"mat-label"),o(83,"Tipo de descuento"),e(),i(84,"mat-select",24)(85,"mat-option",25),o(86,"Fijo"),e(),i(87,"mat-option",26),o(88,"Porcentual"),e()()(),i(89,"mat-form-field",7)(90,"mat-label"),o(91,"Descuento"),e(),d(92,"input",27),e(),i(93,"button",28),M("click",function(){return S(h),C(p.crearPedido())}),o(94,"Guardar"),e()()()()()()}c&2&&(s(8),f("formGroup",p.crearpedidoForm),s(55),g(p.usuarios),s(6),g(p.metodospago),s(6),g(p.estadospedido))},dependencies:[G,R,J,H,U,W,Q,K,Y,X,F,j,T,k,z,P,D,O,B,L,V],styles:[".pedido-data[_ngcontent-%COMP%]{display:flex;width:100%;gap:2rem}.input-border[_ngcontent-%COMP%]{padding:1rem 1rem 0;margin-bottom:1rem;border:1px solid lightgray;background-color:#fff}.input-border[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:2rem;background-color:var(--darkblue);color:var(--white)}.example-full-width[_ngcontent-%COMP%]{width:100%}.encabezado-pedidoitem[_ngcontent-%COMP%]{display:flex;gap:1rem;margin-bottom:1rem}@media only screen and (max-width: 767px){.pedido-data[_ngcontent-%COMP%]{flex-direction:column}}"]});let m=n;return m})();export{qe as DashboardpedidosnuevoComponent};
