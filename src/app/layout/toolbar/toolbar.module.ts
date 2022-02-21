import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ToolbarPage } from './toolbar.page';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [CommonModule, FormsModule, MatIconModule, MatButtonModule, MatTooltipModule],
  exports: [ToolbarPage],
  declarations: [ToolbarPage],
})
export class ToolbarPageModule {}
