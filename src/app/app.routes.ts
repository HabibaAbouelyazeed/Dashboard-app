import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'prayers', pathMatch: 'full' },
  {
    path: 'prayers',
    loadComponent: () =>
      import('./pages/prayers/prayers.component').then(
        (c) => c.PrayersComponent
      ),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
  },
  {
    path: 'tasks',
    loadComponent: () =>
      import('./pages/tasks/tasks.component').then((c) => c.TasksComponent),
  },
  {
    path: 'reminders',
    loadComponent: () =>
      import('./pages/reminders/reminders.component').then(
        (c) => c.RemindersComponent
      ),
  },
  {
    path: 'my-pocket',
    loadComponent: () =>
      import('./pages/my-pocket/my-pocket.component').then(
        (c) => c.MyPocketComponent
      ),
  },
  {
    path: 'categories',
    loadComponent: () =>
      import('./pages/categories/categories.component').then(
        (c) => c.CategoriesComponent
      ),
  },
  {
    path: 'archive',
    loadComponent: () =>
      import('./pages/archive/archive.component').then(
        (c) => c.ArchiveComponent
      ),
  },
];
