import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./containers/product-list-page/product-list-page.component').then((m) => m.ProductListPageComponent)
    },
    {
        path: 'create',
        loadComponent: () => import('./containers/product-create-edit/product-create-edit.component').then((m) => m.ProductCreateEditComponent)
    },
    {
        path: 'edit/:id',
        loadComponent: () => import('./containers/product-create-edit/product-create-edit.component').then((m) => m.ProductCreateEditComponent)
    }
]