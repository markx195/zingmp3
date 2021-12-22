import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxContentComponent } from './box-content/box-content.component';
import { BoxMainpageComponent } from './boxMainpage/box-mainpage.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  {path:'', component: BoxMainpageComponent},
  // {path:'', component: BoxContentComponent},
  {path: 'detail', component: DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
