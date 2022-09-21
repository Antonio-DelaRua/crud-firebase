import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCarComponent } from './components/create-car/create-car.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ListCarComponent } from './components/list-car/list-car.component';

const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home',component: HomePageComponent},
  { path:'list-car', component: ListCarComponent},
  { path:'create-car', component: CreateCarComponent},
  { path:'**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
