import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { SearchInputModule } from 'src/app/shared/search-input/search-input.module';
import { FileListModule } from 'src/app/shared/file-list/file-list.module';
import { SearchFiltersModule } from 'src/app/shared/search-filters/search-filters.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SearchInputModule,
    FileListModule,
    SearchFiltersModule,
    MatDividerModule,
    MatIconModule,
    MatRippleModule
  ],
})
export class SearchModule {}
