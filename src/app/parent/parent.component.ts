import { Component, OnInit } from '@angular/core';
import { computeStyle } from '@angular/animations/browser/src/util';
import * as moment from 'moment';
declare const $:any
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parent:boolean = false;
  todo:string = '';
  clickMessage:string = '';
  name:string;
  email:string;
  message:string; 
  constructor() { 
   setInterval(()=>{
     this.getTime =moment().format('h:mm:ss');
   },1)
  }

  ngOnInit() {
  }
  

  showInput() { 
    this.parent = !this.parent
  }

  onSubmit() {
    console.log(this.todo);
  }

  public laptops = [
    {name: 'lenovo', ram:'2GB'},
    {name: 'HP', ram:'1GB'},
    {name: 'Dell', ram:'10GB'},
  ]

  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
  
  onClickMe():void {
    this.clickMessage = 'hello clicked';
  }

  processForm():void {
    const allInfo = `Gas name is ${this.name}. Gas email id is ${this.email}. Gas Messages is ${this.message}`;
    alert(allInfo);
  }

  getTime = moment().format('h:mm:ss');


  public setting():void {
    $('.settingArea').slideToggle();
  }
  

}
