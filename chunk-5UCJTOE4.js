import{a as E}from"./chunk-WIU5G6ZA.js";import{a as _,b as C}from"./chunk-SF6XMI4F.js";import"./chunk-UIFHNKPJ.js";import"./chunk-S3J4NSG4.js";import{a as v}from"./chunk-PE3AIABI.js";import"./chunk-OB62TPC4.js";import"./chunk-AKCFMZTD.js";import"./chunk-33HZCSPU.js";import"./chunk-V6CHNUWL.js";import"./chunk-UKCT2NNU.js";import"./chunk-AESYL7IM.js";import"./chunk-I7KWM6MY.js";import{i as S}from"./chunk-X2X7HICG.js";import{Ab as n,Bb as e,Cb as p,Lb as h,Vb as t,Wb as b,Xb as s,Ya as a,Za as d,cc as u,la as f,ob as g,vb as x}from"./chunk-BEZRA2BD.js";function I(i,o){if(i&1&&(n(0,"div",1)(1,"p",2),t(2),e(),n(3,"p")(4,"b"),t(5,"Referencia del pedido"),e(),t(6),e(),n(7,"p")(8,"b"),t(9,"Nombre de la cuenta"),e(),t(10),e(),n(11,"p")(12,"b"),t(13,"Banco"),e(),t(14),e(),n(15,"p")(16,"b"),t(17,"IBAN"),e(),t(18),e(),n(19,"p")(20,"b"),t(21,"BIC/SWIFT"),e(),t(22),e()()),i&2){let r=h();a(2),b(r.metodopago.descripcion_cliente),a(4),s(": #",r.referencia,""),a(4),s(": ",r.beneficiario,""),a(4),s(": ",r.banco,""),a(4),s(": ",r.iban,""),a(4),s(": ",r.bic_swift,"")}}function M(i,o){i&1&&(n(0,"p"),t(1,"Disculpa las molestias. En estos momentos no disponemos de los datos para proceder al pago."),e())}var D=(()=>{let o=class o{constructor(c,m,l){this.title=c,this.metodopagoService=m,this._matsnackbar=l,this.title.setTitle("Detalle del pago | Easyshop")}ngOnInit(){this.getMetodoPago()}getMetodoPago(){this.metodopagoService.getTransferencia().subscribe({next:c=>{this.metodopago=c.data,this.beneficiario=JSON.parse(this.metodopago.configuracion.toString()).nombre,this.banco=JSON.parse(this.metodopago.configuracion.toString()).nombre_banco,this.iban=JSON.parse(this.metodopago.configuracion.toString()).iban,this.bic_swift=JSON.parse(this.metodopago.configuracion.toString()).bic_swift,this.referencia=Number(localStorage.getItem("referencia_pedido"))||null},error:c=>{this._matsnackbar.open("No se han obtenidos los datos necesarios.","Aceptar",{duration:3e3})}})}};o.\u0275fac=function(m){return new(m||o)(d(S),d(E),d(v))},o.\u0275cmp=f({type:o,selectors:[["app-detalletransferencia"]],standalone:!0,features:[u],decls:8,vars:1,consts:[[1,"info-transferencia"],[1,"detalle-container"],[1,"instrucciones"]],template:function(m,l){m&1&&(p(0,"app-header"),n(1,"main")(2,"section",0)(3,"h1"),t(4,"Informaci\xF3n del pago"),e(),g(5,I,23,6,"div",1)(6,M,2,0),e()(),p(7,"app-footer")),m&2&&(a(5),x(5,l.metodopago?5:6))},dependencies:[_,C],styles:[".info-transferencia[_ngcontent-%COMP%]{margin:5rem 10rem}h1[_ngcontent-%COMP%]{text-align:center;font-weight:700}.instrucciones[_ngcontent-%COMP%]{text-align:center;margin-bottom:2rem}@media only screen and (max-width: 767px){.info-transferencia[_ngcontent-%COMP%]{margin:2rem}}@media only screen and (min-width: 768px) and (max-width: 1023px){.info-transferencia[_ngcontent-%COMP%]{margin:5rem}}@media only screen and (min-width: 1024px) and (max-width: 1350px){.info-transferencia[_ngcontent-%COMP%]{margin:5rem}}"]});let i=o;return i})();export{D as DetalletransferenciaComponent};
