import { Component } from '@angular/core';
import { CurrentUser } from '../CurrentUser';
import { Planter } from './app.planter-model';
import { PlanterService } from './app.planter-component.service';
import { NgForm } from '@angular/forms';
import { AppOrderComponent } from '../app.order-component/app.order.component';
import { AppDashboardComponentComponent } from '../app.dashboard-component/app.dashboard-component.component';
//import { AppDashboardComponentComponent } from '../app.dashboard-component/app.dashboard-component.component';
//import { AppDashboardComponentComponent } from '../app.dashboard-component/app.dashboard-component.component';

@Component({
  selector: 'app-app.planter-component',
  templateUrl: './app.planter-component.component.html',
  styleUrls: ['./app.planter-component.component.css']
})
export class AppPlanterComponentComponent {



  currentPage = 1;
  itemsPerPage = 10;


  get totalPages(): number[] {
    return Array(Math.ceil(this.planterList.length / this.itemsPerPage)).fill(0).map((x, i) => i + 1);
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
  user: CurrentUser = new CurrentUser();
  userType = CurrentUser.getUserType();
  currentPlanter = CurrentUser.getPlanterCost();
  cartPlanter = CurrentUser.getPlanter();
  showMenu = true;
  selectedSearchOption = '';
  selection = '';
  showTable = false;
  showDrop = true;
  showMethod = false;
  planter: Planter = new Planter();
  planter1: Planter = new Planter();
  planterList: Planter[] = [];
  responseMsg = '';
  minCost!: any;
  maxCost!: any;
  idFlag = false;

  constructor(private planterService: PlanterService) {
    this.viewAllPlanters();

  }
  resetForm() {

    this.planter.planterId = null;
    this.planter.planterHeight = null;
    this.planter.planterCapacity = null;
    this.planter.planterHoles = null;
    this.planter.planterColor = '';
    this.planter.planterShape = '';
    this.planter.planterStock = null;
    this.planter.planterCost = null;
    this.minCost = null;
    this.maxCost = null;


  }
  onSearchOptionChange() {
    if (this.selectedSearchOption === 'id' || this.selectedSearchOption === 'shape' || this.selectedSearchOption === 'cost') {
      this.showDrop = true;
      this.showMethod = false;
      this.showTable = false;
    }
  }
  add() {
    this.selection = 'add';
    this.resetForm();
    this.showMethod = true;
    this.showDrop = false;
  }
  searchHelper() { 
    this.showDrop = false 
  }
  searchHelper2() {
    this.showDrop = true
    this.showTable = true;
    this.showMethod = true;
  }
  searchMethod() { 
    this.showMethod = true
   }
  showDtrue() {
    this.showDrop = true;
  }
  editOrder(planter: any) {
    this.showDrop = false;
    this.selection = 'update';
    this.showMethod = true;
    this.showTable = false;
    this.planter = { ...planter };
    this.responseMsg = '';
  }
  addToCart(planter: any) {
    CurrentUser.setPlanterCost(CurrentUser.getPlanterCost() + planter.planterCost);
    this.responseMsg = 'Added to cart';
  }


  deletePlanterById(planterId: any) {

    this.planterService.deletePlanter(planterId).subscribe(
      data => {
        this.responseMsg = 'Planter Id ' + planterId + ' Successfully deleted';
        console.log(data);
        this.planterList = this.planterList.filter(p => p.planterId !== planterId);
        this.resetForm();
      },
      error => {
        this.responseMsg = 'Please Enter Valid Planter Id';
        console.error(error);
      }
    );
  }

  addNewPlanter() {

    this.showMethod = true;
    this.planterService.addPlanter(this.planter).subscribe(
      data => {
        this.planterList = [];
        this.planterList.push(data);
        this.responseMsg = 'Planter ID ' + data.planterId + ' Added Successfully.';
        console.log(data);

        this.resetForm();
      },
      error => {
        this.responseMsg = 'Please enter valid details';
        console.log(error);
      }
    );
  }
  updatePlanter() {
    this.selection = 'update';
    this.showMethod = true;
    this.showDrop = false;
    this.planterService.updatePlanter(this.planter).subscribe(
      (updatedPlanter) => {
        this.planterList = [];
        this.planterList.push(updatedPlanter);
        console.log('updated Planter ', updatedPlanter);
        this.responseMsg = 'Planter ' + this.planter.planterId + ' Updated Sucessfully.';
        this.resetForm();
      },
      error => {
        this.responseMsg = 'Please Enter Valid details to Update';
        console.error(error)
      }
    );
  }

  searchPlanter() {

    this.planterService.viewPlanterById(this.planter1.planterId).subscribe(
      data => {

        this.planterList = [];
        this.planterList.push(data);
        this.responseMsg = 'Planter Id Found';
        console.log(data);
        this.showDrop = true;
        this.showTable = true;
        this.showMethod = false;
        this.resetForm();

      },
      error => {
        this.responseMsg = 'Please Enter Valid Planter Id';
        this.showTable = false;
        console.error(error)
      }
    );
  }
  viewAllPlanters() {

    this.planterService.viewAllPlanters().subscribe(
      (data: any) => {
        this.planterList = [];
        this.planterList.push(data);
        console.log(data);
        this.planterList = data;
        this.showTable = true;
        this.resetForm();
      },
      error => console.error(error)

    );
  }
  searchPlanterByShape() {

    this.planterService.viewPlanterByShape(this.planter1.planterShape).subscribe(
      (data: any) => {
        this.planterList = [];
        this.planterList.push(data);
        this.responseMsg = 'Planter Shape Found';
        console.log(data);
        this.planterList = data;
        this.showTable = true;
        this.showMethod = false;
        this.showDrop = true;
        this.resetForm();
      },
      error => {
        this.responseMsg = 'Please Enter Valid Planter Shape';
        this.showTable = false;
        console.error(error)
      }
    );
  }
  searchPlanterByCostRange() {

    this.planterService.viewPlanterByCostRange(this.minCost, this.maxCost).subscribe(
      (data: any) => {
        this.planterList = [];
        this.planterList.push(data);
        this.responseMsg = 'Found Planter By Cost Range Successfully';
        console.log(data);
        this.planterList = data;
        this.showTable = true;
        this.showMethod = false;
        this.showDrop = true;
        this.resetForm();
      },
      error => {
        this.responseMsg = 'Planter with cost' + this.minCost + 'and ' + this.maxCost + ' not found';
        this.showTable = false;
        console.error(error)
      }
    );
  }
}
