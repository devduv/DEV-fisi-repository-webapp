import { Component, Input, OnInit } from '@angular/core';
import { FileRepository } from 'src/app/core/models/file.model';
import { FilesService } from 'src/app/core/services/files.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html'
})
export class FileListComponent implements OnInit {
  @Input()
  searchText: string;

  files: FileRepository[];

  constructor(private filesService: FilesService) {}

  ngOnInit(): void {
    this.getFiles();
  }

  getFiles() {
    this.files = this.filesService.getFiles(this.searchText);
  }
}
