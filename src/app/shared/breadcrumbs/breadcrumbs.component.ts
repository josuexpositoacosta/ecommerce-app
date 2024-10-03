import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { ActivationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [  
    RouterOutlet,
    FormsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit {
      titulo!: string ;
  constructor(private router: Router, private title: Title, private meta: Meta){
   
    this.getDataRoute()
    .subscribe(data =>{
       console.log(data)
      // this.titulo = data['titulo'];
     this.title.setTitle(this.titulo); 

     const metaTab: MetaDefinition = {
        name: 'description',
        content: this.titulo
     };
     this.meta.updateTag(metaTab);
    });
    
   }

  ngOnInit(): void {
  }

    getDataRoute(){
      return  this.router.events.pipe(
        filter( evento  => evento instanceof ActivationEnd ),
       
      ); 
      
    }

}
