import { Component } from '@angular/core';
import * as Products from '../../data.json';
import { IProduct } from './product/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-e-commerce';

  products: IProduct[] = Products;
}
