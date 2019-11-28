import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {StoreServiceService} from '../../../store-service.service'
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  constructor(private fb: FormBuilder, private store : StoreServiceService) {
  }

  forms = this.fb.group({
    login: [''],
    password: ['']
  });

  ngOnInit() {

  }

  sendReg() {
    this.store.add(this.forms.get(['login']).value)
    this.store.add(this.forms.get(['password']).value)
    this.store.showList();
  }

}
