import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  public getCourses() {
    return this.http
      .get<any>(`${environment.API_REPOSITORY}/courses`)
      .toPromise()
      .then((courses) => courses.data.map((c: any) => c));
  }
}
