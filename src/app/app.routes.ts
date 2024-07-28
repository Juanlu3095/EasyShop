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
        path: '**',
        loadComponent: () => import('./pages/error404page/error404page.component').then((m) => m.Error404pageComponent),
    },
];
