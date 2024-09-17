import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Reminder } from '../reminder';
import { ReminderComponent } from '../reminder/reminder.component';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-reminder-list',
  standalone: true,
  imports: [ReminderComponent,NgFor],
  templateUrl: './reminder-list.component.html',
  styleUrl: './reminder-list.component.css'
})
export class ReminderListComponent {
  service = inject(ServiceService)
  reminders: Reminder[] = this.service.getRemindersArr();

  
}
