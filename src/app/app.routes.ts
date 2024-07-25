import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/homepage/homepage.component').then((m) => m.HomepageComponent),
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
];
