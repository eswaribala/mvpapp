import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'UserFilter'
})
export class UserPipe implements PipeTransform {

  transform(value: any, letter: string): any {
    return value.filter(obj => obj.name.toUpperCase().includes(letter.toUpperCase()));
  }

}
