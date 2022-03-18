import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class FilesService {
  constructor(private http: HttpClient) {}
/*
  getFiles(search: string) {
    return [
      {
        id: '',
        name: 'Examen resuelto de Gestión del conocimiento 2021',
        course: 'Gestión del conocimiento',
        teacher: 'OSORIO BELTRÁN,NORBERTO ANTONIO',
        semester: '2021-1',
        file_extension: '.docx',
        file_type: 'Examen',
      },
      {
        id: '',
        name: 'Introducción a la computación',
        course: 'Introducción a la Ingeniería de Sistemas',
        teacher: 'ZORAIDA',
        semester: '2022-1',
        file_extension: '.ppt',
        file_type: 'Clase',
      },
      {
        id: '',
        name: 'Prácticas calificadas de Matemática Básica I',
        course: 'Matemática Básica I',
        teacher: 'Moquillaza',
        semester: '2022-1',
        file_extension: '.docx',
        file_type: 'Prácticas',
      },
    ];
  }
*/
  public getFiles() {
    return this.http
      .get<any>(`${environment.API_REPOSITORY}/files`)
      .toPromise()
      .then((plans) => plans.data.map((p: any) => p));
  }
}
