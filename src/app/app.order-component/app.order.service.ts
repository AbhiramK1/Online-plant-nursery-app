import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './app.order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
    private apiUrl = 'http://localhost:8050/orders';
    

  constructor(private http: HttpClient) {}

  addOrder(order: Order): Observable<Order> {
    
    return this.http.post<Order>(`${this.apiUrl}/addOrder`, order);
  }

  updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.apiUrl}/update`, order);
  }

  deleteOrder(orderId: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/deleteOrder/${orderId}`);
  }

  viewOrder(orderId: number): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/view/${orderId}`);
  }

  viewAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}/viewAll`);
  }

 
  cancelOrder(orderId: number): Observable<Order> {
    return this.http.put<Order>(`${this.apiUrl}/cancel/${orderId}`, {});
  }
  
}
