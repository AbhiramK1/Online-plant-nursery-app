import { Component } from '@angular/core';
import { Planter } from '../app.planter-component/app.planter-model';
import { CurrentUser } from '../CurrentUser';
import { Plant } from './app.plant-model';
import { PlantService } from './app.plant-service';

@Component({
  selector: 'app-app.plant-component',
  templateUrl: './app.plant-component.component.html',
  styleUrls: ['./app.plant-component.component.css']
})
export class AppPlantComponentComponent {
  currentPage = 1;
  itemsPerPage = 10; 

  get totalPages(): number[] {
    return Array(Math.ceil(this.plantList.length / this.itemsPerPage)).fill(0).map((x, i) => i + 1);
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
  currentPlant = CurrentUser.getPlantCost();
  showMenu = true;
  selectedSearchOption = '';
  selection = '';
  showTable = false;
  showDrop = true;
  showMethod = false;
  planter: Planter = new Planter();
  plant: Plant = new Plant();
  plant1: Plant = new Plant();
  plantList: Plant[] = [];
  responseMsg = '';
  minCost!: any;
  maxCost!: any;
  idFlag = false;

  constructor(private plantService: PlantService) {
    this.viewAllPlants();
  }

  resetForm() {

    this.plant.plantId = null,
      this.plant.plantHeight = null,
      this.plant.exposure = null,
      this.plant.commonName = '',
      this.plant.bloomTime = '',
      this.plant.flowerColor = '',
      this.plant.temperature = null,
      this.plant.typeOfPlant = '',
      this.plant.description = '',
      this.plant.plantsStock = null,
      this.plant.plantCost = null,
      this.planter.planterId = null;
   

  }
  onSearchOptionChange() {
    if (this.selectedSearchOption === 'id' || this.selectedSearchOption === 'commonName' || this.selectedSearchOption === 'typeofplant') {
      this.showDrop = true;
      this.showMethod = false;
      this.showTable = false;
    }
  }
  add() {
    console.log("geoijk");
    this.selection = 'add';
    this.resetForm();
    this.showMethod = true;
    this.showDrop = false;
    this.showTable=false;
  }
  searchHelper() { this.showDrop = false }
  searchHelper2() { this.showDrop = true }
  searchMethod() { this.showMethod = true }
  showDtrue() {
    this.showDrop = true;
  }
  editOrder(plant: any) {
    this.showDrop = false;
    this.selection = 'update';
    this.showMethod = true;
    this.showTable = false;
    this.plant = { ...plant };
    this.responseMsg = '';
  }
  addToCart(plant: any) {
    CurrentUser.setPlantCost(CurrentUser.getPlantCost() + plant.plantCost);
    this.responseMsg = 'Added to cart';
  }
  addNewPlant() {
    this.showMethod = true;
    this.plant.planter=this.planter;
    this.plantService.addPlant(this.plant).subscribe(
      data => {
        this.plantList = [];
        this.plantList.push(data);
        this.responseMsg = 'Plant ID ' + data.plantId + ' Added Successfully.';
        console.log(data);

        this.resetForm();
      },
      error => {
        this.responseMsg = 'Please enter valid details';
        console.log(error);
      }
    );
  }
  deletePlantById(plantId: any) {
    this.plantService.deletePlant(plantId).subscribe(
      data => {
        this.responseMsg = 'Plant Id ' + plantId + ' Successfully deleted';
        console.log(data);
        this.plantList = this.plantList.filter(p => p.plantId !== plantId);
        this.resetForm();
      },
      error => {
        this.responseMsg = 'Please Enter Valid Plant Id';
        console.error(error);
      }
    );
  }
  searchPlantById() {
    this.plantService.viewPlantById(this.plant.plantId).subscribe(
      data => {

        this.plantList = [];
        this.plantList.push(data);
        this.responseMsg = 'Plant Id Found';
        console.log(data);
        this.showDrop = true;
        this.showTable = true;
        this.showMethod = false;
        this.resetForm();

      },
      error => {
        this.responseMsg = 'Please Enter Valid Plant Id';
        this.showTable = false;
        console.error(error)
      }
    );
  }
  viewAllPlants() {

    this.plantService.viewAllPlants().subscribe(
      data => {
        console.log(data);
        this.plantList = data;
        this.showTable = true;
        this.resetForm();
      },
      error => console.error(error)

    );
  }
  searchPlantByType() {
    this.plantService.viewAllPlantByType(this.plant.typeOfPlant).subscribe(
      (data: any) => {
        this.responseMsg = 'Plant Type Found';
        console.log(data);
        this.plantList = data;
        this.showTable = true;
        this.showMethod = false;
        this.showDrop = true;
        this.resetForm();
      },
      error => {
        this.responseMsg = 'Please Enter Valid Plant Type';
        this.showTable = false;
        console.error(error)
      }
    );
  }
  searchPlantByName() {
    this.plantService.viewPlantByName(this.plant.commonName).subscribe(
      (data: any) => {
        this.responseMsg = 'Plant Shape Found';
        console.log(data);
        this.plantList = data;
        this.showTable = true;
        this.showMethod = false;
        this.showDrop = true;
        this.resetForm();
      },
      error => {
        this.responseMsg = 'Please Enter Valid Plant Name';
        this.showTable = false;
        console.error(error)
      }
    );
  }
  updatePlant() {
    this.selection = 'update';
    this.showMethod = true;
    this.showDrop = false;
    this.plantService.updatePlant(this.plant).subscribe(
      (updatePlant) => {
        this.plantList = [];
        this.plantList.push(updatePlant);
        console.log('updated Plant ', updatePlant)
        this.responseMsg = 'Plant ' + this.plant.plantId + ' Updated Sucessfully.';
        this.resetForm();
      },
      error => {
        this.responseMsg = 'Please Enter Valid details to Update';
        console.error(error)
      }
    );
  }


}