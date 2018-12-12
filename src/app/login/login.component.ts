import { Component, OnInit } from '@angular/core';
import { ValidatorsService } from 'src/app/services/validators.service';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public usersList;
  public email;
  public password;
  constructor(private validatorsService: ValidatorsService, private formBilder: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.usersList = this.formBilder.group({
      email: ['', [Validators.required, this.validatorsService.ValidatorEmail]],
      password: ['', [Validators.required, this.validatorsService.ValidatorPassword]]
    });
    this.checkData();
  }

  checkData() {
    if (localStorage.getItem('User')) {
      const user = JSON.parse(localStorage.getItem('User'));
      this.email = user.email;
      this.password = user.password;
    }
  }
  getStarted() {
    if (this.email && this.password !== '') {
      this.route.navigate(['test']);
      console.log('start');
    }
  }
}
