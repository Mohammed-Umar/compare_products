import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
    this.getProducts();
  }

  id: string;
  title: string;
  subtitle: string;
  price: string;
  finalPrice: string;
  totalDiscount: string;
  image: string;
  featuresList: Array<any>;

  private _responce;

  public productsList: Array<any> = [];

  private itemsList: BehaviorSubject<any> = new BehaviorSubject([]);

  public getAllProducts = this.itemsList.asObservable();

  private IDsList: BehaviorSubject<any> = new BehaviorSubject([]);

  public productIDs = this.IDsList.asObservable();

  readonly url: string = 'http://demo9176653.mockable.io/products';

  public getProducts() {
    this._callGetAPI().subscribe(res => {
      this._responce = res;
      const list = this._getProductsList();
      console.log('list::::::::', list);
      return list;
    });
  }

  private _callGetAPI() {
    return this.http.get(this.url).map(res => {
      console.dir(res);
      return res;
    });
  }

  private _buildProducts(key) {
    this.id = key;
    this.title = this._responce.products.compareSummary.titles[key].title;
    this.subtitle = this._responce.products.compareSummary.titles[key].subtitle;
    this.price = this._responce.products.compareSummary.productPricingSummary[key].price;
    this.finalPrice = this._responce.products.compareSummary.productPricingSummary[key].finalPrice;
    this.totalDiscount = this._responce.products.compareSummary.productPricingSummary[key].totalDiscount;
    this.image = this._responce.products.compareSummary.images[key];
    this.featuresList = this._getFeaturesList(this._responce, key);
    this._buildProductJson();
  }

  private _getProductsList() {
    const keys = Object.keys(this._responce.products.compareSummary.titles);
    this.IDsList.next(keys);
    keys.map(elm => {
      console.log(elm);
      this._buildProducts(elm);
    });
    return this.productsList;
  }

  private _getFeaturesList(data, key) {
    const allFeatures: Array<any> = [];
    const featuresList: Array<any> = data.products.featuresList;
    featuresList.map(obj => {
      const featureSet = this._createFeaturesJson(obj, key);
      allFeatures.push(featureSet);
    });
    console.log(allFeatures);
    return allFeatures;
  }

  private _buildProductJson() {
    const product = this._createJson();
    this.productsList.push(product);
    this.itemsList.next(this.productsList);
  }

  private _createJson() {
    return {
      'id': this.id,
      'title': this.title,
      'subtitle': this.subtitle,
      'price': this.price,
      'finalPrice': this.finalPrice,
      'totalDiscount': this.totalDiscount,
      'image': this.image,
      'featuresList': this.featuresList
      // 'features': Features[];
    };
  }

  private _createFeaturesJson(obj, key) {
    const features = obj.features;
    const length = features.length;
    if (length === 4) {
      return {
        'title': obj.title,
        'features': [
          {
            'featureName': features[0].featureName,
            'value': features[0].values[key],
          },
          {
            'featureName': features[1].featureName,
            'value': features[1].values[key]
          },
          {
            'featureName': features[2].featureName,
            'value': features[2].values[key]
          },
          {
            'featureName': features[3].featureName,
            'value': features[3].values[key]
          }
        ]
      };
    }
    return {
      'title': obj.title,
      'features': [
        {
          'featureName': features[0].featureName,
          'value': features[0].values[key],
        },
        {
          'featureName': features[1].featureName,
          'value': features[1].values[key]
        },
        {
          'featureName': features[2].featureName,
          'value': features[2].values[key]
        },
        {
          'featureName': features[3].featureName,
          'value': features[3].values[key]
        },
        {
          'featureName': features[4].featureName,
          'value': features[4].values[key]
        }
      ]
    };
  }
}
