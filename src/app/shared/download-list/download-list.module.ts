import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadListComponent } from './download-list.component';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [DownloadListComponent],
  imports: [CommonModule, MatTableModule],
  exports: [DownloadListComponent],
})
export class DownloadListModule {}
