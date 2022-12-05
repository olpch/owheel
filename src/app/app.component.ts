import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'spinwheels';
  defColor = '#404040';
  options = [
    {picture: 'omar', color: '#f24', label: 'Omar A'},
    {picture: 'cathe', color: '#9320b2', label: 'Cathe'},
    {picture: 'olee', color: '#20b2aa', label: 'Lee'},
    {picture: 'yeral', color: '#d63e92', label: 'Yeral'},
    {picture: 'yohan', color: '#daa520', label: 'Yohan'},
    {picture: 'js', color: '#ff7f50', label: 'JS'},
    {picture: 'victor', color: '#4169e1', label: 'Victor'},
  ];
  pos = this.ajust;
  sw = false;
  temp: any = null;

  ngAfterViewInit() {
    this.movewheel();
  }

  get ajust() {
    return ((this.degs/2)*(this.sizeOption/100));
  } 
  
  getOption() {
    const deg = Math.abs((this.pos-this.ajust)%360);
    /*console.log(
      this.sizeOption, this.degs, ajust, deg/this.degs
    );*/
    return Math.trunc(deg/this.degs);
  }

  get degs () {
    return 360 / this.options.length;
  }

  get selected() {
    return this.options[this.getOption()] || {};
    
  }

  get sizeOption() {
    return (this.degs/.75);
  }

  movewheel()  {
    const wheel: any = document.querySelector('.wheel');
    wheel.style.transform = `rotate(${this.pos}deg)`;
  }

  start() {
    this.sw = false;
    const deg = Math.ceil(Math.random() * 3600);
    this.pos -= deg;
    this.movewheel();
    setTimeout(() => {
      this.sw = true; 
      if(this.temp?.label !== this.selected?.label){
        this.temp = this.selected;
      } else {
        //this.start();
      }
    }, 5200);
  }
}

