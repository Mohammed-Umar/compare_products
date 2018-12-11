import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: any;

  @Input() productIds: Array<any>;

  @Output() selectedProductID = new EventEmitter<string>();

  @Output() removeProduct = new EventEmitter<string>();

  @Output() checkIdIfSelected = new EventEmitter<string>();

  public isProductActive = true;

  constructor(private service: ProductsService) { }

  ngOnInit() {
  }

  productSelection(id) {
    this.selectedProductID.emit(id);
    this.isProductActive = true;
  }

  removeItem(id) {
    this.removeProduct.emit(id);
    // this.service.updateActiveID(id);
    this.isProductActive = false;
  }

  // isAlreadySelected(id) {
  //   return this.service.isAlreadySelected(id);
  //   // return true;
  // }

  isAlreadySelected(id) {
    this.checkIdIfSelected.emit(id);
  }

}
