import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {MatRippleModule} from '@angular/material/core';

import { MenuPage } from './menu.page';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatTooltipModule
  ],
  exports: [MenuPage],
  declarations: [MenuPage]
})
export class MenuPageModule {}
