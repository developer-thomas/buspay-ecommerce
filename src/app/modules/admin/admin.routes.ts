import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',

    },
    // Vou usar loadChildren, pois sempre há a possibilidade dessa feature/page se desenvolver e aumentar
    {
        path: 'products',
        loadChildren: () => import('./products/products.routes').then((m) => m.routes)
    }
]