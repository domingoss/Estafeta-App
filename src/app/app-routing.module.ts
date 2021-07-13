import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

import { EstafetaComponent } from './estafeta/estafeta.component';

const routes: Routes =[
 //add as rotas
  {path: 'estafeta', component: EstafetaComponent }
];

@NgModule({
  
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
   
})


export class AppRoutingModule {}