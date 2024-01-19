import { Component } from '@angular/core';
import { CurrentUser } from '../CurrentUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './app.dashboard-component.component.html',
  styleUrls: ['./app.dashboard-component.component.css']
})
export class AppDashboardComponentComponent {
  userType=CurrentUser.getUserType();
   showBack=true;
  selectedSection: string = ''; 
  constructor(private router:Router){ }
  hideSection(): void {
    this.showBack = false;
  }
  logout(){
    this.router.navigate(['/permanent'],{skipLocationChange : true});
  }
  showPlantOptions(): void {
    this.hideSection();
    this.router.navigate(['/plant']);
   
  }
  showSeedOptions(): void {
    this.hideSection();
    this.router.navigate(['/seed']);
  }
  showPlanterOptions(): void {
   
    this.hideSection();
      this.router.navigate(['/planter']);
    
  }
  showOrderOptions(): void {
    this.hideSection();
  
    this.router.navigate(['/order']);
  }
  showCustomerOptions(): void{
    this.hideSection();
     this.router.navigate(['/customer']);}

  showCustomerPlantOptions(): void {
    this.hideSection();
    this.router.navigate(['/plant']);
  }
  showCustomerSeedOptions(): void {
    this.hideSection();
    this.router.navigate(['/seed']);
  }
  showCustomerPlanterOptions(): void {
    this.hideSection();
    this.router.navigate(['/planter']);
  }
  showCustomerOrderOptions(): void {
    this.hideSection();
    this.router.navigate(['/order']);
  }
}
