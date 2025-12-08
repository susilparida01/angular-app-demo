import { Routes } from '@angular/router';
import { AppointmentFormComponent } from './appointments/appointment-form/appointment-form.component';
import { AppointmentListComponent } from './appointments/appointment-list/appointment-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'book', pathMatch: 'full' },
  { path: 'book', component: AppointmentFormComponent, title: 'Book Appointment' },
  { path: 'appointments', component: AppointmentListComponent, title: 'Appointments' },
  { path: '**', redirectTo: 'book' }
];
