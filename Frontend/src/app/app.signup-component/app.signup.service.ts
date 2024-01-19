import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CustomerAddressGroup } from './customerAddressGroup.model';
import { Customer } from '../app.customer-component/customer.model';

@Injectable({
  providedIn: 'root'
})
export class AppSignupService {
  private baseURL = "http://localhost:8050/customer";
    constructor(private httpClient: HttpClient){}
 
    addCustomer(customerAddressGroup:CustomerAddressGroup):Observable<Customer>{
        return this.httpClient.post<Customer>(`${this.baseURL}/add`,customerAddressGroup);
    }
  }
