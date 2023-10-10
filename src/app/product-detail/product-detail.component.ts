import { Component, OnInit,  } from '@angular/core';
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  product: Product | undefined;
 

   constructor(
    private route: ActivatedRoute, 
    private cartService: CartService
    ){}
   
   ngOnInit(){
    const routerParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routerParams.get('productId'))

    this.product = products.find(product=> product.id === productIdFromRoute)
   }
   addToCart(product: Product){
    this.cartService.addToCart(product);
    console.log('Tu producto ha sido añadido correctamente');
   }

}
