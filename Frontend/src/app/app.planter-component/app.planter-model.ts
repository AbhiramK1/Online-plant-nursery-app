export class Planter {
    planterId?: any;
    planterHeight: any;
    planterCapacity: any;
    planterHoles: any;
    planterColor: any;
    planterShape!: any;
    planterStock: any;
    planterCost: any;
    minCost:any;
    maxCost:any;
    planter!:Planter;
    setPlanter(planter: Planter): void {
        this.planter = planter;
      }
     
       getPlanter(): Planter {
        return this.planter;
      }
    getPlanterId(): any {
        return this.planterId;
    }

    setPlanterId(value: any) {
        this.planterId = value;
    }

    // Getter and Setter for planterHeight
    getPlanterHeight(): any {
        return this.planterHeight;
    }

    setPlanterHeight(value: any) {
        this.planterHeight = value;
    }
    getplanterCapacity(): any {
        return this.planterCapacity;
    }

    setplanterCapacity(value: any) {
        this.planterCapacity = value;
    }

    // Getter and Setter for planterHoles
    getplanterHoles(): any {
        return this.planterHoles;
    }

    setplanterHoles(value: any) {
        this.planterHoles = value;
    }

    // Getter and Setter for planterColor
    getplanterColor(): any {
        return this.planterColor;
    }

    setplanterColor(value: any) {
        this.planterColor = value;
    }

    // Getter and Setter for planterShape
    getplanterShape(): any {
        return this.planterShape;
    }

    setplanterShape(value: any) {
        this.planterShape = value;
    }

    // Getter and Setter for planterStock
    getplanterStock(): any {
        return this.planterStock;
    }

    setplanterStock(value: any) {
        this.planterStock = value;
    }

    // Getter and Setter for planterCost
    getplanterCost(): any {
        return this.planterCost;
    }

    setplanterCost(value: any) {
        this.planterCost = value;
    }

    // Getter and Setter for minCost
    getMinCost(): any {
        return this.minCost;
    }

    setMinCost(value: any) {
        this.minCost = value;
    }

    // Getter and Setter for maxCost
    getMaxCost(): any {
        return this.maxCost;
    }

    setMaxCost(value: any) {
        this.maxCost = value;
    }
}


