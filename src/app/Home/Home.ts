import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'Home.html'
})
export class HomeComponent implements OnInit {

  lat = 8.988759;
  lng = 38.788968;
  a = 0;

  slideFn() {
    const x = document.querySelectorAll('.slidediv');
    if (x === undefined || x.length === 0) {
      return;
      for (let i = 0; i < x.length; i++) {

        x[i].classList.add('hide');
        x[i].classList.remove('show');

      }
     /*  console.log(this.a); */
      x[this.a].classList.remove('hide');
      x[this.a].classList.add('show');
      this.a++;
      if (this.a > x.length - 1) {
        this.a = 0;
      }

    }
  }

  ngOnInit() {
    this.slideFn();
    setInterval(() => {
      this.slideFn();
    }, 7500);
  }
}



