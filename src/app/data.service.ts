import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = new BehaviorSubject<boolean>(false);

  data$ = this.data.asObservable();

 constructor(private httpClient: HttpClient) { }

  updateData(value: boolean) {
    this.data.next(value)
  }

   

  getProducts(){
    return this.httpClient.get("assets/products.json")
  }


}
