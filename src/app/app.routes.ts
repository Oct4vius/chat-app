import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./auth/layout/auth-layout/auth-layout.component').then(c => c.AuthLayoutComponent),
    children: [
      { path: 'login', loadComponent: () => import('./auth/pages/login/login.component').then(c => c.LoginComponent) },
      { path: 'register', loadComponent: () => import('./auth/pages/register/register.component').then(c => c.RegisterComponent) },
      { 
        path: '**',
        redirectTo: 'login'
      }
    ]
  },
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    children: [
      { path: '', loadComponent: () => import('./home/components/default/default.component').then(c => c.DefaultComponent) },
      { path: 'chat/:id', loadComponent: () => import('./home/components/chat/chat.component').then(c => c.ChatComponent) }
    ]
  },
  {
    path: '**',
    redirectTo: 'auth',
  }
];
