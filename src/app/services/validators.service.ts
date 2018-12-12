import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  ValidatorName({ value }: FormControl): ValidationErrors | null {
    const valid = /^[a-zA-Z]*$/.test(value);
    if (!valid) {
      return { message: 'Only letters!' };
    }
    return null;
  }

  ValidatorEmail({ value }: FormControl): ValidationErrors | null {
    const valid = /(\w(=?@)\w+\.{1}[a-zA-Z]{2,})/i.test(value);
    if (!valid) {
      return { message: 'Incorrect!' };
    }
    return null;
  }

  ValidatorPassword({ value }: FormControl): ValidationErrors | null {
    if (value.length < 6) {
      return { message: 'More then 6!' }
    }
    return null;
  }
}

