import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DefaultBodyComponent } from '../shared/default-body/default-body.component';

@Component({
  standalone: true,
  imports: [CommonModule, DefaultBodyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  


}
