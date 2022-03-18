import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SchoolsService {
  constructor(private http: HttpClient) {}

  getSchools() {
    return this.http
      .get<any>(`${environment.API_REPOSITORY}/pas`)
      .toPromise()
      .then((schools) => schools.data.map((s: any) => s));
  }
}
