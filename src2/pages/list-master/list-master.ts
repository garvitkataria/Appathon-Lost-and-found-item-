import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  finaldata={
     profilePic:'',
     name:'',
     about:'',
     latitude:'',
     longitude:'',
     date:''
  };
  currentItems: Item[];
  selectedItem:any;
  constructor(navParams: NavParams,public navCtrl: NavController, public items: Items, public modalCtrl: ModalController) {
    this.currentItems = this.items.query();
    
    // this.currentItems = this.items.query();
    // this.selectedItem = navParams.get('dataSet');
    // for(let i = 0; i <= this.selectedItem.length; i++)
    // {
    //   this.finaldata.profilePic = this.currentItems[i].profilePic;
    //   this.finaldata.name = this.currentItems[i].name;
    //   this.finaldata.about = this.currentItems[i].about;
    //   this.finaldata.latitude = this.selectedItem[i].latitude;
    //   this.finaldata.longitude = this.selectedItem[i].longitude;
    //   this.finaldata.date = this.selectedItem[i].date;

    // }
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
    
  }
}
