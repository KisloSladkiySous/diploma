import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RootComponent } from './components/root-component/root/root.component';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    LoginComponent,
    RootComponent,
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    LoginComponent,
    MatCardModule,
    AppRoutingModule,
    MatButtonModule
  ]
})
export class SharedModule { }
