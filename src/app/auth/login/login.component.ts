
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { signal } from '@angular/core';


import { FormsModule } from '@angular/forms';



import { LoginRequest } from '../../servicios/auth/loginRequest';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../servicios/service.index';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [    
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
[x: string]: any;
  loginError:string="";
  formBuilder!: FormBuilder; // Declaración de la propiedad
  loginForm!: FormGroup; // Declaración del formulario
  isLoggedIn: any;

 
  constructor(private fb: FormBuilder,
   
     private router:Router
    , private loginService: LoginService
  ) {
    this.formBuilder = fb; // Initialization de formBuilder

   }


  ngOnInit(): void {
    this.initializeForm(); // Llama a la función para inicializar el formulario
  }

  private initializeForm(): void {
    this.loginForm = this.formBuilder.group({

      username:['',[Validators.required,Validators.email]],
      password: ['', [Validators.required]],

      isLoggedIn: signal(false)
    });

    // Suscribirse a los cambios del formulario
    this.loginForm.valueChanges.subscribe(console.log);
  }


  get email(){
    return this.loginForm.controls['username'];
  }

  get password()
  {
    return this.loginForm.controls['password'];
  }

  login(){
    if(this.loginForm.valid){
      this.loginError="";
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData) => {
          console.log(userData);
        },
        error: (errorData) => {
          console.error(errorData);
          this.loginError=errorData;
        },
        complete: () => {
          console.info("Login completo");
          this.router.navigateByUrl('/dashboard');
          this.loginForm.reset();
        }
      })

      this.isLoggedIn.set(true); 
    }
    else{
      this.loginForm.markAllAsTouched();
      alert("Error al ingresar los datos.");
    }
  }

}
