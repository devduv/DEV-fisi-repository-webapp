import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StartedPageRoutingModule } from './started-routing.module';

import { StartedPage } from './started.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StartedPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [StartedPage],
})
export class StartedPageModule {}
