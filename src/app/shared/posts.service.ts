import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private _http: HttpClient) { }

  showPost() : Observable<any> {
    return this._http.get(this.url);
  }
}
