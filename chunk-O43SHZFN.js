import{a as b}from"./chunk-3VMMU6LW.js";import{b as S}from"./chunk-WR2FAY7X.js";import{i as E}from"./chunk-XXO6A46Z.js";import{Ab as t,Bb as e,Cb as u,Lb as v,Vb as i,Wb as l,Ya as s,Yb as x,Za as d,cc as f,la as p,ob as j,vb as h}from"./chunk-BEZRA2BD.js";function M(a,o){if(a&1&&(t(0,"h2"),i(1,"Nombre y apellidos"),e(),t(2,"p"),i(3),e(),t(4,"h2"),i(5,"Correo electr\xF3nico"),e(),t(6,"p"),i(7),e(),t(8,"h2"),i(9,"Fecha de env\xEDo"),e(),t(10,"p"),i(11),e(),t(12,"h2"),i(13,"Asunto"),e(),t(14,"p"),i(15),e(),t(16,"h2"),i(17,"Mensaje"),e(),t(18,"p"),i(19),e()),a&2){let m=v();s(3),x("",m.mensaje.Nombre," ",m.mensaje.Apellidos,""),s(4),l(m.mensaje.Email),s(4),l(m.mensaje.Fecha),s(4),l(m.mensaje.Asunto),s(4),l(m.mensaje.Mensaje)}}function g(a,o){a&1&&(t(0,"p"),i(1,"Cargando los datos del mensaje..."),e())}var A=(()=>{let o=class o{constructor(r,n,c){this.activatedRoute=r,this.mensajeService=n,this.title=c}ngOnInit(){this.getMensaje()}getMensaje(){let r=Number(this.activatedRoute.snapshot.paramMap.get("idmensaje"));this.mensajeService.getMensaje(r).subscribe({next:n=>{this.mensaje=n,this.title.setTitle(`${this.mensaje.Asunto} - Mensaje < EasyShop`)},error:n=>{console.error(n)}})}};o.\u0275fac=function(n){return new(n||o)(d(S),d(b),d(E))},o.\u0275cmp=p({type:o,selectors:[["app-dashboardmensajeindividual"]],standalone:!0,features:[f],decls:11,vars:1,consts:[[1,"detalles-oferta"],["href","dashboard/mensajes"]],template:function(n,c){n&1&&(t(0,"main")(1,"section")(2,"h1"),i(3,"Detalles del mensaje"),e(),t(4,"div",0)(5,"a",1),i(6,"\u2190 Volver a la p\xE1gina anterior"),e(),u(7,"br")(8,"br"),j(9,M,20,6)(10,g,2,0),e()()()),n&2&&(s(9),h(9,c.mensaje?9:10))}});let a=o;return a})();export{A as DashboardmensajeindividualComponent};
