import { Component, Input } from '@angular/core';
import { FormState } from '../models/form-state.model';

@Component({
  selector: 'app-products-preview',
  templateUrl: './products-preview.component.html',
  styleUrls: ['./products-preview.component.scss']
})
export class ProductsPreviewComponent {

  @Input() formState: FormState;

  valueMoreThen(value: string, amount: number): boolean {

    if (value === null || amount === null) {
      return false;
    }

    if (!isNaN(+value) && !isNaN(+amount)) {
      return +value > +amount;
    }
    return false;
  }

  valueLessThen(value: string, amount: number): boolean {

    if (value === null || amount === null) {
      return false;
    }

    if (!isNaN(+value) && !isNaN(+amount)) {
      return +value < +amount;
    }
    return false;
  }

}
