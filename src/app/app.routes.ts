import { Routes } from '@angular/router';
import { NotFoundComponent } from './modules/shared/components/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full',
    },
    {
        path: 'admin',
        loadChildren: () => import('./modules/admin/admin.routes').then((m) => m.routes)
    },
    { path: '**', component: NotFoundComponent, data: { showButton: true } } 
];
