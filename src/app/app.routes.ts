import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/homepage/homepage.component').then((m) => m.HomepageComponent),
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
