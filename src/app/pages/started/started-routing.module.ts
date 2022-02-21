import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartedPage } from './started.page';

const routes: Routes = [
  {
    path: '',
    component: StartedPage,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./welcome/welcome.module').then((m) => m.WelcomePageModule),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartedPageRoutingModule {}
