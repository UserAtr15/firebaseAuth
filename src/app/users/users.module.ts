import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { DeleteComponent } from './delete/delete.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [
    ListComponent,
    ViewComponent,
    DeleteComponent,
    AddComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
