
import { Component } from '@angular/core';
import { CustomerAddressGroup } from '../app.signup-component/customerAddressGroup.model';
import { CurrentUser } from '../CurrentUser';
import { Address } from './address.model';
import { Customer } from './customer.model';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-app.customer-component',
  templateUrl: './app.customer-component.component.html',
  styleUrls: ['./app.customer-component.component.css']
})
export class AppCustomerComponentComponent {
  currentPage = 1; 
  itemsPerPage = 10; 
  
 
  get totalPages(): number[] {
    return Array(Math.ceil(this.customerList.length / this.itemsPerPage)).fill(0).map((x, i) => i + 1);
  }
 
  setCurrentPage(page: number) {
    this.currentPage = page;
  }
 
  nextPage() {
    if (this.currentPage < this.totalPages.length) {
      this.currentPage++;
    }
  }
 
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
showTable=true;
  showMenu=true;
  selection='';
 
  close=false;
  show=true;
  userType=CurrentUser.getUserType();
  responseMsg='';
  showId=true;
  customer: Customer = new Customer();
  customerList:Customer[]=[];
  customerList1:Customer[]=[];
  idFlag=false;

  constructor(private customerService:CustomerService){
    
    if(this.userType==='customer'){
     this.search();
     
    }
    else {
      this.viewAllCustomers();
    }
  }


  search(){
    this.showId = true;
    this.showMenu = false;
    this.selection = 'info';

    const customerId = CurrentUser.getId();
    
    this.customerService.viewCustomer(customerId).subscribe(
      (data) => {
        this.customerList = [data];
        this.close = true;
        this.idFlag = true;
        this.responseMsg = `Customer with Id ${customerId} retrieved Successfully`;
        console.log(data);
      },
      (error) => {
        this.responseMsg = 'Enter valid Customer ID';
        console.error(error);
      }
    );
  }

  searchCustomerById() {
    this.show=false;
    this.showId=true;
    this.showMenu=false;
    
    this.close=true;
    this.selection='viewById';
    this.userType==='customer'?this.customerService.viewCustomer(CurrentUser.getId()).subscribe(
      data =>{
        this.customerList=[];
        this.customerList.push(data);
        this.responseMsg=`Customer with Id ${this.customer.id} retrived Successfully`;
        console.log(data);
      },
      error =>{
        this.responseMsg="Enter valid Customer ID";
        console.error(error);
      }
    ):
    this.customerService.viewCustomer(this.customer.id).subscribe(
      data =>{
        this.customerList=[];
        this.customerList.push(data);
        this.responseMsg=`Customer with Id ${this.customer.id} retrived Successfully `;
        console.log(data);
      },
      error =>{
        this.responseMsg="Enter valid Customer ID";
        console.error(error);
      }
    );
  
}


  editCustomer(customer: any) {
    this.selection = 'update'; 
    this.showTable=false;
    this.customer = { ...customer };
    this.customer.address = { ...customer.address };
    this.responseMsg = '';
  }
 
  deleteCustomerById(id: any) {
    this.showMenu=false;
    this.customerService.deleteCustomer(id).subscribe(
      data => {
        this.responseMsg = 'Customer '+id+' Successfully deleted';
        console.log(data);
        this.customerList = this.customerList.filter(p => p.id !== id);
      },
      error => {
        this.responseMsg = 'Please Enter Valid Customer Id';
      console.error(error);
      }
    );
  }
  
searchHelper(){this.idFlag=true;}

  viewAllCustomers() {
   
    this.showMenu=false;
    this.selection='viewAll';
    
    this.customerService.viewAllCustomers().subscribe(
      data => {
        this.customerList= data;
        this.showTable=true;
        console.log(data);
      },
      error => {
        console.error('Error while viewing all customers:', error);
      }
    );
  }
  updateCustomer(){
    this.showMenu=false;
    this.showTable=true;
    this.selection='update';
    
    if (this.customer.address===null) {
      this.customer.address = new Address(); // Initialize the address object if it's null/undefined
    }
    console.log(this.customer);
    this.customerService.updateCustomer(this.customer).subscribe(
      (updatedCustomer) => {
        this.customerList=[];
        this.customerList.push(updatedCustomer);
        console.log('Updated customer:', updatedCustomer);
        this.responseMsg="Customer Updated Successfully !";
      },
      (error) => {
        console.error('Error updating customer :', error);
      }
    );
  }


}




