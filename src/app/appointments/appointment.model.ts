export interface Appointment {
  id: number;
  patientName: string;
  doctor: string;
  date: string;      // ISO date string
  time: string;      // e.g. "10:30"
  reason: string;
  createdAt: string; // ISO datetime string
}
