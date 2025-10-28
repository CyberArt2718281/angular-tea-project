import { AbstractControl, ValidationErrors } from '@angular/forms';
export class CustomValidators {
  static phoneValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    const phoneRegex = /^\+?\d{11}$/;
    const digitsCount = control.value.replace(/\D/g, '').length;
    const valid = phoneRegex.test(control.value) && digitsCount === 11;
    return valid ? null : { invalidPhone: true };
  }
  static addressValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    const addressRegex = /^[a-zA-Zа-яА-ЯёЁ0-9\s,'-]*$/;
    const valid = addressRegex.test(control.value);
    return valid ? null : { invalidAddress: true };
  }
  static zipValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    const zipRegex = /^\d{6}$/;
    const valid = zipRegex.test(control.value) && control.value.length === 6;
    return valid ? null : { invalidZip: true };
  }
}
