import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})

export class HomeComponent {

  @Output() onNotesApp: EventEmitter<any> = new EventEmitter()

  goToNotesApp() {
    localStorage.setItem('notes', 'true')
    this.onNotesApp.next(true)
  }
}