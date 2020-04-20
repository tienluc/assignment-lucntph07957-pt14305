import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service'
import{ Product } from '../Product'
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
 page = 1;
  pageSize = 3;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }
  products: Product[];
  // products=Data;
  name : string;
  getProducts(){
    this.productService.getProducts().subscribe(Data=>{ this.products=Data})
    // this.products= this.productService.getProducts();
    
  }
  removeItem(id){
    this.productService.removeProduct(id).subscribe(response =>{
      this.products= this.products.filter(products => products.id !==response.id);
    })
    // this.products= this.products.filter(products => products.id !==id);
  }

  search(){
    if(this.name !=""){
      this.products=this.products.filter(res =>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }else if(this.name == ""){
      this.ngOnInit();
    }
    
  }

}
