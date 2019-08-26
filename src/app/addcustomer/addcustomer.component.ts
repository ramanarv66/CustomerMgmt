import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Event, Router } from '@angular/router';
import { CanDeactiveGuard } from '../guards/candeactivate.guard';
import { DialogService } from '../services/dialog.service';
import { Observable } from 'rxjs';
import { Customers } from '../model/customers';
import { CustomersService } from '../shared/customers.service';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {

  constructor(private renderer: Renderer2, private httpservice:HttpService,
    private dialogService: DialogService, private custSer:CustomersService, private router:Router) { }
  @ViewChild('firstnameref', { static: false }) firstNameRef: ElementRef;
  @ViewChild('password1', { static: false }) password1: ElementRef;

  ngOnInit() {
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (this.addCustomerForm.invalid) {
      return this.dialogService.confirm('Discard changes for add customer?');
    }
    return true;

  }
  addCustomerForm = new FormGroup({
    username: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]+')])),
    firstname: new FormControl('', Validators.compose([Validators.required])),
    lastname: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmpassword: new FormControl('', [Validators.required]),

  }, {

    });

    customer_:Customers;
    success:boolean=false;
  //get passwordValue(): AbstractControl { return this.addCustomerForm.get('password') }
  register(): void {
    this.customer_ = this.addCustomerForm.value;
    //this.custSer.customers.push(this.addCustomerForm.value);
    this.httpservice.saveCustomer(this.customer_).subscribe((resp:string)=>{
      if(resp){
        this.success = true;
      }
    });
    this.router.navigate(['viewcustomers']);
    
  }
  cancel(): void {
    this.addCustomerForm.reset();
  }
  customers: Customers[] = [];
  focusFirstName(value: Event) {
    //focusFirstName(value:string){
    console.log(value)
    // if(!value.length)
    // this.firstNameRef.nativeElement.focus();
  }
  password2: string = '';
  getpasswordvalue(): void {
    console.log(this.password2);
  }



}

function passwordValidator(firstpassword: string) {
  return (control: AbstractControl): { [key: string]: any } | null => {
    console.log(control.value);
    if (control.value === firstpassword) {
      return null;
    }
    else {
      return { 'passwordhaserrors': true }
    }


  };
}