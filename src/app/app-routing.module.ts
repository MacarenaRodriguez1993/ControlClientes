import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { EditarClienteComponent } from './componentes/editar-cliente/editar-cliente.component';
import { LoginComponent } from './componentes/login/login.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { TableroComponent } from './componentes/tablero/tablero.component';

const routes: Routes = [
  {path:'',component:TableroComponent, canActivate: [AuthGuardGuard]},
  {path:'login', component:LoginComponent},
  {path:'registrarse',component: RegistroComponent},
  {path:'configuracion', component: ConfiguracionComponent, canActivate: [AuthGuardGuard]},
  {path:'cliente/editar/:id',component: EditarClienteComponent, canActivate: [AuthGuardGuard]},
  {path:'**',component: NoEncontradoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
