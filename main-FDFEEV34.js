import{a as Re}from"./chunk-34JUEJJQ.js";import{a as Ee,b as Me,d as De,e as we,g as Oe,h as Ie}from"./chunk-7VRA7NH3.js";import{a as xe,b as Pe}from"./chunk-S3J4NSG4.js";import"./chunk-PE3AIABI.js";import{a as k,b}from"./chunk-3NDNBPST.js";import{a as ve,b as be,c as _e,d as ye}from"./chunk-AKCFMZTD.js";import{c as Ce,d as h,g as fe}from"./chunk-LVI2TU4A.js";import{o as Se,q as Ae}from"./chunk-UKCT2NNU.js";import"./chunk-AESYL7IM.js";import"./chunk-I7KWM6MY.js";import{d as me,e as ce,f as le,g as he,h as ue,k as ge}from"./chunk-IQAKLUFA.js";import{Ab as s,Ac as ie,Bb as a,Cb as f,Dc as ae,F as y,Gb as D,Hc as pe,Ja as B,Jb as w,Lb as l,Lc as se,Mc as de,Ob as O,Rb as W,Sb as Y,Tb as Z,Ub as q,Va as G,Vb as m,Wb as I,Xb as J,Ya as c,Yb as R,Za as A,_ as T,_a as L,aa as N,ab as U,bc as ee,cb as $,cc as te,dc as oe,eb as H,ec as ne,fb as K,ga as d,gc as g,ic as v,la as j,o as _,oa as z,ob as P,pa as V,pc as re,qb as E,t as C,ua as x,va as S,vb as M,yb as Q,zb as X}from"./chunk-BEZRA2BD.js";var ke=()=>{let e=d(k),t=d(h);return e.comprobarAdmin().pipe(C(o=>o.status===!0?!0:(t.navigate([""]),!1)),y(o=>(t.navigate([""]),console.error(o),_(!1))))},Fe=()=>{let e=d(k),t=d(h);return e.comprobarAdmin().pipe(C(o=>o.status===!0?(t.navigate(["/dashboard"]),!1):!0),y(o=>o.status===401?_(!0):(t.navigate([""]),_(!1))))};var Te=()=>{let e=d(b),t=d(h);return e.get("TOKEN_C")?!0:(t.navigate(["/acceso"]),!1)},Ne=()=>{let e=d(b),t=d(h);return e.get("TOKEN_C")?(t.navigate(["/mi-cuenta"]),!1):!0};var je=[{path:"",loadComponent:()=>import("./chunk-CV4OPNJ4.js").then(e=>e.HomepageComponent)},{path:"iniciosesion",loadComponent:()=>import("./chunk-L7VTT4A3.js").then(e=>e.LoginComponent),canActivate:[Fe]},{path:"acceso",loadComponent:()=>import("./chunk-TUBLSFQ4.js").then(e=>e.AccesoclienteComponent),canActivate:[Ne]},{path:"emailverificado",loadComponent:()=>import("./chunk-SQCVSUNY.js").then(e=>e.EmailverificadoComponent)},{path:"mi-cuenta",loadComponent:()=>import("./chunk-IN56ZVPD.js").then(e=>e.MicuentaComponent),canActivate:[Te]},{path:"dashboard",loadComponent:()=>import("./chunk-G2LL7YSA.js").then(e=>e.DashboardComponent),canActivateChild:[ke],children:[{path:"",loadComponent:()=>import("./chunk-MT6X6GEA.js").then(e=>e.PanelcontrolComponent)},{path:"media",loadComponent:()=>import("./chunk-7L6JWEQM.js").then(e=>e.DashboardmediaComponent)},{path:"productos",loadComponent:()=>import("./chunk-H662TJ7X.js").then(e=>e.DashboardproductsComponent)},{path:"productos/:idproducto",loadComponent:()=>import("./chunk-722ECDA3.js").then(e=>e.DashboardproductseditarComponent)},{path:"nuevoproducto",loadComponent:()=>import("./chunk-LIBSGY34.js").then(e=>e.DashboardproductsnuevoComponent)},{path:"categoriasproducto",loadComponent:()=>import("./chunk-6J5GPD7S.js").then(e=>e.DashboardcategoriasproductoComponent)},{path:"categoriasproducto/:idcategoria",loadComponent:()=>import("./chunk-IGV2KXWI.js").then(e=>e.DashboardeditarcategoriaproductoComponent)},{path:"marcas",loadComponent:()=>import("./chunk-EOZXEPWM.js").then(e=>e.DashboardmarcasComponent)},{path:"marcas/:idmarca",loadComponent:()=>import("./chunk-DUYWRRAL.js").then(e=>e.DashboardeditarmarcaComponent)},{path:"cupones",loadComponent:()=>import("./chunk-E7MUKRTB.js").then(e=>e.DashboardcuponesComponent)},{path:"metodospago",loadComponent:()=>import("./chunk-RSEIEK3O.js").then(e=>e.DashboardmetodospagoComponent)},{path:"metodospago/transferencia",loadComponent:()=>import("./chunk-E5RMWW76.js").then(e=>e.DashboardmetodotransferenciaComponent)},{path:"metodosenvio",loadComponent:()=>import("./chunk-7PTZU4AX.js").then(e=>e.DashboardmetodosenvioComponent)},{path:"pedidos",loadComponent:()=>import("./chunk-FYBKLC7Z.js").then(e=>e.DashboardpedidosComponent)},{path:"pedidos/:id",loadComponent:()=>import("./chunk-XNQZZAVQ.js").then(e=>e.DashboardpedidoseditarComponent)},{path:"nuevopedido",loadComponent:()=>import("./chunk-LODQWXYZ.js").then(e=>e.DashboardpedidosnuevoComponent)},{path:"empleos",loadComponent:()=>import("./chunk-IDEWRY5V.js").then(e=>e.DashboardempleosComponent)},{path:"empleos/:idempleo",loadComponent:()=>import("./chunk-QX6VC5BG.js").then(e=>e.DashboardempleocvsComponent)},{path:"categoriasempleo",loadComponent:()=>import("./chunk-46RMIJIV.js").then(e=>e.DashboardcategoriasempleoComponent)},{path:"mensajes",loadComponent:()=>import("./chunk-3NZWK575.js").then(e=>e.DashboardmensajesComponent)},{path:"mensajes/:idmensaje",loadComponent:()=>import("./chunk-X6WQGAUM.js").then(e=>e.DashboardmensajeindividualComponent)},{path:"newsletter",loadComponent:()=>import("./chunk-CSFCD2PL.js").then(e=>e.DashboardnewsletterComponent)},{path:"usuarios",loadComponent:()=>import("./chunk-ENMFF74V.js").then(e=>e.DashboardusuariosComponent)},{path:"ajustes",loadComponent:()=>import("./chunk-HGJL7HQS.js").then(e=>e.DashboardajustesComponent)}]},{path:"productos",loadComponent:()=>import("./chunk-7RBUHVTR.js").then(e=>e.ListaproductosComponent),children:[{path:"categoria/:categoria",loadComponent:()=>import("./chunk-7RBUHVTR.js").then(e=>e.ListaproductosComponent)},{path:"marca/:marca",loadComponent:()=>import("./chunk-7RBUHVTR.js").then(e=>e.ListaproductosComponent)}]},{path:"busqueda/:busqueda",loadComponent:()=>import("./chunk-AQEFF2TB.js").then(e=>e.ResultadosbusquedaComponent)},{path:"producto/:idProducto",loadComponent:()=>import("./chunk-BAKCKYG2.js").then(e=>e.FichaproductoComponent)},{path:"carrito",loadComponent:()=>import("./chunk-H5B3SFT3.js").then(e=>e.CarritopageComponent)},{path:"finalizar-compra",loadComponent:()=>import("./chunk-4KWMHVVI.js").then(e=>e.CheckoutpageComponent)},{path:"informacion-transferencia",loadComponent:()=>import("./chunk-FY6XIBAY.js").then(e=>e.DetalletransferenciaComponent)},{path:"resultado-del-pago/:resultado",loadComponent:()=>import("./chunk-RILFIWIH.js").then(e=>e.DetallepagotarjetaComponent)},{path:"nosotros",loadComponent:()=>import("./chunk-MTOTEIBW.js").then(e=>e.NosotrosComponent)},{path:"contacto",loadComponent:()=>import("./chunk-72YAOM6F.js").then(e=>e.ContactoComponent)},{path:"empleos",loadComponent:()=>import("./chunk-EALSAFUT.js").then(e=>e.CanalempleoComponent)},{path:"empleos/:idoferta",loadComponent:()=>import("./chunk-JHNFFWPS.js").then(e=>e.OfertaempleoComponent)},{path:"ayuda",loadComponent:()=>import("./chunk-HCQMS6E2.js").then(e=>e.AyudaComponent)},{path:"aviso-legal",loadComponent:()=>import("./chunk-4QSSNKIT.js").then(e=>e.AvisolegalComponent)},{path:"politica-de-cookies",loadComponent:()=>import("./chunk-BFFKLWRD.js").then(e=>e.PoliticacookiesComponent)},{path:"politica-de-privacidad",loadComponent:()=>import("./chunk-HDQB4IYU.js").then(e=>e.PoliticaprivacidadComponent)},{path:"envio-y-devoluciones",loadComponent:()=>import("./chunk-R2S3CKWJ.js").then(e=>e.EnvioydevolucionesComponent)},{path:"**",loadComponent:()=>import("./chunk-W7S6Z4WO.js").then(e=>e.Error404pageComponent)}];var $e="@",He=(()=>{let t=class t{constructor(n,r,i,p,u){this.doc=n,this.delegate=r,this.zone=i,this.animationType=p,this.moduleImpl=u,this._rendererFactoryPromise=null,this.scheduler=d(U,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-QUPJ7KFQ.js")).catch(r=>{throw new T(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:i})=>{this._engine=r(this.animationType,this.doc,this.scheduler);let p=new i(this.delegate,this._engine,this.zone);return this.delegate=p,p})}createRenderer(n,r){let i=this.delegate.createRenderer(n,r);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let p=new F(i);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(u=>{let Le=u.createRenderer(n,r);p.use(Le)}).catch(u=>{p.use(i)}),p}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};t.\u0275fac=function(r){L()},t.\u0275prov=N({token:t,factory:t.\u0275fac});let e=t;return e})(),F=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let o of this.replay)o(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,o){return this.delegate.createElement(t,o)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,o){this.delegate.appendChild(t,o)}insertBefore(t,o,n,r){this.delegate.insertBefore(t,o,n,r)}removeChild(t,o,n){this.delegate.removeChild(t,o,n)}selectRootElement(t,o){return this.delegate.selectRootElement(t,o)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,o,n,r){this.delegate.setAttribute(t,o,n,r)}removeAttribute(t,o,n){this.delegate.removeAttribute(t,o,n)}addClass(t,o){this.delegate.addClass(t,o)}removeClass(t,o){this.delegate.removeClass(t,o)}setStyle(t,o,n,r){this.delegate.setStyle(t,o,n,r)}removeStyle(t,o,n){this.delegate.removeStyle(t,o,n)}setProperty(t,o,n){this.shouldReplay(o)&&this.replay.push(r=>r.setProperty(t,o,n)),this.delegate.setProperty(t,o,n)}setValue(t,o){this.delegate.setValue(t,o)}listen(t,o,n){return this.shouldReplay(o)&&this.replay.push(r=>r.listen(t,o,n)),this.delegate.listen(t,o,n)}shouldReplay(t){return this.replay!==null&&t.startsWith($e)}};function ze(e="animations"){return H("NgAsyncAnimations"),z([{provide:$,useFactory:(t,o,n)=>new He(t,o,n,e),deps:[ie,he,K]},{provide:B,useValue:e==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Ve=(e,t)=>{let o=d(b),n=e;if(e.headers.has("X-A-T")){let r=o.get("TOKEN_A");return r&&(n=e.clone({setHeaders:{Authorization:`Bearer ${r}`}})),t(n)}else if(e.headers.has("X-C-T")){let r=o.get("TOKEN_C");return r&&(n=e.clone({setHeaders:{Authorization:`Bearer ${r}`}})),t(n)}else return t(e)};var Be={providers:[fe(je),ze(),V(le),me(ce([Ve]))]};var Ke=["sidenav"],Qe=(e,t)=>t.Id,Xe=()=>({"min-width":"30vh"}),We=e=>({height:e});function Ye(e,t){if(e&1&&(s(0,"span"),m(1),g(2,"currency"),a(),s(3,"span",14)(4,"del"),m(5),g(6,"currency"),a()()),e&2){let o=l().$implicit;c(),R("",o.cantidad," x ",v(2,3,o.Precio_rebajado_euros,"EUR")," "),c(4),I(v(6,6,o.Precio_euros,"EUR"))}}function Ze(e,t){if(e&1&&(s(0,"span"),m(1),g(2,"currency"),a()),e&2){let o=l().$implicit;c(),R("",o.cantidad," x ",v(2,2,o.Precio_euros,"EUR"),"")}}function qe(e,t){if(e&1){let o=D();s(0,"mat-card",5),f(1,"img",12),s(2,"mat-card-header")(3,"mat-card-title"),m(4),a(),s(5,"mat-card-subtitle"),P(6,Ye,7,9)(7,Ze,3,5),a(),f(8,"br"),s(9,"button",13),w("click",function(){let r=x(o).$index,i=l(2);return S(i.deleteProduct(r))}),m(10,"Eliminar"),a()()()}if(e&2){let o=t.$implicit,n=l(2);c(),O("src",n.fileEndPoint+o.Imagen[0].Ruta_archivo,G),O("alt",o.Imagen[0].Alt),c(3),I(o.Nombre),c(2),M(6,o.Precio_rebajado_euros?6:7)}}function Je(e,t){if(e&1&&(Q(0,qe,11,4,"mat-card",5,Qe),s(2,"p",6)(3,"strong"),m(4,"Subtotal:"),a(),m(5),g(6,"currency"),a(),s(7,"div",7)(8,"button",8)(9,"a",9),m(10,"Ver carrito"),a()(),s(11,"button",10)(12,"a",11),m(13,"Finalizar compra"),a()()()),e&2){let o=l();X(o.productos),c(5),J(" ",v(6,1,o.subtotal,"EUR"),"")}}function et(e,t){e&1&&(s(0,"p",15),m(1,"No hay productos en el carrito."),a())}ae(Re,"es");var Ge=(()=>{let t=class t{constructor(n,r){this.sidenavService=n,this.carrito=r,this.title="EasyShop",this.fileEndPoint=ge.DriveEndpoint,this.suscripcion=[]}ngOnInit(){this.sidenavService.setSidenav(this.sidenav),this.suscripcion.push(this.carrito.productos.subscribe(n=>{this.productos=n,this.getCart(),this.getSubtotal()})),this.getSubtotal()}ngOnDestroy(){this.suscripcion.forEach(n=>{n.unsubscribe()})}closeSidenav(){this.sidenavService.close()}deleteProduct(n){this.carrito.deleteProducto(n)}getSubtotal(){this.suscripcion.push(this.carrito.productos.pipe(C(n=>n.reduce((r,i)=>Number(r)+Number(i.Precio_rebajado_euros?i.Precio_rebajado_euros*i.cantidad:i.Precio_euros*i.cantidad),0))).subscribe(n=>{this.subtotal=n}))}getCart(){this.productos=this.carrito.cart||"[]"}};t.\u0275fac=function(r){return new(r||t)(A(xe),A(Pe))},t.\u0275cmp=j({type:t,selectors:[["app-root"]],viewQuery:function(r,i){if(r&1&&W(Ke,7),r&2){let p;Y(p=Z())&&(i.sidenav=p.first)}},standalone:!0,features:[ee([{provide:re,useValue:"es"}]),te],decls:13,vars:6,consts:[["sidenav",""],[1,"sidenav-cart"],["mode","over","position","end","fixedInViewport","true",3,"ngStyle"],[1,"close","btn",3,"click"],[3,"ngStyle"],["appearance","outlined",1,"producto-card"],[1,"subtotal"],[1,"botones-carrito"],["mat-stroked-button","",1,"btn-carrito-item","ver-carrito"],["href","/carrito",1,"txt-carrito"],["mat-flat-button","",1,"btn-carrito-item","finalizar-compra"],["href","/finalizar-compra",1,"txt-finalizar-compra"],["mat-card-image","",3,"src","alt"],["mat-flat-button","","color","warn",3,"click"],[1,"precio_tachado"],[1,"text-center","p-3"]],template:function(r,i){if(r&1){let p=D();s(0,"mat-sidenav-container",1)(1,"mat-sidenav"),m(2,"Start"),a(),s(3,"mat-sidenav",2,0)(5,"button",3),w("click",function(){return x(p),S(i.closeSidenav())}),m(6,"X"),a(),f(7,"br")(8,"br"),P(9,Je,14,4)(10,et,2,0),a(),s(11,"mat-sidenav-content",4),f(12,"router-outlet"),a()()}if(r&2){let p=q(4);c(3),E("ngStyle",oe(3,Xe)),c(6),M(9,i.productos&&i.productos.length>0?9:10),c(2),E("ngStyle",ne(4,We,p.opened?"100vh":"auto"))}},dependencies:[Ce,ye,be,_e,ve,Ie,Ee,we,Oe,De,Me,Ae,Se,de,pe,se],styles:[".close[_ngcontent-%COMP%]{float:right;margin:1rem 1rem 0 0;color:var(--white);background-color:var(--darkblue)}.producto-card[_ngcontent-%COMP%]{display:flex;flex-direction:row;max-width:30rem;padding:2rem;margin:2rem 1rem 0}.producto-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40%}.precio_tachado[_ngcontent-%COMP%]{color:var(--orangered)}mat-card-header[_ngcontent-%COMP%]{display:flex;flex-direction:column}.eliminar[_ngcontent-%COMP%]{color:#fff;background-color:var(--orangered)}mat-sidenav-content[_ngcontent-%COMP%]{background-color:var(--white)}.subtotal[_ngcontent-%COMP%]{text-align:center;font-size:var(--lengthMd2);margin:2rem 0}.botones-carrito[_ngcontent-%COMP%]{text-align:center}.botones-carrito[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:1rem}.finalizar-compra[_ngcontent-%COMP%]{background-color:var(--darkblue)!important}a.txt-carrito[_ngcontent-%COMP%]{color:var(--black)!important;text-decoration:none}a.txt-finalizar-compra[_ngcontent-%COMP%]{color:var(--white);text-decoration:none}"]});let e=t;return e})();ue(Ge,Be).catch(e=>console.error(e));
