import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'merge'
})
export class MergePipe implements PipeTransform {

  transform(arr1: Array<any> = [], arr2: Array<any> = []): any {
    const arr = [];
    if ((Array.isArray(arr1) && arr1.length > 0) && (Array.isArray(arr2) && arr2.length > 0)) {
      arr1.map((elm, i) => {
        arr.push({product1: elm, product2: arr2[i]});
      });
      console.log(arr);
      return arr;
    }
    return null;
  }

}
