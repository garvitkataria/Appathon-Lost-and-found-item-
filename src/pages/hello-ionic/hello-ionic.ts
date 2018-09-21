import { Component } from '@angular/core';
import  {DjangoProvider} from '../../providers/django/django';
import { Http } from '@angular/http';
import { Backlight } from '@ionic-native/backlight';
import { Flashlight } from '@ionic-native/flashlight';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';
import { CallNumber } from '@ionic-native/call-number';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})


export class HelloIonicPage {
location = 
{
	latitude : '',
	longitude : ''
};


  constructor(private callNumber: CallNumber, private geolocation: Geolocation,private djangoProvider:DjangoProvider,private backlight: Backlight, public camera: Camera, private flashlight: Flashlight, private backgroundGeolocation: BackgroundGeolocation,private nativeAudio: NativeAudio) {
	// this.djangoProvider.languages.subscribe(
 //  		res=>{
 //  			console.log(res);
 //  		},
 //    	(error) => {
 //        	console.log(error);
 //       	}
 //    );
 		this.nativeAudio.preloadSimple('uniqueId1', 'Internal storage/Download/1.mp3').then(
 			(onSuccess)=>{console.log("successAudio",onSuccess)}, 
 			(onError)=>{console.log("ErrorAudio",onError)});
  }



  

  	onlight()
	{
		console.log("ONN");
		//this.backlight.on().then(() => console.log('backlight on'));
		this.flashlight.switchOn();
		this.geolocation.getCurrentPosition().then((resp) => {
		 console.log(resp.coords.latitude);
		 console.log(resp.coords.longitude);
		 this.location.latitude = String(resp.coords.latitude);
		 this.location.longitude = String(resp.coords.longitude);

		}).catch((error) => {
			this.location.latitude = '0';
		 this.location.longitude = '0';
		  console.log('Error getting location', error);
		});

		this.nativeAudio.play('uniqueId1').then(
			(onSuccess)=>{console.log("successAudio",onSuccess)}, 
 			(onError)=>{console.log("ErrorAudio",onError)}
 			);

		
	}
  	offlight()
	{
		console.log("OFF");
		//this.backlight.off().then(() => console.log('backlight off'));
		this.flashlight.switchOff();
		//this.backgroundGeolocation.stop();
	}
	togglelight()
	{
		console.log("toggle");
		//this.backlight.off().then(() => console.log('backlight off'));
		this.flashlight.toggle();
		this.callNumber.callNumber("7014156060", true)
	  .then(res => console.log('Launched dialer!', res))
	  .catch(err => console.log('Error launching dialer', err));
	}
  
}
