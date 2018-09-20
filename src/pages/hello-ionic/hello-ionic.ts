import { Component } from '@angular/core';
import  {DjangoProvider} from '../../providers/django/django';
import { Http } from '@angular/http';
import { Backlight } from '@ionic-native/backlight';
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})

export class HelloIonicPage {

  constructor(private djangoProvider:DjangoProvider,private backlight: Backlight) {
	// this.djangoProvider.languages.subscribe(
 //  		res=>{
 //  			console.log(res);
 //  		},
 //    	(error) => {
 //        	console.log(error);
 //       	}
 //    );

  }
  	onlight()
	{
		console.log("ONN");
		this.backlight.on().then(() => console.log('backlight on'));
	}
  	offlight()
	{
		console.log("OFF");
		this.backlight.off().then(() => console.log('backlight off'));
	}
}
