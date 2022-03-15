import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddComponent } from './users/add/add.component';
import { DeleteComponent } from './users/delete/delete.component';
import { ListComponent } from './users/list/list.component';
import { UpdateComponent } from './users/update/update.component';
import { ViewComponent } from './users/view/view.component';

const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'users',
    children:[
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'view/:id',
        component: ViewComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'update',
        component: UpdateComponent
      },
      {
        path: 'delete',
        component: DeleteComponent
      },
      {
        path: 'create',
        component: AddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
