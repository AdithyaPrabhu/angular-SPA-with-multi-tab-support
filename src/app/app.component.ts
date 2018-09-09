import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'localStorage-events';
  name: string;

  ngOnInit(): void {
    localStorage.removeItem('getSessionStorage');
    sessionStorage.removeItem('getSessionStorage');

    window.addEventListener('storage', function (event) {
      if (event.key === 'getSessionStorage') {
        // Some tab asked for the sessionStorage -> send it
        if (sessionStorage.getItem('sessionStorage')) {
          // this tab has the required data
          localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage.getItem('sessionStorage')));
          localStorage.removeItem('sessionStorage');
          localStorage.removeItem('getSessionStorage');
        }
      } else if (event.key === 'sessionStorage' && !sessionStorage.length) {
        // if this tab needs data
        if (event.newValue) {
          this.name = event.newValue;
          sessionStorage.setItem('sessionStorage', this.name);
        }
      }
    });

    if (!sessionStorage.length) {
      // Ask other tabs for session storage
      localStorage.setItem('getSessionStorage', name);
    }
  }

  onInput(): void {
    sessionStorage.setItem('sessionStorage', this.name);
  }
}
