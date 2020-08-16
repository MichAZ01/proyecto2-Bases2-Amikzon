import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Cliente } from 'src/app/_modelos/cliente.model';
import { tick } from '@angular/core/testing';
//import { getProductos } from '../../graphql/queries/queries/queries.module';
//import { Producto } from '../../graphql/types/types/types.module';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {
  catalogoClientes: Cliente[] = [];

  constructor(private apollo: Apollo) {
    let cliente1: Cliente = new Cliente("Luis2011", "Luis1234", "Física", "116930497", "cliente" );
    cliente1.guardarInformacionPersonal("Luis", "Molina", "Juárez", "20-11-1996", "61638663", "62055706");
    cliente1.guardarDireccion("Limón", "Limón", "Limón", "Costado sur del TEC", -1, -1);
    this.catalogoClientes.push(cliente1);

    let cliente2: Cliente = new Cliente("Vale1312", "Vale1234", "Física", "703130068", "cliente" );
    cliente2.guardarInformacionPersonal("Valerie", "Alvarado", "Zúñiga", "13-12-2004", "61911370", "62055706");
    cliente2.guardarDireccion("Limón", "Guácimo", "Guácimo", "Calle Río Seco", -1, -1);
    this.catalogoClientes.push(cliente2);

    let cliente3: Cliente = new Cliente("Karol03", "Carol0307", "Física", "401720757", "cliente" );
    cliente3.guardarInformacionPersonal("Carol", "Zúñiga", "Flores", "03-07-1980", "88112193", "62055706");
    cliente3.guardarDireccion("Limón", "Guácimo", "Río Jiménez", "Después del Río Platanal", -1, -1);
    this.catalogoClientes.push(cliente3);

    let cliente4: Cliente = new Cliente("Hancel04", "Hancel0410", "Física", "502790955", "cliente" );
    cliente4.guardarInformacionPersonal("Hancel", "Alvarado", "Briones", "04-10-1974", "62803949", "62055706");
    cliente4.guardarDireccion("Limón", "Guácimo", "Guácimo", "Después de Minisuper, Calle Río Seco", -1, -1);
    this.catalogoClientes.push(cliente4);
  }

  ordenarListaClientesPorNombre(reverse: boolean){
    if(!reverse) this.catalogoClientes.sort((a, b) => (a.getNombre() > b.getNombre()) ? 1 : -1)
    else this.catalogoClientes.sort((a, b) => (a.getNombre() < b.getNombre()) ? 1 : -1)
  }

}