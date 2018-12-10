import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  product: any;

  message: string;

  is1stProductActive = this.service.is1stProductActive;

  is2ndProductActive = this.service.is2ndProductActive;

  constructor(private service: ProductsService) { }

  ngOnInit() {
    this.product = this.service.getProductFeatures();
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

  showOnlyDifferent(e) {
    if (e.target.checked) {
      this.service.checkDifferences = true;
    } else {
      this.service.checkDifferences = false;
    }
  }

}
