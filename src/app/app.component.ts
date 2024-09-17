import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CreateAccComponent } from './create-acc/create-acc.component';
import { FoodnwasteformComponent } from './foodnwasteform/foodnwasteform.component';
import { GadgetComponent } from './gadget/gadget.component';
import { ReminderFormComponent } from './reminder-form/reminder-form.component';
import { ReminderListComponent } from './reminder-list/reminder-list.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { TravelComponent } from './travel/travel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,ReminderFormComponent,ReminderListComponent,CreateAccComponent,SignInComponent,FoodnwasteformComponent,GadgetComponent,TravelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tod-list';
}
