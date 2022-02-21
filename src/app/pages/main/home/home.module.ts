import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SearchInputModule } from 'src/app/shared/search-input/search-input.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    SearchInputModule,
    MatIconModule
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
