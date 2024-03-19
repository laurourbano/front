import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/atividades' },
  { path: 'atividades', loadChildren: () => import('./pages/atividades/atividades.routes').then(m => m.ATIVIDADES_ROUTES) }
];
