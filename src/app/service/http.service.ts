import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Customers } from '../model/customers';
import { Observable } from 'rxjs';
import { Register } from '../model/register';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  //url:string = 'https://mysqlapp.cfapps.io/customer/getCustomers';
  //url:string = 'https://mysqlapp.cfapps.io/customer/getCustomers';
  getUrl: string = 'http://localhost:8080/customer/getCustomers';
  saveUrl: string = 'http://localhost:8080/customer/saveCustomer';
  updateUrl: string = 'http://localhost:8080/customer/updateCustomer';
  registerUrl: string = 'http://localhost:8080/register';
  authenticateUrl: string = 'http://localhost:8080/authenticate';
  

  constructor(private httpClient: HttpClient) { }

  getCustomers(): Observable<Customers[]> {
    return this.httpClient.get<Customers[]>(this.getUrl);

  }
  saveCustomer(customer: Customers): Observable<string> {
    return this.httpClient.post<string>(this.saveUrl, customer);
  }
  updateCustomer(customer: Customers, custId: Customers): Observable<string> {
    this.updateUrl = this.updateUrl + '/' + customer.id;
    return this.httpClient.put<string>(this.updateUrl, customer);
  }
  registerCustomer(user: Register): Observable<string> {
    return this.httpClient.post<string>(this.registerUrl, user);
  }
  authenticate(user:Customers):Observable<string>{
    console.log(this.authenticateUrl)
    return this.httpClient.post<string>(this.authenticateUrl, user);

  }
}
