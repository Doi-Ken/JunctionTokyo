import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PictureComponent } from './picture/picture.component';
import { InputComponent } from './input/input.component';


const routes: Routes = [
  {path: 'picture', component: PictureComponent},
  {path: '', component: InputComponent},
  {path: 'input', component: InputComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
