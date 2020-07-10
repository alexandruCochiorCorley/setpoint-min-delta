import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: [ 'home.scss' ],
})
export class HomePage {

  spMin = 20;
  spMax = 23;

  spMaxForced = false;
  spMinForced = false;

  minSpDelta = 2;
  max = 28;
  min = 18;

  constructor(public navCtrl: NavController) {

  }

  modifyMinSP(amount) {
    this.spMin = this.clampNumber((this.spMin + amount), this.min, (this.max - this.minSpDelta));
    while ((this.spMax - this.spMin) < this.minSpDelta) {
      this.spMax = this.clampNumber((this.spMax + 1), this.min, this.max);
      this.spMaxForced = true;
    }
    setTimeout(() => this.spMaxForced = false, 250);
  }

  modifyMaxSP(amount) {
    this.spMax = this.clampNumber((this.spMax + amount), (this.min + this.minSpDelta), this.max);
    while ((this.spMax - this.spMin) < this.minSpDelta) {
      this.spMin = this.clampNumber((this.spMin - 1), this.min, this.max);
      this.spMinForced = true;
    }
    setTimeout(() => this.spMinForced = false, 250);
  }

  clampNumber(num, a, b) {
    return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
  }
}
