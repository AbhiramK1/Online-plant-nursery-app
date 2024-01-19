import { Component } from '@angular/core';
import { CurrentUser } from '../CurrentUser';
import { Seed } from './app.seed-model';
import { SeedService } from './app.seed-component.service';
import { NgForm } from '@angular/forms';
import { Planter } from '../app.planter-component/app.planter-model';

@Component({
  selector: 'app-app.seed-component',
  templateUrl: './app.seed-component.component.html',
  styleUrls: ['./app.seed-component.component.css']
})
export class AppSeedComponentComponent {
  currentPage = 1;
  itemsPerPage = 10;


  get totalPages(): number[] {
    return Array(Math.ceil(this.seedList.length / this.itemsPerPage)).fill(0).map((x, i) => i + 1);
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
  responseMsg = '';
  userType = CurrentUser.getUserType();
  currentSeed=CurrentUser.getSeedCost();
  seed: Seed = new Seed();
  planter: Planter = new Planter();
  showTable = false;
  selectedSearchOption = '';
  showMenu = true;
  showDrop = true;
  showMethod = false;
  seed1: Seed = new Seed();
  minCost!: any;
  maxCost!: any;
  seedList: Seed[] = [];
  selection = '';
  idFlag = false;
  constructor(private seedService: SeedService) {
    this.viewAllSeeds();
  }
  resetForm() {
  
    this.seed.seedId= null,
    this.seed.commonName= '',
    this.seed.bloomTime= '',
    this.seed.watering= '',
    this.seed.difficultyLevel= '',
    this.seed.temperature= '',
    this.seed.typeOfSeed= '',
    this.seed.description= '',
    this.seed.stock= null,
    this.seed.cost= null,
    this.seed.seedsPerPacket= null,
     
      this.seed.planter.planterId = null;
      this.seed.planter.planterHeight = null;
      this.seed.planter.planterCapacity = null;
      this.seed.planter.planterHoles = null;
      this.seed.planter.planterColor = '';
      this.seed.planter.planterShape = '';
      this.seed.planter.planterStock = null;
      this.seed.planter.planterCost = null;
      this.seed.planter.minCost = null;
      this.seed.planter.maxCost = null;
      
   
  }
  onSearchOptionChange() {
    if (this.selectedSearchOption === 'id' || this.selectedSearchOption === 'type' || this.selectedSearchOption === 'name') {
      this.showDrop = true;
      this.showMethod = false;
      this.showTable = false;
    }
  }
  add() {
    this.selection = 'add';
    this.showMethod = true;
    this.showDrop=false;
  }
  searchHelper() { this.showDrop = false }
  searchHelper2() { this.showDrop = true }
  searchMethod() { this.showMethod = true }
  showDtrue() {
    this.showDrop = true;
  }

  editOrder(seed: any) {
    this.showDrop = false;
    this.showTable=false;
    this.selection = 'update';
    this.showMethod = true;
    this.seed = { ...seed };
    this.responseMsg = '';
  }


 

  
  addToCart(seed: any){
    CurrentUser.setSeedCost(CurrentUser.getSeedCost()+seed.cost);
    this.responseMsg ='Added to cart';
  }


  updateSeed() {
    this.selection = 'update';
    this.showDrop=false;
    this.showTable = true;
    this.seedService.updateSeed(this.seed).subscribe(
      (updateSeed) => {
        this.seedList = [];
        this.seedList.push(updateSeed);
        console.log('updated Seed ', updateSeed);
        this.responseMsg = 'Seed Updated Successfully !';
       
        this.resetForm();

      },
      error => {
        console.error('error updating seed', error);
      }
    );
  }
  searchSeedByType() {

    this.seedService.viewAllSeedByType(this.seed.typeOfSeed).subscribe(
      (data: any) => {
        this.responseMsg = 'Seed Type Found';
        console.log(data);
        this.seedList = data;
        this.showTable = true;
        this.showMethod = false;
        this.showDrop = true;
        this.resetForm();
      },
      error => {
        this.responseMsg = 'Please Enter Valid Seed Type';
        this.showTable = false;
        console.error(error)
      }
    );
  }
  viewAllSeeds() {
    this.seedService.viewAllSeeds().subscribe(
      data => {
        console.log(data);
        this.seedList = data;
        this.showMenu=false;
        this.showTable = true;
        this.resetForm();
      },
      error => console.error(error)
    );
  }
  searchSeed() {

    this.seedService.viewSeedById(this.seed.seedId).subscribe(
      data => {

        this.seedList = [];
        this.seedList.push(data);
        this.responseMsg = 'Seed Id Found';
        console.log(data);
        this.showDrop = true;
        this.showTable = true;
        this.showMethod = false;
        this.resetForm();

      },
      error => {
        this.responseMsg = 'Please Enter Valid Seed Id';
        this.showTable = false;
        console.error(error)
      }
    );
  }

  deleteSeedById(seedId: any) {

    this.seedService.deleteSeed(seedId).subscribe(
      data => {
        this.responseMsg = 'Seed Id ' + seedId + ' Successfully deleted';
        console.log(data);
        this.seedList = this.seedList.filter(p => p.seedId !== seedId);
        this.resetForm();

      },
      error => {
        this.responseMsg = 'Please Enter Valid Seed Id';
        console.error(error);
      }
    );
  }

  addNewSeed() {

    this.showMethod = true;

    this.seed.planter = this.planter;
    this.seedService.addSeed(this.seed).subscribe(
      data => {
        this.seedList = [];
        this.seedList.push(data);
        this.responseMsg = 'Seed ID ' + data.seedId + ' Added Successfully.';
        console.log(data);
        this.resetForm();
      },
      error => {
        this.responseMsg = 'Please enter valid details';
        console.log(error);
      }
    );
  }
  searchSeedByCommonName() {
    this.showTable = true;
    this.seedService.viewSeedByName(this.seed.commonName).subscribe(
      (data: any) => {
        this.responseMsg = 'Seed Common Name Found';
        console.log(data);
        this.seedList = data;
       
        this.showMethod = false;
        this.showDrop = true;
        this.resetForm();
      },
      error => {
        this.responseMsg = 'Please Enter Valid Seed Common Name';
        this.showTable = false;
        console.error(error)
      }
    );
  }
}

















