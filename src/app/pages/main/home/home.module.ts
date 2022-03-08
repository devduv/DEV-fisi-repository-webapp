import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SearchInputModule } from 'src/app/shared/search-input/search-input.module';
import { MatIconModule } from '@angular/material/icon';
import { CourseListModule } from 'src/app/shared/course-list/course-list.module';
import { DownloadListModule } from 'src/app/shared/download-list/download-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    SearchInputModule,
    MatIconModule,
    CourseListModule,
    DownloadListModule
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
