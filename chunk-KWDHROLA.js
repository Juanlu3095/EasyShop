import{a as ie}from"./chunk-UMW2G7QB.js";import{a as X,b as Y,d as Z,e as ee,g as te,h as ne}from"./chunk-7VRA7NH3.js";import{a as Q,b as W}from"./chunk-GZGCU2PU.js";import{a as q}from"./chunk-YWZC5PKM.js";import{b as K}from"./chunk-S3J4NSG4.js";import"./chunk-PE3AIABI.js";import{b as N}from"./chunk-TDTAES6E.js";import"./chunk-AKCFMZTD.js";import{b as j,d as x,f as D,g as R,h as L,j as V,m as $,n as A,s as G,u as U}from"./chunk-33HZCSPU.js";import{a as F,d as z,e as T}from"./chunk-I4WXUBEO.js";import{o as B,q as J}from"./chunk-UKCT2NNU.js";import"./chunk-AESYL7IM.js";import{a as H}from"./chunk-4OTIWHWN.js";import"./chunk-I7KWM6MY.js";import"./chunk-B7NLDW3E.js";import{Ab as n,Bb as i,Cb as c,Gb as b,Jb as w,Lb as l,Ob as _,Pb as u,Va as f,Vb as r,Wb as S,Xb as P,Ya as m,Za as C,cc as k,la as I,ob as d,qb as y,ua as O,va as h,vb as g,yb as v,zb as M}from"./chunk-BEZRA2BD.js";var E=(e,o)=>o.Id;function ae(e,o){if(e&1&&c(0,"img",39),e&2){let t=l().$implicit,a=l(2);_("src",a.fileEndpoint+t.Imagen[0].Ruta_archivo,f),_("alt",t.Imagen[0].Alt),u("routerLink","/producto/",t.Id,"")}}function re(e,o){if(e&1&&c(0,"img",43),e&2){let t=l().$implicit;u("routerLink","/producto/",t.Id,"")}}function ce(e,o){if(e&1&&(n(0,"mat-card-subtitle")(1,"span",44)(2,"del"),r(3),i(),r(4,"\u20AC"),i(),c(5,"br"),r(6),i()),e&2){let t=l().$implicit;m(3),S(t.Precio_euros),m(3),P(" ",t.Precio_rebajado_euros,"\u20AC ")}}function me(e,o){if(e&1&&(n(0,"mat-card-subtitle"),r(1),i()),e&2){let t=l().$implicit;m(),P(" ",t.Precio_euros,"\u20AC")}}function le(e,o){if(e&1){let t=b();n(0,"mat-card",38),d(1,ae,1,4,"img",39)(2,re,1,2),n(3,"mat-card-header")(4,"mat-card-title")(5,"a",40),r(6),i()(),d(7,ce,7,2,"mat-card-subtitle")(8,me,2,1),i(),n(9,"button",41),w("click",function(){let s=O(t).$implicit,p=l(2);return h(p.addtocart(s))}),c(10,"mat-icon",42),n(11,"span"),r(12,"A\xF1adir"),i()()()}if(e&2){let t=o.$implicit;m(),g(1,t.Marca.length>0?1:2),m(4),u("routerLink","/producto/",t.Id,""),m(),P(" ",t.Nombre,""),m(),g(7,t.Precio_rebajado_euros?7:8)}}function se(e,o){if(e&1&&v(0,le,13,5,"mat-card",38,E),e&2){let t=l();M(t.novedades)}}function de(e,o){e&1&&(n(0,"h3"),r(1,"No hay novedades a mostrar."),i())}function ge(e,o){if(e&1&&c(0,"img",45),e&2){let t=l().$implicit,a=l(2);_("src",a.fileEndpoint+t.Imagen[0].Ruta_archivo,f),_("alt",t.Imagen[0].Alt)}}function pe(e,o){e&1&&c(0,"img",46)}function _e(e,o){if(e&1&&(n(0,"mat-card",29),d(1,ge,1,2,"img",45)(2,pe,1,0),n(3,"mat-card-header")(4,"mat-card-title")(5,"a",40),r(6),i()()()()),e&2){let t=o.$implicit;m(),g(1,t.Imagen.length>0?1:2),m(4),u("routerLink","/productos/categoria/",t.Slug,""),m(),S(t.Nombre)}}function ue(e,o){if(e&1&&v(0,_e,7,4,"mat-card",29,E),e&2){let t=l();M(t.categorias)}}function Ce(e,o){e&1&&(n(0,"h3"),r(1,"No hay categor\xEDas a mostrar."),i())}function fe(e,o){if(e&1&&c(0,"img",48),e&2){let t=l().$implicit,a=l(2);_("src",a.fileEndpoint+t.Imagen[0].Ruta_archivo,f),_("alt",t.Imagen[0].Alt),u("routerLink","/productos/marca/",t.Id,"")}}function ve(e,o){e&1&&c(0,"img",46)}function Me(e,o){if(e&1&&(n(0,"mat-card",47),d(1,fe,1,4,"img",48)(2,ve,1,0),i()),e&2){let t=o.$implicit;m(),g(1,t.Imagen.length>0?1:2)}}function Pe(e,o){if(e&1&&v(0,Me,3,1,"mat-card",47,E),e&2){let t=l();M(t.marcas)}}function xe(e,o){e&1&&(n(0,"h3"),r(1,"No hay marcas a mostrar."),i())}function Oe(e,o){e&1&&(n(0,"p",37),r(1,"\u{1F64F} Gracias por suscribirse a nuestra newsletter. Recibir\xE1 un email confirmando su inscripci\xF3n a nuestra newsletter."),i())}function he(e,o){e&1&&(n(0,"p",54),r(1,"Enviando..."),i())}function be(e,o){if(e&1){let t=b();n(0,"form",49),w("ngSubmit",function(){O(t);let s=l();return h(s.suscripcionNews())}),n(1,"label",50),r(2,"Correo electr\xF3nico: *"),i(),n(3,"div",51),c(4,"input",52),n(5,"button",53),r(6,"Suscribirme"),i()(),d(7,he,2,0,"p",54),i()}if(e&2){let t=l();y("formGroup",t.newsletterForm),m(7),g(7,t.enviando?7:-1)}}var $e=(()=>{let o=class o{constructor(a,s,p,oe){this.router=a,this.newsletterService=s,this.productService=p,this.carrito=oe,this.enviando=!1,this.emailguardado=!1,this.fileEndpoint=H.DriveEndpoint,this.newsletterForm=new L({email:new V("",x.compose([x.email,x.required]))})}suscripcionNews(){this.newsletterForm.valid&&(this.enviando=!0,console.log(this.newsletterForm),this.newsletterService.postNewsletter(this.newsletterForm.value).subscribe({next:a=>{this.emailguardado=!0},error:a=>{console.error("Se ha producido un error",a)}}))}ngOnInit(){this.router.events.subscribe(a=>{a instanceof F&&window.scrollTo(0,0)}),this.getNovedades(),this.getBrands(),this.getProductcategories()}getNovedades(){this.productService.getProductosUltimasNovedades().subscribe({next:a=>{this.novedades=a.data},error:a=>{console.error(a)}})}getBrands(){this.productService.getMarcas().subscribe({next:a=>{this.marcas=a},error:a=>{console.error(a)}})}getProductcategories(){this.productService.getCategorias().subscribe({next:a=>{this.categorias=a.data},error:a=>{console.error(a)}})}addtocart(a){this.carrito.addNewProducto(a,1)}};o.\u0275fac=function(s){return new(s||o)(C(z),C(ie),C(q),C(K))},o.\u0275cmp=I({type:o,selectors:[["app-homepage"]],standalone:!0,features:[k],decls:68,vars:4,consts:[[1,"home-container"],[1,"carousel-container"],["id","carouselExampleSlidesOnly","data-bs-ride","carousel","data-bs-interval","3000",1,"carousel","slide"],[1,"carousel-inner"],[1,"carousel-item","active"],["src","assets/img/gaming.png","alt","setup gaming",1,"d-block","w-100"],[1,"carousel-item"],["src","assets/img/doblepantalla.png","alt","alternativa setup gaming",1,"d-block","w-100"],[1,"ofertas","espacioResponsive"],[1,"oferta-item"],["routerLink","/productos"],["src","assets/img/ofertas.png","alt","ofertas",1,"d-block","w-100"],["routerLink","/productos/categoria/ordenadores"],["src","assets/img/retro.png","alt","pc retro",1,"d-block","w-100"],[1,"beneficios","espacioResponsive"],[1,"beneficio-item"],["aria-label","Icon 24/7","aria-hidden","false","fontIcon","schedule",1,"beneficio-icon"],[1,"beneficio-description"],["aria-label","Icon order","aria-hidden","false","fontIcon","inbox",1,"beneficio-icon"],["aria-label","Icon 24/7","aria-hidden","false","fontIcon","savings",1,"beneficio-icon"],["aria-label","Icon 24/7","aria-hidden","false","fontIcon","sell",1,"beneficio-icon"],[1,"superventas","espacioResponsive"],[1,"superventas-title"],[1,"superventas-list"],[1,"btn-more-superventas"],["mat-flat-button","","routerLink","/productos",1,"more-superventas"],[1,"categorias","espacioResponsive"],[1,"categorias-title"],[1,"categorias-list"],[1,"categoria-card"],["mat-card-image","","src","assets/img/todo_categorias.jpg","alt","Todas las categor\xEDas",1,"d-block","w-60"],[1,"marcas","espacioResponsive"],[1,"marcas-title"],[1,"marcas-list"],[1,"newsletter","espacioResponsive"],[1,"newsletter-title"],[1,"newsletter-description"],[1,"newsletterConfirm"],["appearance","outlined",1,"superventas-card"],["mat-card-image","",3,"src","alt","routerLink"],[3,"routerLink"],[1,"btn-addtocart",3,"click"],["aria-label","Icon addtocart","aria-hidden","false","fontIcon","add_shopping_cart",1,"addtocart-icon"],["mat-card-image","","src","assets/img/no_category.png","alt","sin imagen",3,"routerLink"],[1,"precio_tachado"],["mat-card-image","",3,"src","alt"],["mat-card-image","","src","assets/img/no_category.png","alt","sin imagen"],[1,"marca-card"],["mat-card-image","","loading","lazy",3,"src","alt","routerLink"],["ngNativeValidate","",1,"newsletterForm",3,"ngSubmit","formGroup"],["for","email",1,"form-label"],[1,"inputs"],["type","email","id","email","aria-describedby","emailHelp","placeholder","Indique su correo electr\xF3nico...","formControlName","email","required","",1,"form-control"],["type","submit",1,"submit"],[1,"form-sending"]],template:function(s,p){s&1&&(c(0,"app-header"),n(1,"main",0)(2,"section",1)(3,"div",2)(4,"div",3)(5,"div",4),c(6,"img",5),i(),n(7,"div",6),c(8,"img",7),i()()()(),n(9,"section",8)(10,"div",9)(11,"a",10),c(12,"img",11),i()(),n(13,"div",9)(14,"a",12),c(15,"img",13),i()()(),n(16,"section",14)(17,"div",15),c(18,"mat-icon",16),n(19,"span",17),r(20,"Abierto 24/7"),i()(),n(21,"div",15),c(22,"mat-icon",18),n(23,"span",17),r(24,"Env\xEDo en 24-48h"),i()(),n(25,"div",15),c(26,"mat-icon",19),n(27,"span",17),r(28,"El mejor precio garantizado"),i()(),n(29,"div",15),c(30,"mat-icon",20),n(31,"span",17),r(32,"Descuentos por temporada"),i()()(),n(33,"section",21)(34,"h2",22),r(35,"\xDAltimas novedades"),i(),n(36,"div",23),d(37,se,2,0)(38,de,2,0),i(),n(39,"div",24)(40,"button",25),r(41,"Ver m\xE1s"),i()()(),n(42,"section",26)(43,"h2",27),r(44,"Categor\xEDas"),i(),n(45,"div",28)(46,"mat-card",29),c(47,"img",30),n(48,"mat-card-header")(49,"mat-card-title")(50,"a",10),r(51,"Ver todo"),i()()()(),d(52,ue,2,0)(53,Ce,2,0),i()(),n(54,"section",31)(55,"h2",32),r(56,"Marcas"),i(),n(57,"div",33),d(58,Pe,2,0)(59,xe,2,0),i()(),n(60,"section",34)(61,"h2",35),r(62,"Newsletter"),i(),n(63,"p",36),r(64,"Suscr\xEDbete a nuestra newsletter para estar al tanto de nuestras novedades."),i(),d(65,Oe,2,0,"p",37)(66,be,8,2),i()(),c(67,"app-footer")),s&2&&(m(37),g(37,p.novedades?37:38),m(15),g(52,p.categorias?52:53),m(6),g(58,p.marcas?58:59),m(7),g(65,p.emailguardado?65:66))},dependencies:[Q,W,N,ne,X,ee,te,Z,Y,J,B,U,j,D,R,G,$,A,T],styles:['@charset "UTF-8";.home-container[_ngcontent-%COMP%]{background-color:var(--lightgray);padding-bottom:5rem}mat-icon[_ngcontent-%COMP%]{overflow:visible}.superventas-card[_ngcontent-%COMP%]{cursor:pointer}mat-card-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#000}.precio_tachado[_ngcontent-%COMP%]{color:var(--orangered)}.marca-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer}@media screen and (min-width: 1367px){.carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:35rem;object-fit:cover}.ofertas[_ngcontent-%COMP%]{margin:3rem;gap:2.5rem}.beneficios[_ngcontent-%COMP%]{margin:3rem;padding:3rem;gap:3rem}.beneficio-icon[_ngcontent-%COMP%]{width:auto;font-size:4rem}.beneficio-description[_ngcontent-%COMP%]{font-size:var(--lengthMd2);margin-top:1.5rem}.beneficio-item[_ngcontent-%COMP%]{display:flex;gap:1rem}.superventas[_ngcontent-%COMP%], .categorias[_ngcontent-%COMP%], .marcas[_ngcontent-%COMP%]{margin:3rem;padding:2rem}.superventas-title[_ngcontent-%COMP%], .categorias-title[_ngcontent-%COMP%], .marcas-title[_ngcontent-%COMP%]{font-size:var(--lengthMd3);margin-bottom:3rem}.superventas-card[_ngcontent-%COMP%]{width:18%}.superventas-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%], .categoria-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:var(--lengthMd2);margin:0 0 .5rem}.superventas-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{font-size:var(--lengthMd1)}.categoria-card[_ngcontent-%COMP%]{width:20%}.marcas-list[_ngcontent-%COMP%]{flex-direction:row;gap:1.5rem}.newsletterForm[_ngcontent-%COMP%]{padding:1rem 15rem}.newsletter-title[_ngcontent-%COMP%]{font-size:var(--lengthMd3)}}@media screen and (min-width: 768px) and (max-width: 1366px){.carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:20rem;object-fit:cover}.ofertas[_ngcontent-%COMP%], .beneficios[_ngcontent-%COMP%]{margin:2rem;gap:2rem}.beneficios[_ngcontent-%COMP%]{gap:2rem}.beneficio-icon[_ngcontent-%COMP%]{width:auto;font-size:2rem}.beneficio-description[_ngcontent-%COMP%]{font-size:var(--lengthSm3);margin-top:1.5rem}.beneficio-item[_ngcontent-%COMP%]{justify-content:center;align-items:center;width:25%;padding:1rem;gap:.5rem}.superventas[_ngcontent-%COMP%], .categorias[_ngcontent-%COMP%], .marcas[_ngcontent-%COMP%]{margin:2rem;padding:2rem}.superventas-title[_ngcontent-%COMP%], .categorias-title[_ngcontent-%COMP%], .marcas-title[_ngcontent-%COMP%]{font-size:var(--lengthMd2);margin-bottom:2rem}.superventas-card[_ngcontent-%COMP%]{width:30%}.superventas-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%], .categoria-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:var(--lengthMd1);margin:0}.superventas-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{font-size:var(--lengthSm3)}.btn-addtocart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:var(--lengthSm3)}.btn-addtocart[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1.25rem}.btn-more-superventas[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:var(--lengthSm3)}.marcas-list[_ngcontent-%COMP%]{gap:1rem;flex-direction:row}.categoria-card[_ngcontent-%COMP%]{width:20%}.newsletterForm[_ngcontent-%COMP%]{padding:1rem 3rem}.newsletter-title[_ngcontent-%COMP%]{font-size:var(--lengthMd3)}}@media screen and (max-width: 767px){.beneficios[_ngcontent-%COMP%]{flex-wrap:wrap;gap:1rem}.beneficio-item[_ngcontent-%COMP%]{width:100%;justify-content:center}.superventas-card[_ngcontent-%COMP%]{width:80%}.superventas-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.superventas[_ngcontent-%COMP%], .categorias[_ngcontent-%COMP%], .marcas[_ngcontent-%COMP%]{padding:1rem}.superventas-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:var(--lengthMd1)}.categoria-card[_ngcontent-%COMP%]{width:35%}.categorias[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:var(--lengthMd1)}.marcas-list[_ngcontent-%COMP%]{gap:1rem}.marcas-list[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{width:80%;text-align:center}.newsletter-title[_ngcontent-%COMP%]{font-size:var(--lengthMd2)}.form-control[_ngcontent-%COMP%]{width:65%;font-size:var(--lengthSm3)}.inputs[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%]{width:35%}.submit[_ngcontent-%COMP%]{font-size:var(--lengthSm3)}}.ofertas[_ngcontent-%COMP%]{display:flex;flex-direction:row}.oferta-item[_ngcontent-%COMP%]{width:50%}.beneficios[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;align-items:baseline;background-color:#fff}.beneficio-item[_ngcontent-%COMP%]{display:flex}.beneficio-description[_ngcontent-%COMP%]{text-align:right}.superventas[_ngcontent-%COMP%], .categorias[_ngcontent-%COMP%], .marcas[_ngcontent-%COMP%]{background-color:#fff}.superventas-title[_ngcontent-%COMP%], .categorias-title[_ngcontent-%COMP%], .marcas-title[_ngcontent-%COMP%]{text-align:center;font-weight:700}.superventas-list[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;gap:1.5rem}.superventas-card[_ngcontent-%COMP%]{text-align:center}.superventas-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%], .categoria-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{justify-content:center}.superventas-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{font-weight:400;color:var(--darkblue)}.btn-addtocart[_ngcontent-%COMP%]{text-align:center;display:flex;align-items:center;justify-content:center;gap:.5rem;background-color:var(--darkblue);color:var(--white);border-radius:.5rem;padding:.5rem 0;margin:1rem 3rem;border:none}.btn-more-superventas[_ngcontent-%COMP%]{text-align:center;margin-top:3rem}.more-superventas[_ngcontent-%COMP%]{background-color:var(--darkblue)!important;color:var(--white)!important;padding:0 5rem}.categorias-list[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;gap:2rem}.categoria-card[_ngcontent-%COMP%]{text-align:center;box-shadow:none;border-radius:0}.categoria-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%}.categoria-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--darkblue);text-decoration:none}.marcas-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}.marca-card[_ngcontent-%COMP%]{width:18%}.newsletter[_ngcontent-%COMP%]{background-color:var(--darkblue);padding:3rem 2rem}.newsletter-title[_ngcontent-%COMP%]{color:var(--white);text-align:center;font-weight:700}.newsletter-description[_ngcontent-%COMP%]{color:var(--white);text-align:center;font-size:var(--lengthMd1);font-weight:400;margin-bottom:1rem}.newsletterConfirm[_ngcontent-%COMP%]{text-align:center;color:var(--white);font-size:var(--lengthMd1)}.newsletterForm[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]{font-size:var(--lengthMd1);color:var(--white);margin-bottom:1.5rem}.inputs[_ngcontent-%COMP%]{display:flex;flex-direction:row;vertical-align:baseline}.inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-radius:2rem 0 0 2rem;border:none}.inputs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:20%;border:solid var(--black);color:var(--white);background-color:var(--black);border-radius:0 2rem 2rem 0;box-shadow:1rem}.form-sending[_ngcontent-%COMP%]{color:var(--orangered);text-align:center;position:absolute;left:50%;padding-top:1rem}']});let e=o;return e})();export{$e as HomepageComponent};
