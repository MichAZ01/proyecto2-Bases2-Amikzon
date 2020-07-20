import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
//import { getProductos } from '../../graphql/queries/queries/queries.module';
//import { Producto } from '../../graphql/types/types/types.module';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  constructor(private apollo: Apollo) {
    
  }
  
  

}