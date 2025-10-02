import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./containers/product-list-page/product-list-page.component').then((m) => m.ProductListPageComponent),
        data: {
            title: 'Produtos',
            description: 'Listagem de produtos'
        }
    },
    {
        path: 'create',
        loadComponent: () => import('./containers/product-create/product-create.component').then((m) => m.ProductCreateComponent),
        data: {
            title: 'Produtos',
            description: 'Criar um novo produto'
        }
    },
    {
        path: 'edit/:id',
        loadComponent: () => import('./containers/product-edit/product-edit.component').then((m) => m.ProductEditComponent)
        
    }
]