import { AbstractControl} from "@angular/forms";


export function checkPassoword(control: AbstractControl): {[key:string]:boolean} | null{
     const firstpassword = control.get('password');
     const secondpassword = control.get('confirmpassword');
    return firstpassword && secondpassword && firstpassword.value !== secondpassword.value?{'mismatch':true}:null


}