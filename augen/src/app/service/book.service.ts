import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks(textSearch: string, startIndex: number = 0) : Observable<BookResponse>{
    return this.http.get<BookResponse>(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${textSearch}+intitle:${textSearch}&startIndex=${startIndex}&maxResults=40`);
  }

  getBookById(id: string) : Observable<any> {
    return this.http.get<any>(`https://www.googleapis.com/books/v1/volumes/${id}`);
  }
}


export class Book {
  accessInfo: any;
  etag: string;
  id: string;
  kind: string;
  saleInfo: any;
  searchInfo: any;
  selfLink: string;
  volumeInfo: {
    authors: string[];
    allowAnonLogging: boolean;
    canonicalVolumeLink: string;
    categories: string[];
    contentVersion: string;
    description: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    industryIdentifiers: any[];
    infoLink: string;
    language: string;
    maturityRating: string;
    pageCount: number;
    panelizationSummary: any;
    previewLink: string;
    printType: string;
    publishedDate: string;
    readingModes: any;
    subtitle: string;
    title: string;
  }
}

export class BookResponse {
  kind: string;
  totalItems: number;
  items: Book[];
}
