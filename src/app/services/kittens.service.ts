import { Injectable } from '@angular/core';
import { API_CAT } from '../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Kitty } from '../interfaces/kitty.interface';


@Injectable({
  providedIn: 'root'
})
export class KittensService {
  base_url: string = API_CAT.base_url;
  api_key: string = API_CAT.api_key;

  constructor(private http: HttpClient) { }

  getKittens(page: number): Observable<Kitty[]> {
    return this.http
      .get(
        `${this.base_url}/images/search?limit=25&page=${page}&has_breeds=1&api_key=${this.api_key}`
      ).pipe(map((res) => res as Kitty[]));
  }

  getKitty(id: string): Observable<Kitty> {
    return this.http
      .get(
        `${this.base_url}/images/${id}`
      ).pipe(map((res) => res as Kitty));
  }
}
