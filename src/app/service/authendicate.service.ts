import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Customers } from '../model/customers';

@Injectable({
  providedIn: 'root'
})
export class AuthendicateService {

  constructor(private http: HttpService) { }

  someboolean: boolean = false;
    authendicate(customer: Customers): boolean {

    this.http.authenticate(customer).subscribe(
      (resp: string) => {
        if (resp) {
          let tokenStr = 'Bearer ' + resp.toString();
          console.log(tokenStr)
          sessionStorage.setItem('token', tokenStr);
          sessionStorage.setItem('username', customer.username);
          this.someboolean = true;
          return this.someboolean;
        }
        return false;
      }
    );

    return this.someboolean;


  }
  isValidUser(): boolean {
    return sessionStorage.getItem('userlogged') != null ? true : false;
  }
  logOut(): void {
    sessionStorage.removeItem('userlogged');
  }
}
