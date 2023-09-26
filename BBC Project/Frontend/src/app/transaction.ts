import { Customer } from "./customer";

export class Transaction {
        tId!: number;
        unitConsumption!: number;
        totalAmount!: number;
        rate!: number;
        referenceNumber!: string;
        startDate!: string;
        endDate!: string;
        customer!: Customer;
}
