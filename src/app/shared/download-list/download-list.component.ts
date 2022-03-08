import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  course: string;
  date: string;
}

@Component({
  selector: 'app-download-list',
  templateUrl: './download-list.component.html',
})
export class DownloadListComponent implements OnInit {
  public ELEMENT_DATA: PeriodicElement[] = [
    {
      name: 'Presentación final del curso.pptx',
      course: 'Matemática Básica 1',
      date: '03 de marzo',
    },
    {
      name: 'Examen Parcial 2020-1 Resuelto.docx',
      course: 'Algoritmia 1',
      date: '03 de marzo',
    },
    {
      name: 'Semana 01 - Introducción a clases difusas.pdf',
      course: 'Sistemas Inteligentes',
      date: '03 de marzo',
    },
  ];
  constructor() {}

  displayedColumns: string[] = ['name', 'course', 'date'];
  dataSource = this.ELEMENT_DATA;

  ngOnInit(): void {}
}
