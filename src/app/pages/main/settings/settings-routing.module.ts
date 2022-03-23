import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      { path: '', redirectTo: 'perfil', pathMatch: 'full' },
      {
        path: 'perfil',
        loadChildren: () =>
          import('./pages/perfil/perfil.module').then((m) => m.PerfilModule),
      },
      {
        path:'edit-perfil',
        loadChildren: () =>
        import('./pages/edit-perfil/edit-perfil.module').then((m) => m.EditPerfilModule),
      }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
