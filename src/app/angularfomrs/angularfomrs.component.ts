import { Component, OnInit } from '@angular/core';
import { AuthendicateService } from '../service/authendicate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customers } from '../model/customers';

@Component({
  selector: 'app-angularfomrs',
  templateUrl: './angularfomrs.component.html',
  styleUrls: ['./angularfomrs.component.css']
})
export class AngularfomrsComponent implements OnInit {

  constructor(private authservice:AuthendicateService, private router:Router) { }
  username:string;
  password:string;
  customer:Customers = new Customers();

  ngOnInit() {
  }
  templateLogin():void{
    console.log(this.username + ' ' + this.password)
    this.customer.username = this.username;
    this.customer.password = this.password;
    if(this.authservice.authendicate(this.customer)){
      this.router.navigate(['viewcustomers']);

    }
  }
}
