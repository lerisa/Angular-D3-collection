import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {

  constructor(private httpClient: HttpClient,private http: Http) { }


// yieldsData()
// {
//   console.log("inside yields data");
  
//   this.httpClient.get("https://api.myjson.com/bins/xrtoe");

 

// }
}
