import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'compare';

  readonly url: string = 'http://demo9176653.mockable.io/products';

  // products: any  = this.getProducts().subscribe(res => res);

  body: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    return this.http.get(this.url).map(res => { 
      console.dir(res); 
      return res; 
    })
    .subscribe(res => {
      this.body = JSON.stringify(res);
      console.dir(this.body);
    })
  }

  removeProduct() {

  }

  showOnlyDifferent() {

  }
}

interface Products {
  products: object
}
