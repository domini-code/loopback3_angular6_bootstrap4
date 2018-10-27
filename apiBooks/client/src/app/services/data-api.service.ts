import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

import { BookInterface } from '../models/book-interface';

import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  constructor(private http: HttpClient, private authService: AuthService) { }
  books: Observable<any>;
  book: Observable<any>;
  public selectedBook: BookInterface = {
    id: null,
    titulo: '',
    idioma: '',
    descripcion: '',
    portada: '',
    precio: '',
    link_amazon: '',
    autor: '',
    oferta: ''
  };

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: this.authService.getToken()
  });

  getAllBooks() {
    const url_api = `http://localhost:3000/api/books`;
    return this.http.get(url_api);
  }
  getNotOffers() {
    const url_api = `http://localhost:3000/api/books?filter[where][oferta]=0`;
    return this.http.get(url_api);
  }
  getBookById(id: string) {
    const url_api = `http://localhost:3000/api/books/${id}`;
    return (this.book = this.http.get(url_api));
  }

  getOffers() {
    const url_api = `http://localhost:3000/api/books?filter[where][oferta]=1`;
    return (this.books = this.http.get(url_api));
  }

  saveBook(book: BookInterface) {
    // TODO: obtener token
    // TODO: not null
    const token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/books?access_token=${token}`;
    return this.http
      .post<BookInterface>(url_api, book, { headers: this.headers })
      .pipe(map(data => data));
  }

  updateBook(book) {
    // TODO: obtener token
    // TODO: not null
    const bookId = book.bookId;
    const token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/books/${bookId}/?access_token=${token}`;
    return this.http
      .put<BookInterface>(url_api, book, { headers: this.headers })
      .pipe(map(data => data));
  }

  deleteBook(id: string) {
    // TODO: obtener token
    // TODO: not null
    const token = this.authService.getToken();
    console.log(token);
    const url_api = `http://localhost:3000/api/books/${id}/?access_token=${token}`;
    return this.http
      .delete<BookInterface>(url_api, { headers: this.headers })
      .pipe(map(data => data));
  }
}
