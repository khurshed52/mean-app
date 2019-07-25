import { Component, Input, OnInit} from '@angular/core';
import Darkmode from 'darkmode-js';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mean';
  data:string= 'hello parent';
  loading:any

  constructor(private spinner: NgxSpinnerService){
   
  }
  ngOnInit(){
    var options = {
      bottom: '64px', // default: '32px'
      right: 'unset', // default: '32px'
      left: '32px', // default: 'unset'
      time: '0.5s', // default: '0.3s'
      mixColor: '#081B33', // default: '#fff'
      backgroundColor: '#fff',  // default: '#fff'
      buttonColorDark: '#100f2c',  // default: '#100f2c'
      buttonColorLight: '#fff', // default: '#fff'
      saveInCookies: false, // default: true,
      label: '🌓' // default: ''
    }
    
    const darkmode = new Darkmode(options);
    darkmode.showWidget();

    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }
}
