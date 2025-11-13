import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformLenght',
  pure: true,
})
export class TransformLenghtPipe implements PipeTransform {
  transform(value: string): string {
    if (value.length > 25) {
      const textTransform: string[] = [];
      for (let i = 0; i < 25; i++) {
        textTransform.push(value[i]);
      }
      return textTransform.join('') + '...'; // додаємо три крапки
    } else {
      return value;
    }
  }
}
