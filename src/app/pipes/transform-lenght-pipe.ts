import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformLenght',
  pure: true,
})
export class TransformLenghtPipe implements PipeTransform {
  transform(value: string, textLength: number): string {
    if (value.length > textLength) {
      const textTransform: string[] = [];
      for (let i = 0; i < textLength; i++) {
        textTransform.push(value[i]);
      }
      return textTransform.join('') + '...';
    } else {
      return value;
    }
  }
}
