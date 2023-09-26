import { Injectable } from '@angular/core';
import { API_CAT } from '../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class KittensService {
  private base_url: string = API_CAT.base_url;
  private api_key: string = API_CAT.api_key;

  constructor(private http: HttpClient) { }

  public getKittens(page: number): Observable<any> {
    return this.http
      .get(
        `${this.base_url}/images/search?limit=25&page=${page}&has_breeds=1&api_key=${this.api_key}`
      )
  }
}
