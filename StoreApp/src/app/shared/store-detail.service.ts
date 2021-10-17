import { Injectable } from '@angular/core';
import { StoreDetail } from './store-detail.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreDetailService {

  constructor(private http:HttpClient) { }
  
  readonly baseURL = 'http://localhost:35863/api/StoreDetail'
  formData : StoreDetail = new StoreDetail();
  list : StoreDetail[];

  public postStoreDetail(){
    return this.http.post(this.baseURL,this.formData);
  }
  
  public putStoreDetail(){
    return this.http.put(`${this.baseURL}/${this.formData.storeDetailId}`,this.formData);
  }

  deleteStoreDetail(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  
  }

  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as StoreDetail[])
  }
}
