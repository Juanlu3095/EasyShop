import{a as Re}from"./chunk-34JUEJJQ.js";import{a as Ee,b as Me,d as De,e as we,g as Oe,h as Ie}from"./chunk-7VRA7NH3.js";import{a as xe,b as Pe}from"./chunk-S3J4NSG4.js";import"./chunk-PE3AIABI.js";import{a as T,b as _}from"./chunk-A3LAJG7R.js";import{a as ve,b as be,c as _e,d as ye}from"./chunk-AKCFMZTD.js";import{c as fe,d as h,g as ge}from"./chunk-I4WXUBEO.js";import{o as Se,q as Ae}from"./chunk-UKCT2NNU.js";import"./chunk-AESYL7IM.js";import{a as F}from"./chunk-4OTIWHWN.js";import"./chunk-I7KWM6MY.js";import{d as ce,e as le,f as he,g as ue,h as Ce}from"./chunk-B7NLDW3E.js";import{Ab as s,Ac as ae,Bb as a,Cb as g,Dc as pe,F as S,Gb as w,Hc as se,Ja as G,Jb as O,Lb as l,Lc as de,Mc as me,Ob as I,Rb as Y,Sb as Z,Tb as q,Ub as J,Va as x,Vb as c,Wb as R,Xb as ee,Ya as m,Yb as k,Za as E,_ as j,_a as L,aa as z,ab as $,bc as te,cb as H,cc as oe,dc as ne,eb as K,ec as re,fb as Q,ga as d,gc as v,ic as b,la as U,o as y,oa as V,ob as M,pa as B,pc as ie,qb as f,t as C,ua as A,va as P,vb as D,yb as X,zb as W}from"./chunk-BEZRA2BD.js";var ke=()=>{let e=d(T),t=d(h);return e.comprobarAdmin().pipe(C(o=>o.status===!0?!0:(t.navigate([""]),!1)),S(o=>(t.navigate([""]),console.error(o),y(!1))))},Fe=()=>{let e=d(T),t=d(h);return e.comprobarAdmin().pipe(C(o=>o.status===!0?(t.navigate(["/dashboard"]),!1):!0),S(o=>o.status===401?y(!0):(t.navigate([""]),y(!1))))};var Te=()=>{let e=d(_),t=d(h);return e.get("TOKEN_C")?!0:(t.navigate(["/acceso"]),!1)},Ne=()=>{let e=d(_),t=d(h);return e.get("TOKEN_C")?(t.navigate(["/mi-cuenta"]),!1):!0};var je=[{path:"",loadComponent:()=>import("./chunk-KWDHROLA.js").then(e=>e.HomepageComponent)},{path:"iniciosesion",loadComponent:()=>import("./chunk-O2GEPGNR.js").then(e=>e.LoginComponent),canActivate:[Fe]},{path:"acceso",loadComponent:()=>import("./chunk-627LV3BC.js").then(e=>e.AccesoclienteComponent),canActivate:[Ne]},{path:"emailverificado",loadComponent:()=>import("./chunk-NE447KPN.js").then(e=>e.EmailverificadoComponent)},{path:"mi-cuenta",loadComponent:()=>import("./chunk-454YV452.js").then(e=>e.MicuentaComponent),canActivate:[Te]},{path:"dashboard",loadComponent:()=>import("./chunk-QD4VWCAP.js").then(e=>e.DashboardComponent),canActivateChild:[ke],children:[{path:"",loadComponent:()=>import("./chunk-P5KBTLUF.js").then(e=>e.PanelcontrolComponent)},{path:"media",loadComponent:()=>import("./chunk-SZWUKG22.js").then(e=>e.DashboardmediaComponent)},{path:"productos",loadComponent:()=>import("./chunk-PTD42BJT.js").then(e=>e.DashboardproductsComponent)},{path:"productos/:idproducto",loadComponent:()=>import("./chunk-K5T4WPQM.js").then(e=>e.DashboardproductseditarComponent)},{path:"nuevoproducto",loadComponent:()=>import("./chunk-HFKFVSCQ.js").then(e=>e.DashboardproductsnuevoComponent)},{path:"categoriasproducto",loadComponent:()=>import("./chunk-2CYH7DFW.js").then(e=>e.DashboardcategoriasproductoComponent)},{path:"categoriasproducto/:idcategoria",loadComponent:()=>import("./chunk-WBNY27RH.js").then(e=>e.DashboardeditarcategoriaproductoComponent)},{path:"marcas",loadComponent:()=>import("./chunk-WEDCZF2V.js").then(e=>e.DashboardmarcasComponent)},{path:"marcas/:idmarca",loadComponent:()=>import("./chunk-XBOD36IG.js").then(e=>e.DashboardeditarmarcaComponent)},{path:"cupones",loadComponent:()=>import("./chunk-6FJSMALF.js").then(e=>e.DashboardcuponesComponent)},{path:"metodospago",loadComponent:()=>import("./chunk-KORLP6A3.js").then(e=>e.DashboardmetodospagoComponent)},{path:"metodospago/transferencia",loadComponent:()=>import("./chunk-KE7KHQGN.js").then(e=>e.DashboardmetodotransferenciaComponent)},{path:"metodosenvio",loadComponent:()=>import("./chunk-V7NMSFRT.js").then(e=>e.DashboardmetodosenvioComponent)},{path:"pedidos",loadComponent:()=>import("./chunk-WHLKC7EA.js").then(e=>e.DashboardpedidosComponent)},{path:"pedidos/:id",loadComponent:()=>import("./chunk-D3TO53ZX.js").then(e=>e.DashboardpedidoseditarComponent)},{path:"nuevopedido",loadComponent:()=>import("./chunk-3LR2LG7V.js").then(e=>e.DashboardpedidosnuevoComponent)},{path:"empleos",loadComponent:()=>import("./chunk-4H3VNEW3.js").then(e=>e.DashboardempleosComponent)},{path:"empleos/:idempleo",loadComponent:()=>import("./chunk-QK7TAYT4.js").then(e=>e.DashboardempleocvsComponent)},{path:"categoriasempleo",loadComponent:()=>import("./chunk-VCPOERZJ.js").then(e=>e.DashboardcategoriasempleoComponent)},{path:"mensajes",loadComponent:()=>import("./chunk-WXTDJEE4.js").then(e=>e.DashboardmensajesComponent)},{path:"mensajes/:idmensaje",loadComponent:()=>import("./chunk-5YNEA257.js").then(e=>e.DashboardmensajeindividualComponent)},{path:"newsletter",loadComponent:()=>import("./chunk-5YL4RYI3.js").then(e=>e.DashboardnewsletterComponent)},{path:"usuarios",loadComponent:()=>import("./chunk-VN3SISEM.js").then(e=>e.DashboardusuariosComponent)},{path:"ajustes",loadComponent:()=>import("./chunk-2Z7EEBQ7.js").then(e=>e.DashboardajustesComponent)}]},{path:"productos",loadComponent:()=>import("./chunk-QEW4IQXG.js").then(e=>e.ListaproductosComponent),children:[{path:"categoria/:categoria",loadComponent:()=>import("./chunk-QEW4IQXG.js").then(e=>e.ListaproductosComponent)},{path:"marca/:marca",loadComponent:()=>import("./chunk-QEW4IQXG.js").then(e=>e.ListaproductosComponent)}]},{path:"busqueda/:busqueda",loadComponent:()=>import("./chunk-BBBPO5R7.js").then(e=>e.ResultadosbusquedaComponent)},{path:"producto/:idProducto",loadComponent:()=>import("./chunk-VBMLVM6Y.js").then(e=>e.FichaproductoComponent)},{path:"carrito",loadComponent:()=>import("./chunk-7ARVOX7C.js").then(e=>e.CarritopageComponent)},{path:"finalizar-compra",loadComponent:()=>import("./chunk-U42VLSVE.js").then(e=>e.CheckoutpageComponent)},{path:"informacion-transferencia",loadComponent:()=>import("./chunk-ACAJLYJR.js").then(e=>e.DetalletransferenciaComponent)},{path:"resultado-del-pago/:resultado",loadComponent:()=>import("./chunk-CWTFYLN4.js").then(e=>e.DetallepagotarjetaComponent)},{path:"nosotros",loadComponent:()=>import("./chunk-WRS34SMN.js").then(e=>e.NosotrosComponent)},{path:"contacto",loadComponent:()=>import("./chunk-PD3SAIMI.js").then(e=>e.ContactoComponent)},{path:"empleos",loadComponent:()=>import("./chunk-JBNUVX56.js").then(e=>e.CanalempleoComponent)},{path:"empleos/:idoferta",loadComponent:()=>import("./chunk-OS2BYLO7.js").then(e=>e.OfertaempleoComponent)},{path:"ayuda",loadComponent:()=>import("./chunk-GOQTQBN4.js").then(e=>e.AyudaComponent)},{path:"aviso-legal",loadComponent:()=>import("./chunk-S22HRHZF.js").then(e=>e.AvisolegalComponent)},{path:"politica-de-cookies",loadComponent:()=>import("./chunk-5JBDJU3R.js").then(e=>e.PoliticacookiesComponent)},{path:"politica-de-privacidad",loadComponent:()=>import("./chunk-JDHXJCEB.js").then(e=>e.PoliticaprivacidadComponent)},{path:"envio-y-devoluciones",loadComponent:()=>import("./chunk-ISB7EUVT.js").then(e=>e.EnvioydevolucionesComponent)},{path:"**",loadComponent:()=>import("./chunk-P7L3OWBJ.js").then(e=>e.Error404pageComponent)}];var $e="@",He=(()=>{let t=class t{constructor(n,r,i,p,u){this.doc=n,this.delegate=r,this.zone=i,this.animationType=p,this.moduleImpl=u,this._rendererFactoryPromise=null,this.scheduler=d($,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-QUPJ7KFQ.js")).catch(r=>{throw new j(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:i})=>{this._engine=r(this.animationType,this.doc,this.scheduler);let p=new i(this.delegate,this._engine,this.zone);return this.delegate=p,p})}createRenderer(n,r){let i=this.delegate.createRenderer(n,r);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let p=new N(i);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(u=>{let Ge=u.createRenderer(n,r);p.use(Ge)}).catch(u=>{p.use(i)}),p}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};t.\u0275fac=function(r){L()},t.\u0275prov=z({token:t,factory:t.\u0275fac});let e=t;return e})(),N=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let o of this.replay)o(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,o){return this.delegate.createElement(t,o)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,o){this.delegate.appendChild(t,o)}insertBefore(t,o,n,r){this.delegate.insertBefore(t,o,n,r)}removeChild(t,o,n){this.delegate.removeChild(t,o,n)}selectRootElement(t,o){return this.delegate.selectRootElement(t,o)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,o,n,r){this.delegate.setAttribute(t,o,n,r)}removeAttribute(t,o,n){this.delegate.removeAttribute(t,o,n)}addClass(t,o){this.delegate.addClass(t,o)}removeClass(t,o){this.delegate.removeClass(t,o)}setStyle(t,o,n,r){this.delegate.setStyle(t,o,n,r)}removeStyle(t,o,n){this.delegate.removeStyle(t,o,n)}setProperty(t,o,n){this.shouldReplay(o)&&this.replay.push(r=>r.setProperty(t,o,n)),this.delegate.setProperty(t,o,n)}setValue(t,o){this.delegate.setValue(t,o)}listen(t,o,n){return this.shouldReplay(o)&&this.replay.push(r=>r.listen(t,o,n)),this.delegate.listen(t,o,n)}shouldReplay(t){return this.replay!==null&&t.startsWith($e)}};function ze(e="animations"){return K("NgAsyncAnimations"),V([{provide:H,useFactory:(t,o,n)=>new He(t,o,n,e),deps:[ae,ue,Q]},{provide:G,useValue:e==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Ue=(e,t)=>{let o=d(_),n=e;if(e.headers.has("X-A-T")){let r=o.get("TOKEN_A");return r&&(n=e.clone({setHeaders:{Authorization:`Bearer ${r}`}})),t(n)}else if(e.headers.has("X-C-T")){let r=o.get("TOKEN_C");return r&&(n=e.clone({setHeaders:{Authorization:`Bearer ${r}`}})),t(n)}else return t(e)};var Ve={providers:[ge(je),ze(),B(he),ce(le([Ue]))]};var Ke=["sidenav"],Qe=(e,t)=>t.Id,Xe=()=>({"min-width":"30vh"}),We=e=>({height:e});function Ye(e,t){if(e&1&&(s(0,"span"),c(1),v(2,"currency"),a(),s(3,"span",14)(4,"del"),c(5),v(6,"currency"),a()()),e&2){let o=l().$implicit;m(),k("",o.cantidad," x ",b(2,3,o.Precio_rebajado_euros,"EUR")," "),m(4),R(b(6,6,o.Precio_euros,"EUR"))}}function Ze(e,t){if(e&1&&(s(0,"span"),c(1),v(2,"currency"),a()),e&2){let o=l().$implicit;m(),k("",o.cantidad," x ",b(2,2,o.Precio_euros,"EUR"),"")}}function qe(e,t){if(e&1){let o=w();s(0,"mat-card",5),g(1,"img",12),s(2,"mat-card-header")(3,"mat-card-title"),c(4),a(),s(5,"mat-card-subtitle"),M(6,Ye,7,9)(7,Ze,3,5),a(),g(8,"br"),s(9,"button",13),O("click",function(){let r=A(o).$index,i=l(2);return P(i.deleteProduct(r))}),c(10,"Eliminar"),a()()()}if(e&2){let o=t.$implicit,n=l(2);m(),I("src",n.fileEndPoint+o.Imagen[0].Ruta_archivo,x),I("alt",o.Imagen[0].Alt),m(3),R(o.Nombre),m(2),D(6,o.Precio_rebajado_euros?6:7)}}function Je(e,t){if(e&1&&(X(0,qe,11,4,"mat-card",5,Qe),s(2,"p",6)(3,"strong"),c(4,"Subtotal:"),a(),c(5),v(6,"currency"),a(),s(7,"div",7)(8,"button",8)(9,"a",9),c(10,"Ver carrito"),a()(),s(11,"button",10)(12,"a",11),c(13,"Finalizar compra"),a()()()),e&2){let o=l();W(o.productos),m(5),ee(" ",b(6,3,o.subtotal,"EUR"),""),m(4),f("href",o.baseUrl+"/carrito",x),m(3),f("href",o.baseUrl+"/finalizar-compra",x)}}function et(e,t){e&1&&(s(0,"p",15),c(1,"No hay productos en el carrito."),a())}pe(Re,"es");var Be=(()=>{let t=class t{constructor(n,r){this.sidenavService=n,this.carrito=r,this.title="EasyShop",this.fileEndPoint=F.DriveEndpoint,this.baseUrl=F.BaseUrl,this.suscripcion=[]}ngOnInit(){this.sidenavService.setSidenav(this.sidenav),this.suscripcion.push(this.carrito.productos.subscribe(n=>{this.productos=n,this.getCart(),this.getSubtotal()})),this.getSubtotal()}ngOnDestroy(){this.suscripcion.forEach(n=>{n.unsubscribe()})}closeSidenav(){this.sidenavService.close()}deleteProduct(n){this.carrito.deleteProducto(n)}getSubtotal(){this.suscripcion.push(this.carrito.productos.pipe(C(n=>n.reduce((r,i)=>Number(r)+Number(i.Precio_rebajado_euros?i.Precio_rebajado_euros*i.cantidad:i.Precio_euros*i.cantidad),0))).subscribe(n=>{this.subtotal=n}))}getCart(){this.productos=this.carrito.cart||"[]"}};t.\u0275fac=function(r){return new(r||t)(E(xe),E(Pe))},t.\u0275cmp=U({type:t,selectors:[["app-root"]],viewQuery:function(r,i){if(r&1&&Y(Ke,7),r&2){let p;Z(p=q())&&(i.sidenav=p.first)}},standalone:!0,features:[te([{provide:ie,useValue:"es"}]),oe],decls:13,vars:6,consts:[["sidenav",""],[1,"sidenav-cart"],["mode","over","position","end","fixedInViewport","true",3,"ngStyle"],[1,"close","btn",3,"click"],[3,"ngStyle"],["appearance","outlined",1,"producto-card"],[1,"subtotal"],[1,"botones-carrito"],["mat-stroked-button","",1,"btn-carrito-item","ver-carrito"],[1,"txt-carrito",3,"href"],["mat-flat-button","",1,"btn-carrito-item","finalizar-compra"],[1,"txt-finalizar-compra",3,"href"],["mat-card-image","",3,"src","alt"],["mat-flat-button","","color","warn",3,"click"],[1,"precio_tachado"],[1,"text-center","p-3"]],template:function(r,i){if(r&1){let p=w();s(0,"mat-sidenav-container",1)(1,"mat-sidenav"),c(2,"Start"),a(),s(3,"mat-sidenav",2,0)(5,"button",3),O("click",function(){return A(p),P(i.closeSidenav())}),c(6,"X"),a(),g(7,"br")(8,"br"),M(9,Je,14,6)(10,et,2,0),a(),s(11,"mat-sidenav-content",4),g(12,"router-outlet"),a()()}if(r&2){let p=J(4);m(3),f("ngStyle",ne(3,Xe)),m(6),D(9,i.productos&&i.productos.length>0?9:10),m(2),f("ngStyle",re(4,We,p.opened?"100vh":"auto"))}},dependencies:[fe,ye,be,_e,ve,Ie,Ee,we,Oe,De,Me,Ae,Se,me,se,de],styles:[".close[_ngcontent-%COMP%]{float:right;margin:1rem 1rem 0 0;color:var(--white);background-color:var(--darkblue)}.producto-card[_ngcontent-%COMP%]{display:flex;flex-direction:row;max-width:30rem;padding:2rem;margin:2rem 1rem 0}.producto-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40%}.precio_tachado[_ngcontent-%COMP%]{color:var(--orangered)}mat-card-header[_ngcontent-%COMP%]{display:flex;flex-direction:column}.eliminar[_ngcontent-%COMP%]{color:#fff;background-color:var(--orangered)}mat-sidenav-content[_ngcontent-%COMP%]{background-color:var(--white)}.subtotal[_ngcontent-%COMP%]{text-align:center;font-size:var(--lengthMd2);margin:2rem 0}.botones-carrito[_ngcontent-%COMP%]{text-align:center}.botones-carrito[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:1rem}.finalizar-compra[_ngcontent-%COMP%]{background-color:var(--darkblue)!important}a.txt-carrito[_ngcontent-%COMP%]{color:var(--black)!important;text-decoration:none}a.txt-finalizar-compra[_ngcontent-%COMP%]{color:var(--white);text-decoration:none}"]});let e=t;return e})();Ce(Be,Ve).catch(e=>console.error(e));
