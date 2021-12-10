import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxMainpageComponent } from './boxMainpage/box-mainpage.component';

const routes: Routes = [
  {path:'', component: BoxMainpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
