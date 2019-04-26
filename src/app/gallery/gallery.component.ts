import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     $('#weekSlider').owlCarousel({
        loop: false,
        dots:false,
        responsiveClass: true,
        autoplay: false,
        navText: [
          '<i class="fas fa-chevron-left" aria-hidden="true"></i>',
          '<i class="fas fa-chevron-right" aria-hidden="true"></i>'
        ],
        responsive: {
          0: {
            items: 1,
            nav: true,
            dots:false

          },
          600: {
            items: 1,
            nav: false
          },
          1000: {
            items: 1,
            nav: true,
            loop: false
          }
        }
      })

  }

}
