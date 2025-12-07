import { bootstrapApplication } from '@angular/platform-browser';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h3>Lists</h3>
    <ul>
      @for (item of items(); let i = $index; track item) {
        <li>{{ i + 1 }}. {{ item }}</li>
      } @empty {
        <li>No items</li>
      }
    </ul>
    <button (click)="add()">Add Item</button>
    <button (click)="clear()">Clear</button>
    <button (click)="reset()">Reset</button>
  `
})
export class App {
  items = signal(['Angular', 'React', 'Vue']);
  add() { this.items.update(arr => [...arr, 'Svelte']); }
  clear() { this.items.set([]); }
  reset() { this.items.set(['Angular', 'React', 'Vue']); }
}

bootstrapApplication(App);