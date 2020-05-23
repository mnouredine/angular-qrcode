import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'qrgenerator';
  content: string;
  size: string;
  ecc: number;
  init: boolean;
  lds: boolean;
  qrcode: boolean;

  constructor() { }

  ngOnInit(): void {
    this.init = true;
    this.ecc = 4;
  }

  async generate() {
    this.init = false;
    this.lds = true;
    this.qrcode = false;
    await this.delay(1000);
    this.init = false;
    this.lds = false;
    this.qrcode = true;
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  contentChange(value) {
    this.init = true;
    this.lds = false;
    this.qrcode = false;
  }

}
