import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-registro-direccion',
  templateUrl: './cliente-registro-direccion.component.html',
  styleUrls: ['./cliente-registro-direccion.component.scss']
})
export class ClienteRegistroDireccionComponent implements OnInit {
  latitude: number;
  longitude: number;
  zoom:number;
  mapUrl: string = "";
  coordenadasObtenidas: Boolean = false;
  constructor() { }


  ngOnInit(): void {
    this.setCurrentLocation();
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
        this.mapUrl = "https://maps.google.com/maps?q=";
        this.mapUrl += (this.latitude + ",");
        this.mapUrl += (this.longitude+"&hl=es;z=14&amp;&output=embed");
        this.coordenadasObtenidas = true;
        console.log(this.mapUrl);
      });
    }
  }

}
