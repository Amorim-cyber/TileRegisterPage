import { SuccessComponent } from './success/success.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'RegistreSeuPedido',
    pathMatch: 'full'
  },
  {
    path: 'RegistreSeuPedido',
    children:[
      {
        path: '',
        component: FormsComponent
      },
      {
        path: 'Sucesso/:name/:phone/:address/:model/:width/:height',
        children:[
          {
            path: '',
            component: SuccessComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
