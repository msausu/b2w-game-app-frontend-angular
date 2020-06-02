import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'b2w-game-frontend-angular';
  shouldRun = true;
  showFiller = false;
  events: string[] = [];
  opened: boolean;
}

