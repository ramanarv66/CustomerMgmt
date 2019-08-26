import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { AuthendicateService } from '../service/authendicate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customers } from '../model/customers';
import { HttpService } from '../service/http.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthendicateService,
    private route: ActivatedRoute, private router: Router, private http: HttpService) { }

  ngOnInit() {
  }

  customer: Customers = new Customers();
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  login() {
    console.log(this.loginForm.value)
    this.customer.username = this.loginForm.value.username;
    this.customer.password = this.loginForm.value.password;
    // var isTrue = this.authService.authendicate(this.customer);

    // this.http.authenticate(this.customer).subscribe(
    //   (resp: string) => {
    //     let tokenStr = 'Bearer ' + resp.toString();
    //     console.log(tokenStr)
    //     sessionStorage.setItem('token', tokenStr);
    //     sessionStorage.setItem('username', this.customer.username);
    //     this.router.navigate(['/viewcustomers']);
    //   },
    //   (error: Error) => { },
    //   () => { }
    // );
    this.http.authenticate(this.customer).pipe(
      map(
        resp => {
          sessionStorage.setItem('username', this.customer.username);
          let tokenStr = 'Bearer ' + resp;
          sessionStorage.setItem('token', tokenStr);

        }
      )
    );


    // if (isTrue) {
    //   this.router.navigate(['/viewcustomers']);
    // }
  }

}
