import { Component, OnInit } from '@angular/core';
import { Book } from '../service/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book: Book;
  constructor() { }

  ngOnInit(): void {
  }

}
