import { TestBed } from '@angular/core/testing';
import { DeliveryMethodNames } from './delivery-factor';

import { DeliveryService } from './delivery.service';

describe('DeliveryService', () => {
  let service: DeliveryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //TRAIN
  it('Train in Jan should rate 1', () => {
    let test = service.requestShipping(DeliveryMethodNames.Train, 0);
    test.baseCost = 7;
    expect(test.totalCost).toEqual(7);
  });
  it('Train in Feb should rate 1', () => {
    let test = service.requestShipping(DeliveryMethodNames.Train, 1);
    test.baseCost = 7;
    expect(test.totalCost).toEqual(7);
  });
  it('Train in March should rate 1', () => {
    let test = service.requestShipping(DeliveryMethodNames.Train, 2);
    test.baseCost = 7;
    expect(test.totalCost).toEqual(7);
  });
  it('Train in April should rate 1', () => {
    let test = service.requestShipping(DeliveryMethodNames.Train, 3);
    test.baseCost = 7;
    expect(test.totalCost).toEqual(7);
  });
  it('Train in May should rate 1', () => {
    let test = service.requestShipping(DeliveryMethodNames.Train, 4);
    test.baseCost = 7;
    expect(test.totalCost).toEqual(7);
  });
  it('Train in Jun should rate 0.8', () => {
    let test = service.requestShipping(DeliveryMethodNames.Train, 5);
    test.baseCost = 7;
    expect(test.totalCost).toEqual(5.6);
  });
  it('Train in July should rate 0.8', () => {
    let test = service.requestShipping(DeliveryMethodNames.Train, 6);
    test.baseCost = 7;
    expect(test.totalCost).toEqual(5.6);
  });
  it('Train in Aug should rate 0.8', () => {
    let test = service.requestShipping(DeliveryMethodNames.Train, 7);
    test.baseCost = 7;
    expect(test.totalCost).toEqual(5.6);
  });
  it('Train in Sep should rate 1.8', () => {
    let test = service.requestShipping(DeliveryMethodNames.Train, 8);
    test.baseCost = 7;
    expect(test.totalCost).toEqual(12.6);
  });
  it('Train in Oct should rate 1', () => {
    let test = service.requestShipping(DeliveryMethodNames.Train, 9);
    test.baseCost = 11;
    expect(test.totalCost).toEqual(11);
  });
  it('Train in Nov should rate 1', () => {
    let test = service.requestShipping(DeliveryMethodNames.Train, 10);
    test.baseCost = 11;
    expect(test.totalCost).toEqual(11);
  });
  it('Train in Dec should rate 1', () => {
    let test = service.requestShipping(DeliveryMethodNames.Train, 11);
    test.baseCost = 11;
    expect(test.totalCost).toEqual(11);
  });

  //BIKE
  it('Bike in Jan should rate 1', () => {
    let test = service.requestShipping(DeliveryMethodNames.Bike, 0);
    test.baseCost = 7;
    expect(test.totalCost).toEqual(7);
  });
  it('Bike in Feb should rate 1', () => {
    let test = service.requestShipping(DeliveryMethodNames.Bike, 1);
    test.baseCost = 7;
    expect(test.totalCost).toEqual(7);
  });
  it('Bike in March should rate 1', () => {
    let test = service.requestShipping(DeliveryMethodNames.Bike, 2);
    test.baseCost = 7;
    expect(test.totalCost).toEqual(7);
  });
  it('Bike in April should rate 1', () => {
    let test = service.requestShipping(DeliveryMethodNames.Bike, 3);
    test.baseCost = 7;
    expect(test.totalCost).toEqual(7);
  });
  it('Bike in May should rate 1', () => {
    let test = service.requestShipping(DeliveryMethodNames.Bike, 4);
    test.baseCost = 7;
    expect(test.totalCost).toEqual(7);
  });
  it('Bike in Jun should rate 0.5', () => {
    let test = service.requestShipping(DeliveryMethodNames.Bike, 5);
    test.baseCost = 7;
    expect(test.totalCost).toEqual(3.5);
  });
  it('Bike in July should rate 0.5', () => {
    let test = service.requestShipping(DeliveryMethodNames.Bike, 6);
    test.baseCost = 7;
    expect(test.totalCost).toEqual(3.5);
  });
  it('Bike in Aug should rate 0.5', () => {
    let test = service.requestShipping(DeliveryMethodNames.Bike, 7);
    test.baseCost = 7;
    expect(test.totalCost).toEqual(3.5);
  });
  it('Bike in Sep should rate 1.5', () => {
    let test = service.requestShipping(DeliveryMethodNames.Bike, 8);
    test.baseCost = 7;
    expect(test.totalCost).toEqual(10.5);
  });
  it('Bike in Oct should rate 1', () => {
    let test = service.requestShipping(DeliveryMethodNames.Bike, 9);
    test.baseCost = 11;
    expect(test.totalCost).toEqual(11);
  });
  it('Bike in Nov should rate 1', () => {
    let test = service.requestShipping(DeliveryMethodNames.Bike, 10);
    test.baseCost = 11;
    expect(test.totalCost).toEqual(11);
  });
  it('Bike in Dec should rate 1', () => {
    let test = service.requestShipping(DeliveryMethodNames.Bike, 11);
    test.baseCost = 11;
    expect(test.totalCost).toEqual(11);
  });

  //Air
  it('Air in Jan should rate 1', () => {
    let test = service.requestShipping(DeliveryMethodNames.Air, 0);
    test.baseCost = 7;
    expect(test.totalCost).toEqual(7);
  });
  it('Air in Feb should rate 1', () => {
    let test = service.requestShipping(DeliveryMethodNames.Air, 1);
    test.baseCost = 7;
    expect(test.totalCost).toEqual(7);
  });
  it('Air in March should rate 1', () => {
    let test = service.requestShipping(DeliveryMethodNames.Air, 2);
    test.baseCost = 7;
    expect(test.totalCost).toEqual(7);
  });
  it('Air in April should rate 1', () => {
    let test = service.requestShipping(DeliveryMethodNames.Air, 3);
    test.baseCost = 7;
    expect(test.totalCost).toEqual(7);
  });
  it('Air in May should rate 1', () => {
    let test = service.requestShipping(DeliveryMethodNames.Air, 4);
    test.baseCost = 7;
    expect(test.totalCost).toEqual(7);
  });
  it('Air in Jun should rate 0.8', () => {
    let test = service.requestShipping(DeliveryMethodNames.Air, 5);
    test.baseCost = 7;
    expect(test.totalCost).toEqual(5.6);
  });
  it('Air in July should rate 0.8', () => {
    let test = service.requestShipping(DeliveryMethodNames.Air, 6);
    test.baseCost = 7;
    expect(test.totalCost).toEqual(5.6);
  });
  it('Air in Aug should rate 0.8', () => {
    let test = service.requestShipping(DeliveryMethodNames.Air, 7);
    test.baseCost = 7;
    expect(test.totalCost).toEqual(5.6);
  });
  it('Air in Sep should rate 2', () => {
    let test = service.requestShipping(DeliveryMethodNames.Air, 8);
    test.baseCost = 7;
    expect(test.totalCost).toEqual(14);
  });
  it('Air in Oct should rate 1', () => {
    let test = service.requestShipping(DeliveryMethodNames.Air, 9);
    test.baseCost = 11;
    expect(test.totalCost).toEqual(11);
  });
  it('Air in Nov should rate 1', () => {
    let test = service.requestShipping(DeliveryMethodNames.Air, 10);
    test.baseCost = 11;
    expect(test.totalCost).toEqual(11);
  });
  it('Air in Dec should rate 1', () => {
    let test = service.requestShipping(DeliveryMethodNames.Air, 11);
    test.baseCost = 11;
    expect(test.totalCost).toEqual(11);
  });

});
