import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';
import { SalonComponent } from './views/salon/salon.component';
import { ClaseComponent } from './views/clase/clase.component';
import { SesionComponent } from './views/sesion/sesion.component';
import { CreateComponent } from './views/create/create.component';
import { NotasComponent } from './views/notas/notas.component';
import { FormularioComponent } from './views/formulario/formulario.component';

@NgModule({
  declarations: [SalonComponent, ClaseComponent, SesionComponent, CreateComponent, NotasComponent, FormularioComponent],
  imports: [CommonModule, SchoolRoutingModule],
})
export class SchoolModule {}
