import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const ssBricksAnimate = function() {
      const animateEl = $('.animate-this');
      setTimeout(function() {
        animateEl.each(function(ctr) {
            const el = $(this);

            setTimeout(function() {
              el.addClass('animated fadeInUp');
            }, ctr * 200);

        });
      }, 200);
    };
    ssBricksAnimate();
  }

}
