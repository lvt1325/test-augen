import { Component, OnInit } from '@angular/core';
import { Book, BookService } from './service/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'augen';
  books: Book[];

  constructor(private bookService: BookService){}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(res => {
      console.log(res);
      this.books = res.items;
    })
  }
}
