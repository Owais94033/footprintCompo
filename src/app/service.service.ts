import { Injectable } from '@angular/core';
import { Reminder } from './reminder';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  idCounter : number = 1;
  reminders : Reminder[]=[];

  addReminder(reminder : Reminder): void {
    reminder.id = this.idCounter++;
    this.reminders.push(reminder);
    console.log(reminder);
  }

  getRemindersArr(): Reminder[] {
    return this.reminders;
  }



  constructor() { }
}
