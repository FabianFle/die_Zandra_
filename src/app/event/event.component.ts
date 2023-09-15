import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  endDate: string = '2023-09-15'; // Hier das Enddatum eintragen
  endTime: string = '21:00'; // Hier die Endzeit eintragen
  countdown: string;
  countdownActive: boolean = false;
  countdownInterval: any;
  endDateAndTime: any;

  ngOnInit() {
    this.startCountdown();
  }

  startCountdown() {
    if (this.endDate && this.endTime) {
      const endDateAndTime = new Date(
        this.endDate + 'T' + this.endTime
      ).getTime(); // Zeit in Millisekunden
      const now = new Date().getTime(); // Aktuelle Zeit in Millisekunden

      if (endDateAndTime > now) {
        this.countdownInterval = setInterval(() => {
          const timeRemaining = endDateAndTime - now;
          if (timeRemaining <= 0) {
            clearInterval(this.countdownInterval);
            this.countdown = 'Countdown abgelaufen!';
            this.countdownActive = false;
          } else {
            const seconds = Math.floor((timeRemaining / 1000) % 60);
            const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
            const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

            // Führende Nullen hinzufügen, wenn die Werte kleiner als 10 sind
            const formattedDays = this.formatNumberWithLeadingZero(days);
            const formattedHours = this.formatNumberWithLeadingZero(hours);
            const formattedMinutes = this.formatNumberWithLeadingZero(minutes);
            const formattedSeconds = this.formatNumberWithLeadingZero(seconds);

            this.countdown = `${formattedDays}:${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
            this.countdownActive = true;
          }
        }, 1000);
      }
    }
  }

  // Hilfsfunktion zur Formatierung von Zahlen mit führenden Nullen
  formatNumberWithLeadingZero(number: number): string {
    return number < 10 ? '0' + number : number.toString();
  }
}
