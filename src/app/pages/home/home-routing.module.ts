import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'init',
    component: HomeComponent,
  },
  {
    path: 'school',
    loadChildren: () =>
      import('../school/school.module').then((m) => m.SchoolModule),
  },
  {
    path: '**',
    redirectTo: 'init',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
