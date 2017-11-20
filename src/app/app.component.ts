import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

declare const window: any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(
    platform: Platform,
    mobileAccessibility: MobileAccessibility,
    statusBar: StatusBar, 
    splashScreen: SplashScreen
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      mobileAccessibility.usePreferredTextZoom(true);
    });
  }
}

