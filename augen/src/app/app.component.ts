import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { Book, BookService } from './service/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'augen';
  books: Book[];

  constructor(private bookService: BookService, private modalService: NzModalService){}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(res => {
      console.log(res);
      this.books = res.items;
    })
  }

  openBookDetail(book: Book){
    let modalRef = this.modalService.create({nzContent: BookDetailComponent});
    modalRef.componentInstance.book = book;
  }
}
