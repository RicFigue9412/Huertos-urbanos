import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { HuertoComponent } from './components/huerto/huerto.component';
import { PlantaComponent } from './components/planta/planta.component';
import { SensorComponent } from './components/sensor/sensor.component';
import { ComunidadComponent } from './components/comunidad/comunidad.component';
import { TareaComponent } from './components/tareas-huerto/tareas-huerto.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'huertos', component: HuertoComponent },
  { path: 'plantas', component: PlantaComponent },
  { path: 'sensores', component: SensorComponent },
  { path: 'comunidad', component: ComunidadComponent },
  { path: 'tareas', component: TareaComponent },
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}