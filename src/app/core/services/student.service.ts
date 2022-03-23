import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponseStudent, IResponseUpdateStudent, IStudent } from '../models/student.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _httpClient: HttpClient) { }

  getStudentById(studentID:number):Observable<IResponseStudent>{
    return this._httpClient.get<IResponseStudent>(`${environment.API_REPOSITORY_2}/students/${studentID}`);
  }


  updateStudentById(student:IStudent):Observable<IResponseUpdateStudent>{
    return this._httpClient.put<IResponseUpdateStudent>(`${environment.API_REPOSITORY_2}/students/${student.id}`,student);
  }

}
