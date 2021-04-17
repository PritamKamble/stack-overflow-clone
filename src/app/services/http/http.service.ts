import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private readonly http: HttpClient
  ) { }

  public get<T>(path: string): Observable<T> {
    return this.http.get<T>(`${environment.hostURL}${path}`);
  }

  public post<T>(path: string, body: any): Observable<T>  {
    return this.http.post<T>(`${environment.hostURL}${path}`, body);
  }

  public put<T>(path: string, body: any): Observable<T>  {
    return this.http.put<T>(`${environment.hostURL}${path}`, body);
  }
}
