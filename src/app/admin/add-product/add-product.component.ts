import { Component, OnInit } from '@angular/core';
import { Product } from '../../Product';
import { ProductService } from '../../product.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 product: Product = new Product();
  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addProduct(){
    this.productService.addProduct(this.product).subscribe(Data => {
      this.router.navigateByUrl('/admin/list');
    })
    //console.log(this.product);
  }
}