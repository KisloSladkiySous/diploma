import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/modules/core/services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router,
    public route:ActivatedRoute,
    public api:ApiService) {}


    buttonToggle=false
    inputValid=false
    email = new FormControl('');
    password = new FormControl('');
  
    contactsForm!:FormGroup
   
   
  
    ngOnInit(): void {
      this.contactsForm = new FormGroup({
        email: new FormControl(null,[Validators.required,Validators.email]),
        password: new FormControl(null,[Validators.required]),

        })
        console.log(this.contactsForm)
    }
    abv() { 
      console.log(1)
      console.log(this.contactsForm)
      this.router.navigate(['news/main'], { relativeTo: this.route });
      this.api.isAuth = true
    }
  
  
}
