import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Appointment } from './appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private readonly _appointments = new BehaviorSubject<Appointment[]>([]);
  readonly appointments$ = this._appointments.asObservable();

  private nextId = 1;

  addAppointment(input: Omit<Appointment, 'id' | 'createdAt'>): void {
    const appointment: Appointment = {
      ...input,
      id: this.nextId++,
      createdAt: new Date().toISOString()
    };

    const current = this._appointments.getValue();
    this._appointments.next([...current, appointment]);
  }

  deleteAppointment(id: number): void {
    const current = this._appointments.getValue();
    this._appointments.next(current.filter(a => a.id !== id));
  }

  clearAll(): void {
    this._appointments.next([]);
    this.nextId = 1;
  }
}
