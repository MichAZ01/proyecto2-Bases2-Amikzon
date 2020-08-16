import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

import { SafePipe } from './safe.pipe';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

import {GoogleMapsModule} from '@angular/google-maps'; 

import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { EncabezadoPrincipalComponent } from './encabezados/encabezado-principal/encabezado-principal.component';
import { PaginaPrincipalComponent } from './paginas/pagina-principal/pagina-principal.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { PaginaIniciarSesionComponent } from './paginas/pagina-iniciar-sesion/pagina-iniciar-sesion.component';
import { EncabezadoInicioSesionComponent } from './encabezados/encabezado-inicio-sesion/encabezado-inicio-sesion.component';
import { PaginaRegistroPrincipalComponent } from './paginas/paginasRegistro/pagina-registro-principal/pagina-registro-principal.component';
import { EncabezadoPaginaRegistroComponent } from './encabezados/encabezado-pagina-registro/encabezado-pagina-registro.component';
import { PaginaRegistroInformacionPersonalComponent } from './paginas/paginasRegistro/pagina-registro-informacion-personal/pagina-registro-informacion-personal.component';
import { InformacionPersonalVendedorComponent } from './paginas/paginas-perfiles/perfil-vendedor/informacion-personal-vendedor/informacion-personal-vendedor.component';
import { InformacionPersonalClienteComponent } from './paginas/paginas-perfiles/perfil-cliente/informacion-personal-cliente/informacion-personal-cliente.component';
import { InformacionPersonalCorporativoComponent } from './paginas/paginas-perfiles/perfil-corporativo/informacion-personal-corporativo/informacion-personal-corporativo.component';
import { ClienteRegistroDireccionComponent } from './paginas/PaginasRegistro/cliente-registro-direccion/cliente-registro-direccion.component';
import { CorporativoRegistroHorarioComponent } from './paginas/PaginasRegistro/corporativo-registro-horario/corporativo-registro-horario.component';
import { EncabezadoVendedorComponent } from './encabezados/encabezado-vendedor/encabezado-vendedor.component';
import { EncabezadoClienteComponent } from './encabezados/encabezado-cliente/encabezado-cliente.component';
import { EncabezadoCorporativoComponent } from './encabezados/encabezado-corporativo/encabezado-corporativo.component';
import { BuscarProductosComponent } from './paginas/paginas-perfiles/perfil-vendedor/buscar-productos/buscar-productos.component';
import { PaginaProductosVisitanteComponent } from './paginas/pagina-productos-visitante/pagina-productos-visitante.component';
import { BuscarProductosClienteComponent } from './pages/perfil-cliente-/buscar-productos-cliente/buscar-productos-cliente.component';
import { EncabezadoClienteProductosComponent } from './encabezados/encabezado-cliente-productos/encabezado-cliente-productos.component';
import { FacturarProductosClienteComponent } from './pages/perfil-vendedor-/facturar-productos-cliente/facturar-productos-cliente.component';
import { CatalogoProductosComponent } from './paginas/perfil-vendedor/catalogo-productos/catalogo-productos.component';
import { CatalogoClientesComponent } from './paginas/paginas-perfiles/perfil-vendedor/catalogo-clientes/catalogo-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoPrincipalComponent,
    PaginaPrincipalComponent,
    PiePaginaComponent,
    PaginaIniciarSesionComponent,
    EncabezadoInicioSesionComponent,
    PaginaRegistroPrincipalComponent,
    EncabezadoPaginaRegistroComponent,
    PaginaRegistroInformacionPersonalComponent,
    InformacionPersonalVendedorComponent,
    InformacionPersonalClienteComponent,
    InformacionPersonalCorporativoComponent,
    ClienteRegistroDireccionComponent,
    CorporativoRegistroHorarioComponent,
    EncabezadoVendedorComponent,
    EncabezadoClienteComponent,
    EncabezadoCorporativoComponent,
    SafePipe,
    BuscarProductosComponent,
    PaginaProductosVisitanteComponent,
    BuscarProductosClienteComponent,
    EncabezadoClienteProductosComponent,
    FacturarProductosClienteComponent,
    CatalogoProductosComponent,
    CatalogoClientesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OrderModule,
    NgxPaginationModule,
    GoogleMapsModule,
    FormsModule,
    GraphQLModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
