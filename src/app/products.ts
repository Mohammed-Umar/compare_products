
// export class Features {
//     title: string;
//     feature1Name: string;
//     feature2Name: string;
//     feature3Name: string;
//     feature4Name: string;
//     feature5Name: string;
//     feature1Value: string;
//     feature2Value: string;
//     feature3Value: string;
//     feature4Value: string;
//     feature5Value: string;

//     public featuresList: Array<any>;

//     constructor(featureData) {
//         this.title = featureData.title;
//         this.feature1Name = featureData.feature1Name;
//         this.feature2Name = featureData.feature2Name;
//         this.feature3Name = featureData.feature3Name;
//         this.feature4Name = featureData.feature4Name;
//         this.feature5Name = featureData.feature5Name;
//         this.feature1Value = featureData.feature1Value;
//         this.feature2Value = featureData.feature2Value;
//         this.feature3Value = featureData.feature3Value;
//         this.feature4Value = featureData.feature4Value;
//         this.feature5Value = featureData.feature5Value;
//         // this.value = featureData.value;
//         // this._createJson(length);
//     }

//     getList(data, key) {
//         const featuresList: Array<any> = data.products.featuresList;
//         featuresList.map(obj => {
//             const feature = this._createJson(obj, key);
//             this.featuresList.push(feature);
//         });
//         return this.featuresList;
//     }

//     private _createJson(obj, key) {
//         const features = obj.features;
//         const length = features.length;
//         if (length === 4) {
//             return {
//                 'title': obj.title,
//                 'features': [
//                     {
//                         'featureName': features[0].featureName,
//                         'value': features[0].values.key,
//                     },
//                     {
//                         'featureName': features[1].featureName,
//                         'value': features[1].values.key
//                     },
//                     {
//                         'featureName': features[2].featureName,
//                         'value': features[2].values.key
//                     },
//                     {
//                         'featureName': features[3].featureName,
//                         'value': features[3].values.key
//                     }
//                 ]
//             };
//         }
//         return {
//             'title': obj.title,
//             'features': [
//                 {
//                     'featureName': features[0].featureName,
//                     'value': features[0].values.key,
//                 },
//                 {
//                     'featureName': features[1].featureName,
//                     'value': features[1].values.key
//                 },
//                 {
//                     'featureName': features[2].featureName,
//                     'value': features[2].values.key
//                 },
//                 {
//                     'featureName': features[3].featureName,
//                     'value': features[3].values.key
//                 },
//                 {
//                     'featureName': features[4].featureName,
//                     'value': features[4].values.key
//                 }
//             ]
//         };
//     }
// }

// // interface Product {
// //     id: string;
// //     title: string;
// //     subtitle: string;
// //     price: string;
// //     finalPrice: string;
// //     totalDiscount: string;
// //     image: string;
// // }


// export class Products {

//     id: string;
//     title: string;
//     subtitle: string;
//     price: string;
//     finalPrice: string;
//     totalDiscount: string;
//     image: string;

//     private _responce;

//     public productsList: Array<any> = [];

//     private _keys;

//     constructor(data) {
//         this._responce = data;
//         this._fetchIds();
//         this._keys.map(elm => {
//             console.log(elm);
//             this._buildProducts(elm);
//         });
//         // this.features = ;
//         // featureObject = new Features(product.feature);
//         // return this.list;
//     }

//     private _buildProducts(key) {
//         this.id = key;
//         this.title = this._responce.products.compareSummary.titles[key].title;
//         this.subtitle = this._responce.products.compareSummary.titles[key].subtitle;
//         this.price = this._responce.products.compareSummary.productPricingSummary[key].price;
//         this.finalPrice = this._responce.products.compareSummary.productPricingSummary[key].finalPrice;
//         this.totalDiscount = this._responce.products.compareSummary.productPricingSummary[key].totalDiscount;
//         this.image = this._responce.products.compareSummary.images[key];
//         this._buildProductJson();
//     }

//     private _buildProductJson() {
//         const product = this._createJson();
//         this.productsList.push(product);
//     }

//     private _fetchIds() {
//         this._keys = Object.keys(this._responce.products.compareSummary.titles);
//         console.log(this._keys);
//     }

//     // let features: Array<Features>;

//     // let featureObject: Features;

//     private _createJson() {
//         return {
//             'id': this.id,
//             'title': this.title,
//             'subtitle': this.subtitle,
//             'price': this.price,
//             'finalPrice': this.finalPrice,
//             'totalDiscount': this.totalDiscount,
//             'image': this.image,
//             // 'features': Features[];
//         };
//     }

// }


// /*
// product {
//     id: ''
//     title: ''
//     subtitle: ''
//     price: ''
//     finalPrice: ''
//     totalDiscount: ''
//     image: ''
//     feature
//     features: [
//        {
//             title: '',
//             features: [
//                 {
//                     featureName: ''
//                     value: ''
//                 }
//                 {
//                     featureName: ''
//                     value: ''
//                 }
//                 {
//                     featureName: ''
//                     value: ''
//                 }
//             ]
//         }
//         {
//             title: '',
//             {
//                 featureName: ''
//                 value: ''
//             }
//             {
//                 featureName: ''
//                 value: ''
//             }
//             {
//                 featureName: ''
//                 value: ''
//             }
//         }
//         {
//             title: ''
//             {
//                 featureName: ''
//                 value: ''
//             }
//             {
//                 featureName: ''
//                 value: ''
//             }
//             {
//                 featureName: ''
//                 value: ''
//             }
//         }
//     ]
// }
// */
// /*
// {
//   'products': {
//     'featuresList': [
//       {
//         'features': [
//           {
//             'featureName': 'Size',
//             'values': {
//               'TVSF2WYXTKAR7RAF': '108 cm (43)',
//               'TVSF2WYUE4PWNJKM': '80 cm (32)',
//               'TVSE8FMZ9AQMEGC6': '102 cm (40)',
//               'TVSF3J7HUJF5XUBT': '138.71 cm (55)'
//             }
//           },
//           {
//             'featureName': 'Screen Type',
//             'values': {
//               'TVSF2WYXTKAR7RAF': 'LED',
//               'TVSF2WYUE4PWNJKM': 'LED',
//               'TVSE8FMZ9AQMEGC6': 'QLED',
//               'TVSF3J7HUJF5XUBT': 'LED'
//             }
//           },
//           {
//             'featureName': 'HD Technology & Resolution',
//             'values': {
//               'TVSF2WYXTKAR7RAF': 'Full HD, 1920 x 1080 Pixels',
//               'TVSF2WYUE4PWNJKM': 'HD Ready, 1366 x 768 Pixels',
//               'TVSE8FMZ9AQMEGC6': 'Full HD, 1920 x 1080',
//               'TVSF3J7HUJF5XUBT': 'Ultra HD (4K), 3840 x 2160 Pixels'
//             }
//           },
//           {
//             'featureName': '3D',
//             'properties': {
//               'isDifferent': false
//             },
//             'values': {
//               'TVSF2WYXTKAR7RAF': 'No',
//               'TVSF2WYUE4PWNJKM': 'No',
//               'TVSE8FMZ9AQMEGC6': 'No',
//               'TVSF3J7HUJF5XUBT': 'No'
//             }
//           }
//         ],
//         'title': 'Display'
//       },
//       {
//         'features': [
//           {
//             'featureName': 'Smart TV',
//             'values': {
//               'TVSF2WYXTKAR7RAF': 'Yes',
//               'TVSF2WYUE4PWNJKM': 'Yes',
//               'TVSE8FMZ9AQMEGC6': 'Yes',
//               'TVSF3J7HUJF5XUBT': 'Yes'
//             }
//           },
//           {
//             'featureName': 'Curve TV',
//             'values': {
//               'TVSF2WYXTKAR7RAF': 'Yes',
//               'TVSF2WYUE4PWNJKM': 'No',
//               'TVSE8FMZ9AQMEGC6': 'No',
//               'TVSF3J7HUJF5XUBT': 'No'
//             }
//           },
//           {
//             'featureName': 'Touchscreen',
//             'values': {
//               'TVSF2WYXTKAR7RAF': 'Yes',
//               'TVSF2WYUE4PWNJKM': 'No',
//               'TVSE8FMZ9AQMEGC6': 'No',
//               'TVSF3J7HUJF5XUBT': 'No'
//             }
//           },
//           {
//             'featureName': 'Motion Sensor',
//             'values': {
//               'TVSF2WYXTKAR7RAF': 'No',
//               'TVSF2WYUE4PWNJKM': 'No',
//               'TVSE8FMZ9AQMEGC6': 'No',
//               'TVSF3J7HUJF5XUBT': 'No'
//             }
//           },
//           {
//             'featureName': 'Launch Year',
//             'values': {
//               'TVSF2WYXTKAR7RAF': '2018',
//               'TVSF2WYUE4PWNJKM': '2018',
//               'TVSE8FMZ9AQMEGC6': '2015',
//               'TVSF3J7HUJF5XUBT': '2018'
//             }
//           }
//         ],
//         'title': 'General Features'
//       },
//       {
//         'features': [
//           {
//             'featureName': 'Built In Wi-Fi',
//             'properties': {
//               'isDifferent': true
//             },
//             'values': {
//               'TVSF2WYXTKAR7RAF': 'Yes',
//               'TVSF2WYUE4PWNJKM': 'Yes',
//               'TVSE8FMZ9AQMEGC6': 'Yes',
//               'TVSF3J7HUJF5XUBT': 'Yes'
//             }
//           },
//           {
//             'featureName': '3G Dongle Plug and Play',
//             'properties': {
//               'isDifferent': false
//             },
//             'values': {
//               'TVSF2WYXTKAR7RAF': 'No',
//               'TVSF2WYUE4PWNJKM': 'No',
//               'TVSE8FMZ9AQMEGC6': 'No',
//               'TVSF3J7HUJF5XUBT': 'No'
//             }
//           },
//           {
//             'featureName': 'Ethernet (RJ45)',
//             'properties': {
//               'isDifferent': true
//             },
//             'values': {
//               'TVSF2WYXTKAR7RAF': '1',
//               'TVSF2WYUE4PWNJKM': '1',
//               'TVSE8FMZ9AQMEGC6': '0',
//               'TVSF3J7HUJF5XUBT': '1'
//             }
//           },
//           {
//             'featureName': 'Wireless Ready',
//             'properties': {
//               'isDifferent': true
//             },
//             'values': {
//               'TVSF2WYXTKAR7RAF': 'Yes',
//               'TVSF2WYUE4PWNJKM': 'Yes',
//               'TVSE8FMZ9AQMEGC6': 'Yes',
//               'TVSF3J7HUJF5XUBT': 'Yes'
//             }
//           }
//         ],
//         'title': 'Internet Features'
//       }
//     ],
//     'compareSummary': {
//       'images': {
//         'TVSF2WYXTKAR7RAF': 'https://rukminim1.flixcart.com/image/1000/1000/jefzonk0/television/r/a/f/mi-l43m5-ai-original-imaf34hgjzc4xr62.jpeg?q=100',
//         'TVSF2WYUE4PWNJKM': 'https://rukminim1.flixcart.com/image/1000/1000/jefzonk0/television/j/k/m/mi-l32m5-ai-original-imaf34hfqb2fekxx.jpeg?q=100',
//         'TVSE8FMZ9AQMEGC6': 'https://rukminim1.flixcart.com/image/1000/1000/jj367bk0/television/g/c/6/vu-40d6575-original-imaf6qqy4vfneabe.jpeg?q=100',
//         'TVSF3J7HUJF5XUBT': 'https://rukminim1.flixcart.com/image/1000/1000/jgffp8w0/television/u/b/t/iffalcon-55k2a-original-imaf4z2mn6xrxk5f.jpeg?q=100'
//       },
//       'titles': {
//         'TVSF2WYXTKAR7RAF': {
//           'subtitle': null,
//           'title': 'Mi LED Smart TV 4A 108 cm (43)'
//         },
//         'TVSF2WYUE4PWNJKM': {
//           'subtitle': null,
//           'title': 'Mi LED Smart TV 4A 80 cm (32)'
//         },
//         'TVSE8FMZ9AQMEGC6': {
//           'subtitle': '40D6575',
//           'title': 'Vu 102cm (40 inch) Full HD LED TV'
//         },
//         'TVSF3J7HUJF5XUBT': {
//           'subtitle': '55K2A',
//           'title': 'iFFALCON K2A 138.71cm (55 inch) Ultra HD (4K) LED Smart TV'
//         }
//       },
//       'productPricingSummary': {
//         'TVSF2WYXTKAR7RAF': {
//           'finalPrice': '22999.00',
//           'price': '25999.00',
//           'totalDiscount': 11
//         },
//         'TVSF2WYUE4PWNJKM': {
//           'finalPrice': '13999.00',
//           'price': '15999.00',
//           'totalDiscount': 14
//         },
//         'TVSE8FMZ9AQMEGC6': {
//           'finalPrice': '16999.00',
//           'price': '11999.00',
//           'totalDiscount': 11
//         },
//         'TVSF3J7HUJF5XUBT': {
//           'finalPrice': '26999.00',
//           'price': '23999.00',
//           'totalDiscount': 13
//         }
//       }
//     }
//   }
// }
// */

