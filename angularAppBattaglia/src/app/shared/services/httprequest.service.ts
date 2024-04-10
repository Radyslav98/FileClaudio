import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttprequestService {

  constructor(private http: HttpClient) { }

  GetJsFakePosts(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  GetJsFakePostByTitle(id: number): Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
