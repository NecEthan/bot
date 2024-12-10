import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.routes').then(mod => mod.DASHBOARD_ROUTES) },
];
