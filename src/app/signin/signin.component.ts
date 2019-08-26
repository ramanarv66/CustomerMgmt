import { Component, OnInit, ViewChild } from '@angular/core';
import { Register } from '../model/register';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private http:HttpService) { }

  register: Register = new Register();
  showPassWordWarn: boolean;
  showSuccessMsg: boolean;
  ngOnInit() {
  }

  signIn(): void {
    if (this.register.password != this.register.confirmpassword) {
      this.showPassWordWarn = true;
    } else {
      this.showPassWordWarn = false;
      console.log(this.register)
    }

  }
  validatePassword(): void {
    if (this.register.password != this.register.confirmpassword) {
      this.showPassWordWarn = true;
    } else {
      this.showPassWordWarn = false;
      this.http.registerCustomer(this.register).subscribe((resp:string)=>{
        if(resp){
          this.showSuccessMsg = true;
        }

      });

    }
  }
  changed() {
    console.log();
  }

}
