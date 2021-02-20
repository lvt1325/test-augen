import { DeliveryMethodNames, DeliveryServiceFactorFactory, DeliveryServiceFactorInterface } from "./delivery-factor";

export class DeliveryServiceFactory {
    public static createDeliveryMethod(method: DeliveryMethodNames, monthIndex: number = -1): DeliveryMethodInterface {
        let deliveryMethod: DeliveryMethodInterface;
        switch (method) {
            case DeliveryMethodNames.Air:
                deliveryMethod = new DeliveryMethodAir(monthIndex);
                break;
            case DeliveryMethodNames.Train:
                deliveryMethod = new DeliveryMethodTrain(monthIndex);
                break;
            case DeliveryMethodNames.Bike:
                deliveryMethod = new DeliveryMethodBike(monthIndex);
                break;
        }
        return deliveryMethod;
    }
}

export class DeliveryMethodInterface {
    baseCost: number;
    methodName: DeliveryMethodNames;
    factor: DeliveryServiceFactorInterface;
    get totalCost() {
        return this.baseCost * 10 * this.factor.factorRate / 10;
    }
}

export class DeliveryMethodBike extends DeliveryMethodInterface {
    baseCost = 5;
    methodName: DeliveryMethodNames = DeliveryMethodNames.Bike;
    factor: DeliveryServiceFactorInterface;
    constructor(monthIndex: number = -1){
        super();
        this.factor = DeliveryServiceFactorFactory.createDeliveryFactor(this.methodName, monthIndex);
    }
}

export class DeliveryMethodTrain extends DeliveryMethodInterface {
    baseCost = 10;
    methodName: DeliveryMethodNames = DeliveryMethodNames.Train;
    factor: DeliveryServiceFactorInterface;
    constructor(monthIndex: number = -1){
        super();
        this.factor = DeliveryServiceFactorFactory.createDeliveryFactor(this.methodName, monthIndex);
    }
}

export class DeliveryMethodAir extends DeliveryMethodInterface {
    baseCost = 20;
    methodName: DeliveryMethodNames = DeliveryMethodNames.Air;
    factor: DeliveryServiceFactorInterface;
    constructor(monthIndex: number = -1){
        super();
        this.factor = DeliveryServiceFactorFactory.createDeliveryFactor(this.methodName, monthIndex);
    }
}