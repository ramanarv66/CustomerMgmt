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
  invalidLogin:boolean = false;
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  login() {
    console.log(this.loginForm.value)
    this.customer.username = this.loginForm.value.username;
    this.customer.password = this.loginForm.value.password;
   // this.authService.authenticate(this.customer.username, this.customer.password);
   
    (this.authService.authenticate(this.customer.username, this.customer.password).subscribe(
      
      (data:string) => {
       
        console.log(data)
        this.router.navigate(['/viewcustomers']);
      },
      // (completed:string)=>{
      //   console.log('completed')
      //   console.log(completed)
      //   if(completed)
      //   
      // },
      () => {
        this.invalidLogin = true

      }
    )
   
    );
    // setTimeout(()=>{},10000);
  }

}
