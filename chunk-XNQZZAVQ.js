import{a as _e}from"./chunk-7ONAS3VO.js";import{a as be}from"./chunk-RG2PZLBY.js";import{a as fe}from"./chunk-2XCYNILC.js";import{a as he}from"./chunk-IH7NJN6V.js";import{a as ue}from"./chunk-TKJMUKLG.js";import"./chunk-BJKW2MZI.js";import"./chunk-5V7AZGGS.js";import{a as ce,b as pe}from"./chunk-JI4B56LL.js";import"./chunk-Y4ZCGVAW.js";import{a as ae,c as de,d as le}from"./chunk-3TBXM6QS.js";import{a as oe,g as ne,h as re}from"./chunk-7ITRIRQH.js";import{a as Z}from"./chunk-MAKOVUIL.js";import{a as ie}from"./chunk-PE3AIABI.js";import{a as se}from"./chunk-2OGK3DXK.js";import{h as me}from"./chunk-SMOEXM7I.js";import{b as Q,d as o,f as $,g as L,h as q,j as l,k as U,l as J,m as H,n as K,s as W,t as X,u as Y}from"./chunk-33HZCSPU.js";import{b as G}from"./chunk-LVI2TU4A.js";import{o as ee,q as te}from"./chunk-UKCT2NNU.js";import"./chunk-AESYL7IM.js";import"./chunk-YRYHB4P2.js";import{Z as j}from"./chunk-I7KWM6MY.js";import{i as z}from"./chunk-IQAKLUFA.js";import{Ab as i,Bb as e,Cb as p,Gb as V,Jb as S,Lb as _,Ob as O,Rb as P,Sb as I,Tb as y,Vb as n,Wb as w,Xb as g,Ya as c,Yb as N,Za as h,cc as R,jc as D,la as A,ob as M,qb as f,ua as E,va as C,vb as k,xb as B,yb as v,zb as x}from"./chunk-BEZRA2BD.js";var Ce=["contentNuevo"],Se=["contentEditar"],Pe=["contentEliminar"],Ie=["contentEliminarSeleccion"],T=(r,d)=>d.Id,ye=(r,d)=>d.slug,De=(r,d)=>d.id;function Me(r,d){if(r&1&&n(0),r&2){let a=_();g(" #",a.pedido.Id," ")}}function we(r,d){if(r&1&&(i(0,"mat-option",24),n(1),e()),r&2){let a=d.$implicit;f("value",a.Id),c(),N(" #",a.Id," - ",a.Email,"")}}function Ne(r,d){if(r&1&&(i(0,"mat-option",24),n(1),e()),r&2){let a=d.$implicit;O("value",a.slug),c(),w(a.nombre)}}function qe(r,d){if(r&1&&(i(0,"mat-option",24),n(1),e()),r&2){let a=d.$implicit;f("value",a.Id),c(),w(a.Nombre)}}function Fe(r,d){if(r&1&&(i(0,"mat-option",24),n(1),e()),r&2){let a=d.$implicit;f("value",a.id),c(),w(a.valor)}}function ke(r,d){if(r&1){let a=V();i(0,"form",7)(1,"div",8)(2,"section",9)(3,"div",10)(4,"h2"),n(5,"Datos del cliente"),e(),i(6,"mat-form-field",11)(7,"mat-label"),n(8,"Nombre"),e(),p(9,"input",12),e(),i(10,"mat-form-field",11)(11,"mat-label"),n(12,"Apellidos"),e(),p(13,"input",13),e(),i(14,"mat-form-field",11)(15,"mat-label"),n(16,"Pa\xEDs"),e(),p(17,"input",14),e(),i(18,"mat-form-field",11)(19,"mat-label"),n(20,"Direcci\xF3n"),e(),p(21,"input",15),e(),i(22,"mat-form-field",11)(23,"mat-label"),n(24,"C\xF3digo postal"),e(),p(25,"input",16),e(),i(26,"mat-form-field",11)(27,"mat-label"),n(28,"Poblaci\xF3n"),e(),p(29,"input",17),e(),i(30,"mat-form-field",11)(31,"mat-label"),n(32,"Provincia"),e(),p(33,"input",18),e(),i(34,"mat-form-field",11)(35,"mat-label"),n(36,"Tel\xE9fono"),e(),p(37,"input",19),e(),i(38,"mat-form-field",11)(39,"mat-label"),n(40,"Email"),e(),p(41,"input",20),e(),i(42,"mat-form-field",11)(43,"mat-label"),n(44,"Notas"),e(),p(45,"textarea",21,4),e()()(),i(47,"aside",22)(48,"div",10)(49,"h2"),n(50,"Datos del pedido"),e(),i(51,"mat-form-field",11)(52,"mat-label"),n(53,"Cuenta del cliente"),e(),i(54,"mat-select",23),v(55,we,2,3,"mat-option",24,T),e()(),i(57,"mat-form-field",11)(58,"mat-label"),n(59,"M\xE9todo de pago"),e(),i(60,"mat-select",25),v(61,Ne,2,2,"mat-option",24,ye),e()(),i(63,"mat-form-field",11)(64,"mat-label"),n(65,"M\xE9todo de env\xEDo"),e(),i(66,"mat-select",26),v(67,qe,2,2,"mat-option",24,B),e()(),i(69,"mat-form-field",11)(70,"mat-label"),n(71,"Gastos de env\xEDo"),e(),p(72,"input",27),e(),i(73,"mat-form-field",11)(74,"mat-label"),n(75,"Estado"),e(),i(76,"mat-select",28),v(77,Fe,2,2,"mat-option",24,De),e()(),i(79,"mat-form-field",11)(80,"mat-label"),n(81,"Nombre descuento"),e(),p(82,"input",29),e(),i(83,"mat-form-field",11)(84,"mat-label"),n(85,"Tipo de descuento"),e(),i(86,"mat-select",30)(87,"mat-option",31),n(88,"Fijo"),e(),i(89,"mat-option",32),n(90,"Porcentual"),e()()(),i(91,"mat-form-field",11)(92,"mat-label"),n(93,"Descuento"),e(),p(94,"input",33),e(),i(95,"button",34),S("click",function(){E(a);let m=_();return C(m.editarPedido())}),n(96,"Guardar"),e()(),i(97,"div",10)(98,"p"),n(99,"Env\xEDa de nuevo el email con los datos del pedido y el pago al cliente:"),e(),i(100,"button",34),S("click",function(){E(a);let m=_();return C(m.enviarEmail())}),n(101,"Enviar email"),e()(),i(102,"div",10)(103,"p")(104,"b"),n(105,"Subtotal"),e(),n(106),e(),i(107,"p")(108,"b"),n(109,"Gastos de env\xEDo"),e(),n(110),e(),i(111,"p")(112,"b"),n(113,"Descuento"),e(),n(114),e(),i(115,"p")(116,"b"),n(117,"Total"),e(),n(118),e()()()()(),p(119,"br")(120,"br"),i(121,"div",35)(122,"div",36)(123,"h2"),n(124,"Productos del pedido"),e(),i(125,"button",37),S("click",function(){E(a);let m=_();return C(m.nuevoPedidoItem())}),n(126,"A\xF1adir producto"),e()(),i(127,"app-tablacompleta",38),S("selectionChange",function(m){E(a);let u=_();return C(u.onSelectionChange(m))}),e()()}if(r&2){let a,t=_();f("formGroup",t.editarpedidoForm),c(55),x(t.usuarios),c(6),x(t.metodospago),c(6),x(t.metodosenvio),c(10),x(t.estadospedido),c(29),g(": ",t.pedido.Subtotal,"\u20AC"),c(4),g(": ",t.pedido.Gastos_envio,"\u20AC"),c(4),g(": - ",t.pedido.Tipo_descuento=="Porcentual"?t.pedido.Subtotal*((a=t.pedido.Descuento)!==null&&a!==void 0?a:0)/100:t.pedido.Descuento||0,"\u20AC"),c(4),g(": ",t.pedido.Total,""),c(9),f("columns",t.columns)("displayedColumns",t.displayedColumns)("data",t.productosPedido)("buttons",t.botones)("eliminarSeleccionados",t.eliminarSeleccionDialog.bind(t))}}function Te(r,d){if(r&1&&(i(0,"mat-option",24),n(1),e()),r&2){let a=d.$implicit;f("value",a.Id),c(),N("#",a.Id," ",a.Nombre,"")}}function Ae(r,d){if(r&1&&(i(0,"div")(1,"form",39)(2,"mat-form-field",40)(3,"mat-label"),n(4,"Producto"),e(),i(5,"mat-select",41),v(6,Te,2,3,"mat-option",24,T),e()(),i(8,"mat-form-field",40)(9,"mat-label"),n(10,"Subtotal(opcional)"),e(),p(11,"input",42),e(),i(12,"mat-form-field",40)(13,"mat-label"),n(14,"Cantidad"),e(),p(15,"input",43),e()()()),r&2){let a=_();c(),f("formGroup",a.nuevoProductoPedidoForm),c(5),x(a.productos)}}function Be(r,d){if(r&1&&(i(0,"mat-option",24),n(1),e()),r&2){let a=d.$implicit;f("value",a.Id),c(),N("#",a.Id," ",a.Nombre,"")}}function Ve(r,d){if(r&1&&(i(0,"div")(1,"form",39)(2,"mat-form-field",40)(3,"mat-label"),n(4,"Producto"),e(),i(5,"mat-select",41),v(6,Be,2,3,"mat-option",24,T),e()(),i(8,"mat-form-field",40)(9,"mat-label"),n(10,"Subtotal(opcional)"),e(),p(11,"input",42),e(),i(12,"mat-form-field",40)(13,"mat-label"),n(14,"Cantidad"),e(),p(15,"input",43),e()()()),r&2){let a=_();c(),f("formGroup",a.editarProductoPedidoForm),c(5),x(a.productos)}}function Oe(r,d){if(r&1&&(i(0,"div"),n(1),e()),r&2){let a=_();c(),g(' \xBFEst\xE1s seguro de querer eliminar el producto "',a.nombreProducto,'"? ')}}function Re(r,d){r&1&&(i(0,"div"),n(1," \xBFEst\xE1s seguro de querer los productos seleccionados? "),p(2,"br"),i(3,"span",44),n(4,"\xA1OJO! Si has pulsado el bot\xF3n para seleccionar todo, se eliminar\xE1n todos los productos, incluidos aquellos que no aparezcan en la vista actual."),e()())}var st=(()=>{let d=class d{constructor(t,m,u,s,b,ve,xe,ge,Ee){this.pedidoService=t,this.userService=m,this.metodopagoService=u,this.metodoenvioService=s,this.productoService=b,this.dialogService=ve,this.activatedRoute=xe,this._snackBar=ge,this.title=Ee,this.selectedIds=[],this.columns=["Producto","Subtotal","Cantidad","Total"],this.displayedColumns=["select",...this.columns,"acciones"],this.botones=[{id:1,nombre:"Editar",class:"",accion:F=>this.editarPedidoItem(F)},{id:2,nombre:"Eliminar",class:"danger",accion:F=>this.openDialogEliminarPedidoItem(F)}],this.editarpedidoForm=new q({nombre:new l("",o.required),apellidos:new l("",o.required),cuenta_cliente:new l(null,o.min(1)),pais:new l("",o.compose([o.minLength(1),o.required])),direccion:new l("",o.compose([o.required,o.minLength(1)])),codigo_postal:new l(null,o.compose([o.minLength(5),o.required])),poblacion:new l("",o.compose([o.minLength(1),o.required])),provincia:new l("",o.compose([o.minLength(1),o.required])),telefono:new l(null,o.compose([o.required,o.min(1)])),email:new l("",o.compose([o.email,o.required])),notas:new l("",o.minLength(1)),metodo_pago:new l(null,o.compose([o.required,o.min(1)])),estado:new l(null,o.compose([o.required,o.min(1)])),nombre_descuento:new l(null,o.minLength(1)),tipo_descuento:new l(null,o.minLength(1)),descuento:new l(null,o.min(1)),metodo_envio:new l(1,o.compose([o.required,o.min(1)])),gastos_envio:new l(0,o.compose([o.min(0),o.required]))}),this.nuevoProductoPedidoForm=new q({producto_id:new l(0,o.compose([o.required,o.min(1)])),subtotal:new l(null,o.min(1))||null,cantidad:new l(1,o.compose([o.required,o.min(1)]))}),this.editarProductoPedidoForm=new q({producto_id:new l(0,o.compose([o.required,o.min(1)])),subtotal:new l(null,o.min(1))||null,cantidad:new l(1,o.compose([o.required,o.min(1)]))}),this.idPedido=Number(this.activatedRoute.snapshot.paramMap.get("id"))??null}ngOnInit(){this.getUsers(),this.getMetodopagos(),this.getMetodosenvio(),this.getEstadosPedido(),this.getPedido(),this.getPedidoItems(),this.title.setTitle("Editar pedido < EasyShop"),this.suscripcion=this.pedidoService.refresh$.subscribe(()=>{this.getPedido(),this.getPedidoItems()})}ngOnDestroy(){this.suscripcion.unsubscribe()}enviarEmail(){this.pedidoService.enviarEmailPedido(this.idPedido).subscribe({next:t=>{this._snackBar.open("Email enviado.","Aceptar",{duration:3e3})},error:t=>{this._snackBar.open("No se ha podido enviar el email.","Aceptar",{duration:3e3})}})}editarPedido(){this.editarpedidoForm.valid&&this.pedidoService.updatePedido(this.idPedido,this.editarpedidoForm.value).subscribe({next:t=>{this._snackBar.open("Pedido actualizado.","Aceptar",{duration:3e3})},error:t=>{this._snackBar.open("No se ha podido editar el pedido.","Aceptar",{duration:3e3})}})}editarPedidoItem(t){let m="Editar producto del pedido",u="guardar";this.getProductos(),this.pedidoService.getPedidoItemById(t).subscribe({next:s=>{this.productoPedido=s,this.editarProductoPedidoForm.patchValue({producto_id:this.productoPedido.Producto_id,cantidad:this.productoPedido.Cantidad})},error:s=>{this._snackBar.open("No se ha podido obtener el producto.","Aceptar",{duration:3e3})}}),this.dialogService.openDialog(this.editarProductoModal,m,u).then(s=>{if(s)this.pedidoService.updatePedidoItem(t,this.editarProductoPedidoForm.value).subscribe({next:b=>{this._snackBar.open("Producto editado.","Aceptar",{duration:3e3})},error:b=>{this._snackBar.open("No se ha podido editar el producto.","Aceptar",{duration:3e3})}});else return})}nuevoPedidoItem(){let t="Editar producto del pedido",m="guardar";this.getProductos(),this.dialogService.openDialog(this.nuevoProductoModal,t,m).then(u=>{if(u){let s={producto_id:this.nuevoProductoPedidoForm.value.producto_id,subtotal:this.nuevoProductoPedidoForm.value.subtotal||null,cantidad:this.nuevoProductoPedidoForm.value.cantidad,pedido_id:this.idPedido||null};this.pedidoService.postPedidoItem(s).subscribe({next:b=>{this._snackBar.open("Producto a\xF1adido.","Aceptar",{duration:3e3})},error:b=>{this._snackBar.open("No se ha podido a\xF1adir el producto.","Aceptar",{duration:3e3})}})}else return})}openDialogEliminarPedidoItem(t){let m="Eliminar producto",u="aceptar";this.pedidoService.getPedidoItemById(t).subscribe({next:s=>{this.nombreProducto=s.Producto},error:s=>{this._snackBar.open("No se ha podido obtener el producto.","Aceptar",{duration:3e3})}}),this.dialogService.openDialog(this.eliminarProductoModal,m,u).then(s=>{if(s)this.pedidoService.deletePedidoItem(t).subscribe({next:b=>{this._snackBar.open("Producto eliminado.","Aceptar",{duration:3e3})},error:b=>{this._snackBar.open("No se ha podido eliminar el producto.","Aceptar",{duration:3e3})}});else return})}onSelectionChange(t){this.selectedIds=t}eliminarSeleccionDialog(){this.dialogService.openDialog(this.eliminarSeleccionProductoModal,"Eliminar pedidos seleccionados","aceptar").then(u=>{if(u)this.pedidoService.deletePedidoItem(this.selectedIds).subscribe({next:s=>{this._snackBar.open("Productos eliminados del pedido.","Aceptar",{duration:3e3})},error:s=>{this._snackBar.open("No se ha podido eliminar el/los producto/s.","Aceptar",{duration:3e3})}});else return})}getPedido(){this.pedidoService.getPedido(this.idPedido).subscribe({next:t=>{this.pedido=t,this.pedido&&this.editarpedidoForm.patchValue({nombre:this.pedido.Nombre,apellidos:this.pedido.Apellidos,cuenta_cliente:this.pedido.Cuenta_cliente,pais:this.pedido.Pais,direccion:this.pedido.Direccion,codigo_postal:this.pedido.Codigo_postal,poblacion:this.pedido.Poblacion,provincia:this.pedido.Provincia,telefono:this.pedido.Telefono,email:this.pedido.Email,notas:this.pedido.Notas,metodo_pago:this.pedido.Metodo_pago,estado:this.pedido.Estado_id,nombre_descuento:this.pedido.Nombre_descuento,tipo_descuento:this.pedido.Tipo_descuento,descuento:this.pedido.Descuento,metodo_envio:this.pedido.Metodoenvio_id,gastos_envio:this.pedido.Gastos_envio})},error:t=>{this._snackBar.open("No se ha podido obtener el pedido.","Aceptar",{duration:3e3})}})}getPedidoItems(){this.pedidoService.getPedidosItemByOrderId(this.idPedido).subscribe({next:t=>{this.productosPedido=t},error:t=>{this._snackBar.open("No se ha podido obtener los productos.","Aceptar",{duration:3e3})}})}getEstadosPedido(){this.pedidoService.getEstados().subscribe({next:t=>{this.estadospedido=t.data},error:t=>{console.error(t)}})}getUsers(){this.userService.getAllUsuarios().subscribe({next:t=>{this.usuarios=t},error:t=>{console.error(t)}})}getMetodopagos(){this.metodopagoService.getMetodosPagoDisponibles().subscribe({next:t=>{this.metodospago=t.data},error:t=>{console.error(t)}})}getMetodosenvio(){this.metodoenvioService.getMetodosenvio().subscribe({next:t=>{this.metodosenvio=t.data},error:t=>{console.error(t)}})}getProductos(){this.productoService.getProductos().subscribe({next:t=>{this.productos=t.data},error:t=>{console.error(t)}})}};d.\u0275fac=function(m){return new(m||d)(h(he),h(be),h(fe),h(_e),h(Z),h(se),h(G),h(ie),h(z))},d.\u0275cmp=A({type:d,selectors:[["app-dashboardpedidoseditar"]],viewQuery:function(m,u){if(m&1&&(P(Ce,5),P(Se,5),P(Pe,5),P(Ie,5)),m&2){let s;I(s=y())&&(u.nuevoProductoModal=s.first),I(s=y())&&(u.editarProductoModal=s.first),I(s=y())&&(u.eliminarProductoModal=s.first),I(s=y())&&(u.eliminarSeleccionProductoModal=s.first)}},standalone:!0,features:[R],decls:18,vars:2,consts:[["contentNuevo",""],["contentEditar",""],["contentEliminar",""],["contentEliminarSeleccion",""],["autosize","cdkTextareaAutosize"],[1,"encabezado-pedido"],["href","dashboard/pedidos"],[3,"formGroup"],[1,"pedido-data"],[1,"pedido-data-item-izqa"],[1,"input-border"],[1,"example-full-width"],["matInput","","required","","type","text","formControlName","nombre"],["matInput","","required","","type","text","formControlName","apellidos"],["matInput","","required","","type","text","formControlName","pais"],["matInput","","required","","type","text","formControlName","direccion"],["matInput","","required","","type","number","formControlName","codigo_postal"],["matInput","","required","","type","text","formControlName","poblacion"],["matInput","","required","","type","text","formControlName","provincia"],["matInput","","required","","type","number","formControlName","telefono"],["matInput","","required","","type","email","formControlName","email"],["matInput","","formControlName","notas","cdkTextareaAutosize","","cdkAutosizeMinRows","5","cdkAutosizeMaxRows","10"],[1,"pedido-data-item-dcha"],["formControlName","cuenta_cliente","ngDefaultControl",""],[3,"value"],["required","","formControlName","metodo_pago","ngDefaultControl",""],["required","","formControlName","metodo_envio","ngDefaultControl",""],["matInput","","required","","type","number","formControlName","gastos_envio"],["required","","formControlName","estado","ngDefaultControl",""],["matInput","","type","text","formControlName","nombre_descuento"],["formControlName","tipo_descuento","ngDefaultControl",""],["value","Fijo"],["value","Porcentual"],["matInput","","type","number","formControlName","descuento"],["mat-flat-button","",3,"click"],[1,"pedido-data-otros"],[1,"encabezado-pedidoitem"],["mat-stroked-button","",3,"click"],[3,"selectionChange","columns","displayedColumns","data","buttons","eliminarSeleccionados"],[1,"productoitem-form",3,"formGroup"],[1,"input-editar"],["formControlName","producto_id","ngDefaultControl","","required",""],["matInput","","type","number","formControlName","subtotal","ngDefaultControl",""],["matInput","","type","number","formControlName","cantidad","ngDefaultControl","","required",""],[1,"caution"]],template:function(m,u){m&1&&(i(0,"main")(1,"section",5)(2,"h1"),n(3,"Editar pedido "),M(4,Me,1,1),e(),i(5,"a",6),n(6,"\u2190 Volver a la p\xE1gina anterior"),e()(),p(7,"br")(8,"br"),M(9,ke,128,10),e(),M(10,Ae,16,1,"ng-template",null,0,D)(12,Ve,16,1,"ng-template",null,1,D)(14,Oe,2,1,"ng-template",null,2,D)(16,Re,5,0,"ng-template",null,3,D)),m&2&&(c(4),k(4,u.pedido?4:-1),c(5),k(9,u.pedido?9:-1))},dependencies:[te,ee,re,ne,oe,le,de,ae,me,pe,ce,j,Y,U,Q,J,$,L,W,H,K,X,ue],styles:[".pedido-data[_ngcontent-%COMP%]{display:flex;width:100%;gap:2rem}.input-border[_ngcontent-%COMP%]{padding:1rem 1rem 0;margin-bottom:2rem;border:1px solid lightgray;background-color:#fff}.input-border[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:2rem;background-color:var(--darkblue);color:var(--white)}.example-full-width[_ngcontent-%COMP%]{width:100%}.encabezado-pedidoitem[_ngcontent-%COMP%]{display:flex;gap:1rem;margin-bottom:1rem}.encabezado-pedidoitem[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-color:var(--darkblue)}.input-editar[_ngcontent-%COMP%]{width:100%}.caution[_ngcontent-%COMP%]{color:red}@media only screen and (max-width: 767px){.pedido-data[_ngcontent-%COMP%]{flex-direction:column}}"]});let r=d;return r})();export{st as DashboardpedidoseditarComponent};
