import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-component',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  formGroupProduct: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: ProductServiceService ) {

    this.formGroupProduct = formBuilder.group({
      id: [''],
      name: [''],
      description: [''],
      price: ['']
    });

  }
  ngOnInit(): void {
    this.service.getAllProducts().subscribe(
      {
        next: json => this.products = json, 
      }
    );
  }

  save() {
    this.service.saveProduct(this.formGroupProduct.value).subscribe(
    {
      next: json =>
        { 
          this.products.push(json);
          this.formGroupProduct.reset();
        }
    }
  )

    this.products.push(this.formGroupProduct.value);
    this.formGroupProduct.reset();
  }
}