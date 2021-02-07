import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-note-item',
  templateUrl: './single-note-item.component.html',
  styleUrls: ['./single-note-item.component.css'],
  inputs: ['note']
})
export class SingleNoteItemComponent implements OnInit {
  note: any;

  constructor() { }

  ngOnInit(): void {
  }

}
