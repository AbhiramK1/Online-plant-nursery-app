import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { CurrentUser } from '../CurrentUser';
import { Order } from './app.order.model';
import { OrderService } from './app.order.service';
 
@Component({
  selector: 'app-app.order',
  templateUrl: './app.order.component.html',
  styleUrls: ['./app.order.component.css']
})
export class AppOrderComponent {
  currentPage = 1;
  itemsPerPage = 10;
 
  get totalPages(): number[] {
    return Array(Math.ceil(this.orderList.length / this.itemsPerPage)).fill(0).map((x, i) => i + 1);
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
  showMenu=true;
  userType=CurrentUser.getUserType();
  seedCost=CurrentUser.getSeedCost();
  plantCost=CurrentUser.getPlantCost();
  planterCost=CurrentUser.getPlanterCost();
  responseMessage="";
  selection='';
  order:Order = new Order();
  orderList: Order[] = [];
  IdFlag = false;
  showTable=true;
  planter: any;
  planterService: any;
  responseMsg: string | undefined;
  editMode: boolean = false;
 
 
  constructor(private orderService:OrderService){
       this.viewAllOrder(); 
      if(this.userType==='customer') this.selection='add';
  }

  addNewOrder(){
    this.selection='add';
    this.showMenu=false;
    this.showTable=true;
    this.order.setSeedCost(CurrentUser.getSeedCost());
    this.order.setPlantCost(CurrentUser.getPlantCost());
    this.order.setPlanterCost(CurrentUser.getPlanterCost());
    
    this.orderService.addOrder(this.order).subscribe(
      data => {
        this.orderList = [];
        this.orderList.push(data);
        this.responseMessage='Order Added Sucessfully with order id ' + data.bookingOrderId + "\n And total cost is "+data.totalCost;
        console.log(data);
      },
      error => console.log(error));
  }
  viewAllOrder(){
    this.selection='viewAll';
    this.showMenu=false;
    this.orderService.viewAllOrders().subscribe(
      data => { this.orderList = data;},
      error => { console.error( error);}
    )
  }
  searchOrderById(){
    
    this.selection='search';
    this.showMenu=false;
    this.showTable=false;
    this.orderService.viewOrder(this.order.bookingOrderId).subscribe(
      data => {
        this.orderList = [];
        this.orderList.push(data)
        this.responseMessage = `Order with ID ${this.order.bookingOrderId} retrieved successfully!`;
        console.log(data);
      },
      error => {
        this.orderList = [];
        console.error( error);
        this.responseMessage = `Order  ID  Not Found`;
      }
    );
  
}
 
  editOrder(order: any) {
    this.selection = 'update';
    this.order = { ...order };
    this.responseMessage = '';
    this.editMode = true;
  }
 
  deleteOrderById(orderId: any) {
    this.showMenu=false;
      this.orderService.deleteOrder(orderId).subscribe(
        (data: any) => {
          this.responseMsg = 'Order Id '+orderId+' Successfully deleted';
          console.log(data);
          this.orderList = this.orderList.filter(c => c.bookingOrderId !== orderId);
        },
        (error: any) => {
          this.responseMsg = 'Please Enter Valid Order Id';
        console.error(error);
        }
      );
  }
 
  searchHelper(){this.IdFlag=true;}
 
  updateOrder(){
    this.selection='update';
    this.showMenu=false;
    this.showTable=true;
    this.orderService.updateOrder(this.order).subscribe(
      (updateOrder) =>{
        this.orderList = [];
        this.orderList.push(updateOrder);
        console.log('updated order ', updateOrder)
        this.responseMessage="Order Updated Sucessfully";
  },
  (error) => {
     
    console.error('error updating order ',error)
  }
  );
}
 
  
  cancelOrder(orderId: number) {
    this.orderService.cancelOrder(orderId).subscribe(
      (data) => {
        // Update the status in the orderList
        const canceledOrder = this.orderList.find((order) => order.bookingOrderId === orderId);
        if (canceledOrder) {
          canceledOrder.status = 'cancelled';
          this.responseMessage = `Order ID ${orderId} successfully cancelled.`;
        } else {
          this.responseMessage = `Order ID ${orderId} not found .`;
        }
      },
      (error) => {
        this.responseMessage = `Error canceling order ID ${orderId}.`;
        console.error(error);
      }
    );
  }
}
