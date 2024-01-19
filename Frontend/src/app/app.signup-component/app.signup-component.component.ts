import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../app.customer-component/customer.model';
import { Address } from '../app.customer-component/address.model';
import { CustomerAddressGroup } from './customerAddressGroup.model';
import { AppSignupService } from './app.signup.service';

@Component({
  selector: 'app-app.signup-component',
  templateUrl: './app.signup-component.component.html',
  styleUrls: ['./app.signup-component.component.css']
})

export class AppSignupComponentComponent {
  signupForm!: FormGroup;
  message="";
  customer:Customer= new Customer();
  address:Address = new Address();
  name: any;
  email: any;
  username: any;
  password: any;
  houseNo: any;
  colony: any;
  city: any;
  state: any;
  pincode: any;

  constructor(private signupService: AppSignupService){}

onSubmit() {
    this.customer.setName(this.name);
    this.customer.setEmail(this.email);
    this.customer.setUsername(this.username);
    this.customer.setPassword(this.password);

    this.address.setHouseNo(this.houseNo);
    this.address.setColony(this.colony);
    this.address.setCity(this.city);
    this.address.setState(this.state);
    this.address.setPincode(this.pincode);

    this.signupService.addCustomer(new CustomerAddressGroup(this.customer,this.address)).subscribe(
      data =>{
        this.message="Customer Registered Successfully !";
        console.log(data);
      },
      error =>{ console.error(error);}
    );
  }
}
