import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  constructor(private fb: FormBuilder) {
  }

  forms = this.fb.group({
    login: [''],
    password: ['']
  });

  ngOnInit() {
  }

  sendLogin() {
    window.alert('wysłano');
  }

}
