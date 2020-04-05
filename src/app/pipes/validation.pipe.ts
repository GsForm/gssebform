import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validation'
})
export class ValidationPipe implements PipeTransform {

  transform(value: any, ...args: any[]): boolean {
    if (value && args && args.length) {
      return args.every(arg => {
        const validationFn = arg[0];
        const fieldToValid = arg[1];
        const validationRule = arg[2];

        return validationFn(value[fieldToValid], validationRule);
      });
    }
    return false;

  }

}
