import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Appointment } from '../appointment.model';
import { AppointmentService } from '../appointment.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {
  appointments$: Observable<Appointment[]>;

  constructor(private appointmentService: AppointmentService) {
    this.appointments$ = this.appointmentService.appointments$;
  }

  delete(id: number): void {
    this.appointmentService.deleteAppointment(id);
  }

  clearAll(): void {
    this.appointmentService.clearAll();
  }
}
