import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutNames',
  standalone: true,
})
export class CutNamesPipe implements PipeTransform {

  transform(value: string): string {
    const [firstName, LastName] = value.split(" ")
    return firstName[0]+LastName[0];
  }

}
