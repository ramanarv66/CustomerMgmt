import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable, BehaviorSubject } from 'rxjs';
import { SubjectService } from './subject.service';

@Injectable({
  providedIn: 'root'
})
export class AuthendicateService {

  constructor(private http: HttpService, private httpClient: HttpClient,
    private subjectServ: SubjectService) { }

  someboolean: boolean = false;
  //   authendicate(customer: Customers): boolean {

  //   this.http.authenticate(customer).subscribe(
  //     (resp: string) => {
  //       if (resp) {
  //         let tokenStr = 'Bearer ' + resp.toString();
  //         console.log(tokenStr)
  //         sessionStorage.setItem('token', tokenStr);
  //         sessionStorage.setItem('username', customer.username);
  //         this.someboolean = true;
  //         return this.someboolean;
  //       }
  //       return false;
  //     }
  //   );

  //   return this.someboolean;


  // }
  // authenticate(username, password): void {
  //   this.httpClient.post<any>('http://localhost:8080/authenticate', { username, password }).subscribe(
  //     (token: string) => {
  //       this.subjectServ.setTokenSubject(token);
  //       sessionStorage.setItem('username', username);
  //       let tokenStr = 'Bearer ' + token;
  //       sessionStorage.setItem('token', tokenStr);
  //     }
  //   );
  authenticate(username, password) {
    return this.httpClient.post<any>('http://localhost:8080/authenticate', { username, password }).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          let tokenStr = 'Bearer ' + userData.token;
          sessionStorage.setItem('token', tokenStr);
          return userData;
        }
      )

    );
  }





isValidUser(): boolean {
  return sessionStorage.getItem('userlogged') != null ? true : false;
}
logOut(): void {
  sessionStorage.removeItem('userlogged');
}
}
