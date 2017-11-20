import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular/platform/platform';

import { MobileAccessibility } from '@ionic-native/mobile-accessibility';

declare const window: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public zoomLevel: number = 100;

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public mobileAccessibility: MobileAccessibility
  ) {
    this.platform.ready().then(() => {
      this.mobileAccessibility.getTextZoom().then(e => this.zoomLevel = e);
    })
  }

  updateZoom() {
    this.mobileAccessibility.setTextZoom(this.zoomLevel);
  }

}
