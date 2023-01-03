import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaseComponent } from './views/clase/clase.component';
import { CreateComponent } from './views/create/create.component';
import { FormularioComponent } from './views/formulario/formulario.component';
import { NotasComponent } from './views/notas/notas.component';
import { SalonComponent } from './views/salon/salon.component';
import { SesionComponent } from './views/sesion/sesion.component';

const routes: Routes = [
  {
    path: 'clase',
    component: ClaseComponent,
  },
  {
    path: 'settingSchool',
    component: CreateComponent,
  },
  {
    path: 'evaluacion',
    component: FormularioComponent,
  },
  {
    path: 'notas',
    component: NotasComponent,
  },
  {
    path: 'salon',
    component: SalonComponent,
  },
  {
    path: 'sesion',
    component: SesionComponent,
  },
  {
    path: '**',
    redirectTo: 'salon',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolRoutingModule {}
