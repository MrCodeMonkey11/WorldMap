import { Component } from '@angular/core';
import { WorldBankApiClient } from '../api/client/worldbank.client'

@Component({
  selector: 'app-world',
  standalone: true,
  imports: [],
  templateUrl: './world.component.html',
  styleUrl: './world.component.css'
})
export class WorldComponent {
  info: any = {};

  constructor (private worldBankApiClient: WorldBankApiClient) {}

  setCountryInfo(event: any) {
    console.log('event', event.target.getAttribute('id'));
    this.worldBankApiClient.setCountryInfo(event.target.getAttribute('id')).subscribe((data: any) => {
      this.info = {
        ...data,
        state: event.target.getAttribute('id')
      }
    })
  }
}
