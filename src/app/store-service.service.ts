import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreServiceService {
  private counter = 0;
  private lista: string[] = [];
  constructor() {

  }

  count() {
    console.log('liczba : ' + this.counter);
    this.counter++;
  }

  showList() {
    console.log(this.lista.toString());
  }

  add(something: string) {
    this.lista.push(something);
  }

}
