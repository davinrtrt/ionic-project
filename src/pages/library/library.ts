import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import quotes from '../../data/quotes';
import { Quote } from '../../data/quotes.interface';


@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  quoteCollection: {
    category: string, 
    quotes:Quote[], 
    icon: string
  } [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.quoteCollection = quotes;
    console.log(this.quoteCollection);
  }

}
