import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'Products.html'
})

export class ProductsComponent implements OnInit {

  lat = 8.988759;
  lng = 38.788968;

  pro(a: string) {

    let x, z;
    x = document.querySelectorAll('.newpdiv11');

    for (let i = 0; i < x.length; i++) {
      x[i].classList.add('hide');
      x[i].classList.remove('show');
    }

    z = document.getElementById(a);
    z.classList.add('show');
    z.classList.remove('hide');

  }

  ngOnInit() {
    this.pro('pdiv1');
  }

  scright() {
    let a;
    a = document.getElementById('newpdiv2');
    a.scrollLeft += 300;
  }

  scleft() {
    let a;
    a = document.getElementById('newpdiv2');
    a.scrollLeft -= 300;
  }
}
