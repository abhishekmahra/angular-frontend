import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  locations: string[] = ['Hayward', 'Oakland', '+2 more...'];
  selectedLocation: string = this.locations.join(', ');
}

