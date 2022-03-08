import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploaderComponent } from './uploader.component';
import { UploaderRoutingModule } from './uploader-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [UploaderComponent],
  imports: [
    CommonModule,
    UploaderRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
})
export class UploaderModule {}
