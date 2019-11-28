import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'v-line',
  templateUrl: './v-line.component.html',
  styleUrls: ['./v-line.component.scss']
})
export class VLineComponent implements OnInit {
  @Input() height = 2;
  styles = 'height : 2px';
  constructor() { }

  ngOnInit() {
    this.styles = 'height : ' + this.height + 'px';
  }

}
