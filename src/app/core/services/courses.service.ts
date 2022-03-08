import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  public getCourses() {
    return [
      { id: 1, name: 'CÁLCULO I', description: 'Calculo 1', code: '20W0102' },
      {
        id: 2,
        name: 'MATEMÁTICA BÁSICA I',
        description: 'MATEMÁTICA BÁSICA I',
        code: '20W0104',
      },
      {
        id: 3,
        name: 'DISEÑO DE SOFTWARE',
        description: 'DISEÑO DE SOFTWARE',
        code: '20W0602',
      },
    ];
    /* return this.http
      .get<any>(`${environment.API_REPOSITORY}/courses`)
      .toPromise()
      .then((courses) => courses.data.map((c: any) => c)); */
  }
}
