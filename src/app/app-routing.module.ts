import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {newsRoutes} from '../app/modules/news/news-routing.module'
import { LoginComponent } from './modules/shared/components/login/login.component';
const routes: Routes = [
  { path: "login", component: LoginComponent},
  { path: "news", children: [...newsRoutes],},
  { path: "**", redirectTo: "news" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
