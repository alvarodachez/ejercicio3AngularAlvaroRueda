import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FechaComponent } from './components/fecha/fecha.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  {
    path: '',
    component: FechaComponent,
  },
  {
    path: 'formulario',
    component: FormularioComponent,
  },
  {
    path: 'fecha',
    component: FechaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
