import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaPrincipalComponent } from './paginas/pagina-principal/pagina-principal.component';
import { PaginaIniciarSesionComponent } from './paginas/pagina-iniciar-sesion/pagina-iniciar-sesion.component';
import { PaginaRegistroPrincipalComponent } from './paginas/paginasRegistro/pagina-registro-principal/pagina-registro-principal.component'
import { PaginaRegistroInformacionPersonalComponent } from './paginas/paginasRegistro/pagina-registro-informacion-personal/pagina-registro-informacion-personal.component';
import { InformacionPersonalClienteComponent } from './paginas/paginas-perfiles/perfil-cliente/informacion-personal-cliente/informacion-personal-cliente.component';
import { InformacionPersonalVendedorComponent } from './paginas/paginas-perfiles/perfil-vendedor/informacion-personal-vendedor/informacion-personal-vendedor.component';
import { InformacionPersonalCorporativoComponent } from './paginas/paginas-perfiles/perfil-corporativo/informacion-personal-corporativo/informacion-personal-corporativo.component';
import { ClienteRegistroDireccionComponent } from './paginas/PaginasRegistro/cliente-registro-direccion/cliente-registro-direccion.component';
import { CorporativoRegistroHorarioComponent } from './paginas/PaginasRegistro/corporativo-registro-horario/corporativo-registro-horario.component';
import { BuscarProductosComponent } from './paginas/paginas-perfiles/perfil-vendedor/buscar-productos/buscar-productos.component';

const routes: Routes = [
  {path: '', component: PaginaPrincipalComponent},
  {path: 'iniciarSesion', component: PaginaIniciarSesionComponent},
  {path: 'registro', component: PaginaRegistroPrincipalComponent},
  {path: 'registro-informacion-personal', component: PaginaRegistroInformacionPersonalComponent},
  {path: 'perfil-cliente-informacionPersonal', component: InformacionPersonalClienteComponent},
  {path: 'perfil-vendedor-informacionPersonal', component: InformacionPersonalVendedorComponent},
  {path: 'perfil-corporativo-informacionPersonal', component: InformacionPersonalCorporativoComponent},
  {path: 'registro-direccion', component: ClienteRegistroDireccionComponent},
  {path: 'registro-horario', component: CorporativoRegistroHorarioComponent},
  {path: 'buscar-productos-vendedor', component: BuscarProductosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: true
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
