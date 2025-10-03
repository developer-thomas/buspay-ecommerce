import { Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: 'products',
                loadChildren: () => import('./products/products.routes').then((m) => m.routes)
            }
        ]
    },
    
   
]