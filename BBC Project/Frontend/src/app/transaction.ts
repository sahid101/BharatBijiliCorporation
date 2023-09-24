import { Customer } from "./customer";
import { PaymentMethods } from "./payment-methods";

export class Transaction {
        tId!: number;
        unitConsumption!: number;
        totalAmount!: number;
        rate!: number;
        referenceNumber!: string;
        startDate!: string;
        endDate!: string;
        paymentMethods!: PaymentMethods;
        customer!: Customer;
}
