import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { User } from '../../servicios/auth/user';

import { environment } from '../../../environments/environment.prod';

import { CommonModule } from '@angular/common';
import { LoginService, UserService } from '../../servicios/service.index';

 

@Component({
  selector: 'app-personal-details',
  standalone: true,
  imports: [
    CommonModule,
    
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent  {
  errorMessage:String="";
  user?:User;
  userLoginOn:boolean=false;
  editMode:boolean=false;

  formBuilder!: FormBuilder; // Declaración de la propiedad
  registerForm!: FormGroup; // Declaración del formulario
 

  constructor(
    private userService:UserService, 
   // private formBuilder:FormBuilder,
    private fb: FormBuilder,

    private loginService:LoginService 
  
  ){
    this.userService.getUser(environment.userId).subscribe({
      next: (userData) => {
        this.user=userData;
        this.registerForm.controls['id'].setValue(userData.id.toString());
        this.registerForm.controls['firstname'].setValue( userData.firstname);
        this.registerForm.controls['lastname'].setValue( userData.lastname);
        this.registerForm.controls['country'].setValue( userData.country);
      },
      error: (errorData) => {
        this.errorMessage=errorData
      },
      complete: () => {
        console.info("User Data ok");
      }
    })

    this.loginService.userLoginOn.subscribe({
      next:(userLoginOn: boolean) => {
        this.userLoginOn=userLoginOn;
      }
    })
    
  }

  ngOnInit(): void {
    this.initializeForm(); // Llama a la función para inicializar el formulario
  }

  private initializeForm(): void {
    this.registerForm =this.formBuilder.group({
      id:[''],
      lastname:['',Validators.required],
      firstname:['', Validators.required],
      country:['',Validators.required]
    });

    // Suscribirse a los cambios del formulario
    this.registerForm.valueChanges.subscribe(console.log);
  }

  get firstname()
  {
    return this.registerForm.controls['firstname'];
  }

  get lastname()
  {
    return this.registerForm.controls['lastname'];
  }

  get country()
  {
    return this.registerForm.controls['country'];
  }

  savePersonalDetailsData()
  {
    if (this.registerForm.valid)
    {
      this.userService.updateUser(this.registerForm.value as unknown as User).subscribe({
        next:() => {
          this.editMode=false;
          this.user=this.registerForm.value as unknown as User;
        },
        error:(errorData)=> console.error(errorData)
      })
    }
  }

}
