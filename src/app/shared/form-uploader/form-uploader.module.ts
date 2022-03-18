import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUploaderComponent } from './form-uploader.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [FormUploaderComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
  ],
  exports: [FormUploaderComponent],
})
export class FormUploaderModule {}
