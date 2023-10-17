import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[]; //implementar para que el xxx cargue
  constructor(private http: HttpClient) {
    this.items = JSON.parse(localStorage.getItem('items') || '[]');
  }
  //preguntar si items existe en localStorage, si existe crear
  //itemdesde el localStorage, no olvide usar JSOn.parse()
  //si no exite crear items vacias

  addToCart(product: Product){
    this.items.push(product)
    //guardar usando localStorage.setItem('ITEMS', JSON.stringify(this.items) )
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  getItems() {
    return this.items;
  }

  clearCart(){
    this.items = [];
    localStorage.setItem('items', JSON.stringify(this.items));
    return this.items;
  }

  removeToCart(product: Product){
    this.items = this.items.filter(p => p.id != product.id);
    localStorage.setItem('items', JSON.stringify(this.items));
    return this.items;
  }

  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}


