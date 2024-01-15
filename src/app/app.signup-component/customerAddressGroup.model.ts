import { Address } from "../app.customer-component/address.model";
import { Customer } from "../app.customer-component/customer.model";

export class CustomerAddressGroup {
    customer!: Customer;
    address!: Address ;

    constructor(customer: Customer, address: Address){
        this.customer=customer;
        this.address=address;
    }
}  