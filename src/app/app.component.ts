import { Component, OnInit } from '@angular/core';

// import { Products } from './products';
import { ProductsService } from './products.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
// New Data
  public IdsList: Array<string>;

  public selectedProductID: any;

  public productStructure: any;

  public productsToShow: Array<any>;

  public product1: any;

  public product2: any;

  public currentlyActive: Array<string> = [];

  public products: Array<any> = [];

  public lastActiveIdIndex;

  public lastActiveProductIndex;

//
/**
 * 1st: disable already selected product
 * 2nd: show differences should work
 * 3rd: Sow message
 * 4th: on remove all fields must be there but empty
 */
  productsList: Array<any>;

  productIds: any = [];

  is1stProductActive = true;

  is2ndProductActive = true;

  currentProduct1ID: any;

  currentProduct2ID: any;

  activeProduct1: any;

  activeProduct2: any;

  checkDifferences = false;

  message: string;

  isSelected = false;

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
      this.IdsList = list;
    });
    this.updateMessage();
  }

  receiveProductID($event) {
    this.selectedProductID = $event;
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

  newSelectedProduct($event, position) {
    // Remove this if BAD CODE
    if (position === 1) {
      this.selectedProductID = $event;
      this.product1 = this.getProduct(this.selectedProductID);
      this.productsService.addActiveID(this.selectedProductID);
    } else {
    this.selectedProductID = $event;
    this.product2 = this.getProduct(this.selectedProductID);
    this.productsService.addActiveID(this.selectedProductID);
    }
  }

  setDefaultActiveProducts() {
    if (this.productsList.length > 1) {
      this.currentlyActive = [];
      this.products = [];
      for (let i = 0; i < 2; i++) {
        this.products.push(this.productsList[i]);
        this.currentlyActive.push(this.productsList[i].id);
      }
      this.productStructure = this.products[0];
    }
    // this.productStructure = this.productsList[0];
    // this.product1 = this.productsList[0];
    // this.product2 = this.productsList[1];
    // this.productsToShow.push();

    // this.activeProduct1 = this.productsList[0];
    // this.activeProduct2 = this.productsList[1];
    // this.currentProduct1ID = this.productsList[0].id;
    // this.currentProduct2ID = this.productsList[1].id;
  }

  x($event) {
    const y = $event;
    this.currentlyActive.push(y);
    this.currentlyActive.splice(this.lastActiveIdIndex, 0, y);
    const yProduct = this.getProduct(y);
    // this.products.push(yProduct);
    this.products.splice(this.lastActiveProductIndex, 0, yProduct);
  }

  del(id) {
    const x = this.currentlyActive.indexOf(id);
    if (x !== -1) {
      this.currentlyActive.splice(x, 1);
      this.lastActiveIdIndex = x;
    } // removed from 1 or index position add it 1 or index only
    const z = this.getProduct(id);
    const y = this.products.indexOf(z);
    if (y !== -1) {
      this.products.splice(y, 1);
      this.lastActiveProductIndex = y;
    }
    // (x !== -1) ? this.currentlyActive.splice(x, 1) ;
  }

  reciveDel($event) {
    this.del($event);
  }

  oldselectedProduct(id, location) {
    if (location === 1) {
      this.currentProduct1ID = id;
      this.activeProduct1 = this.getProduct(id);
      console.log(this.activeProduct1);
      this.is1stProductActive = true;
    } else {
      this.currentProduct2ID = id;
      this.activeProduct2 = this.getProduct(id);
      this.is2ndProductActive = true;
    }
    this.updateMessage();
    this.isAlreadySelected(id);
  }

  newAlreadySelected($event) {
    if (this.currentProduct1ID === $event || this.currentProduct2ID === $event) {
      return true;
    }
  }

  isItSelected($event) {
    const isSelected = this.isAlreadySelected($event);
  }

  isAlreadySelected(id) {
    if (this.currentProduct1ID === id || this.currentProduct2ID === id) {
      // this.isSelected = true;
      return true;
    }
  }

  private getProduct(id) {
    return this.productsList.find(item => item.id === id);
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
    if (e.target.checked) {
      this.checkDifferences = true;
    } else {
      this.checkDifferences = false;
    }
  }
}

