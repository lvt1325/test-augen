import { Injectable } from '@angular/core';
import { DeliveryMethodNames } from './delivery-factor';
import { DeliveryMethodInterface, DeliveryServiceFactory } from './delivery-method';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor() { }

  public getAllAvailableShippingMethods(monthIndex: number = -1) : DeliveryMethodInterface[] {
    let shippingMethods : DeliveryMethodInterface[] = [];
    for (let method in DeliveryMethodNames) {
      shippingMethods.push(this.requestShipping(DeliveryMethodNames[method], monthIndex));
    }
    return shippingMethods;
  }

  public requestShipping(methodName: DeliveryMethodNames, monthIndex: number = -1){
    return DeliveryServiceFactory.createDeliveryMethod(methodName, monthIndex);
  }

}