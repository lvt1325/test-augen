import { Component, OnInit } from '@angular/core';
import { Book, BookService } from '../service/book.service';
import { DeliveryMethodInterface } from '../service/delivery/delivery-method';
import { DeliveryService } from '../service/delivery/delivery.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book: Book;
  selectedDeliveryType: DeliveryMethodInterface;
  deliveryTypes : DeliveryMethodInterface[];

  constructor(private deliveryService: DeliveryService, private bookService: BookService) {
  }

  ngOnInit(): void {
    this.deliveryTypes = this.deliveryService.getAllAvailableShippingMethods();
    this.selectedDeliveryType = this.deliveryTypes[0];
  }

  onClickBuy(book: Book, deliveryType: DeliveryMethodInterface) {
    let str = `Buying ${book.volumeInfo.title} shipping via ${deliveryType.methodName} with cost ${deliveryType.totalCost}`;
    alert(str);
  }
}
