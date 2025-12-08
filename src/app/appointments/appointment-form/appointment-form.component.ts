import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.css'
})
export class AppointmentFormComponent {
  appointmentForm: FormGroup;
  submitted = false;

  doctors = [
    'Dr. Smith – Cardiologist',
    'Dr. Johnson – Dermatologist',
    'Dr. Lee – Dentist',
    'Dr. Patel – General Physician'
  ];

  constructor(
    private fb: FormBuilder,
    private appointmentService: AppointmentService,
    private router: Router
  ) {
    this.appointmentForm = this.fb.group({
      patientName: ['', [Validators.required, Validators.minLength(3)]],
      doctor: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      reason: ['', [Validators.required, Validators.maxLength(200)]]
    });
  }

  get f() {
    return this.appointmentForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.appointmentForm.invalid) {
      return;
    }

    this.appointmentService.addAppointment(this.appointmentForm.value);
    this.appointmentForm.reset();
    this.submitted = false;

    // Navigate to list view after booking
    this.router.navigate(['/appointments']);
  }
}
