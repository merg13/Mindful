/* eslint-disable no-useless-constructor */
import { Component } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private storage: LocalStorageService) {
  }

  doSomething = () => {
    return true;
  };
}
