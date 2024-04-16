import { Component } from '@angular/core';
import { WorldBankClient } from '../api/client/worldbank.client';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-world',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './world.component.html',
  styleUrl: './world.component.css'
})
export class WorldComponent {
  info: any = {};

  constructor (private worldBankClient: WorldBankClient) {}

  setCountryInfo(event: any) {
    console.log('event', event.target.getAttribute('id'));
    this.worldBankClient.getCountryInfo(event.target.getAttribute('id')).subscribe((data: any) => {
      this.info = {
        ...data,
        Country: event.target.getAttribute('title')
      }
    })
  }
}
