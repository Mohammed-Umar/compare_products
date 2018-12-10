import { Component, OnInit } from '@angular/core';

// import { Products } from './products';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'compare';

  productsList: Array<any>;

  productIds: any = [];

  is1stProductActive: boolean = true;

  is2ndProductActive: boolean = true;

  currentProduct1ID: any;

  currentProduct2ID: any;

  activeProduct1: any;

  activeProduct2: any;

  checkDifferences: boolean = false;

  message: string;

  isSelected: boolean = false;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getAllProducts.subscribe(items => {
      console.log(items);
      this.productsList = items;
      this.setDefaultActiveProducts();
    });
    this.productsService.productIDs.subscribe(list => {
      console.log(list);
      this.productIds = list;
    })
    this.updateMessage();
  }

  setDefaultActiveProducts() {
    if (this.productsList.length < 2) {
      return null;
    }
    this.activeProduct1 = this.productsList[0];
    this.activeProduct2 = this.productsList[1];
    this.currentProduct1ID = this.productsList[0].id;
    this.currentProduct2ID = this.productsList[1].id;
  }

  updateMessage() {
    if (this.is1stProductActive && this.is2ndProductActive) {
      this.message = 'Two items Selected';
    } else if (
      (this.is1stProductActive === true && this.is2ndProductActive === false) || 
      (this.is2ndProductActive === true && this.is1stProductActive === false)
      ) {
        this.message = 'Add another product to compare';
    } else {
      this.message = 'Select products to compare';
    }
  }

  selectedProduct(id, location) {
    if(location === 1) {
      this.currentProduct1ID = id;
      this.activeProduct1 = this._getProduct(id);
      console.log(this.activeProduct1);
      this.is1stProductActive = true;
    } else {
      this.currentProduct2ID = id;
      this.activeProduct2 = this._getProduct(id);
      this.is2ndProductActive = true;
    }
    this.updateMessage();
    this.isAlreadySelected(id);
  }

  isAlreadySelected(id) {
    if (this.currentProduct1ID === id || this.currentProduct2ID === id) {
      // this.isSelected = true;
      return true;
    }
  }

  private _getProduct(id) {
    return this.productsList.find(item => item.id === id)
  }

  removeItem(item) {
    if (item === 1) {
      this.is1stProductActive = false;
      this.activeProduct1 = null;
      this.currentProduct1ID = null;
    } else {
      this.is2ndProductActive = false;
      this.activeProduct2 = null;
      this.currentProduct2ID = null;
    }
    this.updateMessage();
  }

  showOnlyDifferent(e) {
    if(e.target.checked){
      this.checkDifferences = true;        
    } else {
      this.checkDifferences = false;
    }
  }
}

