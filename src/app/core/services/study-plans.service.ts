import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudyPlansService {
  constructor(private http: HttpClient) {}

  public getPlansBySchool() {
    return this.http
      .get<any>(`${environment.API_REPOSITORY}/study-plans`)
      .toPromise()
      .then((plans) => plans.data.map((p: any) => p));
  }
}
