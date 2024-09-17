import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Reminder } from '../reminder';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-reminder-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reminder-form.component.html',
  styleUrl: './reminder-form.component.css'
})
export class ReminderFormComponent {
  service = inject(ServiceService);
  reminderText: string = '';
  reminderCreated: boolean = false;
  
  addReminder(event : KeyboardEvent){
    if(event.key=='Enter' && this.reminderText){
      let reminder = new Reminder(0, this.reminderText, false);
      let response = this.service.addReminder(reminder);
      this.reminderText=''; 
    }
  }

  

}
