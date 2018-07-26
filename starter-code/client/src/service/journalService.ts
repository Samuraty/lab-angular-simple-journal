import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment'

@Injectable()
export class journalService {
  constructor(private http: Http) {}

  getList() {
    return this.http.get(`${environment.BASE_URL}/api/journal-entries`)
      .map((res) => {console.log(res.json());return res.json()});
  }

  get(id) {
    return this.http.get(`${environment.BASE_URL}/api/journal-entries/${id}`)
      .map((res) => res.json());
  }
  
}