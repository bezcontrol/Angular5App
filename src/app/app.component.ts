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
  noteAuthor: string = '';
  noteTitle: string = '';

  constructor() {
    this.time = new Date();
    this.notes = [
      {
        'author': 'Name1',
        'title': 'Title1',
        'message': 'message1'
      },
      {
        'author': 'Name2',
        'title': 'Title2',
        'message': 'message2'
      },
      {
        'author': 'Name3',
        'title': 'Title3',
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

  showNote($event: MouseEvent, note: any) {
    this.noteAuthor = note.author;
    this.noteTitle = note.title;
    note.highlight = !note.highlight;
  }

  clearNoteAuthor($event: KeyboardEvent) {
    this.noteAuthor = '';
  }

  clearNoteTitle($event: KeyboardEvent) {
    this.noteTitle = '';
  }
}
