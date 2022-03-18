import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploaderComponent } from './uploader.component';
import { UploaderRoutingModule } from './uploader-routing.module';

import { FormUploaderModule } from 'src/app/shared/form-uploader/form-uploader.module';

@NgModule({
  declarations: [UploaderComponent],
  imports: [
    CommonModule,
    UploaderRoutingModule,
    FormUploaderModule
  ],
})
export class UploaderModule {}
