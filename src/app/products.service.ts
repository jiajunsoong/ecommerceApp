import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Products[] = [
    {
    id: 1,
    title: 'iPhone 9',
    description: 'An apple mobile which is nothing like apple',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg'
  },{
    id:2,
    title:'iPhone X',
    description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
    price:899,
    discountPercentage:17.94,
    rating:4.44,
    stock:34,
    brand:'Apple',
    category:'smartphones',
    thumbnail:'https://i.dummyjson.com/data/products/2/thumbnail.jpg'
  }];
  
  constructor() { }
}
