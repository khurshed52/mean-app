import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[blueColored]'
})
export class BlueColorDirective {

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.color = '#434343';
   }

}
