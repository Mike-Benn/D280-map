import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  
  getPathId(event: MouseEvent , pathId: string) : string {
    console.log(`${pathId}`)
    return pathId;
    
  }


 



}
