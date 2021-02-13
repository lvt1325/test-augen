import { DeliveryServiceFactorFactory, DeliveryServiceFactorInterface } from "./delivery-factor";

export class DeliveryServiceFactory {
    public static createDeliveryMethod(method: DeliveryMethodNames): DeliveryMethodInterface {
        let deliveryMethod: DeliveryMethodInterface;
        switch (method) {
            case DeliveryMethodNames.Air:
                deliveryMethod = new DeliveryMethodAir();
                break;
            case DeliveryMethodNames.Train:
                deliveryMethod = new DeliveryMethodTrain();
                break;
            case DeliveryMethodNames.Bike:
                deliveryMethod = new DeliveryMethodBike();
                break;
        }
        return deliveryMethod;
    }
}

export class DeliveryMethodInterface {
    baseCost: number;
    methodName: DeliveryMethodNames;
    factor: DeliveryServiceFactorInterface;
}

export class DeliveryMethodBike implements DeliveryMethodInterface {
    baseCost: 5;
    methodName: DeliveryMethodNames = DeliveryMethodNames.Bike;
    factor: DeliveryServiceFactorInterface;
    constructor(){
        this.factor = DeliveryServiceFactorFactory.createDeliveryFactor(this.methodName);
    }
}

export class DeliveryMethodTrain implements DeliveryMethodInterface {
    baseCost: 10;
    methodName: DeliveryMethodNames = DeliveryMethodNames.Train;
    factor: DeliveryServiceFactorInterface;
    constructor(){
        this.factor = DeliveryServiceFactorFactory.createDeliveryFactor(this.methodName);
    }
}

export class DeliveryMethodAir implements DeliveryMethodInterface {
    baseCost: 20;
    methodName: DeliveryMethodNames = DeliveryMethodNames.Air;
    factor: DeliveryServiceFactorInterface;
    constructor(){
        this.factor = DeliveryServiceFactorFactory.createDeliveryFactor(this.methodName);
    }
}

export enum DeliveryMethodNames {
    Bike = "bike", Train = "train", Air = "Air"
}