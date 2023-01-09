import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoFormComponent } from './info-form/info-form.component';
import { ListaFormComponent } from './lista-form/lista-form.component';
import { MenuFormComponent } from './menu-form/menu-form.component';

const routes: Routes = [
  {path:'', component:MenuFormComponent},
  {path:'info-form', component:InfoFormComponent},
  {path:'lista-form', component:ListaFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [ListaFormComponent,MenuFormComponent,InfoFormComponent];
