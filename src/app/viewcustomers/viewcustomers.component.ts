import { Component, OnInit } from '@angular/core';
import { Customers } from '../model/customers';
import { CustomersService } from '../shared/customers.service';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-viewcustomers',
  templateUrl: './viewcustomers.component.html',
  styleUrls: ['./viewcustomers.component.css']
})
export class ViewcustomersComponent implements OnInit {

  constructor(private custservice:CustomersService, private httpService:HttpService) { }

  customers:Customers[] = [];
  ngOnInit() {
    //this.customers = this.custservice.customers;

    this.httpService.getCustomers().subscribe((response:Customers[])=>{
      this.customers = response;

    });

  }

  updateDelet(customer:Customers){
    console.log(customer);
  }
}
