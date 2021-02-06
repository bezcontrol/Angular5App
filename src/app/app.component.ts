import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  time: Date;
  notes: any;
  timer!: NodeJS.Timeout;

  constructor() {
    this.time = new Date();
    this.notes = [
      {
        'author': 'Name1',
        'message': 'message1'
      },
      {
        'author': 'Name2',
        'message': 'message2'
      },
      {
        'author': 'Name3',
        'message': 'message3'
      }
    ];
  }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
