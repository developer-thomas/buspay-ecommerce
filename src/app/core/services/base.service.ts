import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {

  protected BASE_URL: string = '';
  
  constructor(protected http: HttpClient) {}

  findAll(): Observable<T[]> {
    return this.http.get<T[]>(`${environment.api}/${this.BASE_URL}`)
  }

  create(body: T): Observable<T> {
    return this.http.post<T>(`${environment.api}/${this.BASE_URL}`, body);
  }

  findById(id: number | string): Observable<T> {
    return this.http.get<T>(`${environment.api}/${this.BASE_URL}/${id}`);
  }

  delete(id: number): Observable<T> {
    return this.http.delete<T>(`${environment.api}/${this.BASE_URL}/${id}`);
  }

  update(id: number, body: Partial<T>): Observable<T> {
    return this.http.put<T>(`${environment.api}/${this.BASE_URL}/${id}`, body);
  }
}
