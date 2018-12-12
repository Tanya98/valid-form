import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorsService } from 'src/app/services/validators.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public usersList;
  public data;
  public email;
  public password;

  constructor(private formBilder: FormBuilder, private route: Router, private validatosService: ValidatorsService) { }

  ngOnInit() {
    this.usersList = this.formBilder.group({
      firstName: ['', [Validators.required, this.validatosService.ValidatorName, Validators.minLength(3)]],
      lastName: ['', [Validators.required, this.validatosService.ValidatorName, Validators.minLength(3)]],
      email: ['', [Validators.required, this.validatosService.ValidatorEmail]],
      password: ['', [Validators.required, this.validatosService.ValidatorPassword]]
    });
  }

  addData(value) {
    for (let key in value) {
      if (value[key] !== '' && value[key].valid) {
        const user = JSON.stringify(value);
        localStorage.setItem('User', user);
        this.route.navigate(['test']);
      }
    }
  }
}