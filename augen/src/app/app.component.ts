import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { Book, BookService } from './service/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'augen';
  books: Book[];
  isDisabledLoadMoreButton = false;
  textSearch: string = 'economic';

  constructor(private bookService: BookService, private modalService: NzModalService) { }

  ngOnInit(): void {
    this.executeSearch(this.textSearch);
  }

  openBookDetail(book: Book) {
    let modalRef = this.modalService.create({ nzContent: BookDetailComponent, nzFooter: null });
    modalRef.componentInstance.book = book;
  }

  onClickLoadMore() {
    this.bookService.getBooks(this.textSearch, this.books.length).subscribe(res => {
      if (res.items?.length) {
        res.items.forEach(i => {
          this.books.push(i);
        })
      } else {
        this.isDisabledLoadMoreButton = true;
      }
    })
  }

  executeSearch(text: string) {
    alert(text);
    this.books = [];
    this.bookService.getBooks(text).subscribe(res => {
      this.books = res.items;
    })
  }
}
