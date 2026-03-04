import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login';
import { LayoutComponent } from './pages/layout/layout';
import { DashboardComponent } from './pages/dashboard/dashboard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent }
    ]
  }
];
