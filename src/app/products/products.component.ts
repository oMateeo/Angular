import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { PRODUCTS } from '../product-list';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  products = PRODUCTS;
  selectedProduct: Product;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(product: Product): void{
    this.selectedProduct = product;
  }
}
