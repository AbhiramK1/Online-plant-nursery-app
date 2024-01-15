export class Order {
  
  
  bookingOrderId: any;
  orderDate: any;
  plantCost: any;
  seedCost: any;
  planterCost: any;
  status: 'active' | 'cancelled' | undefined;
  transactionMode: any;
  totalCost: any;
  isDeleted: any;
 
  setPlanterCost(planterCost: any) {
    this.planterCost=planterCost;
    
  }
  setPlantCost(plantCost: any) {
    this.plantCost=plantCost;
  }
  setSeedCost(seedCost: any) {
    this.seedCost=seedCost;
  }
  
 
}
