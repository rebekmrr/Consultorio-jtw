import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicosComponent } from './medicos/medicos.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {FlexLayoutModule} from "@angular/flex-layout";
import { CadastrarMedicoComponent } from './cadastrar-medico/cadastrar-medico.component';
import { CadastrarPacienteComponent } from './cadastrar-paciente/cadastrar-paciente.component';
import {RouterModule} from "@angular/router";
import { CadastrarConsultaComponent } from './cadastrar-consulta/cadastrar-consulta.component';
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {PipesModule} from "../pipes/pipes.module";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDividerModule} from "@angular/material/divider";
import { ConsultasComponent } from './consultas/consultas.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';




@NgModule({
  declarations: [
    MedicosComponent,
    PacientesComponent,
    CadastrarMedicoComponent,
    CadastrarPacienteComponent,
    CadastrarConsultaComponent,
    ConsultasComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    FlexLayoutModule,
    RouterModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    PipesModule,
    MatSnackBarModule,
    MatDividerModule
  ],
})
export class ComponentsModule { }
