import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  
  items = this.cartService.getItems();
constructor(private cartService: CartService){}

removeToCart(product:Product){
  this.items = this.cartService.removeToCart(product);
}

clearCart(){
   this.items =[];
   this.cartService.clearCart();
   console.log('Tu producto ha sido eliminado');
}

}
