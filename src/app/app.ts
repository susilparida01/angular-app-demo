// src/app/app.ts
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  title = 'Appointment Booking App';

  // 👇 this fixes: Property 'currentYear' does not exist on type 'AppComponent'
  currentYear = new Date().getFullYear();

  // simple flag so NgIf is actually used (removes warning NG8113)
  showHeader = true;
}
