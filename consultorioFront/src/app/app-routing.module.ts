import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MedicosComponent} from "./components/medicos/medicos.component";
import {CadastrarMedicoComponent} from "./components/cadastrar-medico/cadastrar-medico.component";
import {CadastrarPacienteComponent} from "./components/cadastrar-paciente/cadastrar-paciente.component";
import {PacientesComponent} from "./components/pacientes/pacientes.component";
import {CadastrarConsultaComponent} from "./components/cadastrar-consulta/cadastrar-consulta.component";
import {ConsultasComponent} from "./components/consultas/consultas.component";

import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { BoardUserComponent } from "./components/board-user/board-user.component";
import { BoardAdminComponent } from "./components/board-admin/board-admin.component";
import { BoardModeratorComponent } from "./components/board-moderator/board-moderator.component";

const routes: Routes = [
  {path: 'medicos', component: MedicosComponent},
  {path: 'medicos/cadastrar/:id', component: CadastrarMedicoComponent},
  {path: 'cadastrarMedicos', component: CadastrarMedicoComponent},
  {path: 'pacientes/cadastrar/:id', component: CadastrarPacienteComponent},
  {path: 'cadastrarPacientes', component: CadastrarPacienteComponent},
  {path: 'pacientes', component: PacientesComponent},
  {path: 'cadastrarConsultas', component: CadastrarConsultaComponent},
  {path: 'consultas', component: ConsultasComponent},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
