import { AbstractControl ,ValidatorFn} from "@angular/forms";


export function checkForbiddenName(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {'forbidden': {value: control.value}} : null;
    };
  }


