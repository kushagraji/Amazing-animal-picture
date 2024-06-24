import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private url = environment.apiUrl + '/cart';
  private urlCheckOut = environment.apiUrl + '/checkout';
  constructor(private http: HttpClient) {}

  addToCart(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, product);
  }

  getCartItems(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  clearCart(): Observable<void> {
    return this.http.delete<void>(this.url);
  }

  checkOut(checkOutProduct: Product[]): Observable<void> {
    return this.http.post<void>(this.urlCheckOut, checkOutProduct);
  }
}
