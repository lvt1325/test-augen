import { DeliveryMethodNames } from "./delivery-method";

export class DeliveryServiceFactorFactory {
    public static createDeliveryFactor(deliveryMethod: DeliveryMethodNames, month: number = -1): DeliveryServiceFactorInterface {
        let deliveryFactor: DeliveryServiceFactorInterface;
        if (month == -1) {
            month = new Date().getMonth();
        }
        switch (month) {
            //Jun - Aug
            case 5:
            case 6:
            case 7:
                deliveryFactor = new DeliveryServiceFactor68(deliveryMethod);
                break;
            case 8://Sep
                deliveryFactor = new DeliveryServiceFactor9(deliveryMethod);
                break;
            default://Other
                deliveryFactor = new DeliveryServiceFactorOther(deliveryMethod);
                break;
        }
        return deliveryFactor;
    }
}

export interface DeliveryServiceFactorInterface {
    factor: number;
    factorName: DeliveryFactorNames;
}

export class DeliveryServiceFactorOther implements DeliveryServiceFactorInterface {
    factor: number = 1;
    factorName: DeliveryFactorNames.Other;

    constructor(deliveryMethod: DeliveryMethodNames) {
        switch (deliveryMethod) {
            case DeliveryMethodNames.Air:
                this.factor = 1;
                break;
            case DeliveryMethodNames.Train:
                this.factor = 1;
                break;
            case DeliveryMethodNames.Bike:
                this.factor = 1;
                break;
        }
    }
}

export class DeliveryServiceFactor68 implements DeliveryServiceFactorInterface{
    factor: number = 1;
    factorName: DeliveryFactorNames.JunToAug;

    constructor(deliveryMethod: DeliveryMethodNames) {
        switch (deliveryMethod) {
            case DeliveryMethodNames.Air:
                this.factor = 0.8;
                break;
            case DeliveryMethodNames.Train:
                this.factor = 0.8;
                break;
            case DeliveryMethodNames.Bike:
                this.factor = 0.5;
                break;
        }
    }
}

export class DeliveryServiceFactor9 implements DeliveryServiceFactorInterface{
    factor: number = 1;
    factorName: DeliveryFactorNames.Sep;

    constructor(deliveryMethod: DeliveryMethodNames) {
        switch (deliveryMethod) {
            case DeliveryMethodNames.Air:
                this.factor = 2;
                break;
            case DeliveryMethodNames.Train:
                this.factor = 1.8;
                break;
            case DeliveryMethodNames.Bike:
                this.factor = 1.5;
                break;
        }
    }
}

export enum DeliveryFactorNames {
    JunToAug = "JunToAug", Sep = "Sep", Other = "Other"
}