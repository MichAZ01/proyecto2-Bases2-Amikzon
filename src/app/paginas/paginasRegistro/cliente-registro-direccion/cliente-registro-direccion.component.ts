import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../../_modelos/cliente.model';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistroUsuariosService } from '../../../_services/registro-service/registro-usuarios.service'

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
  direccionExactaVacia: Boolean = false;
  link: String = "perfil-cliente-informacionPersonal";

  constructor(public registroUsuariosService: RegistroUsuariosService,
    private router: Router, public route: ActivatedRoute) { }


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
    else{
      this.coordenadasObtenidas = false;
    }
  }

  validarCampoDireccion(direccionExacta:String){
    this.direccionExactaVacia = (direccionExacta == "") ? true : false;

    this.coordenadasObtenidas = (this.latitude != undefined && this.longitude != undefined) ? true : false;
  }

  obtenerCamposRegistro() {
    var direccionExacta = (<HTMLSelectElement>document.getElementById("campo-direccion-exacta")).value;

    this.validarCampoDireccion(direccionExacta);

    if(!this.direccionExactaVacia && this.coordenadasObtenidas){
      this.router.navigate([this.link]);
    }
  }

}
