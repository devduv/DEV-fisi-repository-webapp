import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './perfil.component';


import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    PerfilRoutingModule
  ]
})
export class PerfilModule { }
