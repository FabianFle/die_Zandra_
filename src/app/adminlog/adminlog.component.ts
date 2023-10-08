import { Component } from '@angular/core';

@Component({
  selector: 'app-adminlog',
  templateUrl: './adminlog.component.html',
  styleUrls: ['./adminlog.component.scss']
})
export class AdminlogComponent {
  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false; // Zustand, ob der Benutzer eingeloggt ist

  // Hier kannst du den Benutzernamen und das Passwort ändern
  private correctUsername: string = 'adminFabian';
  private correctPassword: string = 'adminFabian';

  login() {
    if (this.username === this.correctUsername && this.password === this.correctPassword) {
      console.log('Erfolgreich eingeloggt!');
      this.isLoggedIn = true; // Benutzer ist eingeloggt
    } else {
      alert('Falscher Benutzername oder Passwort');
    }
  }

  logout() {
    this.isLoggedIn = false; // Benutzer ist abgemeldet
  }
}
