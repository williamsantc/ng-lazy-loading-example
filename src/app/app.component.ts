import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-lazy-loading';
  constructor(private readonly someService: SomeService) {
  }
}

@Injectable({providedIn: 'root'})
class SomeService {
  constructor(private readonly someService: SomeOtherService) { }
}

@Injectable({providedIn: 'root'})
class SomeOtherService {
  constructor(private readonly someService: SomeService) {
  }

}
