import { Routes } from '@angular/router';
import { AuthadminGuard, AuthadminGuardReverse } from './guards/auth-admin.guard';
import { AuthaclientGuard, AuthclientGuardReverse } from './guards/auth-client.guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/homepage/homepage.component').then((m) => m.HomepageComponent),
    },
    {
        path: 'iniciosesion',
        loadComponent: () => import('./pages/login/login.component').then((m) => m.LoginComponent),
        canActivate: [AuthadminGuardReverse]
    },
    {
        path: 'acceso',
        loadComponent: () => import('./pages/accesocliente/accesocliente.component').then((m) => m.AccesoclienteComponent),
        canActivate: [AuthclientGuardReverse]
    },
    {
        path: 'emailverificado',
        loadComponent: () => import('./pages/emailverificado/emailverificado.component').then((m) => m.EmailverificadoComponent),
    },
    {
        path: 'mi-cuenta',
        loadComponent: () => import('./pages/micuenta/micuenta.component').then((m) => m.MicuentaComponent),
        canActivate: [AuthaclientGuard]
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent),
        canActivateChild: [AuthadminGuard],
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/panelcontrol/panelcontrol.component').then((m) => m.PanelcontrolComponent),
            },
            {
                path: 'media',
                loadComponent: () => import('./pages/dashboardmedia/dashboardmedia.component').then((m) => m.DashboardmediaComponent),
            },
            {
                path: 'productos',
                loadComponent: () => import('./pages/dashboardproducts/dashboardproducts.component').then((m) => m.DashboardproductsComponent),
            },
            {
                path: 'productos/:idproducto',
                loadComponent: () => import('./pages/dashboardproductseditar/dashboardproductseditar.component').then((m) => m.DashboardproductseditarComponent),
            },
            {
                path: 'nuevoproducto',
                loadComponent: () => import('./pages/dashboardproductsnuevo/dashboardproductsnuevo.component').then((m) => m.DashboardproductsnuevoComponent),
            },
            {
                path: 'categoriasproducto',
                loadComponent: () => import('./pages/dashboardcategoriasproducto/dashboardcategoriasproducto.component').then((m) => m.DashboardcategoriasproductoComponent),
            },
            {
                path: 'categoriasproducto/:idcategoria',
                loadComponent: () => import('./pages/dashboardeditarcategoriaproducto/dashboardeditarcategoriaproducto.component').then((m) => m.DashboardeditarcategoriaproductoComponent),
            },
            {
                path: 'marcas',
                loadComponent: () => import('./pages/dashboardmarcas/dashboardmarcas.component').then((m) => m.DashboardmarcasComponent),
            },
            {
                path: 'marcas/:idmarca',
                loadComponent: () => import('./pages/dashboardeditarmarca/dashboardeditarmarca.component').then((m) => m.DashboardeditarmarcaComponent),
            },
            {
                path: 'empleos',
                loadComponent: () => import('./pages/dashboardempleos/dashboardempleos.component').then((m) => m.DashboardempleosComponent),
            },
            {
                path: 'empleos/:idempleo',
                loadComponent: () => import('./pages/dashboardempleocvs/dashboardempleocvs.component').then((m) => m.DashboardempleocvsComponent),
            },
            {
                path: 'categoriasempleo',
                loadComponent: () => import('./pages/dashboardcategoriasempleo/dashboardcategoriasempleo.component').then((m) => m.DashboardcategoriasempleoComponent),
            },
            {
                path: 'mensajes',
                loadComponent: () => import('./pages/dashboardmensajes/dashboardmensajes.component').then((m) => m.DashboardmensajesComponent),
            },
            {
                path: 'mensajes/:idmensaje',
                loadComponent: () => import('./pages/dashboardmensajeindividual/dashboardmensajeindividual.component').then((m) => m.DashboardmensajeindividualComponent),
            },
            {
                path: 'newsletter',
                loadComponent: () => import('./pages/dashboardnewsletter/dashboardnewsletter.component').then((m) => m.DashboardnewsletterComponent),
            },
            {
                path: 'usuarios',
                loadComponent: () => import('./pages/dashboardusuarios/dashboardusuarios.component').then((m) => m.DashboardusuariosComponent),
            },
        ]
    },
    {
        path: 'productos',
        loadComponent: () => import('./pages/listaproductos/listaproductos.component').then((m) => m.ListaproductosComponent),
        children: [
            {
                path: 'categoria/:categoria',
                loadComponent: () => import('./pages/listaproductos/listaproductos.component').then((m) => m.ListaproductosComponent),
            },
            {
                path: 'marca/:marca',
                loadComponent: () => import('./pages/listaproductos/listaproductos.component').then((m) => m.ListaproductosComponent),
            },
            
        ]
    },
    {
        path: 'busqueda/:busqueda',
        loadComponent: () => import('./pages/resultadosbusqueda/resultadosbusqueda.component').then((m) => m.ResultadosbusquedaComponent),
    },
    {
        path: 'producto/:idProducto',
        loadComponent: () => import('./pages/fichaproducto/fichaproducto.component').then((m) => m.FichaproductoComponent),
    },
    {
        path: 'carrito',
        loadComponent: () => import('./pages/carritopage/carritopage.component').then((m) => m.CarritopageComponent),
    },
    {
        path: 'finalizar-compra',
        loadComponent: () => import('./pages/checkoutpage/checkoutpage.component').then((m) => m.CheckoutpageComponent),
    },
    {
        path: 'nosotros',
        loadComponent: () => import('./pages/nosotros/nosotros.component').then((m) => m.NosotrosComponent),
    },
    {
        path: 'contacto',
        loadComponent: () => import('./pages/contacto/contacto.component').then((m) => m.ContactoComponent),
    },
    {
        path: 'empleos',
        loadComponent: () => import('./pages/canalempleo/canalempleo.component').then((m) => m.CanalempleoComponent),
    },
    {
        path: 'empleos/:idoferta',
        loadComponent: () => import('./pages/ofertaempleo/ofertaempleo.component').then((m) => m.OfertaempleoComponent),
    },
    {
        path: '**',
        loadComponent: () => import('./pages/error404page/error404page.component').then((m) => m.Error404pageComponent),
    },
];
