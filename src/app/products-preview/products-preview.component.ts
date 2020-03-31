import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products-preview',
  templateUrl: './products-preview.component.html',
  styleUrls: ['./products-preview.component.scss']
})
export class ProductsPreviewComponent {

  @Input() formState: any;

  valueMoreThen(value: string, amount: number): boolean {

    if (!value || !amount) {
      return false;
    }

    const lastNum = value.match(/[^-]*$/);
    const numVal = lastNum[0].replace('+', '');

    if (!isNaN(+numVal) && !isNaN(+amount)) {
      return +numVal > +amount;
    }
    return false;
  }

  valueLessThen(value: string, amount: number): boolean {

    if (!value || !amount) {
      return false;
    }

    const lastNum = value.match(/[^-]*$/);
    const numVal = lastNum[0].replace('+', '');

    if (!isNaN(+numVal) && !isNaN(+amount)) {
      return +numVal < +amount;
    }
    return false;
  }

}
