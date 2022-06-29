import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RootComponent } from './components/root-component/root/root.component';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { ApiService } from '../core/services/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    LoginComponent,
    RootComponent,
  
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule

  ],
  exports: [
    LoginComponent,
    MatCardModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ApiService
  ]
})
export class SharedModule { }
