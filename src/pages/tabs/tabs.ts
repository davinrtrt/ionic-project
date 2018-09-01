import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';
import { LibraryPage } from '../library/library';
import { FavoritePage } from '../favorite/favorite';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  template:`
    <ion-tabs>
      <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
      <ion-tab [root]="favoritesPage" tabTitle="Favorites" tabIcon="star"></ion-tab>
    </ion-tabs>

  `
})
export class TabsPage {
  libraryPage = LibraryPage;
  favoritesPage = FavoritePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
