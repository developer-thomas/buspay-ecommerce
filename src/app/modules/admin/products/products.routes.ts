import { Routes } from '@angular/router';
import { productsResolver } from './resolvers/products.resolver';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./containers/product-list-page/product-list-page.component').then((m) => m.ProductListPageComponent),
    },
    {
        path: 'create',
        loadComponent: () => import('./containers/product-create/product-create.component').then((m) => m.ProductCreateComponent),
    },
    {
        path: 'edit/:id',
        loadComponent: () => import('./containers/product-edit/product-edit.component').then((m) => m.ProductEditComponent),
        resolve: {
            product: productsResolver
        }
    }
]