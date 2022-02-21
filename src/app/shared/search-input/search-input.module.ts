import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './search-input.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchInputComponent],
  imports: [CommonModule, MatInputModule, MatButtonModule, MatIconModule, FormsModule],
  exports: [SearchInputComponent],
})
export class SearchInputModule {}
