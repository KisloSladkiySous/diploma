import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = environment.baseApiUrl

  constructor(
    public http:HttpClient
  ) { }

    getNewsByCategory(category:string):any { 
      let params = new HttpParams;
      params= params.append("country","ru");
      params = params.append("language","ru");
      if (category) {
        params = params.append("category",category);
        return this.http.get(this.url, {
          params:params
        })
      } else { 
        return this.http.get(this.url, {
          params:params
        })
      }
   
    }
}
