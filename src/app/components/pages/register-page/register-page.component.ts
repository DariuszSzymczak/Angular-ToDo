import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  forms = this.fb.group({
    login: [''],
    password: ['']
  });

  ngOnInit() {

  }

  sendReg() {
  }

}
