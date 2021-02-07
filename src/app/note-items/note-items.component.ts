import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-note-items',
  templateUrl: './note-items.component.html',
  styleUrls: ['./note-items.component.css'],
})
export class NoteItemsComponent implements OnInit {

  selectedNote: any;
  searchText: string = '';
  noteAuthor: string = '';
  noteTitle: string = '';
  notes: any;

  constructor(private http: HttpClient) {
    this.notes = [];
  }

  ngOnInit(): void {
    this.http.get<Object>('../assets/data.json').subscribe(data => {
      this.notes = data;
    });
  }

  showNote($event: MouseEvent, note: any) {
    this.noteAuthor = note.author;
    this.noteTitle = note.title;
    note.highlight = !note.highlight;
    this.selectedNote = note;
  }
}
