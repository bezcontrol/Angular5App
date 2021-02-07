import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {

  time: Date;
  timer!: NodeJS.Timeout;

  constructor() {
    this.time = new Date();
  }

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

}
