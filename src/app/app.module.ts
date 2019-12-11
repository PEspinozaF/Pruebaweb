import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    SucursalesComponent,
    ClientesComponent,
    HabitacionesComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
