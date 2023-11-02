import { Component } from '@angular/core';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [MapService]

})
export class MapComponent {
  constructor(private mapService: MapService) {}
  
  onMouseClick(id: string) {
    this.mapService.onCountryClick(id);
  }
  
 
  
  

  

 



}
