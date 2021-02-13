import { Injectable } from '@angular/core';
import { DeliveryServiceFactorFactory, DeliveryServiceFactorInterface } from './delivery-factor';
import { DeliveryMethodInterface, DeliveryMethodNames, DeliveryServiceFactory } from './delivery-method';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor() { }

  public requestShipping(methodName: DeliveryMethodNames){
    return DeliveryServiceFactory.createDeliveryMethod(methodName);
  }
}