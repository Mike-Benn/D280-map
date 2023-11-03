import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [MapService]

})
export class MapComponent implements OnInit {
  
  constructor(private mapService: MapService , private http: HttpClient) {}

  countryName: string = '';
  capital: string = '';
  region: string = '';
  incomeLevel: string = '';
  latitude: string = '';
  longitude: string = '';
  url: string = `http://api.worldbank.org/v2/country/${this.mapService.id}?format=json`;

  ngOnInit(){
    this.fetchCountry();
  }

  private fetchCountry() {
    this.http.get(`http://api.worldbank.org/v2/country/us?format=json`)
    .subscribe((result: any) => {
      let res: {adminregion: object, capitalCity: string, id: string, incomeLevel: {id: string, iso2code: string, value: string}, iso2Code: string, latitude: string, lendingType: object, longitude: string, name: string, region: string} = (result[1])[0];
      this.countryName = res.name;
      this.capital = res.capitalCity;
      this.region = res.region;
      this.incomeLevel = res.incomeLevel.value
      this.latitude = res.latitude
      this.longitude = res.longitude;
      console.log(this.incomeLevel);
    })
  }

  onMouseClick(id: string) {
    this.mapService.onCountryClick(id);
  }
  
  
 
  
  

  

 



}
