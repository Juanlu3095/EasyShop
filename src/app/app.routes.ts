import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/homepage/homepage.component').then((m) => m.HomepageComponent),
    },
    {
        path: 'iniciosesion',
        loadComponent: () => import('./pages/login/login.component').then((m) => m.LoginComponent),
    },
    {
        path: 'mi-cuenta',
        loadComponent: () => import('./pages/micuenta/micuenta.component').then((m) => m.MicuentaComponent),
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/panelcontrol/panelcontrol.component').then((m) => m.PanelcontrolComponent),
            },
            {
                path: 'productos',
                loadComponent: () => import('./pages/productospage/productospage.component').then((m) => m.ProductospageComponent),
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
                path: 'newsletter',
                loadComponent: () => import('./pages/dashboardnewsletter/dashboardnewsletter.component').then((m) => m.DashboardnewsletterComponent),
            },
        ]
    },
    {
        path: 'productos',
        loadComponent: () => import('./pages/listaproductos/listaproductos.component').then((m) => m.ListaproductosComponent),
        children: [
            {
                path: ':categoria',
                loadComponent: () => import('./pages/listaproductos/listaproductos.component').then((m) => m.ListaproductosComponent),
            },
            {
                path: ':categoria/:preciomin/:preciomax',
                loadComponent: () => import('./pages/listaproductos/listaproductos.component').then((m) => m.ListaproductosComponent),
            },
        ]
    },
    {
        path: 'busqueda/:busqueda',
        loadComponent: () => import('./pages/resultadosbusqueda/resultadosbusqueda.component').then((m) => m.ResultadosbusquedaComponent),
    },
    {
        path: 'producto',
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
