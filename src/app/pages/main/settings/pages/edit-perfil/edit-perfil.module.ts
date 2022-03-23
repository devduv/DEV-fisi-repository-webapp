import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditPerfilRoutingModule } from './edit-perfil-routing.module';
import { EditPerfilComponent } from './edit-perfil.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    EditPerfilComponent
  ],
  imports: [
    CommonModule,
    EditPerfilRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatSelectModule
  ]
})
export class EditPerfilModule { }
