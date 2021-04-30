import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

// Fetch base url from environment variables
export const BASE_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class JsonApiService {
  private httpHeaders;

  constructor(private http: HttpClient) {
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
  }

  getHttpHeaders(): HttpHeaders {
    return this.httpHeaders;
  }

  getHttpClient(): HttpClient {
    return this.http;
  }
}
