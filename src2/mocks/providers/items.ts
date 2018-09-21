import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {
    let items = [
      {
        "name": "Keys",
        "profilePic": "assets/img/speakers/keys.jpeg",
        "about": "With Rahul",
        "latitude":"33.019222",
        "longitude":"50.01221",
        "date":"2018-09-21T05:38:23.679Z"

      },
      {
        "name": "Wallet",
        "profilePic": "assets/img/speakers/wallet.jpg",
        "about": "Inside Cupboard",
        "latitude":"33.019222",
        "longitude":"50.01221",
        "date":"2018-09-21T05:38:23.679Z"
      },
      {
        "name": "Aviators",
        "profilePic": "assets/img/speakers/glasses.jpg",
        "about": "With Dad",
        "latitude":"33.019222",
        "longitude":"50.01221",
        "date":"2018-09-21T05:38:23.679Z"
      },
      {
        "name": "Boxers",
        "profilePic": "assets/img/speakers/boxers.jpeg",
        "about": "In The Hotel",
        "latitude":"33.019222",
        "longitude":"50.01221",
        "date":"2018-09-21T05:38:23.679Z"
      },
      {
        "name": "Watch",
        "profilePic": "assets/img/speakers/watch.jpg",
        "about": "On The Shelf",
        "latitude":"33.019222",
        "longitude":"50.01221",
        "date":"2018-09-21T05:38:23.679Z"
      },
      {
        "name": "Puppy",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "about": "With Neighbours for 2 days",
        "latitude":"33.019222",
        "longitude":"50.01221",
        "date":"2018-09-21T05:38:23.679Z"
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
