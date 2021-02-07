import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { ClockComponent } from './clock/clock.component';
import { NoteItemsComponent } from './note-items/note-items.component';
import { SingleNoteItemComponent } from './single-note-item/single-note-item.component';
import { SearchNotePipe } from './search-note.pipe';
import { NoteDetailsComponent } from './note-details/note-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    NoteItemsComponent,
    SingleNoteItemComponent,
    SearchNotePipe,
    NoteDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
