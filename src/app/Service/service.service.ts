import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseUrl = "http://localhost:8080/userregistration/login";

  constructor(private http : HttpClient) { }

  userLogin(login: any): Observable<any> {
    return this.http.post(this.baseUrl, login);
  }

}
