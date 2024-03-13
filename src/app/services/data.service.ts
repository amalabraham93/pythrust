import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders ({
    'content-type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl =  "https://my-json-server.typicode.com/amalabraham93/pythrust/feedbacks"


  constructor(private http:HttpClient) { }


getfeedback():Observable<[]>{
return this.http.get<[]>(this.apiUrl)
}
postfeedback(feedbackData:any):Observable<any>{
  return this.http.post<any>(this.apiUrl,feedbackData,httpOptions)
}
}
